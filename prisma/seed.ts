import { PrismaClient, Prisma } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({ adapter });

const profileData: Prisma.ProfileCreateInput = {
    firstName: 'Денис',
    lastName: 'Воронин',
    birthDate: '2006-01-16T00:00:00.000Z',
    title: 'Front-end разработчик',
    summary:
        'Привет, меня зовут Денис. Я middle fullstack-разработчик из Беларуси. Больше всего работаю с React и TypeScript, но и на бэкенде чувствую себя уверенно. API этого портфолио я сделал на NestJS, GraphQL и Prisma, хотя до проекта ни с одним из них не работал. Учусь быстро: читаю документацию и сразу собираю что-то рабочее. Люблю понимать, почему всё устроено именно так, открыто общаюсь с командой, заранее предупреждаю о проблемах и способен довести задачу от идеи до деплоя',
    city: 'Минск',
    country: 'Беларусь',
    email: 'dvoronin.tech@gmail.com',
    phone: '+375259011192',
    telegram: '@dvoronin_tech',
    github: 'https://github.com/dvoronin-tech',
    linkedin: 'https://www.linkedin.com/in/denis-voronin-42a92243b/',
    website: 'https://www.dvoronin.tech/ru',
};

const skillsData: (profileId: string) => Prisma.SkillUncheckedCreateInput[] = (
    profileId,
) => [
    // Languages
    {
        name: 'TypeScript',
        level: 'ADVANCED',
        profileId,
        description:
            'Основной язык программирования, уделяю особое внимание типобезопасности своего кода',
    },
    {
        name: 'JavaScript (ES6+)',
        level: 'ADVANCED',
        profileId,
        description:
            'Имею достаточно глубокие знания в JS, механик его работы и концепций',
    },
    {
        name: 'HTML5',
        level: 'ADVANCED',
        profileId,
        description:
            'Понимаю структуру а так же умею писать семантически правильный SEO оптимизированный HTML код',
    },
    {
        name: 'CSS3 / SCSS',
        level: 'ADVANCED',
        profileId,
        description:
            'Когда устроился в компанию, где я сейчас работаю меня назвали богом scss) Люблю работать с анимациями, flexible layouts и тд.',
    },
    {
        name: 'SQL',
        level: 'BEGINNER',
        profileId,
        description:
            'Могу написать несколько SQL команд, но сложные JOIN запросы к сожалению не осилю так как сразу начал работать с ORM, но насмотренности хватит что бы не снести DB)',
    },

    // Frontend Ecosystem
    {
        name: 'React (18/19)',
        level: 'ADVANCED',
        profileId,
        description:
            'Мой основной Framework. Пишу на нём уже 3 года, выучил с корки до корки, могу на нём всё что угодно',
    },
    {
        name: 'TanStack Start (SSR)',
        level: 'ADVANCED',
        profileId,
        description:
            'Написал не один проект на этом Framework, знаком с SSR не по наслышке',
    },
    {
        name: 'Astro (Islands Architecture)',
        level: 'ADVANCED',
        profileId,
        description:
            'Работал с этим фреймворком каждый день на протяжении 8-ми месяцев, успел выучить все его концепции и понять принцип работы, ограничения и прочее. SSG в копилку',
    },
    {
        name: 'Vite',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Не раз приходилось настраивать конфиг в ручную, философия vite мне тоже понятна',
    },
    {
        name: 'TinaCMS',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Работал с TinaCMS как с git-backed headless CMS: подключал визуальное редактирование контента для маркетингового сайта и связывал его со схемой контента и деплоем',
    },
    {
        name: 'SCSS Modules',
        level: 'ADVANCED',
        profileId,
    },

    // Backend & APIs
    {
        name: 'Hono',
        level: 'ADVANCED',
        profileId,
        description:
            'В коммерческом проекте переписал backend с node express на Hono а так же написал не одно backend приложение с этой библиотекой',
    },
    {
        name: 'Node.js',
        level: 'ADVANCED',
        profileId,
        description:
            'Написал не один самостоятельный скрипт / helper на чистом node js. Понимаю принцип работы node, не испугаюсь пустого текстового редактора, смогу настроить всё с нуля',
    },
    {
        name: 'Express.js',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Какое-то время занимался поддержкой back end на Express, позже переписал back с Express на Hono',
    },
    {
        name: 'RESTful APIs',
        level: 'ADVANCED',
        profileId,
    },
    {
        name: 'GraphQL',
        level: 'BEGINNER',
        profileId,
        description:
            'Написал только один проект на GraphQL, но в принципе технология очень простая и понятная, освоил её быстро и буду развивать знания в будущем',
    },
    {
        name: 'Better Auth',
        level: 'BEGINNER',
        profileId,
        description: 'Использовал её один раз в своём Pet проекте',
    },
    {
        name: 'Hono RPC Type Sharing',
        level: 'ADVANCED',
        profileId,
        description:
            'Каждый раз когда я пишу back end на hono я настраиваю сквозную типизацию, это совсем не сложно но за то после этого у меня есть точная типизация всего back end на frontend',
    },
    {
        name: 'Nest js',
        level: 'BEGINNER',
        profileId,
        description:
            'Пока новичок: написал на NestJS один проект, но хорошо понимаю, что там происходит, и планирую углубляться во фреймворк дальше',
    },

    // State & Data
    {
        name: 'Zustand',
        level: 'ADVANCED',
        profileId,
        description:
            'Использую как основной state manager client side state в не больших проектах. Очень легковесная и простая библиотека',
    },
    {
        name: 'TanStack Query',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Очень сильная технология, работаю с ней уже давно, но всё время узнаю об этом что-то новое. Построил не одно приложение и её использованием',
    },
    {
        name: 'Redux Toolkit',
        level: 'ADVANCED',
        profileId,
        description:
            'Я бы назвал это базой. С него начинал, работал с Redux в коммерческом проекте, поддерживал приложение на Redux, перевёл старую базу с connect на Js на RTX Slices на TS',
    },
    {
        name: 'React Context API',
        level: 'ADVANCED',
        profileId,
    },
    {
        name: 'Matomo Analytics DataLayer',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Настраивал Data layer в матомо, сбор аналитических данных от пользователя',
    },

    // Databases & ORM
    {
        name: 'PostgreSQL',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Проектирую и оптимизирую схемы: индексы, составные ключи, UUIDv7, транзакции (ACID) для атомарной синхронизации данных',
    },
    {
        name: 'Drizzle ORM',
        level: 'ADVANCED',
        profileId,
        description:
            'Моя основная ORM библиотека, работаю с ней давно, знаю как свои 5 пальцев',
    },
    {
        name: 'SQLite',
        level: 'BEGINNER',
        profileId,
        description:
            'Использовал давно и единожды. Слишком простая для моих задач',
    },

    // DevOps & Tooling
    {
        name: 'GitHub Actions (CI/CD)',
        level: 'INTERMEDIATE',
        profileId,
        description: 'Настраивал автоматические CI/CD пайплайны для деплоя',
    },
    {
        name: 'Nginx Reverse Proxy',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Настраивал продакшн-хостинг self-hosted проектов на Linux VPS: reverse proxy, раздача статики и проксирование на SSR-приложения',
    },
    {
        name: 'Linux / Bash Scripting',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Работаю с Linux-серверами, пишу Bash-скрипты для автоматизации деплоя и рутинных задач',
    },
    {
        name: 'Docker',
        level: 'BEGINNER',
        profileId,
        description:
            'Знаю основы: собираю образы и поднимаю окружение через docker-compose, активно углубляюсь',
    },
    {
        name: 'pnpm Monorepos',
        level: 'ADVANCED',
        profileId,
        description:
            'Мой основной способ работы в проектах, всегда предпочитаю pnpm как package manager и монорепозиторий как структура. Строил монорепо на pnpm workspaces с общими пакетами (UI runtime, схема БД) для реальных продуктов.',
    },

    // Architecture & Practices
    {
        name: 'SSR vs. SSG',
        level: 'ADVANCED',
        profileId,
        description:
            'Переархитектурировал маркетинговую платформу со статического Astro (SSG) на динамический TanStack Start (SSR) и понимаю компромиссы обоих подходов',
    },
    {
        name: 'A/B Testing',
        level: 'INTERMEDIATE',
        profileId,
        description:
            'Проводил сплит-тесты высоконагруженных секций сайта: редизайн Hero и онбординг-воронки дал рост конверсий в демо-заявки в 2 раза',
    },
    {
        name: 'Web Vitals Optimization',
        level: 'ADVANCED',
        profileId,
        description:
            'Сократил мобильный FCP с 6.0s до <2.0s и десктопную загрузку до ~1s: SSR-оптимизации, критический CSS инлайнингом и чистка ассетов',
    },
];

