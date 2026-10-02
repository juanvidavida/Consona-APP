> **Archivo histórico — no usar para priorizar trabajo actual.**
>
> Corte previo a la comprobación de Linear y GitHub del 1 de octubre de 2026. Fue sustituido por el corte posterior y se conserva para trazabilidad. Los estados vivos están en Linear y la ruta mantenida está en [`../ruta-critica-modelo-e.md`](../ruta-critica-modelo-e.md).

# Consona — Priorización histórica para completar P1 documental

**Fecha de elaboración:** 1 de octubre de 2026, antes de consultar las fuentes vivas.
**Ámbito:** P1 de ADR-002 / **JUA-10**, es decir, la aprobación del contrato taxonómico local v1.0.0. No debe confundirse con el bloque macro **P1** del backlog unificado.

> **Actualización de estado — 1 de octubre de 2026, 09:32 CEST.** Esta priorización queda **sustituida** por [Estado y priorización posterior a P1](./2026-10-01-estado-post-p1.md). La comprobación directa en Linear y GitHub confirma que JUA-10 está en **Done** y el PR #2 está **fusionado** en `main`. El contenido siguiente se conserva únicamente como registro del orden de revisión que quedaba pendiente según el historial de ayer.

> **Límite operativo permanente:** el cierre documental de P1 no habilita formularios, datos reales, persistencia local, inferencias, observación de pareja, sincronización, coordinación remota ni piloto.

## Corte histórico previo a la comprobación en vivo

| Bloque del cuaderno de revisión | Estado al cierre del 30 de septiembre | Consecuencia |
|---|---|---|
| Puertas de decisión (G-01 a G-06) | Aprobadas para contrato documental | El alcance sigue siendo solo documental y sintético. |
| Producto y escala de intensidad (PR-01 a PR-08) | Aprobados para contrato documental | La ausencia de registro sigue siendo dato ausente; no se admiten valores abiertos. |
| Categorías v1 | Aprobadas para contrato documental | Solo `physical_pain_or_cramps`, `physical_bloating` y `physical_fatigue`; solo `self_report`; solo `mild`, `moderate`, `intense`. |
| Experiencias excluidas | Aprobadas como educación general | Sueño, apetito, antojos, experiencias emocionales y cognitivas no son categoría, permiso, registro ni inferencia v1. |
| Cambio P1-CHG-001 | Resuelto | La simplificación ya está reflejada en contrato, esquema, fixtures, validador, changelog y checklist. |
| Secciones 5 a 11 | Pendientes | Son el trabajo restante para poder emitir una decisión formal de P1. |

## Orden recomendado

La prioridad propone **bloques de decisión auditables**, no una implementación de producto. Los bloques 1 y 2 son secuenciales; los bloques 3 y 4 pueden ejecutarse en paralelo una vez fijado el bloque 1.

| Prioridad | Tarea agrupada | Criterios que resuelve o deja listos | Entregable / evidencia de cierre | Dependencia | Responsable recomendado |
|---|---|---|---|---|---|
| **0** | **Congelar la línea de revisión y repetir evidencia técnica** | §9.1 completo; §9.2 (tres límites de verificación) | Resultado fechado de `validate:taxonomy`, `lint`, `build`, `git diff --check`, validación JSON y revisión del diff; constancia de que todos los fixtures son sintéticos y de que no hay almacenamiento, red, analítica, cuentas ni logs | Ninguna; puede iniciarse ya | Ingeniería |
| **1** | **Resolver fuente, procedencia y consentimiento como límites del contrato** | PC-01 a PC-06 | Decisión firmada sobre matriz futura `categoría × fuente × permiso`; `self_report` como única fuente v1; veto efectivo de `partner_observation`; confirmación de que un recordatorio de pareja no es consentimiento | Evidencia técnica de prioridad 0 para PC-02 y PC-03 | Producto + privacidad/seguridad |
| **2** | **Resolver minimización, retirada y protección frente a coerción** | PC-07 a PC-11 | Política contractual de retirada que enumere registro, permiso, caché, claves, cálculos y derivados; declaración explícita de que P5/P6 no están demostrados aún; veto de exfiltración; mapa de dependencias a EIPD, amenazas y violencia tecnológica | Prioridad 1 | Privacidad/seguridad + producto |
| **3** | **Aprobar el inventario de prohibiciones y el lenguaje seguro** | PB-01 a PB-07 y decisión de §6.2 | Revisión de campos prohibidos, fuentes derivadas y salidas vetadas; verificación de los fixtures negativos; decisión explícita sobre las seis formulaciones de lenguaje no admisible | Puede avanzar en paralelo con prioridad 2, pero requiere consistencia con ella | Privacidad/seguridad + contenido |
| **4** | **Cerrar contenido, evidencia y límites clínicos** | CE-01 a CE-06 | Revisión trazable de definiciones, no-definiciones, bibliografía, límites no diagnósticos y vía educativa a atención profesional; confirmación de que no se convierten promedios en recomendaciones individuales | Prioridades 1–3 fijan el perímetro semántico | Contenido / revisión clínica |
| **5** | **Validar coherencia con “Hoy”, accesibilidad e idiomas** | UX-01 a UX-04 | Matriz de cumplimiento contra la especificación de panel: nada de variables o inferencias en home; estados excepcionales seguros; “Cómo funciona” y onboarding; requisito ES/CA/EN, teclado y lector de pantalla | Prioridades 1–4 | Producto + UX/accesibilidad |
| **6** | **Resolver los cuatro roles y cerrar JUA-10 solo como contrato documental** | §11.1 y §11.2; comprobación final de §12–13 | Checklist completo, todos los cambios cerrados, decisión de los roles de producto, privacidad/seguridad, contenido/clínica e ingeniería; comentario final en JUA-10/PR #2 | Prioridades 0–5 | Responsable de producto, con los cuatro roles |

