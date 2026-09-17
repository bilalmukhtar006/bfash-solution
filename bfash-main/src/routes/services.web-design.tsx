import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Globe } from "lucide-react";

export const Route = createFileRoute("/services/web-design")({
  head: () => ({
    meta: [
      {
        title: "Web Design Agency & Web Design Trends for Business Growth | BFASH",
      },
      {
        name: "description",
        content:
          "BFASH is a web design agency creating responsive, SEO-ready, conversion-focused websites for B2B, small businesses, ecommerce, Shopify, WooCommerce, Amazon, and growing brands.",
      },
      {
        name: "keywords",
        content:
          "web design trends, web design agency, web designers, web design services, responsive web design services, small business web design, affordable web design, ecommerce web design, SEO web design, web design and SEO, B2B web design agency, website design services for small business, B2B website design, UI UX design services, Shopify website design, Shopify website development, WooCommerce website design, WooCommerce website development, ecommerce website design company, custom website design, website development, conversion focused web design",
      },
      {
        property: "og:title",
        content: "Web Design Agency & Web Design Trends | BFASH",
      },
      {
        property: "og:description",
        content:
          "Responsive, SEO-ready and conversion-focused website design for B2B, ecommerce, Shopify, WooCommerce, and small businesses.",
      },
      {
        property: "og:url",
        content: "https://bfash.us/services/web-design",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://bfash.us/services/web-design",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Web Design Services",
          serviceType: "Web Design",
          provider: {
            "@type": "Organization",
            name: "BFASH",
            url: "https://bfash.us",
          },
          areaServed: "Worldwide",
          description:
            "Responsive, SEO-ready and conversion-focused website design and development for B2B, ecommerce, Shopify, WooCommerce, small businesses and growing brands.",
          url: "https://bfash.us/services/web-design",
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
              name: "What are the most important web design trends for 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Important web design trends for 2026 include mobile-first layouts, faster page experiences, accessible interfaces, clear content hierarchy, stronger personalization, purposeful animation, structured content, and designs that work well across traditional search and AI-powered discovery.",
              },
            },
            {
              "@type": "Question",
              name: "How much does professional web design cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Website design costs vary based on the number of pages, design complexity, integrations, ecommerce requirements, content, SEO requirements, and development platform. A simple business website requires a different scope from a custom ecommerce or B2B platform.",
              },
            },
            {
              "@type": "Question",
              name: "What is responsive web design?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Responsive web design creates layouts that adapt to different screen sizes and devices. A responsive website should remain easy to read, navigate and use across smartphones, tablets, laptops and desktop screens.",
              },
            },
            {
              "@type": "Question",
              name: "Should SEO be included in website design?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. SEO should be considered during website architecture and development rather than added after launch. Semantic HTML, page structure, internal links, metadata, performance, accessibility and structured data can all be planned during the design process.",
              },
            },
            {
              "@type": "Question",
              name: "Is Shopify good for ecommerce website design?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Shopify can be a strong ecommerce platform for businesses that want managed hosting, ecommerce tools, payment integrations and a large app ecosystem. The right platform depends on the business model, catalog, operational requirements and desired level of customization.",
              },
            },
            {
              "@type": "Question",
              name: "What is the difference between UI and UX design?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "UI design focuses on the visual interface, including typography, colors, components and visual hierarchy. UX design focuses on how people move through and use the product, including information architecture, navigation, user flows, usability and interaction patterns.",
              },
            },
            {
              "@type": "Question",
              name: "Can a website help generate B2B leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. A B2B website can support lead generation through clear positioning, useful content, strong calls to action, service pages, case studies, forms, trust signals, landing pages, SEO and analytics. The website should make the next business action easy to understand.",
              },
            },
            {
              "@type": "Question",
              name: "Can BFASH redesign an existing website?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. A website redesign can address visual problems, poor navigation, weak mobile experiences, slow pages, outdated content, technical SEO issues, conversion problems and inconsistent branding while preserving valuable existing content where appropriate.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: WebDesignPage,
});

