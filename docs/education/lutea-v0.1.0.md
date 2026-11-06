# Consona — Pantalla educativa «La fase lútea» v0.1.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío.
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/lutea/`](../research/fases/lutea/). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

## 1. Público, tono y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.1.0.md`, secciones 1 a 3): reglas de tono T-01 a T-04, de ubicación U-01 a U-04 y de pantalla R-01 a R-07. Añade:

- **Reglas de sesgo:** SGL-01 a SGL-05 de `../research/fases/lutea/03-sesgo-genero.md`.
- **R-08:** ningún icono, color ni ilustración que presente la fase como «mala», que asocie la fase con enfado, tristeza o peligro, o que la relacione con la sexualidad o la disponibilidad.

### Coherencia con otras piezas

Esta pantalla se revisa siempre contra estas tres piezas:

- **La pantalla SPM/TDPM** (`spm-tdpm-v0.4.0.md`, JUA-19, PR #9). Esta pantalla explica la fase entera. La pantalla SPM/TDPM desarrolla los cambios premenstruales y los términos clínicos. LUT-05 resume y enlaza a ella sin repetir sus cifras. El enlace es estático y no cambia según la fase ni ningún dato (U-02). DER-01 y DER-02 reproducen sin cambios sus mensajes de derivación.
- **Las tarjetas de la fase lútea** (`home-cards-luteal-v0.1.0.md`, JUA-19), que resumen esta pantalla.
- **La rueda** (JUA-27), que dibuja la fase lútea con 12 días.

## 2. Texto de la pantalla

Los identificadores no se muestran en la interfaz.

### LUT-00 · Título

**La fase lútea**

### LUT-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

### DER-02 · Ayuda urgente (ver sección 3)

### LUT-02 · Qué es

La fase lútea va desde la ovulación hasta la siguiente menstruación. Después de liberar el óvulo, el folículo que lo contenía se transforma en el cuerpo lúteo, una estructura temporal que produce hormonas, sobre todo progesterona. La progesterona prepara el revestimiento del útero por si hubiera un embarazo.

Si no lo hay, el cuerpo lúteo deja de funcionar al cabo de unos días, bajan las hormonas y el revestimiento se desprende: empieza la menstruación y, con ella, un nuevo ciclo.

### LUT-03 · Cuánto dura

Suele durar unos 12 días, aunque cambia de una persona a otra. Varía menos que la fase folicular: cuando un ciclo es más largo o más corto, suele ser porque la fase folicular ha durado más o menos. Aun así, también cambia de un ciclo a otro.

La idea de que dura siempre 14 días es una simplificación que los estudios actuales no confirman.

### LUT-04 · Lo que ves en Consona

Consona dibuja la fase lútea con 12 días, contados hacia atrás desde la fecha prevista de la siguiente regla. Es una estimación: con las fechas de la regla no se puede saber cuándo hubo ovulación, así que tampoco cuándo empezó de verdad esta fase.

Además, en algunos ciclos no hay ovulación, y entonces tampoco hay fase lútea, aunque la rueda la siga dibujando. Un ciclo sin ovulación de vez en cuando es frecuente.

### LUT-05 · Antes de la regla

Hacia el final de esta fase, algunas personas notan cambios en el cuerpo o en el ánimo: por ejemplo, dolor, hinchazón o cansancio; irritabilidad, tristeza o tensión; o cambios en el sueño o el apetito. Otras no notan ninguno, y en una misma persona puede cambiar de un ciclo a otro.

Cuando los cambios se repiten ciclo tras ciclo y afectan de forma importante al día a día, se habla de síndrome premenstrual (SPM) o, en su forma más intensa y menos frecuente, de trastorno disfórico premenstrual (TDPM). Son términos clínicos que solo puede valorar un profesional. Los explicamos en [«Variabilidad premenstrual: SPM y TDPM»](./spm-tdpm-v0.4.0.md).

### LUT-06 · Lo que la fase lútea no dice

La investigación no muestra que en esta fase cambie la capacidad de concentrarse, razonar o rendir.

En promedio, el ánimo varía poco a lo largo del ciclo, muchas personas no notan ningún cambio ligado a él, y en el día a día pesan mucho más la salud, el estrés y el apoyo.

La imagen de la mujer «premenstrual» irritable, irracional o fuera de control es un estereotipo. Se repite en bromas, anuncios y conversaciones, y por eso parece cierto. Pero cuando se ha estudiado el ánimo día a día sin que las participantes supieran que el estudio trataba del ciclo, ese patrón apenas aparece. Y hace daño: lleva a quitar valor a lo que una persona dice o siente, y también a no tomarse en serio un malestar real.

### LUT-07 · Acompañar en consonancia

Que en la rueda aparezca la fase lútea no te dice cómo está tu pareja. Si notas tensión o la notas distinta, pregúntale en lugar de atribuirlo al ciclo: lo que siente tiene sus razones, y tu pareja es quien mejor puede contarlas.

Algunas preguntas que dejan espacio:
- «¿Cómo estás hoy?»
- «¿Hay algo que te venga bien?»

Y hay una parte que es tuya: cómo respondes, cómo os repartís las tareas y el descanso, y no hacer comentarios ni bromas sobre «estar premenstrual».

### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

### LUT-08 · Fuentes

Esta información se basa en revisiones sobre la fisiología del ciclo y del endometrio (2018 a 2022), estudios sobre la duración de las fases con miles de ciclos (2018 a 2024), una opinión de comité de la Sociedad Americana de Medicina Reproductiva (2026), guías del NICE (2024) y del Colegio Americano de Obstetras y Ginecólogos (2023 y 2025), estudios de registro diario del ánimo (2013 a 2025), metaanálisis sobre el ciclo y las capacidades cognitivas (2025), un estudio español con deportistas (2021) y un estudio cualitativo realizado en Barcelona (2022). Las referencias completas están disponibles en «Fuentes».

## 3. Mensajes de derivación

Estáticos y siempre visibles en la posición indicada. No se activan por fechas, fase ni registros. Reproducen sin cambios los de `spm-tdpm-v0.4.0.md`; si cambian allí, cambian aquí.

### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de LUT-07.

> **Cuándo puede ayudar un profesional**
> Si los cambios preocupan a tu pareja, se repiten, son intensos o le dificultan el día a día —trabajo, estudios, relaciones o descanso—, un profesional sanitario puede valorarlos en contexto. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

Fuente: DER-01 de `spm-tdpm-v0.4.0.md` (`jua-10/12` EC-07, EC-08; `audit-07` §4.4).

### DER-02 · Ayuda urgente

**Posición:** después de LUT-01, en la primera vista (R-04).

> **Si hace falta ayuda ahora**
> Si tu pareja te habla de pensamientos de hacerse daño o de suicidio, o alguien no está a salvo, busca ayuda urgente. No esperes a otro momento del ciclo.
> **En España:**
> - **112** · emergencias.
> - **024** · atención a la conducta suicida; gratuita, 24 horas; también atiende a familiares y personas allegadas.
> - **016** · violencia contra las mujeres; gratuito, confidencial, 24 horas; también por WhatsApp en el 600 000 016.
>
> Estos números también son para ti si eres tú quien lo está pasando mal.

Fuente: DER-02 de `spm-tdpm-v0.4.0.md`, verificado en fuentes oficiales el 07-10-2026 (D-03 y D-04 de JUA-19).

## 4. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| LUT-01 | Límites de la app | `audit-07` §4 |
| LUT-02 | Definición, cuerpo lúteo, progesterona y final de la fase | LU-A01 a LU-A03 (LS-01, LS-02, LS-03) |
| LUT-03 | Duración típica, menor variación que la folicular, variación entre ciclos, mito de los 14 días | LU-A04, LU-A05 (LS-04 a LS-09) |
| LUT-04 | Fase estimada por calendario; ciclos sin ovulación | LU-A06, LU-A07 (JUA-27; LS-10) |
| LUT-05 | Cambios premenstruales variables; SPM y TDPM como términos clínicos | LU-A09 (LS-11); SPM-03 |
| LUT-06 | Sin cambios cognitivos; ánimo con poca variación media; estereotipo y su daño | LU-A10 a LU-A12 (LS-12 a LS-18); SGL-01, SGL-04 |
| LUT-07 | Papel de la pareja; no atribuir al ciclo | LU-A13 (LS-19); SGL-02; T-02 |
| DER-01, DER-02 | Derivación y ayuda urgente | LU-A14; `spm-tdpm-v0.4.0.md` |

## 5. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] Umbrales de duración, «fase lútea corta», «deficiencia lútea» ni «progesterona baja».
- [x] Explicaciones de enfados, tristezas, conflictos o decisiones por la fase o por la progesterona.
- [x] «Está premenstrual» u otras etiquetas para la pareja; SPM y TDPM solo como términos clínicos.
- [x] Cifras de prevalencia de SPM o TDPM.
- [x] Temperatura basal u otras señales corporales.
- [x] Tratamientos, suplementos, dietas ni ejercicio.
- [x] Fertilidad, «días seguros» o fechas de ovulación.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Formularios, registros o cualquier captura de datos.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | DER-02 (ayuda urgente) se repite aquí, además de en la pantalla SPM/TDPM. | **Resuelta (06-11-2026):** se mantiene DER-02. |
| D-02 | LUT-05 da ejemplos de cambios premenstruales. Pueden leerse como una lista para vigilar a la pareja. | **Resuelta (06-11-2026):** se mantienen los ejemplos de SPM-03. Se pide valoración en la revisión clínica. |
| D-03 | LUT-04 dice que en algunos ciclos no hay fase lútea aunque la rueda la dibuje. Puede restar confianza en la rueda. | **Resuelta (06-11-2026):** se mantiene, como dato probable y no exacto. |
| D-04 | LUT-05 nombra la pantalla SPM/TDPM sin enlace. La regla U-01 de esa pantalla limita su acceso a «Cómo funciona». | **Resuelta (06-11-2026):** LUT-05 enlaza la pantalla SPM/TDPM con un enlace estático, igual para todas las personas (U-02). La regla U-01 de la pantalla SPM/TDPM se amplía en JUA-19 (PR #9). |
| D-05 | LUT-06 nombra el estereotipo de la mujer «premenstrual». | **Resuelta (06-11-2026):** se mantiene y se explica por qué parece cierto: se repite en bromas, anuncios y conversaciones, y en el estudio diario con el objetivo oculto el patrón apenas aparece (LU-A10, LU-A12; LS-13). |

## 7. Historial

### [0.1.0] — 06-11-2026

- Primera versión, a partir del cierre de la investigación de la fase lútea de JUA-36.
- Bloques LUT-00 a LUT-08, DER-01 y DER-02.
- Cinco decisiones abiertas.
- 06-11-2026: D-01 a D-05 resueltas; LUT-05 enlaza la pantalla SPM/TDPM y LUT-06 explica por qué el estereotipo parece cierto.
