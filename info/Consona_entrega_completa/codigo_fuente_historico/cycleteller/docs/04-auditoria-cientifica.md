# Auditoría científica del contenido

Cada afirmación que hacía la app, contrastada con la evidencia. Veredicto:
**correcto**, **parcialmente correcto** o **incorrecto**.

---

## 1. El cálculo de fases · **INCORRECTO**

**Lo que hacía la app:** menstruación días 1-5, folicular 6-13, ovulatoria
14-16, lútea 17 en adelante, sobre un ciclo configurable de 21 a 40 días.

**El problema es matemático antes que biológico.** Con un ciclo de 35 días, ese
modelo asigna a la fase lútea 19 días. Esa duración prácticamente no existe en
fisiología humana.

### La regla correcta

La fase que varía es la **folicular** (la primera). Por eso la ovulación se
ancla contando hacia atrás desde la **siguiente** regla:

```
ventana ovulatoria = [duración − 16 , duración − 10]
```

Fuente: NHS, *"in most women it happens around 10 to 16 days before the next period"*.
https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/

### El error, medido

| Ciclo | La app decía | Estimación correcta | Error |
|---|---|---|---|
| 21 días | ovulación 14-16 | días 5-11 | se pasa 5-9 días |
| 28 días | ovulación 14-16 | días 12-18 | aceptable |
| 35 días | ovulación 14-16 | días 19-25 | se adelanta 5-9 días |
| 40 días | ovulación 14-16 | días 24-30 | se adelanta 10-14 días |

En un ciclo de 35 días, **la app mostraba la fase equivocada durante más de una
semana de cada ciclo**.

### Los datos que lo respaldan

**Bull et al. 2019**, npj Digital Medicine, 612.613 ciclos de 124.648 usuarias:

- Duración media del ciclo: **29,3 días**, no 28.
- **Solo el 13% de los ciclos duró exactamente 28 días.**
- Fase folicular media: **16,9 días** (DE 5,3) → la ovulación media cae hacia el
  día 17, no el 14.
- Desviación intraindividual media: 2,6 días.
- Cita de los autores: *"It is a common belief that ovulation occurs on day 14 of
  the cycle, but our analysis has shown that for the majority of women in the
  real-world that this is not the case."*

https://www.nature.com/articles/s41746-019-0152-7

**Human Reproduction 2024** (53 mujeres, 676 ciclos, seguimiento prospectivo de
un año): la fase lútea tiene mediana de **10,9 días** (rango 8,3-12,5), y los
autores escriben que sus resultados *"counter the oft-quoted idea that the LP is
stable 13-14 days long"*.
https://academic.oup.com/humrep/article/39/11/2565/7775370

**Wilcox et al., BMJ 2000** (221 mujeres, 696 ciclos): solo **alrededor del 30%**
de las mujeres tuvo su ventana fértil dentro de los días 10-17. Y la frase clave:
la ventana fértil puede ser *"highly unpredictable, even if their cycles are
usually regular"*. **Regularidad de duración no implica regularidad de ovulación.**
https://pubmed.ncbi.nlm.nih.gov/11082086/

**Soumpasis et al. 2020:** el 52% tiene ciclos que varían 5 días o más entre
ciclos consecutivos; **menos del 1%** mantiene la misma duración cuatro ciclos
seguidos; para un ciclo de 28 días, el día de ovulación observado se dispersa 10 días.
https://pmc.ncbi.nlm.nih.gov/articles/PMC7164578/

**Corregido en `src/js/cycle.js`.** Hay un test que comprueba que la fase lútea
dura siempre entre 9 y 11 días para cualquier duración de ciclo entre 21 y 35.

---

## 2. Estado de ánimo y ciclo · **INCORRECTO en su formulación determinista**

**Lo que decía la app (fase lútea):** *"Amplificada. Lo que ignora normalmente,
ahora le molesta. Irritabilidad, ansiedad o tristeza posible."*

**Romans et al. (2012)**, revisión de 47 estudios con registro **diario
prospectivo** del ánimo en muestras no clínicas:

