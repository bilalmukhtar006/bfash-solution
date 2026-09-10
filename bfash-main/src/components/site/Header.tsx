import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Search,
  ShoppingCart,
  Megaphone,
  Palette,
  Monitor,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/knowledge-base-of-digital-marketing", label: "Knowledge Base" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

// UPDATED: Added "to" paths for main categories and sub-items
const serviceCategories = [
  {
    title: "Search Engine Optimization (SEO)",
    to: "/services/seo",
    icon: Search,
    goal: "Increase organic visibility, traffic, and AI search presence.",
    items: [
      { label: "Local SEO & GMB", to: "/services/seo" },
      { label: "Website SEO (On-Page & Technical)", to: "/services/seo" },
      { label: "AEO & GEO (AI Search Optimization)", to: "/services/seo" },
      { label: "Content Marketing & Blog Posts", to: "/services/seo" },
      { label: "Landing Page Optimization", to: "/services/seo" },
    ],
  },
  {
    title: "E-commerce & Marketplace Management",
    to: "/services/ecommerce",
    icon: ShoppingCart,
    goal: "Increase product sales across major online marketplaces.",
    items: [
      { label: "Amazon Management", to: "/services/ecommerce" },
      { label: "eBay Store Management", to: "/services/ecommerce" },
      { label: "TikTok Shop", to: "/services/ecommerce" },
      { label: "Product Listing Optimization", to: "/services/ecommerce" },
    ],
  },
  {
    title: "Paid Advertising (Ads Management)",
    to: "/services/ads",
    icon: Megaphone,
    goal: "Instant visibility, lead generation, and targeted sales.",
    items: [
      { label: "Google Ads", to: "/services/ads" },
      { label: "Social Media Ads", to: "/services/ads" },
      { label: "Marketplace PPC", to: "/services/ads" },
      { label: "Retargeting & Remarketing", to: "/services/ads" },
      { label: "Ad Copywriting & A/B Testing", to: "/services/ads" },
    ],
  },
  {
    title: "Graphic & Creative Design",
    to: "/services/graphic-design",
    icon: Palette,
    goal: "Build a memorable brand and visually engaging marketing materials.",
    items: [
      { label: "Logo & Brand Identity", to: "/services/graphic-design" },
      { label: "Social Media Graphics", to: "/services/graphic-design" },
      { label: "Marketing Collateral", to: "/services/graphic-design" },
      { label: "Packaging & Print Design", to: "/services/graphic-design" },
    ],
  },
  {
    title: "Website Design & Development",
    to: "/services/web-design",
    icon: Monitor,
    goal: "Create a strong, fast, and conversion-focused online presence.",
    items: [
      { label: "Custom Website Design", to: "/services/web-design" },
      { label: "E-commerce Websites", to: "/services/web-design" },
      { label: "Landing Page Design", to: "/services/web-design" },
      { label: "Website Maintenance & Support", to: "/services/web-design" },
      { label: "Speed & Performance Optimization", to: "/services/web-design" },
    ],
  },
  {
    title: "Virtual Assistance & Business Support",
    to: "/services/virtual-assistance",
    icon: Headphones,
    goal: "Save time and streamline daily business operations.",
    items: [
      { label: "Administrative Support", to: "/services/virtual-assistance" },
      { label: "Customer Service", to: "/services/virtual-assistance" },
      { label: "CRM Management", to: "/services/virtual-assistance" },
      { label: "Social Media Management", to: "/services/virtual-assistance" },
      { label: "Research & Lead Generation", to: "/services/virtual-assistance" },
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5 rounded-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="BFash Solution Home"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
              {!logoError ? (
                <img
                  src="/logo.webp"
                  alt="BFash Solution Logo"
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                  width={63}
                  height={63}
                  loading="eager"
                  decoding="async"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-strong brand-glow">
                  <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              )}
            </div>
            <span className="font-display text-xl font-bold tracking-tight whitespace-nowrap">
              BFash <span className="text-brand">Solution</span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex flex-1 items-center justify-center gap-1"
            aria-label="Main navigation"
          >
            {nav.slice(0, 2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3.5 py-2.5 text-[15px] font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-surface rounded-md whitespace-nowrap"
                activeProps={{
                  className:
                    "px-3.5 py-2.5 text-[15px] font-semibold text-foreground bg-surface rounded-md whitespace-nowrap",
                }}
                activeOptions={{
                  exact: item.to === "/",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                onFocus={() => setServicesOpen(true)}
                className={`flex items-center gap-1.5 rounded-md px-3.5 py-2.5 text-[15px] font-semibold transition-all ${
                  servicesOpen
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Mega Menu */}
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[min(1100px,calc(100vw-32px))] -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background/98 p-5 shadow-2xl backdrop-blur-xl">
                    <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <p className="text-lg font-bold text-foreground">
                          Digital Marketing & Business Growth Services
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Everything needed to increase reach, leads, sales,
                          and online growth.
                        </p>
                      </div>
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        View All Services
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {serviceCategories.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={service.title}
                            className="group rounded-xl border border-border/70 p-4 transition-all hover:border-brand/40 hover:bg-surface"
                          >
                            <div className="mb-3 flex items-start gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                              </div>
                              <div>
                                {/* UPDATED: Main title is now a clickable Link */}
                                <Link
                                  to={service.to}
                                  onClick={() => setServicesOpen(false)}
                                  className="text-sm font-bold leading-snug text-foreground hover:text-brand transition-colors"
                                >
                                  {service.title}
                                </Link>
                                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                  {service.goal}
                                </p>
                              </div>
                            </div>
                            <ul className="space-y-1.5">
                              {service.items.map((item) => (
                                <li key={item.label} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                                  {/* UPDATED: Sub-items are now clickable Links */}
                                  <Link
                                    to={item.to}
                                    onClick={() => setServicesOpen(false)}
                                    className="hover:text-brand transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {nav.slice(2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3.5 py-2.5 text-[15px] font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-surface rounded-md whitespace-nowrap"
                activeProps={{
                  className:
                    "px-3.5 py-2.5 text-[15px] font-semibold text-foreground bg-surface rounded-md whitespace-nowrap",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex h-10 bg-gradient-to-r from-brand to-brand-strong px-5 text-[15px] font-semibold text-white border-0 brand-glow shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>

            <button
              type="button"
              className="lg:hidden rounded-md p-2.5 hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background/98 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
            {nav.slice(0, 2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-[15px] font-semibold hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {item.label}
              </Link>
            ))}

            <div className="rounded-md">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-[15px] font-semibold hover:bg-surface transition-colors"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 rounded-lg bg-surface/60 p-2">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-semibold text-brand hover:bg-surface"
                  >
                    View All Services
                  </Link>
                  {serviceCategories.map((service) => (
                    <div key={service.title} className="rounded-lg border border-border/60 p-3">
                      <Link
                        to={service.to}
                        onClick={() => setOpen(false)}
                        className="text-sm font-bold text-foreground hover:text-brand block mb-1"
                      >
                        {service.title}
                      </Link>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {service.goal}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {service.items.map((item) => (
                          <li key={item.label} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                            <Link
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className="hover:text-brand transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {nav.slice(2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-[15px] font-semibold hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              onClick={() => setOpen(false)}
              className="mt-3 h-11 bg-gradient-to-r from-brand to-brand-strong text-[15px] font-semibold text-white hover:opacity-90 shadow-md"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}