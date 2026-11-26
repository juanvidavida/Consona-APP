# Consona — Expediente para la revisión jurídica del modelo E

**Para:** la persona o entidad que haga la revisión jurídica independiente.
**Fecha:** 26 de noviembre de 2026. **Estado:** expediente preparado, con los documentos pendientes de §7.
**Incidencia interna:** JUA-22 (CON-010).

> Este expediente presenta el proyecto y ordena la documentación. No contiene asesoramiento jurídico: es lo que se somete a revisión. Ningún tratamiento descrito aquí está en marcha. No hay datos reales, servidor desplegado ni piloto.

## 1. Qué es Consona

Consona es una aplicación web (PWA) en castellano y catalán para **personas adultas en pareja**. Ofrece educación sobre el ciclo menstrual a la persona que acompaña y, si la otra persona da su consentimiento, una **estimación prudente** de la fase del ciclo, calculada en el propio móvil. Su objetivo es mejorar la conversación y el acompañamiento. No es un método anticonceptivo, no diagnostica y no predice con certeza.

En la documentación se usan dos términos:

* **Ella:** la persona afectada, titular de los datos de su ciclo. Tiene su propia app, mínima, donde decide qué comparte y lo registra.
* **Él:** la persona que acompaña y usa la app principal. Recibe solo lo que ella comparte.

**Situación del proyecto.** Es un piloto personal, todavía sin entidad jurídica, a cargo de una persona física. El piloto será solo para mayores de 18 años. No hay monetización basada en datos: sin venta, analítica, telemetría ni publicidad.

## 2. Qué se solicita

Un **dictamen escrito** sobre la primera versión del modelo E, que incluya:

1. Respuesta a las **18 preguntas** de la §4.6 de la revisión arquitectónica (documento 2 de §6), en ocho bloques: papeles y proveedor; consentimiento e información; datos cifrados y metadatos; conservación y supresión; derechos sin identificación; seguridad, EIPD y edad; evaluación del piloto; calificación del producto y minimización.
2. Una **conclusión explícita**: si el diseño es viable, si lo es con condiciones o si no lo es.
3. Las **condiciones y cambios** necesarios antes de tratar datos reales o empezar el piloto.
4. Los **riesgos que queden** después de aplicarlos.
5. La identidad, las credenciales y la fecha de quien firma.

**No se solicita:** auditar código ni infraestructura (no existen todavía), ni redactar la política de privacidad o la EIPD, salvo que se acuerde aparte.

## 3. El tratamiento, en una página

### 3.1. Quién interviene

| Interviniente | Papel previsto, por confirmar (pregunta 1) |
|---|---|
| Ella | Titular de los datos. Los registra en su móvil y decide qué comparte. |
| Él | Recibe en su móvil lo que ella comparte. También es usuario, con sus propios datos (pregunta 5). |
| Consona | Publica las apps y opera el servidor de relé. |
| Proveedor de alojamiento | Aloja el relé. Por decidir; requisitos en CON-030 §10. |

### 3.2. Qué datos, dónde y durante cuánto tiempo

| Datos | Móvil de ella | Servidor de Consona | Móvil de él | Conservación |
|---|---|---|---|---|
| Fechas de inicio de la regla y duraciones (datos de salud, art. 9 RGPD) | Sí | Solo cifrados de extremo a extremo; no puede leerlos | Sí, si ella lo consiente | Historial de 6 ciclos |
| Variables consentidas: en la v1, tres categorías físicas cerradas (dolor o calambres, hinchazón y cansancio), con intensidad simple y registradas solo por ella | Sí | Igual que las fechas | Sí, si ella lo consiente | Ventana por decidir (ADR-002, CON-009) |
| Franja de edad (opcional; solo para destacar contenido educativo) | Sí | Igual que las fechas | Sí, si ella lo consiente | Mientras esté vigente el consentimiento |
| Consentimiento por alcance | Sí | No | Lo necesario para respetarlo | Mientras esté vigente |
| Fase y estimaciones | Calculadas, no guardadas | Nunca | Calculadas, no guardadas | — |
| Datos borrados por ella | En una papelera local | No | No | {N} días, fijados por la EIPD |
| Último mensaje cifrado de cada pareja («sobre») | — | Sí, solo el último | — | Hasta que llega otro o se cierra el vínculo; se borra tras 90 días sin uso (propuesta) |
| Material de emparejamiento | — | Sí | — | Minutos |
| Día del último uso del buzón | — | Sí, solo el día | — | Se sobrescribe |
| Copia de seguridad | La crea ella y la guarda donde quiere | Nunca | La de él no lleva datos de ella | Fuera del alcance de Consona |

