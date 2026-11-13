# Consona — Previsión de la regla: cuenta atrás, estimaciones sin confirmar y calendario v0.1.0

**Issues:** JUA-30 (prototipo, D-23) y JUA-41 (confirmación desde la app de la persona afectada).
**Estado:** Borrador para revisión de producto. **Incluido en el paquete de revisión clínica de JUA-16** (artefacto A10), pendiente de envío.
**Reglas:** especificación del panel v1.2.0, §3.3 (CA-01 a CA-11), §3.4 (CL-01 a CL-09), IT-02 y §5 ([`panel-principal-v1.1.0.md`](../product/panel-principal-v1.1.0.md)).
**Público y tono:** los de la sección 1 de [`spm-tdpm-v0.8.0.md`](./spm-tdpm-v0.8.0.md): la pareja que acompaña, en segunda persona, sin paternalismo.
**No habilita:** datos reales, persistencia, avisos ni cambios del motor de estimación. Con datos reales depende del modelo E (JUA-13, JUA-22) y de JUA-41.

> Este documento fija el texto exacto que se mostrará en la pantalla de inicio y en el calendario sobre la próxima regla. Las llaves `{…}` son valores que calcula el motor (CON-032); no se muestran tal cual. Cualquier cambio exige una nueva versión.

## 1. Reglas propias

| ID | Regla |
|---|---|
| P-01 | Siempre intervalos, nunca una fecha ni un número únicos (CA-01, CL-03). |
| P-02 | Nunca «retraso», «tarde», «falta la regla» ni nada que sugiera un embarazo (CA-05). |
| P-03 | Sin días fértiles, días seguros, probabilidad de embarazo ni ovulación confirmada (CA-07, CL-06). |
| P-04 | El aviso PRV-03 acompaña siempre a la cuenta atrás y al calendario (CA-06, CL-07). |
| P-05 | Nada de esto cambia el color ni el tono del panel, ni genera avisos en el dispositivo de quien consulta (CA-08). |
| P-06 | Las estimaciones sin confirmar llevan siempre su etiqueta, también sobre las tarjetas (CA-04, CA-05). |

## 2. Texto

### PRV-01 · Cuenta atrás, antes de la ventana

**Dónde:** junto a la marca del día en la rueda del ciclo (CA-01).

> La regla podría empezar dentro de {X} a {Y} días.

### PRV-02 · Cuenta atrás, dentro de la ventana

**Dónde:** el mismo lugar que PRV-01 (CA-02).

> La regla podría empezar estos días.

### PRV-03 · Aviso de estimación

**Dónde:** siempre junto a la cuenta atrás y al pie del calendario (CA-06, CL-07).

> Es una estimación a partir de sus fechas. No sirve para evitar ni para buscar un embarazo.

### PRV-04 · Menstruación estimada sin confirmar

**Dónde:** en el estado del ciclo, en el centro de la rueda y encima de las tarjetas de la menstruación, cuando la ventana prevista ha pasado sin confirmación (CA-04).

> Menstruación estimada · sin confirmar
> Es una estimación: tu pareja no ha confirmado el inicio de la regla.

### PRV-05 · Ciclos estimados sin confirmar

**Dónde:** en el estado del ciclo y encima de las tarjetas de la fase, cuando Consona sigue estimando a partir del último inicio confirmado (CA-05). `{Fase}` es el nombre de la fase estimada. Con N = 1: «hace un ciclo».

> {Fase} · estimación sin confirmar
> Estimación a partir de la última regla confirmada, hace {N} ciclos. Es menos fiable con cada ciclo sin confirmar.

### PRV-06 · Días previos a la menstruación

**Dónde:** bajo el estado del ciclo, en los 7 días previos al inicio previsto (IT-01, IT-02). La explicación se abre desde la indicación.

> Días previos a la menstruación · estimación
> Calculado a partir de la duración de ciclos anteriores confirmados. La siguiente menstruación puede llegar antes o después.

### PRV-07 · Datos antiguos

**Dónde:** en lugar de la fase, la rueda y la cuenta atrás, cuando la incertidumbre supera el límite de CON-032 (CA-05d, sección 5).

> Hace demasiado tiempo que tu pareja no confirma el inicio de una regla. Consona no puede estimar el ciclo hasta que lo haga.

### PRV-08 · Calendario

**Dónde:** pantalla 1.3, con el enlace `Calendario` desde «Hoy» (CL-01 a CL-09).

