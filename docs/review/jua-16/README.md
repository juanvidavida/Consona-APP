# Consona — Paquete de revisión clínica JUA-16 (ADR-002 P7)

**Estado del paquete:** **listo para enviar.** Las decisiones de producto previas están cerradas (sección 6).
**Fecha de preparación:** 7 de octubre de 2026. **Ampliado y actualizado:** 10 de noviembre de 2026.
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
| A1 | Pantalla «Variabilidad premenstrual: SPM y TDPM» y mensajes de derivación DER-01 y DER-02 | 0.5.0 | [`spm-tdpm-v0.5.0.md`](../../education/spm-tdpm-v0.5.0.md) | `6ff9dfa425b84862c5c40cf39d03cac53d47eae24e38f73df05b324d05b31133` |
| A2 | Tarjetas de la pantalla de inicio en fase lútea | 0.2.0 | [`home-cards-luteal-v0.2.0.md`](../../education/home-cards-luteal-v0.2.0.md) | `f6f8b2b5675e46ccd6c7ba1bf04549536d06b6e5e3adef8150e2e51671a67353` |
| A3 | Tarjetas de la pantalla de inicio en la menstruación | 0.2.0 | [`home-cards-menstruation-v0.2.0.md`](../../education/home-cards-menstruation-v0.2.0.md) | `56590618b024b5b74622127f640d951ce628a1b1f10362fe48c41a0bc3834248` |
| A4 | Tarjetas de la pantalla de inicio en la fase folicular | 0.2.0 | [`home-cards-follicular-v0.2.0.md`](../../education/home-cards-follicular-v0.2.0.md) | `c55eceec645a5a0eebee34968b5cea2da1203cb9c017830d9e2eddb1f3360c99` |
| A5 | Tarjetas de la pantalla de inicio en la ventana ovulatoria estimada | 0.2.0 | [`home-cards-ovulatory-v0.2.0.md`](../../education/home-cards-ovulatory-v0.2.0.md) | `97dc2d92ba6c4ec952d36a540113889eb02aeb9a94c392ae1da449f88bad4a8f` |
| A6 | Pantalla «La menstruación» de «Comprender» | 0.1.0 | [`menstruacion-v0.1.0.md`](../../education/menstruacion-v0.1.0.md) | `315c3f0444017a36cee111a2bcd4ce10ac63240d40e875145b50d05fe0b2dd77` |
| A7 | Pantalla «La fase folicular» de «Comprender» | 0.1.0 | [`folicular-v0.1.0.md`](../../education/folicular-v0.1.0.md) | `528f4ca746082c82d11a14974f6289dbfcbfc02bb1335c970c6c9d5d695a834b` |
| A8 | Pantalla «La ventana ovulatoria» de «Comprender» | 0.1.0 | [`ovulatoria-v0.1.0.md`](../../education/ovulatoria-v0.1.0.md) | `27516d6ef8d0b1cfbab84d9674a40f9af3fb536f7a0cda8ffc86596e14b8e198` |
| A9 | Pantalla «La fase lútea» de «Comprender» | 0.1.0 | [`lutea-v0.1.0.md`](../../education/lutea-v0.1.0.md) | `0fc5b3acdf4178ceadb10d90e18d43be77d26019e28b8cf1dd803654b8220f69` |

Comprobación de integridad, desde la raíz del repositorio:

```sh
shasum -a 256 docs/education/spm-tdpm-v0.5.0.md docs/education/home-cards-*-v0.2.0.md docs/education/{menstruacion,folicular,ovulatoria,lutea}-v0.1.0.md
```

Cualquier cambio en estos archivos, incluidos sus metadatos, altera el hash: se crea una versión nueva si cambia el texto mostrado y se actualizan esta tabla y el formulario antes del envío.

**Ayuda de lectura, no revisada por separado:** [`home-cards-review-pack-v0.3.0.md`](../../education/home-cards-review-pack-v0.3.0.md) reúne en un solo documento las tarjetas de las cuatro fases (A2 a A5) y sus reglas comunes. Si hay diferencias, mandan los documentos de cada fase.

### Qué leer en cada artefacto

- **Pantalla SPM/TDPM (A1):** el texto que se muestra está en la sección 4 (bloques SPM-00 a SPM-08) y en la sección 5 (DER-01 y DER-02, con los recursos 112, 024 y 016). Las secciones 1 a 3 explican público, ubicación y reglas; la 6, las fuentes de cada bloque.
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
| SPM/TDPM D-06; tarjetas de fase lútea D-04 | El estereotipo de la mujer «premenstrual» se nombra y se desmiente en varias piezas: SPM-05, SPM-07, LUT-06, LUT-07 y la tarjeta QNA de la fase lútea. | Versión 0.5.0 de la pantalla y 0.2.0 de las tarjetas. |
| Tarjetas, índice D-04 (05-11-2026) | Las tarjetas de la menstruación, la fase folicular y la ventana ovulatoria entran en esta revisión. | Artefactos A3 a A5. |
| Pantallas de «Comprender» (JUA-36) | Las cuatro pantallas de fase entran en esta revisión. | Artefactos A6 a A9. |

Las siguientes cuestiones **no** son pendientes de producto, sino preguntas expresas a la persona revisora (formulario, sección 4):

- SPM/TDPM D-02: la cifra de prevalencia de TDPM.
- Tarjetas de fase lútea D-01, D-02 y D-04: la frase sobre cambios al final de la fase, la mención de la progesterona y el estereotipo en la pantalla de inicio.
- Las decisiones que los documentos A3 a A9 trasladan a la revisión clínica.

## 7. Tratamiento de los datos de la persona revisora

El formulario pide nombre, profesión, número de colegiación y especialidad para acreditar la revisión, como exige JUA-16.

**El repositorio de Consona es público.** Por eso, el formulario firmado con datos personales **no se sube al repositorio**: el original se guarda fuera de él, y aquí solo se deja una referencia (fecha, profesión, especialidad y decisión), salvo que la persona revisora consienta por escrito que sus datos se publiquen.
