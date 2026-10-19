# Consona — Especificación UX del panel principal «Hoy» v1.1.0

**Versión:** 1.1.0
**Fecha:** 19 de octubre de 2026
**Estado:** Propuesta de producto (JUA-25). Pasa a ser la decisión de experiencia vigente al integrarse en `main`. No habilita el seguimiento ni relaja las condiciones de ADR-001 y ADR-002.
**Sustituye a:** la v1.0 del 17 de septiembre de 2026, entregada en [`info/Consona_entrega_completa/archivos_compartidos/CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md`](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md). Esa versión se conserva sin cambios como parte del paquete de entrega.

> La numeración de las secciones 1 a 8 se mantiene igual que en la v1.0, porque otros documentos citan esas secciones. Lo nuevo de esta versión está en las secciones 3.1, 3.2 y 4.3 y en filas añadidas a las tablas. Los cambios se resumen en la sección 9.

## 1. Decisión

El panel principal, o home, se denominará **«Hoy»** y tendrá una interfaz limpia. En condiciones normales mostrará el nombre directo de la fase, el día de ciclo calculado, la ventana de fechas correspondiente y una **rueda del ciclo** que sitúa esa fase en la secuencia de fases. No repetirá en cada tarjeta las palabras «posible», «estimación» ni textos de descargo largos.

La claridad no equivale a ocultar la incertidumbre. La explicación de que Consona calcula una estimación local, no diagnostica, no es anticonceptiva y no conoce el estado actual de una persona debe darse **antes** de que alguien vea el panel: durante el onboarding y en la sección permanente **«Cómo funciona»**. El panel mantiene una ruta compacta y accesible hacia esa explicación, además de mostrar los datos necesarios para interpretar el resultado: ventana, fecha de actualización y estado de vigencia.

> **Regla de diseño.** La fase puede llamarse directamente «Fase lútea» en el panel. El producto no debe presentarla como un hecho clínico ni convertirla en una afirmación sobre sentimientos, necesidades, consentimiento sexual, deseo, límites o disponibilidad.

> **Excepción a la regla anterior.** La indicación de los días previos a la menstruación (3.2) lleva siempre su calificador de estimación. Es la única indicación del panel que depende de una fecha que todavía no ha ocurrido, y la transparencia progresiva exige que los límites reaparezcan en contexto cuando el cálculo es menos firme (sección 2).

## 2. Objetivos de la pantalla

El panel debe responder con rapidez a tres preguntas legítimas: dónde se sitúa el ciclo según los datos confirmados, qué información corporal general puede leerse sobre la fase y qué conversación respetuosa puede iniciar la persona usuaria. La home está orientada a lo que **puede hacer quien la consulta**, no a describir cómo está su pareja. No debe convertirse en una pantalla de vigilancia, diagnóstico ni pronóstico interpersonal.

El diseño usa **transparencia progresiva**. La información imprescindible para usar el producto se aprende al inicio y permanece disponible después; el panel diario conserva solo las señales que cambian o permiten detectar un resultado desactualizado. Los límites importantes reaparecen en contexto cuando el sistema no puede calcular con seguridad, cuando los datos han caducado, cuando una indicación depende de una fecha futura o cuando se intenta interpretar un patrón personal.

## 3. Estructura del panel «Hoy»

