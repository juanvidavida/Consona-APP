# Consona — Paquete de revisión clínica JUA-16 (ADR-002 P7)

**Estado del paquete:** **listo para enviar.** Las decisiones de producto previas están cerradas (sección 6).
**Fecha de preparación:** 7 de octubre de 2026. **Ampliado y actualizado:** 10 de noviembre de 2026; versiones nuevas el 11 de noviembre de 2026.
**Responsable del producto:** Juan Vidaechea.

## 1. Qué es Consona

Consona es una aplicación educativa dirigida a la persona que acompaña: la pareja de una persona que menstrúa. Su objetivo es que la pareja entienda mejor el ciclo menstrual para actuar en consonancia, preguntando en lugar de suponer.

La aplicación muestra una fase del ciclo **estimada a partir de fechas** y contenido educativo general. No diagnostica, no clasifica, no recomienda tratamientos y no infiere cómo se siente ni qué desea otra persona. Los textos de este paquete no recogen datos: son contenido estático, igual para todas las personas.

## 2. Qué se pide

Una revisión profesional del contenido y de los mensajes de derivación de los artefactos de la sección 3, y una decisión explícita sobre si pueden publicarse tal como están, con cambios o no.

La revisión debe cubrir, como mínimo:

1. La exactitud y prudencia de la información sobre el ciclo, la variabilidad premenstrual, el SPM y el TDPM.
2. Que el lenguaje no sea diagnóstico, determinista ni estigmatizante, y que ninguna fase o patrón se presente como conclusión clínica.
3. Los mensajes de derivación ante síntomas intensos, deterioro de las actividades diarias, riesgo inmediato de autolesión o peligro, y su orientación hacia atención sanitaria o urgente local.
4. Que los mensajes sean visibles y no invasivos.
5. Que no aparezcan deseo sexual, consentimiento sexual, límites, disponibilidad ni conducta de pareja como dato o conclusión.

## 3. Artefactos sometidos a revisión

Se revisa **exactamente** la versión identificada aquí. Cualquier cambio posterior genera una versión nueva que requiere revisión de lo modificado.

| # | Artefacto | Versión | Archivo | SHA-256 |
|---|---|---|---|---|
| A1 | Pantalla «Antes de la regla» (síndrome premenstrual y trastorno disfórico premenstrual) y mensajes de derivación DER-01 y DER-02 | 0.7.0 | [`spm-tdpm-v0.7.0.md`](../../education/spm-tdpm-v0.7.0.md) | `1e2b33b28dbd15825f492d7e779ee3f69742ffea186ae1aa0f1df409f17a5e98` |
| A2 | Tarjetas de la pantalla de inicio en fase lútea | 0.3.0 | [`home-cards-luteal-v0.3.0.md`](../../education/home-cards-luteal-v0.3.0.md) | `0b6ff69025ebb6c47e1b369c527b688e7627266de1c48422d30d24839dd9733c` |
| A3 | Tarjetas de la pantalla de inicio en la menstruación | 0.3.0 | [`home-cards-menstruation-v0.3.0.md`](../../education/home-cards-menstruation-v0.3.0.md) | `b50ed79e0db8190f878b12c4b2e96f031e6f5daf4ee37fb944f7274e65006325` |
| A4 | Tarjetas de la pantalla de inicio en la fase folicular | 0.3.0 | [`home-cards-follicular-v0.3.0.md`](../../education/home-cards-follicular-v0.3.0.md) | `66466297e635650095d5fa948bac6780f8f522071f778d36e7b32689f6930fd7` |
| A5 | Tarjetas de la pantalla de inicio en la ventana ovulatoria estimada | 0.3.0 | [`home-cards-ovulatory-v0.3.0.md`](../../education/home-cards-ovulatory-v0.3.0.md) | `af846f080772b2bc80d0a49c86ac7bd7c1040fc762479dbcfdd3f94a44f4bb32` |
| A6 | Pantalla «La menstruación» de «Comprender» | 0.2.0 | [`menstruacion-v0.2.0.md`](../../education/menstruacion-v0.2.0.md) | `400d18a4f583628ea9932ff1fb8f13bd08fac57d1e3b0c8c5f1ba382e4c5c601` |
| A7 | Pantalla «La fase folicular» de «Comprender» | 0.2.0 | [`folicular-v0.2.0.md`](../../education/folicular-v0.2.0.md) | `4919e84173568d614c6449fd4ffaaa9662a68dc41b915d69dbb5806d08ee1953` |
| A8 | Pantalla «La ventana ovulatoria» de «Comprender» | 0.2.0 | [`ovulatoria-v0.2.0.md`](../../education/ovulatoria-v0.2.0.md) | `3b7dcf8240fc63f75b2b0bdfcd447a791ef9c2bcd842a6da0bf1f33791bb248b` |
| A9 | Pantalla «La fase lútea» de «Comprender» | 0.3.0 | [`lutea-v0.3.0.md`](../../education/lutea-v0.3.0.md) | `443b6f8b83e675834067357fa0226ad909334e3ed279d03fc196fa97913a0476` |

Comprobación de integridad, desde la raíz del repositorio:

```sh
shasum -a 256 docs/education/spm-tdpm-v0.7.0.md docs/education/home-cards-{luteal,menstruation,follicular,ovulatory}-v0.3.0.md docs/education/{menstruacion,folicular,ovulatoria}-v0.2.0.md docs/education/lutea-v0.3.0.md
```

Cualquier cambio en estos archivos, incluidos sus metadatos, altera el hash: se crea una versión nueva si cambia el texto mostrado y se actualizan esta tabla y el formulario antes del envío.

