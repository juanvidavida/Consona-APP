# Consona — Línea base de desarrollo y backlog unificado

**Proyecto:** CONSONA APP  
**Nombre canónico del producto:** **Consona**  
**Actualizado:** 17 de septiembre de 2026  
**Estado:** Línea base vigente. ADR-001 y ADR-002 quedan **aceptados con condiciones**. Los datos del ciclo, los registros de variables y las inferencias siguen siendo exclusivamente locales; la única excepción remota autorizada es el servicio mínimo de consentimiento y revocación definido en ADR-001. No se inicia un piloto personalizado hasta satisfacer sus condiciones de seguridad, control y revisión.

> **Regla de continuidad.** Cycleteller es el nombre histórico de los materiales recuperados. A partir de este documento, el producto se denomina **Consona**. Los nombres históricos se conservan únicamente para rastrear el origen de los archivos, decisiones y código.

## 1. Propósito de esta base

Esta línea base consolida el alcance actual de Consona, las decisiones de producto y el orden de trabajo. Su finalidad es impedir que se reintroduzcan, sin una decisión explícita, arquitecturas de seguimiento incompatibles con la minimización de datos, la autonomía de la persona afectada y la prevención de vigilancia en la pareja.

Consona es una aplicación para personas adultas que combina **educación, conversación, empatía y una estimación prudente del ciclo**, cuando existe un consentimiento verificable y una arquitectura aprobada. No es un sistema que conozca cómo se siente una persona, no es un método anticonceptivo y no debe emplearse para interpretar ánimo, límites, deseo ni disponibilidad.

## 2. Materiales permanentes y jerarquía de decisión

| Prioridad | Material | Uso autorizado |
|---|---|---|
| 1 | `CONSONA_LINEA_BASE_Y_BACKLOG.md` | Punto de partida operativo y backlog vigente |
| 2 | `CONSONA_DEFINICION_DE_APP.md` | Definición vigente de producto, experiencia y límites |
| 3 | `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md` | Decisión vinculante sobre titularidad, consentimiento y revocación |
| 4 | `CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md` | Decisión vinculante sobre pantalla SPM/TDPM y personalización local |
| 5 | `CONSOLIDACION_CYCLETELLER.md` | Consolidación histórica y contexto auditado; prevalecen los materiales 1–4 cuando haya conflicto |
| 6 | `cycleteller-traspaso.zip` y su documentación extraíble | Prototipo histórico, motor auditado y ADR anteriores |
| 7 | `Cycleteller-CompleteProjectExport.md` | Referencia documental de la app previa, no base de despliegue |
| 8 | `cycleteller-backlog.md` | Backlog histórico ya integrado y sustituido por la sección 8 |

En caso de contradicción, prevalecen las restricciones de seguridad, la minimización de datos, el control de la persona afectada y la incertidumbre explícita de los materiales de mayor prioridad.

## 3. Decisiones vigentes

| Área | Decisión vigente | Efecto práctico |
|---|---|---|
| Identidad | El producto se llama **Consona** | Renombrar toda interfaz, documentación y metadato futuro; Cycleteller solo es histórico |
| Público de piloto | Solo personas de **18 años o más** | La edad mínima queda fijada para tono, privacidad, consentimiento y pruebas de seguridad |
| Propuesta de valor | Educación y estimación tienen igual relevancia | El claim no será “aprende con Consona”; la experiencia explica y acompaña sin tutorizar ni controlar |
| Principio relacional | Empatía por encima del paternalismo | La interfaz orienta a preguntar, escuchar y responsabilizarse de la propia conducta |
| Consentimiento | El consentimiento de la persona afectada es imprescindible, revocable y granular | No se puede introducir ni consultar un dato de ciclo o variable sin el flujo aprobado de ADR-001 y ADR-002 |
| Datos de ciclo y variables | Exclusivamente en el dispositivo que los conserva | No hay backend, base de datos remota, copia de seguridad, sincronización ni cuentas de ciclo |
| Excepción de coordinación | Servicio remoto mínimo de consentimiento y revocación | Solo procesa los metadatos estrictamente definidos por ADR-001; nunca datos de ciclo ni contenido derivado |
| Estimación de fases | Se conserva como estimación con rango e incertidumbre | No usar ciclos de 28 días ni día 14 fijo; no presentar certeza ni uso anticonceptivo |
| Personalización local | Se permiten inferencias probabilísticas sobre variables consentidas | Requiere fuente visible, evidencia suficiente, incertidumbre, control local y lenguaje no diagnóstico; no se infiere consentimiento sexual, deseo sexual, límites ni disponibilidad |
| Engagement | Minimalismo por encima de la captación | Sin badges, FOMO, rachas ni mensajes de presión; solo avisos funcionales y no manipulativos si se aprueban |
| Privacidad comercial | Privacidad por encima de monetización | Sin venta de datos, analítica, telemetría, píxeles ni informes remotos de errores |
| Recursos | Cero recursos de terceros en ejecución | Sin CDN, fuentes, iconos, scripts ni gráficos remotos; toda dependencia aprobada se empaqueta localmente |

