import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Palette } from "lucide-react";

export const Route = createFileRoute("/services/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic Design & Logo Design Agency for B2B Growth | BFASH" },
      {
        name: "description",
        content:
          "Looking for a top graphic design agency for B2B growth? BFASH delivers AI-driven visual design, logo design, video editing, and vector illustration for Shopify, Amazon, and eBay. Boost your traffic today.",
      },
      { property: "og:title", content: "Graphic Design & Logo Design Agency | BFASH" },
      { property: "og:description", content: "AI-driven visual identities that drive B2B sales." },
      { property: "og:url", content: "https://bfash.us/services/graphic-design" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://bfash.us/services/graphic-design" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How to vectorize an image in Illustrator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Open the image in Adobe Illustrator, select Image Trace, choose a preset like High Fidelity Photo or 3-Color, and click Expand. This converts raster pixels into scalable vector paths.",
              },
            },
            {
              "@type": "Question",
              name: "What are the best AI video creation tools in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Top tools include Google Veo 3, Runway Gen-4, and Kling AI 3.0. For fast social media editing, CapCut is the most versatile free tool.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need a graphic design agency for my Shopify or Amazon store?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. With millions of sellers on these platforms, visuals are your main differentiator. A professional agency ensures your product images and A+ content are optimized for conversion.",
              },
            },
            {
              "@type": "Question",
              name: "What are the best times to post on social media?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For B2B, Tuesday through Thursday mornings (9 AM to 1 PM) perform best on LinkedIn. For B2C and TikTok Shop, evenings and weekends usually win.",
              },
            },
            {
              "@type": "Question",
              name: "How to design a book cover?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Study your genre, choose readable typography, and design for thumbnail clarity on Amazon. Tools like Canva and Adobe Express help, but professional design ensures your book stands out.",
              },
            },
            {
              "@type": "Question",
              name: "How can I improve my B2B brand's visual design for 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Focus on a flexible design system, real photography, texture, and accessibility. Meet WCAG 2.2 standards for the best results.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: GraphicDesignPage,
});