| Bloque | Contenido visible en estado normal | Reglas de texto y diseño |
|---|---|---|
| Encabezado | `Hoy` y fecha local. | No mostrar nombre, fotografía, cuenta ni identificador de la persona afectada. |
| Estado del ciclo | `Fase lútea` y `Ciclo · día 18`. | El nombre de fase es directo y breve. «Día 18» es el resultado del cálculo local desde un inicio de sangrado confirmado, no una afirmación sobre síntomas. |
| Indicación temporal *(nuevo)* | Solo cuando corresponde: `Días previos a la menstruación · estimación`. | Línea secundaria bajo el estado del ciclo. Reglas completas en 3.2. |
| Rueda del ciclo *(nuevo)* | Rueda con la secuencia de fases, la fase estimada destacada y, en el centro, la fase y el día de ciclo. | Visualización estática de la secuencia, no un historial. Reglas completas en 3.1. |
| Ventana y actualización | Una ventana compacta, por ejemplo `15–24 sept.`, y `Actualizado hoy`. | La ventana comunica variación sin repetir una advertencia extensa. Un control etiquetado `Cómo se calcula` abre la explicación completa. |
| Qué pasa en su cuerpo | Tarjeta con una explicación corporal general, breve y revisada, relacionada con la fase. | Describe conocimiento general, no afirma que esté ocurriendo en la persona concreta. |
| Qué puedes preguntarle | Una pregunta literal, abierta y adecuada para hoy. | Invita a preguntar en vez de suponer; no aconseja confirmar una hipótesis sobre un estado emocional. |
| Qué te toca a ti | Una acción concreta propia relacionada con tareas, logística, planes o escucha. | No presenta la acción como una corrección o una gestión de la otra persona. |
| Qué no asumir | Un antiestereotipo explícito sobre atribuir emociones o conducta al ciclo. | Previene que la fase active una interpretación automática antes de conversar. |
| Acceso a detalle | Enlace o botón visible `Cómo funciona` y etiqueta accesible para lector de pantalla. | Debe abrir sin recopilar datos nuevos ni dirigir a recursos externos. |

Las cuatro tarjetas anteriores son **contenido de orientación**, no variables que la aplicación mida ni conclusiones sobre la persona afectada. Su texto exacto por fase se fija en documentos versionados (JUA-23). El panel no muestra registros de síntomas, autoinformes, observaciones de la pareja ni inferencias personales, aunque el motor local siga aprendiendo de fechas confirmadas para mejorar el rango individual de fase. La información de aprendizaje de ADR-002, si llega a habilitarse después de sus condiciones, no cambia estas cuatro tarjetas, la rueda ni la indicación temporal, y no puede transformarlas en predicciones sobre el presente.

### 3.1. Rueda del ciclo

La rueda se incorporó en el prototipo de JUA-5 (`src/App.jsx`). Esta sección la convierte en parte de la especificación.

#### Qué muestra

| ID | Regla |
|---|---|
| RU-01 | La rueda presenta, en orden temporal y en el sentido de lectura, los cuatro rótulos educativos: **Menstruación → Fase folicular → Ventana ovulatoria estimada → Fase lútea**, y una marca de **siguiente ciclo** que cierra el círculo. |
| RU-02 | Los cuatro rótulos son una simplificación editorial, no cuatro fases clínicas consecutivas. La menstruación se solapa con el inicio de la fase folicular y la ovulación es un evento, no una fase ([01-cycle-phases.md](../research/jua-10/01-cycle-phases.md)). «Cómo funciona» explica esta simplificación. |
| RU-03 | El rótulo de la ovulación es siempre «Ventana ovulatoria estimada». Nunca «ovulación», «día de ovulación», «días fértiles» ni equivalentes. |
| RU-04 | En el centro de la rueda aparecen la fase estimada para hoy y el día de ciclo, con el mismo texto que el bloque «Estado del ciclo». |
| RU-05 | El tamaño de cada segmento es **proporcional a la duración estimada de cada fase**, tal como la calcula el motor auditado (CON-032) para el ciclo en curso. El motor parte de la duración del ciclo: la que declare la persona afectada (4.3) o, cuando haya ciclos confirmados suficientes, el valor central de esos ciclos (la media móvil de 3 a 6 ciclos de la [definición de app](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_DEFINICION_DE_APP.md) §6, o la mediana si CON-032 la adopta, porque es más robusta ante un ciclo atípico). A partir de ese valor deriva los límites de fase: menstruación según ME-01, ventana ovulatoria y fase lútea contadas hacia atrás desde el siguiente inicio previsto, y fase folicular entre ambas. |
| RU-05b | Si la persona afectada no ha declarado duraciones y todavía no hay ciclos confirmados suficientes, pero el estado no es excepcional (sección 5), los segmentos de la fase folicular, la ventana ovulatoria y la fase lútea usan la duración mediana de referencia de cada fase, con fuente auditada (JUA-27), y la menstruación ocupa los días 1 a 3. La descripción accesible y «Cómo funciona» indican que se trata de una referencia general, no de la duración en esta persona. |
| RU-05c | Las proporciones se recalculan solo cuando cambia la estimación del motor, por ejemplo al confirmarse un nuevo inicio de sangrado. No cambian de un día a otro dentro del mismo ciclo. |
| RU-06 | La ventana estimada de la fase actual se dibuja como un arco sobre la rueda, no como un punto. Si la ventana cruza el límite entre dos segmentos, el arco abarca ambos. La rueda nunca sugiere más precisión que la ventana textual. |
| RU-07 | Si se aprueba la indicación de los días previos a la menstruación (3.2), la rueda puede marcarla como un tramo dentro de la fase lútea con el mismo estilo de estimación que RU-06. No es un quinto segmento. |

