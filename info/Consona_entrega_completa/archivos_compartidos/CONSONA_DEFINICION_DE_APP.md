# Consona — Definición de aplicación

**Versión:** 1.1  
**Fecha:** 17 de septiembre de 2026  
**Estado:** Vigente para diseño y planificación. La implementación de seguimiento permanece condicionada a `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md`.

## 1. Definición breve

**Consona** es una aplicación para personas adultas en una relación de pareja que ofrece educación clara sobre el ciclo menstrual y, solo cuando existe un consentimiento verificable y un modelo de control aprobado, una **estimación prudente y local** de fases del ciclo y de posibles patrones individuales de variables consentidas. Su propósito es mejorar la conversación y el acompañamiento respetuoso, no presentar una inferencia como certeza ni dirigir cómo debe actuar una pareja.

La propuesta de valor combina educación y estimación. La educación no es un pretexto para vigilar, y la estimación no es una promesa de precisión ni una herramienta anticonceptiva. El claim de producto no será “aprende con Consona”; el producto debe comunicar acompañamiento informado y respetuoso.

> **Principio de interacción.** Consona orienta a preguntar, escuchar y asumir responsabilidades propias. Puede mostrar una asociación personalizada, local y explícitamente incierta cuando exista evidencia consentida suficiente, pero nunca determina consentimiento sexual, deseo sexual, límites ni disponibilidad de otra persona.

## 2. Público y alcance inicial

El piloto está limitado a personas de **18 años o más**. La aplicación se dirige a personas que desean comprender mejor el ciclo menstrual dentro de una relación, así como a parejas que quieran acordar un uso informado y voluntario. La persona afectada por los datos del ciclo no es un dato pasivo del producto: su consentimiento y capacidad efectiva de revocación son condiciones de uso cuando se active cualquier función de ciclo personalizada.

| Incluido en la definición | Excluido de la definición |
|---|---|
| Educación sobre ciclo, variabilidad y límites de las estimaciones | Diagnóstico médico, consejo clínico individual o tratamiento |
| Conversación, consentimiento, empatía y responsabilidad propia | Diagnóstico de SPM, TDPM, depresión, ansiedad u otra condición clínica |
| Estimación de fases y patrones locales con rango, margen, procedencia y caducidad, si se cumplen los ADR | Predicción determinista, “día exacto”, método anticonceptivo o ventana fértil fiable |
| Datos de ciclo conservados localmente, si son autorizados | Servidores de datos de ciclo, sincronización, copias remotas, perfiles múltiples o exportaciones |
| Servicio excepcional de consentimiento y revocación sin datos de ciclo | Cuentas de ciclo, nombres, notas, variables, inferencias, analítica, telemetría o recursos de terceros |

## 3. Principios de producto

| Principio | Regla de diseño |
|---|---|
| **Educación al mismo nivel que estimación** | Cada fase estimada se acompaña de explicación y límites. La entrega de valor no depende de afirmar que la aplicación “sabe” algo sobre la otra persona. |
| **Empatía por encima del paternalismo** | La persona usuaria acompaña; no tutela, gestiona ni corrige a su pareja. Las llamadas a la acción dirigen la reflexión hacia la propia conducta. |
| **Consentimiento por encima de coerción** | El consentimiento directo, específico y granular de la persona afectada es imprescindible para los datos personalizados. Puede retirarse por categoría y fuente mediante ADR-001 y ADR-002. |
| **Minimalismo por encima de engagement** | No hay badges, rachas, FOMO, gamificación agresiva ni recordatorios diseñados para generar dependencia. Cualquier aviso es funcional, limitado y no manipulativo. |
| **Privacidad por encima de monetización** | No se venden datos y no se despliegan analítica, telemetría, píxeles ni informes remotos de errores. La monetización no condiciona las decisiones de datos del piloto. |
| **Incertidumbre por encima de certeza falsa** | El onboarding y “Cómo funciona” explican que fases y patrones son resultados locales con rango, fuente, muestra, actualización y caducidad. El panel normal usa el nombre directo de la fase y señales compactas; el detalle permanece disponible y los estados no válidos se explican de forma explícita. |
| **Conversación por encima de atribución** | Toda pantalla termina en una pregunta abierta, una escucha o una acción propia; ninguna inferencia local sustituye el diálogo. |
| **Personalización local por encima de generalización** | No se asume que exista SPM ni un patrón personal. Las inferencias se activan solo tras datos locales consentidos y suficientes, con fuente visible y sin diagnóstico. |

## 4. Modelo de datos, consentimiento y revocación

### 4.1. Regla general

Los datos de ciclo, los registros de variables y las inferencias asociadas permanecen en el dispositivo que los conserva. Consona no tendrá una base de datos remota de ciclos, almacenamiento en nube, sincronización, copia de seguridad, cuenta de ciclo, analítica, telemetría, soporte remoto que acceda a datos, ni registros de aplicación que los contengan.

