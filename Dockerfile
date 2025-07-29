# Using official Node.js LTS version
FROM node:18

# Setting working directory inside container
WORKDIR /app

# Copying only backend code to container
COPY backend/package*.json ./backend/
COPY backend/ ./backend/

# Setting working directory to backend
WORKDIR /app/backend

# Installing dependencies
RUN npm install

# Expose the port configured via the PORT env var
EXPOSE 8080

# Starting the app using environment PORT
CMD ["sh", "-c", "PORT=${PORT:-8080} npm start"]
