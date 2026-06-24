import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Globe, Search, ShoppingBag, Palette, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — BFash Solutions" },
      {
        name: "description",
        content:
          "Web design, SEO, Amazon growth & branding — explore the full BFash Solutions service catalog.",
      },
      { property: "og:title", content: "BFash Solutions — Services" },
      { property: "og:description", content: "Web design, SEO, Amazon growth & branding." },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  {
    icon: Globe,
    title: "Website Designing",
    to: "/services/web-design",
    desc: "Custom, responsive, conversion-optimized websites and e-commerce experiences.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    to: "/services/seo",
    desc: "Technical SEO, on-page content, keyword strategy, and monthly analytics reporting.",
  },
  {
    icon: ShoppingBag,
    title: "Amazon Business Flourishing",
    to: "/services/amazon",
    desc: "PPC management, A+ content, listing optimization, and inventory strategy.",
  },
  {
    icon: Palette,
    title: "Graphic & Logo Designing",
    to: "/services/graphic-design",
    desc: "Brand identities, marketing assets, vector illustrations, and design systems.",
  },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One agency. Every digital lever you need to grow."
        subtitle="From your first wireframe to your hundredth product launch — we cover the full stack of modern digital growth."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group glass-card rounded-2xl p-8 hover:border-brand/50 transition-all hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <span className="inline-flex items-center text-brand text-sm font-medium">
                Explore service{" "}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
