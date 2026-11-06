# JUA-27 · B — Duración del ciclo, del sangrado y de las fases en grandes bases de datos digitales, y su variación con la edad

- Fecha de verificación: 28-10-2026
- Uso previsto: Consona, app educativa (no diagnóstica) para adultas de 18 años o más.
- Método de verificación: se descargó el texto completo de cada fuente en XML desde Europe PMC o NCBI PMC (versiones de acceso abierto o manuscrito de autor). Todas las cifras marcadas «Verificado: sí» se leyeron en ese texto primario: tablas, resultados, métodos o resumen. Las figuras (imágenes) y los suplementos no se pudieron leer. Cualquier cifra que solo aparezca en ellos queda como **no verificada**.
- Convención: «DE» es la desviación estándar. «Ciclos ovulatorios» son los ciclos en los que el algoritmo del estudio detectó ovulación. Entrecomillo en inglés las citas textuales breves.

---

## 1. Bull JR et al., 2019 — Natural Cycles (fuente obligatoria 1)

**Referencia.** Bull JR, Rowland SP, Scherwitzl EB, Scherwitzl R, Danielsson KG, Harper J. *Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles.* npj Digit Med. 2019;2:83. DOI: 10.1038/s41746-019-0152-7. Publicado el 27-08-2019 (recibido el 04-03-2019, aceptado el 17-07-2019). PMC6710244. Licencia CC BY 4.0.

**Población (sección «Study population», «Inclusion/exclusion criteria»)**
- Hay 124.648 usuarias según el resumen y 124.646 según las filas «All cycles» de las tablas 2 y 3. Es una pequeña incoherencia interna del artículo.
- Residían «mostly» en Suecia, Reino Unido y EE. UU.
- Edad media 30,3 años (rango 18–45). IMC medio 23,6 (rango 15–50).
- El 80 % usaba la app para evitar un embarazo y el 20 % para buscarlo.
- Criterios de inclusión: registro entre el 01-09-2016 y el 01-02-2019, edad de 18 a 45 años al registrarse, IMC entre 15 y 50, sin anticoncepción hormonal en los 12 meses previos, al menos 10 temperaturas no desviadas y al menos 6 ciclos completos.
- Exclusiones: SOP, hipotiroidismo o endometriosis declarados, y síntomas menopáusicos. Ciclos fuera de 10–90 días, con embarazo, o con temperaturas válidas en menos del 50 % de los días.
- Se partió de 1,4 millones de ciclos. Se excluyeron 665.603 ciclos sin ovulación detectada (el 48 %), la mayoría con pocas mediciones de temperatura. Quedaron **612.613 ciclos ovulatorios**.

**Cómo se detectó la ovulación (sección «Identification of ovulation day»)**
- Un algoritmo propietario analiza la temperatura basal (BBT) sublingual de forma retrospectiva. Usa además las fechas de menstruación y, si existen, tests de LH positivos (opcionales).
- El día estimado de ovulación (EDO) es «the day before the FHP, the day of the last low temperature». FHP (*first high point*) es la primera temperatura alta.
- La fase folicular va del día 1 de la menstruación al EDO, incluido.
- La fase lútea va del día siguiente al EDO hasta el día anterior a la siguiente menstruación.
- El sangrado se define como «the number of consecutive days on which bleeding—not spotting—was recorded». No cuenta el manchado.
- La «per-user cycle length variation» se define como «one standard deviation of a user's cycle lengths».
- El código del algoritmo no es público.

**Cifras globales (tabla 1, fila «All cycles (10–90)», n = 612.613 ciclos; media ± DE)**

| Variable | Valor | Verificado |
|---|---|---|
| Ciclo | 29,3 ± 5,2 días | sí |
| Sangrado | 4,0 ± 1,5 días | sí |
| Fase folicular | 16,9 ± 5,3 días | sí |
| Fase lútea | 12,4 ± 2,4 días | sí |
| Variación intrapersonal (DE de cada usuaria, promediada) | 2,6 ± 2,5 días (tablas 2 y 3) | sí |
| Ciclos de exactamente 28 días | «81,605 cycles (13%) were 28 days long» (sección «Cycle characteristics by cycle length») | sí |
| Ciclos de 28 días: folicular / lútea | 15,4 / 12,6 días | sí |
| Ciclos de más de 50 días | «Less than 1%» | sí |
| Fases lúteas de menos de 11 días | «18% of cycles» (Discusión) | sí |

- **No se informan medianas ni percentiles** del ciclo, de las fases ni del sangrado.
- El resumen escribe «16.9 days (95% CI: 10–30)» y «12.4 days (95% CI: 7–17)». Por su amplitud, esos intervalos describen la dispersión de la distribución, no un intervalo de confianza de la media. No deben citarse como IC.

**Tabla 1 por longitud de ciclo (media ± DE)**

| Ciclo (días) | % de ciclos | Ciclo | Sangrado | Folicular | Lútea |
|---|---|---|---|---|---|
| 15–20 | <1 % | 18,4 ± 1,6 | 3,5 ± 1,5 | 10,4 ± 2,4 | 8,0 ± 2,4 |
| 21–24 | 8 % | 23,4 ± 0,9 | 3,7 ± 1,4 | 12,4 ± 2,2 | 11,0 ± 2,2 |
| 25–30 | 65 % | 27,6 ± 1,6 | 3,9 ± 1,4 | 15,2 ± 2,5 | 12,4 ± 2,2 |
| 31–35 | 19 % | 32,4 ± 1,3 | 4,1 ± 1,5 | 19,5 ± 2,7 | 12,9 ± 2,3 |
| 36–50 | 7 % | 39,8 ± 3,7 | 4,2 ± 1,7 | 26,8 ± 4,5 | 12,9 ± 2,8 |

