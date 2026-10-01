# CON-007 — Matriz de pruebas de autorización, retirada, borrado y modo sin conexión

**Estado:** plan de evidencia para la futura implementación funcional.
**Datos de prueba:** únicamente fixtures sintéticos, identificadores técnicos no personales y alcances cerrados.
**No ejecutar con:** fechas reales, fases reales, variables reales, nombres, cuentas, texto libre, telemetría o un servicio de producción.

> Esta matriz especifica pruebas que deben fallar si una autorización se globaliza, si un alcance retirado continúa usándose o si el producto afirma un borrado que no puede verificar. Complementa, pero no reemplaza, las pruebas de no exfiltración de JUA-17 y la EIPD/modelo de amenazas de JUA-13.

## 1. Reglas de ejecución

1. Cada escenario crea un entorno aislado y elimina sus artefactos sintéticos al terminar.
2. Las pruebas de almacenamiento inspeccionan memoria, almacenamiento local, IndexedDB, caché de Service Worker, claves, colas y resultados derivados que la arquitectura futura adopte.
3. Las pruebas de red capturan únicamente el contrato sintético de CON-008; cualquier campo de ciclo, variable, fase, contenido de pantalla, identificador personal o log sensible es un fallo.
4. La prueba de retirada debe ejercitar al menos una recarga y un reinicio/reapertura del cliente antes de declararse satisfactoria.
5. Ninguna prueba puede convertir un dato eliminado en “ausencia de síntoma”, diagnóstico, estado emocional, deseo, consentimiento sexual, límite o disponibilidad.

## 2. Matriz de escenarios

| ID | Control / requisito | Preparación sintética | Acción | Resultado exigido | Evidencia mínima |
|---|---|---|---|---|---|
| A-01 | ADR-001 C3 — decisión directa | Receptor sin autorización. | La pareja intenta habilitar un alcance desde su propia pantalla. | No se crea autorización ni se desbloquea almacenamiento; se muestra que debe decidir la persona afectada. | Estado local, captura de UI y ausencia de escritura. |
| A-02 | ADR-001 C3 — explicación previa | Dispositivo de control en `sin_decision`. | Abrir un alcance. | La explicación muestra dispositivo, uso local, límite de inferencias, retirada y límite offline antes de aceptar/rechazar. | Copia versionada y prueba de orden de pantallas. |
| A-03 | ADR-001 C3 — rechazo | Alcance presentado directamente. | Rechazar. | Estado `rechazado`; el receptor queda `bloqueado_sin_autorizacion`. | Traza de transición sin datos sensibles. |
| A-04 | ADR-002 P2 — granularidad | Dos alcances sintéticos distintos. | Aceptar solo uno. | Solo el alcance aceptado puede activar operaciones locales; el otro no muestra formulario ni admite escritura. | Inspección de autorización por alcance. |
| A-05 | ADR-002 P2 — sin permiso global | Tres alcances sintéticos. | Intentar enviar una autorización comodín. | El validador rechaza el comodín; exige referencia exacta a un alcance versionado. | Prueba negativa y mensaje seguro. |
| A-06 | ADR-002 — fuentes | Alcance v1 de `self_report`. | Intentar activar `partner_observation`. | Se rechaza: la fuente no es válida ni autorizable en v1. | Prueba negativa contra contrato taxonómico. |
| R-01 | ADR-001 C4 — bloqueo inmediato | Receptor `autorizado_activo` con fixtures y un cálculo derivado sintético. | Recibir retirada. | Antes de cualquier nueva lectura/escritura se entra en `bloqueo_por_retirada`. | Traza ordenada de eventos y prueba de bloqueo. |
| R-02 | ADR-001 C4 / P5 — borrado de origen | Estado de R-01. | Ejecutar borrado. | Se eliminan registros del alcance y la asociación de permiso aplicable. | Inventario de almacenamiento antes/después. |
| R-03 | ADR-001 C4 / P5 — derivados | Estado de R-01 con agregados, cálculo, inferencia y UI sintéticos. | Ejecutar borrado. | Se invalidan y eliminan todos los derivados; ninguna vista vuelve a mostrar el dato retirado. | Aserciones sobre cálculo, estado y render. |
| R-04 | ADR-001 C4 / P5 — caché y claves | Estado de R-01 con caché, Service Worker y clave sintéticos. | Ejecutar borrado y recargar. | No permanecen caché, clave, índice ni salida del alcance tras recarga. | Inspección de Cache Storage/IndexedDB/local storage según arquitectura. |
| R-05 | ADR-002 P5 — no reutilización | Datos sintéticos retirados y recomputación solicitada. | Intentar recomputar una salida. | El motor no usa datos previos; devuelve un estado seguro sin patrón/datos. | Entrada del motor y salida verificada. |
| R-06 | Idempotencia | Retirada ya aplicada. | Recibir la misma retirada por segunda vez. | Mantiene `borrado_local_completado`; no falla ni reactiva el alcance. | Prueba de transición repetida. |
| R-07 | Nuevo consentimiento separado | Alcance retirado. | La persona afectada da una nueva decisión directa. | Se inicia un ciclo nuevo sin restaurar registros, caché ni derivados anteriores. | Identidad de ciclo técnica y almacenamiento vacío. |
| O-01 | ADR-001 C5 — retirada con receptor offline | Receptor desconectado y alcance activo. | Emitir retirada desde control. | Se registra solo una solicitud genérica permitida; la UI no afirma borrado remoto inmediato. | Texto de UI y traza del contrato mínimo. |
| O-02 | ADR-001 C5 — entrega diferida | Escenario O-01; receptor reconecta. | Entregar retirada retrasada. | El receptor bloquea antes de operar y completa R-01 a R-04. | Secuencia de eventos y pruebas de borrado. |
| O-03 | ADR-001 C5 — receptor apagado/reinicio | Receptor apagado al emitir retirada. | Arrancar y entregar la señal. | La primera operación del alcance aplica la retirada antes de exponer datos. | Prueba de arranque y estado final. |
| O-04 | ADR-001 C5 — mensaje honesto | Receptor sin conexión o desinstalado. | Consultar estado en control. | Se diferencia solicitud emitida de borrado confirmado; no inventa estado remoto. | Captura y revisión de copy. |
| O-05 | Orden y repetición | Dos eventos técnicos: retirada más antigua y autorización vieja/repetida. | Entregarlos fuera de orden. | La retirada prevalece; ningún mensaje retrasado reactiva el alcance. | Prueba de versión/nonce según CON-008. |
| S-01 | Límite de datos | Cualquier escenario conectado. | Inspeccionar carga, logs y errores. | No contiene ciclo, fecha, fase, variable, nombre, nota ni contenido derivado. | Revisión automática y manual; JUA-17 completa la evidencia. |
| S-02 | Sin vigilancia periódica | Receptor en reposo. | Esperar el periodo de prueba. | No realiza sondeos recurrentes de consentimiento ni telemetría. | Registro de red sintético y configuración revisada. |
| S-03 | Estados prohibidos | Fixtures con sexualidad, límites o consentimiento sexual. | Intentar usarlos como alcance, registro o salida. | Se rechazan sin persistir ni registrarse. | Fixtures negativos y validación. |

