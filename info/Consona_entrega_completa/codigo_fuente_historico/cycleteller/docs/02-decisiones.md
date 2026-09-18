# Registro de decisiones

Cada decisión se anota con su estado, su motivo y sus fuentes. Formato ADR
(Architecture Decision Record): sirve para que dentro de seis meses se sepa
**por qué** algo está como está, y para que nadie lo cambie sin saber qué pierde.

Estados: `ACEPTADA` · `PENDIENTE` · `SUSTITUIDA`

---

## ADR-001 — Quién es el titular de los datos del ciclo · **PENDIENTE. Es la decisión bloqueante.**

**El problema.** El diseño actual es: él introduce los datos de salud de ella,
ella no participa. Ella no tiene forma de ver qué hay guardado, de corregirlo
ni de borrarlo sin pedírselo a él.

**Por qué importa más que ninguna otra cosa.** De esta decisión dependen la base
legal, el riesgo reputacional, la arquitectura y hasta el contenido. Todo lo demás
del proyecto está construido encima.

**Las cuatro opciones, de mejor a peor:**

| | Modelo | Quién es titular | Valoración |
|---|---|---|---|
| **A** | Solo educación, sin ningún dato de ella | Nadie: no hay dato | **La más defendible.** Es lo que eligió Flo para su función de parejas: a la pareja se le da educación, no datos. Elimina de golpe el problema legal, el riesgo de vigilancia y el de inexactitud. |
| **B** | Ella invita desde su propia cuenta | Ella | Es el modelo de Clue y Natural Cycles. El único compatible con la práctica de la industria. Contradice el requisito "solo el hombre tiene cuenta". |
| **C** | Ella introduce sus datos en el móvil de él | Ambiguo | Mitiga la entrada sin permiso, pero no la revocabilidad: ella sigue sin poder borrar nada por su cuenta. |
| **D** | Él introduce, ella no participa | Nadie claro | **El modelo actual.** No lo usa ninguna app con escala real. |

**Dato de mercado relevante:** la generación 2025-2026 de apps de este nicho
(VibeCheck, MoonM8) ya compite explícitamente en el eje del consentimiento.
Lanzar el modelo D sitúa al producto, en percepción pública, junto a las apps de
2010-2016 que la prensa trató muy mal.

**Recomendación: opción A**, o B si se quiere conservar el calendario.

**Bloquea:** el piloto, la revisión legal, y cualquier decisión de marca.

---

## ADR-002 — Cálculo de fases anclado desde la siguiente regla · ACEPTADA

**Antes:** días fijos. Menstruación 1-5, folicular 6-13, ovulatoria 14-16, lútea 17+.

**Ahora:** la ventana ovulatoria se calcula como `[duración − 16, duración − 10]`.

**Motivo.** La fase que varía entre mujeres y entre ciclos es la folicular (la
primera), no la lútea. Anclar la ovulación en el día 14 solo funciona en un ciclo
de 28 días, y solo el 13% de los ciclos reales mide exactamente 28.

Error que se corrige, en un ciclo de 35 días: el modelo anterior decía que los
días 14-16 eran ovulatorios. Son foliculares. La ovulación cae hacia los días
19-25. **La app mostraba la fase equivocada durante más de una semana.**
Y asignaba a la fase lútea 19 días, una duración que no existe en fisiología humana.

**Efecto secundario positivo:** con el cálculo nuevo, la fase lútea siempre dura
entre 9 y 11 días, sea cual sea la duración del ciclo. Hay un test que lo comprueba.

**Fuentes.**
- NHS: la ovulación ocurre 10-16 días antes de la siguiente regla.
  https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/
- Bull et al. 2019, npj Digital Medicine, 612.613 ciclos: fase folicular media
  16,9 días (DE 5,3); duración media del ciclo 29,3 días; solo el 13% mide 28.
  Cita literal: *"It is a common belief that ovulation occurs on day 14 of the
  cycle, but our analysis has shown that for the majority of women in the
  real-world that this is not the case."*
  https://www.nature.com/articles/s41746-019-0152-7
- Human Reproduction 2024: la fase lútea no es fija de 13-14 días; mediana 10,9.
  https://academic.oup.com/humrep/article/39/11/2565/7775370

---

## ADR-003 — Aritmética de fechas en UTC · ACEPTADA

**Antes:** se restaban dos objetos `Date` en horario local y se dividía por 86.400.000.

**Problema:** los días de cambio de hora esa resta da 23 o 25 horas, y el
resultado se desplazaba un día entero. Ocurría dos veces al año (finales de marzo
y finales de octubre) y era invisible: la app simplemente mostraba mal la fase.

