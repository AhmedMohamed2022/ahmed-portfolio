import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  highlights = [
    {
      icon: '⚡',
      label: '.NET Core Expert',
      desc: 'Building high-performance APIs and microservices',
    },
    {
      icon: '🔷',
      label: 'Angular Architect',
      desc: 'Scalable SPAs with reactive state and lazy loading',
    },
    {
      icon: '☁️',
      label: 'Cloud Native',
      desc: 'Azure deployments with CI/CD pipelines',
    },
    {
      icon: '🏗️',
      label: 'Clean Architecture',
      desc: 'SOLID principles & domain-driven design patterns',
    },
  ];

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    setTimeout(() => {
      document
        .querySelectorAll('.anim-el')
        .forEach((el) => observer.observe(el));
    }, 100);
  }
}
