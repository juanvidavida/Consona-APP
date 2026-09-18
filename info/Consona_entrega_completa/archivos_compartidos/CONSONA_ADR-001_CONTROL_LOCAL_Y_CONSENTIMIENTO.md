# Consona — ADR-001: Titularidad, control local, consentimiento y revocación

**Estado:** **ACEPTADA CON CONDICIONES**  
**Fecha de decisión:** 14 de septiembre de 2026  
**Decisión:** Modelo E — consentimiento y revocación con coordinación mínima, sin datos de ciclo en el servicio remoto.

## 1. Contexto

Los datos de inicio de sangrado, duración de ciclo, fases calculadas, variables de síntomas o estado e inferencias derivadas pueden revelar información relativa a la salud. El diseño histórico permitía que una persona introdujera o conservara información de su pareja sin que la persona afectada tuviera control técnico directo sobre la consulta, corrección o eliminación.

Los modelos históricos A–D no resuelven por sí solos el problema cuando se desea conservar una estimación personalizada y permitir una revocación efectiva. El modelo A —educación sin datos— sigue siendo la alternativa de menor riesgo. Sin embargo, se ha aprobado estudiar un modelo de coordinación restringido, denominado **modelo E**, que no recibe datos de ciclo.

## 2. Decisión

Consona mantiene la regla de que los datos de ciclo, las variables consentidas y las inferencias asociadas se conservan **exclusivamente en el dispositivo que los almacena**. No existirá una base de datos remota de ciclos, una cuenta de ciclo, sincronización, copia de seguridad, analítica, telemetría, soporte remoto ni registro de aplicación que reciba dichos datos.

Se autoriza una excepción estricta: un **servicio mínimo de consentimiento y revocación** puede procesar únicamente los siguientes metadatos de coordinación:

| Categoría permitida | Finalidad exclusiva | Prohibiciones expresas |
|---|---|---|
| Identificador pseudónimo efímero o rotable | Vincular técnicamente una autorización con el dispositivo receptor | No usar nombre, correo, teléfono, cuenta de usuario, fingerprint ni identificador publicitario |
| Vínculo técnico entre dispositivos | Dirigir una solicitud genérica al dispositivo que conserva datos locales | No describir a la pareja ni incluir contenido, nombre o dato de ciclo |
| Estado de consentimiento | Autorizar, retirar o invalidar el acceso local previamente aceptado | No incorporar alcance clínico, fechas, fase, variables, síntomas, anticoncepción, inferencias o historial |
| Solicitud de revocación | Avisar al dispositivo receptor de que debe borrar y bloquear el acceso local | No incluir datos de ciclo, variables, inferencias ni permitir leer una confirmación de contenido local |

El servicio no puede recibir, inferir, almacenar, indexar, transmitir o registrar fechas de sangrado, duración de ciclos, fases, variables, síntomas, notas, anticoncepción, inferencias, métricas de uso, contenido de pantalla ni derivados de esos datos. No se permiten analítica, telemetría, píxeles ni logs de aplicación con datos personales o de ciclo.

## 3. Flujo de referencia

El flujo siguiente describe el objetivo de diseño; no es todavía una especificación de implementación. Antes de programarlo deben cerrarse las condiciones de la sección 5.

1. La persona afectada recibe una explicación clara de qué se guardará localmente, en qué dispositivo, para qué se utilizará, qué no puede deducir la aplicación y cómo retirar la autorización.
2. Esa persona otorga o rechaza directamente el consentimiento mediante un mecanismo que no se reduzca a una casilla declarativa de la otra persona.
3. El servicio de coordinación conserva solo los metadatos permitidos que hacen posible dirigir el estado de consentimiento y una revocación genérica. Los datos de ciclo no atraviesan este servicio.
4. Si se autorizan datos semilla, variables o aprendizaje local, se conservan exclusivamente en el navegador o dispositivo receptor. No se sincronizan con el servicio ni con otros dispositivos. ADR-002 exige que la autorización distinga categorías y fuente de los registros.
5. Cuando la persona afectada retira el consentimiento, el servicio emite una solicitud de revocación sin contenido de ciclo. Al recibirla, el dispositivo receptor debe bloquear el acceso, borrar los datos locales, variables, cálculos e inferencias derivados, claves asociadas y caché pertinente, y no permitir nuevas estimaciones o personalización sin un consentimiento nuevo.

La casilla de “mi pareja sabe que uso la aplicación” puede existir como recordatorio de comportamiento, pero no equivale al consentimiento directo de la persona afectada y no satisface este ADR por sí sola.

## 4. Límite de conectividad

Durante el piloto no habrá comprobación periódica del estado de consentimiento. El servicio no debe recibir peticiones de seguimiento recurrentes del dispositivo receptor con fines de vigilancia o perfilado.

