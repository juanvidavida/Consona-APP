# Consona — Pantalla educativa «La menstruación» v0.1.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío.
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/menstruacion/`](../research/fases/menstruacion/). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio de redacción, orden o mensaje de derivación exige una nueva versión y una nueva revisión clínica de lo modificado.

## 1. Público y tono

**Quién lee:** la persona que acompaña, es decir, la pareja de la persona que menstrúa. Los mensajes de seguridad también deben servir si quien lee es la persona que menstrúa.

**Para qué:** entender qué es la menstruación y qué no dice, para acompañar en consonancia sin interpretar, anticipar ni explicar a la otra persona.

Se aplican las reglas de tono T-01 a T-04 de la pantalla SPM/TDPM (`spm-tdpm-v0.4.0.md`, rama de JUA-19, PR #9):

- **T-01:** educativo, no paternalista.
- **T-02:** la pareja es la autoridad sobre su propia experiencia.
- **T-03:** preguntar en lugar de suponer.
- **T-04:** lo general habla de «personas»; lo individual, de «tu pareja».

Y las reglas de sesgo SG-01 a SG-07 de `03-sesgo-genero.md`.

## 2. Ubicación

| ID | Regla |
|---|---|
| U-01 | Es un artículo de «Comprender» (pantalla 2.3), en el índice de «El cuerpo en cada fase». |
| U-02 | El enlace es siempre visible y tiene el mismo texto para todas las personas. No aparece, cambia ni se destaca según la fase estimada, la fecha o cualquier dato local. |
| U-03 | La home no enlaza directamente a esta pantalla ni muestra avisos que remitan a ella. |
| U-04 | Se puede volver al índice de «Comprender» con un control visible y accesible para lector de pantalla. |

### Coherencia con las tarjetas de la home

Las tarjetas de la menstruación (`home-cards-menstruation-v0.2.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las dos se revisa contra la otra antes de publicarse.

## 3. Reglas de la pantalla

| ID | Regla |
|---|---|
| R-01 | El contenido es estático e idéntico para todas las personas. No depende de fechas, fase estimada, registros, consentimiento ni ningún dato. |
| R-02 | La pantalla no pide, muestra ni conserva datos. |
| R-03 | Abrir la pantalla, desplazarse o pulsar un número de ayuda no genera eventos, analítica, telemetría ni comunicación con ningún servidor. |
| R-04 | El mensaje de ayuda urgente (DER-02) aparece en la primera vista, sin desplazarse ni desplegar nada. |
| R-05 | Los números de teléfono se muestran como texto legible; un enlace `tel:` es opcional. |
| R-06 | Sin iconos, colores ni ilustraciones que asocien la menstruación con suciedad, vergüenza, riesgo, gravedad, sexualidad o disponibilidad. |
| R-07 | Sin indicador de «leído», progreso ni rachas (JUA-31). |

## 4. Texto de la pantalla

Los identificadores no se muestran en la interfaz.

### MEN-00 · Título

**La menstruación**

### MEN-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

### DER-02 · Ayuda urgente (ver sección 5)

### MEN-02 · Qué es

El útero tiene un revestimiento interno que, en cada ciclo, se prepara por si hubiera un embarazo. Si no lo hay, bajan las hormonas que lo mantenían y se desprende su capa más superficial: eso es la menstruación. La capa más profunda se queda y regenera el revestimiento en pocos días, sin dejar cicatriz.

Es un proceso que el cuerpo repite ciclo tras ciclo. Su primer día marca el inicio de un nuevo ciclo, y por eso Consona cuenta los días a partir de él.

### MEN-03 · Cuánto dura

Suele durar unos 5 días, aunque cambia de una persona a otra y de un ciclo a otro. En los primeros días, el flujo suele ser mayor.

Si tu pareja ha indicado cuánto le suele durar, Consona usa ese dato. Si no, usa 5 días como referencia general.

### MEN-04 · El dolor

El dolor menstrual es muy frecuente: en España, más de siete de cada diez mujeres de 15 a 49 años dicen tener dolor con la regla, y casi la mitad necesita medicación para aliviarlo. Se debe sobre todo a unas sustancias, las prostaglandinas, que hacen que el útero se contraiga con fuerza, y suele ser mayor los primeros días. Algunas personas notan además cansancio u otras molestias; otras no notan nada.