| Patrón hallado | % de estudios |
|---|---|
| **Ninguna asociación entre ánimo y fase** | **38,3%** |
| Ánimo negativo premenstrual + otra fase | 38,3% |
| **Patrón premenstrual clásico** | **14,8%** |
| Ánimo negativo solo fuera de la fase premenstrual | 8,5% |

Conclusión de los autores: *"these studies failed to provide clear evidence in
support of the existence of a specific premenstrual negative mood syndrome in the
general population."*
https://einsteinlab.ca/wp-content/uploads/2016/07/7-Mood-and-the-menstrual-cycle.pdf

**Prevalencia real del trastorno disfórico premenstrual:** metaanálisis de 44
estudios y 50.659 participantes → **1,6%** confirmado con registro diario
prospectivo, frente al 3,2% por cuestionario retrospectivo. **Cuando se mide
bien, la mitad desaparece.**
https://www.ox.ac.uk/news/2024-01-30-new-data-shows-prevalence-premenstrual-dysphoric-disorder

**Tamaño del efecto cuando existe:** en un estudio diario con medición hormonal
en saliva, el estatus hormonal explicaba entre el **0,4% y el 1,9%** de la
varianza del bienestar psicológico. Más del 98% de la variación del ánimo diario
se debe a otra cosa.

### Y el hallazgo más importante para el diseño

En experimentos donde se **engañó deliberadamente** a las participantes sobre en
qué momento del ciclo estaban, **las que creían estar premenstruales reportaron
significativamente más síntomas**, al margen de la fase real.

Una app que anuncia "es normal que esté irritable" no observa el fenómeno: **lo
produce**. Es la misma manipulación experimental, servida a diario y con la
autoridad de una interfaz.

**Corregido en `data/content.v2.js`**, con lenguaje probabilístico.

---

## 3. Deseo sexual · **PARCIALMENTE CORRECTO**

**Lo que decía la app:** ovulatoria = *"máxima receptividad, pico de deseo
sexual"*; lútea = *"se cierra, menos receptiva"*.

**La primera mitad:** el pico ovulatorio existe. Arslan et al., con más de 26.000
entradas diarias de 1.043 mujeres, encontró aumentos del deseo en la ventana
fértil. Pero **los propios autores describen todos los efectos significativos
como "small"**, hay heterogeneidad sustancial entre personas, y **los aumentos
están ausentes en usuarias de anticoncepción hormonal**. Además, un estudio con
773 mujeres y diseño entre-sujetos dio **resultado nulo**.

Veredicto: "máxima receptividad" es una exageración de un efecto pequeño.

**La segunda mitad: NO respaldada.** No se localizó evidencia de una caída lútea
del deseo comparable en magnitud al pico ovulatorio. Lo documentado es un
aumento periovulatorio sobre una línea base, no un "cierre" premenstrual.

**Eliminado por completo** (ADR-006), por este motivo y por los de seguridad.

---

## 4. Anticoncepción hormonal · **AUSENCIA GRAVE**

La app no preguntaba el método anticonceptivo. Para una parte grande del público,
su premisa entera es falsa.

**España, Encuesta de Anticoncepción 2024 (SEC), 1.736 mujeres de 15-49 años:**
píldora 18,0%, DIU hormonal 5,0%, anillo 2,8%, implante 1,9%, parche 1,0%,
inyectable 0,6%. **Total hormonales: 25,3%.**
https://sec.es/encuesta-de-anticoncepcion-en-espana-2024/

**Hay que distinguir tres situaciones:**

- **Píldora combinada, anillo, parche, implante (≈24%):** suprimen la ovulación.
  El progestágeno reduce los pulsos de GnRH, baja FSH y LH, y no hay pico de LH.
  **No hay fase folicular ni lútea endógenas.** El sangrado de la semana de
  descanso es un sangrado por deprivación, no una menstruación.
