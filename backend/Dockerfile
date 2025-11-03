# Use official Node image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files (relative to Dockerfile)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Expose app port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
