import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  level: number; // 0-100
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
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [
    {
      title: 'Backend',
      icon: '⚙️',
      color: '#00FFB2',
      skills: [
        { name: 'ASP.NET Core',      level: 92 },
        { name: 'Entity Framework',  level: 88 },
        { name: 'REST APIs',         level: 95 },
        { name: 'SignalR',           level: 75 },
        { name: 'Microservices',     level: 78 },
      ]
    },
    {
      title: 'Frontend',
      icon: '🔷',
      color: '#00C8FF',
      skills: [
        { name: 'Angular 17+',       level: 90 },
        { name: 'TypeScript',        level: 88 },
        { name: 'RxJS',              level: 82 },
        { name: 'NgRx',              level: 75 },
        { name: 'Tailwind CSS',      level: 85 },
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: '#A78BFA',
      skills: [
        { name: 'SQL Server',        level: 88 },
        { name: 'MongoDB',           level: 75 },
        { name: 'Redis',             level: 68 },
        { name: 'PostgreSQL',        level: 72 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: '#FB923C',
      skills: [
        { name: 'Azure',             level: 78 },
        { name: 'Docker',            level: 80 },
        { name: 'CI/CD Pipelines',   level: 75 },
        { name: 'GitHub Actions',    level: 78 },
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

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    setTimeout(() => {
      document.querySelectorAll('.skill-card, .bar-fill').forEach(el => observer.observe(el));
    }, 100);
  }
}
