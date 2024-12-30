# Deploying a Vite Project on a Local Machine

This guide outlines the steps to deploy a Vite project on your local machine for development or testing.

---

## Prerequisites

- **Node.js**: Install the latest stable version from [Node.js](https://nodejs.org/).
- **Vite Project**: Ensure you have an existing Vite project or create one.

---

## Steps to Deploy a Vite Project

### 1. Clone or Initialize a Vite Project

- Clone an existing project:
  ```bash
  git clone <repository-url>
  cd <project-folder>
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

## Troubleshooting

- **Port Already in Use**: Change the port in `vite.config.js` or use the `--port` flag:
  ```bash
  npm run dev -- --port=4000
  ```
- **Permission Issues**: Run commands with appropriate permissions or check your user privileges.
- **Firewall Blocks Network Access**: Ensure your firewall settings allow access to the specified port.

---

You have now successfully deployed a Vite project on your local machine!
