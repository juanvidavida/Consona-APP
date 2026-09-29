# Consona — Lista de revisión humana para el contrato P1

**Versión revisada:** candidato `1.0.0`
**Regla:** ninguna casilla se considera aprobada por existir documentación o validación sintética. La aprobación requiere una decisión explícita y trazable de las personas responsables.

## Producto

- [ ] Confirmar que las once categorías candidatas son necesarias, exhaustivas para el alcance propuesto y no introducen seguimiento no autorizado.
- [ ] Confirmar que la home y “Cómo funciona” siguen usando solo educación general y no convierten categorías en afirmaciones sobre la otra persona.
- [ ] Confirmar que no se incluyen fertilidad, anticoncepción, diagnóstico, predicción de conducta, deseo, consentimiento sexual, límites ni disponibilidad.
- [ ] Confirmar que la escala `not_present` / `mild` / `moderate` / `intense` / `not_applicable` es clara y no clínica.
- [ ] Confirmar que la ausencia de una entrada se interpreta como dato ausente, no como ausencia de síntoma.

## Privacidad, consentimiento y seguridad

- [ ] Confirmar que cada unidad de la matriz es exactamente `categoría × fuente × permiso` y puede servir a P2 sin consentimiento global.
- [ ] Confirmar que `self_report` es la única fuente con alcance candidato y fixtures válidos en v1, y que `partner_observation` queda reservado, no se activa y no se interpreta como autorización futura.
- [ ] Confirmar el alcance de borrado: registro, permiso, caché, claves, cálculos e inferencias derivadas para P5.
- [ ] Confirmar que el esquema no admite propiedades adicionales, texto libre, cuentas, contacto, red, perfiles ni identificadores.
- [ ] Confirmar que la lista de campos prohibidos cubre intimidad, sexualidad, consentimiento, límites, disponibilidad y vigilancia.
- [ ] Confirmar que no se habilita ningún servicio remoto fuera de la excepción limitada de ADR-001, que esta tarea no implementa.
- [ ] Confirmar que P6/EIPD y el modelo de amenazas tratan cualquier posible observación de pareja antes de evaluar una versión posterior.

## Contenido y evidencia

- [ ] Confirmar que cada categoría candidata conserva definición, no-definición, evidencia y límite clínico adecuados.
- [ ] Confirmar que las fuentes auditadas de JUA-10 siguen vigentes y que sus límites editoriales se reflejan en cada categoría.
- [ ] Confirmar que SPM, TDPM, dismenorrea, endometriosis, anemia, menopausia y otras condiciones solo aparecen en educación general, nunca como entradas o salidas.
- [ ] Confirmar que dolor, apetito, sueño, energía, concentración y experiencias emocionales no se presentan como efectos universales de una fase.

## Ingeniería y aseguramiento

- [ ] Ejecutar `npm run validate:taxonomy` y registrar el resultado sobre fixtures sintéticos.
- [ ] Confirmar que JSON y Markdown tienen formato válido y que `git diff --check` no detecta errores de espacios.
- [ ] Ejecutar `npm run lint` y `npm run build` sin introducir dependencias nuevas.
- [ ] Inspeccionar cambios para confirmar que no se añadieron `localStorage`, IndexedDB, backend, autenticación, red, analítica, telemetría, copia de seguridad ni logs sensibles.
- [ ] Confirmar que la publicación en GitHub deja el PR #2 abierto y que JUA-10 continúa **En progreso** hasta la aprobación explícita.

## Decisión de revisión

| Rol responsable | Decisión | Fecha | Evidencia o comentario |
|---|---|---|---|
| Producto | Pendiente | — | — |
| Privacidad / seguridad | Pendiente | — | — |
| Contenido / revisión clínica | Pendiente | — | — |
| Ingeniería | Pendiente | — | — |

## References

[1]: ../research/JUA-10-investigacion-taxonomia.md "Síntesis de investigación JUA-10: taxonomía educativa de Consona"
