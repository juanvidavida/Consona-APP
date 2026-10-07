# Consona — Tarjetas de la home en fase lútea v0.1.0

**Estado:** Borrador para revisión de producto. **No enviado a revisión clínica.**
**Origen:** decisión D-05 de [`spm-tdpm-v0.3.0.md`](./spm-tdpm-v0.3.0.md). Este conjunto se incluye **expresamente** en el paquete y en el alcance de revisión de JUA-16; no queda cubierto por la revisión de la pantalla SPM/TDPM.
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que no es definitivo.
**Público y tono:** los de la sección 1 de `spm-tdpm-v0.3.0.md`: la pareja que acompaña, en segunda persona, con alfabetización menstrual y sin paternalismo.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las cuatro tarjetas cuando la home muestra la fase lútea estimada. Cualquier cambio exige una nueva versión y su revisión contra las reglas C-01 a C-04 de la pantalla SPM/TDPM.

## 1. Reglas

| ID | Regla |
|---|---|
| H-01 | Las cuatro tarjetas son las mismas durante toda la fase lútea estimada. No cambian según el día del ciclo, la cercanía de la menstruación ni ningún dato local. |
| H-02 | Las tarjetas no nombran SPM ni TDPM y no presentan cambios físicos o emocionales como algo que tu pareja vaya a tener o esté teniendo (C-01). |
| H-03 | Cualquier mención de variabilidad premenstrual usa «algunas personas», «puede» e información general (C-02). |
| H-04 | Las tarjetas no enlazan directamente a la pantalla SPM/TDPM ni cambian de color o de tono según la fase (C-03, U-03). El acceso sigue siendo «Cómo funciona». |
| H-05 | Ninguna tarjeta menciona ni sugiere deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad. |

## 2. Texto de las tarjetas

### QPC · Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase lútea va desde la ovulación hasta la siguiente menstruación. En ella, el cuerpo lúteo produce hormonas, entre ellas la progesterona, que preparan el revestimiento del útero; si no hay embarazo, ese revestimiento se desprende con la menstruación.
> Hacia el final de esta fase, algunas personas notan cambios físicos o de ánimo, y otras no. Una fecha calculada no confirma que nada de esto esté ocurriendo así en tu pareja.

### QPP · Qué puedes preguntarle

**Antetítulo:** Conversación

> «¿Cómo estás hoy? ¿Hay algo que prefieras que tenga en cuenta?»
> Una pregunta abierta deja espacio para escuchar sin dar nada por hecho.

### QTT · Qué te toca a ti

**Antetítulo:** Acción propia

> Organiza tus propias responsabilidades, comunica tus planes con claridad y deja margen para ajustar la logística si tu pareja lo pide.

### QNA · Qué no asumir

**Antetítulo:** Antiestereotipo

> Que se acerque la menstruación no explica cómo se siente tu pareja, qué necesita ni cómo quiere que actúes. Atribuir una tensión al ciclo puede restar valor a lo que te está diciendo: preguntar funciona mejor que suponer.

## 3. Cambios respecto al prototipo

| Tarjeta | Cambio | Motivo |
|---|---|---|
| QPC | Se añade qué ocurre en la fase (cuerpo lúteo, progesterona, revestimiento del útero) y una frase sobre variabilidad al final de la fase. Se conserva el límite de la fecha calculada, ahora referido a «tu pareja». | Ofrecer información asociada a la fase, como la home pretende, sin que sea predictiva. Ver D-01 y D-02. |
| QPP | Sin cambios. | El texto ya cumple T-03 y la especificación del panel. |
| QTT | «la otra persona» pasa a «tu pareja»; «espacio» pasa a «margen». | Coherencia con el público definido y para no repetir «espacio» con QPP. |
| QNA | Se sustituye «Una fase estimada no explica…» por una formulación centrada en la cercanía de la menstruación y en el sesgo de atribución. | Es el momento en que más pesa el estereotipo premenstrual; coherente con SPM-05. |

## 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada en JUA-10 |
|---|---|---|---|
| QPC · definición | La fase lútea sigue a la ovulación y termina antes de la siguiente menstruación; el cuerpo lúteo se forma a partir del folículo. | [1] [2] [3] | `01-cycle-phases` (definición educativa de fase lútea, `luteal_educational`). |
| QPC · hormonas | El cuerpo lúteo produce progesterona, que prepara el revestimiento del útero; sin embarazo, se desprende con la menstruación. | [1] | Fisiología general de [1], citada en `01-cycle-phases`. **No auditada como afirmación propia** (ver D-02). |
| QPC · variabilidad | Algunas personas notan cambios antes de la menstruación y otras no. | [4] [5] | `audit-07` §4.2; `12-health-emotional-cognitive` EC-02; SPM-02. |
| QPC · límite | Una fecha calculada no confirma la fase ni lo que ocurre en una persona. | [3] [6] | `01-cycle-phases` (método de calendario); `12-health-emotional-cognitive` EC-05. |
| QPP | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| QTT | Acción propia sobre tareas, planes y logística. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| QNA | La fase no explica estados ni necesidades; sesgo de atribución. | [5] [7] | `12-health-emotional-cognitive` EC-02, EC-07; SPM-04 y SPM-05. |

## 5. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] SPM, TDPM ni ningún término diagnóstico.
- [x] Síntomas presentados como esperables en tu pareja, ni listas de síntomas.
- [x] Explicaciones hormonales de emociones, conductas o síntomas concretos.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni confirmación de ovulación.
- [x] Duraciones fijas («14 días») ni diagnósticos de fase lútea corta o deficiente.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase «Hacia el final de esta fase, algunas personas notan cambios físicos o de ánimo, y otras no» da información asociada a la fase, pero puede llevar a leer la home como un aviso. | **Resuelta (07-10-2026):** se mantiene y se pide a la persona revisora que la valore expresamente en JUA-16. |
| D-02 | La mención de la progesterona es fisiología general, pero las auditorías de JUA-10 desaconsejan explicar síntomas por hormonas, y la frase no se auditó como afirmación propia. | **Resuelta (07-10-2026):** se mantiene y se incluye en el alcance de la revisión clínica de JUA-16. Alternativa si la revisión lo pide: «el cuerpo prepara el revestimiento del útero», sin nombrar hormonas. |
| D-03 | JUA-5 está cerrada y no hay una incidencia para el contenido de las tarjetas de la home. | **Resuelta (07-10-2026):** se abre JUA-23 para las tarjetas de todas las fases, relacionada con JUA-16, JUA-19 y JUA-5. Este documento cubre solo la fase lútea. |

## 7. Historial

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