La diferencia en la duración del ciclo se debe sobre todo a la fase folicular: «Cycle length differences were found to be predominantly caused by follicular phase length differences» (Discusión).

**Tabla 2 por edad (media ± DE)**

| Edad | Usuarias | Ciclos | Ciclo | Sangrado | DE intrapersonal | Folicular | Lútea |
|---|---|---|---|---|---|---|---|
| 18–24 | 13.391 | 50.789 | 30,3 ± 5,7 | 4,2 ± 1,4 | 2,9 ± 2,7 | 18,0 ± 5,7 | 12,2 ± 2,5 |
| 25–29 | 43.297 | 209.968 | 29,9 ± 5,5 | 4,0 ± 1,4 | 2,8 ± 2,7 | 17,6 ± 5,6 | 12,3 ± 2,4 |
| 30–34 | 41.571 | 207.156 | 29,2 ± 5,1 | 3,9 ± 1,5 | 2,6 ± 2,4 | 16,8 ± 5,2 | 12,4 ± 2,3 |
| 35–39 | 19.410 | 102.553 | 28,2 ± 4,4 | 3,8 ± 1,5 | 2,3 ± 2,1 | 15,7 ± 4,5 | 12,5 ± 2,4 |
| 40–45 | 6.948 | 42.044 | 27,4 ± 4,3 | 3,7 ± 1,5 | 2,4 ± 2,4 | 14,8 ± 4,3 | 12,5 ± 2,4 |

- Entre los 25 y los 45 años, la pendiente del ciclo es de −0,176 días por año (IC 95 %: −0,168 a −0,183; R² = 0,994). La de la fase folicular es de −0,194 días por año (IC 95 %: −0,186 a −0,202; R² = 0,987).
- Las cifras de 18 a 24 años «did not fit the linear regressions».
- La fase lútea no muestra diferencias significativas con la edad.
- La DE intrapersonal baja entre los 25 y los 40 años (pendiente −0,060) y luego «Above age 40 the variation increased markedly to its highest level of 3.1 days at age 45». Ese valor de 3,1 días procede del texto, que describe la figura 4. La figura no se pudo leer.
- El sangrado baja de 4,2 ± 1,4 días (18–24) a 3,7 ± 1,5 días (40–45).

**Tabla 3 por IMC (media ± DE)**

| IMC | Ciclo | Sangrado | DE intrapersonal | Folicular | Lútea |
|---|---|---|---|---|---|
| 15–18,5 | 29,6 ± 5,2 | 4,2 ± 1,5 | 2,7 ± 2,5 | 16,4 ± 5,4 | 13,1 ± 2,1 |
| 18,5–25 | 29,3 ± 5,2 | 4,0 ± 1,5 | 2,7 ± 2,5 | 16,3 ± 5,3 | 12,8 ± 2,1 |
| 25–30 | 29,1 ± 5,2 | 3,9 ± 1,4 | 2,6 ± 2,6 | 16,3 ± 5,3 | 12,7 ± 2,2 |
| 30–35 | 29,3 ± 5,6 | 3,9 ± 1,4 | 2,7 ± 2,7 | 16,6 ± 5,6 | 12,6 ± 2,1 |
| 35–50 | 29,8 ± 6,0 | 4,0 ± 1,5 | 3,0 ± 3,1 | 17,2 ± 6,0 | 12,4 ± 2,1 |

- Con IMC de 35 o más, la variación intrapersonal es 0,4 días mayor, un 14 % más (IC 95 %: 0,3–0,5). La fase folicular es 0,9 días más larga (IC 95 %: 0,8–1,0).
- «No other clinically significant differences».
- **Incoherencia interna:** en todos los grupos de IMC la fase folicular (16,3–17,2) y la lútea (12,4–13,1) no cuadran con la fila «All cycles» (16,9 y 12,4). El grupo de IMC 18,5–25 reúne el 72 % de los ciclos, así que su media (16,3) debería parecerse a la global. Las cifras de fase por IMC deben usarse con cautela.

**Límites de generalización**
- Solo se incluyeron ciclos ovulatorios, y se excluyó el 48 % de los ciclos sin ovulación detectada. Esto sesga a la baja la variabilidad y la proporción de ciclos largos.
- Las usuarias buscaban anticoncepción o embarazo, eran mayoritariamente del norte de Europa, el Reino Unido y EE. UU., y tenían un nivel educativo probablemente alto.
- La obesidad está infrarrepresentada: 8 % frente al 15 % de la población general, según los autores.
- La edad máxima es 45 años. No hay datos de la transición menopáusica avanzada.
- La ovulación se estima por temperatura basal, con una resolución de 24 h y un desfase de ±1 día.
- El estudio lo financió Natural Cycles, y la mayoría de los autores son empleados o fundadores de la empresa.

**Nivel de evidencia.** Estudio observacional descriptivo retrospectivo de muy gran tamaño, con datos prospectivos de la app. La validez interna es alta para describir a esta población (n enorme y definiciones explícitas). La validez externa es moderada o baja por el sesgo de selección y la exclusión de ciclos anovulatorios. La ovulación está estimada con un marcador indirecto (BBT), no con ecografía ni hormonas en suero. Grado orientativo: **moderado** como referencia descriptiva de adultas de 18 a 45 años sin anticoncepción hormonal, y **bajo** para extrapolarlo a la población general.

---

## 2. Li H, Jukic AMZ et al., 2023 — Apple Women's Health Study (fuente obligatoria 2)