### 3.3. Qué ve el servidor aunque no pueda leer

* Que llega un mensaje cifrado de tamaño fijo, y cuándo. La app de ella envía uno cada vez que se abre, para que el servidor vea aperturas y no confirmaciones de la regla.
* Que la app de él lo recoge, y cuándo.
* La dirección IP en tránsito. No se registra (pregunta 7).

### 3.4. Qué no hace Consona

No tiene cuentas, ni correo, teléfono o nombres. No usa cookies, analítica, telemetría, píxeles ni informes remotos de errores. No envía notificaciones ni correos. No usa recursos de terceros en la app. Consona no puede identificar a nadie, y eso condiciona cómo se acredita el consentimiento y cómo se atienden los derechos (preguntas 3 y 12).

### 3.5. Flujo, en cuatro pasos

1. **Emparejamiento.** Los dos móviles intercambian claves a través del servidor y comparan un código de 6 cifras, en persona o por teléfono, para descartar que alguien se interponga.
2. **Consentimiento.** Ella elige en su app qué comparte, tras desbloquear el móvil. Puede ver antes, en su móvil, lo que vería él.
3. **Envío.** Cada vez que ella abre su app, sale un mensaje cifrado con el estado completo de lo que comparte. Lo que corrige o borra se corrige o se borra en el móvil de él la próxima vez que lo abre.
4. **Retirada.** Cualquiera de los dos puede deshacer el vínculo. Se borran los datos de ella en el móvil de él, el mensaje y el vínculo en el servidor, y las claves.

## 4. Estado de las decisiones

| Decisión | Estado |
|---|---|
| ADR-001: control local, consentimiento y revocación | Aceptada con condiciones (14-09-2026) |
| ADR-002: aprendizaje local de variables | Aceptada con condiciones (16-09-2026) |
| ADR-003: relé cifrado de extremo a extremo | Aceptada con condiciones (26-11-2026). Su condición A1 es este dictamen. |

Las tres decisiones dicen expresamente que no autorizan datos reales ni piloto mientras no se cumplan sus condiciones, entre ellas esta revisión. Si el dictamen pide cambios, se revisan.

## 5. Lo que más nos preocupa

Para orientar la lectura, estos son los puntos en los que el diseño tiene menos certeza:

1. **El servidor transmite y guarda datos de salud cifrados.** Partimos de que es tratamiento de datos de salud, aunque no pueda leerlos (preguntas 6 y 8).
2. **Los momentos de apertura pueden revelar la regla** (pregunta 7).
3. **Consentimiento y derechos sin identificar a nadie** (preguntas 3, 10 y 12).
4. **Riesgo de control coercitivo** dentro de la pareja (pregunta 14).
5. **Si estimar la fase convierte la app en producto sanitario** (pregunta 17).

## 6. Documentos que se entregan

Orden de lectura recomendado. Todos están en el repositorio público del proyecto.

