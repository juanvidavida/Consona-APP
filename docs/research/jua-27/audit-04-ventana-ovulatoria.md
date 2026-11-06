# JUA-27 · D — Auditoría de la regla de la «ventana ovulatoria estimada»

Fecha de verificación: 28-10-2026
Objeto auditado: `OVULATION_BEFORE_NEXT_PERIOD = { earliest: 16, latest: 10 }` y `phaseBoundaries()` en
`info/Consona_entrega_completa/codigo_fuente_historico/cycleteller/src/js/cycle.js` (líneas 19, 40 y 115-130). Solo se ha leído; no se ha modificado.

Marcas: **[V]** leído en la fuente primaria (texto completo o resumen oficial). **[V-abs]** leído solo en el resumen. **[NV]** no verificado: cifra tomada de una cita secundaria o de un buscador. No se usa ninguna cifra que no esté en una de estas tres categorías.

---

## 0. Qué hace exactamente el motor (leído en el código)

Días en base 1 e inclusivos; L = duración del ciclo (acotada a 21-35); P = días de sangrado.

| Fase | Rango | Días con L = 28 y P = 5 |
|---|---|---|
| menstruación | [1, P] | 1-5 (5 d) |
| folicular | [P+1, L−17] | 6-11 (6 d) |
| ovulatoria | [L−16, L−10], con inicio ≥ P+1 | 12-18 (7 d) |
| lútea | [L−9, L] | 19-28 (**10 d**) |

Corrección a la premisa del encargo: la lútea pintada va de L−9 a L **ambos incluidos**, así que mide **10 días**, no 9. Si la ovulación cayera en el último día de la ventana (O = L−10), la lútea real sería O+1…L = 10 días. Por tanto, el motor pinta siempre como lútea la duración del extremo **más corto** del rango.

Convención usada en este informe: O = día de ovulación y LP (fase lútea) = L − O, es decir, los días que van de O+1 al último día del ciclo. Es la convención de Bull 2019, donde la folicular media (16,9) más la lútea media (12,4) suman la duración media del ciclo (29,3). Con ella, la regla del motor equivale a **LP ∈ [10, 16]**.

---

## 1. Verificación del NHS

**Página:** NHS, «Periods and fertility in the menstrual cycle», https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/ **[V]**, consultada el 28-10-2026.

- Citas literales:
  - Sección «What happens during the menstrual cycle?»: *«The time from the release of an egg to the start of a period is around 10 to 16 days.»*
  - Sección «When are you most fertile?»: *«It's difficult to pinpoint exactly when ovulation happens»*… *«in most women it happens around 10 to 16 days before the next period.»*
  - También: *«likely to be fertile around day 14 of their menstrual cycle»* (ciclo regular de 28 días) y *«this won't apply to women whose cycles are shorter or longer.»*
- Fechas: *«Page last reviewed: 05 January 2023»* y *«Next review due: 05 January 2026»*. **La página lleva casi 10 meses con la revisión vencida** a fecha de verificación.
- Referencias: la página no cita bibliografía; solo enlaza a otras páginas del NHS.
- Versiones archivadas: no he podido abrir web.archive.org porque la herramienta bloquea ese dominio. **No verificado** si versiones anteriores decían otra cosa.

**¿Dice realmente «10 a 16 días antes»?** Sí, con tres matices que el motor no recoge:
1. **«around»**: es una cifra aproximada, no un intervalo con límites duros.
2. **«in most women»**: no dice que valga para todos los ciclos ni da el porcentaje que cubre.
3. **Va precedido de «It's difficult to pinpoint exactly when ovulation happens»**.

**Desfase de un día.** Leído literalmente, «d días antes de la siguiente regla» (que empieza el día L+1) da O = L+1−d, es decir **O ∈ [L−15, L−9]**. El motor usa [L−16, L−10]. Esto coincide con la convención LP = L−O de la literatura, pero **no es la lectura literal del NHS**: hay ±1 día de ambigüedad que el código no documenta.

**¿Basta el NHS como autoridad?** No como fuente de un parámetro. Es información divulgativa para pacientes, sin referencias, con la revisión vencida y con un lenguaje («around», «most») pensado para el público. Sirve como **encuadre comunicativo**, pero los parámetros deben apoyarse en la literatura primaria y profesional del apartado 2.

---

## 2. Tabla de evidencia

