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
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="BFash Solution Logo"
              className="h-9 w-auto object-contain"
            />

            <span className="font-display text-lg font-bold tracking-tight text-white">
              BFash <span className="text-brand">Solution</span>
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Elevating your digital potential. We build, brand, and scale modern
            businesses online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-brand">
            Quick Links
          </h4>

          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-brand">
            Get in Touch
          </h4>

          <ul className="space-y-3 text-sm">
            {/* Email */}
            <li>
              <a
                href="mailto:info@bfash.us"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-brand" />
                <span>info@bfash.us</span>
              </a>
            </li>

            {/* Phone → WhatsApp */}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact BFash Solution on WhatsApp"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-brand" />
                <span>+92 (325) 425-8512</span>
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-3 mt-5">
            {[
              {
                Icon: Linkedin,
                url: "https://www.linkedin.com/company/bfashsolution",
                label: "LinkedIn",
              },
              {
                Icon: Instagram,
                url: "https://www.instagram.com/bfash.us/",
                label: "Instagram",
              },
              {
                Icon: Twitter,
                url: "https://x.com/BFashSolution",
                label: "X",
              },
              {
                Icon: Facebook,
                url: "https://www.facebook.com/BFashSolution",
                label: "Facebook",
              },
              {
                Icon: MessageSquare,
                url: whatsappUrl,
                label: "WhatsApp",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-brand hover:border-brand transition-colors"
              >
                <social.Icon className="h-4 w-4" />
              </a>
            ))}
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