import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Megaphone } from "lucide-react";

export const Route = createFileRoute("/services/ads")({
  head: () => ({
    meta: [
      { title: "Paid Advertising & Ads Management — BFash Solutions" },
      {
        name: "description",
        content:
          "Expert Google Ads, social media advertising, and PPC management. We build data-driven campaigns that generate leads and sales.",
      },
      {
        property: "og:title",
        content: "Paid Advertising & Ads Management — BFash Solutions",
      },
      {
        property: "og:description",
        content:
          "Instant visibility, lead generation, and targeted sales through strategic paid advertising.",
      },
    ],
  }),
  component: () => (
    <ServicePage
      icon={Megaphone}
      eyebrow="Paid Advertising (Ads Management)"
      title="Turn ad spend into measurable revenue"
      subtitle="We build, manage, and optimize campaigns across Google, Meta, TikTok, and marketplace platforms — so every dollar works harder."
      intro="Paid advertising is not about spending more; it's about spending smarter. We focus on precise targeting, creative testing, and continuous optimization to maximize your return on ad spend."
      features={[
        {
          title: "Google Ads Management",
          desc: "Search, Display, Shopping, Performance Max, and YouTube campaigns — fully managed with keyword research, bid strategy, and conversion tracking.",
        },
        {
          title: "Social Media Advertising",
          desc: "Facebook, Instagram, LinkedIn, and TikTok ad campaigns with audience segmentation, creative strategy, and A/B testing.",
        },
        {
          title: "Marketplace PPC",
          desc: "Amazon Sponsored Products, Sponsored Brands, and eBay Promoted Listings to capture high-intent shoppers directly on the platform.",
        },
        {
          title: "Retargeting & Remarketing",
          desc: "Bring back visitors who didn't convert with dynamic remarketing campaigns across search, display, and social channels.",
        },
        {
          title: "Ad Copywriting & Creative Testing",
          desc: "Compelling ad copy, landing page alignment, and systematic A/B testing to find the winning combinations.",
        },
        {
          title: "Conversion Tracking & Analytics",
          desc: "Properly configured tracking pixels, GA4 events, and custom dashboards so you know exactly what's driving results.",
        },
      ]}
      deliverables={[
        "Full campaign strategy & setup",
        "Keyword & audience research",
        "Ad copy & creative assets",
        "Conversion tracking setup",
        "Bi-weekly optimization",
        "Monthly performance reports",
      ]}
    />
  ),
});