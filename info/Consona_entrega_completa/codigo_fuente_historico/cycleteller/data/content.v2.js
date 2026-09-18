/**
 * content.v2.js — SET DE VARIABLES PROPUESTO (recomendado).
 *
 * EL CAMBIO EN UNA FRASE:
 * v1 respondía "¿cómo está ella?". v2 responde "¿qué haces tú?".
 *
 * POR QUÉ:
 * La app no puede saber cómo está ella. Puede saber, con margen de error, en qué
 * punto del ciclo está, y puede enseñarle a él qué hacer con esa información.
 * Predecir su interior es a la vez lo menos fiable y lo más dañino que puede hacer
 * el producto; enseñarle a él a preguntar y a actuar es lo único que tiene
 * respaldo empírico.
 *
 * EVIDENCIA QUE SOPORTA EL CAMBIO:
 *  - Ussher y Perz (2017), PLOS ONE, ensayo aleatorizado: la terapia DE PAREJA
 *    con técnicas de diálogo superó a la individual. 84% frente al 39% reportó
 *    mayor comprensión y mejora de la relación. Lo que funciona es el diálogo,
 *    no la transferencia de información sobre ella.
 *    https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175068
 *  - Romans et al. (2012): la premisa de v1 (fase → ánimo predecible) no se
 *    sostiene a nivel poblacional.
 *  - Kowalski y Chapple (2000): cuando el hombre sabe que ella menstrúa, ella se
 *    autoafirma menos. El daño lo produce la anticipación, no el conocimiento.
 *  - Moll López et al. (2023), BMC Women's Health: en España, el 56% puntúa 5 o
 *    menos sobre 10 en conocimiento menstrual y el 36% no entiende con claridad
 *    qué es la menstruación. LA NECESIDAD EDUCATIVA ES REAL. Solo hay que
 *    servirla por el lado correcto.
 *    https://link.springer.com/article/10.1186/s12905-023-02293-4
 *
 * LAS 4 VARIABLES NUEVAS:
 *  1. cuerpo        — hecho fisiológico verificable, no interpretación
 *  2. pregunta      — una pregunta literal que él puede hacerle hoy
 *  3. tu_parte      — una acción concreta de él, no una expectativa sobre ella
 *  4. no_asumas     — el antiestereotipo explícito. Ninguna app competidora lo hace.
 *
 * La variable "estilo de intimidad" NO tiene equivalente aquí, deliberadamente.
 * Ver docs/02-decisiones.md, ADR-006.
 */

