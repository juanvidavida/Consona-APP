# CON-007 — Protocolo de autorización directa, retirada, borrado local y modo sin conexión

**Estado:** propuesta de diseño y de evidencia; no es una implementación de producto.
**Incidencia:** JUA-20 / CON-007.
**Bloquea:** JUA-18 / P5 y el cierre de JUA-13.
**No habilita:** captura, persistencia, emparejamiento, calendario, estimación, aprendizaje, inferencias, servicio remoto operativo ni piloto.

> Este documento define los comportamientos que deberán probarse antes de que Consona trate datos reales. No introduce una excepción a la regla local: cualquier dato de ciclo, variable consentida o derivado permanece exclusivamente en el dispositivo que lo conserva.

---

## 1. Propósito y decisión de diseño

El modelo E solo puede considerar una autorización si la decisión procede **directamente de la persona afectada**, puede rechazarse o retirarse sin mediación de su pareja y desencadena un control local efectivo al recibirse la retirada. Una declaración de la persona que consulta —por ejemplo, “mi pareja sabe que uso la aplicación”— es un recordatorio de conducta, no una autorización.

La prioridad de este protocolo es conservar el control de la persona afectada aun cuando el dispositivo que contiene los datos no esté conectado. Por esa razón, distingue con precisión:

- la **solicitud de retirada**, que puede emitirse desde el dispositivo de control;
- su **entrega técnica**, que puede retrasarse;
- el **bloqueo y borrado local**, que deben ocurrir antes de cualquier nueva consulta en cuanto el dispositivo receptor reciba la solicitud;
- lo que el producto puede afirmar honestamente cuando el receptor está offline: nunca un borrado remoto inmediato ni una garantía de entrega no demostrada.

## 2. Límites y términos normativos

| Término | Significado en este protocolo | No significa |
|---|---|---|
| **Persona afectada** | Persona que recibe la explicación y acepta, rechaza o retira por sí misma una autorización. | Un perfil observado, una fuente de inferencias o una declaración de la pareja. |
| **Dispositivo de control** | Dispositivo desde el que la persona afectada ejerce una decisión directa. | Una cuenta de ciclo, un identificador personal o un repositorio de datos de ciclo. |
| **Dispositivo receptor** | El único dispositivo que podría conservar localmente datos de ciclo, variables o derivados dentro de un alcance autorizado. | Un destino que puede sincronizar o exportar esos datos. |
| **Servicio mínimo** | Futuro mecanismo excepcional de coordinación de consentimiento y revocación, definido por CON-008. | Un backend de salud, calendario compartido, analítica, mensajería o base de datos de ciclo. |
| **Alcance local (`scope`)** | Unidad versionada que la persona afectada acepta, revisa o retira en sus dispositivos. Para variables futuras: categoría × fuente; una finalidad adicional requiere una decisión explícita. | Un campo, etiqueta o estado que viaje al servicio mínimo. |
| **Referencia de coordinación opaca** | Valor técnico efímero o rotable, sin semántica clínica, que CON-008 podrá usar para dirigir una señal genérica. La correspondencia con un alcance local solo existe en los dispositivos de control y receptor. | Una codificación de categoría, fuente, síntoma, fase o finalidad; un identificador de persona o una cuenta. |
| **Retirada** | Decisión de invalidar uno o varios alcances y solicitar el bloqueo y borrado local aplicable. | Una promesa de borrado instantáneo en un receptor que no puede recibirla. |

### 2.1. Alcances admisibles y prohibidos

El protocolo no añade categorías. Si más adelante se habilitan variables, solo puede usar una lista de alcances **locales, versionada y cerrada** conforme al contrato taxonómico y a ADR-002. Cada alcance se acepta, revisa y retira individualmente. El servicio mínimo nunca recibe el literal del alcance; cuando la coordinación sea imprescindible, usa una referencia opaca cuya semántica queda únicamente en los dispositivos locales.

