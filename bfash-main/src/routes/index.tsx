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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BFash Solutions — Web Design, SEO & Amazon Growth Agency" },
      {
        name: "description",
        content:
          "Stunning websites, branding, SEO and Amazon growth — everything you need to thrive online, all under one roof.",
      },
      { property: "og:title", content: "BFash Solutions — Premium Digital Agency" },
      {
        property: "og:description",
        content: "Web design, SEO, Amazon growth & branding under one roof.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Globe,
    title: "Website Designing",
    to: "/services/web-design",
    desc: "Beautiful, responsive, and high-converting custom websites that turn everyday visitors into paying customers.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    to: "/services/seo",
    desc: "Get found by the right audience. Data-driven SEO strategies that drive consistent, organic traffic to your business.",
  },
  {
    icon: ShoppingBag,
    title: "Amazon Business Flourishing",
    to: "/services/amazon",
    desc: "Scale your e-commerce storefront with listing optimization, PPC management, and complete store strategy.",
  },
  {
    icon: Palette,
    title: "Graphic & Logo Designing",
    to: "/services/graphic-design",
    desc: "Visual identities that leave a mark. Striking logos, marketing materials, and brand assets that tell your story.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "All-In-One Expertise",
    desc: "No need to juggle multiple freelancers. We handle design, development, marketing, and e-commerce growth — all under one roof.",
  },
  {
    icon: Target,
    title: "Result-Oriented Approach",
    desc: "We don't just focus on making things look pretty; we focus on the metrics that grow your bottom line.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "We walk with you through every step of the process, ensuring your digital assets are always running smoothly.",
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
            <Zap className="h-3 w-3" /> Premium Digital Agency
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6">
            Your Vision. <span className="gradient-text">Our Digital Expertise.</span>
            <br />
            Affordable SEO Agency
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            As a premier affordable SEO agency, we build stunning websites, design unforgettable
            branding, and dramatically optimize your search rankings to scale your business online.
            Discover everything you need to thrive and dominate your market, all delivered
            seamlessly under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow px-8 h-12"
              >
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="text-2xl font-display font-bold gradient-text">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section
        eyebrow="Who We Are"
        title="A full-service digital partner built for ambitious brands"
        center
      >
        <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
          At BFash Solutions, we bridge the gap between brilliant ideas and digital reality. As a
          full-service digital provider and your go-to affordable SEO agency, we are dedicated to
          helping brands stand out, scale up, and dominate their market. Whether you are a brand-new
          startup looking for a killer logo and web presence, an established business aiming for
          page one of Google, or an e-commerce seller wanting to skyrocket your Amazon sales — we
          have the tailored strategy and digital marketing skills to make it happen.
        </p>
      </Section>

      {/* SERVICES */}
      <div id="services">
        <Section eyebrow="What We Do" title="Digital Solutions Designed for Growth" center>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.to}
                className="group glass-card rounded-2xl p-8 hover:border-brand/50 transition-all hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center text-brand text-sm font-medium">
                  Learn more{" "}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      {/* VALUE PROP */}
      <Section eyebrow="Why BFash" title="Why Partner with BFash Solutions?" center>
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
              <h3 className="text-xl font-display font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT - Using the proper ContactForm component */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand uppercase tracking-wider mb-4">
              Free Consultation
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-5">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Let's discuss how we can scale your digital presence. Drop us a message for a free
              consultation.
            </p>
            <ul className="space-y-3">
              {[
                "No-pressure discovery call",
                "Custom roadmap delivered in 48h",
                "Transparent pricing",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}