Que sea frecuente no significa que haya que aguantarlo. Un dolor que impide hacer vida normal, que cambia o que va a más merece consultarse, porque puede tener causas que se pueden tratar. Durante mucho tiempo este dolor se ha tratado como algo normal, también en las consultas, y eso ha retrasado diagnósticos durante años.

### MEN-05 · Lo que la menstruación no dice

La investigación no muestra que la menstruación cambie la capacidad de concentrarse, razonar o rendir.

El ánimo puede variar a lo largo del ciclo, pero en promedio varía poco, y en el día a día depende mucho más de la salud, del estrés y del apoyo que de la fase. Una media no dice cómo está tu pareja hoy. El estereotipo de que con la regla alguien está irritable o fuera de control no se sostiene, y hace daño: lleva a no tomarse en serio lo que esa persona dice o siente.

### MEN-06 · Lo que no se suele contar

Mucha gente sigue con su día a día con dolor y no dice por qué. En España, una de cada cuatro mujeres ha sentido alguna vez que necesitaba faltar al trabajo, a clase o a otra actividad por el dolor o el sangrado de la regla, pero solo una de cada siete lo ha hecho. La mitad cree que faltar por ese motivo puede traerle consecuencias en el trabajo.

En España, la ley reconoce desde 2023 la salud menstrual como parte de la salud sexual y reproductiva y prevé una baja cuando la menstruación es incapacitante por una enfermedad diagnosticada.

### MEN-07 · Acompañar en consonancia

Tu pareja es quien sabe cómo está. Tu papel no es interpretar su ciclo, sino preguntar, escuchar y hacer tu parte.

Algunas preguntas que dejan espacio:
- «¿Hay algo que te venga bien hoy?»
- «¿Prefieres que todo siga como siempre?»

Hay cosas que dependen de ti: ocuparte de tu parte en casa sin esperar a que te lo pidan y ajustar los planes según lo que te diga. Hablar de la regla con la misma naturalidad que de cualquier otra cosa, sin bromas ni comentarios, también es hacer tu parte. Si a tu pareja le preocupa su dolor, tomárselo en serio también es acompañar.

### DER-01 · Cuándo puede ayudar un profesional (ver sección 5)

### MEN-08 · Fuentes

Esta información se basa en revisiones científicas sobre la fisiología del endometrio (2020 y 2022), metaanálisis sobre el dolor menstrual (2019) y sobre el ciclo y las capacidades cognitivas (2025), la Encuesta de Anticoncepción en España de la Sociedad Española de Contracepción (2024), estudios españoles con estudiantes universitarias (2018 y 2020), un estudio cualitativo realizado en Barcelona (2022), guías del Colegio Americano de Obstetras y Ginecólogos (ACOG) y de la Sociedad de Obstetras y Ginecólogos de Canadá (SOGC), y la Ley Orgánica 1/2023. Las referencias completas están disponibles en «Fuentes».

## 5. Mensajes de derivación

Estáticos y siempre visibles en la posición indicada. No se activan por fechas, fase ni registros.

### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de MEN-07.

> **Cuándo puede ayudar un profesional**
> Si el dolor le impide hacer vida normal, si cambia o va a más, si el sangrado dura más de una semana, es tan abundante que dificulta el día a día o aparece entre reglas, un profesional sanitario puede valorarlo. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

Fuentes: ACOG CPG No. 11 y FAQ de dolor menstrual (cierre de JUA-10); FAQ de ACOG sobre sangrado uterino anormal (`jua-10/13`). El sangrado entre reglas es uno de los parámetros de sangrado anormal de FIGO (S-01, S-03).

### DER-02 · Ayuda urgente

**Posición:** después de MEN-01, en la primera vista.

> **Si hay un sangrado muy abundante con mareo**
> Si el sangrado empapa cada hora una o más compresas, tampones o prendas de ropa interior absorbente, o llena la copa en una hora, durante más de dos horas seguidas, y además hay mareo, sensación de desmayo, falta de aire o dolor en el pecho, llama al **112**.

