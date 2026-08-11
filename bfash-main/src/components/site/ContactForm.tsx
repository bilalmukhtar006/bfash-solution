"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "871b202d-31db-4929-9c44-4ab92415006e";
const TURNSTILE_SITE_KEY = "0x4AAAAAAEKr0mZEnZWnrBwm";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: any) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const initialFormState = { email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [captchaReady, setCaptchaReady] = useState(false);

  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<string | null>(null);
  const isRendered = useRef(false);

  // ✅ Load Turnstile immediately on mount
  useEffect(() => {
    const loadTurnstile = () => {
      if (isRendered.current) return;

      const script = document.querySelector<HTMLScriptElement>(
        'script[data-bfash-turnstile="1"]'
      );

      const init = () => {
        if (!captchaRef.current || !window.turnstile) {
          setTimeout(init, 200);
          return;
        }

        if (isRendered.current) return;

        try {
          widgetRef.current = window.turnstile.render(captchaRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            theme: "dark",
            callback: (value: string) => {
              setToken(value);
              setCaptchaReady(true);
            },
            "error-callback": () => {
              setToken(null);
              setCaptchaReady(false);
            },
            "expired-callback": () => {
              setToken(null);
              setCaptchaReady(false);
            },
          });
          isRendered.current = true;
          setCaptchaReady(true);
        } catch (err) {
          console.error("Turnstile render error:", err);
        }
      };

      if (!script) {
        const newScript = document.createElement("script");
        newScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        newScript.async = true;
        newScript.defer = true;
        newScript.dataset.bfashTurnstile = "1";
        newScript.onload = init;
        newScript.onerror = () => {
          setError("Security service unavailable. Please refresh.");
          setStatus("error");
        };
        document.head.appendChild(newScript);
      } else {
        init();
      }
    };

    loadTurnstile();

    return () => {
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetRef.current);
        } catch {}
      }
      widgetRef.current = null;
      isRendered.current = false;
    };
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please complete all required fields.");
      setStatus("error");
      return;
    }

    if (!token) {
      setError("Please complete the security check.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    // ✅ 15-second timeout to prevent freezing
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission from BFash",
          from_name: "BFash Website",
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          "cf-turnstile-response": token,
          botcheck: "",
        }),
      });

      clearTimeout(timeoutId);

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message || "Unable to submit. Please try again.");
      }

      setForm(initialFormState);
      setToken(null);
      setCaptchaReady(false);
      setStatus("success");

      // Reset Turnstile
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetRef.current);
        } catch {}
      }
      isRendered.current = false;
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === "AbortError") {
        setError("Request timed out. Please check your connection.");
      } else {
        setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
      }
      setStatus("error");

      // Reset Turnstile on error
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetRef.current);
        } catch {}
      }
      setToken(null);
      setCaptchaReady(false);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#211536] p-8 md:p-10 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand/20">
          <CheckCircle className="h-8 w-8 text-brand" />
        </div>
        <h3 className="mb-2 text-2xl font-display font-bold text-white">
          You&apos;re all set! 🎉
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
        <h3 className="text-2xl font-display font-bold gradient-text">Let&apos;s Talk</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll get back to you within 24 hours
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
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={change}
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
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={form.phone}
              onChange={change}
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
              value={form.message}
              onChange={change}
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-10 text-white placeholder:text-muted-foreground outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50"
            />
          </div>
        </div>

        {/* Turnstile - Always visible */}
        <div className="flex min-h-[65px] justify-center py-2">
          <div ref={captchaRef} />
        </div>

        {status === "error" && (
          <p role="alert" className="text-center text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending" || !captchaReady}
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
          Protected by Cloudflare Turnstile. No spam, ever.
        </p>
      </form>
    </div>
  );
}