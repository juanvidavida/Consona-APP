# Consona — App de ella: sugerencias de actualización v0.1.0

**Issues:** JUA-41 (app mínima de la persona afectada), JUA-48 (motor de estimación) y JUA-42 (revisión arquitectónica, pregunta 4).
**Estado:** Borrador para revisión de producto. **No forma parte del paquete de revisión clínica de JUA-16.** Irá en la segunda ronda, junto con A10 v0.2.0.
**Reglas:** especificación del panel v1.3.0, DA-11 y §3.5 ([`panel-principal-v1.1.0.md`](../product/panel-principal-v1.1.0.md)). Código: [`src/motor/sugerencia.js`](../../src/motor/sugerencia.js).
**Público y tono:** la persona afectada, en segunda persona. Frases breves, sin urgencia, sin culpa y sin mencionar a su pareja como quien espera.
**Idiomas:** castellano (ES) y catalán (CA). El catalán necesita la revisión de una persona nativa antes del piloto.
**No habilita:** datos reales ni persistencia. Depende del modelo E (JUA-13) y de la revisión arquitectónica (JUA-42).

> Este documento fija el texto exacto de las sugerencias que la app de ella muestra **dentro de la app**, al abrirla o al volver a ella. No hay notificaciones push ni avisos programados (decisión de producto del 13-11-2026). Las llaves `{…}` son valores calculados; no se muestran tal cual. Cualquier cambio exige una nueva versión.

## 1. Reglas propias

| ID | Regla |
|---|---|
| S-01 | Una sugerencia es una invitación, nunca una obligación. Siempre se puede posponer con «Ahora no». |
| S-02 | La falta de registro solo significa que falta información. Nunca se interpreta como ausencia de regla, retraso ni embarazo, y nunca se dice «retraso». |
| S-03 | Ninguna sugerencia menciona a su pareja como alguien que espera, pide o necesita la fecha. |
| S-04 | Ninguna sugerencia pide ampliar lo que comparte ni renovar el consentimiento (DA-08). |
| S-05 | En la app de ella no se afirma que su pareja haya recibido o leído nada sin evidencia técnica (JUA-42): «última información enviada» y «previsualización». |
| S-06 | Sin sugerencias con anticoncepción que impida estimar la fase, ni cuando no comparte el alcance «fechas». |
| S-07 | Sin «Aún no ha empezado» en el piloto. |

## 2. Texto

### SUG-01 · Sin ninguna regla registrada

**Cuándo:** el motor devuelve «datos insuficientes» y ella comparte el alcance «fechas».

> ES: Todavía no has registrado ninguna regla. Si quieres compartirla con tu pareja, añade el día en que empezó la última.
> CA: Encara no has registrat cap regla. Si vols compartir-la amb la teva parella, afegeix el dia en què va començar l'última.

### SUG-02 · Dentro del intervalo previsto

**Cuándo:** estado normal y hoy está dentro del intervalo previsto para la próxima regla. Es discreta: no se destaca más que el resto.

> ES: Si te ha venido la regla, puedes registrarla.
> CA: Si t'ha vingut la regla, la pots registrar.

### SUG-03 · Pasado el intervalo sin registro

**Cuándo:** menstruación estimada sin confirmar, estimación sin confirmar o datos antiguos.

> ES: Tu última regla registrada empezó el {fecha}. Si has tenido otra desde entonces, puedes añadirla.
> CA: La teva última regla registrada va començar el {fecha}. Si n'has tingut una altra des d'aleshores, la pots afegir.

### SUG-04 · Sugerencia neutral

**Cuándo:** el motor no puede calcular un intervalo vigente («fuera de vigencia») y han pasado 21 días o más desde el último inicio registrado. No se aplica a los estados en los que el producto ha decidido no ofrecer previsiones (S-06).

> ES: ¿Quieres revisar tus fechas? Tu última regla registrada empezó el {fecha}.
> CA: Vols revisar les teves dates? La teva última regla registrada va començar el {fecha}.

### SUG-05 · Acciones

**Cuándo:** con SUG-01 a SUG-04. «Corregir última fecha» solo aparece si hay alguna registrada.

> ES: Registrar fecha | Ahora no | Corregir última fecha
> CA: Registrar la data | Ara no | Corregir l'última data

### SUG-06 · Estado del envío

**Cuándo:** bajo la última regla registrada. Distingue el envío de la recepción, que hoy no se puede comprobar (S-05).

> ES: Última información enviada: {fecha}. | Pendiente de enviar.
> CA: Darrera informació enviada: {fecha}. | Pendent d'enviar.

### SUG-07 · Previsualización

**Cuándo:** título del bloque «Esto es lo que ve tu pareja», en segundo término.

> ES: Previsualización: esto es lo que verá tu pareja con lo que compartes.
> CA: Previsualització: això és el que veurà la teva parella amb el que comparteixes.

### SUG-08 · Lo que no significa no registrar

**Cuándo:** bajo SUG-03 y SUG-04.

> ES: Si no registras una fecha, Consona no saca ninguna conclusión: solo le falta información.
> CA: Si no registres cap data, Consona no en treu cap conclusió: només li falta informació.

### SUG-09 · Su estado

**Cuándo:** en la pantalla de inicio de ella, si el motor calcula un intervalo vigente.

> ES: Próxima regla estimada: entre el {fecha} y el {fecha2}.
> CA: Propera regla estimada: entre el {fecha} i el {fecha2}.

## 3. Parámetros

| Parámetro | Valor inicial | Naturaleza |
|---|---|---|
| Días para la sugerencia neutral (SUG-04) | 21 | De experiencia de uso, no clínico. Se ajusta sin tocar el motor. |
| Días que dura «Ahora no» | 7 | De experiencia de uso. El aplazamiento vale para esa sugerencia y ese último inicio: si cambia cualquiera de los dos, se anula. |

Los días se cuentan desde el inicio de la regla registrada, como fecha de calendario, no desde la última apertura ni desde el momento del registro.

## 4. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] «Retraso», «tarde», «falta la regla» ni alusiones a un embarazo.
- [x] Menciones a la pareja como alguien que espera o pide la fecha.
- [x] Peticiones de compartir más datos o de renovar el consentimiento.
- [x] Afirmaciones de que la pareja ha recibido o leído la información.
- [x] Urgencia, culpa, rachas ni métricas de uso.
- [x] Edad ni otras variables.

## 5. Qué debe valorar la persona revisora

- Si SUG-03 y SUG-08 evitan que la falta de registro se lea como un retraso o una sospecha de embarazo.
- Si el tono de SUG-02 es lo bastante discreto.
- Si el catalán es natural (revisión por una persona nativa).

## 6. Historial

### [0.1.0] — 13-11-2026

- Primera versión, a partir de la decisión de producto del 13-11-2026: sugerencias dentro de la app de ella, evaluadas por un motor local, sin notificaciones push ni avisos programados.
