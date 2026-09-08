import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  lang = inject(LanguageService);

  isScrolled = false;
  menuOpen = false;

  /** Section id currently highlighted as the active pill. */
  activeSection = 'hero';

  navLinks = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.education', href: '#education' },
    { key: 'nav.contact', href: '#contact' },
  ];

  private sectionIds = this.navLinks.map((l) => l.href.slice(1));

  ngOnInit(): void {
    // Apply saved direction on first load
    this.lang.applyDocumentDir(this.lang.lang());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const refLine = 140;
    let current = this.sectionIds[0];
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= refLine) {
        current = id;
      }
    }
    this.activeSection = current;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleLang(): void {
    this.lang.toggle();
  }

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
