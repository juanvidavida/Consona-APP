# JUA-42 — Revisión arquitectónica del modelo E

**Estado:** borrador de decisión. Respuestas de producto del 17-11-2026 y revisión del 19-11-2026. Pendiente: actualizar las preguntas para la revisión jurídica (§4.6) con estas decisiones.
**No modifica todavía** ADR-001, la línea base ni CON-008. **No habilita** datos reales, persistencia, emparejamiento ni piloto.
**Relacionado:** JUA-13 (puerta del modelo E), JUA-28 (formulario de consentimiento), JUA-29 (ADR-003, excepción a ADR-001), JUA-41 (app de ella), JUA-43 (modelo de amenazas), JUA-44 (EIPD y violencia tecnológica), JUA-22 (revisión jurídica), JUA-47 (arquitectura definitiva).

> Este documento no es asesoramiento jurídico. El §4.6 ordena las preguntas para la revisión profesional de JUA-22; no las responde.

## 0. Resumen

| # | Pregunta | Decisión | Estado |
|---|---|---|---|
| 1 | ¿Puede ella guardar sus datos en su dispositivo? | Sí: todo lo que ha compartido. Si borra un dato, se borra también en el dispositivo de él, con aviso previo y posibilidad de deshacer. | Decidido (19-11). Falta fijar retención (§1). |
| 2 | ¿Cómo pasan los datos al dispositivo de él? | Por el servidor, cifrados de extremo a extremo. Un sobre con el estado completo en cada apertura de su app. El buzón guarda solo el último, lo conserva hasta que llega otro y no caduca mientras el vínculo esté activo. | Decidido (19-11), sujeto a ADR-003 y a la revisión jurídica (§4). |
| 3 | ¿Alta a distancia, confirmaciones o las dos? | Las dos. Primera versión: solo relé, sin QR (opción 3). | Decidido (19-11). |
| 4 | ¿Avisos en el dispositivo de ella? | Sugerencias dentro de la app para el piloto. | Decidido (17-11, §3). |
| 5 | ¿Qué puede afirmar la app sobre quién confirmó? | Desbloqueo del dispositivo antes de confirmar. | Decidido (19-11, §5). |
| — | ¿Correo automático a las tres semanas? | Tal como está planteado, no encaja. Hay alternativas. | Para discutir (§7). |

## 1. Datos en el dispositivo de ella

**Decisión (17-11).** La app de ella guarda en local lo que ha compartido: fechas de inicio de sangrado, duraciones y las variables de la taxonomía local que haya consentido (ADR-002). Amplía la decisión del 13-11 (CON-008 §0.1, punto 1), que solo hablaba de fechas y duraciones.

**Por qué.** Ella es la titular de los datos. Necesita verlos, corregirlos y borrarlos, y su motor local los usa para las sugerencias de actualización.

### 1.1. Borrado y corrección (decidido el 19-11)

* **Lo que ella borra se borra también en el dispositivo de él.** Viaja en el siguiente sobre (§4.4): como cada sobre lleva el estado completo, basta con que el dato ya no esté. No hace falta un tipo de mensaje distinto para corregir.
* **Aviso antes de borrar.** Texto provisional, para JUA-28 y la app de ella:
  > ES: Si borras este dato, también se borrará en el móvil de tu pareja la próxima vez que abra Consona. Puedes deshacerlo durante {N} días.
  > CA: Si esborres aquesta dada, també s'esborrarà al mòbil de la teva parella la propera vegada que obri Consona. Ho pots desfer durant {N} dies.

  Dice «la próxima vez que abra Consona» porque no se puede prometer un borrado instantáneo en un dispositivo que no está conectado (CON-007).
* **Reversible.** El dato borrado se queda en una papelera **solo en el dispositivo de ella** durante {N} días. Si lo recupera, vuelve en el siguiente sobre. Pasado ese plazo, se borra del todo. {N} lo fija la EIPD.
* **Corregir es lo mismo:** ella cambia el dato y el siguiente sobre lleva el valor nuevo.
* **Borrar un dato no es retirar el consentimiento.** Retirarlo sigue el protocolo de CON-007: el dispositivo de él bloquea y borra todo, y para volver hace falta un consentimiento nuevo.

### 1.2. Pendiente

* **Retención.** Propuesta: la misma ventana que en el dispositivo de él (historial de 6 ciclos, DA-10), para que ninguno de los dos guarde más que el otro.

### 1.3. Cambio formal (aceptado el 19-11)

