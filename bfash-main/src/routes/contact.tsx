import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — BFash Solutions" },
      {
        name: "description",
        content:
          "Get in touch with BFash Solutions. Book a free consultation, ask a question, or start a project.",
      },
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
              {
                icon: Mail,
                label: "Email",
                value: "info@bfash.us",
                href: "mailto:info@bfash.us",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+92 321 4602912",
                href: "tel:+923214602912",
              },
              {
                icon: MapPin,
                label: "Studio",
                value: "Innovation District · Remote-first",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Fri · 9am – 7pm (EST)",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href || "#"}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-brand/50 transition-colors block"
              >
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
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
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

          {/* SIMPLE STATIC FORM - NO REACT STATE */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-display font-bold mb-4 gradient-text">Send us a message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              target="_blank"
              className="space-y-4"
            >
              <input type="hidden" name="access_key" value="871b202d-31db-4929-9c44-4ab92415006e" />
              <div>
                <label className="text-sm font-medium text-white block mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white block mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow"
              >
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}