**Referencia exacta.** Li H, Gibson EA, Jukic AMZ, Baird DD, Wilcox AJ, Curry CL, Fischer-Colbrie T, Onnela JP, Williams MA, Hauser R, Coull BA, Mahalingaiah S. *Menstrual cycle length variation by demographic characteristics from the Apple Women's Health Study.* **npj Digit Med. 2023;6:100.** DOI: 10.1038/s41746-023-00848-1. Publicado el 29-05-2023. PMC10226714.

- El encargo mencionaba «Am J Obstet Gynecol Glob Rep o similar». Esa revista **no** es correcta: el artículo se publicó en npj Digital Medicine.
- Licencia CC BY 4.0.
- Financiación de Apple. Dos autores son empleados de Apple y no participaron en el análisis.

**Población (sección «Participant characteristics», tabla 1, «Methods»)**
- Cohorte digital prospectiva en EE. UU., formada por personas que usan el Apple Research app en iPhone.
- Edad de 18 años o más (19 en Alabama y Nebraska, 21 en Puerto Rico) y capacidad de comunicarse en inglés.
- Se partió de 794.282 ciclos de 52.117 participantes. Tras las exclusiones quedaron **165.668 ciclos de 12.608 participantes**, con una mediana de 11 ciclos por participante (RIC 5–20).
- Edad media al inicio: 33 años (DE 8). El 71,4 % eran blancas y el 34,9 % tenían obesidad (IMC de 30 o más).
- Exclusiones: menopausia declarada, SOP, miomas, histerectomía y ciclos con anticoncepción hormonal, embarazo o lactancia. Ciclos fuera de 10–90 días.
- Se excluyeron como artefactos los ciclos más largos que «mediana personal + mediana de diferencia + 15 días». Esta regla solo se aplicó a menores de 50 años.
- Hay ciclos registrados retrospectivamente hasta 24 meses antes del ingreso.

**Método**
- El ciclo se define a partir del flujo menstrual registrado en Apple Health o en apps de terceros. El ciclo empieza con el primer día de flujo y hacen falta al menos 2 días sin flujo para separar ciclos.
- Se excluye el manchado.
- **No se estima la ovulación ni las fases**, y **no se informa la duración del sangrado**.
- La distribución se ponderó por el inverso del número de ciclos de cada participante.
- Modelos: modelos lineales mixtos (LME), regresión cuantílica mixta y un modelo log-lineal de la varianza residual para estimar la DE intrapersonal.

**Cifras globales (sección «Participant characteristics»)**

Cita: «The mean (SD) of this distribution was 28.7 days (6.1). The median (IQR) was 28 days (26, 30 days) and the 5–95th percentile was 22–38 days.»

| Estadístico | Valor | Verificado |
|---|---|---|
| Media (DE) | 28,7 (6,1) días | sí |
| Mediana | 28 días | sí |
| RIC | 26–30 días | sí |
| P5–P95 | 22–38 días | sí |
| Ciclos largos (>38 días) | 8.153 (5 %) | sí |
| Ciclos cortos (<24 días) | 14.976 (9 %) | sí |

La distribución tiene su pico en 28 días y «a long right tail».

**Diferencia de duración media frente al grupo de 35–39 años (tabla 2, LME ajustado; días, IC 95 %)**

| Edad | Diferencia en la media | Diferencia en la mediana |
|---|---|---|
| <20 | +1,63 (1,31; 1,94) | +1,81 (1,18; 2,44) |
| 20–24 | +1,43 (1,19; 1,67) | +1,38 (0,87; 1,88) |
| 25–29 | +1,12 (0,91; 1,33) | +1,15 (0,83; 1,47) |
| 30–34 | +0,56 (0,40; 0,73) | +0,62 (0,41; 0,83) |
| 35–39 | referencia | referencia |
| 40–44 | −0,49 (−0,66; −0,32) | −0,43 (−0,62; −0,23) |
| 45–49 | −0,33 (−0,56; −0,10) | −0,49 (−0,77; −0,22) |
| ≥50 | +2,02 (1,64; 2,39) | +0,13 (−0,72; 0,99) |

- El texto de Resultados dice «0.5 (95%CI: −0.3, 0.7)» para 40–44 años, lo que no coincide con la tabla 2 (−0,49; −0,66 a −0,32). Parece una errata del texto. **Prevalece la tabla.**
- Diferencias por etnia: las participantes asiáticas tienen ciclos 1,57 días más largos (1,16; 1,98) y las hispanas 0,73 días más largos (0,41; 1,05), frente a las blancas.
- Diferencia por IMC: con IMC de 40 o más, el ciclo es 1,54 días más largo (1,24; 1,85) que con IMC de 18,5 a 25.

**DE intrapersonal por edad (tabla 4; 163.275 ciclos de 11.040 participantes con al menos 3 ciclos; días, IC 95 %)**

| Edad | DE intrapersonal | Diferencia frente a 35–39 |
|---|---|---|
| <20 | 5,33 (5,16–5,51) | +45,5 % |
| 20–24 | 5,07 | +37,3 % |
| 25–29 | 4,70 | +25,2 % |
| 30–34 | 4,28 | +12,7 % |
| 35–39 | 3,79 (3,77–3,82) | referencia |
| 40–44 | 3,99 | +5,8 % |
| 45–49 | 5,42 | +44,5 % |
| ≥50 | 11,19 (8,94–13,45) | +200,3 % |

**Irregularidad (tabla 5).** Se define como una diferencia media de 7 días o más entre ciclos consecutivos.

| Edad | Participantes con irregularidad |
|---|---|
| <20 | 20,4 % |
| 20–24 | 20,9 % |
| 25–29 | 15,9 % |
| 30–34 | 11,6 % |
| 35–39 | 10,6 % |
| 40–44 | 12,8 % |
| 45–49 | 28,2 % |
| ≥50 | 60,2 % (OR 27,22) |

