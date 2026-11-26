# Consona — ADR-003: Relé cifrado de extremo a extremo entre el dispositivo de ella y el de él

**Estado:** **ACEPTADA CON CONDICIONES**
**Fecha de decisión:** 26 de noviembre de 2026
**Decisión:** relé cifrado de extremo a extremo para el alta y las confirmaciones, durante toda la vida del vínculo. No autoriza datos reales, despliegue ni piloto hasta cumplir las condiciones de §7.
**Incidencia:** JUA-29. Amplía su alcance original, limitado al alta a distancia.
**Modifica:** ADR-001 §2, §3, §4 y §6; ADR-002 §3, §5 (punto 7) y §7 (P8); línea base §3 y §5; CON-008 §0 y §2 (detalle en §5).
**Se apoya en:** [revisión arquitectónica del modelo E](../security/JUA-42_REVISION_ARQUITECTONICA_MODELO_E.md) (JUA-42) y [arquitectura de la primera versión](../security/CON-030_ARQUITECTURA_PRIMERA_VERSION.md) (CON-030, JUA-47).

> En este ADR, **ella** es la persona afectada, titular de los datos de ciclo, y **él** es la persona que acompaña y usa el dispositivo receptor, como en JUA-42. Este documento no es asesoramiento jurídico.

## 1. Contexto

ADR-001 (14-09-2026) aceptó con condiciones el modelo E: los datos de ciclo viven solo en el dispositivo que los conserva, y un servicio mínimo coordina el consentimiento y la revocación **sin datos de ciclo**. El servicio no puede «recibir, inferir, almacenar, indexar, **transmitir** o registrar» esos datos, ni siquiera cifrados.

Desde entonces han cambiado tres cosas:

1. **Ella tiene su propia app** y es la fuente de sus datos (CON-008 §0.1, decisión del 13-11-2026). Los registra, los corrige y confirma cada regla en su móvil.
2. **Hay que llevar esos datos al móvil de él.** Con ADR-001, las únicas vías son que él teclee las fechas de ella, que se parece a los modelos C y D no aprobados, o un traspaso por QR que exige estar juntos en el alta y en cada confirmación.
3. **La revisión arquitectónica (JUA-42) eligió el 19-11-2026 la opción 3:** un relé cifrado de extremo a extremo para el alta y las confirmaciones, durante toda la vida del vínculo. Esa opción necesita este ADR.

## 2. Decisión

Se autoriza una **segunda excepción** a ADR-001 §2: el servicio de Consona puede **transmitir y guardar temporalmente** los datos de ciclo y las variables que ella comparte, **solo cifrados de extremo a extremo**, del dispositivo de ella al de él, con las salvaguardas de §4.

### 2.1. Qué puede procesar el servicio, además de lo que permite ADR-001

| Categoría | Finalidad exclusiva | Prohibiciones expresas |
|---|---|---|
| Sobre cifrado de extremo a extremo, de tamaño fijo | Llevar al dispositivo de él el estado completo de lo que ella comparte | El servicio no tiene claves, no puede descifrarlo ni intentarlo, y no lo indexa, analiza ni copia. |
| Buzón con solo el último sobre de cada pareja | Que él reciba el estado al abrir su app, aunque ella no la tenga abierta en ese momento | Un sobre como máximo por pareja. Sin historial de sobres. |
| Marcador de cierre | Que la otra app sepa que el vínculo se ha cerrado | No dice quién lo cerró. Caduca en un plazo fijado por la EIPD. |
| Material temporal de emparejamiento | Intercambiar claves públicas y compromisos | Se borra al terminar el emparejamiento o a los pocos minutos. |
| Verificadores de las pruebas de posesión | Que solo ella pueda escribir el sobre, solo la pareja pueda leerlo y cualquiera de los dos pueda cerrar | Nunca un secreto que permita descifrar. |
| Día de la última actividad del buzón | Borrar los vínculos inactivos | Solo el día, sobrescrito, sin historial (CON-030, D-06). |
| Marca de cambio del móvil de él | Avisar a ella si él recupera Consona en otro móvil | Sin fecha. Se borra al entregarla (CON-030, D-08). |

