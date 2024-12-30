# ========================
# 1) Build Stage
# ========================
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Build your production files
RUN npm run build

# ========================
# 2) Production Stage
# ========================
FROM node:18-alpine

# Create a non-root user (optional best practice)
RUN addgroup -g 1001 appgroup && \
    adduser -G appgroup -g appuser -D -u 1001 appuser

# Working directory in the final stage
WORKDIR /app

# Install a lightweight static server
RUN npm install -g serve

# Copy the build artifacts from the 'build' stage
COPY --from=build /app/dist /app/dist

# Switch to the non-root user
USER appuser

# Expose port 80
EXPOSE 80

# Serve the built files on port 80
CMD ["serve", "-s", "dist", "-l", "80"]
