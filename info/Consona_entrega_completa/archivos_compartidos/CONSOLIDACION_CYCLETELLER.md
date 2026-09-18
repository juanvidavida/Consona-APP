# Consolidación histórica de Cycleteller

**Proyecto:** CONSONA APP  
**Fecha de consolidación original:** 7 de septiembre de 2026  
**Estado de vigencia:** Contexto histórico. Actualizado con una nota de sustitución el 14 de septiembre de 2026.  
**Fuentes integradas:** paquete `cycleteller-traspaso.zip`, `Cycleteller_Revision_Completa.pdf`, `notastraspaso.pdf` y `cycleteller.html`.

> **Prevalencia.** Las decisiones vigentes de Consona se encuentran en `CONSONA_LINEA_BASE_Y_BACKLOG.md`, `CONSONA_DEFINICION_DE_APP.md` y `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md`. Este documento registra la consolidación anterior y no debe usarse para revertir decisiones posteriores.

> **Regla de datos vigente.** Los datos del ciclo permanecen exclusivamente en el dispositivo que los conserva. La única excepción autorizada es el servicio mínimo de consentimiento y revocación del modelo E, que solo puede procesar los metadatos descritos en el ADR vigente y nunca datos de ciclo. Se prohíben el resto de servidores de datos, bases de datos remotas, sincronización, copias de seguridad remotas, analítica, telemetría, informes remotos de errores y logs sensibles.

> Este documento consolida el estado del proyecto a su fecha original y no sustituye una revisión jurídica, clínica o científica profesional. Las afirmaciones legales y médicas deben validarse antes de cualquier lanzamiento.

## 1. Resumen ejecutivo

Cycleteller es una aplicación web educativa en español dirigida inicialmente a hombres que desean comprender mejor el ciclo menstrual de su pareja y acompañarla con más empatía. La oportunidad de producto está respaldada por una necesidad educativa real: la revisión citada en el paquete indica que el 56% de las personas encuestadas en España obtiene una puntuación de 5 o menos sobre 10 en conocimiento menstrual. El proyecto, por tanto, no necesita abandonar su objetivo; necesita cambiar el mecanismo para evitar convertir una estimación fisiológica en una interpretación sobre el estado interior de otra persona.

La auditoría identificó ocho problemas principales. El cálculo de fases podía equivocarse hasta 14 días en ciclos largos; el contenido sobre ánimo presentaba como normal un patrón que no aparece de forma generalizada y podía reforzar el sesgo que describía; el modelo actual permite que él introduzca datos de salud de ella sin su participación; la variable de intimidad sexual tenía riesgo de coerción; faltaba preguntar por anticoncepción; se cargaban fuentes externas; existía un error de fechas ligado al cambio horario; y la interfaz comunicaba una precisión excesiva al mostrar el día exacto del ciclo. Los problemas técnicos y de contenido están corregidos en la versión entregada. El modelo de datos y la edad mínima siguen pendientes de decisión.

La decisión bloqueante es **ADR-001: quién puede introducir, controlar, corregir y borrar los datos del ciclo**. La recomendación consolidada es elegir el modelo A —educación sin almacenar datos de ella— o, si se considera imprescindible conservar un calendario, el modelo B —ella participa desde su propia cuenta—. El modelo actual D, en el que él introduce datos y ella no participa, debe considerarse una mitigación temporal y no una solución cerrada.

## 2. Inventario de fuentes y relación entre ellas

| Fuente | Función en la consolidación | Estado |
|---|---|---|
| `cycleteller-traspaso.zip` | Código fuente, documentación interna, tests y configuración del producto | Fuente técnica principal |
| `Cycleteller_Revision_Completa.pdf` | Auditoría científica, legal, de mercado y de código | Fuente de revisión global |
| `notastraspaso.pdf` | Resumen operativo del traspaso desde Claude y hallazgos más importantes | Fuente de contexto y prioridades |
| `cycleteller.html` | Distribución compilada de la aplicación | Verificada contra `dist/cycleteller.html` |

El HTML recibido coincide byte a byte con la distribución compilada del proyecto. Ambos archivos tienen el mismo SHA-256: `9d70d47e6e60ffd12f0c39ee40e2625fcea506d740d07d214376c20fc8e2ae15`.

## 3. Estado actual del producto

La aplicación funciona como una web estática sin dependencias en tiempo de ejecución. La distribución compilada puede abrirse directamente en un navegador. La versión modular de `src/` necesita un servidor local porque utiliza módulos JavaScript. El motor de cálculo tiene 16 tests unitarios, todos superados, y la prueba de humo de navegador superó sus 17 comprobaciones cuando se ejecutó con Playwright y Chromium.

