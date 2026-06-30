'use client';

import { ArrowRight } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "871b202d-31db-4929-9c44-4ab92415006e";

export function ContactForm() {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-display font-bold mb-2 gradient-text">Send us a message</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
        <input type="hidden" name="subject" value="New Contact Form Submission from BFash" />
        <input type="hidden" name="from_name" value="BFash Solutions" />
        <input type="hidden" name="redirect" value="https://bfash.us/contact" />

        <div>
          <label className="text-sm font-medium text-white block mb-2">Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white block mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white block mb-2">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Your company (optional)"
            className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white block mb-2">Message *</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand to-brand-strong text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Send Message <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