## Secuencia detallada de la próxima jornada

### 1. Siguiente bloque inmediato: privacidad, consentimiento y coerción

Este es el siguiente bloque natural acordado ayer. Comenzar por **PC-01** y resolver la sección 5 en dos decisiones separadas para no confundir el contrato con la futura función:

1. **PC-01 a PC-06 — permiso y procedencia.**
   - Confirmar que no hay consentimiento global.
   - Mantener `self_report` como única fuente de v1.
   - Confirmar que `partner_observation` queda fuera de esquema, permiso, formulario, persistencia y fixtures válidos.
   - Registrar que una observación futura, si se estudiara, sería “lo que observé” y nunca una afirmación sobre el estado interno de otra persona.
   - Declarar que el consentimiento directo, comprensible, revisable y revocable lo deberá implementar JUA-6 / P2; P1 solo fija el requisito y la matriz que esa implementación debe obedecer.

2. **PC-07 a PC-11 — retirada, minimización y coerción.**
   - Confirmar el alcance de borrado exigido: registro, permiso, caché, claves, cálculos y salidas derivadas.
   - Dejar expresamente como **no demostrados** el borrado real y la revocación efectiva hasta P5 / JUA-18 y ADR-001 C4–C5.
   - Revalidar la exclusión absoluta de red, cuentas, backups, telemetría, píxeles, informes remotos de errores y logs sensibles.
   - Enlazar la evaluación de observación de pareja a EIPD, modelo de amenazas y evaluación de violencia tecnológica (JUA-13 / P6); no aprobarla por anticipado.

**Criterio de salida:** sección 5 marcada como “Aprobado para contrato documental” únicamente cuando las decisiones declaren de forma explícita los bloqueos de P2, P5, P6, P8 y ADR-001.

### 2. Prohibiciones y pruebas negativas

Resolver conjuntamente **PB-01 a PB-07**, la decisión de lenguaje de §6.2 y la evidencia técnica que las respalda.

| Paquete | Decisión que debe quedar explícita | Prueba o inspección requerida |
|---|---|---|
| Texto y contenido libre | Veto a `free_text`, notas, mensajes, diarios y equivalentes | Fixture `reject-free-text.json` rechazado. |
| Identidad y huella | Veto a nombre, correo, cuenta, contacto, ubicación, dispositivo, identificadores publicitarios y fingerprint | Fixture de identificador rechazado más inspección del esquema. |
| Materiales y conversaciones | Veto a archivos, capturas, audio, vídeo, conversaciones, mensajes y contenido extraído | Inventario de campos prohibidos revisado. |
| Sexualidad e intimidad | Veto permanente a deseo, actividad, consentimiento sexual, límites y disponibilidad | Fixture de intimidad rechazado y validación de lenguaje. |
| Clínica y causalidad | Veto a diagnóstico, tratamiento, puntuación clínica, riesgo, SPM/TDPM como etiqueta y atribución causal individual | Inventario de salidas prohibidas revisado. |
| Fuentes y automatismos | Solo `self_report`; veto a observación de pareja y fuentes derivadas de fase, conducta, mensajes, perfiles o cálculo automático | Fixtures de fuente derivada, observación y alcance incongruente rechazados. |

**Criterio de salida:** la decisión de lenguaje debe prohibir afirmaciones deterministas como “está así por la regla”, “tiene SPM/TDPM”, “hoy no querrá intimidad” y “día seguro”, y conservar sus alternativas educativas seguras.