**Ciclos cortos y largos (tabla 3).** Proporción de ciclos de menos de 24 días: 8,4 % entre 35 y 39 años, 16,7 % entre 45 y 49 y 21,9 % a partir de 50. Proporción de ciclos de más de 38 días: 3,2 %, 5,0 % y 18,2 % en esas mismas franjas.

**Límites de generalización**
- Solo incluye usuarias de iPhone en EE. UU. que hablan inglés, con infrarrepresentación del nivel socioeconómico bajo y de la población hispana.
- Todo es autodeclarado.
- Solo el 85 % de los ciclos posteriores al ingreso se confirmaron como bien registrados.
- No hay ovulación, fases ni sangrado.
- El grupo de 35–39 años como referencia es una elección arbitraria de los autores.
- Parte de los datos se recogieron durante la COVID-19, aunque el análisis de sensibilidad dio resultados similares.
- Hay pocas participantes de 50 años o más (353).

**Nivel de evidencia.** Cohorte digital prospectiva, con un registro de exposición más sólido que las bases comerciales: incluye a personas con y sin deseo de embarazo y ajusta por factores de confusión. **Moderado** para la duración del ciclo y su variabilidad por edad en adultas estadounidenses. No sirve para las fases ni para el sangrado.

---

## 3. Grieger JA & Norman RJ, 2020 — Flo (fuente obligatoria 3)

**Referencia.** Grieger JA, Norman RJ. *Menstrual Cycle Length and Patterns in a Global Cohort of Women Using a Mobile Phone App: Retrospective Cohort Study.* J Med Internet Res. 2020;22(6):e17109. DOI: 10.2196/17109. Publicado el 24-06-2020. PMC7381001.

- **La app es Flo, no Clue ni Natural Cycles.**
- Los autores declaran no tener conflictos de interés. Los resultados los generó el equipo de Flo (Agradecimientos).

**Población**
- 1.579.819 mujeres de 18 años o más, en más de 200 países, aunque la gran mayoría está en Europa y Norteamérica.
- Se exigían al menos 3 ciclos registrados. Se excluyó a quienes registraron un embarazo o recordatorios de anticonceptivo oral.
- El 40,4 % tenía entre 18 y 24 años y el 7,6 % entre 40 y 55.
- Solo el 22,6 % informó de su IMC.
- No se excluyen trastornos ginecológicos: el 11,2 % declaró algún «reproductive disorder».

**Método**
- Mediana y media por mujer, calculadas a partir de su propio historial de ciclos.
- La ovulación se fija como «the next day» tras un test de LH positivo registrado por la usuaria, en 18.761 ciclos.
- La fase lútea va del día de ovulación, incluido, hasta la menstruación. Esta definición **no equivale** a la de Bull, que empieza el día siguiente al EDO, y alarga la fase lútea en 1 día.

**Cifras verificadas (Resultados)**
- El 91,13 % de las mujeres tenía una mediana de ciclo de 21 a 35 días.
- El 16,32 % (257.889 mujeres) tenía una mediana de 28 días. Los porcentajes para 27 y 29 días fueron 12,05 % y 12,11 %.
- El 0,17 % tenía ciclos de menos de 21 días y el 8,60 % de más de 35.
- Variación del ciclo: el 25,37 % de las mujeres variaba entre 0 y 1,5 días, y el 69 % menos de 6 días.
- Ovulación estimada: el día más frecuente es el 14. El texto da 13,08 % y la tabla 3 da 13,37 %.
- Fase lútea: el valor más frecuente es 15 días. El texto da 16,96 % sobre 21.788 ciclos y la tabla 4 da 19,70 % sobre 18.761. Hay **incoherencias internas** entre texto y tabla. También hay una errata: «1.13%» por 91,13 % en la Discusión.
- Por edad: tenían una mediana de 27 días el 18,48 % de las mujeres de 40 años o más, frente al 9,55 % de las de 18 a 24. Las mujeres de 40 años o más tenían más fases lúteas largas, y las más jóvenes más fases lúteas cortas.
- **No se informa** una media ni una mediana poblacional global del ciclo, ni de las fases, ni del sangrado en días. El flujo se clasifica solo como ligero, medio o abundante.

**Límites.** Las cifras de fases salen de un subgrupo pequeño y autoseleccionado de usuarias de tests de LH. Los datos son autodeclarados y presentan incoherencias numéricas. La variación del ciclo se define como varianza pero se expresa en días, lo que es ambiguo.

**Nivel de evidencia.** Retrospectivo descriptivo. **Bajo o moderado:** sirve para «qué proporción de mujeres tiene una mediana de 28 días», pero no para la duración de las fases.

---

## 4. Soumpasis I, Grace B, Johnson S, 2020 — Clearblue Connected (fuente opcional 3)

**Referencia.** *Real-life insights on menstrual cycles and ovulation using big data.* Hum Reprod Open. 2020;2020(2):hoaa011. DOI: 10.1093/hropen/hoaa011. PMC7164578. Recibido el 03-10-2019, aceptado el 03-02-2020. Financiado por SPD (Clearblue), empresa de la que son empleados todos los autores.

**Población.** 32.595 usuarias en EE. UU. y el Reino Unido, con 75.981 ciclos, de los que 46.704 estaban completos. Todas intentaban concebir y eran mayores de 18 años. Se excluían, por diseño del producto, el SOP, la menopausia y la medicación de fertilidad. **No hay datos demográficos, ni edad ni IMC.**

**Método.** Test urinario de E3G y LH. La ovulación es el día siguiente al pico de LH. Se excluyeron los ciclos que diferían más de 1,5 veces de la duración declarada.

