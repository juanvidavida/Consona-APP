# Consona — Pantalla educativa «Antes de la regla» (síndrome premenstrual y trastorno disfórico premenstrual) v0.7.0

**Estado:** Borrador para revisión de producto. **Incluida en el paquete de revisión clínica de JUA-16**, pendiente de envío.
**Incidencia:** JUA-19 (CON-027). Su versión aprobada será el artefacto que revise JUA-16 (ADR-002 P7).
**Base de investigación:** auditorías de JUA-10 y, desde la v0.5.0, la investigación de la fase lútea de JUA-36 ([`docs/research/fases/lutea/`](../research/fases/lutea/)).
**Idioma:** español (España). Cualquier traducción posterior (CON-025) debe conservar los límites clínicos y de privacidad de este documento.
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, aprendizaje, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio de redacción, orden o mensaje de derivación exige una nueva versión y, una vez iniciada JUA-16, una nueva revisión clínica de lo modificado.

## 1. Público y tono

**Quién lee:** la persona que acompaña, es decir, la pareja de la persona que menstrúa. El texto le habla en segunda persona («tú», «tu pareja»). Los mensajes de seguridad también deben servir si quien lee es la persona que menstrúa.

**Para qué:** alfabetización menstrual al servicio de consonar, es decir, actuar en armonía y en consonancia con la pareja. La pantalla ayuda a entender la variabilidad premenstrual para acompañar mejor, no para interpretar, anticipar ni explicar a la otra persona.

| ID | Regla de tono |
|---|---|
| T-01 | Educativo, no paternalista: explica y da contexto sin sermonear, sin «debes» y sin suponer ignorancia o mala intención en quien lee. |
| T-02 | La pareja es la autoridad sobre su propia experiencia. El texto nunca sitúa a quien acompaña como intérprete de lo que ella siente. |
| T-03 | Preguntar en lugar de suponer: las sugerencias son preguntas abiertas o gestos propios, no instrucciones sobre la otra persona. |
| T-04 | Las afirmaciones generales hablan de «mujeres»; lo individual habla de «tu pareja» (decisión del 11-11-2026, D-07). Ninguna media de grupo se presenta como algo que le pasa a ella. |

## 2. Ubicación

La pantalla es una subpantalla de **«Cómo funciona»**. No es la pantalla de inicio ni forma parte del panel de hoy.

