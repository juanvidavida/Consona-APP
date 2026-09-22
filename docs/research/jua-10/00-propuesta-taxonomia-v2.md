# Consona — Estructura revisada de la taxonomía semántica

**Tarea asociada:** JUA-10 — Crear taxonomía de la capa semántica
**Versión:** 0.2, propuesta de estructura
**Fecha:** 21 de septiembre de 2026
**Estado:** Pendiente de investigación, revisión clínica, revisión de contenido y revisión de privacidad

## Decisión de estructura

La taxonomía incorporará un módulo específico de **contexto de edad y etapa vital**, junto con los módulos ya previstos de glosario de fases, experiencias de salud, variabilidad del ciclo, estimación local, consentimiento, orientación de la home y conceptos prohibidos.

Las franjas solicitadas se guardan como un marco editorial de educación poblacional. No crean un perfil clínico, no predicen el comportamiento de una persona, no diagnostican ninguna transición vital y no obligan a registrar la edad para usar Consona. Las afirmaciones educativas que se asocien a cada franja se mantendrán en estado `research_pending` hasta completar la investigación posterior.

> **Regla vinculante:** La edad y la fase estimada nunca permiten inferir dolor, hinchazón, energía, ánimo, deseo sexual, consentimiento sexual, límites, disponibilidad ni conducta de una persona concreta. La conversación directa y el consentimiento actual no se sustituyen con taxonomías, promedios ni estimaciones.[1] [2]

## Módulos de la taxonomía

| Módulo | Finalidad | Tipo de contenido | Regla de presentación |
| --- | --- | --- | --- |
| `cycle_glossary` | Definir fases, día de ciclo, ventana, actualización, incertidumbre y caducidad | Educación general y estimación local condicionada | La fase no se presenta como un hecho clínico ni como explicación de conducta |
| `health_experiences` | Organizar educación sobre energía percibida, dolor, hinchazón, cansancio, sueño, apetito y experiencias emocionales o cognitivas | Educación general | Cada posible relación requiere evidencia, lenguaje cualificado y límites clínicos |
| `cycle_variability` | Explicar duración, días de sangrado, variación entre ciclos y dentro de una misma persona | Educación general y regla de estimación local futura | No se asume un ciclo fijo ni se convierte una media en expectativa individual |
| `life_stage_context` | Organizar el contenido educativo por franja etaria y etapa vital | Educación poblacional | La edad no clasifica ni diagnostica a una persona usuaria |
| `local_estimation` | Definir el resultado local de fase, ventana y vigencia | Estimación probabilística local | Solo se habilita cuando ADR-001, ADR-002 y el motor auditado lo permitan |
| `consent_and_control` | Definir fuente, alcance, retirada, bloqueo y borrado | Control de datos locales | Sin datos de ciclo o variables en servicios remotos |
| `home_guidance` | Definir las cuatro tarjetas de orientación | Educación y acción propia | No muestra variables ni inferencias personales |
| `prohibited_inferences` | Bloquear usos incompatibles con Consona | Límite de producto | No puede aparecer en modelos, campos, registros, contenido o analítica |

## Módulo `life_stage_context`: franjas actualizadas

Las franjas se incluyen exactamente como estructura editorial solicitada. Algunas se solapan en el límite de 45 años y la referencia de menopausia se encuentra dentro de la franja de perimenopausia. Ese solapamiento se conserva: representa un punto de transición que requerirá investigación y redacción cuidadosa, no una asignación automática basada solo en edad.

| Identificador estable | Etiqueta visible | Franja editorial solicitada | Rol taxonómico | Límite operativo en Consona |
| --- | --- | --- | --- | --- |
| `life_stage.adolescence` | Adolescencia | Hasta 19 años | Contexto educativo poblacional | Consona mantiene el alcance de personas adultas: la aplicación solo podría cubrir 18–19 años; no recoge ni procesa datos de menores de 18 años |
| `life_stage.reproductive_age` | Edad reproductiva | 20–39 años | Contexto educativo poblacional | No permite inferir regularidad, fertilidad, síntomas ni necesidades individuales |
| `life_stage.reproductive_transition` | Transición reproductiva | 40–45 años | Contexto educativo poblacional de transición | El límite de 45 años se trata como solapamiento editorial; no clasifica a la persona |
| `life_stage.perimenopause` | Perimenopausia | 45–55 años | Contexto educativo poblacional de transición | No diagnostica perimenopausia por edad, por duración de ciclo ni por una fase estimada |
| `life_stage.menopause.reference_age` | Menopausia | ~51 años | Hito de referencia editorial, no franja | No confirma menopausia, no determina tratamiento ni sustituye valoración sanitaria |
| `life_stage.postmenopause` | Postmenopausia | 55+ años | Contexto educativo poblacional | No presupone una experiencia concreta por superar la edad de referencia |

