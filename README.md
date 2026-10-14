# CV App

## Запуск через Docker

Самый простой способ запустить всё с нуля:

```bash
docker compose up --build
```

Контейнер сам дождётся готовности базы, прогонит миграции, заполнит БД сидами и запустит сервер.
После старта Apollo Sandbox доступен на `http://localhost:3001/graphql`.

## Локальный запуск

Нужен Node.js >= 22.12, pnpm и запущенный PostgreSQL.

1. Создать `.env` в корне проекта:

```env
DATABASE_URL="postgresql://cv:cv@localhost:5432/cv?schema=public"
```

Если база поднимается через `docker compose up postgres`, то в `docker-compose.yaml` наружу проброшен порт `5433` (чтобы не конфликтовать с локальным постгресом), поэтому в `.env` нужно указать `localhost:5433`.

2. Установить зависимости, сгенерировать клиент, накатить миграции и сиды:

```bash
pnpm install
pnpm exec prisma generate
pnpm exec prisma migrate deploy
pnpm exec prisma db seed
pnpm dev
```

Локально сервер запускается на `http://localhost:3000/graphql`.

## Пример запроса

```graphql
query {
  getAllProfiles {
    firstName
    lastName
    title
    summary
    github
    linkedin
    telegram
    website
    skills {
      name
      level
      description
    }
    experience {
      companyName
      role
      startDate
      endDate
      achievements
    }
    projects {
      name
      description
      status
      url
      source
      technologies
    }
    educations {
      name
      description
      startDate
      endDate
    }
  }
}
```

## Примечание по коду

В `src/app.module.ts` на плагине `ApolloServerPluginLandingPageLocalDefault()` стоит `as any`. Это из-за конфликта типов между `@nestjs/apollo` и `@apollo/server`: при текущих настройках TS один пакет тянет типы из CJS-сборки, а другой из ESM, и TypeScript считает их разными типами. Лечится переводом проекта на `"type": "module"` в `package.json`, но тогда пришлось бы везде прописывать `.js` в импортах, поэтому оставил каст.