## 4. Límites de producto que siguen siendo obligatorios

Las siguientes restricciones se aplican a toda funcionalidad, contenido, dependencia y prueba. Una pantalla atractiva, una estimación más precisa o una posible ventaja comercial no justifican una excepción distinta a la aprobada en ADR-001.

| Restricción | Aplicación práctica |
|---|---|
| Personalización no determinista | Sin patrón asumido al inicio; las asociaciones locales solo se muestran con consentimiento granular, evidencia suficiente, fuente visible e incertidumbre |
| No usar como anticonceptivo | Aviso visible de que un calendario no identifica una ventana fértil fiable ni debe utilizarse para evitar embarazo |
| Anticoncepción primero | Si un método suprime ovulación, no calcular fases y mostrar contenido educativo alternativo |
| Incertidumbre visible | Rango individual, alternativas plausibles y caducidad; nunca una fecha exacta presentada como hecho |
| Observaciones y autoinformes | Solo categorías cerradas y locales, separadas por fuente; se prohíben texto libre, vigilancia de conducta, diagnósticos y datos no consentidos |
| Intimidad y consentimiento | No registrar, inferir ni compartir deseo sexual, consentimiento sexual, límites o disponibilidad; estos se preguntan directamente |
| Historial limitado | Sin exportación, perfiles múltiples, desplazamiento histórico ilimitado ni expediente retrospectivo; la retención del aprendizaje se limita y se revisa en ADR-002 |
| Gráficas condicionadas | Una visualización local solo se estudia tras revisión de privacidad; no “demuestra” causalidad, separa fuentes y no crea un expediente |
| Borrado real | La eliminación debe comprender datos, claves, caché y cálculos derivados locales; la revocación se diseña y prueba conforme al ADR-001 |
| Sin exfiltración | Sin analítica, telemetría, soporte remoto, informes de error ni logs con datos de ciclo o datos personales |
| Lenguaje accesible | Español internacional, catalán e inglés con el mismo estándar de respeto, claridad e incertidumbre |

## 5. Decisión arquitectónica vigente

Los datos de ciclo, los registros de variables y las inferencias asociadas permanecen en el dispositivo que los conserva. Consona no incorpora una base de datos de ciclos, autenticación de cuentas de ciclo, almacenamiento remoto, copias de seguridad, sincronización, analítica o soporte que acceda a esos datos.

La excepción aprobada no transforma Consona en un producto con backend de salud. El **servicio mínimo de consentimiento y revocación** se limita a identificadores pseudónimos efímeros o rotables, el vínculo técnico entre dispositivos, el estado de consentimiento y la solicitud de revocación. No recibe, infiere, almacena ni registra fechas, fases, síntomas, duración de ciclos, anticoncepción, nombres, notas o contenido equivalente. Su aplicación efectiva queda condicionada a las garantías enumeradas en ADR-001.

| Modelo | Arquitectura | Estado |
|---|---|---|
| A. Educación sin datos de ella | Aplicación estática local, sin cuentas ni calendario personalizado | Compatible y siempre disponible |
| B. Ella controla datos únicamente en su propio dispositivo | Diseño local-first sin servidor ni sincronización | Compatible en principio; requiere definición detallada si se prioriza |
| E. Consentimiento y revocación con coordinación mínima | Datos de ciclo locales; servicio remoto excepcional sin datos de ciclo | **Aceptado con condiciones** en ADR-001; no habilita piloto hasta cumplirlas |
| C. Ella introduce en el móvil de él sin control independiente | Arquitectura local sin revocación técnica verificable | No aprobado como solución autónoma |
| D. Él introduce sin participación de ella | Arquitectura local de alto riesgo | No aprobado y no ampliable |

