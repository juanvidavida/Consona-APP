# Consona — Tarjetas de la home en la fase folicular v0.4.0

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](./home-cards-index.md).
**Cuándo se muestra:** después de la menstruación y hasta la ventana ovulatoria estimada (ME-05, RU-05).
**Parte de:** el texto provisional de [`src/App.jsx`](../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la fase folicular. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

## 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| F-01 | Las tarjetas no dan por hecho que el sangrado haya terminado ni que continúe (ME-05). |
| F-02 | Se puede dar el intervalo «entre 15 y 20 días» contando los días de la regla, siempre junto a que es la parte del ciclo que más cambia (excepción de H-06). No se usa «del día 1 al 14» ni ninguna duración fija. |
| F-03 | No se atribuye a la fase más energía, mejor ánimo, más ganas de hacer cosas ni más rendimiento (H-08). |
| F-04 | No se da por hecho que en ese ciclo vaya a haber ovulación. |

## 2. Texto de las tarjetas

### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase folicular empieza con la menstruación y llega hasta la ovulación. En ella maduran folículos en los ovarios hasta que normalmente uno libera un óvulo. Esos folículos producen hormonas, entre ellas los estrógenos, que vuelven a engrosar el revestimiento del útero. Contando los días de la regla, suele durar entre 15 y 20 días, pero es la parte del ciclo que más cambia: puede ser bastante más corta o más larga, incluso en la misma mujer.
> Una fecha calculada no te dice en qué punto está su ciclo ni cómo se encuentra tu pareja.

### Qué no asumir

**Antetítulo:** Antiestereotipo

> Esta parte del ciclo no significa que tu pareja tenga más energía, mejor ánimo o más ganas de hacer planes. Es una idea muy extendida que conviene revisar: la evidencia científica no la respalda, y cada mujer y cada ciclo son distintos.

### Cómo acompañar

**Antetítulo:** Comunicación y tu parte

> «¿Cómo te va esta semana? ¿Hay algo que te apetezca que hagamos o que prefieras dejar para otro momento?»
> Preguntar por sus planes, y no por su ciclo, abre una conversación sin etiquetas.
> Cuenta tus planes y da tú el primer paso en lo que os toque organizar juntos. No hace falta organizar nada en función de su ciclo.

## 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la fase folicular: muestra en todas las fases la «Qué pasa en su cuerpo» de la fase lútea y unas «Qué puedes preguntarle», «Qué te toca a ti» y «Qué no asumir» genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Texto nuevo sobre la fase folicular, con los estrógenos como conocimiento básico. | El texto del prototipo describe la fase lútea; D-02. |
| Cómo acompañar · pregunta | La pregunta genérica pasa a una sobre planes. | Variar la conversación entre fases sin referirse al ciclo. |
| Cómo acompañar · acción propia | La logística general se concreta en compartir planes y dar el primer paso. | Acción propia concreta. |
| Qué no asumir | Se sustituye «Una fase estimada no explica…» por el estereotipo de esta fase: más energía y mejor ánimo. | Es la idea más extendida sobre la fase folicular y la evidencia no la sostiene. **JUA-36:** FO-A08 a FO-A12 y FO-A14: sin cambios de rendimiento ni de esfuerzo percibido con la fase verificada en sangre (IronFEMME, Madrid; FENDURA), sin cambios cognitivos, y en población general la fase pesa poco frente a la salud, el estrés y el apoyo. |

## 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| Qué pasa en su cuerpo · definición | La fase folicular empieza con la menstruación y dura hasta la ovulación. | [1] [2] | `01-cycle-phases` (afirmación auditada, moderada; definición `follicular_educational`). **JUA-36:** FO-A01. |
| Qué pasa en su cuerpo · folículos | En ella maduran folículos hasta que normalmente uno libera un óvulo. | [1] [3] | `01-cycle-phases` (definición de fase folicular: «desarrollo de folículos hasta la ovulación»; definición de ovulación de ACOG). **JUA-36:** FO-A02 (Reed y Carr 2018). |
| Qué pasa en su cuerpo · hormonas | Los folículos producen hormonas, entre ellas los estrógenos, que vuelven a engrosar el revestimiento del útero. | [1] | **Auditada en JUA-36:** FO-A03 y FO-A04 (Reed y Carr 2018; Critchley 2020; Jain 2022, en texto completo). Se mantiene en la revisión clínica de JUA-16. |
| Qué pasa en su cuerpo · variación | Contando los días de la regla, suele durar entre 15 y 20 días; es la parte del ciclo que más cambia, incluso en la misma mujer. | [2] [4] [5] | `01-cycle-phases` («su duración contribuye en gran medida a la variación»); JUA-27 §2: mediana de 17 días, RIC 15–20, «la fase que más varía». En `main` desde el PR #12. **JUA-36:** FO-A06, FO-A07. |
| Qué pasa en su cuerpo · límite | Una fecha calculada no indica el punto del ciclo ni cómo está la persona. | [6] | `01-cycle-phases` (método de calendario); `12-health-emotional-cognitive` EC-05. **JUA-36:** FO-A07; SGF-04. |
| Cómo acompañar · pregunta | Pregunta abierta sobre planes en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| Cómo acompañar · acción propia | Acción propia sobre planes y organización. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| Qué no asumir | No hay evidencia de más energía o mejor ánimo por fase. | [2] [7] | `08-health-energy` (conclusión operativa: ninguna afirmación de «energía alta» por fase alcanza evidencia alta); `12-health-emotional-cognitive` EC-01, EC-02. |

## 5. Exclusiones comprobadas

La v0.2.0 no contiene:

- [x] Afirmaciones de que el sangrado haya terminado o continúe.
- [x] Duraciones fijas («del día 1 al 14», «dos semanas»).
- [x] Energía, ánimo, rendimiento o capacidad atribuidos a la fase.
- [x] Explicaciones hormonales de emociones, conductas o síntomas. Los estrógenos solo aparecen como fisiología del útero.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni ovulación confirmada.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La taxonomía de JUA-10 usa «ovocito»; el público entiende mejor «óvulo». | **Aceptada (05-11-2026):** «óvulo» en las tarjetas y «ovocito» en «Cómo funciona» si hace falta precisión. Validar en la revisión clínica. |
| D-02 | Las auditorías de JUA-10 desaconsejan explicar estados por hormonas, pero nombrar las hormonas del ciclo es conocimiento básico. | **Resuelta (05-11-2026):** se nombran los estrógenos, solo como fisiología del útero, igual que la progesterona en la fase lútea. La afirmación entra en la revisión clínica de JUA-16. |
| D-03 | «Qué no asumir» nombra el estereotipo («más energía, mejor ánimo») para desmentirlo. Nombrarlo también lo difunde. | **Resuelta (05-11-2026):** se nombran los estereotipos para que el texto sea accesible, aunque sea a costa de difundirlos. |
| D-04 | La trazabilidad de la variación cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. **Cerrada (10-11-2026):** el PR #12 está fusionado y la ruta `docs/research/JUA-27-duraciones-referencia.md` es válida. |
| D-05 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |
| D-06 | El orden de las tarjetas iba de la información a la acción y de vuelta a una advertencia; el antetítulo «Conversación y acción propia» se quedaba corto; el gesto de la menstruación daba por hecho que la pareja vive junta. | **Resuelta (11-11-2026):** orden «Qué pasa en su cuerpo» → «Qué no asumir» → «Cómo acompañar», de modo que el conocimiento va primero y la tarjeta termina en una acción propia; antetítulo «Comunicación y tu parte»; «lo que compartís» en lugar de «en casa». |

## 7. Qué debe valorar la persona revisora

- Si «hasta que normalmente uno libera un óvulo» es correcto sin dar por hecho que todos los ciclos son ovulatorios.
- Si la frase sobre los estrógenos y el revestimiento del útero es correcta (D-02).
- Si «Qué no asumir» desmiente el estereotipo sin reforzarlo (D-03).

## 8. Historial

### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la fase folicular.
- Reglas propias F-01 a F-04, sobre las comunes H-01 a H-08.
- Cuatro decisiones, todas resueltas o aceptadas el 05-11-2026: «óvulo», estrógenos, estereotipos nombrados y cita de JUA-27.

### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- La afirmación sobre los estrógenos deja de estar «no auditada» (D-02).
- Pantalla educativa asociada: `folicular-v0.2.0.md` (rama de JUA-36).

### [0.2.0] — Enmienda del 10-11-2026

- Trazabilidad: JUA-27 (PR #12) ya está en `main`.
- **Sin cambios en el texto de las tarjetas**, por eso conservan la versión.

### [0.3.0] — 11-11-2026

- «Qué pasa en su cuerpo» añade el intervalo «entre 15 y 20 días» contando los días de la regla: mediana de 17 días y rango intercuartílico de 15 a 20 (Najmabadi 2020; FO-A06; JUA-27 §2). Excepción de H-06 (F-02).
- «Qué no asumir»: «la evidencia científica no la respalda»; «cada mujer y cada ciclo son distintos».

### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de FOL-06: contar tus planes y dar el primer paso, sin organizar nada en función del ciclo.
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.
- «Qué no asumir»: «una idea muy extendida que conviene revisar».

### [0.4.0] — Orden y antetítulo (11-11-2026)

- Orden de las tarjetas: «Qué pasa en su cuerpo», «Qué no asumir» y «Cómo acompañar».
- «Cómo acompañar» lleva el antetítulo «Comunicación y tu parte».

## Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
4. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
5. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
6. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
7. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>
