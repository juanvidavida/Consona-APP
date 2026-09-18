# HANDOFF — Briefing para el siguiente agente de IA

Lee este archivo primero y entero. Está escrito para ti, no para un humano.

---

## 1. Qué eres y qué se espera de ti

Vas a continuar el desarrollo de **Cycleteller**, una webapp educativa en español
sobre el ciclo menstrual. El proyecto lo dirige **Juan**, que no es programador:
explícale las cosas técnicas asumiendo que parte de cero, con frases cortas.
Escribe siempre en español.

Este paquete es el resultado de una auditoría completa hecha en septiembre de 2026.
Contiene código nuevo que **corrige errores graves del prototipo anterior**. No es
el prototipo original: es su sustituto, y los cambios están justificados uno a uno.

## 2. El producto, en cuatro líneas

- Webapp que explica el ciclo menstrual a **hombres en relación de pareja**.
- Solo el hombre tiene cuenta. Ella no se registra.
- Público objetivo declarado: 16 a 66 años.
- Filosofía declarada: educación, empatía, consentimiento. **No** predicción, **no** rastreo.

## 3. Lo primero que tienes que entender: hay una contradicción sin resolver

El producto dice que no hace predicción, pero calcula la fase del ciclo a partir
de la fecha de la última regla. **Eso es una predicción.** Y una tercera persona,
que no usa la app y no consiente nada, es el sujeto de esos datos.

Esta contradicción no es un detalle de implementación. Es **la decisión de
producto que sigue abierta**, y está documentada en `docs/02-decisiones.md`
(ADR-001). No la des por resuelta ni la ignores. Si Juan te pide construir
funciones nuevas encima del modelo actual, tu obligación es recordarle que esa
decisión sigue pendiente antes de añadir más código sobre ella.

## 4. Qué se corrigió y por qué (no lo deshagas)

| Cambio | Motivo |
|---|---|
| Fases ancladas desde la **siguiente** regla, no la anterior | El cálculo anterior erraba hasta 14 días en ciclos que no midieran 28 |
| Fechas en UTC | El cálculo anterior se desplazaba un día con el cambio de hora |
| Pregunta de método anticonceptivo | ~24% de las mujeres españolas usa métodos que suprimen la ovulación: para ellas no hay fases |
| Puerta de consentimiento obligatoria | Son datos de salud de otra persona (Art. 9 RGPD) |
| Google Fonts eliminado | Transferencia de IP a Google; hay sentencia condenatoria |
| Variable "estilo de intimidad" eliminada | Riesgo de coerción sexual documentado; ninguna app seria comparte esto |
| Textos de ánimo reescritos con lenguaje probabilístico | La versión determinista no está respaldada por la evidencia y genera el efecto que describe |
| No se muestra "Día 17" por defecto | Sugiere una precisión que el cálculo no tiene |

Cada uno de estos cambios tiene su ADR en `docs/02-decisiones.md` con las fuentes.
**Si vas a revertir alguno, lee antes su ADR y dile a Juan qué se pierde.**

## 5. Mapa del código

```
src/js/cycle.js     Motor de cálculo. PURO: sin DOM, sin almacenamiento, sin dependencias.
                    Es el archivo más importante. Tiene 16 tests.
src/js/config.js    Interruptores del producto. Las decisiones abiertas se cambian aquí.
src/js/storage.js   localStorage envuelto en try/catch. Nada sale del navegador.
src/js/main.js      Interfaz. Solo pinta; no calcula ni decide nada.
data/content.v1.js  Set de variables original. Conservado para comparar. NO recomendado.
data/content.v2.js  Set de variables propuesto. El que está activo.
```

**Regla de oro de esta arquitectura:** el texto que ve el usuario vive en `data/`,
el cálculo vive en `cycle.js`, y `main.js` no hace ninguna de las dos cosas.
Si te encuentras escribiendo una frase de cara al usuario dentro de `main.js`,
te has equivocado de archivo.

## 6. Cómo ejecutarlo

```bash
# Tests del motor. No necesita instalar nada.
node tests/cycle.test.mjs

# Ver la app en el navegador (src/ usa módulos, necesita servidor):
python3 -m http.server 8000
# y abrir http://localhost:8000/src/

# Generar el archivo único que funciona con doble clic:
node scripts/build.mjs      # produce dist/cycleteller.html

# Prueba de humo en navegador (opcional, requiere Playwright):
node tests/smoke.mjs
```

`dist/cycleteller.html` está ya generado y es lo que hay que enviar a alguien
que solo quiera ver la app funcionando.

## 7. Reglas que no debes romper

1. **Nunca añadas recursos externos.** Ni fuentes, ni CDN de JavaScript, ni
   iconos, ni píxeles de analítica. Todo se aloja en el propio dominio.
   Motivo legal, explicado en `docs/05-rgpd.md`.
2. **Nunca envíes al servidor la fecha de la regla, la duración del ciclo, la
   fase calculada ni el método anticonceptivo.** Eso convertiría la telemetría
   en datos de salud y haría saltar todo el análisis legal.
3. **Un solo perfil de pareja.** No conviertas esto en una lista. Las apps que
   permiten seguir a varias personas son, por definición, herramientas de vigilancia.
4. **No añadas exportación, sincronización, historial largo ni gráficas
   retrospectivas.** Nada que sirva para construir un expediente sobre ella.
5. **No añadas notificaciones push con contenido sobre su ciclo.** El móvil de
   él es visible para ella.
6. **No presentes ninguna estimación sin su margen de error.**
7. **No escribas contenido que prediga su estado de ánimo, sus límites o su
   disposición sexual.** Ver ADR-006 y ADR-007.

## 8. Qué hacer a continuación

Está en `docs/06-backlog.md`, priorizado. Lo primero de la lista **no es código**:
es que Juan tome la decisión de ADR-001. Todo lo demás depende de eso.

## 9. Qué NO tienes en este paquete

Existen cuatro PDF de trabajo previo que no están aquí porque no se pudieron
recuperar: la investigación científica original (~12.000 palabras), el
benchmarking de 14+ apps, los módulos educativos de Capa 2 y el consolidado
completo. Si Juan te los pasa, intégralos, pero **contrasta sus afirmaciones
científicas con `docs/04-auditoria-cientifica.md`**: la auditoría encontró que
varias de las afirmaciones que circulaban en el proyecto no se sostienen.