Se modifica el requisito 9 de CON-008 («el dispositivo de control no pide, no muestra y no guarda datos de ciclo»). El cambio se hace cuando se acepte este documento.

## 2. Flujos de datos (primera versión)

```mermaid
flowchart LR
  E["Dispositivo de ella<br/>consentimiento por alcance<br/>fechas y variables consentidas<br/>papelera local<br/>motor local y sugerencias"]
  S["Servicio de coordinación<br/>buzón: solo el último sobre<br/>sin caducidad mientras el vínculo esté activo<br/>no puede descifrar<br/>sin logs de contenido ni IP"]
  R["Dispositivo de él<br/>datos recibidos<br/>motor local y «Hoy»"]
  X["Nunca sale en claro:<br/>fechas, fases, variables,<br/>alcance, fuente"]

  E -->|"en cada apertura: sobre cifrado<br/>de tamaño fijo con el estado completo"| S
  S -->|"al abrir su app: lee el último sobre;<br/>se conserva hasta que llega otro"| R
  E -->|"revocación genérica"| S
  S -->|"señal de revocación"| R
  S -.-x X
```

| Dato | Dispositivo de ella | Servicio | Dispositivo de él |
|---|---|---|---|
| Consentimiento por alcance | Sí, en claro | Solo el estado técnico `granted` / `revoked` (ya permitido) | Sí, lo que necesita para respetarlo |
| Fechas y duraciones | Sí | Solo cifradas: el último sobre, hasta que llega otro o se cierra el vínculo (**excepción nueva**) | Sí |
| Variables consentidas | Sí | Solo cifradas, igual que las fechas (**excepción nueva**) | Sí, si el alcance lo permite |
| Datos borrados por ella | En la papelera, {N} días | No | No |
| Fase, día, ventana, estimaciones | Las calcula su motor | Nunca | Las calcula su motor |
| Claves de cifrado | Sí | Nunca | Sí |

## 3. Avisos en el dispositivo de ella

**Decisión (17-11).** Para el piloto se mantienen las sugerencias dentro de la app, al abrirla o al volver a ella ([app-ella-sugerencias-v0.1.0.md](../education/app-ella-sugerencias-v0.1.0.md), decisión del 13-11). Sin notificaciones push, sin avisos programados y sin aviso genérico de respaldo.

**Consecuencia aceptada.** Si ella no abre la app, no se le sugiere confirmar, y el dispositivo de él puede pasar a «sin confirmar». Es coherente con S-02: la falta de registro solo significa que falta información.

**Fuera del piloto.** Un aviso fuera de la app solo es posible con una app nativa (notificación local, sin servidor). Web Push queda descartado: el servidor que lo envía sabría cuándo espera ella la regla.

## 4. Paso de datos por el servidor (preguntas 2 y 3)

### 4.1. Qué se propone (aceptado el 19-11)

En el alta, ella decide en su app qué comparte, da su consentimiento y la app envía al dispositivo de él un **sobre cifrado** con los datos. Después, cada vez que ella abre la app, sale un sobre nuevo con el estado completo: si ha confirmado una regla, corregido o borrado algo, va dentro. Los sobres pasan por el servidor de Consona, que no puede leerlos.

**Ventajas:**

* Sirve a parejas que no viven juntas o no coinciden cuando empieza la regla.
* Un solo flujo para consentimiento y datos, sin que él teclee fechas de ella. Es lo que pide la soberanía de ella: la fuente es ella.
* La confirmación llega en cuanto él abre la app, y su estimación mejora.

### 4.2. Qué cambia respecto a lo aprobado

| Documento | Qué dice hoy | Qué habría que cambiar |
|---|---|---|
| ADR-001 §2 | El servicio no puede «recibir, inferir, almacenar, indexar, **transmitir** o registrar» datos de ciclo. Ninguna excepción para contenido cifrado. | ADR-003: excepción para transmitir y guardar temporalmente sobres cifrados de extremo a extremo, con las salvaguardas de §4.4 y §4.5. |
| ADR-001 §4 | Prohíbe «peticiones de seguimiento recurrentes del dispositivo receptor». | ADR-003 debe aclarar que el sobre en cada apertura sale del dispositivo de ella, solo cuando ella abre la app, y no es seguimiento. |
| Línea base §5 | La comodidad no justifica excepciones distintas de la aprobada. | Justificarla por soberanía y viabilidad (la fuente es ella), no por comodidad. |
| CON-008 §0 y §2 | Relé de estados técnicos opacos; rechaza cualquier campo de ciclo. | Nuevo tipo de mensaje: sobre opaco de tamaño fijo, y buzón con caducidad. El rechazo de campos semánticos se mantiene: el servidor solo ve el sobre. |
| JUA-29 | Excepción limitada al alta a distancia. | Ampliar a alta y confirmaciones, y a toda la vida del vínculo. |

