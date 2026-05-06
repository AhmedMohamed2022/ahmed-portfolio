import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  labelAr: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  menuOpen = signal(false);
  isArabic = signal(false);

  navLinks: NavLink[] = [
    { label: 'About', labelAr: 'عني', href: '#about' },
    { label: 'Skills', labelAr: 'المهارات', href: '#skills' },
    { label: 'Projects', labelAr: 'المشاريع', href: '#projects' },
    { label: 'Experience', labelAr: 'الخبرة', href: '#experience' },
    { label: 'Education', labelAr: 'التعليم', href: '#education' },
    { label: 'Contact', labelAr: 'تواصل', href: '#contact' },
  ];

  ngOnInit(): void {
    const stored = localStorage.getItem('lang');
    if (stored === 'ar') this.isArabic.set(true);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  toggleLang(): void {
    this.isArabic.update((v) => !v);
    localStorage.setItem('lang', this.isArabic() ? 'ar' : 'en');
    document.documentElement.setAttribute(
      'dir',
      this.isArabic() ? 'rtl' : 'ltr',
    );
  }

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  getLinkLabel(link: NavLink): string {
    return this.isArabic() ? link.labelAr : link.label;
  }
}
