# Gobernanza y planificación de Consona

Este directorio preserva decisiones y cortes de planificación sin convertir documentos fechados en una segunda herramienta de seguimiento.

> **Regla de fuente única:** Linear contiene el estado, la asignación y las dependencias operativas vivas; `main` contiene el código y la documentación aprobada; los ADR y la línea base contienen las restricciones de producto, privacidad y seguridad. Este directorio explica la ruta y conserva cortes históricos, pero no sustituye ninguna de esas fuentes.

## Documentos mantenidos

| Documento | Uso | Cuándo actualizarlo |
|---|---|---|
| [Ruta crítica del modelo E](./ruta-critica-modelo-e.md) | Explica puertas, dependencias de alto nivel, criterios de salida y riesgos que deciden la viabilidad de un piloto personalizado. | Al cerrar/abrir una puerta, cambiar una decisión de arquitectura o modificar la secuencia de trabajo. No para cada cambio de estado cotidiano. |
| [Archivo de cortes de planificación](./snapshots/) | Conserva el razonamiento y el contexto de decisiones fechadas. | Nunca se reescribe salvo para corregir un enlace o una errata factual; los nuevos cortes crean archivos nuevos. |

## Fuentes de autoridad

| Tema | Fuente que prevalece | Uso de este repositorio |
|---|---|---|
| Límites de datos, consentimiento y servicio mínimo | [`ADR-001`](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md) | Las especificaciones técnicas deben ser trazables a estos límites. |
| Aprendizaje local, variables e inferencias | [`ADR-002`](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md) | Las tareas de producto y datos no pueden ampliar sus límites. |
| Prioridades y alcance de trabajo | [Linear — proyecto Consona App](https://linear.app/juan-vidaechea/team/JUA/all) | Mantiene incidencias, responsable, estado y dependencias vivas. |
| Evidencia versionada | [GitHub — `main`](https://github.com/juanvidavida/Consona-APP/tree/main) | Conserva especificaciones, esquemas, fixtures, pruebas y documentos aceptados. |

## Convenciones que evitan deuda documental

1. **No se duplica un estado vivo.** Un documento puede declarar su fecha de corte, pero su lector debe ir a Linear para saber si una incidencia está hoy en Backlog, In Progress o Done.
2. **Un documento mantenido tiene un propietario de actualización y una finalidad.** La ruta crítica explica puertas; no reproduce descripciones completas de incidencias.
3. **Los documentos históricos llevan fecha y advertencia visible.** No se convierten en instrucciones de trabajo actuales.
4. **La evidencia técnica se enlaza, no se reescribe.** Por ejemplo, CON-007 y CON-008 permanecen en `docs/security/`.
5. **No se declara habilitación por documentación.** La integración de un documento en `main` no habilita datos reales, persistencia, sincronización, despliegue ni piloto.

## Archivo histórico disponible

| Corte | Estado | Motivo de conservación |
|---|---|---|
| [Priorización P1 anterior a comprobación viva](./snapshots/2026-10-01-priorizacion-p1-pre-live.md) | Sustituido el 1 de octubre de 2026. | Traza de la revisión documental previa a verificar Linear y GitHub. |
| [Estado posterior al cierre documental de P1](./snapshots/2026-10-01-estado-post-p1.md) | Corte histórico. | Evidencia de qué cerró JUA-10 y qué seguía bloqueado en ese momento. |
| [Ruta crítica original](./snapshots/2026-10-01-ruta-critica-original.md) | Sustituida como guía operativa. | Preserva el análisis inicial y la decisión de trabajar el modelo E. |

## Relación con documentación de seguridad

- [CON-007 — autorización, retirada, borrado y offline](../security/CON-007_AUTORIZACION_REVOCACION_Y_OFFLINE.md)
- [CON-008 — contrato técnico y API mínima](../security/CON-008_REQUERIMIENTOS_TECNICOS_Y_API.md)

Estas especificaciones son evidencia de diseño versionada. Sus condiciones abiertas y sus tareas sucesoras se gestionan en Linear y en la ruta crítica mantenida.