| Fuente | Diseño y forma de fechar la ovulación | Fase lútea | Estado |
|---|---|---|---|
| **ASRM Practice Committee 2026**, «Diagnosis and treatment of luteal phase deficiency: a committee opinion», Fertil Steril 2026;126:633-9, DOI 10.1016/j.fertnstert.2026.06.014 (sustituye a la de 2021) | Opinión de comité | *«A typical luteal phase length is relatively fixed at 12–14 days but may range from 11-17 days»* (sin cita). En otro punto: *«The average luteal phase length is 14 days, with a normal variation of 11–17 days»* (cita a Strott 1970 y a Smith y Lenton 1984). Define LPD así: *«a luteal phase of ≤10 days»* (y menciona cortes alternativos de ≤11 y ≤9). | [V] en la página de ASRM. DOI y fecha [V] en rrmacademy.org. |
| **Lenton, Landgren y Sexton 1984**, Br J Obstet Gynaecol 91:685-9 (PMID 6743610) | 327 fases lúteas. LP = días siguientes al pico de LH (sin incluirlo) hasta el día anterior a la regla. | *«mean (+/- SD) for normal luteal phase length of 14.13 (+/- 1.41) days»*. Fases cortas: 5,2 %. Henry 2024 lo cita como 14,3 d (IC 95 % 11,3-17,0) y advierte de que excluye los ciclos con lútea corta. | [V-abs] |
| **Fehring, Schneider y Raviele 2006**, JOGNN 35:376-84 | 141 mujeres y 1.060 ciclos, con monitor electrónico (LH urinaria) | Media 12,4 ± 2,0 d (IC 95 % 8-17), **según la cita que hace Henry 2024**. El resumen solo dice que *«The follicular phase contributes most to this variability»* y que *«only 25% of participants had all days of the fertile phase between days 10 and 17»*. | Resumen [V-abs]; cifra lútea [NV]: secundaria, no pude abrir el PDF (error 403) |
| **Cole et al. 2009** | — | 13,2 ± 2,0 d (rango 95 % 9-17), según la cita de Henry 2024 | [NV] |
| **Najmabadi et al. 2020**, Paediatr Perinat Epidemiol 34(3):318-27, PMC8495765 | 3 cohortes, 581 mujeres. La ovulación es el día pico del moco cervical. | Media 11,7 (DE 2,8); **mediana 12**; P25 = 10, P75 = 13; rango 3-29; **<10 d: 18,1 %**; **>16 d: 3,9 %** | [V] |
| **Bull et al. 2019**, npj Digit Med 2:83, PMC6710244 | 612.613 ciclos ovulatorios de 124.648 usuarias de Natural Cycles. La ovulación estimada (EDO) es el día anterior a la primera temperatura alta (BBT ± LH). | *«mean luteal phase length was 12.4 days (95% CI: 7–17)»*; DE de 2,4 (Discusión); *«18% of cycles had luteal phases of less than 11 days»*. En ciclos muy cortos, la lútea es 4,4 d (35 %) más corta; en ciclos muy largos, 0,6 d (5 %) más larga. Va de 8,0 d en ciclos de 15-20 días a 12,9 d en ciclos de 36-50. | [V] |
| **Soumpasis, Grace y Johnson 2020**, Hum Reprod Open hoaa011 | 75.981 ciclos de 32.595 usuarias. La ovulación es el día siguiente al pico de LH (test Clearblue). Lútea analizada en ciclos de 23-35 días. | *«mean length was 12.77 ± 1.86 days»*. En ciclos de 28 días, ovulaciones repartidas en unos 10 días; la más frecuente es el día 15 (27 %), seguida del 16 (21 %) y del 14 (20 %). Autores con conflicto de interés (SPD). | [V] |
| **Henry, Shirin, Goshtasebi y Prior 2024**, Hum Reprod 39(11):2565-74 | 53 mujeres y 676 ciclos ovulatorios, con temperatura basal cuantitativa (QBT). El salto de QBT llega 2,4 ± 1,5 d después del pico de LH. | *«LP lengths ranged from 3.0 to 16.0 days (median 11.0 days)»*. Lútea <10 d en 181 ciclos (~26-27 %). Los propios autores reconocen que las lúteas que miden son *«a bit shorter»* que las medidas con LH. El artículo da además «10,9 (rango 8,3-12,5)», una cifra que no cuadra con la anterior y que el texto no explica. **Resuelto en la auditoría cruzada:** es la mediana de los promedios de cada una de las 53 mujeres, y 8,3-12,5 son su mínimo y su máximo (tabla 2, análisis entre mujeres; ver `audit-01`, §2). | [V] |
| **Wilcox, Dunson y Baird 2000**, BMJ 321:1259, PMC27529 | 221 mujeres y 696 ciclos, con metabolitos urinarios | Solo como dispersión: *«Among the 69 cycles for 28 days… ovulation occurred 14 days before the next menses in only 10%»*. *«Time from ovulation to next menses ranged from 7 to 19 days»*. Solo ~30 % de mujeres tiene la ventana fértil entera entre los días 10 y 17. | [V] |
| **ACOG**, FAQ «Fertility Awareness-Based Methods» | Material para pacientes | «14 days (but can vary between 12 days and 15 days) before» la regla | [NV]: copia en la web de una clínica privada; no pude abrir acog.org. **Auditoría cruzada:** JUA-10 ya leyó la FAQ de ACOG (revisada en 02-2025), que sitúa la ovulación «alrededor de 14 días antes de la próxima menstruación» en un ciclo promedio de 28 días (`../jua-10/01-cycle-phases.md`, referencia [2]). El matiz «12 a 15» sigue sin verificar. |
| **RCOG** | — | No he encontrado ningún documento que trate el momento de la ovulación | [NV] |
| **FSRH CEU**, «Fertility Awareness Methods» (2015) | Guía clínica | No pude abrir el texto | [NV] |
| Fertility UK, guía de 2024 (no es sociedad científica) | Divulgación | Fase posovulatoria «constant (10-16 days)», según el buscador | [NV] |

