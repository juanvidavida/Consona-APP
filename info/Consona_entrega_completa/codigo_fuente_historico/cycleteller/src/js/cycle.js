/**
 * cycle.js — Motor de cálculo del ciclo menstrual.
 *
 * Módulo PURO: no toca el DOM, no toca localStorage, no tiene dependencias.
 * Todo lo que necesita entra por parámetros. Esto lo hace testeable (ver tests/cycle.test.mjs).
 *
 * ---------------------------------------------------------------------------
 * DECISIÓN CLAVE — POR QUÉ EL CÁLCULO CAMBIÓ RESPECTO AL PROTOTIPO v1
 * ---------------------------------------------------------------------------
 * El prototipo v1 usaba días fijos: menstruación 1-5, folicular 6-13,
 * ovulatoria 14-16, lútea 17 en adelante. Eso es incorrecto y produce errores
 * de hasta 14 días en ciclos que no midan 28.
 *
 * La fase que varía es la FOLICULAR (la primera). La fase LÚTEA (la última) es
 * más estable. Por eso la ovulación hay que anclarla contando hacia atrás desde
 * la SIGUIENTE regla, no hacia delante desde la anterior.
 *
 *   Regla correcta (NHS): la ovulación ocurre 10-16 días ANTES de la siguiente regla.
 *   → ventana ovulatoria = [duración − 16, duración − 10]
 *
 * Ejemplo del error que se corrige, en un ciclo de 35 días:
 *   v1 decía "ovulación días 14-16".  Lo correcto es días 19-25.
 *   Es decir, v1 mostraba la fase equivocada durante más de una semana.
 *
 * Fuentes:
 *  - NHS, "Periods and fertility in the menstrual cycle"
 *    https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/
 *  - Bull et al. 2019, npj Digital Medicine (612.613 ciclos reales):
 *    fase folicular media 16,9 días (DE 5,3) → la ovulación media cae hacia el
 *    día 17, no el 14. Solo el 13% de los ciclos dura exactamente 28 días.
 *    https://www.nature.com/articles/s41746-019-0152-7
 *  - Human Reproduction 2024: la fase lútea NO es fija de 13-14 días;
 *    mediana 10,9 días (rango 8,3-12,5).
 *    https://academic.oup.com/humrep/article/39/11/2565/7775370
 */

// --- Constantes del modelo -------------------------------------------------

/** Ventana ovulatoria, en días antes de la siguiente regla. */
export const OVULATION_BEFORE_NEXT_PERIOD = { earliest: 16, latest: 10 };

/** Rango de duración de ciclo que la app acepta como "dentro de lo normal". */
export const CYCLE_LENGTH = { min: 21, max: 35, default: 29 };
//                                                 ^^^ media real (Bull et al.),
//                                                 no el mítico 28.

/** Rango de duración del sangrado. Normal: 2-8 días. */
export const PERIOD_DAYS = { min: 2, max: 8, default: 5 };

/**
 * Desviación típica de la variación de duración entre ciclos de una misma
 * persona: 2,6 días (Bull et al. 2019). Se usa para calcular cuánta
 * incertidumbre acumula la estimación conforme pasan los ciclos.
 */
const INTRA_WOMAN_SD_DAYS = 2.6;

/** Métodos anticonceptivos y qué implican para el modelo de fases. */
export const CONTRACEPTION = {
  ninguno:        { label: 'Ninguno o método barrera', phases: true  },
  diu_cobre:      { label: 'DIU de cobre',             phases: true  },
  diu_hormonal:   { label: 'DIU hormonal',             phases: 'warn' },
  pildora:        { label: 'Píldora',                  phases: false },
  anillo:         { label: 'Anillo vaginal',           phases: false },
  parche:         { label: 'Parche',                   phases: false },
  implante:       { label: 'Implante subcutáneo',      phases: false },
  inyectable:     { label: 'Inyectable',               phases: false },
  no_lo_se:       { label: 'No lo sé',                 phases: 'warn' }
};

// --- Utilidades de fecha ---------------------------------------------------
// Se trabaja siempre en UTC. Motivo: restar dos objetos Date en horario local
// da 23 o 25 horas los días de cambio de hora, y eso desplazaba el cálculo un
// día entero dos veces al año. En UTC no hay cambio de hora.

/** Convierte "2026-09-04" en un número de día absoluto. Devuelve NaN si es inválida. */
export function toDayNumber(isoDate) {
  if (typeof isoDate !== 'string') return NaN;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!m) return NaN;
  const [, y, mo, d] = m.map(Number);
  const ms = Date.UTC(y, mo - 1, d);
  const back = new Date(ms);
  // Rechaza fechas imposibles como 2026-02-31, que Date.UTC "arregla" en silencio.
  if (back.getUTCFullYear() !== y || back.getUTCMonth() !== mo - 1 || back.getUTCDate() !== d) {
    return NaN;
  }
  return Math.floor(ms / 86400000);
}