#### Qué no puede significar

| ID | Regla |
|---|---|
| RU-08 | El contraste o la intensidad solo marcan qué segmento corresponde a la fase estimada. Nunca representan bienestar, peligro, sensibilidad, síntomas, conducta, energía, deseo, consentimiento, límites ni disponibilidad. |
| RU-09 | La paleta es la misma en todas las fases y en todos los días. Ningún segmento usa colores de alarma, y la rueda no cambia de color, intensidad ni tono al acercarse la menstruación ([definición de app](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_DEFINICION_DE_APP.md) §5; H-04 y C-03 de la pantalla SPM/TDPM). |
| RU-10 | La rueda no lleva iconos de síntomas, estados de ánimo, sexualidad ni riesgo, ni animaciones, cuentas atrás, sonidos o notificaciones. |
| RU-11 | La rueda no es interactiva en esta versión: no enlaza a la pantalla SPM/TDPM (U-03) ni permite «explorar» otras fases. Añadir interacción exige una decisión propia. |

#### Estados excepcionales

La rueda sigue la sección 5. Ningún estado puede mostrar una rueda que parezca vigente.

| Estado (sección 5) | Comportamiento de la rueda |
|---|---|
| Datos insuficientes | No se muestra la rueda. Se muestra el mensaje del estado. |
| Datos antiguos | No se muestra la rueda ni la última fase calculada. |
| Anticoncepción que impide estimar fase | No se muestra la rueda: no hay fases que situar. |
| Consentimiento retirado o no vigente | No se muestra la rueda ni ningún dato anterior. |
| Patrón local sin evidencia suficiente | Sin efecto: la rueda no muestra patrones (sección 6). |
| Resultado o algoritmo fuera de vigencia | No se muestra la rueda. |

#### Accesibilidad

| ID | Regla |
|---|---|
| RU-12 | La rueda es una figura con título y una descripción textual equivalente para lector de pantalla, por ejemplo: «Rueda del ciclo. Fase lútea estimada, día 18. Ventana estimada del 15 al 24 de septiembre». La información no se transmite solo con la forma ni el color. |
| RU-13 | La fase actual se distingue también con texto («Actual») y no solo por contraste. El contraste cumple los mínimos que fije JUA-8. |
| RU-14 | La rueda se lee bien en móvil y con el texto ampliado al 200 %. Los rótulos no se solapan ni se cortan. |
| RU-15 | Los rótulos y la descripción existen en español, catalán e inglés con los mismos límites. |

#### Diferencia con CON-036

La rueda **no** es la «gráfica local limitada» de CON-036, que sigue bloqueada por CON-013, CON-015 y CON-035. La rueda muestra solo la secuencia de fases y la estimación de hoy. No muestra historial, ciclos anteriores, registros, variables, comparaciones ni patrones.

### 3.2. Menstruación e indicación de los días previos

