# Consona — Especificación UX del panel principal

**Versión:** 1.0  
**Fecha:** 17 de septiembre de 2026  
**Estado:** Decisión de experiencia vigente para diseño y planificación. No habilita el seguimiento ni relaja las condiciones de ADR-001 y ADR-002.

## 1. Decisión

El panel principal se denominará **“Hoy”** y tendrá una interfaz limpia. En condiciones normales mostrará el nombre directo de la fase, el día de ciclo calculado y la ventana de fechas correspondiente, sin repetir en cada tarjeta las palabras “posible”, “estimación” o textos de descargo largos.

La claridad no equivale a ocultar la incertidumbre. La explicación de que Consona calcula una estimación local, no diagnostica, no es anticonceptiva y no conoce el estado actual de una persona debe darse **antes** de que alguien vea el panel: durante el onboarding y en la sección permanente **“Cómo funciona”**. El panel mantiene una ruta compacta y accesible hacia esa explicación, además de mostrar los datos necesarios para interpretar el resultado: ventana, fecha de actualización y estado de vigencia.

> **Regla de diseño.** La fase puede llamarse directamente “Fase lútea” en el panel. El producto no debe presentarla como un hecho clínico ni convertirla en una afirmación sobre sentimientos, necesidades, consentimiento sexual, deseo, límites o disponibilidad.

## 2. Objetivos de la pantalla

El panel debe responder con rapidez a tres preguntas legítimas: dónde se sitúa el ciclo según los datos confirmados, qué información corporal general puede leerse sobre la fase y qué conversación respetuosa puede iniciar la persona usuaria. La home está orientada a lo que **puede hacer quien la consulta**, no a describir cómo está su pareja. No debe convertirse en una pantalla de vigilancia, diagnóstico ni pronóstico interpersonal.

El diseño usa **transparencia progresiva**. La información imprescindible para usar el producto se aprende al inicio y permanece disponible después; el panel diario conserva solo las señales que cambian o permiten detectar un resultado desactualizado. Los límites importantes reaparecen en contexto cuando el sistema no puede calcular con seguridad, cuando los datos han caducado o cuando se intenta interpretar un patrón personal.

## 3. Estructura del panel “Hoy”

| Bloque | Contenido visible en estado normal | Reglas de texto y diseño |
|---|---|---|
| Encabezado | `Hoy` y fecha local. | No mostrar nombre, fotografía, cuenta ni identificador de la persona afectada. |
| Estado del ciclo | `Fase lútea` y `Ciclo · día 18`. | El nombre de fase es directo y breve. “Día 18” es el resultado del cálculo local desde un inicio de sangrado confirmado, no una afirmación sobre síntomas. |
| Ventana y actualización | Una ventana compacta, por ejemplo `15–24 sept.`, y `Actualizado hoy`. | La ventana comunica variación sin repetir una advertencia extensa. Un control etiquetado `Cómo se calcula` abre la explicación completa. |
| Qué pasa en su cuerpo | Tarjeta con una explicación corporal general, breve y revisada, relacionada con la fase. | Describe conocimiento general, no afirma que esté ocurriendo en la persona concreta. |
| Qué puedes preguntarle | Una pregunta literal, abierta y adecuada para hoy. | Invita a preguntar en vez de suponer; no aconseja confirmar una hipótesis sobre un estado emocional. |
| Qué te toca a ti | Una acción concreta propia relacionada con tareas, logística, planes o escucha. | No presenta la acción como una corrección o una gestión de la otra persona. |
| Qué no asumir | Un antiestereotipo explícito sobre atribuir emociones o conducta al ciclo. | Previene que la fase active una interpretación automática antes de conversar. |
| Acceso a detalle | Enlace o botón visible `Cómo funciona` y etiqueta accesible para lector de pantalla. | Debe abrir sin recopilar datos nuevos ni dirigir a recursos externos. |

Las cuatro tarjetas anteriores son **contenido de orientación**, no variables que la aplicación mida ni conclusiones sobre la persona afectada. El panel no muestra registros de síntomas, autoinformes, observaciones de la pareja ni inferencias personales, aunque el motor local siga aprendiendo de fechas confirmadas para mejorar el rango individual de fase. La información de aprendizaje de ADR-002, si llega a habilitarse después de sus condiciones, no cambia estas cuatro tarjetas ni puede transformarlas en predicciones sobre el presente.

## 4. Información obligatoria antes y fuera del panel

### 4.1. Onboarding

Antes de mostrar el primer panel con datos, el onboarding debe explicar con lenguaje breve y comprensible que Consona calcula fases a partir de fechas pasadas confirmadas. Debe indicar que los ciclos varían, que la ventana puede cambiar cuando se confirme un nuevo inicio de sangrado, que el resultado no es anticonceptivo y que no revela cómo se siente ni qué desea otra persona.

La persona usuaria debe confirmar que ha leído esa explicación sin presentarla como una renuncia a derechos. El flujo de consentimiento de la persona afectada sigue siendo independiente y debe cumplir ADR-001 y ADR-002; no se sustituye por esta explicación de usabilidad.

### 4.2. “Cómo funciona”

Esta sección, disponible desde el panel y desde la navegación principal, explica el cálculo con más detalle. Debe cubrir la fecha de actualización, el uso de rangos, la caducidad de los datos, la anticoncepción, las razones por las que el resultado puede cambiar y los límites de la personalización local. Debe incluir el recordatorio de que los patrones no diagnostican SPM o TDPM y que no se infieren consentimiento sexual, deseo sexual, límites ni disponibilidad.

