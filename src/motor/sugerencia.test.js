// Pruebas de las sugerencias de actualización. Solo fechas ficticias y reloj inyectado.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { aplazar, BLOQUE_DE_TIPO, PARAMETROS_POR_DEFECTO, sugerencia, TIPOS } from './sugerencia.js'
import { sumarDias } from './fechas.js'

const INICIO = '2026-11-01'
const VENTANA = Object.freeze({ desde: '2026-11-29', hasta: '2026-12-03' })
const congelar = (o) => Object.freeze({ ...o, ventana: o.ventana ? Object.freeze({ ...o.ventana }) : o.ventana })
const motor = (estado, extra = {}) => congelar({ estado, ultimoInicio: INICIO, ventana: VENTANA, ...extra })

test('cada tipo tiene su bloque de texto', () => {
  assert.deepEqual(BLOQUE_DE_TIPO, {
    registrar_primera: 'SUG-01', discreta: 'SUG-02', recordar_ultima: 'SUG-03', neutral: 'SUG-04',
  })
  assert.deepEqual(PARAMETROS_POR_DEFECTO, { diasNeutral: 21, diasAplazar: 7 })
})

test('sin regla registrada: invitar a introducir una fecha', () => {
  const r = sugerencia({ estadoMotor: motor('insuficiente', { ultimoInicio: null, ventana: null }), hoy: '2026-11-13' })
  assert.deepEqual(r, { tipo: TIPOS.REGISTRAR_PRIMERA, bloque: 'SUG-01', ultimoInicio: null })
  // Cualquier estado sin último inicio también invita a registrar
  const r2 = sugerencia({ estadoMotor: motor('normal', { ultimoInicio: null, ventana: null }), hoy: '2026-11-13' })
  assert.equal(r2.tipo, TIPOS.REGISTRAR_PRIMERA)
})

test('estimación válida antes de la ventana: sin sugerencia destacada', () => {
  assert.equal(sugerencia({ estadoMotor: motor('normal'), hoy: '2026-11-28' }), null)
})

test('límite: el primer día de la ventana aparece la sugerencia discreta', () => {
  const r = sugerencia({ estadoMotor: motor('normal'), hoy: VENTANA.desde })
  assert.deepEqual(r, { tipo: TIPOS.DISCRETA, bloque: 'SUG-02', ultimoInicio: INICIO })
  assert.equal(sugerencia({ estadoMotor: motor('normal'), hoy: VENTANA.hasta }).tipo, TIPOS.DISCRETA)
})

test('normal sin ventana: ninguna sugerencia (no se adivina un intervalo)', () => {
  assert.equal(sugerencia({ estadoMotor: motor('normal', { ventana: null }), hoy: '2026-12-01' }), null)
})

test('pasado el intervalo sin confirmar: recordar la última fecha registrada', () => {
  for (const estado of ['menstruacion_estimada', 'estimacion', 'datos_antiguos']) {
    const r = sugerencia({ estadoMotor: motor(estado), hoy: '2027-01-10' })
    assert.deepEqual(r, { tipo: TIPOS.RECORDAR_ULTIMA, bloque: 'SUG-03', ultimoInicio: INICIO }, estado)
  }
})

test('fuera de vigencia: sugerencia neutral desde 21 días después del inicio registrado', () => {
  const m = motor('fuera_de_vigencia', { ventana: null })
  assert.equal(sugerencia({ estadoMotor: m, hoy: sumarDias(INICIO, 20) }), null)
  assert.deepEqual(sugerencia({ estadoMotor: m, hoy: sumarDias(INICIO, 21) }), { tipo: TIPOS.NEUTRAL, bloque: 'SUG-04', ultimoInicio: INICIO })
  assert.equal(sugerencia({ estadoMotor: m, hoy: sumarDias(INICIO, 22) }).tipo, TIPOS.NEUTRAL)
})

test('los parámetros se ajustan sin tocar el motor', () => {
  const m = motor('fuera_de_vigencia', { ventana: null })
  const p = { diasNeutral: 30, diasAplazar: 3 }
  assert.equal(sugerencia({ estadoMotor: m, hoy: sumarDias(INICIO, 29), parametros: p }), null)
  assert.equal(sugerencia({ estadoMotor: m, hoy: sumarDias(INICIO, 30), parametros: p }).tipo, TIPOS.NEUTRAL)
})

test('sin previsión por decisión de producto: anticoncepción y retirada no sugieren nada', () => {
  assert.equal(sugerencia({ estadoMotor: motor('anticoncepcion', { ventana: null }), hoy: '2027-03-01' }), null)
  assert.equal(sugerencia({ estadoMotor: motor('retirado', { ventana: null }), hoy: '2027-03-01' }), null)
})

test('si ella no comparte las fechas, ninguna sugerencia basada en ellas', () => {
  for (const estado of ['insuficiente', 'normal', 'estimacion', 'fuera_de_vigencia']) {
    assert.equal(sugerencia({ estadoMotor: motor(estado), hoy: '2027-01-10', compartiendoFechas: false }), null, estado)
  }
})