**Cifras verificadas**
- Solo el 12,4 % de los ciclos medía 28 días, aunque el 23,3 % de las veces las usuarias declaraban 28 días (31,1 % en el primer registro). Resumen y Resultados.
- El 87 % (87,7 %) de los ciclos medía entre 23 y 35 días.
- Rango P5–P95 sin censurar: 23–67 días (Métodos).
- Fase lútea: «mean length was 12.77 ± 1.86 days» (ajuste a una distribución normal, ciclos de 23 a 35 días).
- En los ciclos de 28 días, la ovulación caía con más frecuencia el día 15 (27 %), y había 10 días de dispersión.
- El 52,3 % de las usuarias con 4 ciclos tenía una diferencia de 5 días o más entre su ciclo más corto y el más largo.
- **No hay** mediana del ciclo, sangrado ni fase folicular en días; la regresión aparece como fórmula en una figura que no se pudo leer.

**Nivel de evidencia.** **Bajo o moderado.** El marcador hormonal de ovulación es mejor que la BBT, pero la muestra está autoseleccionada (mujeres que buscan embarazo) y no hay variable de edad. Solo aporta la duración de la fase lútea y el dato de que el 12,4 % de los ciclos mide 28 días.

---

## 5. Otros análisis grandes con método explícito

### 5.1 Li K et al., 2020 — Clue
*Characterizing physiological and symptomatic variation in menstrual cycles using self-tracked mobile-health data.* npj Digit Med. 2020;3:79. DOI: 10.1038/s41746-020-0269-8. PMC7250828.

- 378.694 usuarias **de 21 a 33 años** (restricción elegida a propósito), con 4.881.697 ciclos naturales, de 2015 a 2018, en todos los continentes.
- Se excluyeron la anticoncepción hormonal y el DIU, y los ciclos «atípicamente largos» (diferencia con el ciclo siguiente al menos 10 días mayor que la mediana de la usuaria).
- Tabla 2, «Per-user cycle characteristics»:
  - Ciclo: media 29,73 ± 5,73 días, mediana 29.
  - Sangrado («period length», días seguidos con sangrado más intenso que manchado): media 4,08 ± 1,76, **mediana 4**.
  - El paréntesis «(95% CI)» de la tabla (21–43 para el ciclo y 1–7 para el sangrado) parece un rango de la distribución, no un IC.
- El 7,68 % de las usuarias es «consistently highly variable», es decir, tiene una diferencia mediana de más de 9 días entre ciclos consecutivos.
- No hay estimación de la ovulación.
- Nivel: **moderado** para el sangrado y el ciclo entre 21 y 33 años, por su gran tamaño. Sesgos: usuarias de app y la restricción de edad.

### 5.2 Symul L et al., 2019 — Sympto y Kindara
*Assessment of menstrual health status and evolution through mobile apps for fertility awareness.* npj Digit Med. 2019;2:64. DOI: 10.1038/s41746-019-0139-4. PMC6635432.

- Unos 200.000 usuarios y más de 2,7 millones de ciclos. Usuarias que aplican el método sintotérmico (BBT y moco cervical).
- La ovulación se estima con un modelo oculto de Markov (HMM). Solo se aceptaron los ciclos con estimación «fiable» (incertidumbre de ±1,5 días o menos y subida de temperatura de 0,15 °C o más): 109.161 ciclos.
- Cifras verificadas en el texto:
  - Fase folicular: mediana 16 días. El 90 % de las ovulaciones cae entre los días 10 y 24, y solo alrededor del 24 % entre los días 14 y 15.
  - Fase lútea: mediana de 12 días en Kindara y 13 en Sympto. Alrededor del 20 % de los ciclos tiene una fase lútea de 10 días o menos.
- La usuaria típica tiene unos 30 años. La edad media ± DE aparece solo en la figura 2: **no verificada**.
- Nivel: **moderado o bajo**. Hay mucha exclusión: el 89 % de los ciclos estándar de Kindara.

### 5.3 Faust L et al., 2019 — Ovia (solo resumen)
*Findings from a mobile application-based cohort are consistent with established knowledge of the menstrual cycle, fertile window, and conception.* Fertil Steril. 2019. DOI: 10.1016/j.fertnstert.2019.05.008.

- Resumen leído en Europe PMC: 225.596 ciclos de 98.903 mujeres. Ciclo medio de 29,6 días, folicular de 15,8 y lútea de 13,7.
- **Texto completo no leído:** el método de ovulación, la DE, la edad y las exclusiones están **no verificados**.

### 5.4 Contraste no digital: Najmabadi S et al., 2020
*Menstrual bleeding, cycle length, and follicular and luteal phase lengths in women without known subfertility: A pooled analysis of three cohorts.* Paediatr Perinat Epidemiol. 2020;34(3). DOI: 10.1111/ppe.12644. PMC8495765 (manuscrito de autor).

- 581 mujeres de 18 a 40 años, con 3.324 ciclos, que registraban a diario en papel con el método Creighton. La ovulación es el día pico del moco cervical.
- Cifras verificadas (resumen y Resultados):
  - Menstruación: 6,2 ± 1,5 días, mediana 6.
  - Ciclo: 30,3 ± 6,7 días, mediana 29.
  - Folicular: 18,5 ± 6,5 días, mediana 17.
  - Lútea: 11,7 ± 2,8 días, mediana 12.
- El 43 % de las mujeres tenía más de 7 días de diferencia entre su ciclo más largo y el más corto.
- Se incluye para mostrar que **la duración del sangrado depende de la definición**: 6 días cuando se cuenta todo el flujo en un diario diario, frente a unos 4 días cuando se cuentan solo los días seguidos con sangrado que no es manchado (Bull y Clue).
- Nivel: cohortes prospectivas pequeñas pero detalladas. **Moderado.**

