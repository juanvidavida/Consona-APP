# Consona

Consona es una aplicación educativa orientada a conversación, empatía y comprensión del ciclo menstrual. El proyecto estudia un modelo personalizado **solo bajo las condiciones acumulativas de privacidad, control local y seguridad** definidas en sus ADR.

> **Límite permanente:** datos de ciclo, variables consentidas e inferencias asociadas permanecen exclusivamente en el dispositivo que los conserva. La única excepción potencial es un servicio mínimo de consentimiento y revocación con referencias opacas; nunca recibe datos de ciclo, fases, síntomas, variables, contenido derivado, cuentas, analítica o telemetría.

## Estado de desarrollo

Este repositorio contiene una base React + Vite/PWA y documentación de diseño. La integración de una especificación en `main` **no** habilita captura, persistencia, sincronización, un backend de salud, datos reales ni piloto.

Para estados vivos, asignaciones y dependencias operativas, consultar [Linear — Consona App](https://linear.app/juan-vidaechea/team/JUA/all).

## Documentación

| Área | Documento | Finalidad |
|---|---|---|
| Gobernanza | [Índice de planificación](./docs/governance/README.md) | Explica fuentes de autoridad, documentos mantenidos y cortes históricos. |
| Ruta crítica | [Ruta mantenida del modelo E](./docs/governance/ruta-critica-modelo-e.md) | Define puertas de viabilidad, arquitectura, implementación, verificación y piloto. |
| Seguridad | [Índice de seguridad](./docs/security/README.md) | Reúne el protocolo de CON-007 y el contrato técnico de CON-008. |
| Taxonomía | [Contrato taxonómico local v1](./docs/taxonomy/consona-local-taxonomy-v1.0.0.md) | Define categorías locales cerradas, prohibiciones y validación sintética. |

## Desarrollo local

```bash
npm ci
npm run lint
npm run build
npm run validate:taxonomy
npm run dev
```

No incorporar SDK de analítica, telemetría, píxeles, reporte remoto de errores, CDN o recursos externos sin una decisión explícita que sea compatible con ADR-001 y ADR-002.

## Referencias de decisión

- [`CONSONA_LINEA_BASE_Y_BACKLOG.md`](./info/Consona_entrega_completa/archivos_compartidos/CONSONA_LINEA_BASE_Y_BACKLOG.md)
- [`CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md`](./info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md)
- [`CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md`](./info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md)