## 6. Estimación, ciencia y contenido

Consona conserva la posibilidad de calcular fases porque aporta contexto educativo a la persona usuaria. Esta función debe denominarse siempre **estimación**. La fase lútea no se representará como un bloque fijo de catorce días ni la ovulación se situará por defecto en el día catorce. El motor auditado debe trabajar con rangos fisiológicamente prudentes, con variabilidad individual e incertidumbre visible. ADR-002 permite usar esa estimación como una de las señales de un patrón individual local, nunca como una explicación universal.

Cuando el modelo de datos quede implementable conforme a ADR-001, la estimación podrá usar una media móvil de entre tres y seis ciclos pasados confirmados. El margen debe derivarse de la variación individual —por ejemplo, mediante dispersión histórica o diferencia entre extremos— y ensanchar la ventana estimada en lugar de dar un día único. Un nuevo inicio de sangrado confirmado podrá recalcular las estimaciones locales. Estas reglas no autorizan almacenar ni introducir datos antes de completar las salvaguardas correspondientes.

El contenido educativo debe distinguir el nivel de evidencia sin convertir promedios poblacionales en afirmaciones sobre una pareja concreta. El dolor o los calambres, el apetito y los antojos pueden abordarse como fenómenos corporales generales; el sueño necesita lenguaje especialmente cuidadoso; y ánimo, energía, concentración y fuerza solo pueden generar asociaciones locales, probabilísticas y no diagnósticas si hay consentimiento granular y evidencia suficiente. El deseo sexual no se registra ni se calcula: el módulo aplicable es el consentimiento sexual y la conversación directa.

Las cuatro tarjetas de contenido conservadas son **Qué pasa en el cuerpo**, **Qué puedes preguntarle**, **Qué te toca a ti** y **Qué no asumir**. Cada pantalla debe terminar en una pregunta abierta o una acción propia, no en una conclusión sobre la otra persona.

## 7. Estado técnico y de materiales recuperados

| Activo | Ubicación | Estado |
|---|---|---|
| Prototipo JavaScript estático auditado | `cycleteller/` extraíble de `cycleteller-traspaso.zip` | Referencia técnica; motor con pruebas previas disponibles |
| Archivo único de demostración | `cycleteller/dist/cycleteller.html` | Referencia histórica, no despliegue vigente |
| Exportación de desarrollo Manus | `Cycleteller-CompleteProjectExport.md` | Referencia documental; arquitectura full-stack descartada para datos de ciclo |
| Consolidación original | `CONSOLIDACION_CYCLETELLER.md` | Contexto histórico; parcialmente sustituido por esta línea base y los documentos Consona |
| Definición vigente | `CONSONA_DEFINICION_DE_APP.md` | Nueva fuente de producto y experiencia |
| ADR vigente | `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md` | Nueva fuente de decisión sobre consentimiento, revocación y control |

## 8. Backlog unificado de Consona

### P0 — Decisiones y condiciones de diseño

| ID | Tarea | Estado | Resultado esperado |
|---|---|---|---|
| CON-001 | Resolver ADR-001 mediante el modelo E | **Cerrada con condiciones** | ADR publicado; no habilita piloto ni seguimiento hasta cumplir las condiciones técnicas, jurídicas y de seguridad |
| CON-002 | Decidir si Consona mantiene cálculo de fases | **Cerrada con condiciones** | Se conservan estimaciones con rango, margen, caducidad, anticoncepción y el motor auditado; nunca predicción determinista |
| CON-003 | Confirmar adopción formal del contenido v2 | Abierta, alta | Aprobar las cuatro tarjetas orientadas a conversación y revisar todo contenido con ese criterio |
| CON-004 | Fijar la edad mínima | **Cerrada** | Piloto limitado a personas de 18 años o más; actualizar textos, privacidad y pruebas de seguridad |
| CON-005 | Definir el alcance final del onboarding | Abierta, alta | Flujo mínimo, su inicio y final, datos estrictamente necesarios y dependencia de ADR-001; explicar antes del primer panel que el cálculo usa fechas pasadas, rangos, actualización y no es anticonceptivo |
| CON-006 | Refinar el contexto educativo inicial | Abierta, alta | Máximo tres o cuatro preguntas sin datos de salud no indispensables de la pareja |
| CON-007 | Especificar autorización corta, retirada y borrado local | Abierta, crítica | Flujo de revocación, comportamiento sin red, borrado verificable y pruebas; sin comprobación periódica durante el piloto |
| CON-008 | Definir el contrato de minimización del servicio de coordinación | Abierta, crítica | Esquema de datos permitido, identificadores rotables, retención, prohibición de logs y pruebas de que no circulan datos de ciclo |
| CON-009 | Definir alcance, umbrales y retención del aprendizaje local | Abierta, crítica | Taxonomía cerrada, tres ciclos mínimos, cobertura, tratamiento de contradicciones, límite de historial y pruebas de falsos positivos |

