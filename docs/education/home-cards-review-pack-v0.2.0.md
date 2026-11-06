# Consona — Tarjetas de orientación de la home: paquete de revisión v0.2.0

**Issue:** JUA-23.
**Para qué sirve:** revisar a la vez las cuatro fases. Es una copia generada de los documentos de cada fase, que son la fuente de verdad: los cambios se hacen allí y este paquete se vuelve a generar.
**Estado:** Borrador para revisión de producto. Las tres fases nuevas **no se han enviado a revisión clínica**.
**Generado:** 06-11-2026.

## Contenido

| Parte | Fase | Origen | Estado |
|---|---|---|---|
| 1 | Cómo se eligen las tarjetas y reglas comunes | `home-cards-index.md` | Borrador |
| 2 | Menstruación | `home-cards-menstruation-v0.2.0.md` | Versión 0.2.0, con trazabilidad a la investigación de JUA-36 |
| 3 | Fase folicular | `home-cards-follicular-v0.2.0.md` | Versión 0.2.0, con trazabilidad a la investigación de JUA-36 |
| 4 | Ventana ovulatoria estimada | `home-cards-ovulatory-v0.2.0.md` | Versión 0.2.0, con trazabilidad a la investigación de JUA-36 |
| 5 | Fase lútea | `home-cards-luteal-v0.1.0.md (rama de JUA-19, PR #9)` | Copia sin cambios; ya está en el paquete de revisión clínica de JUA-16 |

**Cómo revisar:** lee primero la sección 2 de cada fase, que es el texto que verá la persona usuaria. Después, las reglas propias, la trazabilidad y las decisiones abiertas. Las referencias numeradas [1], [2]… remiten a la lista del final de **cada** fase, no a una lista común.

---

# Parte 1 · Cómo se eligen las tarjetas y reglas comunes

### 2. Qué conjunto se muestra cada día

