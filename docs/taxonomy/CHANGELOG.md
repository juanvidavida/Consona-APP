# Historial del contrato taxonómico local de Consona

## [1.0.0] — Candidato mínimo de revisión

- Se adopta una v1 mínima de tres categorías candidatas de experiencia física: dolor o calambres, hinchazón percibida y cansancio percibido.
- Se limita la fuente válida a `self_report`; la observación de pareja queda fuera del esquema v1 y requerirá una versión posterior, revisión específica y el cumplimiento de P2, P5, P6, P8 y ADR-001.
- Se simplifica la escala candidata de intensidad a `mild`, `moderate` e `intense`.
- No se registran `not_present`, `not_applicable`, `not_recorded`, texto libre, valores alternativos ni categorías emocionales, cognitivas, de sueño, apetito o antojo en v1.
- Sueño, apetito, antojos, experiencias emocionales y experiencias cognitivas siguen disponibles solo como educación general poblacional; no son entradas, permisos, inferencias ni fixtures válidos de esta versión.
- Se mantienen un esquema con `additionalProperties: false`, fixtures sintéticos válidos e inválidos y una validación local sin dependencias externas.
- Se mantiene la lista explícita de campos, fuentes, conceptos y salidas prohibidos.
- No se añade captura, almacenamiento, fechas, cálculo de fase, red, cuenta, sincronización, analítica, telemetría ni datos personales reales.

> Esta versión no está aprobada. El cambio de alcance exige una nueva revisión de producto, privacidad, contenido e ingeniería, junto con trazabilidad y pruebas de regresión.