function WebDesignPage() {
  return (
    <>
      <ServicePage
        icon={Globe}
        eyebrow="Website Designing"
        title="Web Design Agency Building Websites for Business Growth"
        subtitle="Modern websites designed around your customers, your search visibility, and your business goals — from B2B lead generation to ecommerce sales."
        intro="We design and develop responsive websites that combine UI/UX, SEO, content structure, performance, analytics, and conversion strategy. Whether you need a small business website, B2B platform, Shopify store, WooCommerce website, or custom digital experience, BFASH builds the website around the way your business needs to grow."
        features={[
          {
            title: "Custom Web Design & Development",
            desc: "Purpose-built websites with clean layouts, scalable components, responsive interfaces, strong information architecture, and business-focused user journeys.",
          },
          {
            title: "UI/UX Design & Architecture",
            desc: "Wireframes, page structures, navigation systems, user flows, visual hierarchy, accessibility considerations, and conversion-focused interfaces.",
          },
          {
            title: "Responsive Web Design Services",
            desc: "Mobile-first experiences that adapt across smartphones, tablets, laptops, and desktop screens without sacrificing usability or visual quality.",
          },
          {
            title: "Ecommerce Website Design",
            desc: "Conversion-focused Shopify and WooCommerce experiences for product discovery, category navigation, product pages, checkout journeys, and repeat purchases.",
          },
          {
            title: "SEO Web Design",
            desc: "SEO-friendly architecture, semantic HTML, internal linking, metadata, structured content, technical foundations, image optimization, and performance planning.",
          },
          {
            title: "B2B & Small Business Websites",
            desc: "Professional websites designed to explain complex services clearly, build trust, generate qualified leads, and support sales teams with useful digital assets.",
          },
        ]}
        deliverables={[
          "Complete website visual design",
          "Responsive mobile-first layouts",
          "UI/UX wireframes and page architecture",
          "Production-ready website",
          "Shopify or WooCommerce setup",
          "SEO-ready page structure",
          "Analytics and conversion tracking",
          "CMS configuration and training",
          "Performance optimization",
          "Structured data implementation",
          "Conversion-focused landing pages",
          "Post-launch support",
        ]}
      />

      {/* ============================================================
          LONG-FORM SEO CONTENT
          ============================================================ */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 pb-24 pt-4 text-left">

        {/* INTRO SECTION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Why Web Design Is More Than Making a Website Look Good
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A business website is often the first place a potential customer
          learns about a company. It can explain what the business sells,
          answer questions, build trust, generate leads, process purchases,
          support sales teams, and create a long-term source of organic
          traffic.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          That means web design should not be treated as decoration. A good
          website connects design, content, technology, SEO, user experience,
          analytics, and business strategy. At{" "}
          <Link
            to="/"
            className="text-brand hover:text-brand-strong underline"
          >
            BFASH
          </Link>
          , we approach website design as part of a larger digital marketing
          and business growth system.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The goal is simple: help the right people find the website,
          understand the offer, trust the business, and take the next useful
          action.
        </p>

        {/* IMAGE */}
        <div className="my-12 flex justify-center">
          <img
            src="/web-design.webp"
            alt="BFASH web design services for B2B, ecommerce, Shopify, WooCommerce, SEO and business growth"
            className="w-full max-w-2xl h-auto rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* WEB DESIGN TRENDS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Web Design Trends That Matter for Business Growth
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Search interest in{" "}
          <strong className="text-white">web design trends</strong> shows
          that businesses and designers continue to look for better ways to
          build websites. But following every visual trend is not a strategy.
          A trend should only be adopted when it improves the experience,
          supports the brand, or helps the user complete an important task.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Modern web design is moving toward clearer interfaces, stronger
          mobile experiences, useful personalization, accessible components,
          faster pages, better content structure, and more intentional
          interactions.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Some trends are visual. Others are technical. The most useful
          approach is to combine both.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Mobile-first and responsive layouts</li>
          <li>Clear visual hierarchy</li>
          <li>Accessible typography and navigation</li>
          <li>Fast-loading pages</li>
          <li>Useful animation instead of distracting animation</li>
          <li>Structured content designed for search</li>
          <li>Strong calls to action</li>
          <li>Personalized ecommerce experiences</li>
          <li>AI-assisted content and design workflows</li>
          <li>Design systems that keep brands consistent</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          At BFASH, trends are evaluated against the business objective. A
          B2B company needs a different website experience from a Shopify
          fashion store. A law firm needs different information architecture
          from an Amazon seller. A local HVAC company needs different landing
          pages from a SaaS business.
        </p>

        {/* CORE SERVICE */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Our Web Design Services
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          BFASH combines website design with digital marketing and business
          growth. The website is built to work with SEO, content, social
          media, paid advertising, CRM systems, email marketing, ecommerce,
          and sales processes.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Custom Website Design
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Custom web design starts with the business instead of a template.
          We look at the audience, offer, competitors, content, conversion
          goals, and technical requirements before deciding how pages should
          work.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This is especially important for B2B businesses. A complex service
          cannot always be explained through a generic five-page template.
          The website may need service pages, industry pages, case studies,
          knowledge-base content, comparison pages, lead forms, calculators,
          booking systems, or sales resources.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Custom design gives the business more control over those experiences
          while creating a consistent visual system.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Responsive Web Design Services
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A responsive website adapts its layout to different screen sizes.
          But responsive design is more than making desktop content shrink
          onto a phone.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Mobile visitors need readable typography, comfortable tap targets,
          simple navigation, fast loading, useful forms, and a clear path to
          the next action.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We design around real usage conditions. Images, navigation,
          buttons, forms, cards, tables, and content blocks all need to remain
          usable as the viewport changes.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          UI/UX Design and Information Architecture
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          UI means user interface. UX means user experience. They are closely
          connected but they solve different problems.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          UI controls the visual layer: typography, spacing, colors, buttons,
          cards, forms, icons, imagery, and components. UX considers the
          complete journey: what users need, what they see first, where they
          go next, and how easily they can complete their task.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A beautiful website with confusing navigation is still a poor user
          experience. Likewise, a highly functional website with weak visual
          hierarchy can make a business look less credible.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Our approach connects both.
        </p>

        {/* B2B */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          B2B Web Design Agency for Lead Generation
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          B2B website design has one major challenge: buyers often need more
          information before contacting a company.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A strong B2B website therefore needs to answer questions early. It
          should explain the problem, the solution, the process, the
          company's expertise, the industries served, and the expected next
          step.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Important B2B website elements can include:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Clear service positioning</li>
          <li>Industry-specific landing pages</li>
          <li>Case studies and project evidence</li>
          <li>Useful educational content</li>
          <li>Strong calls to action</li>
          <li>Lead-generation forms</li>
          <li>CRM integration</li>
          <li>Appointment or consultation workflows</li>
          <li>Trust signals and business credentials</li>
          <li>SEO-friendly content architecture</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This is why our{" "}
          <strong className="text-white">B2B web design agency</strong>{" "}
          approach does not stop at the homepage. The complete website should
          support the buyer journey.
        </p>

        {/* SMALL BUSINESS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Small Business Web Design Services
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Small businesses do not need complicated websites simply because
          large companies have complicated websites.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A small business website should focus on clarity. Visitors should
          quickly understand what the company does, where it operates, who it
          serves, why it is different, and how to contact or buy from it.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We build websites that can start with the essentials and expand as
          the business grows. That makes the website easier to manage and
          creates room for future SEO pages, landing pages, ecommerce
          features, blogs, CRM connections, and marketing campaigns.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Affordable Web Design Without Building a Weak Website
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Affordable web design should not mean careless design. Cost control
          should come from smart scope, reusable components, clear
          requirements, and efficient development rather than removing the
          fundamentals that make a website useful.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A smaller website can still have strong structure, responsive
          design, SEO foundations, analytics, good typography, accessible
          navigation, and conversion-focused calls to action.
        </p>

        {/* ECOMMERCE */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Ecommerce Web Design for Shopify and WooCommerce
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Ecommerce web design has a different objective from a basic
          brochure website. The customer needs to discover products, compare
          options, understand benefits, trust the seller, add products to a
          cart, and complete checkout.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Every step creates an opportunity to reduce friction.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          Shopify Website Design
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Shopify provides an established ecommerce environment for businesses
          that want to sell products online. Our Shopify website design work
          can include store architecture, theme customization, product-page
          design, collection pages, navigation, banners, landing pages,
          merchandising structure, analytics, and SEO foundations.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We also consider the connection between Shopify and the rest of the
          marketing system. Product pages may need to support Google search,
          social campaigns, email marketing, retargeting, influencer
          campaigns, and paid advertising.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          WooCommerce Website Design
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          WooCommerce can provide more control for businesses already working
          within WordPress. It can be used for catalogs, subscriptions,
          physical products, digital products, memberships, and other
          ecommerce models.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          WooCommerce website development should consider both the customer
          experience and the operational side of the store. Product
          management, payment systems, shipping, inventory, plugins,
          analytics, security, performance, and maintenance all matter.
        </p>

        {/* MARKETPLACE */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Web Design for Amazon, eBay and Marketplace Businesses
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Many ecommerce companies operate across more than one platform.
          Their website may be the central brand destination while Amazon,
          eBay, Shopify, and TikTok Shop act as additional sales channels.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This creates a branding challenge. Product images, descriptions,
          graphics, videos, offers, and messaging need to remain consistent
          even when customers encounter the brand on different platforms.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can connect website design with marketplace marketing,
          graphic design, product visuals, social media, paid advertising,
          SEO, and ecommerce management.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This broader approach helps prevent the website from becoming an
          isolated project that never connects with the company's actual
          sales operation.
        </p>

        {/* INDUSTRIES */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Website Design for Different Industries
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          There is no single website structure that works equally well for
          every industry. The information a potential customer needs depends
          on the product, service, buying cycle, regulations, competition, and
          level of trust required.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Website design can be adapted for industries such as:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Law firms and legal services</li>
          <li>Dental practices</li>
          <li>Medical and healthcare businesses</li>
          <li>HVAC companies</li>
          <li>Home builders and contractors</li>
          <li>Ecommerce brands</li>
          <li>Professional services</li>
          <li>B2B companies</li>
          <li>Creative businesses and artists</li>
          <li>Local service businesses</li>
          <li>Amazon and marketplace sellers</li>
          <li>Technology and SaaS companies</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-5">
          For example, a law firm may need practice-area pages and consultation
          forms. A dental practice may need service pages, location
          information, appointment actions, and patient-friendly explanations.
          An ecommerce business needs product discovery and purchasing
          functionality.
        </p>

        {/* SEO */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          SEO Web Design: Building Search Into the Website
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          SEO should not be treated as something added after the website has
          already been built.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Website architecture affects how search engines understand the
          business. Page hierarchy, headings, internal links, URLs, content
          organization, images, structured data, performance, mobile
          usability, and technical configuration all contribute to the site's
          foundation.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Our web design process works alongside SEO strategy so important
          pages have a clear purpose and can be expanded as the business
          develops.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          For technical SEO requirements, BFASH can also connect the website
          project with our{" "}
          <Link
            to="/services/technical-seo"
            className="text-brand hover:text-brand-strong underline"
          >
            technical SEO services
          </Link>
          .
        </p>

        {/* AEO GEO */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Web Design for SEO, AEO and GEO
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Search is changing. Users increasingly discover information through
          traditional search engines, answer engines, AI-powered interfaces,
          voice assistants, social platforms, and marketplace search.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This makes structured information more important. A website should
          clearly communicate who the company is, what it offers, which
          customers it serves, where it operates, and why its information is
          useful.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Answer Engine Optimization and Generative Engine Optimization build
          on the same fundamental idea: useful information should be clear,
          well organized, factually supported, and easy for systems and people
          to understand.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          That means FAQ sections, entity information, structured data,
          descriptive headings, internal links, clear definitions, supporting
          evidence, and strong topical relationships can all play a role in
          the broader website strategy.
        </p>

        {/* PERFORMANCE */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Website Performance and Technical Foundations
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Design and performance should work together. Heavy images,
          unnecessary scripts, excessive animations, poor code structure, and
          inefficient third-party tools can create a poor experience.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We consider performance during development rather than waiting
          until launch to discover problems.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>Image compression and appropriate formats</li>
          <li>Responsive image sizing</li>
          <li>Efficient page structure</li>
          <li>Reduced unnecessary JavaScript</li>
          <li>Semantic HTML</li>
          <li>Accessible navigation</li>
          <li>Clean URL structures</li>
          <li>Structured data</li>
          <li>Core Web Vitals considerations</li>
          <li>Analytics and event tracking</li>
        </ul>

        {/* CONVERSION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Conversion-Focused Web Design
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Traffic alone does not create a successful website. Visitors need
          an easy path toward a useful action.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Depending on the business, that action could be buying a product,
          requesting a quote, booking an appointment, calling the company,
          submitting a lead form, downloading a resource, joining an email
          list, or contacting sales.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Conversion-focused web design makes these actions visible without
          making the website feel aggressive or confusing.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We connect page messaging, design hierarchy, landing pages,
          forms, trust signals, analytics, and calls to action so the website
          supports the sales process.
        </p>

        {/* SOCIAL + ADS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Connecting Web Design With Digital Marketing
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A website becomes much more valuable when it works with the rest of
          the marketing system.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          BFASH can connect web design with SEO, Google Ads, social media
          management, social advertising, email marketing, CRM workflows,
          graphic design, video content, Google Business Profile optimization,
          TikTok Shop, Amazon, eBay, and Shopify.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          For example, a paid advertising campaign can send visitors to a
          dedicated landing page. The landing page can send qualified leads
          into a CRM. Email automation can follow up with those leads. SEO
          content can attract additional organic traffic. Social media can
          distribute the same offer to another audience.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The website becomes the central digital property rather than an
          isolated brochure.
        </p>

        {/* AI */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          AI, Automation and Web Design R&amp;D
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          AI is changing the way websites are researched, designed, developed,
          tested, and maintained. We use AI where it can improve speed,
          research, automation, and production quality while keeping human
          judgment in the process.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Our R&amp;D approach includes testing new AI-assisted workflows for
          content planning, design exploration, image preparation, code
          assistance, quality checks, customer research, SEO analysis, and
          marketing automation.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          AI should not replace strategy. A website still needs a clear
          business objective, accurate information, useful content, good
          design, and human review.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The practical goal is to use automation for repetitive work so more
          attention can go toward strategy, user experience, testing, and
          business results.
        </p>

        {/* VISUAL DESIGN */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Web Design and Visual Branding
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A website is also a visual expression of the brand. Logo usage,
          typography, photography, illustrations, icons, colors, buttons,
          graphics, and spacing should feel like parts of the same system.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This is where our{" "}
          <Link
            to="/services/graphic-design"
            className="text-brand hover:text-brand-strong underline"
          >
            graphic design services
          </Link>{" "}
          can support the website project.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We can create logos, vector illustrations, social media graphics,
          product visuals, banners, video assets, and other marketing
          materials that match the website's visual language.
        </p>

        {/* CRM */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Websites, CRM and Sales Automation
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A website form should not become a dead end. For businesses that
          rely on leads, website inquiries can become part of a larger sales
          workflow.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Forms can be connected to CRM systems, notifications, lead
          qualification, email follow-up, appointment systems, and reporting.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This helps sales teams understand where leads came from and what
          action took place before the inquiry.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          When website design, CRM, analytics, advertising, and email
          marketing work together, the business can measure more than page
          views. It can measure the path from visitor to lead and from lead to
          customer.
        </p>

        {/* LOCAL */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Web Design for Local Businesses
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Local businesses need websites that make location and service
          information obvious.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Service areas, contact details, opening hours, services, local
          landing pages, reviews, directions, and calls to action can all
          contribute to a better local customer experience.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Website design can also work alongside Google Business Profile
          optimization and local SEO to create a stronger local search
          presence.
        </p>

        {/* PROCESS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Our Web Design Process
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A structured process keeps a website project focused and reduces
          unnecessary revisions.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          1. Discovery and Business Research
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          We learn about the business, customers, competitors, services,
          products, existing website, marketing channels, and goals.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          2. Keyword and Content Planning
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Important search topics and customer questions help shape the site
          architecture. This can prevent the common problem of building pages
          first and trying to force SEO into them later.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          3. Information Architecture
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Navigation, page hierarchy, categories, service pages, product
          structures, internal links, and calls to action are planned before
          development.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          4. UI/UX Design
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Wireframes and visual systems turn the structure into a usable
          interface. We consider mobile, desktop, accessibility, branding,
          readability, and conversion.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          5. Development
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          The approved design becomes a functional website with responsive
          components, content, forms, integrations, analytics, SEO
          foundations, and the required CMS or ecommerce platform.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          6. Testing and Optimization
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Pages are checked across devices and browsers. Forms, navigation,
          links, images, layouts, tracking, structured data, and performance
          are reviewed before launch.
        </p>

        <h3 className="text-2xl font-display font-bold mt-10 mb-4">
          7. Launch and Growth
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Launch is not the end. The website can continue to grow through SEO,
          content marketing, paid advertising, social media, email campaigns,
          landing pages, CRO testing, and new service or product content.
        </p>

        {/* TOPICAL AUTHORITY */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Building Topical Authority Through Website Structure
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A strong service website does more than target one keyword. It
          creates a connected information system around the business.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          For web design, that structure may include the main service page,
          industry-specific pages, Shopify and WooCommerce resources, UI/UX
          content, ecommerce guides, website platform comparisons, technical
          SEO resources, design trend articles, and conversion optimization
          content.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Supporting content can answer informational searches while the
          commercial service page handles users who are ready to hire a web
          design agency.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-5">
          This creates a natural relationship between informational content
          and commercial pages instead of publishing unrelated articles just
          to increase page count.
        </p>

        {/* QUESTIONS */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Questions Businesses Should Ask Before Hiring a Web Designer
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
          <li>What is the primary purpose of the website?</li>
          <li>Who is the target customer?</li>
          <li>Which pages will generate leads or sales?</li>
          <li>Will SEO be included in the architecture?</li>
          <li>Is the website responsive?</li>
          <li>How will performance be measured?</li>
          <li>Which CMS or ecommerce platform will be used?</li>
          <li>Can the business edit its content?</li>
          <li>Will analytics and conversion tracking be installed?</li>
          <li>How will the site grow after launch?</li>
          <li>Can the website connect with CRM and marketing systems?</li>
          <li>Who will maintain the website after launch?</li>
        </ul>

        {/* FAQ */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Frequently Asked Questions About Web Design
        </h2>

        <div className="space-y-8 mt-8">

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What are the most important web design trends for 2026?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Useful web design trends include responsive and mobile-first
              layouts, accessible interfaces, strong content hierarchy,
              faster experiences, purposeful animation, personalization,
              structured content, and websites designed to work across
              traditional search and AI-powered discovery. The most important
              trend is not a visual effect. It is designing around what users
              need to accomplish.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              How much does professional web design cost?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              There is no single price for professional web design. Cost
              depends on the number of pages, design complexity, content,
              integrations, ecommerce requirements, platform, custom
              development, SEO requirements, and ongoing support. A small
              business website and a large ecommerce platform require very
              different scopes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What is responsive web design?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Responsive web design means the website adapts to different
              screen sizes and devices. A properly responsive site keeps its
              content readable and its navigation and interactions usable on
              smartphones, tablets, laptops, and desktop screens.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Should SEO be included in website design?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. SEO should be considered during planning and development.
              Page architecture, URLs, headings, internal links, semantic HTML,
              metadata, structured data, images, performance, mobile
              usability, and content organization are easier to build
              correctly from the beginning than to repair later.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              What is the difference between UI and UX design?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              UI focuses on the visual interface, including typography,
              colors, components, buttons, imagery, and layout. UX focuses on
              the experience of using the website, including navigation,
              information architecture, user flows, usability, and task
              completion. Strong websites need both.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Is Shopify good for ecommerce website design?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Shopify can be a practical choice for businesses that want a
              managed ecommerce platform with built-in commerce functionality,
              payment options, hosting, and an extensive app ecosystem. The
              right platform depends on the store's catalog, operations,
              integrations, budget, and customization requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can a website generate B2B leads?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. A B2B website can generate leads through clear service
              positioning, useful content, industry pages, case studies,
              trust signals, landing pages, forms, calls to action, SEO,
              advertising, and analytics. The website should make it easy for
              qualified visitors to understand the offer and contact the
              business.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can BFASH redesign an existing website?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. A redesign can address outdated visual design, confusing
              navigation, weak mobile usability, poor content structure,
              technical SEO problems, slow pages, weak calls to action, and
              inconsistent branding. Existing content and search value can be
              reviewed before changes are made.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Can BFASH build an ecommerce website?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. BFASH can support ecommerce website projects involving
              Shopify and WooCommerce, including store structure, product
              pages, collections, visual assets, landing pages, SEO
              foundations, analytics, conversion strategy, and connections
              with broader digital marketing campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              Why should web design and SEO be handled together?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Web design determines much of the structure that SEO depends on.
              If SEO is considered from the beginning, the website can be
              organized around useful topics, logical URLs, internal links,
              readable content, technical foundations, structured data, and
              user experience instead of requiring major structural changes
              later.
            </p>
          </div>

        </div>

        {/* CONCLUSION */}
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
          Ready to Build a Website That Supports Business Growth?
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-5">
          A website should do more than exist. It should explain the business,
          attract the right audience, support search visibility, build trust,
          generate leads, sell products, and connect with the wider marketing
          system.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Whether the project is a small business website, B2B website,
          ecommerce store, Shopify project, WooCommerce website, marketplace
          brand, or complete website redesign,{" "}
          <Link
            to="/"
            className="text-brand hover:text-brand-strong underline"
          >
            BFASH
          </Link>{" "}
          combines web design, SEO, digital marketing, creative services,
          automation, and business growth strategy under one team.
        </p>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-brand-strong px-8 py-3 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Contact Us Today to Start Your Website Project
          </Link>
        </div>

      </section>
    </>
  );
}