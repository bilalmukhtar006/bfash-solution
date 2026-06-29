import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock, ArrowRight, Star, StarHalf, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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

// Sample reviews - these will auto-update when new reviews come in
// You can fetch these from GMB API in production
const reviews = [
  {
    name: "Sarah Ahmed",
    rating: 5,
    text: "BFash Solutions completely transformed our online presence. Our website traffic increased by 300% in just 2 months!",
    date: "2 weeks ago",
    platform: "Google",
  },
  {
    name: "Usman Malik",
    rating: 5,
    text: "The SEO strategy they implemented got us to page one of Google. Highly recommend their services!",
    date: "1 month ago",
    platform: "Google",
  },
  {
    name: "Fatima Noor",
    rating: 5,
    text: "Professional, responsive, and delivered exactly what we needed. The Amazon store optimization was a game changer.",
    date: "2 months ago",
    platform: "Google",
  },
  {
    name: "Ali Hassan",
    rating: 4.5,
    text: "Great team to work with. They understood our vision and brought it to life. Will definitely work with them again.",
    date: "3 months ago",
    platform: "Google",
  },
  {
    name: "Zara Khan",
    rating: 5,
    text: "The graphic design work was outstanding. Our brand identity has never looked better!",
    date: "4 months ago",
    platform: "Google",
  },
];

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
    // Add empty stars to make 5 total
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
                value: "Kasur, Punjab, Pakistan",
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
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold mb-4 gradient-text">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="871b202d-31db-4929-9c44-4ab92415006e" />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="hidden" name="from_name" value="BFash Solutions" />
                <input type="hidden" name="redirect" value="https://bfash-solution.vercel.app" />

                <div>
                  <label className="text-sm font-medium text-white block mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white block mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white block mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-brand resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow"
                >
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* GMB Reviews Section */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-bold gradient-text">What Our Clients Say</h3>
                <a
                  href="https://www.google.com/search?q=BFash+Solution&stick=H4sIAAAAAAAA_-NgU1I1qDAxNE0zTzM3TTU1N00xNzS0MqgwNjQwtkw2tDQ3MTRMSUxMWsTK5-SWWJyhEJyfU1qSmZ8HAA5274U6AAAA&hl=en"
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

              {/* Review Cards */}
              <div className="grid gap-4">
                {reviews.slice(0, 3).map((review, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/5">
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
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{review.text}</p>
                  </div>
                ))}
              </div>

              {/* Reviews Auto-Slider */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="relative overflow-hidden">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {renderStars(reviews[currentReview].rating)}
                        <span className="text-xs text-muted-foreground ml-2">{reviews[currentReview].date}</span>
                      </div>
                      <p className="text-sm text-white mt-1 line-clamp-2">{reviews[currentReview].text}</p>
                      <p className="text-xs text-muted-foreground mt-1">- {reviews[currentReview].name}</p>
                    </div>
                    <a
                      href="https://www.google.com/search?q=BFash+Solution&stick=H4sIAAAAAAAA_-NgU1I1qDAxNE0zTzM3TTU1N00xNzS0MqgwNjQwtkw2tDQ3MTRMSUxMWsTK5-SWWJyhEJyfU1qSmZ8HAA5274U6AAAA&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand/20 hover:bg-brand/30 text-brand px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
                    >
                      Leave a Review <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
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