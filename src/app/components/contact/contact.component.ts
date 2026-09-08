import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../../shared/icon/icon.component';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  lang = inject(LanguageService);

  readonly myEmail = 'ahmedmohamedscw@gmail.com';

  formData: ContactForm = { name: '', email: '', subject: '', message: '' };
  sent = signal(false);

  trustBadges = [
    {
      icon: 'calendar',
      text:
        this.lang.t()['hero'].stats.experience.value +
        ' ' +
        this.lang.t()['hero'].stats.experience.label,
    },
    {
      icon: 'check-circle',
      text:
        this.lang.t()['hero'].stats.projects.value +
        ' ' +
        this.lang.t()['hero'].stats.projects.label,
    },
    { icon: 'clock', text: '~24h Response Time' },
  ];

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add('visible'),
        ),
      { threshold: 0.1 },
    );
    setTimeout(() => {
      document
        .querySelectorAll('#contact .anim-el')
        .forEach((el) => observer.observe(el));
    }, 100);
  }

  /**
   * No backend exists for this portfolio, so "Send" hands the
   * message off to the visitor's own email client via mailto:
   * rather than faking a network request (the original component
   * just ran a setTimeout and claimed success — nothing was ever
   * actually sent). This actually works, with zero backend needed.
   */
  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message)
      return;

    const subject =
      this.formData.subject || `Portfolio inquiry from ${this.formData.name}`;
    const body = `${this.formData.message}\n\n— ${this.formData.name} (${this.formData.email})`;

    const mailto = `mailto:${this.myEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    this.sent.set(true);
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.sent.set(false), 6000);
  }
}
