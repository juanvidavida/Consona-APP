# Consona — ADR-002: Aprendizaje local sobre variabilidad premenstrual

**Estado:** **ACEPTADA CON CONDICIONES**  
**Fecha de decisión:** 16 de septiembre de 2026  
**Decisión:** Consona incorporará una pantalla educativa sobre variabilidad premenstrual, SPM y TDPM, y podrá generar inferencias personalizadas **exclusivamente en el dispositivo local** a partir de datos expresamente consentidos. No será una herramienta diagnóstica ni podrá inferir consentimiento sexual, límites, deseo sexual ni disponibilidad.

## 1. Contexto

La experiencia de síntomas antes de la menstruación no es universal ni uniforme. Tener uno o varios síntomas en algún ciclo no basta para identificar un síndrome, y una fase calculada no permite conocer el estado emocional de una persona concreta. El SPM clínicamente relevante exige un patrón temporal repetido y afectación de las actividades habituales; para confirmar TDPM se emplea seguimiento prospectivo diario de síntomas durante al menos dos ciclos. [1] [2]

La prevalencia publicada cambia de forma importante según la población estudiada, la herramienta de medición y si el diagnóstico se confirma prospectivamente. Por ello, Consona no usará una cifra poblacional para clasificar a una persona, ni describirá el SPM o el TDPM como consecuencias universales de la fase lútea. Un metaanálisis de 2024 estimó la prevalencia puntual de TDPM confirmado en 3,2 %, frente a 7,7 % para diagnóstico provisional; esta diferencia ilustra el riesgo de sobreclasificar con datos incompletos. [3]

La decisión de producto es permitir aprendizaje individual local para aumentar la relevancia educativa sin tratarlo como una evaluación clínica. Este cambio sustituye la prohibición anterior de toda inferencia de ánimo, energía o síntomas por fase. No elimina las restricciones sobre consentimiento, intimidad, control local, minimización de datos ni prevención de coerción.

## 2. Decisión de producto

Consona tendrá una pantalla denominada **“Variabilidad premenstrual: SPM y TDPM”**. La pantalla comenzará en el estado: **“No hay un patrón personal identificado”**. Esto significa que no existen datos locales suficientes para sugerir una relación repetida; no significa que la persona no tenga síntomas ni que estos sean irreales.

La pantalla explicará que algunas personas presentan molestias físicas o cambios emocionales antes de la menstruación, mientras que otras no, o los viven de otro modo. Diferenciará educación general, SPM clínicamente relevante y TDPM sin diagnosticar, clasificar ni recomendar tratamientos personalizados. Incluirá un mensaje de seguridad que indique que los síntomas intensos, el deterioro de la vida diaria o cualquier pensamiento de hacerse daño requieren atención sanitaria o de urgencia local, no una interpretación de Consona. [1] [2]

Después de obtener un consentimiento directo, específico y revocable conforme a ADR-001, Consona podrá aprender patrones individuales y mostrar únicamente una **posible relación estadística local** entre una fase estimada y las variables registradas. El resultado nunca equivale a una verdad sobre la persona, una causa, un diagnóstico, una predicción determinista ni un permiso para actuar sobre otra persona.

## 3. Datos locales autorizables

Todos los campos de esta sección se conservan exclusivamente en el dispositivo que los almacena. El servicio mínimo de consentimiento y revocación de ADR-001 no recibe, deduce, almacena ni registra ninguno de ellos.

| Grupo | Ejemplos permitidos si se consienten | Regla de procedencia y presentación |
|---|---|---|
| Variables físicas | Dolor o calambres, hinchazón, apetito o antojos, sueño y cansancio | Solo categorías cerradas e intensidad simple; no texto libre en el piloto. |
| Variables emocionales y cognitivas | Irritabilidad, tristeza, ansiedad percibida, concentración y energía | Deben mostrarse como experiencias o percepciones, no como rasgos, diagnósticos ni explicaciones suficientes de una conducta. |
| Metadatos de calidad | Fecha local, fase estimada, fuente del dato, consentimiento vigente y nivel de cobertura | Necesarios para distinguir registros y calcular incertidumbre; no salen del dispositivo. |
| Fuente del registro | `autoinforme de la persona afectada` o `observación de la pareja` | La fuente se conserva y se muestra siempre. Una observación es una percepción de quien la registra, no un hecho clínico ni una sustitución del autoinforme. |

