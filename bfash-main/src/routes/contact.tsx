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
const INTLINK = "/services/seo";

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
        title="Let's build a smarter growth strategy for your business"
        subtitle="Tell us what your business does, what is not working, and where you want to go. BFASH can help identify the right digital marketing, SEO, GEO, website, advertising, or business growth opportunity."
      />

      <Section>
        <div className="w-full max-w-none px-1 sm:px-2 md:px-3 lg:px-4">
          <div className="grid lg:grid-cols-[0.9fr_1.5fr] gap-5 lg:gap-6">
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Talk to BFASH</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Digital marketing starts with the right business problem
                </h2>
                <p className="text-muted-foreground leading-7">
                  Whether the goal is more qualified leads, stronger Google visibility, better local search performance,
                  more online sales, AI-search visibility, or a website that converts visitors into customers, start by
                  telling us what the business needs. You do not need to know complicated marketing terminology.
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
                  label: "Phone / WhatsApp",
                  value: "+92 325 4258512",
                  href: "https://wa.me/+923254258512",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Lahore, Punjab, Pakistan",
                  href: "https://www.google.com/maps/place/31%C2%B029'56.1%22N+74%C2%B024'46.4%22E/@31.4989186,74.4103253,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4989186!4d74.4129002?hl=en&entry=ttu",
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
                  target={c.label === "Phone / WhatsApp" || c.label === "Location" ? "_blank" : "_self"}
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

              {/* Google Map */}
              <div className="glass-card rounded-2xl overflow-hidden aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1140.9647669446642!2d74.4103253!3d31.4989186!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="BFASH Solutions Location Map"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
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
                    ["01", "Tell us about the business", "Share the website, market, location, services, current marketing, challenges, and goals."],
                    ["02", "Identify the opportunity", "We look at the business objective and the channels that can realistically support it."],
                    ["03", "Choose the next step", "The next step may involve SEO, GEO, local SEO, ads, content, website work, CRM, or another growth service."],
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
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Digital marketing services</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  One growth strategy, connected across the right channels
                </h2>
                <p className="text-muted-foreground leading-7 mb-5">
                  BFASH helps businesses connect search visibility, AI-search readiness, local discovery, paid media,
                  websites, content, social media, email, CRM, marketplaces, and conversion opportunities. The right mix
                  depends on the business rather than forcing every company into the same marketing package.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    ["SEO & content strategy", "/services/seo", "Build relevant organic visibility around customer search intent."],
                    ["GEO & AI-search visibility", "/services/seo", "Create clear, evidence-backed information that is easier for search and AI systems to understand."],
                    ["Local SEO & Google visibility", "/services/seo", "Improve local discovery for customers searching by service and location."],
                    ["Website design", "/services/web-design", "Create a clear, conversion-focused digital experience for visitors and prospects."],
                    ["Amazon business", "/services/amazon", "Support marketplace visibility and e-commerce growth opportunities."],
                    ["Graphic & logo design", "/services/graphic-design", "Strengthen visual identity across digital touchpoints."],
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
                  Search visibility now includes traditional search and AI-powered discovery
                </h2>
                <div className="space-y-4 text-muted-foreground leading-7">
                  <p>
                    Traditional SEO helps a business earn visibility in search results, while Generative Engine Optimization
                    (GEO) focuses on making useful business information easier for AI-powered search systems to understand
                    and potentially include in generated answers. These approaches work together rather than replacing one another.
                  </p>
                  <p>
                    A modern search strategy can connect keyword research, search intent, topical coverage, technical SEO,
                    internal linking, local signals, authoritative mentions, useful content, and conversion paths. The goal
                    is not simply more traffic. The goal is to attract the right audience and make it easier for that audience
                    to understand why the business is relevant.
                  </p>
                  <p>
                    The supplied SEO/GEO research also emphasizes direct answers, real user questions, scannable structure,
                    evidence-backed claims, crawlability, indexing, fresh information, and trustworthy external mentions.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-brand/20 bg-brand/5 p-4">
                  <h3 className="font-semibold mb-2">Research perspective: Ghulam Ali</h3>
                  <p className="text-sm text-muted-foreground leading-6">
                    Ghulam Ali's supplied SEO and GEO guidance emphasizes answering real questions directly, organizing content
                    into clear sections, supporting claims with evidence, keeping important pages technically discoverable,
                    and building trusted visibility beyond the website itself.
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
                  Useful content should answer the questions customers actually ask
                </h2>
                <p className="text-muted-foreground leading-7 mb-5">
                  A strong digital presence is not built from disconnected blog posts. It is built around related topics and
                  the questions customers ask before, during, and after a buying decision.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    ["Discovery", "What is SEO? What is GEO? How can digital marketing help a business?"],
                    ["Evaluation", "How much does digital marketing cost? What should a business look for in an agency?"],
                    ["Decision", "Which service is right for the business? What should happen next?"],
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
                  Digital marketing should match the market and customer journey
                </h2>
                <p className="text-muted-foreground leading-7">
                  Local businesses may need stronger Google Maps and location-based visibility, while B2B companies often
                  need a longer research journey involving content, SEO, paid media, lead generation, CRM, and email nurturing.
                  Businesses targeting markets such as California can also build location-specific search strategies around
                  cities and services instead of relying on one generic keyword.
                </p>
                {/* INTLINK: replace with final local/B2B service pages when available. */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <a href="/services/seo" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">SEO</a>
                  <a href="/services" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">All Services</a>
                  <a href="/about" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">About BFASH</a>
                  <a href="/portfolio" className="px-3 py-2 rounded-lg border border-border text-sm hover:border-brand/50">Portfolio</a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 sm:p-7">
                <p className="text-sm uppercase tracking-wider text-brand mb-2">Research & credibility</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Evidence matters when discussing SEO, AI, and business growth
                </h2>
                <p className="text-muted-foreground leading-7">
                  The research used for this page includes Semrush guidance from Zach Paruch on AI search visibility and
                  third-party mentions, SEO/GEO guidance attributed to Ghulam Ali, and the multidisciplinary academic study
                  led by Yogesh K. Dwivedi on the opportunities and limitations of generative conversational AI.
                </p>
                <p className="text-muted-foreground leading-7 mt-4">
                  The academic research highlights benefits of generative AI while also discussing concerns around bias,
                  misinformation, credibility, transparency, privacy, security, and the importance of human judgment. AI can
                  support marketing workflows, but strategy still requires context, verification, experience, and responsible judgment.
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
                  Questions businesses often ask before contacting a digital marketing agency
                </h2>
                <div className="space-y-3">
                  {[
                    ["What does BFASH do?", "BFASH is a digital marketing and business growth agency providing SEO, GEO, local SEO, Google Ads, social media advertising, website design, email marketing, CRM management, Amazon business services, TikTok Shop, graphic design, virtual assistance, and related growth services."],
                    ["What is the best way to contact BFASH?", "The easiest options are email and WhatsApp. Contact BFASH at info@bfash.us or +92 325 4258512."],
                    ["Can BFASH help a new business with digital marketing?", "Yes. A new business can build its website, search visibility, local presence, content strategy, conversion paths, and digital foundation from the beginning."],
                    ["Can BFASH help a website that is not getting enough traffic?", "Yes. The first step is understanding why visibility is limited. This can involve keyword targeting, search intent, content quality, technical SEO, indexing, internal linking, authority, local SEO, and conversion optimization."],
                    ["Can SEO increase website traffic?", "SEO can increase organic visibility and qualified search traffic when a website targets relevant search intent and provides useful, accessible content. Traffic alone should not be the final objective; qualified visits, leads, sales, and other meaningful conversions matter too."],
                    ["What is GEO?", "GEO stands for Generative Engine Optimization. It focuses on making useful information easier for AI-powered search and generative systems to understand and potentially use when producing answers."],
                    ["Is GEO replacing SEO?", "No. SEO and GEO can work together. SEO supports visibility in traditional search results, while GEO focuses on visibility within AI-generated answers and conversational search experiences."],
                    ["Can BFASH help with AI-search visibility?", "Yes. A modern AI-search visibility strategy can involve clear content, topical coverage, technical accessibility, indexing, consistent brand information, authoritative mentions, and content structured around real user questions."],
                    ["Does appearing in AI search guarantee a citation?", "No. AI visibility and citations cannot responsibly be guaranteed. AI systems determine which sources they use based on retrieval, relevance, ranking, and generation processes. The practical objective is to build information that is discoverable, useful, authoritative, consistent, and technically accessible."],
                    ["Why are citations and external mentions important?", "External references can contribute to a broader digital footprint. Third-party mentions can also help create a more consistent picture of a business across the web."],
                    ["Can BFASH help local businesses?", "Yes. Local businesses can benefit from local SEO, Google Business Profile optimization, location-specific content, reviews, local search visibility, paid advertising, and conversion-focused websites."],
                    ["Can BFASH help B2B companies?", "Yes. B2B marketing can combine SEO, content marketing, website strategy, paid advertising, lead generation, CRM, email marketing, and conversion optimization."],
                    ["Does BFASH guarantee Google rankings?", "No responsible SEO agency should promise a guaranteed Google position. Search rankings depend on competition, intent, technical accessibility, content quality, authority, location, algorithmic changes, and other variables."],
                    ["How long does SEO take?", "SEO has no universal timeline. A new website, an established site with technical problems, and a strong website entering a competitive market can have very different starting points. The timeline depends on the website, competition, target market, authority, technical health, content, and goals."],
                    ["Can BFASH help with Google Ads and social media advertising?", "Yes. Google Ads can reach people actively searching for relevant products and services, while social media advertising can support awareness, demand generation, lead generation, remarketing, and product promotion depending on the business model."],
                    ["Why contact BFASH before choosing a marketing service?", "Because the right solution depends on the actual business problem. A local business needing qualified leads may need a different strategy from an e-commerce brand focused on sales or a B2B company generating enterprise opportunities."],
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
                  Tell BFASH where the business is today and where it wants to go.
                </h2>
                <p className="text-muted-foreground leading-7 max-w-3xl mx-auto mb-5">
                  Share the challenge, target market, website, and business goal. BFASH can then identify the most practical
                  next step across SEO, GEO, local search, paid advertising, websites, content, social media, CRM, marketplaces,
                  or broader business growth.
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