## 3. Datos sintéticos mínimos

Los escenarios pueden usar referencias opacas como `scope:physical_bloating:self_report:v1` y `request:revocation:fixture-001`, siempre que:

- no correspondan a una persona, dispositivo real ni identificador reutilizable;
- no incluyan fechas, fases, síntomas reales, textos, ubicación, contactos o cuentas;
- se eliminen al terminar el entorno de prueba;
- no se envíen a servicios remotos salvo los mocks aislados de CON-008.

Las categorías de fixtures no aprueban una captura de producto: representan el contrato cerrado y su rechazo de campos prohibidos.

## 4. Trazabilidad de salida

| Fuente | Controles cubiertos por esta matriz | Trabajo que consume la evidencia |
|---|---|---|
| ADR-001 C3 | A-01 a A-05 | Futuro P2 funcional y revisión jurídica. |
| ADR-001 C4 / ADR-002 P5 | R-01 a R-07 | JUA-18. |
| ADR-001 C5 | O-01 a O-05 | JUA-18, EIPD, modelo de amenazas y copy de interfaz. |
| ADR-001 C6 / ADR-002 P8 | S-01 y S-02 | JUA-17; esta matriz no certifica por sí misma la ausencia de exfiltración. |
| ADR-002 P2 | A-04 a A-06 | Tarea sucesora funcional de JUA-6. |
| Límites permanentes | S-03 | Taxonomía, P2, P6 y revisión de contenido. |

## 5. Criterio de aceptación para la implementación futura

Una implementación posterior no podrá declarar conformidad con CON-007 hasta que:

- todos los escenarios A, R y O pasen con fixtures sintéticos;
- R-02 a R-05 se ejecuten también después de recarga/reinicio;
- O-01 y O-04 demuestren copy honesto, sin promesa de borrado remoto inmediato;
- S-01 y S-02 tengan evidencia revisable y se integren con JUA-17;
- los hallazgos de EIPD, revisión jurídica y modelo de amenazas se incorporen antes de datos reales;
- producto, privacidad/seguridad e ingeniería registren la revisión de los resultados.

El resultado de esta matriz es una precondición de diseño y pruebas para JUA-18; no equivale a una autorización para piloto.
