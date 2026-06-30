import { Link } from "@tanstack/react-router";
import {
  Sparkles,
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

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="BFash Solution Logo" className="h-9 w-auto object-contain" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              BFash <span className="text-brand">Solution</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Elevating your digital potential. We build, brand, and scale modern businesses online.
          </p>
        </div>

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

        <div>
          <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-brand">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-brand" /> info@bfash.us
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-brand" /> +92 (325) 425-8512
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Linkedin, url: "https://www.linkedin.com/company/bfashsolution" },
              { Icon: Instagram, url: "https://www.instagram.com/bfash.us/" },
              { Icon: Twitter, url: "https://x.com/BFashSolution" },
              { Icon: Facebook, url: "https://www.facebook.com/BFashSolution" },
              { Icon: MessageSquare, url: "https://wa.me/+923254258512" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-brand hover:border-brand transition-colors"
              >
                <social.Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BFash Solution 2026. All rights reserved.
      </div>
    </footer>
  );
}
