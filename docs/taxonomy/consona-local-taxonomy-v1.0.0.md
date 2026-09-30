# Consona — Contrato taxonómico local v1.0.0

**Estado:** Candidato de revisión para P1 de ADR-002. **No aprobado.**
**Propósito:** Delimitar el vocabulario mínimo, cerrado y comprobable que deberá gobernar las futuras funciones locales autorizadas de Consona.
**No habilita:** formularios, registros reales, persistencia, observaciones de pareja, inferencias, aprendizaje ni piloto.

> Este contrato es una fuente de verdad para producto, contenido, privacidad e ingeniería. La validación incluida solo prueba artefactos sintéticos. No autoriza a recoger datos personales ni a conservar datos de ciclo.

## 1. Alcance normativo

La versión mínima `1.0.0` distingue seis planos que no se pueden mezclar:

| Plano | Qué puede contener | Estado en esta versión |
|---|---|---|
| Educación general | Explicaciones estáticas sobre fases, variabilidad y experiencias posibles en poblaciones. | `education_only`; no son categorías de captura. |
| Estimación local futura | Etiquetas temporales calculadas con fechas confirmadas y rango de incertidumbre. | Fuera del esquema; bloqueada por ADR-001. |
| Autoinforme futuro | Una de las tres categorías físicas cerradas de la sección 4, intensidad simple y fuente `self_report`. | Candidato `research_pending`; bloqueado por P2 y ADR-001. |
| Observación futura de pareja | Una percepción diferenciada de la pareja, nunca un hecho sobre la persona afectada. | Fuera del esquema v1; no es una fuente válida ni autorizable en esta versión. |
| Asociación local futura | Una salida con fuente, muestra, incertidumbre y motivo. | Fuera del esquema; bloqueada por P3, P4, P5 y P8. |
| Conceptos prohibidos | Datos y conclusiones incompatibles con Consona. | `prohibited` permanentemente o hasta una decisión explícita superior. |

La educación general no es un dato personal. Una fase estimada no confirma ovulación, fertilidad, hormonas, síntomas, salud, estado emocional, deseo, consentimiento, límites ni disponibilidad. La home mantiene sus tarjetas de orientación y no utiliza este contrato para describir a una persona concreta.

## 2. Forma mínima de un registro candidato

El esquema técnico [`consona-local-taxonomy-v1.0.0.schema.json`](./consona-local-taxonomy-v1.0.0.schema.json) admite solo los siguientes campos estructurados para sus *fixtures* sintéticos:

| Campo | Regla del contrato | Finalidad futura delimitada |
|---|---|---|
| `schema_version` | Debe ser exactamente `1.0.0`. | Evitar mezclar versiones. |
| `category_id` | Debe pertenecer a las tres categorías cerradas de la sección 4. | Identificar una experiencia descrita, no una condición. |
| `source` | Debe ser exactamente `self_report`. | Reconocer que el dato solo puede proceder de la propia persona afectada en la v1 mínima. |
| `consent_scope` | Debe coincidir exactamente con `category_id` y `self_report`. | Preparar la matriz de P2. |
| `intensity` | Debe ser `mild`, `moderate` o `intense`. | Descripción elegida, no gravedad clínica. |

No hay fecha, identificador de persona, cuenta, dispositivo, ubicación, red, URL, contenido libre, cálculo de fase ni derivado clínico en este esquema. Esas ausencias son deliberadas. La futura definición de metadatos locales solo puede avanzar bajo ADR-001, P2, P4, P5 y P8.

La observación de pareja está fuera de la taxonomía v1. Solo podría evaluarse en una versión posterior, con una revisión específica y consentimiento directo y revocable por categoría y fuente, borrado verificable, EIPD, evaluación de violencia tecnológica y una decisión explícita tras P2, P5, P6, P8 y ADR-001.

La falta de registro equivale a **dato ausente**. No equivale a ausencia de síntoma ni a una conclusión sobre una persona. La v1 mínima no registra `not_present` ni `not_applicable`.