**Lectura conjunta.** Las medias medidas con LH o con BBT+LH quedan entre **12,4 y 12,8 días** (Bull, Soumpasis y, como dato secundario, Fehring). Con moco cervical, la mediana es **12** (Najmabadi). La única media de 14 viene de Lenton, que **excluye las lúteas cortas**. La ASRM da 12-14 días como lo típico y 11-17 como rango. **Ninguna fuente primaria pone la mediana en 10.**

---

## 3. Análisis cuantitativo

### 3.1 ¿Qué proporción de ciclos tiene LP ∈ [10, 16] (la ventana del motor)?

La aproximación normal usa corrección de continuidad: P(9,5 < X < 16,5). Los cálculos se hicieron con Python usando Φ(z) = ½(1 + erf(z/√2)).

| Distribución | z inferior | z superior | **LP 10-16** | LP < 10 | LP > 16 |
|---|---|---|---|---|---|
| Najmabadi 2020, **empírica** | — | — | **78,0 %** (= 100 − 18,1 − 3,9) | 18,1 % | 3,9 % |
| Najmabadi, normal 11,7 ± 2,8 | −0,79 | 1,71 | 74,1 % | 21,6 % | 4,3 % |
| Bull 2019, normal 12,4 ± 2,4 | −1,21 | 1,71 | **84,3 %** | 11,3 % | 4,4 % |
| Soumpasis 2020, normal 12,77 ± 1,86 | −1,76 | 2,01 | **93,8 %** | 3,9 % | 2,2 % |
| Fehring 2006 [NV], normal 12,4 ± 2,0 | −1,45 | 2,05 | 90,6 % | 7,4 % | 2,0 % |
| Cole 2009 [NV], normal 13,2 ± 2,0 | −1,85 | 1,65 | 91,8 % | 3,2 % | 4,9 % |
| Lenton 1984, normal 14,13 ± 1,41 (sin lúteas cortas) | −3,28 | 1,68 | 95,3 %* | 0,1 %* | 4,6 % |
| Henry 2024, QBT, empírica | — | — | ~73 % (495 de 676) | ~27 % | 0 % |

\*Lenton deja fuera el 5,2 % de lúteas cortas, así que la cobertura real es menor (≈ 0,953 × 0,948 + parte de las cortas ≈ 90 %; estimación propia).
Comprobación del ajuste normal en Bull: predice P(LP < 11) = Φ((10,5 − 12,4)/2,4) = Φ(−0,79) ≈ 21 %, frente al 18 % observado. La normal sobrestima un poco la cola corta.

**Conclusión:** como **rango de incertidumbre**, [L−16, L−10] cubre aproximadamente **el 78-94 % de los ciclos** con los datos de LH y moco. Es un rango razonable: ni muy ancho ni muy estrecho. Cae a ~73 % con QBT, pero ese método acorta la lútea por diseño. Lo que se queda fuera está sobre todo en la **cola corta** (LP < 10: 4-18 %). La cola larga (LP > 16) es menor (2-5 %). Wilcox (rango de 7 a 19 días) confirma que hay ciclos fuera del rango en los dos extremos.

