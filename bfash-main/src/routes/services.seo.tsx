import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Search } from "lucide-react";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "Search Engine Optimization — BFash Solutions" },
      {
        name: "description",
        content:
          "Technical SEO, on-page content, keyword strategy & monthly reporting that drives consistent organic traffic.",
      },
      { property: "og:title", content: "SEO Services — BFash Solutions" },
      {
        property: "og:description",
        content: "Data-driven SEO strategies that move you to page one.",
      },
    ],
  }),
  component: () => (
    <ServicePage
      icon={Search}
      eyebrow="Search Engine Optimization"
      title="Rank where your customers actually search"
      subtitle="Sustainable, white-hat SEO programs that compound month after month. No black boxes — every decision is mapped to a metric you can read."
      intro="Technical, content, and authority — covered end-to-end by a senior SEO team that has shipped programs for SaaS, e-commerce, and local brands."
      features={[
        {
          title: "Technical SEO Audits",
          desc: "Crawl health, Core Web Vitals, schema markup, indexation control, and site architecture audited line-by-line with prioritized fixes.",
        },
        {
          title: "On-Page Content Generation",
          desc: "Editorial-grade content briefs and execution — written by experts, optimized for intent, and aligned to your funnel stages.",
        },
        {
          title: "Keyword Research & Mapping",
          desc: "Opportunity-sized keyword clusters mapped to URLs, with difficulty, intent, and revenue forecasts you can take to the board.",
        },
        {
          title: "Authority & Link Building",
          desc: "Earned outreach, digital PR, and strategic partnerships — never spam, never PBNs. Built to survive every algorithm update.",
        },
        {
          title: "Monthly Analytics Reporting",
          desc: "Live dashboards plus a human-written monthly report. You'll know exactly what we did, what worked, and what's next.",
        },
      ]}
      deliverables={[
        "Full technical SEO audit",
        "Keyword strategy roadmap",
        "Monthly content production",
        "Live performance dashboard",
        "Quarterly strategy review",
        "Direct Slack access",
      ]}
    />
  ),
});