**Ayuda de lectura, no revisada por separado:** [`home-cards-review-pack-v0.4.0.md`](../../education/home-cards-review-pack-v0.4.0.md) reúne en un solo documento las tarjetas de las cuatro fases (A2 a A5) y sus reglas comunes. Si hay diferencias, mandan los documentos de cada fase.

### Qué leer en cada artefacto

- **Pantalla «Antes de la regla» (A1):** el texto que se muestra está en la sección 4 (bloques SPM-00 a SPM-08) y en la sección 5 (DER-01 y DER-02, con los recursos 112, 024 y 016). Las secciones 1 a 3 explican público, ubicación y reglas; la 6, las fuentes de cada bloque.
- **Tarjetas (A2 a A5):** el texto está en la sección 2 de cada documento. Las reglas comunes H-01 a H-08 están en [`home-cards-index.md`](../../education/home-cards-index.md). Las tarjetas de la fase lútea son lo que la pareja lee en la pantalla de inicio durante los días previos a la menstruación y deben ser coherentes con la pantalla SPM/TDPM. **Ninguna tarjeta queda cubierta implícitamente** por revisar una pantalla: el formulario las evalúa por separado.
- **Pantallas de «Comprender» (A6 a A9):** el texto está en la sección «Texto de la pantalla» y en los mensajes de derivación de cada documento. Cada una se basa en la investigación de su fase en [`docs/research/fases/`](../../research/fases/).

## 4. Qué queda fuera de esta revisión

- Registros de síntomas, inferencias personalizadas, aprendizaje local y el piloto (siguen bloqueados por ADR-001 y ADR-002).
- La rueda del ciclo y el motor de estimación (JUA-25, JUA-27).
- Las traducciones (CON-025).
- La revisión jurídica (JUA-22) y la de seguridad frente al control coercitivo (JUA-13).

## 5. Cómo responder

Rellenar el [formulario de revisión](./FORMULARIO_REVISION.md). Cada bloque se marca como **Aprobado**, **Aprobado con cambios** o **No aprobado**, con comentario cuando no se aprueba sin más. La sección final recoge la aprobación explícita.

Después de la revisión, el equipo de producto registra en el mismo formulario qué cambios aplicó y cuáles justificó no aplicar. Si hay cambios en el texto, se genera una versión nueva y se pide confirmación de lo modificado.

## 6. Decisiones de producto cerradas antes del envío

| Origen | Decisión | Efecto en el paquete |
|---|---|---|
| SPM/TDPM D-01 | Se omite el estado «No hay un patrón personal identificado» mientras la pantalla no use registros. | Ninguno en el texto. |
| SPM/TDPM D-02 | El metaanálisis de prevalencia del TDPM de 2024 se audita en JUA-36 (LS-21, resumen). SPM-06 da la cifra de población general con diagnóstico confirmado (1,6 %). | Versión 0.5.0 de la pantalla. |
| SPM/TDPM D-04 | DER-02 incluye el 016 (violencia contra las mujeres), verificado en fuentes oficiales el 07-10-2026 y de nuevo el 10-11-2026. | Ninguno nuevo. |
| SPM/TDPM D-06; tarjetas de fase lútea D-04 | El estereotipo de la mujer «premenstrual» se nombra y se desmiente en varias piezas: SPM-05, LUT-06, LUT-07 y la tarjeta «Qué no asumir» de la fase lútea. | Versión 0.5.0 de la pantalla y 0.2.0 de las tarjetas. |
| Tarjetas, índice D-04 (05-11-2026) | Las tarjetas de la menstruación, la fase folicular y la ventana ovulatoria entran en esta revisión. | Artefactos A3 a A5. |
| Pantallas de «Comprender» (JUA-36) | Las cuatro pantallas de fase entran en esta revisión. | Artefactos A6 a A9. |
| Comentarios de producto del 11-11-2026 | «Mujeres» en lugar de «personas» en las afirmaciones generales; título «Antes de la regla» y términos completos en lugar de siglas; «evidencia científica»; la pareja puede ayudar escuchando y preguntando; duración aproximada de las fases folicular y lútea en las tarjetas; subpantalla «Fuentes» en el mapa de pantallas; tres tarjetas en la home, con «Cómo acompañar» en lugar de «Qué puedes preguntarle» y «Qué te toca a ti»; bloque «Lo que ves en Consona» en las cuatro pantallas de fase. | Pantalla v0.6.0, tarjetas v0.3.0, pantallas de «Comprender» v0.2.0 y especificación del panel v1.1.2. |
| Consulta de producto del 11-11-2026 (SPM/TDPM D-10) | SPM-05 añade «son las hormonas» como frase que resta valor; SPM-07, preguntar si prefiere compañía, espacio o ayuda; el ensayo de Ussher y Perz 2017 se audita en JUA-36 (LS-22) y solo respalda que el apoyo de la pareja importa. | Pantalla v0.7.0 y «La fase lútea» v0.3.0 (LUT-07 con la misma redacción que SPM-07). |

Las siguientes cuestiones **no** son pendientes de producto, sino preguntas expresas a la persona revisora (formulario, sección 4):

- SPM/TDPM D-02: la cifra de prevalencia de TDPM.
- Tarjetas de fase lútea D-01, D-02 y D-04: la frase sobre cambios al final de la fase, la mención de la progesterona y el estereotipo en la pantalla de inicio.
- Las decisiones que los documentos A3 a A9 trasladan a la revisión clínica.

## 7. Tratamiento de los datos de la persona revisora

El formulario pide nombre, profesión, número de colegiación y especialidad para acreditar la revisión, como exige JUA-16.

**El repositorio de Consona es público.** Por eso, el formulario firmado con datos personales **no se sube al repositorio**: el original se guarda fuera de él, y aquí solo se deja una referencia (fecha, profesión, especialidad y decisión), salvo que la persona revisora consienta por escrito que sus datos se publiquen.
