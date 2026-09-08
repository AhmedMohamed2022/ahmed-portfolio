import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe, IconComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements AfterViewInit {
  lang = inject(LanguageService);

  techStackByRole: string[][] = [
    [
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'Azure',
      'Docker',
      'Redis',
      'SignalR',
      'CQRS',
    ],
  ];

  get items() {
    const items = this.lang.t()['experience'].items as any[];
    return items.map((item, i) => ({
      ...item,
      techStack: this.techStackByRole[i] ?? [],
    }));
  }

  get metrics() {
    return this.lang.t()['experience'].metrics as any[];
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    setTimeout(() => {
      document
        .querySelectorAll('#experience .anim-el')
        .forEach((el) => observer.observe(el));
    }, 100);
  }
}
