# Investigación de base por fase del ciclo

**Issue:** JUA-36.
**Propósito:** reunir en un solo lugar la investigación que sustenta el contenido de Consona sobre cada fase del ciclo: tarjetas de la home (JUA-23) y pantallas educativas de «Comprender» (JUA-31).
**Naturaleza:** documentación educativa, no diagnóstica. No autoriza registros, inferencias, cálculos ni funciones clínicas.

## Fases

| Fase | Investigación | Pantalla educativa | Tarjetas de la home | Estado |
|---|---|---|---|---|
| Menstruación | [`menstruacion/`](./menstruacion/) | `docs/education/menstruacion-v0.2.0.md` | JUA-23 | Borrador, pendiente de revisión |
| Fase folicular | [`folicular/`](./folicular/) | `docs/education/folicular-v0.2.0.md` | JUA-23 | Borrador, pendiente de revisión |
| Ventana ovulatoria estimada | [`ovulatoria/`](./ovulatoria/) | `docs/education/ovulatoria-v0.2.0.md` | JUA-23 | Borrador, pendiente de revisión |
| Fase lútea | [`lutea/`](./lutea/). Reúne lo auditado en `../jua-10/01-cycle-phases.md`, `../jua-10/audit-02-asrm-lpd.md`, `../jua-10/audit-07-rcog-pms.md` y JUA-27 (PR #12), con fuentes verificadas en las otras fases | `docs/education/lutea-v0.2.0.md`; los cambios premenstruales se desarrollan en `spm-tdpm-v0.6.0.md` (JUA-19) | `home-cards-luteal-v0.3.0.md` (JUA-19) | Borrador, pendiente de revisión |

## Estructura de cada fase

Mismo procedimiento en las cuatro fases:

| Archivo | Contenido |
|---|---|
| `01-informe.md` | Informe temático: conclusión operativa, definiciones, tabla de afirmaciones auditadas, qué puede afirmar la interfaz y qué debe evitar. |
| `02-auditoria-fuentes.md` | Una ficha por fuente: identificador, fecha, nivel de verificación, vigencia, financiación y uso permitido. Incluye las fuentes críticas sin texto completo. |
| `03-sesgo-genero.md` | Análisis de sesgo de género de las fuentes y del propio tema, con sus consecuencias editoriales. |
| `04-cierre.md` | Dictamen, redacción segura que se puede usar y pendientes. |

## Criterios comunes

**Fuentes.** Académicas y revisadas por pares, publicadas desde 2015. Un estudio anterior solo se usa si no hay equivalente reciente, y se marca como «clásico». Las guías clínicas y las normas se usan como **consenso clínico** o **marco legal**, no como evidencia primaria. Se combinan fuentes internacionales, españolas y catalanas.

**Verificación** (mismas marcas que JUA-27):

| Marca | Significado |
|---|---|
| [V] | Texto completo leído. |
| [V-abs] | Solo el resumen, desde PubMed o la editorial. |
| [NV] | No verificada. No sostiene ninguna afirmación del contenido. |

**Nivel de evidencia** (mismas etiquetas que JUA-10): **alta**, **moderada**, **limitada**, **consenso clínico** y **pendiente de evidencia**. No son una calificación GRADE.

**Sin sesgo de género.** Una fuente cumple el criterio si:

1. no trata el ciclo como una patología;
2. no lo usa para explicar la conducta, las capacidades o las decisiones de nadie;
3. no toma el cuerpo masculino como norma;
4. describe bien a quién estudió: edad, origen, nivel socioeconómico y si incluye a personas que menstrúan y no son mujeres;
5. declara su financiación y sus conflictos de interés.

Una fuente que no cumple algún punto no se descarta sin más: se marca su sesgo y se limita lo que se puede afirmar con ella.

**Lenguaje.** Los documentos de investigación respetan el lenguaje de cada fuente al citarla («mujeres», «personas que menstrúan»). El contenido de la app habla de «tu pareja» y, en lo general, de «personas».