### 3. Contenido, límites clínicos y experiencia “Hoy”

Ejecutar una revisión cruzada de contrato, dossier y especificación de panel. Debe tratarse como una revisión de coherencia y no como una autorización de nuevas funciones.

- **CE-01 a CE-06:** comprobar definición, no-definición, límites clínicos, trazabilidad bibliográfica y ausencia de recomendaciones individuales.
- **UX-01:** confirmar que la home nunca muestra variables, registros, observaciones ni asociaciones personalizadas.
- **UX-02 y UX-03:** comprobar que los estados inválidos no presentan fase vigente y que onboarding/“Cómo funciona” explican rango, actualización, caducidad, anticoncepción y no uso anticonceptivo.
- **UX-04:** dejar un requisito de aceptación para equivalencia segura ES/CA/EN, teclado y lector de pantalla. No hace falta implementar aún las traducciones para aprobar el contrato, pero el requisito sí debe quedar trazado.

### 4. Verificación técnica y resolución final

La verificación puede correr **en paralelo** con las revisiones de los bloques 1–3, pero debe repetirse una vez cerrado el último cambio documental.

1. Validar JSON, contrato y fixtures válidos/inválidos.
2. Repetir `npm run validate:taxonomy`, `npm run lint`, `npm run build` y `git diff --check` en la rama de JUA-10.
3. Revisar el diff para confirmar que sigue sin haber persistencia, red, analítica, telemetría, cuentas, sincronización o logs sensibles.
4. Completar las tres notas de límite de §9.2: fixtures sintéticos; prueba de contrato, no de producto; reutilización obligatoria de pruebas en trabajos posteriores.
5. Obtener las cuatro decisiones explícitas: Producto, Privacidad/seguridad, Contenido/revisión clínica e Ingeniería.
6. Solo entonces seleccionar una resolución de §11.2 y actualizar JUA-10 / PR #2.

## Elementos que no deben retrasar el cierre documental de P1, pero siguen bloqueando cualquier función

| Trabajo posterior / dependencia | Qué desbloquea después | Situación frente al cierre documental P1 |
|---|---|---|
| **JUA-6 / P2 — consentimiento granular** | Interfaz y pruebas de permiso directo, revisable y revocable por `categoría × fuente × permiso` | P1 debe fijar su matriz; no hace falta implementar P2 para aprobar el contrato. |
| **JUA-18 / P5 — borrado y revocación** | Borrado real de registros, categorías, caché, claves, cálculos y salidas derivadas | Debe quedar como dependencia explícita; no se puede declarar demostrado en P1. |
| **JUA-13 / P6 y ADR-001 C7–C8** | EIPD, modelo de amenazas, seguridad del emparejamiento y evaluación de violencia tecnológica | Imprescindible antes de observar a la pareja o pilotar; no se sustituye por la revisión documental. |
| **JUA-17 / P8 y ADR-001 C6** | Evidencia técnica de ausencia de salida remota y de logs sensibles | P1 solo verifica que el contrato lo prohíbe; una implementación futura necesitará revisión de red e infraestructura. |
| **JUA-14 / P3 — explicabilidad** | Fuente, muestra, incertidumbre y motivo de cualquier asociación local futura | Fuera de la v1 mínima y de la home. |
| **JUA-15 / P4 — umbrales y falsos positivos** | Tres ciclos confirmados, cobertura, contradicciones y pruebas de falsos positivos | No se inicia mientras no haya consentimientos, registros locales, borrado y controles de seguridad aprobados. |

## Dependencias de seguridad que permanecen inviolables

- Los datos de ciclo, las variables consentidas y las inferencias asociadas permanecen en el dispositivo que los conserva.
- La excepción de ADR-001 solo puede manejar coordinación pseudónima mínima de consentimiento y revocación; nunca datos de ciclo, variables, fases, anticoncepción, contenido ni derivados.
- No se registra, infiere, representa ni usa consentimiento sexual, deseo, límites o disponibilidad.
- No se habilita un piloto por aprobar P1. Antes de uno deben satisfacerse acumulativamente ADR-001 C1–C10 y ADR-002 P1–P8 aplicables, incluida revisión jurídica, EIPD y evaluación de violencia tecnológica.

## Resultado esperado de esta priorización

La ruta más corta y segura para cerrar P1 es:

> **evidencia técnica repetible → sección 5 (privacidad y consentimiento) → sección 6 (prohibiciones) → secciones 7–8 (contenido y UX) → firma de cuatro roles y resolución documental.**

Así, P1 puede cerrarse como un perímetro semántico aprobado, mientras las funciones que procesarían datos personales continúan bloqueadas y trazadas a sus dependencias correspondientes.
