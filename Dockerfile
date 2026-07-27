FROM node:20-alpine

WORKDIR /app

COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build
RUN ls -R /app/dist


CMD ["npm", "start"]
