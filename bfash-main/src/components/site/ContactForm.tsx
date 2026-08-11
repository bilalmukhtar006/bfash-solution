"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpadqyq";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#211536] p-8 md:p-10 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand/20">
          <CheckCircle className="h-8 w-8 text-brand" />
        </div>
        <h3 className="mb-2 text-2xl font-display font-bold text-white">
          You're all set! 🎉
        </h3>
        <p className="mx-auto max-w-sm text-muted-foreground">
          We received your message and will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#211536] p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-display font-bold gradient-text">Let's Talk</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          We'll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={submit} noValidate className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">
            Email Address <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              name="email"
              required
              placeholder="john@company.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-10 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">
            Phone Number <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="+1 234 567 890"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-10 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">
            Message <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-10 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>
        </div>

        {status === "error" && (
          <p role="alert" className="text-center text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-strong px-6 py-3.5 font-medium text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <span>Sending</span>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          We'll reply within 24 hours
        </p>
      </form>
    </div>
  );
}