### 2.2. Qué no cambia

* El servicio sigue sin poder **leer, inferir, indexar ni registrar** fechas, fases, variables ni derivados. La fase, el día, la ventana y las estimaciones se calculan solo en los dispositivos, y nunca viajan.
* Sin cuentas, correo, teléfono, nombres, cookies, analítica, telemetría, informes remotos de errores ni logs de contenido o de IP.
* **Un solo destino:** del móvil de ella al de él. Ningún otro dispositivo, persona o servicio, ni copias de seguridad hechas por Consona.
* El consentimiento de ella sigue siendo directo, granular, revocable y dado en su propia app (ADR-001 §3, CON-007).

## 3. Justificación

La línea base (§5) dice que la comodidad no justifica excepciones. Esta no se justifica por comodidad, sino por tres motivos:

1. **Soberanía de ella.** Sin relé, los datos de ella llegan al móvil de él porque él los teclea o porque se los dicta. Con el relé, la fuente es siempre ella, y lo que él ve es exactamente lo que ella comparte.
2. **Control efectivo.** Con ADR-001, ella no puede corregir ni borrar a distancia un dato del móvil de él (CON-008 §0). Con el relé, lo que corrige o borra llega al móvil de él la próxima vez que lo abre (JUA-42 §1.1). La retirada del consentimiento ya era posible y no cambia.
3. **Viabilidad.** Muchas parejas no viven juntas o no coinciden cuando empieza la regla. Un traspaso que exige presencia física dejaría fuera a esas parejas, o empujaría a la entrada indirecta por parte de él.

**Lo que se pierde, y se dice.** La promesa a ella pasa de «tus datos nunca nos llegan» a «tus datos viajan cifrados de extremo a extremo y no podemos leerlos» (JUA-42 §4.2). Es cierta para el contenido, con dos límites: el servicio ve metadatos (que llega un sobre y cuándo), y «no podemos leerlos» depende de que el código servido sea el publicado (CON-030 §9).

## 4. Salvaguardas vinculantes

Son acumulativas, se añaden a las condiciones C1 a C10 de ADR-001 y las detalla CON-030.

| ID | Salvaguarda | Dónde se detalla |
|---|---|---|
| R1 | **Claves solo en los dispositivos.** El servicio no tiene claves, ni copia de ellas. | JUA-42 §4.4, punto 1; CON-030 §5.1 |
| R2 | **Emparejamiento verificado** con un código corto que los dos comparan, y un compromiso previo para que el servidor no pueda forzarlo. La confirmación del código y el consentimiento se hacen siempre en la app de ella. | JUA-42 §4.4, punto 2; CON-030 §5.2 |
| R3 | **Sobre autenticado y firmado por ella**, con un contador creciente para que no se pueda devolver un sobre antiguo con datos ya borrados. Solo ella puede escribir. | CON-030 §5.3 y §5.4 |
| R4 | **Tamaño fijo y estado completo**, para que una confirmación, una corrección y un sobre sin cambios sean indistinguibles. | JUA-42 §4.4, puntos 4 y 5 |
| R5 | **Un sobre en cada apertura de la app de ella**, para que el servidor vea aperturas, no confirmaciones. | JUA-42 §4.5 |
| R6 | **Solo el alcance consentido.** El sobre lleva solo lo que ella ha aceptado compartir, y la app de él rechaza lo demás. | JUA-42 §4.4, punto 6 |
| R7 | **Conservación mínima:** solo el último sobre, que se borra al llegar otro, al deshacerse el vínculo (lo deshaga quien lo deshaga) o tras una inactividad larga. Los plazos los fija la EIPD. | JUA-42 §4.3 y §4.3.1 |
| R8 | **Sin IP ni logs**, y proveedor europeo que permita desactivar los logs de acceso. Si no lo permite, queda descartado. | CON-008 §7.2; CON-030 §10 |
| R9 | **Integridad del código servido:** cuentas protegidas, dependencias revisadas, huellas publicadas y vigilancia externa. | CON-030 §9 |
| R10 | **Desbloqueo del dispositivo** antes de confirmar, cambiar el consentimiento, borrar, cerrar el vínculo o crear una copia. | JUA-42 §5; CON-030 §8 |

