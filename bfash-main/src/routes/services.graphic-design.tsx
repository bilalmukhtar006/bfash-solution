import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Palette } from "lucide-react";

export const Route = createFileRoute("/services/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic & Logo Designing — BFash Solutions" },
      { name: "description", content: "Brand identity, logo design, typography systems and marketing collateral crafted to make brands memorable." },
      { property: "og:title", content: "Graphic & Logo Design — BFash Solutions" },
      { property: "og:description", content: "Visual identities that leave a mark." },
    ],
  }),
  component: () => (
    <ServicePage
      icon={Palette}
      eyebrow="Graphic & Logo Designing"
      title="Brand identities that earn attention"
      subtitle="From a single logo mark to a complete visual system — we craft the assets that make brands instantly recognizable and impossible to forget."
      intro="Senior designers, not template flippers. Every project starts with strategy and ends with a system your team can extend on their own."
      features={[
        { title: "Brand Guidelines Development", desc: "A complete brand book covering logo usage, color palette, typography, voice, photography direction, and motion principles." },
        { title: "Typography Systems", desc: "Custom or curated type pairings with full scale, hierarchy rules, and accessibility considerations for web, print, and motion." },
        { title: "Custom Vector & Logo Design", desc: "Original logo marks, monograms, and iconography — never AI-generated, never template-derived. Built scalable from favicon to billboard." },
        { title: "Marketing Asset Design", desc: "Pitch decks, social templates, ad creative, packaging, and trade-show collateral — all tied to a coherent visual system." },
        { title: "Illustration & Motion", desc: "Custom illustration suites and brand-aligned micro-animations that bring static identities to life across product and marketing surfaces." },
      ]}
      deliverables={[
        "Primary logo & marks",
        "Color & typography system",
        "Brand guidelines PDF",
        "Editable source files",
        "Social media templates",
        "Stationery & pitch deck",
      ]}
    />
  ),
});
