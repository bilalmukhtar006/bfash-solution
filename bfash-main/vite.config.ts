import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { copyFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← THIS IS THE KEY ADDITION
    tsconfigPaths(),
    {
      name: "copy-redirects",
      closeBundle() {
        try {
          copyFileSync(
            resolve(__dirname, "public/_redirects"),
            resolve(__dirname, "dist/_redirects")
          );
          console.log("✅ _redirects copied to dist!");
        } catch (_e) {
          console.log("⚠️ _redirects copy skipped");
        }
      },
    },
  ],
});