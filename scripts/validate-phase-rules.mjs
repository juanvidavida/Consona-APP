// Comprueba el cálculo de fase del prototipo contra la especificación del
// panel v1.1.1 (RU-05b, ME-01, ME-04). Solo usa datos ficticios.
import assert from 'node:assert/strict'
import { getPhaseBoundaries, getPhaseForDay } from '../src/cycle/phase.js'

const base = { cycleStartConfirmed: true, cycleLength: 29, declaredBleedingDays: null }
const phaseOn = (overrides) => getPhaseForDay({ ...base, ...overrides })?.id ?? null

const cases = [
  // RU-05b: ciclo de 29 días sin duraciones declaradas → 5 · 9 · 3 · 12.
  ['referencia, día 1', { cycleDay: 1 }, 'menstruation'],
  ['referencia, día 5 (ME-01)', { cycleDay: 5 }, 'menstruation'],
  ['referencia, día 6 (ME-01)', { cycleDay: 6 }, 'follicular'],
  ['referencia, día 14', { cycleDay: 14 }, 'follicular'],
  ['referencia, día 15', { cycleDay: 15 }, 'ovulatory'],
  ['referencia, día 17', { cycleDay: 17 }, 'ovulatory'],
  ['referencia, día 18', { cycleDay: 18 }, 'luteal'],
  ['referencia, día 29', { cycleDay: 29 }, 'luteal'],
  // ME-01: la duración declarada sustituye a la referencia.
  ['declarada 3, día 4', { cycleDay: 4, declaredBleedingDays: 3 }, 'follicular'],
  ['declarada 7, día 7', { cycleDay: 7, declaredBleedingDays: 7 }, 'menstruation'],
  ['declarada 7, día 8', { cycleDay: 8, declaredBleedingDays: 7 }, 'follicular'],
  // ME-04: sin inicio confirmado no se muestra ninguna fase.
  ['inicio sin confirmar', { cycleDay: 2, cycleStartConfirmed: false }, null],
  // Fuera del ciclo estimado o con datos no válidos: estado excepcional.
  ['día posterior al ciclo', { cycleDay: 30 }, null],
  ['día 0', { cycleDay: 0 }, null],
  ['ciclo demasiado corto', { cycleDay: 3, cycleLength: 15 }, null]
]

for (const [name, overrides, expected] of cases) {
  assert.equal(phaseOn(overrides), expected, name)
}

// La menstruación declarada no invade la ventana ovulatoria estimada.
const long = getPhaseBoundaries({ cycleLength: 22, declaredBleedingDays: 9 })
assert.deepEqual(long.menstruation, { start: 1, end: 7 })
assert.ok(long.follicular.start > long.follicular.end, 'fase folicular vacía')
assert.equal(long.bleedingSource, 'declared')
assert.equal(getPhaseBoundaries({ cycleLength: 29 }).bleedingSource, 'reference')

console.log(`Reglas de fase: ${cases.length + 4} comprobaciones superadas.`)

// --- Estimación desde fechas de sangrado (DA-01, DA-06, ME-04) ---------------
const { estimateToday } = await import('../src/cycle/phase.js')

// Una sola fecha: referencia de 29 días. 1 sept. → 18 sept. es el día 18.
let result = estimateToday({ bleedingStarts: ['2026-09-01'], today: '2026-09-18' })
assert.equal(result.status, 'ok')
assert.equal(result.cycleDay, 18)
assert.equal(result.cycleLengthSource, 'reference')
assert.equal(result.phase.id, 'luteal')

// Duración declarada (DA-06): ciclo de 26 → lútea desde el día 15.
result = estimateToday({ bleedingStarts: ['2026-09-01'], today: '2026-09-15', declaredCycleLength: 26 })
assert.equal(result.cycleLengthSource, 'declared')
assert.equal(result.phase.id, 'luteal')

// Tres ciclos confirmados prevalecen sobre la declaración: 28, 30, 29 → 29.
result = estimateToday({
  bleedingStarts: ['2026-06-01', '2026-06-29', '2026-07-29', '2026-08-27'],
  today: '2026-08-31',
  declaredCycleLength: 35
})
assert.equal(result.cycleLengthSource, 'confirmed')
assert.equal(result.cycleLength, 29)
assert.equal(result.cycleDay, 5)
assert.equal(result.phase.id, 'menstruation')

// El orden de entrada no importa y el cambio de hora no altera el día.
result = estimateToday({ bleedingStarts: ['2026-10-20', '2026-09-21'], today: '2026-10-26' })
assert.equal(result.cycleDay, 7)
assert.equal(result.phase.id, 'follicular')

// ME-04: pasado el inicio previsto sin confirmar, no hay fase.
assert.equal(estimateToday({ bleedingStarts: ['2026-09-01'], today: '2026-09-30' }).status, 'past-expected-start')
// Sin fechas, fechas imposibles o futuras.
assert.equal(estimateToday({ bleedingStarts: [], today: '2026-09-30' }).status, 'no-data')
assert.equal(estimateToday({ bleedingStarts: ['2026-02-30'], today: '2026-03-10' }).status, 'invalid-data')
assert.equal(estimateToday({ bleedingStarts: ['2026-10-05'], today: '2026-10-01' }).status, 'invalid-data')

console.log('Estimación desde fechas de sangrado: 16 comprobaciones superadas.')
