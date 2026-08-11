"use client";

import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xnpadqyq');

  if (state.succeeded) {
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

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
          <ValidationError field="email" errors={state.errors} className="text-sm text-red-400 mt-1 block" />
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
          <ValidationError field="phone" errors={state.errors} className="text-sm text-red-400 mt-1 block" />
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
          <ValidationError field="message" errors={state.errors} className="text-sm text-red-400 mt-1 block" />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-strong px-6 py-3.5 font-medium text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? (
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