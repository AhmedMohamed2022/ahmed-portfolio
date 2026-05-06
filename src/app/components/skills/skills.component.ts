import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  level: number; // 0–100
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
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {

  categories: SkillCategory[] = [
    {
      title: 'Backend',
      icon: '⚙️',
      color: '#00FFB2',
      skills: [
        { name: 'ASP.NET Core',     level: 92 },
        { name: 'Entity Framework', level: 88 },
        { name: 'REST APIs',        level: 95 },
        { name: 'SignalR',          level: 75 },
        { name: 'Microservices',    level: 78 },
      ]
    },
    {
      title: 'Frontend',
      icon: '🔷',
      color: '#00C8FF',
      skills: [
        { name: 'Angular 17+',  level: 90 },
        { name: 'TypeScript',   level: 88 },
        { name: 'RxJS',         level: 82 },
        { name: 'NgRx',         level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: '#A78BFA',
      skills: [
        { name: 'SQL Server', level: 88 },
        { name: 'MongoDB',    level: 75 },
        { name: 'Redis',      level: 68 },
        { name: 'PostgreSQL', level: 72 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: '#FB923C',
      skills: [
        { name: 'Azure',           level: 78 },
        { name: 'Docker',          level: 80 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'GitHub Actions',  level: 78 },
      ]
    },
    {
      title: 'Architecture',
      icon: '🏗️',
      color: '#F472B6',
      skills: [
        { name: 'Clean Architecture', level: 88 },
        { name: 'SOLID Principles',   level: 92 },
        { name: 'DDD',                level: 78 },
        { name: 'CQRS / MediatR',     level: 80 },
      ]
    },
  ];

  ngAfterViewInit(): void {
    // Wait one frame so Angular has fully rendered all bar elements
    requestAnimationFrame(() => {
      this.initAnimations();
    });
  }

  private initAnimations(): void {
    // ── 1. Fade-up for header and cards ──────────────────────────────────
    const fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.skills-header, .skill-card, .badges-row')
      .forEach(el => fadeObserver.observe(el));

    // ── 2. Bar fill animation ─────────────────────────────────────────────
    // Each .bar-track holds a data-level attribute.
    // When it enters the viewport we set the CSS custom property --bar-target
    // which drives the CSS transition from 0 → target width.
    const barObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.bar-fill') as HTMLElement;
            if (fill) {
              const level = entry.target.getAttribute('data-level') || '0';
              // Small delay so the card fade-in completes first
              setTimeout(() => {
                fill.style.width = level + '%';
              }, 200);
            }
            barObserver.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.3 }  // bar track must be 30% visible before firing
    );

    document.querySelectorAll('.bar-track')
      .forEach(el => barObserver.observe(el));
  }
}