## 5. Cambios en los documentos vigentes

Vigentes desde la aceptación, el 26-11-2026. Cada documento afectado lleva una nota en el punto que cambia, con un enlace a esta tabla. Los textos originales se conservan para que se vea qué cambió. CON-008 se reescribe en la condición A5.

| Documento | Texto vigente | Cambio |
|---|---|---|
| ADR-001 §2 | El servicio no puede «recibir, inferir, almacenar, indexar, transmitir o registrar» datos de ciclo. | Se añade: «salvo la transmisión y el almacenamiento temporal de sobres cifrados de extremo a extremo que autoriza ADR-003, con sus salvaguardas». Recibir, inferir, indexar y registrar siguen prohibidos. |
| ADR-001 §2 | «No existirá […] copia de seguridad […] que reciba dichos datos.» | Se aclara: Consona no hace ni guarda copias. Cada persona puede crear una copia cifrada de lo suyo y guardarla donde quiera. La de él nunca lleva datos de ella (JUA-42 §8). |
| ADR-001 §3, punto 3 | «Los datos de ciclo no atraviesan este servicio.» | «Los datos de ciclo solo atraviesan este servicio cifrados de extremo a extremo, y el servicio no puede leerlos (ADR-003).» |
| ADR-001 §3, punto 4 | Los datos «no se sincronizan con el servicio ni con otros dispositivos». | Se transmiten del dispositivo de ella al de él, solo por el relé cifrado de ADR-003. No se sincronizan con ningún otro dispositivo. |
| ADR-001 §4 | Prohíbe «peticiones de seguimiento recurrentes del dispositivo receptor». | Se aclara: el sobre sale del móvil de ella solo cuando ella abre su app, y el de él lo lee solo cuando él abre la suya. No hay sondeo, segundo plano ni push. No es seguimiento. |
| ADR-001 §6 | La excepción «no debe ampliarse implícitamente a cuentas, notificaciones de fase, calendarios compartidos ni sincronización». | Se mantiene, y se añade: el relé de ADR-003 es la única ampliación, y no se extiende a otros destinatarios, mensajería ni avisos del servidor. |
| ADR-002 §3 | Las variables «se conservan exclusivamente en el dispositivo», el servicio no las «recibe, deduce, almacena ni registra», y los metadatos de calidad «no salen del dispositivo». | Las variables consentidas, su fecha y su fuente viajan dentro del sobre cifrado al dispositivo de él. El servicio solo guarda el sobre, sin poder leerlo. La fase estimada y la cobertura no salen nunca. |
| ADR-002 §5, punto 7 | Historial «sin exportación, sincronización […]». | Salvo el relé cifrado hacia el dispositivo de él, con el alcance consentido, y la copia cifrada de ella. |
| ADR-002 §7, P8 | Las variables, inferencias y contenido «no salen del dispositivo». | Las variables consentidas solo salen cifradas de extremo a extremo hacia el dispositivo de él. Las inferencias y los derivados no salen nunca. |
| Línea base §3 («Datos de ciclo y variables») y §5 | «Exclusivamente en el dispositivo que los conserva»; sin «almacenamiento remoto». | En los dispositivos de ella y de él. El servicio solo guarda el último sobre cifrado, de forma temporal (ADR-003). |
| CON-008 §0, §0.1 y §2 | El control no tiene datos de ciclo; relé de estados opacos; rechazo de cualquier campo de ciclo. | Lo enumera JUA-42 §6. El rechazo de campos semánticos se mantiene: el servicio solo ve el sobre. |

## 6. Alternativas consideradas

