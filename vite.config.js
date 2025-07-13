import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external access (like from ngrok)
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost', // or your custom domain or IP
    },
    allowedHosts: ['.ngrok-free.app', 'localhost'], // add your domain here
  }
});
