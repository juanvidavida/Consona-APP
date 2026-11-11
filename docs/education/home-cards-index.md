# Consona — Tarjetas de orientación de la home: índice

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. Las tres fases nuevas **se incluyen en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendientes de envío.
**Público y tono:** la pareja que acompaña, en segunda persona, con alfabetización menstrual y sin paternalismo. Se habla de «tu pareja».
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación. `src/App.jsx` solo se actualiza con versiones aprobadas.

> La home muestra tres tarjetas de orientación para la fase estimada del día: «Qué pasa en su cuerpo», «Cómo acompañar» y «Qué no asumir». Este índice reúne las reglas comunes y enlaza el documento versionado de cada fase. Hasta el 11-11-2026 eran cuatro: «Cómo acompañar» fusiona «Qué puedes preguntarle» y «Qué te toca a ti».

## 1. Documentos por fase

| Fase | Documento | Estado |
|---|---|---|
| Menstruación | [`home-cards-menstruation-v0.3.0.md`](./home-cards-menstruation-v0.3.0.md) | Borrador |
| Fase folicular | [`home-cards-follicular-v0.3.0.md`](./home-cards-follicular-v0.3.0.md) | Borrador |
| Ventana ovulatoria estimada | [`home-cards-ovulatory-v0.3.0.md`](./home-cards-ovulatory-v0.3.0.md) | Borrador |
| Fase lútea | [`home-cards-luteal-v0.3.0.md`](./home-cards-luteal-v0.3.0.md) | Borrador, en el paquete de revisión clínica de JUA-16 |

El documento de la fase lútea **no se modificó** en JUA-23. Desde su v0.2.0 (JUA-19, 10-11-2026) aplica también las reglas comunes H-01 a H-08.

Para revisar las cuatro fases a la vez: [`home-cards-review-pack-v0.4.0.md`](./home-cards-review-pack-v0.4.0.md). Es una copia generada; los cambios se hacen en el documento de cada fase.

## 2. Qué conjunto se muestra cada día

Un único conjunto de tarjetas por fase, sin subfases (especificación del panel, §3.2, decisión del 19-10-2026). Las duraciones vienen de JUA-27 (`docs/research/JUA-27-duraciones-referencia.md`, en `main` desde el PR #12).

| Fase en la rueda | Cuándo | Fuente |
|---|---|---|
| Menstruación | Desde un inicio de sangrado confirmado, durante la duración que declare la persona afectada o, si no la declara, los días 1 a 5. | ME-01, DA-06; JUA-27 §6 |
| Fase folicular | Después de la menstruación, hasta la ventana ovulatoria estimada. Sus tarjetas no dan por hecho que el sangrado haya terminado ni que continúe. | ME-05 |
| Ventana ovulatoria estimada | El segmento de la rueda, de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (L). | RU-05; JUA-27 §3.3 |
| Fase lútea | El resto, hasta el día antes de la siguiente menstruación. | RU-05b; JUA-27 §2 |
| Días previos a la menstruación | De −7 a −1. **No cambian las tarjetas**: siguen las de la fase lútea. | IT-01, IT-09; JUA-27 §5 |

Los límites exactos entre segmentos los fija la especificación del panel y el motor (CON-032), no este documento. Las tarjetas siguen la fase rotulada en la rueda ese día. Los estados excepcionales (anticoncepción hormonal, embarazo, lactancia y otros) se rigen por la sección 5 de la especificación y quedan fuera de JUA-23.

## 3. Reglas comunes

Generalizan las reglas H-01 a H-05 de la fase lútea a todas las fases. No cambian el texto del documento de la fase lútea.

| ID | Regla |
|---|---|
| H-01 | Las tres tarjetas son las mismas durante toda la fase. No cambian según el día del ciclo, la cercanía de la menstruación ni ningún dato local. Única excepción: la duración de la menstruación en su «Qué pasa en su cuerpo» (M-02). |
| H-02 | Las tarjetas no nombran diagnósticos (SPM, TDPM, dismenorrea, endometriosis, anemia u otros) y no presentan cambios físicos o emocionales como algo que tu pareja vaya a tener o esté teniendo (C-01). |
| H-03 | Cualquier mención de variabilidad usa «algunas personas», «puede» e información general (C-02). |
| H-04 | Las tarjetas no enlazan directamente a la pantalla SPM/TDPM ni cambian de color o de tono según la fase (C-03, U-03). |
| H-05 | Ninguna tarjeta menciona ni sugiere deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad. |
| H-06 | Sin fertilidad, «días seguros», probabilidad de embarazo, ovulación confirmada ni cifras en días. Excepciones: la duración de la menstruación, declarada por la persona afectada o de 5 días por defecto (M-02); el intervalo de la fase folicular, «entre 15 y 20 días» contando los días de la regla (F-02); y la duración aproximada de la fase lútea, «unos 12 días» (L-02). Siempre con «suele» y con que la duración cambia. |
| H-07 | «Cómo acompañar» y «Qué no asumir» hablan de lo que haces tú, no de lo que debe hacer tu pareja. Sin consejos para gestionar, calmar o evitar a tu pareja, ni recomendaciones de salud (medicamentos, calor, ejercicio). |
| H-08 | Ninguna tarjeta atribuye a la fase energía, ánimo, rendimiento, capacidad ni conducta (`01-cycle-phases`, `08-health-energy`, `12-health-emotional-cognitive` EC-01, EC-02). |

## 4. Criterios de aceptación de JUA-23

1. Un documento versionado por fase nueva, con el texto exacto y el antetítulo de cada tarjeta.
2. Este índice, con las reglas comunes y el criterio de qué conjunto se muestra.
3. Cada afirmación corporal en la tabla de trazabilidad, con fuente auditada en JUA-10 o JUA-27. Lo que no tenga auditoría propia se marca y pasa a decisión abierta.
4. Exclusiones comprobadas en cada documento.
5. Tono de Consona: segunda persona, la pareja que acompaña, sin paternalismo.
6. Cada fase nueva incluida **expresamente** en la revisión clínica de JUA-16, con lo que debe valorar la persona revisora.
7. `src/App.jsx` sin cambios.
8. El documento de la fase lútea sin cambios.

## 5. Historial

### [0.1.0] — 05-11-2026

- Índice inicial: documentos por fase, criterio de selección y reglas comunes H-01 a H-08.
- 06-11-2026: tarjetas de las tres fases nuevas en versión 0.2.0, con trazabilidad a la investigación de JUA-36.
- Decisiones del 05-11-2026: excepción de la duración de la menstruación en H-01 y H-06; las tres fases nuevas entran en JUA-16.
- 11-11-2026: tres tarjetas por fase; «Cómo acompañar» fusiona «Qué puedes preguntarle» y «Qué te toca a ti». Sin acrónimos en los documentos.
- 11-11-2026: H-06 admite el intervalo de la fase folicular y la duración aproximada de la fase lútea. Tarjetas de la menstruación, folicular y lútea en v0.3.0; paquete regenerado como v0.4.0.
- 10-11-2026: la fase lútea pasa a `home-cards-luteal-v0.3.0.md`, que adopta las reglas comunes; paquete de revisión regenerado como v0.3.0.
