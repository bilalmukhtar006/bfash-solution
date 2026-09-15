import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const FAQS = [
  {
    question: "What does a technical SEO agency do?",
    answer:
      "A technical SEO agency checks and improves the technical parts of a website that affect crawling, rendering, indexing, search visibility, and user experience. This can include site architecture, robots.txt, XML sitemaps, canonical URLs, redirects, broken links, JavaScript SEO, structured data, mobile performance, Core Web Vitals, and internal linking.",
  },
  {
    question: "Why is technical SEO important?",
    answer:
      "Technical SEO helps search engines access, understand, and index the pages that matter to a business. A strong technical foundation also helps users move through a website more easily. Without that foundation, good content and strong marketing can struggle to produce their full value.",
  },
  {
    question: "What is included in a technical SEO audit service?",
    answer:
      "A technical SEO audit can review crawlability, indexability, robots.txt, XML sitemaps, canonical tags, redirects, status codes, internal links, JavaScript rendering, structured data, mobile usability, page performance, Core Web Vitals, duplicate pages, image handling, URL structure, and other technical signals.",
  },
  {
    question: "Can technical SEO help ecommerce websites?",
    answer:
      "Yes. Ecommerce websites often have thousands of URLs, filters, product variants, category pages, pagination, inventory changes, and structured product information. Technical SEO helps search engines discover important products and categories while reducing unnecessary or duplicate URLs.",
  },
  {
    question: "What is ecommerce technical SEO?",
    answer:
      "Ecommerce technical SEO focuses on the technical problems that are common on online stores. It includes product and category architecture, crawlable navigation, faceted navigation, pagination, canonicalization, structured data, product availability, internal links, redirects, site speed, and indexation control.",
  },
  {
    question: "Does technical SEO help Google AI Overviews and AI search?",
    answer:
      "Technical SEO can help make important content accessible to search systems. Google says the fundamental SEO requirements for AI Overviews and AI Mode are the same as normal Search. Pages need to be crawlable, indexable, useful, and eligible to appear in Search. There is no special AI schema required.",
  },
  {
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are user-experience measurements for loading, responsiveness, and visual stability. The current metrics are Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Google's current good thresholds are LCP of 2.5 seconds or less, INP of 200 milliseconds or less, and CLS of 0.1 or less at the 75th percentile.",
  },
  {
    question: "Does BFASH work with B2B websites?",
    answer:
      "Yes. BFASH focuses strongly on B2B marketing and traffic generation. Technical SEO for B2B websites can include service architecture, industry pages, location pages, lead-generation journeys, CRM connections, analytics, conversion paths, and content structures designed around commercial search intent.",
  },
  {
    question: "Can BFASH audit Shopify, Amazon, eBay and other ecommerce businesses?",
    answer:
      "BFASH can support technical and digital marketing work around Shopify websites and broader ecommerce operations. Marketplace businesses can also benefit from technical analysis, product research, listing optimization, advertising, analytics, and traffic-generation strategies.",
  },
  {
    question: "Does BFASH use AI for technical SEO?",
    answer:
      "BFASH uses AI as part of research, analysis, automation, content organization, data processing, workflow design, and quality control. AI supports the work rather than replacing technical judgment. Human review remains important for decisions that affect a website's structure, search visibility, customers, and business goals.",
  },
  {
    question: "How often should a technical SEO audit be performed?",
    answer:
      "The right frequency depends on the size and change rate of a website. A small stable site may need periodic audits, while large ecommerce, B2B, or frequently updated websites benefit from continuous monitoring and regular technical checks after major releases, migrations, redesigns, or platform changes.",
  },
  {
    question: "Can a website rank without technical SEO?",
    answer:
      "Some websites can rank with technical weaknesses. However, technical problems can limit crawling, indexing, user experience, and the ability of search engines to understand important pages. Technical SEO is best viewed as the foundation that helps other SEO and marketing work perform more reliably.",
  },
  {
    question: "What is the difference between technical SEO and on-page SEO?",
    answer:
      "Technical SEO focuses mainly on how a website can be crawled, rendered, indexed, understood, and experienced. On-page SEO focuses more on the content and page-level elements that explain a topic and satisfy search intent, such as headings, titles, copy, internal links, images, and semantic relevance.",
  },
  {
    question: "Can technical SEO improve website traffic?",
    answer:
      "Technical SEO can remove barriers that prevent valuable pages from being crawled, indexed, understood, or discovered. It does not guarantee a specific ranking or traffic increase. Results depend on competition, content quality, authority, search demand, user intent, and many other factors.",
  },
  {
    question: "What tools can be used for a technical SEO audit?",
    answer:
      "A technical SEO workflow can use Google Search Console, Google Analytics, crawling tools, log data, PageSpeed Insights, Lighthouse, structured-data testing tools, server information, analytics platforms, and specialist SEO crawlers such as Ahrefs or Semrush. The tool is only part of the process; interpretation and prioritization matter just as much.",
  },
];

