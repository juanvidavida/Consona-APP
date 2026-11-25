/**
 * Fechas de calendario para el motor de Consona.
 *
 * Las fechas de inicio de la regla son fechas civiles 'AAAA-MM-DD', sin hora.
 * Nunca se convierten a instantes locales: se cuentan como días enteros sobre
 * Date.UTC, así que ni la zona horaria ni el cambio de hora desplazan un día.
 * Los instantes (registro, envío, recepción) son ISO UTC y no se tratan aquí.
 */

const MS_DIA = 86400000
const PATRON = /^(\d{4})-(\d{2})-(\d{2})$/

/** ¿Es una fecha civil real con formato AAAA-MM-DD? Rechaza, por ejemplo, 2026-02-30. */
export function esFechaCivil(s) {
  if (typeof s !== 'string') return false
  const m = PATRON.exec(s)
  if (!m) return false
  const [a, mes, d] = [Number(m[1]), Number(m[2]), Number(m[3])]
  if (mes < 1 || mes > 12 || d < 1) return false
  const t = new Date(Date.UTC(a, mes - 1, d))
  // Si el día no existe, Date lo desborda al mes siguiente
  return t.getUTCFullYear() === a && t.getUTCMonth() === mes - 1 && t.getUTCDate() === d
}

function exigir(iso) {
  if (!esFechaCivil(iso)) throw new Error(`Fecha civil no válida: ${String(iso)}`)
}

/** Número entero de día de una fecha civil (días desde 1970-01-01). */
export function diaCivil(iso) {
  exigir(iso)
  const [a, mes, d] = iso.split('-').map(Number)
  return Date.UTC(a, mes - 1, d) / MS_DIA
}

/** Fecha civil 'AAAA-MM-DD' de un número entero de día. */
export function isoDesdeDia(n) {
  if (!Number.isInteger(n)) throw new Error(`Día no entero: ${String(n)}`)
  return new Date(n * MS_DIA).toISOString().slice(0, 10)
}

/** Días de calendario entre dos fechas civiles (positivo si hasta es posterior). */
export function diasEntre(desdeIso, hastaIso) {
  return diaCivil(hastaIso) - diaCivil(desdeIso)
}

/** Fecha civil que resulta de sumar n días (n puede ser negativo). */
export function sumarDias(iso, n) {
  if (!Number.isInteger(n)) throw new Error(`Número de días no entero: ${String(n)}`)
  return isoDesdeDia(diaCivil(iso) + n)
}