Los campos no permitidos son: notas libres, mensajes, conversaciones, geolocalización, contactos, nombres, identificadores de cuenta, deseo sexual, actividad sexual, consentimiento sexual, límites, disponibilidad, vigilancia de conducta, diagnósticos y cualquier información que no sea necesaria para el patrón local acordado.

## 4. Consentimiento granular y control

El consentimiento no podrá ser global ni implícito. La persona afectada debe aceptar de forma diferenciada: qué grupos de variables pueden guardarse, si permite solo autoinforme o también observaciones de su pareja, que los datos se usarán para una inferencia local y que puede retirar ese permiso. Cualquier categoría no aceptada debe estar bloqueada técnicamente.

La persona afectada debe poder conocer, revisar y retirar el alcance consentido. La retirada debe impedir nuevos registros y nuevas inferencias de la categoría afectada, desencadenar el borrado local aplicable y utilizar el mecanismo de revocación de ADR-001 cuando corresponda. No se permite usar información recogida antes de una retirada para continuar generando sugerencias.

El diseño separará visualmente los dos tipos de entrada. Un registro de observación de la pareja debe usar lenguaje como “lo que observé” y no “cómo estaba”, y nunca debe sobrescribir, corregir ni invalidar un autoinforme. Si la persona afectada no ha consentido observaciones, ese formulario no se muestra.

## 5. Modelo de aprendizaje local

El modelo comienza sin patrón asumido. Consona no mostrará alertas personalizadas durante el periodo inicial de recopilación de datos ni asignará SPM/TDPM a partir de una entrada aislada. El objetivo es detectar una señal repetida y limitada para abrir conversación, no construir un perfil permanente.

La primera versión del algoritmo deberá cumplir estas reglas:

1. Procesar exclusivamente datos locales que estén dentro del alcance de consentimiento vigente.
2. Mantener separados los autoinformes y las observaciones. No puede combinarlos como si fueran la misma medida.
3. Exigir al menos tres ciclos locales confirmados y una cobertura mínima que se definirá y probará en la tarea CON-009 antes de mostrar una inferencia.
4. Comparar una ventana premenstrual estimada con otros momentos del ciclo y expresar la salida como asociación posible, junto con tamaño de muestra, fuente de datos y nivel de incertidumbre.
5. Mostrar “sin patrón identificado” cuando los datos sean insuficientes, contradictorios, antiguos o se hayan retirado. La ausencia de patrón nunca se presenta como ausencia de síntomas.
6. Permitir borrar un registro, una categoría, una fuente o todo el historial local; el modelo debe recalcularse o dejar de mostrar resultados de inmediato.
7. Limitar el historial de aprendizaje local a una ventana definida y revisable, sin exportación, sincronización, perfiles múltiples ni gráficos que permitan construir un expediente. La extensión concreta se decidirá en CON-009 y se evaluará en la EIPD.

Una salida admisible sería: “En los registros locales disponibles, esta variable apareció con mayor frecuencia en la ventana premenstrual estimada. Es una asociación posible, no explica por sí sola cómo se encuentra ni qué necesita hoy. ¿Quieres preguntarle cómo está?”. Una salida no admisible sería: “Estará irritable”, “tiene SPM”, “hoy no querrá intimidad” o cualquier equivalente.

La home de quien consulta Consona no muestra registros de variables ni asociaciones personalizadas. El motor de ciclo puede aprender localmente de fechas confirmadas para afinar la duración individual, el rango y la incertidumbre de la fase que se presenta en esa home. Las cuatro tarjetas de la home se orientan a conversación y acción propia; no son variables medidas ni salidas del aprendizaje. Cualquier salida de este ADR requeriría una vista separada y una decisión posterior, conservando fuente, número de ciclos, cobertura, incertidumbre, borrado y control definidos en este documento. La especificación de la home está en `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md`.

