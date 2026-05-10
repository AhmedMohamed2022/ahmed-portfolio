import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService }              from '../services/language.service';

/**
 * Usage in templates:
 *   {{ 'nav.about' | translate }}
 *
 * The pipe is impure so it reacts when the language signal changes.
 */
@Pipe({
  name:      'translate',
  standalone: true,
  pure:       false,   // must be impure — re-evaluates when lang signal changes
})
export class TranslatePipe implements PipeTransform {
  private lang = inject(LanguageService);

  transform(key: string): string {
    const value = this.lang.get(key);
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return key;   // fallback: show the key itself
  }
}