Un único conjunto de tarjetas por fase, sin subfases (especificación del panel, §3.2, decisión del 19-10-2026). Las duraciones vienen de JUA-27 (`docs/research/JUA-27-duraciones-referencia.md`, rama de JUA-27, PR #12).

| Fase en la rueda | Cuándo | Fuente |
|---|---|---|
| Menstruación | Desde un inicio de sangrado confirmado, durante la duración que declare la persona afectada o, si no la declara, los días 1 a 5. | ME-01, DA-06; JUA-27 §6 |
| Fase folicular | Después de la menstruación, hasta la ventana ovulatoria estimada. Sus tarjetas no dan por hecho que el sangrado haya terminado ni que continúe. | ME-05 |
| Ventana ovulatoria estimada | El segmento de la rueda, de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (L). | RU-05; JUA-27 §3.3 |
| Fase lútea | El resto, hasta el día antes de la siguiente menstruación. | RU-05b; JUA-27 §2 |
| Días previos a la menstruación | De −7 a −1. **No cambian las tarjetas**: siguen las de la fase lútea. | IT-01, IT-09; JUA-27 §5 |

Los límites exactos entre segmentos los fija la especificación del panel y el motor (CON-032), no este documento. Las tarjetas siguen la fase rotulada en la rueda ese día. Los estados excepcionales (anticoncepción hormonal, embarazo, lactancia y otros) se rigen por la sección 5 de la especificación y quedan fuera de JUA-23.

### 3. Reglas comunes

Generalizan las reglas H-01 a H-05 de la fase lútea a todas las fases. No cambian el texto del documento de la fase lútea.

| ID | Regla |
|---|---|
| H-01 | Las cuatro tarjetas son las mismas durante toda la fase. No cambian según el día del ciclo, la cercanía de la menstruación ni ningún dato local. Única excepción: la duración de la menstruación en su QPC (M-02). |
| H-02 | Las tarjetas no nombran diagnósticos (SPM, TDPM, dismenorrea, endometriosis, anemia u otros) y no presentan cambios físicos o emocionales como algo que tu pareja vaya a tener o esté teniendo (C-01). |
| H-03 | Cualquier mención de variabilidad usa «algunas personas», «puede» e información general (C-02). |
| H-04 | Las tarjetas no enlazan directamente a la pantalla SPM/TDPM ni cambian de color o de tono según la fase (C-03, U-03). |
| H-05 | Ninguna tarjeta menciona ni sugiere deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad. |
| H-06 | Sin fertilidad, «días seguros», probabilidad de embarazo, ovulación confirmada ni cifras en días. Única excepción: la duración de la menstruación, declarada por la persona afectada o de 5 días por defecto (M-02). |
| H-07 | QPP, QTT y QNA hablan de lo que haces tú, no de lo que debe hacer tu pareja. Sin consejos para gestionar, calmar o evitar a tu pareja, ni recomendaciones de salud (medicamentos, calor, ejercicio). |
| H-08 | Ninguna tarjeta atribuye a la fase energía, ánimo, rendimiento, capacidad ni conducta (`01-cycle-phases`, `08-health-energy`, `12-health-emotional-cognitive` EC-01, EC-02). |


---

# Parte 2 · Menstruación

*Origen: `home-cards-menstruation-v0.2.0.md`. Versión 0.2.0, con trazabilidad a la investigación de JUA-36.*

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Cuándo se muestra:** desde un inicio de sangrado confirmado, durante la duración que declare la persona afectada o, si no la declara, los días 1 a 5 (ME-01, DA-06).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las cuatro tarjetas cuando la home muestra la menstruación. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

### 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| M-01 | Las tarjetas pueden referirse al sangrado, porque la fase empieza con un inicio de sangrado confirmado. |
| M-02 | QPC da la duración de la menstruación: la que declaró la persona afectada en el formulario de consentimiento inicial (DA-06, JUA-28) o, si no la declaró, 5 días (ME-01). Es la misma duración que usa la rueda. Es la única cifra en días de las tarjetas. Para los primeros días se usa «los primeros días, cuando el flujo suele ser mayor» (JUA-27 §6), nunca una regla de 3 días. |
| M-03 | No se da por hecho dolor, malestar, cansancio ni mal humor. El dolor solo aparece como algo que puede darse en algunas personas. |
| M-04 | No se recomiendan medidas para el dolor (medicamentos, calor, ejercicio), aunque tengan evidencia en población (`09-health-pain`). |
| M-05 | Ninguna tarjeta menciona la compra ni productos menstruales. |

### 2. Texto de las tarjetas

#### QPC · Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> La menstruación es el sangrado con el que el útero desprende su revestimiento, y su primer día marca el inicio de un nuevo ciclo. **{DURACIÓN}**; en los primeros días, el flujo suele ser mayor.
> Puede tener asociados dolor o calambres en algunas personas. Saber que tiene la regla no te dice cómo lo está viviendo tu pareja.

**{DURACIÓN}** tiene dos variantes (M-02):

| Caso | Texto |
|---|---|
| La persona afectada declaró la duración en el formulario de consentimiento inicial | «Según lo que indicó tu pareja, le suele durar unos N días» (con N = 1: «un día») |
| No la declaró | «Suele durar unos 5 días, aunque cambia de una persona a otra» |

#### QPP · Qué puedes preguntarle

**Antetítulo:** Conversación

> «¿Hay algo que te venga bien hoy, o prefieres que todo siga como siempre?»
> Preguntar sin dar por hecho que algo va mal le deja decidir qué contarte.

#### QTT · Qué te toca a ti

**Antetítulo:** Acción propia

> Ocúpate de lo que te corresponde en casa sin esperar a que te lo pidan. Si tenéis planes, mantenlos o ajústalos según lo que te diga, no según lo que supongas.

#### QNA · Qué no asumir

**Antetítulo:** Antiestereotipo

> Tener la regla no significa estar de mal humor, tener dolor ni necesitar cuidados especiales. Tampoco que todo vaya bien porque no diga nada. Lo que te cuente vale más que cualquier idea previa sobre la regla.

### 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la menstruación: muestra en todas las fases la QPC de la fase lútea y unas QPP, QTT y QNA genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| QPC | Texto nuevo sobre la menstruación, con la duración declarada o la de por defecto. | El texto del prototipo describe la fase lútea; D-03. |
| QPP | La pregunta abierta genérica pasa a una que ofrece ayuda o normalidad por igual. | Evitar que la pregunta suene a «sé que te pasa algo» en la fase con más estereotipos asociados. |
| QTT | La logística general se concreta en tareas de casa, sin esperar a que te lo pidan. | Acción propia concreta, sin depender de lo que tu pareja sienta. Sin mencionar la compra (D-02). |
| QNA | Se sustituye «Una fase estimada no explica…» por estereotipos propios de la menstruación, incluido el contrario: que el silencio signifique que todo va bien. | Los estereotipos de la menstruación son distintos de los premenstruales. **JUA-36:** ME-A13, ME-A15, ME-A17 (estereotipo de la mujer «descontrolada»; Romans 2013 y Kiesner 2016 y 2022 en población general, ver fase folicular FO-A12 y FO-A14). |

### 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| QPC · definición | La menstruación es el sangrado con el que se desprende el revestimiento del útero; su primer día inicia el ciclo. | [1] [2] | `01-cycle-phases` (definición de menstruación; afirmación auditada de consenso clínico). **JUA-36:** ME-A01 a ME-A04 (Critchley 2020 y Jain 2022, en texto completo). |
| QPC · duración | Duración declarada por la persona afectada o, por defecto, unos 5 días, que cambia de una persona a otra. | [3] [4] | Declarada: DA-06 y formulario de JUA-28. Por defecto: ME-01; JUA-27 §2 y §6, mediana de 5 días, de 4 a 6 según la fuente. Rama de JUA-27, PR #12, **pendiente de fusionar**. **JUA-36:** ME-A05. |
| QPC · primeros días | En los primeros días, el flujo suele ser mayor. | [9] | JUA-27 §2 y §6: ≈90 % de la pérdida en los días 1 a 3 (Haynes 1977, verificado solo por el resumen [V-abs]). Rama de JUA-27, PR #12. **JUA-36:** ME-A06. |
| QPC · dolor | La menstruación puede tener asociados dolor o calambres en algunas personas. | [5] [6] | `09-health-pain`, conclusión operativa y definición de dismenorrea; diversidad de experiencias según la OMS. **JUA-36:** ME-A09, ME-A10 (dos estudios españoles, Ciudad Real y Andalucía). |
| QPC · límite | Saber que hay sangrado no indica cómo lo vive la persona. | [7] | `01-cycle-phases` (distinguir dato, cálculo e inferencia); `12-health-emotional-cognitive` EC-02. **JUA-36:** ME-A15, ME-A18. |
| QPP | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| QTT | Acción propia sobre tareas de casa y planes. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| QNA | La fase no explica ánimo, dolor ni necesidades. | [7] [8] | `08-health-energy` (conclusión operativa); `12-health-emotional-cognitive` EC-02. |

### 5. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] Diagnósticos: dismenorrea, endometriosis, sangrado abundante, anemia, SPM ni TDPM.
- [x] Dolor, cansancio o ánimo presentados como esperables en tu pareja.
- [x] Recomendaciones de salud: medicamentos, calor, ejercicio ni cuándo consultar.
- [x] Otras cifras en días que no sean la duración de M-02, ni una regla de «3 días».
- [x] Fertilidad, «días seguros» ni probabilidad de embarazo.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase sobre dolor o calambres da información asociada a la fase, pero puede leerse como «es probable que le duela». | **Resuelta (05-11-2026):** «Puede tener asociados dolor o calambres en algunas personas». Se pide igualmente a la persona revisora que la valore. |
| D-02 | QTT mencionaba la compra común, que podía leerse como una alusión velada a productos menstruales. | **Resuelta (05-11-2026):** se evitan las referencias a la compra (M-05). QTT habla solo de tareas de casa y planes. |
| D-03 | La duración por defecto es de 5 días, pero H-06 impedía dar cifras. | **Resuelta (05-11-2026):** QPC da la duración declarada por la persona afectada en el formulario de consentimiento inicial o, si no la declaró, 5 días (M-02). Excepción recogida en H-01 y H-06. Depende de que JUA-28 incluya la duración del sangrado en el formulario. |
| D-04 | El paquete de revisión clínica de JUA-16 cubría la pantalla SPM/TDPM y la fase lútea. | **Resuelta (05-11-2026):** se amplía JUA-16 con las tres fases nuevas: menstruación, folicular y ventana ovulatoria estimada. |
| D-05 | La trazabilidad de la duración cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. |

### 7. Qué debe valorar la persona revisora

- Si la definición de QPC es correcta y suficiente para un público sin formación sanitaria.
- Si dar la duración en días (M-02), declarada o por defecto, es adecuado o puede leerse como una norma.
- Si «Puede tener asociados dolor o calambres en algunas personas» (D-01) informa sin crear una expectativa.
- Si QNA cubre los estereotipos más dañinos de la menstruación.

### 8. Historial

#### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la menstruación.
- Reglas propias M-01 a M-05, sobre las comunes H-01 a H-08.
- Cinco decisiones, todas resueltas o aceptadas el 05-11-2026: frase del dolor, sin referencias a la compra, duración declarada o por defecto, ampliación de JUA-16 y cita de JUA-27.

#### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- Pantalla educativa asociada: `menstruacion-v0.1.0.md` (rama de JUA-36).

### Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>
2. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
3. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
4. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
5. Dysmenorrhoea — NICE Clinical Knowledge Summaries. <https://cks.nice.org.uk/topics/dysmenorrhoea/>
6. Menstrual health — World Health Organization fact sheet. <https://www.who.int/news-room/fact-sheets/detail/menstrual-health>
7. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
8. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>
9. Haynes PJ et al. — Measurement of menstrual blood loss in patients complaining of menorrhagia (Br J Obstet Gynaecol, 1977). <https://doi.org/10.1111/j.1471-0528.1977.tb12490.x>

---

# Parte 3 · Fase folicular

*Origen: `home-cards-follicular-v0.2.0.md`. Versión 0.2.0, con trazabilidad a la investigación de JUA-36.*

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Cuándo se muestra:** después de la menstruación y hasta la ventana ovulatoria estimada (ME-05, RU-05).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las cuatro tarjetas cuando la home muestra la fase folicular. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

### 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| F-01 | Las tarjetas no dan por hecho que el sangrado haya terminado ni que continúe (ME-05). |
| F-02 | No se usa «del día 1 al 14» ni ninguna duración fija. Se puede decir que es la parte del ciclo que más varía. |
| F-03 | No se atribuye a la fase más energía, mejor ánimo, más ganas de hacer cosas ni más rendimiento (H-08). |
| F-04 | No se da por hecho que en ese ciclo vaya a haber ovulación. |

### 2. Texto de las tarjetas

#### QPC · Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase folicular empieza con la menstruación y llega hasta la ovulación. En ella maduran folículos en los ovarios hasta que normalmente uno libera un óvulo. Esos folículos producen hormonas, entre ellas los estrógenos, que vuelven a engrosar el revestimiento del útero. Es la parte del ciclo cuya duración más cambia de un ciclo a otro, incluso en la misma persona.
> Una fecha calculada no te dice en qué punto está su ciclo ni cómo se encuentra tu pareja.

#### QPP · Qué puedes preguntarle

**Antetítulo:** Conversación

> «¿Cómo te va esta semana? ¿Hay algo que te apetezca que hagamos o que prefieras dejar para otro momento?»
> Preguntar por sus planes, y no por su ciclo, abre una conversación sin etiquetas.

#### QTT · Qué te toca a ti

**Antetítulo:** Acción propia

> Cuenta tus planes de los próximos días y pregunta por los suyos antes de dar nada por cerrado. Si hay algo que os toque organizar juntos, da tú el primer paso.

#### QNA · Qué no asumir

**Antetítulo:** Antiestereotipo

> Esta parte del ciclo no significa que tu pareja tenga más energía, mejor ánimo o más ganas de hacer planes. Es una idea muy extendida, pero la investigación no la respalda: cada persona y cada ciclo son distintos.

### 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la fase folicular: muestra en todas las fases la QPC de la fase lútea y unas QPP, QTT y QNA genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| QPC | Texto nuevo sobre la fase folicular, con los estrógenos como conocimiento básico. | El texto del prototipo describe la fase lútea; D-02. |
| QPP | La pregunta genérica pasa a una sobre planes. | Variar la conversación entre fases sin referirse al ciclo. |
| QTT | La logística general se concreta en compartir planes y dar el primer paso. | Acción propia concreta. |
| QNA | Se sustituye «Una fase estimada no explica…» por el estereotipo de esta fase: más energía y mejor ánimo. | Es la idea más extendida sobre la fase folicular y la evidencia no la sostiene. **JUA-36:** FO-A08 a FO-A12 y FO-A14: sin cambios de rendimiento ni de esfuerzo percibido con la fase verificada en sangre (IronFEMME, Madrid; FENDURA), sin cambios cognitivos, y en población general la fase pesa poco frente a la salud, el estrés y el apoyo. |

### 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| QPC · definición | La fase folicular empieza con la menstruación y dura hasta la ovulación. | [1] [2] | `01-cycle-phases` (afirmación auditada, moderada; definición `follicular_educational`). **JUA-36:** FO-A01. |
| QPC · folículos | En ella maduran folículos hasta que normalmente uno libera un óvulo. | [1] [3] | `01-cycle-phases` (definición de fase folicular: «desarrollo de folículos hasta la ovulación»; definición de ovulación de ACOG). **JUA-36:** FO-A02 (Reed y Carr 2018). |
| QPC · hormonas | Los folículos producen hormonas, entre ellas los estrógenos, que vuelven a engrosar el revestimiento del útero. | [1] | **Auditada en JUA-36:** FO-A03 y FO-A04 (Reed y Carr 2018; Critchley 2020; Jain 2022, en texto completo). Se mantiene en la revisión clínica de JUA-16. |
| QPC · variación | Es la parte del ciclo cuya duración más cambia, incluso en la misma persona. | [2] [4] [5] | `01-cycle-phases` («su duración contribuye en gran medida a la variación»); JUA-27 §2: mediana de 17 días, RIC 15–20, «la fase que más varía». Rama de JUA-27, PR #12, **pendiente de fusionar**. **JUA-36:** FO-A06, FO-A07. |
| QPC · límite | Una fecha calculada no indica el punto del ciclo ni cómo está la persona. | [6] | `01-cycle-phases` (método de calendario); `12-health-emotional-cognitive` EC-05. **JUA-36:** FO-A07; SGF-04. |
| QPP | Pregunta abierta sobre planes en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| QTT | Acción propia sobre planes y organización. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| QNA | No hay evidencia de más energía o mejor ánimo por fase. | [2] [7] | `08-health-energy` (conclusión operativa: ninguna afirmación de «energía alta» por fase alcanza evidencia alta); `12-health-emotional-cognitive` EC-01, EC-02. |

### 5. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] Afirmaciones de que el sangrado haya terminado o continúe.
- [x] Duraciones fijas («del día 1 al 14», «dos semanas»).
- [x] Energía, ánimo, rendimiento o capacidad atribuidos a la fase.
- [x] Explicaciones hormonales de emociones, conductas o síntomas. Los estrógenos solo aparecen como fisiología del útero.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni ovulación confirmada.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La taxonomía de JUA-10 usa «ovocito»; el público entiende mejor «óvulo». | **Aceptada (05-11-2026):** «óvulo» en las tarjetas y «ovocito» en «Cómo funciona» si hace falta precisión. Validar en la revisión clínica. |
| D-02 | Las auditorías de JUA-10 desaconsejan explicar estados por hormonas, pero nombrar las hormonas del ciclo es conocimiento básico. | **Resuelta (05-11-2026):** se nombran los estrógenos, solo como fisiología del útero, igual que la progesterona en la fase lútea. La afirmación entra en la revisión clínica de JUA-16. |
| D-03 | QNA nombra el estereotipo («más energía, mejor ánimo») para desmentirlo. Nombrarlo también lo difunde. | **Resuelta (05-11-2026):** se nombran los estereotipos para que el texto sea accesible, aunque sea a costa de difundirlos. |
| D-04 | La trazabilidad de la variación cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. |

### 7. Qué debe valorar la persona revisora

- Si «hasta que normalmente uno libera un óvulo» es correcto sin dar por hecho que todos los ciclos son ovulatorios.
- Si la frase sobre los estrógenos y el revestimiento del útero es correcta (D-02).
- Si QNA desmiente el estereotipo sin reforzarlo (D-03).

### 8. Historial

#### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la fase folicular.
- Reglas propias F-01 a F-04, sobre las comunes H-01 a H-08.
- Cuatro decisiones, todas resueltas o aceptadas el 05-11-2026: «óvulo», estrógenos, estereotipos nombrados y cita de JUA-27.

#### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- La afirmación sobre los estrógenos deja de estar «no auditada» (D-02).
- Pantalla educativa asociada: `folicular-v0.1.0.md` (rama de JUA-36).

### Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
4. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
5. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
6. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
7. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>

---

# Parte 4 · Ventana ovulatoria estimada

*Origen: `home-cards-ovulatory-v0.2.0.md`. Versión 0.2.0, con trazabilidad a la investigación de JUA-36.*

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Cuándo se muestra:** en el segmento de la rueda de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (RU-05; JUA-27 §3.3).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las cuatro tarjetas cuando la home muestra la ventana ovulatoria estimada. Es la fase con más riesgo de lectura errónea (fertilidad, deseo), por eso tiene más reglas propias. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

### 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| O-01 | Siempre «ventana ovulatoria estimada». Nunca «día de ovulación», «estás ovulando», «días fértiles», «periodo fértil» ni «días seguros» (RU-03; JUA-27 §3.4). |
| O-02 | Se explica que la ventana es un cálculo por fechas: no detecta ni confirma la ovulación, ni que ocurra en todos los ciclos. |
| O-03 | Se dice expresamente que la ventana no sirve para buscar ni para evitar un embarazo. Las tarjetas no dan más información de fertilidad; la relación entre ovulación y embarazo se explica en la pantalla educativa (OVU-05). La salud reproductiva es contenido válido (decisión del 06-11-2026). |
| O-04 | H-05 se aplica sin excepción, también en QNA: no se nombra el deseo ni el atractivo, ni siquiera para desmentirlo. |
| O-05 | No se mencionan señales corporales de la ovulación (moco cervical, dolor ovulatorio, temperatura), porque invitarían a observar el cuerpo de tu pareja. |
| O-06 | Sin cifras en días. |

### 2. Texto de las tarjetas

#### QPC · Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días, sino un hecho puntual cuyo momento cambia de un ciclo a otro. Esta ventana marca un momento aproximado, calculado hacia atrás desde la fecha prevista de la siguiente regla.
> Es solo un cálculo: no detecta si la ovulación ha ocurrido ni cuándo, y no sirve para buscar ni para evitar un embarazo.

#### QPP · Qué puedes preguntarle

**Antetítulo:** Conversación

> «¿Cómo te encuentras hoy? ¿Hay algo en lo que te pueda echar una mano?»
> Lo que te cuente dice mucho más que cualquier fecha del calendario.

#### QTT · Qué te toca a ti

**Antetítulo:** Acción propia

> Mantén tus compromisos y tu parte de las tareas como cualquier otro día. Si tenéis una decisión pendiente, sácala tú en la conversación en lugar de esperar.

#### QNA · Qué no asumir

**Antetítulo:** Antiestereotipo

> Que la app marque esta ventana no dice nada de cómo se siente tu pareja, de lo que quiere ni de cómo está vuestra relación. Es una fecha calculada, no algo que le esté pasando ni una señal para actuar.

### 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la ventana ovulatoria: muestra en todas las fases la QPC de la fase lútea y unas QPP, QTT y QNA genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| QPC | Texto nuevo: la ovulación como hecho puntual y la ventana como cálculo, con su límite para el embarazo. | El texto del prototipo describe la fase lútea; O-01 a O-03. |
| QPP | La pregunta genérica pasa a una oferta de ayuda abierta. | Variar la conversación entre fases sin referirse al ciclo. |
| QTT | La logística general se concreta en compromisos, tareas y decisiones pendientes. | Acción propia concreta; mostrar que nada cambia por la fecha. |
| QNA | Se sustituye «Una fase estimada no explica…» por «no es una señal para actuar», sin nombrar el deseo. | O-04: el estereotipo de esta fase es sexual y H-05 impide nombrarlo. **JUA-36:** OV-A10, OV-A11; SGO-01. |

### 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| QPC · definición | La ovulación es la liberación de un óvulo por un ovario; es un evento, no una fase de duración fija. | [1] [2] | `01-cycle-phases` (afirmación auditada de consenso clínico; definición de ovulación y nota de taxonomía). **JUA-36:** OV-A01, OV-A02. |
| QPC · variación | Su momento cambia de un ciclo a otro. | [3] [4] | `01-cycle-phases` (variación dentro de la misma persona, Najmabadi); JUA-27 §3.2. Rama de JUA-27, PR #12, **pendiente de fusionar**. **JUA-36:** OV-A03 (el día 14 es un mito). |
| QPC · cálculo | La ventana se calcula hacia atrás desde la fecha prevista de la siguiente regla. | [5] | JUA-27 §3.3 y §3.4 (ventana `[L−14, L−12]`). Rama de JUA-27, PR #12. **JUA-36:** OV-A04, OV-A05. |
| QPC · límite | No detecta ni confirma la ovulación; no sirve para buscar ni evitar un embarazo. | [1] [6] | `01-cycle-phases` (límites 2 y 3: «no detecta ni confirma»; «nunca sustituye […] método anticonceptivo»). **JUA-36:** OV-A06, OV-A07, OV-A08 (uso real de las apps en España, Universidad de Granada) y OV-A12. |
| QPP | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| QTT | Acción propia sobre compromisos, tareas y decisiones. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| QNA | Una fase no explica estados, deseos ni conducta. | [6] [7] | `01-cycle-phases` (límite 4 y afirmación sobre atribución causal); `12-health-emotional-cognitive` EC-02. |

### 5. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] «Día de ovulación», «estás ovulando», «días fértiles», «periodo fértil» ni «días seguros».
- [x] Probabilidad de embarazo ni uso de la ventana para buscarlo o evitarlo (solo el aviso de que no sirve para eso).
- [x] Señales corporales de la ovulación.
- [x] Cifras en días.
- [x] Deseo sexual, atractivo, actividad sexual, consentimiento, límites ni disponibilidad, tampoco para negarlos.
- [x] Energía, ánimo o conducta atribuidos a la fase.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | El estereotipo más extendido de esta fase es sexual. QNA podría desmentirlo de forma directa, pero H-05 impide nombrarlo. | **Aceptada (05-11-2026):** no se nombra (O-04), aunque en la fase folicular sí se nombran los estereotipos: H-05 prevalece. QNA lo cubre con «lo que quiere» y «no es una señal para actuar». La persona revisora valora si basta. |
| D-02 | QPC menciona el embarazo para decir que la ventana no sirve para ello. Es la única mención a la fertilidad en las tarjetas. | **Aceptada (05-11-2026):** se mantiene como límite de seguridad, no como información de fertilidad. Coherente con `01-cycle-phases`, límite 3. |
| D-03 | «Cuándo es más probable» podía leerse como una precisión que la ventana no tiene: contiene la ovulación en ~37–58 % de los ciclos (JUA-27 §2). | **Aceptada (05-11-2026):** QPC dice «marca un momento aproximado». |
| D-04 | Como en la fase folicular, «óvulo» en lugar de «ovocito». | **Aceptada (05-11-2026):** igual que D-01 de la fase folicular. |
| D-05 | La trazabilidad del cálculo cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. |

### 7. Qué debe valorar la persona revisora

- Si la definición de QPC es correcta y si «un momento aproximado» describe bien la ventana (D-03).
- Si el aviso sobre el embarazo es suficiente y no da información de fertilidad (D-02).
- Si QNA cubre el estereotipo sexual sin nombrarlo (D-01).

### 8. Historial

#### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la ventana ovulatoria estimada.
- Reglas propias O-01 a O-06, sobre las comunes H-01 a H-08.
- Cinco decisiones, todas aceptadas el 05-11-2026.

#### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- O-03 precisa que la explicación de la ventana fértil está en la pantalla educativa y que la salud reproductiva es contenido válido.
- La rueda mantiene «Ventana ovulatoria estimada», sin «fértil» (decisión del 06-11-2026).
- Pantalla educativa asociada: `ovulatoria-v0.1.0.md` (rama de JUA-36).

### Referencias

1. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
4. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
5. NHS — Periods and fertility in the menstrual cycle (revisada el 05-01-2023). <https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/>
6. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
7. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>

---

# Parte 5 · Fase lútea

*Origen: `home-cards-luteal-v0.1.0.md (rama de JUA-19, PR #9)`. Copia sin cambios; ya está en el paquete de revisión clínica de JUA-16.*

**Estado:** Borrador para revisión de producto. **No enviado a revisión clínica.**
**Origen:** decisión D-05 de [`spm-tdpm-v0.4.0.md`](./spm-tdpm-v0.4.0.md). Este conjunto se incluye **expresamente** en el paquete y en el alcance de revisión de JUA-16; no queda cubierto por la revisión de la pantalla SPM/TDPM.
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que no es definitivo.
**Público y tono:** los de la sección 1 de `spm-tdpm-v0.4.0.md`: la pareja que acompaña, en segunda persona, con alfabetización menstrual y sin paternalismo.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las cuatro tarjetas cuando la home muestra la fase lútea estimada. Cualquier cambio exige una nueva versión y su revisión contra las reglas C-01 a C-04 de la pantalla SPM/TDPM.

### 1. Reglas

| ID | Regla |
|---|---|
| H-01 | Las cuatro tarjetas son las mismas durante toda la fase lútea estimada. No cambian según el día del ciclo, la cercanía de la menstruación ni ningún dato local. |
| H-02 | Las tarjetas no nombran SPM ni TDPM y no presentan cambios físicos o emocionales como algo que tu pareja vaya a tener o esté teniendo (C-01). |
| H-03 | Cualquier mención de variabilidad premenstrual usa «algunas personas», «puede» e información general (C-02). |
| H-04 | Las tarjetas no enlazan directamente a la pantalla SPM/TDPM ni cambian de color o de tono según la fase (C-03, U-03). El acceso sigue siendo «Cómo funciona». |
| H-05 | Ninguna tarjeta menciona ni sugiere deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad. |

### 2. Texto de las tarjetas

#### QPC · Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase lútea va desde la ovulación hasta la siguiente menstruación. En ella, el cuerpo lúteo produce hormonas, entre ellas la progesterona, que preparan el revestimiento del útero; si no hay embarazo, ese revestimiento se desprende con la menstruación.
> Hacia el final de esta fase, algunas personas notan cambios físicos o de ánimo, y otras no. Una fecha calculada no confirma que nada de esto esté ocurriendo así en tu pareja.

#### QPP · Qué puedes preguntarle

**Antetítulo:** Conversación

> «¿Cómo estás hoy? ¿Hay algo que prefieras que tenga en cuenta?»
> Una pregunta abierta deja espacio para escuchar sin dar nada por hecho.

#### QTT · Qué te toca a ti

**Antetítulo:** Acción propia

> Organiza tus propias responsabilidades, comunica tus planes con claridad y deja margen para ajustar la logística si tu pareja lo pide.

#### QNA · Qué no asumir

**Antetítulo:** Antiestereotipo

> Que se acerque la menstruación no explica cómo se siente tu pareja, qué necesita ni cómo quiere que actúes. Atribuir una tensión al ciclo puede restar valor a lo que te está diciendo: preguntar funciona mejor que suponer.

### 3. Cambios respecto al prototipo

| Tarjeta | Cambio | Motivo |
|---|---|---|
| QPC | Se añade qué ocurre en la fase (cuerpo lúteo, progesterona, revestimiento del útero) y una frase sobre variabilidad al final de la fase. Se conserva el límite de la fecha calculada, ahora referido a «tu pareja». | Ofrecer información asociada a la fase, como la home pretende, sin que sea predictiva. Ver D-01 y D-02. |
| QPP | Sin cambios. | El texto ya cumple T-03 y la especificación del panel. |
| QTT | «la otra persona» pasa a «tu pareja»; «espacio» pasa a «margen». | Coherencia con el público definido y para no repetir «espacio» con QPP. |
| QNA | Se sustituye «Una fase estimada no explica…» por una formulación centrada en la cercanía de la menstruación y en el sesgo de atribución. | Es el momento en que más pesa el estereotipo premenstrual; coherente con SPM-05. |

### 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada en JUA-10 |
|---|---|---|---|
| QPC · definición | La fase lútea sigue a la ovulación y termina antes de la siguiente menstruación; el cuerpo lúteo se forma a partir del folículo. | [1] [2] [3] | `01-cycle-phases` (definición educativa de fase lútea, `luteal_educational`). |
| QPC · hormonas | El cuerpo lúteo produce progesterona, que prepara el revestimiento del útero; sin embarazo, se desprende con la menstruación. | [1] | Fisiología general de [1], citada en `01-cycle-phases`. **No auditada como afirmación propia** (ver D-02). |
| QPC · variabilidad | Algunas personas notan cambios antes de la menstruación y otras no. | [4] [5] | `audit-07` §4.2; `12-health-emotional-cognitive` EC-02; SPM-02. |
| QPC · límite | Una fecha calculada no confirma la fase ni lo que ocurre en una persona. | [3] [6] | `01-cycle-phases` (método de calendario); `12-health-emotional-cognitive` EC-05. |
| QPP | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| QTT | Acción propia sobre tareas, planes y logística. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| QNA | La fase no explica estados ni necesidades; sesgo de atribución. | [5] [7] | `12-health-emotional-cognitive` EC-02, EC-07; SPM-04 y SPM-05. |

### 5. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] SPM, TDPM ni ningún término diagnóstico.
- [x] Síntomas presentados como esperables en tu pareja, ni listas de síntomas.
- [x] Explicaciones hormonales de emociones, conductas o síntomas concretos.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni confirmación de ovulación.
- [x] Duraciones fijas («14 días») ni diagnósticos de fase lútea corta o deficiente.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase «Hacia el final de esta fase, algunas personas notan cambios físicos o de ánimo, y otras no» da información asociada a la fase, pero puede llevar a leer la home como un aviso. | **Resuelta (07-10-2026):** se mantiene y se pide a la persona revisora que la valore expresamente en JUA-16. |
| D-02 | La mención de la progesterona es fisiología general, pero las auditorías de JUA-10 desaconsejan explicar síntomas por hormonas, y la frase no se auditó como afirmación propia. | **Resuelta (07-10-2026):** se mantiene y se incluye en el alcance de la revisión clínica de JUA-16. Alternativa si la revisión lo pide: «el cuerpo prepara el revestimiento del útero», sin nombrar hormonas. |
| D-03 | JUA-5 está cerrada y no hay una incidencia para el contenido de las tarjetas de la home. | **Resuelta (07-10-2026):** se abre JUA-23 para las tarjetas de todas las fases, relacionada con JUA-16, JUA-19 y JUA-5. Este documento cubre solo la fase lútea. |

### 7. Historial

#### [0.1.0] — Borrador inicial

- Primera versión fijada de las cuatro tarjetas de la fase lútea, a partir del prototipo de JUA-5.
- Reglas H-01 a H-05, alineadas con C-01 a C-04 de la pantalla SPM/TDPM.
- Tres decisiones, resueltas el 07-10-2026 sin cambios en el texto mostrado.

### Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
4. Premenstrual Syndrome (PMS), FAQ057 — ACOG (revisado 11-2025). <https://www.acog.org/womens-health/faqs/premenstrual-syndrome>
5. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>
6. Menstrual cycle effects on cognitive performance: A meta-analysis (2025). <https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576>
7. Premenstrual syndrome — NICE Clinical Knowledge Summaries (revisado 09-2024). <https://cks.nice.org.uk/topics/premenstrual-syndrome/>
