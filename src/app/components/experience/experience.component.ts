import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'ARID Scientific Ltd',
      type: 'Freelance / Contract',
      period: 'Jan 2023 – Present',
      location: 'Remote',
      description:
        'Delivered end-to-end web solutions for a scientific research company, building scalable backends, modern Angular frontends, and cloud-based infrastructure on Azure.',
      responsibilities: [
        'Designed and implemented RESTful APIs using ASP.NET Core with Clean Architecture and CQRS patterns',
        'Built dynamic Angular SPAs with lazy loading, reactive forms, and NgRx state management',
        'Architected multi-tenant data models in SQL Server with row-level security',
        'Set up Azure DevOps CI/CD pipelines reducing deployment time by 60%',
        'Integrated third-party services: payment gateways, email providers, and cloud storage',
        'Conducted code reviews and established coding standards across the team',
        'Optimized database queries and introduced Redis caching — improving API response times by 40%',
      ],
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

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add('visible'),
        ),
      { threshold: 0.1 },
    );
    setTimeout(() => {
      document
        .querySelectorAll('.exp-header, .exp-card, .exp-metric')
        .forEach((el) => observer.observe(el));
    }, 100);
  }
}