Una revocación no puede producir un borrado instantáneo en un dispositivo que se encuentra sin conexión, apagado o que no recibe la solicitud. La consecuencia es que el dispositivo deberá borrar y bloquear tan pronto como reciba la revocación; hasta ese momento no debe afirmarse una garantía de borrado remoto inmediato. La interfaz y los documentos de privacidad deben explicar este límite de forma clara. La evaluación de riesgos debe decidir si hacen falta medidas locales adicionales, como limitar el acceso mientras no pueda comprobarse la validez de un consentimiento dentro de una ventana definida.

## 5. Condiciones vinculantes antes de desarrollo de seguimiento o piloto

La aceptación del modelo E no autoriza la implementación inmediata de un calendario, una predicción, un historial ni un piloto. Las siguientes condiciones son acumulativas.

| ID | Condición | Evidencia de cumplimiento |
|---|---|---|
| C1 | Esquema de datos mínimo y verificable | Documento técnico que enumere todos los campos, prohíba datos de ciclo y demuestre que no se pueden insertar campos adicionales sin revisión |
| C2 | Identificadores no identificativos y rotables | Diseño de emparejamiento que evite cuentas, nombres, correo, teléfono, fingerprint y publicidad; política de rotación y expiración |
| C3 | Consentimiento directo, comprensible y granular | Prototipo y revisión de texto que demuestren que la persona afectada puede aceptar, rechazar y entender consecuencias sin mediación de su pareja, por categoría y fuente cuando se active ADR-002 |
| C4 | Revocación y borrado local efectivo | Pruebas automatizadas y manuales de revocación recibida, bloqueo, borrado de datos, variables, inferencias, derivados, claves y caché |
| C5 | Caso sin conexión tratado | Modelo de estados, mensajes honestos, mitigaciones y pruebas para receptor sin red, apagado, desinstalado o con mensajes retrasados |
| C6 | Sin registros sensibles ni salida de datos | Revisión de red, infraestructura y dependencias que pruebe ausencia de datos de ciclo, analítica, telemetría, informes remotos y logs personales |
| C7 | Seguridad del emparejamiento | Modelo de amenazas y pruebas contra suplantación, emparejamiento coercitivo, acceso persistente, reenvío y dispositivos comprometidos |
| C8 | Revisión jurídica, EIPD y violencia tecnológica | Revisión profesional de privacidad, consentimiento, roles, retención y riesgos de control coercitivo antes de cualquier piloto |
| C9 | Motor de estimación responsable | Integración del motor auditado con UTC, anticoncepción, rango individual, margen, caducidad y mensajes no anticonceptivos |
| C10 | Plan de contingencia | Procedimiento de desactivación, borrado y comunicación si se descubre una falla de control o exfiltración |

## 6. Consecuencias

El modelo E permite estudiar una revocación remota **sin transferir datos de ciclo**, pero introduce tratamiento remoto de metadatos de consentimiento y vínculo entre dispositivos. Esta es una excepción limitada a la regla local y no debe ampliarse implícitamente a cuentas, notificaciones de fase, calendarios compartidos ni sincronización.

Consona no debe presentar este mecanismo como vigilancia consentida. El producto mantiene una única persona/perfil, sin exportación y sin historial retrospectivo amplio. ADR-002 permite registros de variables físicas, emocionales y cognitivas como categorías locales cerradas si existe consentimiento granular, pero exige separar autoinforme y observación, limitar retención y conservar el control de la persona afectada. El deseo sexual y el consentimiento sexual son una conversación y un consentimiento actual, no variables algorítmicas.

Si cualquiera de las condiciones anteriores resulta inviable, excesivamente riesgosa o jurídicamente insuficiente, el modelo E se suspende y Consona conserva el modelo A: educación sin datos de ciclo de otra persona.

## 7. Estado del backlog derivado

| Trabajo derivado | Backlog |
|---|---|
| Especificar autorización, retirada, borrado y comportamiento sin red | CON-007 |
| Definir contrato de minimización del servicio | CON-008 |
| Validar jurídicamente el modelo E | CON-010 |
| Realizar EIPD y revisión de violencia tecnológica | CON-013 |
| Modelar amenazas y probar revocación | CON-015 |
| Definir arquitectura local-first con excepción limitada | CON-030 |
| Completar pruebas de privacidad, seguridad y ausencia de recursos externos | CON-035 |
| Diseñar y validar aprendizaje local de variables | CON-037, CON-038 y CON-039 |

## 8. Referencias internas

| Referencia | Material |
|---|---|
| [1] | `CONSONA_LINEA_BASE_Y_BACKLOG.md` — línea base y backlog vigente |
| [2] | `CONSONA_DEFINICION_DE_APP.md` — alcance de producto y experiencia |
| [3] | `cycleteller/docs/02-decisiones.md` dentro de `cycleteller-traspaso.zip` — ADR histórico sustituido en lo relativo a ADR-001 |
| [4] | Notas aportadas el 14 de septiembre de 2026 — decisión de servicio mínimo de consentimiento y revocación |
