import {
  Component,
  OnInit,
  AfterViewInit,
  inject,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements AfterViewInit {
  lang = inject(LanguageService);

  categories: SkillCategory[] = [
    {
      title: 'Backend',
      icon: '⚙️',
      color: '#00FFB2',
      skills: [
        { name: 'ASP.NET Core', level: 92 },
        { name: 'Entity Framework', level: 88 },
        { name: 'REST APIs', level: 95 },
        { name: 'SignalR', level: 75 },
        { name: 'Microservices', level: 78 },
      ],
    },
    {
      title: 'Frontend',
      icon: '🔷',
      color: '#00C8FF',
      skills: [
        { name: 'Angular 17+', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'RxJS', level: 82 },
        { name: 'NgRx', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: '#A78BFA',
      skills: [
        { name: 'SQL Server', level: 88 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 68 },
        { name: 'PostgreSQL', level: 72 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: '#FB923C',
      skills: [
        { name: 'Azure', level: 78 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'GitHub Actions', level: 78 },
      ],
    },
    {
      title: 'Architecture',
      icon: '🏗️',
      color: '#F472B6',
      skills: [
        { name: 'Clean Architecture', level: 88 },
        { name: 'SOLID Principles', level: 92 },
        { name: 'DDD', level: 78 },
        { name: 'CQRS / MediatR', level: 80 },
      ],
    },
  ];

  constructor() {
    // Re-run animations after language switch re-renders the DOM
    effect(() => {
      this.lang.lang();
      setTimeout(() => this.initAnimations(), 50);
    });
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.initAnimations());
  }

  private initAnimations(): void {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll('.skills-header, .skill-card, .badges-row')
      .forEach((el) => fadeObserver.observe(el));

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.bar-fill') as HTMLElement;
            if (fill) {
              const level = entry.target.getAttribute('data-level') || '0';
              setTimeout(() => {
                fill.style.width = level + '%';
              }, 200);
            }
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    document
      .querySelectorAll('.bar-track')
      .forEach((el) => barObserver.observe(el));
  }
}