**La promesa a ella (19-11).** Propuesta de producto: «Tú decides sobre tus datos, que van cifrados punto a punto y no podemos leer». Revisión:

| Parte | ¿Es cierta? | Ajuste |
|---|---|---|
| «Tú decides sobre tus datos» | Sí en lo que controla la app: qué comparte, corregir, borrar, retirar. No puede impedir que él haga una captura o lo apunte, y el borrado en el móvil de él espera a que abra la app. | Más preciso: «Tú decides qué compartes». Los límites del borrado ya están en el aviso de §1.1. |
| «cifrados punto a punto» | **No es el término correcto.** «Punto a punto» se usa también para el cifrado de cada tramo (como HTTPS), en el que el servidor sí puede leer. Lo que se propone es cifrado **de extremo a extremo**. | «cifrados de extremo a extremo». |
| «no podemos leer» | Sí para el contenido, con dos condiciones: que el emparejamiento se compruebe con el código (§4.4, punto 2) y que la app que servimos sea la que publicamos (§4.4, punto 7). No es cierto para los metadatos: vemos que llega un sobre y cuándo. | Mantener, y explicar en el formulario qué vemos y qué no. |

**Propuesta de texto:**

> ES: Tú decides qué compartes. Tus datos viajan cifrados de extremo a extremo: nosotros no podemos leerlos.
> CA: Tu decideixes què comparteixes. Les teves dades viatgen xifrades d'extrem a extrem: nosaltres no les podem llegir.

Y en «Más información» del formulario (JUA-28):

> ES: Solo vemos que llega un mensaje cifrado y cuándo, no lo que contiene. Guardamos solo el último, hasta que llega uno nuevo. Si ninguno de los dos abre Consona en {plazo}, lo borramos.

### 4.3. Buzón (decidido el 19-11)

Un servidor solo puede pasar un mensaje sin guardarlo si los dos tienen la app abierta a la vez, así que las confirmaciones necesitan un buzón. **Decisión:** el servidor guarda el último sobre cifrado y se lo entrega a él cada vez que abre la app. Cada sobre nuevo sustituye al anterior (§4.4, punto 5): como mucho hay un sobre por pareja.

**El sobre no caduca mientras el vínculo esté activo** (decisión posterior del 19-11, que sustituye a «caducidad de más de 7 días»). Un plazo fijo podía borrar una confirmación antes de que él la viera, si ninguno de los dos abría la app en ese tiempo.

**El sobre se conserva después de entregarlo** (19-11, sustituye a «se borra al entregarse»). Así, si él recupera su app en un móvil nuevo, lee el estado completo al momento, sin esperar a que ella abra la suya (§8). El sobre solo se borra:

* cuando llega uno nuevo, que lo sustituye;
* cuando ella retira el consentimiento o se deshace el vínculo;
* cuando nadie abre la app durante un plazo largo de inactividad (por ejemplo, 90 días). El plazo lo fija la EIPD. Al cumplirse se borran el sobre y el vínculo.

En ADR-003 y en el formulario debe decirse así: «almacenamiento temporal cifrado», no «sin almacenamiento».

### 4.4. Cifrado

Requisitos mínimos (los detalla CON-015 / JUA-43):

1. **Las claves se crean en los dispositivos y nunca salen de ellos.** El servidor no tiene claves ni copia de seguridad de claves.
2. **Emparejamiento verificado con un código.** En la primera versión no hay QR (opción 3), así que el intercambio de claves pasa siempre por el servidor. Los dos comprueban un código corto (por ejemplo, 6 cifras): en pantalla si están juntos, por teléfono si no. Sin esa comprobación, el propio servidor podría hacerse pasar por él y leer los sobres.
3. **Cifrado autenticado** con primitivas estándar (Web Crypto o libsodium). Nada de criptografía propia.
4. **Sobres de tamaño fijo**, con relleno hasta el máximo posible (6 ciclos y todas las variables). Un sobre con una confirmación y otro sin cambios son indistinguibles.
5. **Cada sobre lleva el estado completo, y el buzón solo guarda el último.** Cambia la propuesta del 17-11, que hablaba de una referencia de un solo uso por sobre:
   * Él tiene que encontrar sus sobres, así que el buzón necesita una referencia que conozcan los dos. Se deriva de la clave compartida y rota cada cierto tiempo.
   * Con un sobre en cada apertura (§4.5), encadenar los sobres de una pareja solo revela cuándo abre ella la app, no cuándo confirma.
   * Con el estado completo no hacen falta sobres de relleno ni de corrección, el orden de llegada no importa y en el servidor hay como mucho un sobre por pareja.