- Ninguna interfaz puede agrupar categorías bajo un permiso global.
- Una fuente no autorizada no muestra formulario, no escribe almacenamiento y no se utiliza en cálculos.
- La observación de pareja está fuera de la v1 mínima; este protocolo no la habilita.
- Nunca existe un alcance para deseo sexual, actividad sexual, consentimiento sexual, límites, disponibilidad, notas libres, nombres, contactos, ubicación o conducta.
- Una futura estimación de fase, si se autoriza tras ADR-001 C9, debe tener un alcance local propio; no puede reutilizar silenciosamente el permiso de una variable ni revelarlo al servicio.

## 3. Invariantes que toda implementación debe respetar

1. **Denegación por defecto.** Sin una autorización directa, vigente y verificable para un alcance, el receptor permanece bloqueado para registrar, leer, calcular, personalizar o mostrar resultados que dependan de ese alcance.
2. **Decisión directa e informada.** Antes de decidir, la persona afectada conoce qué se guardaría localmente, dónde, para qué, qué no puede concluir Consona, cómo retirar y el límite offline.
3. **Granularidad real.** Aceptar un alcance no activa otros; retirar uno no autoriza ni borra más de lo necesario, pero sí invalida todos sus derivados.
4. **Bloquear antes de borrar.** Tras recibir una retirada, el receptor bloquea primero cualquier lectura, escritura, estimación o inferencia afectada; después ejecuta el borrado y la invalidación.
5. **Sin reutilización.** Datos recogidos antes de una retirada no pueden producir cálculos, sugerencias o resultados posteriores a ella.
6. **Separación local/remota.** Fechas, fases, síntomas, categorías, fuentes, alcances locales, intensidad, cálculos, inferencias, texto y pantallas no atraviesan el servicio mínimo. La referencia de coordinación opaca no codifica ni revela esos elementos.
7. **Sin vigilancia periódica.** No se hacen comprobaciones recurrentes del estado de consentimiento con fines de seguimiento. Cualquier estrategia de caducidad o limitación por offline requiere decisión posterior de EIPD y no se presupone aquí.
8. **Mensajes verificables.** La interfaz diferencia “solicitud emitida”, “entrega aún no confirmable” y “borrado local ejecutado”; no representa esos estados como equivalentes.
9. **Idempotencia.** Una retirada repetida, retrasada o reintentada no puede reactivar un alcance ni restaurar datos borrados.
10. **Nuevo consentimiento, nuevo ciclo.** Tras una retirada no existe reactivación automática: un consentimiento directo nuevo inicia un ciclo separado y nunca recupera datos previos.

## 4. Modelo de estados de referencia

El modelo es por **alcance local**. Una persona puede rechazar o retirar un alcance sin que ello determine el estado de otro. La representación local de estados debe mantenerse fuera de los datos de ciclo. Si la coordinación requiere dirigir una señal, solo usa referencias técnicas opacas permitidas por CON-008, nunca el nombre o la semántica del alcance.

### 4.1. Estado en el dispositivo de control

| Estado | Entrada permitida | Salida / efecto |
|---|---|---|
| `sin_decision` | Primera visualización o alcance aún no presentado. | No se habilita ningún dato. |
| `explicacion_presentada` | La persona afectada abre la explicación completa. | Puede aceptar o rechazar directamente; no hay aceptación preseleccionada. |
| `rechazado` | Rechazo explícito. | El alcance permanece bloqueado; no se solicita una aceptación de la pareja como sustituto. |
| `autorizado` | Aceptación directa de un alcance local concreto. | Se crea únicamente la señal técnica autorizada por CON-008 con una referencia opaca; nunca se adjuntan datos de ciclo ni el nombre del alcance. |
| `retirada_solicitada` | Retirada directa. | Se emite una solicitud genérica de revocación; el control informa del límite de conectividad. |
| `retirado` | El servicio registra o reintenta la solicitud conforme al contrato futuro. | No se presenta como confirmación del borrado remoto. Un consentimiento posterior debe empezar de nuevo. |

