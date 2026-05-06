import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: EducationItem[] = [
    {
      degree: 'Professional Diploma — Full Stack Development',
      institution: 'Information Technology Institute (ITI)',
      period: '2022 – 2023',
      description:
        'Intensive professional diploma covering enterprise software development with a focus on .NET technologies, Angular, database design, and modern DevOps practices.',
      highlights: [
        'ASP.NET Core & Entity Framework Core in-depth',
        'Angular with TypeScript and advanced SPA patterns',
        'Clean Architecture & Design Patterns',
        'SQL Server — advanced queries, indexing, optimization',
        'Azure Cloud fundamentals and CI/CD with Azure DevOps',
      ],
      icon: '🎓',
      color: '#00FFB2',
    },
    {
      degree: "Bachelor's Degree — Computer Science",
      institution: 'Faculty of Computer Science',
      period: '2018 – 2022',
      description:
        'Comprehensive computer science education covering algorithms, data structures, software engineering, operating systems, networking, and database systems.',
      highlights: [
        'Algorithms & Data Structures',
        'Object-Oriented Programming & Software Engineering',
        'Database Systems & Data Modeling',
        'Networking & Operating Systems fundamentals',
        'Graduation Project — Full Stack Web Application',
      ],
      icon: '📚',
      color: '#A78BFA',
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
        .querySelectorAll('.edu-header, .edu-card')
        .forEach((el) => observer.observe(el));
    }, 100);
  }
}
