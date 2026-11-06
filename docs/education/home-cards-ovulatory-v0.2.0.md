# Consona — Tarjetas de la home en la ventana ovulatoria estimada v0.2.0

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Cuándo se muestra:** en el segmento de la rueda de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (RU-05; JUA-27 §3.3).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las cuatro tarjetas cuando la home muestra la ventana ovulatoria estimada. Es la fase con más riesgo de lectura errónea (fertilidad, deseo), por eso tiene más reglas propias. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

## 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| O-01 | Siempre «ventana ovulatoria estimada». Nunca «día de ovulación», «estás ovulando», «días fértiles», «periodo fértil» ni «días seguros» (RU-03; JUA-27 §3.4). |
| O-02 | Se explica que la ventana es un cálculo por fechas: no detecta ni confirma la ovulación, ni que ocurra en todos los ciclos. |
| O-03 | Se dice expresamente que la ventana no sirve para buscar ni para evitar un embarazo. Las tarjetas no dan más información de fertilidad; la relación entre ovulación y embarazo se explica en la pantalla educativa (OVU-05). La salud reproductiva es contenido válido (decisión del 06-11-2026). |
| O-04 | H-05 se aplica sin excepción, también en QNA: no se nombra el deseo ni el atractivo, ni siquiera para desmentirlo. |
| O-05 | No se mencionan señales corporales de la ovulación (moco cervical, dolor ovulatorio, temperatura), porque invitarían a observar el cuerpo de tu pareja. |
| O-06 | Sin cifras en días. |

## 2. Texto de las tarjetas

### QPC · Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días, sino un hecho puntual cuyo momento cambia de un ciclo a otro. Esta ventana marca un momento aproximado, calculado hacia atrás desde la fecha prevista de la siguiente regla.
> Es solo un cálculo: no detecta si la ovulación ha ocurrido ni cuándo, y no sirve para buscar ni para evitar un embarazo.

### QPP · Qué puedes preguntarle

**Antetítulo:** Conversación

> «¿Cómo te encuentras hoy? ¿Hay algo en lo que te pueda echar una mano?»
> Lo que te cuente dice mucho más que cualquier fecha del calendario.

### QTT · Qué te toca a ti

**Antetítulo:** Acción propia

> Mantén tus compromisos y tu parte de las tareas como cualquier otro día. Si tenéis una decisión pendiente, sácala tú en la conversación en lugar de esperar.

### QNA · Qué no asumir

**Antetítulo:** Antiestereotipo

> Que la app marque esta ventana no dice nada de cómo se siente tu pareja, de lo que quiere ni de cómo está vuestra relación. Es una fecha calculada, no algo que le esté pasando ni una señal para actuar.

## 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la ventana ovulatoria: muestra en todas las fases la QPC de la fase lútea y unas QPP, QTT y QNA genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| QPC | Texto nuevo: la ovulación como hecho puntual y la ventana como cálculo, con su límite para el embarazo. | El texto del prototipo describe la fase lútea; O-01 a O-03. |
| QPP | La pregunta genérica pasa a una oferta de ayuda abierta. | Variar la conversación entre fases sin referirse al ciclo. |
| QTT | La logística general se concreta en compromisos, tareas y decisiones pendientes. | Acción propia concreta; mostrar que nada cambia por la fecha. |
| QNA | Se sustituye «Una fase estimada no explica…» por «no es una señal para actuar», sin nombrar el deseo. | O-04: el estereotipo de esta fase es sexual y H-05 impide nombrarlo. **JUA-36:** OV-A10, OV-A11; SGO-01. |

