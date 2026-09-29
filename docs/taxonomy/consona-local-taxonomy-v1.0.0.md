# Consona — Contrato taxonómico local v1.0.0

**Estado:** Candidato de revisión para P1 de ADR-002. **No aprobado.**
**Propósito:** Delimitar un vocabulario cerrado y comprobable para una futura implementación local.
**No habilita:** formularios, registros reales, persistencia, observaciones de pareja, inferencias, aprendizaje ni piloto.

> Este contrato es un control de producto, privacidad y contenido. La validación incluida solo prueba artefactos sintéticos. No autoriza a recoger datos personales ni a conservar datos de ciclo.

## 1. Alcance normativo

La versión `1.0.0` distingue seis planos que no se pueden mezclar:

| Plano | Qué puede contener | Estado en esta versión |
|---|---|---|
| Educación general | Explicaciones estáticas sobre fases, variabilidad y experiencias posibles en poblaciones. | `education_only` |
| Estimación local futura | Etiquetas temporales calculadas con fechas confirmadas y rango de incertidumbre. | Fuera del esquema; bloqueada por ADR-001. |
| Autoinforme futuro | Una categoría cerrada, una intensidad y la fuente `self_report`. | Candidato `research_pending`; bloqueado por P2 y ADR-001. |
| Observación futura de pareja | Una percepción diferenciada de la pareja, nunca un hecho sobre la persona afectada. | Vocabulario reservado en el esquema; sin permiso, alcance ni fixture válido en v1; bloqueado por P2, P5, P6, P8 y ADR-001. |
| Asociación local futura | Una salida con fuente, muestra, incertidumbre y motivo. | Fuera del esquema; bloqueada por P3, P4, P5 y P8. |
| Conceptos prohibidos | Datos y conclusiones incompatibles con Consona. | `prohibited` permanentemente o hasta una decisión explícita superior. |

La educación general no es un dato personal. Una fase estimada no confirma ovulación, fertilidad, hormonas, síntomas, salud, estado emocional, deseo, consentimiento, límites ni disponibilidad. La home mantiene sus tarjetas de orientación y no utiliza este contrato para describir a una persona concreta.

## 2. Forma mínima de un registro candidato

El esquema técnico [`consona-local-taxonomy-v1.0.0.schema.json`](./consona-local-taxonomy-v1.0.0.schema.json) admite solo los siguientes campos estructurados para sus *fixtures* sintéticos:

| Campo | Regla del contrato | Finalidad futura delimitada |
|---|---|---|
| `schema_version` | Debe ser exactamente `1.0.0`. | Evitar mezclar versiones. |
| `category_id` | Debe pertenecer a la lista cerrada de la sección 4. | Identificar una experiencia descrita, no una condición. |
| `source` | Vocabulario cerrado: `self_report` o `partner_observation`. En v1 solo `self_report` dispone de un alcance de consentimiento candidato y fixtures válidos. | Mantener procedencia sin sustituir ni mezclar fuentes. |
| `consent_scope` | Debe coincidir exactamente con `category_id` y `source`. | Preparar la matriz de P2. |
| `intensity` | Debe pertenecer a la enumeración cerrada de la sección 3. | Descripción elegida, no gravedad clínica. |

No hay fecha, identificador de persona, cuenta, dispositivo, ubicación, red, URL, contenido libre, cálculo de fase ni derivado clínico en este esquema. Esas ausencias son deliberadas. La futura definición de metadatos locales solo puede avanzar bajo ADR-001, P2, P4, P5 y P8.

`partner_observation` figura solo para que P1 cierre el vocabulario de las dos fuentes que ADR-002 contempla. La v1 no le asigna una categoría × fuente × permiso, no incluye un fixture válido y no autoriza su captura. Una versión posterior necesitaría consentimiento directo y revocable por categoría y fuente, borrado verificable, EIPD, evaluación de violencia tecnológica y una decisión explícita tras P2, P5, P6, P8 y ADR-001.

La falta de registro equivale a **dato ausente**. Nunca equivale a `not_present`, a ausencia de síntoma ni a una conclusión sobre una persona.

## 3. Enumeración candidata de intensidad

| Valor | Significado limitado | No significa |
|---|---|---|
| `not_present` | La persona indica que no percibió esa categoría en la entrada que decidió crear. | Que nunca exista, que no vaya a aparecer o que no haya otras causas. |
| `mild` | Intensidad elegida por la persona dentro de una escala descriptiva. | Severidad clínica, diagnóstico o necesidad de tratamiento. |
| `moderate` | Intensidad elegida por la persona dentro de una escala descriptiva. | Umbral de riesgo, urgencia o clasificación. |
| `intense` | Intensidad elegida por la persona dentro de una escala descriptiva. | Diagnóstico, triaje, causa o interpretación automática. |
| `not_applicable` | La persona indica que la escala no resulta aplicable a esa entrada. | Dato faltante o dato negativo. |

`not_recorded` no es un valor de intensidad. Si no hay una entrada, no hay dato. No existe `other`, ni valores libres como “muchísimo”, “raro” o descripciones narrativas.

