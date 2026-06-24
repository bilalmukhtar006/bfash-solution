import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Globe } from "lucide-react";

export const Route = createFileRoute("/services/web-design")({
  head: () => ({
    meta: [
      { title: "Website Designing — BFash Solutions" },
      {
        name: "description",
        content:
          "Custom website design and development — responsive UI/UX, e-commerce, and high-conversion experiences.",
      },
      { property: "og:title", content: "Website Designing — BFash Solutions" },
      { property: "og:description", content: "Custom, responsive, conversion-optimized websites." },
    ],
  }),
  component: () => (
    <ServicePage
      icon={Globe}
      eyebrow="Website Designing"
      title="Websites engineered to convert"
      subtitle="Custom design and development that turns traffic into revenue. Built mobile-first, optimized end-to-end, and made to scale with your business."
      intro="From marketing sites to full e-commerce platforms — we ship websites that look stunning and perform under real-world traffic."
      features={[
        {
          title: "Custom Development",
          desc: "Hand-coded, framework-modern websites built on TanStack Start, Next.js, or Shopify — never bloated page-builders. Lighthouse scores that pass investor due-diligence.",
        },
        {
          title: "UI/UX Architecture",
          desc: "Information architecture, wireframing, prototyping, and accessibility audits driven by real user research — not designer instinct.",
        },
        {
          title: "Responsive Optimization",
          desc: "Fluid layouts tested across every breakpoint, browser, and device. Your mobile experience gets the same craft as desktop.",
        },
        {
          title: "E-commerce Setups",
          desc: "Shopify, WooCommerce, and headless commerce stacks tuned for checkout conversion, repeat purchase, and operational efficiency.",
        },
        {
          title: "Performance & SEO Foundations",
          desc: "Core Web Vitals built in from day one — image pipelines, edge rendering, semantic HTML, and structured data baked into every build.",
        },
      ]}
      deliverables={[
        "Full visual design system (Figma)",
        "Production-ready website",
        "CMS configuration & training",
        "Analytics & tracking setup",
        "Performance audit report",
        "30-day post-launch support",
      ]}
    />
  ),
});