La arquitectura separa deliberadamente tres responsabilidades. `src/js/cycle.js` contiene el cálculo puro y testeable; `data/content.v2.js` contiene el texto que ve el usuario; y `src/js/main.js` se ocupa de la interfaz. `src/js/config.js` concentra los interruptores de producto y las decisiones que aún pueden cambiarse de forma controlada.

| Área | Implementación consolidada | Estado |
|---|---|---|
| Cálculo de fases | Ovulación calculada hacia atrás desde la siguiente regla, en una ventana de 10 a 16 días antes | Implementado y testeado |
| Fechas | Conversión a calendario UTC y rechazo de fechas imposibles | Implementado y testeado |
| Anticoncepción | Pregunta durante el onboarding; métodos que suprimen ovulación no generan fases y muestran contenido alternativo | Implementado |
| Incertidumbre | Margen mínimo de ±2 días, fases alternativas cuando corresponde y caducidad tras varios ciclos sin actualizar | Implementado |
| Contenido | Set v2 activo: cuerpo, pregunta, responsabilidad propia y qué no asumir | Implementado |
| Intimidad sexual | Eliminada como variable indexada por fase; el deseo se pregunta, no se calcula | Implementado |
| Consentimiento | Puerta bloqueante antes de guardar datos, con casilla no premarcada | Implementado como mitigación |
| Almacenamiento | `localStorage`; sin servidor, cuenta de pareja, sincronización ni backup | Implementado |
| Telemetría | Desactivada por defecto | Implementado |
| Perfiles | Un único perfil | Implementado como restricción |
| Borrado | Borrado total desde la aplicación | Implementado |
| Recursos externos | Fuentes, CDN, iconos y analítica de terceros eliminados | Implementado |

## 4. Decisiones de producto consolidadas

### 4.1. Decisión bloqueante: titularidad y participación en los datos

La fecha de la regla, la duración del ciclo y la fase calculada pueden constituir datos relativos a la salud. El diseño actual permite que él introduzca datos sobre ella, aunque ella no tenga cuenta, no pueda verlos directamente, corregirlos ni borrarlos por sí misma. Una casilla de confirmación mejora el comportamiento del usuario, pero no convierte por sí sola esa situación en consentimiento válido de la persona interesada.

| Opción | Modelo | Evaluación consolidada |
|---|---|---|
| A | Solo educación, sin datos de ella | Opción más defendible; elimina gran parte del riesgo legal, de vigilancia e inexactitud, pero obliga a replantear el calendario personalizado |
| B | Ella invita desde su propia cuenta | Compatible con el patrón de la industria y con control de la interesada; contradice el requisito inicial de que solo él tenga cuenta |
| C | Ella introduce sus datos en el móvil de él | Reduce la entrada sin permiso, pero no resuelve adecuadamente la revocación, el acceso ni el borrado independiente |
| D | Él introduce los datos y ella no participa | Modelo actual; debe tratarse como no resuelto y no como decisión final |

La elección de A o B debe preceder a nuevas funcionalidades, a una revisión legal definitiva, a la arquitectura de cuentas y a cualquier calendario persistente. Si el producto mantiene el cálculo de fase, debe describirse honestamente como una **estimación**; si quiere sostener literalmente que no realiza predicción, debe eliminar ese cálculo.

### 4.2. Variables de la pantalla inicial

El conjunto v1 preguntaba indirectamente cómo estaba ella: intensidad emocional, límites, estilo de intimidad y prioridad de descanso. El conjunto v2 cambia el eje a qué puede hacer él sin atribuirle un estado interno: **Qué pasa en su cuerpo**, **Qué puedes preguntarle**, **Qué te toca a ti** y **Qué no asumir**.

La regla de diseño resultante es:

> Cada pantalla debería terminar en una pregunta que él le hace a ella, no en una conclusión sobre ella.

El set v2 ya está activo en `config.js` mediante `contentSet: 'v2'`. La decisión formal de aceptarlo aún aparece como pendiente en el backlog. La recomendación es aceptarlo, revisar el contenido de Capa 2 con el mismo criterio y conservar especialmente la tarjeta **Qué no asumir**, que funciona como defensa contra el sesgo de atribuir cualquier emoción a la menstruación.

### 4.3. Edad mínima

El proyecto debe decidir si mantiene el público desde los 16 años o adopta una limitación de 18 años. La presencia de menores cambia el tono de la privacidad, la evaluación de riesgos, el diseño de la variable de intimidad y la necesidad de revisar el producto desde la perspectiva de seguridad en relaciones. Si se mantiene una edad mínima de 16, el proyecto debe usar lenguaje de privacidad comprensible, minimizar la información recogida y completar una revisión específica de abuso tecnológico y violencia de pareja.

## 5. Evidencia científica y límites que deben conservarse

