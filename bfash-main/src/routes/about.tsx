import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Compass,
  PencilRuler,
  Rocket,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — BFash Solutions" },
      {
        name: "description",
        content:
          "Meet the team behind BFash Solutions — our mission, values, and the process we use to deliver award-worthy digital work.",
      },
      { property: "og:title", content: "About BFash Solutions" },
      {
        property: "og:description",
        content: "Mission, values and process behind a premium digital agency.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Craft Over Quantity",
    desc: "Every pixel, line of code, and word is intentional. We obsess over the details others overlook.",
  },
  {
    icon: Target,
    title: "Outcomes First",
    desc: "Beautiful work is the baseline. Measurable growth is the goal — and the only thing we ship for.",
  },
  {
    icon: Lightbulb,
    title: "Curious by Default",
    desc: "The digital landscape never stops evolving. Neither do we — we learn, test, and adapt constantly.",
  },
  {
    icon: Users,
    title: "Built on Partnership",
    desc: "Your wins are our wins. We embed with your team, not above it, to build something lasting.",
  },
];

const steps = [
  {
    icon: Compass,
    title: "Discover",
    desc: "Deep-dive workshops to understand your business, customers, competitors, and growth ceiling.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    desc: "Strategy translates into wireframes, brand systems, and conversion-focused experiences.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    desc: "Pixel-perfect engineering, content production, and launch coordination across every channel.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    desc: "Data informs the next sprint. We iterate monthly with full transparency and shared dashboards.",
  },
];

const team = [
  { name: "Bilal Fashan", role: "Founder & Strategy Director" },
  { name: "Aisha Khan", role: "Head of Design" },
  { name: "Daniel Reyes", role: "SEO & Growth Lead" },
  { name: "Sara Lin", role: "Amazon Specialist" },
  { name: "Marcus Webb", role: "Lead Developer" },
  { name: "Nora Patel", role: "Client Success" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We turn ambitious brands into category leaders"
        subtitle="BFash Solutions is a full-service digital agency. We pair strategic thinking with sharp execution to help founders, marketers, and operators win online."
      />

      <Section
        title="Our Mission"
        subtitle="To make world-class digital craftsmanship — strategy, design, engineering, and growth — accessible to brands ready to scale, without the bloat of a traditional agency."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 border border-brand/30 mb-4">
                <v.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our Process" title="A framework built for clarity and momentum" center>
        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent hidden md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-strong brand-glow mb-4">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-xs uppercase tracking-wider text-brand mb-1">Step {i + 1}</div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="The Team" title="Meet the people building it with you" center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand to-brand-strong grid place-items-center text-2xl font-display font-bold text-white mb-4">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-display font-bold">{t.name}</h3>
              <p className="text-sm text-brand">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
