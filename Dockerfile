# Stage 1: Build the Angular app
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production


# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist/henna-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
