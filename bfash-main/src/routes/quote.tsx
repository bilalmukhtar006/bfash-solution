import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — BFash Solutions" },
      { name: "description", content: "A short multi-step assessment to scope your project, budget, and timeline. Receive a tailored proposal within 24 hours." },
      { property: "og:title", content: "Get a Free Quote — BFash Solutions" },
      { property: "og:description", content: "Tell us about your project. Get a tailored proposal." },
    ],
  }),
  component: Quote,
});

const services = ["Website Design", "SEO", "Amazon Growth", "Graphic Design", "Other"];
const budgets = ["< $5K", "$5K – $15K", "$15K – $50K", "$50K+"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "Flexible"];

function Quote() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({ service: "", budget: "", timeline: "", name: "", email: "", company: "", details: "" });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="A few quick questions"
        subtitle="Help us tailor a precise proposal. Takes about 90 seconds."
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          {done ? (
            <div className="glass-card rounded-2xl p-12 text-center animate-fade-up">
              <CheckCircle2 className="h-16 w-16 text-brand mx-auto mb-5" />
              <h3 className="text-3xl font-display font-bold mb-3">You're all set!</h3>
              <p className="text-muted-foreground">
                Thanks {data.name || "there"} — we'll send a tailored proposal to {data.email || "your inbox"} within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center flex-1">
                    <div className={`h-9 w-9 rounded-full grid place-items-center text-sm font-semibold transition-all ${
                      i <= step ? "bg-gradient-to-br from-brand to-brand-strong text-white" : "bg-surface text-muted-foreground"
                    }`}>
                      {i < step ? <Check className="h-4 w-4" /> : i + 1}
                    </div>
                    {i < 3 && <div className={`h-px flex-1 mx-2 ${i < step ? "bg-brand" : "bg-border"}`} />}
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-8 min-h-[360px]">
                {step === 0 && (
                  <div className="animate-fade-up">
                    <h3 className="text-xl font-display font-bold mb-2">What service do you need?</h3>
                    <p className="text-muted-foreground mb-6 text-sm">Choose the closest match — we can refine later.</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {services.map((s) => (
                        <button key={s} onClick={() => setData({ ...data, service: s })}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            data.service === s ? "border-brand bg-brand/10" : "border-border hover:border-brand/40"
                          }`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div className="animate-fade-up">
                    <h3 className="text-xl font-display font-bold mb-2">What's your budget range?</h3>
                    <p className="text-muted-foreground mb-6 text-sm">No judgment — it helps us scope appropriately.</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {budgets.map((b) => (
                        <button key={b} onClick={() => setData({ ...data, budget: b })}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            data.budget === b ? "border-brand bg-brand/10" : "border-border hover:border-brand/40"
                          }`}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="animate-fade-up">
                    <h3 className="text-xl font-display font-bold mb-2">When do you want to start?</h3>
                    <p className="text-muted-foreground mb-6 text-sm">Pick a timeline that matches your launch goal.</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {timelines.map((t) => (
                        <button key={t} onClick={() => setData({ ...data, timeline: t })}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            data.timeline === t ? "border-brand bg-brand/10" : "border-border hover:border-brand/40"
                          }`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="animate-fade-up space-y-4">
                    <h3 className="text-xl font-display font-bold mb-2">Your details</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Name</Label><Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="bg-background/50" /></div>
                      <div className="space-y-2"><Label>Email</Label><Input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="bg-background/50" /></div>
                    </div>
                    <div className="space-y-2"><Label>Company</Label><Input value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} className="bg-background/50" /></div>
                    <div className="space-y-2"><Label>Project details</Label><Textarea rows={4} value={data.details} onChange={(e) => setData({ ...data, details: e.target.value })} className="bg-background/50 resize-none" /></div>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={back} disabled={step === 0} className="border-border">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                {step < 3 ? (
                  <Button onClick={next} className="bg-gradient-to-r from-brand to-brand-strong text-white border-0">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={() => setDone(true)} className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow">
                    Submit Request <Check className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
}
