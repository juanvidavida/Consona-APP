# Consona — Artefactos sometidos a la revisión clínica de JUA-16

**Para qué sirve:** reunir en un solo documento, para leerlo de principio a fin, los nueve artefactos del paquete de revisión clínica de JUA-16 y el índice de reglas de las tarjetas.
**Qué es:** una copia generada. Los documentos de origen, en `docs/education/`, son la fuente de verdad, y su SHA-256 se comprobó al generar esta copia. Si hay diferencias, mandan los documentos de origen. Cualquier cambio se hace allí y este documento se vuelve a generar.
**Generado:** 11-11-2026, desde la rama `juanvidaechea/jua-19-pantalla-spm-tdpm-v0-5-0` (PR #17).
**Cómo responder:** con el [formulario de revisión](./FORMULARIO_REVISION.md). Explicación del paquete en el [README](./README.md).

> **Cómo leer.** En cada artefacto, el texto que verá la persona usuaria está en la sección «Texto de la pantalla» o «Texto de las tarjetas», y en los mensajes de derivación. El resto (reglas, trazabilidad, exclusiones, decisiones e historial) explica de dónde sale cada frase. Las referencias numeradas [1], [2]… remiten a la lista del final de **cada** artefacto, no a una lista común. Los identificadores de bloque (SPM-03, LUT-04…) no se muestran en la app.

## Índice

- [A1 · Pantalla «Antes de la regla» (síndrome premenstrual y trastorno disfórico premenstrual) y mensajes de derivación DER-01 y DER-02](#a1) — v0.7.0
  - [1. Público y tono](#a1-1)
  - [2. Ubicación](#a1-2)
  - [3. Reglas de la pantalla](#a1-3)
  - [4. Texto de la pantalla](#a1-4)
  - [5. Mensajes de derivación](#a1-5)
  - [6. Trazabilidad](#a1-6)
  - [7. Exclusiones comprobadas](#a1-7)
  - [8. Decisiones antes de enviar a JUA-16](#a1-8)
  - [9. Historial](#a1-9)
  - [Referencias](#a1-10)
- [A2 · Tarjetas de la pantalla de inicio en fase lútea](#a2) — v0.3.0
  - [1. Reglas propias de la fase](#a2-1)
  - [2. Texto de las tarjetas](#a2-2)
  - [3. Cambios](#a2-3)
  - [4. Trazabilidad](#a2-4)
  - [5. Exclusiones comprobadas](#a2-5)
  - [6. Decisiones](#a2-6)
  - [7. Historial](#a2-7)
  - [Referencias](#a2-8)
- [A3 · Tarjetas de la pantalla de inicio en la menstruación](#a3) — v0.3.0
  - [1. Reglas propias de la fase](#a3-1)
  - [2. Texto de las tarjetas](#a3-2)
  - [3. Cambios respecto al prototipo](#a3-3)
  - [4. Trazabilidad](#a3-4)
  - [5. Exclusiones comprobadas](#a3-5)
  - [6. Decisiones](#a3-6)
  - [7. Qué debe valorar la persona revisora](#a3-7)
  - [8. Historial](#a3-8)
  - [Referencias](#a3-9)
- [A4 · Tarjetas de la pantalla de inicio en la fase folicular](#a4) — v0.3.0
  - [1. Reglas propias de la fase](#a4-1)
  - [2. Texto de las tarjetas](#a4-2)
  - [3. Cambios respecto al prototipo](#a4-3)
  - [4. Trazabilidad](#a4-4)
  - [5. Exclusiones comprobadas](#a4-5)
  - [6. Decisiones](#a4-6)
  - [7. Qué debe valorar la persona revisora](#a4-7)
  - [8. Historial](#a4-8)
  - [Referencias](#a4-9)
- [A5 · Tarjetas de la pantalla de inicio en la ventana ovulatoria estimada](#a5) — v0.3.0
  - [1. Reglas propias de la fase](#a5-1)
  - [2. Texto de las tarjetas](#a5-2)
  - [3. Cambios respecto al prototipo](#a5-3)
  - [4. Trazabilidad](#a5-4)
  - [5. Exclusiones comprobadas](#a5-5)
  - [6. Decisiones](#a5-6)
  - [7. Qué debe valorar la persona revisora](#a5-7)
  - [8. Historial](#a5-8)
  - [Referencias](#a5-9)
- [A6 · Pantalla «La menstruación» de «Comprender»](#a6) — v0.2.0
  - [1. Público y tono](#a6-1)
  - [2. Ubicación](#a6-2)
  - [3. Reglas de la pantalla](#a6-3)
  - [4. Texto de la pantalla](#a6-4)
  - [5. Mensajes de derivación](#a6-5)
  - [6. Trazabilidad](#a6-6)
  - [7. Decisiones](#a6-7)
  - [8. Historial](#a6-8)
- [A7 · Pantalla «La fase folicular» de «Comprender»](#a7) — v0.2.0
  - [1. Público, tono, ubicación y reglas](#a7-1)
  - [2. Texto de la pantalla](#a7-2)
  - [3. Mensaje de derivación](#a7-3)
  - [4. Trazabilidad](#a7-4)
  - [5. Decisiones](#a7-5)
  - [6. Historial](#a7-6)
- [A8 · Pantalla «La ventana ovulatoria» de «Comprender»](#a8) — v0.2.0
  - [1. Público, tono, ubicación y reglas](#a8-1)
  - [2. Texto de la pantalla](#a8-2)
  - [3. Mensaje de derivación](#a8-3)
  - [4. Trazabilidad](#a8-4)
  - [5. Decisiones](#a8-5)
  - [6. Historial](#a8-6)
- [A9 · Pantalla «La fase lútea» de «Comprender»](#a9) — v0.3.0
  - [1. Público, tono y reglas](#a9-1)
  - [2. Texto de la pantalla](#a9-2)
  - [3. Mensajes de derivación](#a9-3)
  - [4. Trazabilidad](#a9-4)
  - [5. Exclusiones comprobadas](#a9-5)
  - [6. Decisiones](#a9-6)
  - [7. Historial](#a9-7)
- [Anexo · Índice de tarjetas: qué conjunto se muestra cada día y reglas comunes H-01 a H-08](#anexo)
  - [1. Documentos por fase](#anexo-1)
  - [2. Qué conjunto se muestra cada día](#anexo-2)
  - [3. Reglas comunes](#anexo-3)
  - [4. Criterios de aceptación de JUA-23](#anexo-4)
  - [5. Historial](#anexo-5)

## Integridad

| # | Archivo | Versión | SHA-256 |
|---|---|---|---|
| A1 | `docs/education/spm-tdpm-v0.7.0.md` | 0.7.0 | `1e2b33b28dbd15825f492d7e779ee3f69742ffea186ae1aa0f1df409f17a5e98` |
| A2 | `docs/education/home-cards-luteal-v0.3.0.md` | 0.3.0 | `0b6ff69025ebb6c47e1b369c527b688e7627266de1c48422d30d24839dd9733c` |
| A3 | `docs/education/home-cards-menstruation-v0.3.0.md` | 0.3.0 | `b50ed79e0db8190f878b12c4b2e96f031e6f5daf4ee37fb944f7274e65006325` |
| A4 | `docs/education/home-cards-follicular-v0.3.0.md` | 0.3.0 | `66466297e635650095d5fa948bac6780f8f522071f778d36e7b32689f6930fd7` |
| A5 | `docs/education/home-cards-ovulatory-v0.3.0.md` | 0.3.0 | `af846f080772b2bc80d0a49c86ac7bd7c1040fc762479dbcfdd3f94a44f4bb32` |
| A6 | `docs/education/menstruacion-v0.2.0.md` | 0.2.0 | `400d18a4f583628ea9932ff1fb8f13bd08fac57d1e3b0c8c5f1ba382e4c5c601` |
| A7 | `docs/education/folicular-v0.2.0.md` | 0.2.0 | `4919e84173568d614c6449fd4ffaaa9662a68dc41b915d69dbb5806d08ee1953` |
| A8 | `docs/education/ovulatoria-v0.2.0.md` | 0.2.0 | `3b7dcf8240fc63f75b2b0bdfcd447a791ef9c2bcd842a6da0bf1f33791bb248b` |
| A9 | `docs/education/lutea-v0.3.0.md` | 0.3.0 | `443b6f8b83e675834067357fa0226ad909334e3ed279d03fc196fa97913a0476` |

Comprobación, desde la raíz del repositorio:

```sh
shasum -a 256 docs/education/spm-tdpm-v0.5.0.md docs/education/home-cards-*-v0.2.0.md docs/education/{menstruacion,folicular,ovulatoria,lutea}-v0.1.0.md
```

---

<a id="a1"></a>

## A1 · Pantalla «Antes de la regla» (síndrome premenstrual y trastorno disfórico premenstrual) y mensajes de derivación DER-01 y DER-02

*Origen: `docs/education/spm-tdpm-v0.7.0.md` · versión 0.7.0 · SHA-256 `1e2b33b28dbd15825f492d7e779ee3f69742ffea186ae1aa0f1df409f17a5e98`*

**Título del documento de origen:** Consona — Pantalla educativa «Antes de la regla» (síndrome premenstrual y trastorno disfórico premenstrual) v0.7.0

**Estado:** Borrador para revisión de producto. **Incluida en el paquete de revisión clínica de JUA-16**, pendiente de envío.
**Incidencia:** JUA-19 (CON-027). Su versión aprobada será el artefacto que revise JUA-16 (ADR-002 P7).
**Base de investigación:** auditorías de JUA-10 y, desde la v0.5.0, la investigación de la fase lútea de JUA-36 ([`docs/research/fases/lutea/`](../../research/fases/lutea)).
**Idioma:** español (España). Cualquier traducción posterior (CON-025) debe conservar los límites clínicos y de privacidad de este documento.
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, aprendizaje, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio de redacción, orden o mensaje de derivación exige una nueva versión y, una vez iniciada JUA-16, una nueva revisión clínica de lo modificado.

<a id="a1-1"></a>

### 1. Público y tono

**Quién lee:** la persona que acompaña, es decir, la pareja de la persona que menstrúa. El texto le habla en segunda persona («tú», «tu pareja»). Los mensajes de seguridad también deben servir si quien lee es la persona que menstrúa.

**Para qué:** alfabetización menstrual al servicio de consonar, es decir, actuar en armonía y en consonancia con la pareja. La pantalla ayuda a entender la variabilidad premenstrual para acompañar mejor, no para interpretar, anticipar ni explicar a la otra persona.

| ID | Regla de tono |
|---|---|
| T-01 | Educativo, no paternalista: explica y da contexto sin sermonear, sin «debes» y sin suponer ignorancia o mala intención en quien lee. |
| T-02 | La pareja es la autoridad sobre su propia experiencia. El texto nunca sitúa a quien acompaña como intérprete de lo que ella siente. |
| T-03 | Preguntar en lugar de suponer: las sugerencias son preguntas abiertas o gestos propios, no instrucciones sobre la otra persona. |
| T-04 | Las afirmaciones generales hablan de «mujeres»; lo individual habla de «tu pareja» (decisión del 11-11-2026, D-07). Ninguna media de grupo se presenta como algo que le pasa a ella. |

<a id="a1-2"></a>

### 2. Ubicación

La pantalla es una subpantalla de **«Cómo funciona»**. No es la pantalla de inicio ni forma parte del panel de hoy.

| ID | Regla de acceso |
|---|---|
| U-01 | Se abre desde dos enlaces estáticos. (1) Dentro de «Cómo funciona», en el punto donde se explica que los patrones no diagnostican SPM ni TDPM (`CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §4.2); su implementación corresponde a JUA-7. (2) Desde el bloque LUT-05 de la pantalla «La fase lútea» de «Comprender» (`lutea-v0.3.0.md`, JUA-36). Ninguno de los dos depende de la fase, la fecha ni ningún dato (U-02). |
| U-02 | El enlace es siempre visible y tiene el mismo texto para todas las personas. No aparece, cambia ni se destaca según la fase estimada, la fecha o cualquier dato local. |
| U-03 | La home no enlaza directamente a esta pantalla ni muestra avisos que remitan a ella. |
| U-04 | Desde la pantalla se puede volver a «Cómo funciona» con un control visible y accesible para lector de pantalla. |

#### Coherencia con la pantalla de inicio

La home muestra el día del ciclo, la fase estimada y tres tarjetas de orientación, entre ellas «Qué pasa en su cuerpo», con información general asociada a la fase (`CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §2–3). Esta pantalla explica cómo leer esa información (SPM-04), así que ambas deben mantenerse coherentes.

| ID | Regla de coherencia |
|---|---|
| C-01 | En los días premenstruales estimados, las tarjetas de la home no nombran SPM ni TDPM y no presentan cambios emocionales o físicos como algo que la pareja vaya a tener o esté teniendo. |
| C-02 | Si una tarjeta de la home menciona variabilidad premenstrual, usa el mismo marco que SPM-02 y SPM-04: «algunas personas», «puede», información general, no predicción. |
| C-03 | La home no cambia su texto, color ni tarjetas para dirigir a esta pantalla en función de la fase (U-02, U-03). Los únicos caminos son los dos enlaces estáticos de U-01. |
| C-04 | Cualquier cambio en las tarjetas de la home asociadas a la fase lútea o a los días premenstruales se revisa contra esta pantalla antes de publicarse. Ver D-05. |

<a id="a1-3"></a>

### 3. Reglas de la pantalla

| ID | Regla |
|---|---|
| R-01 | El contenido es estático e idéntico para todas las personas. No depende de fechas, fase estimada, registros, consentimiento, pareja ni ningún dato local o remoto. |
| R-02 | La pantalla no pide, muestra ni conserva datos. No hay formularios, campos de texto, casillas, valoraciones ni botones de «le pasa a mi pareja». |
| R-03 | Abrir la pantalla, desplazarse o pulsar un número de ayuda no genera eventos, analítica, telemetría, registros de error ni comunicación con ningún servidor. |
| R-04 | El mensaje de ayuda urgente (DER-02) aparece en la primera vista de la pantalla, sin necesidad de desplazarse ni desplegar nada, con contraste suficiente y sin animaciones, sonidos ni ventanas emergentes. |
| R-05 | Los números de teléfono se muestran como texto legible. Un enlace `tel:` junto al número es opcional y no sustituye al texto. |
| R-06 | La pantalla no muestra estados personales («sin patrón», «patrón posible» u otros). Ver la decisión abierta D-01. |
| R-07 | No se añaden iconos, colores ni ilustraciones que asocien una fase o un síntoma con riesgo, gravedad, sexualidad o disponibilidad. |

<a id="a1-4"></a>

### 4. Texto de la pantalla

Cada bloque lleva un identificador estable para la revisión y la trazabilidad (sección 6). Los identificadores no se muestran en la interfaz.

#### SPM-00 · Título

**Antes de la regla**

Síndrome premenstrual y trastorno disfórico premenstrual

#### SPM-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

#### SPM-02 · Introducción

En los días previos a la menstruación, algunas mujeres notan cambios en el cuerpo o en el ánimo. Otras no notan ninguno, o los viven de otra manera. Y en una misma mujer pueden variar de un ciclo a otro.

Conocer esta variabilidad ayuda a acompañar sin dar nada por supuesto.

#### DER-02 · Ayuda urgente (ver sección 5)

#### SPM-03 · Tres ideas distintas

**Variabilidad premenstrual**
Cambios que algunas mujeres notan antes de la menstruación: por ejemplo, dolor, hinchazón o cansancio; irritabilidad, tristeza o tensión; o cambios en el sueño o el apetito. Pueden ser leves, ir y venir, o no aparecer. Por sí solos no indican una condición clínica.

**SPM (síndrome premenstrual)**
Es un término clínico. Se usa cuando los cambios se repiten ciclo tras ciclo antes de la menstruación, mejoran cuando esta empieza o poco después, y afectan de forma importante a la vida diaria. Solo un profesional sanitario puede valorarlo.

**TDPM (trastorno disfórico premenstrual)**
Es un término clínico para una forma menos frecuente y más intensa, en la que predominan los cambios emocionales y que afecta de forma importante al trabajo, los estudios o las relaciones. Para valorarlo, los profesionales suelen pedir un registro diario durante al menos dos ciclos.

En inglés se usan las siglas PMS y PMDD. Consona no asigna estos términos a nadie, no muestra criterios clínicos y no convierte ningún dato en una clasificación.

#### SPM-04 · Lo que el día del ciclo puede y no puede decirte

En la pantalla de inicio ves el día del ciclo y la fase, estimados a partir de fechas confirmadas, junto con información general sobre lo que puede ocurrir en el cuerpo durante esa fase.

Esa información sirve para entender mejor el ciclo y tener contexto para conversar. Describe lo que se sabe en general, no lo que le está pasando a tu pareja: no te dice qué siente, qué le pasa ni qué necesita, y no confirma síntomas, su causa ni un diagnóstico.

Que se acerque la menstruación tampoco significa síndrome premenstrual. En promedio, el ánimo varía poco a lo largo del ciclo, y muchas mujeres no notan ningún cambio ligado a él. La evidencia científica no permite predecir el ánimo, la concentración o el comportamiento de una mujer a partir de la fase del ciclo menstrual en la que está.

#### SPM-05 · Antes de atribuirlo al ciclo

La imagen de la mujer «premenstrual» irritable, irracional o fuera de control es un estereotipo. Se repite en bromas, anuncios y conversaciones, también entre hombres, y por eso parece cierto. Pero cuando se ha estudiado el ánimo día a día sin que las participantes supieran que el estudio trataba del ciclo, ese patrón apenas aparece. Y hace daño: lleva a quitar valor a lo que una mujer dice o siente, y también a no tomarse en serio un malestar real.

Los cambios de ánimo, sueño, energía o concentración pueden tener muchas causas, también ajenas al ciclo: el trabajo, el cansancio, la salud, la propia relación. En el día a día, la salud, el estrés y el apoyo pesan mucho más que la fase.

Explicar un enfado o una tristeza por el ciclo, con frases como «son las hormonas», puede restar valor a lo que tu pareja siente o te está diciendo. Lo que le pasa tiene sus razones, y ella es quien mejor puede contarlas. Tú puedes ayudar escuchando, preguntando y, si ella quiere, pensando juntos qué le vendría bien.

#### SPM-06 · Sobre las cifras

Las cifras publicadas sobre el síndrome premenstrual y el trastorno disfórico premenstrual cambian mucho según el grupo estudiado y el método. Un metaanálisis de 2024 encontró que, en población general y con el diagnóstico confirmado por un registro diario de dos ciclos, el trastorno disfórico premenstrual aparecía en torno al 1,6 % de las mujeres. Los estudios con diagnóstico provisional dan cifras bastante más altas.

Una media de grupo no dice nada sobre tu pareja.

#### SPM-07 · Acompañar en consonancia

Acompañar no es interpretar. Es preguntar, escuchar la respuesta y respetarla. Puedes preguntarle si en ese momento prefiere compañía, espacio o ayuda con algo concreto, sin forzar la conversación: también puede preferir no hablar.

Algunas preguntas que dejan espacio:
- «¿Cómo estás hoy?»
- «¿Te apetece compañía, prefieres estar a tu aire o te echo una mano con algo?»
- «¿Prefieres que lo hablemos en otro momento?»

Lo que necesite puede cambiar de un ciclo a otro, o no tener nada que ver con el ciclo. Y también hay una parte que es tuya: cómo respondes, cómo os repartís las tareas y el descanso, cómo cuidas el ambiente que compartís.

#### DER-01 · Cuándo hablar con un profesional (ver sección 5)

#### SPM-08 · Fuentes

Esta información se basa en un estudio realizado en Barcelona sobre el estigma de la menstruación (2022), guías del NICE (Reino Unido, 2024), del Colegio Americano de Obstetras y Ginecólogos (2023 y 2025) y del NHS (2024), un metaanálisis sobre la frecuencia del trastorno disfórico premenstrual (2024), estudios de registro diario del ánimo (2012 a 2021), un metaanálisis sobre el ciclo y las capacidades cognitivas (2025) un estudio sobre lo que piensan los hombres de la menstruación (2017) y un ensayo clínico que incluyó a la pareja en la atención a los síntomas premenstruales intensos (2017). Las referencias completas están disponibles en «Fuentes».

<a id="a1-5"></a>

### 5. Mensajes de derivación

Los mensajes son estáticos y se muestran siempre, a todas las personas, en la posición indicada. No se activan por fechas, fase, registros ni palabras introducidas, porque la pantalla no recoge ninguna.

#### DER-01 · Cuándo hablar con un profesional

**Posición:** después de SPM-07.

> **Cuándo puede ayudar un profesional**
> Si los cambios preocupan a tu pareja, se repiten, son intensos o le dificultan el día a día —trabajo, estudios, relaciones o descanso—, un profesional sanitario puede valorarlos en contexto. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

#### DER-02 · Ayuda urgente

**Posición:** inmediatamente después de SPM-02, visible en la primera vista (R-04).

> **Si hace falta ayuda ahora**
> Si tu pareja te habla de pensamientos de hacerse daño o de suicidio, o alguien no está a salvo, busca ayuda urgente. No esperes a otro momento del ciclo.
> **En España:**
> - **112** · emergencias.
> - **024** · atención a la conducta suicida; gratuita, 24 horas; también atiende a familiares y personas allegadas.
> - **016** · violencia contra las mujeres; gratuito, confidencial, 24 horas; también por WhatsApp en el 600 000 016.
>
> Estos números también son para ti si eres tú quien lo está pasando mal.

<a id="a1-6"></a>

### 6. Trazabilidad

| Bloque | Afirmación | Fuente | Base auditada (JUA-10 y JUA-36) |
|---|---|---|---|
| SPM-01 | Nota de límite educativo. | [5] [7] | `audit-07` §4 (nota fija); se elimina «y un registro personal opcional» porque la pantalla no ofrece registro. |
| SPM-02 | Variabilidad entre personas y entre ciclos. | [1] [3] [5] | `audit-07` §4.2; `12-health-emotional-cognitive` EC-02. |
| SPM-03 · variabilidad | Ejemplos de cambios físicos y emocionales no diagnósticos. | [3] [5] | `audit-07` §3; ejemplos limitados a categorías de la taxonomía y de ADR-002 §3, sin interés sexual ni libido. |
| SPM-03 · SPM | Patrón cíclico, mejora con la menstruación e impacto en la vida diaria. | [1] [2] [5] | `audit-07` §3; ADR-002 §1. |
| SPM-03 · TDPM | Forma menos frecuente e intensa, predominio emocional, registro diario de al menos dos ciclos. | [3] [4] [6] | ADR-002 §1; `12-health-emotional-cognitive` EC-06. **JUA-36:** LS-21 (el diagnóstico confirmado exige un registro diario prospectivo de dos ciclos). |
| SPM-03 · cierre | Consona no asigna términos clínicos. | — | `audit-07` §4.5. |
| SPM-04 | La información de la home por día y fase es general; no informa del estado de la pareja ni predice ánimo, cognición o conducta; la cercanía de la menstruación no equivale a SPM; el ánimo varía poco en promedio y muchas personas no notan cambios ligados al ciclo. | [8] [9] [16] [17] [18] | `12-health-emotional-cognitive` EC-01, EC-02, EC-05; `audit-07` §4.1; `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §2–3. **JUA-36:** LU-A10 (LS-12 a LS-15) y LU-A11 (LS-16). |
| SPM-05 · estereotipo | El estereotipo de la mujer «premenstrual», su difusión (también entre hombres), el estudio con objetivo oculto y su daño. | [16] [19] [20] [21] | **JUA-36:** LU-A12 (LS-13, LS-18); ME-A17 (S-20, S-21, S-13); SGL-01. Misma redacción que LUT-06 de `lutea-v0.3.0.md`. |
| SPM-05 · causas | Solapamiento con otras causas; peso de la salud, el estrés y el apoyo; sesgo de atribución al ciclo; la pareja puede ayudar escuchando y preguntando, sin interpretar. | [2] [5] [9] [16] [22] | `12-health-emotional-cognitive` EC-02, EC-07 y regla editorial central; «sesgo de atribución» como tema educativo en `CONSONA_DEFINICION_DE_APP.md`. **JUA-36:** LU-A10, LU-A13 (LS-13, LS-19); LU-A16 (LS-22 [V]) para el papel de la pareja. |
| SPM-06 | Prevalencia de TDPM en población general con diagnóstico confirmado (1,6 %); cifras más altas con diagnóstico provisional. | [6] | **JUA-36:** LU-A15 (LS-21 [V-abs], resumen de PubMed). Ver D-02. |
| SPM-07 | Conversación directa, autonomía y responsabilidad propia; preguntar si prefiere compañía, espacio o ayuda, sin forzar la conversación. | [22] | Requisito de producto de JUA-19; ADR-002 §5 («¿Quieres preguntarle cómo está?»); tarjeta «Cómo acompañar» del panel. **JUA-36:** LU-A16 (LS-22 [V]): la comprensión y el apoyo de la pareja importan en cómo se vive la relación. No se usa para recomendar terapia. |
| DER-01 | Consulta ante preocupación, repetición, intensidad o afectación diaria; la decisión es de la pareja. | [5] [7] | `12-health-emotional-cognitive` EC-07, EC-08; `audit-07` §4.4. |
| DER-02 | Ayuda urgente ante ideación suicida, autolesión, violencia o peligro, para la pareja, para terceros y para quien lee. | [7] [10] [11] [12] [13] [14] [15] | `12-health-emotional-cognitive` EC-08 y mensaje de urgencia. 112, 024 y 016 verificados en fuentes oficiales el 07-10-2026 y de nuevo el 10-11-2026 (D-03, D-04). |

<a id="a1-7"></a>

### 7. Exclusiones comprobadas

Lista para comprobar en cada versión. La v0.7.0 no contiene:

- [x] Diagnóstico, clasificación, «posible SPM/TDPM», puntuaciones, umbrales, semáforos ni probabilidades individuales.
- [x] Listas de criterios clínicos o de diagnósticos diferenciales presentadas como autoevaluación o como guía para evaluar a la pareja.
- [x] Tratamientos, fármacos, anticonceptivos, suplementos, dosis, dietas ni ejercicio.
- [x] Predicciones de ánimo, cognición o conducta por fase.
- [x] Deseo sexual, libido, actividad sexual, consentimiento sexual, límites ni disponibilidad, ni como dato ni como ejemplo de síntoma.
- [x] Estados o conclusiones sobre la pareja o sobre quien lee.
- [x] Instrucciones para vigilar, registrar, anticipar o gestionar a la pareja.
- [x] Texto libre, formularios o cualquier captura de datos, incluida la de crisis.
- [x] Referencia al folleto RCOG 2018 ni a Green-top 48 como fuentes vigentes.
- [x] Cifras de síndrome premenstrual. La única cifra es la de trastorno disfórico premenstrual en población general con diagnóstico confirmado (SPM-06).
- [x] Siglas SPM y TDPM fuera de SPM-03.
- [x] Recomendaciones de terapia, aunque se cite el ensayo de Ussher y Perz 2017 (LS-22).
- [x] El estereotipo «premenstrual» presentado de otra forma que para desmentirlo (SGL-01).

<a id="a1-8"></a>

### 8. Decisiones antes de enviar a JUA-16

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | ADR-002 §2 dice que la pantalla «comenzará en el estado “No hay un patrón personal identificado”». JUA-19 exige que la pantalla sea independiente de registros e inferencias. | **Resuelta (07-10-2026):** se omite el estado. Se incorporará solo cuando P3–P5 permitan una vista de asociaciones, como versión nueva con revisión clínica propia. |
| D-02 | La cifra del metaanálisis de 2024 (SPM-06) procede de ADR-002 y no pasó por las auditorías de JUA-10. `audit-07` pide retirar del microcopy cifras sin fuente contemporánea y contexto. | **Resuelta (10-11-2026):** el metaanálisis (Reilly et al. 2024) se audita en JUA-36 como LS-21, a partir del resumen de PubMed. La cifra del 3,2 % mezclaba muestras de comunidad, universidad e instituto con una heterogeneidad muy alta (I² = 99 %). SPM-06 pasa a la cifra de población general con diagnóstico confirmado (1,6 %, I² = 26 %), que es la pertinente para el público de Consona. Se mantiene la pregunta P-01 a la persona revisora. Alternativa: eliminar las cifras y dejar solo la primera y la última frase. |
| D-03 | Los recursos 112 y 024, y que el 024 atiende a familiares y personas allegadas, no figuraban en la bibliografía de JUA-10. | **Verificado el 07-10-2026.** 024: Ministerio de Sanidad, para personas con conducta o ideación suicida y para familiares o allegados; gratuito, confidencial, 24 horas, 365 días; chat y lengua de signos; remite al 112 ante emergencia vital inminente [10] [11]. La Resolución de 4 de junio de 2026 mantiene el número y la gratuidad y añade que la llamada no aparece en la factura [12]. 112: número de emergencias gratuito en España y en la UE [13]. El texto de DER-02 es exacto. Verificado de nuevo el 10-11-2026, sin cambios. **Pendiente:** recursos para otros países e idiomas (CON-025). |
| D-04 | «Peligro» puede incluir violencia de pareja, riesgo relevante para Consona (ADR-001, P6). | **Resuelta (07-10-2026):** DER-02 incluye el 016 (Ministerio de Igualdad): todas las formas de violencia contra las mujeres; gratuito, confidencial, 24 horas; también por WhatsApp (600 000 016), chat y correo; deriva al 112 en emergencias [14] [15]. Verificado de nuevo el 10-11-2026, sin cambios. El análisis específico de control coercitivo sigue en P6 (JUA-13). |
| D-05 | JUA-16 revisa esta pantalla, pero el texto de la tarjeta «Qué pasa en su cuerpo» en la fase lútea y en los días premenstruales es el primer contacto con este tema y no tiene revisión clínica asignada. | **Resuelta.** Las cuatro tarjetas de la fase lútea se fijan en `home-cards-luteal-v0.1.0.md` y se incluyen expresamente en el paquete y en el alcance de JUA-16. Desde el 10-11-2026, en [`home-cards-luteal-v0.3.0.md`](../../education/home-cards-luteal-v0.3.0.md). |
| D-06 | El estereotipo de la mujer «premenstrual» se explicaba en la pantalla de la fase lútea (LUT-06), pero no en esta. | **Resuelta (10-11-2026):** se nombra y se explica en varias piezas para reforzar su importancia: SPM-05 de esta pantalla, LUT-06 y LUT-07 de la fase lútea y «Qué no asumir» de las tarjetas de la fase lútea. Siempre para desmentirlo (SGL-01). El 11-11-2026 se quita de SPM-07 (D-08). |
| D-07 | Las afirmaciones generales hablaban de «personas» (T-04). | **Resuelta (11-11-2026):** pasan a «mujeres» en todos los artefactos, porque las poblaciones de los estudios son mujeres y el público de Consona es la pareja de una mujer. «Todas las personas», en el sentido de quien usa la app, se mantiene. |
| D-08 | Comentarios de producto del 11-11-2026 sobre el compendio de JUA-16. | **Resueltas:** título «Antes de la regla», con los términos completos debajo; siglas solo en SPM-03, donde se presentan; «evidencia científica» en lugar de «investigación»; SPM-05 añade que la pareja puede ayudar; SPM-07 sin la frase sobre bromas; SPM-08 empieza por el estudio de Barcelona. |
| D-09 | SPM-08 remite a «Fuentes», pero el mapa de pantallas no tenía esa pantalla. | **Resuelta (11-11-2026):** se añade la subpantalla «Fuentes» de «Comprender» al mapa de pantallas y a JUA-31. |
| D-10 | Una consulta de producto del 11-11-2026 a un servicio de asesoramiento médico propone preguntar si prefiere compañía, espacio o ayuda, y evitar «son las hormonas». Cita un ensayo sobre la pareja (Ussher y Perz 2017). | **Resuelta (11-11-2026):** SPM-05 añade «son las hormonas» como ejemplo de frase que resta valor; SPM-07 integra «compañía, espacio o ayuda, sin forzar la conversación»; el ensayo se audita en JUA-36 (LS-22) y solo respalda que el apoyo de la pareja importa. No se adoptan el registro de síntomas por la pareja, la planificación según la fase ni las recomendaciones de terapia de esa respuesta. |

<a id="a1-9"></a>

### 9. Historial

#### [0.7.0] — Consulta de producto (11-11-2026)

- SPM-05: «son las hormonas» como ejemplo de frase que resta valor a lo que siente tu pareja.
- SPM-07: preguntar si prefiere compañía, espacio o ayuda con algo concreto, sin forzar la conversación; la pregunta «¿Hay algo que te venga bien?» pasa a «¿Te apetece compañía, prefieres estar a tu aire o te echo una mano con algo?».
- SPM-08 añade el ensayo de Ussher y Perz 2017 (LS-22) (D-10).
- DER-01 y DER-02 no cambian.

#### [0.6.0] — Comentarios de producto (11-11-2026)

- Título «Antes de la regla», con «Síndrome premenstrual y trastorno disfórico premenstrual» debajo. Las siglas solo aparecen en SPM-03 (D-08).
- «Mujeres» en lugar de «personas» en las afirmaciones generales; T-04 cambia (D-07).
- SPM-04: «evidencia científica» y «la fase del ciclo menstrual en la que está».
- SPM-05: la pareja puede ayudar escuchando, preguntando y pensando juntos qué le vendría bien.
- SPM-06 con los términos completos.
- SPM-07 sin la frase sobre bromas.
- SPM-08 empieza por el estudio de Barcelona; la pantalla «Fuentes» pasa al mapa de pantallas (D-09).
- Referencias a la tarjeta «Cómo acompañar», que fusiona «Qué puedes preguntarle» y «Qué te toca a ti».
- DER-01 y DER-02 no cambian.

#### [0.5.0] — Bibliografía de JUA-36 (10-11-2026)

- SPM-06 pasa a la prevalencia de TDPM en población general con diagnóstico confirmado (1,6 %), tras auditar el metaanálisis de 2024 (D-02).
- SPM-05 nombra y explica el estereotipo de la mujer «premenstrual» y añade el peso de la salud, el estrés y el apoyo (D-06).
- SPM-04 añade que el ánimo varía poco en promedio y que muchas personas no notan cambios ligados al ciclo.
- SPM-07 añade no hacer comentarios ni bromas sobre «estar premenstrual».
- SPM-08 nombra las nuevas fuentes.
- Trazabilidad a la investigación de la fase lútea de JUA-36 (LU-A10 a LU-A15) y de la menstruación (ME-A17).
- 112, 024 y 016 verificados de nuevo el 10-11-2026.
- DER-01 y DER-02 no cambian.

#### [0.4.0] — Enmienda del 06-11-2026

- U-01 admite un segundo acceso estático desde la pantalla «La fase lútea» de «Comprender» (decisión D-04 de `lutea-v0.3.0.md`, JUA-36). C-03 se ajusta en consecuencia.
- **El texto que se muestra no cambia**, por eso la pantalla conserva la versión.

#### [0.4.0] — Recurso de violencia y cierre de decisiones

- DER-02 añade el 016 (violencia contra las mujeres) y presenta los tres números en lista (D-04).
- D-01 resuelta: se omite el estado de patrón personal.
- D-02 se traslada como pregunta expresa a la revisión clínica.

#### [0.3.0] — Coherencia con la pantalla de inicio

- SPM-04 pasa a «Lo que el día del ciclo puede y no puede decirte»: explica cómo leer el día del ciclo, la fase y la información general que muestra la home, y que la cercanía de la menstruación no equivale a SPM.
- Se añaden las reglas de coherencia C-01 a C-04 con la home y la decisión abierta D-05.
- D-03 resuelta: 112 y 024 verificados en fuentes oficiales; el texto de DER-02 no cambia.
- D-05 resuelta: tarjetas de la fase lútea en documento propio, incluidas en JUA-16.

#### [0.2.0] — Reorientación a quien acompaña

- El texto pasa a dirigirse a la pareja de la persona que menstrúa, con tono de alfabetización menstrual no paternalista y el objetivo de consonar (sección 1).
- Nuevo bloque SPM-05 sobre el sesgo de atribución al ciclo, que integra el anterior «Muchas causas posibles».
- SPM-07 pasa a «Acompañar en consonancia», con preguntas abiertas y responsabilidad propia.
- DER-03 se integra en DER-02, que ahora cubre a la pareja, a terceros y a quien lee.
- DER-01 deja explícito que la decisión de consultar es de la pareja.
- Las secciones se renumeran.

#### [0.1.0] — Borrador inicial

- Primera redacción completa de la pantalla, nota fija y tres mensajes de derivación, dirigida a la persona que menstrúa.
- Trazabilidad a las fuentes auditadas en JUA-10 y a ADR-002.
- Cuatro decisiones abiertas para producto antes de la revisión clínica.
- Se fija la ubicación como subpantalla de «Cómo funciona».

<a id="a1-10"></a>

### Referencias

1. Premenstrual syndrome — NICE Clinical Knowledge Summaries (revisado 09-2024). <https://cks.nice.org.uk/topics/premenstrual-syndrome/>

2. Premenstrual syndrome: How should I diagnose premenstrual syndrome? — NICE CKS (revisado 09-2024). <https://cks.nice.org.uk/topics/premenstrual-syndrome/diagnosis/diagnosis-of-premenstrual-syndrome/>

3. Management of Premenstrual Disorders, Clinical Practice Guideline No. 7 — ACOG (12-2023). <https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/12/management-of-premenstrual-disorders>

4. What I Wish Everyone Knew About Premenstrual Dysphoric Disorder — ACOG. <https://www.acog.org/womens-health/experts-and-stories/the-latest/what-i-wish-everyone-knew-about-premenstrual-dysphoric-disorder>

5. Premenstrual Syndrome (PMS), FAQ057 — ACOG (revisado 11-2025). <https://www.acog.org/womens-health/faqs/premenstrual-syndrome>

6. Reilly TJ, et al. The prevalence of premenstrual dysphoric disorder: systematic review and meta-analysis. J Affect Disord 2024;349:534–40 (PMID 38199397). <https://doi.org/10.1016/j.jad.2024.01.066>

7. PMS (premenstrual syndrome) — NHS (revisado 18-06-2024). <https://www.nhs.uk/conditions/pre-menstrual-syndrome/>

8. Menstrual cycle effects on cognitive performance: A meta-analysis (2025). <https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576>

9. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>

10. 024. Línea de atención a la conducta suicida — Ministerio de Sanidad (consultado 07-10-2026). <https://www.sanidad.gob.es/linea024/home.htm>

11. La Línea 024 para la atención a la conducta suicida ha recibido más de 260.000 llamadas en dos años — La Moncloa (10-05-2024). <https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/paginas/2024/100524-linea-024.aspx>

12. BOE-A-2026-13201, Resolución de 4 de junio de 2026 que modifica la atribución del número 024 (consultado 07-10-2026). <https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13201>

13. 112 — the EU's emergency phone number — Comisión Europea (consultado 07-10-2026). <https://digital-strategy.ec.europa.eu/en/policies/112>

14. Teléfono 016, 016 online y WhatsApp — Ministerio de Igualdad (consultado 07-10-2026). <https://violenciagenero.igualdad.gob.es/informacion-3/recursos/telefono016/>

15. Teléfono 016: ¿qué es y cómo funciona? — La Moncloa (2026). <https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/igualdad/paginas/2026/telefono-016-que-es.aspx>

16. Romans SE, et al. Mood and the menstrual cycle. Psychother Psychosom 2013;82(1):53–60. <https://doi.org/10.1159/000339370>

17. Pierson E, et al. Daily, weekly, seasonal and menstrual cycles in women's mood, behaviour and vital signs. Nat Hum Behav 2021;5:716–25. <https://doi.org/10.1038/s41562-020-01046-9>

18. Kiesner J, et al. Cyclical symptom change across the menstrual cycle. Clin Psychol Sci 2016;4(5):882–94. <https://doi.org/10.1177/2167702616635031>

19. Johnston-Robledo I, Chrisler JC. The menstrual mark: menstruation as social stigma. Palgrave Handbook of Critical Menstruation Studies, 2020. <https://doi.org/10.1007/978-981-15-0614-7_17>

20. Peranovic T, Bentley B. Men and menstruation: a qualitative exploration of beliefs, attitudes and experiences. Sex Roles 2017;77:113–24. <https://doi.org/10.1007/s11199-016-0701-3>

21. Holst AS, et al. Experiences of menstrual inequity and menstrual health among women and people who menstruate in the Barcelona area (Spain): a qualitative study. Reprod Health 2022;19(1):45. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8857732/>

22. Ussher JM, Perz J. Evaluation of the relative efficacy of a couple cognitive-behaviour therapy (CBT) for Premenstrual Disorders (PMDs), in comparison to one-to-one CBT and a wait list control: a randomized controlled trial. PLoS One 2017;12(4):e0175068. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5395168/>


---

<a id="a2"></a>

## A2 · Tarjetas de la pantalla de inicio en fase lútea

*Origen: `docs/education/home-cards-luteal-v0.3.0.md` · versión 0.3.0 · SHA-256 `0b6ff69025ebb6c47e1b369c527b688e7627266de1c48422d30d24839dd9733c`*

**Título del documento de origen:** Consona — Tarjetas de la home en fase lútea v0.3.0

**Issues:** JUA-19 (origen) y JUA-23 (reglas comunes).
**Estado:** Borrador para revisión de producto. **Incluido en el paquete de revisión clínica de JUA-16**, pendiente de envío.
**Origen:** decisión D-05 de [`spm-tdpm-v0.7.0.md`](../../education/spm-tdpm-v0.7.0.md). Este conjunto se incluye **expresamente** en el alcance de JUA-16; no queda cubierto por la revisión de la pantalla SPM/TDPM.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](../../education/home-cards-index.md).
**Base de investigación:** [`docs/research/fases/lutea/`](../../research/fases/lutea) (JUA-36).
**Cuándo se muestra:** durante toda la fase lútea estimada, incluidos los días previos a la menstruación (sección 2 del índice).
**Parte de:** el texto provisional de [`src/App.jsx`](../../../src/App.jsx) (JUA-5), que no es definitivo.
**Público y tono:** los de la sección 1 de `spm-tdpm-v0.7.0.md`: la pareja que acompaña, en segunda persona, con alfabetización menstrual y sin paternalismo.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la fase lútea estimada. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice y las reglas C-01 a C-04 de la pantalla SPM/TDPM.

<a id="a2-1"></a>

### 1. Reglas propias de la fase

Se aplican las reglas comunes H-01 a H-08 del índice. Desde la v0.2.0 sustituyen a las reglas H-01 a H-05 de la v0.1.0, que el índice generalizó. Además:

| ID | Regla |
|---|---|
| L-01 | Las tarjetas no cambian en los días previos a la menstruación ni nombran SPM o TDPM (H-01, H-02; C-01 de la pantalla SPM/TDPM). |
| L-02 | Duración aproximada: «unos 12 días», siempre con «suele» y «también varía», igual que LUT-03 y la rueda (excepción de H-06). Sin «fase lútea corta», «deficiencia lútea» ni «progesterona baja» (SGL-05). |
| L-03 | La progesterona solo aparece como fisiología del útero, nunca para explicar ánimo, energía ni conducta (H-08; SGL-02). |
| L-04 | «Qué no asumir» nombra el estereotipo de la mujer «premenstrual» para desmentirlo (SGL-01). Es la misma idea que LUT-06 de `lutea-v0.3.0.md` y SPM-05 de `spm-tdpm-v0.7.0.md`, repetida a propósito (D-04). |
| L-05 | La fase no se presenta como «la fase mala», ni como una semana que exija un trato especial (SGL-04). |

<a id="a2-2"></a>

### 2. Texto de las tarjetas

#### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase lútea va desde la ovulación hasta la siguiente menstruación. El folículo que liberó el óvulo se transforma en el cuerpo lúteo, que produce sobre todo progesterona: prepara el revestimiento del útero por si hubiera un embarazo. Si no lo hay, bajan las hormonas y empieza la menstruación. Suele durar unos 12 días, y es la parte del ciclo cuya duración menos cambia, aunque también varía.
> Hacia el final de esta fase, algunas mujeres notan cambios físicos o de ánimo, y otras no. Una fecha calculada no confirma que haya habido ovulación ni te dice cómo se encuentra tu pareja.

#### Cómo acompañar

**Antetítulo:** Conversación y acción propia

> «¿Cómo estás hoy? ¿Hay algo que prefieras que tenga en cuenta?»
> Una pregunta abierta deja espacio para escuchar sin dar nada por hecho. Si prefiere no hablar, también es una respuesta.
> Como cualquier otra semana: organiza tus propias responsabilidades, comunica tus planes con claridad y deja margen para ajustar la logística si tu pareja lo pide.

#### Qué no asumir

**Antetítulo:** Antiestereotipo

> La imagen de la mujer «premenstrual» irritable o fuera de control es un estereotipo, y hace daño. Que se acerque la menstruación no explica cómo se siente tu pareja, qué necesita ni cómo quiere que actúes. Atribuir una tensión al ciclo puede restar valor a lo que te está diciendo: preguntar funciona mejor que suponer.

<a id="a2-3"></a>

### 3. Cambios

#### Respecto a la v0.1.0

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | El cuerpo lúteo se presenta como el folículo que liberó el óvulo; la progesterona «prepara el revestimiento del útero por si hubiera un embarazo»; se añade que es la parte del ciclo cuya duración menos cambia, aunque también varía. El límite final dice que una fecha calculada no confirma que haya habido ovulación. | Redacción segura del cierre de la fase lútea (LU-A02, LU-A03, LU-A05, LU-A07). Mismo esquema que la «Qué pasa en su cuerpo» de la fase folicular («la parte del ciclo cuya duración más cambia»). |
| Cómo acompañar · pregunta | Se añade «Si prefiere no hablar, también es una respuesta». | Coherencia con SPM-07: respetar la respuesta, también si prefiere no hablar. |
| Cómo acompañar · acción propia | Se antepone «Como cualquier otra semana». | Evita presentar la fase como una semana que exige un trato especial (SGL-04, L-05). |
| Qué no asumir | Se nombra y se desmiente el estereotipo de la mujer «premenstrual». | Decisión de producto del 10-11-2026 (D-04): explicarlo en varias piezas refuerza su importancia (SGL-01; LU-A12). |
| Reglas | H-01 a H-05 propias pasan a las comunes H-01 a H-08 del índice, más L-01 a L-05. | El índice de JUA-23 generalizó las reglas de esta fase. |

#### Respecto al prototipo (v0.1.0)

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Se añadió qué ocurre en la fase y una frase sobre variabilidad al final de la fase. | Ofrecer información asociada a la fase sin que sea predictiva. Ver D-01 y D-02. |
| Cómo acompañar · pregunta | Sin cambios. | Ya cumplía T-03 y la especificación del panel. |
| Cómo acompañar · acción propia | «la otra persona» pasó a «tu pareja»; «espacio», a «margen». | Coherencia con el público definido. |
| Qué no asumir | «Una fase estimada no explica…» pasó a una formulación centrada en la cercanía de la menstruación y en el sesgo de atribución. | Es el momento en que más pesa el estereotipo premenstrual; coherente con SPM-05. |

<a id="a2-4"></a>

### 4. Trazabilidad

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

<a id="a2-5"></a>

### 5. Exclusiones comprobadas

La v0.3.0 no contiene:

- [x] SPM, TDPM ni ningún término diagnóstico.
- [x] Síntomas presentados como esperables en tu pareja, ni listas de síntomas.
- [x] Explicaciones hormonales de emociones, conductas o síntomas concretos.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni confirmación de ovulación.
- [x] Duraciones en días distintas de «unos 12 días», ni diagnósticos de fase lútea corta o deficiente.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.
- [x] El estereotipo «premenstrual» presentado de otra forma que para desmentirlo.

<a id="a2-6"></a>

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase «Hacia el final de esta fase, algunas personas notan cambios físicos o de ánimo, y otras no» da información asociada a la fase, pero puede llevar a leer la home como un aviso. | **Resuelta (07-10-2026):** se mantiene y se pide a la persona revisora que la valore expresamente en JUA-16. |
| D-02 | La mención de la progesterona es fisiología general, pero las auditorías de JUA-10 desaconsejan explicar síntomas por hormonas, y la frase no se auditó como afirmación propia. | **Resuelta (07-10-2026)** y **auditada el 10-11-2026** en JUA-36 (LU-A02, evidencia alta). Se mantiene la pregunta a la persona revisora. Alternativa si la revisión lo pide: «el cuerpo prepara el revestimiento del útero», sin nombrar hormonas. |
| D-03 | JUA-5 está cerrada y no hay una incidencia para el contenido de las tarjetas de la home. | **Resuelta (07-10-2026):** se abre JUA-23 para las tarjetas de todas las fases, relacionada con JUA-16, JUA-19 y JUA-5. |
| D-04 | ¿Nombrar el estereotipo «premenstrual» en la home, además de en las pantallas de la fase lútea y SPM/TDPM? | **Resuelta (10-11-2026):** sí. Explicarlo en más de un sitio refuerza su importancia. «Qué no asumir» lo nombra solo para desmentirlo. Se pregunta a la persona revisora si en la home se lee como desmentido y no como aviso. |
| D-05 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |

<a id="a2-7"></a>

### 7. Historial

#### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de la antigua «Qué te toca a ti», sin cambios.
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.

#### [0.3.0] — Comentarios de producto (11-11-2026)

- «Qué pasa en su cuerpo» añade «Suele durar unos 12 días» (L-02; excepción de H-06).
- «Algunas mujeres» en lugar de «algunas personas» (D-07 de la pantalla SPM/TDPM).

#### [0.2.0] — Bibliografía de JUA-36 (10-11-2026)

- «Qué pasa en su cuerpo» con la redacción segura de la fase lútea: cuerpo lúteo, progesterona, poca variación de la duración y límite sobre la ovulación.
- «Qué puedes preguntarle» añade que no querer hablar también es una respuesta.
- «Qué te toca a ti»: «Como cualquier otra semana».
- «Qué no asumir» nombra y desmiente el estereotipo de la mujer «premenstrual» (D-04).
- Reglas comunes del índice de JUA-23 y reglas propias L-01 a L-05.
- Trazabilidad a la investigación de la fase lútea de JUA-36.

#### [0.1.0] — Enmienda del 06-11-2026

- H-04 recoge el segundo acceso a la pantalla SPM/TDPM desde «La fase lútea» (JUA-36). El texto de las tarjetas no cambia.

#### [0.1.0] — Borrador inicial

- Primera versión fijada de las cuatro tarjetas de la fase lútea, a partir del prototipo de JUA-5.
- Reglas H-01 a H-05, alineadas con C-01 a C-04 de la pantalla SPM/TDPM.
- Tres decisiones, resueltas el 07-10-2026 sin cambios en el texto mostrado.

<a id="a2-8"></a>

### Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>

2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>

3. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>

4. Premenstrual Syndrome (PMS), FAQ057 — ACOG (revisado 11-2025). <https://www.acog.org/womens-health/faqs/premenstrual-syndrome>

5. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>

6. Menstrual cycle effects on cognitive performance: A meta-analysis (2025). <https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576>

7. Premenstrual syndrome — NICE Clinical Knowledge Summaries (revisado 09-2024). <https://cks.nice.org.uk/topics/premenstrual-syndrome/>

8. Reed BG, Carr BR. The normal menstrual cycle and the control of ovulation. Endotext (actualizado 05-08-2018). <https://www.ncbi.nlm.nih.gov/books/NBK279054/>

9. Jain V, et al. Uterine bleeding: how understanding endometrial physiology underpins menstrual health. Nat Rev Endocrinol 2022. <https://pmc.ncbi.nlm.nih.gov/articles/PMC9098793/>

10. Najmabadi S, et al. Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility. Paediatr Perinat Epidemiol 2020. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>

11. Prior JC, et al. Ovulation prevalence in women with spontaneous normal-length menstrual cycles (HUNT3, Norway). PLoS One 2015. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4546331/>

12. Romans SE, et al. Mood and the menstrual cycle. Psychother Psychosom 2013;82(1):53–60. <https://doi.org/10.1159/000339370>

13. Johnston-Robledo I, Chrisler JC. The menstrual mark: menstruation as social stigma. Palgrave Handbook of Critical Menstruation Studies, 2020. <https://doi.org/10.1007/978-981-15-0614-7_17>


---

<a id="a3"></a>

## A3 · Tarjetas de la pantalla de inicio en la menstruación

*Origen: `docs/education/home-cards-menstruation-v0.3.0.md` · versión 0.3.0 · SHA-256 `b50ed79e0db8190f878b12c4b2e96f031e6f5daf4ee37fb944f7274e65006325`*

**Título del documento de origen:** Consona — Tarjetas de la home en la menstruación v0.3.0

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](../../education/home-cards-index.md).
**Cuándo se muestra:** desde un inicio de sangrado confirmado, durante la duración que declare la persona afectada o, si no la declara, los días 1 a 5 (ME-01, DA-06).
**Parte de:** el texto provisional de [`src/App.jsx`](../../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la menstruación. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

<a id="a3-1"></a>

### 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| M-01 | Las tarjetas pueden referirse al sangrado, porque la fase empieza con un inicio de sangrado confirmado. |
| M-02 | «Qué pasa en su cuerpo» da la duración de la menstruación: la que declaró la persona afectada en el formulario de consentimiento inicial (DA-06, JUA-28) o, si no la declaró, 5 días (ME-01). Es la misma duración que usa la rueda. Es la única cifra en días de las tarjetas. Para los primeros días se usa «los primeros días, cuando el flujo suele ser mayor» (JUA-27 §6), nunca una regla de 3 días. |
| M-03 | No se da por hecho dolor, malestar, cansancio ni mal humor. El dolor solo aparece como algo que puede darse en algunas personas. |
| M-04 | No se recomiendan medidas para el dolor (medicamentos, calor, ejercicio), aunque tengan evidencia en población (`09-health-pain`). |
| M-05 | Ninguna tarjeta menciona la compra ni productos menstruales. |

<a id="a3-2"></a>

### 2. Texto de las tarjetas

#### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> La menstruación es el sangrado con el que el útero desprende su revestimiento, y su primer día marca el inicio de un nuevo ciclo. **{DURACIÓN}**; en los primeros días, el flujo suele ser mayor.
> Puede tener asociados dolor o calambres en algunas mujeres. Saber que tiene la regla no te dice cómo lo está viviendo tu pareja.

**{DURACIÓN}** tiene dos variantes (M-02):

| Caso | Texto |
|---|---|
| La persona afectada declaró la duración en el formulario de consentimiento inicial | «Según lo que indicó tu pareja, le suele durar unos N días» (con N = 1: «un día») |
| No la declaró | «Suele durar unos 5 días, aunque cambia de una mujer a otra» |

#### Cómo acompañar

**Antetítulo:** Conversación y acción propia

> «¿Hay algo que te venga bien hoy, o prefieres que todo siga como siempre?»
> Preguntar sin dar por hecho que algo va mal le deja decidir qué contarte.
> Ocúpate de tu parte en casa sin esperar a que te lo pidan, y habla de la regla con la misma naturalidad que de cualquier otra cosa.

#### Qué no asumir

**Antetítulo:** Antiestereotipo

> Tener la regla no significa estar de mal humor, tener dolor ni necesitar cuidados especiales. Tampoco que todo vaya bien porque no diga nada. Lo que te cuente vale más que cualquier idea previa sobre la regla.

<a id="a3-3"></a>

### 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la menstruación: muestra en todas las fases la «Qué pasa en su cuerpo» de la fase lútea y unas «Qué puedes preguntarle», «Qué te toca a ti» y «Qué no asumir» genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Texto nuevo sobre la menstruación, con la duración declarada o la de por defecto. | El texto del prototipo describe la fase lútea; D-03. |
| Cómo acompañar · pregunta | La pregunta abierta genérica pasa a una que ofrece ayuda o normalidad por igual. | Evitar que la pregunta suene a «sé que te pasa algo» en la fase con más estereotipos asociados. |
| Cómo acompañar · acción propia | La logística general se concreta en tareas de casa, sin esperar a que te lo pidan. | Acción propia concreta, sin depender de lo que tu pareja sienta. Sin mencionar la compra (D-02). |
| Qué no asumir | Se sustituye «Una fase estimada no explica…» por estereotipos propios de la menstruación, incluido el contrario: que el silencio signifique que todo va bien. | Los estereotipos de la menstruación son distintos de los premenstruales. **JUA-36:** ME-A13, ME-A15, ME-A17 (estereotipo de la mujer «descontrolada»; Romans 2013 y Kiesner 2016 y 2022 en población general, ver fase folicular FO-A12 y FO-A14). |

<a id="a3-4"></a>

### 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| Qué pasa en su cuerpo · definición | La menstruación es el sangrado con el que se desprende el revestimiento del útero; su primer día inicia el ciclo. | [1] [2] | `01-cycle-phases` (definición de menstruación; afirmación auditada de consenso clínico). **JUA-36:** ME-A01 a ME-A04 (Critchley 2020 y Jain 2022, en texto completo). |
| Qué pasa en su cuerpo · duración | Duración declarada por la persona afectada o, por defecto, unos 5 días, que cambia de una persona a otra. | [3] [4] | Declarada: DA-06 y formulario de JUA-28. Por defecto: ME-01; JUA-27 §2 y §6, mediana de 5 días, de 4 a 6 según la fuente. En `main` desde el PR #12. **JUA-36:** ME-A05. |
| Qué pasa en su cuerpo · primeros días | En los primeros días, el flujo suele ser mayor. | [9] | JUA-27 §2 y §6: ≈90 % de la pérdida en los días 1 a 3 (Haynes 1977, verificado en texto completo el 08-11-2026 [V]: el 92 % procede de 11 mujeres con regla abundante, por eso evidencia limitada). En `main` desde el PR #12. **JUA-36:** ME-A06. |
| Qué pasa en su cuerpo · dolor | La menstruación puede tener asociados dolor o calambres en algunas personas. | [5] [6] | `09-health-pain`, conclusión operativa y definición de dismenorrea; diversidad de experiencias según la OMS. **JUA-36:** ME-A09, ME-A10 (dos estudios españoles, Ciudad Real y Andalucía). |
| Qué pasa en su cuerpo · límite | Saber que hay sangrado no indica cómo lo vive la persona. | [7] | `01-cycle-phases` (distinguir dato, cálculo e inferencia); `12-health-emotional-cognitive` EC-02. **JUA-36:** ME-A15, ME-A18. |
| Cómo acompañar · pregunta | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| Cómo acompañar · acción propia | Acción propia sobre tareas de casa y planes. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| Qué no asumir | La fase no explica ánimo, dolor ni necesidades. | [7] [8] | `08-health-energy` (conclusión operativa); `12-health-emotional-cognitive` EC-02. |

<a id="a3-5"></a>

### 5. Exclusiones comprobadas

La v0.2.0 no contiene:

- [x] Diagnósticos: dismenorrea, endometriosis, sangrado abundante, anemia, SPM ni TDPM.
- [x] Dolor, cansancio o ánimo presentados como esperables en tu pareja.
- [x] Recomendaciones de salud: medicamentos, calor, ejercicio ni cuándo consultar.
- [x] Otras cifras en días que no sean la duración de M-02, ni una regla de «3 días».
- [x] Fertilidad, «días seguros» ni probabilidad de embarazo.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

<a id="a3-6"></a>

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La frase sobre dolor o calambres da información asociada a la fase, pero puede leerse como «es probable que le duela». | **Resuelta (05-11-2026):** «Puede tener asociados dolor o calambres en algunas personas». Se pide igualmente a la persona revisora que la valore. |
| D-02 | «Qué te toca a ti» mencionaba la compra común, que podía leerse como una alusión velada a productos menstruales. | **Resuelta (05-11-2026):** se evitan las referencias a la compra (M-05). «Qué te toca a ti» habla solo de tareas de casa y planes. |
| D-03 | La duración por defecto es de 5 días, pero H-06 impedía dar cifras. | **Resuelta (05-11-2026):** «Qué pasa en su cuerpo» da la duración declarada por la persona afectada en el formulario de consentimiento inicial o, si no la declaró, 5 días (M-02). Excepción recogida en H-01 y H-06. Depende de que JUA-28 incluya la duración del sangrado en el formulario. |
| D-04 | El paquete de revisión clínica de JUA-16 cubría la pantalla SPM/TDPM y la fase lútea. | **Resuelta (05-11-2026):** se amplía JUA-16 con las tres fases nuevas: menstruación, folicular y ventana ovulatoria estimada. |
| D-05 | La trazabilidad de la duración cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. **Cerrada (10-11-2026):** el PR #12 está fusionado y la ruta `docs/research/JUA-27-duraciones-referencia.md` es válida. |
| D-06 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |

<a id="a3-7"></a>

### 7. Qué debe valorar la persona revisora

- Si la definición de «Qué pasa en su cuerpo» es correcta y suficiente para un público sin formación sanitaria.
- Si dar la duración en días (M-02), declarada o por defecto, es adecuado o puede leerse como una norma.
- Si «Puede tener asociados dolor o calambres en algunas personas» (D-01) informa sin crear una expectativa.
- Si «Qué no asumir» cubre los estereotipos más dañinos de la menstruación.

<a id="a3-8"></a>

### 8. Historial

#### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la menstruación.
- Reglas propias M-01 a M-05, sobre las comunes H-01 a H-08.
- Cinco decisiones, todas resueltas o aceptadas el 05-11-2026: frase del dolor, sin referencias a la compra, duración declarada o por defecto, ampliación de JUA-16 y cita de JUA-27.

#### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- Pantalla educativa asociada: `menstruacion-v0.2.0.md` (rama de JUA-36).

#### [0.2.0] — Enmienda del 10-11-2026

- Trazabilidad: JUA-27 (PR #12) ya está en `main`.
- Haynes 1977 pasa a verificado en texto completo [V]; el dato sigue siendo de evidencia limitada.
- **Sin cambios en el texto de las tarjetas**, por eso conservan la versión.

#### [0.3.0] — 11-11-2026

- «Mujeres» en lugar de «personas» en «Qué pasa en su cuerpo» y en la variante de duración por defecto (D-07 de la pantalla SPM/TDPM).

#### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de MEN-07: tu parte en casa y hablar de la regla con naturalidad.
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.

<a id="a3-9"></a>

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

<a id="a4"></a>

## A4 · Tarjetas de la pantalla de inicio en la fase folicular

*Origen: `docs/education/home-cards-follicular-v0.3.0.md` · versión 0.3.0 · SHA-256 `66466297e635650095d5fa948bac6780f8f522071f778d36e7b32689f6930fd7`*

**Título del documento de origen:** Consona — Tarjetas de la home en la fase folicular v0.3.0

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](../../education/home-cards-index.md).
**Cuándo se muestra:** después de la menstruación y hasta la ventana ovulatoria estimada (ME-05, RU-05).
**Parte de:** el texto provisional de [`src/App.jsx`](../../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la fase folicular. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

<a id="a4-1"></a>

### 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| F-01 | Las tarjetas no dan por hecho que el sangrado haya terminado ni que continúe (ME-05). |
| F-02 | Se puede dar el intervalo «entre 15 y 20 días» contando los días de la regla, siempre junto a que es la parte del ciclo que más cambia (excepción de H-06). No se usa «del día 1 al 14» ni ninguna duración fija. |
| F-03 | No se atribuye a la fase más energía, mejor ánimo, más ganas de hacer cosas ni más rendimiento (H-08). |
| F-04 | No se da por hecho que en ese ciclo vaya a haber ovulación. |

<a id="a4-2"></a>

### 2. Texto de las tarjetas

#### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> En general, la fase folicular empieza con la menstruación y llega hasta la ovulación. En ella maduran folículos en los ovarios hasta que normalmente uno libera un óvulo. Esos folículos producen hormonas, entre ellas los estrógenos, que vuelven a engrosar el revestimiento del útero. Contando los días de la regla, suele durar entre 15 y 20 días, pero es la parte del ciclo que más cambia: puede ser bastante más corta o más larga, incluso en la misma mujer.
> Una fecha calculada no te dice en qué punto está su ciclo ni cómo se encuentra tu pareja.

#### Cómo acompañar

**Antetítulo:** Conversación y acción propia

> «¿Cómo te va esta semana? ¿Hay algo que te apetezca que hagamos o que prefieras dejar para otro momento?»
> Preguntar por sus planes, y no por su ciclo, abre una conversación sin etiquetas.
> Cuenta tus planes y da tú el primer paso en lo que os toque organizar juntos. No hace falta organizar nada en función de su ciclo.

#### Qué no asumir

**Antetítulo:** Antiestereotipo

> Esta parte del ciclo no significa que tu pareja tenga más energía, mejor ánimo o más ganas de hacer planes. Es una idea muy extendida que conviene revisar: la evidencia científica no la respalda, y cada mujer y cada ciclo son distintos.

<a id="a4-3"></a>

### 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la fase folicular: muestra en todas las fases la «Qué pasa en su cuerpo» de la fase lútea y unas «Qué puedes preguntarle», «Qué te toca a ti» y «Qué no asumir» genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Texto nuevo sobre la fase folicular, con los estrógenos como conocimiento básico. | El texto del prototipo describe la fase lútea; D-02. |
| Cómo acompañar · pregunta | La pregunta genérica pasa a una sobre planes. | Variar la conversación entre fases sin referirse al ciclo. |
| Cómo acompañar · acción propia | La logística general se concreta en compartir planes y dar el primer paso. | Acción propia concreta. |
| Qué no asumir | Se sustituye «Una fase estimada no explica…» por el estereotipo de esta fase: más energía y mejor ánimo. | Es la idea más extendida sobre la fase folicular y la evidencia no la sostiene. **JUA-36:** FO-A08 a FO-A12 y FO-A14: sin cambios de rendimiento ni de esfuerzo percibido con la fase verificada en sangre (IronFEMME, Madrid; FENDURA), sin cambios cognitivos, y en población general la fase pesa poco frente a la salud, el estrés y el apoyo. |

<a id="a4-4"></a>

### 4. Trazabilidad

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

<a id="a4-5"></a>

### 5. Exclusiones comprobadas

La v0.2.0 no contiene:

- [x] Afirmaciones de que el sangrado haya terminado o continúe.
- [x] Duraciones fijas («del día 1 al 14», «dos semanas»).
- [x] Energía, ánimo, rendimiento o capacidad atribuidos a la fase.
- [x] Explicaciones hormonales de emociones, conductas o síntomas. Los estrógenos solo aparecen como fisiología del útero.
- [x] Fertilidad, «días seguros», probabilidad de embarazo ni ovulación confirmada.
- [x] Deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

<a id="a4-6"></a>

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La taxonomía de JUA-10 usa «ovocito»; el público entiende mejor «óvulo». | **Aceptada (05-11-2026):** «óvulo» en las tarjetas y «ovocito» en «Cómo funciona» si hace falta precisión. Validar en la revisión clínica. |
| D-02 | Las auditorías de JUA-10 desaconsejan explicar estados por hormonas, pero nombrar las hormonas del ciclo es conocimiento básico. | **Resuelta (05-11-2026):** se nombran los estrógenos, solo como fisiología del útero, igual que la progesterona en la fase lútea. La afirmación entra en la revisión clínica de JUA-16. |
| D-03 | «Qué no asumir» nombra el estereotipo («más energía, mejor ánimo») para desmentirlo. Nombrarlo también lo difunde. | **Resuelta (05-11-2026):** se nombran los estereotipos para que el texto sea accesible, aunque sea a costa de difundirlos. |
| D-04 | La trazabilidad de la variación cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. **Cerrada (10-11-2026):** el PR #12 está fusionado y la ruta `docs/research/JUA-27-duraciones-referencia.md` es válida. |
| D-05 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |

<a id="a4-7"></a>

### 7. Qué debe valorar la persona revisora

- Si «hasta que normalmente uno libera un óvulo» es correcto sin dar por hecho que todos los ciclos son ovulatorios.
- Si la frase sobre los estrógenos y el revestimiento del útero es correcta (D-02).
- Si «Qué no asumir» desmiente el estereotipo sin reforzarlo (D-03).

<a id="a4-8"></a>

### 8. Historial

#### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la fase folicular.
- Reglas propias F-01 a F-04, sobre las comunes H-01 a H-08.
- Cuatro decisiones, todas resueltas o aceptadas el 05-11-2026: «óvulo», estrógenos, estereotipos nombrados y cita de JUA-27.

#### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- La afirmación sobre los estrógenos deja de estar «no auditada» (D-02).
- Pantalla educativa asociada: `folicular-v0.2.0.md` (rama de JUA-36).

#### [0.2.0] — Enmienda del 10-11-2026

- Trazabilidad: JUA-27 (PR #12) ya está en `main`.
- **Sin cambios en el texto de las tarjetas**, por eso conservan la versión.

#### [0.3.0] — 11-11-2026

- «Qué pasa en su cuerpo» añade el intervalo «entre 15 y 20 días» contando los días de la regla: mediana de 17 días y rango intercuartílico de 15 a 20 (Najmabadi 2020; FO-A06; JUA-27 §2). Excepción de H-06 (F-02).
- «Qué no asumir»: «la evidencia científica no la respalda»; «cada mujer y cada ciclo son distintos».

#### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de FOL-06: contar tus planes y dar el primer paso, sin organizar nada en función del ciclo.
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.
- «Qué no asumir»: «una idea muy extendida que conviene revisar».

<a id="a4-9"></a>

### Referencias

1. Office on Women's Health — Your menstrual cycle. <https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
4. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
5. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
6. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
7. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>


---

<a id="a5"></a>

## A5 · Tarjetas de la pantalla de inicio en la ventana ovulatoria estimada

*Origen: `docs/education/home-cards-ovulatory-v0.3.0.md` · versión 0.3.0 · SHA-256 `af846f080772b2bc80d0a49c86ac7bd7c1040fc762479dbcfdd3f94a44f4bb32`*

**Título del documento de origen:** Consona — Tarjetas de la home en la ventana ovulatoria estimada v0.3.0

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. **Incluido en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendiente de envío.
**Reglas comunes:** H-01 a H-08 de [`home-cards-index.md`](../../education/home-cards-index.md).
**Cuándo se muestra:** en el segmento de la rueda de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (RU-05; JUA-27 §3.3).
**Parte de:** el texto provisional de [`src/App.jsx`](../../../src/App.jsx) (JUA-5), que solo tiene texto de la fase lútea.
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación.

> Este documento fija el texto exacto de las tres tarjetas cuando la home muestra la ventana ovulatoria estimada. Es la fase con más riesgo de lectura errónea (fertilidad, deseo), por eso tiene más reglas propias. Cualquier cambio exige una nueva versión y su revisión contra las reglas comunes del índice.

<a id="a5-1"></a>

### 1. Reglas propias de la fase

| ID | Regla |
|---|---|
| O-01 | Siempre «ventana ovulatoria estimada». Nunca «día de ovulación», «estás ovulando», «días fértiles», «periodo fértil» ni «días seguros» (RU-03; JUA-27 §3.4). |
| O-02 | Se explica que la ventana es un cálculo por fechas: no detecta ni confirma la ovulación, ni que ocurra en todos los ciclos. |
| O-03 | Se dice expresamente que la ventana no sirve para buscar ni para evitar un embarazo. Las tarjetas no dan más información de fertilidad; la relación entre ovulación y embarazo se explica en la pantalla educativa (OVU-05). La salud reproductiva es contenido válido (decisión del 06-11-2026). |
| O-04 | H-05 se aplica sin excepción, también en «Qué no asumir»: no se nombra el deseo ni el atractivo, ni siquiera para desmentirlo. |
| O-05 | No se mencionan señales corporales de la ovulación (moco cervical, dolor ovulatorio, temperatura), porque invitarían a observar el cuerpo de tu pareja. |
| O-06 | Sin cifras en días. |

<a id="a5-2"></a>

### 2. Texto de las tarjetas

#### Qué pasa en su cuerpo

**Antetítulo:** Conocimiento general

> La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días, sino un hecho puntual cuyo momento cambia de un ciclo a otro. Esta ventana marca un momento aproximado, calculado hacia atrás desde la fecha prevista de la siguiente regla.
> Es solo un cálculo: no detecta si la ovulación ha ocurrido ni cuándo, y no sirve para buscar ni para evitar un embarazo.

#### Cómo acompañar

**Antetítulo:** Conversación y acción propia

> «¿Cómo te encuentras hoy? ¿Hay algo en lo que te pueda echar una mano?»
> Lo que te cuente dice mucho más que cualquier fecha del calendario.
> Mantén tus compromisos y tu parte de las tareas como cualquier otro día. Si tenéis una decisión pendiente, sácala tú en la conversación en lugar de esperar.

#### Qué no asumir

**Antetítulo:** Antiestereotipo

> Que la app marque esta ventana no dice nada de cómo se siente tu pareja, de lo que quiere ni de cómo está vuestra relación. Es una fecha calculada, no algo que le esté pasando ni una señal para actuar.

<a id="a5-3"></a>

### 3. Cambios respecto al prototipo

El prototipo no tiene texto propio de la ventana ovulatoria: muestra en todas las fases la «Qué pasa en su cuerpo» de la fase lútea y unas «Qué puedes preguntarle», «Qué te toca a ti» y «Qué no asumir» genéricas.

| Tarjeta | Cambio | Motivo |
|---|---|---|
| Qué pasa en su cuerpo | Texto nuevo: la ovulación como hecho puntual y la ventana como cálculo, con su límite para el embarazo. | El texto del prototipo describe la fase lútea; O-01 a O-03. |
| Cómo acompañar · pregunta | La pregunta genérica pasa a una oferta de ayuda abierta. | Variar la conversación entre fases sin referirse al ciclo. |
| Cómo acompañar · acción propia | La logística general se concreta en compromisos, tareas y decisiones pendientes. | Acción propia concreta; mostrar que nada cambia por la fecha. |
| Qué no asumir | Se sustituye «Una fase estimada no explica…» por «no es una señal para actuar», sin nombrar el deseo. | O-04: el estereotipo de esta fase es sexual y H-05 impide nombrarlo. **JUA-36:** OV-A10, OV-A11; SGO-01. |

<a id="a5-4"></a>

### 4. Trazabilidad

| Tarjeta | Afirmación | Fuente | Base auditada |
|---|---|---|---|
| Qué pasa en su cuerpo · definición | La ovulación es la liberación de un óvulo por un ovario; es un evento, no una fase de duración fija. | [1] [2] | `01-cycle-phases` (afirmación auditada de consenso clínico; definición de ovulación y nota de taxonomía). **JUA-36:** OV-A01, OV-A02. |
| Qué pasa en su cuerpo · variación | Su momento cambia de un ciclo a otro. | [3] [4] | `01-cycle-phases` (variación dentro de la misma persona, Najmabadi); JUA-27 §3.2. En `main` desde el PR #12. **JUA-36:** OV-A03 (el día 14 es un mito). |
| Qué pasa en su cuerpo · cálculo | La ventana se calcula hacia atrás desde la fecha prevista de la siguiente regla. | [5] | JUA-27 §3.3 y §3.4 (ventana `[L−14, L−12]`). En `main` desde el PR #12. **JUA-36:** OV-A04, OV-A05. |
| Qué pasa en su cuerpo · límite | No detecta ni confirma la ovulación; no sirve para buscar ni evitar un embarazo. | [1] [6] | `01-cycle-phases` (límites 2 y 3: «no detecta ni confirma»; «nunca sustituye […] método anticonceptivo»). **JUA-36:** OV-A06, OV-A07, OV-A08 (uso real de las apps en España, Universidad de Granada) y OV-A12. |
| Cómo acompañar · pregunta | Pregunta abierta en lugar de suposición. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3; ADR-002 §5. |
| Cómo acompañar · acción propia | Acción propia sobre compromisos, tareas y decisiones. | — | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §3. |
| Qué no asumir | Una fase no explica estados, deseos ni conducta. | [6] [7] | `01-cycle-phases` (límite 4 y afirmación sobre atribución causal); `12-health-emotional-cognitive` EC-02. |

<a id="a5-5"></a>

### 5. Exclusiones comprobadas

La v0.3.0 no contiene:

- [x] «Día de ovulación», «estás ovulando», «días fértiles», «periodo fértil» ni «días seguros».
- [x] Probabilidad de embarazo ni uso de la ventana para buscarlo o evitarlo (solo el aviso de que no sirve para eso).
- [x] Señales corporales de la ovulación.
- [x] Cifras en días.
- [x] Deseo sexual, atractivo, actividad sexual, consentimiento, límites ni disponibilidad, tampoco para negarlos.
- [x] Energía, ánimo o conducta atribuidos a la fase.
- [x] Consejos para gestionar, calmar o evitar a tu pareja.

<a id="a5-6"></a>

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | El estereotipo más extendido de esta fase es sexual. «Qué no asumir» podría desmentirlo de forma directa, pero H-05 impide nombrarlo. | **Aceptada (05-11-2026):** no se nombra (O-04), aunque en la fase folicular sí se nombran los estereotipos: H-05 prevalece. «Qué no asumir» lo cubre con «lo que quiere» y «no es una señal para actuar». La persona revisora valora si basta. |
| D-02 | «Qué pasa en su cuerpo» menciona el embarazo para decir que la ventana no sirve para ello. Es la única mención a la fertilidad en las tarjetas. | **Aceptada (05-11-2026):** se mantiene como límite de seguridad, no como información de fertilidad. Coherente con `01-cycle-phases`, límite 3. |
| D-03 | «Cuándo es más probable» podía leerse como una precisión que la ventana no tiene: contiene la ovulación en ~37–58 % de los ciclos (JUA-27 §2). | **Aceptada (05-11-2026):** «Qué pasa en su cuerpo» dice «marca un momento aproximado». |
| D-04 | Como en la fase folicular, «óvulo» en lugar de «ovocito». | **Aceptada (05-11-2026):** igual que D-01 de la fase folicular. |
| D-05 | La trazabilidad del cálculo cita el dossier de JUA-27, que no está en `main`. | **Aceptada (05-11-2026):** se mantiene la cita con su PR. Revisar la ruta cuando se fusione el PR #12. **Cerrada (10-11-2026):** el PR #12 está fusionado y la ruta `docs/research/JUA-27-duraciones-referencia.md` es válida. |
| D-06 | Las tarjetas «Qué puedes preguntarle» y «Qué te toca a ti» resultaban redundantes entre sí y entre fases, y los acrónimos de las tarjetas dificultaban la lectura. | **Resuelta (11-11-2026):** se fusionan en «Cómo acompañar» (antetítulo «Conversación y acción propia»): una pregunta abierta y un gesto propio ligado al tema de la fase, nunca al estado de ella. La home pasa a tres tarjetas. Los documentos usan los títulos de las tarjetas en lugar de acrónimos |

<a id="a5-7"></a>

### 7. Qué debe valorar la persona revisora

- Si la definición de «Qué pasa en su cuerpo» es correcta y si «un momento aproximado» describe bien la ventana (D-03).
- Si el aviso sobre el embarazo es suficiente y no da información de fertilidad (D-02).
- Si «Qué no asumir» cubre el estereotipo sexual sin nombrarlo (D-01).

<a id="a5-8"></a>

### 8. Historial

#### [0.1.0] — 05-11-2026

- Primera versión de las cuatro tarjetas de la ventana ovulatoria estimada.
- Reglas propias O-01 a O-06, sobre las comunes H-01 a H-08.
- Cinco decisiones, todas aceptadas el 05-11-2026.

#### [0.2.0] — 06-11-2026

- Trazabilidad apuntada a la investigación de base de JUA-36 (`docs/research/fases/`, rama de JUA-36). **Sin cambios en el texto de las tarjetas**: la investigación lo confirma.
- O-03 precisa que la explicación de la ventana fértil está en la pantalla educativa y que la salud reproductiva es contenido válido.
- La rueda mantiene «Ventana ovulatoria estimada», sin «fértil» (decisión del 06-11-2026).
- Pantalla educativa asociada: `ovulatoria-v0.2.0.md` (rama de JUA-36).

#### [0.2.0] — Enmienda del 10-11-2026

- Trazabilidad: JUA-27 (PR #12) ya está en `main`.
- **Sin cambios en el texto de las tarjetas**, por eso conservan la versión.

#### [0.2.0] — Enmienda del 11-11-2026

- Referencias a las versiones nuevas de las demás tarjetas y pantallas. **Sin cambios en el texto de las tarjetas**: no tenían afirmaciones generales con «personas» (D-07 de la pantalla SPM/TDPM).

#### [0.3.0] — Tres tarjetas (11-11-2026)

- «Qué puedes preguntarle» y «Qué te toca a ti» se fusionan en «Cómo acompañar», con la pregunta de antes y el gesto de la antigua «Qué te toca a ti», sin cambios. No se usa el gesto de OVU-07 sobre anticoncepción: en la home, durante la ventana, podría leerse como una señal de fertilidad (H-05, H-06).
- Los documentos usan los títulos de las tarjetas en lugar de los acrónimos.

<a id="a5-9"></a>

### Referencias

1. ACOG — Fertility Awareness-Based Methods of Family Planning. <https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning>
2. Schmalenberger et al. — How to study the menstrual cycle: Practical tools and recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181/>
3. Najmabadi et al. — Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/>
4. Bull et al. — Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. <https://www.nature.com/articles/s41746-019-0152-7>
5. NHS — Periods and fertility in the menstrual cycle (revisada el 05-01-2023). <https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/>
6. Allen et al. — Determining Menstrual Phase in Human Biobehavioral Research: A Review with Recommendations. <https://pmc.ncbi.nlm.nih.gov/articles/PMC4821777/>
7. Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012). <https://www.sciencedirect.com/science/article/pii/S1550857912001349>


---

<a id="a6"></a>

## A6 · Pantalla «La menstruación» de «Comprender»

*Origen: `docs/education/menstruacion-v0.2.0.md` · versión 0.2.0 · SHA-256 `400d18a4f583628ea9932ff1fb8f13bd08fac57d1e3b0c8c5f1ba382e4c5c601`*

**Título del documento de origen:** Consona — Pantalla educativa «La menstruación» v0.2.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío.
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/menstruacion/`](../../research/fases/menstruacion). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio de redacción, orden o mensaje de derivación exige una nueva versión y una nueva revisión clínica de lo modificado.

<a id="a6-1"></a>

### 1. Público y tono

**Quién lee:** la persona que acompaña, es decir, la pareja de la persona que menstrúa. Los mensajes de seguridad también deben servir si quien lee es la persona que menstrúa.

**Para qué:** entender qué es la menstruación y qué no dice, para acompañar en consonancia sin interpretar, anticipar ni explicar a la otra persona.

Se aplican las reglas de tono T-01 a T-04 de la pantalla SPM/TDPM (`spm-tdpm-v0.7.0.md`):

- **T-01:** educativo, no paternalista.
- **T-02:** la pareja es la autoridad sobre su propia experiencia.
- **T-03:** preguntar en lugar de suponer.
- **T-04:** lo general habla de «personas»; lo individual, de «tu pareja».

Y las reglas de sesgo SG-01 a SG-07 de `03-sesgo-genero.md`.

<a id="a6-2"></a>

### 2. Ubicación

| ID | Regla |
|---|---|
| U-01 | Es un artículo de «Comprender» (pantalla 2.3), en el índice de «El cuerpo en cada fase». |
| U-02 | El enlace es siempre visible y tiene el mismo texto para todas las personas. No aparece, cambia ni se destaca según la fase estimada, la fecha o cualquier dato local. |
| U-03 | La home no enlaza directamente a esta pantalla ni muestra avisos que remitan a ella. |
| U-04 | Se puede volver al índice de «Comprender» con un control visible y accesible para lector de pantalla. |

#### Coherencia con las tarjetas de la home

Las tarjetas de la menstruación (`home-cards-menstruation-v0.3.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las dos se revisa contra la otra antes de publicarse.

<a id="a6-3"></a>

### 3. Reglas de la pantalla

| ID | Regla |
|---|---|
| R-01 | El contenido es estático e idéntico para todas las personas. No depende de fechas, fase estimada, registros, consentimiento ni ningún dato. |
| R-02 | La pantalla no pide, muestra ni conserva datos. |
| R-03 | Abrir la pantalla, desplazarse o pulsar un número de ayuda no genera eventos, analítica, telemetría ni comunicación con ningún servidor. |
| R-04 | El mensaje de ayuda urgente (DER-02) aparece en la primera vista, sin desplazarse ni desplegar nada. |
| R-05 | Los números de teléfono se muestran como texto legible; un enlace `tel:` es opcional. |
| R-06 | Sin iconos, colores ni ilustraciones que asocien la menstruación con suciedad, vergüenza, riesgo, gravedad, sexualidad o disponibilidad. |
| R-07 | Sin indicador de «leído», progreso ni rachas (JUA-31). |

<a id="a6-4"></a>

### 4. Texto de la pantalla

Los identificadores no se muestran en la interfaz.

#### MEN-00 · Título

**La menstruación**

#### MEN-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

#### DER-02 · Ayuda urgente (ver sección 5)

#### MEN-02 · Qué es

El útero tiene un revestimiento interno que, en cada ciclo, se prepara por si hubiera un embarazo. Si no lo hay, bajan las hormonas que lo mantenían y se desprende su capa más superficial: eso es la menstruación. La capa más profunda se queda y regenera el revestimiento en pocos días, sin dejar cicatriz.

Es un proceso que el cuerpo repite ciclo tras ciclo. Su primer día marca el inicio de un nuevo ciclo, y por eso Consona cuenta los días a partir de él.

#### MEN-03 · Cuánto dura

Suele durar unos 5 días, aunque cambia de una mujer a otra y de un ciclo a otro. En los primeros días, el flujo suele ser mayor.

#### MEN-03b · Lo que ves en Consona

En la rueda del ciclo, la menstruación empieza el día en que tu pareja confirma que le ha venido la regla; una fecha prevista no basta. Dura lo que ella haya indicado o, si no lo ha indicado, 5 días como referencia general. Ese día empieza también un ciclo nuevo y la rueda vuelve al principio.

Los días en que la rueda pasa de una fase a otra los calcula Consona a partir de las fechas. Son una estimación, no el momento en que cambia el cuerpo.

#### MEN-04 · El dolor

El dolor menstrual es muy frecuente: en España, más de siete de cada diez mujeres de 15 a 49 años dicen tener dolor con la regla, y casi la mitad necesita medicación para aliviarlo. Se debe sobre todo a unas sustancias, las prostaglandinas, que hacen que el útero se contraiga con fuerza, y suele ser mayor los primeros días. Algunas mujeres notan además cansancio u otras molestias; otras no notan nada.

Que sea frecuente no significa que haya que aguantarlo. Un dolor que impide hacer vida normal, que cambia o que va a más merece consultarse, porque puede tener causas que se pueden tratar. Durante mucho tiempo este dolor se ha tratado como algo normal, también en las consultas, y eso ha retrasado diagnósticos durante años.

#### MEN-05 · Lo que la menstruación no dice

La evidencia científica no muestra que la menstruación cambie la capacidad de concentrarse, razonar o rendir.

El ánimo puede variar a lo largo del ciclo, pero en promedio varía poco, y en el día a día depende mucho más de la salud, del estrés y del apoyo que de la fase. Una media no dice cómo está tu pareja hoy. El estereotipo de que con la regla una mujer está irritable o fuera de control no se sostiene, y hace daño: lleva a no tomarse en serio lo que esa mujer dice o siente.

#### MEN-06 · Lo que no se suele contar

Mucha gente sigue con su día a día con dolor y no dice por qué. En España, una de cada cuatro mujeres ha sentido alguna vez que necesitaba faltar al trabajo, a clase o a otra actividad por el dolor o el sangrado de la regla, pero solo una de cada siete lo ha hecho. La mitad cree que faltar por ese motivo puede traerle consecuencias en el trabajo.

En España, la ley reconoce desde 2023 la salud menstrual como parte de la salud sexual y reproductiva y prevé una baja cuando la menstruación es incapacitante por una enfermedad diagnosticada.

#### MEN-07 · Acompañar en consonancia

Tu pareja es quien sabe cómo está. Tu papel no es interpretar su ciclo, sino preguntar, escuchar y hacer tu parte.

Algunas preguntas que dejan espacio:
- «¿Hay algo que te venga bien hoy?»
- «¿Prefieres que todo siga como siempre?»

Hay cosas que dependen de ti: ocuparte de tu parte en casa sin esperar a que te lo pidan y ajustar los planes según lo que te diga. Hablar de la regla con la misma naturalidad que de cualquier otra cosa, sin bromas ni comentarios, también es hacer tu parte. Si a tu pareja le preocupa su dolor, tomárselo en serio también es acompañar.

#### DER-01 · Cuándo puede ayudar un profesional (ver sección 5)

#### MEN-08 · Fuentes

Esta información se basa en revisiones científicas sobre la fisiología del endometrio (2020 y 2022), metaanálisis sobre el dolor menstrual (2019) y sobre el ciclo y las capacidades cognitivas (2025), la Encuesta de Anticoncepción en España de la Sociedad Española de Contracepción (2024), estudios españoles con estudiantes universitarias (2018 y 2020), un estudio cualitativo realizado en Barcelona (2022), guías del Colegio Americano de Obstetras y Ginecólogos (ACOG) y de la Sociedad de Obstetras y Ginecólogos de Canadá (SOGC), y la Ley Orgánica 1/2023. Las referencias completas están disponibles en «Fuentes».

<a id="a6-5"></a>

### 5. Mensajes de derivación

Estáticos y siempre visibles en la posición indicada. No se activan por fechas, fase ni registros.

#### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de MEN-07.

> **Cuándo puede ayudar un profesional**
> Si el dolor le impide hacer vida normal, si cambia o va a más, si el sangrado dura más de una semana, es tan abundante que dificulta el día a día o aparece entre reglas, un profesional sanitario puede valorarlo. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

Fuentes: ACOG CPG No. 11 y FAQ de dolor menstrual (cierre de JUA-10); FAQ de ACOG sobre sangrado uterino anormal (`jua-10/13`). El sangrado entre reglas es uno de los parámetros de sangrado anormal de FIGO (S-01, S-03).

#### DER-02 · Ayuda urgente

**Posición:** después de MEN-01, en la primera vista.

> **Si hay un sangrado muy abundante con mareo**
> Si el sangrado empapa cada hora una o más compresas, tampones o prendas de ropa interior absorbente, o llena la copa en una hora, durante más de dos horas seguidas, y además hay mareo, sensación de desmayo, falta de aire o dolor en el pecho, llama al **112**.

Fuente: criterio público de ACOG para acudir a urgencias (`jua-10/13`, consenso clínico), formulado para compresas y tampones. La copa y la ropa interior absorbente son una adaptación editorial (D-05), apoyada en el NHS, *Heavy periods* (revisado el 19-09-2024), que incluye la copa en su definición de sangrado abundante. Pendiente de validación clínica.

<a id="a6-6"></a>

### 6. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| MEN-02 | Fisiología, desencadenante, reparación y día 1 del ciclo | ME-A01 a ME-A04 |
| MEN-03 | Duración típica y flujo de los primeros días | ME-A05, ME-A06 |
| MEN-03b | Inicio confirmado, duración declarada o de 5 días, inicio de un ciclo nuevo; límites entre fases calculados por el motor | Especificación del panel v1.1.2: ME-01, ME-04, DA-06, RU-05; motor de estimación CON-032 (ADR-001 C9); M-02 de JUA-23 |
| MEN-04 | Prevalencia y necesidad de medicación en España, mecanismo, momento del dolor, otras molestias, cuándo consultar y normalización, también en las consultas españolas | ME-A09, ME-A10 (S-26), ME-A12, ME-A16, ME-A19 (S-27) |
| MEN-05 | Sin cambios cognitivos; variación pequeña del ánimo; estereotipo y su efecto | ME-A13, ME-A15, ME-A17 (S-13, S-21) |
| MEN-06 | Seguir con dolor sin decirlo; necesidad de faltar frente a faltar de hecho y temor a consecuencias laborales en España; marco legal español | ME-A11 (S-11, S-26); ME-A20 |
| MEN-07 | Papel de la pareja | ME-A18, ME-A19; SG-06 |
| DER-01 | Criterios de consulta | Cierre de JUA-10 (auditoría 06); `jua-10/13` |
| DER-02 | Criterio de urgencia | `jua-10/13` (ACOG) |

<a id="a6-7"></a>

### 7. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | MEN-04 da una cifra de prevalencia («más de siete de cada diez»), ahora de población general española (S-26) y no solo de mujeres jóvenes. Puede leerse como «lo normal es que le duela». | **Resuelta (06-11-2026):** se mantiene la cifra. Se pide igualmente valoración en la revisión clínica. |
| D-02 | MEN-06 citaba un estudio de los Países Bajos porque no había un dato español equivalente. | **Resuelta (06-11-2026):** confirmada la sustitución por los datos españoles de la encuesta de la SEC de 2024 (S-26). |
| D-03 | MEN-04 alude a los diagnósticos retrasados sin nombrar la endometriosis. | **Resuelta (06-11-2026):** no se nombra la endometriosis. La revisión clínica puede valorar si nombrarla ayuda a reconocer el problema. |
| D-04 | MEN-07 pide «no hacer bromas sobre la regla». Es una instrucción directa, y T-01 evita el tono de sermón. | **Resuelta (06-11-2026):** se plantea en positivo: «Hablar de la regla con la misma naturalidad que de cualquier otra cosa, sin bromas ni comentarios, también es hacer tu parte». Validar el tono con usuarios del piloto (P-05 del cierre). |
| D-05 | DER-02 habla de «compresas o tampones». Hay otros productos (copa, ropa interior absorbente) con los que el criterio de ACOG no se puede aplicar igual. | **Resuelta (06-11-2026):** DER-02 incluye la copa y la ropa interior absorbente. La equivalencia es una adaptación editorial del criterio de ACOG, que solo habla de compresas y tampones; se apoya en que el NHS incluye la copa en su definición de sangrado abundante (revisado el 19-09-2024). La revisión clínica debe validarla. |

<a id="a6-8"></a>

### 8. Historial

#### [0.2.0] — 11-11-2026

- Nuevo bloque MEN-03b «Lo que ves en Consona»: cómo dibuja la rueda del ciclo la menstruación y quién calcula los cambios de fase (CON-032). El uso del dato declarado pasa de MEN-03 a este bloque.
- «Mujeres» en lugar de «personas» en las afirmaciones generales (D-07 de la pantalla SPM/TDPM).
- MEN-05: «La evidencia científica» en lugar de «La investigación».

#### [0.1.0] — 05-11-2026

- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques MEN-00 a MEN-08, DER-01 y DER-02.
- Cinco decisiones abiertas.
- 06-11-2026: decisiones D-01 a D-05 resueltas. DER-02 incluye la copa y la ropa interior absorbente. MEN-07 plantea en positivo lo de las bromas (D-04).
- 06-11-2026: MEN-04 y MEN-06 pasan a datos de población general española (encuesta de la SEC de 2024); el dato de los Países Bajos sale de la pantalla (D-02).
- 06-11-2026: MEN-05 incorpora los estudios de registro diario en población general (Romans 2013; Kiesner 2016 y 2022).
- 05-11-2026: fisiología y estigma reforzados con Critchley et al. 2020 y Johnston-Robledo y Chrisler, verificados en texto completo. Se añade «sin dejar cicatriz» en MEN-02.


---

<a id="a7"></a>

## A7 · Pantalla «La fase folicular» de «Comprender»

*Origen: `docs/education/folicular-v0.2.0.md` · versión 0.2.0 · SHA-256 `4919e84173568d614c6449fd4ffaaa9662a68dc41b915d69dbb5806d08ee1953`*

**Título del documento de origen:** Consona — Pantalla educativa «La fase folicular» v0.2.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío.
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/folicular/`](../../research/fases/folicular). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

<a id="a7-1"></a>

### 1. Público, tono, ubicación y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.2.0.md`, secciones 1 a 3):

- tono T-01 a T-04;
- ubicación U-01 a U-04, como artículo de «Comprender» en «El cuerpo en cada fase»;
- reglas R-01 a R-03, R-05 a R-07.

Se añaden las reglas de sesgo SGF-01 a SGF-05 de `03-sesgo-genero.md`.

**Diferencia con la menstruación:** esta pantalla no lleva un mensaje de ayuda urgente (DER-02), porque la fase no tiene un criterio de urgencia propio. Ver D-01.

#### Coherencia con las tarjetas de la home

Las tarjetas de la fase folicular (`home-cards-follicular-v0.3.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las dos se revisa contra la otra.

<a id="a7-2"></a>

### 2. Texto de la pantalla

#### FOL-00 · Título

**La fase folicular**

#### FOL-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

#### FOL-02 · Qué es

La fase folicular empieza con la menstruación y llega hasta la ovulación. Durante los primeros días, por tanto, coincide con el sangrado.

En ella maduran varios folículos en los ovarios: pequeñas estructuras que contienen un óvulo inmaduro. Normalmente uno se impone a los demás. Ese folículo produce hormonas, entre ellas los estrógenos, que van aumentando y vuelven a engrosar el revestimiento del útero que se desprendió con la regla. Cuando los estrógenos alcanzan un nivel alto, ponen en marcha la ovulación.

#### FOL-03 · Cuánto dura

Es la parte del ciclo que más cambia: de una mujer a otra, de un ciclo a otro en la misma mujer y con la edad, porque tiende a acortarse con los años. Por eso unos ciclos son más largos que otros.

La idea de que va «del día 1 al 14» es una simplificación de manual. No hay un calendario fijo.

#### FOL-03b · Lo que ves en Consona

En el cuerpo, la fase folicular empieza con la menstruación. En la rueda del ciclo se dibujan por separado, para que veas cuándo hay sangrado: la fase folicular ocupa los días entre el final de la menstruación y la ventana ovulatoria estimada. Como es la parte del ciclo que más cambia, es también la que se alarga o se acorta cuando un ciclo dura más o menos. Es una estimación: Consona no sabe cuándo termina de verdad, porque no sabe cuándo hay ovulación.

Los días en que la rueda pasa de una fase a otra los calcula Consona a partir de las fechas. Son una estimación, no el momento en que cambia el cuerpo.

#### FOL-04 · El mito de la «fase de energía»

Circula mucho la idea de que en esta fase hay más energía, mejor ánimo o más ganas de hacer cosas, y de que conviene organizar el ejercicio, la dieta o la agenda según la fase. La evidencia científica no lo respalda.

Incluso en deportistas, con la fase comprobada en análisis de sangre, no se han encontrado cambios en el esfuerzo que perciben ni en lo preparadas que se sienten. Uno de esos estudios se hizo en Madrid con deportistas de resistencia entrenadas. Las revisiones recientes consideran prematuro planificar según la fase. Tampoco cambian la capacidad de concentrarse ni de razonar.

#### FOL-05 · Lo que la fase no dice

No hay evidencia de que en esta fase el ánimo mejore de forma predecible. En estudios con mujeres que registraron cada día cómo se sentían, el ánimo dependía mucho más de su salud, del estrés y del apoyo que tenían que de la fase del ciclo. Y no hay un patrón que valga para todas: algunas mujeres notan cambios en un momento del ciclo, otras en otro y muchas en ninguno.

Un estereotipo que suena positivo funciona igual que uno negativo: da por hecho cómo está alguien y qué puede hacer. Durante mucho tiempo, además, se dejó a las mujeres fuera de muchos estudios con el argumento de que el ciclo complicaba los resultados, y esos huecos se han llenado con mitos.

#### FOL-06 · Acompañar en consonancia

Que el calendario marque esta fase no te dice nada de cómo está tu pareja ni de lo que le apetece. No hace falta organizar nada en función de su ciclo: basta con preguntar.

Algunas preguntas que dejan espacio:
- «¿Cómo te va esta semana?»
- «¿Hay algo que te apetezca hacer o que prefieras dejar para otro momento?»

Y hay una parte que es tuya: contar tus planes, preguntar por los suyos y dar tú el primer paso en lo que os toque organizar juntos.

#### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

#### FOL-07 · Fuentes

Esta información se basa en revisiones científicas sobre la fisiología del ciclo (2018 a 2023), un estudio con más de 600.000 ciclos registrados en una app (2019), un análisis de tres cohortes de seguimiento (2020), revisiones sobre ciclo y ejercicio (2020 y 2023), un estudio de la Universidad Politécnica de Madrid con deportistas (2021) y un metaanálisis sobre ciclo y capacidades cognitivas (2025). Las referencias completas están disponibles en «Fuentes».

<a id="a7-3"></a>

### 3. Mensaje de derivación

#### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de FOL-06.

> **Cuándo puede ayudar un profesional**
> Que los ciclos varíen es habitual. Si son muy cortos o muy largos, cambian mucho de un mes a otro o la regla deja de venir durante meses, un profesional sanitario puede valorarlo. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

Fuente: orientación pública de ACOG sobre sangrado uterino anormal (`jua-10/13-cycle-variability.md`, consenso clínico): ciclos de menos de 21 o más de 35 días, variación de más de 7 a 9 días, o ausencia de menstruación durante 3 a 6 meses.

<a id="a7-4"></a>

### 4. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| FOL-02 | Inicio con la menstruación; folículos; estrógenos; revestimiento; ovulación | FO-A01 a FO-A05 |
| FOL-03 | Variabilidad, edad y calendario no fijo | FO-A06, FO-A07; SGF-03, SGF-04 |
| FOL-03b | La menstruación forma parte de la fase folicular, pero la rueda las dibuja por separado; la fase folicular se alarga o se acorta con el ciclo; límites entre fases calculados por el motor | FO-A01, FO-A06; especificación del panel v1.1.2: RU-05, ME-05; motor de estimación CON-032 (ADR-001 C9) |
| FOL-04 | Rendimiento, esfuerzo percibido, planificación y cognición | FO-A08 a FO-A11 (FS-09 a FS-12, FS-14, FS-16) |
| FOL-05 | Ánimo; peso de la salud, el estrés y el apoyo; diferencias individuales; estereotipo positivo; exclusión de la investigación | FO-A12 a FO-A14 (FS-18 a FS-20); SGF-01, SGF-05 |
| FOL-06 | Papel de la pareja | SGF-02; regla T-02 |
| DER-01 | Criterios de consulta | `jua-10/13` (ACOG) |

<a id="a7-5"></a>

### 5. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | La pantalla no lleva un mensaje de ayuda urgente. | **Resuelta (06-11-2026):** no se incluye mensaje de ayuda urgente. Se pide confirmación en la revisión clínica. |
| D-02 | FOL-04 menciona que uno de los estudios es español. | **Resuelta (06-11-2026):** se mantiene la mención al estudio español. |
| D-03 | FOL-05 menciona la exclusión de las mujeres de la investigación. Puede leerse como ajeno a la pareja. | **Resuelta (06-11-2026):** se mantiene en una frase; tono a validar en el piloto. |
| D-04 | DER-01 da criterios en términos generales y no las cifras de ACOG. | **Resuelta (06-11-2026):** los criterios se mantienen en términos generales. |

<a id="a7-6"></a>

### 6. Historial

#### [0.2.0] — 11-11-2026

- Nuevo bloque FOL-03b «Lo que ves en Consona»: cómo dibuja la rueda del ciclo la fase folicular, separada de la menstruación, y quién calcula los cambios de fase (CON-032).
- «Mujeres» en lugar de «personas» en las afirmaciones generales (D-07 de la pantalla SPM/TDPM).
- FOL-04: «La evidencia científica» en lugar de «La investigación».

#### [0.1.0] — 05-11-2026

- 06-11-2026: decisiones D-01 a D-04 resueltas, todas con la propuesta.
- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques FOL-00 a FOL-07 y DER-01.
- Cuatro decisiones abiertas.
- 05-11-2026: FOL-05 incorpora estudios de registro diario en población general (Romans 2013; Kiesner 2016 y 2022).


---

<a id="a8"></a>

## A8 · Pantalla «La ventana ovulatoria» de «Comprender»

*Origen: `docs/education/ovulatoria-v0.2.0.md` · versión 0.2.0 · SHA-256 `3b7dcf8240fc63f75b2b0bdfcd447a791ef9c2bcd842a6da0bf1f33791bb248b`*

**Título del documento de origen:** Consona — Pantalla educativa «La ventana ovulatoria» v0.2.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío. Nombre visible decidido el 06-11-2026 (D-01).
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/ovulatoria/`](../../research/fases/ovulatoria). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, información de fertilidad, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

<a id="a8-1"></a>

### 1. Público, tono, ubicación y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.2.0.md`, secciones 1 a 3), con dos añadidos:

- **Reglas de la fase:** O-01 a O-06 de las tarjetas de JUA-23, y reglas de sesgo SGO-01 a SGO-05 de `03-sesgo-genero.md`. **Excepción a O-05 en esta pantalla:** OVU-02 menciona el dolor de ovulación (D-05), sin cifras, sin decir si es probable y sin presentarlo como forma de saber si ha habido ovulación. Las tarjetas de la home siguen sin mencionarlo.
- **R-08:** ningún icono, color ni ilustración asociado a la fertilidad, el embarazo, el atractivo o la sexualidad.
- **R-09:** la pantalla incluye siempre información de salud reproductiva: que la ventana no sirve como método anticonceptivo ni para buscar embarazo, y a dónde acudir para informarse (OVU-05, OVU-07, DER-01). Decisión de producto del 06-11-2026 (D-04).

#### Coherencia con la rueda y con las tarjetas de la home

La rueda dibuja la ventana con bordes difusos (JUA-27 §3.4) y las tarjetas de la ventana ovulatoria (`home-cards-ovulatory-v0.3.0.md`, JUA-23) resumen esta pantalla. Cualquier cambio en una de las tres piezas se revisa contra las otras.

<a id="a8-2"></a>

### 2. Texto de la pantalla

#### OVU-00 · Título

**La ventana ovulatoria**

#### OVU-01 · Nota fija

> Consona ofrece educación general. No diagnostica, no detecta la ovulación y no sirve como método anticonceptivo.

#### OVU-02 · Qué es la ovulación

La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días, sino un hecho puntual.

Ocurre al final de la fase folicular: cuando los estrógenos llegan a un nivel alto, provocan la subida de otra hormona que, en un día o dos, desencadena la ovulación. Después empieza la fase lútea.

Algunas mujeres notan una molestia leve en un lado del bajo vientre hacia la mitad del ciclo. No sirve para saber si ha habido ovulación, y si el dolor es fuerte o no se pasa, merece consultarse.

#### OVU-03 · Lo que ves en Consona

Consona no sabe cuándo ovula nadie. Lo que ves en la rueda del ciclo es una ventana calculada hacia atrás desde la fecha prevista de la siguiente regla, y por eso tiene los bordes difusos.

Es un momento aproximado. El día de la ovulación cambia mucho de una mujer a otra y de un ciclo a otro, y en bastantes ciclos ocurre antes o después de la ventana. La idea de que la ovulación ocurre el día 14 es un mito: muy pocas mujeres tienen ciclos exactos de 28 días.

Los días en que la rueda pasa de una fase a otra los calcula Consona a partir de las fechas. Son una estimación, no el momento en que cambia el cuerpo.

#### OVU-04 · No todos los ciclos tienen ovulación

Que la regla llegue con regularidad no confirma que haya habido ovulación. En un estudio con población general, al menos uno de cada cuatro ciclos de duración normal no mostraba signos de ovulación. Un ciclo sin ovulación de vez en cuando es frecuente, y la app no puede saber si ha ocurrido.

#### OVU-05 · Ovulación y embarazo

Un embarazo solo es posible en unos pocos días de cada ciclo: los cinco anteriores a la ovulación y el propio día de la ovulación. Es lo que a veces se llama «ventana fértil». Dura eso porque los espermatozoides pueden seguir siendo capaces de fecundar durante varios días; después de la ovulación, en cambio, la posibilidad de embarazo baja muy deprisa.

Pero como el momento de la ovulación no se puede saber por calendario, esos días tampoco. Por eso la ventana que ves en Consona no es una ventana fértil ni sirve para calcularla.

#### OVU-05b · No sirve para buscar ni para evitar un embarazo

Ninguna ventana de calendario, tampoco la de Consona, sirve para saber cuándo es posible un embarazo. Como la ovulación puede adelantarse o retrasarse mucho, hay muy pocos días del ciclo en los que un embarazo sea imposible, incluso el día en que se espera la regla. Hay quien usa los «días fértiles» de su app para decidir cuándo tomar precauciones, y es un riesgo: el calendario no puede saber cuándo ha habido ovulación.

Para evitar un embarazo hace falta un método fiable. Para buscarlo, también ayuda el consejo profesional (ver DER-01).

#### OVU-06 · Lo que la ventana no dice

Que la app marque esta ventana no dice nada de cómo se siente tu pareja, de lo que quiere ni de cómo está vuestra relación. No hay evidencia de que en este momento el ánimo o las capacidades mejoren; de hecho, algunas mujeres se encuentran peor a mitad de ciclo y la mayoría no nota cambios en este momento.

Es una fecha calculada, no algo que le esté pasando ni una señal para actuar.

#### OVU-07 · Acompañar en consonancia

Como cualquier otro día, lo que sirve es preguntar y hacer tu parte.

Algunas preguntas que dejan espacio:
- «¿Cómo te encuentras hoy?»
- «¿Hay algo en lo que te pueda echar una mano?»

Si en algún momento habláis de anticoncepción o de buscar un embarazo, es una conversación a dos que merece información fiable, no el cálculo de una app.

#### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

#### OVU-08 · Fuentes

Esta información se basa en la fisiología del ciclo (2018), una opinión de comité de la Sociedad Americana de Medicina Reproductiva sobre la ventana fértil (2022), estudios sobre el momento de la ovulación y la fecundación con miles de ciclos (1995 a 2020), un estudio con población general noruega (2015), una revisión sistemática sobre métodos basados en el conocimiento de la fertilidad (2018) un estudio de la Universidad de Granada sobre el uso de apps menstruales (2019) y la Encuesta de Anticoncepción en España de la Sociedad Española de Contracepción (2024). Las referencias completas están disponibles en «Fuentes».

<a id="a8-3"></a>

### 3. Mensaje de derivación

#### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de OVU-07.

> **Anticoncepción y búsqueda de embarazo**
> Si queréis evitar un embarazo o buscarlo, un profesional sanitario puede orientaros sobre métodos fiables y sobre cómo funciona el ciclo de cada mujer. El centro de salud (medicina de familia o matrona) o un centro de atención a la salud sexual y reproductiva son buenos puntos de partida.

Fuente: `jua-10/01-cycle-phases.md`, límite 3 («nunca sustituye […] método anticonceptivo»); OS-08; OS-09; OS-16 (en España, la mayoría elige su método con un profesional: ginecología, medicina de familia, matrona o centro de planificación).

<a id="a8-4"></a>

### 4. Trazabilidad

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

<a id="a8-5"></a>

### 5. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | Nombre visible de la fase. «Ovulación» a secas es impreciso (es un hecho puntual, no se detecta y sugiere certeza). Se valoró «Ventana ovulatoria y fértil estimada». | **Resuelta (06-11-2026):** la rueda mantiene «Ventana ovulatoria estimada», sin «fértil»; el título de la pantalla es «La ventana ovulatoria»; la relación entre ovulación y embarazo se explica en el texto (OVU-05). |
| D-02 | OVU-04 daba una proporción («entre una cuarta parte y un tercio»). Procede de un estudio con edad media de 42 años y una sola medición. | **Resuelta (06-11-2026):** «al menos uno de cada cuatro ciclos», el límite inferior del estudio. Se pide igualmente valoración en la revisión clínica. |
| D-03 | OVU-05b menciona que hay quien usa las apps para decidir cuándo tomar precauciones. | **Resuelta (06-11-2026):** se mantiene; es el motivo del aviso y está documentado en España (OS-09). |
| D-04 | OVU-07 menciona la conversación sobre anticoncepción. Podía parecer que rozaba el ámbito sexual (H-05). | **Resuelta (06-11-2026):** la salud reproductiva es contenido válido de Consona y debe estar presente. H-05 excluye el deseo, la actividad sexual, el consentimiento sexual, los límites y la disponibilidad, no la anticoncepción ni la búsqueda de embarazo. Presencia garantizada en OVU-05, OVU-07 y DER-01 (R-09). |
| D-05 | La pantalla no mencionaba el dolor de ovulación, que algunas personas notan. | **Resuelta (06-11-2026):** se menciona en OVU-02, sin cifras y sin decir si es probable o no: «Algunas personas notan una molestia leve en un lado del bajo vientre hacia la mitad del ciclo. No sirve para saber si ha habido ovulación, y si el dolor es fuerte o no se pasa, merece consultarse.» Base: OV-A17 (los estudios clásicos con ecografía describen un dolor leve, corto y previo a la ovulación; el NHS, cuándo consultar; la cohorte de endometriosis, por qué el dolor fuerte merece consulta). |
| D-06 | OVU-05 explica la ventana fértil y la supervivencia de los gametos sin cifras de horas ni de probabilidad. | **Resuelta (06-11-2026):** se mantiene sin cifras de horas ni de probabilidad. Se pide igualmente valoración en la revisión clínica. |

<a id="a8-6"></a>

### 6. Historial

#### [0.2.0] — 11-11-2026

- OVU-03 pasa a llamarse «Lo que ves en Consona», como en las demás pantallas de fase, y añade quién calcula los cambios de fase (CON-032).
- «Mujeres» en lugar de «personas» en las afirmaciones generales (D-07 de la pantalla SPM/TDPM).
- DER-01: «el ciclo de cada mujer».

#### [0.1.0] — 06-11-2026

- Primera versión, a partir del cierre de la investigación de JUA-36.
- Bloques OVU-00 a OVU-08 y DER-01.
- Cinco decisiones abiertas; el nombre visible está pendiente.
- 06-11-2026: D-05 y D-06 resueltas. OVU-02 menciona el dolor de ovulación.
- 06-11-2026: DER-01 nombra la medicina de familia y la matrona (encuesta de la SEC de 2024). OVU-08 añade las fuentes de la ventana fértil, que faltaban, y la encuesta.
- 06-11-2026: OVU-05b añade que hay muy pocos días sin posibilidad de embarazo (Wilcox 2000, verificado en texto completo).
- 06-11-2026: D-01 a D-04 resueltas. Nuevo bloque OVU-05 «Ovulación y embarazo»; el aviso anticonceptivo pasa a OVU-05b. Nueva decisión D-06.
- 08-11-2026: OVU-05 deja de afirmar que el óvulo solo puede fecundarse durante poco tiempo. Wilcox 1995, verificado en texto completo, lo plantea como una de dos hipótesis; la pantalla dice solo lo observado: la posibilidad de embarazo baja muy deprisa tras la ovulación.


---

<a id="a9"></a>

## A9 · Pantalla «La fase lútea» de «Comprender»

*Origen: `docs/education/lutea-v0.3.0.md` · versión 0.3.0 · SHA-256 `443b6f8b83e675834067357fa0226ad909334e3ed279d03fc196fa97913a0476`*

**Título del documento de origen:** Consona — Pantalla educativa «La fase lútea» v0.3.0

**Estado:** Borrador para revisión de producto. **Incluida en el alcance de la revisión clínica de JUA-16**, pendiente de envío.
**Issue:** JUA-36. Sirve como artículo de «Comprender» (pantalla 2.3, JUA-31).
**Base de investigación:** [`docs/research/fases/lutea/`](../../research/fases/lutea). Toda afirmación sale de la redacción segura de su cierre (`04-cierre.md`).
**Idioma:** español (España).
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio exige una nueva versión y una nueva revisión clínica de lo modificado.

<a id="a9-1"></a>

### 1. Público, tono y reglas

Iguales que en la pantalla de la menstruación (`menstruacion-v0.2.0.md`, secciones 1 a 3): reglas de tono T-01 a T-04, de ubicación U-01 a U-04 y de pantalla R-01 a R-07. Añade:

- **Reglas de sesgo:** SGL-01 a SGL-05 de `../research/fases/lutea/03-sesgo-genero.md`.
- **R-08:** ningún icono, color ni ilustración que presente la fase como «mala», que asocie la fase con enfado, tristeza o peligro, o que la relacione con la sexualidad o la disponibilidad.

#### Coherencia con otras piezas

Esta pantalla se revisa siempre contra estas tres piezas:

- **La pantalla SPM/TDPM** (`spm-tdpm-v0.7.0.md`, JUA-19). Esta pantalla explica la fase entera. La pantalla SPM/TDPM desarrolla los cambios premenstruales y los términos clínicos. LUT-05 resume y enlaza a ella sin repetir sus cifras. El enlace es estático y no cambia según la fase ni ningún dato (U-02). DER-01 y DER-02 reproducen sin cambios sus mensajes de derivación.
- **Las tarjetas de la fase lútea** (`home-cards-luteal-v0.3.0.md`, JUA-19), que resumen esta pantalla.
- **La rueda** (JUA-27), que dibuja la fase lútea con 12 días.

<a id="a9-2"></a>

### 2. Texto de la pantalla

Los identificadores no se muestran en la interfaz.

#### LUT-00 · Título

**La fase lútea**

#### LUT-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

#### DER-02 · Ayuda urgente (ver sección 3)

#### LUT-02 · Qué es

La fase lútea va desde la ovulación hasta la siguiente menstruación. Después de liberar el óvulo, el folículo que lo contenía se transforma en el cuerpo lúteo, una estructura temporal que produce hormonas, sobre todo progesterona. La progesterona prepara el revestimiento del útero por si hubiera un embarazo.

Si no lo hay, el cuerpo lúteo deja de funcionar al cabo de unos días, bajan las hormonas y el revestimiento se desprende: empieza la menstruación y, con ella, un nuevo ciclo.

#### LUT-03 · Cuánto dura

Suele durar unos 12 días, aunque cambia de una mujer a otra. Varía menos que la fase folicular: cuando un ciclo es más largo o más corto, suele ser porque la fase folicular ha durado más o menos. Aun así, también cambia de un ciclo a otro.

La idea de que dura siempre 14 días es una simplificación que los estudios actuales no confirman.

#### LUT-04 · Lo que ves en Consona

En la rueda del ciclo, Consona dibuja la fase lútea con 12 días, contados hacia atrás desde la fecha prevista de la siguiente regla. Es una estimación: con las fechas de la regla no se puede saber cuándo hubo ovulación, así que tampoco cuándo empezó de verdad esta fase.

Además, en algunos ciclos no hay ovulación, y entonces tampoco hay fase lútea, aunque la rueda la siga dibujando. Un ciclo sin ovulación de vez en cuando es frecuente.

Los días en que la rueda pasa de una fase a otra los calcula Consona a partir de las fechas. Son una estimación, no el momento en que cambia el cuerpo.

#### LUT-05 · Antes de la regla

Hacia el final de esta fase, algunas mujeres notan cambios en el cuerpo o en el ánimo: por ejemplo, dolor, hinchazón o cansancio; irritabilidad, tristeza o tensión; o cambios en el sueño o el apetito. Otras no notan ninguno, y en una misma mujer puede cambiar de un ciclo a otro.

Cuando los cambios se repiten ciclo tras ciclo y afectan de forma importante al día a día, se habla de síndrome premenstrual o, en su forma más intensa y menos frecuente, de trastorno disfórico premenstrual. Son términos clínicos que solo puede valorar un profesional. Los explicamos en [«Antes de la regla»](../../education/spm-tdpm-v0.7.0.md).

#### LUT-06 · Lo que la fase lútea no dice

La evidencia científica no muestra que en esta fase cambie la capacidad de concentrarse, razonar o rendir.

En promedio, el ánimo varía poco a lo largo del ciclo, muchas mujeres no notan ningún cambio ligado a él, y en el día a día pesan mucho más la salud, el estrés y el apoyo.

La imagen de la mujer «premenstrual» irritable, irracional o fuera de control es un estereotipo. Se repite en bromas, anuncios y conversaciones, y por eso parece cierto. Pero cuando se ha estudiado el ánimo día a día sin que las participantes supieran que el estudio trataba del ciclo, ese patrón apenas aparece. Y hace daño: lleva a quitar valor a lo que una mujer dice o siente, y también a no tomarse en serio un malestar real.

#### LUT-07 · Acompañar en consonancia

Que en la rueda aparezca la fase lútea no te dice cómo está tu pareja. Si notas tensión o la notas distinta, pregúntale en lugar de atribuirlo al ciclo: lo que siente tiene sus razones, y tu pareja es quien mejor puede contarlas. Tú puedes ayudar escuchando, preguntando y, si ella quiere, pensando juntos qué le vendría bien. Puedes preguntarle si en ese momento prefiere compañía, espacio o ayuda con algo concreto, sin forzar la conversación: también puede preferir no hablar.

Algunas preguntas que dejan espacio:
- «¿Cómo estás hoy?»
- «¿Te apetece compañía, prefieres estar a tu aire o te echo una mano con algo?»

Y hay una parte que es tuya: cómo respondes, cómo os repartís las tareas y el descanso, y no hacer comentarios ni bromas sobre «estar premenstrual».

#### DER-01 · Cuándo puede ayudar un profesional (ver sección 3)

#### LUT-08 · Fuentes

Esta información se basa en revisiones sobre la fisiología del ciclo y del endometrio (2018 a 2022), estudios sobre la duración de las fases con miles de ciclos (2018 a 2024), una opinión de comité de la Sociedad Americana de Medicina Reproductiva (2026), guías del NICE (2024) y del Colegio Americano de Obstetras y Ginecólogos (2023 y 2025), estudios de registro diario del ánimo (2013 a 2025), metaanálisis sobre el ciclo y las capacidades cognitivas (2025), un estudio español con deportistas (2021) y un estudio cualitativo realizado en Barcelona (2022). Las referencias completas están disponibles en «Fuentes».

<a id="a9-3"></a>

### 3. Mensajes de derivación

Estáticos y siempre visibles en la posición indicada. No se activan por fechas, fase ni registros. Reproducen sin cambios los de `spm-tdpm-v0.7.0.md`; si cambian allí, cambian aquí.

#### DER-01 · Cuándo puede ayudar un profesional

**Posición:** después de LUT-07.

> **Cuándo puede ayudar un profesional**
> Si los cambios preocupan a tu pareja, se repiten, son intensos o le dificultan el día a día —trabajo, estudios, relaciones o descanso—, un profesional sanitario puede valorarlos en contexto. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

Fuente: DER-01 de `spm-tdpm-v0.7.0.md` (`jua-10/12` EC-07, EC-08; `audit-07` §4.4).

#### DER-02 · Ayuda urgente

**Posición:** después de LUT-01, en la primera vista (R-04).

> **Si hace falta ayuda ahora**
> Si tu pareja te habla de pensamientos de hacerse daño o de suicidio, o alguien no está a salvo, busca ayuda urgente. No esperes a otro momento del ciclo.
> **En España:**
> - **112** · emergencias.
> - **024** · atención a la conducta suicida; gratuita, 24 horas; también atiende a familiares y personas allegadas.
> - **016** · violencia contra las mujeres; gratuito, confidencial, 24 horas; también por WhatsApp en el 600 000 016.
>
> Estos números también son para ti si eres tú quien lo está pasando mal.

Fuente: DER-02 de `spm-tdpm-v0.7.0.md`, verificado en fuentes oficiales el 07-10-2026 (D-03 y D-04 de JUA-19).

<a id="a9-4"></a>

### 4. Trazabilidad

| Bloque | Afirmaciones | Base |
|---|---|---|
| LUT-01 | Límites de la app | `audit-07` §4 |
| LUT-02 | Definición, cuerpo lúteo, progesterona y final de la fase | LU-A01 a LU-A03 (LS-01, LS-02, LS-03) |
| LUT-03 | Duración típica, menor variación que la folicular, variación entre ciclos, mito de los 14 días | LU-A04, LU-A05 (LS-04 a LS-09) |
| LUT-04 | Fase estimada por calendario; ciclos sin ovulación; límites entre fases calculados por el motor | LU-A06, LU-A07 (JUA-27; LS-10); motor de estimación CON-032 (ADR-001 C9) |
| LUT-05 | Cambios premenstruales variables; SPM y TDPM como términos clínicos | LU-A09 (LS-11); SPM-03 |
| LUT-06 | Sin cambios cognitivos; ánimo con poca variación media; estereotipo y su daño | LU-A10 a LU-A12 (LS-12 a LS-18); SGL-01, SGL-04 |
| LUT-07 | Papel de la pareja; no atribuir al ciclo; preguntar si prefiere compañía, espacio o ayuda | LU-A13 (LS-19); LU-A16 (LS-22): el apoyo de la pareja importa, sin recomendar terapia; SGL-02; T-02; igual que SPM-07 |
| DER-01, DER-02 | Derivación y ayuda urgente | LU-A14; `spm-tdpm-v0.7.0.md` |

<a id="a9-5"></a>

### 5. Exclusiones comprobadas

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

<a id="a9-6"></a>

### 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | DER-02 (ayuda urgente) se repite aquí, además de en la pantalla SPM/TDPM. | **Resuelta (06-11-2026):** se mantiene DER-02. |
| D-02 | LUT-05 da ejemplos de cambios premenstruales. Pueden leerse como una lista para vigilar a la pareja. | **Resuelta (06-11-2026):** se mantienen los ejemplos de SPM-03. Se pide valoración en la revisión clínica. |
| D-03 | LUT-04 dice que en algunos ciclos no hay fase lútea aunque la rueda la dibuje. Puede restar confianza en la rueda. | **Resuelta (06-11-2026):** se mantiene, como dato probable y no exacto. |
| D-04 | LUT-05 nombra la pantalla SPM/TDPM sin enlace. La regla U-01 de esa pantalla limita su acceso a «Cómo funciona». | **Resuelta (06-11-2026):** LUT-05 enlaza la pantalla SPM/TDPM con un enlace estático, igual para todas las personas (U-02). La regla U-01 de la pantalla SPM/TDPM se amplía en JUA-19 (PR #9). |
| D-05 | LUT-06 nombra el estereotipo de la mujer «premenstrual». | **Resuelta (06-11-2026):** se mantiene y se explica por qué parece cierto: se repite en bromas, anuncios y conversaciones, y en el estudio diario con el objetivo oculto el patrón apenas aparece (LU-A10, LU-A12; LS-13). |

<a id="a9-7"></a>

### 7. Historial

#### [0.3.0] — 11-11-2026

- LUT-07: preguntar si prefiere compañía, espacio o ayuda con algo concreto, sin forzar la conversación; la pregunta «¿Hay algo que te venga bien?» pasa a «¿Te apetece compañía, prefieres estar a tu aire o te echo una mano con algo?». Misma redacción que SPM-07 de la pantalla «Antes de la regla» v0.7.0 (D-10).
- DER-01 y DER-02 no cambian.

#### [0.2.0] — 11-11-2026

- LUT-04 añade quién calcula los cambios de fase (CON-032) y nombra «la rueda del ciclo».
- «Mujeres» en lugar de «personas» en las afirmaciones generales (D-07 de la pantalla SPM/TDPM).
- LUT-05 sin las siglas SPM y TDPM, y enlace a la pantalla con su nuevo título, «Antes de la regla».
- LUT-06: «La evidencia científica» en lugar de «La investigación».
- LUT-07: la pareja puede ayudar escuchando, preguntando y pensando juntos qué le vendría bien (igual que SPM-05).
- DER-01 y DER-02 no cambian.

#### [0.1.0] — Enmienda del 10-11-2026

- Las referencias pasan a la pantalla SPM/TDPM v0.5.0 y a las tarjetas de la fase lútea v0.2.0. DER-01 y DER-02 no cambiaron en la v0.5.0. **El texto que se muestra no cambia**, por eso la pantalla conserva la versión.
- El estereotipo de LUT-06 se explica ahora también en SPM-05 y en la tarjeta «Qué no asumir» (D-05; D-06 de la pantalla SPM/TDPM).

#### [0.1.0] — 06-11-2026

- Primera versión, a partir del cierre de la investigación de la fase lútea de JUA-36.
- Bloques LUT-00 a LUT-08, DER-01 y DER-02.
- Cinco decisiones abiertas.
- 06-11-2026: D-01 a D-05 resueltas; LUT-05 enlaza la pantalla SPM/TDPM y LUT-06 explica por qué el estereotipo parece cierto.


---

<a id="anexo"></a>

## Anexo · Índice de tarjetas: qué conjunto se muestra cada día y reglas comunes H-01 a H-08

*Origen: `docs/education/home-cards-index.md` · reglas comunes de las tarjetas (A2 a A5); no es un artefacto revisado por separado*

**Título del documento de origen:** Consona — Tarjetas de orientación de la home: índice

**Issue:** JUA-23.
**Estado:** Borrador para revisión de producto. Las tres fases nuevas **se incluyen en el alcance de la revisión clínica de JUA-16** (decisión del 05-11-2026), pendientes de envío.
**Público y tono:** la pareja que acompaña, en segunda persona, con alfabetización menstrual y sin paternalismo. Se habla de «tu pareja».
**No habilita:** registros, inferencias, datos reales ni cambios del motor de estimación. `src/App.jsx` solo se actualiza con versiones aprobadas.

> La home muestra tres tarjetas de orientación para la fase estimada del día: «Qué pasa en su cuerpo», «Cómo acompañar» y «Qué no asumir». Este índice reúne las reglas comunes y enlaza el documento versionado de cada fase. Hasta el 11-11-2026 eran cuatro: «Cómo acompañar» fusiona «Qué puedes preguntarle» y «Qué te toca a ti».

<a id="anexo-1"></a>

### 1. Documentos por fase

| Fase | Documento | Estado |
|---|---|---|
| Menstruación | [`home-cards-menstruation-v0.3.0.md`](../../education/home-cards-menstruation-v0.3.0.md) | Borrador |
| Fase folicular | [`home-cards-follicular-v0.3.0.md`](../../education/home-cards-follicular-v0.3.0.md) | Borrador |
| Ventana ovulatoria estimada | [`home-cards-ovulatory-v0.3.0.md`](../../education/home-cards-ovulatory-v0.3.0.md) | Borrador |
| Fase lútea | [`home-cards-luteal-v0.3.0.md`](../../education/home-cards-luteal-v0.3.0.md) | Borrador, en el paquete de revisión clínica de JUA-16 |

El documento de la fase lútea **no se modificó** en JUA-23. Desde su v0.2.0 (JUA-19, 10-11-2026) aplica también las reglas comunes H-01 a H-08.

Para revisar las cuatro fases a la vez: [`home-cards-review-pack-v0.4.0.md`](../../education/home-cards-review-pack-v0.4.0.md). Es una copia generada; los cambios se hacen en el documento de cada fase.

<a id="anexo-2"></a>

### 2. Qué conjunto se muestra cada día

Un único conjunto de tarjetas por fase, sin subfases (especificación del panel, §3.2, decisión del 19-10-2026). Las duraciones vienen de JUA-27 (`docs/research/JUA-27-duraciones-referencia.md`, en `main` desde el PR #12).

| Fase en la rueda | Cuándo | Fuente |
|---|---|---|
| Menstruación | Desde un inicio de sangrado confirmado, durante la duración que declare la persona afectada o, si no la declara, los días 1 a 5. | ME-01, DA-06; JUA-27 §6 |
| Fase folicular | Después de la menstruación, hasta la ventana ovulatoria estimada. Sus tarjetas no dan por hecho que el sangrado haya terminado ni que continúe. | ME-05 |
| Ventana ovulatoria estimada | El segmento de la rueda, de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (L). | RU-05; JUA-27 §3.3 |
| Fase lútea | El resto, hasta el día antes de la siguiente menstruación. | RU-05b; JUA-27 §2 |
| Días previos a la menstruación | De −7 a −1. **No cambian las tarjetas**: siguen las de la fase lútea. | IT-01, IT-09; JUA-27 §5 |

Los límites exactos entre segmentos los fija la especificación del panel y el motor (CON-032), no este documento. Las tarjetas siguen la fase rotulada en la rueda ese día. Los estados excepcionales (anticoncepción hormonal, embarazo, lactancia y otros) se rigen por la sección 5 de la especificación y quedan fuera de JUA-23.

<a id="anexo-3"></a>

### 3. Reglas comunes

Generalizan las reglas H-01 a H-05 de la fase lútea a todas las fases. No cambian el texto del documento de la fase lútea.

| ID | Regla |
|---|---|
| H-01 | Las tres tarjetas son las mismas durante toda la fase. No cambian según el día del ciclo, la cercanía de la menstruación ni ningún dato local. Única excepción: la duración de la menstruación en su «Qué pasa en su cuerpo» (M-02). |
| H-02 | Las tarjetas no nombran diagnósticos (SPM, TDPM, dismenorrea, endometriosis, anemia u otros) y no presentan cambios físicos o emocionales como algo que tu pareja vaya a tener o esté teniendo (C-01). |
| H-03 | Cualquier mención de variabilidad usa «algunas personas», «puede» e información general (C-02). |
| H-04 | Las tarjetas no enlazan directamente a la pantalla SPM/TDPM ni cambian de color o de tono según la fase (C-03, U-03). |
| H-05 | Ninguna tarjeta menciona ni sugiere deseo sexual, actividad sexual, consentimiento, límites ni disponibilidad. |
| H-06 | Sin fertilidad, «días seguros», probabilidad de embarazo, ovulación confirmada ni cifras en días. Excepciones: la duración de la menstruación, declarada por la persona afectada o de 5 días por defecto (M-02); el intervalo de la fase folicular, «entre 15 y 20 días» contando los días de la regla (F-02); y la duración aproximada de la fase lútea, «unos 12 días» (L-02). Siempre con «suele» y con que la duración cambia. |
| H-07 | «Cómo acompañar» y «Qué no asumir» hablan de lo que haces tú, no de lo que debe hacer tu pareja. Sin consejos para gestionar, calmar o evitar a tu pareja, ni recomendaciones de salud (medicamentos, calor, ejercicio). |
| H-08 | Ninguna tarjeta atribuye a la fase energía, ánimo, rendimiento, capacidad ni conducta (`01-cycle-phases`, `08-health-energy`, `12-health-emotional-cognitive` EC-01, EC-02). |

<a id="anexo-4"></a>

### 4. Criterios de aceptación de JUA-23

1. Un documento versionado por fase nueva, con el texto exacto y el antetítulo de cada tarjeta.
2. Este índice, con las reglas comunes y el criterio de qué conjunto se muestra.
3. Cada afirmación corporal en la tabla de trazabilidad, con fuente auditada en JUA-10 o JUA-27. Lo que no tenga auditoría propia se marca y pasa a decisión abierta.
4. Exclusiones comprobadas en cada documento.
5. Tono de Consona: segunda persona, la pareja que acompaña, sin paternalismo.
6. Cada fase nueva incluida **expresamente** en la revisión clínica de JUA-16, con lo que debe valorar la persona revisora.
7. `src/App.jsx` sin cambios.
8. El documento de la fase lútea sin cambios.

<a id="anexo-5"></a>

### 5. Historial

#### [0.1.0] — 05-11-2026

- Índice inicial: documentos por fase, criterio de selección y reglas comunes H-01 a H-08.
- 06-11-2026: tarjetas de las tres fases nuevas en versión 0.2.0, con trazabilidad a la investigación de JUA-36.
- Decisiones del 05-11-2026: excepción de la duración de la menstruación en H-01 y H-06; las tres fases nuevas entran en JUA-16.
- 11-11-2026: tres tarjetas por fase; «Cómo acompañar» fusiona «Qué puedes preguntarle» y «Qué te toca a ti». Sin acrónimos en los documentos.
- 11-11-2026: H-06 admite el intervalo de la fase folicular y la duración aproximada de la fase lútea. Tarjetas de la menstruación, folicular y lútea en v0.3.0; paquete regenerado como v0.4.0.
- 10-11-2026: la fase lútea pasa a `home-cards-luteal-v0.3.0.md`, que adopta las reglas comunes; paquete de revisión regenerado como v0.3.0.
