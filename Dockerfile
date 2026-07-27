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
COPY tsconfig.*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN npm install --omit=dev
RUN npm install prisma


CMD ["sh", "-c", "npm run build && npx prisma migrate deploy && node dist/main.js"]
