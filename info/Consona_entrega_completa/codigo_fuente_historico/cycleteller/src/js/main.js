/**
 * main.js — Interfaz y arranque de la app.
 *
 * Estructura de la pantalla, de arriba abajo:
 *   1. Cabecera con el nombre y el botón de tema.
 *   2. Puerta de consentimiento (solo la primera vez).
 *   3. Onboarding: método anticonceptivo → fecha y duración.
 *   4. Pantalla principal: fase estimada + tarjetas de variables + explorador.
 *   5. Ajustes y borrado de datos.
 *
 * Todo el texto que ve el usuario sale de data/content.vN.js.
 * Todo el cálculo sale de cycle.js. Este archivo solo pinta.
 */

import { CONFIG } from './config.js';
import * as store from './storage.js';
import {
  estimate, phaseBoundaries, CYCLE_LENGTH, PERIOD_DAYS, CONTRACEPTION, toISODate
} from './cycle.js';
import contentV1 from '../../data/content.v1.js';
import contentV2 from '../../data/content.v2.js';

const CONTENT = CONFIG.contentSet === 'v1' ? contentV1 : contentV2;

const PHASE_META = {
  menstruacion: { name: 'Menstruación', short: 'Regla' },
  folicular:    { name: 'Folicular',    short: 'Folicular' },
  ovulatoria:   { name: 'Ovulatoria',   short: 'Ovulatoria' },
  lutea:        { name: 'Lútea',        short: 'Lútea' }
};
const PHASE_ORDER = ['menstruacion', 'folicular', 'ovulatoria', 'lutea'];

const RELIABILITY_LABEL = {
  alta:  { text: 'Estimación reciente', tone: 'ok' },
  media: { text: 'Datos de hace algún tiempo', tone: 'warn' },
  baja:  { text: 'Datos antiguos: poco fiable', tone: 'bad' }
};

let state = store.load();
let exploring = null;   // fase que se está explorando, o null = hoy
const $ = (id) => document.getElementById(id);

// ---------------------------------------------------------------------------
// Arranque
// ---------------------------------------------------------------------------

function init() {
  applyStoredTheme();
  $('theme-toggle').addEventListener('click', cycleTheme);

  if (!store.isAvailable()) {
    showBanner(
      'Tu navegador no permite guardar datos en este momento (puede ser el modo ' +
      'privado). La app funciona, pero olvidará todo al cerrar la pestaña.'
    );
  }

  buildConsentGate();
  buildOnboarding();
  buildSettings();
  buildDangerZone();
  render();
}

// ---------------------------------------------------------------------------
// 1. Puerta de consentimiento
// ---------------------------------------------------------------------------
// No es una pantalla decorativa. Los datos que se van a introducir son datos de
// salud de otra persona, y esa persona no está aquí para autorizarlo.
// Ver docs/05-rgpd.md.

function buildConsentGate() {
  $('consent-check').addEventListener('change', (e) => {
    $('consent-continue').disabled = !e.target.checked;
  });
  $('consent-continue').addEventListener('click', () => {
    state.consentAcknowledged = true;
    state.consentDate = toISODate(new Date());
    store.save(state);
    render();
  });
}

// ---------------------------------------------------------------------------
// 2. Onboarding
// ---------------------------------------------------------------------------

function buildOnboarding() {
  // Selector de método anticonceptivo.
  const select = $('input-contraception');
  select.innerHTML = '<option value="">Selecciona…</option>' +
    Object.entries(CONTRACEPTION)
      .map(([k, v]) => `<option value="${k}">${v.label}</option>`)
      .join('');

  select.addEventListener('change', () => {
    const method = CONTRACEPTION[select.value];
    const box = $('contraception-note');
    if (!method) { box.hidden = true; return; }
    box.hidden = false;
    if (method.phases === false) {
      box.className = 'note note-stop';
      box.textContent =
        'Con este método no hay ovulación ni fases del ciclo: el método las suprime. ' +
        'La app te mostrará contenido educativo, pero no un calendario de fases, ' +
        'porque en este caso sería inventado.';
    } else if (method.phases === 'warn') {
      box.className = 'note note-warn';
      box.textContent =
        'Con este método la estimación es especialmente incierta. Tómala con pinzas.';
    } else {
      box.className = 'note';
      box.textContent = 'El modelo de fases puede aplicarse, siempre con margen de error.';
    }
  });

  // Valores por defecto de los campos numéricos.
  $('input-length').min = CYCLE_LENGTH.min;
  $('input-length').max = CYCLE_LENGTH.max;
  $('input-length').placeholder = CYCLE_LENGTH.default;
  $('input-period-days').min = PERIOD_DAYS.min;
  $('input-period-days').max = PERIOD_DAYS.max;
  $('input-period-days').placeholder = PERIOD_DAYS.default;
  $('input-date').max = toISODate(new Date());

  $('onboarding-save').addEventListener('click', saveOnboarding);
}

