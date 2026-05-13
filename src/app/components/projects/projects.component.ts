import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  computed,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface ProjectStatic {
  id: number;
  techStack: string[];
  github: string;
  demo?: string;
  featured: boolean;
  gradient: string;
  filterTags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  lang = inject(LanguageService);

  activeFilter = signal<string>('All');

  // Static (non-translatable) project data
  staticProjects: ProjectStatic[] = [
    {
      id: 1,
      techStack: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'SignalR',
        'Azure',
        'Clean Architecture',
      ],
      github:
        'https://github.com/AhmedMohamed2022/MasjidStoryProject-Front-end',
      demo: 'https://masjidstory.netlify.app/home',
      featured: true,
      gradient: 'linear-gradient(135deg, #00FFB2 0%, #00A8FF 100%)',
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
    },
    {
      id: 2,
      techStack: [
        'ASP.NET Core',
        'Angular',
        'MongoDB',
        'Redis',
        'Docker',
        'REST API',
      ],
      github: 'https://github.com/FinalProjectITIIntkate45/Backend',
      featured: true,
      gradient: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
    },
    {
      id: 3,
      techStack: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'MediatR',
        'CQRS',
        'Stripe API',
      ],
      github: 'https://github.com/ahmed-alsoghayar/online-bookstore',
      featured: false,
      gradient: 'linear-gradient(135deg, #FB923C 0%, #F59E0B 100%)',
      filterTags: ['All', '.NET', 'Angular', 'Full Stack'],
    },
  ];

  // Merged project list: static data + translated content
  get projects() {
    const items = this.lang.t()['projects'].items;
    return this.staticProjects.map((s, i) => ({
      ...s,
      title: items[i].title,
      subtitle: items[i].subtitle,
      description: items[i].description,
      features: items[i].features,
      badge: items[i].badge,
    }));
  }

  // Filter labels come from translations too
  // get filters(): string[] {
  //   return this.lang.t()['projects'].filters;
  // }

  // filteredProjects = computed(() =>
  //   this.projects.filter((p) => p.filterTags.includes(this.activeFilter())),
  // );
  // Use index to track active filter — language-independent
  activeFilterIndex = signal<number>(0);

  // English tags used for filtering logic — never changes
  private readonly filterTagsEn = [
    'All',
    '.NET',
    'Angular',
    'SaaS',
    'Full Stack',
  ];

  // Displayed filter labels come from translations
  get filters(): string[] {
    return this.lang.t()['projects'].filters;
  }

  filteredProjects = computed(() => {
    const tag = this.filterTagsEn[this.activeFilterIndex()];
    return this.projects.filter((p) => p.filterTags.includes(tag));
  });

  setFilter(index: number): void {
    this.activeFilterIndex.set(index);
  }

  sectionVisible = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.filteredProjects();
      if (this.sectionVisible()) {
        requestAnimationFrame(() => {
          document
            .querySelectorAll('.project-card:not(.visible)')
            .forEach((el) => el.classList.add('visible'));
        });
      }
    });

    // Reset active filter to first option when language changes
    effect(() => {
      const filters = this.lang.t()['projects'].filters;
      this.activeFilter.set(filters[0]);
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.sectionVisible.set(true);
        });
      },
      { threshold: 0.05 },
    );

    const section = document.querySelector('#projects');
    if (section) sectionObserver.observe(section);

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

    this.observeCards();
  }

  private observeCards(): void {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), idx * 100);
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

  // setFilter(filter: string): void {
  //   this.activeFilter.set(filter);
  // }
}
