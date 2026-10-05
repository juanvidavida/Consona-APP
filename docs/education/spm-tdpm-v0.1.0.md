# Consona — Pantalla educativa «Variabilidad premenstrual: SPM y TDPM» v0.1.0

**Estado:** Borrador para revisión de producto. **No enviado a revisión clínica.**
**Incidencia:** JUA-19 (CON-027). Su versión aprobada será el artefacto que revise JUA-16 (ADR-002 P7).
**Idioma:** español (España). Cualquier traducción posterior (CON-025) debe conservar los límites clínicos y de privacidad de este documento.
**No habilita:** registros, persistencia, observaciones de pareja, inferencias, aprendizaje, analítica, telemetría ni piloto.

> Este documento fija el texto exacto que se mostrará. Cualquier cambio de redacción, orden o mensaje de derivación exige una nueva versión y, una vez iniciada JUA-16, una nueva revisión clínica de lo modificado.

## 1. Reglas de la pantalla

| ID | Regla |
|---|---|
| R-01 | El contenido es estático e idéntico para todas las personas. No depende de fechas, fase estimada, registros, consentimiento, pareja ni ningún dato local o remoto. |
| R-02 | La pantalla no pide, muestra ni conserva datos. No hay formularios, campos de texto, casillas, valoraciones ni botones de «me pasa a mí». |
| R-03 | Abrir la pantalla, desplazarse o pulsar un número de ayuda no genera eventos, analítica, telemetría, registros de error ni comunicación con ningún servidor. |
| R-04 | El mensaje de ayuda urgente (DER-02) aparece en la primera vista de la pantalla, sin necesidad de desplazarse ni desplegar nada, con contraste suficiente y sin animaciones, sonidos ni ventanas emergentes. |
| R-05 | Los números de teléfono se muestran como texto legible. Un enlace `tel:` junto al número es opcional y no sustituye al texto. |
| R-06 | La pantalla no muestra estados personales («sin patrón», «patrón posible» u otros). Ver la decisión abierta D-01. |
| R-07 | No se añaden iconos, colores ni ilustraciones que asocien una fase o un síntoma con riesgo, gravedad, sexualidad o disponibilidad. |

## 2. Texto de la pantalla

Cada bloque lleva un identificador estable para la revisión y la trazabilidad (sección 4). Los identificadores no se muestran en la interfaz.

### SPM-00 · Título

**Variabilidad premenstrual: SPM y TDPM**

### SPM-01 · Nota fija

> Consona ofrece educación general. No diagnostica ni sustituye la atención profesional.

### SPM-02 · Introducción

En los días previos a la menstruación, algunas personas notan cambios en el cuerpo o en el ánimo. Otras no notan ninguno, o los viven de otra manera. Los cambios también pueden variar de un ciclo a otro.

No todas las personas experimentan los mismos cambios.

### DER-02 · Ayuda urgente (ver sección 3)

### SPM-03 · Tres ideas distintas

**Variabilidad premenstrual**
Cambios que algunas personas notan antes de la menstruación: por ejemplo, dolor, hinchazón o cansancio; irritabilidad, tristeza o tensión; o cambios en el sueño o el apetito. Pueden ser leves, ir y venir, o no aparecer. Por sí solos no indican una condición clínica.

**SPM (síndrome premenstrual)**
Es un término clínico. Se usa cuando los cambios se repiten ciclo tras ciclo antes de la menstruación, mejoran cuando esta empieza o poco después, y afectan de forma importante a la vida diaria. Solo un profesional sanitario puede valorarlo.

**TDPM (trastorno disfórico premenstrual)**
Es un término clínico para una forma menos frecuente y más intensa, en la que predominan los cambios emocionales y que afecta de forma importante al trabajo, los estudios o las relaciones. Para valorarlo, los profesionales suelen pedir un registro diario durante al menos dos ciclos.

En inglés se usan las siglas PMS y PMDD. Consona no asigna estos términos, no muestra criterios clínicos y no convierte ningún dato en una clasificación.

### SPM-04 · Lo que una fecha no puede decir

Una fase del ciclo estimada a partir de fechas es aproximada. No confirma síntomas, su causa, un diagnóstico, la fertilidad ni cómo se siente una persona.

La investigación tampoco permite predecir el ánimo, la concentración o el comportamiento de alguien a partir de su fase.

### SPM-05 · Sobre las cifras

Las cifras publicadas sobre SPM y TDPM cambian mucho según el grupo estudiado y el método utilizado. Por ejemplo, un metaanálisis de 2024 estimó que el TDPM confirmado con registro diario aparecía en el 3,2 % de las personas estudiadas, frente al 7,7 % cuando el diagnóstico era provisional.

