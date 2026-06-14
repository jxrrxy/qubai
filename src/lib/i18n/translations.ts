export type Locale = "en" | "ru";

export type TranslationKey = keyof typeof en;

export const en = {
  /* ===== Header ===== */
  "header.nav.services": "Services",
  "header.nav.projects": "Projects",
  "header.nav.process": "Process",
  "header.nav.about": "About",
  "header.nav.contact": "Contact",
  "header.cta": "Get in Touch",

  /* ===== Hero ===== */
  "hero.title.prefix": "We craft",
  "hero.title.highlight": "digital excellence",
  "hero.title.suffix": "for modern brands",
  "hero.description":
    "Qubai is a design and development studio specializing in creating stunning websites, powerful web applications, and unforgettable digital experiences that drive growth.",
  "hero.cta.primary": "Start Your Project",
  "hero.cta.secondary": "View Our Work",
  "hero.stat.projects": "Projects Delivered",
  "hero.stat.clients": "Happy Clients",
  "hero.stat.experience": "Years Experience",
  "hero.stat.satisfaction": "Client Satisfaction",
  "hero.scroll": "Scroll",

  /* ===== Services ===== */
  "services.badge": "What We Do",
  "services.title.prefix": "Everything you need to",
  "services.title.highlight": "succeed online",
  "services.description":
    "From concept to launch, we provide end-to-end design and development services that help brands stand out in the digital landscape.",

  "services.web-dev.title": "Web Development",
  "services.web-dev.description":
    "High-performance websites and web applications built with cutting-edge technologies. React, Next.js, and Node.js at the core.",

  "services.uiux.title": "UI/UX Design",
  "services.uiux.description":
    "Beautiful, intuitive interfaces designed with precision. Every pixel crafted to delight users and achieve business goals.",

  "services.strategy.title": "Digital Strategy",
  "services.strategy.description":
    "Data-driven strategies that align design and technology with your business objectives for measurable results.",

  "services.perf.title": "Performance Optimization",
  "services.perf.description":
    "Lightning-fast load times and silky-smooth interactions. We obsess over Core Web Vitals and performance budgets.",

  "services.mobile.title": "Mobile Development",
  "services.mobile.description":
    "Responsive, native-feeling mobile experiences that work flawlessly across every device and screen size.",

  "services.analytics.title": "Analytics & Insights",
  "services.analytics.description":
    "Comprehensive analytics setup and custom dashboards to track what matters and make informed decisions.",

  /* ===== Projects ===== */
  "projects.badge": "Our Work",
  "projects.title.prefix": "Featured",
  "projects.title.highlight": "projects",
  "projects.description":
    "Each project is a testament to our commitment to quality, innovation, and attention to detail.",
  "projects.featured": "Featured Project",
  "projects.impact": "Impact",
  "projects.case-study": "View Case Study",
  "projects.view-all": "View All Projects",

  /* ===== Process ===== */
  "process.badge": "How We Work",
  "process.title.prefix": "A proven",
  "process.title.highlight": "process",
  "process.title.suffix": "that delivers",
  "process.description":
    "Our streamlined workflow ensures transparency, collaboration, and exceptional results at every stage.",
  "process.key-activities": "Key Activities",

  "process.discovery.title": "Discovery",
  "process.discovery.description":
    "We dive deep into your brand, goals, and audience. Through collaborative workshops and research, we uncover insights that shape the project direction.",
  "process.discovery.detail-1": "Brand & audience analysis",
  "process.discovery.detail-2": "Competitive research",
  "process.discovery.detail-3": "Goal definition",
  "process.discovery.detail-4": "Technical audit",

  "process.design.title": "Design",
  "process.design.description":
    "We craft pixel-perfect designs that balance beauty with usability. Iterative prototyping ensures every interaction feels intentional.",
  "process.design.detail-1": "Wireframing & prototyping",
  "process.design.detail-2": "Visual design system",
  "process.design.detail-3": "Interaction design",
  "process.design.detail-4": "User testing",

  "process.build.title": "Build",
  "process.build.description":
    "Our engineers bring designs to life with clean, performant code. We follow best practices for accessibility, SEO, and scalability.",
  "process.build.detail-1": "Agile development",
  "process.build.detail-2": "Quality assurance",
  "process.build.detail-3": "Performance optimization",
  "process.build.detail-4": "Accessibility compliance",

  "process.launch.title": "Launch & Grow",
  "process.launch.description":
    "We deploy, monitor, and optimize. Our partnership doesn't end at launch — we help you measure success and plan the next phase.",
  "process.launch.detail-1": "Deployment & CI/CD",
  "process.launch.detail-2": "Analytics setup",
  "process.launch.detail-3": "Performance monitoring",
  "process.launch.detail-4": "Ongoing optimization",

  /* ===== About ===== */
  "about.badge": "About Us",
  "about.title.prefix": "We are a",
  "about.title.highlight": "digital craft studio",
  "about.description-1":
    "Founded in 2019, Qubai brings together designers and engineers who are passionate about creating exceptional digital experiences. We partner with brands — from startups to enterprises — to build products that users love.",
  "about.description-2":
    "Our team of 12 combines deep expertise in design, engineering, and strategy. We don't just build websites — we build digital ecosystems that drive real business results.",
  "about.cta": "Start a conversation",

  "about.stat.projects": "Projects",
  "about.stat.clients": "Clients",
  "about.stat.years": "Years",
  "about.stat.team": "Team Members",

  "about.values-title": "What we believe in",
  "about.value-1.title": "Craft over speed",
  "about.value-1.description": "We believe in taking the time to get it right.",
  "about.value-2.title": "User-first mindset",
  "about.value-2.description": "Every decision starts with the end-user experience.",
  "about.value-3.title": "Radical transparency",
  "about.value-3.description": "Open communication, clear expectations, no surprises.",
  "about.value-4.title": "Continuous learning",
  "about.value-4.description": "The digital landscape evolves; so do we.",

  "about.team-title": "Meet the team",
  "about.team.role-1": "Creative Director",
  "about.team.role-2": "Lead Developer",
  "about.team.role-3": "UX Designer",
  "about.team.role-4": "Full-Stack Engineer",

  /* ===== Testimonials ===== */
  "testimonials.badge": "Testimonials",
  "testimonials.title.prefix": "Trusted by",
  "testimonials.title.highlight": "industry leaders",
  "testimonials.description":
    "Hear from the brands and teams we've had the privilege of working with.",

  /* ===== Contact ===== */
  "contact.cta.title.prefix": "Let's build something",
  "contact.cta.title.highlight": "extraordinary",
  "contact.cta.description":
    "Ready to take your digital presence to the next level? Tell us about your project and we'll get back to you within 24 hours.",
  "contact.cta.button": "Start Your Project",

  "contact.form.title": "Send us a message",
  "contact.form.name": "Name",
  "contact.form.name-placeholder": "Your name",
  "contact.form.email": "Email",
  "contact.form.email-placeholder": "you@company.com",
  "contact.form.company": "Company",
  "contact.form.company-placeholder": "Your company (optional)",
  "contact.form.message": "Message",
  "contact.form.message-placeholder": "Tell us about your project...",
  "contact.form.send": "Send Message",
  "contact.form.sent": "Message Sent! ✓",

  "contact.info.email": "Email",
  "contact.info.location": "Location",
  "contact.info.follow": "Follow us",
  "contact.info.available": "Available for new projects",
  "contact.info.response": "Typically respond within 24 hours",

  /* ===== Footer ===== */
  "footer.description":
    "We craft modern digital experiences that blend stunning design with powerful engineering. Based in Almaty, Kazakhstan, serving clients worldwide.",
  "footer.services": "Services",
  "footer.company": "Company",
  "footer.link.web-design": "Web Design",
  "footer.link.development": "Development",
  "footer.link.uiux": "UI/UX Design",
  "footer.link.consulting": "Consulting",
  "footer.link.about": "About",
  "footer.link.projects": "Projects",
  "footer.link.process": "Process",
  "footer.link.contact": "Contact",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.copyright": "All rights reserved.",
} as const;