El cálculo antiguo asignaba días fijos a las fases: menstruación 1–5, folicular 6–13, ovulatoria 14–16 y lútea desde el día 17. Ese modelo solo se aproxima a un ciclo de 28 días. La corrección actual calcula la ventana ovulatoria como `[duración del ciclo − 16, duración del ciclo − 10]`, de modo que la fase folicular absorbe la mayor parte de la variación y la fase lútea permanece aproximadamente entre 9 y 11 días en los rangos admitidos.

El contenido sobre ánimo no debe afirmar que una persona estará irritable, ansiosa, triste, más receptiva o menos receptiva por encontrarse en una fase concreta. La revisión integrada resume una revisión prospectiva de 47 estudios en la que el patrón premenstrual clásico aparece solo en una minoría y una parte relevante de los estudios no encuentra asociación clara. La aplicación debe hablar de variabilidad individual, hacer preguntas abiertas y evitar que el calendario sustituya a la conversación.

La anticoncepción hormonal requiere una vía de contenido diferente. Píldora, anillo, parche e implante pueden suprimir la ovulación; el sangrado durante una pausa hormonal no debe tratarse automáticamente como una menstruación que marque el día 1. El DIU hormonal merece un mensaje más matizado porque muchas usuarias continúan ovulando, aunque el sangrado puede dejar de ser una referencia fiable.

La aplicación tampoco debe presentarse como método anticonceptivo. El contenido activo lo expresa de forma explícita: el momento exacto de la ovulación no puede determinarse con un calendario y la ventana fértil no debe inferirse con precisión suficiente para evitar un embarazo.

## 6. Privacidad, seguridad y RGPD: estado consolidado

El análisis interno considera los datos del ciclo como datos de salud porque de ellos se extraen conclusiones sobre el estado fisiológico, aunque la conclusión sea incierta. También distingue entre la posible exención doméstica del usuario y la responsabilidad del desarrollador que proporciona los medios para tratar esos datos. Mantener la información en el navegador reduce la exposición y elimina el tratamiento de esos datos en servidores propios, pero no resuelve por sí solo la cuestión de diseño ni todas las obligaciones de transparencia, seguridad y privacidad desde el diseño.

| Requisito | Estado actual | Acción necesaria |
|---|---|---|
| Datos del ciclo locales | Implementado | Mantener sin sincronización, backup, cuenta de pareja ni soporte que acceda a ellos |
| Recursos externos | Implementado | Mantener la política de cero CDN, fuentes externas, iconos externos y píxeles |
| Telemetría | Desactivada | No activarla hasta documentar base legal, minimización y tratamiento de IP/logs |
| Puerta de consentimiento | Implementada | Presentarla como mitigación, no como sustituto de la decisión ADR-001 |
| Borrado total | Implementado | Documentar qué se borra y qué ocurre al limpiar la caché |
| Transparencia localStorage | Pendiente | Explicar que los datos quedan en el navegador y se pierden al borrar datos locales |
| Política de privacidad | Pendiente | Redactar una política específica, clara y apta para la edad elegida |
| Aviso para la pareja | Pendiente | Crear un documento descargable sobre datos guardados, ubicación y borrado |
| Registro de Actividades de Tratamiento | Pendiente | Prepararlo con asesoramiento profesional |
| EIPD | Pendiente | Recomendada aunque la arquitectura local reduzca el alcance; necesaria si los datos llegan al servidor |
| CSP | Pendiente | Configurar `default-src 'self'` en el hosting |
| Subencargados y backups | Pendiente si se usa backend | Verificar proveedor, regiones específicas, logs, backups y DPA |
| Procedimiento de brecha | Pendiente | Publicar contacto y procedimiento de privacidad |

No debe añadirse compartir, exportar, sincronizar, historial largo ni gráficos retrospectivos sin rehacer el análisis de privacidad y seguridad. Estas funciones aumentarían el valor de la app para un usuario legítimo, pero también su utilidad para vigilancia o construcción de un expediente sobre otra persona.

## 7. Riesgos de diseño y posicionamiento

El riesgo principal no es solo que una fase se calcule mal, sino que una interfaz convierta una estimación en una explicación automática del comportamiento de otra persona. La regla de seguridad es no atribuir emociones, límites, deseo sexual, disponibilidad o disposición a una fase. El producto debe orientar a preguntar, escuchar y asumir responsabilidades propias.

La variable de intimidad sexual se ha eliminado correctamente. La sustitución debe mantenerse como contenido de consentimiento y anticoncepción no indexado por fase. En particular, nunca debe reaparecer una indicación de “receptividad”, ni siquiera como una opción oculta o experimental.

La competencia reciente del sector parece diferenciarse explícitamente por consentimiento y control de la persona cuyos datos se tratan. Por eso, el modelo sin participación de ella no debería presentarse como ventaja competitiva. El posicionamiento más sólido es educación, conversación y acompañamiento responsable; el calendario personalizado solo debe conservarse si el modelo de datos elegido lo justifica.

