import {
  Component,
  AfterViewInit,
  inject,
  effect,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslatePipe, IconComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements AfterViewInit {
  lang = inject(LanguageService);

  // computed — reactive, re-evaluates when the language signal changes
  educations = computed(() => {
    return this.lang.t()['education'].items as any[];
  });

  get certs() {
    return this.lang.t()['education'].certs as any[];
  }

  private observer!: IntersectionObserver;

  constructor() {
    effect(() => {
      this.lang.lang();
      setTimeout(() => this.observeElements(), 50);
    });
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            this.observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    setTimeout(() => this.observeElements(), 100);
  }

  private observeElements(): void {
    document.querySelectorAll('#education .anim-el').forEach((el) => {
      if (!el.classList.contains('visible')) this.observer.observe(el);
    });
  }
}
