// Pruebas de fechas civiles. Ejecutar también con otras zonas horarias (ver README).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { diaCivil, diasEntre, esFechaCivil, isoDesdeDia, sumarDias } from './fechas.js'

test('esFechaCivil acepta fechas reales y rechaza las que no existen', () => {
  assert.equal(esFechaCivil('2026-11-13'), true)
  assert.equal(esFechaCivil('2028-02-29'), true)
  for (const s of ['2026-02-30', '2026-02-29', '2026-13-01', '2026-00-10', '2026-04-31', '2026-1-5', '13-11-2026', '', null, undefined, 20261113]) {
    assert.equal(esFechaCivil(s), false, String(s))
  }
})

test('diaCivil e isoDesdeDia son inversas', () => {
  assert.equal(diaCivil('1970-01-01'), 0)
  for (const s of ['2026-01-01', '2026-03-29', '2026-10-25', '2026-12-31', '2028-02-29']) {
    assert.equal(isoDesdeDia(diaCivil(s)), s)
  }
})

test('diasEntre y sumarDias cruzan el cambio de hora europeo sin desplazar días', () => {
  // 25-10-2026: en Europa el día tiene 25 horas; en fechas civiles sigue siendo un día
  assert.equal(diasEntre('2026-10-24', '2026-10-26'), 2)
  assert.equal(sumarDias('2026-10-24', 1), '2026-10-25')
  assert.equal(sumarDias('2026-10-25', 1), '2026-10-26')
  assert.equal(diasEntre('2026-03-28', '2026-03-30'), 2)
  assert.equal(sumarDias('2026-12-30', 3), '2027-01-02')
  assert.equal(sumarDias('2026-11-13', -13), '2026-10-31')
  assert.equal(diasEntre('2026-11-13', '2026-11-01'), -12)
})

test('las funciones rechazan entradas no válidas', () => {
  assert.throws(() => diaCivil('2026-02-30'))
  assert.throws(() => sumarDias('2026-11-13', 1.5))
  assert.throws(() => isoDesdeDia(1.2))
  assert.throws(() => diasEntre('2026-11-13', 'mañana'))
})
