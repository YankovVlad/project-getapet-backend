FROM node:20-alpine

WORKDIR /app

COPY . .
RUN npm install
RUN npx prisma generate

CMD ["sh", "-c", "npm run build && prisma migrate deploy && node dist/main.js"]