> **Calendario**
> **Reglas anteriores**
> Empezó el {fecha} · {N} días
> Empezó el {fecha} · {N} días (referencia)
> **Próximas reglas**
> Entre el {fecha} y el {fecha}
> Entre el {fecha} y el {fecha} · sin confirmar
> Es una estimación a partir de sus fechas. No sirve para evitar ni para buscar un embarazo.

Variantes:

| Caso | Texto |
|---|---|
| La duración es la de referencia de 5 días, porque ella no declaró la suya (CL-02) | Se añade «(referencia)» tras los días. |
| Ella no ha aceptado el alcance «historial de reglas» (CL-05, DA-10) | En lugar de «Reglas anteriores»: «Tu pareja no ha compartido sus reglas anteriores.» |
| La ventana de una regla prevista ya ha pasado sin confirmación (CL-04) | Se añade «· sin confirmar» tras el intervalo. |

## 3. Trazabilidad

| Bloque | Afirmación | Base |
|---|---|---|
| PRV-01, PRV-02 | La próxima regla se puede estimar en un intervalo a partir de la duración de los ciclos. | JUA-27 §2 (duración del ciclo y variación dentro de la misma persona, desviación típica de unos 2,6 días); panel CA-01 a CA-03; motor CON-032. |
| PRV-03 | Un calendario no sirve para evitar ni buscar un embarazo. | `jua-10/01-cycle-phases` (límite 3); OV-A07, OV-A08 (OS-06, OS-08 [V]); OVU-05b de `ovulatoria-v0.2.0.md`. |
| PRV-04, PRV-05 | Sin confirmación, la fecha es una estimación cada vez menos fiable. | Panel ME-04, CA-04 a CA-05d; JUA-27 §2. |
| PRV-06 | La siguiente menstruación puede llegar antes o después. | Panel IT-01 a IT-03; JUA-27 §5. |
| PRV-07 | La estimación tiene un límite de caducidad. | ADR-001 C9 (caducidad del motor); panel §5 y CA-05d. |
| PRV-08 | Reglas pasadas confirmadas, con consentimiento, y previstas en intervalo. | Panel CL-01 a CL-09, DA-10; ADR-001 («sin historial retrospectivo amplio»). |

## 4. Exclusiones comprobadas

La v0.1.0 no contiene:

- [x] Fechas o números únicos para la próxima regla.
- [x] «Retraso», «tarde», «falta la regla» ni alusiones a un embarazo.
- [x] Días fértiles, días seguros, ovulación ni probabilidades.
- [x] Síntomas, estados de ánimo ni predicciones sobre tu pareja.
- [x] Valoraciones de la regularidad ni comparaciones con rangos clínicos.
- [x] Llamadas a la acción para vigilar, preguntar por la regla o pedirle que confirme.

## 5. Qué debe valorar la persona revisora

- Si los intervalos («dentro de X a Y días», «estos días», «entre el … y el …») se entienden como estimaciones y no como una predicción.
- Si «sin confirmar» y «estimación sin confirmar» se leen como lo que son y no como un retraso o una sospecha de embarazo.
- Si el aviso PRV-03 basta para que nadie use la cuenta atrás o el calendario para evitar o buscar un embarazo.
- Si es adecuado mostrar las tarjetas de la menstruación durante «Menstruación estimada · sin confirmar», con la etiqueta encima.

## 6. Decisiones

| ID | Decisión | Propuesta |
|---|---|---|
| D-01 | ¿Dejar de estimar cuando ella no confirma? | **Resuelta (12-11-2026):** no. Consona sigue estimando a partir del último inicio confirmado, con la etiqueta «sin confirmar» y un intervalo cada vez más ancho, hasta el límite de CON-032 (CA-05 a CA-05d). |
| D-02 | ¿Qué tarjetas se muestran durante «Menstruación estimada · sin confirmar»? | **Resuelta (12-11-2026):** las de la menstruación, con la etiqueta PRV-04 encima. Se pregunta a la persona revisora. |
| D-03 | IT-02 decía que la menstruación «puede adelantarse o retrasarse». | **Resuelta (12-11-2026):** «puede llegar antes o después», para no usar «retraso» en ninguna forma (P-02). |

## 7. Historial

### [0.1.0] — 12-11-2026

- Primera versión: cuenta atrás en intervalo, estimaciones sin confirmar, días previos, datos antiguos y calendario, a partir de la especificación del panel v1.2.0.
- Incluido en el paquete de revisión clínica de JUA-16 como artefacto A10.