export const Route = createFileRoute("/services/technical-seo")({
  head: () => ({
    meta: [
      {
        title:
          "Technical SEO Agency for Search, AI & Business Growth | BFASH",
      },
      {
        name: "description",
        content:
          "BFASH is a technical SEO agency helping B2B, ecommerce, Shopify, Amazon, eBay and local businesses improve crawlability, indexability, site speed, technical SEO, AEO, GEO and search visibility.",
      },
      {
        name: "keywords",
        content:
          "technical seo agency, technical seo audit service, technical seo audit services, technical seo expert, ecommerce technical seo, technical seo audit, technical seo consultant, B2B technical SEO, SEO audit, AEO, GEO, AI search optimization",
      },
      {
        property: "og:title",
        content:
          "Technical SEO Agency for Search, AI & Business Growth | BFASH",
      },
      {
        property: "og:description",
        content:
          "Technical SEO, technical audits, ecommerce SEO, JavaScript SEO, structured data, Core Web Vitals, AEO and GEO for businesses that want stronger search visibility and better digital growth.",
      },
      {
        property: "og:url",
        content: "https://bfash.us/services/technical-seo",
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
        content:
          "Technical SEO Agency for Search, AI & Business Growth | BFASH",
      },
      {
        name: "twitter:description",
        content:
          "Technical SEO audits and technical optimization for B2B, ecommerce, local and growth-focused businesses.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://bfash.us/services/technical-seo",
      },
    ],
  }),

  component: TechnicalSEOPage,
});

