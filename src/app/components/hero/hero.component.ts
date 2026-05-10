import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  inject,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  lang = inject(LanguageService);

  typedText = '';
  private titleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typingActive = false;

  constructor() {
    // Restart typewriter whenever language changes
    effect(() => {
      this.lang.lang(); // subscribe to signal
      this.titleIndex = 0;
      this.charIndex = 0;
      this.deleting = false;
      this.typedText = '';
      if (this.typingActive) {
        this.startTyping();
      }
    });
  }

  /** Always reads titles from the currently active language */
  get titles(): string[] {
    return this.lang.t()['hero'].titles as string[];
  }

  ngAfterViewInit(): void {
    this.typingActive = true;
    this.startTyping();
    this.initParticles();
  }

  private startTyping(): void {
    const current = this.titles[this.titleIndex];
    if (!this.deleting && this.charIndex <= current.length) {
      this.typedText = current.slice(0, this.charIndex++);
      setTimeout(() => this.startTyping(), 80);
    } else if (this.deleting && this.charIndex >= 0) {
      this.typedText = current.slice(0, this.charIndex--);
      setTimeout(() => this.startTyping(), 40);
    } else if (!this.deleting && this.charIndex > current.length) {
      this.deleting = true;
      setTimeout(() => this.startTyping(), 2200);
    } else {
      this.deleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      setTimeout(() => this.startTyping(), 400);
    }
  }

  private initParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,178,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,178,${0.05 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  }

  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
