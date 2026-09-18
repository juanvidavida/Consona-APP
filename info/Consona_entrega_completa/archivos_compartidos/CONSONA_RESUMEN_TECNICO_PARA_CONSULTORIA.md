# Consona — Resumen técnico para consultoría externa

**Destinatario:** consultoría externa de desarrollo  
**Preparado por:** Manus AI  
**Fecha de revisión:** 14 de septiembre de 2026  
**Propósito:** ofrecer una visión comprensible y verificable del estado técnico para orientar decisiones de arquitectura, seguridad, privacidad y desarrollo. Este documento no sustituye asesoramiento jurídico, clínico ni una Evaluación de Impacto relativa a la Protección de Datos (EIPD).

> **Actualización de alcance — 16 de septiembre de 2026.** La política anterior que impedía toda inferencia de ánimo, energía, concentración o síntomas por fase ha sido sustituida por ADR-002. Consona podrá implementar aprendizaje **local, probabilístico, explicable y revocable** sobre variables expresamente consentidas. Puede distinguir entre autoinforme de la persona afectada y observación de la pareja, pero nunca tratarlos como equivalentes. No puede diagnosticar SPM/TDPM ni inferir consentimiento sexual, deseo sexual, límites o disponibilidad. El servicio remoto de ADR-001 sigue sin poder recibir variables, síntomas ni inferencias.

> **Actualización de interfaz — 17 de septiembre de 2026.** El panel principal, denominado “Hoy”, usa el nombre directo de la fase en condiciones normales para evitar descargos repetitivos. La explicación de que el resultado es un cálculo local, con rango y no anticonceptivo se da antes del primer uso y queda disponible en “Cómo funciona”. La home no muestra síntomas, autoinformes, observaciones ni inferencias personales: presenta fase, ventana y cuatro tarjetas de orientación sobre conversación y acción propia.

## Resumen ejecutivo

**Consona** es una aplicación para personas adultas en una relación de pareja. Su propósito es explicar el ciclo menstrual de forma respetuosa y ayudar a abrir conversaciones; en una fase posterior, y solo con consentimiento verificable, podría mostrar una **estimación local** de fases y de posibles patrones individuales. No es una aplicación anticonceptiva, no diagnostica y no puede afirmar certeza ni inferir consentimiento sexual, deseo sexual, límites o disponibilidad de otra persona. [1]

El proyecto parte de un prototipo histórico llamado **Cycleteller**. Ese prototipo es una web sencilla que funciona dentro del navegador y calcula una estimación de fase a partir de unos pocos datos guardados en el propio navegador. Sin embargo, todavía **no es una versión lista para lanzar como Consona**: mantiene el nombre antiguo, su consentimiento es solo una confirmación marcada por quien usa la aplicación y no incorpora el nuevo sistema de revocación aprobado con condiciones. [2] [3]

> **Conclusión práctica.** Existe una base funcional útil para revisar y reutilizar, pero no hay una aplicación Consona desplegada ni un piloto preparado. El trabajo prioritario no es añadir pantallas: es definir y validar el diseño seguro de consentimiento, revocación, borrado local, alojamiento europeo y pruebas de privacidad.

## 1. Qué es el proyecto

Consona busca apoyar una conversación informada y empática sobre el ciclo menstrual dentro de una pareja. La aplicación enseña variabilidad del ciclo, límites de las estimaciones, anticoncepción y consentimiento, y evita presentar una fase como explicación automática del estado de ánimo, el deseo, la energía o la disponibilidad de una persona. [1]

El producto puede incluir una estimación de fase, pero debe expresarla como un rango con margen de error y fecha de actualización. El cálculo no puede usarse para evitar o buscar un embarazo, ni para tomar decisiones sobre intimidad. El piloto, cuando se autorice, será exclusivamente para personas de 18 años o más. [1] [3]

## 2. Fase actual: qué funciona y qué falta

