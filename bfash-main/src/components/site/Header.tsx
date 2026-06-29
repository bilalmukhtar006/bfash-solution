import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
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
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo Icon - No image loading issues */}
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-strong brand-glow">
              <Sparkles className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              BFash <span className="text-brand">Solution</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => setQuoteOpen(true)}
              className="hidden sm:inline-flex bg-gradient-to-r from-brand to-brand-strong hover:opacity-90 text-white border-0 brand-glow"
            >
              Get a Free Quote
            </Button>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-surface"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-up">
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
                onClick={() => {
                  setOpen(false);
                  setQuoteOpen(true);
                }}
                className="mt-2 bg-gradient-to-r from-brand to-brand-strong text-white"
              >
                Get a Free Quote
              </Button>
            </nav>
          </div>
        )}
      </header>
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
}