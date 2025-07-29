# Using official Node.js LTS version
FROM node:18

# Setting working directory inside container
WORKDIR /app

# Copying only backend code to container
COPY Backend/package*.json ./Backend/
COPY Backend/ ./Backend/

# Setting working directory to backend
WORKDIR /app/Backend

# Installing dependencies
RUN npm install

# Expose the port configured via the PORT env var
EXPOSE 8080

# Starting the app using environment PORT
CMD ["sh", "-c", "PORT=${PORT:-8080} npm start"]
