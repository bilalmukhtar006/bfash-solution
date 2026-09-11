import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Palette } from "lucide-react";

export const Route = createFileRoute("/services/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic Design & Logo Design Agency for B2B Growth | BFASH" },
      {
        name: "description",
        content:
          "Looking for a top graphic design agency for B2B growth? BFASH delivers AI-driven visual design, logo design, video editing, and vector illustration for Shopify, Amazon, and eBay. Boost your traffic today.",
      },
      { property: "og:title", content: "Graphic Design & Logo Design Agency | BFASH" },
      { property: "og:description", content: "AI-driven visual identities that drive B2B sales." },
    ],
    links: [
      { rel: "canonical", href: "https://bfash.us/services/graphic-design" }
    ]
  }),
  component: () => (
    <ServicePage
      icon={Palette}
      eyebrow="Graphic & Logo Designing"
      title="Visual identities that earn attention and drive B2B sales."
      subtitle="From a single logo mark to a complete visual system — we craft the assets that make brands instantly recognizable and impossible to forget."
      intro="Senior designers, not template flippers. Every project starts with strategy and ends with a system your team can extend on their own. We combine human creativity with AI automation to deliver high-converting visual assets for Shopify, Amazon, and eBay sellers."
      features={[
        {
          title: "Brand Guidelines Development",
          desc: "A complete brand book covering logo usage, color palette, typography, voice, photography direction, and motion principles.",
        },
        {
          title: "Typography Systems",
          desc: "Custom or curated type pairings with full scale, hierarchy rules, and accessibility considerations for web, print, and motion.",
        },
        {
          title: "Custom Vector & Logo Design",
          desc: "Original logo marks, monograms, and iconography — never AI-generated, never template-derived. Built scalable from favicon to billboard.",
        },
        {
          title: "Marketing Asset Design",
          desc: "Pitch decks, social templates, ad creative, packaging, and trade-show collateral — all tied to a coherent visual system.",
        },
        {
          title: "Illustration & Motion",
          desc: "Custom illustration suites and brand-aligned micro-animations that bring static identities to life across product and marketing surfaces.",
        },
        {
          title: "AI-Powered Video & Reel Editing",
          desc: "High-converting short-form video editing for Instagram Reels, TikTok Shop, and YouTube. We use AI video creation tools to speed up workflows without losing the human touch.",
        },
      ]}
      deliverables={[
        "Primary logo & marks",
        "Color & typography system",
        "Brand guidelines PDF",
        "Editable source files",
        "Social media templates",
        "Stationery & pitch deck",
        "AI-enhanced video assets",
        "Amazon A+ / Enhanced Brand Content",
      ]}
    />
  ),
});