## 6. Límites clínicos y de seguridad

Consona no diagnostica SPM, TDPM, depresión, ansiedad ni ninguna otra condición. No usa criterios clínicos, no calcula prevalencias individuales y no sustituye la valoración de profesionales sanitarios. El registro local puede ser útil para una conversación o para que la persona afectada identifique qué desea comentar con un profesional, pero la aplicación no debe declarar que se cumplen criterios de una condición.

La aplicación no puede inferir ni sugerir consentimiento sexual, deseo sexual, límites o disponibilidad. Esos aspectos requieren conversación y consentimiento actual; no se convierten en una variable de entrada ni en una salida del algoritmo.

Las respuestas de seguridad deben ser educativas y no invasivas. No se almacenarán descripciones de crisis ni texto libre. La pantalla debe indicar de forma visible que, ante riesgo inmediato de hacerse daño o de estar en peligro, se busque ayuda urgente local. Esta indicación no activa comunicación, perfilado, telemetría ni informes remotos.

## 7. Condiciones antes de habilitar el piloto personalizado

| ID | Condición | Evidencia requerida |
|---|---|---|
| P1 | Taxonomía cerrada de variables | Lista de categorías, intensidad, fuente y campos locales aprobados; no texto libre en el piloto. |
| P2 | Consentimiento granular | Interfaz y pruebas que demuestren la aceptación separada de autoinforme, observación y cada grupo de variables. |
| P3 | Explicabilidad y contraste de fuentes | Diseño que muestre siempre fuente, muestra, incertidumbre y motivo de la inferencia. |
| P4 | Umbral y evaluación del algoritmo | Especificación de cobertura, tres ciclos mínimos, tratamiento de contradicciones y pruebas de falsos positivos. |
| P5 | Borrado y revocación | Pruebas de borrado de registros, categorías, cálculos, caché y salidas derivadas; compatibilidad con ADR-001. |
| P6 | Seguridad y control coercitivo | EIPD, modelo de amenazas y evaluación de violencia tecnológica que cubran específicamente observación por la pareja. |
| P7 | Revisión clínica y de contenidos | Revisión profesional de la pantalla SPM/TDPM, mensajes de derivación y lenguaje no diagnóstico. |
| P8 | Sin salida remota | Revisión de red, dependencia y logs que demuestre que variables, inferencias y contenido no salen del dispositivo. |

## 8. Consecuencias para el alcance

La pantalla educativa puede diseñarse de inmediato. El registro de variables y las inferencias personalizadas son técnicamente posibles, pero continúan bloqueados hasta cumplir las condiciones P1–P8 y las condiciones de ADR-001. Por tanto, no forman parte del prototipo histórico ni están listos para un piloto en este momento.

El cambio amplía el valor potencial del producto, pero también eleva los riesgos de interpretación errónea, estereotipo, vigilancia y daño relacional. La fuente del dato, el consentimiento granular, el acceso de la persona afectada, el borrado y la incertidumbre son controles de producto, no detalles de implementación.

## 9. Backlog derivado

| Trabajo derivado | Backlog |
|---|---|
| Definir alcance, umbrales y retención del aprendizaje local | CON-009 |
| Diseñar consentimiento granular para autoinforme y observaciones | CON-016 |
| Revisar contenido SPM/TDPM y derivación | CON-027 |
| Implementar registros locales consentidos | CON-037 |
| Implementar motor local explicable de inferencias | CON-038 |
| Validar sesgo, falsos positivos, borrado y control coercitivo | CON-039 |

## Referencias

[1]: https://www.acog.org/womens-health/faqs/premenstrual-syndrome "Premenstrual Syndrome (PMS) — American College of Obstetricians and Gynecologists"
[2]: https://www.acog.org/womens-health/experts-and-stories/the-latest/what-i-wish-everyone-knew-about-premenstrual-dysphoric-disorder "What I Wish Everyone Knew About Premenstrual Dysphoric Disorder — American College of Obstetricians and Gynecologists"
[3]: https://pubmed.ncbi.nlm.nih.gov/38199397/ "The prevalence of premenstrual dysphoric disorder: Systematic review and meta-analysis"