## Convención para límites y solapamientos

La taxonomía no resolverá los solapamientos con una regla automática de edad. Para cada concepto de edad se almacenará el tipo de límite y no solo el número.

```yaml
id: life_stage.perimenopause
module: life_stage_context
semantic_layer: general_education
status: research_pending

age_context:
  requested_range: "45–55 años"
  boundary_type: editorial_overlap
  overlaps_with:
    - life_stage.reproductive_transition
    - life_stage.menopause.reference_age
  age_collection_required: false
  individual_classification: prohibited
  clinical_diagnosis: prohibited
```

La entrada `life_stage.menopause.reference_age` se modela como un **hito de referencia** y no como una banda. Su valor `~51 años` se conserva como parámetro editorial pendiente de validación clínica, no como umbral para una decisión de producto.

## Módulo `health_experiences`: estructura para salud y bienestar

Las experiencias de salud solicitadas se incluyen como conceptos educativos independientes. No se enlazan automáticamente a una fase ni a una franja de edad. La futura investigación decidirá qué relaciones poblacionales se pueden explicar, con qué evidencia y con qué advertencias.

| Identificador | Etiqueta inicial | Capa | Uso permitido tras revisión | Uso prohibido |
| --- | --- | --- | --- | --- |
| `health.experience.perceived_energy` | Energía percibida | Educación general | Explicar variación posible con lenguaje cualificado | Inferir capacidad o energía de una persona por fase o edad |
| `health.experience.pain` | Dolor o calambres | Educación general | Educar sobre experiencias posibles y límites de autocuidado | Afirmar dolor individual sin autoinforme o diagnosticar |
| `health.experience.bloating` | Hinchazón | Educación general | Presentar información poblacional revisada | Presentarla como universal o como causa de conducta |
| `health.experience.fatigue` | Cansancio | Educación general | Ofrecer educación general y mensajes de seguridad revisados | Atribuirlo automáticamente al ciclo o a la edad |
| `health.experience.sleep` | Sueño | Educación general | Explicar con especial cautela los límites de evidencia | Inferir descanso, rendimiento o estado mental |
| `health.experience.appetite` | Apetito o antojos | Educación general | Incluir contenido revisado y no estigmatizante | Usarlo para explicar decisiones o conducta |
| `health.experience.emotional_cognitive` | Experiencias emocionales y cognitivas | Educación general | Describir variación sin convertirla en rasgo o diagnóstico | Afirmar cómo se siente una persona o predecir su conducta |

Cada entrada de este módulo deberá incluir `evidence_status`, `evidence_sources`, `population_scope`, `qualified_language`, `clinical_limit`, `safety_message`, `content_review` y `privacy_review`. Hasta entonces, no genera contenido de salud publicable.

## Módulo `cycle_variability`: estructura para variación del ciclo

La variabilidad se representa como un concepto educativo y como una condición del motor de estimación local. No es un diagnóstico ni una evidencia suficiente para concluir qué ocurre en una persona.

