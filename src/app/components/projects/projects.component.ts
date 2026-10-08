import {
  Component,
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
  screenshots: [string, string];
}

export interface Project extends ProjectStatic {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge: string;
}

type SlideDirection = 'next' | 'prev';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  lang = inject(LanguageService);

  // Static (non-translatable) project data
  staticProjects: ProjectStatic[] = [
    {
      id: 1,
      techStack: [
        'ASP.NET Core 8',
        'Angular 19',
        'SQL Server',
        'Entity Framework Core',
        'JWT',
        'SignalR',
        'Tailwind CSS',
      ],
      github:
        'https://github.com/AhmedMohamed2022/ServiCore-Multi-Tenant-Service-Management-Platform-Frontend',
      demo: 'https://servicore-lovat.vercel.app/',
      featured: true,
      gradient: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
      screenshots: [
        '/img/projects/servicore-1.png',
        '/img/projects/servicore-2.png',
      ],
    },
    {
      id: 2,
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
      demo: 'https://masjid-story-front-end.vercel.app/',
      featured: true,
      gradient: 'linear-gradient(135deg, #FD853A 0%, #FB6514 100%)',
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
      screenshots: [
        '/img/projects/masjidstory-1.png',
        '/img/projects/masjidstory-2.png',
      ],
    },
    {
      id: 3,
      techStack: [
        'ASP.NET MVC',
        'Razor Views',
        'Entity Framework',
        'SQL Server',
        'ASP.NET Identity',
      ],
      github:
        'https://github.com/AhmedMohamed2022/A3lanly-Ad-Management-Platform',
      demo: 'https://www.a3lanly.somee.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
      filterTags: ['All', '.NET', 'Full Stack'],
      screenshots: [
        '/img/projects/a3lanly-1.png',
        '/img/projects/a3lanly-2.png',
      ],
    },
    {
      id: 4,
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
      gradient: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
      filterTags: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
      screenshots: [
        '/img/projects/pointpay-1.png',
        '/img/projects/pointpay-2.png',
      ],
    },
  ];

  // Merged project list: static data + translated content
  get projects(): Project[] {
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

  get filters(): string[] {
    return this.lang.t()['projects'].filters;
  }

  // English tags used for filtering logic — never changes with language
  private readonly filterTagsEn = [
    'All',
    '.NET',
    'Angular',
    'SaaS',
    'Full Stack',
  ];

  activeFilterIndex = signal<number>(0);
  activeProjectIndex = signal<number>(0);

  imgFailed = { back: false, front: false };
  imgFailedOutgoing = { back: false, front: false };

  outgoingProject = signal<Project | null>(null);
  direction = signal<SlideDirection>('next');
  transitionState = signal<'idle' | 'sliding'>('idle');
  private transitionTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly TRANSITION_MS = 620;

  filteredProjects = computed(() => {
    const tag = this.filterTagsEn[this.activeFilterIndex()];
    return this.projects.filter((p) => p.filterTags.includes(tag));
  });

  get activeProject(): Project | null {
    const list = this.filteredProjects();
    return list[this.activeProjectIndex()] ?? null;
  }

  setFilter(index: number): void {
    this.cancelTransition();
    this.activeFilterIndex.set(index);
    this.activeProjectIndex.set(0);
    this.imgFailed = { back: false, front: false };
  }

  nextProject(): void {
    const len = this.filteredProjects().length;
    if (!len) return;
    this.goTo((this.activeProjectIndex() + 1) % len, 'next');
  }

  prevProject(): void {
    const len = this.filteredProjects().length;
    if (!len) return;
    this.goTo((this.activeProjectIndex() - 1 + len) % len, 'prev');
  }

  goToProject(i: number): void {
    if (i === this.activeProjectIndex()) return;
    this.goTo(i, i > this.activeProjectIndex() ? 'next' : 'prev');
  }

  private goTo(newIndex: number, dir: SlideDirection): void {
    if (this.transitionState() === 'sliding') return;
    const current = this.activeProject;
    if (!current || newIndex === this.activeProjectIndex()) return;

    this.outgoingProject.set(current);
    this.imgFailedOutgoing = { ...this.imgFailed };
    this.direction.set(dir);
    this.transitionState.set('sliding');

    this.activeProjectIndex.set(newIndex);
    this.imgFailed = { back: false, front: false };

    clearTimeout(this.transitionTimer);
    this.transitionTimer = setTimeout(() => {
      this.transitionState.set('idle');
      this.outgoingProject.set(null);
    }, this.TRANSITION_MS);
  }

  private cancelTransition(): void {
    clearTimeout(this.transitionTimer);
    this.transitionState.set('idle');
    this.outgoingProject.set(null);
  }

  onImgError = (slot: 'back' | 'front'): void => {
    this.imgFailed[slot] = true;
  };

  noopImgError = (_slot: 'back' | 'front'): void => {};

  constructor() {
    effect(() => {
      this.lang.lang();
      this.cancelTransition();
      this.activeFilterIndex.set(0);
      this.activeProjectIndex.set(0);
    });
  }

  ngAfterViewInit(): void {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll('#projects .anim-el')
      .forEach((el) => revealObserver.observe(el));
  }
}
