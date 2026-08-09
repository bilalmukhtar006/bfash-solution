// src/components/site/ContactForm.tsx
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "871b202d-31db-4929-9c44-4ab92415006e";

// Cloudflare Turnstile SITE KEY.
// The secret key must NEVER be placed in this client-side file.
const TURNSTILE_SITE_KEY = "0x4AAAAAAEKr0mZEnZWnrBwm";

type TurnstileInstance = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme?: "auto" | "light" | "dark";
      size?: "normal" | "flexible" | "compact";
      action?: string;
      callback?: (token: string) => void;
      "error-callback"?: (error?: unknown) => void;
      "expired-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileInstance;
  }
}

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const scriptPromise = useRef<Promise<void> | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear an old error as soon as the visitor edits the form.
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  /**
   * Load Cloudflare Turnstile once.
   *
   * This is deliberately inside useEffect rather than useState so browser-only
   * DOM operations never execute during SSR.
   */
  useEffect(() => {
    let cancelled = false;

    const renderTurnstile = () => {
      if (
        cancelled ||
        !turnstileRef.current ||
        !window.turnstile ||
        turnstileWidgetId.current
      ) {
        return;
      }

      try {
        turnstileWidgetId.current = window.turnstile.render(
          turnstileRef.current,
          {
            sitekey: TURNSTILE_SITE_KEY,
            theme: "dark",
            size: "flexible",
            action: "contact",
            callback: (token: string) => {
              setTurnstileToken(token);
              setStatus((current) =>
                current === "error" ? "idle" : current,
              );
              setErrorMessage("");
            },
            "error-callback": (error) => {
              console.error("Cloudflare Turnstile error:", error);
              setTurnstileToken(null);
              setErrorMessage(
                "Security verification could not be loaded. Please refresh the page and try again.",
              );
              setStatus("error");
            },
            "expired-callback": () => {
              setTurnstileToken(null);
              setErrorMessage(
                "Your security verification expired. Please complete it again.",
              );
              setStatus("error");
            },
          },
        );
      } catch (error) {
        console.error("Failed to render Cloudflare Turnstile:", error);
        setTurnstileToken(null);
        setErrorMessage(
          "Security verification could not be initialized. Please refresh the page and try again.",
        );
        setStatus("error");
      }
    };

    const loadScript = (): Promise<void> => {
      if (window.turnstile) {
        return Promise.resolve();
      }

      if (scriptPromise.current) {
        return scriptPromise.current;
      }

      scriptPromise.current = new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector<HTMLScriptElement>(
          'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
        );

        if (existingScript) {
          // The script may already be loading.
          const checkReady = () => {
            if (window.turnstile) {
              resolve();
            } else {
              reject(new Error("Turnstile script loaded without API."));
            }
          };

          existingScript.addEventListener("load", checkReady, { once: true });
          existingScript.addEventListener(
            "error",
            () => reject(new Error("Unable to load Turnstile.")),
            { once: true },
          );

          // It may have finished before the listeners were attached.
          if (window.turnstile) {
            resolve();
          }

          return;
        }

        const script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;

        script.onload = () => {
          if (window.turnstile) {
            resolve();
          } else {
            reject(new Error("Turnstile API is unavailable."));
          }
        };

        script.onerror = () => {
          reject(new Error("Unable to load Cloudflare Turnstile."));
        };

        document.head.appendChild(script);
      });

      return scriptPromise.current;
    };

    loadScript()
      .then(() => {
        if (!cancelled) {
          renderTurnstile();
        }
      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) {
          setErrorMessage(
            "Security verification could not be loaded. Please refresh the page and try again.",
          );
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;

      if (turnstileWidgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(turnstileWidgetId.current);
        } catch (error) {
          console.warn("Could not remove Turnstile widget:", error);
        }
      }

      turnstileWidgetId.current = null;
      setTurnstileToken(null);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") return;

    setErrorMessage("");

    if (!formState.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    if (!formState.email.trim()) {
      setErrorMessage("Please enter your email address.");
      setStatus("error");
      return;
    }

    if (!formState.message.trim()) {
      setErrorMessage("Please enter a message.");
      setStatus("error");
      return;
    }

    if (!turnstileToken) {
      setErrorMessage("Please complete the security check.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission from BFash",
          from_name: "BFash Website",
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),

          // Cloudflare Turnstile token.
          "cf-turnstile-response": turnstileToken,

          // Honeypot spam field.
          botcheck: "",
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.message ||
            "Unable to submit your message. Please try again.",
        );
      }

      setFormState(initialFormState);
      setStatus("success");
      setTurnstileToken(null);

      if (turnstileWidgetId.current && window.turnstile) {
        try {
          window.turnstile.reset(turnstileWidgetId.current);
        } catch (error) {
          console.warn("Could not reset Turnstile widget:", error);
        }
      }
    } catch (error) {
      console.error("Contact form submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your message. Please try again.",
      );
      setStatus("error");

      if (turnstileWidgetId.current && window.turnstile) {
        try {
          window.turnstile.reset(turnstileWidgetId.current);
        } catch (resetError) {
          console.warn("Could not reset Turnstile widget:", resetError);
        }
      }

      setTurnstileToken(null);
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/20 mb-4">
          <CheckCircle className="h-8 w-8 text-brand" />
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-2">
          You&apos;re all set! 🎉
        </h3>

        <p className="text-muted-foreground max-w-sm mx-auto">
          We received your message and will reply within one business day.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold gradient-text">
          Let&apos;s Talk
        </h3>

        <p className="text-sm text-muted-foreground mt-1">
          We&apos;ll get back to you within 24 hours
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
              autoComplete="name"
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
              autoComplete="email"
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
          className="flex justify-center py-2 min-h-[65px]"
        />

        {/* Error */}
        {status === "error" && (
          <p
            role="alert"
            className="text-sm text-red-400 text-center"
          >
            {errorMessage}
          </p>
        )}

        {/* Submit */}
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