test('«Ahora no»: oculta la sugerencia hasta el día hasta, en que vuelve a aparecer', () => {
  const hoy = '2026-11-30'
  const sug = sugerencia({ estadoMotor: motor('normal'), hoy })
  const ap = aplazar(sug, hoy)
  assert.deepEqual(ap, { tipo: TIPOS.DISCRETA, ultimoInicio: INICIO, hasta: '2026-12-07' })
  assert.equal(sugerencia({ estadoMotor: motor('normal'), hoy, aplazamiento: ap }), null)
  assert.equal(sugerencia({ estadoMotor: motor('estimacion'), hoy: '2026-12-06', aplazamiento: { ...ap, tipo: TIPOS.RECORDAR_ULTIMA } }), null)
  assert.equal(sugerencia({ estadoMotor: motor('estimacion'), hoy: '2026-12-07', aplazamiento: { ...ap, tipo: TIPOS.RECORDAR_ULTIMA } }).tipo, TIPOS.RECORDAR_ULTIMA)
})

test('el aplazamiento no aplica si cambia el tipo de sugerencia', () => {
  const sug = sugerencia({ estadoMotor: motor('normal'), hoy: '2026-12-01' })
  const ap = aplazar(sug, '2026-12-01')
  // Pasa la ventana sin confirmar: otra sugerencia, otro mensaje
  assert.equal(sugerencia({ estadoMotor: motor('menstruacion_estimada'), hoy: '2026-12-04', aplazamiento: ap }).tipo, TIPOS.RECORDAR_ULTIMA)
})

test('el aplazamiento no aplica si cambia el último inicio (nueva confirmación o corrección)', () => {
  const sug = sugerencia({ estadoMotor: motor('normal'), hoy: '2026-12-01' })
  const ap = aplazar(sug, '2026-12-01')
  const corregido = motor('normal', { ultimoInicio: '2026-11-02' })
  assert.equal(sugerencia({ estadoMotor: corregido, hoy: '2026-12-02', aplazamiento: ap }).tipo, TIPOS.DISCRETA)
})

test('aplazar no modifica fechas ni estimaciones (entradas congeladas)', () => {
  const m = motor('normal')
  const params = Object.freeze({ ...PARAMETROS_POR_DEFECTO })
  const sug = Object.freeze(sugerencia({ estadoMotor: m, hoy: '2026-12-01', parametros: params }))
  const ap = Object.freeze(aplazar(sug, '2026-12-01', params))
  sugerencia({ estadoMotor: m, hoy: '2026-12-02', aplazamiento: ap, parametros: params })
  assert.deepEqual(m, { estado: 'normal', ultimoInicio: INICIO, ventana: VENTANA })
  assert.equal(ap.hasta, '2026-12-08')
  assert.throws(() => aplazar(null, '2026-12-01'))
})

test('entradas no válidas: error, no se adivina', () => {
  assert.throws(() => sugerencia({ estadoMotor: motor('desconocido'), hoy: '2026-11-13' }), /desconocido/)
  assert.throws(() => sugerencia({ estadoMotor: motor('normal'), hoy: '2026-02-30' }))
  assert.throws(() => sugerencia({ estadoMotor: motor('normal'), hoy: '13/11/2026' }))
  assert.throws(() => sugerencia({ estadoMotor: motor('normal', { ultimoInicio: '2026-11-31' }), hoy: '2026-12-01' }))
  assert.throws(() => sugerencia({ estadoMotor: motor('normal', { ventana: { desde: 'x', hasta: '2026-12-03' } }), hoy: '2026-12-01' }))
  assert.throws(() => sugerencia({ estadoMotor: null, hoy: '2026-11-13' }))
  assert.throws(() => sugerencia({ estadoMotor: motor('normal'), hoy: '2026-12-01', aplazamiento: { tipo: TIPOS.DISCRETA, ultimoInicio: INICIO, hasta: 'pronto' } }))
})

test('alrededor del cambio de hora europeo (25-10-2026) los días no se desplazan', () => {
  const m = congelar({ estado: 'normal', ultimoInicio: '2026-09-27', ventana: { desde: '2026-10-25', hasta: '2026-10-29' } })
  assert.equal(sugerencia({ estadoMotor: m, hoy: '2026-10-24' }), null)
  assert.equal(sugerencia({ estadoMotor: m, hoy: '2026-10-25' }).tipo, TIPOS.DISCRETA)
  const ap = aplazar(sugerencia({ estadoMotor: m, hoy: '2026-10-25' }), '2026-10-25')
  assert.equal(ap.hasta, '2026-11-01')
  assert.equal(sugerencia({ estadoMotor: m, hoy: '2026-10-31', aplazamiento: ap }), null)
  assert.equal(sugerencia({ estadoMotor: m, hoy: '2026-11-01', aplazamiento: ap }).tipo, TIPOS.DISCRETA)
})