### P1 — Legal, consentimiento, seguridad y privacidad

| ID | Tarea | Estado | Resultado esperado |
|---|---|---|---|
| CON-010 | Revisión jurídica profesional del modelo E | Abierta, crítica | Validar base jurídica, roles, consentimiento, revocación, transparencia y límites de la excepción remota |
| CON-011 | Diseñar materiales de comunicación para parejas | Abierta, alta | Guía breve de conversación voluntaria, negativa sin presión, datos locales y límites de la estimación |
| CON-012 | Redactar política de privacidad, aviso a la persona afectada y procedimiento de borrado | Abierta, alta | Textos claros para personas adultas que describan dispositivos, revocación, datos locales y límite sin red |
| CON-013 | Realizar EIPD y evaluación de violencia tecnológica | Abierta, crítica | Riesgos de emparejamiento, coerción, vigilancia, dispositivos sin conexión y revocación remota evaluados antes del piloto |
| CON-014 | Mantener política de ausencia de analítica | **Cerrada por decisión de arquitectura** | Sin analítica, telemetría ni informes remotos de errores; no reabrir sin decisión expresa |
| CON-015 | Modelar amenazas y probar revocación | Abierta, crítica | Ataques de emparejamiento, acceso persistente, dispositivo offline, borrado, caché y pérdida de clave cubiertos por pruebas |
| CON-016 | Diseñar consentimiento granular para variables y fuentes | Abierta, crítica | Permisos independientes para categorías, autoinforme y observación; interfaz de revisión y retirada efectiva |

### P2 — Contenido y experiencia educativa

| ID | Tarea | Estado | Resultado esperado |
|---|---|---|---|
| CON-020 | Auditar contenido educativo completo | Abierta, alta | Lenguaje no determinista, sin interpretar el interior de otra persona |
| CON-021 | Elaborar módulo de consentimiento sexual | Abierta, alta | Independiente de fases; enseña que el deseo se pregunta y el consentimiento es continuo |
| CON-022 | Elaborar módulo de sesgo de atribución | Abierta, alta | Previene la frase “está así por la regla” y promueve conversación directa |
| CON-023 | Completar contenido de anticoncepción hormonal | Abierta, media | Explicar límites de fase y sangrado sin falsas certezas |
| CON-024 | Añadir orientación de consulta médica | Abierta, media | Señales redactadas como orientación, no diagnóstico |
| CON-025 | Revisar traducciones ES/CA/EN | Abierta, media | Los tres idiomas mantienen el mismo estándar de seguridad y respeto |
| CON-026 | Gobernar afirmaciones según evidencia | Abierta, alta | Etiquetas de evidencia, fuentes verificadas antes de publicación y prohibición de convertir promedios en predicciones personales |
| CON-027 | Redactar y revisar pantalla SPM/TDPM | Abierta, alta | Educación sobre variabilidad, límites de prevalencia, no diagnóstico y orientación de atención sanitaria ante señales graves |

### P3 — Desarrollo, solo tras satisfacer P0 y P1 aplicables

