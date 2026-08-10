import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { routerPlugin } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    routerPlugin(),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: 'dist',
  },
});