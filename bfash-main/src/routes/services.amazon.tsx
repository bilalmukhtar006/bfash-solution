import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Section } from "@/components/site/Section";
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
    links: [{ rel: "canonical", href: "https://bfash.us/services/amazon" }],
  }),
  component: AmazonServicePage,
});

function AmazonServicePage() {
  return (
    <>
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
      <Section eyebrow="Marketplace Growth" title="Build a stronger Amazon business">
        <div className="mx-auto max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-5">
            Sustainable Amazon growth depends on more than advertising. Product
            pages need clear information and useful images. Campaigns need to
            reach relevant shoppers at a cost the business can support.
            Inventory plans also matter because unavailable products can lose
            sales and momentum.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH can review your catalog, listings, storefront, and ad account
            to find practical opportunities. We help improve listing content,
            organize campaigns, monitor performance, and plan updates around
            your products and goals. Recommendations can focus on priority
            products first, then expand as the account develops.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If your business sells across several channels, explore our{" "}
            <Link
              to="/services/ecommerce"
              className="text-brand underline hover:text-brand-strong"
            >
              ecommerce marketing services
            </Link>{" "}
            for support with Amazon, Shopify, and eBay.
          </p>
        </div>
      </Section>
    </>
  );
}
