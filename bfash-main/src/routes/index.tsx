import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import {
  ArrowRight,
  Globe,
  Search,
  ShoppingBag,
  Palette,
  Sparkles,
  CheckCircle2,
  Target,
  Headphones,
  Zap,
  TrendingUp,
  Mail,
  Users,
  MapPin,
  Megaphone,
  BriefcaseBusiness,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Best Digital Marketing Agency for Business Growth | BFASH",
      },
      {
        name: "description",
        content:
          "BFASH is a digital marketing agency helping businesses get more reach, leads, and sales through SEO, GEO, social media, advertising, email marketing, CRM, virtual assistance, and business growth services.",
      },
      {
        name: "keywords",
        content:
          "best digital marketing agency, digital marketing agency, digital marketing services, increase sales, business growth consultant, SEO agency, GEO SEO agency, social media manager, social media ads management, Google Ads management services, GMB SEO, GMB SEO services, email marketing, virtual assistance, TikTok Shop",
      },
      {
        name: "author",
        content: "BFASH",
      },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        property: "og:title",
        content:
          "Best Digital Marketing Agency for Business Growth | BFASH",
      },
      {
        property: "og:description",
        content:
          "BFASH helps businesses grow through digital marketing, SEO, GEO, social media, advertising, email marketing, CRM support, virtual assistance, and sales-focused strategies.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://bfash.us/",
      },
      {
        property: "og:image",
        content: "https://bfash.us/logo.webp",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Best Digital Marketing Agency for Business Growth | BFASH",
      },
      {
        name: "twitter:description",
        content:
          "Grow your business with BFASH through SEO, GEO, social media, advertising, email marketing, CRM, virtual assistance, and business growth services.",
      },
      {
        name: "twitter:image",
        content: "https://bfash.us/logo.webp",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://bfash.us/",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: TrendingUp,
    title: "Get More Sales",
    to: "/contact",
    desc:
      "Turn more visitors, leads, and conversations into customers with practical marketing and sales strategies built around your business goals.",
  },
  {
    icon: Users,
    title: "CRM & Social Media Management",
    to: "/contact",
    desc:
      "Keep your customer relationships and social channels organized while you stay focused on running your business.",
  },
  {
    icon: Globe,
    title: "Get More Reach",
    to: "/contact",
    desc:
      "Reach the right audience through search, social media, content, advertising, and other digital channels.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    to: "/contact",
    desc:
      "Stay connected with leads and customers through useful emails, follow-ups, promotions, and campaigns.",
  },
  {
    icon: Search,
    title: "SEO & GEO",
    to: "/services/seo",
    desc:
      "Improve your visibility in traditional search and prepare your business for the growing world of AI-powered search.",
  },
  {
    icon: Headphones,
    title: "Virtual Assistance",
    to: "/contact",
    desc:
      "Save time with reliable support for research, customer tasks, marketing activities, data work, and everyday business operations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Growth",
    to: "/contact",
    desc:
      "Find practical opportunities to improve your marketing, customer journey, online presence, and overall business growth.",
  },
  {
    icon: MapPin,
    title: "GMB SEO & Google Ads",
    to: "/contact",
    desc:
      "Improve your Google Business Profile visibility and reach potential customers through local SEO and paid search campaigns.",
  },
  {
    icon: Megaphone,
    title: "Social Media Ads",
    to: "/contact",
    desc:
      "Reach potential customers with targeted advertising campaigns across social platforms and turn attention into opportunities.",
  },
  {
    icon: ShoppingBag,
    title: "TikTok Shop",
    to: "/contact",
    desc:
      "Explore social commerce and use TikTok Shop to put your products in front of people who are ready to discover and buy.",
  },
  {
    icon: Globe,
    title: "Website Designing",
    to: "/services/web-design",
    desc:
      "Beautiful, responsive, and conversion-focused websites designed to give your business a strong online presence.",
  },
  {
    icon: ShoppingBag,
    title: "Amazon Business",
    to: "/services/amazon",
    desc:
      "Grow your e-commerce presence with listing optimization, PPC management, and practical Amazon store support.",
  },
  {
    icon: Palette,
    title: "Graphic & Logo Designing",
    to: "/services/graphic-design",
    desc:
      "Build a memorable brand with professional logos, graphics, marketing materials, and visual assets.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "All-In-One Expertise",
    desc:
      "You don't need to manage several different providers. BFASH brings marketing, sales support, SEO, social media, advertising, and business services together.",
  },
  {
    icon: Target,
    title: "Focused on Business Results",
    desc:
      "Marketing should do more than create likes or traffic. We focus on practical actions that can help your business generate leads, customers, and sales.",
  },
  {
    icon: Headphones,
    title: "Simple, Human Support",
    desc:
      "You should be able to understand what your marketing is doing. We keep our approach clear, practical, and easy to follow.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />

          <div
            className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-brand-strong/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand uppercase tracking-wider mb-6">
            <Zap className="h-3 w-3" />
            Digital Marketing & Business Growth
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6">
            Best Digital Marketing Agency for{" "}
            <span className="gradient-text">Business Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            BFASH helps businesses get more reach, more leads, and more sales.
            From SEO and GEO to social media, advertising, email marketing,
            CRM support, virtual assistance, and business growth, we bring the
            pieces together so your marketing can work toward one clear goal:
            growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow px-8 h-12"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-surface/40 hover:bg-surface px-8 h-12"
              >
                Let's Talk
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { k: "150+", v: "Projects Shipped" },
              { k: "98%", v: "Client Retention" },
              { k: "12x", v: "Avg ROI Boost" },
              { k: "24/7", v: "Dedicated Support" },
            ].map((s) => (
              <div key={s.v} className="glass-card rounded-xl p-4">
                <div className="text-2xl font-display font-bold gradient-text">
                  {s.k}
                </div>

                <div className="text-xs text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section
        eyebrow="Who We Are"
        title="A Digital Growth Partner Focused on More Than Marketing"
        center
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            BFASH is a full-service digital marketing and business growth
            partner for businesses that want to reach more people and sell
            more.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We help with the parts of digital business that matter every day:
            getting found online, reaching new customers, managing social
            media, following up with leads, running ads, sending emails,
            managing customer relationships, and supporting everyday business
            tasks. You can use the services you need today and add more as
            your business grows.
          </p>
        </div>
      </Section>

      {/* SERVICES */}
      <div id="services">
        <Section
          eyebrow="What We Do"
          title="Digital Marketing Services Designed for Growth"
          center
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group glass-card rounded-2xl p-8 hover:border-brand/50 transition-all hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>

                  <h2 className="text-xl font-display font-bold mb-3">
                    {s.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  <span className="inline-flex items-center text-brand text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* BUSINESS GROWTH CONTENT */}
      <Section
        eyebrow="How We Help"
        title="From Getting Attention to Getting Sales"
        center
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto mb-10">
            Good marketing is not only about getting more visitors. The real
            goal is to connect with the right people, build trust, and help
            them take the next step.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-7">
              <div className="text-2xl font-display font-bold gradient-text mb-3">
                01
              </div>

              <h3 className="text-xl font-display font-bold mb-3">
                Get Found
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                SEO, GEO, GMB SEO, content, and digital marketing can help
                more people discover your business when they are looking for
                what you offer.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <div className="text-2xl font-display font-bold gradient-text mb-3">
                02
              </div>

              <h3 className="text-xl font-display font-bold mb-3">
                Build Interest
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Social media, email marketing, advertising, and useful content
                help you stay in front of potential customers and build trust.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <div className="text-2xl font-display font-bold gradient-text mb-3">
                03
              </div>

              <h3 className="text-xl font-display font-bold mb-3">
                Increase Sales
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                CRM support, follow-ups, sales-focused campaigns, and better
                customer journeys can help turn more opportunities into
                customers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SEO & GEO */}
      <Section
        eyebrow="Search Visibility"
        title="SEO and GEO for the Changing Search Landscape"
        center
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              People are finding businesses in more ways than ever. Traditional
              search engines are still important, while AI-powered tools are
              changing how people discover information and businesses.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              BFASH combines{" "}
              <strong className="text-white">
                search engine optimization (SEO)
              </strong>{" "}
              with{" "}
              <strong className="text-white">
                Generative Engine Optimization (GEO)
              </strong>{" "}
              to help create a stronger online presence. We focus on useful
              content, clear website structure, relevant topics, and a
              trustworthy digital footprint rather than simply repeating
              keywords.
            </p>

            <Link to="/services/seo">
              <Button
                variant="outline"
                className="border-border bg-surface/40 hover:bg-surface"
              >
                Explore SEO & GEO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* LOCAL & PAID MARKETING */}
      <Section
        eyebrow="Reach More Customers"
        title="Local Search, Google Ads & Social Advertising"
        center
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When someone searches for a business, product, or service, being
              visible at the right moment can make a big difference.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our GMB SEO and Google Business Profile support can help improve
              your local presence, while Google Ads management services and
              social media ads can help you reach people who are more likely to
              become customers. We focus on the business goal behind the
              campaign—not just clicks or impressions.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY BFASH */}
      <Section
        eyebrow="Why BFASH"
        title="One Partner for Your Digital Growth"
        center
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass-card rounded-2xl p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 border border-brand/30 mb-5">
                  <v.icon className="h-6 w-6 text-brand" />
                </div>

                <h3 className="text-xl font-display font-bold mb-3">
                  {v.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TIKTOK SHOP */}
      <Section
        eyebrow="Social Commerce"
        title="TikTok Shop for Businesses"
        center
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Social commerce is giving businesses new ways to introduce
              products to potential customers. TikTok Shop can connect product
              discovery, content, and shopping in one place.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              If TikTok Shop is a good fit for your business, BFASH can help
              you explore how it can fit into your wider digital marketing and
              sales strategy.
            </p>
          </div>
        </div>
      </Section>

      {/* OUTBOUND RESOURCE */}
      <Section>
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <p className="text-sm text-muted-foreground">
            Need additional creative support for your business?{" "}
            <a
              href="https://www.superside.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-strong transition-colors font-medium"
            >
              Explore Superside
            </a>{" "}
            for creative and design resources.
          </p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand uppercase tracking-wider mb-5">
            Grow With BFASH
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-5">
            Ready to Get More{" "}
            <span className="gradient-text">Reach, Leads & Sales?</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            You don't need to figure out every part of digital marketing
            alone. Talk to BFASH about your goals and find out which services
            can help your business move forward.
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
      </Section>

      {/* CONTACT */}
      <Section>
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand uppercase tracking-wider mb-4">
                Free Consultation
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-5">
                Ready to <span className="gradient-text">Transform</span> Your
                Business?
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Let's discuss how we can help your business get more reach,
                generate more opportunities, and increase sales. Send us a
                message to start the conversation.
              </p>

              <ul className="space-y-3">
                {[
                  "No-pressure discovery call",
                  "Custom roadmap delivered in 48h",
                  "Transparent pricing",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}