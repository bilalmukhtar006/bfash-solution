import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://bfash.us";

const paths = [
  "/",
  "/about",
  "/services",
  "/services/web-design",
  "/services/seo",
  "/services/amazon",
  "/services/graphic-design",
  "/portfolio",
  "/contact",
  "/quote",
  "/privacy",
  "/knowledge-base-of-digital-marketing",
  "/blog",                       // ← ADD BLOG LISTING PAGE
  "/blog/seo-expert",            // ← ADD EACH BLOG POST
  // Add more blog posts here as you create them
  // "/blog/your-next-post",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map(
            (p) =>
              `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>${p === "/" ? "weekly" : p === "/blog" || p.startsWith("/blog/") ? "weekly" : p === "/knowledge-base-of-digital-marketing" ? "weekly" : "monthly"}</changefreq>\n    <priority>${p === "/" ? "1.0" : p === "/blog" ? "0.9" : p.startsWith("/blog/") ? "0.8" : p === "/knowledge-base-of-digital-marketing" ? "0.9" : p.startsWith("/services/") ? "0.6" : "0.8"}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});