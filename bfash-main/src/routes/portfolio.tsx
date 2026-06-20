import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { TrendingUp, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BFash Solutions" },
      { name: "description", content: "Selected work across web design, SEO, branding and Amazon growth — real outcomes for ambitious brands." },
      { property: "og:title", content: "BFash Solutions — Portfolio" },
      { property: "og:description", content: "Selected case studies across our service lines." },
    ],
  }),
  component: Portfolio,
});

type Cat = "All" | "Web Design" | "SEO Results" | "Branding" | "Amazon Stores";

const projects: { title: string; client: string; category: Exclude<Cat, "All">; metric: string; gradient: string }[] = [
  { title: "Lumen Health Rebrand", client: "Wellness · 2025", category: "Branding", metric: "+62% brand recall", gradient: "from-purple-500 to-pink-500" },
  { title: "Forge & Anvil Storefront", client: "DTC · 2024", category: "Web Design", metric: "3.1x conversion lift", gradient: "from-fuchsia-500 to-violet-600" },
  { title: "Northpeak SaaS Site", client: "B2B SaaS · 2025", category: "Web Design", metric: "2.8s LCP, 96 PageSpeed", gradient: "from-indigo-500 to-purple-600" },
  { title: "GreenLeaf Organic Growth", client: "E-comm · 2024", category: "SEO Results", metric: "417% organic traffic", gradient: "from-violet-500 to-fuchsia-500" },
  { title: "Atlas Outdoor Listings", client: "Amazon · 2025", category: "Amazon Stores", metric: "TACoS 14% → 7%", gradient: "from-purple-600 to-indigo-500" },
  { title: "Vela Beauty Identity", client: "Cosmetics · 2024", category: "Branding", metric: "Launch in 6 markets", gradient: "from-pink-500 to-purple-500" },
  { title: "Helix Fitness PPC", client: "Amazon · 2025", category: "Amazon Stores", metric: "+220% revenue", gradient: "from-violet-600 to-purple-500" },
  { title: "Ravello Local SEO", client: "Hospitality · 2024", category: "SEO Results", metric: "#1 for 38 keywords", gradient: "from-fuchsia-600 to-pink-500" },
  { title: "Quill Editorial Platform", client: "Media · 2025", category: "Web Design", metric: "55% session duration", gradient: "from-indigo-600 to-violet-500" },
];

const cats: Cat[] = ["All", "Web Design", "SEO Results", "Branding", "Amazon Stores"];

function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

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
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                  backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-xs text-white">
                  <TrendingUp className="h-3 w-3" /> {p.metric}
                </div>
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
      </Section>
    </>
  );
}