function saveOnboarding() {
  const contraception = $('input-contraception').value;
  const date = $('input-date').value;
  const length = parseInt($('input-length').value, 10);
  const period = parseInt($('input-period-days').value, 10);
  const err = $('onboarding-error');

  if (!contraception) { return showError(err, 'Elige un método anticonceptivo.'); }

  const suppresses = CONTRACEPTION[contraception]?.phases === false;
  if (!suppresses) {
    if (!date) return showError(err, 'Falta la fecha del primer día de la última regla.');
    const test = estimate({ lastPeriodDate: date, cycleLength: length || CYCLE_LENGTH.default });
    if (!test.ok && test.reason === 'fecha_futura') {
      return showError(err, 'Esa fecha es posterior a hoy. Revísala.');
    }
    if (!test.ok) return showError(err, test.message);
  }

  err.hidden = true;
  state.contraception = contraception;
  state.lastPeriodDate = date || null;
  state.cycleLength = Number.isFinite(length) ? length : CYCLE_LENGTH.default;
  state.periodDays = Number.isFinite(period) ? period : PERIOD_DAYS.default;
  state.onboardingComplete = true;
  store.save(state);
  exploring = null;
  render();
}

function showError(el, msg) { el.textContent = msg; el.hidden = false; }

// ---------------------------------------------------------------------------
// 3. Ajustes
// ---------------------------------------------------------------------------

function buildSettings() {
  $('settings-edit').addEventListener('click', () => {
    state.onboardingComplete = false;
    store.save(state);
    render();
  });
}

// ---------------------------------------------------------------------------
// 4. Borrado de datos (dos pasos, sin diálogos nativos)
// ---------------------------------------------------------------------------

function buildDangerZone() { renderDeleteButton(); }

function renderDeleteButton() {
  const zone = $('danger-zone');
  zone.innerHTML = '<button class="link-danger" type="button">Borrar todos los datos</button>';
  zone.querySelector('button').addEventListener('click', renderDeleteConfirm);
}

function renderDeleteConfirm() {
  const zone = $('danger-zone');
  zone.innerHTML =
    '<span class="confirm-row">' +
      '<span class="confirm-text">¿Seguro? Se borra todo de este navegador.</span>' +
      '<button class="link-danger" type="button" data-a="yes">Sí, borrar</button>' +
      '<button class="btn-ghost" type="button" data-a="no">Cancelar</button>' +
    '</span>';
  zone.querySelector('[data-a="yes"]').addEventListener('click', () => {
    store.wipe();
    state = store.load();
    exploring = null;
    renderDeleteButton();
    render();
    announce('Datos borrados.');
  });
  zone.querySelector('[data-a="no"]').addEventListener('click', renderDeleteButton);
}

// ---------------------------------------------------------------------------
// 5. Render principal
// ---------------------------------------------------------------------------

function render() {
  const needsConsent = CONFIG.requireConsentGate && !state.consentAcknowledged;
  const needsOnboarding = !needsConsent && !state.onboardingComplete;

  $('view-consent').hidden = !needsConsent;
  $('view-onboarding').hidden = !needsOnboarding;
  $('view-main').hidden = needsConsent || needsOnboarding;

  if (needsOnboarding) {
    // Rellena el formulario con lo que ya hubiera guardado.
    if (state.contraception) {
      $('input-contraception').value = state.contraception;
      $('input-contraception').dispatchEvent(new Event('change'));
    }
    if (state.lastPeriodDate) $('input-date').value = state.lastPeriodDate;
    if (state.cycleLength) $('input-length').value = state.cycleLength;
    if (state.periodDays) $('input-period-days').value = state.periodDays;
    return;
  }
  if (needsConsent) return;

  renderMain();
}

function renderMain() {
  const result = estimate({
    lastPeriodDate: state.lastPeriodDate,
    cycleLength: state.cycleLength,
    periodDays: state.periodDays,
    contraception: state.contraception
  });

  renderWarnings(result);

  // Caso A: no hay fases que mostrar (anticoncepción hormonal o datos caducados).
  if (!result.phasesApply) {
    renderNoPhases(result);
    return;
  }

  // Caso B: pantalla normal.
  const showId = exploring || result.phase;
  renderHero(result, showId);
  renderCards(showId);
  renderStrip(result, showId);
  $('phase-strip-wrap').hidden = false;
}

function renderWarnings(result) {
  const box = $('warnings');
  const items = result.warnings || [];
  if (!items.length) { box.hidden = true; box.innerHTML = ''; return; }
  box.hidden = false;
  box.innerHTML = items
    .map(w => `<div class="note note-warn">${escapeHTML(w.text)}</div>`)
    .join('');
}