6. **Solo el alcance consentido.** El sobre contiene solo lo que ella ha aceptado compartir, y él rechaza lo que no corresponda a un alcance vigente.
7. **La app que servimos tiene que ser la publicada.** En una app web, quien sirve el código podría cambiarlo para sacar las claves. Es el límite principal de «no podemos leerlos». Mitigación: código público y una huella de cada versión publicada que cualquiera pueda comprobar. CON-030 (JUA-47) decide el mecanismo.

### 4.5. Lo que el servidor ve aunque no pueda leer

**Decisión (19-11): un sobre en cada apertura.** La app de ella envía un sobre de tamaño fijo con el estado completo cada vez que se abre. El servidor ve aperturas de la app, no confirmaciones.

| Metadato | Qué revelaría sin medidas | Medida decidida | Riesgo residual |
|---|---|---|---|
| Momento del envío | La hora de la confirmación es la fecha de inicio de la regla. | Sobre en cada apertura. | Ella puede abrir más la app en los días previstos, porque las sugerencias aparecen en el intervalo (SUG-02). La correlación es más débil, pero existe. Lo evalúa la EIPD. |
| Frecuencia | Un sobre al mes parece una confirmación. | Sobre en cada apertura. | Igual que el anterior. |
| Vínculo entre envíos | Reconstruir el calendario de la pareja. | Buzón con referencia rotatoria; solo el último sobre. | El servidor sabe que un buzón existe y cuándo recibe y entrega sobres. |
| Dirección IP | Identificar y encadenar los envíos. | No registrar IP; proveedor que lo permita (CON-008 §7.2). | El proveedor de red la ve en tránsito. Más adelante, un relé que oculte la IP (Oblivious HTTP, RFC 9458). |
| Tamaño | Distinguir alta, confirmación y corrección. | Tamaño fijo (§4.4, punto 4). | Ninguno relevante. |

**Opciones descartadas:** el envío inmediato solo al confirmar, porque permite inferir la fecha de inicio y ADR-001 §2 prohíbe inferirla, y el retraso aleatorio hasta la siguiente apertura, porque retrasa la confirmación y con un sobre en cada apertura no hace falta. Si la EIPD lo pide, se puede añadir el retraso.

### 4.6. Preguntas para la revisión jurídica (JUA-22)

> **Pendiente de actualizar** con las decisiones del 19-11 (§1.1, §4.2, §4.3, §4.5, §5 y §7). Versión del 17-11:

Puntos de partida, por verificar:

* **Transmitir ya es tratamiento.** El RGPD llama tratamiento a la transmisión, aunque no se guarde nada (art. 4.2). Las fechas de menstruación son datos de salud (art. 9).
* **Datos cifrados.** Para quien tiene las claves (los dispositivos) siguen siendo datos personales. Para el servidor, que no puede descifrarlos, hay debate. Hay jurisprudencia reciente del TJUE sobre el carácter relativo de los datos seudonimizados (C-413/23 P, SEPD contra JUR, 4-9-2025) y unas directrices del CEPD sobre seudonimización (01/2025). Lo prudente es tratarlo como tratamiento de datos de salud y no apoyar el diseño en que no lo sea.
* **Metadatos.** La IP y el momento del envío pueden ser datos personales por sí solos, e incluso datos de salud si permiten inferir la regla (§4.5).

Preguntas:

1. ¿Qué papel tiene Consona en el relé (responsable del tratamiento) y qué papel tiene el proveedor de alojamiento (encargado, art. 28)? ¿Región y subencargados permitidos?
2. ¿Basta el consentimiento explícito de ella (art. 9.2.a) dado en su propia app, sin identidad ni cuenta (DA-09)? ¿Cómo se acredita?
3. ¿Cambia algo que el servidor no pueda descifrar? ¿Reduce obligaciones o solo riesgos?
4. ¿Las medidas de §4.4 y §4.5 bastan como protección de datos desde el diseño (art. 25) y seguridad (art. 32)?
5. ¿Qué plazo de inactividad del buzón es defendible (§4.3)?
6. ¿Cómo se informa a ella del cambio de promesa (§4.2) para que su consentimiento sea informado?
7. ¿Qué pasa con los datos de él? Él también es usuario y su dispositivo recibe datos de salud de otra persona.
8. EIPD (art. 35): parece obligatoria (datos de salud, posible situación de vulnerabilidad, tecnología nueva). ¿Qué alcance mínimo tiene antes del piloto?

