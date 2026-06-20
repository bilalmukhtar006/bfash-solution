import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — BFash Solutions" },
      { name: "description", content: "Get in touch with BFash Solutions. Book a free consultation, ask a question, or start a project." },
      { property: "og:title", content: "Contact BFash Solutions" },
      { property: "og:description", content: "Book a free consultation or start a project today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Tell us about your goals. We'll respond within one business day with next steps."
      />

      <Section>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@bfashsolutions.com", href: "mailto:hello@bfashsolutions.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 010-2030", href: "tel:+15550102030" },
              { icon: MapPin, label: "Studio", value: "Innovation District · Remote-first" },
              { icon: Clock, label: "Hours", value: "Mon–Fri · 9am – 7pm (EST)" },
            ].map((c) => (
              <a key={c.label} href={c.href || "#"}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-brand/50 transition-colors block">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 border border-brand/30 shrink-0">
                  <c.icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand mb-1">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-2xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-brand-strong/20 to-transparent" />
              <div className="absolute inset-0" style={{
                backgroundImage:
                  "linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 grid place-items-center rounded-full bg-gradient-to-br from-brand to-brand-strong brand-glow animate-pulse-glow mb-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="font-display font-bold">BFash HQ</div>
                  <div className="text-sm text-muted-foreground">Find us on the map</div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