export default {
  id: 'v2',
  label: 'Set propuesto (recomendado)',
  variables: {
    cuerpo: 'Qué pasa en su cuerpo',
    pregunta: 'Qué puedes preguntarle',
    tu_parte: 'Qué te toca a ti',
    no_asumas: 'Qué no asumir'
  },
  phases: {
    menstruacion: {
      cuerpo:
        'El revestimiento del útero se desprende. El sangrado suele durar entre 2 y 8 ' +
        'días. Las contracciones del útero para expulsarlo son la causa del dolor ' +
        'menstrual, que es muy frecuente.',
      pregunta:
        '«¿Cómo llevas el dolor hoy? ¿Te viene mejor plan tranquilo o te da igual?» ' +
        'Preguntar cuesta cinco segundos y acierta más que cualquier predicción.',
      tu_parte:
        'Encárgate de la logística sin que te lo pida: la compra, la cena, la colada. ' +
        'Ten en casa lo que ella use. Si tenéis planes que no le apetecen, propón tú ' +
        'cambiarlos, para que no tenga que ser ella quien cancele.',
      no_asumas:
        'No asumas que le duele, ni que no le duele. El dolor menstrual va desde nada ' +
        'hasta incapacitante, y varía entre ciclos de la misma persona. Tampoco asumas ' +
        'que necesita estar sola: apartarte cuando ella está mal es la conducta de ' +
        'pareja que MÁS empeora las cosas, según los estudios.'
    },
    folicular: {
      cuerpo:
        'Varios folículos empiezan a madurar en el ovario y el estrógeno sube poco a ' +
        'poco. Es la fase más larga y también la que más varía en duración: es la ' +
        'razón de que los ciclos no midan todos lo mismo.',
      pregunta:
        '«¿Te apetece que planeemos algo para esta semana o prefieres improvisar?» ' +
        'Buen momento para hablar de planes, no porque ella esté "más receptiva", ' +
        'sino porque es una fase larga y estable para organizarse.',
      tu_parte:
        'Si hay una conversación pendiente que habéis ido aplazando, ábrela tú. Y si ' +
        'la última regla fue dura, es el momento de preguntarle si quiere que la ' +
        'acompañes al médico.',
      no_asumas:
        'No asumas que "ya está bien" y que el tema del ciclo se ha terminado hasta la ' +
        'próxima regla. Y no uses esta fase como la ventana en la que sí se puede ' +
        'hablar de cosas serias: eso convierte al resto del mes en terreno prohibido.'
    },
    ovulatoria: {
      cuerpo:
        'Un óvulo se libera del ovario. Ocurre entre 10 y 16 días ANTES de la ' +
        'siguiente regla, no el día 14. Es la ventana en la que un embarazo es ' +
        'posible, y su momento exacto no se puede saber con un calendario.',
      pregunta:
        '«¿Estamos los dos tranquilos con el método anticonceptivo que usamos?» ' +
        'Esta es la conversación que de verdad importa en esta fase, y es de los dos.',
      tu_parte:
        'Infórmate tú del método que usáis: cómo funciona, qué eficacia real tiene, ' +
        'qué efectos secundarios puede dar. En la mayoría de las parejas, la carga ' +
        'mental de la anticoncepción la lleva ella entera.',
      no_asumas:
        'No asumas que esta app te dice cuándo hay riesgo de embarazo: NO SIRVE COMO ' +
        'ANTICONCEPTIVO. Solo alrededor de un tercio de las mujeres tiene su ventana ' +
        'fértil donde el calendario la predice. Y no asumas nada sobre su deseo ' +
        'sexual: eso se pregunta, no se calcula.'
    },
    lutea: {
      cuerpo:
        'El folículo vacío produce progesterona y prepara el útero. Si no hay ' +
        'embarazo, las hormonas caen y empieza la regla. Esta fase dura entre 10 y ' +
        '16 días, y es la más estable de las cuatro.',
      pregunta:
        '«¿Hay algo estos días que te esté pesando más de lo normal?» Fíjate en que ' +
        'la pregunta no menciona el ciclo. Si ella lo relaciona, lo dirá ella.',
      tu_parte:
        'Baja tu propio nivel de exigencia con los planes, no el de ella. Si surge una ' +
        'discusión, quédate en lo que la ha provocado. Y revisa si el reparto de ' +
        'tareas de casa es justo: eso pesa todos los días del mes.',
      no_asumas:
        'Esta es la fase donde más se falla, así que léelo entero: si te sorprendes ' +
        'pensando «está así por la regla», esa es exactamente la trampa. Está ' +
        'documentado que atribuir sus emociones al ciclo hace que se la tome menos en ' +
        'serio y que ella misma se autoafirme menos. Si ella está enfadada, ' +
        'probablemente tenga un motivo. Búscalo ahí, no en el calendario.'
    }
  },

  /**
   * Contenido para cuando el método anticonceptivo suprime la ovulación y no hay
   * fases que mostrar. No es una pantalla de error: es una pantalla con contenido
   * distinto y también útil.
   */
  sinFases: {
    cuerpo:
      'Los métodos hormonales combinados (píldora, anillo, parche) y el implante ' +
      'suprimen la ovulación: impiden que el folículo madure y que se libere el óvulo. ' +
      'Sin ovulación no hay fase lútea. El sangrado de la semana de descanso se llama ' +
      'sangrado por deprivación y no es una regla.',
    pregunta:
      '«¿Cómo te va con el método que usas? ¿Te da efectos secundarios que no me hayas ' +
      'contado?» Es una pregunta que casi nadie hace y que casi todas agradecen.',
    tu_parte:
      'Aprende cómo funciona el método concreto que ella usa. Si hay que ir a por ' +
      'recetas o renovarlo, encárgate tú alguna vez.',
    no_asumas:
      'No asumas que sigue teniendo "fases". Con estos métodos no las tiene, y ' +
      'cualquier app que te diga lo contrario se lo está inventando. En España, ' +
      'alrededor de una de cada cuatro mujeres en edad fértil usa un método hormonal.'
  }
};