El proyecto se encuentra en una fase de **preparación técnica y diseño de seguridad**, no de lanzamiento. Hay documentación de producto actualizada y un prototipo web histórico que puede ejecutarse y probarse. No existe todavía un código activo de Consona que implemente todas las decisiones vigentes, ni existe una versión desplegada para usuarios reales.

| Área | Situación actual | Nivel de preparación |
|---|---|---|
| Definición de producto | Existe una definición vigente de Consona con límites de privacidad, contenido y experiencia. | Preparada como guía de diseño. |
| Decisión de datos y consentimiento | Se aprobaron de forma condicionada el modelo E y ADR-002: datos de ciclo, variables e inferencias locales; servicio remoto mínimo para consentimiento/revocación sin esos datos. | Decisión de alto nivel tomada; diseño e implementación pendientes. |
| Pantalla SPM/TDPM y personalización | Se ha aprobado una pantalla educativa y aprendizaje local con datos consentidos, fuente visible e incertidumbre. | Diseño clínico, consentimiento granular, algoritmo y pruebas pendientes. |
| Prototipo de interfaz | Existe una interfaz web estática del proyecto histórico Cycleteller. Incluye introducción de datos, estimación, contenido educativo, edición y borrado local. La futura pantalla “Hoy” tiene ahora especificación funcional propia. | Funcional como prototipo; no apta para desplegar sin adaptación. |
| Motor de estimación | Existe un módulo JavaScript separado, con validaciones de fecha, incertidumbre, caducidad y tratamiento diferenciado de anticoncepción. | Funcional y probado en pruebas unitarias. |
| Pruebas | El 14 de septiembre de 2026 se ejecutaron **16 pruebas unitarias** del motor de cálculo: 16 superadas y 0 fallidas. Hay una prueba de interfaz preparada, pero depende de Playwright y no hay un sistema de dependencias instalado y fijado en el proyecto. | Pruebas de lógica básicas disponibles; cobertura de interfaz, privacidad y seguridad insuficiente. |
| Consentimiento actual | El prototipo solo pide a quien lo usa que marque una casilla afirmando que su pareja sabe del uso. | Insuficiente para el modelo vigente; debe sustituirse por consentimiento directo. |
| Revocación remota | No existe. | Diseño, protocolo, servicio y pruebas pendientes. |
| Borrado local | El prototipo ofrece un botón para borrar los dos registros que guarda en el navegador. | Existe una base, pero debe ampliarse y probarse para incluir datos derivados, claves y caché futura. |
| PWA y uso sin conexión | No hay Service Worker ni manifiesto de aplicación instalable en el código recuperado. El archivo HTML generado puede abrirse localmente, pero no es una PWA instalada. | Pendiente. |
| Despliegue y piloto | No hay hosting seleccionado, dominio, entorno de producción, CI/CD ni piloto. | No iniciado. |

### Qué hace el prototipo recuperado

El prototipo histórico tiene una puerta inicial de consentimiento declarativo, un cuestionario de anticoncepción, campos para fecha de última menstruación, duración habitual del ciclo y días de sangrado. Si el método anticonceptivo elegido puede suprimir la ovulación, no calcula fases y muestra contenido educativo alternativo. En los demás casos muestra una fase estimada con un margen de error, avisa cuando los datos son demasiado antiguos y permite eliminar los datos locales. [4]

Su cálculo evita una regla fija de 28 días. Trabaja con fechas en UTC —un estándar de fecha que evita errores de un día al cambiar la hora oficial—, valida fechas imposibles, usa un margen mínimo de incertidumbre y deja de mostrar una estimación cuando han pasado demasiados ciclos sin actualizar los datos. [4]

### Por qué el prototipo no está listo para lanzar

El prototipo continúa llamándose Cycleteller y no incorpora las decisiones más recientes de Consona. En particular, guarda una declaración de consentimiento local marcada por una sola persona, no permite que la persona afectada dé o retire el consentimiento directamente y no puede recibir una revocación. Tampoco implementa la edad mínima de 18 años, los tres idiomas previstos, el diseño definitivo de rangos individuales a partir de varios ciclos confirmados, el control de datos exigido por ADR-001 ni las verificaciones previas al piloto. [1] [2] [3]

