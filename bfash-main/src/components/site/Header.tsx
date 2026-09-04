import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/knowledge-base-of-digital-marketing", label: "Knowledge Base" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 border-b border-border shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
          aria-label="BFash Solution Home"
        >
          <div className="flex h-9 w-9 items-center justify-center flex-shrink-0">
            {!logoError ? (
              <img
                src="/logo.webp"
                alt="BFash Solution Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                width={63}
                height={63}
                loading="eager"
                decoding="async"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-strong brand-glow">
                <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
            )}
          </div>

          <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
            BFash <span className="text-brand">Solution</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-surface rounded-md"
              activeProps={{
                className:
                  "px-3.5 py-2 text-sm font-medium text-foreground bg-surface rounded-md",
              }}
              activeOptions={{
                exact: item.to === "/",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-brand to-brand-strong hover:opacity-90 text-white border-0 brand-glow shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/90 animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col p-4 gap-0.5" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-sm font-medium hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              onClick={() => setOpen(false)}
              className="mt-3 bg-gradient-to-r from-brand to-brand-strong text-white hover:opacity-90 shadow-md"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}