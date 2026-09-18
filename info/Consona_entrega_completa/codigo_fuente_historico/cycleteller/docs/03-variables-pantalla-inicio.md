# La decisión pendiente: qué variables mostrar en la pantalla de inicio

Juan anotó el 3 de septiembre de 2026 que no estaba convencido de las cuatro
variables actuales. Este documento resuelve esa decisión con evidencia y deja
las dos opciones implementadas para poder compararlas en pantalla.

**Para cambiar de una a otra:** `src/js/config.js`, campo `contentSet`, valores
`'v1'` o `'v2'`. Nada más. Ninguna otra parte del código depende de eso.

---

## 1. Qué había: el set v1

| Variable | Qué respondía |
|---|---|
| Intensidad emocional | Cómo se va a sentir ella |
| Límites | Cuánto espacio va a necesitar ella |
| Estilo de intimidad | Cuánto va a apetecerle el sexo a ella |
| Prioridad de descanso | Cuánto va a necesitar descansar ella |

## 2. Por qué el problema no se arregla cambiando las cuatro por otras cuatro

La intuición natural es buscar cuatro variables mejores. Pero **las cuatro
comparten el mismo defecto, y está en el eje, no en la elección**:

> Las cuatro predicen el estado interior de ella.

Y eso es a la vez **lo que la app no puede saber** y **lo que produce el daño**.

**Lo que no puede saber.** El producto encadena dos capas de incertidumbre. La
primera es la fase: menos del 1% de las mujeres mantiene la misma duración de
ciclo cuatro ciclos seguidos, y para un ciclo de 28 días el día real de
ovulación se dispersa 10 días. La segunda es la inferencia de su estado a partir
de esa fase: en 47 estudios con registro diario, el 38,3% no encontró ninguna
relación entre ánimo y fase, y solo el 14,8% halló el patrón premenstrual
clásico. Cuando el efecto existe, explica menos del 2% de la variación del ánimo
diario. **Se multiplica un error por otro, y la interfaz lo presenta con la
confianza visual de un dato.**

**Lo que produce el daño.** Y este es el hallazgo incómodo. Kowalski y Chapple
(2000) encontraron que cuando una mujer era entrevistada por hombres **que
sabían que estaba menstruando**, ella creía haber causado peor impresión y se
autoafirmaba menos. Forbes et al. (2003): estudiantes universitarios calificaron
a las mujeres menstruantes como *menos sexys, más impuras y más irritables*.
Roberts et al. (2002): ver caer un tampón bastó para que la mujer fuera
calificada como menos competente y menos agradable, y para que los participantes
se sentaran más lejos.

El mecanismo dañino no es que él sepa que ella menstrúa. **Es que la información
active la atribución antes de la interacción.** Una pantalla que dice "hoy está
en fase lútea, espera irritabilidad" es exactamente ese mecanismo, servido a
diario.

Y hay un efecto añadido: en experimentos donde se engañaba a las participantes
sobre su fase, **las que creían estar premenstruales reportaban más síntomas**,
al margen de la fase real. La app no es un observador neutral del fenómeno: es
un generador de expectativa.

**Conclusión:** cambiar "intensidad emocional" por otra variable sobre ella no
arregla nada. Hay que cambiar la pregunta.

---

## 3. Qué se propone: el set v2

El cambio en una frase:

> **v1 respondía "¿cómo está ella?". v2 responde "¿qué haces tú?".**

| Variable | Qué responde | Qué sustituye |
|---|---|---|
| **Qué pasa en su cuerpo** | Hecho fisiológico verificable | La parte de "intensidad emocional" que sí era cierta |
| **Qué puedes preguntarle** | Una pregunta literal, para hoy | "Límites", pero preguntando en vez de suponiendo |
| **Qué te toca a ti** | Una acción concreta de él | "Prioridad de descanso", pero como tarea suya |
| **Qué no asumir** | El antiestereotipo explícito | Nada. Es nueva, y es la más valiosa |

