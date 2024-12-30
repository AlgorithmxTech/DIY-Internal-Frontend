# Deploying a Vite Project on a Local Machine

This guide outlines the steps to deploy a Vite project on your local machine for development or testing, as well as on development/production machines using Docker and Docker Compose.

---

## Prerequisites

- **Node.js**: Install the latest stable version from [Node.js](https://nodejs.org/) for local deployment.
- **Docker**: Install Docker from [Docker's official site](https://www.docker.com/).
- **Docker Compose**: Ensure Docker Compose is installed.
- **Vite Project**: Ensure you have an existing Vite project or create one.

---

## Steps to Deploy a Vite Project Locally

### 1. Clone or Initialize a Vite Project

- Clone an existing project:
  ```bash
  git clone <repository-url>
  cd <project-folder>
  ```
- Or create a new Vite project:
  ```bash
  npm create vite@latest my-vite-app
  cd my-vite-app
  ```

---

### 2. Install Dependencies

Run the following command to install project dependencies:
```bash
npm install
```

---

### 3. Configure Vite for Local Deployment

Check the `vite.config.js` or `vite.config.ts` file in your project root for the basic configuration. Ensure the server host is set to allow local access:

```javascript
export default {
  server: {
    host: 'localhost', // or '0.0.0.0' for network access
    port: 3000, // Specify your desired port
  },
};
```

---

### 4. Start the Development Server

Use the following command to start the Vite development server:
```bash
npm run dev
```

Access your application at:
- **Local URL**: `http://localhost:3000`
- **Network URL**: Provided by Vite if the host is `0.0.0.0`.

---

### 5. Build for Production (Optional)

To create a production build:
```bash
npm run build
```

This generates a `dist` folder containing the production-ready files.

---

### 6. Preview the Build (Optional)

Test the production build locally using the preview command:
```bash
npm run preview
```

By default, the preview server runs on port 4173. Access it at `http://localhost:4173`.

---

## Steps to Deploy a Vite Project on Dev/Prod Machines Using Docker

### 1. Create a Dockerfile

Add a `Dockerfile` to the root of your project with the following content:

```dockerfile
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

```

---

### 2. Create a Docker Compose File

Add a `docker-compose.yml` file to the root of your project with the following content:

```yaml
version: "3.8"
services:
  vite_app:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

---

### 3. Build and Start the Containers

Run the following command to build and start the containers:
```bash
docker-compose up --build -d
```

Access the application at `http://localhost:8080`.

---

### 4. Push the Docker Image to a Registry (Optional)

If deploying to a remote environment, push the image to a Docker registry:
```bash
docker tag my-vite-app <your-registry>/<your-repo>:<tag>
docker push <your-registry>/<your-repo>:<tag>
```

---

### 5. Deploy the Docker Container in Production

Pull the image from the registry on the production server:
```bash
docker pull <your-registry>/<your-repo>:<tag>
```

Run the containers using Docker Compose:
```bash
docker-compose up -d
```

---

## Troubleshooting

- **Port Already in Use**: Change the port in the `docker-compose.yml` file:
  ```yaml
  ports:
    - "8081:80"
  ```
- **Build Errors**: Ensure all project dependencies are installed and there are no errors in the Vite configuration.
- **Docker Permission Issues**: Use `sudo` or check your Docker user group membership.

---

You have now successfully deployed a Vite project locally, on development/production machines using Docker, and with Docker Compose!
