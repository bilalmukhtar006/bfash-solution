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
});