import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import {
  Search,
  ShoppingCart,
  Megaphone,
  Palette,
  Monitor,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing & Business Growth Services | BFASH" },
      {
        name: "description",
        content:
          "Explore BFASH's full range of digital marketing services including SEO, e-commerce management, paid advertising, graphic design, web development, and virtual assistance.",
      },
      {
        property: "og:title",
        content: "Digital Marketing & Business Growth Services | BFASH",
      },
      {
        property: "og:description",
        content:
          "Everything needed to increase reach, leads, sales, and online growth.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://bfash.us/services" },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    to: "/services/seo",
    icon: Search,
    goal: "Increase organic visibility, traffic, and AI search presence.",
    items: [
      "Local SEO & GMB",
      "Website SEO (On-Page & Technical)",
      "AEO & GEO (AI Search Optimization)",
      "Content Marketing & Blog Posts",
      "Landing Page Optimization",
    ],
  },
  {
    title: "E-commerce & Marketplace Management",
    to: "/services/ecommerce",
    icon: ShoppingCart,
    goal: "Increase product sales across major online marketplaces.",
    items: [
      "Amazon Management",
      "eBay Store Management",
      "TikTok Shop",
      "Product Listing Optimization",
    ],
  },
  {
    title: "Paid Advertising (Ads Management)",
    to: "/services/ads",
    icon: Megaphone,
    goal: "Instant visibility, lead generation, and targeted sales.",
    items: [
      "Google Ads",
      "Social Media Ads",
      "Marketplace PPC",
      "Retargeting & Remarketing",
      "Ad Copywriting & A/B Testing",
    ],
  },
  {
    title: "Graphic & Creative Design",
    to: "/services/graphic-design",
    icon: Palette,
    goal: "Build a memorable brand and visually engaging marketing materials.",
    items: [
      "Logo & Brand Identity",
      "Social Media Graphics",
      "Marketing Collateral",
      "Packaging & Print Design",
    ],
  },
  {
    title: "Website Design & Development",
    to: "/services/web-design",
    icon: Monitor,
    goal: "Create a strong, fast, and conversion-focused online presence.",
    items: [
      "Custom Website Design",
      "E-commerce Websites",
      "Landing Page Design",
      "Website Maintenance & Support",
      "Speed & Performance Optimization",
    ],
  },
  {
    title: "Virtual Assistance & Business Support",
    to: "/services/virtual-assistance",
    icon: Headphones,
    goal: "Save time and streamline daily business operations.",
    items: [
      "Administrative Support",
      "Customer Service",
      "CRM Management",
      "Social Media Management",
      "Research & Lead Generation",
    ],
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 flex flex-col h-full border border-border/50 hover:border-brand/50 transition-colors"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong mb-6">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-display font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.goal}
              </p>

              <ul className="space-y-2 mb-8 flex-grow">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={service.to}
                className="inline-flex items-center text-brand text-sm font-semibold hover:text-brand-strong transition-colors mt-auto"
              >
                Explore service
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}