## 3. Tecnologías actuales y tecnologías planteadas

La tecnología actual es deliberadamente simple. No se utiliza un framework de interfaz como React en el prototipo recuperado. Es una página web escrita directamente con HTML, CSS y JavaScript moderno; el navegador ejecuta la aplicación sin contactar con un servidor de aplicación.

| Tecnología | Uso actual | Situación y comentario |
|---|---|---|
| **HTML5** | Estructura de la pantalla y formularios. | En uso en `src/index.html`. |
| **CSS3** | Diseño visual, colores, composición responsive y temas claro/oscuro. | En uso en `src/css/`. |
| **JavaScript ES6+** | Lógica de pantalla, almacenamiento y cálculo de fases. | En uso en `src/js/` y `data/`. No usa TypeScript. |
| **Node.js** | Ejecutar pruebas y generar el archivo final de distribución. | En uso solo para desarrollo local. |
| **esbuild 0.24.0** | Empaqueta JavaScript en un único HTML de distribución. | Se invoca mediante `npx`; no existe `package.json` ni fichero de bloqueo, por lo que la instalación no es todavía reproducible. |
| **Playwright** | Prueba automatizada de interfaz en un navegador real. | Hay un test preparado, pero Playwright no está incluido ni fijado como dependencia del proyecto. |
| **localStorage** | Almacenamiento local del prototipo. | En uso ahora; no cifra los datos por sí mismo. |
| **IndexedDB** | Alternativa de almacenamiento local más adecuada para datos estructurados. | Solo planteada para una futura implementación; no está en el código recuperado. |
| **Service Worker / PWA** | Instalar la app y funcionar sin conexión. | Planteado en las notas, pero no implementado en el prototipo. |
| **SVG o Chart.js empaquetado localmente** | Posible visualización futura. | No implementado. Si se utiliza una biblioteca, debe incluirse dentro de la aplicación, nunca cargarse desde una red externa. |

Existe también una exportación documental de una aplicación Manus anterior que describía React, TypeScript, Vite, Tailwind, tRPC, Drizzle ORM, MySQL/TiDB y autenticación. **No es la tecnología activa de Consona ni debe reutilizarse como arquitectura de datos**: esa exportación describe un modelo con cuentas y base de datos remota incompatible con la regla vigente para datos de ciclo. Puede servir solo como referencia visual o de navegación, si se decide reutilizar algo. [3]

## 4. Dónde se guardan los datos

### Situación del prototipo existente

En el prototipo recuperado, los datos se guardan en `localStorage`, un espacio de almacenamiento del propio navegador. No se encuentra una base de datos, una API, una llamada de red desde la aplicación ni un servicio de terceros que reciba esos datos. La inspección del código recuperado no encontró llamadas técnicas de red habituales, como `fetch`, `XMLHttpRequest`, WebSocket o envío de telemetría. [4]

El prototipo guarda bajo dos claves locales: `cycleteller.v2` y `cycleteller.theme`. La primera puede contener la confirmación local de consentimiento, la fecha en que se marcó, el método anticonceptivo, la fecha de última menstruación, la duración de ciclo, los días de sangrado y el estado del onboarding. La segunda guarda solo la preferencia de tema visual. El botón de borrado elimina ambas claves. [4]

> **Riesgo a revisar.** `localStorage` es almacenamiento local, pero no es una caja fuerte: no cifra los valores por defecto y normalmente está disponible para cualquier código que se ejecute dentro del mismo sitio web. La futura implementación debe decidir si `IndexedDB`, cifrado local, separación de claves u otras medidas resultan necesarias, siempre sin sacar los datos del dispositivo.

### Arquitectura aprobada para Consona

La regla permanente es que las fechas de ciclo, duraciones, fases, síntomas, anticoncepción, notas y cualquier dato derivado permanezcan solo en el dispositivo que los conserva. Están prohibidos un servidor de ciclos, una base de datos remota, cuentas que persistan datos de ciclo, sincronización, copias de seguridad, analítica, telemetría e informes remotos de errores que los contengan. [1] [2]