### 5.5 Búsqueda de estudios de 2021 a 2026
Una búsqueda en Europe PMC y en la web no encontró otro gran análisis de apps posterior a 2023 con fases y edad que pudiera verificarse en texto primario. No se incluye ninguno. Esta ausencia **no prueba que no existan**.

---

## 6. Variación con la edad y transición menopáusica (fuente obligatoria 4)

### 6.1 STRAW+10 — Harlow SD et al., 2012
*Executive summary of the Stages of Reproductive Aging Workshop + 10: addressing the unfinished agenda of staging reproductive aging.* Se publicó a la vez en Menopause (DOI 10.1097/gme.0b013e31824d8f40, PMC3340903, la versión leída), J Clin Endocrinol Metab (10.1210/jc.2011-3362), Fertil Steril (10.1016/j.fertnstert.2012.01.128) y Climacteric (10.3109/13697137.2011.650656).

Criterios verificados en el texto:
- **Etapa −3b** (final de la etapa reproductiva): «menstrual cycles remain regular without change in length». Etapa −3a: empiezan «subtle changes in menstrual cycle characteristics, specifically shorter cycles».
- **Etapa −2** (transición temprana): «increased variability in menstrual cycle length, defined as a persistent difference of 7 days or more in the length of consecutive cycles. Persistence is defined as recurrence within 10 cycles of the first variable length cycle.»
- **Etapa −1** (transición tardía): «amenorrhea of 60 days or longer».
- La edad **no es un criterio**: «The STRAW + 10 model does not use age as a criterion». Los criterios de sangrado se aplican «regardless of age, demographic, BMI, or lifestyle characteristics».
- No son aplicables al SOP, a la amenorrea hipotalámica ni a ciertos tratamientos oncológicos.

Nivel: consenso de expertos basado en cohortes poblacionales (ReSTAGE, SWAN, entre otras). Es el **estándar de referencia** para clasificar las etapas, pero no da medianas de duración del ciclo.

### 6.2 Síntesis: de 18 a 25 años frente a 35 a 45 años (solo cifras verificadas)

| Indicador | 18–25 años | 35–45 años | Fuente |
|---|---|---|---|
| Ciclo medio | 30,3 ± 5,7 días (18–24) | 28,2 ± 4,4 (35–39); 27,4 ± 4,3 (40–45) | Bull, tabla 2 |
| Ciclo frente a 35–39 | +1,43 días (20–24) | −0,49 días (40–44) | Apple, tabla 2 |
| Fase folicular | 18,0 ± 5,7 días | 15,7 ± 4,5; 14,8 ± 4,3 | Bull, tabla 2 |
| Fase lútea | 12,2 ± 2,5 días | 12,5 ± 2,4 (sin diferencia significativa) | Bull, tabla 2 / figura 3 (texto) |
| Sangrado | 4,2 ± 1,4 días | 3,8 ± 1,5; 3,7 ± 1,5 | Bull, tabla 2 |
| DE intrapersonal | 2,9 días (Bull); 5,07 días (Apple, 20–24) | 2,3–2,4 (Bull); 3,79–3,99 (Apple, 35–44) | Bull tabla 2; Apple tabla 4 |
| Irregularidad (diferencia media de 7 días o más) | 20,9 % (20–24) | 10,6 % (35–39); 12,8 % (40–44) | Apple, tabla 5 |

- Las DE intrapersonales de Bull y Apple **no son comparables entre sí**.
  - Bull calcula la DE bruta de cada usuaria y solo con ciclos ovulatorios.
  - Apple modela la DE residual con todos los ciclos, sin exigir ovulación.
- **A partir de los 45 años** (Apple): la DE es de 5,42 días entre 45 y 49 años y de 11,19 a partir de 50. La irregularidad sube al 28,2 % y al 60,2 %.
- Bull no incluye a mayores de 45 años, pero la variación crece desde los 40.

### 6.3 Implicaciones para fijar límites de uso de una mediana de referencia en Consona (propuesta del investigador, no de las fuentes)

1. **Valor de referencia defendible:** la mediana de ciclo de 28 días (RIC 26–30; P5–P95 22–38) del Apple Women's Health Study es la única mediana poblacional con percentiles verificada en una cohorte digital adulta y ajustada. Para las fases, la única fuente grande con media y DE en todas las fases y por edad es Bull: folicular 16,9 ± 5,3 y lútea 12,4 ± 2,4 días, solo en ciclos ovulatorios detectados por temperatura basal.
2. **Franja donde la referencia es más representativa:** aproximadamente de 25 a 40 años. Ahí el ciclo es más estable y la variabilidad intrapersonal mínima (35–39 años en Apple; de 25 a 40 hay un descenso lineal en Bull).
3. **De 18 a 24 años:** los ciclos son entre 1 y 2 días más largos y más variables, y la regresión de Bull no se ajusta a esta franja. Conviene indicar que «es habitual cierta mayor variación».
4. **De 40 a 45 años:** el ciclo es más corto, por una fase folicular más corta, y la variación vuelve a crecer. La mediana poblacional pierde utilidad individual.
5. **Desde unos 45 años, o a cualquier edad si aparece el patrón de STRAW+10** (diferencia persistente de 7 días o más entre ciclos consecutivos, o 60 días o más sin regla): no tiene sentido presentar una mediana poblacional como referencia. Lo más prudente es remitir a una profesional sanitaria si genera dudas. Consona es educativa y no debe etiquetar la etapa.
6. **Sangrado:** conviene presentarlo como un rango y aclarar qué se cuenta. Contando solo los días con sangrado sin manchado, la mediana ronda 4 días (Clue: mediana 4; Bull: media 4,0 ± 1,5). En diarios clínicos, la mediana es de 6 días (Najmabadi).
7. **Fases:** la fase lútea **no es «siempre 14 días»**. Ronda los 12–13 días según cuatro fuentes con métodos distintos, y es la menos variable. La variación del ciclo se debe sobre todo a la fase folicular.

