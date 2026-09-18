/**
 * config.js — Los interruptores del producto en un solo sitio.
 *
 * La idea: las decisiones que todavía están abiertas se cambian AQUÍ, no
 * buscando por el código. Si un agente de IA tiene que probar la otra opción,
 * cambia una línea de este archivo.
 */

export const CONFIG = {
  /**
   * DECISIÓN PENDIENTE Nº1 — qué variables se muestran en la pantalla de inicio.
   * 'v2' = set propuesto (recomendado). 'v1' = set original.
   * Ver docs/03-variables-pantalla-inicio.md para la comparativa completa.
   */
  contentSet: 'v2',

  /**
   * Puerta de consentimiento: obliga a marcar una casilla confirmando que la
   * pareja sabe que se están introduciendo sus datos, antes de dejar guardar
   * nada. Requisito legal, no una cortesía. Ver docs/05-rgpd.md.
   * Ponerlo a false requiere una justificación legal escrita.
   */
  requireConsentGate: true,

  /**
   * Preguntar el método anticonceptivo en el onboarding. Necesario porque en
   * ~24% de los casos el modelo de fases no aplica en absoluto.
   */
  askContraception: true,

  /**
   * Mostrar el número exacto de día del ciclo ("Día 17").
   * Recomendado FALSE: sugiere una precisión que el cálculo no tiene. En su
   * lugar se muestra la fase con su margen de error.
   */
  showExactDayNumber: false,

  /**
   * Un solo perfil de pareja, siempre. NO convertir esto en una lista.
   * Es una medida de seguridad deliberada: las apps que permiten seguir a varias
   * personas a la vez son la definición de herramienta de vigilancia.
   */
  maxProfiles: 1,

  /** Telemetría. Apagada por defecto hasta que exista base legal documentada. */
  analytics: {
    enabled: false,
    endpoint: null,      // proyecto Supabase en región UE específica (eu-west-3 / eu-central-1)
    // NUNCA enviar: fecha de regla, duración del ciclo, fase calculada, método
    // anticonceptivo, ni nada derivado. Eso convertiría los eventos en datos de
    // salud del Art. 9 RGPD.
    allowedEvents: ['app_open', 'onboarding_complete', 'module_read', 'data_deleted']
  },

  /** Versión del esquema guardado en localStorage. Subirla obliga a migrar. */
  storageVersion: 2
};
