# AhmedPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Ahmed Alsoghayar — Portfolio

Production-level Angular portfolio for a Full Stack .NET & Angular Developer.

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.component.ts
│   │   │   ├── navbar.component.html
│   │   │   └── navbar.component.css
│   │   ├── hero/
│   │   │   ├── hero.component.ts
│   │   │   ├── hero.component.html
│   │   │   └── hero.component.css
│   │   ├── about/
│   │   │   ├── about.component.ts
│   │   │   ├── about.component.html
│   │   │   └── about.component.css
│   │   ├── skills/
│   │   │   ├── skills.component.ts
│   │   │   ├── skills.component.html
│   │   │   └── skills.component.css
│   │   ├── projects/
│   │   │   ├── projects.component.ts
│   │   │   ├── projects.component.html
│   │   │   └── projects.component.css
│   │   ├── experience/
│   │   │   ├── experience.component.ts
│   │   │   ├── experience.component.html
│   │   │   └── experience.component.css
│   │   ├── education/
│   │   │   ├── education.component.ts
│   │   │   ├── education.component.html
│   │   │   └── education.component.css
│   │   ├── contact/
│   │   │   ├── contact.component.ts
│   │   │   ├── contact.component.html
│   │   │   └── contact.component.css
│   │   └── footer/
│   │       ├── footer.component.ts
│   │       ├── footer.component.html
│   │       └── footer.component.css
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.routes.ts
├── assets/
│   └── cv/
│       └── ahmed-alsoghayar-cv.pdf    ← place your CV here
├── index.html
└── styles.css
```

---

## 🚀 Quick Start

```bash
# 1. Create Angular project
ng new ahmed-portfolio --routing --style=css --standalone
cd ahmed-portfolio

# 2. Install dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install @angular/animations

# 3. Copy all component files into src/app/components/
#    (create a folder per component as shown above)

# 4. Replace src/styles.css with the provided styles.css
# 5. Replace tailwind.config.js with the provided config
# 6. Replace src/index.html with the provided index.html
# 7. Replace app.component.ts / .html with provided versions

# 8. Place your CV PDF at:
#    src/assets/cv/ahmed-alsoghayar-cv.pdf

# 9. Run the dev server
ng serve

# Open: http://localhost:4200
```

---

## 🔧 Component Generation Commands

```bash
# Generate all components at once:
ng g c components/navbar  --standalone --skip-tests
ng g c components/hero    --standalone --skip-tests
ng g c components/about   --standalone --skip-tests
ng g c components/skills  --standalone --skip-tests
ng g c components/projects --standalone --skip-tests
ng g c components/experience --standalone --skip-tests
ng g c components/education --standalone --skip-tests
ng g c components/contact --standalone --skip-tests
ng g c components/footer  --standalone --skip-tests
```

---

## 📦 Build for Production

```bash
ng build --configuration production
```

Output goes to `dist/ahmed-portfolio/` — deploy to:

- **Azure Static Web Apps** (recommended)
- **Netlify** — drag & drop the dist folder
- **Vercel** — connect GitHub repo
- **GitHub Pages** — use `ng deploy` with `angular-cli-ghpages`

### Azure Static Web Apps (CI/CD)

```yaml
# .github/workflows/azure-static-web-apps.yml
name: Azure Static Web Apps CI/CD
on:
  push:
    branches: [main]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build
        run: |
          npm install
          ng build --configuration production
      - name: Deploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: upload
          app_location: /
          output_location: dist/ahmed-portfolio/browser
```

---

## 📧 Contact Form Integration

Replace the `onSubmit()` mock in `contact.component.ts` with one of:

### Option A — EmailJS (easiest, no backend)

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

async onSubmit() {
  this.sending.set(true);
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
    from_name: this.formData.name,
    reply_to: this.formData.email,
    subject: this.formData.subject,
    message: this.formData.message,
  }, 'PUBLIC_KEY');
  this.sending.set(false);
  this.sent.set(true);
}
```

### Option B — Formspree

Change `onSubmit()` to POST to `https://formspree.io/f/YOUR_ID`.

---

## 🌐 Language Toggle (EN/AR)

The navbar already includes a language toggle button.
To fully support Arabic, add to `styles.css`:

```css
[dir="rtl"] .hero-content,
[dir="rtl"] .about-text {
  text-align: right;
}
[dir="rtl"] .timeline {
  padding-left: 0;
  padding-right: 2rem;
}
[dir="rtl"] .timeline::before {
  left: auto;
  right: 7px;
}
[dir="rtl"] .timeline-dot {
  left: auto;
  right: -2rem;
}
```

For full i18n, use Angular's `@angular/localize` package.

---

## ✅ Features Checklist

- [x] Dark theme with accent green (#00FFB2)
- [x] Animated particle canvas in hero
- [x] Typewriter effect for job titles
- [x] Smooth scroll navigation
- [x] IntersectionObserver animations (fade-up)
- [x] Skill progress bars with animation
- [x] Project cards with hover effects & filter
- [x] Timeline experience section
- [x] Education section with cert badges
- [x] Contact form with loading/success states
- [x] Language toggle (EN/AR) with RTL support
- [x] CV download button
- [x] SEO meta tags + Open Graph + Schema.org
- [x] Fully responsive (mobile-first)
- [x] Modular standalone components
- [x] Clean folder architecture
