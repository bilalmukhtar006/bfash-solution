import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // ✅ Tell Vite that index.html is in the public folder
  root: 'public',
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    // ✅ Output to dist folder at project root
    outDir: '../dist',
  },
});