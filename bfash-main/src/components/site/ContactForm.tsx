"use client";

export function ContactForm() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#211536] p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-display font-bold gradient-text">Let's Talk</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          We'll get back to you within 24 hours
        </p>
      </div>

      {/* ✅ PLAIN HTML FORM — NO REACT STATE, NO TURNSTILE */}
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="871b202d-31db-4929-9c44-4ab92415006e" />

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Email Address <span className="text-brand">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@company.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Phone Number <span className="text-brand">*</span>
            </label>
            <input
              type="text"
              name="phone"
              required
              placeholder="+1 234 567 890"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Message <span className="text-brand">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-strong px-6 py-3.5 font-medium text-white transition-all hover:opacity-90"
          >
            Send Message
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        ⚠️ TEST MODE — No Turnstile, plain HTML form
      </p>
    </div>
  );
}