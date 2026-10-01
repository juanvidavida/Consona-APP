# Consona — Cuaderno editable de revisión humana para P1 de ADR-002

**Contrato sometido a revisión:** [`consona-local-taxonomy-v1.0.0.md`](./consona-local-taxonomy-v1.0.0.md)
**Esquema sometido a revisión:** [`consona-local-taxonomy-v1.0.0.schema.json`](./consona-local-taxonomy-v1.0.0.schema.json)
**Revisión de esta plantilla:** 2026-09-30
**Estado del contrato:** **Candidato; no aprobado.**
**Estado de P1 / JUA-10:** **En progreso. No cerrar mediante esta plantilla sin decisión explícita y evidencia completa.**

> **Regla de uso.** Este documento es una plantilla de decisión humana. Marcar una casilla exige que la persona responsable haya revisado la evidencia indicada y haya dejado una decisión, fecha y comentario. La existencia del contrato, del esquema o de fixtures sintéticos **no** aprueba P1, no habilita registros, almacenamiento local, observación de pareja, inferencias, sincronización ni piloto.

---

## 1. Cómo completar esta revisión

### 1.1 Convención de estados editables

Usar exactamente uno de estos estados por control y por categoría:

| Estado | Uso | Efecto |
|---|---|---|
| `Pendiente` | No se ha revisado la evidencia requerida. | No permite aprobar el control. |
| `Aprobado para contrato documental` | La decisión acepta el vocabulario y límite documental propuesto. | No habilita captura, persistencia ni piloto. |
| `Cambios solicitados` | El revisor ha identificado una modificación necesaria. | Requiere cambio versionado, nueva validación y nueva revisión. |
| `No aprobado` | La propuesta no es aceptable en su forma actual. | Bloquea P1 hasta una alternativa revisada. |
| `No aplicable` | El control no aplica con justificación explícita. | Requiere motivo y validación por producto y privacidad. |

### 1.2 Reglas de decisión

1. **No hay aprobación implícita.** Una casilla sin estado, responsable, fecha y evidencia sigue pendiente.
2. **La aprobación debe ser conjunta.** Producto, privacidad/seguridad y contenido/revisión clínica deben pronunciarse sobre los controles de su ámbito. Ingeniería confirma la verificabilidad, no sustituye las decisiones de producto, privacidad o contenido.
3. **La aprobación es documental y limitada.** Aun con todas las decisiones positivas, P1 no autoriza por sí sola P2, registros locales, datos de ciclo, inferencias, emparejamiento, red ni piloto.
4. **Toda modificación requiere trazabilidad.** Si cambia una categoría, fuente, intensidad, campo, prohibición o límite clínico, actualizar contrato, esquema, fixtures, pruebas, `CHANGELOG.md` y esta revisión antes de volver a decidir.
5. **Prevalencia de controles.** Ante conflicto entre documentos, prevalecen la minimización de datos, la autonomía de la persona afectada, la prevención de coerción y la incertidumbre explícita de los documentos normativos [N1]–[N4].

### 1.3 Datos de la sesión de revisión