La sección no puede quedar escondida en la política de privacidad ni requerir conexión. Debe ser accesible con teclado, lector de pantalla y lenguaje equivalente en español, catalán e inglés.

## 5. Estados que requieren una explicación explícita

La limpieza del panel aplica al estado normal. Cuando el resultado no es apto para una presentación breve, la interfaz debe ser directa y explícita; no puede ocultar un problema bajo una etiqueta simple de fase.

| Estado | Presentación requerida | Acción disponible |
|---|---|---|
| Datos insuficientes | “Falta información confirmada para mostrar el ciclo.” | Explicar qué fecha pasada puede añadirse, según el consentimiento vigente. |
| Datos antiguos | “Actualiza el último inicio de sangrado confirmado para continuar.” | Añadir o corregir solo una fecha pasada confirmada. |
| Anticoncepción que impide estimar fase | “Con este método no mostramos fases.” | Abrir contenido educativo específico, sin forzar una fase. |
| Consentimiento retirado o no vigente | “El seguimiento no está disponible.” | No mostrar datos anteriores; ofrecer solo los pasos autorizados para revisar o reactivar el consentimiento. |
| Patrón local sin evidencia suficiente | No mostrar una conclusión ni una tarjeta de patrón. | Permitir revisar consentimiento y registros solo a quien corresponda, sin sugerir que hay o no síntomas. |
| Resultado o algoritmo fuera de vigencia | “No podemos mostrar el ciclo con la información disponible.” | Explicar el motivo y no conservar una visualización engañosa como si fuera actual. |

## 6. Separación entre aprendizaje y presentación

El motor de ciclo sigue aprendiendo exclusivamente con fechas pasadas confirmadas para ajustar la duración individual, el rango y la incertidumbre de la fase. Este aprendizaje tiene un efecto útil en el panel: una estimación de ciclo más individualizada. No se presenta como una medición de estados interiores.

ADR-002 mantiene una línea separada y condicionada de aprendizaje local sobre variables consentidas. Sus posibles resultados no aparecen en la home de quien consulta la aplicación. Si en una fase futura se crea una vista específica para esos datos, deberá respetar el consentimiento granular, la separación entre autoinforme y observación, la fuente, la muestra, la incertidumbre, el borrado y la evaluación de violencia tecnológica definidos en el ADR. Esa vista requerirá una decisión y especificación propias.

La home no usa resultados de patrones para modificar el color de la fase, seleccionar alertas conductuales, recomendar decisiones de pareja ni activar contenido sexual. La presentación diaria permanece estable: fase, ventana, actualización y cuatro tarjetas de conversación y acción propia.

## 7. Criterios de aceptación de UX

| Criterio | Evidencia de aceptación |
|---|---|
| Comprensión antes de uso | Prueba de usabilidad en la que las personas entienden, antes de abrir “Hoy”, que la fase se calcula desde datos pasados, usa un rango y no es anticonceptiva. |
| Panel legible | El estado normal ofrece fase, día de ciclo, ventana, actualización y una vía a `Cómo funciona` sin un bloque de descargo repetitivo. |
| Transparencia accesible | La explicación completa está disponible desde el panel, es compatible con teclado y lector de pantalla y existe en ES/CA/EN. |
| Estados excepcionales seguros | Datos antiguos, insuficientes, anticoncepción incompatible, retirada de consentimiento y resultado inválido no muestran una fase como si fuera vigente. |
| Separación entre motor y home | La prueba confirma que el motor puede ajustar el rango individual con fechas confirmadas, pero que la home no muestra síntomas, observaciones ni inferencias personales. |
| Tarjetas de orientación | Las cuatro tarjetas aparecen en cada fase y se prueban para comprobar que orientan a preguntar, escuchar y actuar en primera persona sin atribuir estados a la pareja. |
| Prevención de vigilancia | No aparecen nombres, historiales extensos, notificaciones, semáforos emocionales, rachas ni llamadas a la acción que incentiven vigilar a la pareja. |

## 8. Implicación para desarrollo

El nombre directo de la fase en el panel no cambia el motor de estimación. El motor sigue obligado a usar UTC, datos pasados confirmados, rango individual, incertidumbre, caducidad y tratamiento específico de anticoncepción. La interfaz debe distinguir entre el resultado computado que puede resumirse visualmente y las condiciones que deben explicarse antes de usarlo o cuando dejan de cumplirse. La especificación de las cuatro tarjetas de contenido debe mantenerse separada de los datos de aprendizaje.

No se implementará esta pantalla con datos reales hasta completar las condiciones de ADR-001 y ADR-002. Mientras tanto, puede diseñarse y probarse con datos ficticios locales que no representen a una persona real.

## Referencias

[1]: ./CONSONA_DEFINICION_DE_APP.md "Consona — Definición de aplicación"
[2]: ./CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md "Consona — ADR-001: Titularidad, control local, consentimiento y revocación"
[3]: ./CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md "Consona — ADR-002: Aprendizaje local sobre variabilidad premenstrual"
[4]: ./CONSONA_LINEA_BASE_Y_BACKLOG.md "Consona — Línea base de desarrollo y backlog unificado"