## 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| QPC · definición | La ovulación es la liberación de un óvulo por un ovario; es un evento, no una fase de duración fija. | [1] [2] | `01-cycle-phases` (afirmación auditada de consenso clínico; definición de ovulación y nota de taxonomía). **JUA-36:** OV-A01, OV-A02. |
| QPC · variación | Su momento cambia de un ciclo a otro. | [3] [4] | `01-cycle-phases` (variación dentro de la misma persona, Najmabadi); JUA-27 §3.2. Rama de JUA-27, PR #12, **pendiente de fusionar**. **JUA-36:** OV-A03 (el día 14 es un mito). |
| QPC · cálculo | La ventana se calcula hacia atrás desde la fecha prevista de la siguiente regla. | [5] | JUA-27 §3.3 y §3.4 (ventana `[L−14, L−12]`). Rama de JUA-27, PR #12. **JUA-36:** OV-A04, OV-A05. |
| QPC · límite | No detecta ni confirma la ovulación; no sirve para buscar ni evitar un embarazo. | [1] [6] | `01-cycle-phases` (límites 2 y 3: «no detecta ni confirma»; «nunca sustituye […] método anticonceptivo»). **JUA-36:** OV-A06, OV-A07, OV-A08 (uso real de las apps en España, Universidad de Granada) y OV-A12. |
| QPP | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| QTT | Acción propia sobre compromisos, tareas y decisiones. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| QNA | Una fase no explica estados, deseos ni conducta. | [6] [7] | `01-cycle-phases` (límite 4 y afirmación sobre atribución causal); `12-health-emotional-cognitive` EC-02. |

## 5. Exclusiones comprobadas

La v0.2.0 no contiene:

- [x] «Día de ovulación», «estás ovulando», «días fértiles», «periodo fértil» ni «días seguros».
- [x] Probabilidad de embarazo ni uso de la ventana para buscarlo o evitarlo (solo el aviso de que no sirve para eso).
- [x] Señales corporales de la ovulación.
- [x] Cifras en días.
- [x] Deseo sexual, atractivo, actividad sexual, consentimiento, límites ni disponibilidad, tampoco para negarlos.
- [x] Energía, ánimo o conducta atribuidos a la fase.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | El estereotipo más extendido de esta fase es sexual. QNA podría desmentirlo de forma directa, pero H-05 impide nombrarlo. | **Aceptada (05-11-2026):** no se nombra (O-04), aunque en la fase folicular sí se nombran los estereotipos: H-05 prevalece. QNA lo cubre con «lo que quiere» y «no es una señal para actuar». La persona revisora valora si basta. |
| D-02 | QPC menciona el embarazo para decir que la ventana no sirve para ello. Es la única mención a la fertilidad en las tarjetas. | **Aceptada (05-11-2026):** se mantiene como límite de seguridad, no como información de fertilidad. Coherente con `01-cycle-phases`, límite 3. |
| D-03 | «Cuándo es más probable» podía leerse como una precisión que la ventana no tiene: contiene la ovulación en ~37–58 % de los ciclos (JUA-27 §2). | **Aceptada (05-11-2026):** QPC dice «marca un momento aproximado». |
| D-04 | Como en la fase folicular, «óvulo» en lugar de «ovocito». | **Aceptada (05-11-2026):** igual que D-01 de la fase folicular. |
| D-05 | La trazabilidad del cálculo cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. |

## 7. Qué debe valorar la persona revisora

- Si la definición de QPC es correcta y si «un momento aproximado» describe bien la ventana (D-03).
- Si el aviso sobre el embarazo es suficiente y no da información de fertilidad (D-02).
- Si QNA cubre el estereotipo sexual sin nombrarlo (D-01).

## 8. Historial

### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la ventana ovulatoria estimada.
- Reglas propias O-01 a O-06, sobre las comunes H-01 a H-08.
- Cinco decisiones, todas aceptadas el 05-11-2026.

### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- O-03 precisa que la explicación de la ventana fértil está en la pantalla educativa y que la salud reproductiva es contenido válido.
- La rueda mantiene «Ventana ovulatoria estimada», sin «fértil» (decisión del 06-11-2026).
- Pantalla educativa asociada: `ovulatoria-v0.1.0.md` (rama de JUA-36).

## Referencias

1. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
4. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
5. NHS — Periods and fertility in the menstrual cycle (revisada el 05-01-2023). <https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/>
6. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
7. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>
