# JUA-10 — Dossier de investigación y auditoría

Este directorio reúne los materiales de trabajo que sustentan la taxonomía educativa de Consona. La documentación es **educativa, no diagnóstica** y no autoriza por sí misma seguimiento, calendario, aprendizaje, inferencias clínicas, almacenamiento de datos personales ni servicios remotos.

> Los datos de ciclo, las variables personales consentidas y las inferencias permitidas permanecen exclusivamente en el dispositivo. Consona no incorpora analítica, telemetría, sincronización, copias de seguridad ni registros remotos de esos datos. No se registran, infieren ni representan consentimiento sexual, deseo sexual, límites o disponibilidad.

## Documentos canónicos del PR

| Documento | Propósito | Estado |
|---|---|---|
| [`../JUA-10-investigacion-taxonomia.md`](../JUA-10-investigacion-taxonomia.md) | Síntesis de definiciones, evidencia, variabilidad y límites de producto. | Consolidado; enlaza el cierre de auditoría. |
| [`../JUA-10-cierre-auditorias.md`](../JUA-10-cierre-auditorias.md) | Sustituciones de fuentes, redacción aprobada, manifiesto de cambios y límites aún abiertos. | Cierre de siete auditorías; seguimiento explícito de puntos pendientes. |

## Material de apoyo incluido

| Grupo | Archivos | Uso |
|---|---|---|
| Propuesta de estructura | `00-propuesta-taxonomia-v2.md` | Versión vigente de la estructura inicial y las franjas editoriales. |
| Archivo histórico | `archive/00-propuesta-taxonomia-v1-sustituida.md` | Propuesta inicial; se conserva por trazabilidad y fue sustituida por la V2. |
| Investigación temática | `01-cycle-phases.md` a `13-cycle-variability.md` | Hallazgos estructurados por fase, franja de edad, experiencias de salud y variabilidad. |
| Auditorías de fuentes | `audit-01-nice-menopause.md` a `audit-07-rcog-pms.md` | Verificación detallada de versiones, sustituciones y límites de las fuentes. |

## Control de versiones y alcance

La propuesta inicial V1 se conserva en `archive/` exclusivamente por trazabilidad. La fuente vigente es `00-propuesta-taxonomia-v2.md`; ninguna decisión nueva debe tomar V1 como referencia operativa.

Los informes de apoyo no son especificaciones de interfaz ni reglas de producto. Ante una diferencia entre un informe de apoyo y el cierre de auditorías, prevalece `JUA-10-cierre-auditorias.md`. Ningún contenido clínico se convierte en una clasificación, predicción, puntuación de riesgo, triaje, recomendación terapéutica, dosis o instrucción individual.

## Candidato de contrato P1

El directorio [`../../taxonomy/`](../../taxonomy/) contiene el candidato revisable de **contrato taxonómico local v1.0.0** para P1 de ADR-002. Incluye el contrato explicativo, su esquema técnico cerrado, la lista de campos prohibidos, fixtures sintéticos y una lista de decisiones pendientes de aprobación humana.

Este candidato convierte los límites de esta investigación en controles verificables, pero no reemplaza el dossier bibliográfico ni constituye aprobación de producto. No habilita formularios, almacenamiento, datos de ciclo, observaciones de pareja, inferencias, sincronización, analítica, telemetría ni piloto. La v1 mínima admite solo `self_report` para tres categorías físicas candidatas; sueño, apetito, antojos y experiencias emocionales o cognitivas permanecen como contenido educativo y no son entradas de v1. La observación de pareja está fuera del esquema y exigiría una versión posterior junto con P2, P5, P6, P8 y ADR-001.
