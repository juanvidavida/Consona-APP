> **Archivo histórico — no usar como estado actual.**
>
> Corte verificado a las 09:32 CEST del 1 de octubre de 2026. Conserva la decisión y la evidencia de cierre de P1; los estados posteriores viven en Linear y la ruta mantenida está en [`../ruta-critica-modelo-e.md`](../ruta-critica-modelo-e.md).

# Consona — Estado actualizado y priorización posterior a P1

**Verificado:** 1 de octubre de 2026, 09:32 CEST
**Ámbito:** P1 de ADR-002 / JUA-10 — contrato taxonómico local v1.0.0.

## Estado confirmado en las fuentes activas

| Fuente | Estado comprobado | Momento registrado |
|---|---|---|
| Linear | [JUA-10](https://linear.app/juan-vidaechea/issue/JUA-10/p1-adr-002-aprobar-contrato-de-taxonomia-local-cerrada-y-verificar) está en **Done**. | `completedAt`: 2026-10-01 07:26:05 UTC |
| GitHub | [PR #2](https://github.com/juanvidavida/Consona-APP/pull/2), `JUA-10: Documentar taxonomía y auditorías bibliográficas`, está **MERGED** contra `main`. | Actualizado: 2026-10-01 07:26:04 UTC |

> La priorización anterior para *completar* P1 queda sustituida por este estado. Se basaba en el historial de ayer, donde JUA-10 seguía en progreso. La descripción de la incidencia conserva textos históricos de ese momento, pero el estado vivo de Linear y la fusión del PR confirman su cierre documental.

## Qué quedó logrado con P1

- Un contrato taxonómico local, cerrado y versionado para una futura implementación.
- Una v1 mínima limitada a `physical_pain_or_cramps`, `physical_bloating` y `physical_fatigue`.
- Fuente exclusiva `self_report` e intensidades `mild`, `moderate` e `intense`.
- Exclusión de sueño, apetito, antojos y variables emocionales/cognitivas de categorías, permisos, registros e inferencias v1; pueden existir solo como educación poblacional.
- Veto estructural a texto libre, identidad, contenidos extraídos, sexualidad, consentimiento sexual, límites, disponibilidad, diagnósticos, tratamiento, atribuciones conductuales y fuentes derivadas.
- Fixtures sintéticos y validación de contrato que rechazan los campos y valores no permitidos.

## Qué no cambia con el cierre de P1

El cierre es **documental**, no funcional. Permanecen prohibidos o bloqueados:

- recoger o procesar datos reales de ciclo o variables;
- formularios, `localStorage`, IndexedDB, sincronización, copias de seguridad, cuentas de ciclo, analítica, telemetría, informes remotos de errores o logs sensibles;
- observación de pareja y cualquier inferencia sobre deseo, consentimiento sexual, límites o disponibilidad;
- piloto, hasta cumplir las condiciones acumulativas aplicables de ADR-001 C1–C10 y ADR-002 P1–P8, incluida revisión jurídica, EIPD y evaluación de violencia tecnológica.

## Siguiente secuencia priorizada

| Prioridad | Trabajo | Objetivo y evidencia exigida | Por qué precede al siguiente paso |
|---|---|---|---|
| **1** | **CON-008 — contrato de minimización del servicio de coordinación** | Campos permitidos, identificadores rotables/no identificativos, retención, prohibición de logs y demostración de que ningún dato de ciclo puede entrar en el servicio. | Materializa ADR-001 C1, C2 y C6 sin convertir Consona en un backend de salud. |
| **2** | **CON-007 — autorización, retirada, borrado y caso sin conexión** | Modelo de estados, consentimiento directo, revocación, bloqueo, borrado local, caché, claves, derivados, dispositivos offline/apagados y mensajes honestos sobre el límite de borrado remoto. | Materializa ADR-001 C3–C5; debe diseñarse de forma coherente con el contrato mínimo de coordinación. |
| **3** | **CON-010, CON-013 y CON-015 — revisión jurídica, EIPD, violencia tecnológica y modelo de amenazas** | Dictamen profesional, riesgos de emparejamiento/coerción/acceso persistente, medidas y pruebas de revocación. | Son condiciones vinculantes de ADR-001 C7–C8 y ADR-002 P6; no pueden sustituirse por una revisión interna documental. |
| **4** | **CON-016 y CON-009 — consentimiento granular y reglas de aprendizaje local** | Diseño y pruebas de permisos por `categoría × fuente × permiso`; umbrales, cobertura, contradicciones, falsos positivos y retención limitada. | P1 ya fija el vocabulario mínimo; estas tareas definen si alguna función local podría usarlo de forma segura. |
| **5** | **CON-030 — arquitectura local-first definitiva** | Arquitectura aprobada sin backend de ciclos, con la excepción de coordinación limitada verificable. | Solo procede tras CON-007, CON-008, CON-010, CON-013 y CON-015, como establece el backlog. |
| **6** | **CON-032 a CON-035 — motor, onboarding, panel “Hoy” y pruebas integrales** | Motor auditado, transparencia progresiva, estados seguros, comprensión, privacidad, revocación, offline y ausencia de recursos externos. | Desarrollo únicamente cuando la arquitectura y salvaguardas anteriores estén resueltas. |

## Regla de ejecución

La siguiente tarea debe ser **diseño de seguridad y cumplimiento**, no implementar seguimiento. Mientras las prioridades 1–4 no estén satisfechas y verificadas, Consona debe conservar el modelo educativo sin datos de la persona afectada como alternativa compatible.

**No se modificaron Linear, GitHub ni el repositorio durante esta comprobación.**
