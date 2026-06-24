import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Section";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  intro,
  features,
  deliverables,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  features: { title: string; desc: string }[];
  deliverables: string[];
  icon: LucideIcon;
}): ReactNode {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <Section>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="glass-card rounded-2xl p-8 sticky top-28">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong mb-5 brand-glow">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{intro}</p>
            <Link to="/quote">
              <Button className="w-full bg-gradient-to-r from-brand to-brand-strong text-white border-0">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-7">
                <h4 className="font-display font-bold text-lg mb-2">{f.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Deliverables" title="What you walk away with" center>
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {deliverables.map((d) => (
            <div key={d} className="flex items-start gap-3 glass-card rounded-xl p-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-sm">{d}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/quote">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow px-8 h-12"
            >
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
