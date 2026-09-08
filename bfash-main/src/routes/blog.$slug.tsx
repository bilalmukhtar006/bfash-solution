import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  TrendingUp,
  Sparkles,
  BookOpen,
  PenLine,
  Twitter,
  Facebook,
  Linkedin,
  Link2,
} from "lucide-react";
import { blogPosts } from "./blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return {
      meta: [
        {
          title: post ? `${post.title} | BFASH Blog` : "Blog | BFASH",
        },
        {
          name: "description",
          content: post?.excerpt || "Read expert insights on digital marketing, SEO, GEO, and business growth.",
        },
        {
          name: "author",
          content: "BFASH",
        },
        {
          name: "robots",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          property: "og:title",
          content: post ? `${post.title} | BFASH Blog` : "Blog | BFASH",
        },
        {
          property: "og:description",
          content: post?.excerpt || "Expert insights on digital marketing.",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: `https://bfash.us/blog/${params.slug}`,
        },
        {
          property: "og:image",
          content: post?.featuredImage || "https://bfash.us/logo.webp",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: post ? `${post.title} | BFASH Blog` : "Blog | BFASH",
        },
        {
          name: "twitter:description",
          content: post?.excerpt || "Expert insights on digital marketing.",
        },
        {
          name: "twitter:image",
          content: post?.featuredImage || "https://bfash.us/logo.webp",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://bfash.us/blog/${params.slug}`,
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    throw notFound();
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* BACK BUTTON */}
      <section className="pt-32 md:pt-40 pb-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* POST HEADER */}
      <Section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category & Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.categoryColor}`}>
                {post.category}
              </span>
              {post.trending && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                  <TrendingUp className="h-3 w-3" />
                  Trending
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-brand/20 flex items-center justify-center">
                  <User className="h-4 w-4 text-brand" />
                </div>
                By {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="rounded-2xl overflow-hidden mb-8 glass-card">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-surface/40 border border-border/50 text-xs text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* POST CONTENT */}
      <Section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: getPostContent(slug) }} />
            </article>
          </div>
        </div>
      </Section>

      {/* SOCIAL SHARE */}
      <Section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
              <span className="font-medium">Share this article</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-brand/10 transition-colors">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-brand" />
                </button>
                <button className="p-2 rounded-lg hover:bg-brand/10 transition-colors">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-brand" />
                </button>
                <button className="p-2 rounded-lg hover:bg-brand/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-brand" />
                </button>
                <button className="p-2 rounded-lg hover:bg-brand/10 transition-colors">
                  <Link2 className="h-5 w-5 text-muted-foreground hover:text-brand" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GUEST POSTING SECTION */}
      <Section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-brand/20 bg-gradient-to-br from-brand/5 to-brand-strong/5">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong">
                    <PenLine className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-1">
                    Write for Us — Guest Posting
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Have expertise in digital marketing, SEO, GEO, AI, or business growth? 
                    We welcome guest posts from industry experts. Share your knowledge with our audience 
                    and build your authority.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <Link to="/contact">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow"
                      >
                        Submit a Guest Post
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      ✦ No spam. ✦ Quality content only.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <Section
          eyebrow="Related Articles"
          title="More Insights for You"
          center
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to="/blog/$slug"
                  params={{ slug: related.slug }}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-brand/50 transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40 bg-gradient-to-br from-brand/10 to-brand-strong/5">
                    {related.featuredImage ? (
                      <img
                        src={related.featuredImage}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-brand/20" />
                      </div>
                    )}
                    <span className={`absolute top-3 left-3 inline-block px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${related.categoryColor}`}>
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* FINAL CTA */}
      <Section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand uppercase tracking-wider mb-4">
                <Sparkles className="h-3 w-3" />
                Grow With BFASH
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Ready to <span className="gradient-text">Grow</span> Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Let's talk about how BFASH can help you get more reach, leads, and sales through SEO, GEO, and digital marketing.
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

// Helper function to get post content by slug
function getPostContent(slug: string): string {
  if (slug === "seo-expert") {
    return `
      <h2>Introduction</h2>
      <p>Search engine optimization is more than putting keywords on a website.</p>
      <p>A good SEO strategy helps the right people find a business when they are looking for its products or services.</p>
      <p>At BFASH, we provide <strong>SEO expert services</strong> for businesses that want stronger organic visibility, better website traffic, more qualified leads, and sustainable online growth.</p>
      
      <h2>What Does an SEO Expert Do?</h2>
      <p>An SEO expert studies how search engines, websites, users, and content work together.</p>
      <p>The work starts with research.</p>
      <p>An SEO expert examines:</p>
      <ul>
        <li>What people search for</li>
        <li>Why people search for it</li>
        <li>Which pages already rank</li>
        <li>How competitive a keyword is</li>
        <li>What information users expect</li>
        <li>Whether a website can be crawled</li>
        <li>Whether important pages are indexed</li>
        <li>How the website is structured</li>
        <li>Whether content answers the search intent</li>
        <li>How strong the website's authority is</li>
        <li>Where relevant backlinks can come from</li>
        <li>Whether visitors can become leads or customers</li>
      </ul>
      
      <h2>Why Keyword Research Comes First</h2>
      <p>People use different words for the same problem.</p>
      <p>A business owner may search <em>"SEO expert."</em></p>
      <p>Another person may search <em>"SEO consultant for small business."</em></p>
      <p>Another may ask <em>"How can I get more traffic from Google?"</em></p>
      <p>These searches can describe the same underlying need.</p>
      
      <h2>SEO Expert + Semantic Content Strategy</h2>
      <p>Modern SEO should not depend on repeating one phrase many times.</p>
      <p>Instead, a page should cover the related ideas that help explain the main subject.</p>
      
      <h2>Technical SEO: The Foundation</h2>
      <p>A website can have excellent content and still struggle if search engines cannot properly access it.</p>
      <p>Technical SEO focuses on the foundation.</p>
      
      <h2>Content Marketing and SEO</h2>
      <p>Content helps answer questions.</p>
      <p>Good content can also build trust before a customer ever contacts a business.</p>
      
      <h2>Why Topical Authority Matters</h2>
      <p>Imagine a website has one article about SEO.</p>
      <p>Another website has 30 useful pages covering different aspects of SEO.</p>
      <p>The second website gives search engines and readers much more context about its expertise.</p>
      
      <h2>SEO for B2B Companies</h2>
      <p>BFASH specializes in B2B marketing and traffic generation.</p>
      <p>B2B SEO can be different from consumer SEO.</p>
      
      <h2>Local SEO and Google Maps</h2>
      <p>Local businesses need more than normal organic rankings.</p>
      
      <h2>Backlinks and Authority</h2>
      <p>Backlinks are links from other websites to your website.</p>
      <p>They can help search engines discover pages and can contribute to a site's authority.</p>
      
      <h2>SEO, AEO, and GEO</h2>
      <p>Search is changing.</p>
      <p><strong>Traditional SEO</strong> focuses on visibility in search engines.</p>
      <p><strong>AEO — Answer Engine Optimization</strong> focuses on creating content that answers questions clearly.</p>
      <p><strong>GEO — Generative Engine Optimization</strong> focuses on improving how information can be understood and potentially surfaced by AI-powered search.</p>
      
      <h2>Human Expertise Still Matters</h2>
      <p>AI can help with research, automation, data processing, content ideation, and repetitive tasks.</p>
      <p>But AI should not replace human judgment.</p>
      
      <h2>SEO Research and AI Automation at BFASH</h2>
      <p>BFASH does not view AI as a replacement for marketing strategy.</p>
      
      <h2>Frequently Asked Questions About SEO Experts</h2>
      
      <h3>What is an SEO expert?</h3>
      <p>An SEO expert is a professional who helps websites improve their visibility in search engines through research, technical optimization, content strategy, authority building, and performance analysis.</p>
      
      <h3>What does an SEO expert do?</h3>
      <p>An SEO expert can perform keyword research, technical audits, on-page optimization, content planning, internal linking, local SEO, backlink strategy, analytics, and ongoing search-performance improvements.</p>
      
      <h3>Is SEO still important with AI search?</h3>
      <p>Yes. SEO remains important because AI systems can retrieve information from the web, and traditional search continues to be a major discovery channel.</p>
    `;
  }
  return "<p>Content coming soon.</p>";
}