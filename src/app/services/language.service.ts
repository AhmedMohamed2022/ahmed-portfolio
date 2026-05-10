import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Lang } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  /** Current language signal — drives everything reactively */
  private _lang = signal<Lang>(this.getInitialLang());

  /** Public read-only signal */
  readonly lang = this._lang.asReadonly();

  /** Convenience boolean signal */
  readonly isArabic = computed(() => this._lang() === 'ar');

  /** Full translation object for the current language */
  readonly t = computed(() => TRANSLATIONS[this._lang()]);

  // ── Init ──────────────────────────────────────────────────────────────
  private getInitialLang(): Lang {
    const stored = localStorage.getItem('portfolio_lang') as Lang | null;
    if (stored === 'ar' || stored === 'en') return stored;
    // Auto-detect from browser language
    return navigator.language.startsWith('ar') ? 'ar' : 'en';
  }

  // ── Toggle ────────────────────────────────────────────────────────────
  toggle(): void {
    const next: Lang = this._lang() === 'en' ? 'ar' : 'en';
    this.setLang(next);
  }

  setLang(lang: Lang): void {
    this._lang.set(lang);
    localStorage.setItem('portfolio_lang', lang);
    this.applyDocumentDir(lang);
  }

  // ── RTL helper ────────────────────────────────────────────────────────
  applyDocumentDir(lang: Lang): void {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }

  // ── Nested key getter (e.g. 'hero.title') ─────────────────────────────
  get(key: string): any {
    const parts = key.split('.');
    let result: any = TRANSLATIONS[this._lang()];
    for (const part of parts) {
      if (result == null) return key;
      result = result[part];
    }
    return result ?? key;
  }
}