**Decisión del 19 de octubre de 2026.** Consona no traza subfases. La menstruación se muestra durante la duración del sangrado que declare la persona afectada (4.3) y, si no la declara, en los días 1 a 3 del ciclo. Los días previos a la menstruación se indican como estimación, sin cambiar las tarjetas.

**Por qué.** Una app que solo conoce fechas de inicio de sangrado identifica con fiabilidad la menstruación y el inicio de la fase folicular; las fases intermedias y la lútea se clasifican mal a menudo ([01-cycle-phases.md](../research/jua-10/01-cycle-phases.md), referencia [6]). Dividir las fases en tramos de pocos días daría una precisión que el cálculo no tiene. La menstruación se cuenta hacia delante desde un dato confirmado. Los días previos se cuentan hacia atrás desde una fecha prevista, y por eso llevan siempre su calificador.

#### Menstruación

| ID | Regla |
|---|---|
| ME-01 | El panel y la rueda muestran `Menstruación` desde un **inicio de sangrado confirmado** (el día del inicio es el día 1) durante la **duración habitual del sangrado que declare la persona afectada** (4.3). Si no la ha declarado, se usan los días 1 a 3. Después se muestra `Fase folicular`. |
| ME-02 | Los días 1 a 3 son la referencia cuando no hay declaración: es el intervalo en que, con alta confianza, casi todas las personas siguen sangrando (NHS, Najmabadi et al. 2020, Bull et al. 2019, Allen et al. 2016 y Schmalenberger et al. 2021; ver JUA-27). No es la duración del sangrado, que a menudo dura de 4 a 6 días o más. |
| ME-03 | Mostrar `Fase folicular` cuando termina la menstruación no contradice que el sangrado continúe: la fase folicular empieza con la menstruación ([01-cycle-phases.md](../research/jua-10/01-cycle-phases.md)). |
| ME-04 | `Menstruación` solo se muestra como fase actual si el inicio del ciclo en curso está **confirmado**. Una fecha prevista no basta. Si la fecha prevista pasa sin confirmación, el panel no afirma `Menstruación`; el comportamiento concreto se fija en CON-032 dentro de los estados de la sección 5. |
| ME-05 | Las tarjetas de la menstruación (JUA-23) se muestran mientras se muestra `Menstruación` y pueden referirse al sangrado. Después se muestran las de la fase folicular, que no dan por hecho que el sangrado haya terminado ni que continúe. |
| ME-06 | «Cómo funciona» explica de dónde sale la duración mostrada: la declarada por la persona afectada o, en su defecto, la referencia de 3 días, y que el sangrado puede durar más. |

#### Días previos a la menstruación

| ID | Regla |
|---|---|
| IT-01 | Se muestra `Días previos a la menstruación · estimación` cuando hoy está dentro del tramo estimado que precede a la siguiente menstruación prevista. |
| IT-02 | La indicación lleva siempre el calificador de estimación y una explicación breve accesible desde ella, por ejemplo: «Calculado a partir de la duración de ciclos anteriores confirmados. La siguiente menstruación puede adelantarse o retrasarse». Es una estimación probabilística, no un dato. |
| IT-03 | Solo se muestra si el motor auditado (CON-032) calcula una ventana para el siguiente inicio de sangrado con datos suficientes y vigentes. No se muestra en ningún estado excepcional de la sección 5 ni con anticoncepción que impida estimar fase. |
| IT-04 | Es una etiqueta temporal, no clínica: no usa «premenstrual» como término clínico, no nombra SPM ni TDPM y no presenta cambios físicos o emocionales como algo que la pareja vaya a tener o esté teniendo ([audit-07](../research/jua-10/audit-07-rcog-pms.md) §4; C-01; SPM-04). |
| IT-05 | **No cambia las tarjetas.** Las cuatro tarjetas siguen siendo las de la fase lútea durante toda la fase (H-01 de `home-cards-luteal-v0.1.0.md`). |
| IT-06 | No cambia el color, el tono ni la intensidad del panel o de la rueda; no usa iconos de aviso, cuentas atrás («faltan 3 días»), notificaciones ni recordatorios (RU-09, RU-10, sección 7). |
| IT-07 | No enlaza directamente a la pantalla SPM/TDPM ni remite a ella. El camino sigue siendo «Cómo funciona» (U-03, C-03). |
| IT-08 | «Cómo funciona» explica cómo se calcula este tramo y por qué es menos preciso que la fase. |
| IT-09 | La duración del tramo es una referencia editorial que se fija en JUA-23 con fuente auditada. No se presenta como un criterio diagnóstico del tipo «X días antes de la regla = SPM», que audit-07 prohíbe. |
| IT-10 | Antes de publicarse, la indicación se incluye expresamente en una revisión clínica (JUA-16 o una posterior), igual que las tarjetas de la fase lútea (C-04). |

