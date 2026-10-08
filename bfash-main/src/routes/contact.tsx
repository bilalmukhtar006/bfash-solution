'use client';

import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock, Star, StarHalf, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BFASH | Digital Marketing & Business Growth Agency" },
      {
        name: "description",
        content:
          "Contact BFASH, a digital marketing and business growth agency for SEO, GEO, local SEO, Google Ads, social media, websites, email marketing, Amazon, and lead generation."
      },
      { property: "og:title", content: "Contact BFASH | Digital Marketing & Business Growth" },
      { property: "og:description", content: "Talk to BFASH about SEO, GEO, local SEO, paid advertising, website design, lead generation, and business growth." },
    ],
  }),
  component: Contact,
});

// ✅ YOUR REAL REVIEWS FROM GMB
const reviews = [
  {
    name: "Bob",
    rating: 5,
    text: "I've partnered with several agencies in the past, but Bfash Solution truly stands out as a top-tier performance marketing partner. They didn't just handle my SEO; they completely revamped my local search visibility and drove a noticeable spike in qualified leads within the first few weeks. What impressed me most was their data-driven approach—they provided clear monthly reports that broke down organic traffic growth, keyword rankings, and conversion rates, so I always knew exactly where my money was going. They are hands-down the best value for money in the industry, offering enterprise-level strategies at a fraction of the cost. Their team is proactive, creative, and genuinely invested in their clients' success. If you want to scale your business and dominate search results without breaking the bank, Bfash Solution is the team to trust.",
    date: "29 June 2026",
    platform: "Google",
  },
  {
    name: "Rao Zanu",
    rating: 5,
    text: "I had an excellent experience working with Bfash Solution for digital marketing services. Their team delivered outstanding results within the promised timeline and exceeded my expectations in terms of quality and professionalism. What truly sets them apart is that they are genuinely an affordable SEO Agency without compromising on performance or strategy. Communication was smooth throughout the project, and they were always responsive to my requirements. I highly recommend Bfash Solution to anyone looking for reliable, effective, and budget-friendly digital marketing services.",
    date: "26 June 2026",
    platform: "Google",
  },
  {
    name: "Sehar Ansari",
    rating: 5,
    text: "I had an excellent experience working with Bfash Solution for digital marketing services. Their team delivered outstanding results within the promised timeline and exceeded my expectations in terms of quality and professionalism. Communication was smooth throughout the project, and they were always responsive to my requirements. I highly recommend Bfash Solution to anyone looking for reliable and effective digital marketing services.",
    date: "24 June 2026",
    platform: "Google",
  },
  {
    name: "Ahmad Mehfooz",
    rating: 5,
    text: "I needed a website's landing page and this is what you got from BFash solution they are young and great even though they gave me this it's awesome to have them. They met with my requirements highly recommend!!",
    date: "22 June 2026",
    platform: "Google",
  },
];

// ✅ GMB REVIEW LINK - Used when clicking on reviews or the "Leave a Review" button
const GMB_REVIEW_LINK = "https://g.page/r/CavaEXQZnAMxEAE/review";

// ============================================================
// LINK PLACEHOLDERS — SEARCH THESE EXACT TOKENS LATER
// EXTLINK = external source/research links.
// INTLINK = internal BFASH links.
// Normal <a href> links below are intentionally DOFOLLOW.
// Do not add rel="nofollow" unless a link is intentionally not
// meant to pass normal search-engine link signals.
// ============================================================
const EXTLINK = "https://share.google/MrbmVI1RP676DI8fh";
const INTLINK = "/services/technical-seo";
const MAILING_ADDRESS = "100 Business Park Ln, Unit E, Ste US712212, Milton, Delaware 19968, United States";
const MAILING_ADDRESS_MAP_LINK = "https://www.google.com/maps/search/?api=1&query=100+Business+Park+Ln%2C+Unit+E%2C+Ste+US712212%2C+Milton%2C+Delaware+19968%2C+United+States";

// Google Maps embed link
const MAP_EMBED_LINK = "https://share.google/h0bipP823hPIO8SPA";