**Ahora:** todas las fechas se convierten a número de día en UTC antes de restar,
y se rechazan fechas imposibles como `2026-02-31`, que `Date.UTC` acepta en
silencio convirtiéndolas en el 3 de marzo. Hay tests para ambos casos.

---

## ADR-004 — Preguntar el método anticonceptivo · ACEPTADA

**Motivo.** Para una parte grande del público, el modelo de fases sencillamente
no aplica. La píldora, el anillo, el parche y el implante **suprimen la
ovulación**: sin ovulación no hay fase lútea, y el sangrado de la semana de
descanso es un sangrado por deprivación, no una regla.

En España, según la Encuesta de Anticoncepción 2024 de la Sociedad Española de
Contracepción (1.736 mujeres de 15 a 49 años):

| Método | % |
|---|---|
| Píldora | 18,0% |
| DIU hormonal | 5,0% |
| Anillo vaginal | 2,8% |
| Implante | 1,9% |
| Parche | 1,0% |
| Inyectable | 0,6% |
| **Total hormonales** | **25,3%** |

https://sec.es/encuesta-de-anticoncepcion-en-espana-2024/

**Comportamiento implementado.** Para métodos supresores, la app **no calcula
fases y lo dice**, y muestra contenido educativo alternativo. Para el DIU
hormonal avisa: muchas usuarias siguen ovulando, pero el sangrado deja de marcar
de forma fiable el día 1.

Esto es lo contrario de un caso de error: es reconocer un límite del producto.

---

## ADR-005 — Mostrar el margen de error y ocultar el número de día · ACEPTADA

**Antes:** "Día 17" en tipografía grande.

**Ahora:** "Probablemente en fase lútea. Estimación con un margen de ±2 días",
y se nombran las otras fases plausibles cuando el margen las alcanza.

**Motivo.** Un número exacto comunica una precisión que el cálculo no tiene.
Soumpasis et al. (2020): el 52% de las mujeres tiene ciclos que varían 5 días o
más entre ciclos consecutivos, y menos del 1% mantiene la misma duración cuatro
ciclos seguidos. Para un ciclo de 28 días, el día real de ovulación observado se
dispersa 10 días. https://pmc.ncbi.nlm.nih.gov/articles/PMC7164578/

El margen crece con los ciclos transcurridos desde la última actualización
(desviación típica intraindividual de 2,6 días, acumulada como raíz del número de
ciclos). Pasados 6 ciclos sin actualizar, la app deja de mostrar fase y lo dice.

Se puede volver al número exacto poniendo `showExactDayNumber: true` en
`src/js/config.js`, pero no se recomienda.

---

## ADR-006 — Eliminar la variable "estilo de intimidad" · ACEPTADA

**Qué se elimina.** La variable que indicaba la disposición de ella a la
intimidad sexual según la fase ("máxima receptividad", "se cierra, menos receptiva").

**Tres motivos independientes, cada uno suficiente por sí solo:**

1. **Riesgo de coerción.** Es la función que convierte la app de discutible en
   peligrosa. Está documentado el escenario de usar esta información para exigir
   sexo. Contexto: entre clientas de planificación familiar con historial de
   violencia de pareja, el 15% reportó sabotaje anticonceptivo por parte de su pareja.
2. **Ninguna app seria lo hace.** Clue oculta siempre el deseo sexual al
   compartir; Natural Cycles lo pone como campo opcional desactivado por defecto
   que activa **ella**. No existe precedente de compartirlo por defecto.
3. **La afirmación no se sostiene.** El pico ovulatorio del deseo existe en
   estudios bien diseñados, pero sus propios autores lo describen como
   *pequeño*, con variabilidad individual sustancial, y **ausente en usuarias de
   anticoncepción hormonal**. La otra mitad de la afirmación —el "se cierra" en
   fase lútea— no tiene respaldo: no se localizó evidencia de una caída lútea
   comparable en magnitud.

**Con qué se sustituye.** Contenido sobre consentimiento sexual y anticoncepción,
**no indexado por fase**. El mensaje es que el deseo se pregunta, no se calcula.
Está en la variable "Qué puedes preguntarle" de la fase ovulatoria.

**Añadido:** un menor de 16-17 años entra en el público objetivo. Una app
comparable (Greenlight) se clasifica 18+.

---

## ADR-007 — Reescribir los textos de estado de ánimo · ACEPTADA

**Antes (fase lútea):** *"Amplificada. Lo que ignora normalmente, ahora le
molesta. Irritabilidad, ansiedad o tristeza posible."*