#### Coherencia con las salvaguardas existentes

| Salvaguarda | Cómo se cumple |
|---|---|
| H-01: las tarjetas de la fase lútea no cambian con el día ni con la cercanía de la menstruación. | La indicación no cambia las tarjetas (IT-05). H-01 sigue vigente. |
| H-02 y C-01: en los días premenstruales estimados no se nombran SPM ni TDPM ni se anuncian cambios. | IT-04. |
| H-03 y C-02: la variabilidad premenstrual se expresa con «algunas personas» y «puede». | La indicación no habla de variabilidad. Su explicación (IT-02) solo trata de fechas. |
| H-04, C-03, U-02 y U-03: la home no cambia de color ni de tono por la fase y no enlaza a SPM/TDPM. | IT-06 e IT-07. |
| C-04: los cambios de la home en los días premenstruales se revisan contra la pantalla SPM/TDPM. | IT-10. |
| SPM-04: la cercanía de la menstruación no equivale a SPM. | IT-04 e IT-09. |
| Sección 1: el panel no repite descargos. | La excepción está justificada en la sección 1 y se limita a esta indicación. |
| Sección 7: no hay notificaciones, semáforos ni llamadas a la acción. | IT-06. |
| [01-cycle-phases.md](../research/jua-10/01-cycle-phases.md): no se presentan las fases como verificadas por el calendario. | ME-02 a ME-04, IT-02 e IT-03. |

## 4. Información obligatoria antes y fuera del panel

### 4.1. Onboarding

Antes de mostrar el primer panel con datos, el onboarding debe explicar con lenguaje breve y comprensible que Consona calcula fases a partir de fechas pasadas confirmadas. Debe indicar que los ciclos varían, que la ventana puede cambiar cuando se confirme un nuevo inicio de sangrado, que el resultado no es anticonceptivo y que no revela cómo se siente ni qué desea otra persona.

La persona usuaria debe confirmar que ha leído esa explicación sin presentarla como una renuncia a derechos. El flujo de consentimiento de la persona afectada sigue siendo independiente y debe cumplir ADR-001 y ADR-002; no se sustituye por esta explicación de usabilidad.

### 4.2. «Cómo funciona»

Esta sección, disponible desde el panel y desde la navegación principal, explica el cálculo con más detalle. Debe cubrir la fecha de actualización, el uso de rangos, la caducidad de los datos, la anticoncepción, las razones por las que el resultado puede cambiar y los límites de la personalización local. También debe explicar que la rueda es una simplificación editorial (RU-02), que los 3 días de la menstruación son una referencia (ME-06) y cómo se estima el tramo de los días previos a la menstruación (IT-08). Debe incluir el recordatorio de que los patrones no diagnostican SPM o TDPM y que no se infieren consentimiento sexual, deseo sexual, límites ni disponibilidad.

La sección no puede quedar escondida en la política de privacidad ni requerir conexión. Debe ser accesible con teclado, lector de pantalla y lenguaje equivalente en español, catalán e inglés. Su recorrido se completa en JUA-7.

### 4.3. Datos que aporta la persona afectada *(nuevo)*

La duración del ciclo y la del sangrado se ajustan a lo que indique la persona afectada, es decir, la pareja que cede sus datos. Estos datos forman parte del alcance que esa persona acepta en el consentimiento inicial (CON-033, JUA-28).

