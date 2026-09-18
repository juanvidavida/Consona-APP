# Cycleteller

Webapp educativa en español sobre el ciclo menstrual, dirigida a hombres en
relación de pareja.

**Estado:** prototipo revisado en septiembre de 2026. Hay una decisión de
producto bloqueante sin resolver (ver `docs/02-decisiones.md`, ADR-001).

---

## Empezar aquí

- **Si eres un agente de IA que continúa este proyecto:** lee `HANDOFF.md`.
- **Si quieres entender por qué el código está como está:** `docs/02-decisiones.md`.
- **Si vienes a decidir las variables de la pantalla de inicio:**
  `docs/03-variables-pantalla-inicio.md`.

## Ver la app funcionando

**La forma rápida.** Abre `dist/cycleteller.html` haciendo doble clic. Es la app
entera en un solo archivo, sin instalar nada.

**La forma de desarrollo.** El código de `src/` usa módulos de JavaScript, y los
navegadores no permiten cargarlos desde un archivo local. Hace falta un servidor:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000/src/
```

Después de cambiar algo en `src/`, hay que regenerar el archivo único:

```bash
node scripts/build.mjs
```

## Comprobar que nada se ha roto

```bash
node tests/cycle.test.mjs    # 16 tests del motor. No necesita instalar nada.
node tests/smoke.mjs         # prueba en navegador. Necesita Playwright (opcional).
```

## Estructura

```
├── HANDOFF.md                 Briefing para el siguiente agente de IA
├── README.md                  Este archivo
├── docs/
│   ├── 01-producto.md         Qué es, personas, tensión central
│   ├── 02-decisiones.md       Registro de decisiones (ADR) con fuentes
│   ├── 03-variables-...md     La decisión pendiente de la pantalla de inicio
│   ├── 04-auditoria-...md     Cada afirmación científica, contrastada
│   ├── 05-rgpd.md             Análisis legal
│   ├── 06-backlog.md          Qué hacer, priorizado
│   └── 07-competencia-...md   Mercado y riesgos de diseño
├── src/
│   ├── index.html
│   ├── css/tokens.css         Colores y tipografía
│   ├── css/app.css            Estilos
│   └── js/
│       ├── cycle.js           Motor de cálculo. Puro y testeable.
│       ├── config.js          Interruptores del producto
│       ├── storage.js         localStorage
│       └── main.js            Interfaz
├── data/
│   ├── content.v1.js          Variables originales (para comparar)
│   └── content.v2.js          Variables propuestas (activo)
├── tests/
├── scripts/build.mjs
└── dist/cycleteller.html      Generado. No editar a mano.
```

## Reglas del proyecto

1. **Cero recursos externos.** Ni fuentes, ni CDN, ni iconos, ni analítica de
   terceros. Motivo legal: `docs/05-rgpd.md`.
2. **Los datos del ciclo no salen del navegador.** Nunca al servidor, ni siquiera
   en un evento de analítica.
3. **Un solo perfil de pareja.** No convertirlo en una lista.
4. **Ninguna estimación sin su margen de error.**
5. **El texto de cara al usuario vive en `data/`, no en `main.js`.**

## Tecnología

HTML, CSS y JavaScript sin frameworks. Sin dependencias en tiempo de ejecución.
`esbuild` solo para generar el archivo único, y `playwright` solo para la prueba
de humo; ninguno de los dos hace falta para que la app funcione.