## 4. Categorías candidatas cerradas

Todas las categorías de esta sección están en estado `research_pending`. Ninguna queda aprobada para capturarse, persistirse, observarse por una pareja o usarse en una inferencia. Para cada categoría, `self_report` tiene un alcance candidato de permiso; `partner_observation` permanece reservado y bloqueado.

La política de borrado candidata de cada categoría es idéntica: al retirar su permiso futuro, deben eliminarse el registro local de la categoría, toda asociación de consentimiento, caché y cualquier cálculo o salida derivada que la use; P5 definirá y demostrará ese comportamiento.

### 4.1. Experiencias físicas

| ID estable | Etiqueta | Definición / no-definición | Fuente y permiso futuro | Uso delimitado | Evidencia y límite clínico |
|---|---|---|---|---|---|
| `physical_pain_or_cramps` | Dolor o calambres | Experiencia autorreferida de dolor o calambre. No identifica dismenorrea, endometriosis, infección ni causa. | `self_report`; `variables.physical.pain_or_cramps.self_report`. | Registro local candidato, nunca diagnóstico o triaje. | `09-health-pain.md` y síntesis JUA-10. Dolor intenso, cambiante o que afecta la vida diaria puede justificar atención profesional; la app no determina urgencia. |
| `physical_bloating` | Hinchazón percibida | Sensación autorreferida de hinchazón. No confirma retención de líquido, edema, gas, peso o enfermedad. | `self_report`; `variables.physical.bloating.self_report`. | Registro local candidato. | Síntesis JUA-10, sección de hinchazón. Una fase estimada no explica su causa ni predice su aparición. |
| `physical_fatigue` | Cansancio percibido | Experiencia de cansancio o fatiga percibida. No equivale a anemia, trastorno del sueño, SPM ni causa hormonal. | `self_report`; `variables.physical.fatigue.self_report`. | Registro local candidato. | Síntesis JUA-10, sección de energía y cansancio. No se atribuye al ciclo automáticamente. |
| `physical_sleep_perceived` | Sueño percibido | Percepción de descanso o dificultad de sueño elegida por la persona. No diagnostica insomnio ni una causa hormonal. | `self_report`; `variables.physical.sleep_perceived.self_report`. | Registro local candidato. | `11-health-sleep-appetite.md`. Los estudios son heterogéneos y no permiten pronóstico individual. |
| `physical_appetite_perceived` | Apetito percibido | Percepción de cambio de apetito respecto a lo habitual para esa persona. No representa calorías, peso, ingesta nutricional ni conducta alimentaria. | `self_report`; `variables.physical.appetite_perceived.self_report`. | Registro local candidato. | `11-health-sleep-appetite.md`. Una media de grupo no es una meta ni una expectativa individual. |
| `physical_craving_perceived` | Antojo percibido | Percepción de antojo sin clasificar alimentos, cantidades, nutrientes ni conducta alimentaria. No identifica una necesidad biológica. | `self_report`; `variables.physical.craving_perceived.self_report`. | Registro local candidato. | `11-health-sleep-appetite.md`. No se atribuye a biomarcadores, fase, peso o salud mental. |

### 4.2. Experiencias emocionales y cognitivas

| ID estable | Etiqueta | Definición / no-definición | Fuente y permiso futuro | Uso delimitado | Evidencia y límite clínico |
|---|---|---|---|---|---|
| `emotional_irritability_perceived` | Irritabilidad percibida | Experiencia autoexpresada en el momento de registrar. No es rasgo, conducta, diagnóstico ni explicación de acciones. | `self_report`; `variables.emotional_cognitive.irritability_perceived.self_report`. | Registro local candidato. | ADR-002 §3 y `12-health-emotional-cognitive.md`. La fase no predice irritabilidad. |
| `emotional_sadness_perceived` | Tristeza percibida | Experiencia autoexpresada en el momento de registrar. No diagnostica depresión, SPM o TDPM. | `self_report`; `variables.emotional_cognitive.sadness_perceived.self_report`. | Registro local candidato. | ADR-002 §3 y `12-health-emotional-cognitive.md`. La afectación persistente requiere valoración profesional, no etiqueta de app. |
| `emotional_anxiety_perceived` | Ansiedad percibida | Experiencia autoexpresada de ansiedad percibida. No diagnostica trastorno de ansiedad ni causa hormonal. | `self_report`; `variables.emotional_cognitive.anxiety_perceived.self_report`. | Registro local candidato. | ADR-002 §3 y `12-health-emotional-cognitive.md`. No se usa para riesgo, triaje ni predicción. |
| `cognitive_concentration_perceived` | Concentración percibida | Percepción de concentración en ese momento. No mide rendimiento, capacidad, memoria ni estado cognitivo clínico. | `self_report`; `variables.emotional_cognitive.concentration_perceived.self_report`. | Registro local candidato. | `12-health-emotional-cognitive.md`. La evidencia no permite asumir cambios cognitivos por fase. |
| `cognitive_energy_perceived` | Energía percibida | Percepción de energía o vigor en ese momento. No es rendimiento, motivación, capacidad física ni diagnóstico. | `self_report`; `variables.emotional_cognitive.energy_perceived.self_report`. | Registro local candidato. | Síntesis JUA-10 y `12-health-emotional-cognitive.md`. No hay secuencia universal por fase. |