| ID | Regla |
|---|---|
| DA-01 | La persona afectada puede declarar la **duración habitual de su ciclo** y la **duración habitual de su sangrado**, junto con las fechas pasadas de inicio de sangrado confirmadas. Las tres son opcionales y se pueden modificar o retirar. |
| DA-02 | El formulario de consentimiento explica estos datos antes de que se acepten: para qué sirven (ajustar la rueda, la menstruación y la estimación de fase), dónde se guardan, qué no permiten concluir y cómo se retiran (ADR-001 §3; CON-007, invariante 2). |
| DA-03 | Cada dato tiene su propio alcance local (CON-007 §2.1): aceptar las fechas no activa las duraciones, y retirarlas no obliga a retirar las fechas. Al retirar un alcance se bloquean y borran ese dato y sus derivados (CON-007, invariantes 3 a 5). |
| DA-04 | Los datos se conservan solo en el dispositivo receptor y **nunca se almacenan ni se transmiten a través de servidores de Consona** (ADR-001 §3.4; CON-008). |
| DA-05 | **Paso de los datos (pendiente de decisión en JUA-28).** El objetivo es que la persona afectada dé el consentimiento y aporte los datos desde su propio dispositivo, y que estos pasen directamente a la webapp de quien consulta sin pasar por servidores de Consona. Hoy CON-008 no lo permite: el dispositivo de control no pide ni guarda datos de ciclo (requisito 9), y la entrada se hace en el receptor (decisión «Entrada de fecha»). Su decisión «Cambio de requisito» exige una revisión arquitectónica formal antes de modificarlo. Mientras no se haga, la app no puede afirmar que un dato lo introdujo o verificó una persona concreta (requisito 10). |
| DA-06 | **Precedencia.** La duración del sangrado declarada fija la menstruación (ME-01). La duración del ciclo declarada se usa mientras no haya ciclos confirmados suficientes; después prevalece el valor calculado con fechas confirmadas (definición de app §6). Si ambos difieren de forma notable, la app no sustituye uno por otro en silencio: «Cómo funciona» indica qué valor se está usando y la persona afectada puede actualizar su declaración. |
| DA-07 | Una duración declarada es un dato de la persona afectada, no una medición ni un diagnóstico. La app no la compara con rangos clínicos ni la califica como normal o anormal. |
| DA-08 | **Frecuencia del consentimiento.** Hay un consentimiento inicial que no se renueva de forma periódica ni se recuerda (ADR-001 §4; CON-007, invariante 7). La persona afectada lo revisa, modifica o retira cuando quiere. Un alcance nuevo, por ejemplo una variable de ADR-002, exige su propio consentimiento; no es una renovación del inicial. |
| DA-09 | **Registro del consentimiento.** Consona guarda un registro del consentimiento sin la identidad de la persona afectada: solo referencias opacas y rotables, sin nombre, correo, teléfono, cuenta ni datos de ciclo (ADR-001 §2 y C2; CON-008). La revisión jurídica (CON-010, JUA-22) debe confirmar que ese registro basta para acreditar el consentimiento. |

## 5. Estados que requieren una explicación explícita

La limpieza del panel aplica al estado normal. Cuando el resultado no es apto para una presentación breve, la interfaz debe ser directa y explícita; no puede ocultar un problema bajo una etiqueta simple de fase. En ninguno de estos estados se muestran la rueda ni la indicación temporal (3.1 y 3.2).