| Campo editable | Valor |
|---|---|
| Identificador de revisión | `P1-REV-001` |
| Fecha de inicio | `2026-09-30` |
| Fecha de cierre | `Pendiente` |
| Versión de contrato revisada | `1.0.0` |
| Commit / PR revisado | `PR #2 / v1 mínima pendiente de revisión` |
| Revisión de producto | Juan Vidaechea, founder y 2026-09-30 |
| Revisión de privacidad / seguridad | Juan Vidaechea, founder y 2026-09-30 |
| Revisión de contenido / clínica | Juan Vidaechea, founder y 2026-09-30 |
| Revisión de ingeniería | Juan Vidaechea, founder y 2026-09-30 |
| Resultado global | `En revisión` |
| Enlace a decisión en Linear | [JUA-10](https://linear.app/juan-vidaechea/issue/JUA-10/p1-adr-002-aprobar-contrato-de-taxonomia-local-cerrada-y-verificar) |

---

## 2. Puertas de decisión y límites no negociables

> Todas las puertas de esta sección deben tener una decisión explícita antes de afirmar que el contrato documental P1 está aprobado.

| ID | Control que debe revisarse | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| G-01 | El resultado establece una **taxonomía cerrada, versionada y verificable** que será la fuente de verdad para las futuras funciones autorizadas de Consona: interfaz, consentimiento, validación, almacenamiento local, borrado y pruebas. Este PR no implementa ni activa todavía esas funciones, ni autoriza captura, persistencia, observación de pareja, inferencias, sincronización o piloto. | Contrato §1, §2, §5, §7 y §9; esquema; fixtures; validador local; revisión de alcance del PR. | [N2 §5], [N3 §7–8], [E1 §1–2, §5, §7, §9], [E2], [E4]–[E6] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba que la taxonomía v1.0.0 sea el contrato canónico que delimite y restrinja las futuras funciones autorizadas de Consona. Su integración efectiva en interfaz, permisos, almacenamiento local, borrado o inferencias permanece bloqueada hasta cumplir ADR-001 y las condiciones aplicables P2–P8 de ADR-002. |
| G-02 | En esta fase de contrato y validación sintética no se recoge, introduce, conserva ni prueba con información personal, fechas de ciclo, sangrado, variables reales o contenido derivado de una persona. Los fixtures son deliberadamente ficticios y estructurales. El uso futuro de datos locales reales solo podrá estudiarse tras completar y verificar las dependencias aplicables de ADR-001 y ADR-002. | Inspección de fixtures y script; declaración de datos sintéticos; revisión de alcance del PR. | [N1 §3–5], [N2 §2, §5], [N3 §3–4, §7–8], [E1 §2, §8], [E4]–[E6] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que JUA-10 usa exclusivamente fixtures sintéticos y no incorpora datos personales ni de ciclo reales. Esta decisión limita la fase actual de diseño y validación; no descarta el tratamiento exclusivamente local de datos reales en funciones futuras cuando se hayan cumplido consentimiento granular, arquitectura local, borrado, seguridad y ausencia de salida remota. |
| G-03 | Este PR no implementa ni activa formularios, captura de datos, `localStorage`, IndexedDB, backend, autenticación, emparejamiento, sincronización, copias de seguridad, red, analítica, telemetría ni logs sensibles. Solo incorpora documentación, esquema, fixtures sintéticos y validación local del contrato. Las capacidades operativas futuras autorizables deberán diseñarse, revisarse y probarse conforme a ADR-001 y ADR-002 antes de procesar datos reales. | Revisión de diff; resultado de pruebas; inspección de dependencias y script; confirmación de que el validador solo lee fixtures sintéticos locales. | [N1 §3–5], [N2 §2–5], [N3 §7–8], [E1 §7–8], [E6] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que JUA-10 no añade una función operativa ni modifica la arquitectura de datos. La futura implementación local de registros, consentimiento, borrado y validación queda condicionada a completar y verificar las tareas dependientes. La única excepción remota que podría estudiarse en el futuro es el servicio mínimo de consentimiento y revocación definido por ADR-001, sin datos de ciclo, variables ni inferencias. |
| G-04 | La taxonomía mantiene que los datos de ciclo, las variables personales consentidas, los permisos asociados, los cálculos y las inferencias futuras permanezcan exclusivamente en el dispositivo que los conserva. Este PR no crea ni amplía una arquitectura remota. La única excepción que podría estudiarse en el futuro es el servicio mínimo de consentimiento y revocación definido por ADR-001, limitado a metadatos pseudónimos de coordinación y sin datos de ciclo, variables, fases, síntomas, anticoncepción, inferencias, contenido derivado, analítica, telemetría ni logs sensibles. | Revisión normativa de ADR-001 y ADR-002; contrato §1, §2, §6 y §7; esquema; inventario de prohibiciones; revisión de cambios del PR. | [N1 §3–5], [N2 §2–5], [N3 §3–5, §7–8], [E1 §1–2, §6–8], [E2], [E3] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que la taxonomía v1.0.0 respeta la localización exclusiva de los datos sensibles y no amplía la excepción limitada de ADR-001. La eventual coordinación mínima de consentimiento y revocación sigue bloqueada hasta completar y verificar las condiciones aplicables de ADR-001; no autoriza compartir, sincronizar, consultar remotamente ni conservar datos de ciclo, variables o inferencias. |
| G-05 | La taxonomía prohíbe de forma permanente registrar, inferir, representar, compartir o sugerir deseo sexual, libido, actividad o prácticas sexuales, consentimiento sexual, límites, disponibilidad o disposición a interactuar. Ninguna fase estimada, fecha de ciclo, variable registrada, observación, patrón local o inferencia puede utilizarse para describir, predecir o condicionar estos aspectos. Consona solo puede ofrecer orientación educativa que recuerde que el deseo y el consentimiento se preguntan directamente, son actuales, específicos y revocables, sin registrar la conversación ni convertirla en una variable. | Contrato §1 y §6; inventario de prohibiciones; esquema; fixtures negativos; ADR-001, ADR-002 y especificación de “Hoy”. | [N1 §4], [N2 §6], [N3 §2, §6], [N4 §1–4, §6–7], [E1 §1, §5–6], [E2], [E3], [E4] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma la exclusión permanente de sexualidad, consentimiento sexual, límites y disponibilidad como datos, categorías, fuentes, inferencias, salidas o criterios de interfaz. La orientación educativa y las preguntas abiertas no autorizan registrar respuestas, construir perfiles ni deducir una voluntad actual a partir del ciclo o de cualquier patrón. |
| G-06 | P1 y JUA-10 permanecen en revisión hasta que exista una decisión explícita, trazable y completa de producto, privacidad/seguridad, contenido/revisión clínica e ingeniería sobre el contrato v1.0.0 y sus evidencias. Una vez cumplidas esas revisiones, JUA-10 podrá cerrarse únicamente como aprobación del contrato documental y de validación de P1. Ese cierre no autoriza recogida, persistencia, observación de pareja, inferencias, sincronización, servicio remoto ni piloto, que siguen condicionados a completar y verificar ADR-001 y P2–P8 de ADR-002. | Estado y resolución de JUA-10; secciones 9, 10 y 11 de este cuaderno; revisión de dependencias en ADR-001 y ADR-002. | [N1 §8–9], [N2 §5, §7], [N3 §7–9], [E1 §7, §9], [E8] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que P1 no se cerrará de forma implícita ni por la mera existencia de documentación o pruebas sintéticas. JUA-10 podrá cerrarse cuando la resolución final documente aprobación explícita de los roles requeridos y no queden cambios abiertos de P1. La eventual recogida de datos e inferencias locales sigue bloqueada por las tareas dependientes; la aprobación de P1 fija el contrato que esas funciones futuras deberán obedecer. |

---

## 3. Revisión de producto: alcance y lenguaje

### 3.1 Separación de planos semánticos

| ID | Verificación | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| PR-01 | Educación general, estimación local futura, autoinforme, observación futura de pareja, asociación local futura y conceptos prohibidos permanecen separados. La v1 mínima solo admite `self_report`; la observación de pareja queda fuera de su esquema. | Tabla de planos del contrato; revisión de términos. | [E1 §1], [N3 §2, §5] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba la separación de los seis planos como regla canónica de producto, contenido, privacidad e ingeniería. Las funciones futuras deberán conservar procedencia, límites y presentación propios de cada plano; la home “Hoy” seguirá mostrando solo estimación de fase permitida y orientación educativa general, nunca variables, observaciones o asociaciones personalizadas. |
| PR-02 | La educación general se formula como información poblacional; no describe a una persona concreta. | Contrato §1; contenido y panel “Hoy”. | [N1 §6], [N4 §1–3], [E1 §1] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que la educación explica experiencias y variabilidad posibles en poblaciones sin afirmar cómo está, siente, necesita o desea una persona concreta. |
| PR-03 | Una fase estimada no se presenta como ovulación confirmada, fertilidad, salud, síntoma, estado emocional, conducta, permiso o explicación causal. | Contrato §1; revisión de glosario y términos vetados. | [N1 §3–4, §6], [N4 §1, §5–6], [E1 §1, §6] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que una fase es una estimación local con límites; no confirma ovulación, fertilidad ni estados físicos o emocionales, y nunca justifica interpretar conducta, consentimiento, deseo, límites o disponibilidad. |
| PR-04 | La home conserva las tarjetas **Qué pasa en su cuerpo**, **Qué puedes preguntarle**, **Qué te toca a ti** y **Qué no asumir** como orientación, no como variables ni salidas personalizadas. | Especificación UX y revisión de referencias del contrato. | [N1 §6], [N3 §5], [N4 §3, §6–7] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba que las cuatro tarjetas permanezcan como contenido educativo, conversación y acción propia. No mostrarán registros, observaciones, síntomas ni asociaciones personalizadas, aunque estas llegaran a estudiarse en una vista futura separada. |
| PR-05 | El contrato no permite que la ausencia de registro se lea como ausencia de experiencia o de síntoma. | Contrato §2 y §3; esquema y fixtures. | [N3 §5], [E1 §2–3] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que la falta de entrada equivale exclusivamente a dato ausente. No se traduce en `not_present`, en ausencia de síntomas ni en una conclusión sobre una persona. |

### 3.2 Escala de intensidad candidata

| ID | Verificación | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| PR-06 | Los únicos valores permitidos son `mild`, `moderate` e `intense`. | Contrato §3; enum del esquema; fixture inválido de intensidad. | [E1 §3], [E2], [E4] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba la enumeración mínima cerrada. Cualquier valor nuevo exigirá una versión posterior del contrato, actualización de esquema y fixtures, pruebas de regresión y revisión trazable. |
| PR-07 | La escala se entiende como autodescripción y no como severidad clínica, riesgo, triaje, diagnóstico ni indicación terapéutica. | Definiciones y no-definiciones de cada valor. | [N3 §6], [E1 §3], [E7 §1, §11] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que la intensidad es una descripción elegida por la propia persona y no supone diagnóstico, urgencia, causa, riesgo, tratamiento ni recomendación individual. |
| PR-08 | `not_present`, `not_applicable`, `not_recorded` y valores abiertos como `other` no se admiten; la falta de entrada sigue siendo dato ausente. | Contrato §2–3; esquema con enumeración cerrada. | [E1 §2–3], [E2] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se confirma que la v1 mínima no registra ausencia ni valores abiertos. La falta de entrada no puede convertirse en un dato, una clasificación o una inferencia. |

---

## 4. Revisión por categorías candidatas

> Decidir una categoría como **Aprobada para contrato documental** no autoriza a capturarla. Las tres categorías de la v1 mínima continúan en estado `research_pending`, sujetas a P2, P5, P6, P8 y ADR-001 según corresponda.

### 4.1 Categorías de la v1 mínima

| ID semántico | Etiqueta revisada | Qué debe confirmar el revisor | Evidencia y límite clínico | Estado editable | Responsable | Fecha | Comentario / modificación solicitada |
|---|---|---|---|---|---|---|---|
| `physical_pain_or_cramps` | Dolor o calambres | La definición describe una experiencia autorreferida y no identifica dismenorrea, endometriosis, infección ni causa. | Contrato §4; dossier de dolor; no permite triaje ni tratamiento. [E1 §4], [E7 §1, §3] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba como una de las tres categorías físicas mínimas de autoinforme futuro. `mild`, `moderate` e `intense` son descripciones no clínicas. La categoría no autoriza captura, persistencia, diagnóstico, triaje, tratamiento, inferencia ni visualización personalizada en la home; cualquier función futura permanece condicionada por ADR-001 y P2, P5, P6 y P8 de ADR-002. |
| `physical_bloating` | Hinchazón percibida | La definición describe una sensación autorreferida y no confirma retención de líquido, edema, gas, peso, enfermedad ni causa. Una fase estimada no explica su aparición ni la predice. | Contrato §4; síntesis JUA-10; no permite diagnóstico, triaje ni atribución causal individual. [E1 §4], [E7 §1] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba como una de las tres categorías físicas mínimas de autoinforme futuro. `mild`, `moderate` e `intense` son descripciones no clínicas. La categoría no autoriza captura, persistencia, diagnóstico, triaje, inferencia ni visualización personalizada en la home; cualquier función futura permanece condicionada por ADR-001 y P2, P5, P6 y P8 de ADR-002. |
| `physical_fatigue` | Cansancio percibido | La definición describe una experiencia autorreferida de cansancio o fatiga. No equivale a anemia, trastorno del sueño, SPM, depresión, causa hormonal, rendimiento o capacidad física. Una fase estimada no explica su aparición ni la predice. | Contrato §4; síntesis JUA-10; no permite diagnóstico, triaje ni atribución causal individual. [E1 §4], [E7 §1] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba como una de las tres categorías físicas mínimas de autoinforme futuro. `mild`, `moderate` e `intense` son descripciones no clínicas. La categoría no autoriza captura, persistencia, diagnóstico, triaje, inferencia ni visualización personalizada en la home; cualquier función futura permanece condicionada por ADR-001 y P2, P5, P6 y P8 de ADR-002. |

### 4.2 Experiencias que permanecen solo como educación general

| Experiencias | Regla editorial | Evidencia y límite clínico | Estado editable | Responsable | Fecha | Comentario / modificación solicitada |
|---|---|---|---|---|---|---|
| Sueño, apetito y antojos | Pueden aparecer solo como contenido educativo poblacional, nunca como categoría, permiso, registro o inferencia v1. | Informe de sueño y apetito; sin pronóstico individual. [E1 §4.1], [E7 §1] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba su exclusión de la v1 mínima. El contenido educativo puede explicar variabilidad poblacional con lenguaje cualificado, pero no describir, registrar ni inferir la experiencia de una persona concreta. |
| Irritabilidad, tristeza y ansiedad | Pueden aparecer solo como contenido educativo poblacional, nunca como categoría, permiso, registro o inferencia v1. | ADR-002 y límites clínicos; no son rasgos ni diagnósticos. [N3 §1, §3, §6], [E7 §1] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba su exclusión de la v1 mínima. Consona no las convierte en rasgos, diagnósticos, estados de riesgo, explicaciones de conducta ni salidas personalizadas. |
| Concentración y energía | Pueden aparecer solo como contenido educativo poblacional, nunca como categoría, permiso, registro o inferencia v1. | La evidencia no permite asumir secuencia universal por fase. [E1 §4.1], [E7 §1] | `Aprobado para contrato documental` | Juan Vidaechea | 2026-09-30 | Se aprueba su exclusión de la v1 mínima. Consona no mide rendimiento o capacidad, ni presupone una secuencia universal por fase. |

### 4.3 Decisión consolidada de categorías

| Grupo | Estado editable | Decisión / exclusiones / cambios requeridos | Responsable | Fecha |
|---|---|---|---|---|
| V1 mínima de experiencias físicas | `Aprobado para contrato documental` | Solo dolor/calambres, hinchazón percibida y cansancio percibido; solo `self_report`; intensidad `mild`/`moderate`/`intense`. | Juan Vidaechea | 2026-09-30 |
| Experiencias solo educativas | `Aprobado para contrato documental` | Sueño, apetito, antojos, experiencias emocionales y cognitivas no se recogen ni infieren en v1. | Juan Vidaechea | 2026-09-30 |
| Fuentes excluidas expresamente de v1 | `Aprobado para contrato documental` | La observación de pareja queda fuera del esquema v1; toda fuente distinta de `self_report` se rechaza. | Juan Vidaechea | 2026-09-30 |

---

## 5. Privacidad, consentimiento y protección frente a coerción

### 5.1 Fuente, procedencia y consentimiento

| ID | Verificación | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| PC-01 | La unidad futura de permiso queda definida como **categoría × fuente × permiso**; no existe consentimiento global. | Matriz candidata del contrato y ADR-002. | [N2 §3, §5], [N3 §4], [E1 §5] | `Pendiente` |  |  |  |
| PC-02 | `self_report` es la única fuente válida, con alcance candidato de consentimiento y fixtures válidos en la v1 mínima. | Contrato §2, §4 y §5; fixtures válidos. | [E1 §2, §4–5], [E5] | `Pendiente` |  |  |  |
| PC-03 | `partner_observation` está fuera del esquema v1: no tiene permiso, alcance, formulario, persistencia ni fixture válido y debe rechazarse. | Contrato §1–2, §5; fixture negativo. | [N2 §5, §7], [N3 §3–4, §7], [E1 §1–2, §5], [E4] | `Pendiente` |  |  |  |
| PC-04 | Una futura observación se definiría como “lo que observé”, se mantendría separada y nunca sobrescribiría ni corregiría un autoinforme. | ADR-002 y contrato; no se implementa en v1. | [N3 §3–5], [E1 §5] | `Pendiente` |  |  |  |
| PC-05 | El consentimiento futuro debe ser directo, comprensible, granular, revisable y revocable por la persona afectada. | ADR-001; ADR-002; dependencia JUA-6/P2. | [N2 §3, §5], [N3 §4, §7], [E1 §7] | `Pendiente` |  |  |  |
| PC-06 | No se interpreta un recordatorio de pareja como consentimiento directo. | ADR-001. | [N2 §3] | `Pendiente` |  |  |  |

### 5.2 Borrado, datos mínimos y ausencia de salida remota

| ID | Verificación | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| PC-07 | La política candidata de retirada cubre registro, permiso, caché, claves, cálculos y salidas derivadas. | Contrato §4, §7; ADR-001/ADR-002. | [N2 §3, §5], [N3 §4–5, §7], [E1 §4, §7] | `Pendiente` |  |  |  |
| PC-08 | Se reconoce que P5 debe demostrar borrado real; este contrato no sustituye pruebas de borrado o revocación. | Vínculos del contrato; backlog. | [N1 §4, §8], [N2 §5], [N3 §7–9], [E1 §7] | `Pendiente` |  |  |  |
| PC-09 | El esquema no permite fecha, identidad, cuenta, dispositivo, ubicación, contacto, URL, contenido libre ni derivado clínico. | Contrato §2; esquema y fixtures negativos. | [N1 §3–5], [N2 §2, §5], [E1 §2, §6], [E2], [E3]–[E4] | `Pendiente` |  |  |  |
| PC-10 | Se mantienen prohibidos red, cuentas de ciclo, sincronización, backup, analítica, telemetría, píxeles, informes remotos de errores y logs sensibles. | Documentos normativos, contrato y revisión de código añadido. | [N1 §3–5], [N2 §2, §5], [N3 §8], [E1 §7–8] | `Pendiente` |  |  |  |
| PC-11 | Se reconoce que P6 requiere EIPD, modelo de amenazas y evaluación específica de violencia tecnológica antes de estudiar observación de pareja. | ADR-001/ADR-002; bloqueo JUA-13. | [N1 §8], [N2 §5, §7], [N3 §7], [E1 §7] | `Pendiente` |  |  |  |

---

## 6. Campos, fuentes, salidas y expresiones que deben rechazarse

### 6.1 Inventario de prohibiciones

| ID | Revisión requerida | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| PB-01 | El contrato rechaza texto libre y equivalentes: `free_text`, `note`, `comment`, `message`, `description`, `other`, contexto narrativo o diario. | Inventario y fixture de rechazo. | [E1 §3, §6], [E2], [E3], [E4] | `Pendiente` |  |  |  |
| PB-02 | El contrato rechaza nombre, correo, teléfono, cuenta, contacto, ubicación, dispositivo, identificadores publicitarios y fingerprint. | Inventario y fixture de rechazo. | [N2 §2, §5], [E2], [E3], [E4] | `Pendiente` |  |  |  |
| PB-03 | El contrato rechaza archivos, capturas, audio, vídeo, conversaciones, mensajes y contenido extraído. | Inventario prohibido. | [N1 §4–5], [E3] | `Pendiente` |  |  |  |
| PB-04 | El contrato rechaza deseo, actividad, consentimiento sexual, límites, disponibilidad, libido e interés sexual. | Inventario y fixture de intimidad. | [N1 §4], [N2 §6–7], [N3 §6], [E3]–[E4] | `Pendiente` |  |  |  |
| PB-05 | El contrato rechaza diagnósticos, tratamientos, medicación, dosis, puntuaciones clínicas, riesgo, SPM/TDPM y etiquetas de condiciones. | Inventario, auditoría y límites clínicos. | [N3 §1, §6], [E1 §6], [E3], [E7 §1, §11] | `Pendiente` |  |  |  |
| PB-06 | El contrato rechaza inferencias de conducta, estado de ánimo, causa, necesidad, fertilidad, ovulación confirmada, “días seguros” o permiso para actuar. | Contrato e inventario de salidas prohibidas. | [N1 §4, §6], [N3 §2, §5–6], [N4 §1, §5–6], [E1 §1, §6], [E3] | `Pendiente` |  |  |  |
| PB-07 | Solo se admite la fuente `self_report`; se rechazan observación de pareja y fuentes derivadas de fase, conducta, mensajes, perfiles o cálculo automático. | Esquema y fixtures de fuentes no permitidas. | [N3 §3–5], [E2], [E3]–[E4] | `Pendiente` |  |  |  |

### 6.2 Lenguaje de interfaz y contenido que no puede aprobarse

| Expresión o patrón no admisible | Motivo | Alternativa segura para educación general |
|---|---|---|
| “Está así por la regla.” | Atribuye estado o conducta a una fase. | “Las experiencias pueden variar. Si te parece, pregúntale cómo está.” |
| “Estará irritable / cansada / triste.” | Predicción determinista de una persona. | “Una fase no permite saber cómo se siente una persona concreta.” |
| “Tiene SPM / TDPM.” | Diagnóstico o clasificación no permitida. | “SPM y TDPM son términos clínicos; Consona no los asigna.” |
| “Hoy no querrá intimidad.” | Infiere deseo, consentimiento o disponibilidad. | “El deseo y el consentimiento se preguntan directamente y son actuales.” |
| “La fase explica el dolor / el ánimo.” | Presenta causalidad individual no demostrada. | “Un síntoma aislado o una fase estimada no identifican una causa.” |
| “Ovulación confirmada / día seguro.” | Falsa certeza clínica o anticonceptiva. | “La aplicación muestra una estimación con límites; no es anticonceptiva.” |

**Decisión de lenguaje:** `Pendiente`
**Responsable / fecha / comentario:**

---

## 7. Contenido, evidencia y límites clínicos

| ID | Verificación | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| CE-01 | Cada categoría candidata conserva definición positiva, no-definición, uso delimitado y límite clínico. | Tablas del contrato §4. | [E1 §4], [E7 §1, §11] | `Pendiente` |  |  |  |
| CE-02 | Las fuentes bibliográficas auditadas de JUA-10 se aplican de manera coherente y no se transforman en recomendaciones individuales. | Cierre de auditorías, síntesis e informes de apoyo. | [E7 §1, §3–4, §7, §11] | `Pendiente` |  |  |  |
| CE-03 | Dolor, sueño, apetito, antojos, energía, concentración y experiencias emocionales no se presentan como efectos universales de una fase. | Contrato y ADR-002. | [N1 §6], [N3 §1, §5–6], [E1 §4], [E7 §1] | `Pendiente` |  |  |  |
| CE-04 | Las referencias a SPM, TDPM, dismenorrea, endometriosis, anemia o menopausia permanecen educativas; nunca son entradas, salidas o reglas de decisión. | Contrato, inventario y cierre de auditorías. | [N3 §1, §6], [E1 §4, §6], [E3], [E7 §1, §11] | `Pendiente` |  |  |  |
| CE-05 | El contenido conserva una vía no invasiva a atención profesional cuando corresponda, sin triaje, diagnóstico, alertas automatizadas ni comunicación remota. | ADR-002 y cierre de auditorías. | [N3 §2, §6], [E7 §1, §11] | `Pendiente` |  |  |  |
| CE-06 | La trazabilidad de fuentes se mantiene al cambiar una definición, categoría o redacción clínica. | `CHANGELOG.md`, contrato, dossier y PR. | [E1 §9], [E7] | `Pendiente` |  |  |  |

---

## 8. Coherencia con la experiencia “Hoy” y accesibilidad

| ID | Verificación | Evidencia mínima | Referencias | Estado editable | Responsable | Fecha | Comentario / cambio requerido |
|---|---|---|---|---|---|---|---|
| UX-01 | La taxonomía no autoriza mostrar variables, autoinformes, observaciones o asociaciones personalizadas en la home. | Contrato §1 y §7; especificación del panel. | [N3 §5], [N4 §3, §6–7], [E1 §1, §7] | `Pendiente` |  |  |  |
| UX-02 | Los estados de datos insuficientes, datos antiguos, anticoncepción incompatible, consentimiento no vigente, patrón insuficiente y resultado inválido no muestran una fase como vigente. | Especificación UX y alcance de contrato. | [N4 §5, §7–8], [E1 §1, §7] | `Pendiente` |  |  |  |
| UX-03 | “Cómo funciona” y onboarding explican estimación, rango, actualización, caducidad, límites y no uso anticonceptivo sin convertirlos en datos de la otra persona. | Especificación UX. | [N4 §1, §4, §7–8] | `Pendiente` |  |  |  |
| UX-04 | La redacción podrá tener equivalentes no deterministas en español internacional, catalán e inglés, con teclado y lector de pantalla. | Criterios de contenido y UX; plan de localización posterior. | [N1 §4], [N4 §4, §7] | `Pendiente` |  |  |  |

---

## 9. Ingeniería y verificación de contrato

### 9.1 Resultado editable de pruebas

| Control técnico | Comando o inspección | Resultado esperado | Resultado editable | Ejecutado por | Fecha | Enlace a evidencia / comentario |
|---|---|---|---|---|---|---|
| JSON válido | Validar todos los `*.json` del directorio `docs/taxonomy/`. | Esquema y fixtures sintácticamente válidos. | `Pendiente` |  |  |  |
| Fixtures válidos | `npm run validate:taxonomy` | Los fixtures de `fixtures/valid/` se aceptan. | `Pendiente` |  |  |  |
| Rechazo de texto libre | `npm run validate:taxonomy` | `reject-free-text.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de identidad | `npm run validate:taxonomy` | `reject-account-identifier.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de intimidad | `npm run validate:taxonomy` | `reject-sexual-consent.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de categoría desconocida | `npm run validate:taxonomy` | `reject-unknown-category.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de intensidad abierta | `npm run validate:taxonomy` | `reject-invalid-intensity.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de fuente derivada | `npm run validate:taxonomy` | `reject-inferred-source.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de observación de pareja | `npm run validate:taxonomy` | `reject-partner-observation.json` se rechaza. | `Pendiente` |  |  |  |
| Rechazo de alcance incongruente | `npm run validate:taxonomy` | `reject-mismatched-consent-scope.json` se rechaza. | `Pendiente` |  |  |  |
| Calidad de código | `npm run lint && npm run build && git diff --check` | Los tres comandos finalizan correctamente y no se introducen dependencias nuevas. | `Pendiente` |  |  |  |
| Inspección de alcance | Revisar diff y script. | No se añaden almacenamiento, red, analítica, telemetría, sincronización, cuentas ni logs sensibles. | `Pendiente` |  |  |  |

### 9.2 Límites de la verificación actual

- [ ] Confirmar que las pruebas usan exclusivamente fixtures sintéticos y no acceden a datos de personas ni de ciclo.
- [ ] Confirmar que la validación de esquema es una prueba de contrato, **no** una evidencia de interfaz, almacenamiento, consentimiento, borrado o algoritmo de producto.
- [ ] Confirmar que una implementación posterior deberá reutilizar y ampliar estas pruebas en P2, P5, P8, CON-037, CON-038 y CON-039 antes de procesar datos reales.

**Estado de verificación técnica:** `Pendiente`
**Responsable / fecha / comentario:**

---

## 10. Registro de cambios solicitados

> Añadir una fila por cambio. No marcar un control como aprobado mientras su cambio asociado siga abierto.

| ID de cambio | Control afectado | Descripción precisa | Motivo | Archivo(s) que deben cambiar | Responsable | Fecha objetivo | Estado |
|---|---|---|---|---|---|---|---|
| `P1-CHG-001` | Categorías, fuente e intensidad v1 | Simplificar la v1 a tres categorías físicas, solo `self_report` y tres intensidades; relegar las demás experiencias a educación general. | Minimización de datos y claridad de revisión. | Contrato, esquema, fixtures, validador, changelog, dossier y checklist. | Juan Vidaechea | 2026-09-30 | `Resuelto; aprobado para contrato documental` |
| `P1-CHG-002` |  |  |  |  |  |  | `Pendiente` |
| `P1-CHG-003` |  |  |  |  |  |  | `Pendiente` |

---

## 11. Decisión final de revisión

### 11.1 Resumen por rol

| Rol responsable | Decisión editable | Fecha | Evidencia revisada | Comentario, condición o veto |
|---|---|---|---|---|
| Producto | `Pendiente` |  |  |  |
| Privacidad / seguridad | `Pendiente` |  |  |  |
| Contenido / revisión clínica | `Pendiente` |  |  |  |
| Ingeniería | `Pendiente` |  |  |  |

### 11.2 Resolución de P1

Seleccionar una sola opción cuando los roles hayan completado su revisión:

- [ ] **Aprobar para contrato documental.** El vocabulario v1.0.0 puede utilizarse como fuente de definición para el diseño posterior, sujeto a sus prohibiciones y dependencias. P1 sigue sin habilitar captura, persistencia, inferencias, observación de pareja, sincronización o piloto.
- [ ] **Solicitar cambios.** Registrar todos los cambios en la sección 10 y repetir las verificaciones afectadas antes de una nueva decisión.
- [ ] **No aprobar.** Mantener modelo educativo sin datos y documentar la alternativa o bloqueo.
- [ ] **Posponer.** Conservar el contrato como candidato y definir la evidencia faltante.

**Resolución elegida:** `Pendiente`
**Justificación completa:**

**Decisión registrada en JUA-10 / PR #2:** `Pendiente`
**¿P1 puede cerrarse?:** `No; pendiente de decisión explícita y de completar los criterios aplicables.`

---

## 12. Referencias y trazabilidad

### 12.1 Documentos normativos del proyecto

| ID | Documento | Secciones relevantes para esta revisión | Uso en esta plantilla |
|---|---|---|---|
| [N1] | `CONSONA_LINEA_BASE_Y_BACKLOG.md` | §2–6, §8–10. | Jerarquía de decisión, límites de producto, backlog y condiciones para desarrollo. |
| [N2] | `CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md` | §2–7. | Control local, consentimiento directo, minimización, revocación, borrado, conectividad, seguridad y EIPD. |
| [N3] | `CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md` | §2–9. | Categorías cerradas, fuentes, consentimiento granular, límites clínicos, P1–P8 y bloqueo de piloto. |
| [N4] | `CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md` | §1–8. | Separación entre panel “Hoy”, contenido educativo, estimación y aprendizaje condicionado. |

### 12.2 Artefactos del contrato en el repositorio

| ID | Artefacto | Enlace | Uso en esta plantilla |
|---|---|---|---|
| [E1] | Contrato taxonómico v1.0.0 | [`consona-local-taxonomy-v1.0.0.md`](./consona-local-taxonomy-v1.0.0.md) | Fuente funcional y semántica del candidato. |
| [E2] | Esquema técnico | [`consona-local-taxonomy-v1.0.0.schema.json`](./consona-local-taxonomy-v1.0.0.schema.json) | Enumeraciones, campos permitidos y rechazo de propiedades adicionales. |
| [E3] | Inventario de campos prohibidos | [`consona-local-taxonomy-v1.0.0-prohibited-fields.md`](./consona-local-taxonomy-v1.0.0-prohibited-fields.md) | Prohibiciones de datos, fuentes y salidas. |
| [E4] | Fixtures inválidos | [`fixtures/invalid/`](./fixtures/invalid/) | Evidencia sintética de rechazo de campos y valores no permitidos. |
| [E5] | Fixtures válidos | [`fixtures/valid/`](./fixtures/valid/) | Ejemplos sintéticos de forma estructural permitida. |
| [E6] | Validador local | [`validate-taxonomy-fixtures.mjs`](../../scripts/validate-taxonomy-fixtures.mjs) | Ejecución local de pruebas de contrato. |
| [E7] | Dossier y cierre de auditorías JUA-10 | [`docs/research/jua-10/`](../research/jua-10/) y [`JUA-10-cierre-auditorias.md`](../research/JUA-10-cierre-auditorias.md) | Trazabilidad bibliográfica, redacción cualificada y límites editoriales. |
| [E8] | Historial de cambios | [`CHANGELOG.md`](./CHANGELOG.md) | Evolución versionada del contrato. |

### 12.3 Lectura mínima antes de emitir una aprobación

- [ ] [N1] Línea base y backlog vigente.
- [ ] [N2] ADR-001, incluidas condiciones C1–C10.
- [ ] [N3] ADR-002, incluidas condiciones P1–P8.
- [ ] [N4] Especificación del panel “Hoy”.
- [ ] [E1] Contrato completo, [E2] esquema y [E3] inventario de prohibiciones.
- [ ] [E4]–[E6] fixtures y validador local.
- [ ] [E7] dossier y cierre de auditorías bibliográficas.
- [ ] [E8] historial de cambios.

---

## 13. Nota de cierre obligatoria

> Un contrato taxonómico aprobado solo fija el vocabulario y sus límites. No convierte el prototipo en una aplicación de seguimiento, no demuestra consentimiento, borrado, seguridad, ausencia de salida remota ni control de coerción, y no habilita un piloto. Esas condiciones permanecen acumulativamente bloqueadas por ADR-001, ADR-002 y las incidencias correspondientes de Linear.