---

## 7. Verificación de las afirmaciones del código

| Afirmación del código | Veredicto | Lo que dice la fuente primaria | Corrección sugerida |
|---|---|---|---|
| «fase folicular media 16,9 días (DE 5,3)» | **Verificada, con matices** | Bull, tabla 1 y tabla 2, fila «All cycles»: 16,9 ± 5,3 (media ± DE). Son 612.613 **ciclos ovulatorios** de usuarias de Natural Cycles de 18 a 45 años, sin anticoncepción hormonal en 12 meses y sin SOP ni endometriosis. Ovulación estimada por temperatura basal (último día de temperatura baja antes de la subida), con apoyo opcional de LH. La fase folicular incluye el día estimado de ovulación. | Añadir contexto: «en ciclos ovulatorios detectados por temperatura basal (Bull 2019, n = 612.613)». No citar el «95 % CI 10–30» del resumen como intervalo de confianza: es una dispersión. La cifra depende de la edad: 18,0 días entre 18 y 24 años y 14,8 entre 40 y 45. |
| «solo el 13 % de los ciclos dura exactamente 28 días» | **Verificada** | «81,605 cycles (13%) were 28 days long» (Bull, sección «Cycle characteristics by cycle length»). Es un porcentaje de **ciclos**, no de mujeres, y solo de ciclos ovulatorios analizados. | Mantener «ciclos». Si se habla de mujeres, la cifra es otra: el 16,3 % de las usuarias de Flo tenía una mediana de 28 días (Grieger 2020). En Clearblue, el 12,4 % de los ciclos medía 28 días (Soumpasis 2020). |
| «media de ciclo 29» | **Parcialmente verificada (redondeo)** | Bull: media 29,3 ± 5,2 días. Bull **no informa la mediana**. Otras fuentes: Clue, media 29,73 y mediana 29 (21–33 años); Apple, media 28,7 (DE 6,1) y **mediana 28** (RIC 26–30). | Escribir «29,3 (DE 5,2)» y no llamarla mediana. Si el código necesita una mediana, la verificada en una cohorte adulta amplia es 28 (Apple) o 29 (Clue, 21–33 años). |
| «DE intrapersonal 2,6 días» | **Verificada, con matices importantes** | Bull, tablas 2 y 3, «Mean ± std per-user cycle length variation»: 2,6 ± 2,5 días. Es la media de las DE individuales, calculada solo con ciclos ovulatorios, en usuarias con al menos 6 ciclos; varía de 2,3 a 2,9 según la edad. Apple, con todos los ciclos y un modelo de DE residual, obtiene entre 3,79 (35–39 años) y 5,33 (menos de 20), y 11,19 a partir de 50. | Indicar que es la «media de la DE individual en ciclos ovulatorios (Bull 2019)» y que probablemente **subestima** la variabilidad real. La propia DE de 2,5 muestra una gran heterogeneidad entre usuarias. No usarla como umbral de normalidad. |

Otras incoherencias detectadas en las fuentes que conviene no arrastrar al código:
- Bull: 124.648 frente a 124.646 usuarias, y fases por IMC (tabla 3) que no cuadran con la fila global.
- Apple: el texto da 40–44 años = «0.5 (−0.3, 0.7)», frente a la tabla 2 (−0,49; −0,66 a −0,32).
- Grieger: 13,08 % frente a 13,37 %, 16,96 % frente a 19,70 %, y la errata «1.13%».

---

## 8. Tabla final

