# ---------- Stage 1: Backend Setup ----------
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend code to the working directory
COPY . .

# Expose backend port (ensure it matches your server.js port)
EXPOSE 5000

# Copy the wait-for-db script
COPY wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh

# Use the script to wait for DB before starting
ENTRYPOINT ["/wait-for-db.sh", "npm", "start"]
