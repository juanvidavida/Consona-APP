# Consona — Tarjetas de la home en la menstruación v0.3.0

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Cuándo se muestra:** desde un inicio de sangrado confirmado, durante la duración que declare la persona afectada o, si no la declara, los días 1 a 5 (ME-01, DA-06).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la menstruación. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

## 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| M-01 | Las tarjetas pueden referirse al sangrado, porque la fase empieza con un inicio de sangrado confirmado. |
| M-02 | «Qué pasa en su cuerpo» da la duración de la menstruación: la que declaró la persona afectada en el formulario de consentimiento inicial (DA-06, JUA-28) o, si no la declaró, 5 días (ME-01). Es la misma duración que usa la rueda. Es la única cifra en días de las tarjetas. Para los primeros días se usa «los primeros días, cuando el flujo suele ser mayor» (JUA-27 §6), nunca una regla de 3 días. |
| M-03 | No se da por hecho dolor, malestar, cansancio ni mal humor. El dolor solo aparece como algo que puede darse en algunas personas. |
| M-04 | No se recomiendan medidas para el dolor (medicamentos, calor, ejercicio), aunque tengan evidencia en población (`09-health-pain`). |
| M-05 | Ninguna tarjeta menciona la compra ni productos menstruales. |

## 2. Texto de las tarjetas

### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> La menstruación es el sangrado con el que el útero desprende su revestimiento, y su primer día marca el inicio de un nuevo ciclo. **{DURACIÓN}**; en los primeros días, el flujo suele ser mayor.
> Puede tener asociados dolor o calambres en algunas mujeres. Saber que tiene la regla no te dice cómo lo está viviendo tu pareja.

**{DURACIÓN}** tiene dos variantes (M-02):

| Caso | Texto |
|---|---|
| La persona afectada declaró la duración en el formulario de consentimiento inicial | «Según lo que indicó tu pareja, le suele durar unos N días» (con N = 1: «un día») |
| No la declaró | «Suele durar unos 5 días, aunque cambia de una mujer a otra» |

### Cómo acompañar

**Antetítulo:** Conversación y acción propia

> «¿Hay algo que te venga bien hoy, o prefieres que todo siga como siempre?»
> Preguntar sin dar por hecho que algo va mal le deja decidir qué contarte.
> Ocúpate de tu parte en casa sin esperar a que te lo pidan, y habla de la regla con la misma naturalidad que de cualquier otra cosa.

### Qué no asumir

**Antetítulo:** Antiestereotipo

> Tener la regla no significa estar de mal humor, tener dolor ni necesitar cuidados especiales. Tampoco que todo vaya bien porque no diga nada. Lo que te cuente vale más que cualquier idea previa sobre la regla.

## 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la menstruación: muestra en todas las fases la «Qué pasa en su cuerpo» de la fase lútea y unas «Qué puedes preguntarle», «Qué te toca a ti» y «Qué no asumir» genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Texto nuevo sobre la menstruación, con la duración declarada o la de por defecto. | El texto del prototipo describe la fase lútea; D-03. |
| Cómo acompañar · pregunta | La pregunta abierta genérica pasa a una que ofrece ayuda o normalidad por igual. | Evitar que la pregunta suene a «sé que te pasa algo» en la fase con más estereotipos asociados. |
| Cómo acompañar · acción propia | La logística general se concreta en tareas de casa, sin esperar a que te lo pidan. | Acción propia concreta, sin depender de lo que tu pareja sienta. Sin mencionar la compra (D-02). |
| Qué no asumir | Se sustituye «Una fase estimada no explica…» por estereotipos propios de la menstruación, incluido el contrario: que el silencio signifique que todo va bien. | Los estereotipos de la menstruación son distintos de los premenstruales. **JUA-36:** ME-A13, ME-A15, ME-A17 (estereotipo de la mujer «descontrolada»; Romans 2013 y Kiesner 2016 y 2022 en población general, ver fase folicular FO-A12 y FO-A14). |

## 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| Qué pasa en su cuerpo · definición | La menstruación es el sangrado con el que se desprende el revestimiento del útero; su primer día inicia el ciclo. | [1] [2] | `01-cycle-phases` (definición de menstruación; afirmación auditada de consenso clínico). **JUA-36:** ME-A01 a ME-A04 (Critchley 2020 y Jain 2022, en texto completo). |
| Qué pasa en su cuerpo · duración | Duración declarada por la persona afectada o, por defecto, unos 5 días, que cambia de una persona a otra. | [3] [4] | Declarada: DA-06 y formulario de JUA-28. Por defecto: ME-01; JUA-27 §2 y §6, mediana de 5 días, de 4 a 6 según la fuente. En `main` desde el PR #12. **JUA-36:** ME-A05. |
| Qué pasa en su cuerpo · primeros días | En los primeros días, el flujo suele ser mayor. | [9] | JUA-27 §2 y §6: ≈90 % de la pérdida en los días 1 a 3 (Haynes 1977, verificado en texto completo el 08-11-2026 [V]: el 92 % procede de 11 mujeres con regla abundante, por eso evidencia limitada). En `main` desde el PR #12. **JUA-36:** ME-A06. |
| Qué pasa en su cuerpo · dolor | La menstruación puede tener asociados dolor o calambres en algunas personas. | [5] [6] | `09-health-pain`, conclusión operativa y definición de dismenorrea; diversidad de experiencias según la OMS. **JUA-36:** ME-A09, ME-A10 (dos estudios españoles, Ciudad Real y Andalucía). |
| Qué pasa en su cuerpo · límite | Saber que hay sangrado no indica cómo lo vive la persona. | [7] | `01-cycle-phases` (distinguir dato, cálculo e inferencia); `12-health-emotional-cognitive` EC-02. **JUA-36:** ME-A15, ME-A18. |
| Cómo acompañar · pregunta | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| Cómo acompañar · acción propia | Acción propia sobre tareas de casa y planes. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| Qué no asumir | La fase no explica ánimo, dolor ni necesidades. | [7] [8] | `08-health-energy` (conclusión operativa); `12-health-emotional-cognitive` EC-02. |

