import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { copyFileSync } from "fs";
import { resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-redirects",
      closeBundle() {
        try {
          copyFileSync(
            resolve(__dirname, "public/_redirects"),
            resolve(__dirname, "dist/_redirects"),
          );
          console.log("✅ _redirects copied to dist!");
        } catch (e) {
          console.log("⚠️ _redirects copy skipped");
        }
      },
    },
  ],
});