### 4.7. Opciones comparadas

| Opción | Presencia | Servidor ve contenido | Metadatos de ciclo | Encaje con ADR-001 | Complejidad |
|---|---|---|---|---|---|
| 1. Solo QR o proximidad | En el alta y en cada confirmación | No | No | Encaja | Baja |
| 2. Relé solo para el alta (JUA-29 original) | En cada confirmación | No (cifrado) | Bajos: un solo envío | ADR-003 limitado | Media |
| **3. Relé para alta y confirmaciones** | Nunca | No (cifrado) | Mitigados con un sobre en cada apertura (§4.5) | ADR-003 amplio | Alta |
| 4. Opción 3 + QR cuando están juntos | Nunca obligatoria | No (cifrado) | Como la 3 cuando se usa el relé | ADR-003 amplio | Alta |

**Decisión (19-11): opción 3 para la primera versión.** La opción 4 queda para más adelante: añade una vía sin metadatos cuando están juntos, a cambio de un segundo mecanismo que probar.

### 4.8. Decisiones tomadas el 19-11

| Decisión | Resultado |
|---|---|
| Buzón | Aceptado. Solo el último sobre, que se conserva tras entregarlo; sin caducidad mientras el vínculo esté activo; borrado por inactividad larga, con plazo fijado por la EIPD (§4.3). |
| Momento del envío | Un sobre en cada apertura, con el estado completo (§4.5). |
| Opción 3 o 4 | Opción 3 para la primera versión (§4.7). |
| Emparejamiento | Siempre por el servidor, comprobado con un código corto (§4.4, punto 2). |
| Correcciones y borrados | Viajan en el siguiente sobre; borrado reversible con papelera local (§1.1). |
| Orden de trabajo | Actualizar §4.6 y después llevarlo a la revisión jurídica (JUA-22). |
| Cuenta o correo | Fuera de la primera versión. El emparejamiento se hace con un código en la app; CON-008 no cambia en este punto. |
| Varios dispositivos por persona | Fuera de la primera versión. |
| Recuperación | Copia cifrada para los dos, en un archivo que cada uno guarda donde quiera, sin pasar por Consona. La de él no lleva datos de ella (§8). |
| Código de recuperación | Se puede volver a mostrar tras desbloquear el móvil, con la opción «Cambiar código» (§8). |

## 5. Quién confirma (decidido el 19-11)

**Decisión.** Antes de cada confirmación, cada cambio de consentimiento y cada borrado, la app de ella pide el **desbloqueo del dispositivo** (huella, cara o código del móvil) mediante una passkey local con verificación de usuario.

* Si el móvil no tiene bloqueo de pantalla, la app pide activarlo antes de compartir nada. Sin bloqueo no se puede afirmar nada sobre quién confirma.
* CON-030 (JUA-47) debe comprobar que funciona en una PWA en iOS y en Android, y qué pasa si ella cambia de móvil o borra la passkey.

**Lo que la app puede afirmar.** «Confirmado en su dispositivo con su desbloqueo.» No puede afirmar «confirmado por ella»: ninguna app puede garantizar quién tiene el móvil en la mano (CON-008, requisito 10).

**Riesgo residual.** Que alguien la obligue a desbloquear, o que conozca su código. Va al modelo de amenazas (JUA-43) y a la evaluación de violencia tecnológica (JUA-44), junto con la presión para confirmar que ya recoge JUA-13.

## 6. Cambios en otros documentos cuando se acepte

* **ADR-003** (JUA-29): excepción para transmitir y guardar temporalmente sobres cifrados, con alcance «alta y confirmaciones» y las salvaguardas de §4.3 a §4.5.
* **CON-008:** requisito 9 (§1.3), sobre opaco de estado completo, buzón con borrado por inactividad y referencia rotatoria.
* **Línea base §5:** justificación de la excepción.
* **JUA-28:** promesa nueva (§4.2), aviso de borrado (§1.1), alta a distancia con código y petición de bloqueo de pantalla (§5).
* **JUA-41:** papelera local, sobre en cada apertura, desbloqueo antes de confirmar.
* **JUA-43 y JUA-44:** correlación entre aperturas y regla, emparejamiento a distancia, desbloqueo forzado, integridad del código servido.
* **JUA-47 (CON-030):** passkey local en PWA, huella de versiones publicadas.
* **`docs/governance/ruta-critica-modelo-e.md`:** pendiente de actualizar (corte del 2-10-2026).

