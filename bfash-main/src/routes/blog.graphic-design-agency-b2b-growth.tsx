import { createFileRoute, Link } from "@tanstack/react-router";
import { getPostContent } from "./blog.$slug";

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
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />
          <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-brand-strong/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand">
            Graphic Design Agency
          </div>
          <h1 className="text-4xl font-display font-bold leading-[1.05] tracking-tight md:text-6xl">
            Visual identities that earn attention and drive B2B sales
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Strategic brand systems, vector illustration, marketplace visuals, and AI-assisted video for growing B2B brands.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="text-brand hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="text-brand hover:underline">Blog</Link>
            <span className="mx-2">/</span>
            <span>Graphic Design Agency</span>
          </nav>
          <article
            className="prose prose-invert max-w-none rounded-2xl border border-border bg-card px-5 py-8 shadow-sm sm:px-8 md:px-12 md:py-12 [&_.lead]:text-lg [&_.lead]:font-medium [&_.lead]:leading-8 [&_.lead]:text-foreground [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:leading-tight md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mt-5 [&_p]:leading-7 [&_p]:text-muted-foreground [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:leading-7 [&_strong]:text-foreground [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_hr]:my-10 [&_hr]:border-border [&_table]:border-collapse"
            itemScope
            itemType="https://schema.org/Article"
          >
            <meta itemProp="headline" content={title} />
            <meta itemProp="author" content="BFASH" />
            <meta itemProp="publisher" content="BFASH" />
            <meta itemProp="mainEntityOfPage" content={`${SITE_URL}/blog/graphic-design-agency-b2b-growth`} />
            <div dangerouslySetInnerHTML={{ __html: getPostContent("graphic-design-agency-b2b-growth") }} />
          </article>
        </div>
      </section>
    </main>
  );
}