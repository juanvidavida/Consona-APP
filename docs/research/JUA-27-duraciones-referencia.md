# JUA-27 — Duraciones de referencia por fase y regla de la ventana ovulatoria

**Versión:** 1.0.0
**Fecha de verificación de fuentes:** 28-10-2026
**Estado:** propuesta para revisión. Las cifras están auditadas; las decisiones de producto de la sección 0 son del 28-10-2026. Los cambios a la especificación del panel (sección 8) están pendientes de aprobación.
**Issue:** [JUA-27](https://linear.app/juan-vidaechea/issue/JUA-27). Insumo de JUA-25 (RU-05, RU-05b), JUA-23 (IT-01 a IT-03, ME-01) y CON-032.
**Material de apoyo:** [`jua-27/`](jua-27/README.md), con cinco auditorías detalladas por eje de evidencia.

> Este documento es **educativo, no diagnóstico**. Ninguna cifra describe la duración de una persona concreta ni funciona como umbral clínico. No habilita la predicción de fertilidad, los «días seguros», la detección de deficiencia lútea ni la clasificación de SPM o TDPM.

---

## 0. Dictamen y decisiones

1. **Fase lútea de referencia: 12 días.** Es la mediana con marcador de ovulación (Najmabadi 2020: mediana 12, RIC 10–13; Bull 2019: 12,4 ± 2,4; Soumpasis 2020: 12,77 ± 1,86) y el extremo inferior del intervalo típico de ASRM 2026 (12–14). *Decisión de producto del 28-10-2026.*
2. **Regla de la ventana ovulatoria: ajustada.** El rango de 10 a 16 días antes de la siguiente regla se mantiene como **banda de incertidumbre**, pero deja de pintarse como fase. La ventana pintada pasa a ser `[L−14, L−12]`, un segmento estrecho y de bordes difusos. La lútea pintada pasa de 10 a 12 días (sección 3). *Decisión de producto del 28-10-2026: se mantiene RU-01, con sus cuatro rótulos.*
3. **Duración del sangrado por defecto: 5 días.** Es la mediana de BioCycle y coincide con el valor por defecto del motor. «Días 1 a 3» queda como referencia editorial de los **primeros días, de más flujo**, no como duración de la menstruación (sección 6). *Decisión de producto del 28-10-2026; obliga a cambiar ME-01 y RU-05b (sección 8).*
4. **Días previos a la menstruación: 7 días**, del −7 al −1 respecto del inicio previsto. Es una convención de calendario (Schmalenberger 2021; C-PASS 2017), nunca un criterio diagnóstico (sección 5).
5. **Rueda de referencia (RU-05b)** para un ciclo de 29 días: menstruación 5, folicular 9, ventana 3 y lútea 12. Es coherente con las medianas de Najmabadi: ciclo 29 = folicular 17 + lútea 12 (sección 4).
6. **Se corrigen tres afirmaciones del motor histórico.** La cifra de Henry 2024 estaba mal leída, la prueba de una lútea de 9 a 11 días era errónea y la regla se atribuía al NHS como «regla correcta». El parche está en el motor histórico, con sus pruebas (sección 7).

---

## 1. Método

- **Cinco auditorías en paralelo**, una por eje de evidencia:
  - cohortes con marcador de ovulación;
  - grandes bases de datos de apps y variación con la edad;
  - sangrado y primeros días;
  - regla de la ventana ovulatoria;
  - días previos a la menstruación.

  Después, una **auditoría cruzada** resolvió las discrepancias entre informes. Las resoluciones están anotadas en cada auditoría.
- **Verificación:** se leyó cada cifra en el texto primario (PMC, Europe PMC o la web de la revista). Marcas usadas:
  - **[V]:** verificado en texto completo.
  - **[V-abs]:** solo en el resumen oficial.
  - **[NV]:** solo por cita secundaria; no se usa como base de ninguna decisión.
- **Etiquetas de evidencia:** las mismas de JUA-10 (`jua-10/01-cycle-phases.md`), sin conversión a GRADE.
  - **Consenso clínico:** formulación coincidente de organismos clínicos.
  - **Moderada:** estudio observacional informativo con límites de generalización.
  - **Limitada:** evidencia indirecta o de población selecta.
- **Convención de fase lútea:** días desde el día siguiente a la ovulación estimada (O+1) hasta el último día del ciclo. Es la convención de Bull 2019 y Najmabadi 2020, en la que folicular más lútea suman el ciclo.
- **Diferencias de método que se declaran:** con temperatura basal, la fase lútea sale unos 2 días más corta que con LH, porque la subida de temperatura llega de media 2,4 ± 1,5 días después del pico de LH (Henry 2024). Tampoco se mezclan duraciones de sangrado con y sin manchado.

---

## 2. Tabla de referencia

Valores que Consona puede usar como **referencia general** mientras no haya datos declarados o confirmados de la persona (RU-05b, DA-06).

| Duración | Valor de referencia | Estadístico | Dispersión | Fuente principal | Población | Fecha | Límite de uso |
|---|---|---|---|---|---|---|---|
| **Ciclo completo** | 29 días | mediana | RIC 27–32 (Najmabadi); en Apple, mediana 28 con RIC 26–30 y P5–P95 22–38 | Najmabadi 2020 [V]; Li K 2020 (Clue), mediana 29 [V]; Li H 2023 (Apple WHS), mediana 28 [V]; Bull 2019, media 29,3 ± 5,2 [V] | Adultas de 18 a 45 años sin anticoncepción hormonal; usuarias de apps o de un método de planificación natural; mayoritariamente blancas | 2019–2023 | Solo se usa si la persona no declara su duración. Solo el 13 % de los ciclos mide 28 días. No es un rango de normalidad individual. |
| **Sangrado (duración)** | 5 días | mediana | DE 1,5; rango 1–16. Entre fuentes, de 4 (sin manchado) a 6 (con días leves) | Dasharathy 2012 (BioCycle) [V-abs]; Bull 2019, 4,0 ± 1,5 [V]; Najmabadi 2020, mediana 6 [V]; Clue, mediana 4 [V] | 201 mujeres de 18 a 44 años (BioCycle); cohortes y apps citadas | 2012–2020 | Depende de cómo se cuente el manchado. FIGO considera normal hasta 8 días: ninguna duración ≤8 se presenta como anómala. |
| **Primeros días (más flujo)** | días 1 a 3 | concentración de la pérdida | ≈90 % de la pérdida de sangre en los 3 primeros días; el día 2 suele ser el más intenso | Haynes 1977, 92 % [V-abs]; Rybo 1966, 91 % [NV, vía MRG 2004]; BioCycle, día 2 [V-abs] | Mujeres británicas y suecas, medición química (años 60–70); BioCycle | 1966–2012 | Es una referencia editorial de «primeros días». **No** es la duración de la menstruación. |
| **Fase folicular (incluye la menstruación)** | 17 días | mediana | RIC 15–20 (Najmabadi); en Bull, 16,9 ± 5,3 | Najmabadi 2020 [V]; Bull 2019 [V]; Symul 2019, mediana 16 [V] | Ver ciclo completo | 2019–2020 | Es la fase que más varía, entre personas y entre ciclos. La app la obtiene por diferencia; no la muestra como cifra. |
| **Fase lútea** | 12 días | mediana | RIC 10–13; típica 12–14 y rango 11–17 (ASRM); en Bull, 12,4 ± 2,4 | Najmabadi 2020 [V]; Bull 2019 [V]; Soumpasis 2020, 12,77 ± 1,86 [V]; ASRM/SREI 2026 [V] | Moco cervical, LH urinaria o temperatura basal con LH | 2019–2026 | La app no puede medirla con fechas de regla. Una duración no diagnostica deficiencia lútea: ≤10 días no se usa como umbral (JUA-10, audit-02). |
| **Ventana ovulatoria estimada (segmento pintado)** | `[L−14, L−12]`, 3 días | intervalo típico | contiene la ovulación en ~37–58 % de los ciclos | ASRM 2026, 12–14 [V]; coberturas calculadas con Bull, Soumpasis y Najmabadi (audit-04 §5) | — | 2026 | Por su baja cobertura, **nunca** se presenta como «la ventana» ni como días fértiles. Lleva bordes difusos y la explicación de la banda. |
| **Banda de incertidumbre ovulatoria** | `[L−16, L−10]`, 7 días | rango habitual | contiene la ovulación en ~78 % (Najmabadi, empírico) a ~94 % (Soumpasis, modelo normal) de los ciclos | NHS («around 10 to 16 days», revisada el 05-01-2023) [V]; coberturas: audit-04 §3.1 | — | 2023 | No es una fase. Se usa para explicar que la estimación es probable, no exacta. |
| **Días previos a la menstruación** | 7 días (−7 a −1) | convención | — | Schmalenberger 2021 §5.2.2 [V]; Eisenlohr-Moul 2017 (C-PASS) [V]; DSM-5, «final week» [V, en reproducción] | Investigación sobre el ciclo; clasificaciones | 2013–2021 | Convención de calendario. **Nunca** «X días antes = SPM». No cambia las tarjetas. |
| **Variación entre ciclos de la misma persona** | 2,6 días | media de las DE individuales | DE 2,5. Apple: de 3,8 a 5,3 días entre los 18 y los 44 años | Bull 2019 [V]; Li H 2023 [V] | Bull: solo ciclos ovulatorios; Apple: todos los ciclos | 2019–2023 | Probablemente subestima la variabilidad real. No es un umbral de normalidad. Revisarla en CON-032. |

---

## 3. Regla de la ventana ovulatoria: auditoría y ajuste

### 3.1 Regla auditada

El motor histórico (`cycle.js`, constante `OVULATION_BEFORE_NEXT_PERIOD = { earliest: 16, latest: 10 }`) pintaba la ventana ovulatoria en `[L−16, L−10]` y la lútea en `[L−9, L]`. La atribuía al NHS como «regla correcta». Una prueba fijaba que «la fase lútea dura siempre entre 9 y 11 días».

### 3.2 Hallazgos

| Hallazgo | Evidencia |
|---|---|
| El NHS dice «**around** 10 to 16 days», «**in most women**», tras advertir que «It's difficult to pinpoint exactly when ovulation happens». La página no cita bibliografía y su revisión está vencida desde el 05-01-2026. | audit-04 §1 [V] |
| Como **banda**, `[L−16, L−10]` es razonable: contiene la ovulación en el 78–94 % de los ciclos. Lo que queda fuera es sobre todo la cola corta (lútea <10 días: del 4 al 18 %). | audit-04 §3.1 |
| Como **fase pintada**, es un error: la lútea queda en **10 días** en cualquier ciclo, justo el umbral de deficiencia lútea de ASRM 2026 (≤10). En ~4 de cada 5 ciclos la lútea real es más larga. | audit-04 §3.2 |
| La ventana ocupa el 25 % de la rueda en un ciclo de 28 días, y en uno de 21 la fase folicular desaparece. | audit-04 §3.3 |
| La cifra «Human Reproduction 2024: mediana 10,9 (8,3–12,5)» estaba mal leída. Es la mediana de los **promedios de 53 mujeres**, medida con temperatura basal. Por ciclo, la mediana es 11 y el rango va de 3 a 16. | audit-01 §2 [V] |
| La única media lútea de 14 días (Lenton 1984) **excluye por construcción** las lúteas cortas. | audit-01 §3 [V-abs] |

### 3.3 Regla ajustada

| Elemento | Regla | Fuente del parámetro |
|---|---|---|
| Fase lútea pintada | `[L−11, L]` = 12 días | Mediana de Najmabadi 2020; Bull 2019 y Soumpasis 2020 |
| Ventana ovulatoria pintada | `[L−14, L−12]`: lútea de 12 a 14 días; termina el día de ovulación estimado | Intervalo típico de ASRM 2026 |
| Banda de incertidumbre | `[L−16, L−10]`: lútea de 10 a 16 días; sin invadir el sangrado | NHS como encuadre; coberturas de audit-04 |
| Fase folicular | `[P+1, L−15]` | Por diferencia |

| Ciclo y sangrado | Antes (menstr. / folic. / ventana / lútea) | Ahora | Banda |
|---|---|---|---|
| 21 días, 5 de sangrado | 1–5 / vacía / 6–11 / 12–21 | 1–5 / 6 / 7–9 / 10–21 | 6–11 |
| 28 días, 5 de sangrado | 1–5 / 6–11 / 12–18 / 19–28 | 1–5 / 6–13 / 14–16 / 17–28 | 12–18 |
| 29 días, 5 de sangrado | 1–5 / 6–12 / 13–19 / 20–29 | 1–5 / 6–14 / 15–17 / 18–29 | 13–19 |
| 35 días, 5 de sangrado | 1–5 / 6–18 / 19–25 / 26–35 | 1–5 / 6–20 / 21–23 / 24–35 | 19–25 |

### 3.4 Cómo se muestra sin aparentar precisión

Este apartado responde al criterio de producto: una lútea con una duración útil para la rueda, explicada como dato probable y no exacto.

- **Rueda (RU-05):** la ventana se pinta como un segmento corto con **bordes difusos**, de 1 a 2 días por lado. No hay línea neta entre folicular y lútea. El rótulo sigue siendo «Ventana ovulatoria estimada» (RU-03).
- **Texto de «Cómo funciona» (propuesta):** «La ovulación suele ocurrir entre 10 y 16 días antes de la siguiente regla. La rueda marca solo el punto medio estimado, y la fase lútea se dibuja con unos 12 días. En cada persona y en cada ciclo puede variar; con fechas de regla no se puede saber cuándo ocurrió.»
- **Nunca:** «día de ovulación», «días fértiles», «días seguros», cuentas regresivas exactas ni una fecha de ovulación con día concreto.

### 3.5 Efecto sobre el motor (CON-032) y la rueda (RU-05)

- **Qué debe exponer el motor:** los límites de las cuatro fases (sin cambios de forma) y, aparte, la banda ovulatoria y el tramo de días previos (`uncertaintyBands()`). Así cumple la sección 211 de la especificación del panel: límites estimados «con su incertidumbre».
- **Con ciclos confirmados de la persona:**
  - La duración del ciclo pasa a ser la suya, y toda la estimación se desplaza, porque se ancla en la siguiente regla.
  - Las bandas pueden ensancharse según su variabilidad.
  - **La lútea de 12 días no se personaliza:** las fechas de regla no dicen cuándo se ovuló. Henry 2024 respalda que la lútea es más estable que la folicular dentro de la misma persona.
- **Pendiente para CON-032:** revisar la DE intrapersonal de 2,6 días (sección 2), que alimenta el margen de error y la caducidad.

---

## 4. Rueda de referencia (RU-05b)

Si la persona no ha declarado duraciones y no hay ciclos confirmados suficientes, la rueda usa las medianas de referencia. Para un ciclo de 29 días:

| Segmento | Días | Duración | Proporción | Fuente |
|---|---|---|---|---|
| Menstruación | 1–5 | 5 | 17 % | BioCycle, mediana 5 |
| Fase folicular | 6–14 | 9 | 31 % | Por diferencia; con la menstruación y la ventana suma 17, la mediana folicular de Najmabadi |
| Ventana ovulatoria estimada | 15–17 | 3 | 10 % | ASRM 2026, 12–14 |
| Fase lútea | 18–29 | 12 | 41 % | Najmabadi, Bull, Soumpasis |

«Cómo funciona» y la descripción accesible deben decir que es una **referencia general, no la duración en esta persona** (RU-05b).

---

## 5. Días previos a la menstruación (IT-01 a IT-03; JUA-23)

- **Duración:** 7 días, del −7 al −1 respecto del día 1 previsto. El día 1 queda fuera.
- **Por qué 7:**
  - Es la «semana premenstrual» operativa de la investigación (Schmalenberger 2021 §5.2.2 y C-PASS 2017, los dos [V]). Schmalenberger advierte que esa semana se define «by their relative position to menstruation, rather than with reference to a measurable hormonal change or status». Es exactamente el uso de Consona.
  - Coincide con la unidad «final week before the onset of menses» del DSM-5, tomada **solo como unidad de tiempo**.
  - Es más robusta ante el error de la fecha prevista. Con una DE de 2,6 días, el tramo previsto y el real coinciden de media en el 71 % de los días con 7 días, frente al 60 % con 5 (audit-05 §5; modelo ilustrativo y optimista).
- **Qué se descarta:** los 5 días de los criterios antiguos de ACOG, por ser un criterio diagnóstico, y la «fase premenstrual de 2 semanas» de la ISPMD, que diluiría el sentido de «días previos».
- **Texto de apoyo (IT-02, propuesta):** «Calculado a partir de las fechas registradas: abarca aproximadamente la semana anterior a la fecha prevista de la menstruación. La fecha real puede adelantarse o retrasarse unos días.»
- **Reglas de borde (decisión de producto, sin fuente):** el tramo termina en cuanto se registra el inicio real del sangrado. Si la fecha prevista pasa sin registro, el tramo no se prolonga; el comportamiento concreto lo fija CON-032 (ME-04).
- **Coherencia:** el tramo cae dentro de la lútea pintada de 12 días y **no cambia las tarjetas** (H-01; JUA-16 no se altera).

---

## 6. Primeros días del ciclo y duración del sangrado (ME-01; JUA-23)

- **«Días 1 a 3» como duración de la menstruación no se sostiene.** La duración típica ronda los 5 días, y 3 días queda por debajo del percentil 5 de la referencia de normalidad (Fraser 2007, tabla VII: 4,5–8 días; atribución de la tabla muy probable, pero sin confirmar en la página leída). Mostrar `Fase folicular` desde el día 4 diría a muchas personas que ya no menstrúan cuando todavía sangran.
- **«Días 1 a 3» sí se sostiene como «primeros días, de más flujo».** En esos días se concentra ≈90 % de la pérdida, y el día 2 suele ser el más intenso.
- **Decisión:** la duración por defecto pasa a ser **5 días**. Los datos declarados de la persona prevalecen siempre (DA-06).
- **Formulación para las tarjetas:** «los primeros días, cuando el flujo suele ser mayor», no «los días de la regla».

---

## 7. Límites de uso por edad y situación

| Situación | Uso de las referencias | Fuente |
|---|---|---|
| 25 a 40 años | Es donde las medianas son más representativas: el ciclo es más estable y la variabilidad, mínima. | Bull 2019 tabla 2; Apple WHS tabla 4 [V] |
| 18 a 24 años | Se usan, pero la explicación menciona que es habitual algo más de variación: ciclos de 1 a 2 días más largos y DE intrapersonal mayor. | Bull 2019; Apple WHS [V] |
| 40 a 45 años | La folicular se acorta y la variación vuelve a crecer; la mediana pierde utilidad individual. | Bull 2019; Apple WHS [V] |
| Desde ~45 años, o ante el patrón de STRAW+10 (diferencia persistente de 7 días o más entre ciclos, o 60 días o más sin regla) | No presentar medianas poblacionales como referencia. Consona no etiqueta etapas reproductivas. | Harlow 2012 (STRAW+10) [V]; Apple WHS [V] |
| Anticoncepción hormonal, embarazo, lactancia o ciclos anovulatorios | Las referencias no aplican: lo resuelven los estados excepcionales de la sección 5 de la especificación del panel. | JUA-10 |

---

## 8. Cambios propuestos a la especificación del panel v1.1.0

Pendientes de aprobación y de versionado de la especificación (v1.1.1 o v1.2.0). **No se han aplicado.**

| Requisito | Texto actual (resumen) | Cambio propuesto |
|---|---|---|
| ME-01 | Sin duración declarada, `Menstruación` ocupa los días 1 a 3. | Sin duración declarada, `Menstruación` ocupa los días **1 a 5** (BioCycle; JUA-27 §6). |
| RU-05b | La menstruación ocupa los días 1 a 3; las demás fases usan medianas con fuente auditada (JUA-27). | La menstruación ocupa los días 1 a 5; folicular, ventana y lútea siguen la sección 4 de este documento. |
| RU-05 | La ventana ovulatoria y la lútea se cuentan hacia atrás desde el siguiente inicio previsto. | Precisar: ventana `[L−14, L−12]` con bordes difusos y lútea de 12 días; la banda `[L−16, L−10]` se explica, no se pinta como fase. |
| IT-01 | Tramo estimado que precede a la siguiente menstruación (sin duración). | Tramo de **7 días** (−7 a −1), convención de calendario (JUA-27 §5). |

---

## 9. Pendiente de verificar en fuente primaria

Nada de lo siguiente sostiene una decisión de este documento. Se verificará si una revisión clínica lo pide.

- Fehring 2006 y Cole 2009: cifras de fase solo vistas citadas por Henry 2024 y con discrepancias en la n. Lenton 1984: solo resumen.
- Rybo 1966 (n y subgrupo del 91 %), Hallberg 1966 y la atribución de la tabla VII a Fraser 2007.
- DSM-5-TR, CIE-11 en el navegador de la OMS, ACOG CPG 7 (2023), RCOG GTG48 y NICE CKS: los portales devolvieron errores 402 o 403.
- Versiones archivadas de la página del NHS.
- Faust 2019 (Ovia): solo resumen.

---

## Referencias principales

| Fuente | Identificador | Fecha | Verificación |
|---|---|---|---|
| Najmabadi S et al. *Paediatr Perinat Epidemiol* 34(3):318–327 | DOI 10.1111/ppe.12644 · PMC8495765 | 27-02-2020 | [V] |
| Bull JR et al. *npj Digit Med* 2:83 | DOI 10.1038/s41746-019-0152-7 · PMC6710244 | 27-08-2019 | [V] |
| Soumpasis I et al. *Hum Reprod Open* hoaa011 | DOI 10.1093/hropen/hoaa011 · PMC7164578 | 2020 | [V] |
| Henry S et al. *Hum Reprod* 39(11):2565–2574 | DOI 10.1093/humrep/deae215 · PMC11532606 | 2024 | [V] |
| ASRM/SREI Practice Committees. Luteal phase deficiency, Committee Opinion | DOI 10.1016/j.fertnstert.2026.06.014 | 02/07-07-2026 | [V] (JUA-10, audit-02) |
| Wilcox AJ et al. *BMJ* 321:1259 | DOI 10.1136/bmj.321.7271.1259 · PMC27529 | 2000 | [V] |
| Li H et al. (Apple Women's Health Study). *npj Digit Med* 6:100 | DOI 10.1038/s41746-023-00848-1 · PMC10226714 | 29-05-2023 | [V] |
| Li K et al. (Clue). *npj Digit Med* 3:79 | DOI 10.1038/s41746-020-0269-8 · PMC7250828 | 2020 | [V] |
| Symul L et al. *npj Digit Med* 2:64 | DOI 10.1038/s41746-019-0139-4 · PMC6635432 | 2019 | [V] |
| Harlow SD et al. STRAW+10. *Menopause* | DOI 10.1097/gme.0b013e31824d8f40 · PMC3340903 | 2012 | [V] |
| Dasharathy SS et al. (BioCycle). *Am J Epidemiol* 175(6):536–545 | DOI 10.1093/aje/kwr356 · PMC3299419 | 2012 | [V-abs] |
| Munro MG et al. FIGO 2018. *Int J Gynaecol Obstet* 143(3):393–408 | DOI 10.1002/ijgo.12666 | 2018 | [V] (manuscrito aceptado) |
| Fraser IS et al. *Hum Reprod* 22(3):635–643 | DOI 10.1093/humrep/del478 | 2007 | [V] tabla; atribución probable |
| Haynes PJ et al. *Br J Obstet Gynaecol* 84(10):763–768 | DOI 10.1111/j.1471-0528.1977.tb12490.x | 1977 | [V-abs] |
| Schmalenberger KM et al. *Psychoneuroendocrinology* 123:104895 | DOI 10.1016/j.psyneuen.2020.104895 · PMC8363181 | 2021 | [V] |
| Eisenlohr-Moul TA et al. (C-PASS). *Am J Psychiatry* 174(1):51–59 | DOI 10.1176/appi.ajp.2016.15121510 · PMC5205545 | 2017 | [V] |
| NHS. Periods and fertility in the menstrual cycle | nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/ | revisada el 05-01-2023 | [V] |
