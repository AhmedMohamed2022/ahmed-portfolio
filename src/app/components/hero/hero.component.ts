import { Component, OnInit, OnDestroy, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe, IconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  lang = inject(LanguageService);

  typedText = '';
  private titleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typingActive = false;
  private typingTimeout?: ReturnType<typeof setTimeout>;

  photoUrl = '/img/hero/ahmed-photo.png';
  photoLoaded = false;
  photoFailed = false;

  constructor() {
    // Restart typewriter whenever language changes
    effect(() => {
      this.lang.lang(); // subscribe to signal
      this.titleIndex = 0;
      this.charIndex = 0;
      this.deleting = false;
      this.typedText = '';
      if (this.typingActive) {
        this.startTyping();
      }
    });
  }

  /** Always reads titles from the currently active language */
  get titles(): string[] {
    return this.lang.t()['hero'].titles as string[];
  }

  /** Real credibility chip shown next to the portrait (from About). */
  get highlight() {
    return this.lang.t()['about'].highlights[0];
  }

  ngOnInit(): void {
    this.typingActive = true;
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  }

  onPhotoLoad(): void {
    this.photoLoaded = true;
  }

  onPhotoError(): void {
    this.photoFailed = true;
  }

  private startTyping(): void {
    const current = this.titles[this.titleIndex];
    if (!this.deleting && this.charIndex <= current.length) {
      this.typedText = current.slice(0, this.charIndex++);
      this.typingTimeout = setTimeout(() => this.startTyping(), 85);
    } else if (this.deleting && this.charIndex >= 0) {
      this.typedText = current.slice(0, this.charIndex--);
      this.typingTimeout = setTimeout(() => this.startTyping(), 45);
    } else if (!this.deleting && this.charIndex > current.length) {
      this.deleting = true;
      this.typingTimeout = setTimeout(() => this.startTyping(), 2500);
    } else {
      this.deleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.typingTimeout = setTimeout(() => this.startTyping(), 450);
    }
  }

  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
