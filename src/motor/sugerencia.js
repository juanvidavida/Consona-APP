/**
 * Sugerencias de actualización de la app de ella.
 *
 * Traduce el estado que devuelve el motor de estimación (CON-032, JUA-48) en,
 * como mucho, una sugerencia dentro de la app para que ella añada o corrija una
 * fecha. No calcula nada del ciclo: reutiliza las reglas del motor. Es puro: el
 * reloj se inyecta (`hoy`) y no lee ni escribe almacenamiento, red ni DOM.
 *
 * Momentos de evaluación (los aplica la app, no este módulo):
 * - al cargar la app;
 * - al volver a primer plano (`visibilitychange` a visible) y en `pageshow`;
 * - después de registrar, corregir o borrar una fecha, cambiar permisos o retirar.
 * No hay avisos con la app cerrada ni servidor de notificaciones (DA-11).
 *
 * El aplazamiento («Ahora no») es un dato derivado de sus fechas: se guarda solo
 * en su dispositivo y se borra con sus datos (CON-007). Aplazar no cambia fechas
 * ni estimaciones. La ausencia de actualización solo significa que falta
 * información: no indica ausencia de regla, retraso ni ninguna otra cosa.
 */

import { diasEntre, esFechaCivil, sumarDias } from './fechas.js'

/** Parámetros de experiencia de uso, no clínicos. Ajustables sin tocar el motor. */
export const PARAMETROS_POR_DEFECTO = Object.freeze({ diasNeutral: 21, diasAplazar: 7 })

export const TIPOS = Object.freeze({
  REGISTRAR_PRIMERA: 'registrar_primera',
  DISCRETA: 'discreta',
  RECORDAR_ULTIMA: 'recordar_ultima',
  NEUTRAL: 'neutral',
})

/** Bloque de texto de cada tipo (artefacto de textos de la app de ella). */
export const BLOQUE_DE_TIPO = Object.freeze({
  [TIPOS.REGISTRAR_PRIMERA]: 'SUG-01',
  [TIPOS.DISCRETA]: 'SUG-02',
  [TIPOS.RECORDAR_ULTIMA]: 'SUG-03',
  [TIPOS.NEUTRAL]: 'SUG-04',
})

const ESTADOS = new Set([
  'normal', 'menstruacion_estimada', 'estimacion', 'datos_antiguos',
  'insuficiente', 'anticoncepcion', 'fuera_de_vigencia', 'retirado',
])

function fechaOpcional(valor, nombre) {
  if (valor == null) return
  if (!esFechaCivil(valor)) throw new Error(`${nombre} no es una fecha civil válida: ${String(valor)}`)
}

function crear(tipo, ultimoInicio) {
  return { tipo, bloque: BLOQUE_DE_TIPO[tipo], ultimoInicio: ultimoInicio ?? null }
}

/** Sugerencia que corresponde al estado, antes de aplicar el aplazamiento. */
function candidata(estadoMotor, hoy, parametros) {
  const { estado, ultimoInicio, ventana } = estadoMotor
  switch (estado) {
    case 'retirado':
    case 'anticoncepcion':
      // Sin previsión: no se impone una sugerencia donde el producto no estima
      return null
    case 'insuficiente':
      return crear(TIPOS.REGISTRAR_PRIMERA, ultimoInicio)
    case 'normal':
      if (ultimoInicio == null) return crear(TIPOS.REGISTRAR_PRIMERA, null)
      if (!ventana) return null
      return diasEntre(ventana.desde, hoy) < 0 ? null : crear(TIPOS.DISCRETA, ultimoInicio)
    case 'menstruacion_estimada':
    case 'estimacion':
    case 'datos_antiguos':
      if (ultimoInicio == null) return crear(TIPOS.REGISTRAR_PRIMERA, null)
      return crear(TIPOS.RECORDAR_ULTIMA, ultimoInicio)
    case 'fuera_de_vigencia':
      if (ultimoInicio == null) return crear(TIPOS.REGISTRAR_PRIMERA, null)
      return diasEntre(ultimoInicio, hoy) >= parametros.diasNeutral ? crear(TIPOS.NEUTRAL, ultimoInicio) : null
    default:
      throw new Error(`Estado del motor desconocido: ${String(estado)}`)
  }
}

/** ¿Este aplazamiento oculta esta sugerencia hoy? Solo si coinciden tipo y último inicio y no ha llegado `hasta`. */
function aplazada(sug, aplazamiento, hoy) {
  if (!aplazamiento) return false
  fechaOpcional(aplazamiento.hasta, 'aplazamiento.hasta')
  return aplazamiento.tipo === sug.tipo
    && (aplazamiento.ultimoInicio ?? null) === sug.ultimoInicio
    && diasEntre(hoy, aplazamiento.hasta) > 0
}

/**
 * @param {object} p
 * @param {{estado: string, ultimoInicio: string|null, ventana: {desde: string, hasta: string}|null}} p.estadoMotor
 * @param {string} p.hoy Fecha civil 'AAAA-MM-DD' (reloj inyectado).
 * @param {boolean} [p.compartiendoFechas] false si ella no comparte el alcance «fechas».
 * @param {{tipo: string, ultimoInicio: string|null, hasta: string}|null} [p.aplazamiento]
 * @param {{diasNeutral: number, diasAplazar: number}} [p.parametros]
 * @returns {{tipo: string, bloque: string, ultimoInicio: string|null}|null}
 */
export function sugerencia({ estadoMotor, hoy, compartiendoFechas = true, aplazamiento = null, parametros = PARAMETROS_POR_DEFECTO }) {
  if (!estadoMotor || typeof estadoMotor !== 'object') throw new Error('Falta el estado del motor')
  if (!esFechaCivil(hoy)) throw new Error(`hoy no es una fecha civil válida: ${String(hoy)}`)
  if (!ESTADOS.has(estadoMotor.estado)) throw new Error(`Estado del motor desconocido: ${String(estadoMotor.estado)}`)
  fechaOpcional(estadoMotor.ultimoInicio, 'ultimoInicio')
  if (estadoMotor.ventana) {
    fechaOpcional(estadoMotor.ventana.desde, 'ventana.desde')
    fechaOpcional(estadoMotor.ventana.hasta, 'ventana.hasta')
  }
  // Información retirada: ninguna sugerencia basada en ella
  if (compartiendoFechas === false) return null
  const sug = candidata(estadoMotor, hoy, parametros)
  if (!sug) return null
  return aplazada(sug, aplazamiento, hoy) ? null : sug
}

/** «Ahora no»: aplaza esta sugerencia `diasAplazar` días. No modifica fechas ni estimaciones. */
export function aplazar(sug, hoy, parametros = PARAMETROS_POR_DEFECTO) {
  if (!sug) throw new Error('No hay sugerencia que aplazar')
  return { tipo: sug.tipo, ultimoInicio: sug.ultimoInicio ?? null, hasta: sumarDias(hoy, parametros.diasAplazar) }
}