| Opción (JUA-42 §4.7) | Por qué no |
|---|---|
| 1. Solo QR o proximidad, sin servidor | Exige estar juntos en cada confirmación. Es la **alternativa si alguna condición de §7 resulta inviable** (§8). |
| 2. Relé solo para el alta (JUA-29 original) | Las confirmaciones seguirían exigiendo presencia, y la corrección y el borrado a distancia no serían posibles. |
| 4. Relé más QR cuando están juntos | Añade una vía sin metadatos, pero también un segundo mecanismo que probar. Queda para más adelante. |
| Que él teclee las fechas de ella | Ella deja de ser la fuente, y se acerca a los modelos C y D, no aprobados. |

## 7. Condiciones vinculantes antes de datos reales o piloto

Como en ADR-001 §5, la aceptación no autoriza implementar con datos reales, desplegar el relé ni empezar un piloto. Las condiciones son acumulativas y se suman a C1–C10 de ADR-001 y P1–P8 de ADR-002. Si el dictamen jurídico (A1) o la EIPD (A2) imponen cambios, este ADR se revisa con una versión nueva antes de seguir.

| ID | Condición | Evidencia |
|---|---|---|
| A1 | Revisión jurídica (JUA-22) | Dictamen sobre las preguntas de JUA-42 §4.6, sin objeciones que impidan el relé o con las condiciones que imponga. |
| A2 | EIPD y evaluación de violencia tecnológica (JUA-44) | Plazos fijados ({N} días de papelera, inactividad, marcador de cierre) y evaluación de la correlación entre aperturas y regla. |
| A3 | Modelo de amenazas (JUA-43) | Evaluación de los riesgos R-01 a R-10 de CON-030 §13, con R-02 resuelto. |
| A4 | Arquitectura revisada (JUA-47) | CON-030 revisado por producto, seguridad e ingeniería, con D-05 decidido. |
| A5 | Contrato verificable (CON-008) | Esquema cerrado ampliado con el sobre y las pruebas de posesión, con fixtures válidos e inválidos. |
| A6 | Prototipo con datos ficticios | Emparejamiento, sobre, cierre y borrado funcionando en iOS y Android, con las pruebas de JUA-17 y JUA-18. |

## 8. Consecuencias

**A favor:** ella es la fuente única de sus datos, puede corregir y borrar a distancia, y el modelo sirve a parejas que no conviven.

**En contra, y aceptado:**

* Consona pasa a transmitir y guardar temporalmente datos de salud cifrados. Jurídicamente, es probable que eso sea tratamiento de datos de salud (JUA-42 §4.6, punto de partida 1), con sus obligaciones.
* El servicio ve metadatos: cuándo abre ella su app y cuándo la abre él.
* «No podemos leerlos» depende de la integridad del código servido, que en una app web solo se puede reducir, no garantizar (CON-030 §9).
* Más complejidad: emparejamiento, claves, firma, buzón y cierre, que hay que probar.

**Si alguna condición resulta inviable**, o el dictamen jurídico lo desaconseja: la primera versión usa la opción 1 (QR o proximidad, sin servidor) y ADR-001 queda como está. Si tampoco es viable, Consona conserva el modelo A: educación sin datos de ciclo de otra persona.

## 9. Referencias

| Documento | Uso |
|---|---|
| [ADR-001](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md) | Decisión que se modifica. |
| [ADR-002](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md) | Decisión que se modifica en §3, §5 (punto 7) y §7 (P8). |
| [Línea base](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_LINEA_BASE_Y_BACKLOG.md) | §3 y §5. |
| [JUA-42](../security/JUA-42_REVISION_ARQUITECTONICA_MODELO_E.md) | Decisiones de producto y preguntas jurídicas. |
| [CON-030](../security/CON-030_ARQUITECTURA_PRIMERA_VERSION.md) | Arquitectura y riesgos. |
| [CON-007](../security/CON-007_AUTORIZACION_REVOCACION_Y_OFFLINE.md) y [CON-008](../security/CON-008_REQUERIMIENTOS_TECNICOS_Y_API.md) | Retirada, borrado y contrato del servicio. |