## 5. Matriz candidata de consentimiento para P2

La siguiente matriz no implementa consentimiento. Define las unidades que P2 tendría que aceptar, rechazar, revisar y retirar de forma separada.

| Grupo | Categorías candidatas | Fuente con alcance candidato en v1 | Alcance de permiso candidato | Fuente reservada |
|---|---|---|---|---|
| Física | Dolor/calambres, hinchazón, cansancio, sueño percibido, apetito percibido, antojo percibido. | `self_report` | Cada categoría física × `self_report`. | `partner_observation`: no incluida ni habilitada en v1. |
| Emocional y cognitiva | Irritabilidad, tristeza, ansiedad, concentración y energía percibidas. | `self_report` | Cada categoría emocional/cognitiva × `self_report`. | `partner_observation`: no incluida ni habilitada en v1. |

Si se estudia una fuente de observación en una versión posterior, debe ser una unidad de permiso distinta y solo podrá describirse como “lo que observé”. Nunca se combinará con un autoinforme, nunca lo corregirá y nunca se presentará como un hecho clínico o estado interior de la persona afectada.

## 6. Conceptos y campos fuera del contrato

La lista completa está en [`consona-local-taxonomy-v1.0.0-prohibited-fields.md`](./consona-local-taxonomy-v1.0.0-prohibited-fields.md). Entre otros, están prohibidos texto libre, notas, nombres, ubicación, contactos, conversaciones, archivos, identificadores de cuenta, actividad sexual, deseo sexual, consentimiento sexual, límites, disponibilidad, diagnósticos, tratamientos, puntajes clínicos e inferencias de conducta.

También están fuera del esquema v1 las fuentes derivadas de fase, conducta, mensajes, perfiles remotos o cálculos automáticos. La aplicación no puede completar datos ausentes ni fabricar un autoinforme.

## 7. Vínculos de control y condiciones pendientes

| Control | Relación con este contrato | Estado |
|---|---|---|
| P1 / JUA-10 | Define categorías, fuente, intensidad y rechazo de campos adicionales mediante fixtures sintéticos. | Candidato en revisión. |
| P2 / JUA-6 | Debe implementar consentimiento directo, granular, revisable y revocable por categoría y fuente. | Bloqueado. |
| P3 / JUA-14 | Debe definir fuente, muestra, incertidumbre y motivo de una salida local futura. | Bloqueado. |
| P4 / JUA-15 | Debe definir cobertura, contradicción, antigüedad y falsos positivos antes de cualquier asociación. | Bloqueado. |
| P5 / JUA-18 | Debe demostrar borrado de registros, categorías, caché, claves, cálculos y derivados. | Bloqueado. |
| P6 / JUA-13 | Debe evaluar coerción, observación de pareja y riesgo residual. | Bloqueado. |
| P8 / JUA-17 | Debe demostrar que variables, inferencias y contenido no salen del dispositivo. | Bloqueado. |
| ADR-001 | Impone esquema mínimo, consentimiento directo, revocación, borrado, modo sin conexión y ausencia de salida remota. | Condiciones acumulativas pendientes. |

## 8. Validación incluida

Los fixtures de [`fixtures/valid`](./fixtures/valid) y [`fixtures/invalid`](./fixtures/invalid) se validan con el script local `npm run validate:taxonomy`. La prueba verifica que el esquema solo acepte valores cerrados y rechace texto libre, categorías desconocidas, intensidades no admitidas, fuentes no permitidas y campos de intimidad o identificación.

La validación no procesa información de personas, no accede a red, no escribe almacenamiento local y no es una función de producto.

## 9. Aprobación requerida

Este contrato seguirá siendo un candidato hasta que producto, privacidad y contenido aprueben explícitamente las categorías, intensidad, fuentes, matriz de permiso, política de borrado, límites clínicos y trazabilidad bibliográfica. La lista de decisiones está en [`REVIEW_CHECKLIST.md`](./REVIEW_CHECKLIST.md).

## References

[1]: ../research/JUA-10-investigacion-taxonomia.md "Síntesis de investigación JUA-10: taxonomía educativa de Consona"
[2]: ../research/JUA-10-cierre-auditorias.md "Cierre de auditorías bibliográficas JUA-10"
[3]: ../research/jua-10/09-health-pain.md "Consona — evidencia documental: experiencias de dolor o calambres"
[4]: ../research/jua-10/11-health-sleep-appetite.md "Consona — Experiencias de sueño y apetito a lo largo del ciclo menstrual"
[5]: ../research/jua-10/12-health-emotional-cognitive.md "Experiencias emocionales y cognitivas relacionadas con el ciclo"