La única excepción aprobada de manera condicionada es el **modelo E**. En el futuro puede existir un servicio remoto mínimo para permitir consentimiento y revocación entre dispositivos. Ese servicio solo podría procesar un identificador pseudónimo temporal o renovable, el vínculo técnico entre dispositivos, el estado de consentimiento y una solicitud genérica de revocación. No puede recibir, deducir, guardar ni registrar ninguna fecha, fase, síntoma, anticoncepción, nombre, nota o contenido de ciclo. El servicio no existe todavía; no se ha elegido proveedor, tecnología, región ni contrato. [2]

| Tipo de información | Ubicación actual | Ubicación prevista | ¿Puede salir a un servicio remoto? |
|---|---|---|---|
| Fechas de ciclo, duración, sangrado y fase | `localStorage` del navegador en el prototipo | Almacenamiento local del dispositivo, por concretar | **No.** |
| Anticoncepción | `localStorage` del navegador en el prototipo | Almacenamiento local del dispositivo, si el flujo se aprueba | **No.** |
| Variables físicas, emocionales y cognitivas | No se guardan en el prototipo funcional revisado | Podrán guardarse solo en local, por categorías cerradas, con consentimiento granular y fuente separada | **No.** |
| Deseo sexual, consentimiento sexual, límites o disponibilidad | No se guardan en el prototipo funcional revisado | No se deben registrar, inferir ni compartir | **No.** |
| Preferencia de tema | `localStorage` del navegador | Almacenamiento local | No es necesario. |
| Identificador técnico de coordinación | No existe | Solo si se desarrolla el modelo E | Sí, con límites estrictos y sin datos de ciclo. |
| Estado de consentimiento y revocación | Confirmación declarativa local en el prototipo | Modelo E pendiente de diseñar | Sí, solo como metadato mínimo y pseudónimo. |

## 5. Servicios externos actuales y previstos

No hay servicios externos conectados al prototipo ni conectores activos del proyecto. En particular, no hay hosting contratado o configurado, base de datos, autenticación, analítica, envío de correos, CRM, herramienta de errores, CDN, fuente externa, mapa, chatbot, pasarela de pago ni API de terceros.

| Servicio o categoría | Situación actual | Requisito o límite futuro |
|---|---|---|
| Hosting | No seleccionado ni configurado. | La aplicación cliente debe poder distribuirse como sitio estático. El proveedor y su región deben ser revisados antes de desplegar. |
| Base de datos remota de ciclo | No existe. | Prohibida. |
| Servicio de consentimiento/revocación | No existe. | Posible solo bajo modelo E, con datos mínimos, sin ciclos, sin logs sensibles y sujeto a revisión jurídica y de seguridad. |
| Analítica, telemetría y píxeles | Desactivados y sin endpoint en el prototipo. | Prohibidos para el piloto salvo una decisión futura expresa que no contradiga la regla de ausencia de datos sensibles. |
| Envío de emails | No existe. | No se ha decidido; no debe introducirse por defecto para el flujo de consentimiento. |
| Autenticación o cuentas | No existe en el prototipo. | Las cuentas que persistan datos de ciclo están prohibidas. El emparejamiento del modelo E debe evitar nombres, correo, teléfono y cuentas convencionales. |
| CDN, fuentes e iconos remotos | No se usan en el prototipo inspeccionado. | Prohibidos. Las dependencias deben empaquetarse y servirse localmente. |
| Herramienta de errores | No existe. | Prohibidos los informes remotos que contengan datos personales, de ciclo o contenido de uso. |

Durante el desarrollo, el script de empaquetado descarga temporalmente `esbuild` mediante `npx` si no está instalado. Eso es una descarga de herramienta para el equipo de desarrollo, no una comunicación de datos de una persona usuaria; aun así, el consultor debería sustituir este mecanismo por dependencias fijadas y verificadas para obtener compilaciones reproducibles.

## 6. Requisito de Europa y RGPD

