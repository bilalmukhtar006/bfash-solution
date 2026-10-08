import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { TrendingUp, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "BFASH Portfolio: Web Design, SEO & Branding" },
      {
        name: "description",
        content:
          "Selected work across web design, SEO, branding and Amazon growth — real outcomes for ambitious brands.",
      },
      { property: "og:title", content: "BFash Solutions — Portfolio" },
      { property: "og:description", content: "Selected case studies across our service lines." },
    ],
    links: [{ rel: "canonical", href: "https://bfash.us/portfolio" }],
  }),
  component: Portfolio,
});

type Cat = "All" | "Web Design" | "SEO Results" | "Branding" | "Amazon Stores";

const projects: {
  title: string;
  client: string;
  category: Exclude<Cat, "All">;
  metric: string;
  gradient: string;
  image?: string;
}[] = [
  {
    title: "Lumen Health Rebrand",
    client: "Wellness · 2025",
    category: "Branding",
    metric: "+62% brand recall",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Forge & Anvil Storefront",
    client: "DTC · 2024",
    category: "Web Design",
    metric: "3.1x conversion lift",
    gradient: "from-fuchsia-500 to-violet-600",
  },
  {
    title: "Northpeak SaaS Site",
    client: "B2B SaaS · 2025",
    category: "Web Design",
    metric: "2.8s LCP, 96 PageSpeed",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "GreenLeaf Organic Growth",
    client: "E-comm · 2024",
    category: "SEO Results",
    metric: "417% organic traffic",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Atlas Outdoor Listings",
    client: "Amazon · 2025",
    category: "Amazon Stores",
    metric: "TACoS 14% → 7%",
    gradient: "from-purple-600 to-indigo-500",
    image: "/Amazon-A-Content.webp",
  },
  {
    title: "Vela Beauty Identity",
    client: "Cosmetics · 2024",
    category: "Branding",
    metric: "Launch in 6 markets",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Helix Fitness PPC",
    client: "Amazon · 2025",
    category: "Amazon Stores",
    metric: "+220% revenue",
    gradient: "from-violet-600 to-purple-500",
    image: "/Weight-Loss-Amazon-A-Content.webp",
  },
  {
    title: "Ravello Local SEO",
    client: "Hospitality · 2024",
    category: "SEO Results",
    metric: "#1 for 38 keywords",
    gradient: "from-fuchsia-600 to-pink-500",
  },
  {
    title: "Quill Editorial Platform",
    client: "Media · 2025",
    category: "Web Design",
    metric: "55% session duration",
    gradient: "from-indigo-600 to-violet-500",
  },
  {
    title: "Beefeaters Pet Treats",
    client: "Amazon · 2025",
    category: "Amazon Stores",
    metric: "Premium A+ Content",
    gradient: "from-amber-600 to-orange-500",
    image: "/Pet-Food-Amazon-A-Content.webp",
  },
];

const cats: Cat[] = ["All", "Web Design", "SEO Results", "Branding", "Amazon Stores"];

function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work, real outcomes"
        subtitle="A snapshot of recent engagements across design, branding, SEO, and Amazon growth."
      />

      <Section>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "bg-gradient-to-r from-brand to-brand-strong text-white brand-glow"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
              >
                {/* Show image if available, otherwise show gradient pattern */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-xs text-white">
                  <TrendingUp className="h-3 w-3" /> {p.metric}
                </div>
                {/* Amazon badge for Amazon projects */}
                {p.category === "Amazon Stores" && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[#FF9900]/80 backdrop-blur px-3 py-1 text-xs text-white font-medium">
                    Amazon
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-brand mb-2">{p.category}</div>
                <h3 className="font-display font-bold text-lg mb-1">{p.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{p.client}</span>
                  <span className="inline-flex items-center gap-1 text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    View case <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-5">
            Work Across Digital Growth
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            This portfolio brings together examples of web design, brand
            identity, search optimization, and ecommerce support. Each project
            type calls for a different approach. A website project may focus
            on clearer navigation and a smoother path to contact. A design
            project may focus on consistent visuals across a brand's website,
            marketplace listings, and advertising.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Search and marketplace projects start with the business goal,
            audience, and current challenges. From there, the work can include
            research, content or listing updates, campaign management, and
            regular performance reviews. The right measures depend on the
            project, so we look at useful outcomes such as qualified leads,
            sales, visibility, and customer experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Browse the examples above by service type, then explore{" "}
            <Link to="/" className="text-brand underline hover:text-brand-strong">
              BFASH's digital growth services
            </Link>{" "}
            or contact our team to discuss a project with similar goals.
          </p>
          <h2 className="mt-10 text-2xl font-display font-bold tracking-tight mb-4">
            How We Approach Each Project
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Good digital work starts with understanding the people a business
            wants to reach. Before choosing a design direction or marketing
            tactic, we consider the offer, audience, existing website or store,
            and the action a customer should take. This helps keep the work
            connected to a real business need instead of treating design,
            search, or advertising as an isolated task.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            For a website, that can mean making information easier to find,
            improving the experience on mobile, and giving important pages a
            clearer next step. For SEO, it can mean finding relevant search
            opportunities, strengthening useful page content, and addressing
            technical issues that make a site harder to use or discover. For
            marketplace work, the focus may be product detail pages, store
            presentation, campaign structure, or a more consistent brand
            experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The examples above represent different kinds of goals and services;
            results depend on a project's starting point, scope, market, and
            measurement period. They are not a guarantee of future performance.
            If you have a similar challenge, share what you are trying to
            improve and we can discuss a suitable approach. Visit our{" "}
            <Link to="/quote" className="text-brand underline hover:text-brand-strong">
              free quote page
            </Link>{" "}
            to tell us about your project.
          </p>
          <h2 className="mt-10 text-2xl font-display font-bold tracking-tight mb-4">
            How to Evaluate Portfolio Results
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            A project metric is most useful when it is considered alongside the
            work that produced it. Conversion rate, organic traffic, page speed,
            brand recognition, and advertising efficiency measure different
            things. They should not be compared as if they share the same
            baseline or time frame. When reviewing an example, consider the
            original business challenge, the audience, the changes made, and
            how success was measured.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            The right priorities also vary by service. A web design engagement
            may focus on clear messaging, accessible navigation, mobile
            usability, and a straightforward path to contact or purchase.
            Branding work may bring consistency to a company's identity across
            its website, sales materials, and product listings. SEO work
            typically combines relevant content with technical and on-page
            improvements, while an Amazon engagement may address listing
            quality, storefront presentation, or advertising efficiency.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are considering similar work, start with the outcome your
            business needs and the obstacles preventing it today. Useful
            context can include your current website or store, the customers
            you want to reach, existing performance data, and any timing or
            budget constraints. With that information, the project scope can
            prioritize the most relevant improvements and define practical
            measures for reviewing progress.{" "}
            <Link to="/contact" className="text-brand underline hover:text-brand-strong">
              Contact BFASH
            </Link>{" "}
            to discuss your goals.
          </p>
        </div>
      </Section>
    </>
  );
}