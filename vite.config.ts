import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'convex-vendor': ['convex', '@convex-dev/auth'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'radix-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-slot',
            '@radix-ui/react-label',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
