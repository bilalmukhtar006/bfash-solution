import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",

  plugins: [
    tanstackStart({
      srcDirectory: '.',
      router: {
        routesDirectory: 'routes',
        generatedRouteTree: 'routeTree.gen.ts',
      },
    }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
    nitro({ 
      preset: "vercel",
      output: {
        dir: '../.vercel/output'
      }
    }),
  ],

  build: {
    outDir: "../dist",
  },

  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline' https://bfash.us https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;"
    }
  }
});