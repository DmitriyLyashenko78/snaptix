# Устанавливаем зависимости
FROM node:20.11-alpine AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest-10 --activate
RUN pnpm install --frozen-lockfile
# Билдим приложение
FROM node:20.11-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN corepack enable && corepack prepare pnpm@latest-10 --activate
RUN pnpm run build:production
# Стейдж запуска
FROM node:20.11-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/ ./
RUN corepack enable
USER node
RUN corepack prepare pnpm@latest-10 --activate
EXPOSE 3000
CMD ["pnpm", "start"]
