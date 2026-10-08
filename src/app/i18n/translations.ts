export type Lang = 'en' | 'ar';

export const TRANSLATIONS: Record<Lang, Record<string, any>> = {
  /* ══════════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════════ */
  en: {
    // ── Navbar ─────────────────────────────────
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },

    // ── Hero ───────────────────────────────────
    hero: {
      available: 'Available for new opportunities',
      firstName: 'Ahmed Mohamed',
      lastName: 'Alsoghayar',
      titles: [
        'Full Stack .NET Developer',
        'Angular Architect',
        'Cloud Solutions Builder',
        'Clean Architecture Advocate',
      ],
      description:
        'Building robust, scalable systems with .NET Core & Angular — from clean architectures to cloud-native solutions.',
      viewProjects: 'View Projects',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
      stats: {
        experience: { value: '3+', label: 'Years Experience' },
        projects: { value: '10+', label: 'Projects Delivered' },
        stacks: { value: '5+', label: 'Tech Stacks' },
      },
      scroll: 'Scroll',
    },

    // ── About ──────────────────────────────────
    about: {
      tag: '// about me',
      title1: 'Crafting systems that',
      title2: 'scale & endure',
      p1: "I'm a Full Stack Developer specializing in the .NET ecosystem and Angular — with a passion for architecting solutions that are not just functional, but maintainable, performant, and future-proof.",
      p2: "My approach begins with understanding the business problem. From there I apply Clean Architecture, DDD, and SOLID principles to design systems that evolve with your product — whether it's a CRM platform, a SaaS rewards engine, or a cloud-native enterprise application.",
      p3: "I've worked across the full stack: designing relational and NoSQL schemas, building RESTful & GraphQL APIs, implementing authentication flows, deploying to Azure with automated pipelines, and crafting fluid Angular UIs.",
      downloadCv: 'Download CV',
      githubProfile: 'GitHub Profile',
      highlights: [
        {
          icon: 'zap',
          label: '.NET Core Expert',
          desc: 'Building high-performance APIs and microservices',
        },
        {
          icon: 'code',
          label: 'Angular Architect',
          desc: 'Scalable SPAs with reactive state and lazy loading',
        },
        {
          icon: 'cloud',
          label: 'Cloud Native',
          desc: 'Azure deployments with CI/CD pipelines',
        },
        {
          icon: 'layers',
          label: 'Clean Architecture',
          desc: 'SOLID principles & domain-driven design patterns',
        },
      ],
    },

    // ── Skills ─────────────────────────────────
    skills: {
      tag: '// skills & expertise',
      title: 'Tech I work with',
      titleAccent: 'daily',
      subtitle:
        "A curated set of technologies I've mastered across the full stack.",
    },

    // ── Projects ───────────────────────────────
    projects: {
      tag: '// projects',
      title: "Things I've",
      titleAccent: 'built',
      subtitle:
        'Real-world systems designed for performance, scalability, and clean code.',
      viewAll: 'View All on GitHub',
      filters: ['All', '.NET', 'Angular', 'SaaS', 'Full Stack'],
      items: [
        {
          title: 'ServiCore',
          subtitle: 'Multi-Tenant Service Management Platform',
          description:
            'A multi-tenant customer support platform with organization-scoped data isolation and organization-specific roles for Owners, Managers, and Agents. Built with secure REST APIs, a full ticket lifecycle, and a role-aware Angular 19 frontend with real-time notifications.',
          features: [
            'Organization-scoped data isolation (multi-tenancy)',
            'ASP.NET Core Identity, JWT & policy-based authorization',
            'Ticket lifecycle with team & agent assignment',
            'Real-time notifications with SignalR',
            'Reporting dashboards for customers & staff',
          ],
          badge: 'Multi-Tenant SaaS',
        },
        {
          title: 'MasjidStory Platform',
          subtitle: 'Community & Content Management',
          description:
            'A comprehensive platform for Islamic centers to manage content, events, and community engagement. Features multi-tenant architecture, role-based access control, and real-time notifications via SignalR.',
          features: [
            'Multi-tenant SaaS architecture',
            'Real-time notifications with SignalR',
            'Role-based access control (RBAC)',
            'Azure Blob Storage for media',
            'Automated email campaigns',
          ],
          badge: 'Featured',
        },
        {
          title: 'A3lanly',
          subtitle: 'Advertisement Management Platform',
          description:
            'An advertisement management platform inspired by Google AdSense, letting publishers register websites, generate embed codes, and track ad performance in real time. Built end-to-end with ASP.NET MVC and deployed with ongoing fixes based on client feedback.',
          features: [
            'Advertisement publishing workflow',
            'Website registration & embed code generation',
            'Click & impression tracking analytics',
            'ASP.NET Identity authentication & roles',
          ],
          badge: 'Ad-Tech',
        },
        {
          title: 'PointPay Rewards SaaS',
          subtitle: 'Loyalty & Rewards Engine',
          description:
            'A white-label SaaS rewards platform enabling businesses to run loyalty programs. Includes a configurable points engine, redemption workflows, merchant dashboards, and a public-facing Angular frontend.',
          features: [
            'Configurable points & rewards engine',
            'Merchant & admin dashboards',
            'Redis caching for high throughput',
            'Docker containerized deployment',
            'Webhook event system',
          ],
          badge: 'SaaS',
        },
      ],
    },

    // ── Experience ─────────────────────────────
    experience: {
      tag: '// experience',
      title: "Where I've",
      titleAccent: 'worked',
      items: [
        {
          role: 'Freelance Full Stack Developer',
          company: 'ARID Scientific Ltd',
          type: 'Freelance / Contract',
          period: 'Jan 2023 – Present',
          location: 'Remote',
          description:
            'Delivered end-to-end web solutions for a scientific research company, building scalable backends, modern Angular frontends, and cloud-based infrastructure on Azure.',
          responsibilities: [
            'Designed and implemented RESTful APIs using ASP.NET Core with Clean Architecture and CQRS patterns',
            'Built dynamic Angular SPAs with lazy loading, reactive forms, and NgRx state management',
            'Architected multi-tenant data models in SQL Server with row-level security',
            'Set up Azure DevOps CI/CD pipelines reducing deployment time by 60%',
            'Integrated third-party services: payment gateways, email providers, and cloud storage',
            'Conducted code reviews and established coding standards across the team',
            'Optimized database queries and introduced Redis caching — improving API response times by 40%',
          ],
        },
      ],
      metrics: [
        { value: '60%', label: 'Deployment Time Reduced', icon: 'zap' },
        {
          value: '40%',
          label: 'API Response Improvement',
          icon: 'trending-up',
        },
        { value: '10+', label: 'Projects Delivered', icon: 'check-circle' },
        { value: '3+', label: 'Years of Experience', icon: 'calendar' },
      ],
      current: 'Current',
    },

    // ── Education ──────────────────────────────
    education: {
      tag: '// education',
      title: 'My',
      titleAccent: 'background',
      subtitle:
        'Academic foundation and professional training that shaped my engineering mindset.',
      keyTopics: 'Key Topics',
      items: [
        {
          degree: 'Professional Diploma — Full Stack Development',
          institution: 'Information Technology Institute (ITI)',
          period: '2025 – 2026',
          description:
            'Intensive professional diploma covering enterprise software development with a focus on .NET technologies, Angular, database design, and modern DevOps practices.',
          highlights: [
            'ASP.NET Core & Entity Framework Core in-depth',
            'Angular with TypeScript and advanced SPA patterns',
            'Clean Architecture & Design Patterns',
            'SQL Server — advanced queries, indexing, optimization',
            'Azure Cloud fundamentals and CI/CD with Azure DevOps',
          ],
          icon: 'award',
        },
        {
          degree: "Bachelor's Degree — Computer Science",
          institution: 'Faculty of Computer Science',
          period: '2020 – 2024',
          description:
            'Comprehensive computer science education covering algorithms, data structures, software engineering, operating systems, networking, and database systems.',
          highlights: [
            'Algorithms & Data Structures',
            'Object-Oriented Programming & Software Engineering',
            'Database Systems & Data Modeling',
            'Networking & Operating Systems fundamentals',
            'Graduation Project — Full Stack Web Application',
          ],
          icon: 'book-open',
        },
      ],
      continuousTitle: 'Continuous Learning',
      continuousDesc:
        'Regularly completing online courses and certifications in Azure, Docker, Clean Architecture, and advanced Angular patterns.',
      certs: [
        { icon: 'cloud', label: 'Azure Fundamentals' },
        { icon: 'box', label: 'Docker & Containers' },
        { icon: 'layers', label: 'Clean Architecture' },
        { icon: 'code', label: 'Angular Advanced' },
      ],
    },

    // ── Contact ────────────────────────────────
    contact: {
      tag: '// contact',
      title: "Let's",
      titleAccent: 'work together',
      intro:
        "Have a project in mind or want to discuss an opportunity? I'd love to hear from you.",
      infoTitle: 'Get in touch',
      infoDesc:
        "I'm currently open to full-time roles, freelance contracts, and interesting collaborations. Response time is usually within 24 hours.",
      available: 'Available for new projects —',
      hireMe: 'Hire me',
      form: {
        name: 'Name',
        namePh: 'Ahmed Mohamed',
        email: 'Email',
        emailPh: 'ahmedmohamed@gmail.com',
        subject: 'Subject',
        subjectPh: 'Project inquiry / Job opportunity',
        message: 'Message',
        messagePh: 'Tell me about your project or opportunity...',
        send: 'Send Message',
        sending: 'Sending…',
        successTitle: 'Almost there!',
        successDesc:
          'Your email app should now be open with everything pre-filled — just hit send.',
      },
    },

    // ── Footer ─────────────────────────────────
    footer: {
      heading: "Let's",
      headingAccent: 'connect',
      hireMe: 'Hire Me',
      quickContactTitle: 'Say hello',
      quickContactPh: 'Your email address',
      tagline:
        'Full Stack .NET & Angular Developer\nBuilding systems that scale.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      location: 'Egypt · Remote Worldwide',
      timezone: 'GMT+2 (EET)',
      downloadCv: 'Download CV',
      copyright: 'Built with',
    },
  },

  /* ══════════════════════════════════════════════
     ARABIC
  ══════════════════════════════════════════════ */
  ar: {
    // ── Navbar ─────────────────────────────────
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      education: 'التعليم',
      contact: 'تواصل',
      downloadCv: 'تحميل السيرة الذاتية',
    },

    // ── Hero ───────────────────────────────────
    hero: {
      available: 'متاح لفرص جديدة',
      firstName: 'أحمد محمد',
      lastName: 'الصغير',
      titles: [
        'مطور Full Stack .NET',
        'مهندس Angular',
        'بناء حلول سحابية',
        'مدافع عن Clean Architecture',
      ],
      description:
        'بناء أنظمة قوية وقابلة للتوسع بـ .NET Core وAngular — من هياكل نظيفة إلى حلول سحابية متكاملة.',
      viewProjects: 'عرض المشاريع',
      downloadCv: 'تحميل السيرة الذاتية',
      contactMe: 'تواصل معي',
      stats: {
        experience: { value: '+3', label: 'سنوات خبرة' },
        projects: { value: '+10', label: 'مشروع منجز' },
        stacks: { value: '+5', label: 'تقنيات مستخدمة' },
      },
      scroll: 'تمرير',
    },

    // ── About ──────────────────────────────────
    about: {
      tag: '// عني',
      title1: 'بناء أنظمة',
      title2: 'تدوم وتتوسع',
      p1: 'أنا مطور Full Stack متخصص في منظومة .NET وAngular — أؤمن بأن الحلول الجيدة لا تكتفي بالعمل، بل يجب أن تكون قابلة للصيانة وعالية الأداء ومستقبلية التصميم.',
      p2: 'أبدأ دائمًا بفهم المشكلة التجارية، ثم أطبّق مبادئ Clean Architecture وDDD وSOLID لتصميم أنظمة تنمو مع المنتج — سواء كان منصة CRM أو محرك مكافآت SaaS أو تطبيقًا مؤسسيًا سحابيًا.',
      p3: 'عملت عبر كامل الطيف التقني: تصميم قواعد البيانات العلائقية وNoSQL، بناء REST وGraphQL APIs، تطبيق مسارات المصادقة، النشر على Azure بخطوط أنابيب CI/CD، وبناء واجهات Angular سلسة.',
      downloadCv: 'تحميل السيرة الذاتية',
      githubProfile: 'صفحة GitHub',
      highlights: [
        {
          icon: 'zap',
          label: 'خبير .NET Core',
          desc: 'بناء APIs عالية الأداء والخدمات المصغّرة',
        },
        {
          icon: 'code',
          label: 'مهندس Angular',
          desc: 'تطبيقات SPA قابلة للتوسع مع إدارة الحالة التفاعلية',
        },
        {
          icon: 'cloud',
          label: 'سحابي أصيل',
          desc: 'نشر على Azure مع خطوط CI/CD',
        },
        {
          icon: 'layers',
          label: 'هندسة نظيفة',
          desc: 'مبادئ SOLID والتصميم المحرّك بالمجال',
        },
      ],
    },

    // ── Skills ─────────────────────────────────
    skills: {
      tag: '// المهارات والخبرات',
      title: 'التقنيات التي أعمل',
      titleAccent: 'بها يوميًا',
      subtitle: 'مجموعة منتقاة من التقنيات التي أتقنتها عبر كامل طيف التطوير.',
    },

    // ── Projects ───────────────────────────────
    projects: {
      tag: '// المشاريع',
      title: 'ما قمت',
      titleAccent: 'ببنائه',
      subtitle: 'أنظمة حقيقية صُمِّمت للأداء والتوسع والكود النظيف.',
      viewAll: 'عرض الكل على GitHub',
      filters: ['الكل', '.NET', 'Angular', 'SaaS', 'Full Stack'],
      items: [
        {
          title: 'ServiCore',
          subtitle: 'منصة إدارة خدمات متعددة المستأجرين',
          description:
            'منصة دعم عملاء متعددة المستأجرين تعزل بيانات كل مؤسسة عن غيرها، وتوفر أدوارًا خاصة بكل مؤسسة للمالكين والمديرين والوكلاء. بُنيت بواجهات REST آمنة، ودورة حياة كاملة للتذاكر، وواجهة Angular 19 تتكيّف مع دور المستخدم مع إشعارات فورية.',
          features: [
            'عزل البيانات على مستوى المؤسسة (تعدد المستأجرين)',
            'ASP.NET Core Identity وJWT وصلاحيات قائمة على السياسات',
            'دورة حياة التذاكر مع إسناد للفرق والوكلاء',
            'إشعارات فورية عبر SignalR',
            'لوحات تقارير للعملاء وفريق العمل',
          ],
          badge: 'SaaS متعدد المستأجرين',
        },
        {
          title: 'منصة MasjidStory',
          subtitle: 'إدارة المجتمع والمحتوى',
          description:
            'منصة شاملة للمراكز الإسلامية لإدارة المحتوى والفعاليات والتفاعل المجتمعي. تتضمن معمارية متعددة المستأجرين، وتحكمًا بالأدوار والصلاحيات، وإشعارات فورية عبر SignalR.',
          features: [
            'معمارية SaaS متعددة المستأجرين',
            'إشعارات فورية عبر SignalR',
            'تحكم بالأدوار والصلاحيات (RBAC)',
            'Azure Blob Storage للوسائط',
            'حملات بريد إلكتروني آلية',
          ],
          badge: 'مميز',
        },
        {
          title: 'A3lanly',
          subtitle: 'منصة إدارة الإعلانات',
          description:
            'منصة لإدارة الإعلانات مستوحاة من Google AdSense، تتيح للناشرين تسجيل مواقعهم، وتوليد أكواد التضمين، ومتابعة أداء الإعلانات لحظيًا. بُنيت بالكامل باستخدام ASP.NET MVC ونُشرت مع تحديثات مستمرة بناءً على ملاحظات العميل.',
          features: [
            'سير عمل نشر الإعلانات',
            'تسجيل المواقع وتوليد كود التضمين',
            'تحليلات تتبع النقرات والمشاهدات',
            'مصادقة وصلاحيات عبر ASP.NET Identity',
          ],
          badge: 'إعلانات',
        },
        {
          title: 'PointPay Rewards SaaS',
          subtitle: 'محرك الولاء والمكافآت',
          description:
            'منصة SaaS بيضاء اللصق لبرامج الولاء. تشمل محرك نقاط قابلًا للتخصيص، وسير عمل الاستبدال، ولوحات إدارة التجار، وواجهة Angular للمستخدمين.',
          features: [
            'محرك نقاط ومكافآت قابل للضبط',
            'لوحات إدارة للتجار والمشرفين',
            'تخزين مؤقت بـ Redis لمعالجة حجم كبير',
            'نشر بـ Docker في حاويات',
            'نظام أحداث Webhook',
          ],
          badge: 'SaaS',
        },
      ],
    },

    // ── Experience ─────────────────────────────
    experience: {
      tag: '// الخبرة',
      title: 'أماكن',
      titleAccent: 'عملي',
      items: [
        {
          role: 'مطور Full Stack مستقل',
          company: 'ARID Scientific Ltd',
          type: 'مستقل / عقد',
          period: 'يناير 2023 – حتى الآن',
          location: 'عن بُعد',
          description:
            'تقديم حلول ويب متكاملة لشركة بحث علمي: بناء backends قابلة للتوسع، وواجهات Angular حديثة، وبنية تحتية سحابية على Azure.',
          responsibilities: [
            'تصميم وتطوير RESTful APIs بـ ASP.NET Core مع Clean Architecture ونمط CQRS',
            'بناء تطبيقات Angular ديناميكية مع Lazy Loading ونماذج تفاعلية وإدارة حالة NgRx',
            'تصميم نماذج بيانات متعددة المستأجرين في SQL Server مع أمان على مستوى الصف',
            'إعداد خطوط CI/CD على Azure DevOps مما قلّص وقت النشر بنسبة 60%',
            'دمج خدمات طرف ثالث: بوابات دفع، ومزودي بريد، وتخزين سحابي',
            'مراجعة الكود ووضع معايير برمجة موحدة للفريق',
            'تحسين استعلامات قاعدة البيانات وإدخال التخزين المؤقت بـ Redis — تحسّن أداء API بنسبة 40%',
          ],
        },
      ],
      metrics: [
        { value: '60%', label: 'تقليل وقت النشر', icon: 'zap' },
        { value: '40%', label: 'تحسين أداء الـ API', icon: 'trending-up' },
        { value: '+10', label: 'مشروع منجز', icon: 'check-circle' },
        { value: '+3', label: 'سنوات خبرة', icon: 'calendar' },
      ],
      current: 'حالي',
    },

    // ── Education ──────────────────────────────
    education: {
      tag: '// التعليم',
      title: 'خلفيتي',
      titleAccent: 'الأكاديمية',
      subtitle: 'الأساس الأكاديمي والتدريب المهني الذي شكّل عقليتي الهندسية.',
      keyTopics: 'المحاور الرئيسية',
      items: [
        {
          degree: 'دبلوم احترافي — تطوير Full Stack',
          institution: 'معهد تكنولوجيا المعلومات (ITI)',
          period: '2025 – 2026',
          description:
            'دبلوم مكثف يغطي تطوير البرمجيات المؤسسية مع التركيز على تقنيات .NET وAngular وتصميم قواعد البيانات وممارسات DevOps الحديثة.',
          highlights: [
            'ASP.NET Core وEntity Framework Core بعمق',
            'Angular مع TypeScript وأنماط SPA المتقدمة',
            'Clean Architecture وأنماط التصميم',
            'SQL Server — استعلامات متقدمة وفهرسة وتحسين',
            'أساسيات Azure السحابية وCI/CD مع Azure DevOps',
          ],
          icon: 'award',
        },
        {
          degree: 'بكالوريوس — علوم الحاسب',
          institution: 'كلية علوم الحاسب',
          period: '2020 – 2024',
          description:
            'تعليم شامل في علوم الحاسب يغطي الخوارزميات وهياكل البيانات وهندسة البرمجيات وأنظمة التشغيل والشبكات وقواعد البيانات.',
          highlights: [
            'الخوارزميات وهياكل البيانات',
            'البرمجة كائنية التوجه وهندسة البرمجيات',
            'أنظمة قواعد البيانات ونمذجة البيانات',
            'أساسيات الشبكات وأنظمة التشغيل',
            'مشروع التخرج — تطبيق ويب متكامل',
          ],
          icon: 'book-open',
        },
      ],
      continuousTitle: 'التعلم المستمر',
      continuousDesc:
        'أكمل دورات وشهادات بانتظام في Azure وDocker وClean Architecture وأنماط Angular المتقدمة.',
      certs: [
        { icon: 'cloud', label: 'أساسيات Azure' },
        { icon: 'box', label: 'Docker والحاويات' },
        { icon: 'layers', label: 'الهندسة النظيفة' },
        { icon: 'code', label: 'Angular المتقدم' },
      ],
    },

    // ── Contact ────────────────────────────────
    contact: {
      tag: '// تواصل',
      title: 'لنعمل',
      titleAccent: 'معًا',
      intro: 'هل لديك مشروع في ذهنك أو تريد مناقشة فرصة؟ يسعدني سماعك.',
      infoTitle: 'تواصل معي',
      infoDesc:
        'أنا متاح حاليًا للأدوار الكاملة والعقود المستقلة والتعاونات المثيرة. عادةً ما أرد خلال 24 ساعة.',
      available: 'متاح لمشاريع جديدة —',
      hireMe: 'وظّفني',
      form: {
        name: 'الاسم',
        namePh: 'احمد محمد',
        email: 'البريد الإلكتروني',
        emailPh: 'ahmedmohamed@gmail.com',
        subject: 'الموضوع',
        subjectPh: 'استفسار عن مشروع / فرصة عمل',
        message: 'الرسالة',
        messagePh: 'أخبرني عن مشروعك أو فرصتك...',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال…',
        successTitle: 'كدنا ننتهي!',
        successDesc:
          'من المفترض أن يفتح تطبيق البريد الآن مع تعبئة كل شيء — فقط اضغط إرسال.',
      },
    },

    // ── Footer ─────────────────────────────────
    footer: {
      heading: 'لنبقَ',
      headingAccent: 'متواصلين',
      hireMe: 'وظّفني',
      quickContactTitle: 'قل مرحباً',
      quickContactPh: 'بريدك الإلكتروني',
      tagline: 'مطور Full Stack .NET & Angular\nبناء أنظمة تتوسع.',
      navTitle: 'التنقل',
      contactTitle: 'التواصل',
      location: 'مصر · عمل عن بُعد',
      timezone: 'GMT+2 (بتوقيت مصر)',
      downloadCv: 'تحميل السيرة الذاتية',
      copyright: 'صُنع بـ',
    },
  },
};
