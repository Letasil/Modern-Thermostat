import type { HomeAssistant } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Bundled translations
// ─────────────────────────────────────────────────────────────────────────────

import de from './translations/de.json';
import en from './translations/en.json';
import fr from './translations/fr.json';
import nl from './translations/nl.json';
import es from './translations/es.json';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type TranslationDict = typeof en;

// ─────────────────────────────────────────────────────────────────────────────
// Language map
// ─────────────────────────────────────────────────────────────────────────────

const TRANSLATIONS: Record<string, TranslationDict> = {
  de, 'de-de': de, 'de-at': de, 'de-ch': de,
  en, 'en-us': en, 'en-gb': en, 'en-au': en,
  fr, 'fr-fr': fr, 'fr-be': fr, 'fr-ch': fr,
  nl, 'nl-nl': nl, 'nl-be': nl,
  es, 'es-es': es, 'es-mx': es,
};

// ─────────────────────────────────────────────────────────────────────────────
// Localizer
// ─────────────────────────────────────────────────────────────────────────────

export class Localizer {
  private _dict: TranslationDict;
  private _hass?: HomeAssistant;
  private _lang: string = 'en';

  constructor(hass?: HomeAssistant) {
    this._hass = hass;
    this._dict = this._resolveDict(hass?.language);
    this._lang = (hass?.language ?? 'en').toLowerCase().split('-')[0];
  }

  update(hass?: HomeAssistant): void {
    this._hass = hass;
    this._dict = this._resolveDict(hass?.language);
    this._lang = (hass?.language ?? 'en').toLowerCase().split('-')[0];
  }

  /** Current base language code (e.g. 'de', 'en', 'nl') */
  get lang(): string { return this._lang; }

  // ── HVAC Mode label ───────────────────────────────────────────────────────

  mode(mode: string): string {
    const haKey = `component.climate.entity_component._.state.${mode}`;
    const haLabel = this._hass?.localize(haKey);
    if (haLabel && haLabel !== haKey) return haLabel;
    const key = mode as keyof TranslationDict['state'];
    return this._dict.state[key] ?? mode;
  }

  // ── HVAC Action label ─────────────────────────────────────────────────────

  action(action: string): string {
    const haKey = `component.climate.entity_component._.state_attributes.hvac_action.state.${action}`;
    const haLabel = this._hass?.localize(haKey);
    if (haLabel && haLabel !== haKey) return haLabel;
    const key = action as keyof TranslationDict['action'];
    return this._dict.action[key] ?? action;
  }

  // ── Alert messages ────────────────────────────────────────────────────────

  alert(key: keyof TranslationDict['alert']): string {
    return this._dict.alert[key] ?? key;
  }

  // ── Sensor / window strings ───────────────────────────────────────────────

  sensor(key: keyof TranslationDict['sensor']): string {
    return this._dict.sensor[key] ?? key;
  }

  // ── UI strings ────────────────────────────────────────────────────────────

  ui(key: keyof TranslationDict['ui']): string {
    return this._dict.ui[key] ?? key;
  }

  // ── ARIA labels ───────────────────────────────────────────────────────────

  aria(key: keyof TranslationDict['aria']): string {
    return this._dict.aria[key] ?? key;
  }

  

  

  // ── Private ───────────────────────────────────────────────────────────────

  private _resolveDict(language?: string): TranslationDict {
    if (!language) return en;
    const lang = language.toLowerCase();
    if (TRANSLATIONS[lang]) return TRANSLATIONS[lang];
    const base = lang.split('-')[0];
    if (TRANSLATIONS[base]) return TRANSLATIONS[base];
    return en;
  }
}

export function createLocalizer(hass?: HomeAssistant): Localizer {
  return new Localizer(hass);
}