| ID | Tarea | Condición | Resultado esperado |
|---|---|---|---|
| CON-030 | Definir arquitectura local-first definitiva | CON-007, CON-008, CON-010, CON-013 y CON-015 | Cliente local sin backend de ciclos; excepción de coordinación verificablemente limitada |
| CON-031 | Migrar únicamente componentes seguros | CON-030 | Navegación, estilos e i18n; excluir autenticación, ORM, base de datos, sincronización, analítica y contenido descartado |
| CON-032 | Portar y probar el motor de ciclo auditado | CON-002 y CON-030 | UTC, validación, anticoncepción, rango lúteo, margen, caducidad y pruebas completas |
| CON-033 | Completar onboarding de consentimiento | CON-030 | Consentimiento informado y revocable, datos mínimos, aclaración de estimación y acceso de 18+ |
| CON-034 | Diseñar panel “Hoy” con transparencia progresiva | CON-005, CON-032 y CON-033 | Fase con nombre directo, día de ciclo, ventana, actualización y cuatro tarjetas: cuerpo, pregunta, acción propia y antiestereotipo; sin descargos repetitivos, síntomas, observaciones, inferencias personales, bienestar, sensibilidad ni semáforos |
| CON-035 | Pruebas funcionales, de privacidad, seguridad y comprensión | Antes del piloto | Cálculo, interfaz, comprensión del onboarding, estados desactualizados, borrado, revocación, consentimiento, offline y ausencia de recursos externos verificados |
| CON-036 | Estudiar gráfica local limitada | CON-013, CON-015 y CON-035 | Solo si supera revisión de vigilancia; SVG o Chart.js empaquetado localmente, sin causalidad ni historial amplio |
| CON-037 | Implementar registros locales consentidos | CON-009, CON-016 y CON-030 | Categorías cerradas, fuente separada, control de acceso, borrado y ausencia de texto libre |
| CON-038 | Implementar motor local explicable de inferencias | CON-009 y CON-037 | Muestra, fuente, incertidumbre, umbrales y estado “sin patrón identificado”; sin diagnóstico ni determinismo y fuera de la home hasta una decisión específica |
| CON-039 | Validar sesgo, falsos positivos y control coercitivo | CON-013, CON-015, CON-037 y CON-038 | Pruebas de rendimiento, revisión de daño, eliminación de datos y veto de salidas sobre intimidad o consentimiento |

### P4 — Infraestructura y piloto

| ID | Tarea | Estado | Resultado esperado |
|---|---|---|---|
| CON-040 | Elegir distribución exclusivamente estática para el cliente | Pendiente | Aplicación sin backend que reciba o persista datos de ciclo |
| CON-041 | Configurar CSP `default-src 'self'` | Pendiente | Garantía técnica contra recursos no autorizados |
| CON-042 | Verificar ausencia de rutas de salida de datos | Pendiente | Revisar red, logs, errores, dependencias, CDN, almacenamiento y servicio excepcional antes del piloto |
| CON-043 | Pilotar con evaluación cualitativa y de seguridad | Bloqueada por P0–P3 y ADR-002 | Piloto 18+ que valide comprensión previa del cálculo, panel limpio, consentimiento granular, incertidumbre, borrado y ausencia de presión o vigilancia |

## 9. Próximo inicio recomendado

El siguiente bloque de trabajo debe ser documental y de diseño de seguridad, no de implementación de seguimiento. Debe concretarse primero el contrato técnico del servicio de consentimiento y revocación, la experiencia de consentimiento directo y granular, la revocación en escenarios sin conexión, el borrado local y los umbrales del aprendizaje local. En paralelo pueden avanzar la pantalla educativa SPM/TDPM, las traducciones y los materiales de conversación.

La estimación de fases solo pasa a desarrollo cuando la arquitectura local y la excepción de coordinación estén revisadas. Si finalmente una condición del modelo E no puede satisfacerse, Consona debe conservar el modelo A —educación sin datos de ella— como alternativa plenamente compatible.

## 10. Fuentes internas de decisión

| Referencia | Material | Uso |
|---|---|---|
| [1] | `CONSONA_DEFINICION_DE_APP.md` | Definición vigente de producto incorporada el 14 de septiembre de 2026 |
| [2] | `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md` | Decisión y condiciones del modelo E |
| [3] | `CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md` | Personalización local, pantalla SPM/TDPM y condiciones de seguridad |
| [4] | `CONSOLIDACION_CYCLETELLER.md` | Contexto consolidado previo y hallazgos técnicos recuperados |
| [5] | `cycleteller-traspaso.zip` | Motor auditado, pruebas y documentación histórica |
| [6] | `Cycleteller-CompleteProjectExport.md` | Referencia documental de interfaz y arquitectura previa |
| [7] | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` | Patrón de interfaz “Hoy”, transparencia progresiva y estados del panel |
| [8] | Notas aportadas el 14, el 16 y el 17 de septiembre de 2026 | Principios core, algoritmo, pantalla SPM/TDPM, personalización y decisión de interfaz |
