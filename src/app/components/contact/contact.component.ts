import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  lang = inject(LanguageService);

  formData: ContactForm = { name: '', email: '', subject: '', message: '' };
  sending = signal(false);
  sent = signal(false);

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
        .querySelectorAll('.contact-header, .contact-left, .contact-form-wrap')
        .forEach((el) => observer.observe(el));
    }, 100);
  }

  async onSubmit(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.message)
      return;
    this.sending.set(true);
    await new Promise((res) => setTimeout(res, 1800));
    this.sending.set(false);
    this.sent.set(true);
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.sent.set(false), 5000);
  }
}
