# Consona — Campos, fuentes y conceptos prohibidos en la taxonomía local v1.0.0

**Estado:** Norma candidata de P1; pendiente de revisión humana.
**Aplicación:** Debe reflejarse tanto en documentación como en el esquema técnico y las pruebas negativas.

> Una categoría no es admisible solo porque pudiera ser útil. Consona minimiza datos y no convierte una fase estimada, una relación de pareja o una observación en un perfil de salud, conducta o intimidad.

## 1. Campos prohibidos permanentemente

| Grupo | Campos, claves o equivalentes que deben rechazarse | Motivo |
|---|---|---|
| Texto libre | `free_text`, `note`, `comment`, `message`, `description`, `other`, `context`, `journal`, `reason`. | Impiden una taxonomía cerrada y pueden incorporar datos sensibles no previstos. |
| Identidad y contacto | `name`, `email`, `phone`, `account_id`, `contact`, `address`, `location`, `device_id`, `advertising_id`, `fingerprint`. | No son necesarios para una categoría local y contravienen minimización y ADR-001. |
| Archivos y conversaciones | `image`, `audio`, `video`, `document`, `attachment`, `conversation`, `chat`, `screenshot`, `scraped_message`. | Pueden contener contenido sensible, terceros o información fuera de alcance. |
| Intimidad y sexualidad | `sexual_activity`, `sexual_desire`, `sexual_consent`, `sexual_boundaries`, `availability`, `libido`, `sexual_interest`. | Consona nunca registra, infiere ni representa deseo, actividad, consentimiento, límites o disponibilidad. |
| Clínica y tratamiento | `diagnosis`, `treatment`, `medication`, `dose`, `clinical_score`, `risk_score`, `pms`, `pmdd`, `endometriosis`, `anemia`, `fertility`. | La aplicación no diagnostica, trata, puntúa riesgo ni clasifica condiciones. |
| Vigilancia y conducta | `partner_behavior_inference`, `mood_prediction`, `behavior_prediction`, `relationship_status`, `compliance`, `surveillance`. | No se observan ni deducen estados internos, conducta, voluntad o relación. |
| Red y cuentas | `remote_profile`, `sync_target`, `webhook`, `endpoint`, `api_key`, `analytics_id`, `telemetry_event`, `backup_reference`. | El contrato no habilita transporte, cuentas, analítica, sincronización ni copia de seguridad. |

## 2. Fuentes prohibidas

La única fuente válida en la v1 mínima es `self_report`. `partner_observation` queda fuera del esquema y debe rechazarse junto con las siguientes fuentes o equivalentes:

```text
partner_observation
inferred_from_phase
inferred_from_behavior
inferred_from_calendar
inferred_from_message
scraped_message
remote_profile
partner_assertion_as_fact
third_party_report
algorithmic_guess
```

La observación de pareja no queda aprobada ni habilitada en v1. Solo podría evaluarse en una versión posterior si P2, P5, P6, P8 y ADR-001 están satisfechos, con consentimiento directo y revocable por categoría y fuente. Aun entonces, debe describirse como “lo que observé”, mantener procedencia separada y no sobrescribir un autoinforme.

## 3. Conceptos prohibidos como salidas

El contrato no puede alimentar etiquetas ni salidas como:

- “tiene SPM”, “tiene TDPM”, “probablemente tiene…” o equivalentes;
- “estará irritable”, “dormirá peor”, “tendrá antojos” o predicciones de fase;
- ovulación confirmada, fertilidad, embarazo, “días seguros” o anticoncepción;
- causa de dolor, ánimo, sueño, apetito, rendimiento o conducta;
- riesgo clínico, semáforo, puntuación, triaje, tratamiento, dosis o recomendación individual;
- deseo, consentimiento sexual, límites, disponibilidad o disposición a interactuar.

## 4. Pruebas negativas mínimas

Los fixtures inválidos deben demostrar que se rechazan una categoría desconocida, una intensidad no admitida, una fuente no permitida, una clave de texto libre y una clave de intimidad. Las pruebas son sintéticas y no contienen personas, fechas reales ni datos de ciclo.

## 5. Revisión requerida

Producto, privacidad y contenido deben comprobar que esta lista sigue siendo compatible con ADR-001, ADR-002, P2, P5, P6 y P8 antes de aprobar una versión posterior.

## References

[1]: ../research/JUA-10-investigacion-taxonomia.md "Síntesis de investigación JUA-10: taxonomía educativa de Consona"
[2]: ../research/JUA-10-cierre-auditorias.md "Cierre de auditorías bibliográficas JUA-10"
