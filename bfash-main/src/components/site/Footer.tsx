import { Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  MessageSquare,
} from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/services/web-design", label: "Website Designing" },
  { to: "/services/seo", label: "SEO" },
  { to: "/services/amazon", label: "Amazon Growth" },
  { to: "/services/graphic-design", label: "Graphic Design" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact Us" },
  { to: "/quote", label: "Get a Free Quote" },
  { to: "/privacy", label: "Privacy Policy" },
] as const;

const whatsappUrl = "https://wa.me/923254258512";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2">
            {/* 
              ✅ OPTIMIZED LOGO:
              - WebP format (2KB instead of 50KB)
              - width/height to prevent layout shift
              - lazy loading for better initial load
              - onError fallback to PNG if WebP fails
            */}
            <img
              src="/logo.webp"
              alt="BFash Solution Logo"
              className="h-9 w-auto object-contain"
              width={63}
              height={63}
              loading="lazy"
              onError={(e) => {
                // Fallback to PNG if WebP doesn't load
                (e.target as HTMLImageElement).src = "/logo.png";
              }}
            />

            <span className="font-display text-lg font-bold tracking-tight text-white">
              BFash <span className="text-brand">Solution</span>
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Elevating your digital potential. We build, brand, and scale modern
            businesses online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Quick Links
          </h4>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Get in Touch
          </h4>

          <ul className="space-y-3 text-sm">
            {/* Email */}
            <li>
              <a
                href="mailto:info@bfash.us"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-brand" />
                <span>info@bfash.us</span>
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact BFash Solution on WhatsApp"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-brand" />
                <span>+92 (325) 425-8512</span>
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/company/bfashsolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:border-brand hover:bg-brand"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/bfash.us/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:border-brand hover:bg-brand"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://x.com/BFashSolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:border-brand hover:bg-brand"
            >
              <Twitter className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/BFashSolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:border-brand hover:bg-brand"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:border-brand hover:bg-brand"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BFash Solution. All rights reserved.
      </div>
    </footer>
  );
}