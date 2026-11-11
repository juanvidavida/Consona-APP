# Consona — Tarjetas de la home en fase lútea v0.3.0

**Issues:** JUA-19 (origen) y JUA-23 (reglas comunes).
**Estado:** Borrador para revisión de producto. **Incluido en el paquete de revisión clínica de JUA-16**, pendiente de envío.
**Origen:** decisión D-05 de [`spm-tdpm-v0.6.0.md`](./spm-tdpm-v0.6.0.md). Este conjunto se incluye **expresamente** en el alcance de JUA-16; no queda cubierto por la revisión de la pantalla SPM/TDPM.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Base de investigación:** [`docs/research/fases/lutea/`](../research/fases/lutea/) (JUA-36).
**Cuándo se muestra:** durante toda la fase lútea estimada, incluidos los días previos a la menstruación (sección 2 del índice).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que no es definitivo.
**Público y tono:** los de la sección 1 de `spm-tdpm-v0.6.0.md`: la pareja que acompaña, en segunda persona, con alfabetización menstrual y sin paternalismo.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la fase lútea estimada. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice y las reglas C-01 a C-04 de la pantalla SPM/TDPM.

## 1. Reglas propias de la fase

Se aplican las reglas comunes H-01 a H-08 del índice. Desde la v0.2.0 sustituyen a las reglas H-01 a H-05 de la v0.1.0, que el índice generalizó. Además:

| ID | Regla |
|---|---|
| L-01 | Las tarjetas no cambian en los días previos a la menstruación ni nombran SPM o TDPM (H-01, H-02; C-01 de la pantalla SPM/TDPM). |
| L-02 | Duración aproximada: «unos 12 días», siempre con «suele» y «también varía», igual que LUT-03 y la rueda (excepción de H-06). Sin «fase lútea corta», «deficiencia lútea» ni «progesterona baja» (SGL-05). |
| L-03 | La progesterona solo aparece como fisiología del útero, nunca para explicar ánimo, energía ni conducta (H-08; SGL-02). |
| L-04 | «Qué no asumir» nombra el estereotipo de la mujer «premenstrual» para desmentirlo (SGL-01). Es la misma idea que LUT-06 de `lutea-v0.2.0.md` y SPM-05 de `spm-tdpm-v0.6.0.md`, repetida a propósito (D-04). |
| L-05 | La fase no se presenta como «la fase mala», ni como una semana que exija un trato especial (SGL-04). |

## 2. Texto de las tarjetas

### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase lútea va desde la ovulación hasta la siguiente menstruación. El folículo que liberó el óvulo se transforma en el cuerpo lúteo, que produce sobre todo progesterona: prepara el revestimiento del útero por si hubiera un embarazo. Si no lo hay, bajan las hormonas y empieza la menstruación. Suele durar unos 12 días, y es la parte del ciclo cuya duración menos cambia, aunque también varía.
> Hacia el final de esta fase, algunas mujeres notan cambios físicos o de ánimo, y otras no. Una fecha calculada no confirma que haya habido ovulación ni te dice cómo se encuentra tu pareja.

### Cómo acompañar

**Antetítulo:** Conversación y acción propia

> «¿Cómo estás hoy? ¿Hay algo que prefieras que tenga en cuenta?»
> Una pregunta abierta deja espacio para escuchar sin dar nada por hecho. Si prefiere no hablar, también es una respuesta.
> Como cualquier otra semana: organiza tus propias responsabilidades, comunica tus planes con claridad y deja margen para ajustar la logística si tu pareja lo pide.

### Qué no asumir

**Antetítulo:** Antiestereotipo

> La imagen de la mujer «premenstrual» irritable o fuera de control es un estereotipo, y hace daño. Que se acerque la menstruación no explica cómo se siente tu pareja, qué necesita ni cómo quiere que actúes. Atribuir una tensión al ciclo puede restar valor a lo que te está diciendo: preguntar funciona mejor que suponer.

## 3. Cambios

### Respecto a la v0.1.0

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | El cuerpo lúteo se presenta como el folículo que liberó el óvulo; la progesterona «prepara el revestimiento del útero por si hubiera un embarazo»; se añade que es la parte del ciclo cuya duración menos cambia, aunque también varía. El límite final dice que una fecha calculada no confirma que haya habido ovulación. | Redacción segura del cierre de la fase lútea (LU-A02, LU-A03, LU-A05, LU-A07). Mismo esquema que la «Qué pasa en su cuerpo» de la fase folicular («la parte del ciclo cuya duración más cambia»). |
| Cómo acompañar · pregunta | Se añade «Si prefiere no hablar, también es una respuesta». | Coherencia con SPM-07: respetar la respuesta, también si prefiere no hablar. |
| Cómo acompañar · acción propia | Se antepone «Como cualquier otra semana». | Evita presentar la fase como una semana que exige un trato especial (SGL-04, L-05). |
| Qué no asumir | Se nombra y se desmiente el estereotipo de la mujer «premenstrual». | Decisión de producto del 10-11-2026 (D-04): explicarlo en varias piezas refuerza su importancia (SGL-01; LU-A12). |
| Reglas | H-01 a H-05 propias pasan a las comunes H-01 a H-08 del índice, más L-01 a L-05. | El índice de JUA-23 generalizó las reglas de esta fase. |