## 5. Exclusiones comprobadas

La v0.2.0 no contiene:

- [x] Diagnósticos: dismenorrea, endometriosis, sangrado abundante, anemia, SPM ni TDPM.
- [x] Dolor, cansancio o ánimo presentados como esperables en tu pareja.
- [x] Recomendaciones de salud: medicamentos, calor, ejercicio ni cuándo consultar.
- [x] Otras cifras en días que no sean la duración de M-02, ni una regla de «3 días».
- [x] Fertilidad, «días seguros» ni probabilidad de embarazo.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase sobre dolor o calambres da información asociada a la fase, pero puede leerse como «es probable que le duela». | **Resuelta (05-11-2026):** «Puede tener asociados dolor o calambres en algunas personas». Se pide igualmente a la persona revisora que la valore. |
| D-02 | «Qué te toca a ti» mencionaba la compra común, que podía leerse como una alusión velada a productos menstruales. | **Resuelta (05-11-2026):** se evitan las referencias a la compra (M-05). «Qué te toca a ti» habla solo de tareas de casa y planes. |
| D-03 | La duración por defecto es de 5 días, pero H-06 impedía dar cifras. | **Resuelta (05-11-2026):** «Qué pasa en su cuerpo» da la duración declarada por la persona afectada en el formulario de consentimiento inicial o, si no la declaró, 5 días (M-02). Excepción recogida en H-01 y H-06. Depende de que JUA-28 incluya la duración del sangrado en el formulario. |
| D-04 | El paquete de revisión clínica de JUA-16 cubría la pantalla SPM/TDPM y la fase lútea. | **Resuelta (05-11-2026):** se amplía JUA-16 con las tres fases nuevas: menstruación, folicular y ventana ovulatoria estimada. |
| D-05 | La trazabilidad de la duración cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. **Cerrada (10-11-2026):** el PR #12 está fusionado y la ruta `docs/research/JUA-27-duraciones-referencia.md` es válida. |
| D-06 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |

## 7. Qué debe valorar la persona revisora

- Si la definición de «Qué pasa en su cuerpo» es correcta y suficiente para un público sin formación sanitaria.
- Si dar la duración en días (M-02), declarada o por defecto, es adecuado o puede leerse como una norma.
- Si «Puede tener asociados dolor o calambres en algunas personas» (D-01) informa sin crear una expectativa.
- Si «Qué no asumir» cubre los estereotipos más dañinos de la menstruación.

## 8. Historial

### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la menstruación.
- Reglas propias M-01 a M-05, sobre las comunes H-01 a H-08.
- Cinco decisiones, todas resueltas o aceptadas el 05-11-2026: frase del dolor, sin referencias a la compra, duración declarada o por defecto, ampliación de JUA-16 y cita de JUA-27.

### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- Pantalla educativa asociada: `menstruacion-v0.2.0.md` (rama de JUA-36).

### [0.2.0] — Enmienda del 10-11-2026

- Trazabilidad: JUA-27 (PR #12) ya está en `main`.
- Haynes 1977 pasa a verificado en texto completo [V]; el dato sigue siendo de evidencia limitada.
- **Sin cambios en el texto de las tarjetas**, por eso conservan la versión.

### [0.3.0] — 11-11-2026

- «Mujeres» en lugar de «personas» en «Qué pasa en su cuerpo» y en la variante de duración por defecto (D-07 de la pantalla SPM/TDPM).

### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de MEN-07: tu parte en casa y hablar de la regla con naturalidad.
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.

## Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>
2. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
3. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
4. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
5. Dysmenorrhoea — NICE Clinical Knowledge Summaries. <https://cks.nice.org.uk/topics/dysmenorrhoea/>
6. Menstrual health — World Health Organization fact sheet. <https://www.who.int/news-room/fact-sheets/detail/menstrual-health>
7. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
8. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>
9. Haynes PJ et al. — Measurement of menstrual blood loss in patients complaining of menorrhagia (Br J Obstet Gynaecol, 1977). <https://doi.org/10.1111/j.1471-0528.1977.tb12490.x>
