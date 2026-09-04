import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // index.html is inside src
  root: "src",

  // public is beside src, not inside src
  publicDir: "../public",

  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],

  build: {
    // Output to bfash-main/dist
    outDir: "../dist",
  },

  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline' https://bfash.us https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;"
    }
  }
});