## 7. Correo automático a las tres semanas (pregunta del 19-11)

**Pregunta.** ¿Se puede enviar un correo automático tres semanas después de la primera vez que se introducen datos?

**Tal como está planteado, choca con lo aprobado:**

* **Hace falta un correo**, y CON-008 §0 prohíbe correo, cuenta y contacto. C2 de ADR-001 pide identificadores no identificativos.
* **El servidor tendría que guardar el correo y la fecha de alta.** Uniría una identidad real con el uso de una app de ciclo y con un momento. Además, la fecha de la primera inserción está cerca de la fecha de la última regla que ella introduce.
* **Si el correo es para ella**, revela que usa Consona a quien tenga acceso a su buzón. En una situación de control coercitivo, eso es un riesgo directo (JUA-44).
* **Es una finalidad nueva** (art. 5.1.b del RGPD), con su propia base jurídica. Si es comercial, la LSSI (art. 21) exige consentimiento previo.

**Alternativas, de menos a más tratamiento:**

1. **Mensaje dentro de la app** a las tres semanas, calculado en el dispositivo. Sin servidor ni correo.
2. **Correo de seguimiento del piloto en una fecha fija para todo el grupo**, a una lista aparte (como la de la landing, JUA-32). Es voluntaria, con su propio consentimiento y sin relación con los datos de la app. El servidor no sabe cuándo se dio de alta nadie.
3. **El planteamiento original**, solo con ADR propio, EIPD y revisión jurídica. No se recomienda.

**Falta saber:** para qué es el correo (opinión sobre el piloto, recordatorio, otra cosa) y a quién va (a ella, a él o a los dos). La alternativa adecuada depende de eso.

## 8. Copias de seguridad y recuperación (decidido el 19-11)

Sin cuenta ni correo. Cada persona puede hacer una copia cifrada que guarda donde quiera. Consona no la guarda y no puede relacionarla con ninguna pareja.

| | Copia de ella | Copia de él |
|---|---|---|
| Contenido | Sus datos, su consentimiento y la credencial del vínculo | Solo la credencial del vínculo y sus ajustes. **Nunca datos de ella** |
| Al recuperar | Recupera todo y cierra el acceso del móvil perdido | Se reconecta al buzón, lee el último sobre (§4.3) y cierra el acceso del móvil perdido |
| ¿Necesita a la otra persona? | No | No |

**Por qué la copia de él no lleva datos de ella.** Una copia en su nube quedaría fuera del alcance de los borrados y de la retirada del consentimiento de ella (CON-007). Si ella ha retirado el consentimiento, la app de él lo ve al reconectarse y no recibe nada.

**Flujo de copia:**

1. Entra en Consona y elige «Crear copia de seguridad».
2. La app pide el desbloqueo del móvil (§5). La primera vez muestra el código de recuperación y pide apuntarlo.
3. Reúne lo que corresponde a su papel (tabla anterior).
4. Lo cifra en el móvil con una clave derivada del código.
5. Genera un archivo con nombre neutro por defecto (por ejemplo, `copia-2026-11-19.bak`), que se puede cambiar. Un nombre con «Consona» revelaría el uso de la app a quien vea su nube (JUA-44).
6. Abre el menú de compartir del móvil (Safari en iOS, Chrome en Android). En ordenador, descarga el archivo.
7. La persona lo guarda en Drive, Archivos, iCloud Drive o donde prefiera.
8. La app recuerda actualizar la copia; a ella, por ejemplo, cuando registra una regla.

**Código de recuperación:**

* Se puede volver a mostrar mientras se tiene el móvil, siempre tras desbloquearlo.
* Si se pierde el móvil sin haberlo apuntado, la copia no se puede abrir. Nosotros tampoco podemos. Hay que decirlo al crear la copia.
* «Cambiar código» genera un código nuevo y una copia nueva. Las copias antiguas siguen abriéndose con el código antiguo: la app sugiere borrarlas.
* Más adelante: sustituir el código por una passkey sincronizada (extensión PRF de WebAuthn), si funciona en iOS y Android.

**Fuera de la primera versión:** cuenta, correo, varios dispositivos por persona y copia automática.