| Estado | Presentación requerida | Acción disponible |
|---|---|---|
| Datos insuficientes | «Falta información confirmada para mostrar el ciclo.» | Explicar qué fecha pasada puede añadirse, según el consentimiento vigente. |
| Datos antiguos | «Actualiza el último inicio de sangrado confirmado para continuar.» | Añadir o corregir solo una fecha pasada confirmada. |
| Anticoncepción que impide estimar fase | «Con este método no mostramos fases.» | Abrir contenido educativo específico, sin forzar una fase. |
| Consentimiento retirado o no vigente | «El seguimiento no está disponible.» | No mostrar datos anteriores; ofrecer solo los pasos autorizados para revisar o reactivar el consentimiento. |
| Patrón local sin evidencia suficiente | No mostrar una conclusión ni una tarjeta de patrón. | Permitir revisar consentimiento y registros solo a quien corresponda, sin sugerir que hay o no síntomas. |
| Resultado o algoritmo fuera de vigencia | «No podemos mostrar el ciclo con la información disponible.» | Explicar el motivo y no conservar una visualización engañosa como si fuera actual. |

## 6. Separación entre aprendizaje y presentación

El motor de ciclo sigue aprendiendo exclusivamente con fechas pasadas confirmadas para ajustar la duración individual, el rango y la incertidumbre de la fase. Este aprendizaje tiene un efecto útil en el panel: una estimación de ciclo más individualizada, que también puede ajustar las proporciones de la rueda (RU-05) y la ventana de la siguiente menstruación (IT-03). No se presenta como una medición de estados interiores.

ADR-002 mantiene una línea separada y condicionada de aprendizaje local sobre variables consentidas. Sus posibles resultados no aparecen en la home de quien consulta la aplicación. Si en una fase futura se crea una vista específica para esos datos, deberá respetar el consentimiento granular, la separación entre autoinforme y observación, la fuente, la muestra, la incertidumbre, el borrado y la evaluación de violencia tecnológica definidos en el ADR. Esa vista requerirá una decisión y especificación propias.

La home no usa resultados de patrones para modificar el color de la fase o de la rueda, seleccionar alertas conductuales, recomendar decisiones de pareja ni activar contenido sexual. La presentación diaria permanece estable: fase, día, indicación temporal cuando corresponda, rueda, ventana, actualización y cuatro tarjetas de conversación y acción propia.

## 7. Criterios de aceptación de UX

| Criterio | Evidencia de aceptación |
|---|---|
| Comprensión antes de uso | Prueba de usabilidad en la que las personas entienden, antes de abrir «Hoy», que la fase se calcula desde datos pasados, usa un rango y no es anticonceptiva. |
| Panel legible | El estado normal ofrece fase, día de ciclo, rueda, ventana, actualización y una vía a `Cómo funciona` sin un bloque de descargo repetitivo. |
| Rueda sin significado añadido *(nuevo)* | La prueba confirma que las personas leen la rueda como una secuencia de fases estimada, no como un indicador de estado, riesgo o disponibilidad, y que su descripción accesible equivale a la información visual (RU-08 a RU-15). |
| Indicación de días previos comprendida como estimación *(nuevo)* | La prueba confirma que las personas entienden la indicación como una estimación por fechas, no como un aviso sobre su pareja ni como SPM, y que las tarjetas no cambian (IT-01 a IT-10). |
| Transparencia accesible | La explicación completa está disponible desde el panel, es compatible con teclado y lector de pantalla y existe en ES/CA/EN. |
| Estados excepcionales seguros | Datos antiguos, insuficientes, anticoncepción incompatible, retirada de consentimiento y resultado inválido no muestran una fase, una rueda ni una indicación temporal como si fueran vigentes. |
| Separación entre motor y home | La prueba confirma que el motor puede ajustar el rango individual con fechas confirmadas, pero que la home no muestra síntomas, observaciones ni inferencias personales. |
| Tarjetas de orientación | Las cuatro tarjetas aparecen en cada fase y se prueban para comprobar que orientan a preguntar, escuchar y actuar en primera persona sin atribuir estados a la pareja. |
| Prevención de vigilancia | No aparecen nombres, historiales extensos, notificaciones, semáforos emocionales, rachas, cuentas atrás ni llamadas a la acción que incentiven vigilar a la pareja. |

## 8. Implicación para desarrollo

