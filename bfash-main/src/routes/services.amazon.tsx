import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/services/amazon")({
  head: () => ({
    meta: [
      { title: "Amazon Business Flourishing — BFash Solutions" },
      {
        name: "description",
        content:
          "Amazon PPC management, A+ content, listing optimization & inventory strategy for sellers ready to scale.",
      },
      { property: "og:title", content: "Amazon Growth Services — BFash Solutions" },
      {
        property: "og:description",
        content: "Scale your Amazon storefront with proven specialists.",
      },
    ],
  }),
  component: () => (
    <ServicePage
      icon={ShoppingBag}
      eyebrow="Amazon Business Flourishing"
      title="Scale your Amazon storefront, profitably"
      subtitle="Full-funnel Amazon management — from listing copy to ad spend to inventory cadence — handled by sellers who have built and sold their own brands."
      intro="We treat your store like our own P&L. Every recommendation balances velocity, margin, and brand longevity."
      features={[
        {
          title: "Amazon PPC Management",
          desc: "Sponsored Products, Brands, and Display campaigns built on a TACoS-first framework. Daily bid optimization, weekly negative harvesting, monthly portfolio reviews.",
        },
        {
          title: "A+ Content Implementation",
          desc: "Modular A+ and Brand Story modules designed for conversion and cross-sell — built with on-brand photography, lifestyle imagery, and comparison charts.",
        },
        {
          title: "Listing Keyword Optimization",
          desc: "Backend, title, bullet, and description optimization driven by Helium 10 and Brand Analytics data — not guesswork. Localized for every marketplace you serve.",
        },
        {
          title: "Store & Inventory Strategy",
          desc: "Storefront design, category planning, and inventory forecasting that prevents stockouts and protects your IPI score.",
        },
        {
          title: "Brand Registry & Defense",
          desc: "Brand Registry enrollment, hijacker takedowns, and counterfeit enforcement so your hard-earned ranking stays yours.",
        },
      ]}
      deliverables={[
        "Full account audit",
        "PPC campaign rebuild",
        "A+ Content for top SKUs",
        "Optimized listing copy",
        "Brand storefront design",
        "Weekly performance reports",
      ]}
    />
  ),
});