| # | Documento | Qué leer |
|---|---|---|
| 1 | Este expediente | Todo. |
| 2 | [Revisión arquitectónica del modelo E](../security/JUA-42_REVISION_ARQUITECTONICA_MODELO_E.md) | **§4.6, las preguntas.** Después: §0 (resumen), §2 (flujos), §4.2 (la promesa a ella), §4.3 (conservación) y §8 (copias). |
| 3 | [ADR-003: relé cifrado](../governance/ADR-003_RELE_CIFRADO_MODELO_E.md) | La excepción, su justificación, las salvaguardas y las condiciones. |
| 4 | [ADR-001: control local y consentimiento](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-001_CONTROL_LOCAL_Y_CONSENTIMIENTO.md) | La decisión de base, con las notas de ADR-003. |
| 5 | [ADR-002: aprendizaje local](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_ADR-002_APRENDIZAJE_LOCAL_Y_VARIABILIDAD_PREMENSTRUAL.md) | §3 (datos) y §7 (condiciones). |
| 6 | [CON-007: retirada, borrado y sin conexión](../security/CON-007_AUTORIZACION_REVOCACION_Y_OFFLINE.md) | Qué pasa al retirar el consentimiento y qué no se puede prometer. |
| 7 | [CON-030: arquitectura](../security/CON-030_ARQUITECTURA_PRIMERA_VERSION.md) | §4 (inventario de datos), §9 (integridad del código), §10 (servidor y proveedor) y §13 (riesgos). |
| 8 | [Taxonomía local de variables](../taxonomy/consona-local-taxonomy-v1.0.0.md) | §4 y §5: las tres categorías de la v1 y su consentimiento. §6: lo que nunca se registra. |
| 9 | [Definición de la app](../../info/Consona_entrega_completa/archivos_compartidos/CONSONA_DEFINICION_DE_APP.md) | Alcance, público y exclusiones. |
| 10 | [CON-008: contrato del servicio](../security/CON-008_REQUERIMIENTOS_TECNICOS_Y_API.md) | Logs y retención (§7). Pendiente de actualizar con ADR-003, como dice su cabecera. |

## 7. Documentos pendientes

| Documento | Estado | Cuándo |
|---|---|---|
| EIPD y evaluación de violencia tecnológica (JUA-44) | Sin empezar | La pregunta 14 pide orientación sobre su alcance. Se puede entregar después del dictamen o hacerse con la persona revisora, si se acuerda. |
| Modelo de amenazas (JUA-43) | Sin empezar; los riesgos están en CON-030 §13 | Antes del piloto. |
| Formulario de consentimiento (JUA-28) | Textos provisionales en el documento 2 (§1.1, §4.2 y §4.3.1) | Después del dictamen, con sus condiciones. |
| Política de privacidad de la app | Sin redactar | Después del dictamen (pregunta 12). |
| Respuestas del proveedor de alojamiento | Preguntas preparadas en CON-030 §10.3 | Antes de elegirlo (pregunta 1). |

La política de privacidad de la lista de aviso de la web, que ya funciona, está en consonaapp.com/privacidad.html. Es un tratamiento distinto, pero sirve de referencia para la lista del piloto (pregunta 16).

## 8. Perfil buscado y condiciones

* **Especialidad:** protección de datos y salud digital. Abogada o abogado con esa especialidad, o delegada o delegado de protección de datos certificado.
* **Independencia:** sin relación con el proyecto.
* **Alcance y presupuesto acordados por escrito** antes de empezar.
* **Idioma:** castellano.

## Anexo. Texto para solicitar presupuesto

> Hola:
>
> Busco una revisión jurídica independiente, en materia de protección de datos, para Consona, una app de educación sobre el ciclo menstrual para parejas. Está en fase de diseño y todavía no trata datos reales.
>
> La app trata datos de salud de una persona (fechas de la regla y algunos síntomas físicos) que ella comparte, con su consentimiento, con el móvil de su pareja. Los datos pasan por nuestro servidor cifrados de extremo a extremo, sin que podamos leerlos, y no hay cuentas ni correo.
>
> Necesitaría un dictamen escrito sobre 18 preguntas concretas: papeles en el tratamiento, base jurídica y consentimiento, datos cifrados y metadatos, conservación y supresión, derechos sin identificación, EIPD, edad, una lista para evaluar el piloto y si la app podría considerarse producto sanitario. Tengo preparado un expediente de unas pocas páginas y la documentación técnica.
>
> ¿Podríais indicarme si os encaja, en qué plazo y con qué presupuesto?
>
> Gracias.
