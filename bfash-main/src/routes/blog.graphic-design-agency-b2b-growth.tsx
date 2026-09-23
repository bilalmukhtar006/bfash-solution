import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "./blog.$slug";

const SITE_URL = "https://bfash.us";
const title = "Graphic Design Agency: Visual identities that earn attention and drive B2B sales | BFASH Blog";
const description = "Discover how a graphic design agency uses strategic brand systems, vector illustration, marketplace visuals, and AI-assisted video to help B2B brands grow.";

export const Route = createFileRoute("/blog/graphic-design-agency-b2b-growth")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "graphic design agency, graphic design services, brand identity agency, logo design agency, B2B graphic design, vector illustration, AI video" },
      { name: "author", content: "BFASH" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/blog/graphic-design-agency-b2b-growth` },
      { property: "og:image", content: `${SITE_URL}/logo.webp` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/logo.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog/graphic-design-agency-b2b-growth` }],
  }),
  component: GraphicDesignAgencyBlog,
});

function GraphicDesignAgencyBlog() {
  return <BlogArticle slug="graphic-design-agency-b2b-growth" />;
}