### 4.2. Estado en el dispositivo receptor

| Estado | Puede registrar / consultar / calcular | Evento de entrada | Efecto obligatorio |
|---|---:|---|---|
| `bloqueado_sin_autorizacion` | No | Inicio, rechazo, error o ausencia de autorización vigente. | No crea ni conserva datos dentro del alcance. |
| `autorizado_activo` | Solo dentro del alcance vigente | Recepción de autorización directa verificable. | Puede operar localmente; no envía datos al servicio. |
| `bloqueo_por_retirada` | No | Recepción de retirada, aunque sea duplicada o retrasada. | Bloquea antes de leer, escribir, estimar o inferir. |
| `borrado_local_completado` | No | Invalidación y eliminación finalizadas. | Elimina datos, permisos, cálculos, inferencias, caché, claves y salidas derivadas aplicables; deja solo evidencia técnica no sensible permitida por CON-008, si existiera. |
| `requiere_nueva_decision` | No | Persona afectada decide volver a considerar el alcance. | No restaura datos previos; vuelve a `explicacion_presentada` en el dispositivo de control. |

`autorizado_activo → bloqueo_por_retirada → borrado_local_completado` es una transición obligatoria. No hay transición desde `borrado_local_completado` a `autorizado_activo` sin un consentimiento nuevo y sin datos heredados.

### 4.3. Diagrama de estados

El diagrama editable está en [`con-007-estados.mmd`](./con-007-estados.mmd). El receptor puede permanecer desconectado antes de recibir una retirada; ese retraso no convierte la retirada en inefectiva ni permite prometer que el borrado ya ocurrió.

## 5. Protocolo de retirada y borrado local

1. La persona afectada selecciona uno o varios alcances locales concretos y confirma la retirada en el dispositivo de control.
2. El dispositivo de control explica que la retirada bloquea el uso futuro y que el receptor borrará al recibirla; si está offline, no se puede prometer un borrado inmediato ni confirmarlo como realizado.
3. El servicio mínimo, solo si CON-008 lo define y valida, tramita una señal genérica de retirada asociada como máximo a una referencia opaca. No recibe fechas, fases, variables, categorías, fuentes, alcance local, nombres ni contenido derivado.
4. Al recibir esa señal, el receptor ejecuta una operación atómica en este orden:
   1. marca el alcance como bloqueado en memoria antes de cualquier interacción posterior;
   2. cancela operaciones pendientes y niega nuevas lecturas/escrituras/cálculos;
   3. borra los registros locales del alcance;
   4. invalida y borra cálculos, estimaciones, inferencias, resultados, caché, índices, claves y artefactos de UI que dependan de esos registros;
   5. reinicia o recomputa las vistas afectadas hacia un estado seguro, como “sin datos” o “sin patrón identificado”, sin exponer el dato retirado;
   6. registra solo la evidencia técnica mínima permitida por CON-008, sin contenido sensible.
5. Si la retirada llega dos veces, fuera de orden o tras reinicio, el resultado final sigue siendo `borrado_local_completado`.
6. Si la persona afectada inicia una nueva autorización, el receptor no restaura registros ni derivados antiguos; empieza sin datos del alcance retirado.

## 6. Caso sin conexión y mensajes obligatorios

| Situación | Conducta del sistema | Mensaje admisible | Mensaje prohibido |
|---|---|---|---|
| El dispositivo de control emite retirada y el receptor está offline. | Solicitud genérica pendiente según CON-008. No hay sondeo periódico. | “Hemos solicitado la retirada. El otro dispositivo borrará y bloqueará esos datos cuando reciba la solicitud.” | “Los datos se han eliminado de todos los dispositivos.” |
| El receptor no ha recibido una retirada. | Mantiene el último estado local conocido; la EIPD decidirá si procede una limitación adicional de acceso por antigüedad. | “No se puede confirmar ahora el estado del otro dispositivo.” | “La autorización sigue siendo válida en todos los casos.” |
| El receptor recibe una retirada retrasada o tras reinicio. | Bloquea y borra antes de permitir nueva interacción dentro del alcance. | “La retirada se ha aplicado en este dispositivo.” | “Se han recuperado los datos anteriores.” |
| El receptor fue desinstalado. | No se promete borrado de un almacenamiento inexistente ni de copias fuera del alcance. La política concreta depende de arquitectura y EIPD. | “No podemos confirmar el estado de un dispositivo que no está disponible.” | “La desinstalación garantiza que no queda ningún dato.” |