| Fase / variable | Valor | Estadístico | Dispersión | Fuente | n | Método | Ubicación | Verificado |
|---|---|---|---|---|---|---|---|---|
| Ciclo | 29,3 d | media | DE 5,2 | Bull 2019 (Natural Cycles) | 612.613 ciclos / 124.648 usuarias | Fechas de menstruación; solo ciclos ovulatorios (BBT) | Tabla 1 | sí |
| Ciclo de exactamente 28 d | 13 % de los ciclos | proporción | — | Bull 2019 | 81.605 / 612.613 | ídem | Resultados, «by cycle length» | sí |
| Fase folicular | 16,9 d | media | DE 5,3 | Bull 2019 | 612.613 | BBT (EDO = último día bajo) ± LH | Tabla 1 | sí |
| Fase lútea | 12,4 d | media | DE 2,4 | Bull 2019 | 612.613 | ídem | Tabla 1 | sí |
| Sangrado | 4,0 d | media | DE 1,5 | Bull 2019 | 612.613 | Días seguidos de sangrado (sin manchado) | Tabla 1 | sí |
| DE intrapersonal del ciclo | 2,6 d | media de las DE individuales | DE 2,5 | Bull 2019 | 124.646 usuarias | DE de los ciclos de cada usuaria (ovulatorios) | Tablas 2 y 3 | sí |
| Ciclo 18–24 / 40–45 años | 30,3 / 27,4 d | media | DE 5,7 / 4,3 | Bull 2019 | 50.789 / 42.044 ciclos | ídem | Tabla 2 | sí |
| Folicular 18–24 / 40–45 años | 18,0 / 14,8 d | media | DE 5,7 / 4,3 | Bull 2019 | ídem | BBT | Tabla 2 | sí |
| Lútea 18–24 / 40–45 años | 12,2 / 12,5 d | media | DE 2,5 / 2,4 | Bull 2019 | ídem | BBT | Tabla 2 | sí |
| Sangrado 18–24 / 40–45 años | 4,2 / 3,7 d | media | DE 1,4 / 1,5 | Bull 2019 | ídem | ídem | Tabla 2 | sí |
| Pendiente del ciclo con la edad (25–45) | −0,176 d/año | regresión lineal | IC 95 % −0,168 a −0,183 | Bull 2019 | 612.613 | ídem | Resultados, «by user age» | sí |
| Pendiente de la folicular con la edad (25–45) | −0,194 d/año | regresión lineal | IC 95 % −0,186 a −0,202 | Bull 2019 | ídem | BBT | ídem | sí |
| DE intrapersonal a los 45 años | 3,1 d | media | — | Bull 2019 | — | ídem | Texto sobre la figura 4 | sí (texto); figura no leída |
| Ciclo | 28,7 d | media | DE 6,1 | Li H 2023 (Apple WHS) | 165.668 ciclos / 12.608 | Flujo registrado en Apple Health; sin ovulación | Resultados, «Participant characteristics» | sí |
| Ciclo | 28 d | mediana | RIC 26–30; P5–P95 22–38 | Li H 2023 | ídem | ídem | ídem | sí |
| Ciclo <20 / 45–49 / ≥50 años frente a 35–39 | +1,63 / −0,33 / +2,02 d | diferencia de medias (LME ajustado) | IC 95 % en tabla | Li H 2023 | ídem | ídem | Tabla 2 | sí |
| DE intrapersonal 35–39 / <20 / 45–49 / ≥50 años | 3,79 / 5,33 / 5,42 / 11,19 d | DE residual modelada | IC 95 % en tabla | Li H 2023 | 163.275 ciclos / 11.040 | Modelo log-lineal de la varianza | Tabla 4 | sí |
| Irregularidad 35–39 / ≥50 años | 10,6 % / 60,2 % | proporción de participantes | OR 27,22 | Li H 2023 | 11.040 | Diferencia media entre ciclos de 7 d o más | Tabla 5 | sí |
| Ciclo | 29,73 d | media | DE 5,73 | Li K 2020 (Clue) | 4.881.697 ciclos / 378.694 (21–33 años) | Registro de la menstruación | Tabla 2 | sí |
| Ciclo | 29 d | mediana | — | Li K 2020 | ídem | ídem | Tabla 2 | sí |
| Sangrado | 4,08 d / 4 d | media / mediana | DE 1,76 | Li K 2020 | ídem | Días seguidos con sangrado mayor que manchado | Tabla 2 | sí |
| Mujeres con mediana de 28 d | 16,32 % | proporción de mujeres | — | Grieger 2020 (Flo) | 1.579.819 mujeres | Fechas de menstruación autodeclaradas | Resultados | sí |
| Mediana de 21 a 35 d | 91,13 % de las mujeres | proporción | — | Grieger 2020 | ídem | ídem | Resultados | sí |
| Ovulación estimada más frecuente | día 14 (13,08 % o 13,37 %) | moda | — | Grieger 2020 | 18.761 ciclos | LH positivo + 1 día | Resultados / tabla 3 (incoherentes) | sí (con incoherencia) |
| Fase lútea más frecuente | 15 d | moda | — | Grieger 2020 | 18.761 ciclos | ídem (lútea incluye el día de ovulación) | Tabla 4 | sí (con incoherencia) |
| Ciclo de 28 d | 12,4 % de los ciclos | proporción | — | Soumpasis 2020 (Clearblue) | 32.595 usuarias / 46.704 ciclos completos | Fechas de menstruación | Resumen / Resultados | sí |
| Fase lútea | 12,77 d | media (ajuste normal) | DE 1,86 | Soumpasis 2020 | Ciclos de 23 a 35 d con pico de LH | LH urinario + 1 día | Resultados, «Ovulation day and cycle length» | sí |
| Ciclo P5–P95 sin censurar | 23–67 d | percentiles | — | Soumpasis 2020 | ídem | ídem | Métodos | sí |
| Fase folicular | 16 d | mediana | 90 % entre los días 10 y 24 | Symul 2019 (Sympto y Kindara) | 109.161 ciclos | HMM con BBT y moco | Resultados | sí |
| Fase lútea | 12 (Kindara) / 13 (Sympto) d | mediana | ~20 % de 10 d o menos | Symul 2019 | ídem | ídem | Resultados | sí |
| Ciclo / folicular / lútea | 29,6 / 15,8 / 13,7 d | media | no informada | Faust 2019 (Ovia) | 225.596 ciclos / 98.903 | No verificado | Solo resumen | **no** (texto completo no leído) |
| Menstruación | 6,2 d (mediana 6) | media | DE 1,5 | Najmabadi 2020 (Creighton, no app) | 3.324 ciclos / 581 | Diario diario; día pico del moco | Resumen / tabla 2 | sí |
| Ciclo / folicular / lútea | 30,3 (29) / 18,5 (17) / 11,7 (12) d | media (mediana) | DE 6,7 / 6,5 / 2,8 | Najmabadi 2020 | ídem | Día pico del moco | Resumen / tabla 2 | sí |
| Transición temprana (etapa −2) | diferencia persistente de 7 d o más entre ciclos | criterio | se repite en 10 ciclos o menos | Harlow 2012 (STRAW+10) | consenso | — | Sección «Early menopausal transition» | sí |
| Transición tardía (etapa −1) | amenorrea de 60 d o más | criterio | — | Harlow 2012 | consenso | — | Sección «Late menopausal transition» | sí |