function Contact() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper function to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    const remaining = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-600" />);
    }
    return stars;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact BFASH"
        title="Let's find the right way to grow your business"
        subtitle="Tell us about your business, your main challenge, and your goals. We will help you find a practical next step."
      />

      <Section>
        <div className="w-full max-w-none px-1 sm:px-2 md:px-3 lg:px-4">
          <div className="grid lg:grid-cols-[0.9fr_1.5fr] gap-5 lg:gap-6">
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Talk to BFASH</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Start with your main business goal
                </h2>
                <p className="text-muted-foreground leading-7">
                  Do you need more leads, better visibility, or more online sales? Maybe your website needs work.
                  Tell us what you want to improve. You do not need to know marketing terms.
                </p>
              </div>

              {[ 
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@bfash.us",
                  href: "mailto:info@bfash.us",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (365) 474-9647",
                  href: "tel:+13654749647",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Los Angeles, CA",
                  href: "https://www.google.com/maps/place/31%C2%B029'56.1%22N+74%C2%B024'46.4%22E/@31.4989186,74.4103253,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4989186!4d74.4129002?hl=en&entry=ttu",
                },
                {
                  icon: MapPin,
                  label: "Mailing Address",
                  value: MAILING_ADDRESS,
                  href: MAILING_ADDRESS_MAP_LINK,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Fri · 9am – 7pm (EST)",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href || "#"}
                  target={c.label === "Location" || c.label === "Mailing Address" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 sm:p-5 flex items-start gap-4 hover:border-brand/50 transition-colors block"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 border border-brand/30 shrink-0">
                    <c.icon className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand mb-1">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </a>
              ))}

              {/* Google Map - IMAGE VERSION with embed link below */}
              <div className="glass-card rounded-2xl overflow-hidden">
                <a
                  href={MAP_EMBED_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full hover:opacity-95 transition-opacity"
                >
                  <img
                    src="/BFash-Google-Map.webp"
                    alt="BFASH Solutions Location Map - , Los Angeles, CA"
                    className="w-full h-auto aspect-video object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                      📍 Los Angeles, CA
                    </span>
                    <span className="text-white text-xs bg-brand/80 px-3 py-1.5 rounded-lg backdrop-blur-sm font-medium">
                      Open in Maps →
                    </span>
                  </div>
                </a>
                {/* Embed link below the image */}
                <div className="p-3 sm:p-4 border-t border-border bg-white/5">
                  <a
                    href={MAP_EMBED_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-brand" />
                    <span>View full map location</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ContactForm />

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">What happens next?</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">
                  A simple process from first conversation to growth plan
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    ["01", "Tell us about your business", "Share your website, location, services, and goals. Tell us what is getting in the way."],
                    ["02", "Explore your options", "We review your goals and find the channels that may help."],
                    ["03", "Plan your next step", "Your plan may include SEO, ads, content, website updates, or CRM support."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="rounded-xl border border-border bg-white/5 p-4">
                      <div className="text-brand font-bold mb-2">{number}</div>
                      <h3 className="font-semibold mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-6">{description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">How we can help</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Choose the services that fit your goals
                </h2>
                <p className="text-muted-foreground leading-7 mb-5">
                  We offer search, advertising, website, content, and marketplace services.
                  Your plan will depend on your business and your goals.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    ["SEO & content strategy", "/services/technical-seo", "Help customers find useful pages through search."],
                    ["GEO & AI search", "/services/technical-seo", "Make your business information clear for AI search tools."],
                    ["Local SEO", "/services/technical-seo", "Help nearby customers find your business."],
                    ["Website design", "/services/web-design", "Make your website clear and easy to use."],
                    ["Amazon business", "/services/amazon", "Improve your marketplace listings and reach."],
                    ["Graphic & logo design", "/services/graphic-design", "Build a consistent look for your business."],
                  ].map(([title, href, description]) => (
                    <a
                      key={title}
                      href={href}
                      className="rounded-xl border border-border bg-white/5 p-4 hover:border-brand/50 transition-colors"
                    >
                      <h3 className="font-semibold text-brand mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-6">{description}</p>
                    </a>
                  ))}
                </div>
                {/* INTLINK: replace/add internal service URLs above when the final site architecture is confirmed. */}
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">SEO + GEO expertise</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Help people find your business in search
                </h2>
                <div className="space-y-4 text-muted-foreground leading-7">
                  <p>
                    SEO helps people find your website in search results. GEO, or Generative Engine Optimization,
                    helps make your information easier for AI search tools to understand. Both can support your online visibility.
                  </p>
                  <p>
                    A good search plan starts with the questions your customers ask. It also considers your website,
                    local presence, useful content, and the steps visitors take to become customers.
                  </p>
                  <p>
                    We aim to give clear answers, support claims with evidence, and keep important pages easy to find.
                    We also keep information useful and up to date.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-brand/20 bg-brand/5 p-4">
                  <h3 className="font-semibold mb-2">Research perspective: Ghulam Ali</h3>
                  <p className="text-sm text-muted-foreground leading-6">
                    Ghulam Ali's SEO and GEO guidance recommends clear answers, useful sections, and evidence for important claims.
                    It also highlights making key pages easy to find and building trust beyond your website.
                  </p>
                  {/* EXTLINK: replace this research hub with the final authoritative source URL when ready. */}
                  <a
                    href={EXTLINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-brand text-sm font-medium hover:underline"
                  >
                    View supplied research source <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Topical authority</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Answer the questions your customers ask
                </h2>
                <p className="text-muted-foreground leading-7 mb-5">
                  Useful content covers related topics. It helps customers at each stage, from first learning about a need
                  to choosing a service.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    ["Learn", "What are SEO and GEO? How can marketing help?"],
                    ["Compare", "What does marketing cost? How do I choose an agency?"],
                    ["Choose", "Which service fits my needs? What happens next?"],
                  ].map(([title, questions]) => (
                    <div key={title} className="rounded-xl border border-border p-4">
                      <h3 className="font-semibold text-brand mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-6">{questions}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Local & B2B growth</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Reach local and business customers
                </h2>
                <p className="text-muted-foreground leading-7">
                  Local businesses can improve their visibility on Google Maps and in nearby searches.
                  B2B companies may need SEO, content, ads, email, and lead support over a longer sales process.
                  We can also target specific cities and services, including markets in California.
                </p>
                {/* INTLINK: replace with final local/B2B service pages when available. */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <a href="/services/technical-seo" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">SEO</a>
                  <a href="/services" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">All Services</a>
                  <a href="/about" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">About BFASH</a>
                  <a href="/portfolio" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">Portfolio</a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Research & credibility</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Make informed choices about SEO and AI
                </h2>
                <p className="text-muted-foreground leading-7">
                  Our research draws on SEO and AI-search guidance, along with academic work on generative AI.
                  These sources help us consider both the benefits and limits of AI tools.
                </p>
                <p className="text-muted-foreground leading-7 mt-4">
                  AI can help with marketing tasks, but it can also produce errors or biased information.
                  We check its work and use human judgment when making decisions.
                </p>
                {/* EXTLINK: replace each external research href with the final approved source URL. */}
                <a
                  href={EXTLINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-brand text-sm font-medium hover:underline"
                >
                  Open the supplied research material <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-brand mb-1">Client feedback</p>
                    <h2 className="text-xl md:text-2xl font-display font-bold gradient-text">What Our Clients Say</h2>
                  </div>
                  <a
                    href={GMB_REVIEW_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-sm hover:underline flex items-center gap-1"
                  >
                    View all reviews <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-5">See why clients trust BFASH with their digital growth.</p>

                <div className="grid gap-4">
                  {reviews.slice(0, 3).map((review, index) => (
                    <a
                      key={index}
                      href={GMB_REVIEW_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 rounded-lg p-4 border border-white/5 hover:bg-white/10 transition-colors block cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">{review.name}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {renderStars(review.rating)}
                            <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                          </div>
                        </div>
                        <span className="text-xs bg-brand/20 text-brand px-2 py-0.5 rounded-full">{review.platform}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{review.text}</p>
                    </a>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <div className="relative overflow-hidden">
                    <a
                      href={GMB_REVIEW_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer hover:bg-white/5 rounded-lg p-3 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {renderStars(reviews[currentReview].rating)}
                        <span className="text-xs text-muted-foreground ml-2">{reviews[currentReview].date}</span>
                      </div>
                      <p className="text-sm text-white mt-1 line-clamp-2">{reviews[currentReview].text}</p>
                      <p className="text-xs text-muted-foreground mt-1">- {reviews[currentReview].name}</p>
                    </a>
                    <div className="flex justify-center gap-1 mt-4">
                      {reviews.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Show review ${index + 1}`}
                          onClick={() => setCurrentReview(index)}
                          className={`h-1.5 w-1.5 rounded-full transition-all ${
                            index === currentReview ? "bg-brand w-4" : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Frequently asked questions</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">
                  Questions about working with BFASH
                </h2>
                <div className="space-y-3">
                  {[
                    ["What does BFASH do?", "We help businesses with SEO, ads, websites, content, ecommerce, and virtual assistance."],
                    ["How can I contact BFASH?", "Email info@bfash.us or call +1 (365) 474-9647."],
                    ["Can you help a new business?", "Yes. We can help build your website, improve search visibility, and plan your marketing."],
                    ["Can you help if my website gets little traffic?", "Yes. We can review your content, keywords, website setup, and search visibility to find areas to improve."],
                    ["Can SEO bring more visitors to my website?", "SEO can help people find useful pages in search. Results vary, and more traffic is not guaranteed."],
                    ["What is GEO?", "GEO means Generative Engine Optimization. It helps make useful information easier for AI search tools to understand."],
                    ["Is GEO replacing SEO?", "No. SEO and GEO can work together. SEO supports search results, while GEO focuses on AI-generated answers."],
                    ["Can BFASH help with AI search visibility?", "Yes. We can make your content clear, useful, and easy to access. AI tools decide which sources they use, so visibility is not guaranteed."],
                    ["Can you guarantee a mention in AI search?", "No. AI tools choose their own sources. We cannot guarantee a mention or citation."],
                    ["Why do mentions on other websites matter?", "Trusted mentions can help people learn about your business and provide useful context about your brand."],
                    ["Can BFASH help local businesses?", "Yes. We can help with local SEO, Google Business Profile, ads, and location-focused websites."],
                    ["Can BFASH help B2B companies?", "Yes. We can support B2B companies with SEO, content, ads, lead generation, CRM, and email."],
                    ["Does BFASH guarantee Google rankings?", "No. Search rankings depend on many factors, including competition, content, and changes to search systems."],
                    ["How long does SEO take?", "There is no set timeline. It depends on your website, competition, goals, and the work needed."],
                    ["Can BFASH help with Google Ads and social media ads?", "Yes. Ads can help promote products and services, reach new people, and generate leads. The best approach depends on your business."],
                    ["Why contact BFASH before choosing a service?", "The right service depends on your needs. Tell us your goal, and we can discuss which options may fit."],
                  ].map(([question, answer]) => (
                    <details key={question} className="group rounded-xl border border-border bg-white/5 px-4 py-3">
                      <summary className="cursor-pointer list-none font-semibold pr-6 relative">
                        {question}
                        <span className="absolute right-0 top-0 text-brand group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-sm text-muted-foreground leading-6 pt-3 pr-4">{answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand/30 bg-brand/10 p-6 md:p-8 text-center">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Ready to start?</p>
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
                  Tell us where you are and where you want to go.
                </h2>
                <p className="text-muted-foreground leading-7 max-w-3xl mx-auto mb-5">
                  Share your website, target market, and main goal. We will help you explore practical next steps,
                  such as SEO, local search, ads, website updates, content, or CRM support.
                </p>
                {/* INTLINK: replace with the final quote/contact conversion URL if the route changes. */}
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-black hover:opacity-90 transition-opacity"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}