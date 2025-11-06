# --------------------------
# Stage 1: Build the Vite app
# --------------------------
FROM node:18 AS build

WORKDIR /app

# Copy package files (from root)
COPY package*.json ./

RUN npm install

# Copy all files (frontend source + vite config)
COPY . .

RUN npm run build

# --------------------------
# Stage 2: Serve with Nginx
# --------------------------
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