El nombre directo de la fase en el panel no cambia el motor de estimación. El motor sigue obligado a usar UTC, datos pasados confirmados, rango individual, incertidumbre, caducidad y tratamiento específico de anticoncepción. Además, debe exponer lo que necesitan la rueda y la indicación temporal: los límites estimados de cada fase con su incertidumbre y si proceden de una duración declarada, de un valor calculado o de la referencia (RU-05, RU-05b y DA-06), si el inicio del ciclo en curso está confirmado (ME-04) y la ventana del siguiente inicio de sangrado (IT-03). La interfaz debe distinguir entre el resultado computado que puede resumirse visualmente y las condiciones que deben explicarse antes de usarlo o cuando dejan de cumplirse. La especificación de las cuatro tarjetas de contenido debe mantenerse separada de los datos de aprendizaje.

No se implementará esta pantalla con datos reales hasta completar las condiciones de ADR-001 y ADR-002. Mientras tanto, puede diseñarse y probarse con datos ficticios locales que no representen a una persona real.

### Diferencias del prototipo actual con esta versión

El prototipo de JUA-5 (`src/App.jsx`, `src/App.css`) usa datos ficticios. Frente a esta versión:

| Diferencia | Regla |
|---|---|
| Los segmentos de la rueda tienen proporciones fijas (de 62°, 116°, 42° y 140°), que no salen de ninguna estimación y sugieren duraciones universales. | RU-05 a RU-05c |
| La ventana estimada no se dibuja como arco sobre la rueda. | RU-06 |
| No hay indicación de los días previos a la menstruación. | 3.2 |
| La menstruación no usa la duración declarada ni, en su defecto, los días 1 a 3. | ME-01, DA-06 |
| No hay vista de estados excepcionales: la rueda se muestra siempre. | 3.1, sección 5 |
| La descripción accesible no incluye el día ni la ventana. | RU-12 |

Estas diferencias se registran como tareas de implementación y se recogen en el mapa de pantallas (JUA-26).

## 9. Historial

### [1.1.0] — 19 de octubre de 2026

- Se traslada la especificación a `docs/product/` con versión en el nombre del archivo. La v1.0 se conserva sin cambios en `info/`.
- Se añade la rueda del ciclo (3.1): qué muestra, qué no puede significar, estados excepcionales, accesibilidad y diferencia con CON-036. Origen: criterio de aceptación de JUA-5.
- Se añade la sección 4.3: las duraciones del ciclo y del sangrado se ajustan a lo que declare la persona afectada en el consentimiento inicial, con su propio alcance local.
- Se añade la sección 3.2: sin subfases; menstruación durante la duración declarada o, en su defecto, en los días 1 a 3 desde un inicio confirmado; indicación de los días previos a la menstruación como estimación, con su tabla de coherencia con las salvaguardas.
- Filas nuevas en las secciones 3 y 7. Ajustes en las secciones 1, 2, 4.2, 5, 6 y 8 para incluir la rueda y la indicación temporal. Se añade la tabla de diferencias del prototipo.

### [1.0] — 17 de septiembre de 2026

- Versión entregada en `info/Consona_entrega_completa/archivos_compartidos/`.

## Referencias

- [Definición de aplicación](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_DEFINICION_DE_APP.md), §5.
- [ADR-001: control local y consentimiento](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md).
- [ADR-002: aprendizaje local y variabilidad premenstrual](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md).
- [Línea base y backlog](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_LINEA_BASE_Y_BACKLOG.md): CON-032, CON-034 y CON-036.
- [Fases del ciclo (JUA-10)](../research/jua-10/01-cycle-phases.md).
- [Auditoría 07: SPM, RCOG](../research/jua-10/audit-07-rcog-pms.md), §4.
- Pantalla SPM/TDPM v0.4.0 y tarjetas de la fase lútea v0.1.0: `docs/education/spm-tdpm-v0.4.0.md` y `docs/education/home-cards-luteal-v0.1.0.md`, en revisión en la rama de JUA-19 y en el paquete de JUA-16. Reglas citadas: U-02, U-03, C-01 a C-04, SPM-04 y H-01 a H-04.
