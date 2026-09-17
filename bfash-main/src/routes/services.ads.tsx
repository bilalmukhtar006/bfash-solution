```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Megaphone } from "lucide-react";

export const Route = createFileRoute("/services/ads")({
  head: () => ({
    meta: [
      {
        title: "Google Ads Agency & Paid Advertising Services | BFASH",
      },
      {
        name: "description",
        content:
          "BFASH is a Google Ads agency providing Google Ads management, social media advertising, Amazon PPC, TikTok Ads, retargeting, conversion tracking, and paid digital marketing for B2B, ecommerce, Shopify, Amazon, eBay, and local businesses.",
      },
      {
        name: "keywords",
        content:
          "google ads agency, google ads management services, google ads marketing agency, google ads management agency, paid advertising agency, social media advertising agency, social media ads management, amazon ppc agency, amazon ppc management, amazon advertising agency, tiktok advertising agency, tiktok ads management, shopify ads, ecommerce advertising agency, retargeting agency, landing page optimization, conversion tracking, ad copywriting, creative testing, B2B marketing agency, digital marketing agency",
      },
      {
        property: "og:title",
        content: "Google Ads Agency & Paid Advertising Services | BFASH",
      },
      {
        property: "og:description",
        content:
          "Data-driven Google Ads, social media advertising, Amazon PPC, TikTok Ads, retargeting, conversion tracking, creative testing, and paid traffic generation.",
      },
      {
        property: "og:url",
        content: "https://bfash.us/services/ads",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Google Ads Agency & Paid Advertising Services | BFASH",
      },
      {
        name: "twitter:description",
        content:
          "Google Ads and paid advertising campaigns built for leads, sales, ecommerce growth, B2B marketing, and measurable traffic generation.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://bfash.us/services/ads",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google Ads Agency & Paid Advertising Services",
          serviceType: "Paid Advertising and Digital Marketing",
          provider: {
            "@type": "Organization",
            name: "BFASH",
            url: "https://bfash.us",
          },
          url: "https://bfash.us/services/ads",
          description:
            "Google Ads management, social media advertising, Amazon PPC, TikTok Ads, retargeting, conversion tracking, landing page optimization, creative testing, and paid digital marketing services.",
          areaServed: "Worldwide",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does a Google Ads agency do?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "A Google Ads agency researches, creates, manages, tracks, tests, and improves paid advertising campaigns. Services can include keyword research, campaign structure, ad copy, conversion tracking, bidding, landing pages, remarketing, and reporting.",
              },
            },
            {
              "@type": "Question",
              name: "How much does Google Ads cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Google Ads does not have one fixed price. Advertising costs vary based on industry, keywords, competition, location, audience, campaign type, bidding strategy, and conversion goals.",
              },
            },
            {
              "@type": "Question",
              name: "Can Google Ads generate B2B leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Google Ads can reach people who are actively searching for B2B products and services. B2B campaigns should connect keywords, ads, landing pages, conversion tracking, CRM systems, and sales follow-up.",
              },
            },
            {
              "@type": "Question",
              name: "What is Google Smart Bidding?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Google Smart Bidding uses Google AI to optimize bids for conversions or conversion value at auction time. Google lists Target CPA, Target ROAS, Maximize Conversions, and Maximize Conversion Value among Smart Bidding strategies.",
              },
            },
            {
              "@type": "Question",
              name: "Does BFASH manage social media advertising?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. BFASH provides social media advertising support including audience research, campaign setup, creative production, testing, tracking, retargeting, and performance optimization.",
              },
            },
            {
              "@type": "Question",
              name: "Does BFASH manage Amazon PPC?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Amazon PPC management can include Sponsored Products, Sponsored Brands, keyword research, search-term analysis, bid management, product targeting, campaign structure, and reporting.",
              },
            },
            {
              "@type": "Question",
              name: "Can paid advertising work with SEO?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Paid advertising can generate immediate traffic and useful market data while SEO builds long-term organic visibility. Both channels can share keyword, audience, content, and conversion insights.",
              },
            },
            {
              "@type": "Question",
              name: "Does BFASH create advertising graphics and videos?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. BFASH provides graphic design, Photoshop editing, vector illustration, image creation, video editing, social media creatives, and other advertising assets.",
              },
            },
            {
              "@type": "Question",
              name: "Can advertising data connect to a CRM?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Advertising and conversion data can connect with CRM workflows so businesses can track leads from the first click through qualification and sales follow-up.",
              },
            },
            {
              "@type": "Question",
              name: "Does BFASH work with Shopify, Amazon, and eBay businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. BFASH supports ecommerce businesses across Shopify, Amazon, eBay, TikTok Shop, Google Ads, social media advertising, SEO, product content, CRM, and conversion-focused marketing.",
              },
            },
          ],
        }),
      },
    ],
  }),

  component: AdsPage,
});

function AdsPage() {
  return (
    <>
      <ServicePage
        icon={Megaphone}
        eyebrow="Paid Advertising & Ads Management"
        title="Google Ads Agency for Leads, Sales & Business Growth"
        subtitle="Turn paid traffic into measurable business results with Google Ads, social media advertising, Amazon PPC, TikTok Ads, retargeting, conversion tracking, and conversion-focused creative."
        intro="BFASH is a digital marketing agency that treats paid advertising as part of a complete growth system. We research the market, understand the customer, build campaigns, create advertising assets, improve landing pages, connect tracking, manage CRM workflows, and use AI automation to improve research and testing."
        features={[
          {
            title: "Google Ads Management",
            desc:
              "Search, Shopping, Display, Performance Max, and YouTube campaigns supported by keyword research, audience research, conversion tracking, bidding strategy, and ongoing optimization.",
          },
          {
            title: "Social Media Advertising",
            desc:
              "Facebook, Instagram, LinkedIn, TikTok, and other paid social campaigns with audience research, creative strategy, testing, retargeting, and conversion-focused optimization.",
          },
          {
            title: "Amazon PPC Management",
            desc:
              "Sponsored Products, Sponsored Brands, keyword research, search-term analysis, bid management, product targeting, and marketplace advertising support.",
          },
          {
            title: "TikTok Advertising & Shop",
            desc:
              "TikTok campaign planning, creative production, product promotion, audience targeting, TikTok Shop support, and AI-assisted campaign workflows.",
          },
          {
            title: "Retargeting & Remarketing",
            desc:
              "Reconnect with website visitors, product viewers, leads, shoppers, and previous customers with relevant remarketing campaigns.",
          },
          {
            title: "Tracking & Analytics",
            desc:
              "GA4 events, advertising conversions, pixels, UTM tracking, CRM data, dashboards, and reporting that connects paid traffic with real business actions.",
          },
        ]}
        deliverables={[
          "Paid advertising strategy",
          "Google Ads campaign setup",
          "Keyword and audience research",
          "Ad copy and creative assets",
          "Landing page recommendations",
          "Conversion tracking setup",
          "CRM and lead tracking support",
          "Retargeting campaigns",
          "Campaign optimization",
          "A/B and creative testing",
          "Monthly performance reporting",
          "AI-assisted marketing automation",
        ]}
      />

      {/* ============================================================
          LONG-FORM SEO CONTENT
          SAME STRUCTURE / ALIGNMENT STYLE AS GRAPHIC DESIGN PAGE
          ============================================================ */}

      <section className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 pb-24 pt-4 text-left">

        {/* INTRO */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Why Paid Advertising Is Important for Business Growth
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Paid advertising helps a business reach people faster. Instead of
          waiting for someone to discover a website through organic search, an
          advertisement can place an offer in front of a relevant audience.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          But buying traffic is not the same as generating sales. A campaign
          needs the right audience, message, creative, landing page, tracking,
          and follow-up. If one part fails, the advertising budget can produce
          clicks without producing enough business value.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          That is why BFASH takes a wider approach. We combine paid advertising
          with SEO, AEO, GEO, graphic design, video production, CRM management,
          social media, ecommerce marketing, B2B marketing, and traffic
          generation.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The goal is simple: bring the right people to the right offer and
          give the business a clear way to turn that attention into a lead,
          customer, or sale.
        </p>

        {/* IMAGE */}
        <div className="my-12 flex justify-center">
          <img
            src="/ads.webp"
            alt="BFASH Google Ads agency and paid advertising services for B2B, ecommerce, Shopify, Amazon, eBay, and social media businesses"
            className="w-full max-w-2xl h-auto rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* GOOGLE ADS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Google Ads Agency Services for Modern Businesses
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Google Ads can reach people when they are searching for products,
          services, answers, and solutions. This makes search advertising very
          useful for businesses with a clear offer.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH builds Google Ads campaigns around search intent. We do not
          treat every keyword as equal. Someone searching for "what is Google
          Ads" has a different goal from someone searching for "Google Ads
          management agency."
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The second search has stronger commercial intent. The campaign should
          therefore use a different message and landing page.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Google also provides AI-powered bidding tools. Google says Smart
          Bidding uses AI to optimize for conversions or conversion value in
          every auction. It can use signals such as device, location, time,
          language, browser, operating system, and other context.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          <a
            href="https://support.google.com/google-ads/answer/7065882"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-strong underline"
          >
            Google Ads: About Smart Bidding
          </a>
        </p>

        {/* CAMPAIGN TYPES */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Google Ads Campaign Types We Work With
        </h2>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Google Search Ads
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Search campaigns target people who are already looking for something.
          This can include B2B services, local services, software, ecommerce
          products, professional services, and many other offers.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We research search terms, group related keywords, write relevant ads,
          build landing page connections, and monitor search-term performance.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Google Shopping Ads
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Shopping campaigns are important for ecommerce brands. Product
          titles, descriptions, images, pricing, feeds, product pages, and
          advertising all work together.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can combine Shopping advertising with Shopify marketing,
          product SEO, graphic design, product image editing, landing page
          improvements, and conversion optimization.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Performance Max
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Performance Max uses Google's automated systems to reach customers
          across multiple Google surfaces. Google currently lists Search, Maps,
          YouTube, Discover, Gmail, and the Google Display Network among its
          Performance Max channels.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          <a
            href="https://support.google.com/google-ads/answer/16683501"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-strong underline"
          >
            Google Ads: Performance Max channels
          </a>
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          YouTube Advertising
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Video can explain a product or service quickly. BFASH can combine
          video editing, graphic design, short-form content, and paid
          advertising to create campaigns that work across video placements.
        </p>

        {/* B2B */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Google Ads for B2B Marketing and Lead Generation
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH specializes in B2B marketing and traffic generation. B2B
          advertising needs a different approach from many simple ecommerce
          campaigns.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A B2B buyer may not purchase after one click. The buyer may request a
          quote, book a meeting, ask for a demo, download information, speak
          with sales, and then make a decision later.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This is why B2B campaigns need more than click tracking. We can
          connect advertising with CRM management and lead qualification.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Lead generation campaigns</li>
          <li>Quote request campaigns</li>
          <li>Demo campaigns</li>
          <li>Consultation campaigns</li>
          <li>Contact form campaigns</li>
          <li>Phone call campaigns</li>
          <li>Remarketing campaigns</li>
          <li>CRM-based lead workflows</li>
        </ul>

        {/* SOCIAL ADS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Social Media Advertising Agency Services
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Search advertising often starts with an existing need. Social media
          advertising can work differently. A person may not be searching for
          the product at that moment.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The creative must therefore catch attention quickly.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH combines paid social advertising with our graphic design and
          video skills. We can create or improve:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Social media graphics</li>
          <li>Carousel designs</li>
          <li>Short-form videos</li>
          <li>Product images</li>
          <li>Ad banners</li>
          <li>Vector illustrations</li>
          <li>Photoshop-edited images</li>
          <li>Video hooks</li>
          <li>Ad headlines</li>
          <li>Calls to action</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This creates a stronger connection between the campaign manager and
          the creative team. The advertising message and visual design can work
          together.
        </p>

        {/* AMAZON */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Amazon PPC Management for Ecommerce Brands
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Amazon advertising has a different customer journey from Google
          Search. The shopper is already inside a marketplace and may be close
          to buying.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Amazon Sponsored Products use a cost-per-click model. Advertisers can
          target keywords or use automatic targeting.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          <a
            href="https://advertising.amazon.com/help/GJUCNANNV3GQVXJZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-strong underline"
          >
            Amazon Ads: Sponsored Products
          </a>
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can support Amazon sellers with:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Amazon keyword research</li>
          <li>Sponsored Products</li>
          <li>Sponsored Brands</li>
          <li>Search-term analysis</li>
          <li>Negative keyword research</li>
          <li>Bid management</li>
          <li>Product targeting</li>
          <li>Campaign structure</li>
          <li>Product listing optimization</li>
          <li>A+ content</li>
          <li>Product image design</li>
          <li>Competitor research</li>
        </ul>

        {/* TIKTOK */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          TikTok Advertising and TikTok Shop Marketing
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          TikTok combines content, discovery, creators, products, and
          advertising. This makes it useful for brands that can tell a visual
          story.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH supports TikTok advertising and TikTok Shop businesses with
          product promotion, creative production, campaign planning, audience
          research, and social commerce workflows.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          TikTok's Smart+ tools use automation and AI to help advertisers build
          and optimize campaigns. TikTok describes Smart+ as a group of
          automation solutions designed to reduce repetitive manual work while
          keeping advertiser controls.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          <a
            href="https://ads.tiktok.com/business/en-US/blog/smart-plus-ai-performance-solution"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-strong underline"
          >
            TikTok for Business: Smart+
          </a>
        </p>

        {/* SHOPIFY */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Shopify Advertising and Ecommerce Growth
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Shopify gives businesses control over their online store. But a
          store still needs traffic and conversion.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can support Shopify businesses through paid advertising,
          ecommerce SEO, product content, graphic design, landing pages,
          retargeting, email marketing, CRM management, and social media.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Our work can include:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Google Shopping</li>
          <li>Google Search Ads</li>
          <li>Meta advertising</li>
          <li>Retargeting</li>
          <li>Product feed support</li>
          <li>Product image design</li>
          <li>Landing page design</li>
          <li>Conversion optimization</li>
          <li>SEO</li>
          <li>Email marketing</li>
          <li>CRM workflows</li>
        </ul>

        {/* EBAY */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          eBay Advertising and Marketplace Marketing
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          eBay sellers also need strong product listings, images, pricing,
          visibility, and traffic.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can combine eBay store management with product listing
          optimization, creative design, marketplace research, and paid
          advertising.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The goal is not simply to create more impressions. The goal is to
          improve the path from marketplace discovery to purchase.
        </p>

        {/* RETARGETING */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Retargeting and Remarketing Campaigns
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Many visitors do not buy on their first visit.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A person may view a product, read a service page, add an item to a
          cart, or visit a contact page and leave.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Retargeting gives the business another opportunity to reach that
          person.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can build audiences around useful actions such as:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Website visitors</li>
          <li>Product viewers</li>
          <li>Cart visitors</li>
          <li>Lead form visitors</li>
          <li>Video viewers</li>
          <li>Social media engagers</li>
          <li>Previous customers</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Each group can receive a different message. This is better than
          showing the same advertisement to everyone.
        </p>

        {/* LANDING PAGES */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Landing Page Optimization for Paid Traffic
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Sending every advertisement to the homepage can create a weak
          customer journey.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A landing page should match the advertisement. If an ad promotes
          Google Ads management, the page should clearly explain Google Ads
          management. If an ad promotes a product, the visitor should quickly
          see that product and its benefits.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can combine landing page design with copywriting, graphic
          design, SEO, tracking, and conversion strategy.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Clear headline</li>
          <li>Strong value proposition</li>
          <li>Relevant visual content</li>
          <li>Trust signals</li>
          <li>Simple navigation</li>
          <li>Clear call to action</li>
          <li>Mobile-friendly layout</li>
          <li>Fast loading experience</li>
          <li>Accurate conversion tracking</li>
        </ul>

        {/* TRACKING */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Conversion Tracking and Advertising Analytics
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Advertising without tracking creates a major problem. You may know
          how many people clicked, but you may not know how many became real
          customers.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Google Ads provides conversion tracking for valuable actions such as
          purchases, signups, calls, and other business actions.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can help businesses track:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Purchases</li>
          <li>Lead forms</li>
          <li>Phone calls</li>
          <li>Quote requests</li>
          <li>Bookings</li>
          <li>Demo requests</li>
          <li>Newsletter signups</li>
          <li>Product interactions</li>
          <li>CRM lead stages</li>
          <li>Campaign source and medium</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We can also use GA4, UTM tracking, advertising pixels, dashboards,
          and CRM data to create a clearer picture of the customer journey.
        </p>

        {/* AI */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          AI Automation and R&amp;D for Paid Advertising
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Advertising platforms now use AI at a large scale. BFASH also
          researches ways to use AI and automation inside our marketing
          workflows.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Google says Smart Bidding can make auction-time decisions using many
          contextual signals. This shows how important automation has become
          in modern advertising.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          But AI does not replace strategy.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          AI needs good data. It needs clear goals. It needs accurate
          conversion tracking. It also needs human review.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          AI-Assisted Keyword Research
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Large keyword lists can contain thousands of terms. AI can help
          group them by intent, topic, product, service, and customer problem.
          Human review then checks whether the groups make business sense.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          AI-Assisted Creative Research
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          AI can help generate ideas for headlines, hooks, ad concepts,
          layouts, and variations. BFASH can then turn those ideas into real
          graphics, images, and videos.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          AI-Assisted Reporting
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Advertising accounts create large amounts of data. Automation can
          help collect and organize campaign information so the team can focus
          on important changes and business decisions.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          AI-Assisted CRM Automation
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Leads can move from advertising platforms into a CRM. Automation can
          then help with notifications, lead assignment, follow-up tasks,
          qualification, and reporting.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          TikTok is also expanding AI-powered advertising tools. TikTok's
          Smart+ system uses automation to reduce repetitive campaign work and
          improve campaign workflows.
        </p>

        {/* CREATIVE */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Ad Creative, Graphic Design and Video Production
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          An advertising campaign needs something people can see or read.
          Weak creative can make a strong campaign look weak.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH has an in-house digital creative focus. This includes graphic
          design, Photoshop, vector illustration, image editing, social media
          designs, product visuals, and video content.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We can create multiple creative concepts and test them against the
          campaign goal.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Static advertisements</li>
          <li>Carousel advertisements</li>
          <li>Short-form videos</li>
          <li>Product videos</li>
          <li>Social media graphics</li>
          <li>Banner advertisements</li>
          <li>Vector illustrations</li>
          <li>Product image editing</li>
          <li>Photoshop compositions</li>
          <li>Amazon product visuals</li>
          <li>Shopify banners</li>
          <li>TikTok Shop creatives</li>
        </ul>

        {/* TESTING */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          A/B Testing and Creative Testing
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A campaign should not depend on one advertisement forever.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We can test different headlines, images, videos, offers, audiences,
          landing pages, and calls to action.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          For example, an ecommerce brand could test a product-focused
          advertisement against a problem-focused advertisement.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A B2B company could test a "Book a Demo" message against a "Get a
          Free Consultation" message.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Testing turns assumptions into evidence.
        </p>

        {/* BENCHMARKS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Google Ads Benchmarks and What the Data Means
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Industry benchmarks can help businesses understand the market. But
          benchmarks are not promises.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          WordStream's 2025 benchmark study analyzed 16,446 US-based search
          advertising campaigns running between April 1, 2024 and March 31,
          2025.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The study reported an overall median cost per click of $5.26 and an
          overall median conversion rate of 7.52% across the campaigns it
          analyzed.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The numbers also differed greatly by industry. That is important.
          There is no single Google Ads number that works for every company.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          <a
            href="https://www.wordstream.com/blog/2025-google-ads-benchmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-strong underline"
          >
            WordStream 2025 Google Ads Benchmarks
          </a>
        </p>

        {/* SEO */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Paid Advertising With SEO, AEO and GEO
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Paid advertising should not live alone.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH also provides SEO, AEO, and GEO. This creates an opportunity to
          connect paid search data with organic search content.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          For example, paid campaigns can show which commercial keywords
          attract attention. Those insights can support SEO landing pages,
          blog articles, FAQs, service pages, and product content.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A business can then build visibility across paid search, organic
          search, social media, AI search, maps, and marketplaces.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          <Link
            to="/services/technical-seo"
            className="text-brand hover:text-brand-strong underline"
          >
            Explore BFASH Technical SEO Services
          </Link>
        </p>

        {/* GMB */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Google Ads and Google Business Profile for Local Businesses
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Local businesses can combine paid advertising with Google Business
          Profile optimization and local SEO.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A local service company may care more about phone calls and quote
          requests than website visits. Another business may want people to
          visit a store.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can connect local advertising with GMB marketing, landing
          pages, local SEO, review strategy, and conversion tracking.
        </p>

        {/* PROCESS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Our Google Ads and Paid Advertising Process
        </h2>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          1. Business Research
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We first understand the business, product, service, customer,
          market, location, sales process, and business goals.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          2. Competitor Research
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We study competitor offers, messages, landing pages, product
          positioning, creative styles, and search opportunities.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          3. Keyword and Audience Research
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We separate commercial intent from informational intent and build
          audience groups where the platform supports them.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          4. Tracking Setup
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We define the actions that matter before relying heavily on
          automation.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          5. Campaign Build
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We create campaign structures based on the business goal, audience,
          product, location, service, and budget.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          6. Creative Production
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We develop the graphics, videos, images, headlines, descriptions,
          and other assets required by the campaign.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          7. Launch
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Before launch, we check targeting, budgets, tracking, URLs,
          conversion actions, creative assets, and campaign settings.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          8. Optimization
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We review search terms, conversions, costs, audiences, creative
          performance, landing pages, and business outcomes.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          9. Testing
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We test new ideas instead of assuming that the first campaign is
          perfect.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          10. Reporting
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Reports should explain what happened, what changed, what worked,
          what did not work, and what the next action should be.
        </p>

        {/* BFASH */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Why BFASH Is More Than a Google Ads Agency
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH is a digital marketing and business growth company. Paid
          advertising is one part of the larger system.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We can combine advertising with:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>SEO</li>
          <li>AEO</li>
          <li>GEO</li>
          <li>B2B marketing</li>
          <li>CRM management</li>
          <li>Social media management</li>
          <li>Social media advertising</li>
          <li>Graphic design</li>
          <li>Video editing</li>
          <li>Vector illustration</li>
          <li>Photoshop services</li>
          <li>Shopify marketing</li>
          <li>Amazon marketing</li>
          <li>eBay marketing</li>
          <li>TikTok Shop</li>
          <li>Email marketing</li>
          <li>Google Business Profile marketing</li>
          <li>Traffic generation</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This wider skill set helps because advertising often creates work in
          other parts of the business.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          An ad may need a new image. A landing page may need better copy. A
          lead may need CRM follow-up. A Shopify store may need better product
          content. An Amazon listing may need improved images. A local business
          may need GMB optimization.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          One connected digital growth strategy can make these tasks easier to
          manage.
        </p>

        {/* RESEARCH */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Research and Official Advertising Resources
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH uses platform documentation, industry research, campaign data,
          competitor research, and ongoing R&amp;D when building advertising
          strategies.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-5">
          <li>
            <a
              href="https://support.google.com/google-ads/answer/7065882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-strong underline"
            >
              Google Ads — Smart Bidding
            </a>
          </li>

          <li>
            <a
              href="https://support.google.com/google-ads/answer/16683501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-strong underline"
            >
              Google Ads — Performance Max Channels
            </a>
          </li>

          <li>
            <a
              href="https://advertising.amazon.com/help/GJUCNANNV3GQVXJZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-strong underline"
            >
              Amazon Ads — Sponsored Products
            </a>
          </li>

          <li>
            <a
              href="https://ads.tiktok.com/business/en-US/blog/smart-plus-ai-performance-solution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-strong underline"
            >
              TikTok for Business — Smart+
            </a>
          </li>

          <li>
            <a
              href="https://www.wordstream.com/blog/2025-google-ads-benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-strong underline"
            >
              WordStream — 2025 Google Ads Benchmarks
            </a>
          </li>
        </ul>

        {/* FAQ */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Frequently Asked Questions About Google Ads
        </h2>

        <div className="space-y-8 mt-8">

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What does a Google Ads agency do?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Google Ads agency researches, creates, manages, tracks, tests,
              and improves paid advertising campaigns. This can include Search,
              Shopping, Display, YouTube, and Performance Max campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              How much does Google Ads cost?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              There is no single Google Ads price. Cost changes based on
              competition, keywords, location, industry, audience, campaign
              type, bidding strategy, and business goals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Is Google Ads useful for small businesses?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              It can be useful when the campaign focuses on the right customers
              and business actions. Smaller budgets make accurate targeting,
              landing pages, tracking, and optimization especially important.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can Google Ads generate B2B leads?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. Google Ads can reach people searching for B2B products and
              services. B2B campaigns should also measure lead quality and sales
              outcomes instead of only counting form submissions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What is Smart Bidding?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart Bidding uses Google AI to optimize bids for conversions or
              conversion value at auction time. Google lists Target CPA, Target
              ROAS, Maximize Conversions, and Maximize Conversion Value among
              Smart Bidding strategies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What is retargeting?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Retargeting helps a business reach people who have already
              interacted with the business, such as website visitors, product
              viewers, leads, or previous customers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Does BFASH manage Amazon PPC?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. Amazon PPC services can include Sponsored Products,
              Sponsored Brands, keyword research, bid management, campaign
              structure, search-term analysis, product targeting, and reporting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Does BFASH manage TikTok advertising?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. BFASH supports TikTok advertising, TikTok Shop marketing,
              creative production, product promotion, audience research, and
              business account growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can BFASH create advertising graphics and videos?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. BFASH provides graphic design, Photoshop editing, vector
              illustration, product visuals, social media graphics, video
              editing, and advertising creative.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can paid advertising work with SEO?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. Paid advertising can produce immediate traffic and useful
              keyword and audience data while SEO builds long-term organic
              visibility. Both channels can support the same growth strategy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Why is conversion tracking important?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tracking helps a business understand which advertising actions
              create leads, sales, calls, purchases, and other valuable
              outcomes. Accurate tracking also helps automated advertising
              systems use better data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Does BFASH work with Shopify businesses?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. BFASH can support Shopify businesses with Google Ads,
              social advertising, retargeting, SEO, creative design, product
              content, email marketing, CRM workflows, and traffic generation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Does BFASH work with Amazon and eBay sellers?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. BFASH supports marketplace businesses with advertising,
              product content, marketplace management, creative assets, SEO,
              and traffic generation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can AI replace an advertising manager?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI can automate many repetitive tasks, but strategy still needs
              human input. Businesses need customer research, clear goals,
              strong offers, accurate data, creative thinking, and human
              review.
            </p>
          </div>

        </div>

        {/* CONCLUSION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Turn Paid Traffic Into a Smarter Growth System
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Paid advertising is more than buying clicks.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          It is a system that connects research, targeting, creative, landing
          pages, tracking, CRM, sales, and customer experience.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH combines these areas through digital marketing, Google Ads,
          social media advertising, Amazon PPC, TikTok Shop, Shopify marketing,
          eBay marketing, SEO, AEO, GEO, B2B marketing, creative design, CRM
          management, and AI-assisted automation.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Whether the goal is more B2B leads, ecommerce sales, local customers,
          Amazon sales, Shopify growth, eBay traffic, or TikTok Shop growth,
          the campaign should start with the business goal.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Better research leads to better decisions. Better tracking creates
          better data. Better data gives automation more useful information.
          And better creative helps the right message reach the right person.
        </p>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-brand-strong px-8 py-3 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Contact BFASH About Your Advertising Strategy
          </Link>
        </div>

      </section>
    </>
  );
}
```
