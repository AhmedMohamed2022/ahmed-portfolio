import { Component, OnInit, inject, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface ExperienceStatic {
  techStack: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  lang = inject(LanguageService);

  private staticExperiences: ExperienceStatic[] = [
    {
      techStack: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'Azure',
        'Docker',
        'Redis',
        'SignalR',
        'CQRS',
      ],
      current: true,
    },
  ];

  experiences = computed(() => {
    const items = this.lang.t()['experience'].items;
    return this.staticExperiences.map((s, i) => ({
      ...s,
      role: items[i].role,
      company: items[i].company,
      type: items[i].type,
      period: items[i].period,
      location: items[i].location,
      description: items[i].description,
      responsibilities: items[i].responsibilities,
    }));
  });

  metrics = computed(() => this.lang.t()['experience'].metrics);

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
            this.observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    setTimeout(() => this.observeElements(), 100);
  }

  private observeElements(): void {
    document
      .querySelectorAll('.exp-header, .exp-card, .exp-metric')
      .forEach((el) => {
        if (!el.classList.contains('visible')) {
          this.observer.observe(el);
        }
      });
  }
}
