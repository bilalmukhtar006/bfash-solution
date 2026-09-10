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

const serviceCategories = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    goal: "Increase organic visibility, traffic, and AI search presence.",
    items: [
      "Local SEO & GMB",
      "Website SEO (On-Page & Technical)",
      "AEO & GEO (AI Search Optimization)",
      "Content Marketing & Blog Posts",
      "Landing Page Optimization",
    ],
  },
  {
    title: "E-commerce & Marketplace Management",
    icon: ShoppingCart,
    goal: "Increase product sales across major online marketplaces.",
    items: [
      "Amazon Management",
      "eBay Store Management",
      "TikTok Shop",
      "Product Listing Optimization",
    ],
  },
  {
    title: "Paid Advertising (Ads Management)",
    icon: Megaphone,
    goal: "Instant visibility, lead generation, and targeted sales.",
    items: [
      "Google Ads",
      "Social Media Ads",
      "Marketplace PPC",
      "Retargeting & Remarketing",
      "Ad Copywriting & A/B Testing",
    ],
  },
  {
    title: "Graphic & Creative Design",
    icon: Palette,
    goal: "Build a memorable brand and visually engaging marketing materials.",
    items: [
      "Logo & Brand Identity",
      "Social Media Graphics",
      "Marketing Collateral",
      "Packaging & Print Design",
    ],
  },
  {
    title: "Website Design & Development",
    icon: Monitor,
    goal: "Create a strong, fast, and conversion-focused online presence.",
    items: [
      "Custom Website Design",
      "E-commerce Websites",
      "Landing Page Design",
      "Website Maintenance & Support",
      "Speed & Performance Optimization",
    ],
  },
  {
    title: "Virtual Assistance & Business Support",
    icon: Headphones,
    goal: "Save time and streamline daily business operations.",
    items: [
      "Administrative Support",
      "Customer Service",
      "CRM Management",
      "Social Media Management",
      "Research & Lead Generation",
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

  // Close mobile menu with Escape
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

  // Prevent body scrolling while mobile menu is open
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
      {/* ============================================================
          DESKTOP / MAIN HEADER
          ============================================================ */}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          {/* ========================================================
              LOGO
              ======================================================== */}

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
                  <Sparkles
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>

            <span className="font-display text-xl font-bold tracking-tight whitespace-nowrap">
              BFash <span className="text-brand">Solution</span>
            </span>
          </Link>

          {/* ========================================================
              DESKTOP NAVIGATION
              ======================================================== */}

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

            {/* ======================================================
                SERVICES DROPDOWN
                ====================================================== */}

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
                                <Icon
                                  className="h-4.5 w-4.5"
                                  aria-hidden="true"
                                />
                              </div>

                              <div>
                                <h3 className="text-sm font-bold leading-snug text-foreground">
                                  {service.title}
                                </h3>

                                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                  {service.goal}
                                </p>
                              </div>
                            </div>

                            <ul className="space-y-1.5">
                              {service.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                                  <span>{item}</span>
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

            {/* Remaining navigation */}
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

          {/* ========================================================
              RIGHT SIDE / QUOTE BUTTON
              ======================================================== */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex h-10 bg-gradient-to-r from-brand to-brand-strong px-5 text-[15px] font-semibold text-white border-0 brand-glow shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>

            {/* Mobile Menu Button */}
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

      {/* ============================================================
          MOBILE NAVIGATION
          ============================================================ */}

      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background/98 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav
            className="flex flex-col gap-1 p-4"
            aria-label="Mobile navigation"
          >
            {/* Main links */}
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

            {/* Mobile Services */}
            <div className="rounded-md">
              <button
                type="button"
                onClick={() =>
                  setMobileServicesOpen((value) => !value)
                }
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
                    <div
                      key={service.title}
                      className="rounded-lg border border-border/60 p-3"
                    >
                      <h3 className="text-sm font-bold text-foreground">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {service.goal}
                      </p>

                      <ul className="mt-2 space-y-1">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining links */}
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

            {/* Mobile quote */}
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