### Decisión pendiente de EIPD

ADR-001 permite estudiar medidas locales adicionales —por ejemplo, limitar temporalmente acceso si no se puede comprobar el estado durante una ventana definida—. **CON-007 no fija esa ventana ni activa un bloqueo por caducidad**, porque hacerlo requiere EIPD, modelo de amenazas, arquitectura y revisión jurídica. Hasta esa decisión, la interfaz no debe inventar una garantía de validez remota.

## 7. Borrado: inventario obligatorio

Para cada alcance retirado, la futura implementación debe localizar y demostrar la eliminación o invalidación de:

- registro local de la categoría y la fuente autorizada;
- asociación de consentimiento del alcance;
- copias en memoria, colas y operaciones en curso;
- cálculos de fase, agregados, índices y derivaciones que utilicen el dato;
- inferencias, explicaciones y estados de UI derivados;
- caché de aplicación, Service Worker, almacenamiento de navegador, claves, tokens locales y cualquier índice de búsqueda;
- mensajes o artefactos de error que accidentalmente contengan el dato.

Un dato ausente tras borrado sigue siendo **ausente**; no se transforma en “sin síntoma”, “rechazado” o una nueva inferencia.

## 8. Dependencias y entregables posteriores

| Dependencia | Relación con CON-007 |
|---|---|
| JUA-10 / P1 | Aporta el vocabulario versionado; no habilita datos reales por sí mismo. El estado documental de aprobación debe mantenerse consistente con su cierre en Linear antes de usarlo como insumo operativo. |
| CON-008 / JUA-21 | Define los únicos metadatos, referencias opacas, identificadores, retención, rotación, endpoint y evidencia técnica que el protocolo puede usar; debe rechazar cualquier `scope` semántico o categoría. |
| CON-010 / JUA-22 | Revisa el protocolo consolidado, la transparencia y el límite offline antes de cualquier aprobación de arquitectura o piloto. |
| CON-013 y CON-015 | Determinan si el riesgo de coerción, emparejamiento o dispositivo comprometido permite continuar y qué medidas adicionales son necesarias. |
| JUA-18 / P5 | Implementa y demuestra el bloqueo/borrado descrito aquí sobre flujos reales; queda bloqueada por CON-007. |
| JUA-17 / P8 | Prueba que los datos locales no salen del dispositivo; CON-007 no sustituye esa evidencia. |

## 9. Criterio de cierre de CON-007

CON-007 solo puede considerarse completada cuando existan y estén revisados:

- este protocolo o una versión sucesora con estados, límites y transiciones inequívocos;
- el diagrama de estados editable;
- una matriz reproducible de pruebas de autorización, retirada, borrado y offline;
- textos de interfaz honestos para los estados conectados y desconectados;
- una revisión registrada de producto, ingeniería y privacidad/seguridad;
- una trazabilidad explícita a ADR-001 C3–C5, ADR-002 P2/P5 y JUA-18.

La finalización de CON-007 **no autoriza** iniciar datos reales. JUA-13 y sus demás condiciones siguen siendo acumulativas.

## Referencias

- `info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md`, secciones 3–7.
- `info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md`, secciones 4 y 7.
- `docs/taxonomy/consona-local-taxonomy-v1.0.0.md`, secciones 2, 5–8.
- [`CON-007_MATRIZ_DE_PRUEBAS.md`](./CON-007_MATRIZ_DE_PRUEBAS.md).
