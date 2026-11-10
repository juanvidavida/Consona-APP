# Fase lútea — informe temático

**Issue:** JUA-36.
**Fecha de investigación:** 06-11-2026.
**Alcance:** educación sobre la fase lútea para la pareja que acompaña. No es una guía diagnóstica, de tratamiento ni anticonceptiva.
**Fuentes:** fichas en [`02-auditoria-fuentes.md`](./02-auditoria-fuentes.md), con identificador LS-xx. Criterios en [`../README.md`](../README.md).
**Relación con otras investigaciones:** este informe reúne lo que ya estaba auditado y lo completa:

- la definición de la fase, en `../../jua-10/01-cycle-phases.md`;
- la deficiencia lútea, en `../../jua-10/audit-02-asrm-lpd.md`;
- el SPM y el TDPM, en `../../jua-10/audit-07-rcog-pms.md` y en la pantalla `spm-tdpm-v0.4.0.md` (JUA-19, PR #9);
- las duraciones, en JUA-27 (PR #12).

También reutiliza fuentes ya verificadas en las otras tres fases. Esas fuentes conservan su ficha original y aquí solo se resume su uso.

## 1. Conclusión operativa

La fase lútea va desde la ovulación hasta el día antes de la siguiente menstruación. Tras liberar el óvulo, el folículo se transforma en el cuerpo lúteo, una estructura temporal que produce sobre todo progesterona. La progesterona prepara el revestimiento del útero por si hubiera un embarazo. Si no lo hay, el cuerpo lúteo deja de funcionar, bajan la progesterona y los estrógenos, y eso desencadena la menstruación.

**Duración.** La mediana es de unos 12 días. Varía menos que la fase folicular, que es la que explica sobre todo que un ciclo sea más largo o más corto. Aun así, la fase lútea también cambia dentro de la misma persona. La cifra fija de 14 días es una simplificación de manual que los estudios con marcadores de ovulación no confirman.

**Lo que Consona puede y no puede saber.** Consona dibuja la fase lútea con 12 días contados hacia atrás, porque con fechas de regla no puede saber cuándo hubo ovulación. Tampoco sabe si la hubo: en un ciclo sin ovulación no hay fase lútea, aunque la rueda la dibuje. Por eso, una duración lútea, estimada o medida, no diagnostica nada. No existe una prueba fiable de «deficiencia lútea».

**El estereotipo.** Es la fase con la carga más dañina: la mujer «premenstrual» irritable, irracional o fuera de control. La evidencia apunta en otra dirección:

- el ánimo varía poco en promedio;
- muchas personas no muestran ningún cambio ligado al ciclo;
- en población general, la salud, el estrés y el apoyo social predicen el ánimo diario mucho mejor que la fase;
- las expectativas culturales sesgan lo que se recuerda y se declara.

Los cambios premenstruales existen y en algunas personas son importantes; para eso están los términos clínicos SPM y TDPM. Pero la fase no explica cómo está ni qué siente una persona concreta.

## 2. Definiciones de trabajo

> **Fase lútea:** fase del ciclo ovárico que empieza tras la ovulación y termina el día antes de la siguiente menstruación. Presupone que hubo ovulación. Su equivalente en el útero es la **fase secretora**.

> **Cuerpo lúteo:** estructura temporal que se forma en el ovario a partir del folículo que liberó el óvulo. Produce sobre todo progesterona, y también estradiol.

> **Progesterona:** hormona que transforma el revestimiento del útero, ya engrosado por los estrógenos, para que pueda recibir un embrión.

> **Días premenstruales:** expresión temporal para los últimos días antes de la regla. No es una fase clínica ni equivale a SPM.

## 3. Afirmaciones auditadas

| ID | Afirmación | Fuente | Población de referencia | Nivel y motivo | Fecha | Formulación apta para Consona | Límite |
|---|---|---|---|---|---|---|---|
| LU-A01 | La fase lútea empieza tras la ovulación y termina el día antes de la siguiente menstruación. Por definición, presupone que hubo ovulación. | `jua-10/01` [V] (ASRM; Schmalenberger 2021); LS-01 [V] | Fisiología humana; material clínico. | **Consenso clínico.** | 2018–2026 | «La fase lútea va desde la ovulación hasta la siguiente menstruación.» | La app no la confirma: solo la estima. |
| LU-A02 | Tras la ovulación, el folículo se transforma en el cuerpo lúteo, un órgano endocrino transitorio que segrega sobre todo progesterona. Su función principal es preparar el endometrio, ya preparado por los estrógenos, para la implantación. En el útero es la fase secretora. | LS-01 [V]; LS-02 [V] | Fisiología humana; revisiones de referencia. | **Alta** para la fisiología general. | 2018, 2022 | «El folículo que liberó el óvulo se transforma en el cuerpo lúteo, que produce sobre todo progesterona. La progesterona prepara el revestimiento del útero por si hubiera un embarazo.» | No explicar estados, ánimo ni conducta por la progesterona. |
| LU-A03 | Sin embarazo, la función del cuerpo lúteo empieza a decaer de 9 a 11 días después de la ovulación. Caen la progesterona y el estradiol, y la caída de la progesterona desencadena la menstruación. | LS-01 [V]; ME-A02 (S-01, S-02 [V]) | Íd. | **Alta.** | 2018, 2020, 2022 | «Si no hay embarazo, el cuerpo lúteo deja de funcionar al cabo de unos días, bajan las hormonas y empieza la menstruación.» | Sin días concretos en la interfaz. |
| LU-A04 | La mediana de la fase lútea es de unos 12 días: media de 11,7 ± 2,8 y mediana de 12 en tres cohortes agrupadas; 12,4 ± 2,4 en datos de una app; 12,77 ± 1,86 con LH en orina. ASRM describe un intervalo típico de 12 a 14 días y un rango de 11 a 17. La cifra fija de 14 días procede de fuentes de manual y de estudios que excluyen por construcción las fases cortas. | LS-04 [V]; LS-05 [V]; LS-06 [V]; LS-08 [V]; JUA-27 §2 [V] | 581 mujeres de 18 a 40 años, mayoritariamente blancas (LS-04); usuarias de apps de dos empresas (LS-05, LS-06). | **Moderada.** Tres métodos coinciden; dos fuentes tienen conflicto de interés. | 2019–2026 | «Suele durar unos 12 días, aunque cambia de una persona a otra.» | No es la duración de nadie en concreto. |
| LU-A05 | La fase lútea varía menos que la folicular, y la variación de la duración del ciclo depende sobre todo de la folicular. Pero también cambia dentro de la misma persona: en el 58,8 % de las mujeres, su duración varió más de 3 días entre ciclos. No se asocia con la edad. | LS-04 [V]; LS-07 [V]; LS-05 [V]; LS-09 [V]; `jua-10/01` [V] | Íd.; 949 mujeres británicas que buscaban embarazo (LS-09). | **Moderada.** | 2018–2024 | «Varía menos que la fase folicular: cuando un ciclo es más largo o más corto, suele ser porque la fase folicular ha durado más o menos. Aun así, también cambia de un ciclo a otro.» | — |
| LU-A06 | Contar días desde una fecha de regla no identifica cuándo empezó la fase lútea, y como método aislado clasifica mal las fases intermedias y lúteas. Consona dibuja la fase lútea con 12 días, contados hacia atrás desde la fecha prevista de la siguiente regla. | `jua-10/01` [V] (Allen 2016); JUA-27 §3 y §4 [V] | Revisión de 146 estudios bioconductuales. | **Moderada.** | 2016, 2026 | «Consona dibuja la fase lútea con 12 días, contados hacia atrás desde la fecha prevista de la siguiente regla. Es una estimación.» | La lútea de 12 días no se personaliza (JUA-27). |
| LU-A07 | Algunos ciclos de duración normal no tienen ovulación, y por tanto tampoco fase lútea propiamente dicha. En un estudio con población general, al menos uno de cada cuatro ciclos de duración normal no mostraba signos de ovulación. | LS-10 [V] (= OS-07); `jua-10/01` [V] | Población general noruega, una medición de progesterona, edad media de 41,7 años. | **Moderada.** | 2015 | «En algunos ciclos no hay ovulación, y entonces tampoco hay fase lútea, aunque la rueda la siga dibujando.» | No presentar la anovulación como un problema (SGO-04). |
| LU-A08 | Una duración lútea, aislada o estimada, no permite diagnosticar «deficiencia de fase lútea» ni infertilidad. Ninguna prueba ha distinguido de forma fiable entre personas fértiles e infértiles, y la propia definición varía (≤ 9, ≤ 10 u ≤ 11 días). En las cohortes, el 18 % de los ciclos tiene una fase lútea de menos de 10 días. | LS-08 [V]; LS-04 [V] | Opinión de comité ASRM/SREI; cohortes agrupadas. | **Pendiente de evidencia** (diagnóstico); **consenso clínico** (límite). | 2020, 2026 | «Una duración, calculada o medida, no dice nada sobre la salud o la fertilidad de nadie.» | **Sin umbrales en la interfaz.** No mencionar la deficiencia lútea. |
| LU-A09 | Hacia el final de la fase, algunas personas notan cambios físicos o emocionales (por ejemplo, dolor, hinchazón, cansancio, irritabilidad, tristeza o tensión, cambios en el sueño o el apetito). Otras no notan ninguno, y en una misma persona varían de un ciclo a otro. SPM y TDPM son términos clínicos que exigen un patrón repetido e impacto importante en la vida diaria; los valora un profesional. | LS-11 [V] (NICE CKS 2024; ACOG CPG 7, 2023; ACOG FAQ057, 2025); `spm-tdpm-v0.4.0.md` SPM-03 | Guías clínicas; personas en edad reproductiva. | **Consenso clínico.** | 2023–2025 | «Hacia el final de esta fase, algunas personas notan cambios en el cuerpo o en el ánimo. Otras no notan ninguno, y en una misma persona puede cambiar de un ciclo a otro.» | No convertir los ejemplos en lista para vigilar. No asignar SPM ni TDPM. |
| LU-A10 | En promedio, el ánimo varía poco a lo largo del ciclo. La bajada media antes de la regla es pequeña (amplitud del 5,5 % en la escala feliz-triste) aunque aparece en los 87 países estudiados. Lo que más pesa son las diferencias individuales: alrededor del 43 % de las universitarias estudiadas no mostraba cambio cíclico del ánimo. En una muestra aleatoria de población general, la salud física, el estrés y el apoyo social predecían el ánimo diario mucho mejor que la fase; los resultados no respaldan la creencia común de una disforia premenstrual específica. Las asociaciones entre hormonas y bienestar son muy pequeñas. | LS-12 [V]; LS-13 [V]; LS-14 [V]; LS-15 [V] | 3,3 millones de usuarias de una app (LS-12); 76 mujeres de Toronto captadas por llamada aleatoria (LS-13, clásico); universitarias italianas (LS-14); 22 universitarias neerlandesas (LS-15). | **Moderada.** Coherente entre diseños; LS-12 con conflicto de interés; LS-14 y LS-15 con muestras universitarias. | 2013–2025 | «En promedio, el ánimo varía poco a lo largo del ciclo, muchas personas no notan ningún cambio ligado a él, y en el día a día pesan mucho más la salud, el estrés y el apoyo.» | Una media no dice cómo está tu pareja. |
| LU-A11 | No hay cambios cognitivos sistemáticos a lo largo del ciclo. En deportistas con la fase verificada en sangre, el rendimiento y el esfuerzo percibido no cambian en la fase lútea; el único efecto descrito en metaanálisis es trivial y se da en la fase folicular temprana. | LS-16 [V] (= S-15); LS-17 [V] (= FS-12, España); LS-20 [V-abs] (= FS-14, Noruega); S-16 [V] | Metaanálisis de 102 artículos (LS-16); 21 deportistas de Madrid (LS-17); 21 deportistas de resistencia, variables fisiológicas (LS-20); 78 estudios (S-16). | **Moderada.** | 2020, 2021, 2025 | «La investigación no muestra que en esta fase cambie la capacidad de concentrarse, razonar o rendir.» | No dar pautas de trabajo, estudio ni ejercicio. |
| LU-A12 | Existe un estereotipo cultural de la mujer «premenstrual» violenta, irracional, emocionalmente inestable o fuera de control, difundido por la publicidad, los medios y los objetos «humorísticos». Marca a las mujeres como enfermas o descontroladas. Las expectativas culturales sesgan además lo que se declara: quien ha aprendido a esperar malestar premenstrual tiende a informar más de él. | LS-18 [V]; LS-13 [V] | Revisión teórica de estudios mayoritariamente estadounidenses (LS-18); muestra de Toronto (LS-13). | **Moderada** para la existencia del estereotipo y del sesgo de expectativa. | 2013, 2020 | «La imagen de la mujer "premenstrual" irritable o fuera de control es un estereotipo, y hace daño.» | Nombrarlo solo para desmentirlo (SGL-01). |
| LU-A13 | Atribuir un enfado o una tristeza al ciclo puede quitar valor a lo que una persona dice o siente. Una asociación temporal con una fase no demuestra que la fase cause un estado o una conducta. En Barcelona, algunas mujeres consideran a su pareja más fiable que ellas mismas para saber si tienen cambios emocionales con el ciclo. | `jua-10/01` [V] (Schmalenberger 2021); `jua-10/12` EC-02, EC-07 [V]; LS-19 [V] (= S-13) | Revisión metodológica; estudio cualitativo de Barcelona (34 personas). | **Limitada** para las atribuciones conductuales; **limitada** (cualitativo) para el papel de la pareja. | 2020, 2022 | «Que en la rueda aparezca esta fase no te dice cómo está tu pareja. Si notas tensión, pregunta en lugar de atribuirlo al ciclo.» | La pareja no es intérprete del ciclo (T-02). |
| LU-A14 | Ante pensamientos de hacerse daño o de suicidio, o si alguien no está a salvo, se busca ayuda urgente: 112, 024 (también para familiares y allegados) y 016. | `spm-tdpm-v0.4.0.md` DER-02 y D-03, D-04 [V] (fuentes oficiales, 07-10-2026) | Recursos públicos españoles. | **Marco institucional.** | 2026 | Texto de DER-02 de la pantalla SPM/TDPM, sin cambios. | Recursos solo para España (CON-025 pendiente). |

## 4. Qué puede afirmar la interfaz y qué debe evitar

### Puede afirmar

- Qué ocurre en general en el ovario y en el útero durante la fase, con la progesterona incluida (LU-A01 a LU-A03).
- Que suele durar unos 12 días, varía menos que la folicular, pero también cambia, y que los 14 días fijos son una simplificación (LU-A04, LU-A05).
- Que la fase que muestra Consona es una estimación y que en algunos ciclos no hay ovulación ni fase lútea (LU-A06, LU-A07).
- Que algunas personas notan cambios antes de la regla y otras no, y que SPM y TDPM son términos clínicos (LU-A09).
- Que el ánimo varía poco en promedio, que la capacidad de pensar o rendir no cambia y que el estereotipo «premenstrual» no se sostiene (LU-A10 a LU-A12).

### Debe evitar

- «Está premenstrual», «está en su fase lútea», «hoy puede estar más sensible».
- Explicar enfados, tristezas, conflictos o decisiones por la fase o por la progesterona.
- Umbrales de duración, «fase lútea corta», «deficiencia lútea», «progesterona baja».
- Temperatura basal u otras señales del cuerpo como forma de saber en qué fase está alguien.
- Cifras de prevalencia de SPM o TDPM: están en SPM-06, pendientes de la revisión clínica.
- Tratamientos, suplementos o pautas.
- Cualquier alusión al deseo o a la actividad sexual (H-05).

## 5. Huecos de evidencia

- No se ha localizado un estudio español ni catalán verificado sobre síntomas premenstruales en población general. Las fuentes españolas de esta fase son un estudio con deportistas de Madrid (LS-17) y el estudio cualitativo de Barcelona (LS-19).
- Los datos de duración proceden de muestras mayoritariamente blancas y jóvenes, o de usuarias de apps con conflicto de interés.
- El único estudio con muestra aleatoria de población general sobre el ánimo es de 2013 (LS-13).
- El metaanálisis de prevalencia del TDPM que cita la pantalla SPM/TDPM no está auditado en JUA-10 (D-02 de JUA-19).
- No hay estudios sobre cómo deberían actuar las parejas durante esta fase. Las recomendaciones de Consona son editoriales, coherentes con la evidencia pero no derivadas de ella.