**El problema no es el tono. Es que la afirmación no es cierta a nivel poblacional
y, además, produce el efecto que describe.**

**No es cierta.** Romans et al. (2012) revisaron 47 estudios con registro diario
prospectivo del ánimo:

| Patrón hallado | % de estudios |
|---|---|
| Ninguna asociación entre ánimo y fase | **38,3%** |
| Patrón premenstrual clásico | **14,8%** |

Conclusión de los autores: *"these studies failed to provide clear evidence in
support of the existence of a specific premenstrual negative mood syndrome in the
general population."*
https://einsteinlab.ca/wp-content/uploads/2016/07/7-Mood-and-the-menstrual-cycle.pdf

Y cuando el efecto sí existe, es pequeño: en un estudio diario con medición
hormonal en saliva, el estatus hormonal explicaba entre el **0,4% y el 1,9%** de
la varianza del bienestar psicológico. El otro 98% es el sueño, el trabajo, la
vida y la propia relación.

**Produce el efecto que describe.** En experimentos donde se engañó a las
participantes sobre en qué momento del ciclo estaban, **las que creían estar
premenstruales reportaron significativamente más síntomas**, con independencia de
la fase real. Una app que anuncia "es normal que esté irritable" está aplicando
esa misma manipulación, a diario y con la autoridad de una interfaz.

**Ahora:** lenguaje probabilístico y descripción poblacional en lugar de
afirmación sobre ella. Ver `data/content.v2.js`.

---

## ADR-008 — Eliminar Google Fonts · ACEPTADA

**Antes:** `@import url('https://fonts.googleapis.com/...')` dentro del CSS.

**Problema.** Cargar fuentes desde el dominio de Google transmite la IP del
visitante a Google. El Landgericht München I (sentencia de 20/01/2022, 3 O
17493/20) condenó a un operador web a indemnizar por exactamente eso, razonando
que **no cabe interés legítimo cuando la misma funcionalidad se obtiene alojando
las fuentes en el propio dominio**.

Se suma el requisito del propio proyecto: los datos no salen de Europa. Una
decisión de adecuación no equivale a residencia en Europa.

**Ahora:** pila de fuentes del sistema. Si se quiere tipografía de marca, se
descargan los `.woff2` y se declaran con `@font-face` local.
**La regla vale para todo recurso externo:** JS, CSS, iconos, mapas, píxeles.

---

## ADR-009 — Puerta de consentimiento antes del primer dato · ACEPTADA

Pantalla bloqueante con casilla **no premarcada**: *"Confirmo que mi pareja sabe
que uso esta app y está de acuerdo con que introduzca estos datos."* Sin marcarla
no se puede continuar. Se guarda la marca y su fecha en local.

**Motivo.** Los datos son categoría especial del Art. 9 RGPD (salud) y pertenecen
a una persona que no es la usuaria. Ver `docs/05-rgpd.md`.

**Limitación honesta:** una casilla no es consentimiento válido de ella. Es una
mitigación, no una solución. La solución es ADR-001.

---

## ADR-010 — Telemetría desactivada por defecto · ACEPTADA

`analytics.enabled = false` en `src/js/config.js` hasta que exista base legal
documentada y configuración verificada.

Cuando se active: región UE específica en Supabase (`eu-central-1` o
`eu-west-3`, **nunca** la región genérica "Europe", que incluye Londres y
Zúrich, fuera de la UE), DPA firmado, sin identificador persistente en el
dispositivo, IP truncada en servidor, y **jamás** la fecha de regla, la duración,
la fase ni el método anticonceptivo en el payload.

Referencia de lo que puede salir mal: la FTC sancionó a Flo Health en 2021 por
compartir datos sensibles con Facebook, Google, AppsFlyer y Flurry pese a
prometer lo contrario. El vector del daño fue el evento de analítica, no la base
de datos.
https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about

---

## ADR-011 — Un solo perfil, sin exportación ni historial · ACEPTADA

`maxProfiles: 1`. Sin exportar, sin sincronizar, sin gráficas retrospectivas.

**Motivo.** Recomendación literal de la investigación sobre abuso tecnológico en
la pareja (Freed et al., CHI 2018): *degradar deliberadamente la usabilidad para
usuarios adversariales manteniendo la experiencia del usuario legítimo*. Un
usuario legítimo no necesita seguir a dos personas ni exportar un histórico de
seis meses; alguien que quiere construir un expediente, sí.
https://nixdell.com/papers/stalkers-paradise-intimate.pdf
