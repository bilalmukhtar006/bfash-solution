import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center">
            {!logoError ? (
              <img
                src="/logo.webp"
                alt="BFash Solution Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-strong brand-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            )}
          </div>

          <span className="font-display text-lg font-bold tracking-tight">
            BFash <span className="text-brand">Solution</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md"
              activeProps={{
                className:
                  "px-4 py-2 text-sm font-medium text-foreground rounded-md",
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
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-brand to-brand-strong hover:opacity-90 text-white border-0 brand-glow"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-surface"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 animate-fade-up">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-sm font-medium hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              onClick={() => setOpen(false)}
              className="mt-2 bg-gradient-to-r from-brand to-brand-strong text-white"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}