Una media de grupo no dice nada sobre una persona concreta.

### SPM-06 · Muchas causas posibles

Los cambios de ánimo, sueño, energía o concentración pueden tener muchas causas, también ajenas al ciclo. Por eso no conviene atribuirlos al ciclo por defecto.

### SPM-07 · Si acompañas a alguien

Si alguien cercano vive estos cambios, esa persona es quien puede decir cómo está y qué necesita. Ni una fecha ni esta pantalla pueden saberlo.

Pregunta, escucha y respeta su respuesta, también si prefiere no hablar de ello.

### DER-03 · Si te preocupa alguien cercano (ver sección 3)

### DER-01 · Cuándo hablar con un profesional (ver sección 3)

### SPM-08 · Fuentes

Esta información se basa en NICE (Reino Unido, revisión de 2024), el Colegio Americano de Obstetras y Ginecólogos (ACOG, 2023 y 2025), el NHS (2024) y un metaanálisis publicado en 2024. Las referencias completas están disponibles en «Fuentes».

## 3. Mensajes de derivación

Los mensajes son estáticos y se muestran siempre, a todas las personas, en la posición indicada. No se activan por fechas, fase, registros ni palabras introducidas, porque la pantalla no recoge ninguna.

### DER-01 · Cuándo hablar con un profesional

**Posición:** después de SPM-07 y DER-03.

> **Cuándo hablar con un profesional**
> Si los cambios te preocupan, se repiten, son intensos o dificultan tu día a día —trabajo, estudios, relaciones o descanso—, un profesional sanitario puede valorarlos en contexto. Puedes empezar por tu centro de salud.

### DER-02 · Ayuda urgente

**Posición:** inmediatamente después de SPM-02, visible en la primera vista (R-04).

> **Si necesitas ayuda ahora**
> Si tienes pensamientos de hacerte daño o de suicidio, o no estás a salvo, busca ayuda urgente ahora. No esperes a otro momento del ciclo.
> **En España:** 112 (emergencias) · 024 (línea de atención a la conducta suicida, gratuita, 24 horas).

### DER-03 · Si te preocupa alguien cercano

**Posición:** inmediatamente después de SPM-07.

> Si crees que alguien cercano está en peligro inmediato, llama al 112. Si te ha hablado de pensamientos de suicidio, el 024 también atiende a familiares y personas allegadas.

## 4. Trazabilidad

| Bloque | Afirmación | Fuente | Base auditada en JUA-10 |
|---|---|---|---|
| SPM-01 | Nota de límite educativo. | [5] [7] | `audit-07` §4 (nota fija); se elimina «y un registro personal opcional» porque la pantalla no ofrece registro. |
| SPM-02 | Variabilidad entre personas y entre ciclos. | [1] [3] [5] | `audit-07` §4.2; `12-health-emotional-cognitive` EC-02. |
| SPM-03 · variabilidad | Ejemplos de cambios físicos y emocionales no diagnósticos. | [3] [5] | `audit-07` §3; ejemplos limitados a categorías de la taxonomía y de ADR-002 §3, sin interés sexual ni libido. |
| SPM-03 · SPM | Patrón cíclico, mejora con la menstruación e impacto en la vida diaria. | [1] [2] [5] | `audit-07` §3; ADR-002 §1. |
| SPM-03 · TDPM | Forma menos frecuente e intensa, predominio emocional, registro diario de al menos dos ciclos. | [3] [4] [6] | ADR-002 §1; `12-health-emotional-cognitive` EC-06. |
| SPM-03 · cierre | Consona no asigna términos clínicos. | — | `audit-07` §4.5. |
| SPM-04 | La fase estimada no confirma síntomas ni estados; no predice ánimo ni cognición. | [8] [9] | `12-health-emotional-cognitive` EC-01, EC-02, EC-05. |
| SPM-05 | Prevalencia confirmada frente a provisional. | [6] | ADR-002 §1. **Fuente no auditada en JUA-10** (ver D-02). |
| SPM-06 | Solapamiento con otras causas, sin lista de autoevaluación. | [2] [5] | `audit-07` §3; `12-health-emotional-cognitive` EC-07. |
| SPM-07 | Conversación directa y autonomía; no asumir estados internos. | — | Requisito de producto de JUA-19 y ADR-002 §5. |
| DER-01 | Consulta ante preocupación, repetición, intensidad o afectación diaria. | [5] [7] | `12-health-emotional-cognitive` EC-07, EC-08; `audit-07` §4.4. |
| DER-02 | Ayuda urgente ante ideación suicida, autolesión o peligro. | [7] [10] | `12-health-emotional-cognitive` EC-08 y mensaje de urgencia. Recursos de España: ver D-03. |
| DER-03 | Ayuda urgente para terceros. | [10] | Recursos de España: ver D-03. |

