# Consona — Pantalla educativa «La ventana ovulatoria» v0.1.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío. **Nombre visible pendiente de decisión** (D-01).
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/ovulatoria/`](../research/fases/ovulatoria/). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, información de fertilidad, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

## 1. Público, tono, ubicación y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.1.0.md`, secciones 1 a 3), con dos añadidos:

- **Reglas de la fase:** O-01 a O-06 de las tarjetas de JUA-23, y reglas de sesgo SGO-01 a SGO-05 de `03-sesgo-genero.md`.
- **R-08:** ningún icono, color ni ilustración asociado a la fertilidad, el embarazo, el atractivo o la sexualidad.

### Coherencia con la rueda y con las tarjetas de la home

La rueda dibuja la ventana con bordes difusos (JUA-27 §3.4) y las tarjetas de la ventana ovulatoria (`home-cards-ovulatory-v0.1.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las tres piezas se revisa contra las otras.

## 2. Texto de la pantalla

### OVU-00 · Título

**La ventana ovulatoria** *(provisional; ver D-01)*

### OVU-01 · Nota fija

> Consona ofrece educación general. No diagnostica, no detecta la ovulación y no sirve como método anticonceptivo.

### OVU-02 · Qué es la ovulación

La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días, sino un hecho puntual.

Ocurre al final de la fase folicular: cuando los estrógenos llegan a un nivel alto, provocan la subida de otra hormona que, en un día o dos, desencadena la ovulación. Después empieza la fase lútea.

### OVU-03 · Qué es la ventana que ves en Consona

Consona no sabe cuándo ovula nadie. Lo que ves en la rueda es una ventana calculada hacia atrás desde la fecha prevista de la siguiente regla, y por eso tiene los bordes difusos.

Es un momento aproximado. El día de la ovulación cambia mucho de una persona a otra y de un ciclo a otro, y en bastantes ciclos ocurre antes o después de la ventana. La idea de que la ovulación ocurre el día 14 es un mito: muy pocas personas tienen ciclos exactos de 28 días.

### OVU-04 · No todos los ciclos tienen ovulación

Que la regla llegue con regularidad no confirma que haya habido ovulación. En un estudio con población general, entre una cuarta parte y un tercio de los ciclos de duración normal no mostraban signos de ovulación. Un ciclo sin ovulación de vez en cuando es frecuente, y la app no puede saber si ha ocurrido.

### OVU-05 · No sirve para buscar ni para evitar un embarazo

Ninguna ventana de calendario, tampoco la de Consona, sirve para saber cuándo es posible un embarazo. Hay quien usa los «días fértiles» de su app para decidir cuándo tomar precauciones, y es un riesgo: el calendario no puede saber cuándo ha habido ovulación.

Para evitar un embarazo hace falta un método fiable. Para buscarlo, también ayuda el consejo profesional (ver DER-01).

### OVU-06 · Lo que la ventana no dice

Que la app marque esta ventana no dice nada de cómo se siente tu pareja, de lo que quiere ni de cómo está vuestra relación. No hay evidencia de que en este momento el ánimo o las capacidades mejoren; de hecho, algunas personas se encuentran peor a mitad de ciclo y la mayoría no nota cambios en este momento.

Es una fecha calculada, no algo que le esté pasando ni una señal para actuar.

### OVU-07 · Acompañar en consonancia

Como cualquier otro día, lo que sirve es preguntar y hacer tu parte.

Algunas preguntas que dejan espacio:
- «¿Cómo te encuentras hoy?»
- «¿Hay algo en lo que te pueda echar una mano?»

Si en algún momento habláis de anticoncepción o de buscar un embarazo, es una conversación a dos que merece información fiable, no el cálculo de una app.

### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

### OVU-08 · Fuentes

Esta información se basa en la fisiología del ciclo (2018), estudios sobre el momento de la ovulación con miles de ciclos (2000 a 2020), un estudio con población general noruega (2015), una revisión sistemática sobre métodos basados en el conocimiento de la fertilidad (2018) y un estudio de la Universidad de Granada sobre el uso de apps menstruales (2019). Las referencias completas están disponibles en «Fuentes».

## 3. Mensaje de derivación

### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de OVU-07.

> **Anticoncepción y búsqueda de embarazo**
> Si queréis evitar un embarazo o buscarlo, un profesional sanitario puede orientaros sobre métodos fiables y sobre cómo funciona el ciclo de cada persona. El centro de salud o un centro de atención a la salud sexual y reproductiva son buenos puntos de partida.

Fuente: `jua-10/01-cycle-phases.md`, límite 3 («nunca sustituye […] método anticonceptivo»); OS-08; OS-09.

## 4. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| OVU-01 | Límites de la app | O-02, O-03; SGO-02 |
| OVU-02 | Definición y mecanismo | OV-A01, OV-A02 |
| OVU-03 | Ventana calculada, aproximada; variabilidad; mito del día 14 | OV-A03 a OV-A05; SGO-03 |
| OVU-04 | Ciclos sin ovulación | OV-A06 (OS-07); SGO-04 |
| OVU-05 | Límite anticonceptivo; uso real de las apps | OV-A07, OV-A08 (OS-08, OS-09); SGO-02 |
| OVU-06 | Ánimo, capacidades y estado de la pareja | OV-A11; O-04, SGO-01 |
| OVU-07 | Papel de la pareja | Regla T-02 |
| DER-01 | Derivación | `jua-10/01`; OS-08 |

## 5. Decisiones abiertas

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | Nombre visible de la fase. «Ovulación» a secas es impreciso (es un hecho puntual, no se detecta y sugiere certeza). | Mantener «Ventana ovulatoria estimada» en la rueda y «La ventana ovulatoria» como título de la pantalla. Alternativa: «Ovulación aproximada». Decide producto. |
| D-02 | OVU-04 da una proporción («entre una cuarta parte y un tercio»). Procede de un estudio con edad media de 42 años y una sola medición. | Mantenerla, porque desmonta la idea de que toda regla regular implica ovulación. Pedir valoración en la revisión clínica. |
| D-03 | OVU-05 menciona que hay quien usa las apps para decidir cuándo tomar precauciones. | Mantenerlo: es el motivo del aviso y está documentado en España (OS-09). |
| D-04 | OVU-07 menciona la conversación sobre anticoncepción. Roza el ámbito sexual (H-05). | Mantenerlo: no habla de deseo ni de disponibilidad, sino de salud reproductiva y de decisiones compartidas. Validar en la revisión clínica. |
| D-05 | La pantalla no menciona el dolor de ovulación, que algunas personas notan. | No mencionarlo (O-05). |

## 6. Historial

### [0.1.0] — 06-11-2026

- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques OVU-00 a OVU-08 y DER-01.
- Cinco decisiones abiertas; el nombre visible está pendiente.
