'use client';

import { FormEvent, useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "871b202d-31db-4929-9c44-4ab92415006e";

// Cloudflare Turnstile Site Key (replace with your actual key)
const TURNSTILE_SITE_KEY = "YOUR_TURNSTILE_SITE_KEY";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileRendered = useRef(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Load Cloudflare Turnstile script
  const loadTurnstile = () => {
    if (document.querySelector('script[src*="turnstile"]')) {
      renderTurnstile();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      renderTurnstile();
    };
  };

  const renderTurnstile = () => {
    if (!turnstileRef.current || typeof window === "undefined") return;
    if (turnstileRendered.current) return;

    // @ts-ignore
    if (window.turnstile) {
      // @ts-ignore
      window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          setTurnstileToken(token);
          setErrorMessage("");
        },
        "error-callback": () => {
          setTurnstileToken(null);
        },
        "expired-callback": () => {
          setTurnstileToken(null);
        },
        theme: "dark",
      });
      turnstileRendered.current = true;
    }
  };

  // Render Turnstile when component mounts
  useEffect(() => {
    loadTurnstile();
    return () => {
      // Cleanup
      if (typeof window !== "undefined") {
        // @ts-ignore
        if (window.turnstile) {
          // @ts-ignore
          const widgets = window.turnstile?.getWidgets?.();
          if (widgets) {
            // @ts-ignore
            widgets.forEach((id: string) => window.turnstile.remove(id));
          }
        }
      }
      turnstileRendered.current = false;
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    // Check Turnstile
    if (!turnstileToken) {
      setErrorMessage("Please complete the security check.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission from BFash",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          "cf-turnstile-response": turnstileToken,
        }),
      });

      clearTimeout(timeoutId);

      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Unable to submit. Please try again.");
      }

      setFormState(initialFormState);
      setTurnstileToken(null);
      // Reset Turnstile
      // @ts-ignore
      if (window.turnstile) {
        // @ts-ignore
        window.turnstile.reset();
      }
      setStatus("success");
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        setErrorMessage("Request timed out. Please check your connection and try again.");
      } else {
        setErrorMessage(
          error instanceof Error ? error.message : "Unable to submit. Please try again."
        );
      }
      setStatus("error");
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/20 mb-4">
          <CheckCircle className="h-8 w-8 text-brand" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">You're all set! 🎉</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          We received your message and will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold gradient-text">Let's Talk</h3>
        <p className="text-sm text-muted-foreground mt-1">
          We'll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-white/80 block mb-1.5">
            Your Name <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-white/80 block mb-1.5">
            Email Address <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-white/80 block mb-1.5">
            Message <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <textarea
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none"
            />
          </div>
        </div>

        {/* Cloudflare Turnstile */}
        <div
          ref={turnstileRef}
          className="flex justify-center py-2"
        />

        {/* Error Message */}
        {status === "error" && (
          <p className="text-sm text-red-400 text-center">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-strong text-white font-medium hover:opacity-90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "sending" ? (
            <>
              <span className="animate-pulse">Sending</span>
              <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center mt-2">
          Protected by Cloudflare Turnstile. No spam, ever.
        </p>
      </form>
    </div>
  );
}