- **DIU hormonal (5,0%):** actúa sobre todo localmente; **muchas usuarias siguen
  ovulando**. Pero el 20% desarrolla amenorrea al año y el patrón de sangrado se
  desacopla del ciclo ovárico, lo que rompe el anclaje "día 1 = primer día de regla".
- **Ninguno, barrera o DIU de cobre:** el modelo aplica, con su margen de error.

Confirmación empírica: los efectos ovulatorios sobre deseo y autopercepción
**están ausentes** en usuarias de anticoncepción hormonal, y su variabilidad
emocional diaria es significativamente **menor**.

**Implementado en `src/js/cycle.js`:** onboarding que pregunta el método, y
desactivación de las fases cuando el método las suprime.

---

## 5. Otras condiciones que rompen el modelo

| Condición | Prevalencia | Efecto |
|---|---|---|
| SOP | 10-13% global, **hasta 70% sin diagnosticar** | Causa más común de anovulación |
| Endometriosis | 10% en edad reproductiva | Demora diagnóstica de 4 a 12 años |
| Oligomenorrea | ~13,5% | Ciclos > 35 días, fuera del modelo |
| Amenorrea secundaria | 2-5% | Sin ciclo |

Fuentes: OMS para SOP y endometriosis; StatPearls (NCBI) para el resto.

**Advertencia metodológica: estas categorías se solapan y no se pueden sumar.**
Cualquier cifra agregada de "población excluida" sería inventada. El dato sólido
que sí se puede afirmar es el de Bull et al.: **el ciclo de 28 días describe al
13% de los ciclos reales**.

**Oportunidad de producto:** dado que el SOP y la endometriosis son muy
prevalentes y están muy infradiagnosticados, la app está bien situada para
recomendar consulta médica ante ciclos consistentemente menores de 21 o mayores
de 35 días, dolor incapacitante o ausencia de regla. Es un uso con respaldo
clínico sólido y valor real. Está en el backlog.

---

## 6. Lo que sí se puede afirmar con seguridad

- La dismenorrea es muy común; el antecedente familiar es su predictor más fuerte.
- Rango normal del ciclo en adultas: **21-35 días**.
- La menstruación dura típicamente 4-6 días, rango normal 2-8. *(De las cuatro
  simplificaciones del modelo original, "días 1-5" es la única que resiste.)*
- La fase folicular es más variable que la lútea. La dirección era correcta; la
  magnitud, no.
- La ovulación ocurre 10-16 días antes de la siguiente regla.
- Los trastornos menstruales se asocian a peor sueño — **pero el efecto se
  concentra en mujeres con síndrome premenstrual, no en todas**.
- El 70-90% reporta alguna molestia premenstrual; de ese grupo, alrededor de un
  tercio cumple criterios de síndrome premenstrual.

## 7. Mitos que la app no debe repetir

1. "La ovulación ocurre el día 14."
2. "El ciclo dura 28 días." *(Solo el 13% de los ciclos.)*
3. "La fase lútea dura exactamente 14 días."
4. "La ventana fértil está en los días 10-17." *(Solo ~30% de las mujeres.)*
5. **"Las capacidades cognitivas de la mujer cambian a lo largo del ciclo."**
   Metaanálisis de 102 artículos y 3.943 participantes: *"does not support myths
   that women's cognitive abilities change across the menstrual cycle."*
   https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318576
6. "La fase lútea produce irritabilidad, ansiedad o tristeza, en general."
7. "El sangrado de la píldora es una regla."

---

## Limitaciones de esta auditoría

- No se pudo acceder a *Can apps and calendar methods predict ovulation with
  accuracy?* (error 403) ni a las páginas de ACOG (error 402). Se usaron NHS,
  Endotext (NCBI) y StatPearls, de rango equivalente.
- **No existe una cifra publicada de "% de mujeres con ciclos suficientemente
  regulares para predicción por calendario".** La mejor aproximación es el ~30%
  de Wilcox, que mide algo relacionado pero distinto.
- Las prevalencias de SOP, oligomenorrea, amenorrea y anticoncepción hormonal se
  solapan y no son aditivas.
