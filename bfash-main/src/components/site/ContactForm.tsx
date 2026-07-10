'use client';

import { ArrowRight } from "lucide-react";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "871b202d-31db-4929-9c44-4ab92415006e";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission from BFash",
          name: formState.name,
          email: formState.email,
          company: formState.company,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Unable to submit. Please try again.");
      }

      setFormState(initialFormState);
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-display font-bold mb-2 gradient-text">Send us a message</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {status === "success" ? (
        <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 text-center">
          <p className="text-lg font-medium text-white mb-2">Thanks! Your message was sent.</p>
          <p className="text-sm text-muted-foreground">
            We received your message and will reply within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className="text-sm font-medium text-white block mb-2">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
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
              value={formState.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white block mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
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
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-destructive text-left">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand to-brand-strong text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