### 3.2 ¿Está sesgada la regla?

- **Centro de la ventana**: L−13, que corresponde a LP = 13. Las medias primarias con LH están entre 12,4 y 12,8 y la mediana con moco es 12. El centro está **≈0,5-1 día desplazado hacia una lútea larga**, un sesgo pequeño y compatible con el 12-14 de la ASRM.
- **Extremo usado para pintar la lútea**: LP = 10. Aquí está el problema. El motor no pinta la lútea según el centro, sino desde el **final** de la ventana:
  - LP = 10 es exactamente el umbral de la ASRM para la deficiencia de fase lútea (*«≤10 days»*). Lenton califica como anormales el 74 % de las lúteas de 10 días.
  - Con Najmabadi (P25 = 10), al menos el 75 % de los ciclos tiene LP ≥ 10, y la mayoría la tiene > 10. Con Bull (normal), P(LP ≥ 10,5) ≈ 79 %. En **~4 de cada 5 ciclos, la lútea pintada es más corta que la real**.
  - Desfase para una lútea en la mediana: si LP = 12 (Najmabadi), la lútea real empieza en L−11, así que **2 días lúteos se pintan como «ovulatoria»**. Si LP = 12,4-12,8 (Bull/Soumpasis), son unos 2,5-3 días. Si LP = 14 (Lenton/ASRM), son 4 días.

### 3.3 La incoherencia de fondo: una ventana de 7 días pintada como fase exclusiva

La ovulación es un acontecimiento puntual, y [L−16, L−10] describe **dónde podría estar ese acontecimiento**. El motor, en cambio, la convierte en un **segmento de 7 días que excluye a las demás fases**. Esto tiene tres consecuencias:
1. Los 7 días de la «ovulatoria» se restan a la folicular y a la lútea. En L = 28 ocupan el **25 % de la rueda** (7/28).
2. Como la lútea empieza al acabar la ventana, la lútea pintada es siempre **L − (L−10) = 10 días**. Esto choca con la mediana de 12-13 días, con el «12-14 típico» de la ASRM y con el comentario del propio código («La fase LÚTEA es más estable»).
3. La folicular pintada queda en **L − 16 − P días**. Con L = 28 y P = 5 son 6 días. Con L = 21 y P = 5 la folicular **desaparece** (el código lo admite: `isEmpty`) y la ventana se recorta a [6, 11]. En los ciclos cortos la lútea pintada sigue en 10 días, aunque Bull indica que en ciclos muy cortos la lútea real es más corta. Esto es correcto en sentido, pero no lo modela.

### 3.4 Errores de documentación detectados en el comentario de `cycle.js`

- «Human Reproduction 2024: … mediana 10,9 días (rango 8,3-12,5)». La cifra es de **QBT**, un método que acorta la lútea unos 2,4 días respecto a la LH. El rango por ciclo publicado es 3,0-16,0; 8,3-12,5 es el rango de los promedios por mujer, no de los ciclos (`audit-01`, §2). **No debe usarse como argumento** de una lútea típica de 10 días.
- «Regla correcta (NHS)». El NHS dice «around» e «in most women», y su revisión está vencida desde el 05-01-2026. Hay que matizarlo y atribuir los parámetros a fuentes primarias.
- El dato de Bull «Solo el 13 % de los ciclos dura exactamente 28 días» está [V] y es correcto.

---

## 4. Dictamen

**AJUSTAR.** El rango 10-16 días como **banda de incertidumbre** está bien apoyado (cubre ~78-94 %), así que puede mantenerse como encuadre siempre que se cite con los matices del NHS y con fuentes primarias. Lo que hay que **sustituir** es convertir esa banda en una fase exclusiva de 7 días y pintar la lútea desde su extremo corto (10 días, en el umbral de deficiencia lútea). Así la rueda contradice la evidencia que cita el propio código.

---

## 5. Reglas propuestas

En ambas reglas, la rueda sigue siendo una **estimación educativa** con el texto «aproximadamente»/«estimado». No hay predicción de días fértiles ni de «días seguros».

### Regla A (recomendada): punto central + banda superpuesta, sin fase ovulatoria exclusiva