const projectsData: (
    profileId: string,
) => Prisma.ProjectUncheckedCreateInput[] = (profileId) => [
    {
        status: 'WIP',
        name: 'BOOKIO',
        description:
            'Bookio — сервис для бронирования. Сделал фронт и бэк сам: PostgreSQL, авторизация, роли пользователей и типизированный API между клиентом и сервером. Проект задеплоен и работает.',
        url: 'https://bookio.dvoronin.tech/',
        source: 'https://github.com/dvoronin-tech/bookio',
        profileId,
        technologies: [
            'TypeScript',
            'Node.js',
            'Hono',
            'Zod',
            'Drizzle ORM',
            'PostgreSQL',
            'Better Auth',
            'React',
            'TanStack Start',
            'TanStack Router',
            'TanStack Query',
            'TanStack Table',
            'React Hook Form',
            'Zustand',
            'Scss modules',
            'Motion',
            'Floating UI',
            'date-fns',
            'Vite',
            'Nitro',
            'Vitest',
            'ESLint',
            'Prettier',
            'pnpm',
            'Monorepo',
        ],
    },
    {
        status: 'FINISHED',
        name: 'BROOKLYN',
        description:
            'Fullstack-приложение музыкального плеера в pnpm-монорепозитории. Бэкенд на Hono и Node.js отдаёт типизированное API с валидацией запросов через Zod и работает с базой через Drizzle ORM. Фронтенд на React и Vite использует это API через типизированный Hono-клиент, роутинг сделан на TanStack Router, состояние хранится в Redux Toolkit с мемоизированными селекторами на Reselect, стили написаны на Sass. Схемы и типы общие для фронтенда и бэкенда, так что весь стек типизирован от начала до конца.',
        profileId,
        technologies: [
            'TypeScript',
            'Node.js',
            'Hono',
            'Zod',
            'Drizzle ORM',
            'React',
            'Redux Toolkit',
            'Reselect',
            'TanStack Router',
            'Vite',
            'Sass',
            'pnpm',
            'Monorepo',
        ],
    },
    {
        status: 'WIP',
        name: 'Butlerapp website',
        description:
            'Коммерческий маркетинговый сайт ButlerApp, который я полностью разрабатываю и поддерживаю сам. Перевёл его с Astro на TanStack Start с SSR, FCP на мобильных сократился примерно с 6 до менее чем 2 секунд. Сделал мультиязычность на Paraglide, формы заявок с вводом телефона и OTP-подтверждением, запись на встречи через Calendly, чат Intercom, HLS-видео на Video.js и анимации на Motion. Для сайта написал отдельный бэкенд на Hono: он валидирует заявки через Zod, отправляет письма через Nodemailer и SMS через Twilio и интегрируется с внешними API через GraphQL. Всё лежит в pnpm-монорепозитории, тесты на Vitest и Testing Library.',
        technologies: [
            'TypeScript',
            'React',
            'TanStack Start',
            'TanStack Router',
            'TanStack Query',
            'Vite',
            'Nitro',
            'Zustand',
            'Motion',
            'Sass',
            'Paraglide (i18n)',
            'Video.js',
            'Hono',
            'Node.js',
            'Zod',
            'Nodemailer',
            'Twilio',
            'GraphQL',
            'Vitest',
            'Testing Library',
            'ESLint',
            'Prettier',
            'pnpm',
            'Monorepo',
        ],
        profileId,
    },
];