## 3. Enumeración candidata de intensidad

| Valor | Significado limitado | No significa |
|---|---|---|
| `mild` | Intensidad elegida por la persona dentro de una escala descriptiva simple. | Severidad clínica, diagnóstico o necesidad de tratamiento. |
| `moderate` | Intensidad elegida por la persona dentro de una escala descriptiva simple. | Umbral de riesgo, urgencia o clasificación. |
| `intense` | Intensidad elegida por la persona dentro de una escala descriptiva simple. | Diagnóstico, triaje, causa o interpretación automática. |

No existen `not_present`, `not_applicable`, `not_recorded`, `other` ni valores libres como “muchísimo”, “raro” o descripciones narrativas. Si no se crea un registro, no hay dato.

## 4. Categorías candidatas cerradas

Las tres categorías de esta sección están en estado `research_pending`. Ninguna queda aprobada para capturarse, persistirse o usarse en una inferencia. Todas exigen un futuro consentimiento directo y granular; la v1 mínima solo contempla `self_report`.

La política de borrado candidata de cada categoría es idéntica: al retirar su permiso futuro, deben eliminarse el registro local de la categoría, toda asociación de consentimiento, caché y cualquier cálculo o salida derivada que la use; P5 definirá y demostrará ese comportamiento.

| ID estable | Etiqueta | Definición / no-definición | Fuente y permiso futuro | Uso delimitado | Evidencia y límite clínico |
|---|---|---|---|---|---|
| `physical_pain_or_cramps` | Dolor o calambres | Experiencia autorreferida de dolor o calambre. No identifica dismenorrea, endometriosis, infección ni causa. | `self_report`; `variables.physical.pain_or_cramps.self_report`. | Registro local candidato, nunca diagnóstico o triaje. | `09-health-pain.md` y síntesis JUA-10. Dolor intenso, cambiante o que afecta la vida diaria puede justificar atención profesional; la app no determina urgencia. |
| `physical_bloating` | Hinchazón percibida | Sensación autorreferida de hinchazón. No confirma retención de líquido, edema, gas, peso o enfermedad. | `self_report`; `variables.physical.bloating.self_report`. | Registro local candidato. | Síntesis JUA-10, sección de hinchazón. Una fase estimada no explica su causa ni predice su aparición. |
| `physical_fatigue` | Cansancio percibido | Experiencia de cansancio o fatiga percibida. No equivale a anemia, trastorno del sueño, SPM ni causa hormonal. | `self_report`; `variables.physical.fatigue.self_report`. | Registro local candidato. | Síntesis JUA-10, sección de energía y cansancio. No se atribuye al ciclo automáticamente. |

### 4.1. Experiencias que permanecen solo en educación general

Sueño, apetito, antojos, irritabilidad, tristeza, ansiedad, concentración y energía pueden aparecer únicamente como contenido educativo poblacional, con lenguaje cualificado y límites clínicos auditados. No son categorías del esquema v1, no tienen alcance de consentimiento, no se recogen, no se infieren y no aparecen en fixtures válidos.

Agregar cualquier categoría futura exige una versión nueva del contrato, revisión de producto, privacidad y contenido, actualización del esquema, nuevos fixtures, pruebas de regresión y una decisión trazable en JUA-10 o su sucesora.

## 5. Matriz candidata de consentimiento para P2

La siguiente matriz no implementa consentimiento. Define las únicas unidades que P2 tendría que aceptar, rechazar, revisar y retirar de forma separada para la v1 mínima.

| Grupo | Categorías candidatas | Fuente con alcance candidato en v1 | Alcance de permiso candidato |
|---|---|---|---|
| Física mínima | Dolor/calambres, hinchazón, cansancio. | `self_report` | Cada categoría física mínima × `self_report`. |