| Identificador | Pregunta educativa | Uso permitido | Límite obligatorio |
| --- | --- | --- | --- |
| `variation.cycle.total_duration` | ¿Cómo puede variar la duración total del ciclo? | Educación general y rango local futuro | No convertir promedios en expectativa individual |
| `variation.bleeding.duration` | ¿Cómo pueden variar los días de sangrado? | Educación general | No evaluar ni diagnosticar a una persona |
| `variation.cycle.between_cycles` | ¿Cómo puede variar un ciclo respecto de otros? | Educación general | No crear un historial remoto o una alerta de vigilancia |
| `variation.cycle.within_person` | ¿Cómo puede cambiar un patrón en una misma persona? | Rango local basado en fechas confirmadas | No asumir datos no confirmados |
| `variation.estimate.uncertainty` | ¿Por qué el resultado usa una ventana? | Transparencia de producto | Debe estar disponible antes del panel y en “Cómo funciona” |
| `variation.estimate.staleness` | ¿Cuándo no es apropiado mostrar una fase? | Estado de seguridad | Debe ocultar la fase y explicar el motivo |
| `variation.context.contraception` | ¿Cuándo no corresponde estimar una fase? | Educación y estado inválido | No forzar una fase cuando el método impide estimarla de forma responsable |

## Modelo de ficha semántica

Cada concepto del diccionario seguirá esta estructura mínima. Los campos de evidencia se completarán en la fase posterior de investigación; no se rellenarán con afirmaciones no verificadas.

```yaml
id: life_stage.reproductive_transition
version: "0.2-draft"
module: life_stage_context
semantic_layer: general_education
status: research_pending

label:
  es: "Transición reproductiva"
  ca: "Transició reproductiva"
  en: "Reproductive transition"

age_context:
  requested_range: "40–45 años"
  boundary_type: editorial_overlap
  age_collection_required: false
  individual_prediction: prohibited
  clinical_classification: prohibited

definition:
  es: "Contexto editorial poblacional pendiente de investigación; no describe el estado de una persona concreta."

presentation:
  allowed:
    - educational_content_after_evidence_review
    - how_it_works
  prohibited:
    - individual_profile
    - diagnosis
    - phase_prediction
    - sexual_context

privacy:
  personal_data_collection: not_required
  remote_processing: prohibited

research:
  evidence_status: pending
  evidence_sources: []
  clinical_review: pending
  content_review: pending
  privacy_review: pending

prohibited_interpretations:
  - "Por tener esta edad, la persona está en esta etapa"
  - "Por esta edad, sentirá un síntoma concreto"
  - "Por esta edad, puede tomarse una decisión sexual o de pareja"
```

## Reglas de presentación y privacidad

La home solo puede mostrar la fase estimada válida, el día de ciclo calculado localmente, la ventana, la actualización y las cuatro tarjetas de orientación. No muestra franja de edad, experiencias de salud registradas, observaciones, asociaciones locales ni inferencias personales.[3]

La edad no se recopila como requisito de acceso ni se envía a un servicio. Si en el futuro se propusiera personalizar contenido mediante edad autodeclarada localmente, esa capacidad exigiría una decisión nueva sobre minimización, consentimiento, borrado, evaluación de violencia tecnológica y revisión clínica. Esta propuesta no habilita tal capacidad.[1] [2]

## Conceptos prohibidos

La lista de términos bloqueados conserva, entre otros, los siguientes identificadores:

```yaml
prohibited_concepts:
  - sexual_consent
  - sexual_desire
  - sexual_boundaries
  - sexual_availability
  - sexual_activity
  - diagnosis
  - medical_classification
  - behavioral_prediction
  - emotional_state_as_fact
  - coercive_surveillance
  - free_text_notes
  - conversation_content
  - location_data
  - account_identity
  - remote_cycle_data
  - remote_variable_data
  - remote_inference_data
```

## Próxima fase: investigación y revisión

Cuando se solicite expresamente, la investigación deberá completar primero las definiciones del glosario de fases y de cada franja de edad. Después deberá revisar las experiencias de salud y la variabilidad del ciclo. Cada afirmación deberá asociarse a una fuente verificable, población de referencia, nivel de evidencia, fecha de revisión, redacción cualificada y límite clínico. Ningún resultado de esta fase podrá activar registro, calendario, aprendizaje personalizado, sincronización, telemetría o salida remota de datos.

## Referencias

[1]: ./CONSONA_LINEA_BASE_Y_BACKLOG.md "Consona — Línea base de desarrollo y backlog unificado"
[2]: ./CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md "Consona — ADR-002: Aprendizaje local sobre variabilidad premenstrual"
[3]: ./CONSONA_ESPECIFICACION_PANEL_PRINCIPAL.md "Consona — Especificación UX del panel principal"