**Estado actual:** la aplicación recuperada no envía datos de ciclo a ninguna parte porque no tiene llamadas de red ni servicio remoto. Por tanto, en la inspección realizada no se identificó un componente operativo que esté enviando datos de salud fuera de Europa. [4]

Sin embargo, no hay todavía hosting, proveedor de servicio de revocación, contrato de tratamiento, configuración de logs ni documentación de ubicación geográfica. Por ello, todavía **no se puede afirmar que una futura versión desplegada cumpla el requisito europeo**: no existe una infraestructura que auditar. La conformidad deberá verificarse antes del piloto, no asumirse por la naturaleza estática de la aplicación.

| Elemento | Evaluación actual respecto a Europa | Acción necesaria antes de piloto |
|---|---|---|
| Datos de ciclo locales | No salen del navegador en el prototipo inspeccionado. | Mantener arquitectura local y comprobar que no existan rutas de salida en producción. |
| Hosting estático | No existe proveedor elegido. | Seleccionar una opción con ubicación y condiciones de tratamiento compatibles con la UE, y revisar registros de acceso, CDN y subprocesadores. |
| Servicio modelo E | No existe. | Elegir una arquitectura que procese solo metadatos autorizados en infraestructura europea, con retención mínima, controles de logs y revisión jurídica. |
| Analítica y error tracking | No están presentes. | Mantenerlos ausentes; revisar dependencias para confirmar que ninguna añade telemetría oculta. |
| Desarrollo y compilación | `npx` puede descargar una herramienta de construcción. | Fijar dependencias y separar claramente herramientas de desarrollo de la aplicación que usan las personas usuarias. |

La obligación de residencia europea debe aplicarse no solo a una futura base de datos —que está prohibida para los datos de ciclo— sino también al proveedor de hosting, al posible servicio de consentimiento/revocación, a los registros técnicos y a cualquier subprocesador. La EIPD y la revisión jurídica siguen siendo condiciones obligatorias previas al piloto. [2] [3]

## 7. Archivos y carpetas: qué es código funcional y qué es documentación

En la carpeta compartida del proyecto no hay un repositorio de código desplegado. El código funcional está comprimido en `cycleteller-traspaso.zip`, un archivo histórico recuperado. Al extraerlo, la carpeta principal se llama `cycleteller/`. Esto es importante: para desarrollar Consona de forma normal, el consultor debería crear una estructura de código activa y controlada con Git, en vez de trabajar directamente dentro de un archivo comprimido.

### Código funcional dentro de `cycleteller-traspaso.zip`

| Ruta dentro del archivo comprimido | Qué contiene | Estado |
|---|---|---|
| `cycleteller/src/index.html` | Página principal, textos estructurales y formularios. | Código funcional histórico. |
| `cycleteller/src/css/tokens.css` | Variables de color, tipografía y diseño. | Código funcional histórico. |
| `cycleteller/src/css/app.css` | Estilos visuales y responsive. | Código funcional histórico. |
| `cycleteller/src/js/main.js` | Control de interfaz: pantallas, formularios, borrado y renderizado. | Código funcional histórico; requiere adaptación para Consona. |
| `cycleteller/src/js/cycle.js` | Motor de estimación de fases, validación y margen de incertidumbre. | Código funcional reutilizable sujeto a la definición vigente y revisión. |
| `cycleteller/src/js/storage.js` | Lectura, escritura y borrado en `localStorage`. | Código funcional histórico; debe rediseñarse para el modelo final. |
| `cycleteller/src/js/config.js` | Interruptores de configuración del prototipo. | Código funcional histórico; contiene decisiones ya superadas o pendientes. |
| `cycleteller/data/content.v1.js` | Contenido educativo original. | Material histórico; no recomendado. |
| `cycleteller/data/content.v2.js` | Contenido educativo revisado que usa el prototipo. | Material de contenido activo en el prototipo; pendiente de aprobación y revisión completa para Consona. |
| `cycleteller/scripts/build.mjs` | Script que genera un HTML único para compartir o abrir localmente. | Código funcional de desarrollo. |
| `cycleteller/dist/cycleteller.html` | Archivo HTML ya generado, con CSS y JavaScript incluidos. | Demostración funcional histórica; no editar a mano. |
| `cycleteller/tests/cycle.test.mjs` | 16 pruebas automáticas del motor de cálculo. | Funcional; ejecutadas con éxito el 14 de septiembre de 2026. |
| `cycleteller/tests/smoke.mjs` | Prueba de la interfaz mediante navegador. | Preparada; requiere instalar y fijar Playwright. |