- **Ovulación estimada**: O* = L − 13, es decir, LP = 13.
  - Fuentes: centro del 12-14 típico de la ASRM 2026 [V]; centro del «around 10 to 16» del NHS [V]; queda entre las medias con LH de 12,4-12,8 [V] y la de Lenton, 14,1 [V-abs].
  - Si se prefiere ajustarse a los datos de LH y moco, O* = L − 12 (Najmabadi, mediana 12 [V]; Bull, media 12,4 [V]). La diferencia es de 1 día.
- **Banda de incertidumbre**: [L−16, L−10] (LP 10-16, NHS [V]), pintada como **sombreado o trama encima** de folicular y lútea, no como segmento propio. Cobertura: ~78 % (Najmabadi, empírica) a ~94 % (Soumpasis).
- **Segmentos de la rueda**: menstruación [1, P]; folicular [P+1, O*]; lútea [O*+1, L] = **13 días** (12 si O* = L−12). La ovulación se muestra como un **marcador** en el límite.
- **Ejemplo con L = 28 y P = 5**: menstruación 1-5 (17,9 %), folicular 6-15 (35,7 %), lútea 16-28 (46,4 %); banda sombreada 12-18 y marcador en el día 15.
  - Hoy son 5/6/7/10 días; con esta regla, 5/10/—/13.
- **Ejemplo con L = 21 y P = 5**: folicular 6-8 y lútea 9-21. La folicular deja de desaparecer. La banda se recorta a [6, 11].
- **Ejemplo con L = 35**: folicular hasta el día 22, lútea 23-35 y banda 19-25.
- **Efecto en la fase lútea mostrada**: pasa de 10 a 13 días, un valor coherente con la ASRM, Bull y Soumpasis. La incertidumbre se ve en la banda, no deformando las fases.

### Regla B (cambio mínimo en el código): segmento periovulatorio corto y centrado

Para quien quiera mantener las cuatro fases exclusivas que usa `phaseBoundaries()`:
- `OVULATION_BEFORE_NEXT_PERIOD = { earliest: 14, latest: 12 }` → ventana [L−14, L−12] de 3 días, centrada en L−13 (LP = 13).
- **Cobertura del segmento** (LP 12-14): 46 % (Bull), 53 % (Fehring [NV]), 58 % (Soumpasis), 37 % (Najmabadi, normal). Por eso **no debe presentarse como «la ventana»**. Hay que llamarlo «momento estimado de la ovulación (± 1 día)» y explicar en el texto que en la mayoría de las personas ocurre entre 10 y 16 días antes de la regla.
- **Lútea pintada**: [L−11, L] = **12 días**, igual a la mediana de Najmabadi y cercana a la media de Bull.
- **Ejemplo con L = 28 y P = 5**: menstruación 1-5, folicular 6-13 (8 d), periovulatoria 14-16 (3 d, 10,7 % de la rueda en lugar del 25 %), lútea 17-28 (12 d).
- **Ejemplo con L = 21**: folicular 6, periovulatoria 7-9, lútea 10-21.

### Ficha por regla: valor central, incertidumbre y personalización

Que la rueda use un valor central no significa que lo presente como un dato.