"Estilo de intimidad" no tiene sustituto. Se elimina (ADR-006).

### Por qué este eje sí tiene respaldo

Ussher y Perz (2017) hicieron un ensayo controlado aleatorizado con 83 mujeres
con trastornos premenstruales, comparando terapia cognitivo-conductual **de
pareja**, individual, y lista de espera. La condición de pareja fue claramente
superior en resultados de relación: **84% frente al 39%** reportó mayor
comprensión mutua y mejora de la relación.

Lo importante es el mecanismo: la intervención usaba **técnicas de diálogo de
pareja** y la implicación activa de él en desarrollar estrategias **conjuntas**.
No consistía en informarle a él sobre el humor de ella.
https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175068

Regla operativa que se deriva de esto, y que conviene escribir en la pared:

> **Cada pantalla debería terminar en una pregunta que él le hace a ella, no en
> una conclusión sobre ella.**

### La tarjeta "Qué no asumir" merece un párrafo aparte

Es la que convierte la mayor debilidad del producto en su mayor activo.

El riesgo central de esta app es reforzar el "está con la regla" como forma de
desestimar emociones legítimas. La respuesta más eficaz no es evitar el tema:
es **enseñarlo explícitamente**. El texto de la fase lútea dice literalmente:
*"si te sorprendes pensando «está así por la regla», esa es exactamente la
trampa"*.

Tres razones para destacarla en la interfaz (ocupa las dos columnas):

1. Es el contenido con mejor respaldo empírico de toda la app.
2. Es una defensa reputacional: demuestra que el producto sabe cuál es su riesgo.
3. **Ninguna app competidora lo hace.** Es el diferenciador real.

---

## 4. La necesidad de mercado es real. El mecanismo era el equivocado

Conviene decirlo, porque el resto de este documento es crítico y podría dar la
impresión contraria: **la premisa comercial del proyecto está validada.**

Moll López et al. (2023), *BMC Women's Health*, sobre alfabetización menstrual
en España:

- El **56%** puntuó 5 o menos sobre 10 en conocimiento de gestión menstrual.
- El **36%** no entendía con claridad qué era la menstruación.
- Emociones dominantes en la primera regla, sin cambios desde los años 50:
  vergüenza 23%, preocupación 20%, miedo 16%, estrés 15%.
- El conocimiento **reducía significativamente** esas emociones negativas.
- Cita de una participante: *"Mi novio tiene 36 años y tuve que explicarle… qué
  era la regla."*
- El estudio subraya que **quienes no menstrúan también necesitan educación**.

https://link.springer.com/article/10.1186/s12905-023-02293-4

El hueco existe. No se encontró ninguna app en español dirigida a hombres. Lo
que la evidencia dice es que ese hueco se llena con **educación y diálogo**, no
con predicción del estado de ánimo de una tercera persona.

---

## 5. Recomendación

**Adoptar v2.** Está activo por defecto en la configuración.

Si Juan quiere ver v1 para comparar, cambia una línea. Aun así, los textos de v1
en este paquete **ya están corregidos**: no se ha conservado la versión original
con las afirmaciones deterministas, porque enviar contenido que se sabe falso
no es una opción, ni siquiera como referencia.

## 6. Cómo comprobar si v2 funciona (cuando haya piloto)

No sirve preguntar "¿te ha gustado?". Tres preguntas que sí miden lo que importa:

1. *En el último mes, ¿has iniciado alguna conversación con tu pareja a raíz de
   algo que leíste en la app?* → mide si genera diálogo, que es el mecanismo con evidencia.
2. *¿Has usado alguna vez la app para anticipar cómo iba a estar ella?* → mide si
   el producto ha derivado hacia la predicción pese al diseño.
3. Y la que de verdad importa, si la opción de ADR-001 lo permite:
   **preguntarle a ella si le parece bien que él use esto.**