La v1 mínima no define una unidad de permiso para observación de pareja. Si se estudia esa fuente en una versión posterior, debe ser una unidad de permiso distinta y solo podrá describirse como “lo que observé”. Nunca se combinará con un autoinforme, nunca lo corregirá y nunca se presentará como un hecho clínico o estado interior de la persona afectada.

## 6. Conceptos y campos fuera del contrato

La lista completa está en [`consona-local-taxonomy-v1.0.0-prohibited-fields.md`](./consona-local-taxonomy-v1.0.0-prohibited-fields.md). Entre otros, están prohibidos texto libre, notas, nombres, ubicación, contactos, conversaciones, archivos, identificadores de cuenta, actividad sexual, deseo sexual, consentimiento sexual, límites, disponibilidad, diagnósticos, tratamientos, puntajes clínicos e inferencias de conducta.

También están fuera del esquema v1 las fuentes distintas de `self_report`, incluidas las derivadas de fase, conducta, mensajes, perfiles remotos o cálculos automáticos. La aplicación no puede completar datos ausentes ni fabricar un autoinforme.

## 7. Vínculos de control y condiciones pendientes

| Control | Relación con este contrato | Estado |
|---|---|---|
| P1 / JUA-10 | Define tres categorías, una fuente, tres intensidades y rechazo de campos adicionales mediante fixtures sintéticos. | Candidato en revisión. |
| P2 / JUA-6 | Debe implementar consentimiento directo, granular, revisable y revocable por categoría y fuente. | Bloqueado. |
| P3 / JUA-14 | Debe definir fuente, muestra, incertidumbre y motivo de una salida local futura. | Bloqueado. |
| P4 / JUA-15 | Debe definir cobertura, contradicción, antigüedad y falsos positivos antes de cualquier asociación. | Bloqueado. |
| P5 / JUA-18 | Debe demostrar borrado de registros, categorías, caché, claves, cálculos y derivados. | Bloqueado. |
| P6 / JUA-13 | Debe evaluar coerción, observación de pareja y riesgo residual antes de cualquier versión posterior que contemple esa fuente. | Bloqueado. |
| P8 / JUA-17 | Debe demostrar que variables, inferencias y contenido no salen del dispositivo. | Bloqueado. |
| ADR-001 | Impone esquema mínimo, consentimiento directo, revocación, borrado, modo sin conexión y ausencia de salida remota. | Condiciones acumulativas pendientes. |

## 8. Validación incluida

Los fixtures de [`fixtures/valid`](./fixtures/valid) y [`fixtures/invalid`](./fixtures/invalid) se validan con el script local `npm run validate:taxonomy`. La prueba verifica que el esquema solo acepte las tres categorías, `self_report` y las tres intensidades cerradas; también rechaza texto libre, categorías retiradas o desconocidas, intensidades no admitidas, fuentes no válidas y campos de intimidad o identificación.

La validación no procesa información de personas, no accede a red, no escribe almacenamiento local y no es una función de producto.

## 9. Aprobación requerida

Este contrato seguirá siendo un candidato hasta que producto, privacidad y contenido aprueben explícitamente las tres categorías, intensidad, fuente, matriz de permiso, política de borrado, límites clínicos y trazabilidad bibliográfica. La lista de decisiones está en [`REVIEW_CHECKLIST.md`](./REVIEW_CHECKLIST.md).

## References

[1]: ../research/JUA-10-investigacion-taxonomia.md "Síntesis de investigación JUA-10: taxonomía educativa de Consona"
[2]: ../research/JUA-10-cierre-auditorias.md "Cierre de auditorías bibliográficas JUA-10"
[3]: ../research/jua-10/09-health-pain.md "Consona — evidencia documental: experiencias de dolor o calambres"
[4]: ../research/jua-10/11-health-sleep-appetite.md "Consona — Experiencias de sueño y apetito a lo largo del ciclo menstrual"
[5]: ../research/jua-10/12-health-emotional-cognitive.md "Experiencias emocionales y cognitivas relacionadas con el ciclo"
