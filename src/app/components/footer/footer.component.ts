import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  lang = inject(LanguageService);
  year = new Date().getFullYear();

  readonly myEmail = 'ahmedmohamedscw@gmail.com';

  navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  quickEmail = '';

  scrollTo(href: string): void {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sendQuickHello(): void {
    if (!this.quickEmail) return;
    const body = `Hi Ahmed,\n\nI'd like to get in touch. You can reach me at: ${this.quickEmail}`;
    const mailto = `mailto:${this.myEmail}?subject=${encodeURIComponent(
      'Hello from your portfolio',
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    this.quickEmail = '';
  }
}