export const ru: Record<TranslationKey, string> = {
  /* ===== Header ===== */
  "header.nav.services": "Услуги",
  "header.nav.projects": "Проекты",
  "header.nav.process": "Процесс",
  "header.nav.about": "О нас",
  "header.nav.contact": "Контакты",
  "header.cta": "Связаться",

  /* ===== Hero ===== */
  "hero.title.prefix": "Мы создаём",
  "hero.title.highlight": "цифровое совершенство",
  "hero.title.suffix": "для современных брендов",
  "hero.description":
    "Qubai — это студия дизайна и разработки, специализирующаяся на создании потрясающих сайтов, мощных веб-приложений и незабываемых цифровых впечатлений, которые способствуют росту бизнеса.",
  "hero.cta.primary": "Начать проект",
  "hero.cta.secondary": "Наши работы",
  "hero.stat.projects": "Выполнено проектов",
  "hero.stat.clients": "Довольных клиентов",
  "hero.stat.experience": "Лет опыта",
  "hero.stat.satisfaction": "Удовлетворённость",
  "hero.scroll": "Листайте",

  /* ===== Services ===== */
  "services.badge": "Что мы делаем",
  "services.title.prefix": "Всё необходимое для",
  "services.title.highlight": "успеха в сети",
  "services.description":
    "От концепции до запуска — мы предоставляем полный цикл услуг по дизайну и разработке, помогая брендам выделяться в цифровом пространстве.",

  "services.web-dev.title": "Веб-разработка",
  "services.web-dev.description":
    "Высокопроизводительные сайты и веб-приложения на передовых технологиях: React, Next.js и Node.js.",

  "services.uiux.title": "UI/UX дизайн",
  "services.uiux.description":
    "Красивые и интуитивные интерфейсы, созданные с точностью. Каждый пиксель продуман, чтобы радовать пользователей и достигать бизнес-целей.",

  "services.strategy.title": "Цифровая стратегия",
  "services.strategy.description":
    "Стратегии, основанные на данных, которые объединяют дизайн и технологии с вашими бизнес-целями для достижения измеримых результатов.",

  "services.perf.title": "Оптимизация производительности",
  "services.perf.description":
    "Мгновенная загрузка и плавные взаимодействия. Мы уделяем первостепенное внимание Core Web Vitals и бюджету производительности.",

  "services.mobile.title": "Мобильная разработка",
  "services.mobile.description":
    "Адаптивные мобильные приложения с нативным поведением, безупречно работающие на любых устройствах и разрешениях экрана.",

  "services.analytics.title": "Аналитика и отчёты",
  "services.analytics.description":
    "Комплексная настройка аналитики и пользовательские дашборды для отслеживания ключевых метрик и принятия обоснованных решений.",

  /* ===== Projects ===== */
  "projects.badge": "Наши работы",
  "projects.title.prefix": "Избранные",
  "projects.title.highlight": "проекты",
  "projects.description":
    "Каждый проект — это свидетельство нашей приверженности качеству, инновациям и вниманию к деталям.",
  "projects.featured": "Избранный проект",
  "projects.impact": "Результат",
  "projects.case-study": "Смотреть кейс",
  "projects.view-all": "Все проекты",

  /* ===== Process ===== */
  "process.badge": "Как мы работаем",
  "process.title.prefix": "Проверенный",
  "process.title.highlight": "процесс",
  "process.title.suffix": "который приносит результат",
  "process.description":
    "Наш отлаженный рабочий процесс обеспечивает прозрачность, сотрудничество и исключительные результаты на каждом этапе.",
  "process.key-activities": "Ключевые этапы",

  "process.discovery.title": "Исследование",
  "process.discovery.description":
    "Мы глубоко погружаемся в ваш бренд, цели и аудиторию. Совместные воркшопы и исследования помогают выявить инсайты, определяющие направление проекта.",
  "process.discovery.detail-1": "Анализ бренда и аудитории",
  "process.discovery.detail-2": "Конкурентный анализ",
  "process.discovery.detail-3": "Определение целей",
  "process.discovery.detail-4": "Технический аудит",

  "process.design.title": "Дизайн",
  "process.design.description":
    "Мы создаём дизайн с точностью до пикселя, сочетая красоту с удобством. Итеративное прототипирование гарантирует продуманность каждого взаимодействия.",
  "process.design.detail-1": "Вайрфреймы и прототипы",
  "process.design.detail-2": "Визуальная система дизайна",
  "process.design.detail-3": "Проектирование взаимодействий",
  "process.design.detail-4": "Юзабилити-тестирование",

  "process.build.title": "Разработка",
  "process.build.description":
    "Наши инженеры воплощают дизайн в жизнь с помощью чистого, производительного кода. Мы следуем лучшим практикам доступности, SEO и масштабируемости.",
  "process.build.detail-1": "Agile-разработка",
  "process.build.detail-2": "Контроль качества",
  "process.build.detail-3": "Оптимизация производительности",
  "process.build.detail-4": "Соответствие стандартам доступности",

  "process.launch.title": "Запуск и рост",
  "process.launch.description":
    "Мы развёртываем, мониторим и оптимизируем. Наше партнёрство не заканчивается на запуске — мы помогаем измерять успех и планировать следующий этап.",
  "process.launch.detail-1": "Деплой и CI/CD",
  "process.launch.detail-2": "Настройка аналитики",
  "process.launch.detail-3": "Мониторинг производительности",
  "process.launch.detail-4": "Постоянная оптимизация",

  /* ===== About ===== */
  "about.badge": "О нас",
  "about.title.prefix": "Мы —",
  "about.title.highlight": "цифровая мастерская",
  "about.description-1":
    "Основанная в 2019 году, Qubai объединяет дизайнеров и инженеров, увлечённых созданием исключительных цифровых продуктов. Мы сотрудничаем с брендами — от стартапов до крупных предприятий — чтобы создавать продукты, которые любят пользователи.",
  "about.description-2":
    "Наша команда из 12 человек объединяет глубокий опыт в дизайне, разработке и стратегии. Мы не просто создаём сайты — мы строим цифровые экосистемы, которые приносят реальные бизнес-результаты.",
  "about.cta": "Начать диалог",

  "about.stat.projects": "Проектов",
  "about.stat.clients": "Клиентов",
  "about.stat.years": "Лет",
  "about.stat.team": "Членов команды",

  "about.values-title": "Наши принципы",
  "about.value-1.title": "Качество важнее скорости",
  "about.value-1.description": "Мы верим, что важно уделять время, чтобы сделать всё правильно.",
  "about.value-2.title": "Пользователь прежде всего",
  "about.value-2.description": "Каждое решение начинается с опыта конечного пользователя.",
  "about.value-3.title": "Полная прозрачность",
  "about.value-3.description": "Открытое общение, чёткие ожидания, никаких сюрпризов.",
  "about.value-4.title": "Постоянное развитие",
  "about.value-4.description": "Цифровой ландшафт меняется — меняемся и мы.",

  "about.team-title": "Наша команда",
  "about.team.role-1": "Креативный директор",
  "about.team.role-2": "Ведущий разработчик",
  "about.team.role-3": "UX-дизайнер",
  "about.team.role-4": "Full-Stack инженер",

  /* ===== Testimonials ===== */
  "testimonials.badge": "Отзывы",
  "testimonials.title.prefix": "Нам доверяют",
  "testimonials.title.highlight": "лидеры индустрии",
  "testimonials.description":
    "Узнайте, что говорят бренды и команды, с которыми мы имели честь работать.",

  /* ===== Contact ===== */
  "contact.cta.title.prefix": "Давайте создадим",
  "contact.cta.title.highlight": "нечто особенное",
  "contact.cta.description":
    "Готовы вывести своё цифровое присутствие на новый уровень? Расскажите о своём проекте, и мы свяжемся с вами в течение 24 часов.",
  "contact.cta.button": "Начать проект",

  "contact.form.title": "Отправьте нам сообщение",
  "contact.form.name": "Имя",
  "contact.form.name-placeholder": "Ваше имя",
  "contact.form.email": "Email",
  "contact.form.email-placeholder": "you@company.com",
  "contact.form.company": "Компания",
  "contact.form.company-placeholder": "Ваша компания (необязательно)",
  "contact.form.message": "Сообщение",
  "contact.form.message-placeholder": "Расскажите о вашем проекте...",
  "contact.form.send": "Отправить",
  "contact.form.sent": "Сообщение отправлено! ✓",

  "contact.info.email": "Email",
  "contact.info.location": "Локация",
  "contact.info.follow": "Мы в соцсетях",
  "contact.info.available": "Открыты к новым проектам",
  "contact.info.response": "Обычно отвечаем в течение 24 часов",

  /* ===== Footer ===== */
  "footer.description":
    "Мы создаём современные цифровые продукты, сочетающие потрясающий дизайн с мощной инженерией. Базируемся в Сан-Франциско, работаем по всему миру.",
  "footer.services": "Услуги",
  "footer.company": "Компания",
  "footer.link.web-design": "Веб-дизайн",
  "footer.link.development": "Разработка",
  "footer.link.uiux": "UI/UX дизайн",
  "footer.link.consulting": "Консалтинг",
  "footer.link.about": "О нас",
  "footer.link.projects": "Проекты",
  "footer.link.process": "Процесс",
  "footer.link.contact": "Контакты",
  "footer.privacy": "Политика конфиденциальности",
  "footer.terms": "Условия использования",
  "footer.copyright": "Все права защищены.",
};