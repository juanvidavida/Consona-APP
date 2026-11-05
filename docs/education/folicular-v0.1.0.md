# Consona — Pantalla educativa «La fase folicular» v0.1.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío.
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/folicular/`](../research/fases/folicular/). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

## 1. Público, tono, ubicación y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.1.0.md`, secciones 1 a 3):

- tono T-01 a T-04;
- ubicación U-01 a U-04, como artículo de «Comprender» en «El cuerpo en cada fase»;
- reglas R-01 a R-03, R-05 a R-07.

Se añaden las reglas de sesgo SGF-01 a SGF-05 de `03-sesgo-genero.md`.

**Diferencia con la menstruación:** esta pantalla no lleva un mensaje de ayuda urgente (DER-02), porque la fase no tiene un criterio de urgencia propio. Ver D-01.

### Coherencia con las tarjetas de la home

Las tarjetas de la fase folicular (`home-cards-follicular-v0.1.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las dos se revisa contra la otra.

## 2. Texto de la pantalla

### FOL-00 · Título

**La fase folicular**

### FOL-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

### FOL-02 · Qué es

La fase folicular empieza con la menstruación y llega hasta la ovulación. Durante los primeros días, por tanto, coincide con el sangrado.

En ella maduran varios folículos en los ovarios: pequeñas estructuras que contienen un óvulo inmaduro. Normalmente uno se impone a los demás. Ese folículo produce hormonas, entre ellas los estrógenos, que van aumentando y vuelven a engrosar el revestimiento del útero que se desprendió con la regla. Cuando los estrógenos alcanzan un nivel alto, ponen en marcha la ovulación.

### FOL-03 · Cuánto dura

Es la parte del ciclo que más cambia: de una persona a otra, de un ciclo a otro en la misma persona y con la edad, porque tiende a acortarse con los años. Por eso unos ciclos son más largos que otros.

La idea de que va «del día 1 al 14» es una simplificación de manual. No hay un calendario fijo, y Consona solo puede estimar esta fase a partir de las fechas registradas.

### FOL-04 · El mito de la «fase de energía»

Circula mucho la idea de que en esta fase hay más energía, mejor ánimo o más ganas de hacer cosas, y de que conviene organizar el ejercicio, la dieta o la agenda según la fase. La investigación no lo respalda.

Incluso en deportistas, con la fase comprobada en análisis de sangre, no se han encontrado cambios en el esfuerzo que perciben ni en lo preparadas que se sienten. Uno de esos estudios se hizo en Madrid con deportistas de resistencia entrenadas. Las revisiones recientes consideran prematuro planificar según la fase. Tampoco cambian la capacidad de concentrarse ni de razonar.

### FOL-05 · Lo que la fase no dice

No hay evidencia de que en esta fase el ánimo mejore de forma predecible. En estudios con mujeres que registraron cada día cómo se sentían, el ánimo dependía mucho más de su salud, del estrés y del apoyo que tenían que de la fase del ciclo. Y no hay un patrón que valga para todas: algunas personas notan cambios en un momento del ciclo, otras en otro y muchas en ninguno.

Un estereotipo que suena positivo funciona igual que uno negativo: da por hecho cómo está alguien y qué puede hacer. Durante mucho tiempo, además, se dejó a las mujeres fuera de muchos estudios con el argumento de que el ciclo complicaba los resultados, y esos huecos se han llenado con mitos.

### FOL-06 · Acompañar en consonancia

Que el calendario marque esta fase no te dice nada de cómo está tu pareja ni de lo que le apetece. No hace falta organizar nada en función de su ciclo: basta con preguntar.

Algunas preguntas que dejan espacio:
- «¿Cómo te va esta semana?»
- «¿Hay algo que te apetezca hacer o que prefieras dejar para otro momento?»

Y hay una parte que es tuya: contar tus planes, preguntar por los suyos y dar tú el primer paso en lo que os toque organizar juntos.

### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

### FOL-07 · Fuentes

Esta información se basa en revisiones científicas sobre la fisiología del ciclo (2018 a 2023), un estudio con más de 600.000 ciclos registrados en una app (2019), un análisis de tres cohortes de seguimiento (2020), revisiones sobre ciclo y ejercicio (2020 y 2023), un estudio de la Universidad Politécnica de Madrid con deportistas (2021) y un metaanálisis sobre ciclo y capacidades cognitivas (2025). Las referencias completas están disponibles en «Fuentes».

## 3. Mensaje de derivación

### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de FOL-06.

> **Cuándo puede ayudar un profesional**
> Que los ciclos varíen es habitual. Si son muy cortos o muy largos, cambian mucho de un mes a otro o la regla deja de venir durante meses, un profesional sanitario puede valorarlo. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

Fuente: orientación pública de ACOG sobre sangrado uterino anormal (`jua-10/13-cycle-variability.md`, consenso clínico): ciclos de menos de 21 o más de 35 días, variación de más de 7 a 9 días, o ausencia de menstruación durante 3 a 6 meses.

## 4. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| FOL-02 | Inicio con la menstruación; folículos; estrógenos; revestimiento; ovulación | FO-A01 a FO-A05 |
| FOL-03 | Variabilidad, edad y calendario no fijo | FO-A06, FO-A07; SGF-03, SGF-04 |
| FOL-04 | Rendimiento, esfuerzo percibido, planificación y cognición | FO-A08 a FO-A11 (FS-09 a FS-12, FS-14, FS-16) |
| FOL-05 | Ánimo; peso de la salud, el estrés y el apoyo; diferencias individuales; estereotipo positivo; exclusión de la investigación | FO-A12 a FO-A14 (FS-18 a FS-20); SGF-01, SGF-05 |
| FOL-06 | Papel de la pareja | SGF-02; regla T-02 |
| DER-01 | Criterios de consulta | `jua-10/13` (ACOG) |

## 5. Decisiones abiertas

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La pantalla no lleva un mensaje de ayuda urgente. | No incluirlo: el de la menstruación cubre el sangrado abundante. Pedir confirmación en la revisión clínica. |
| D-02 | FOL-04 menciona que uno de los estudios es español. | Mantenerlo: da cercanía y es una fuente verificada. |
| D-03 | FOL-05 menciona la exclusión de las mujeres de la investigación. Puede leerse como ajeno a la pareja. | Mantenerlo en una frase: explica por qué circulan los mitos. Validar el tono en el piloto. |
| D-04 | DER-01 da criterios en términos generales y no las cifras de ACOG. | Mantenerlo así para no convertir la pantalla en un test. |

## 6. Historial

### [0.1.0] — 05-11-2026

- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques FOL-00 a FOL-07 y DER-01.
- Cuatro decisiones abiertas.
- 05-11-2026: FOL-05 incorpora estudios de registro diario en población general (Romans 2013; Kiesner 2016 y 2022).
