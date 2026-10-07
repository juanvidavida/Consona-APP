# Consona — Paquete de revisión clínica JUA-16 (ADR-002 P7)

**Estado del paquete:** preparado, **pendiente de envío**. Antes de enviarlo deben cerrarse las decisiones de producto de la sección 6.
**Fecha de preparación:** 7 de octubre de 2026.
**Responsable del producto:** Juan Vidaechea.

## 1. Qué es Consona

Consona es una aplicación educativa dirigida a la persona que acompaña: la pareja de una persona que menstrúa. Su objetivo es que la pareja entienda mejor el ciclo menstrual para actuar en consonancia, preguntando en lugar de suponer.

La aplicación muestra una fase del ciclo **estimada a partir de fechas** y contenido educativo general. No diagnostica, no clasifica, no recomienda tratamientos y no infiere cómo se siente ni qué desea otra persona. Los textos de este paquete no recogen datos: son contenido estático, igual para todas las personas.

## 2. Qué se pide

Una revisión profesional del contenido y de los mensajes de derivación de los dos artefactos de la sección 3, y una decisión explícita sobre si pueden publicarse tal como están, con cambios o no.

La revisión debe cubrir, como mínimo:

1. La exactitud y prudencia de la información sobre variabilidad premenstrual, SPM y TDPM.
2. Que el lenguaje no sea diagnóstico, determinista ni estigmatizante, y que ninguna fase o patrón se presente como conclusión clínica.
3. Los mensajes de derivación ante síntomas intensos, deterioro de las actividades diarias, riesgo inmediato de autolesión o peligro, y su orientación hacia atención sanitaria o urgente local.
4. Que los mensajes sean visibles y no invasivos.
5. Que no aparezcan deseo sexual, consentimiento sexual, límites, disponibilidad ni conducta de pareja como dato o conclusión.

## 3. Artefactos sometidos a revisión

Se revisa **exactamente** la versión identificada aquí. Cualquier cambio posterior genera una versión nueva que requiere revisión de lo modificado.

| Artefacto | Versión | Archivo | SHA-256 |
|---|---|---|---|
| Pantalla «Variabilidad premenstrual: SPM y TDPM» y mensajes de derivación DER-01 y DER-02 | 0.3.0 | [`docs/education/spm-tdpm-v0.3.0.md`](../../education/spm-tdpm-v0.3.0.md) | `14e952fcb05fd6bf3dd3a2ec1b2ea0a6baca694db5ea8fe40c5afccf76c58ad6` |
| Tarjetas de la pantalla de inicio en fase lútea (anexo) | 0.1.0 | [`docs/education/home-cards-luteal-v0.1.0.md`](../../education/home-cards-luteal-v0.1.0.md) | `24f6dc0d5066d30155db22c0b511daaabc58987967e317b971e71854e3615386` |

Comprobación de integridad:

```sh
shasum -a 256 docs/education/spm-tdpm-v0.3.0.md docs/education/home-cards-luteal-v0.1.0.md
```

Si alguna decisión de la sección 6 cambia el texto, se crea una versión nueva y se actualizan esta tabla y los hashes antes del envío.

### Qué leer en cada artefacto

- **Pantalla SPM/TDPM:** el texto que se muestra está en la sección 4 (bloques SPM-00 a SPM-08) y en la sección 5 (DER-01 y DER-02). Las secciones 1 a 3 explican público, ubicación y reglas; la 6, las fuentes de cada bloque.
- **Tarjetas de fase lútea:** el texto está en la sección 2. Se incluyen porque son lo que la pareja lee en la pantalla de inicio durante los días previos a la menstruación y deben ser coherentes con la pantalla SPM/TDPM. **No quedan cubiertas implícitamente** por revisar la pantalla: el formulario las evalúa por separado.

## 4. Qué queda fuera de esta revisión

- Registros de síntomas, inferencias personalizadas, aprendizaje local y el piloto (siguen bloqueados por ADR-001 y ADR-002).
- Las tarjetas de las demás fases (JUA-23).
- Las traducciones (CON-025).
- La revisión jurídica (JUA-22) y la de seguridad frente al control coercitivo (JUA-13).

## 5. Cómo responder

Rellenar el [formulario de revisión](./FORMULARIO_REVISION.md). Cada bloque se marca como **Aprobado**, **Aprobado con cambios** o **No aprobado**, con comentario cuando no se aprueba sin más. La sección final recoge la aprobación explícita.

Después de la revisión, el equipo de producto registra en el mismo formulario qué cambios aplicó y cuáles justificó no aplicar. Si hay cambios en el texto, se genera una versión nueva y se pide confirmación de lo modificado.

## 6. Decisiones de producto pendientes antes del envío

| Origen | Decisión | Efecto en el paquete |
|---|---|---|
| SPM/TDPM D-01 | Omitir el estado «No hay un patrón personal identificado» mientras la pantalla no use registros. | Ninguno en el texto si se confirma la propuesta. |
| SPM/TDPM D-04 | Incluir o no el 016 (atención a víctimas de violencia de género) en DER-02. | Si se incluye, cambia el texto: nueva versión y nuevos hashes. |

Las siguientes cuestiones **no** son pendientes de producto, sino preguntas expresas a la persona revisora (formulario, sección 4):

- SPM/TDPM D-02: la cifra de prevalencia de TDPM del metaanálisis de 2024.
- Tarjetas D-01: la frase sobre cambios hacia el final de la fase lútea.
- Tarjetas D-02: la mención de la progesterona.

## 7. Tratamiento de los datos de la persona revisora

El formulario pide nombre, profesión, número de colegiación y especialidad para acreditar la revisión, como exige JUA-16. Antes de añadir el formulario firmado al repositorio, debe obtenerse el consentimiento de la persona revisora para conservar esos datos en el registro del proyecto, o guardar el original fuera del repositorio y dejar aquí solo una referencia.
