import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // index.html is located inside the src folder
  root: "src",

  // The actual public folder is one level above src
  publicDir: "../public",

  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],

  build: {
    // Build output: bfash-main/dist
    outDir: "../dist",
  },
});