function TechnicalSEOPage() {
  return (
    <>
      <ServicePage
        icon={Code2}
        eyebrow="Technical SEO & Search Infrastructure"
        title="Technical SEO Agency for Search, AI & Business Growth"
        subtitle="We build the technical foundation that helps Google, AI search systems, customers, and business teams find, understand, and use your website."
        intro="A beautiful website can still lose traffic when search engines cannot crawl it, index it, understand it, or connect its pages correctly. BFASH combines technical SEO, SEO audits, AEO, GEO, analytics, automation, and digital marketing to turn technical improvements into a stronger growth system."
        features={[
          {
            title: "Technical SEO Audit",
            desc: "We inspect crawlability, indexability, redirects, canonical URLs, XML sitemaps, robots.txt, internal links, JavaScript, structured data, page performance, and other technical areas.",
          },
          {
            title: "Ecommerce Technical SEO",
            desc: "We help Shopify and ecommerce websites manage product pages, categories, filters, variants, pagination, structured data, internal linking, and indexation.",
          },
          {
            title: "JavaScript & Rendering SEO",
            desc: "We investigate whether important content, links, metadata, and page elements are available to search engines when a website relies heavily on JavaScript.",
          },
          {
            title: "Core Web Vitals & Performance",
            desc: "We review loading, responsiveness, visual stability, image weight, code, third-party scripts, and other factors that affect real-world page experience.",
          },
          {
            title: "AEO, GEO & AI Search",
            desc: "We structure important information so it is clear, accessible, and useful across modern search experiences, while following Google's current guidance for AI features.",
          },
          {
            title: "B2B Technical SEO",
            desc: "We connect technical SEO with B2B service architecture, lead generation, CRM workflows, analytics, content hubs, location pages, and commercial search intent.",
          },
        ]}
        deliverables={[
          "Complete technical SEO audit",
          "Crawlability and indexability review",
          "Robots.txt and XML sitemap review",
          "Canonical and redirect analysis",
          "Internal linking and site architecture review",
          "JavaScript SEO and rendering checks",
          "Core Web Vitals and performance review",
          "Structured data and schema review",
          "Ecommerce technical SEO review",
          "AEO and GEO technical readiness",
          "B2B website technical recommendations",
          "Prioritized technical SEO action plan",
        ]}
      />

      <section className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 pb-24 pt-4 text-left">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            What Is Technical SEO?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Technical SEO is the part of search engine optimization that deals
            with the structure and technology of a website. It helps search
            engines discover pages, crawl them, render them, understand them,
            and decide which pages can enter the search index.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Think of a website as a large building. Content is what is inside
            the building. Links are the hallways. The sitemap is a map. The
            robots.txt file gives crawler instructions. The server is the
            foundation. Technical SEO checks whether the whole building works
            before we ask more people to visit it.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google describes its JavaScript search process in three broad
            stages: crawling, rendering, and indexing. If a website has a
            problem at one of these stages, important content may not receive
            the visibility it deserves.{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google Search Central explains JavaScript SEO
            </a>
            . :contentReference[oaicite:1]{index=1}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Why Businesses Need a Technical SEO Agency
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Many businesses start SEO by writing articles and adding keywords.
            That is useful, but it is not enough. A website can have excellent
            content and still have technical barriers.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            A page may be blocked from crawling. A product page may have the
            wrong canonical URL. A migration may create hundreds of broken
            links. A JavaScript application may show important information to
            people but not expose it correctly during search rendering. A
            filter system may create thousands of URLs that have little value.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            A technical SEO agency looks at these systems together. BFASH also
            connects technical SEO with the wider marketing system. That means
            we can examine SEO, AEO, GEO, CRM, social media, advertising,
            analytics, content, graphic design, video, ecommerce, and traffic
            generation as parts of one business funnel.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This matters because traffic is not the final goal. The goal is
            useful traffic that can become a lead, customer, sale, subscriber,
            partner, or business opportunity.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Technical SEO Audit Service: What We Check
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            A technical SEO audit is a structured investigation. We do not
            simply collect errors. We find the problems that matter most to the
            business and then rank them by impact.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            1. Crawlability
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Crawlability asks a simple question: can search engine crawlers
            reach the pages and resources that matter?
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We check robots.txt rules, internal links, XML sitemaps, response
            codes, redirects, blocked resources, orphan pages, navigation
            paths, and other discovery signals.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Ahrefs describes crawlability as the ability of a search engine
            crawler to access website pages and resources. It also points to
            sitemaps, internal links, nofollow links, and robots.txt as important
            parts of the crawl process.{" "}
            <a
              href="https://ahrefs.com/seo/glossary/crawlability"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Ahrefs: Crawlability
            </a>
            . :contentReference[oaicite:2]{index=2}
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            2. Indexability
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Crawlability and indexability are different. A crawler may reach a
            URL, but that does not mean the page should enter the search index.
            We therefore review noindex directives, canonical URLs, duplicate
            content, status codes, thin pages, redirects, and other indexation
            signals.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            The business question is important: which pages should Google find,
            and which pages should it ignore?
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            For example, an ecommerce store may have useful category and
            product pages but also create thousands of filter combinations. A
            good technical strategy separates useful search pages from pages
            that add little value.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            3. Canonical URLs
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Websites often expose similar content through multiple URLs.
            Canonicalization helps search engines understand which URL
            represents the main version of a page.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google explains that canonicalization is the process of selecting
            the representative URL from a group of duplicate or very similar
            URLs. Google can consider redirects, sitemap inclusion, HTTPS, and
            canonical annotations when choosing a canonical URL.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We review canonical signals rather than blindly adding canonical
            tags. A canonical should support the site's real architecture.
            Incorrect canonical tags can hide pages that a business actually
            wants indexed.{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/canonicalization"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google Search Central: Canonicalization
            </a>
            . :contentReference[oaicite:3]{index=3}
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            4. XML Sitemaps
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            An XML sitemap gives search engines a structured list of URLs that
            a website considers important. It does not guarantee indexing, but
            it can help search engines discover URLs.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We check whether the sitemap is available, valid, current, and
            aligned with the site's canonical URL strategy. We also look for
            URLs in the sitemap that should not be there.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            5. Internal Linking
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Internal links connect related pages on the same website. They help
            people navigate and help search engines understand relationships
            between pages.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This becomes especially important for a large B2B website or
            ecommerce store. A product should connect to its category. A
            category should connect to useful buying guides. A service page
            should connect to relevant supporting content. A blog should point
            users toward commercial pages when the connection is natural.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Ahrefs' current internal-linking guidance highlights the role of
            internal links in navigation, relevance, crawling, and site
            structure.{" "}
            <a
              href="https://ahrefs.com/blog/internal-links-for-seo/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Ahrefs: Internal Links for SEO
            </a>
            . :contentReference[oaicite:4]{index=4}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Ecommerce Technical SEO
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Ecommerce websites create special technical SEO challenges. A
            small store may have hundreds of URLs. A large store can have
            thousands or millions.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Products can have variants. Categories can have filters. Products
            can go out of stock. URLs can change. Prices can change. Inventory
            can change. Reviews can change. Stores can use JavaScript to load
            important content.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google maintains dedicated ecommerce SEO documentation covering
            product data, structured data, ecommerce site structure, URLs,
            pagination, and other technical topics.{" "}
            <a
              href="https://developers.google.com/search/docs/specialty/ecommerce"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google Search Central: Ecommerce SEO
            </a>
            . :contentReference[oaicite:5]{index=5}
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Shopify Technical SEO
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Shopify stores need both platform knowledge and SEO judgment. BFASH
            looks at the store structure, collections, products, navigation,
            metadata, internal links, images, performance, structured data,
            redirects, apps, and customer journey.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We also consider what happens after a visitor lands on the store.
            Technical SEO should support conversion. A technically clean page
            that is difficult to use does not solve the business problem.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Amazon and eBay Businesses
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Amazon and eBay have their own marketplace systems. Their product
            discovery rules are not identical to Google's organic search.
            Still, the wider business system needs strong research, product
            data, listings, advertising, creative assets, analytics, and
            inventory planning.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH can connect marketplace marketing with the rest of the
            business. This includes product research, listing optimization,
            marketplace advertising, visual content, CRM processes, social
            media, and traffic-generation campaigns.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            JavaScript SEO: When a Modern Website Becomes a Search Problem
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Modern websites often use React, JavaScript, dynamic components,
            APIs, and client-side rendering. These technologies can create
            excellent user experiences. They can also create SEO problems when
            important content or links are not available in a crawlable way.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google Search can process JavaScript, but Google also documents
            differences and limitations that developers should consider.
            Important content should not depend on a fragile client-side
            process when a simpler HTML structure can provide the same
            information.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH pays special attention to JavaScript websites because modern
            businesses increasingly use application-style websites, ecommerce
            platforms, interactive tools, and dynamic landing pages.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google also notes that its crawlers generally discover URLs through
            links in href attributes. JavaScript-driven interactions should not
            be the only way to expose important pages.{" "}
            <a
              href="https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google: Pagination and Incremental Page Loading
            </a>
            . :contentReference[oaicite:6]{index=6}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Core Web Vitals and Website Performance
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            People do not enjoy slow or unstable websites. Technical SEO
            therefore includes performance and user experience.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google's current Core Web Vitals are:
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>
              <strong>LCP:</strong> 2.5 seconds or less is the current good
              threshold.
            </li>
            <li>
              <strong>INP:</strong> 200 milliseconds or less is the current
              good threshold.
            </li>
            <li>
              <strong>CLS:</strong> 0.1 or less is the current good threshold.
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-5">
            These measurements are evaluated at the 75th percentile. LCP looks
            at loading performance. INP measures responsiveness. CLS measures
            visual stability.{" "}
            <a
              href="https://web.dev/articles/vitals"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              web.dev: Web Vitals
            </a>
            . :contentReference[oaicite:7]{index=7}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH can investigate large images, heavy scripts, third-party
            tools, CSS, JavaScript execution, layout movement, server response
            problems, and other causes of slow experiences.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We do not chase a score just because a tool displays a number. We
            look at what the number means for real users and for the business.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Structured Data and Semantic SEO
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Search engines need to understand what a page represents. Structured
            data gives machines a standardized way to describe information on a
            page.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            For ecommerce websites, structured data can describe products,
            offers, reviews, and other information. It should match the visible
            content on the page. It should not be treated as a magic ranking
            button.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google explains that structured data can improve its understanding
            of ecommerce content and may support how content is presented in
            Search.{" "}
            <a
              href="https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google: Structured Data for Ecommerce
            </a>
            . :contentReference[oaicite:8]{index=8}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Technical SEO for AEO, GEO and AI Search
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Search is changing. People now ask longer questions and use AI
            systems to explore products, services, companies, problems, and
            solutions.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This creates a new technical question: can machines access and
            understand the information that a business wants to be known for?
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google says the normal SEO fundamentals remain relevant for AI
            Overviews and AI Mode. It specifically recommends allowing
            crawling, making content discoverable through internal links,
            providing important information in text, supporting content with
            useful media, maintaining good page experience, and ensuring
            structured data matches visible content.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google also says there are no special technical requirements or
            special schema types required solely to appear in AI Overviews or
            AI Mode.{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google Search Central: AI Features and Your Website
            </a>
            . :contentReference[oaicite:9]{index=9}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            That is why BFASH treats GEO as an extension of strong search
            foundations rather than a collection of secret AI tricks.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Our approach focuses on clear entities, strong topical structure,
            useful answers, supporting evidence, internal relationships,
            structured information, accessible content, and trustworthy
            business information.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            AI Automation and BFASH R&D
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            AI is useful when it removes repetitive work and helps a team see
            patterns faster. It becomes dangerous when it produces large
            amounts of generic content without research or review.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH uses AI as part of a wider research and automation workflow.
            Possible applications include technical issue classification,
            keyword clustering, URL analysis, content-gap research, internal
            linking suggestions, structured-data checks, reporting,
            competitor analysis, data cleaning, workflow automation, and
            research assistance.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Human review remains central. A machine can identify thousands of
            URLs. A strategist must decide which URLs matter. An AI model can
            suggest a content relationship. An SEO expert must decide whether
            the relationship makes business sense.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google also warns that generating many pages with AI without adding
            value can violate its spam policies on scaled content abuse. Our
            goal is therefore not "more AI content." The goal is better
            research, better decisions, better automation, and better original
            output.{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google: Guidance on Generative AI Content
            </a>
            . :contentReference[oaicite:10]{index=10}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Technical SEO for B2B Marketing
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            B2B websites often have a different search journey from ecommerce
            stores. A buyer may visit several pages before contacting a sales
            team. They may compare vendors, read technical documents, review
            services, check case studies, and return several days later.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Technical SEO must support this journey.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH can structure B2B websites around services, industries,
            problems, solutions, locations, use cases, resources, and
            commercial pages. We can also connect SEO traffic with CRM
            management, email marketing, social media, paid advertising, and
            sales processes.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This is one reason BFASH is positioned as a digital marketing and
            business growth agency rather than only an SEO provider.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Technical SEO and Local Search
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Local businesses need technical foundations too. A Google Business
            Profile can bring valuable local visibility, but the website still
            needs clear services, locations, contact information, supporting
            pages, internal links, and trustworthy business signals.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH combines technical SEO with GMB optimization, local SEO,
            content, social media, advertising, and conversion-focused landing
            pages.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            The aim is simple: help people find the business and give them a
            clear next step.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Technical SEO Audit Checklist
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            A practical technical SEO audit can include the following areas:
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>HTTP and HTTPS configuration</li>
            <li>Robots.txt rules</li>
            <li>XML sitemap health</li>
            <li>Indexability</li>
            <li>Canonical URLs</li>
            <li>301 and other redirects</li>
            <li>404 and 5xx errors</li>
            <li>Broken internal links</li>
            <li>Orphan pages</li>
            <li>Internal linking depth</li>
            <li>Duplicate content</li>
            <li>JavaScript rendering</li>
            <li>Mobile usability</li>
            <li>Core Web Vitals</li>
            <li>Page speed</li>
            <li>Image optimization</li>
            <li>Structured data</li>
            <li>Open Graph and social metadata</li>
            <li>International SEO signals when relevant</li>
            <li>Ecommerce product and category architecture</li>
            <li>Pagination</li>
            <li>Faceted navigation</li>
            <li>Search Console indexing data</li>
            <li>Analytics and conversion tracking</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Semrush currently describes technical auditing across areas such as
            crawlability, HTTPS, performance, Core Web Vitals, markup,
            international SEO, internal links, and AI crawler accessibility.
            :contentReference[oaicite:11]{index=11}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Ahrefs also describes a technical audit as a process that can
            examine crawlability, indexability, architecture, mobile
            friendliness, on-page elements, links, and other areas that affect
            organic search performance. :contentReference[oaicite:12]{index=12}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            How BFASH Prioritizes Technical SEO Problems
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Not every warning deserves the same amount of time.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            A technical SEO tool can produce a long list of errors. A good
            strategy separates serious problems from low-priority warnings.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We normally ask four questions:
          </p>

          <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-8">
            <li>Does this issue block crawling or indexing?</li>
            <li>Does it affect important pages?</li>
            <li>Does it harm users or conversions?</li>
            <li>Can the problem be fixed safely and efficiently?</li>
          </ol>

          <p className="text-muted-foreground leading-relaxed mb-5">
            A blocked commercial page should usually receive more attention
            than a minor metadata warning. A broken checkout deserves urgent
            attention. A small issue on an unimportant page may not.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This impact-first approach keeps technical SEO connected to
            business results.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Measuring Technical SEO Results
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Technical SEO should be measurable. We use the right data for the
            type of project.
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Indexed pages</li>
            <li>Valid and excluded URLs</li>
            <li>Organic clicks</li>
            <li>Organic impressions</li>
            <li>Average search position</li>
            <li>Search queries</li>
            <li>Organic landing pages</li>
            <li>Conversions</li>
            <li>Leads</li>
            <li>Revenue where tracking is available</li>
            <li>Core Web Vitals</li>
            <li>Crawl errors</li>
            <li>Broken links</li>
            <li>Page performance</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Google Search Console's Performance report includes metrics such as
            clicks, impressions, CTR, and position. It also explains how data
            can be aggregated by property or page, which matters when analyzing
            SEO performance correctly.{" "}
            <a
              href="https://support.google.com/webmasters/answer/17011364"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Google Search Console Performance Report
            </a>
            . :contentReference[oaicite:13]{index=13}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We do not promise an artificial ranking number. Search visibility
            depends on competition, content, authority, relevance, user
            behavior, technical quality, and many other signals.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Our Technical SEO Workflow
          </h2>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 1: Understand the Business
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We first identify the products, services, customers, markets,
            competitors, sales process, locations, and business goals.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 2: Crawl and Collect Data
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We collect technical information from the website, search tools,
            analytics systems, and available business data.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 3: Find the Important Problems
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We group problems by crawlability, indexability, performance,
            architecture, content relationships, structured data, ecommerce,
            JavaScript, and conversion impact.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 4: Prioritize
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We create a practical order of work. Critical problems come first.
            Cosmetic warnings come later.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 5: Implement
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Depending on the project, implementation can include developers,
            content teams, designers, ecommerce managers, marketing teams, or
            BFASH specialists.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 6: Test Again
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Technical changes need testing. A fix can create another problem
            if implemented without care. We re-crawl and re-check important
            areas after major changes.
          </p>

          <h3 className="text-2xl font-display font-bold mt-10 mb-4">
            Step 7: Measure Business Impact
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Finally, we compare technical improvements with search visibility,
            traffic, leads, sales, and other relevant business metrics.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Why BFASH?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH does not treat technical SEO as an isolated task.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            We combine technical SEO with digital marketing and business
            growth. That gives a business one wider system for search, content,
            social media, advertising, CRM, ecommerce, creative work, and
            traffic generation.
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Technical SEO and SEO audits</li>
            <li>On-page SEO and semantic content</li>
            <li>AEO and GEO strategy</li>
            <li>B2B marketing and lead generation</li>
            <li>GMB and local search</li>
            <li>Social media management</li>
            <li>Social media advertising</li>
            <li>CRM management</li>
            <li>Email marketing</li>
            <li>Shopify growth</li>
            <li>Amazon and eBay marketplace support</li>
            <li>TikTok Shop support</li>
            <li>Graphic design and vector illustration</li>
            <li>Photoshop and image production</li>
            <li>Video and creative production</li>
            <li>AI-assisted research and automation</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This combination matters because technical improvements should
            support real marketing goals. A faster page should help people
            engage. Better architecture should help users discover services. A
            cleaner ecommerce structure should help products get found. Better
            data should help the marketing team make better decisions.
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Frequently Asked Questions
          </h2>

          {FAQS.map((faq) => (
            <div key={faq.question} className="mb-8">
              <h3 className="text-xl font-display font-bold mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Research and Authoritative Sources
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            This page uses current guidance from major search and SEO research
            sources. The sources below are also useful for teams that want to
            study technical SEO in more depth.
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-10">
            <li>
              <a
                href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Google Search Central — JavaScript SEO Basics
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/search/docs/crawling-indexing/canonicalization"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Google Search Central — Canonicalization
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/search/docs/specialty/ecommerce"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Google Search Central — Ecommerce SEO
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Google Search Central — Ecommerce Structured Data
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/search/docs/appearance/ai-features"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Google Search Central — AI Features and Your Website
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Google Search Central — Generative AI Content Guidance
              </a>
            </li>
            <li>
              <a
                href="https://web.dev/articles/vitals"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                web.dev — Core Web Vitals
              </a>
            </li>
            <li>
              <a
                href="https://ahrefs.com/seo/glossary/crawlability"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Ahrefs — Crawlability
              </a>
            </li>
            <li>
              <a
                href="https://ahrefs.com/blog/technical-seo-audit/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Ahrefs — Technical SEO Audit
              </a>
            </li>
            <li>
              <a
                href="https://ahrefs.com/blog/internal-links-for-seo/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Ahrefs — Internal Links for SEO
              </a>
            </li>
            <li>
              <a
                href="https://www.semrush.com/blog/technical-seo-checklist/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Semrush — Technical SEO Checklist
              </a>
            </li>
            <li>
              <a
                href="https://www.semrush.com/blog/seo-audit/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Semrush — SEO Audit
              </a>
            </li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-16 mb-6">
            Build a Stronger Technical Foundation
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Technical SEO is not about making a website complicated. It is
            about removing unnecessary barriers.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            Search engines need to find the right pages. People need to use
            those pages easily. Business teams need useful data. AI systems
            need accessible information. Ecommerce platforms need clean
            product structures. Sales teams need qualified traffic.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-5">
            BFASH brings these pieces together through technical SEO,
            digital marketing, automation, creative production, ecommerce
            management, CRM, social media, advertising, AEO, GEO, and B2B
            growth strategies.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            If a website has traffic problems, indexing problems, performance
            problems, ecommerce architecture issues, JavaScript SEO problems,
            or a larger growth challenge, the first step is to understand what
            is happening. From there, the right technical and marketing work
            can be planned.
          </p>

          <div className="rounded-2xl border bg-muted/30 p-7 md:p-10 mt-12">
            <h3 className="text-2xl font-display font-bold mb-4">
              Need a Technical SEO Audit?
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Talk with BFASH about technical SEO, ecommerce SEO, B2B SEO,
              AEO, GEO, website performance, search visibility, or a complete
              digital growth strategy.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a Technical SEO Consultation
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Technical SEO Services",
            serviceType: "Technical SEO",
            provider: {
              "@type": "Organization",
              name: "BFASH",
              url: "https://bfash.us/",
            },
            url: "https://bfash.us/services/technical-seo",
            description:
              "Technical SEO audits and technical search optimization for B2B, ecommerce, local and growth-focused businesses.",
            areaServed: "Worldwide",
          }),
        }}
      />
    </>
  );
}