La única excepción autorizada es un **servicio mínimo de consentimiento y revocación**, definido en el ADR-001. Este servicio puede procesar solo identificadores pseudónimos efímeros o rotables, un vínculo técnico entre dispositivos, el estado de consentimiento y solicitudes genéricas de revocación. No recibe ni registra fechas, fases, síntomas, duración, anticoncepción, nombres, notas o datos derivados del ciclo.

### 4.2. Qué permite y qué no permite el consentimiento

El consentimiento permite tratar únicamente el alcance que la persona afectada haya aceptado de forma comprensible. Puede autorizar por separado autoinformes propios y observaciones de la pareja sobre las categorías cerradas de ADR-002, siempre identificando la fuente y sin convertir una observación en un hecho clínico. No autoriza a inferir consentimiento sexual, deseo sexual, límites o disponibilidad. La retirada del consentimiento debe activar el borrado local y bloquear los cálculos, patrones y consultas posteriores de la categoría afectada según ADR-001 y ADR-002.

Durante el piloto no habrá comprobación periódica del estado de consentimiento. La revocación se comunica mediante una solicitud específica, sin datos de ciclo. El diseño debe explicar con honestidad el caso de un dispositivo receptor sin conexión: no se puede prometer un borrado remoto instantáneo de un dispositivo que no recibe la solicitud. Ese riesgo debe analizarse, mitigarse, probarse y comunicarse antes de que el flujo pueda usarse.

## 5. Experiencia y pantallas

La interfaz debe ser limpia, moderna y sobria, con tonos oscuros o neutros y sin códigos cromáticos cliché. Los colores pueden servir para orientar una sección de fase estimada, pero nunca deben representar “bienestar”, “peligro”, “sensibilidad” o una disposición emocional de la persona afectada.

| Vista | Propósito | Reglas obligatorias |
|---|---|---|
| **Inicio educativo y acceso 18+** | Explicar qué hace Consona, qué no hace y cómo calcula las fases | No recoger datos de ciclo; comunicar antes del primer panel que usa fechas pasadas confirmadas, trabaja con rangos, no es anticonceptivo ni una lectura del estado de la pareja |
| **Consentimiento transparente** | Permitir que la persona afectada otorgue, revise y retire el permiso | Debe respetar ADR-001; una casilla de la otra persona no sustituye el consentimiento directo |
| **Datos semilla y variables, si se habilitan** | Incorporar fechas pasadas confirmadas y categorías locales autorizadas | Solo datos mínimos dentro del consentimiento; las observaciones de la pareja y el autoinforme se separan y no hay texto libre en el piloto |
| **Panel de hoy** | Mostrar fase, día de ciclo, ventana, actualización y cuatro tarjetas: “Qué pasa en su cuerpo”, “Qué puedes preguntarle”, “Qué te toca a ti” y “Qué no asumir” | En estado normal usa el nombre directo de la fase sin descargo repetitivo. La home orienta a la conversación y la acción propia; no muestra síntomas, observaciones ni inferencias personales. Mantiene ventana, actualización, acceso a “Cómo funciona” y avisos visibles ante estados inválidos |
| **Variabilidad premenstrual: SPM y TDPM** | Explicar que los síntomas y trastornos no son universales | No diagnostica ni clasifica; comienza sin patrón identificado y ofrece orientación de atención sanitaria ante señales graves |
| **Contenido educativo** | Explicar cuerpo, variabilidad, consentimiento, sesgo de atribución y anticoncepción | Sin determinismo hormonal ni diagnósticos; finaliza con una pregunta o acción propia |
| **Aprendizaje local, si se aprueba** | Afinar la estimación individual de ciclo a partir de fechas confirmadas y estudiar patrones consentidos fuera de la home | El aprendizaje del ciclo no convierte la home en una pantalla de estados personales. Los patrones de ADR-002 requieren una vista, control y decisión adicionales; no atribuyen causalidad, separan fuentes y limitan historial |

La especificación detallada del panel está en `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md`. La transparencia no se resuelve repitiendo un aviso largo en cada consulta: se obtiene informando antes del primer uso, ofreciendo una explicación permanente y accesible, conservando en el panel las señales compactas relevantes y mostrando advertencias completas cuando la estimación no sea válida o esté desactualizada. Las cuatro tarjetas del panel son contenido de orientación y no datos que se recopilen sobre la persona afectada.

## 6. Estimación de fases y límites científicos

La estimación utiliza el motor auditado, no ciclos fijos de 28 días. El producto no afirma que la fase lútea dure siempre catorce días, ni sitúa la ovulación en un día universal. Debe trabajar con rangos y mostrar la variabilidad individual como parte central de la experiencia. ADR-002 permite que las variables consentidas generen una asociación local probabilística, no una explicación universal ni un diagnóstico.

