'use client';

import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock, ArrowRight, Star, StarHalf, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — BFash Solution" },
      {
        name: "description",
        content:
          "Get in touch with BFash Solutions. Book a free consultation, ask a question, or start a project.",
      },
      { property: "og:title", content: "Contact BFash Solutions" },
      { property: "og:description", content: "Book a free consultation or start a project today." },
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
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Tell us about your goals. We'll respond within one business day with next steps."
      />

      <Section>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <div className="space-y-4">
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
                className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-brand/50 transition-colors block"
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
                title="BFash Solutions Location Map"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <ContactForm />

            {/* ✅ GMB Reviews Section with Real Reviews */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-bold gradient-text">What Our Clients Say</h3>
                <a
                  href={GMB_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand text-sm hover:underline flex items-center gap-1"
                >
                  View all reviews <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                See why our clients trust us with their digital growth
              </p>

              {/* Real Review Cards - Clicking takes you to GMB */}
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

              {/* Auto-slider with Real Reviews */}
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
                  {/* Auto-slider dots */}
                  <div className="flex justify-center gap-1 mt-4">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
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
          </div>
        </div>
      </Section>
    </>
  );
}