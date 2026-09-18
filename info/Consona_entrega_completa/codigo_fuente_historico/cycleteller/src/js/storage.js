/**
 * storage.js — Guardado local. Nada sale del navegador.
 *
 * Todo va envuelto en try/catch porque localStorage lanza excepción en modo
 * privado de algunos navegadores y cuando el usuario tiene el almacenamiento
 * bloqueado. La app debe funcionar igualmente, solo que sin recordar nada.
 */

import { CONFIG } from './config.js';

const KEY = 'cycleteller.v2';
const THEME_KEY = 'cycleteller.theme';

const EMPTY = {
  version: CONFIG.storageVersion,
  consentAcknowledged: false,
  consentDate: null,
  contraception: null,
  lastPeriodDate: null,
  cycleLength: null,
  periodDays: null,
  onboardingComplete: false
};

/** Lee el estado guardado. Devuelve siempre un objeto válido. */
export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return { ...EMPTY };
    // Migración: si el esquema es viejo, se descarta en vez de arrastrar basura.
    if (parsed.version !== CONFIG.storageVersion) return { ...EMPTY };
    return { ...EMPTY, ...parsed };
  } catch {
    return { ...EMPTY };
  }
}

/** Guarda el estado. Devuelve true si se pudo guardar. */
export function save(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...data, version: CONFIG.storageVersion }));
    return true;
  } catch {
    return false;
  }
}

/** Borrado total. Es un requisito legal que esto sea de un clic y completo. */
export function wipe() {
  try {
    localStorage.removeItem(KEY);
    localStorage.removeItem(THEME_KEY);
    return true;
  } catch {
    return false;
  }
}

/** Comprueba si el navegador deja guardar. La UI avisa al usuario si no. */
export function isAvailable() {
  try {
    const probe = '__ct_probe__';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

export function loadTheme() {
  try { return localStorage.getItem(THEME_KEY) || 'system'; } catch { return 'system'; }
}

export function saveTheme(value) {
  try { localStorage.setItem(THEME_KEY, value); } catch { /* da igual */ }
}