Cuando se active el cálculo conforme a ADR-001, el modelo podrá usar una media móvil de entre tres y seis ciclos pasados confirmados y una medida de dispersión individual para construir un rango. Si se confirma un nuevo inicio de sangrado, las estimaciones locales podrán reajustarse. El resultado debe conservar la incertidumbre, ampliar el margen cuando exista variación o desactualización y dejar de mostrarse cuando los datos sean demasiado antiguos.

| Tema | Tratamiento permitido en Consona |
|---|---|
| Dolor, calambres, apetito, sueño y cansancio | Educación general y, con consentimiento granular, variables locales de patrón no clínico |
| Ánimo, energía, concentración y fuerza | Educación y asociación local probabilística solo tras evidencia suficiente; no diagnóstico ni explicación determinista de la conducta |
| SPM y TDPM | Pantalla educativa sobre variabilidad, afectación funcional y límites del producto; no clasificación clínica |
| Deseo sexual, consentimiento sexual, límites y disponibilidad | Contenido independiente de consentimiento; nunca se registran, calculan, infieren ni comparten por fase |
| Anticoncepción | Pregunta y contenido prioritarios; métodos que suprimen ovulación no generan fases |

Las afirmaciones científicas antes de publicación deben someterse a una revisión de fuentes verificables. Las notas de actualización sirven como hipótesis de contenido y dirección de producto, no como validación clínica definitiva.

## 7. Arquitectura y privacidad por diseño

La aplicación cliente se distribuye como software estático y conserva los datos aprobados en almacenamiento local del navegador. `IndexedDB` puede ser la opción de implementación para datos estructurados; `localStorage` solo será aceptable para un prototipo que no contradiga las condiciones de ADR-001. La elección concreta no sustituye las obligaciones de control, borrado y pruebas de seguridad.

No se usarán frameworks o recursos que obliguen a cargar terceros en tiempo de ejecución. Si se aprueba una gráfica, podrá emplearse SVG o una biblioteca como Chart.js **empaquetada localmente**, sin CDN, sin llamada de red y sin telemetría. La aplicación tendrá una política de seguridad de contenido restrictiva, con `default-src 'self'` como punto de partida.

| Componente | Permitido | Prohibido |
|---|---|---|
| Cliente | HTML, CSS y JavaScript local; instalación offline si no compromete el modelo de datos | Backend de ciclos, autenticación de cuentas de ciclo y almacenamiento remoto |
| Servicio excepcional | Coordinación mínima de consentimiento y revocación, según ADR-001 | Recibir, derivar o registrar datos de ciclo, contenido, nombres, síntomas o anticoncepción |
| Dependencias | Recursos empaquetados y auditables | CDN, fuentes externas, píxeles, SDK de analítica, rastreadores o reportes remotos |
| Operación | Pruebas locales y revisión de red | Logs que contengan datos de ciclo, identificadores personales o contenido de uso |

## 8. Criterios de aceptación antes del piloto

Consona no pasa a piloto por completar pantallas. Debe demostrar que sus límites de producto son operativos y verificables.

| Criterio | Evidencia requerida |
|---|---|
| Acceso adulto | Flujo y textos de 18+ consistentes en las tres lenguas |
| Control de datos | Consentimiento directo, granular, revocación y borrado local diseñados y probados conforme a ADR-001 y ADR-002 |
| Minimización del servicio | Prueba de red, esquema de datos, retención y revisión que acrediten que no circulan datos de ciclo |
| Seguridad ante vigilancia | EIPD, modelo de amenazas y evaluación de violencia tecnológica completados |
| Estimación responsable | Motor auditado, pruebas de UTC, anticoncepción, rangos, margen, caducidad y mensajes no anticonceptivos; onboarding y “Cómo funciona” que expliquen el resultado antes del panel; inferencias de variables con fuente, muestra y nivel de incertidumbre fuera de la home |
| Panel limpio y transparente | Prueba de que el estado normal presenta fase, día, ventana, actualización y acceso a detalle sin descargos repetitivos, y de que los estados inválidos muestran una explicación completa |
| Contenido seguro | Revisión de las tres lenguas sin diagnóstico, determinismo, inferencia de consentimiento sexual, deseo sexual, límites o disponibilidad |
| Privacidad técnica | Sin recursos externos, telemetría, analítica, reportes remotos de errores ni logs sensibles |
| Borrado y offline | Pruebas de borrado, caché, claves, revocación recibida y dispositivo receptor sin conexión |

## 9. Fuentes internas

| Referencia | Material |
|---|---|
| [1] | `CONSONA_LINEA_BASE_Y_BACKLOG.md` — línea base y backlog vigente |
| [2] | `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md` — decisión del modelo E |
| [3] | `CONSOLIDACION_CYCLETELLER.md` — antecedentes de auditoría y materiales recuperados |
| [4] | `CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md` — aprendizaje local, pantalla SPM/TDPM y límites de personalización |
| [5] | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` — decisión de interfaz, transparencia progresiva y panel “Hoy” |
| [6] | Notas aportadas el 14, el 16 y el 17 de septiembre de 2026 — principios core, algoritmo, personalización y decisión de interfaz |
