# Ventana ovulatoria estimada — análisis de sesgo de género

**Issue:** JUA-36.
**Fecha:** 06-11-2026.
**Criterios:** C1 a C5 de [`../README.md`](../README.md).

## 1. Por qué importa en esta fase

En esta fase coinciden los tres riesgos más graves para Consona:

1. **El estereotipo sexual.** La ovulación se asocia en la cultura popular, y en parte de la psicología evolucionista, a «más deseo», «más atractivo» o «más receptiva». Es la forma más directa de que una app para parejas convierta el ciclo en una señal sobre la disponibilidad de la otra persona, lo que el marco de Consona prohíbe (H-05).
2. **La falsa certeza reproductiva.** Una ventana de calendario puede leerse como «días fértiles» o «días seguros». OS-09 muestra que hay usuarias en España que se guían así.
3. **La invisibilidad de la variación.** El «día 14» y el ciclo de 28 días se presentan como norma, aunque solo un 12–15 % los tiene, y no todos los ciclos tienen ovulación.

## 2. Evaluación de las fuentes

| ID | C1 | C2 | C3 | C4 | C5 | Observaciones | Efecto en el uso |
|---|---|---|---|---|---|---|---|
| OS-01 Reed y Carr 2018 | Sí | Sí | Sí | — | — | Repite el día 14 como norma. | Solo el mecanismo. |
| OS-04 Johnson 2018 | Sí | Sí | Sí | Parcial | Sí, **con conflicto** | La empresa que vende tests de ovulación concluye que las apps no predicen la ovulación: el resultado favorece a su producto. Financiado por la empresa, con autores empleados o asesores, y aprobado por el comité ético de la propia empresa. | Solo como dato coherente con fuentes independientes. |
| OS-05 Soumpasis 2020 | Sí | Sí | Sí | No | Sí, **con conflicto** | Misma empresa; usuarias que compraron su test; sin datos demográficos. | Íd. |
| OS-06 Wilcox 2000 | Sí | Sí | Sí | Parcial | Sí | Independiente, pero antiguo. Mujeres que buscaban embarazo, mayoritariamente blancas y universitarias (declarado). | Variabilidad y límite anticonceptivo, sin cifras de fertilidad. |
| OS-07 Prior 2015 | Sí | Sí | Sí | Sí | Sí | Cuestiona la idea de que una regla regular garantice la ovulación. Muestra poblacional, aunque de edad media alta. | Anovulación como fenómeno frecuente e intermitente. |
| OS-09 Levy y Romo-Avilés 2019 | Sí | Sí | Sí | Sí | Sí | Perspectiva de estudios de las mujeres y de género. | Fuente española sobre el uso real de las apps. |
| OS-11 Jones 2018 | Sí | Parcial | Sí | **No** | Sí | Estudia una hipótesis que vincula el ciclo con la atracción (C2), aunque para refutarla. Muestra solo de mujeres blancas heterosexuales. | Solo para justificar que el estereotipo no tiene base sólida. |

## 3. Patrones de sesgo detectados

1. **La industria produce los datos.** Las dos mayores fuentes sobre el momento de la ovulación son de la empresa que vende los tests (OS-04, OS-05). Su conclusión, que el calendario falla, coincide con su interés comercial. Se usa porque coincide con fuentes independientes (OS-06, OS-07, JUA-27), nunca en solitario.
2. **La narrativa de la «mujer fértil».** La idea de que la ovulación cambia el deseo y la atracción se apoyó en estudios pequeños y no se ha confirmado en el más grande (OS-11). Además, la investigación se centra casi siempre en mujeres heterosexuales y en su atracción hacia hombres: es heteronormativa.
3. **El día 14 como norma.** Persiste incluso en fuentes clínicas (OS-01) y hace que la mayoría de los ciclos parezcan «irregulares».
4. **Certeza vendida por las apps.** Las apps muestran fechas exactas de ovulación que no pueden conocer, y hay quien las usa para decidir sobre la anticoncepción (OS-04, OS-09).
5. **La anovulación invisible.** Se da por hecho que toda regla regular viene tras una ovulación (OS-07).

## 4. Consecuencias editoriales

| ID | Regla | Origen |
|---|---|---|
| SGO-01 | Ninguna referencia al deseo, el atractivo, la receptividad ni la actividad sexual, tampoco para desmentirlos (O-04, H-05). | Patrón 2 |
| SGO-02 | La pantalla dice expresamente que la ventana no sirve para buscar ni para evitar un embarazo, y remite a un profesional o a un servicio de salud sexual y reproductiva. | Patrón 4; OS-08, OS-09 |
| SGO-03 | La ventana se presenta siempre como un cálculo aproximado, nunca como una fecha. | Patrones 3 y 4 |
| SGO-04 | La pantalla explica que no todos los ciclos tienen ovulación, sin presentarlo como un problema. | Patrón 5 |
| SGO-05 | Ninguna cifra de una fuente con conflicto de interés aparece en la interfaz. | Patrón 1 |
