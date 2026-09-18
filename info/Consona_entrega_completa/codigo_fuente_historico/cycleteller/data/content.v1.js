/**
 * content.v1.js — SET DE VARIABLES ORIGINAL (el que estaba en el prototipo).
 *
 * ATENCIÓN, AGENTE QUE LEE ESTO:
 * Este archivo se conserva SOLO para poder comparar con v2 y para no perder el
 * trabajo hecho. No es la opción recomendada. Ver docs/03-variables-pantalla-inicio.md.
 *
 * Las 4 variables originales eran:
 *   intensidad_emocional, limites, estilo_intimidad, prioridad_descanso
 *
 * DOS PROBLEMAS, uno de contenido y otro de estructura:
 *
 * 1. CONTENIDO. Los textos originales afirmaban como universal lo que la
 *    evidencia dice que es minoritario. El texto original de la fase lútea era:
 *    "Amplificada. Lo que ignora normalmente, ahora le molesta." La revisión de
 *    47 estudios prospectivos de Romans et al. (2012) encontró que el 38,3% de
 *    los estudios NO halla ninguna asociación entre ánimo y fase, y solo el
 *    14,8% halla el patrón premenstrual clásico. Los textos de abajo están
 *    CORREGIDOS respecto al original: se ha añadido lenguaje probabilístico.
 *
 * 2. ESTRUCTURA. Y este problema no se arregla reescribiendo frases. Las cuatro
 *    variables describen el ESTADO INTERIOR DE ELLA, que es justo lo que la app
 *    no puede saber y lo que la literatura señala como mecanismo de daño
 *    (Kowalski y Chapple, 2000: cuando el hombre sabe que ella está menstruando,
 *    ella se autoafirma menos). Por eso existe v2.
 *
 * La variable "estilo_intimidad" se ha ELIMINADO incluso de esta versión.
 * Ver docs/02-decisiones.md, ADR-006. No es una cuestión de redacción.
 */

export default {
  id: 'v1',
  label: 'Set original (no recomendado)',
  variables: {
    intensidad_emocional: 'Intensidad emocional',
    limites: 'Límites',
    prioridad_descanso: 'Prioridad de descanso'
  },
  phases: {
    menstruacion: {
      intensidad_emocional:
        'Puede variar bastante de un día a otro. Hay quien se siente peor durante el ' +
        'sangrado y quien nota alivio al llegarle la regla. No hay un patrón único.',
      limites:
        'Algunas mujeres prefieren más espacio o menos planes estos días. Otras no ' +
        'cambian nada. La única forma de saberlo es preguntar.',
      prioridad_descanso:
        'El dolor menstrual es muy común y el cansancio también. Si ella los tiene, ' +
        'descansar es razonable que sea prioridad.'
    },
    folicular: {
      intensidad_emocional:
        'Es frecuente notar una mejora de ánimo y de energía en los días posteriores ' +
        'a la regla, aunque no le pasa a todo el mundo.',
      limites:
        'Sin patrón documentado. Los límites de una persona no dependen de la fase ' +
        'del ciclo: dependen de ella y del momento.',
      prioridad_descanso:
        'Suele ser la fase con más energía disponible, pero eso no la obliga a nada.'
    },
    ovulatoria: {
      intensidad_emocional:
        'Hay estudios que encuentran un aumento pequeño de la autopercepción de ' +
        'atractivo en estos días. El efecto es pequeño y desaparece con ' +
        'anticoncepción hormonal.',
      limites:
        'Sin patrón documentado.',
      prioridad_descanso:
        'Sin necesidad especial documentada para esta fase.'
    },
    lutea: {
      intensidad_emocional:
        'Es la fase de la que más se habla, y de la que más se exagera. En estudios ' +
        'con registro diario, alrededor del 38% no encuentra ninguna relación entre ' +
        'ánimo y fase del ciclo. Cuando el efecto existe, explica menos del 2% de la ' +
        'variación del ánimo diario: el 98% restante son el sueño, el trabajo, la ' +
        'vida y vuestra relación.',
      limites:
        'Si ella pone un límite estos días, es un límite. No es la fase hablando.',
      prioridad_descanso:
        'Los cambios de sueño en esta fase están documentados sobre todo en mujeres ' +
        'con síndrome premenstrual, no en todas.'
    }
  }
};
