# Consona — Pantalla educativa «La ventana ovulatoria» v0.2.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío. Nombre visible decidido el 06-11-2026 (D-01).
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/ovulatoria/`](../research/fases/ovulatoria/). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, información de fertilidad, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

## 1. Público, tono, ubicación y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.3.0.md`, secciones 1 a 3), con dos añadidos:

- **Reglas de la fase:** O-01 a O-06 de las tarjetas de JUA-23, y reglas de sesgo SGO-01 a SGO-05 de `03-sesgo-genero.md`. **Excepción a O-05 en esta pantalla:** OVU-02 menciona el dolor de ovulación (D-05), sin cifras, sin decir si es probable y sin presentarlo como forma de saber si ha habido ovulación. Las tarjetas de la home siguen sin mencionarlo.
- **R-08:** ningún icono, color ni ilustración asociado a la fertilidad, el embarazo, el atractivo o la sexualidad.
- **R-09:** la pantalla incluye siempre información de salud reproductiva: que la ventana no sirve como método anticonceptivo ni para buscar embarazo, y a dónde acudir para informarse (OVU-05, OVU-07, DER-01). Decisión de producto del 06-11-2026 (D-04).

### Coherencia con la rueda y con las tarjetas de la home

La rueda dibuja la ventana con bordes difusos (JUA-27 §3.4) y las tarjetas de la ventana ovulatoria (`home-cards-ovulatory-v0.4.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las tres piezas se revisa contra las otras.

## 2. Texto de la pantalla

### OVU-00 · Título

**La ventana ovulatoria**

### OVU-01 · Nota fija

> Consona ofrece educación general. No diagnostica, no detecta la ovulación y no sirve como método anticonceptivo.

### OVU-02 · Qué es la ovulación

La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días, sino un hecho puntual.

Ocurre al final de la fase folicular: cuando los estrógenos llegan a un nivel alto, provocan la subida de otra hormona que, en un día o dos, desencadena la ovulación. Después empieza la fase lútea.

Algunas mujeres notan una molestia leve en un lado del bajo vientre hacia la mitad del ciclo. No sirve para saber si ha habido ovulación, y si el dolor es fuerte o no se pasa, merece consultarse.

### OVU-03 · Lo que ves en Consona

Consona no sabe cuándo ovula nadie. Lo que ves en la rueda del ciclo es una ventana calculada hacia atrás desde la fecha prevista de la siguiente regla, y por eso tiene los bordes difusos.

Es un momento aproximado. El día de la ovulación cambia mucho de una mujer a otra y de un ciclo a otro, y en bastantes ciclos ocurre antes o después de la ventana. La idea de que la ovulación ocurre el día 14 es un mito: muy pocas mujeres tienen ciclos exactos de 28 días.

Los días en que la rueda pasa de una fase a otra los calcula Consona a partir de las fechas. Son una estimación, no el momento en que cambia el cuerpo.

### OVU-04 · No todos los ciclos tienen ovulación

Que la regla llegue con regularidad no confirma que haya habido ovulación. En un estudio con población general, al menos uno de cada cuatro ciclos de duración normal no mostraba signos de ovulación. Un ciclo sin ovulación de vez en cuando es frecuente, y la app no puede saber si ha ocurrido.

### OVU-05 · Ovulación y embarazo

Un embarazo solo es posible en unos pocos días de cada ciclo: los cinco anteriores a la ovulación y el propio día de la ovulación. Es lo que a veces se llama «ventana fértil». Dura eso porque los espermatozoides pueden seguir siendo capaces de fecundar durante varios días; después de la ovulación, en cambio, la posibilidad de embarazo baja muy deprisa.

Pero como el momento de la ovulación no se puede saber por calendario, esos días tampoco. Por eso la ventana que ves en Consona no es una ventana fértil ni sirve para calcularla.

### OVU-05b · No sirve para buscar ni para evitar un embarazo

Ninguna ventana de calendario, tampoco la de Consona, sirve para saber cuándo es posible un embarazo. Como la ovulación puede adelantarse o retrasarse mucho, hay muy pocos días del ciclo en los que un embarazo sea imposible, incluso el día en que se espera la regla. Hay quien usa los «días fértiles» de su app para decidir cuándo tomar precauciones, y es un riesgo: el calendario no puede saber cuándo ha habido ovulación.

Para evitar un embarazo hace falta un método fiable. Para buscarlo, también ayuda el consejo profesional (ver DER-01).

### OVU-06 · Lo que la ventana no dice

Que la app marque esta ventana no dice nada de cómo se siente tu pareja, de lo que quiere ni de cómo está vuestra relación. No hay evidencia de que en este momento el ánimo o las capacidades mejoren; de hecho, algunas mujeres se encuentran peor a mitad de ciclo y la mayoría no nota cambios en este momento.

Es una fecha calculada, no algo que le esté pasando ni una señal para actuar.

### OVU-07 · Acompañar en consonancia

Como cualquier otro día, lo que sirve es preguntar y hacer tu parte.

Algunas preguntas que dejan espacio:
- «¿Cómo te encuentras hoy?»
- «¿Hay algo en lo que te pueda echar una mano?»

Si en algún momento habláis de anticoncepción o de buscar un embarazo, es una conversación a dos que merece información fiable, no el cálculo de una app.

### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

### OVU-08 · Fuentes

Esta información se basa en la fisiología del ciclo (2018), una opinión de comité de la Sociedad Americana de Medicina Reproductiva sobre la ventana fértil (2022), estudios sobre el momento de la ovulación y la fecundación con miles de ciclos (1995 a 2020), un estudio con población general noruega (2015), una revisión sistemática sobre métodos basados en el conocimiento de la fertilidad (2018) un estudio de la Universidad de Granada sobre el uso de apps menstruales (2019) y la Encuesta de Anticoncepción en España de la Sociedad Española de Contracepción (2024). Las referencias completas están disponibles en «Fuentes».

## 3. Mensaje de derivación

### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de OVU-07.

> **Anticoncepción y búsqueda de embarazo**
> Si queréis evitar un embarazo o buscarlo, un profesional sanitario puede orientaros sobre métodos fiables y sobre cómo funciona el ciclo de cada mujer. El centro de salud (medicina de familia o matrona) o un centro de atención a la salud sexual y reproductiva son buenos puntos de partida.

Fuente: `jua-10/01-cycle-phases.md`, límite 3 («nunca sustituye […] método anticonceptivo»); OS-08; OS-09; OS-16 (en España, la mayoría elige su método con un profesional: ginecología, medicina de familia, matrona o centro de planificación).

## 4. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| OVU-01 | Límites de la app | O-02, O-03; SGO-02 |
| OVU-02 | Definición y mecanismo; dolor de ovulación sin cifras, sin valor para detectar la ovulación y con cuándo consultar | OV-A01, OV-A02; OV-A17 (OS-20, OS-21, OS-24, OS-25) |
| OVU-03 | Ventana calculada, aproximada; variabilidad; mito del día 14; límites entre fases calculados por el motor | OV-A03 a OV-A05; SGO-03; motor de estimación CON-032 (ADR-001 C9) |
| OVU-04 | Ciclos sin ovulación | OV-A06 (OS-07); SGO-04 |
| OVU-05 | Ventana fértil de seis días; supervivencia de los espermatozoides y caída tras la ovulación; imposibilidad de calcularla por calendario | OV-A12, OV-A13 (OS-14, OS-15); OV-A04 |
| OVU-05b | Límite anticonceptivo; pocos días sin posibilidad de embarazo; uso real de las apps | OV-A07, OV-A08, OV-A14 (OS-06, OS-08, OS-09); SGO-02 |
| OVU-06 | Ánimo, capacidades y estado de la pareja | OV-A11; O-04, SGO-01 |
| OVU-07 | Papel de la pareja | Regla T-02 |
| DER-01 | Derivación | `jua-10/01`; OS-08; OS-16 |

## 5. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | Nombre visible de la fase. «Ovulación» a secas es impreciso (es un hecho puntual, no se detecta y sugiere certeza). Se valoró «Ventana ovulatoria y fértil estimada». | **Resuelta (06-11-2026):** la rueda mantiene «Ventana ovulatoria estimada», sin «fértil»; el título de la pantalla es «La ventana ovulatoria»; la relación entre ovulación y embarazo se explica en el texto (OVU-05). |
| D-02 | OVU-04 daba una proporción («entre una cuarta parte y un tercio»). Procede de un estudio con edad media de 42 años y una sola medición. | **Resuelta (06-11-2026):** «al menos uno de cada cuatro ciclos», el límite inferior del estudio. Se pide igualmente valoración en la revisión clínica. |
| D-03 | OVU-05b menciona que hay quien usa las apps para decidir cuándo tomar precauciones. | **Resuelta (06-11-2026):** se mantiene; es el motivo del aviso y está documentado en España (OS-09). |
| D-04 | OVU-07 menciona la conversación sobre anticoncepción. Podía parecer que rozaba el ámbito sexual (H-05). | **Resuelta (06-11-2026):** la salud reproductiva es contenido válido de Consona y debe estar presente. H-05 excluye el deseo, la actividad sexual, el consentimiento sexual, los límites y la disponibilidad, no la anticoncepción ni la búsqueda de embarazo. Presencia garantizada en OVU-05, OVU-07 y DER-01 (R-09). |
| D-05 | La pantalla no mencionaba el dolor de ovulación, que algunas personas notan. | **Resuelta (06-11-2026):** se menciona en OVU-02, sin cifras y sin decir si es probable o no: «Algunas personas notan una molestia leve en un lado del bajo vientre hacia la mitad del ciclo. No sirve para saber si ha habido ovulación, y si el dolor es fuerte o no se pasa, merece consultarse.» Base: OV-A17 (los estudios clásicos con ecografía describen un dolor leve, corto y previo a la ovulación; el NHS, cuándo consultar; la cohorte de endometriosis, por qué el dolor fuerte merece consulta). |
| D-06 | OVU-05 explica la ventana fértil y la supervivencia de los gametos sin cifras de horas ni de probabilidad. | **Resuelta (06-11-2026):** se mantiene sin cifras de horas ni de probabilidad. Se pide igualmente valoración en la revisión clínica. |

## 6. Historial

### [0.2.0] — 11-11-2026

- OVU-03 pasa a llamarse «Lo que ves en Consona», como en las demás pantallas de fase, y añade quién calcula los cambios de fase (CON-032).
- «Mujeres» en lugar de «personas» en las afirmaciones generales (D-07 de la pantalla SPM/TDPM).
- DER-01: «el ciclo de cada mujer».

### [0.1.0] — 06-11-2026

- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques OVU-00 a OVU-08 y DER-01.
- Cinco decisiones abiertas; el nombre visible está pendiente.
- 06-11-2026: D-05 y D-06 resueltas. OVU-02 menciona el dolor de ovulación.
- 06-11-2026: DER-01 nombra la medicina de familia y la matrona (encuesta de la SEC de 2024). OVU-08 añade las fuentes de la ventana fértil, que faltaban, y la encuesta.
- 06-11-2026: OVU-05b añade que hay muy pocos días sin posibilidad de embarazo (Wilcox 2000, verificado en texto completo).
- 06-11-2026: D-01 a D-04 resueltas. Nuevo bloque OVU-05 «Ovulación y embarazo»; el aviso anticonceptivo pasa a OVU-05b. Nueva decisión D-06.
- 08-11-2026: OVU-05 deja de afirmar que el óvulo solo puede fecundarse durante poco tiempo. Wilcox 1995, verificado en texto completo, lo plantea como una de dos hipótesis; la pantalla dice solo lo observado: la posibilidad de embarazo baja muy deprisa tras la ovulación.