| | **Regla A** | **Regla B** |
|---|---|---|
| **1) Valor central de la rueda** | Lútea de **13 días** (O* = L−13). Fuentes: centro del 12-14 típico de la ASRM 2026 [V] y del 10-16 del NHS [V]. Alternativa basada en datos: **12 días**, con Najmabadi (mediana 12 [V]) y Bull (media 12,4 [V]). | Lútea de **12 días**, con Najmabadi (mediana 12 [V]) y Bull (media 12,4 [V]), más un tramo periovulatorio de 3 días centrado en L−13. |
| **2) Rango e incertidumbre** | Rango habitual de 10 a 16 días para «días entre ovulación y regla»: NHS [V] y P(10-16) ≈ 78 % (Najmabadi, empírico) a 94 % (Soumpasis). El rango intercuartílico es 10-13 (Najmabadi [V]); el IC 95 % de Bull es 7-17 [V]. | Igual que en A. El tramo de 3 días solo cubre ~37-58 %, así que **no** se presenta como rango. |
| **Cómo mostrarlo sin aparentar precisión** | Límite folicular/lútea **con degradado** a lo largo de la banda L−16…L−10, sin línea neta. Un marcador «≈» en vez de un punto. Frase propuesta: *«La fase lútea suele durar entre 10 y 16 días; aquí la dibujamos con unos 13. En cada persona y en cada ciclo puede variar.»* Nada de fechas de ovulación con día exacto en el texto: usar «hacia mediados de la segunda quincena del ciclo», o «estimación: ~día 15 ± 3» si se muestra un número. | Bordes del tramo periovulatorio **difusos** (degradado de 1-2 días por lado). Frase: *«La ovulación suele ocurrir entre 10 y 16 días antes de la siguiente regla; este tramo marca solo el punto medio estimado.»* La lútea se rotula «≈12 días». |
| **3) Qué cambiaría con ciclos confirmados de la persona** | (a) **L**: pasar del valor declarado a la mediana de sus duraciones registradas. Esto desplaza toda la estimación, porque se ancla en la siguiente regla. (b) **Ancho de la banda**: ensancharla según la variabilidad de sus ciclos (DE propia de la duración). Cuanto más irregular sea, más ancha la banda y más tenue el límite. (c) **Lútea central (13)**: **no cambia** con fechas de regla solas, porque no permiten saber cuándo ovuló. Solo se podría personalizar con datos de ovulación que la app hoy no recoge ni debe promover como método. Henry 2024 [V] respalda mantenerla estable: dentro de la misma mujer, la folicular varía más que la lútea. | (a) y (b) iguales que en A: L personal y desenfoque de los bordes según su variabilidad. (c) La lútea de 12 tampoco cambia sin datos de ovulación. Con mucha irregularidad (por ejemplo, ciclos que varían ≥ 7-9 días), conviene que el tramo periovulatorio pase a mostrarse como banda difusa (Regla A), porque un tramo de 3 días daría una falsa precisión. |

Nota: el umbral concreto de irregularidad y la DE intraindividual de 2,6 días que usa el código (atribuida a Bull) **no los he verificado** en esta auditoría. Hay que confirmarlos antes de fijarlos.

### Variante opcional para las dos reglas (ciclos cortos)

Bull [V] indica que la lútea se acorta en los ciclos muy cortos (8,0 d en ciclos de 15-20 días, fuera del rango de la app) y apenas cambia en los largos. Con la cota inferior de 21 días, **no recomiendo** modelar todavía esa dependencia: no he verificado cifras por cada duración entre 21 y 24 días.

### Textos y fuentes que conviene actualizar en el comentario del código

Sustituir «Regla correcta (NHS)» por algo como: «Estimación: ovulación ~13 días antes de la siguiente regla (rango habitual 10-16; ASRM 2026, Bull 2019, Soumpasis 2020, Najmabadi 2020; NHS como divulgación)». Retirar la cifra «mediana 10,9 (8,3-12,5)» de Henry 2024 o aclarar que procede de QBT.

---

## 6. Pendiente de verificar

- Versiones archivadas del NHS (web.archive.org estaba bloqueado).
- Fehring 2006 y Cole 2009: confirmar las cifras lúteas en el texto original (solo las tengo por Henry 2024).
- ACOG FAQ, FSRH 2015 y RCOG: no pude abrir los textos oficiales.
- Lenton 1984: solo leí el resumen. La diferencia entre 14,13 ± 1,41 (resumen) y 14,3 (IC 11,3-17,0) (cita de Henry) está sin resolver.

## Fuentes consultadas

- NHS: https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/
- ASRM 2026: https://www.asrm.org/practice-guidance/practice-committee-documents/diagnosis-and-treatment-of-luteal-phase-deciency-a-committee-opinion/ ; https://rrmacademy.org/library/diagnosis-and-treatment-of-luteal-phase-deficiency-a-committee-opinion-wigd1zhn/
- Lenton 1984: https://rrmacademy.org/library/normal-variation-in-the-length-of-the-luteal-phase-of-the-menstrual-cycle-identi-rec5wo2bhylu8qonu/ (PMID 6743610)
- Fehring 2006: https://epublications.marquette.edu/nursing_fac/11
- Najmabadi 2020: https://pmc.ncbi.nlm.nih.gov/articles/PMC8495765/
- Bull 2019: https://pmc.ncbi.nlm.nih.gov/articles/PMC6710244/
- Soumpasis 2020: https://academic.oup.com/hropen/article/2020/2/hoaa011/5820371
- Henry 2024: https://academic.oup.com/humrep/article/39/11/2565/7775370
- Wilcox 2000: https://pmc.ncbi.nlm.nih.gov/articles/PMC27529
