import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('>>> Vite config loaded'); // 👈 Add this

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['all'],
  },
});