/** Convierte un objeto Date a "YYYY-MM-DD" usando su fecha LOCAL. */
export function toISODate(date) {
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

/** Días transcurridos entre dos fechas ISO. Positivo si "to" es posterior. */
export function daysBetween(fromISO, toISO) {
  return toDayNumber(toISO) - toDayNumber(fromISO);
}

// --- Límites de las fases --------------------------------------------------

/**
 * Calcula en qué días del ciclo empieza y acaba cada fase.
 *
 * Devuelve un objeto con un rango [inicio, fin] por fase, ambos inclusive y
 * en base 1. Una fase puede quedar VACÍA (inicio > fin) en ciclos muy cortos:
 * en un ciclo de 21 días la fase folicular no llega a existir como tal.
 * Quien consuma esto debe comprobar `isEmpty`.
 */
export function phaseBoundaries(cycleLength, periodDays = PERIOD_DAYS.default) {
  const L = clamp(Math.round(cycleLength), CYCLE_LENGTH.min, CYCLE_LENGTH.max);
  const P = clamp(Math.round(periodDays), PERIOD_DAYS.min, Math.min(PERIOD_DAYS.max, L - 1));

  // La ventana ovulatoria se ancla desde el final del ciclo.
  let ovStart = L - OVULATION_BEFORE_NEXT_PERIOD.earliest;
  let ovEnd   = L - OVULATION_BEFORE_NEXT_PERIOD.latest;

  // No puede empezar antes de que acabe el sangrado.
  ovStart = Math.max(ovStart, P + 1);
  ovEnd   = Math.max(ovEnd, ovStart);
  // Ni acabar después del propio ciclo.
  ovEnd   = Math.min(ovEnd, L);

  const bounds = {
    menstruacion: [1, P],
    folicular:    [P + 1, ovStart - 1],
    ovulatoria:   [ovStart, ovEnd],
    lutea:        [ovEnd + 1, L]
  };

  const out = {};
  for (const [id, [start, end]] of Object.entries(bounds)) {
    out[id] = { start, end, isEmpty: start > end, days: Math.max(0, end - start + 1) };
  }
  return out;
}

/** Devuelve el id de fase para un día del ciclo dado. */
export function phaseForDay(day, cycleLength, periodDays = PERIOD_DAYS.default) {
  const b = phaseBoundaries(cycleLength, periodDays);
  for (const id of ['menstruacion', 'folicular', 'ovulatoria', 'lutea']) {
    if (!b[id].isEmpty && day >= b[id].start && day <= b[id].end) return id;
  }
  // Si el día se sale del ciclo (no debería pasar), la última fase es la lútea.
  return 'lutea';
}

// --- Cálculo principal -----------------------------------------------------

/**
 * Estima en qué punto del ciclo se está hoy.
 *
 * @param {object} input
 * @param {string} input.lastPeriodDate  "YYYY-MM-DD", primer día de la última regla
 * @param {number} input.cycleLength     duración habitual en días
 * @param {number} [input.periodDays]    duración del sangrado
 * @param {string} [input.today]         fecha de referencia (para tests)
 * @param {string} [input.contraception] clave de CONTRACEPTION
 *
 * @returns {object} estado calculado. Comprobar SIEMPRE `ok` y `reliability`
 *                   antes de mostrar nada al usuario.
 */
export function estimate(input) {
  const {
    lastPeriodDate,
    cycleLength = CYCLE_LENGTH.default,
    periodDays = PERIOD_DAYS.default,
    today = toISODate(new Date()),
    contraception = 'ninguno'
  } = input || {};

  const warnings = [];

  // 1. Anticoncepción PRIMERO. Si el método suprime la ovulación no hay fases
  //    que calcular, y la fecha de la regla es irrelevante: ni siquiera hace
  //    falta pedirla. Comprobar esto antes que la fecha evita mostrar un error
  //    de "datos caducados" a quien simplemente no tiene ciclo que seguir.
  const method = CONTRACEPTION[contraception] || CONTRACEPTION.ninguno;
  if (method.phases === false) {
    return {
      ok: true,
      phasesApply: false,
      reason: 'anticoncepcion_hormonal',
      method: contraception,
      methodLabel: method.label,
      warnings,
      message:
        `Con ${method.label.toLowerCase()} no hay ovulación ni fase lútea: el método la suprime. ` +
        `El sangrado de la semana de descanso es un sangrado por deprivación, no una regla. ` +
        `Esta pantalla no puede calcular fases en este caso, y fingir que sí sería engañarte.`
    };
  }

  // 2. Validar la fecha.
  const startNum = toDayNumber(lastPeriodDate);
  const todayNum = toDayNumber(today);
  if (Number.isNaN(startNum) || Number.isNaN(todayNum)) {
    return fail('fecha_invalida', 'La fecha no tiene un formato válido.');
  }
  const elapsed = todayNum - startNum;
  if (elapsed < 0) {
    return fail('fecha_futura', 'La fecha introducida es posterior a hoy.');
  }

  // 3. Validar la duración del ciclo. Fuera de 21-35 días no es "un ciclo raro":
  //    es un motivo médico para consultar, y la app debe decirlo.
  const rawLength = Math.round(Number(cycleLength));
  if (!Number.isFinite(rawLength)) {
    return fail('duracion_invalida', 'La duración del ciclo no es un número.');
  }
  if (rawLength < CYCLE_LENGTH.min || rawLength > CYCLE_LENGTH.max) {
    warnings.push({
      id: 'fuera_de_rango',
      text: `Un ciclo de ${rawLength} días queda fuera del rango habitual (21-35). ` +
            `Puede ser normal para ella, pero también es motivo razonable para consultar ` +
            `con un profesional sanitario.`
    });
  }
  const L = clamp(rawLength, CYCLE_LENGTH.min, CYCLE_LENGTH.max);
  const P = clamp(Math.round(Number(periodDays) || PERIOD_DAYS.default),
                  PERIOD_DAYS.min, Math.min(PERIOD_DAYS.max, L - 1));

  // 4. Métodos que no suprimen la ovulación pero enturbian el cálculo.
  if (method.phases === 'warn') {
    warnings.push({
      id: 'metodo_dudoso',
      text: contraception === 'diu_hormonal'
        ? 'Con DIU hormonal muchas mujeres siguen ovulando, pero el sangrado deja de marcar ' +
          'de forma fiable el día 1 del ciclo. Toma esta estimación con mucha cautela.'
        : 'Sin saber el método anticonceptivo, esta estimación puede no aplicar en absoluto.'
    });
  }

  // 5. Día del ciclo. El módulo hace que el ciclo se repita indefinidamente,
  //    que es justo lo que introduce error si los datos son viejos (ver punto 5).
  const cyclesElapsed = Math.floor(elapsed / L);
  const dayOfCycle = (elapsed % L) + 1;

  // 6. Fiabilidad. Cada ciclo que pasa sin actualizar la fecha acumula error.
  //    La variación entre ciclos de una misma persona tiene una DE de 2,6 días,
  //    y los errores se acumulan como la raíz del número de ciclos.
  const driftDays = cyclesElapsed === 0 ? 0
    : Math.round(INTRA_WOMAN_SD_DAYS * Math.sqrt(cyclesElapsed) * 10) / 10;

  let reliability;
  if (cyclesElapsed === 0)      reliability = 'alta';
  else if (cyclesElapsed <= 2)  reliability = 'media';
  else if (cyclesElapsed <= 5)  reliability = 'baja';
  else                          reliability = 'caducada';

  if (reliability === 'caducada') {
    return {
      ok: true,
      phasesApply: false,
      reason: 'datos_caducados',
      cyclesElapsed,
      warnings,
      message:
        `Han pasado ${cyclesElapsed} ciclos desde la fecha que introdujiste. ` +
        `A estas alturas la estimación ya no significa nada. ` +
        `Actualiza la fecha o no mires este dato.`
    };
  }
  if (reliability === 'baja') {
    warnings.push({
      id: 'datos_antiguos',
      text: `Han pasado ${cyclesElapsed} ciclos desde la última fecha introducida. ` +
            `El margen de error acumulado ronda los ±${Math.round(driftDays)} días.`
    });
  }

  // 7. Fase y márgenes.
  const bounds = phaseBoundaries(L, P);
  const phase = phaseForDay(dayOfCycle, L, P);
  const b = bounds[phase];
  const daysLeftInPhase = b.end - dayOfCycle + 1;

  // El margen de error nunca baja de ±2 días: incluso con datos frescos, el día
  // de ovulación se dispersa mucho entre ciclos de la misma persona.
  const marginDays = Math.max(2, Math.round(driftDays));

  return {
    ok: true,
    phasesApply: true,
    dayOfCycle,
    cycleLength: L,
    periodDays: P,
    phase,
    phaseStart: b.start,
    phaseEnd: b.end,
    daysLeftInPhase,
    marginDays,
    reliability,
    cyclesElapsed,
    elapsedDays: elapsed,
    boundaries: bounds,
    /** Otras fases plausibles hoy si se tiene en cuenta el margen de error. */
    alternativePhases: plausiblePhases(dayOfCycle, marginDays, L, P).filter(p => p !== phase),
    warnings
  };
}

/** Qué fases caen dentro del margen de error para el día actual. */
function plausiblePhases(day, margin, L, P) {
  const set = new Set();
  for (let d = day - margin; d <= day + margin; d++) {
    const norm = ((d - 1) % L + L) % L + 1;
    set.add(phaseForDay(norm, L, P));
  }
  return [...set];
}

function fail(code, message) {
  return { ok: false, phasesApply: false, reason: code, message, warnings: [] };
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}
