# Consona · Mapa de pantallas y wireframes

| Campo | Valor |
|---|---|
| Issue | JUA-26 |
| Versión | v0.3 · 20 oct 2026 (wireframes visuales en v0.2) |
| Estado | Primera versión validada (P-1, propuesta 1 de navegación, aprobada). Pendiente de alinear con la especificación del panel v1.1.0 (sección 6). |
| Diagrama | [`mapa-de-pantallas.mmd`](./mapa-de-pantallas.mmd) |
| Wireframes visuales | [`mapa-de-pantallas.html`](./mapa-de-pantallas.html) |
| Fuentes | `CONSONA_DEFINICION_DE_APP.md` §5 · `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` v1.0 (sustituida por [`panel-principal-v1.1.0.md`](./panel-principal-v1.1.0.md), PR #10) · `CON-007` · `src/App.jsx` · `content.v2.js` |

**Leyenda de estado:** **CONSTRUIDA** existe código (prototipo o provisional) · **ESPECIFICADA** documentada, sin construir · **BLOQUEADA** condicionada por ADR-001 / ADR-002. Aparecer en este documento no habilita ninguna función bloqueada.

---

## 1. Inventario

| ID | Capa | Pantalla | Origen | Estado | Nota |
|---|---|---|---|---|---|
| E | Entrada | Landing provisional | JUA-24 | CONSTRUIDA (provisional) | `landing/index.html` no está en `main` a 20 oct. |
| 0.1a–c | 0 · Antes del primer uso | Inicio educativo y acceso 18+ (3 pasos) | Definición §5 · Panel §4.1 · CON-005/033 | ESPECIFICADA | Incluye selector ES/CA/EN. |
| 0.2 | 0 · Antes del primer uso | Consentimiento directo de la persona afectada | ADR-001 · JUA-6 · JUA-20 (CON-007) | BLOQUEADA | Solo en el dispositivo de control de la persona afectada. |
| 1.1 | 1 · Uso diario | Hoy: fase, día, ventana, actualización, rueda y 4 tarjetas | JUA-5 · JUA-25 · JUA-23 | CONSTRUIDA (datos ficticios) | Ver D-01, D-06, D-07. |
| 1.2a–f | 1 · Uso diario | Estados excepcionales de Hoy | Panel §5 | ESPECIFICADA | Sin fases por anticoncepción = contenido propio, no error. |
| 2.1 | 2 · Comprender | Cómo funciona | JUA-7 · Panel §4.2 | ESPECIFICADA | Hoy es una sección ancla dentro de Hoy (D-02). |
| 2.2 | 2 · Comprender | SPM y TDPM (subpantalla de 2.1) | JUA-19 · JUA-16 · `docs/education/spm-tdpm-v0.4.0.md` | ESPECIFICADA | Texto en revisión clínica; archivo no está en `main`. |
| 2.3 | 2 · Comprender | Contenido educativo | Definición §5 | ESPECIFICADA | Sin issue propio (D-09). |
| C.1 | Control | Control de datos: revisar, retirar, borrar | JUA-20 · JUA-18 · `src/App.jsx` | CONSTRUIDA (parcial) | Solo vista informativa sin autorización. |
| C.2 | Control | Estados de retirada | CON-007 §3.8, §6 | BLOQUEADA | **Nueva** respecto al inventario de JUA-26. |
| X.1 | Condicionada | Datos semilla: fechas pasadas confirmadas | Definición §5–6 · ADR-001 | BLOQUEADA | Pregunta de anticoncepción primero. |
| X.2 | Condicionada | Dispositivo receptor y coordinación | JUA-21 (CON-008) · JUA-5 | BLOQUEADA | Solo estructura; no fija la vinculación. |
| X.3 | Condicionada | Aprendizaje local y patrones (fuera de Hoy) | ADR-002 · JUA-14 | BLOQUEADA | Sin wireframe: requiere decisión propia. |

## 2. Navegación

Diagrama completo: [`mapa-de-pantallas.mmd`](./mapa-de-pantallas.mmd).

**Primer uso:** Landing → 0.1a → 0.1b → 0.1c → Hoy. Sin datos de ciclo, Hoy abre en 1.2a «Datos insuficientes». 0.2 ocurre en otro dispositivo.

**Rutas permanentes**
- Hoy → «Cómo se calcula» → 2.1 Cómo funciona.
- Navegación principal → Comprender → 2.1 → 2.2 SPM y TDPM.
- Navegación principal → Comprender → 2.3 Contenido educativo.
- Navegación principal → Datos → C.1 Control de datos.
- «Atrás» vuelve al origen; nunca a la capa 0.

### P-1 (propuesta 1) · Navegación principal — VALIDADA (v1)
Barra inferior en móvil con tres pestañas: **Hoy** (1.1/1.2) · **Comprender** (2.1, 2.2, 2.3) · **Datos** (C.1). Sin contadores, insignias ni notificaciones. Cumple Panel §4.2. Se revisará cuando se desbloqueen X.1–X.3.

## 3. Wireframes (móvil primero)

Representación visual en [`mapa-de-pantallas.html`](./mapa-de-pantallas.html). Tipografía de la app: sistema (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto…`) para interfaz y datos; serif (`"New York", "Noto Serif", Georgia`) para títulos.

### E · Landing provisional — CONSTRUIDA
Logo + selector ES/CA/EN · imagen · titular · párrafo · bloque «no es anticonceptivo / no lee cómo se siente nadie / datos solo en tu dispositivo» · botón «Empezar». Sin formularios, cookies ni recursos de terceros.

### 0.1a · Qué es y qué no es — ESPECIFICADA
Progreso 1/3 · titular · bloque «Hace» · bloque «No hace» (diagnóstico, anticoncepción, leer el estado de la pareja) · selector de idioma · «Siguiente».

### 0.1b · Cómo calcula — ESPECIFICADA
Progreso 2/3 · cuatro puntos: fechas pasadas confirmadas; ventana, no día exacto; cambia al confirmar un nuevo inicio; algunos métodos no tienen fases · esquema de ventana (no datos reales) · «Atrás» / «Siguiente».

### 0.1c · 18+ y lectura confirmada — ESPECIFICADA
Progreso 3/3 · casillas sin marcar: «Tengo 18 años o más», «He leído cómo calcula Consona» · aviso: esto no sustituye el consentimiento de la pareja, que decide desde su propio dispositivo (CON-007 §1) · «Ir a Hoy».

### 0.2 · Consentimiento directo — BLOQUEADA (ADR-001 · CON-007 · CON-008)
Dispositivo de control de la persona afectada · qué se guardaría, dónde, para qué, qué no puede concluir, cómo retirarlo, límite sin conexión · alcances uno a uno (Sí/No, sin preselección) · «Rechazar» y «Aceptar» con igual peso · nunca en el dispositivo de quien consulta.

### 1.1 · Hoy — CONSTRUIDA (prototipo)
Fecha · bloque principal: día de ciclo, «Actualizado», fase, rueda en grises (intensidad = fase, nunca estado emocional), ventana y «Cómo se calcula →» · cuatro tarjetas: Qué pasa en su cuerpo · Qué puedes preguntarle · Qué te toca a ti · Qué no asumir · barra P-1. Sin nombre ni foto de la persona afectada.

### 1.2 · Estados excepcionales — ESPECIFICADA (Panel §5)
Sustituyen el bloque de fase; nunca muestran una fase no vigente.

| ID | Estado | Mensaje | Acción | Tarjetas |
|---|---|---|---|---|
| 1.2a | Datos insuficientes | Falta información confirmada para mostrar el ciclo. | Ver qué falta | Generales, sin fase |
| 1.2b | Datos antiguos | Actualiza el último inicio de sangrado confirmado para continuar. | Añadir fecha pasada (X.1) | Generales, sin fase |
| 1.2c | Anticoncepción sin fases | Con este método no mostramos fases. | Leer sobre el método | Set `sinFases` (content.v2) |
| 1.2d | Consentimiento retirado | El seguimiento no está disponible. | Revisar consentimiento | Ocultas o generales |
| 1.2e | Patrón sin evidencia | — (sin cambio visible) | — | Estado normal |
| 1.2f | Fuera de vigencia | No podemos mostrar el ciclo con la información disponible. | Ver por qué | Rueda oculta |

### 2.1 · Cómo funciona — ESPECIFICADA
«← Hoy» · acordeón: Qué datos usa · Por qué es una ventana · Actualización y caducidad · Anticoncepción · Lo que nunca deduce · Personalización local · enlace a SPM y TDPM. Funciona sin conexión; accesible con teclado y lector de pantalla.

### 2.2 · SPM y TDPM — ESPECIFICADA (revisión clínica)
«← Cómo funciona» · introducción · No es universal · Qué distingue SPM y TDPM · Consona no diagnostica (sin patrón por defecto) · Cuándo buscar atención sanitaria · cierre con una pregunta abierta.

### 2.3 · Contenido educativo — ESPECIFICADA
Pestaña Comprender · acceso a Cómo funciona · temas: el cuerpo en cada fase, variabilidad, consentimiento, sesgo de atribución, anticoncepción · cada artículo termina en pregunta o acción propia · sin «leído», progreso ni rachas.

### C.1 · Control de datos — CONSTRUIDA (parcial)
Estado («Sin autorización activa») · alcances en este dispositivo, uno a uno · Qué no registra nunca · Qué hace una retirada · «Retirar una autorización» deshabilitado sin autorización · sin historial ni fechas visibles.

### C.2 · Estados de retirada — BLOQUEADA (CON-007 §6)
Tres mensajes distintos: A · solicitud emitida · B · entrega no confirmable · C · borrado local ejecutado. Prohibido: «Los datos se han eliminado de todos los dispositivos».

### X.1 · Datos semilla — BLOQUEADA (ADR-001 C9)
Pregunta de método hormonal primero (No / Sí, cuál / Prefiero no decir) · último inicio de sangrado (solo fechas pasadas, sin texto libre) · fechas anteriores (3–6 máx.) · no se muestran como historial navegable.

### X.2 · Dispositivo receptor — BLOQUEADA (CON-008)
Estructura orientativa: mecanismo de vinculación pendiente · solo referencia opaca (nunca fechas, fases, nombres ni contenido) · estado de vinculación.

### X.3 · Aprendizaje local — BLOQUEADA (ADR-002)
Sin wireframe. Requiere decisión y especificación propias. Nunca en Hoy.

## 4. Reglas transversales

Todas las pantallas cumplen: sin nombres · sin historial · sin rachas · sin notificaciones · sin semáforos emocionales · sin recursos externos en tiempo de ejecución.

| Pantalla | Riesgo a vigilar |
|---|---|
| E | Analítica o píxeles en la landing. |
| 0.1a–c | Pedir el nombre de la pareja. |
| 0.2 | Coerción: debe poder rechazarse sin que la otra persona lo vea. |
| 1.1 | Color de fase leído como estado de ánimo. |
| 1.2 | Mostrar la última fase conocida como vigente. |
| 2.1 | Enlaces a fuentes externas. |
| 2.2 | Lectura como autodiagnóstico. |
| 2.3 | Progreso de lectura o insignias. |
| C.1 | Fechas guardadas como historial. |
| C.2 | Prometer un borrado remoto inmediato. |
| X.1 | Lista de fechas visible como historial. |
| X.2 | Que la vinculación revele identidad o ubicación. |

## 5. Diferencias prototipo ↔ especificación (tareas)

| ID | Pantalla | Referencia | Diferencia | Tarea | Destino |
|---|---|---|---|---|---|
| D-01 | 1.1 | Panel §1, §3 | Descargos repetidos en estado normal | Dejar solo ventana + «Actualizado» + «Cómo se calcula» | JUA-25 |
| D-02 | 2.1 | Panel §4.2 · JUA-7 | «Cómo funciona» es una sección ancla | Pantalla propia accesible desde Hoy y navegación | JUA-7 |
| D-03 | Global | Panel §4.2 · P-1 | No hay navegación principal | Implementar barra Hoy · Comprender · Datos | Nuevo |
| D-04 | 0.1 | Panel §4.1 | La app abre directamente en Hoy | Onboarding 0.1a–c con 18+ y lectura | Nuevo |
| D-05 | 1.2 | Panel §5 | Ningún estado excepcional | Implementar 1.2a–f con datos ficticios | Nuevo |
| D-06 | 1.1 | Panel §3 · content.v2 | Tarjetas fijas en fase lútea | Tarjetas por fase y set `sinFases` | JUA-23 |
| D-07 | 1.1 | Panel §3 | «Margen 10 días» no especificado; fecha dinámica vs. ventana fija | Decidir en JUA-25 | JUA-25 |
| D-08 | C.1 | CON-007 §2.1, §6 | Sin alcances ni estados de retirada | Lista por alcance y mensajes C.2 (deshabilitados) | JUA-20 |
| D-09 | 2.3 | Definición §5 | Contenido educativo sin issue | Crear issue con temas y estructura | Nuevo |
| D-10 | Global | Definición §8 | Sin selector ES/CA/EN | Selector en landing y onboarding | Nuevo |

## 6. Alineación pendiente con la especificación del panel v1.1.0

Los wireframes v0.2 se hicieron sobre la especificación v1.0. La v1.1.0 ([`panel-principal-v1.1.0.md`](./panel-principal-v1.1.0.md), PR #10) y las decisiones de JUA-28 y JUA-29 introducen cambios que aún no están dibujados. Hasta que se actualicen, prevalece la especificación.

| ID | Pantalla | Referencia | Diferencia | Tarea | Destino |
|---|---|---|---|---|---|
| D-11 | 1.1 | v1.1 §3.1, RU-05 a RU-07 y RU-12 | La rueda tiene cuatro segmentos sin proporción definida. | Segmentos proporcionales a la duración estimada de cada fase (declarada, calculada o de referencia), ventana dibujada como arco y descripción accesible con día y ventana. | JUA-25 |
| D-12 | 1.1 | v1.1 §3.2, ME-01 a ME-06 | No refleja cuándo se muestra «Menstruación». | Menstruación durante la duración del sangrado declarada o, si no la hay, días 1 a 3; después, fase folicular. | JUA-25 |
| D-13 | 1.1 | v1.1 §3.2, IT-01 a IT-10 | Falta la indicación de los días previos a la menstruación. | Añadir la variante «Días previos a la menstruación · estimación» en fase lútea, sin cambiar las tarjetas, el color ni el tono. | JUA-25 |
| D-14 | 1.1 | `home-cards-luteal-v0.1.0.md` (QPP), C-01, H-02 | La pregunta de ejemplo «¿Hay algo estos días que te esté pesando más de lo normal?» presupone un cambio en la fase lútea. | Usar el texto versionado: «¿Cómo estás hoy? ¿Hay algo que prefieras que tenga en cuenta?». | JUA-23 |
| D-15 | X.1 | v1.1 §4.3, DA-01 a DA-03 | Los datos semilla solo piden fechas. | Añadir la duración habitual del ciclo y la del sangrado, opcionales y cada una con su propio alcance. | JUA-28 |
| D-16 | 0.2 · X.1 | v1.1 §4.3, DA-05 y DA-08; JUA-28; JUA-29 | No indica cómo llegan los datos al dispositivo de quien consulta ni la frecuencia del consentimiento. | Reflejar el traspaso directo entre dispositivos en estudio, el alta a distancia pendiente de JUA-29 y el consentimiento inicial sin renovación periódica. | JUA-28 |

## Historial

| Versión | Fecha | Cambio |
|---|---|---|
| v0.1 | 20 oct 2026 | Borrador: inventario, navegación, wireframes, reglas, diferencias. |
| v0.2 | 20 oct 2026 | P-1 validada como primera versión. Paso a `docs/product/`. |
| v0.3 | 20 oct 2026 | Consolidación en el repositorio (JUA-26): sección 6 con las diferencias respecto a la especificación del panel v1.1.0, D-06 reasignada a JUA-23 y retirada del `preconnect` a Google Fonts en el HTML. Los wireframes visuales siguen en v0.2. |
