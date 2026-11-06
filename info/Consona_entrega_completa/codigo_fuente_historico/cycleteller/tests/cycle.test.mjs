/**
 * Tests del motor de ciclo. Sin dependencias: se ejecutan con Node a secas.
 *
 *   node tests/cycle.test.mjs
 *
 * Si algún test falla, el proceso sale con código 1.
 */

import {
  estimate, phaseBoundaries, phaseForDay, uncertaintyBands, toDayNumber, daysBetween,
  CYCLE_LENGTH, PERIOD_DAYS, LUTEAL_DAYS
} from '../src/js/cycle.js';

let passed = 0, failed = 0;
const failures = [];

function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; failures.push(`${name}\n    ${e.message}`); }
}
function eq(actual, expected, msg = '') {
  const a = JSON.stringify(actual), b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${msg} esperado ${b}, obtenido ${a}`);
}
function ok(cond, msg) { if (!cond) throw new Error(msg || 'condición falsa'); }

// --- Fechas ----------------------------------------------------------------

test('toDayNumber rechaza fechas imposibles', () => {
  ok(Number.isNaN(toDayNumber('2026-02-31')), '31 de febrero debería ser inválido');
  ok(Number.isNaN(toDayNumber('no es fecha')), 'texto libre debería ser inválido');
  ok(Number.isNaN(toDayNumber('2026-13-01')), 'mes 13 debería ser inválido');
  ok(!Number.isNaN(toDayNumber('2026-02-28')), '28 de febrero es válido');
});

test('daysBetween cuenta bien y no falla en el cambio de hora', () => {
  eq(daysBetween('2026-09-01', '2026-09-11'), 10, 'diez días');
  // Cambio de hora en España: 29 de marzo de 2026. Este cálculo se hacía mal
  // en el prototipo v1, que restaba objetos Date en horario local.
  eq(daysBetween('2026-03-28', '2026-03-30'), 2, 'cruzando el cambio de hora');
  eq(daysBetween('2026-10-24', '2026-10-26'), 2, 'cruzando el cambio de hora de otoño');
});

// --- Límites de fase: el bug central que se corrige ------------------------

test('ciclo de 28 días: la ovulación cae hacia la mitad', () => {
  const b = phaseBoundaries(28, 5);
  eq(b.menstruacion, { start: 1, end: 5, isEmpty: false, days: 5 });
  eq(b.folicular, { start: 6, end: 13, isEmpty: false, days: 8 });
  eq(b.ovulatoria.start, 14);
  eq(b.ovulatoria.end, 16);
  eq(b.lutea.start, 17);
  eq(b.lutea.end, 28);
});

test('ciclo de 35 días: la ovulación se DESPLAZA (v1 fallaba aquí)', () => {
  const b = phaseBoundaries(35, 5);
  // v1 decía que los días 14-16 eran ovulatorios. Son foliculares.
  eq(phaseForDay(15, 35, 5), 'folicular', 'el día 15 de un ciclo de 35 es folicular');
  eq(b.ovulatoria.start, 21);
  eq(b.ovulatoria.end, 23);
  // Y la lútea nunca debe durar 19 días, como pasaba en v1.
  eq(b.lutea.days, 12);
});

test('ciclo de 21 días: las fases se comprimen sin romperse', () => {
  const b = phaseBoundaries(21, 5);
  eq(b.folicular, { start: 6, end: 6, isEmpty: false, days: 1 });
  eq(b.ovulatoria.start, 7);
  eq(b.ovulatoria.end, 9);
  eq(b.lutea.start, 10);
  eq(b.lutea.end, 21);
});

test('ciclo de 21 días con 8 de sangrado: la ventana se recorta y la folicular desaparece', () => {
  const b = phaseBoundaries(21, 8);
  ok(b.folicular.isEmpty, 'no queda sitio para la folicular');
  eq(b.ovulatoria, { start: 9, end: 9, isEmpty: false, days: 1 });
  eq(b.lutea.days, 12);
});

test('la fase lútea pintada mide siempre 12 días (mediana de referencia, JUA-27)', () => {
  for (let L = CYCLE_LENGTH.min; L <= CYCLE_LENGTH.max; L++) {
    for (let P = PERIOD_DAYS.min; P <= PERIOD_DAYS.max; P++) {
      const b = phaseBoundaries(L, P);
      eq(b.lutea.days, LUTEAL_DAYS.central, `ciclo ${L}, sangrado ${P}:`);
    }
  }
});

test('la lútea pintada no cae en el umbral de deficiencia lútea (≤10 días)', () => {
  const b = phaseBoundaries(28, 5);
  ok(b.lutea.days > 10, `lútea de ${b.lutea.days} días`);
});

// --- Bandas de incertidumbre ------------------------------------------------

test('la banda ovulatoria cubre una lútea de 10 a 16 días', () => {
  const u = uncertaintyBands(28, 5);
  eq(u.ovulationBand, { start: 12, end: 18, isEmpty: false, days: 7 });
});

test('la banda ovulatoria contiene la ventana pintada', () => {
  for (let L = CYCLE_LENGTH.min; L <= CYCLE_LENGTH.max; L++) {
    for (let P = PERIOD_DAYS.min; P <= PERIOD_DAYS.max; P++) {
      const b = phaseBoundaries(L, P);
      const u = uncertaintyBands(L, P);
      ok(u.ovulationBand.start <= b.ovulatoria.start && b.ovulatoria.end <= u.ovulationBand.end,
         `ciclo ${L}, sangrado ${P}: ventana fuera de la banda`);
    }
  }
});

test('la banda ovulatoria no invade el sangrado', () => {
  const u = uncertaintyBands(21, 8);
  eq(u.ovulationBand.start, 9);
  eq(u.ovulationBand.end, 11);
});

test('los días previos a la menstruación son los 7 últimos del ciclo', () => {
  eq(uncertaintyBands(28, 5).premenstrual, { start: 22, end: 28, isEmpty: false, days: 7 });
  eq(uncertaintyBands(35, 5).premenstrual.start, 29);
});

test('estimate expone las bandas junto a las fases', () => {
  const r = estimate({ lastPeriodDate: '2026-09-01', cycleLength: 28, today: '2026-09-23' });
  eq(r.bands.premenstrual.start, 22);
  eq(r.dayOfCycle, 23);
  eq(r.phase, 'lutea');
});

test('todos los días del ciclo tienen exactamente una fase', () => {
  for (let L = CYCLE_LENGTH.min; L <= CYCLE_LENGTH.max; L++) {
    for (let P = PERIOD_DAYS.min; P <= PERIOD_DAYS.max; P++) {
      const b = phaseBoundaries(L, P);
      for (let d = 1; d <= L; d++) {
        const hits = Object.values(b).filter(r => !r.isEmpty && d >= r.start && d <= r.end);
        ok(hits.length === 1, `ciclo ${L}, sangrado ${P}, día ${d}: ${hits.length} fases`);
      }
    }
  }
});

// --- Cálculo principal -----------------------------------------------------

test('día 1 del ciclo es el primer día de la regla', () => {
  const r = estimate({ lastPeriodDate: '2026-09-01', cycleLength: 28, today: '2026-09-01' });
  eq(r.dayOfCycle, 1);
  eq(r.phase, 'menstruacion');
  eq(r.reliability, 'alta');
});

test('rechaza fechas futuras en vez de calcular disparates', () => {
  const r = estimate({ lastPeriodDate: '2026-12-01', cycleLength: 28, today: '2026-09-04' });
  eq(r.ok, false);
  eq(r.reason, 'fecha_futura');
});

test('la anticoncepción hormonal desactiva las fases', () => {
  for (const m of ['pildora', 'anillo', 'parche', 'implante', 'inyectable']) {
    const r = estimate({
      lastPeriodDate: '2026-09-01', cycleLength: 28, today: '2026-09-10', contraception: m
    });
    eq(r.phasesApply, false, `${m} debería desactivar las fases`);
    eq(r.reason, 'anticoncepcion_hormonal');
  }
});

test('el DIU hormonal avisa pero deja calcular', () => {
  const r = estimate({
    lastPeriodDate: '2026-09-01', cycleLength: 28, today: '2026-09-10', contraception: 'diu_hormonal'
  });
  eq(r.phasesApply, true);
  ok(r.warnings.some(w => w.id === 'metodo_dudoso'), 'debería avisar');
});

test('la fiabilidad baja conforme pasan los ciclos', () => {
  const base = { lastPeriodDate: '2026-01-01', cycleLength: 28 };
  eq(estimate({ ...base, today: '2026-01-15' }).reliability, 'alta');
  eq(estimate({ ...base, today: '2026-02-20' }).reliability, 'media');
  eq(estimate({ ...base, today: '2026-04-20' }).reliability, 'baja');
  const caducado = estimate({ ...base, today: '2026-09-04' });
  eq(caducado.reliability, undefined, 'los datos caducados no devuelven fase');
  eq(caducado.phasesApply, false);
  eq(caducado.reason, 'datos_caducados');
});

test('el margen de error nunca es menor de 2 días', () => {
  const r = estimate({ lastPeriodDate: '2026-09-01', cycleLength: 28, today: '2026-09-05' });
  ok(r.marginDays >= 2, `margen ${r.marginDays}, debería ser al menos 2`);
});

test('el margen de error crece con los ciclos transcurridos', () => {
  const a = estimate({ lastPeriodDate: '2026-08-01', cycleLength: 28, today: '2026-08-10' });
  const b = estimate({ lastPeriodDate: '2026-06-01', cycleLength: 28, today: '2026-08-10' });
  ok(b.marginDays > a.marginDays, 'más ciclos deberían dar más margen');
});

test('avisa si la duración del ciclo está fuera del rango normal', () => {
  const r = estimate({ lastPeriodDate: '2026-09-01', cycleLength: 45, today: '2026-09-10' });
  ok(r.warnings.some(w => w.id === 'fuera_de_rango'), 'debería recomendar consultar');
});

test('ofrece fases alternativas dentro del margen de error', () => {
  // Un día justo en la frontera entre dos fases debe reconocer la ambigüedad.
  const b = phaseBoundaries(28, 5);
  const borderDay = b.ovulatoria.end; // último día ovulatorio, la lútea empieza al siguiente
  const start = '2026-09-01';
  const today = new Date(Date.UTC(2026, 8, 1) + (borderDay - 1) * 86400000)
    .toISOString().slice(0, 10);
  const r = estimate({ lastPeriodDate: start, cycleLength: 28, today });
  eq(r.dayOfCycle, borderDay);
  ok(r.alternativePhases.includes('lutea'), 'en la frontera, la lútea debería ser plausible');
});

// --- Resultado -------------------------------------------------------------

console.log(`\n  ${passed} tests pasados, ${failed} fallados\n`);
if (failures.length) {
  console.log('  FALLOS:\n');
  failures.forEach(f => console.log('  ✗ ' + f + '\n'));
  process.exit(1);
}
console.log('  Todo correcto.\n');
