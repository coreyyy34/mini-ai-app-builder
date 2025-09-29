FROM node:24 AS build
WORKDIR /app

COPY package.json package-lock.json ./
COPY shared ./shared
COPY frontend ./frontend

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm install
RUN npm run build --workspace=@coreyyy34/mini-ai-app-builder-shared

WORKDIR /app/frontend
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/frontend/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]