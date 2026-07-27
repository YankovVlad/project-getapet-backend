FROM node:20-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build

# ---------- RUNTIME STAGE ----------
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN npm install --omit=dev
RUN npm install prisma
COPY --from=builder /app/dist ./dist

# Копируем prisma (нужно для migrate deploy)
COPY --from=builder /app/prisma ./prisma

CMD ["sh", "-c", "prisma migrate deploy && node dist/main.js"]