Fuente: criterio público de ACOG para acudir a urgencias (`jua-10/13`, consenso clínico), formulado para compresas y tampones. La copa y la ropa interior absorbente son una adaptación editorial (D-05), apoyada en el NHS, *Heavy periods* (revisado el 19-09-2024), que incluye la copa en su definición de sangrado abundante. Pendiente de validación clínica.

## 6. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| MEN-02 | Fisiología, desencadenante, reparación y día 1 del ciclo | ME-A01 a ME-A04 |
| MEN-03 | Duración típica y flujo de los primeros días; uso del dato declarado | ME-A05, ME-A06; M-02 de JUA-23 |
| MEN-04 | Prevalencia y necesidad de medicación en España, mecanismo, momento del dolor, otras molestias, cuándo consultar y normalización, también en las consultas españolas | ME-A09, ME-A10 (S-26), ME-A12, ME-A16, ME-A19 (S-27) |
| MEN-05 | Sin cambios cognitivos; variación pequeña del ánimo; estereotipo y su efecto | ME-A13, ME-A15, ME-A17 (S-13, S-21) |
| MEN-06 | Seguir con dolor sin decirlo; necesidad de faltar frente a faltar de hecho y temor a consecuencias laborales en España; marco legal español | ME-A11 (S-11, S-26); ME-A20 |
| MEN-07 | Papel de la pareja | ME-A18, ME-A19; SG-06 |
| DER-01 | Criterios de consulta | Cierre de JUA-10 (auditoría 06); `jua-10/13` |
| DER-02 | Criterio de urgencia | `jua-10/13` (ACOG) |

## 7. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | MEN-04 da una cifra de prevalencia («más de siete de cada diez»), ahora de población general española (S-26) y no solo de mujeres jóvenes. Puede leerse como «lo normal es que le duela». | **Resuelta (06-11-2026):** se mantiene la cifra. Se pide igualmente valoración en la revisión clínica. |
| D-02 | MEN-06 citaba un estudio de los Países Bajos porque no había un dato español equivalente. | **Resuelta (06-11-2026):** confirmada la sustitución por los datos españoles de la encuesta de la SEC de 2024 (S-26). |
| D-03 | MEN-04 alude a los diagnósticos retrasados sin nombrar la endometriosis. | **Resuelta (06-11-2026):** no se nombra la endometriosis. La revisión clínica puede valorar si nombrarla ayuda a reconocer el problema. |
| D-04 | MEN-07 pide «no hacer bromas sobre la regla». Es una instrucción directa, y T-01 evita el tono de sermón. | **Resuelta (06-11-2026):** se plantea en positivo: «Hablar de la regla con la misma naturalidad que de cualquier otra cosa, sin bromas ni comentarios, también es hacer tu parte». Validar el tono con usuarios del piloto (P-05 del cierre). |
| D-05 | DER-02 habla de «compresas o tampones». Hay otros productos (copa, ropa interior absorbente) con los que el criterio de ACOG no se puede aplicar igual. | **Resuelta (06-11-2026):** DER-02 incluye la copa y la ropa interior absorbente. La equivalencia es una adaptación editorial del criterio de ACOG, que solo habla de compresas y tampones; se apoya en que el NHS incluye la copa en su definición de sangrado abundante (revisado el 19-09-2024). La revisión clínica debe validarla. |

## 8. Historial

### [0.1.0] — 05-11-2026

- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques MEN-00 a MEN-08, DER-01 y DER-02.
- Cinco decisiones abiertas.
- 06-11-2026: decisiones D-01 a D-05 resueltas. DER-02 incluye la copa y la ropa interior absorbente. MEN-07 plantea en positivo lo de las bromas (D-04).
- 06-11-2026: MEN-04 y MEN-06 pasan a datos de población general española (encuesta de la SEC de 2024); el dato de los Países Bajos sale de la pantalla (D-02).
- 06-11-2026: MEN-05 incorpora los estudios de registro diario en población general (Romans 2013; Kiesner 2016 y 2022).
- 05-11-2026: fisiología y estigma reforzados con Critchley et al. 2020 y Johnston-Robledo y Chrisler, verificados en texto completo. Se añade «sin dejar cicatriz» en MEN-02.
