// Cálculo de la fase mostrada en «Hoy» para el prototipo con datos ficticios.
// Reglas: especificación del panel v1.1.1, RU-05, RU-05b y ME-01 a ME-04.
// No es el motor auditado de CON-032: no trata incertidumbre, caducidad ni
// anticoncepción, y solo se usa con datos inventados.

export const LUTEAL_DAYS = 12
export const OVULATORY_WINDOW_DAYS = 3
export const DEFAULT_BLEEDING_DAYS = 5

export const PHASES = [
  { id: 'menstruation', label: 'Menstruación' },
  { id: 'follicular', label: 'Fase folicular' },
  { id: 'ovulatory', label: 'Ventana ovulatoria estimada' },
  { id: 'luteal', label: 'Fase lútea' }
]

function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0
}

// Devuelve los límites de cada fase en días de ciclo (ambos incluidos).
// Una fase puede quedar vacía en ciclos muy cortos o con sangrado largo.
export function getPhaseBoundaries({ cycleLength, declaredBleedingDays = null }) {
  if (!isPositiveInteger(cycleLength) || cycleLength <= LUTEAL_DAYS + OVULATORY_WINDOW_DAYS) {
    return null
  }

  const hasDeclaredBleeding = isPositiveInteger(declaredBleedingDays)
  const lutealStart = cycleLength - LUTEAL_DAYS + 1
  const ovulatoryStart = lutealStart - OVULATORY_WINDOW_DAYS
  const bleedingDays = hasDeclaredBleeding ? declaredBleedingDays : DEFAULT_BLEEDING_DAYS
  // La menstruación no invade la ventana ovulatoria estimada.
  const menstruationEnd = Math.min(bleedingDays, ovulatoryStart - 1)

  return {
    bleedingSource: hasDeclaredBleeding ? 'declared' : 'reference',
    menstruation: { start: 1, end: menstruationEnd },
    follicular: { start: menstruationEnd + 1, end: ovulatoryStart - 1 },
    ovulatory: { start: ovulatoryStart, end: lutealStart - 1 },
    luteal: { start: lutealStart, end: cycleLength }
  }
}

// Devuelve la fase de un día de ciclo o null si no se puede mostrar ninguna.
// null corresponde a un estado excepcional (sección 5): inicio sin confirmar
// (ME-04), datos no válidos o día fuera del ciclo estimado.
export function getPhaseForDay({ cycleStartConfirmed, cycleDay, cycleLength, declaredBleedingDays = null }) {
  if (cycleStartConfirmed !== true || !isPositiveInteger(cycleDay)) {
    return null
  }

  const boundaries = getPhaseBoundaries({ cycleLength, declaredBleedingDays })
  if (!boundaries || cycleDay > cycleLength) {
    return null
  }

  const phase = PHASES.find(({ id }) => {
    const { start, end } = boundaries[id]
    return start <= end && cycleDay >= start && cycleDay <= end
  })

  return phase ? { ...phase, boundaries } : null
}

// --- Estimación a partir de las fechas de sangrado ---------------------------
// La entrada son las fechas de inicio de sangrado confirmadas que introduce la
// persona afectada (DA-01), en formato AAAA-MM-DD, y la fecha local de hoy.
// Se calcula en días UTC (sección 8) para evitar saltos por cambio de hora.

export const REFERENCE_CYCLE_DAYS = 29
export const MIN_CONFIRMED_CYCLES = 3
export const MAX_CONFIRMED_CYCLES = 6

const DAY_MS = 24 * 60 * 60 * 1000
const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/

function toUtcDay(isoDate) {
  const match = typeof isoDate === 'string' ? ISO_DATE.exec(isoDate) : null
  if (!match) return null
  const [, year, month, day] = match.map(Number)
  const time = Date.UTC(year, month - 1, day)
  const check = new Date(time)
  // Rechaza fechas imposibles como 2026-02-30.
  if (check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) return null
  return time / DAY_MS
}

// Duración del ciclo y su origen, con la precedencia de DA-06:
// ciclos confirmados suficientes > duración declarada > referencia (RU-05b).
export function resolveCycleLength(sortedStartDays, declaredCycleLength = null) {
  const intervals = []
  for (let index = 1; index < sortedStartDays.length; index += 1) {
    intervals.push(sortedStartDays[index] - sortedStartDays[index - 1])
  }

  if (intervals.length >= MIN_CONFIRMED_CYCLES) {
    const recent = intervals.slice(-MAX_CONFIRMED_CYCLES)
    const mean = recent.reduce((sum, value) => sum + value, 0) / recent.length
    return { cycleLength: Math.round(mean), cycleLengthSource: 'confirmed' }
  }

  if (isPositiveInteger(declaredCycleLength)) {
    return { cycleLength: declaredCycleLength, cycleLengthSource: 'declared' }
  }

  return { cycleLength: REFERENCE_CYCLE_DAYS, cycleLengthSource: 'reference' }
}

// Devuelve { status, ... }. Solo status 'ok' permite mostrar una fase.
// Los demás estados se convertirán en las pantallas 1.2a–f (D-05).
export function estimateToday({ bleedingStarts = [], today, declaredCycleLength = null, declaredBleedingDays = null }) {
  const todayDay = toUtcDay(today)
  const startDays = bleedingStarts.map(toUtcDay)

  if (todayDay === null || startDays.some((day) => day === null)) {
    return { status: 'invalid-data' }
  }
  if (startDays.length === 0) {
    return { status: 'no-data' }
  }

  const sorted = [...new Set(startDays)].sort((a, b) => a - b)
  const lastStart = sorted[sorted.length - 1]
  if (lastStart > todayDay) {
    return { status: 'invalid-data' }
  }

  const { cycleLength, cycleLengthSource } = resolveCycleLength(sorted, declaredCycleLength)
  const cycleDay = todayDay - lastStart + 1

  // ME-04: si el siguiente inicio previsto ya pasó sin confirmarse, no se
  // afirma ninguna fase. El comportamiento concreto lo fija CON-032.
  if (cycleDay > cycleLength) {
    return { status: 'past-expected-start', cycleDay, cycleLength, cycleLengthSource }
  }

  const phase = getPhaseForDay({ cycleStartConfirmed: true, cycleDay, cycleLength, declaredBleedingDays })
  if (!phase) {
    return { status: 'invalid-data', cycleDay, cycleLength, cycleLengthSource }
  }

  return { status: 'ok', phase, cycleDay, cycleLength, cycleLengthSource }
}