| ID | Regla de acceso |
|---|---|
| U-01 | Se abre desde dos enlaces estáticos. (1) Dentro de «Cómo funciona», en el punto donde se explica que los patrones no diagnostican SPM ni TDPM (`CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §4.2); su implementación corresponde a JUA-7. (2) Desde el bloque LUT-05 de la pantalla «La fase lútea» de «Comprender» (`lutea-v0.3.0.md`, JUA-36). Ninguno de los dos depende de la fase, la fecha ni ningún dato (U-02). |
| U-02 | El enlace es siempre visible y tiene el mismo texto para todas las personas. No aparece, cambia ni se destaca según la fase estimada, la fecha o cualquier dato local. |
| U-03 | La home no enlaza directamente a esta pantalla ni muestra avisos que remitan a ella. |
| U-04 | Desde la pantalla se puede volver a «Cómo funciona» con un control visible y accesible para lector de pantalla. |

### Coherencia con la pantalla de inicio

La home muestra el día del ciclo, la fase estimada y tres tarjetas de orientación, entre ellas «Qué pasa en su cuerpo», con información general asociada a la fase (`CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` §2–3). Esta pantalla explica cómo leer esa información (SPM-04), así que ambas deben mantenerse coherentes.

| ID | Regla de coherencia |
|---|---|
| C-01 | En los días premenstruales estimados, las tarjetas de la home no nombran SPM ni TDPM y no presentan cambios emocionales o físicos como algo que la pareja vaya a tener o esté teniendo. |
| C-02 | Si una tarjeta de la home menciona variabilidad premenstrual, usa el mismo marco que SPM-02 y SPM-04: «algunas personas», «puede», información general, no predicción. |
| C-03 | La home no cambia su texto, color ni tarjetas para dirigir a esta pantalla en función de la fase (U-02, U-03). Los únicos caminos son los dos enlaces estáticos de U-01. |
| C-04 | Cualquier cambio en las tarjetas de la home asociadas a la fase lútea o a los días premenstruales se revisa contra esta pantalla antes de publicarse. Ver D-05. |

## 3. Reglas de la pantalla

| ID | Regla |
|---|---|
| R-01 | El contenido es estático e idéntico para todas las personas. No depende de fechas, fase estimada, registros, consentimiento, pareja ni ningún dato local o remoto. |
| R-02 | La pantalla no pide, muestra ni conserva datos. No hay formularios, campos de texto, casillas, valoraciones ni botones de «le pasa a mi pareja». |
| R-03 | Abrir la pantalla, desplazarse o pulsar un número de ayuda no genera eventos, analítica, telemetría, registros de error ni comunicación con ningún servidor. |
| R-04 | El mensaje de ayuda urgente (DER-02) aparece en la primera vista de la pantalla, sin necesidad de desplazarse ni desplegar nada, con contraste suficiente y sin animaciones, sonidos ni ventanas emergentes. |
| R-05 | Los números de teléfono se muestran como texto legible. Un enlace `tel:` junto al número es opcional y no sustituye al texto. |
| R-06 | La pantalla no muestra estados personales («sin patrón», «patrón posible» u otros). Ver la decisión abierta D-01. |
| R-07 | No se añaden iconos, colores ni ilustraciones que asocien una fase o un síntoma con riesgo, gravedad, sexualidad o disponibilidad. |

## 4. Texto de la pantalla

Cada bloque lleva un identificador estable para la revisión y la trazabilidad (sección 6). Los identificadores no se muestran en la interfaz.

### SPM-00 · Título

**Antes de la regla**

Síndrome premenstrual y trastorno disfórico premenstrual

### SPM-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

### SPM-02 · Introducción

En los días previos a la menstruación, algunas mujeres notan cambios en el cuerpo o en el ánimo. Otras no notan ninguno, o los viven de otra manera. Y en una misma mujer pueden variar de un ciclo a otro.

Conocer esta variabilidad ayuda a acompañar sin dar nada por supuesto.

### DER-02 · Ayuda urgente (ver sección 5)

### SPM-03 · Tres ideas distintas

**Variabilidad premenstrual**
Cambios que algunas mujeres notan antes de la menstruación: por ejemplo, dolor, hinchazón o cansancio; irritabilidad, tristeza o tensión; o cambios en el sueño o el apetito. Pueden ser leves, ir y venir, o no aparecer. Por sí solos no indican una condición clínica.

**SPM (síndrome premenstrual)**
Es un término clínico. Se usa cuando los cambios se repiten ciclo tras ciclo antes de la menstruación, mejoran cuando esta empieza o poco después, y afectan de forma importante a la vida diaria. Solo un profesional sanitario puede valorarlo.

**TDPM (trastorno disfórico premenstrual)**
Es un término clínico para una forma menos frecuente y más intensa, en la que predominan los cambios emocionales y que afecta de forma importante al trabajo, los estudios o las relaciones. Para valorarlo, los profesionales suelen pedir un registro diario durante al menos dos ciclos.

En inglés se usan las siglas PMS y PMDD. Consona no asigna estos términos a nadie, no muestra criterios clínicos y no convierte ningún dato en una clasificación.

### SPM-04 · Lo que el día del ciclo puede y no puede decirte

En la pantalla de inicio ves el día del ciclo y la fase, estimados a partir de fechas confirmadas, junto con información general sobre lo que puede ocurrir en el cuerpo durante esa fase.

Esa información sirve para entender mejor el ciclo y tener contexto para conversar. Describe lo que se sabe en general, no lo que le está pasando a tu pareja: no te dice qué siente, qué le pasa ni qué necesita, y no confirma síntomas, su causa ni un diagnóstico.

Que se acerque la menstruación tampoco significa síndrome premenstrual. En promedio, el ánimo varía poco a lo largo del ciclo, y muchas mujeres no notan ningún cambio ligado a él. La evidencia científica no permite predecir el ánimo, la concentración o el comportamiento de una mujer a partir de la fase del ciclo menstrual en la que está.

### SPM-05 · Antes de atribuirlo al ciclo

La imagen de la mujer «premenstrual» irritable, irracional o fuera de control es un estereotipo. Se repite en bromas, anuncios y conversaciones, también entre hombres, y por eso parece cierto. Pero cuando se ha estudiado el ánimo día a día sin que las participantes supieran que el estudio trataba del ciclo, ese patrón apenas aparece. Y hace daño: lleva a quitar valor a lo que una mujer dice o siente, y también a no tomarse en serio un malestar real.

Los cambios de ánimo, sueño, energía o concentración pueden tener muchas causas, también ajenas al ciclo: el trabajo, el cansancio, la salud, la propia relación. En el día a día, la salud, el estrés y el apoyo pesan mucho más que la fase.

Explicar un enfado o una tristeza por el ciclo, con frases como «son las hormonas», puede restar valor a lo que tu pareja siente o te está diciendo. Lo que le pasa tiene sus razones, y ella es quien mejor puede contarlas. Tú puedes ayudar escuchando, preguntando y, si ella quiere, pensando juntos qué le vendría bien.

### SPM-06 · Sobre las cifras

Las cifras publicadas sobre el síndrome premenstrual y el trastorno disfórico premenstrual cambian mucho según el grupo estudiado y el método. Un metaanálisis de 2024 encontró que, en población general y con el diagnóstico confirmado por un registro diario de dos ciclos, el trastorno disfórico premenstrual aparecía en torno al 1,6 % de las mujeres. Los estudios con diagnóstico provisional dan cifras bastante más altas.

Una media de grupo no dice nada sobre tu pareja.

### SPM-07 · Acompañar en consonancia

Acompañar no es interpretar. Es preguntar, escuchar la respuesta y respetarla. Puedes preguntarle si en ese momento prefiere compañía, espacio o ayuda con algo concreto, sin forzar la conversación: también puede preferir no hablar.

Algunas preguntas que dejan espacio:
- «¿Cómo estás hoy?»
- «¿Te apetece compañía, prefieres estar a tu aire o te echo una mano con algo?»
- «¿Prefieres que lo hablemos en otro momento?»

Lo que necesite puede cambiar de un ciclo a otro, o no tener nada que ver con el ciclo. Y también hay una parte que es tuya: cómo respondes, cómo os repartís las tareas y el descanso, cómo cuidas el ambiente que compartís.

### DER-01 · Cuándo hablar con un profesional (ver sección 5)

### SPM-08 · Fuentes

Esta información se basa en un estudio realizado en Barcelona sobre el estigma de la menstruación (2022), guías del NICE (Reino Unido, 2024), del Colegio Americano de Obstetras y Ginecólogos (2023 y 2025) y del NHS (2024), un metaanálisis sobre la frecuencia del trastorno disfórico premenstrual (2024), estudios de registro diario del ánimo (2012 a 2021), un metaanálisis sobre el ciclo y las capacidades cognitivas (2025) un estudio sobre lo que piensan los hombres de la menstruación (2017) y un ensayo clínico que incluyó a la pareja en la atención a los síntomas premenstruales intensos (2017). Las referencias completas están disponibles en «Fuentes».

## 5. Mensajes de derivación

Los mensajes son estáticos y se muestran siempre, a todas las personas, en la posición indicada. No se activan por fechas, fase, registros ni palabras introducidas, porque la pantalla no recoge ninguna.

### DER-01 · Cuándo hablar con un profesional

**Posición:** después de SPM-07.

> **Cuándo puede ayudar un profesional**
> Si los cambios preocupan a tu pareja, se repiten, son intensos o le dificultan el día a día —trabajo, estudios, relaciones o descanso—, un profesional sanitario puede valorarlos en contexto. El centro de salud es un buen punto de partida.
> La decisión de consultar es suya. Lo que puedes hacer es ofrecerle tu apoyo o tu compañía, si los quiere.

### DER-02 · Ayuda urgente

**Posición:** inmediatamente después de SPM-02, visible en la primera vista (R-04).

> **Si hace falta ayuda ahora**
> Si tu pareja te habla de pensamientos de hacerse daño o de suicidio, o alguien no está a salvo, busca ayuda urgente. No esperes a otro momento del ciclo.
> **En España:**
> - **112** · emergencias.
> - **024** · atención a la conducta suicida; gratuita, 24 horas; también atiende a familiares y personas allegadas.
> - **016** · violencia contra las mujeres; gratuito, confidencial, 24 horas; también por WhatsApp en el 600 000 016.
>
> Estos números también son para ti si eres tú quien lo está pasando mal.

## 6. Trazabilidad

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

## 7. Exclusiones comprobadas

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

## 8. Decisiones antes de enviar a JUA-16

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | ADR-002 §2 dice que la pantalla «comenzará en el estado “No hay un patrón personal identificado”». JUA-19 exige que la pantalla sea independiente de registros e inferencias. | **Resuelta (07-10-2026):** se omite el estado. Se incorporará solo cuando P3–P5 permitan una vista de asociaciones, como versión nueva con revisión clínica propia. |
| D-02 | La cifra del metaanálisis de 2024 (SPM-06) procede de ADR-002 y no pasó por las auditorías de JUA-10. `audit-07` pide retirar del microcopy cifras sin fuente contemporánea y contexto. | **Resuelta (10-11-2026):** el metaanálisis (Reilly et al. 2024) se audita en JUA-36 como LS-21, a partir del resumen de PubMed. La cifra del 3,2 % mezclaba muestras de comunidad, universidad e instituto con una heterogeneidad muy alta (I² = 99 %). SPM-06 pasa a la cifra de población general con diagnóstico confirmado (1,6 %, I² = 26 %), que es la pertinente para el público de Consona. Se mantiene la pregunta P-01 a la persona revisora. Alternativa: eliminar las cifras y dejar solo la primera y la última frase. |
| D-03 | Los recursos 112 y 024, y que el 024 atiende a familiares y personas allegadas, no figuraban en la bibliografía de JUA-10. | **Verificado el 07-10-2026.** 024: Ministerio de Sanidad, para personas con conducta o ideación suicida y para familiares o allegados; gratuito, confidencial, 24 horas, 365 días; chat y lengua de signos; remite al 112 ante emergencia vital inminente [10] [11]. La Resolución de 4 de junio de 2026 mantiene el número y la gratuidad y añade que la llamada no aparece en la factura [12]. 112: número de emergencias gratuito en España y en la UE [13]. El texto de DER-02 es exacto. Verificado de nuevo el 10-11-2026, sin cambios. **Pendiente:** recursos para otros países e idiomas (CON-025). |
| D-04 | «Peligro» puede incluir violencia de pareja, riesgo relevante para Consona (ADR-001, P6). | **Resuelta (07-10-2026):** DER-02 incluye el 016 (Ministerio de Igualdad): todas las formas de violencia contra las mujeres; gratuito, confidencial, 24 horas; también por WhatsApp (600 000 016), chat y correo; deriva al 112 en emergencias [14] [15]. Verificado de nuevo el 10-11-2026, sin cambios. El análisis específico de control coercitivo sigue en P6 (JUA-13). |
| D-05 | JUA-16 revisa esta pantalla, pero el texto de la tarjeta «Qué pasa en su cuerpo» en la fase lútea y en los días premenstruales es el primer contacto con este tema y no tiene revisión clínica asignada. | **Resuelta.** Las cuatro tarjetas de la fase lútea se fijan en `home-cards-luteal-v0.1.0.md` y se incluyen expresamente en el paquete y en el alcance de JUA-16. Desde el 10-11-2026, en [`home-cards-luteal-v0.3.0.md`](./home-cards-luteal-v0.3.0.md). |
| D-06 | El estereotipo de la mujer «premenstrual» se explicaba en la pantalla de la fase lútea (LUT-06), pero no en esta. | **Resuelta (10-11-2026):** se nombra y se explica en varias piezas para reforzar su importancia: SPM-05 de esta pantalla, LUT-06 y LUT-07 de la fase lútea y «Qué no asumir» de las tarjetas de la fase lútea. Siempre para desmentirlo (SGL-01). El 11-11-2026 se quita de SPM-07 (D-08). |
| D-07 | Las afirmaciones generales hablaban de «personas» (T-04). | **Resuelta (11-11-2026):** pasan a «mujeres» en todos los artefactos, porque las poblaciones de los estudios son mujeres y el público de Consona es la pareja de una mujer. «Todas las personas», en el sentido de quien usa la app, se mantiene. |
| D-08 | Comentarios de producto del 11-11-2026 sobre el compendio de JUA-16. | **Resueltas:** título «Antes de la regla», con los términos completos debajo; siglas solo en SPM-03, donde se presentan; «evidencia científica» en lugar de «investigación»; SPM-05 añade que la pareja puede ayudar; SPM-07 sin la frase sobre bromas; SPM-08 empieza por el estudio de Barcelona. |
| D-09 | SPM-08 remite a «Fuentes», pero el mapa de pantallas no tenía esa pantalla. | **Resuelta (11-11-2026):** se añade la subpantalla «Fuentes» de «Comprender» al mapa de pantallas y a JUA-31. |
| D-10 | Una consulta de producto del 11-11-2026 a un servicio de asesoramiento médico propone preguntar si prefiere compañía, espacio o ayuda, y evitar «son las hormonas». Cita un ensayo sobre la pareja (Ussher y Perz 2017). | **Resuelta (11-11-2026):** SPM-05 añade «son las hormonas» como ejemplo de frase que resta valor; SPM-07 integra «compañía, espacio o ayuda, sin forzar la conversación»; el ensayo se audita en JUA-36 (LS-22) y solo respalda que el apoyo de la pareja importa. No se adoptan el registro de síntomas por la pareja, la planificación según la fase ni las recomendaciones de terapia de esa respuesta. |

## 9. Historial

### [0.7.0] — Consulta de producto (11-11-2026)

- SPM-05: «son las hormonas» como ejemplo de frase que resta valor a lo que siente tu pareja.
- SPM-07: preguntar si prefiere compañía, espacio o ayuda con algo concreto, sin forzar la conversación; la pregunta «¿Hay algo que te venga bien?» pasa a «¿Te apetece compañía, prefieres estar a tu aire o te echo una mano con algo?».
- SPM-08 añade el ensayo de Ussher y Perz 2017 (LS-22) (D-10).
- DER-01 y DER-02 no cambian.

### [0.6.0] — Comentarios de producto (11-11-2026)

- Título «Antes de la regla», con «Síndrome premenstrual y trastorno disfórico premenstrual» debajo. Las siglas solo aparecen en SPM-03 (D-08).
- «Mujeres» en lugar de «personas» en las afirmaciones generales; T-04 cambia (D-07).
- SPM-04: «evidencia científica» y «la fase del ciclo menstrual en la que está».
- SPM-05: la pareja puede ayudar escuchando, preguntando y pensando juntos qué le vendría bien.
- SPM-06 con los términos completos.
- SPM-07 sin la frase sobre bromas.
- SPM-08 empieza por el estudio de Barcelona; la pantalla «Fuentes» pasa al mapa de pantallas (D-09).
- Referencias a la tarjeta «Cómo acompañar», que fusiona «Qué puedes preguntarle» y «Qué te toca a ti».
- DER-01 y DER-02 no cambian.

### [0.5.0] — Bibliografía de JUA-36 (10-11-2026)

- SPM-06 pasa a la prevalencia de TDPM en población general con diagnóstico confirmado (1,6 %), tras auditar el metaanálisis de 2024 (D-02).
- SPM-05 nombra y explica el estereotipo de la mujer «premenstrual» y añade el peso de la salud, el estrés y el apoyo (D-06).
- SPM-04 añade que el ánimo varía poco en promedio y que muchas personas no notan cambios ligados al ciclo.
- SPM-07 añade no hacer comentarios ni bromas sobre «estar premenstrual».
- SPM-08 nombra las nuevas fuentes.
- Trazabilidad a la investigación de la fase lútea de JUA-36 (LU-A10 a LU-A15) y de la menstruación (ME-A17).
- 112, 024 y 016 verificados de nuevo el 10-11-2026.
- DER-01 y DER-02 no cambian.

### [0.4.0] — Enmienda del 06-11-2026

- U-01 admite un segundo acceso estático desde la pantalla «La fase lútea» de «Comprender» (decisión D-04 de `lutea-v0.3.0.md`, JUA-36). C-03 se ajusta en consecuencia.
- **El texto que se muestra no cambia**, por eso la pantalla conserva la versión.

### [0.4.0] — Recurso de violencia y cierre de decisiones

- DER-02 añade el 016 (violencia contra las mujeres) y presenta los tres números en lista (D-04).
- D-01 resuelta: se omite el estado de patrón personal.
- D-02 se traslada como pregunta expresa a la revisión clínica.

### [0.3.0] — Coherencia con la pantalla de inicio

- SPM-04 pasa a «Lo que el día del ciclo puede y no puede decirte»: explica cómo leer el día del ciclo, la fase y la información general que muestra la home, y que la cercanía de la menstruación no equivale a SPM.
- Se añaden las reglas de coherencia C-01 a C-04 con la home y la decisión abierta D-05.
- D-03 resuelta: 112 y 024 verificados en fuentes oficiales; el texto de DER-02 no cambia.
- D-05 resuelta: tarjetas de la fase lútea en documento propio, incluidas en JUA-16.

### [0.2.0] — Reorientación a quien acompaña

- El texto pasa a dirigirse a la pareja de la persona que menstrúa, con tono de alfabetización menstrual no paternalista y el objetivo de consonar (sección 1).
- Nuevo bloque SPM-05 sobre el sesgo de atribución al ciclo, que integra el anterior «Muchas causas posibles».
- SPM-07 pasa a «Acompañar en consonancia», con preguntas abiertas y responsabilidad propia.
- DER-03 se integra en DER-02, que ahora cubre a la pareja, a terceros y a quien lee.
- DER-01 deja explícito que la decisión de consultar es de la pareja.
- Las secciones se renumeran.

### [0.1.0] — Borrador inicial

- Primera redacción completa de la pantalla, nota fija y tres mensajes de derivación, dirigida a la persona que menstrúa.
- Trazabilidad a las fuentes auditadas en JUA-10 y a ADR-002.
- Cuatro decisiones abiertas para producto antes de la revisión clínica.
- Se fija la ubicación como subpantalla de «Cómo funciona».

## Referencias

[1]: https://cks.nice.org.uk/topics/premenstrual-syndrome/ "Premenstrual syndrome — NICE Clinical Knowledge Summaries (revisado 09-2024)"

[2]: https://cks.nice.org.uk/topics/premenstrual-syndrome/diagnosis/diagnosis-of-premenstrual-syndrome/ "Premenstrual syndrome: How should I diagnose premenstrual syndrome? — NICE CKS (revisado 09-2024)"

[3]: https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/12/management-of-premenstrual-disorders "Management of Premenstrual Disorders, Clinical Practice Guideline No. 7 — ACOG (12-2023)"

[4]: https://www.acog.org/womens-health/experts-and-stories/the-latest/what-i-wish-everyone-knew-about-premenstrual-dysphoric-disorder "What I Wish Everyone Knew About Premenstrual Dysphoric Disorder — ACOG"

[5]: https://www.acog.org/womens-health/faqs/premenstrual-syndrome "Premenstrual Syndrome (PMS), FAQ057 — ACOG (revisado 11-2025)"

[6]: https://doi.org/10.1016/j.jad.2024.01.066 "Reilly TJ, et al. The prevalence of premenstrual dysphoric disorder: systematic review and meta-analysis. J Affect Disord 2024;349:534–40 (PMID 38199397)"

[7]: https://www.nhs.uk/conditions/pre-menstrual-syndrome/ "PMS (premenstrual syndrome) — NHS (revisado 18-06-2024)"

[8]: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576 "Menstrual cycle effects on cognitive performance: A meta-analysis (2025)"

[9]: https://www.sciencedirect.com/science/article/pii/S1550857912001349 "Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012)"

[10]: https://www.sanidad.gob.es/linea024/home.htm "024. Línea de atención a la conducta suicida — Ministerio de Sanidad (consultado 07-10-2026)"

[11]: https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/paginas/2024/100524-linea-024.aspx "La Línea 024 para la atención a la conducta suicida ha recibido más de 260.000 llamadas en dos años — La Moncloa (10-05-2024)"

[12]: https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13201 "BOE-A-2026-13201, Resolución de 4 de junio de 2026 que modifica la atribución del número 024 (consultado 07-10-2026)"

[13]: https://digital-strategy.ec.europa.eu/en/policies/112 "112 — the EU's emergency phone number — Comisión Europea (consultado 07-10-2026)"

[14]: https://violenciagenero.igualdad.gob.es/informacion-3/recursos/telefono016/ "Teléfono 016, 016 online y WhatsApp — Ministerio de Igualdad (consultado 07-10-2026)"

[15]: https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/igualdad/paginas/2026/telefono-016-que-es.aspx "Teléfono 016: ¿qué es y cómo funciona? — La Moncloa (2026)"

[16]: https://doi.org/10.1159/000339370 "Romans SE, et al. Mood and the menstrual cycle. Psychother Psychosom 2013;82(1):53–60"

[17]: https://doi.org/10.1038/s41562-020-01046-9 "Pierson E, et al. Daily, weekly, seasonal and menstrual cycles in women's mood, behaviour and vital signs. Nat Hum Behav 2021;5:716–25"

[18]: https://doi.org/10.1177/2167702616635031 "Kiesner J, et al. Cyclical symptom change across the menstrual cycle. Clin Psychol Sci 2016;4(5):882–94"

[19]: https://doi.org/10.1007/978-981-15-0614-7_17 "Johnston-Robledo I, Chrisler JC. The menstrual mark: menstruation as social stigma. Palgrave Handbook of Critical Menstruation Studies, 2020"

[20]: https://doi.org/10.1007/s11199-016-0701-3 "Peranovic T, Bentley B. Men and menstruation: a qualitative exploration of beliefs, attitudes and experiences. Sex Roles 2017;77:113–24"

[21]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8857732/ "Holst AS, et al. Experiences of menstrual inequity and menstrual health among women and people who menstruate in the Barcelona area (Spain): a qualitative study. Reprod Health 2022;19(1):45"

[22]: https://pmc.ncbi.nlm.nih.gov/articles/PMC5395168/ "Ussher JM, Perz J. Evaluation of the relative efficacy of a couple cognitive-behaviour therapy (CBT) for Premenstrual Disorders (PMDs), in comparison to one-to-one CBT and a wait list control: a randomized controlled trial. PLoS One 2017;12(4):e0175068"