## 8. Hoja de ruta priorizada

### Bloque 0 — Decisiones del producto, antes de nuevo código

1. Resolver ADR-001: A, B, C o D.
2. Confirmar formalmente el set v2.
3. Elegir edad mínima: 16 o 18.
4. Decidir si se mantiene el lenguaje “no es predicción”; si se mantiene, eliminar el cálculo de fase.

### Bloque 1 — Legal y seguridad

Realizar revisión jurídica profesional con `docs/05-rgpd.md` como material de trabajo. Redactar política de privacidad, aviso descargable para la pareja, registro de actividades y procedimiento de borrado y brecha. Realizar una EIPD, especialmente si se elige un modelo con cuentas o si cualquier dato del ciclo llega a servidor. Hacer una revisión de seguridad orientada a violencia de pareja con una entidad especializada antes de un lanzamiento público.

### Bloque 2 — Contenido

Revisar Capa 2 con lenguaje probabilístico y sin predicciones sobre el interior de ella. Completar el módulo de consentimiento sexual, el módulo de sesgo de atribución, el contenido para anticoncepción hormonal y las señales de derivación médica para ciclos persistentemente fuera de rango, dolor incapacitante o ausencia de regla. Estas señales deben redactarse como orientación para consultar a profesionales, no como diagnóstico.

### Bloque 3 — Producto

Completar el onboarding, integrar los módulos educativos y replantear el calendario. Un calendario con desplazamiento infinito o predicciones históricas puede contradecir la decisión de no construir expedientes. Cualquier calendario debe limitar el historial y explicar la incertidumbre.

### Bloque 4 — Infraestructura

Elegir hosting con residencia de datos compatible con el requisito del proyecto, configurar CSP restrictiva y no incorporar backend mientras no sea necesario. Si algún día se activa telemetría o almacenamiento remoto, elegir región UE específica, revisar subencargados, firmar DPA y garantizar que ningún evento contenga fecha, duración, fase, método anticonceptivo o derivados.

## 9. Configuración y dependencias de ejecución

La aplicación se ejecuta actualmente sin dependencias de runtime. Para desarrollo, el proyecto no contiene `package.json` ni lockfile. El build invoca `npx esbuild@0.24.0`, por lo que puede descargar la herramienta durante el proceso. La prueba de humo requiere Playwright y Chromium; Chromium está disponible en este entorno, pero Playwright no forma parte del proyecto original. Conviene añadir ambos como dependencias de desarrollo y generar un lockfile antes de establecer un flujo reproducible.

Comandos operativos actuales:

```bash
cd /home/ubuntu/projects/consona-app-75757031/cycleteller
node tests/cycle.test.mjs
node scripts/build.mjs
python3 -m http.server 8000
# abrir http://localhost:8000/src/
```

La distribución para revisión rápida es `dist/cycleteller.html`, que puede abrirse directamente.

## 10. Conclusión de la consolidación

El proyecto tiene una base técnica funcional y una dirección de contenido significativamente más segura que el prototipo original. Las correcciones más importantes —cálculo de fases, fechas, anticoncepción, incertidumbre, eliminación de intimidad sexual, eliminación de recursos externos, consentimiento inicial y borrado local— están implementadas y verificadas.

No obstante, el proyecto no debe avanzar hacia un piloto o una ampliación de funcionalidades como si estuviera completamente decidido. La titularidad y participación en los datos de la pareja siguen siendo el bloqueo central. La recomendación más coherente con la evidencia, la seguridad y el posicionamiento de mercado es transformar Cycleteller en una herramienta de educación y conversación, o adoptar un modelo donde ella participe y controle sus datos. Hasta cerrar esa decisión, el trabajo recomendable es documental, legal, de seguridad y de contenido; no construir más mecanismos de seguimiento.

## Referencias internas

[1]: `Cycleteller_Revision_Completa.pdf` — Auditoría completa del proyecto, 4 de septiembre de 2026.
[2]: `notastraspaso.pdf` — Notas de traspaso y exportación desde Claude.
[3]: `docs/02-decisiones.md` — Registro ADR del proyecto.
[4]: `docs/05-rgpd.md` — Análisis técnico documentado de RGPD, LSSI y privacidad.
[5]: `docs/06-backlog.md` — Backlog priorizado.
[6]: `docs/03-variables-pantalla-inicio.md` — Decisión de variables de producto.
[7]: `docs/07-competencia-y-riesgos.md` — Competencia, abuso tecnológico y riesgos reputacionales.
[8]: `src/js/config.js` — Interruptores de configuración activa.
[9]: `data/content.v2.js` — Contenido activo recomendado.
[10]: `tests/cycle.test.mjs` y `tests/smoke.mjs` — Validaciones automatizadas.
