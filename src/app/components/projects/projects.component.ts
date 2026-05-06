import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  demo?: string;
  featured: boolean;
  badge?: string;
  gradient: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  activeFilter = signal<string>('All');

  filters = ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'];

  projects: Project[] = [
    {
      id: 1,
      title: 'MasjidStory Platform',
      subtitle: 'Community & Content Management',
      description:
        'A comprehensive platform for Islamic centers to manage content, events, and community engagement. Features multi-tenant architecture, role-based access control, and real-time notifications via SignalR.',
      techStack: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'SignalR',
        'Azure',
        'Clean Architecture',
      ],
      features: [
        'Multi-tenant SaaS architecture',
        'Real-time notifications with SignalR',
        'Role-based access control (RBAC)',
        'Azure Blob Storage for media',
        'Automated email campaigns',
      ],
      github: 'https://github.com/ahmed-alsoghayar/masjid-story',
      demo: 'https://masjidstory.com',
      featured: true,
      badge: 'Featured',
      gradient: 'linear-gradient(135deg, #00FFB2 0%, #00A8FF 100%)',
    },
    {
      id: 2,
      title: 'PointPay Rewards SaaS',
      subtitle: 'Loyalty & Rewards Engine',
      description:
        'A white-label SaaS rewards platform enabling businesses to run loyalty programs. Includes a configurable points engine, redemption workflows, merchant dashboards, and a public-facing Angular frontend.',
      techStack: [
        'ASP.NET Core',
        'Angular',
        'MongoDB',
        'Redis',
        'Docker',
        'REST API',
      ],
      features: [
        'Configurable points & rewards engine',
        'Merchant & admin dashboards',
        'Redis caching for high throughput',
        'Docker containerized deployment',
        'Webhook event system',
      ],
      github: 'https://github.com/ahmed-alsoghayar/pointpay-rewards',
      featured: true,
      badge: 'SaaS',
      gradient: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
    },
    {
      id: 3,
      title: 'Online Bookstore',
      subtitle: 'E-Commerce Platform',
      description:
        'A full-featured online bookstore with product catalog, shopping cart, Stripe payment integration, order management, and an Angular-powered storefront. Implements CQRS pattern with MediatR.',
      techStack: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'MediatR',
        'CQRS',
        'Stripe API',
      ],
      features: [
        'CQRS pattern with MediatR',
        'Stripe payment integration',
        'Full-text search & filtering',
        'Order tracking & history',
        'Admin inventory management',
      ],
      github: 'https://github.com/ahmed-alsoghayar/online-bookstore',
      featured: false,
      badge: 'E-Commerce',
      gradient: 'linear-gradient(135deg, #FB923C 0%, #F59E0B 100%)',
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
        .querySelectorAll('.project-card, .projects-header')
        .forEach((el) => observer.observe(el));
    }, 100);
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter() === 'All') return this.projects;
    return this.projects.filter(
      (p) =>
        p.techStack.some((t) =>
          t.toLowerCase().includes(this.activeFilter().toLowerCase()),
        ) ||
        (this.activeFilter() === 'SaaS' && p.badge === 'SaaS') ||
        this.activeFilter() === 'Full Stack',
    );
  }

  setFilter(f: string): void {
    this.activeFilter.set(f);
  }
}