### Documentación y contenido no ejecutable

| Ruta o archivo | Contenido | Papel en el proyecto |
|---|---|---|
| `CONSONA_DEFINICION_DE_APP.md` | Definición actual de producto, experiencia y límites. | Documento vigente de producto. |
| `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md` | Decisión vinculante y condiciones del modelo E. | Documento vigente de arquitectura y privacidad. |
| `CONSONA_LINEA_BASE_Y_BACKLOG.md` | Prioridades, decisiones y tareas pendientes. | Backlog vigente. |
| `CONSOLIDACION_CYCLETELLER.md` | Consolidación anterior de auditoría y contexto. | Referencia histórica; subordinada a los documentos Consona vigentes. |
| `Cycleteller-CompleteProjectExport.md` | Exportación textual de una aplicación Manus antigua. | Referencia documental; no es un proyecto ejecutable. |
| `cycleteller-backlog.md` | Backlog histórico. | Referencia; sustituido por el backlog Consona. |
| `cycleteller/docs/` dentro del archivo comprimido | ADR históricos, revisión de contenido, ciencia, RGPD, backlog y riesgos. | Material de contexto y auditoría; ADR-001 histórico ha sido sustituido por el ADR Consona. |
| `cycleteller/README.md` y `cycleteller/HANDOFF.md` | Instrucciones y resumen del proyecto histórico. | Documentación histórica. |

## 8. Decisiones técnicas que requieren opinión del consultor

Las decisiones siguientes están abiertas o requieren una especificación técnica antes de programar el seguimiento personalizado. Todas tienen impacto en privacidad, seguridad o viabilidad de producto.

