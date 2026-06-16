import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42058,
    proxy: {
      '/api': {
        target: 'http://localhost:42059',
        changeOrigin: true,
      },
    },
  },
});
