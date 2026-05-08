import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  computed,
  effect,
} from '@angular/core';
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
  badge: string;
  gradient: string;
  filterTags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  activeFilter = signal<string>('All');

  filters: string[] = ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'];

  projects: Project[] = [
    {
      id: 1,
      title: 'MasjidStory Platform',
      subtitle: 'Community & Content Management',
      description:
        'A comprehensive platform for Islamic centers to manage content, events, and ' +
        'community engagement. Features multi-tenant architecture, role-based access ' +
        'control, and real-time notifications via SignalR.',
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
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
    },
    {
      id: 2,
      title: 'PointPay Rewards SaaS',
      subtitle: 'Loyalty & Rewards Engine',
      description:
        'A white-label SaaS rewards platform enabling businesses to run loyalty programs. ' +
        'Includes a configurable points engine, redemption workflows, merchant dashboards, ' +
        'and a public-facing Angular frontend.',
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
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
    },
    {
      id: 3,
      title: 'Online Bookstore',
      subtitle: 'E-Commerce Platform',
      description:
        'A full-featured online bookstore with product catalog, shopping cart, Stripe ' +
        'payment integration, order management, and an Angular-powered storefront. ' +
        'Implements CQRS pattern with MediatR.',
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
      filterTags: ['All', '.NET', 'Angular', 'Full Stack'],
    },
  ];

  filteredProjects = computed<Project[]>(() =>
    this.projects.filter((p) => p.filterTags.includes(this.activeFilter())),
  );

  /**
   * Whether the user has scrolled the section into view at least once.
   * Once true, filtered cards skip the fade-in and appear immediately.
   */
  sectionVisible = signal<boolean>(false);

  constructor() {
    // Re-observe new cards every time the filter changes
    // (effect runs after Angular has re-rendered the new card set)
    effect(() => {
      // read the signal so effect re-runs when filter changes
      this.filteredProjects();

      if (this.sectionVisible()) {
        // Section already visible — make new cards appear instantly
        requestAnimationFrame(() => {
          document
            .querySelectorAll('.project-card:not(.visible)')
            .forEach((el) => el.classList.add('visible'));
        });
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Observe the section itself so we know when user has scrolled to it
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionVisible.set(true);
          }
        });
      },
      { threshold: 0.05 },
    );

    const section = document.querySelector('#projects');
    if (section) sectionObserver.observe(section);

    // Observe the header once for its own fade-in
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            headerObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const header = document.querySelector('.projects-header');
    if (header) headerObserver.observe(header);

    // Observe the initial set of cards with a stagger delay
    this.observeCards();
  }

  private observeCards(): void {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            // Stagger only on the first scroll-in
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 100);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    document
      .querySelectorAll('.project-card')
      .forEach((el) => cardObserver.observe(el));
  }

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