| Prioridad | Decisión a tomar | Pregunta para el consultor | Resultado esperado |
|---|---|---|---|
| Crítica | Protocolo del modelo E | ¿Cómo emparejar dos dispositivos y obtener consentimiento directo sin cuentas, email, teléfono, nombre, fingerprint ni datos de ciclo? | Diseño técnico de emparejamiento con identificadores pseudónimos rotables. |
| Crítica | Revocación y dispositivo sin conexión | ¿Cómo se entrega una revocación, se bloquea el acceso y se borra localmente cuando el receptor está sin red, apagado, desinstalado o recibe el mensaje tarde? | Modelo de estados, límites comunicados con honestidad, pruebas y medidas de reducción de riesgo. |
| Crítica | Servicio mínimo y datos permitidos | ¿Qué API, base temporal o mecanismo de mensajería permite guardar solo los cuatro metadatos autorizados, con retención mínima y sin logs sensibles? | Especificación de campos, retención, borrado, registros seguros y pruebas de no exfiltración. |
| Crítica | Consentimiento granular de personalización | ¿Cómo permitir que la persona afectada autorice por separado categorías, autoinforme y observaciones de la pareja, y retire cada permiso? | Modelo de permisos local, interfaz de revisión, revocación y pruebas de borrado derivado. |
| Crítica | Algoritmo de aprendizaje local | ¿Qué umbrales, comparaciones y métricas permiten mostrar una asociación sin diagnosticar ni provocar falsos positivos? | Algoritmo explicable con mínimo de tres ciclos, cobertura, fuente separada, incertidumbre y estado «sin patrón identificado». |
| Crítica | Seguridad y abuso tecnológico | ¿Qué amenazas existen —suplantación, emparejamiento coercitivo, reenvío, acceso persistente, dispositivo comprometido— y cómo se reducen? | Modelo de amenazas, controles técnicos y casos de prueba. |
| Crítica | Alojamiento europeo | ¿Qué proveedor, región, configuración de registros y contrato permiten servir el cliente y el posible servicio E dentro de la UE? | Arquitectura de despliegue, DPA si aplica y evidencia de residencia europea. |
| Alta | Almacenamiento local | ¿Se mantiene `localStorage` o se migra a `IndexedDB`? ¿Hace falta cifrado local y cómo se gestiona sin crear una cuenta ni copia de seguridad? | Decisión técnica documentada, modelo de datos local y borrado verificable. |
| Alta | Borrado completo | ¿Qué elementos deben borrarse: datos, cálculos derivados, claves, caché, Service Worker, almacenamiento local y estado de interfaz? | Rutina de borrado y pruebas manuales/automáticas. |
| Alta | Arquitectura de cliente | ¿Se conserva JavaScript sin framework o se adopta una herramienta moderna manteniendo compilación local y sin recursos de terceros en ejecución? | Stack de cliente simple, mantenible, accesible y compatible con las restricciones. |
| Alta | Implementación del panel “Hoy” | ¿Cómo se implementan la transparencia progresiva, la ventana, los estados de caducidad y el acceso accesible a “Cómo funciona” sin descargos repetitivos? | Componentes de interfaz, pruebas de comprensión y estados explícitos de datos insuficientes, antiguos, anticoncepción y consentimiento no vigente. |
| Alta | Reproducibilidad y calidad | ¿Cómo crear repositorio Git, `package.json`, bloqueo de versiones, compilación reproducible, pruebas de navegador y automatización de calidad? | Base de desarrollo repetible y procedimiento de entrega. |
| Media | PWA y modo offline | ¿Es conveniente una instalación PWA? Si lo es, ¿cómo se gestionan cachés y borrado sin dificultar la revocación? | Decisión sobre Service Worker, manifiesto y estrategia de caché. |
| Media | Visualización de patrón | ¿Puede diseñarse una gráfica local limitada sin generar un expediente de vigilancia o sugerir causalidad? | Decisión de producto/seguridad; si se aprueba, SVG o biblioteca empaquetada localmente. |
| Media | Idiomas y accesibilidad | ¿Cómo estructurar ES, CA y EN, y cómo probar comprensión, contraste, teclado y lector de pantalla? | Plan de internacionalización y accesibilidad. |

## Recomendación de primer encargo técnico

El primer encargo aconsejable para la consultoría es una **propuesta de arquitectura y modelo de amenazas**, no la construcción directa de un calendario. Debería cubrir el modelo E, los límites de datos, el consentimiento directo, la revocación sin conexión, el borrado, la residencia europea, los logs y los criterios de prueba. Después de esa propuesta, deben realizarse la revisión jurídica, la EIPD y la evaluación de violencia tecnológica antes de iniciar un piloto. [2] [3]

En paralelo, se recomienda convertir el contenido del archivo histórico en un repositorio de desarrollo normal, añadir dependencias fijadas y ejecutar la prueba de interfaz. El motor de cálculo puede conservarse como módulo independiente, pero la interfaz, el consentimiento y el almacenamiento deben reevaluarse frente a las decisiones actuales de Consona.

## Material recomendado para entregar al consultor

1. Este resumen técnico.
2. `CONSONA_DEFINICION_DE_APP.md`.
3. `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md`.
4. `CONSONA_LINEA_BASE_Y_BACKLOG.md`.
5. `cycleteller-traspaso.zip`, dejando claro que es una base histórica y no una versión autorizada para lanzamiento.

## Referencias

[1]: ./CONSONA_DEFINICION_DE_APP.md "Consona — Definición de aplicación"
[2]: ./CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md "Consona — ADR-001: Titularidad, control local, consentimiento y revocación"
[3]: ./CONSONA_LINEA_BASE_Y_BACKLOG.md "Consona — Línea base de desarrollo y backlog unificado"
[4]: ./cycleteller-traspaso.zip "Cycleteller — prototipo histórico, código y documentación recuperados"