function GraphicDesignPage() {
  return (
    <>
      <ServicePage
        icon={Palette}
        eyebrow="Graphic & Logo Designing"
        title="Visual identities that earn attention and drive B2B sales."
        subtitle="From a single logo mark to a complete visual system — we craft the assets that make brands instantly recognizable and impossible to forget."
        intro="Senior designers, not template flippers. Every project starts with strategy and ends with a system your team can extend on their own. We combine human creativity with AI automation to deliver high-converting visual assets for Shopify, Amazon, and eBay sellers."
        features={[
          {
            title: "Brand Guidelines Development",
            desc: "A complete brand book covering logo usage, color palette, typography, voice, photography direction, and motion principles.",
          },
          {
            title: "Typography Systems",
            desc: "Custom or curated type pairings with full scale, hierarchy rules, and accessibility considerations for web, print, and motion.",
          },
          {
            title: "Custom Vector & Logo Design",
            desc: "Original logo marks, monograms, and iconography — never AI-generated, never template-derived. Built scalable from favicon to billboard.",
          },
          {
            title: "Marketing Asset Design",
            desc: "Pitch decks, social templates, ad creative, packaging, and trade-show collateral — all tied to a coherent visual system.",
          },
          {
            title: "Illustration & Motion",
            desc: "Custom illustration suites and brand-aligned micro-animations that bring static identities to life across product and marketing surfaces.",
          },
          {
            title: "AI-Powered Video & Reel Editing",
            desc: "High-converting short-form video editing for Instagram Reels, TikTok Shop, and YouTube. We use AI video creation tools to speed up workflows without losing the human touch.",
          },
        ]}
        deliverables={[
          "Primary logo & marks",
          "Color & typography system",
          "Brand guidelines PDF",
          "Editable source files",
          "Social media templates",
          "Stationery & pitch deck",
          "AI-enhanced video assets",
          "Amazon A+ / Enhanced Brand Content",
        ]}
      />

      {/* ============================================================
          LONG-FORM SEO CONTENT
          ============================================================ */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 pb-24 pt-4 text-left">

        {/* INTRO SECTION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Why Graphic Design Is the Backbone of B2B Traffic Generation
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Good visual design is not about making things pretty. It is about
          making things work. For B2B businesses, a strong visual identity
          builds instant trust. When a buyer lands on your Shopify store,
          Amazon listing, or Google Business Profile, they judge your
          credibility in milliseconds.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Our research shows that keywords like{" "}
          <strong className="text-white">logo design agency</strong> carry a
          CPC of $8.88. That means businesses are willing to pay serious
          money to get this right. Why? Because a strong logo and a cohesive
          visual strategy directly affect conversion rates. At{" "}
          <Link to="/" className="text-brand hover:text-brand-strong underline">
            BFASH
          </Link>
          , we blend human creativity with AI automation to deliver visual
          assets that do more than look good — they drive real traffic and
          sales.
        </p>

        {/* CORE SERVICES */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Our Core Graphic Design Services for Global B2B Brands
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          We offer a full suite of visual design services tailored for B2B
          growth. Here is exactly what we do.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Logo Design &amp; Brand Identity Agency
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Your logo is the face of your business. We do not use templates. We
          do not use generic AI art. We create custom vector logos that scale
          perfectly from a tiny favicon to a massive billboard. Our process
          includes deep market research, custom typography systems, and a
          complete brand guidelines document so your team can stay
          consistent.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Vector Illustration &amp; Photoshop Services
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Many businesses struggle with low-quality images. We fix that. We
          offer expert vector illustration services. We know how to vectorize
          an image in Illustrator quickly and accurately. This matters for
          clean, scalable graphics on the web and in print.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-5">
          If you are weighing Photoshop costs against hiring an agency, think
          about this: a Photoshop subscription costs money every month, but
          you also need a skilled designer to use it. Our team removes that
          learning curve and delivers high-end results immediately.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Social Media Post &amp; Carousel Design
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Social media is a visual battlefield. You need to stop the scroll.
          We design high-engagement social media posts, Instagram carousel
          templates, and ad creatives. Our designs are data-driven. We know
          what works on LinkedIn for B2B versus what works on TikTok Shop for
          product discovery.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          AI Video Creation &amp; Reel Editing Services
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Video content is exploding. Keywords like{" "}
          <strong className="text-white">best AI video creation tools 2026</strong>{" "}
          and{" "}
          <strong className="text-white">video editing services near me</strong>{" "}
          are searched thousands of times a month. We invested heavily in R&amp;D
          to master AI video editing tools. We use AI to speed up the editing
          process for Reels, TikTok Shop videos, and YouTube content. But we
          always add a human touch.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          E-commerce &amp; Marketplace Visuals (Amazon, eBay, Shopify)
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-5">
          If you sell on Amazon, eBay, or Shopify, your product images and A+
          content are your best salespeople.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>
            <strong className="text-white">Amazon:</strong> We create Amazon
            A+ content and Enhanced Brand Content that answers customer
            questions and overcomes objections.
          </li>
          <li>
            <strong className="text-white">Shopify:</strong> We design
            high-converting landing page visuals and product banners.
          </li>
          <li>
            <strong className="text-white">eBay:</strong> We optimize listing
            images to stand out in a crowded marketplace.
          </li>
        </ul>

        {/* AI SECTION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          How We Use AI Automation for B2B Growth
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          We are not just a traditional graphic design agency. We are a
          digital marketing powerhouse. We use AI automation to enhance every
          visual asset we create. For example, we use AI to analyze
          competitor ad creatives. We use AI to generate multiple variations
          of a social media post and test which one performs better. This R&amp;D
          allows us to deliver faster turnaround times and higher quality
          results.
        </p>

        {/* SEO INTEGRATION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Integrating Visual Design With SEO, AEO, and GEO
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Visual design does not exist in a vacuum. It must work alongside
          your{" "}
          <Link to="/services/seo" className="text-brand hover:text-brand-strong underline">
            SEO
          </Link>
          , AEO (Answer Engine Optimization), and GEO (Generative Engine
          Optimization) strategies. Google and AI search engines look at user
          engagement signals. If a visitor lands on your site and leaves
          immediately because it looks unprofessional, your search rankings
          will drop. High-quality graphic design keeps users on the page
          longer. It reduces bounce rates. It increases dwell time.
        </p>

        {/* WHY CHOOSE BFASH */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Why B2B Businesses Worldwide Choose BFASH
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          We specialize in B2B marketing and traffic generation. We
          understand that B2B buyers are different from B2C consumers. B2B
          buyers need to see authority, expertise, and reliability. Our
          graphic design services are built to showcase these qualities. We
          do not just make things pretty. We make things strategic. We help
          you build a brand that commands respect in your industry.
        </p>

        {/* FAQ SECTION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Frequently Asked Questions About Graphic Design
        </h2>

        <div className="space-y-8 mt-8">

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              How to vectorize an image in Illustrator?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To vectorize an image in Illustrator, open the image, select the{" "}
              <a
                href="https://helpx.adobe.com/illustrator/using/image-trace.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-strong underline"
              >
                Image Trace
              </a>{" "}
              option, choose a preset (like High Fidelity Photo or 3-Color),
              and click Expand. This converts raster pixels into scalable
              vector paths. For simple black-and-white logos, start with the
              Black and White preset and adjust the threshold. If this sounds
              complicated, our team at{" "}
              <Link to="/" className="text-brand hover:text-brand-strong underline">
                BFASH
              </Link>{" "}
              can do it for you. We offer professional vector illustration
              services to ensure your graphics stay crisp at any size.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What are the limitations of using AI for video creation?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI is amazing at automating repetitive tasks like cutting clips
              or adding subtitles. However, AI struggles with emotional
              nuance and complex storytelling. It cannot understand a subtle
              B2B sales pitch. Research shows that 36% of consumers say
              AI-generated brand videos lower their perception of the brand
              due to robotic gestures and a lack of emotional tone. The
              limitation is context. That is why we use a hybrid approach. We
              use AI for efficiency (like in{" "}
              <a
                href="https://www.capcut.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-strong underline"
              >
                CapCut
              </a>
              ) and human editors for the final creative polish.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What are the best times to post on social media?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The best times depend on your audience. For B2B businesses,
              Tuesday through Thursday mornings (9 AM to 1 PM) typically see
              the highest engagement on platforms like LinkedIn. For B2C and
              TikTok Shop, evenings and weekends often perform better. We
              design your social media assets and can help schedule them for
              peak times to maximize reach.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              How to design a book cover?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Designing a book cover requires a deep understanding of your
              genre, your target reader, and current market trends. It
              involves choosing the right typography, imagery, and layout. A
              good cover needs to be readable as a tiny thumbnail on Amazon
              and striking as a physical book. Tools like{" "}
              <a
                href="https://www.canva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-strong underline"
              >
                Canva
              </a>{" "}
              or{" "}
              <a
                href="https://www.adobe.com/express/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-strong underline"
              >
                Adobe Express
              </a>{" "}
              offer templates to start, but professional design ensures your
              book stands out. Our team specializes in print and digital
              design, including book covers and packaging.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Do I need a graphic design agency for my Shopify or Amazon
              store?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes, if you want to scale. With millions of sellers on these
              platforms, your visuals are your only differentiator. A
              professional design agency ensures your product images,
              banners, and A+ content are optimized for conversion. Generic
              or poorly designed visuals will cost you sales. Agencies like{" "}
              <Link to="/" className="text-brand hover:text-brand-strong underline">
                BFASH
              </Link>{" "}
              specialize in B2B and e-commerce visuals to help brands improve
              product presentation and scale profitably.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What are the best AI video creation tools in 2026?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The landscape changes fast. Current top tools include Google's{" "}
              <strong className="text-white">Veo 3</strong> for realistic
              clips with native audio,{" "}
              <strong className="text-white">Runway Gen-4</strong> for
              cinematic control, and{" "}
              <strong className="text-white">Kling AI 3.0</strong> for
              motion-heavy work. For social media editing and quick
              turnarounds,{" "}
              <a
                href="https://www.capcut.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-strong underline"
              >
                CapCut
              </a>{" "}
              remains the most versatile free tool. At{" "}
              <Link to="/" className="text-brand hover:text-brand-strong underline">
                BFASH
              </Link>
              , we stay updated on these tools to deliver high-quality video
              assets for our clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              How can I improve my B2B brand's visual design for 2026?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              B2B branding is shifting toward a system-driven approach with
              more authentic, less polished visuals. Trends include using
              real photography, adding texture, and designing for
              accessibility (WCAG 2.2 standards). Focus on creating a
              flexible design system rather than one-off graphics. This
              ensures consistency across your website, social media, and
              sales decks.
            </p>
          </div>

        </div>

        {/* CONCLUSION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Ready to Grow Your Brand With Expert Graphic Design?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Investing in professional graphic design is an investment in your
          business growth. Whether you need a new logo, a social media
          carousel, a book cover, or AI-enhanced video editing,{" "}
          <Link to="/" className="text-brand hover:text-brand-strong underline">
            BFASH
          </Link>{" "}
          is here to help. We combine creativity, strategy, and AI automation
          to deliver visual assets that drive real results for B2B
          businesses.
        </p>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-brand-strong px-8 py-3 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Contact Us Today to Start Your Next Project
          </Link>
        </div>

      </section>
    </>
  );
}