## 5. Exclusiones comprobadas

Lista para comprobar en cada versión. La v0.1.0 no contiene:

- [x] Diagnóstico, clasificación, «posible SPM/TDPM», puntuaciones, umbrales, semáforos ni probabilidades individuales.
- [x] Listas de criterios clínicos o de diagnósticos diferenciales presentadas como autoevaluación.
- [x] Tratamientos, fármacos, anticonceptivos, suplementos, dosis, dietas ni ejercicio.
- [x] Predicciones de ánimo, cognición o conducta por fase.
- [x] Deseo sexual, libido, actividad sexual, consentimiento sexual, límites ni disponibilidad, ni como dato ni como ejemplo de síntoma.
- [x] Estados o conclusiones sobre la persona usuaria o sobre su pareja.
- [x] Texto libre, formularios o cualquier captura de datos, incluida la de crisis.
- [x] Referencia al folleto RCOG 2018 ni a Green-top 48 como fuentes vigentes.

## 6. Decisiones abiertas antes de enviar a JUA-16

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | ADR-002 §2 dice que la pantalla «comenzará en el estado “No hay un patrón personal identificado”». JUA-19 exige que la pantalla sea independiente de registros e inferencias. | Omitir el estado en v0.1.0. Incorporarlo solo cuando P3–P5 permitan una vista de asociaciones, como versión nueva con revisión clínica propia. |
| D-02 | La cifra del metaanálisis de 2024 (SPM-05) procede de ADR-002 y no pasó por las auditorías de JUA-10. `audit-07` pide retirar del microcopy cifras sin fuente contemporánea y contexto. | Mantenerla, porque ilustra el límite de las prevalencias que pide JUA-19, y pedir a la persona revisora clínica que confirme la redacción. Alternativa: eliminar las cifras y dejar solo la primera y la última frase. |
| D-03 | Los recursos 112 y 024 son de España y no figuraban en la bibliografía de JUA-10. | Verificar en fuentes oficiales (Ministerio de Sanidad para el 024) antes de enviar a JUA-16, y decidir cómo se mostrarán en otros países e idiomas (CON-025). |
| D-04 | «Peligro» puede incluir violencia de pareja, riesgo relevante para Consona (ADR-001, P6). | Decidir si DER-02 incluye el 016 (atención a víctimas de violencia de género, España) o si se aborda en el trabajo de P6. |

## 7. Historial

### [0.1.0] — Borrador inicial

- Primera redacción completa de la pantalla, nota fija y tres mensajes de derivación.
- Trazabilidad a las fuentes auditadas en JUA-10 y a ADR-002.
- Cuatro decisiones abiertas para producto antes de la revisión clínica.

## Referencias

[1]: https://cks.nice.org.uk/topics/premenstrual-syndrome/ "Premenstrual syndrome — NICE Clinical Knowledge Summaries (revisado 09-2024)"

[2]: https://cks.nice.org.uk/topics/premenstrual-syndrome/diagnosis/diagnosis-of-premenstrual-syndrome/ "Premenstrual syndrome: How should I diagnose premenstrual syndrome? — NICE CKS (revisado 09-2024)"

[3]: https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/12/management-of-premenstrual-disorders "Management of Premenstrual Disorders, Clinical Practice Guideline No. 7 — ACOG (12-2023)"

[4]: https://www.acog.org/womens-health/experts-and-stories/the-latest/what-i-wish-everyone-knew-about-premenstrual-dysphoric-disorder "What I Wish Everyone Knew About Premenstrual Dysphoric Disorder — ACOG"

[5]: https://www.acog.org/womens-health/faqs/premenstrual-syndrome "Premenstrual Syndrome (PMS), FAQ057 — ACOG (revisado 11-2025)"

[6]: https://pubmed.ncbi.nlm.nih.gov/38199397/ "The prevalence of premenstrual dysphoric disorder: Systematic review and meta-analysis (2024)"

[7]: https://www.nhs.uk/conditions/pre-menstrual-syndrome/ "PMS (premenstrual syndrome) — NHS (revisado 18-06-2024)"

[8]: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576 "Menstrual cycle effects on cognitive performance: A meta-analysis (2025)"

[9]: https://www.sciencedirect.com/science/article/pii/S1550857912001349 "Mood and the Menstrual Cycle: A Review of Prospective Data Studies (2012)"

[10]: https://www.sanidad.gob.es/linea024/ "Línea 024 de atención a la conducta suicida — Ministerio de Sanidad (pendiente de verificación, D-03)"
