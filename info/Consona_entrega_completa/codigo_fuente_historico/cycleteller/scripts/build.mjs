/**
 * build.mjs — Genera dist/cycleteller.html: la app entera en un solo archivo.
 *
 *   node scripts/build.mjs
 *
 * Para qué sirve: src/ usa módulos de JavaScript, y los navegadores no permiten
 * cargar módulos desde file:// por seguridad. Es decir, src/index.html NO
 * funciona haciendo doble clic; necesita un servidor local.
 *
 * El archivo que genera este script sí funciona haciendo doble clic, porque
 * lleva el CSS y el JS metidos dentro. Es el que hay que pasarle a alguien
 * para que lo pruebe sin instalar nada.
 *
 * Requiere esbuild:  npx esbuild
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const p = (...parts) => join(root, ...parts);

// 1. Empaquetar el JavaScript en un solo bloque sin imports.
const js = execFileSync(
  'npx',
  ['--yes', 'esbuild@0.24.0', p('src/js/main.js'),
   '--bundle', '--format=iife', '--minify=false', '--target=es2020'],
  { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }
);

// 2. Leer los CSS.
const tokens = await readFile(p('src/css/tokens.css'), 'utf8');
const app = await readFile(p('src/css/app.css'), 'utf8');

// 3. Sustituir en el HTML los enlaces externos por el contenido incrustado.
let html = await readFile(p('src/index.html'), 'utf8');

html = html.replace(
  /<link rel="stylesheet" href="\.\/css\/tokens\.css">\s*<link rel="stylesheet" href="\.\/css\/app\.css">/,
  `<style>\n${tokens}\n${app}\n</style>`
);
html = html.replace(
  /<script type="module" src="\.\/js\/main\.js"><\/script>/,
  `<script>\n${js}\n</script>`
);

// Comprobación: si alguna sustitución falló, avisar en vez de generar algo roto.
if (html.includes('<link rel="stylesheet"') || html.includes('type="module"')) {
  console.error('ERROR: el HTML no coincide con lo que espera el build. Revisa src/index.html.');
  process.exit(1);
}

html = html.replace(
  '<title>Cycleteller</title>',
  '<title>Cycleteller</title>\n<!-- ARCHIVO GENERADO. No editar a mano: ' +
  'edita src/ y ejecuta `node scripts/build.mjs`. -->'
);

await mkdir(p('dist'), { recursive: true });
await writeFile(p('dist/cycleteller.html'), html, 'utf8');

const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
console.log(`dist/cycleteller.html generado (${kb} KB).`);
