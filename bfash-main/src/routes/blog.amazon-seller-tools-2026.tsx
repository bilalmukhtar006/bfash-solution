import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogContactForm, getPostContent } from "./blog.$slug";

const SITE_URL = "https://bfash.us";
const title = "Amazon Seller Tools: 9 Paid and Free Options for 2026 | BFASH";
const description =
  "Compare nine Amazon seller tools for product research, keyword tracking, pricing, PPC, reviews, and shipping, with free options and installation links.";

export const Route = createFileRoute("/blog/amazon-seller-tools-2026")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Amazon seller tools, Amazon product research, Helium 10, Jungle Scout, Keepa, AMZScout, Amazon PPC, Amazon shipping",
      },
      { name: "author", content: "BFASH Digital Growth Team" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: `${SITE_URL}/blog/amazon-seller-tools-2026`,
      },
      { property: "og:image", content: `${SITE_URL}/Amazon-A-Content.webp` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/Amazon-A-Content.webp` },
    ],
    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/blog/amazon-seller-tools-2026`,
      },
    ],
  }),
  component: AmazonSellerToolsBlog,
});

function AmazonSellerToolsBlog() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="text-brand hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="text-brand hover:underline">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>Amazon Seller Tools</span>
          </nav>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
            <article
              className="prose prose-invert min-w-0 max-w-none rounded-3xl border border-border bg-card px-5 py-8 shadow-sm sm:px-8 md:px-10 md:py-12 [&_.lead]:text-lg [&_.lead]:font-medium [&_.lead]:leading-8 [&_.lead]:text-foreground [&_h1]:text-3xl [&_h1]:font-display [&_h1]:font-bold [&_h1]:leading-tight md:[&_h1]:text-5xl [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:leading-tight md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mt-5 [&_p]:leading-7 [&_p]:text-muted-foreground [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:leading-7 [&_strong]:text-foreground [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_hr]:my-10 [&_hr]:border-border"
              itemScope
              itemType="https://schema.org/Article"
            >
              <meta itemProp="headline" content={title} />
              <meta itemProp="author" content="BFASH Digital Growth Team" />
              <meta itemProp="publisher" content="BFASH" />
              <meta
                itemProp="datePublished"
                content="2026-10-12"
              />
              <meta
                itemProp="mainEntityOfPage"
                content={`${SITE_URL}/blog/amazon-seller-tools-2026`}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: getPostContent("amazon-seller-tools-2026"),
                }}
              />
            </article>
            <aside className="space-y-6">
              <BlogContactForm subject="New Amazon Seller Tools Inquiry from BFASH Blog" />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