const educationData: (
    profileId: string,
) => Prisma.EducationUncheckedCreateInput[] = (profileId) => [
    {
        name: 'МГК Автомобилестроения',
        startDate: '2021-09-01T00:00:00.000Z',
        endDate: '2024-06-30T00:00:00.000Z',
        description:
            'Учился колледже автомобилестроения 3 года на токаря и слесоря по ремонту автомобилей, праллельно после пар учил Frontend разработку, горел этим делом. На переменах читал документацию, дома применял знания на практике.',
        profileId,
    },
];

const experienceData: (
    profileId: string,
) => Prisma.ExperienceUncheckedCreateInput[] = (profileId) => [
    {
        companyName: 'Webbee Technologies',
        role: 'Frontend / Fullstack Developer',
        description:
            'Мидл-фронтенд в международной компании: маркетинговый сайт и легаси-админка SaaS. Перенёс сайт со статического Astro на TanStack Start с TinaCMS и переписал API трекинга на Hono.',
        achievements: [
            'Перевёл сайт компании с Astro на TanStack Start',
            'First Paint на мобильных: с 6,0 с до менее 2,0 с, на десктопе — около 500 мс',
            'Редизайн hero-блока и воронки удвоил клики по «Get demo», проверено A/B-тестами',
            '300+ страниц, тепловая карта кликов в Matomo и динамический JSON-LD для блогов и FAQ',
            'Контактный конфигуратор переписан как связный список шагов с персистом состояния в Zustand',
            'Express переписан на TypeScript и Hono; админка SaaS типизирована и переведена с Redux connect на слайсы',
        ],
        startDate: '2025-09-01T00:00:00.000Z',
        endDate: null,
        profileId,
    },
    {
        companyName: 'SaaS-контракты и воронки',
        role: 'Frontend Developer (контракт)',
        description:
            'Контрактная работа над подписочными продуктами: тарифы, оплата и сценарий отмены, который продолжал диалог вместо того, чтобы отпустить пользователя.',
        achievements: [
            'Живой калькулятор тарифа с анимированным прогрессом и переключением помесячной и годовой оплаты',
            'Редизайн оформления заказа и сравнения тарифов',
            'Модалка удержания, подключённая к API на Node.js и Express: проверка контракта, follow-up письмо и логирование оттока',
        ],
        startDate: '2024-12-01T00:00:00.000Z',
        endDate: '2025-05-01T00:00:00.000Z',
        profileId,
    },
    {
        companyName: 'Фриланс и Telegram Mini Apps',
        role: 'Frontend Developer (фриланс)',
        description:
            'Первые оплачиваемые продукты: каталоги магазинов внутри Telegram, менеджер ассортимента на Django и виджеты заявок, которые считали цену и отправляли обращение сразу клиенту.',
        achievements: [
            'Каталог Telegram Web App с фильтрами, поиском и нативной мобильной раскладкой',
            'Админка на Django и SQLite на Railway: владелец мог обновлять цены и остатки',
            'Многошаговый калькулятор стоимости с вебхуками Telegram и исправление мобильной вёрстки, убравшее сдвиги макета',
        ],
        startDate: '2024-03-01T00:00:00.000Z',
        endDate: '2024-12-01T00:00:00.000Z',
        profileId,
    },
];

const main = async () => {
    await prisma.$connect();

    const { id: profileId } = await prisma.profile.upsert({
        where: { email: profileData.email },
        update: {},
        create: profileData,
        select: { id: true },
    });

    await prisma.skill.createMany({
        data: skillsData(profileId),
        skipDuplicates: true,
    });

    await prisma.project.createMany({
        data: projectsData(profileId),
        skipDuplicates: true,
    });

    await prisma.education.createMany({
        data: educationData(profileId),
        skipDuplicates: true,
    });

    await prisma.experience.createMany({
        data: experienceData(profileId),
        skipDuplicates: true,
    });

    console.log(
        `Seeded profile ${profileId}: ${skillsData(profileId).length} skills, ${projectsData(profileId).length} projects, ${educationData(profileId).length} education, ${experienceData(profileId).length} experience records`,
    );
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