### Respecto al prototipo (v0.1.0)

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Se añadió qué ocurre en la fase y una frase sobre variabilidad al final de la fase. | Ofrecer información asociada a la fase sin que sea predictiva. Ver D-01 y D-02. |
| Cómo acompañar · pregunta | Sin cambios. | Ya cumplía T-03 y la especificación del panel. |
| Cómo acompañar · acción propia | «la otra persona» pasó a «tu pareja»; «espacio», a «margen». | Coherencia con el público definido. |
| Qué no asumir | «Una fase estimada no explica…» pasó a una formulación centrada en la cercanía de la menstruación y en el sesgo de atribución. | Es el momento en que más pesa el estereotipo premenstrual; coherente con SPM-05. |

## 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| Qué pasa en su cuerpo · definición | La fase lútea va de la ovulación a la siguiente menstruación; el cuerpo lúteo se forma a partir del folículo que liberó el óvulo. | [1] [2] [8] [9] | `01-cycle-phases` (`luteal_educational`). **JUA-36:** LU-A01, LU-A02 (LS-01, LS-02 [V]). |
| Qué pasa en su cuerpo · hormonas | El cuerpo lúteo produce sobre todo progesterona, que prepara el revestimiento del útero por si hubiera un embarazo; sin embarazo, bajan las hormonas y empieza la menstruación. | [8] [9] | **JUA-36:** LU-A02, LU-A03 (LS-01, LS-02, LS-03 [V]), evidencia alta. Antes no estaba auditada como afirmación propia (D-02). |
| Qué pasa en su cuerpo · duración | Suele durar unos 12 días; es la parte del ciclo cuya duración menos cambia, aunque también varía. | [10] | **JUA-36:** LU-A05 (LS-04, LS-07 [V]): en el 58,8 % de las mujeres, la fase lútea varió más de 3 días entre ciclos. «Unos 12 días»: LU-A04 (LS-04, LS-05, LS-06, LS-08 [V]), evidencia moderada; es la duración que dibuja la rueda (JUA-27). Excepción de H-06 desde la v0.3.0. |
| Qué pasa en su cuerpo · variabilidad | Algunas personas notan cambios antes de la menstruación y otras no. | [4] [5] [7] | `audit-07` §4.2; `12-health-emotional-cognitive` EC-02; SPM-02. **JUA-36:** LU-A09 (LS-11), LU-A10 (LS-12 a LS-15). |
| Qué pasa en su cuerpo · límite | Una fecha calculada no confirma que haya habido ovulación ni el estado de una persona. | [3] [6] [11] | `01-cycle-phases` (método de calendario); `12-health-emotional-cognitive` EC-05. **JUA-36:** LU-A06, LU-A07 (LS-10 [V]: al menos uno de cada cuatro ciclos de duración normal sin signos de ovulación). |
| Cómo acompañar · pregunta | Pregunta abierta; respetar que prefiera no hablar. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5; SPM-07. |
| Cómo acompañar · acción propia | Acción propia sobre tareas, planes y logística, sin trato especial por la fase. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. **JUA-36:** SGL-04. |
| Qué no asumir · estereotipo | La imagen de la mujer «premenstrual» irritable o fuera de control es un estereotipo, y hace daño. | [12] [13] | **JUA-36:** LU-A12 (LS-13, LS-18 [V]); ME-A17 (S-20 [V]: también circula entre hombres); SGL-01. |
| Qué no asumir · atribución | La fase no explica estados ni necesidades; sesgo de atribución. | [5] [7] [12] | `12-health-emotional-cognitive` EC-02, EC-07; SPM-04 y SPM-05. **JUA-36:** LU-A13 (LS-19 [V]). |

## 5. Exclusiones comprobadas

La v0.3.0 no contiene:

- [x] SPM, TDPM ni ningún término diagnóstico.
- [x] Síntomas presentados como esperables en tu pareja, ni listas de síntomas.
- [x] Explicaciones hormonales de emociones, conductas o síntomas concretos.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni confirmación de ovulación.
- [x] Duraciones en días distintas de «unos 12 días», ni diagnósticos de fase lútea corta o deficiente.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.
- [x] El estereotipo «premenstrual» presentado de otra forma que para desmentirlo.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase «Hacia el final de esta fase, algunas personas notan cambios físicos o de ánimo, y otras no» da información asociada a la fase, pero puede llevar a leer la home como un aviso. | **Resuelta (07-10-2026):** se mantiene y se pide a la persona revisora que la valore expresamente en JUA-16. |
| D-02 | La mención de la progesterona es fisiología general, pero las auditorías de JUA-10 desaconsejan explicar síntomas por hormonas, y la frase no se auditó como afirmación propia. | **Resuelta (07-10-2026)** y **auditada el 10-11-2026** en JUA-36 (LU-A02, evidencia alta). Se mantiene la pregunta a la persona revisora. Alternativa si la revisión lo pide: «el cuerpo prepara el revestimiento del útero», sin nombrar hormonas. |
| D-03 | JUA-5 está cerrada y no hay una incidencia para el contenido de las tarjetas de la home. | **Resuelta (07-10-2026):** se abre JUA-23 para las tarjetas de todas las fases, relacionada con JUA-16, JUA-19 y JUA-5. |
| D-04 | ¿Nombrar el estereotipo «premenstrual» en la home, además de en las pantallas de la fase lútea y SPM/TDPM? | **Resuelta (10-11-2026):** sí. Explicarlo en más de un sitio refuerza su importancia. «Qué no asumir» lo nombra solo para desmentirlo. Se pregunta a la persona revisora si en la home se lee como desmentido y no como aviso. |
| D-05 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |

## 7. Historial

### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de la antigua «Qué te toca a ti», sin cambios.
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.

### [0.3.0] — Comentarios de producto (11-11-2026)

- «Qué pasa en su cuerpo» añade «Suele durar unos 12 días» (L-02; excepción de H-06).
- «Algunas mujeres» en lugar de «algunas personas» (D-07 de la pantalla SPM/TDPM).

### [0.2.0] — Bibliografía de JUA-36 (10-11-2026)

- «Qué pasa en su cuerpo» con la redacción segura de la fase lútea: cuerpo lúteo, progesterona, poca variación de la duración y límite sobre la ovulación.
- «Qué puedes preguntarle» añade que no querer hablar también es una respuesta.
- «Qué te toca a ti»: «Como cualquier otra semana».
- «Qué no asumir» nombra y desmiente el estereotipo de la mujer «premenstrual» (D-04).
- Reglas comunes del índice de JUA-23 y reglas propias L-01 a L-05.
- Trazabilidad a la investigación de la fase lútea de JUA-36.

### [0.1.0] — Enmienda del 06-11-2026

- H-04 recoge el segundo acceso a la pantalla SPM/TDPM desde «La fase lútea» (JUA-36). El texto de las tarjetas no cambia.

### [0.1.0] — Borrador inicial

- Primera versión fijada de las cuatro tarjetas de la fase lútea, a partir del prototipo de JUA-5.
- Reglas H-01 a H-05, alineadas con C-01 a C-04 de la pantalla SPM/TDPM.
- Tres decisiones, resueltas el 07-10-2026 sin cambios en el texto mostrado.

## Referencias

[1]: https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle "Office on Women's Health — Your menstrual cycle"

[2]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/ "Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations"

[3]: https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/ "Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations"

[4]: https://www.acog.org/womens-health/faqs/premenstrual-syndrome "Premenstrual Syndrome (PMS), FAQ057 — ACOG (revisado 11-2025)"

[5]: https://www.sciencedirect.com/science/article/pii/S1550857912001349 "Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012)"

[6]: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576 "Menstrual cycle effects on cognitive performance: A meta-analysis (2025)"

[7]: https://cks.nice.org.uk/topics/premenstrual-syndrome/ "Premenstrual syndrome — NICE Clinical Knowledge Summaries (revisado 09-2024)"

[8]: https://www.ncbi.nlm.nih.gov/books/NBK279054/ "Reed BG, Carr BR. The normal menstrual cycle and the control of ovulation. Endotext (actualizado 05-08-2018)"

[9]: https://pmc.ncbi.nlm.nih.gov/articles/PMC9098793/ "Jain V, et al. Uterine bleeding: how understanding endometrial physiology underpins menstrual health. Nat Rev Endocrinol 2022"

[10]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/ "Najmabadi S, et al. Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility. Paediatr Perinat Epidemiol 2020"

[11]: https://pmc.ncbi.nlm.nih.gov/articles/PMC4546331/ "Prior JC, et al. Ovulation prevalence in women with spontaneous normal-length menstrual cycles (HUNT3, Norway). PLoS One 2015"

[12]: https://doi.org/10.1159/000339370 "Romans SE, et al. Mood and the menstrual cycle. Psychother Psychosom 2013;82(1):53–60"

[13]: https://doi.org/10.1007/978-981-15-0614-7_17 "Johnston-Robledo I, Chrisler JC. The menstrual mark: menstruation as social stigma. Palgrave Handbook of Critical Menstruation Studies, 2020"
