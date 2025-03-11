import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ssr: resolve(__dirname, 'src/entry-server.tsx'),
      },
    },
  },
});