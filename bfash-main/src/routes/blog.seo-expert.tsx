import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "./blog.$slug";

const SITE_URL = "https://bfash.us";
const title = "SEO Expert: How the Right Strategy Helps People Find, Trust, and Choose Your Business | BFASH Blog";
const description = "Learn how an SEO expert uses keyword research, technical SEO, semantic content, local SEO, B2B strategy, GEO, AEO, and AI automation to grow qualified traffic and business visibility.";

export const Route = createFileRoute("/blog/seo-expert")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "SEO expert, SEO agency, SEO consultant, technical SEO, keyword research, local SEO, B2B SEO, GEO, AEO, AI search optimization" },
      { name: "author", content: "BFASH" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/blog/seo-expert` },
      { property: "og:image", content: `${SITE_URL}/logo.webp` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/logo.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog/seo-expert` }],
  }),
  component: SeoExpertBlog,
});

function SeoExpertBlog() {
  return <BlogArticle slug="seo-expert" />;
}