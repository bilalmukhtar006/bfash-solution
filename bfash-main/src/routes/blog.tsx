import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import {
  ArrowRight,
  Search,
  Calendar,
  Clock,
  User,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Digital Marketing Blog | SEO, GEO & Business Growth | BFASH",
      },
      {
        name: "description",
        content:
          "Expert insights on SEO, GEO, AI search, content marketing, and business growth from the BFASH team.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://bfash.us/blog",
      },
    ],
  }),
  component: BlogIndex,
});

// ✅ EXPORT THIS SO blog.$slug.tsx CAN USE IT
export const blogPosts = [
  {
    slug: "seo-expert",
    title: "SEO Expert: How the Right Strategy Helps People Find, Trust, and Choose Your Business",
    excerpt:
      "Learn what an SEO expert does, why keyword research matters, and how SEO, GEO, and AI search work together to help businesses grow.",
    category: "SEO",
    categoryColor: "from-blue-500 to-cyan-400",
    date: "September 9, 2026",
    readTime: "12 min read",
    author: "BFASH Team",
    authorImage: "/team/bfash-avatar.webp",
    featuredImage: "/blog/seo-expert-thumbnail.webp",
    tags: ["SEO Expert", "GEO", "AI Search", "Keyword Research", "Local SEO", "B2B SEO"],
    featured: true,
    trending: true,
  },
  // Add more blog posts here as you write them
];

function BlogIndex() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />
          <div
            className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-brand-strong/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand uppercase tracking-wider mb-6">
            <Sparkles className="h-3 w-3" />
            BFASH Blog
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6">
            Insights for{" "}
            <span className="gradient-text">Digital Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert perspectives on SEO, GEO, AI search, content marketing,
            and strategies that help businesses grow.
          </p>
        </div>
      </section>

      {featuredPost && (
        <Section>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Link
              to="/blog/$slug"
              params={{ slug: featuredPost.slug }}
              className="group block"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:border-brand/50 transition-all hover:-translate-y-1">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-brand/20 to-brand-strong/10">
                    {featuredPost.featuredImage ? (
                      <img
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Search className="h-16 w-16 text-brand/30" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${featuredPost.categoryColor}`}>
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-brand transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-full bg-brand/20 flex items-center justify-center">
                        <User className="h-4 w-4 text-brand" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        By {featuredPost.author}
                      </span>
                    </div>

                    <span className="inline-flex items-center text-brand font-medium group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Section>
      )}

      <Section
        eyebrow="Latest Articles"
        title="Explore Our Latest Insights"
        center
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {regularPosts.length === 0 && blogPosts.length <= 1 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                More articles coming soon. Check back for fresh insights.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-brand/50 transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gradient-to-br from-brand/10 to-brand-strong/5">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Search className="h-12 w-12 text-brand/20" />
                      </div>
                    )}
                    <span className={`absolute top-3 left-3 inline-block px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Ready to <span className="gradient-text">Grow</span> Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Let's talk about how BFASH can help you get more reach, leads, and sales.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow px-8 h-12"
                >
                  Talk to BFASH
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}