function renderNoPhases(result) {
  const hero = $('hero');
  hero.dataset.phase = 'neutral';
  $('hero-eyebrow').textContent = result.reason === 'anticoncepcion_hormonal'
    ? 'Sin fases que calcular' : 'Datos caducados';
  $('hero-pill').hidden = true;
  $('hero-title').textContent = result.reason === 'anticoncepcion_hormonal'
    ? 'Aquí no hay ciclo que seguir' : 'Esta estimación ha caducado';
  $('hero-note').textContent = result.message;
  $('hero-back').hidden = true;
  $('phase-strip-wrap').hidden = true;

  // Con anticoncepción hormonal seguimos dando contenido útil, solo que otro.
  const source = (result.reason === 'anticoncepcion_hormonal' && CONTENT.sinFases)
    ? CONTENT.sinFases : null;
  const grid = $('variable-grid');
  grid.innerHTML = '';
  if (source) {
    $('cards-label').textContent = 'Qué sí puedes hacer';
    $('cards-label').hidden = false;
    for (const [key, label] of Object.entries(CONTENT.variables)) {
      if (source[key]) grid.appendChild(card(label, source[key], 'neutral'));
    }
  } else {
    $('cards-label').hidden = true;
  }
}

function renderHero(result, showId) {
  const hero = $('hero');
  hero.dataset.phase = showId;
  const meta = PHASE_META[showId];
  const b = result.boundaries[showId];

  $('hero-pill').hidden = false;
  $('hero-pill-text').textContent = b.isEmpty
    ? 'no aplica en este ciclo'
    : `días ${b.start}–${b.end} de ${result.cycleLength}`;

  if (exploring) {
    $('hero-eyebrow').textContent = 'Explorando';
    $('hero-title').textContent = meta.name;
    $('hero-note').textContent =
      `Así se ve la pantalla en fase ${meta.name.toLowerCase()}. ` +
      `Vuelve a «hoy» para ver la estimación real.`;
    $('hero-back').hidden = false;
  } else {
    const rel = RELIABILITY_LABEL[result.reliability] || RELIABILITY_LABEL.media;
    $('hero-eyebrow').textContent = rel.text;
    $('hero-eyebrow').dataset.tone = rel.tone;

    // Deliberadamente NO se muestra "Día 17" por defecto: sugiere una precisión
    // que el cálculo no tiene. Se muestra la fase y su margen.
    $('hero-title').textContent = CONFIG.showExactDayNumber
      ? `Día ${result.dayOfCycle} · ${meta.name}`
      : `Probablemente en fase ${meta.name.toLowerCase()}`;

    const alts = result.alternativePhases.length
      ? ` Con el margen de error de ±${result.marginDays} días, también podría estar en ` +
        `fase ${result.alternativePhases.map(p => PHASE_META[p].name.toLowerCase()).join(' o ')}.`
      : '';
    const left = result.daysLeftInPhase;
    $('hero-note').textContent =
      `Estimación con un margen de ±${result.marginDays} días.` + alts +
      (left <= 1 ? ' La fase podría cambiar hoy o mañana.'
                 : ` Cambiaría de fase en unos ${left} días.`);
    $('hero-back').hidden = true;
    announce($('hero-title').textContent);
  }
}

function renderCards(showId) {
  const grid = $('variable-grid');
  $('cards-label').hidden = false;
  $('cards-label').textContent = 'En esta fase';
  grid.innerHTML = '';
  const phaseContent = CONTENT.phases[showId] || {};
  for (const [key, label] of Object.entries(CONTENT.variables)) {
    const text = phaseContent[key];
    if (text) grid.appendChild(card(label, text, showId));
  }
}

function card(label, text, phaseId) {
  const el = document.createElement('article');
  el.className = 'vcard';
  el.dataset.phase = phaseId;
  // La tarjeta antiestereotipo se destaca: es la que más aporta del set v2.
  if (label.toLowerCase().startsWith('qué no')) el.classList.add('vcard-flag');
  const h = document.createElement('h3');
  h.textContent = label;
  const p = document.createElement('p');
  p.textContent = text;
  el.append(h, p);
  return el;
}

function renderStrip(result, showId) {
  const strip = $('phase-strip');
  strip.innerHTML = '';
  for (const id of PHASE_ORDER) {
    const b = result.boundaries[id];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'strip-btn';
    btn.dataset.phase = id;
    btn.setAttribute('aria-pressed', String(id === showId));
    btn.innerHTML =
      `<span class="strip-name">${PHASE_META[id].short}</span>` +
      `<span class="strip-range">${b.isEmpty ? '—' : `días ${b.start}–${b.end}`}</span>`;
    btn.addEventListener('click', () => {
      exploring = (id === result.phase) ? null : id;
      renderMain();
    });
    strip.appendChild(btn);
  }
  $('hero-back').onclick = () => { exploring = null; renderMain(); };
}

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------

function announce(text) {
  const live = $('live-region');
  if (live) live.textContent = text;
}

function showBanner(text) {
  const b = $('top-banner');
  b.textContent = text;
  b.hidden = false;
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function applyStoredTheme() {
  const t = store.loadTheme();
  if (t && t !== 'system') document.documentElement.setAttribute('data-theme', t);
}

function cycleTheme() {
  const now = document.documentElement.getAttribute('data-theme') || 'system';
  const next = now === 'system' ? 'light' : now === 'light' ? 'dark' : 'system';
  if (next === 'system') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', next);
  store.saveTheme(next);
}

document.addEventListener('DOMContentLoaded', init);
