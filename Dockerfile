# ---------- BUILD STAGE ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Генерируем Prisma
RUN npx prisma generate

# Собираем NestJS
RUN npm run build


# ---------- RUNTIME STAGE ----------
FROM node:20-alpine

WORKDIR /app

# Копируем только нужное для рантайма
COPY package*.json ./
RUN npm install --omit=dev

# Копируем dist из builder
COPY --from=builder /app/dist ./dist

# Копируем prisma (нужно для migrate deploy)
COPY --from=builder /app/prisma ./prisma

CMD ["sh", "-c", "prisma migrate deploy && node dist/main.js"]
