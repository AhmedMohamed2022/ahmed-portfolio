import { Component, OnInit, inject, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface EducationStatic {
  icon: string;
  color: string;
  period: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  lang = inject(LanguageService);

  private staticEducations: EducationStatic[] = [
    { icon: '🎓', color: '#00FFB2', period: '2025 – 2026' },
    { icon: '📚', color: '#A78BFA', period: '2020 – 2024' },
  ];

  // computed — reactive, re-evaluates when lang signal changes
  educations = computed(() => {
    const items = this.lang.t()['education'].items;
    return this.staticEducations.map((s, i) => ({
      ...s,
      degree: items[i].degree,
      institution: items[i].institution,
      description: items[i].description,
      highlights: items[i].highlights,
    }));
  });

  private observer!: IntersectionObserver;

  constructor() {
    effect(() => {
      this.lang.lang();
      setTimeout(() => this.observeElements(), 50);
    });
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target.classList.contains('visible')) {
            e.target.classList.add('visible');
            this.observer.unobserve(e.target); // fire once, stop the loop
          }
        }),
      { threshold: 0.1 },
    );
    setTimeout(() => this.observeElements(), 100);
  }

  private observeElements(): void {
    document
      .querySelectorAll('.edu-header, .edu-card, .certs-banner')
      .forEach((el) => {
        if (!el.classList.contains('visible')) {
          this.observer.observe(el);
        }
      });
  }
}
