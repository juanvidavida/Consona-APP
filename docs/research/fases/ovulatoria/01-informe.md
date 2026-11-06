# Ventana ovulatoria estimada — informe temático

**Issue:** JUA-36.
**Fecha de investigación:** 06-11-2026.
**Alcance:** educación sobre la ovulación y sobre lo que significa la ventana que muestra Consona, para la pareja que acompaña. **No es información de fertilidad ni anticonceptiva.**
**Fuentes:** fichas en [`02-auditoria-fuentes.md`](./02-auditoria-fuentes.md), con identificador OS-xx. Criterios en [`../README.md`](../README.md).
**Relación con otras investigaciones:** la definición y los límites de la ventana están auditados en `../../jua-10/01-cycle-phases.md`. La regla de la ventana que pinta la rueda y su cobertura están auditadas en JUA-27 (PR #12, §3). Este informe las reutiliza.

## 1. Conclusión operativa

La ovulación no es una fase, sino **un hecho puntual**: un ovario libera un óvulo, aproximadamente un día y medio después de que empiece el pico de la hormona LH. Lo que Consona muestra no es la ovulación, sino **una ventana calculada hacia atrás** desde la fecha prevista de la siguiente regla. Esa ventana acierta solo en una parte de los ciclos.

Hay tres hechos que lo hacen inevitable:

1. **El día de la ovulación varía mucho**, entre personas y en la misma persona, incluso con ciclos de igual duración.
2. **Las apps y los métodos de calendario no pueden predecirlo con precisión.** Los datos más citados proceden, además, de la empresa que fabrica tests de ovulación.
3. **No todos los ciclos tienen ovulación**, aunque la regla llegue con regularidad. En una muestra de población noruega, entre una cuarta parte y un tercio de los ciclos de duración normal no mostraban signos de ovulación.

Por todo ello, **una ventana de calendario no sirve para buscar ni para evitar un embarazo**. Que alguien lo haga no es una hipótesis: un estudio de la Universidad de Granada recoge que algunas usuarias españolas se guían por los «días fértiles» de su app para decidir cuándo tomar precauciones.

En lo social, la ovulación arrastra un estereotipo sexual: la idea de que trae más deseo o más atractivo. Es la versión más extendida, y la más arriesgada para Consona, del «el ciclo explica cómo está alguien». El estudio más grande hecho hasta ahora no encontró relación entre las hormonas y las preferencias de atracción. Consona, en cualquier caso, no trata el deseo (H-05). Tampoco hay evidencia de que el ánimo o las capacidades mejoren en este momento; de hecho, una minoría de mujeres se siente peor a mitad de ciclo.

## 2. Definiciones de trabajo

> **Ovulación:** liberación de un óvulo por un ovario. Es un hecho, no una fase con duración propia.

> **Pico de LH:** subida brusca de la hormona luteinizante, desencadenada por el estradiol alto y sostenido, que provoca la ovulación.

> **Ventana ovulatoria estimada (Consona):** tramo de la rueda, de L−14 a L−12 respecto del inicio previsto de la siguiente menstruación (L), dibujado con bordes difusos. Es un cálculo de calendario, no una detección (JUA-27 §3.3).

> **Ciclo anovulatorio:** ciclo en el que no hay ovulación, aunque pueda haber sangrado.

## 3. Afirmaciones auditadas

| ID | Afirmación | Fuente | Población de referencia | Nivel y motivo | Fecha | Formulación apta para Consona | Límite |
|---|---|---|---|---|---|---|---|
| OV-A01 | La ovulación es la liberación de un óvulo por un ovario: un hecho, no una fase de varios días. | OS-02 [V]; OS-01 [V] | Material clínico (ACOG); fisiología reproductiva. | **Consenso clínico.** | 2018–2025 | «La ovulación es el momento en que un ovario libera un óvulo. No es una fase de varios días.» | — |
| OV-A02 | Cuando el estradiol se mantiene alto, desencadena el pico de LH, y la ovulación ocurre unas 34 a 36 horas después del inicio de ese pico. | OS-01 [V] | Fisiología reproductiva humana. | **Alta** para el mecanismo. | 2018 | «Cuando los estrógenos llegan a un nivel alto, provocan una subida de otra hormona que, en un día o dos, desencadena la ovulación.» | Sin horas en la interfaz. |
| OV-A03 | El día de la ovulación varía mucho entre personas y en la misma persona, incluso con ciclos de la misma duración. Solo el 12–15 % tiene ciclos de 28 días, aunque una cuarta o tercera parte cree tenerlos. En ciclos de 28 días, la ovulación se repartió entre los días 11 y 20, y solo en un 10–14 % cayó el día 14 o exactamente 14 días antes de la regla. En la cohorte independiente, la ovulación ocurrió entre los días 8 y 60 del ciclo. | OS-04 [V]; OS-05 [V]; OS-06 [V] | 768 mujeres británicas con LH en orina (OS-04); 32.595 usuarias de un test conectado (OS-05); 221 mujeres que buscaban embarazo, 696 ciclos (OS-06, clásico). | **Moderada.** Resultados coherentes entre una fuente independiente (OS-06) y dos de la industria (OS-04, OS-05). | 2000, 2018, 2020 | «El momento de la ovulación cambia mucho de una persona a otra y de un ciclo a otro. La idea de que ocurre el día 14 es un mito.» | Sin cifras de fertilidad. |
| OV-A04 | Los métodos de calendario y las apps que solo usan la duración del ciclo no pueden predecir con precisión el día de la ovulación; en un estudio, las apps no acertaban más del 21 %. | OS-04 [V-abs]; OS-05 [V]; OS-03 (JUA-27) | Íd. | **Moderada.** Industria en OS-04 y OS-05; coherente con la auditoría independiente de JUA-27. | 2018–2026 | «Ningún calendario, tampoco el de Consona, puede saber cuándo ha ovulado alguien.» | — |
| OV-A05 | La ventana de Consona (L−14 a L−12) contiene la ovulación en un 37–58 % de los ciclos; la banda de incertidumbre (L−16 a L−10), en un 78–94 %. Por eso se dibuja con bordes difusos. | OS-03 [V] | Coberturas calculadas en JUA-27 con Bull, Soumpasis y Najmabadi. | **Moderada.** | 2026 | «Es un momento aproximado: en bastantes ciclos, la ovulación ocurre antes o después.» | Sin porcentajes en las tarjetas. |
| OV-A06 | No todos los ciclos tienen ovulación. En una muestra de población noruega, entre un 26 % y un 37 % de los ciclos de duración normal no mostraban signos de ovulación en una sola medición. Los autores lo interpretan como algo intermitente, que puede ocurrir en la mayoría de las mujeres. | OS-07 [V] | 1.545 mujeres de 20 a 50 años (edad media 41,7) de una cohorte poblacional (HUNT3, Noruega); participación del 52 %; una sola medición de progesterona. | **Moderada.** Muestra poblacional grande, pero de edad media alta y con una sola medición. | 2015 | «Que la regla llegue con regularidad no confirma que haya habido ovulación: en un estudio con población general, al menos uno de cada cuatro ciclos de duración normal no mostraba signos de ovulación.» | No presentar como problema de salud de tu pareja. |
| OV-A07 | Una ventana de calendario no es un método anticonceptivo. La eficacia de los métodos basados en el conocimiento de la fertilidad está poco estudiada (ningún estudio de calidad alta), y las tasas de embarazo con uso habitual varían mucho. | OS-08 [V-abs]; `jua-10/01-cycle-phases`, límite 3 [V] | Revisión sistemática de 53 estudios (calidad baja o moderada). | **Moderada** para afirmar el límite. | 2018 | «No sirve para buscar ni para evitar un embarazo. Para eso hace falta un método fiable y consejo profesional.» | No comparar métodos ni dar tasas. |
| OV-A08 | Algunas usuarias españolas y austriacas de apps menstruales se guían por los «días fértiles» que calcula la app para decidir cuándo tomar precauciones. Las autoras recomiendan que las apps informen de sus límites y muestren las fechas de ovulación de forma flexible. | OS-09 [V] | 26 entrevistas cualitativas en España y Austria (Universidad de Granada). | **Limitada** (cualitativo), pero directamente aplicable al diseño de Consona. | 2019 | Respalda el aviso de OV-A07 y los bordes difusos de la rueda. | — |
| OV-A09 | En datos de una app, el registro de «dolor de ovulación» alcanza su máximo unos 14 días antes de la siguiente regla. | OS-10 [V] | Usuarias de Clue (autoinforme). | **Limitada.** | 2021 | No se usa en la interfaz (O-05). | Invitaría a observar el cuerpo de la pareja. |
| OV-A10 | El estudio longitudinal más grande hasta la fecha no encontró evidencia convincente de que las preferencias de atracción cambien con las hormonas del ciclo. El campo es controvertido y los estudios previos eran pequeños. | OS-11 [V] | 584 mujeres blancas heterosexuales, hormonas en saliva. | **Moderada** contra el estereotipo; muestra no diversa. | 2018 | No se usa en la interfaz (H-05). Solo justifica la exclusión. | Consona no trata el deseo ni la atracción. |
| OV-A11 | No hay evidencia de un ánimo o unas capacidades mejores en este momento. Una minoría (12–13 %) empeora a mitad de ciclo, y la mayoría no tiene un patrón propio de esta fase. Las capacidades cognitivas no cambian de forma robusta. | OS-12 [V]; OS-13 [V] | Universitarias italianas (OS-12); metaanálisis de 102 artículos (OS-13). | **Moderada.** | 2022, 2025 | «Que la app marque esta ventana no dice nada de cómo se siente tu pareja.» | — |

### Añadidas el 06-11-2026 (bloque «Ovulación y embarazo»)

| ID | Afirmación | Fuente | Población de referencia | Nivel y motivo | Fecha | Formulación apta para Consona | Límite |
|---|---|---|---|---|---|---|---|
| OV-A12 | La «ventana fértil» es el intervalo de seis días que termina el día de la ovulación. En la cohorte de referencia solo hubo embarazos cuando hubo relaciones en ese intervalo, y las probabilidades más altas se dieron en los dos días anteriores a la ovulación. | OS-14 [V]; OS-15 [V-abs] | Opinión de comité de ASRM y SREI; 221 mujeres sanas que buscaban embarazo, 625 ciclos con ovulación estimada por metabolitos en orina (clásico). | **Consenso clínico** (OS-14), basado en una cohorte clásica sin equivalente reciente. | 1995, 2022 | «Un embarazo solo es posible en unos pocos días de cada ciclo: los cinco anteriores a la ovulación y el propio día de la ovulación.» | Sin probabilidades ni días del ciclo en la interfaz. |
| OV-A14 | Hay pocos días del ciclo en los que algunas personas no puedan quedarse embarazadas, incluido el día en que esperan la regla. Ningún método de calendario es completamente eficaz. | OS-06 [V] | 221 mujeres sanas que buscaban embarazo (clásico, independiente). | **Moderada.** | 2000 | «Hay muy pocos días del ciclo en los que un embarazo sea imposible, incluso el día en que se espera la regla.» | Sin días concretos. |
| OV-A13 | La ventana dura eso porque los espermatozoides pueden seguir siendo capaces de fecundar durante varios días, mientras que el óvulo solo puede ser fecundado durante poco tiempo: no hubo embarazos por relaciones posteriores al día de la ovulación, y algunos se debieron a espermatozoides de tres o más días. Con medidas precisas de la ovulación, la ventana fértil no se extiende más allá del día de la ovulación (OS-06). | OS-15 [V-abs]; OS-06 [V]; OS-14 [V] | Íd. | **Moderada.** Se deduce de la cohorte; no se han verificado en texto completo cifras exactas de horas o días de supervivencia. | 1995, 2022 | «Los espermatozoides pueden seguir siendo capaces de fecundar durante varios días, mientras que el óvulo solo puede ser fecundado durante poco tiempo.» | **Sin horas ni días exactos.** |
| OV-A15 | En España, los métodos basados en el calendario o en señales del cuerpo (Ogino, Billings, sintotérmico) son el método principal del 0,8 % de las mujeres de 15 a 49 años y la marcha atrás, del 1,4 %. La SEC los clasifica como «métodos poco eficaces». No se pregunta por las apps. | OS-16 [V] | 1.736 mujeres de 15 a 49 años representativas de España. | **Moderada** como dato descriptivo (autoinformado, no revisado por pares). | 2024 | No se usa en la pantalla. | El uso real de apps para decidir cuándo tomar precauciones sigue documentado solo de forma cualitativa (OS-09). |
| OV-A16 | Contexto español para el artículo de anticoncepción (JUA-31): el preservativo es el método principal más usado (36,5 %), y más de un tercio de quienes lo usan como principal no lo usa siempre (36,5 %) o se lo pone una vez iniciada la relación (30,2 %). El 23,2 % mantiene con bastante frecuencia relaciones sin método (30,9 % de quienes conviven en pareja). El 39,7 % ha usado alguna vez la píldora del día después. El 67,7 % ha consultado alguna vez a un profesional para elegir método (ginecología, medicina de familia, matrona o centro de planificación), y el 36 % lo eligió por iniciativa propia. Entre 15 y 19 años, las redes sociales influyen en la elección del 15,6 %. | OS-16 [V] | Íd. | **Moderada** como dato descriptivo. | 2024 | Solo para JUA-31, con revisión clínica. | No comparar la eficacia de los métodos sin fuente auditada. Sin contenido sobre la actividad sexual (H-05). |
| OV-A17 | **Dolor de ovulación (en investigación, D-05 de la pantalla).** Algunas personas notan un dolor a mitad de ciclo en un lado del bajo vientre. En los dos estudios clásicos con ecografía, suele ser **leve y corto** (6 a 12 horas, nunca más de 24 y sin necesidad de analgésicos), aparece **antes** de la ovulación (en el 91 %, en las 24 a 48 horas previas, coincidiendo con el pico de LH) y suele notarse en el lado del folículo. **En un ciclo dado lo nota una minoría:** el 35 % de 96 mujeres con ciclos regulares (Melbourne) y el 23 % de 62 ciclos de 15 mujeres sanas (Londres). No hay ningún estudio de población general sobre cuántas personas lo notan alguna vez en la vida: la cifra de «más del 40 %» procede de StatPearls sin fuente primaria, y la de «la mitad» de Marinho 1982 tampoco tiene fuente. Otros datos son de grupos concretos: 30,9 % en adolescentes jordanas; 13 % de dolor intermenstrual que limita la vida diaria en adolescentes de Bolonia; 67 % en una cohorte con endometriosis confirmada, asociado a sensibilización central. El NHS lo describe como «común», sin cifra. | OS-24 [V]; OS-25 [V]; OS-17 a OS-23 | 96 mujeres de una clínica de biología reproductiva, un ciclo (OS-24); 15 mujeres sanas de 23 a 35 años, 62 ciclos (OS-25); ver el resto de fichas. | **Limitada.** Los datos primarios son clásicos (1980, 1982), con muestras pequeñas y seleccionadas, pero coinciden entre sí y con los datos de adolescentes: una minoría en cada ciclo. | 1980–2026 | **No decidido.** | No dar cifras. No usarlo para deducir la ovulación (O-05): ambos estudios lo proponen como señal de fertilidad, que es justo lo que Consona excluye. Si se menciona, incluir cuándo consultar: el dolor fuerte o persistente a mitad de ciclo es frecuente en la endometriosis (OS-20). |

## 4. Qué puede afirmar la interfaz y qué debe evitar

### Puede afirmar

- Qué es la ovulación y que es un hecho puntual (OV-A01, OV-A02).
- Que su momento varía y que el «día 14» es un mito (OV-A03).
- Que la ventana de Consona es un cálculo aproximado que no detecta nada (OV-A04, OV-A05).
- Que no todos los ciclos tienen ovulación (OV-A06).
- Que la ventana **no sirve para buscar ni para evitar un embarazo**, y que para eso hace falta un método fiable y consejo profesional (OV-A07, OV-A08).
- Cómo se relacionan la ovulación y el embarazo, en términos generales y sin fechas (OV-A12, OV-A13). Decisión de producto del 06-11-2026: la salud reproductiva es contenido válido (D-04 de la pantalla).
- Que la ventana no dice nada de cómo se siente tu pareja (OV-A11).

### Debe evitar

- «Día de ovulación», «está ovulando», «días fértiles», «periodo fértil», «días seguros» (O-01).
- Probabilidades de embarazo, comparaciones de métodos o tasas de fallo.
- Señales corporales de la ovulación (O-05).
- Cualquier mención del deseo, el atractivo o la actividad sexual, tampoco para desmentirlos (H-05, O-04).
- Presentar la anovulación como un problema de salud de tu pareja.

## 5. Huecos de evidencia

- Los datos de gran tamaño sobre el momento de la ovulación proceden de la industria de los tests (OS-04, OS-05). La única fuente independiente equivalente (OS-06) es del año 2000.
- **Dolor de ovulación:** no hay ningún estudio de población general que diga cuántas personas lo notan alguna vez. Las cifras que circulan (20–40 %, «más del 40 %», «la mitad») no tienen fuente primaria. Los dos estudios clásicos con ecografía (OS-24, OS-25, verificados el 06-11-2026) dan una minoría en cada ciclo (23–35 %), con muestras pequeñas y seleccionadas.
- El uso del calendario y de otros métodos naturales en España está cuantificado (OV-A15, encuesta de la SEC de 2024), pero el uso de apps como método anticonceptivo no: solo hay evidencia cualitativa (OS-09).
- No se ha localizado ninguna fuente catalana específica.
