import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Target,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Search,
  MessageSquare,
  Clock,
  Award,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      {
        title: "Scale Your Business with Predictable Reach & Leads | BFASH",
      },
      {
        name: "description",
        content:
          "Partner with BFASH to turn visibility into revenue. Get an all-in-one growth strategy combining SEO, GEO, paid advertising, and conversion-focused marketing.",
      },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large",
      },
      {
        property: "og:title",
        content: "Scale Your Business with Predictable Reach & Leads | BFASH",
      },
      {
        property: "og:description",
        content:
          "Turn digital traffic into measurable sales. Get a customized 48-hour growth roadmap from BFASH.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://bfash.us/get-started",
      },
      {
        property: "og:image",
        content: "https://bfash.us/logo.webp",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://bfash.us/get-started",
      },
    ],
  }),
  component: LandingPage,
});

const benefits = [
  {
    icon: Search,
    title: "Omnichannel Search Dominance",
    desc: "Capture high-intent searches across Google, local maps (GMB), and modern AI-driven answer engines with our SEO & GEO framework.",
  },
  {
    icon: Target,
    title: "High-ROI Paid Advertising",
    desc: "Eliminate wasted ad spend on Meta, Google, and TikTok with conversion-optimized funnels that prioritize qualified leads over empty clicks.",
  },
  {
    icon: BarChart3,
    title: "Conversion-Centric Infrastructure",
    desc: "From responsive landing pages to email nurture sequences and CRM pipelines, every interaction is engineered to close deals.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit & Strategy Call",
    desc: "We analyze your current search footprint, traffic channels, and sales funnel to uncover immediate revenue opportunities.",
  },
  {
    step: "02",
    title: "Custom 48-Hour Roadmap",
    desc: "You receive a clear, milestone-driven execution plan specifying target keywords, ad creative angles, and technical deliverables.",
  },
  {
    step: "03",
    title: "Omnichannel Execution",
    desc: "Our team implements SEO/GEO optimizations, launches paid campaigns, and deploys lead-capture assets with zero guesswork.",
  },
  {
    step: "04",
    title: "Continuous Optimization",
    desc: "We review analytics, run A/B conversion tests, and refine campaigns to scale your return on investment predictably.",
  },
];

const faqs = [
  {
    q: "How does BFASH differ from typical digital agencies?",
    a: "We integrate all digital growth functions—SEO, GEO, social advertising, CRM workflows, and virtual assistance—under one roof so you don't have to coordinate multiple fragmented vendors.",
  },
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO optimizes your digital footprint and authority for AI-powered answer engines (like ChatGPT, Perplexity, and Google AI Overviews) alongside traditional search engines.",
  },
  {
    q: "How quickly can we expect to see results?",
    a: "Paid advertising and conversion funnels typically begin generating inquiries within days of launch, while SEO and GEO rankings establish steady long-term inbound traffic over 60–90 days.",
  },
  {
    q: "Is there a long-term commitment required?",
    a: "We work with transparent, milestone-oriented agreements designed around tangible business deliverables and performance rather than restrictive lock-ins.",
  },
];

function LandingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-16 left-1/4 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />
          <div
            className="absolute top-36 right-1/4 h-96 w-96 rounded-full bg-brand-strong/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand uppercase tracking-wider mb-6">
            <Zap className="h-3 w-3" />
            Performance Growth Partnership
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6">
            Turn Digital Traffic Into{" "}
            <span className="gradient-text">Predictable Revenue</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Stop juggling disconnected agencies. BFASH brings SEO, GEO, paid ads,
            CRM automation, and growth strategy together to scale your pipeline
            and increase customer lifetime value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#consultation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow px-8 h-12"
              >
                Claim Your Free Growth Roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <span className="text-xs text-muted-foreground">
              48-hour delivery • No obligation
            </span>
          </div>

          {/* KPI METRICS */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { k: "150+", v: "Projects Shipped" },
              { k: "98%", v: "Client Retention Rate" },
              { k: "12x", v: "Average ROI Boost" },
              { k: "48h", v: "Custom Roadmap Delivery" },
            ].map((s) => (
              <div key={s.v} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold gradient-text">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <Section
        eyebrow="Why BFASH"
        title="Engineered for Scalable Customer Acquisition"
        center
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="glass-card rounded-2xl p-7 md:p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 border border-brand/30 mb-5">
                  <b.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {b.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* THE 4-STEP GROWTH ROADMAP */}
      <Section
        eyebrow="Our Process"
        title="How We Take You From Discovery to Sales"
        center
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="glass-card rounded-2xl p-6">
                <div className="text-3xl font-display font-bold gradient-text mb-3">
                  {p.step}
                </div>
                <h3 className="text-lg font-display font-bold mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GUARANTEES / TRUST */}
      <Section>
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand/20 bg-gradient-to-b from-surface/80 to-surface/40">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                The BFASH Quality Guarantee
              </h3>
              <p className="text-muted-foreground text-sm">
                We believe in accountability, full visibility into performance,
                and execution that directly serves your bottom line.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <ShieldCheck className="h-8 w-8 text-brand mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">Direct Communication</h4>
                <p className="text-xs text-muted-foreground">
                  No junior intermediaries. Direct access to dedicated growth specialists.
                </p>
              </div>
              <div className="p-4">
                <Clock className="h-8 w-8 text-brand mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">Rapid Deployment</h4>
                <p className="text-xs text-muted-foreground">
                  Streamlined onboarding so campaigns launch without unnecessary delays.
                </p>
              </div>
              <div className="p-4">
                <Award className="h-8 w-8 text-brand mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">Transparent Reporting</h4>
                <p className="text-xs text-muted-foreground">
                  Live dashboards tracking tangible pipeline value, leads, and revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONVERSION FORM SECTION */}
      <div id="consultation">
        <Section
          eyebrow="Free Consultation"
          title="Request Your Custom Growth Roadmap"
          center
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-5">
                  Let's Build a Growth Engine for Your Business
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Tell us about your company and current marketing goals. We will
                  prepare a tailored roadmap outlining strategic search, advertising,
                  and conversion priorities for your brand.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Zero-pressure discovery consultation",
                    "Customized action plan delivered within 48 hours",
                    "Transparent pricing with no hidden fees",
                    "Complete audit of current marketing performance",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl border border-brand/20 bg-brand/5 p-4 text-xs text-muted-foreground">
                  Prefer direct email or phone? Reach us directly at{" "}
                  <a
                    href="mailto:info@bfash.us"
                    className="text-brand hover:underline font-medium"
                  >
                    info@bfash.us
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:+13654749647"
                    className="text-brand hover:underline font-medium"
                  >
                    +1 (365) 474-9647
                  </a>
                  .
                </div>
              </div>

              {/* REUSING YOUR CONTACT FORM */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* FAQ SECTION */}
      <Section eyebrow="Common Questions" title="Frequently Asked Questions" center>
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="glass-card rounded-xl p-6 text-left"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-base mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}