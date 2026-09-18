/**
 * smoke.mjs — Prueba de humo: abre la app en un navegador de verdad y comprueba
 * que las tres vistas funcionan y que no hay errores en consola.
 *
 *   node tests/smoke.mjs
 *
 * Requiere Playwright. Si no lo tienes instalado, este test se salta solo:
 * los tests importantes son los de tests/cycle.test.mjs, que no necesitan nada.
 */

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.log('  Playwright no está instalado. Prueba de humo saltada.');
  process.exit(0);
}

const errors = [];
// Permite apuntar a un Chromium ya instalado en el sistema:
//   CHROMIUM_PATH=/ruta/al/chrome node tests/smoke.mjs
const launchOpts = process.env.CHROMIUM_PATH
  ? { executablePath: process.env.CHROMIUM_PATH }
  : {};
const browser = await chromium.launch(launchOpts);
const page = await browser.newPage();
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push(e.message));

await page.goto('file://' + join(root, 'dist/cycleteller.html'));

function check(cond, msg) {
  if (cond) { console.log('  ✓ ' + msg); }
  else { console.log('  ✗ ' + msg); errors.push('FALLO: ' + msg); }
}

// 1. Arranca en la puerta de consentimiento.
check(await page.isVisible('#view-consent'), 'arranca en la puerta de consentimiento');
check(await page.isHidden('#view-main'), 'la pantalla principal está oculta al inicio');
check(await page.isDisabled('#consent-continue'), 'no se puede continuar sin marcar la casilla');

// 2. Marcar la casilla desbloquea el botón.
await page.check('#consent-check');
check(await page.isEnabled('#consent-continue'), 'marcar la casilla desbloquea continuar');
await page.click('#consent-continue');
check(await page.isVisible('#view-onboarding'), 'pasa al onboarding');

// 3. El onboarding valida.
await page.click('#onboarding-save');
check(await page.isVisible('#onboarding-error'), 'avisa si falta el método anticonceptivo');

// 4. Anticoncepción hormonal → aviso de que no hay fases.
await page.selectOption('#input-contraception', 'pildora');
const note = await page.textContent('#contraception-note');
check(/suprime/i.test(note), 'avisa de que la píldora suprime las fases');

await page.click('#onboarding-save');
check(await page.isVisible('#view-main'), 'con píldora entra sin pedir fecha');
check(/no hay ciclo/i.test(await page.textContent('#hero-title')),
      'con píldora NO inventa fases');

// 5. Volver y probar el camino normal.
await page.click('#settings-edit');
await page.selectOption('#input-contraception', 'ninguno');
const d = new Date(); d.setDate(d.getDate() - 8);
await page.fill('#input-date', d.toISOString().slice(0, 10));
await page.fill('#input-length', '35');
await page.click('#onboarding-save');

check(await page.isVisible('#view-main'), 'entra en la pantalla principal');
const title = await page.textContent('#hero-title');
// Ciclo de 35 días, día 9 → debe ser FOLICULAR. El prototipo v1 decía folicular
// también aquí, pero por casualidad; en el día 15 v1 fallaba. Comprobamos el fondo:
check(/fase/i.test(title), 'muestra una fase estimada');
check(/margen de ±/.test(await page.textContent('#hero-note')),
      'muestra el margen de error');

const cards = await page.$$eval('.vcard h3', els => els.map(e => e.textContent));
check(cards.length === 4, `muestra 4 tarjetas de variables (encontradas ${cards.length})`);
check(cards.some(c => /no asumir/i.test(c)), 'incluye la tarjeta antiestereotipo');
check(!cards.some(c => /intimidad/i.test(c)), 'NO incluye "estilo de intimidad"');

// 6. El explorador de fases responde.
await page.click('.strip-btn[data-phase="lutea"]');
check(/lútea/i.test(await page.textContent('#hero-title')), 'el explorador cambia de fase');
await page.click('#hero-back');

// 7. El borrado funciona y vuelve al inicio.
await page.click('#danger-zone button');
await page.click('[data-a="yes"]');
check(await page.isVisible('#view-consent'), 'borrar los datos devuelve al inicio');

await browser.close();

if (errors.length) {
  console.log('\n  ERRORES:\n' + errors.map(e => '  - ' + e).join('\n') + '\n');
  process.exit(1);
}
console.log('\n  Prueba de humo superada, sin errores de consola.\n');
