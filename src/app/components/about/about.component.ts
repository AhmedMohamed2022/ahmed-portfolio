import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
  inject,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  lang = inject(LanguageService);

  private observer!: IntersectionObserver;

  constructor() {
    // Re-observe elements every time the language signal changes
    effect(() => {
      this.lang.lang(); // subscribe to the signal
      setTimeout(() => this.observeElements(), 50);
    });
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    setTimeout(() => this.observeElements(), 100);
  }

  private observeElements(): void {
    document
      .querySelectorAll('.anim-el')
      .forEach((el) => this.observer.observe(el));
  }
}
