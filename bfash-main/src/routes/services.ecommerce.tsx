import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/services/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-commerce & Marketplace Management — BFash Solutions" },
      {
        name: "description",
        content:
          "End-to-end marketplace management for Amazon, eBay, and TikTok Shop. We optimize listings, run PPC campaigns, and scale your product sales.",
      },
      {
        property: "og:title",
        content: "E-commerce & Marketplace Management — BFash Solutions",
      },
      {
        property: "og:description",
        content:
          "Increase product sales across major online marketplaces with expert listing optimization and advertising.",
      },
    ],
  }),
  component: () => (
    <ServicePage
      icon={ShoppingCart}
      eyebrow="E-commerce & Marketplace Management"
      title="Scale your sales across every major marketplace"
      subtitle="From Amazon to TikTok Shop — we handle the strategy, listings, ads, and optimization that turn browsers into buyers."
      intro="Marketplaces are crowded and competitive. We use data-driven strategies to position your products where they get seen, clicked, and purchased — without wasting your ad spend."
      features={[
        {
          title: "Amazon Account Management",
          desc: "Full-service Amazon selling including Seller Central management, FBA logistics coordination, A+ content creation, and brand registry support.",
        },
        {
          title: "eBay Store Setup & Optimization",
          desc: "Store design, listing templates, category optimization, and seller performance monitoring to build a trusted eBay presence.",
        },
        {
          title: "TikTok Shop Management",
          desc: "Product catalog setup, affiliate program management, live selling strategy, and content optimization to tap into social commerce.",
        },
        {
          title: "Product Listing Optimization",
          desc: "Keyword-rich titles, bullet points, descriptions, and image editing — all designed to improve search ranking and conversion rate.",
        },
        {
          title: "Marketplace PPC Advertising",
          desc: "Sponsored Products, Sponsored Brands, and Sponsored Display campaigns on Amazon, plus eBay Promoted Listings and TikTok Ads.",
        },
        {
          title: "Inventory & Order Management",
          desc: "Stock monitoring, restock alerts, and order processing coordination to keep your operations running smoothly across platforms.",
        },
      ]}
      deliverables={[
        "Seller account setup & optimization",
        "Keyword-researched product listings",
        "A+ / Enhanced Brand Content",
        "PPC campaign management",
        "Monthly sales & performance reports",
        "Competitor & market analysis",
      ]}
    />
  ),
});