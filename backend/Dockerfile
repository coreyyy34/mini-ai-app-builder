FROM node:24
WORKDIR /app

COPY package.json package-lock.json ./
COPY shared ./shared
COPY backend ./backend

RUN npm install
RUN npm run build --workspace=@coreyyy34/mini-ai-app-builder-shared

WORKDIR /app/backend
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/server.js"] 