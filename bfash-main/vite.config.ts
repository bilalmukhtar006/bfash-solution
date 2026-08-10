import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: 'public',
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: '../dist',
    // ✅ This tells Vite where to find the source files
    rollupOptions: {
      input: {
        main: new URL('./public/index.html', import.meta.url).pathname,
      },
    },
  },
  // ✅ This tells Vite to resolve from the project root
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
});