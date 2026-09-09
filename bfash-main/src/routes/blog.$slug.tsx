import { createFileRoute, Link } from "@tanstack/react-router";

const SITE_URL = "https://bfash.us";
const title = "SEO Expert: How the Right Strategy Helps People Find, Trust, and Choose Your Business | BFASH Blog";
const description = "Learn how an SEO expert uses keyword research, technical SEO, semantic content, local SEO, B2B strategy, GEO, AEO, and AI automation to grow qualified traffic and business visibility.";

function getPostContent(slug: string) {
  if (slug !== "seo-expert") return `<p>Article not found.</p>`;

  return `
    <p class="lead">Search engine optimization is not just about adding keywords to a page. A strong SEO strategy helps the right people find a business, understand its value, trust its information, and take the next step.</p>
    <p>An <strong>SEO expert</strong> connects search behavior, website technology, content, authority, local visibility, and business goals. At BFASH, SEO is treated as a growth system rather than a list of isolated tasks.</p>

    <div class="my-8 grid gap-4 sm:grid-cols-3">
      <div class="rounded-2xl border border-border bg-background p-5"><b class="text-brand">Research</b><p>Understand customers, queries, competitors, intent, and market gaps.</p></div>
      <div class="rounded-2xl border border-border bg-background p-5"><b class="text-brand">Optimize</b><p>Improve technical health, content, structure, internal links, and authority.</p></div>
      <div class="rounded-2xl border border-border bg-background p-5"><b class="text-brand">Grow</b><p>Measure qualified traffic, leads, conversions, sales, and visibility.</p></div>
    </div>

    <h2 id="what">What Does an SEO Expert Actually Do?</h2>
    <p>An SEO expert studies how people search and how search systems understand websites. The process starts with questions: What does the customer need? What words do they use? What pages already answer the question? What is missing? Can search engines access the important pages?</p>
    <ul><li>Keyword research and search-intent analysis</li><li>Technical SEO audits and fixes</li><li>Site architecture and URL planning</li><li>On-page SEO and semantic content</li><li>Internal linking and content clusters</li><li>Local SEO and Google Business Profile optimization</li><li>B2B and ecommerce SEO</li><li>Backlink and digital authority strategies</li><li>SEO analytics and conversion tracking</li><li>GEO, AEO, and AI-search visibility</li></ul>
    <p><strong>Research → Strategy → Technical SEO → Content → Authority → Measurement → Improvement.</strong></p>

    <h2 id="keywords">Keyword Research: Start With What People Need</h2>
    <p>People often use different words to describe the same problem. One business owner may search <em>"SEO expert"</em>. Another may search <em>"SEO consultant for small business"</em>. Someone else may ask, <em>"How can I get more traffic from Google?"</em></p>
    <p>These queries have different wording, but they can represent the same need. Keyword research should consider meaning, competition, search intent, and the buyer journey.</p>
    <h3>Search intent changes the right page</h3>
    <p>Someone searching <em>"what is SEO?"</em> is usually learning. Someone searching <em>"best SEO expert for a small business"</em> is comparing options. Someone searching <em>"SEO expert near me"</em> may be ready to contact a provider.</p>
    <p>A good SEO strategy maps each important query to the page that best satisfies it. This also helps prevent keyword cannibalization.</p>
    <!-- EXTLINK: Replace with the final approved research URL if required. -->
    <p class="rounded-xl border border-border bg-muted/30 p-4 text-sm"><strong>Research note:</strong> Zach Paruch's Semrush research discusses search-intent analysis and information architecture as parts of a data-driven SEO process. <a href="https://www.semrush.com/blog/" target="_blank" rel="noopener noreferrer">Read related Semrush research</a>.</p>

    <h2 id="semantic">Semantic SEO: Cover the Topic, Not Just the Keyword</h2>
    <p>Modern SEO should not depend on repeating one phrase again and again. A useful page should explain the subject naturally and cover the related concepts a reader expects.</p>
    <p>For an SEO expert topic, that semantic field can include keyword research, search intent, technical SEO, on-page SEO, content strategy, internal linking, backlinks, local SEO, Google Business Profile, B2B SEO, ecommerce SEO, analytics, GEO, AEO, AI search, AI citations, brand mentions, and entity understanding.</p>
    <p>This creates a stronger topical map for readers and for future supporting articles.</p>

    <h2 id="technical">Technical SEO: Make the Website Easy to Discover</h2>
    <p>Great content cannot perform well if important pages are difficult for search systems to discover, render, or index. Technical SEO focuses on the foundation.</p>
    <div class="my-7 rounded-2xl border border-border bg-background p-6"><h3 class="mt-0">Technical SEO checklist</h3><div class="grid gap-x-8 gap-y-3 sm:grid-cols-2"><span>✓ Crawlability</span><span>✓ Indexing</span><span>✓ XML sitemaps</span><span>✓ Robots.txt</span><span>✓ Canonical URLs</span><span>✓ Redirects</span><span>✓ Broken links</span><span>✓ Page speed</span><span>✓ Mobile usability</span><span>✓ Structured data</span><span>✓ Internal linking</span><span>✓ JavaScript rendering</span><span>✓ Duplicate content</span><span>✓ Clean URL structure</span></div></div>
    <p>Technical accessibility also matters for modern AI-search systems. If a website cannot be discovered or accessed properly, its information has fewer opportunities to be retrieved and understood.</p>

    <h2>Content Marketing and SEO Work Together</h2>
    <p>Content answers questions before a customer talks to a sales team. It can explain a problem, compare solutions, demonstrate expertise, and move a reader toward a decision.</p>
    <p>The Semrush keyword research supplied for this project reports <strong>147 keywords</strong>, <strong>16,160 total search volume</strong>, and <strong>26% average keyword difficulty</strong> for the Content Marketing keyword set.</p>
    <div class="my-7 overflow-x-auto rounded-2xl border border-border"><table class="w-full min-w-[520px] text-left"><thead class="bg-muted/50"><tr><th class="px-4 py-3">Keyword</th><th class="px-4 py-3">Volume</th><th class="px-4 py-3">KD</th></tr></thead><tbody class="divide-y divide-border"><tr><td class="px-4 py-3">why is content marketing important</td><td class="px-4 py-3">1,300</td><td class="px-4 py-3">45%</td></tr><tr><td class="px-4 py-3">what is b2b content marketing</td><td class="px-4 py-3">720</td><td class="px-4 py-3">28%</td></tr><tr><td class="px-4 py-3">how to do keyword research for content marketing</td><td class="px-4 py-3">480</td><td class="px-4 py-3">43%</td></tr><tr><td class="px-4 py-3">why content marketing</td><td class="px-4 py-3">480</td><td class="px-4 py-3">45%</td></tr></tbody></table></div>
    <p>Volume alone does not decide what a business should publish. The page must match the audience, intent, competition, and business goal.</p>

    <h2 id="topical">Topical Authority and Content Clusters</h2>
    <p>A website becomes easier to understand when its pages have clear relationships. A pillar page can explain a broad topic. Supporting articles can answer narrower questions. Internal links can connect those pages.</p>
    <p>An SEO cluster could include technical SEO, keyword research, local SEO, GMB SEO, B2B SEO, ecommerce SEO, link building, GEO, AEO, and AI search. The goal is not hundreds of weak pages. The goal is useful coverage.</p>

    <h2 id="b2b">SEO for B2B Companies</h2>
    <p>B2B marketing often has a longer buying journey. A potential customer may first learn about a problem, compare solutions, review providers, speak with sales, and request a proposal.</p>
    <ol><li><strong>Discovery:</strong> What is B2B digital marketing?</li><li><strong>Research:</strong> How does SEO help B2B companies?</li><li><strong>Evaluation:</strong> What should a B2B company look for in an SEO agency?</li><li><strong>Commercial:</strong> B2B SEO agency</li><li><strong>Conversion:</strong> Contact an SEO expert</li></ol>
    <p>BFASH combines B2B SEO with content, websites, paid advertising, CRM management, email marketing, and conversion strategy.</p>

    <h2 id="local">Local SEO, GMB SEO, and Google Maps</h2>
    <p>Local businesses often need visibility in both organic search and location-based results. A local SEO strategy can include Google Business Profile optimization, local keyword research, location content, reviews, citations, consistent business information, local links, and conversion-focused landing pages.</p>
    <p>GMB SEO is a common term for Google Business Profile optimization. The profile should clearly communicate the business category, services, location, website, hours, photos, and reviews. It should support the website, not replace it.</p>

    <h2 id="backlinks">Backlinks: Relevance Matters More Than Volume</h2>
    <p>Backlinks are links from other websites to a website. They can help discovery and contribute to authority, but irrelevant links are not the same as a strong authority profile.</p>
    <p>A practical framework is <strong>Relevance + Trust + Editorial Value.</strong></p>
    <p>The research supplied for this page includes realistic approaches such as responding to media requests, creating link-worthy assets, and finding broken-link opportunities.</p>
    <!-- EXTLINK: Add the final approved backlink research URL here later. -->
    <p class="text-sm text-muted-foreground"><strong>Research source:</strong> Rachel Handley — Semrush, <em>How to Get Backlinks: 10 Realistic Methods</em>.</p>

    <h2 id="blackhat">Why Black Hat SEO Is a Bad Long-Term Strategy</h2>
    <p>Black hat SEO tries to manipulate search results instead of improving the website for users. Examples include keyword stuffing, hidden text, doorway pages, cloaking, manipulative links, misleading redirects, and low-quality automated content.</p>
    <p>The supplied Semrush research reports <strong>5,400 US searches</strong>, <strong>51% keyword difficulty</strong>, and <strong>$5.57 CPC</strong> for "black hat SEO". The related query "what is white hat and black hat SEO" shows <strong>1,000 searches</strong> and <strong>26% KD</strong>.</p>
    <p>These figures show interest in the topic. They do not make manipulative SEO a good business strategy. Sustainable SEO focuses on useful content, technical quality, relevance, trust, and user experience.</p>
    <!-- EXTLINK: Add the final approved Semrush black-hat URL here later. -->
    <p class="text-sm text-muted-foreground"><strong>Research source:</strong> Connor Lahey — Semrush, <em>What Is Black Hat SEO? 9 Risky Techniques To Avoid</em>.</p>

    <h2 id="geo">SEO, AEO, and GEO: Three Connected Search Concepts</h2>
    <p>Traditional SEO focuses on organic search visibility. AEO, or Answer Engine Optimization, focuses on answering questions clearly. GEO, or Generative Engine Optimization, focuses on making information easier for generative AI systems to understand and potentially surface.</p>
    <div class="my-7 rounded-2xl border border-brand/30 bg-brand/5 p-6"><h3 class="mt-0">Practical GEO and AEO checklist</h3><ul><li>Answer real customer questions directly.</li><li>Use clear headings and short sections.</li><li>Support important claims with credible sources.</li><li>Keep business information consistent across the web.</li><li>Make important pages technically accessible.</li><li>Build relevant third-party mentions and authority.</li><li>Measure AI visibility instead of promising guaranteed citations.</li></ul></div>

    <h2>Where Does AI Get Information About a Business?</h2>
    <p>Zach Paruch's Semrush research explains that AI systems can obtain information through multiple pathways, including training, live online retrieval, licensing partnerships, and user-initiated actions.</p>
    <p>The website matters, but it is not the entire digital footprint. Consistent information across relevant third-party sources can help create a clearer picture of the brand.</p>
    <p>AI citations should never be presented as guaranteed. The responsible goal is to make a business <strong>clear, relevant, accessible, consistent, useful, and trustworthy</strong>.</p>
    <!-- EXTLINK: Final approved AI-search research URL can replace this source link. -->
    <p class="rounded-xl border border-border bg-muted/30 p-4 text-sm"><strong>Research:</strong> <a href="https://www.semrush.com/blog/" target="_blank" rel="noopener noreferrer">Zach Paruch — Semrush AI visibility research</a>.</p>

    <h2 id="automation">AI Automation at BFASH</h2>
    <p>AI can make SEO research faster, but automation should support strategy rather than replace human judgment. BFASH uses AI-assisted workflows for repetitive research and organization while keeping human review in the process.</p>
    <div class="my-7 grid gap-3 sm:grid-cols-2"><div class="rounded-xl border border-border p-4">Keyword clustering</div><div class="rounded-xl border border-border p-4">Search-intent classification</div><div class="rounded-xl border border-border p-4">Content briefs</div><div class="rounded-xl border border-border p-4">Topic mapping</div><div class="rounded-xl border border-border p-4">Competitor research</div><div class="rounded-xl border border-border p-4">Content-gap analysis</div><div class="rounded-xl border border-border p-4">Internal-link suggestions</div><div class="rounded-xl border border-border p-4">Content audits and reporting</div></div>
    <p><strong>AI assists → Human verifies → Strategy improves → Content gets published → Data gets measured.</strong></p>
    <p>Academic research by Yogesh K. Dwivedi and colleagues also highlights both the opportunities and risks of generative conversational AI, including credibility, bias, misinformation, transparency, privacy, security, and responsible use.</p>

    <h2>SEO for Shopify, Amazon, eBay, and TikTok Shop Businesses</h2>
    <p>Ecommerce SEO needs attention to product pages, category structure, images, internal links, buying questions, and technical discovery. BFASH also supports businesses using Shopify, Amazon, eBay, TikTok Shop, and other digital commerce channels.</p>

    <h2 id="results">Measure SEO by Business Outcomes</h2>
    <p>A number-one ranking is not the only measure of SEO success. A keyword can bring thousands of visits and produce few customers. Another can bring fewer visitors but produce qualified leads.</p>
    <ul><li>Organic traffic</li><li>Qualified traffic</li><li>Leads and calls</li><li>Form submissions</li><li>Sales and revenue</li><li>Conversion rate</li><li>Cost per acquisition</li><li>Return on investment</li></ul>

    <h2>Why Choose BFASH for SEO?</h2>
    <p>BFASH combines SEO with website design, graphic design, video and vector illustration, Photoshop, CRM management, social media handling, Google Ads, social advertising, email marketing, virtual assistance, TikTok Shop, Amazon, eBay, and B2B traffic generation.</p>
    <p>SEO can create the opportunity. A connected digital system can help turn that opportunity into business growth.</p>

    <h2 id="faqs">Frequently Asked Questions About SEO Experts</h2>
    <h3>What is an SEO expert?</h3><p>An SEO expert helps a website improve search visibility through research, technical optimization, content strategy, authority building, and performance analysis.</p>
    <h3>What does an SEO expert do?</h3><p>The work can include keyword research, technical audits, on-page SEO, content planning, internal linking, local SEO, backlink strategy, analytics, conversion tracking, GEO, and AI-search visibility.</p>
    <h3>How can an SEO expert increase website traffic?</h3><p>By finding relevant search opportunities, fixing technical barriers, creating useful content, improving existing pages, strengthening internal links, building authority, and matching content to search intent.</p>
    <h3>Is SEO still important with AI search?</h3><p>Yes. Search engines remain important discovery systems, and AI systems can also retrieve information from the web. GEO and AEO can complement SEO rather than replace it.</p>
    <h3>What is the difference between SEO and GEO?</h3><p>SEO focuses on organic search visibility. GEO focuses on making information easier for generative AI systems to understand and potentially surface in AI-generated answers.</p>
    <h3>Can an SEO expert guarantee Google rankings?</h3><p>No responsible SEO provider can guarantee a specific Google position. Rankings depend on competition, intent, technical health, content, authority, location, algorithmic changes, and other factors.</p>
    <h3>How long does SEO take?</h3><p>There is no universal timeline. Results depend on the website's starting condition, competition, market, authority, technical health, content, and goals.</p>
    <h3>What is technical SEO?</h3><p>Technical SEO improves the website foundation so search engines can crawl, render, understand, and index important pages.</p>
    <h3>What is local SEO?</h3><p>Local SEO improves visibility for searches connected to a location. It can include Google Business Profile optimization, local content, reviews, citations, location pages, local links, and conversion-focused pages.</p>
    <h3>What is GMB SEO?</h3><p>GMB SEO is a common term for Google Business Profile optimization. It focuses on accurate, relevant, and useful business information for local discovery.</p>
    <h3>What is black hat SEO?</h3><p>Black hat SEO refers to manipulative tactics intended to influence rankings instead of improving the website for users. Sustainable SEO focuses on usefulness, quality, relevance, trust, and legitimate authority.</p>
    <h3>Can AI replace an SEO expert?</h3><p>AI can automate parts of SEO research and production, but strategy still needs context, verification, experience, business understanding, and human judgment.</p>
    <h3>Can BFASH help B2B companies?</h3><p>Yes. BFASH combines B2B SEO, content, website strategy, paid advertising, lead generation, CRM, email marketing, and conversion-focused digital marketing.</p>
    <h3>Can BFASH help ecommerce businesses?</h3><p>Yes. BFASH supports ecommerce businesses across Shopify, Amazon, eBay, TikTok Shop, and other digital commerce channels.</p>

    <h2>Final Takeaway</h2>
    <p>Good SEO starts with understanding people. It then connects that understanding to a technically healthy website, useful content, relevant authority, and measurable business goals.</p>
    <p>The strongest strategy is not to repeat <em>"SEO expert"</em> until a page sounds unnatural. It is to build a page that genuinely explains the subject, answers real questions, uses credible research, and gives readers a clear next step.</p>

    <div class="my-10 rounded-3xl border border-brand/30 bg-brand/5 p-7 text-center"><p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Ready to grow?</p><h2 class="mt-2">Turn search visibility into a real business strategy.</h2><p>Start with the website, market, competitors, audience, and growth goal.</p><!-- INTLINK: Update only if the final quote route changes. --><a href="/quote" class="mt-4 inline-flex rounded-xl bg-brand px-6 py-3 font-semibold text-white no-underline">Request a Growth Strategy</a></div>

    <hr /><h2>Research and Sources</h2>
    <ul><li><strong>Zach Paruch — Semrush:</strong> AI information pathways, AI visibility, search strategy, technical accessibility, mentions, and citations.</li><li><strong>Ghulam Ali — SEO & GEO research:</strong> keyword research, search intent, semantic content, technical SEO, topical coverage, indexing, and authority.</li><li><strong>Yogesh K. Dwivedi and colleagues:</strong> research on generative conversational AI and responsible use.</li><li><strong>Connor Lahey — Semrush:</strong> black hat SEO and risky manipulative tactics.</li><li><strong>Rachel Handley — Semrush:</strong> practical backlink-building methods.</li></ul>
  `;
}

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: params.slug === "seo-expert" ? title : "BFASH Blog" },
      { name: "description", content: params.slug === "seo-expert" ? description : "Digital marketing, SEO, GEO, AEO, AI automation, and business growth insights from BFASH." },
      { name: "keywords", content: "SEO expert, SEO experts, SEO consultant, SEO agency, SEO services, technical SEO, keyword research, semantic SEO, local SEO, GMB SEO, B2B SEO, ecommerce SEO, GEO, AEO, AI SEO, AI search optimization, link building, organic traffic" },
      { name: "author", content: "BFASH" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/blog/${params.slug}` },
      { property: "og:image", content: `${SITE_URL}/logo.webp` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/logo.webp` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog/${params.slug}` }],
  }),
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const isSeoExpert = slug === "seo-expert";

  if (!isSeoExpert) return <main className="min-h-screen px-2 sm:px-4"><div className="mx-auto max-w-6xl py-12"><Link to="/" className="text-brand">← Back to home</Link><div className="mt-8" dangerouslySetInnerHTML={{ __html: getPostContent(slug) }} /></div></main>;

  return (
    <main className="min-h-screen overflow-hidden px-2 sm:px-3 md:px-4">
      <div className="ml-0 mr-auto w-full max-w-[1400px] py-5 sm:py-8 lg:py-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground"><div className="flex flex-wrap items-center gap-2"><Link to="/" className="text-brand no-underline hover:underline">Home</Link><span>/</span><Link to="/blog" className="text-brand no-underline hover:underline">Blog</Link><span>/</span><span>SEO Expert</span></div></nav>

        <header className="relative overflow-hidden rounded-3xl border border-border bg-card px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative"><div className="mb-5 inline-flex rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">SEO Strategy • GEO • AEO • AI Search</div><h1 className="max-w-5xl text-3xl font-display font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">SEO Expert: How the Right Strategy Helps People Find, Trust, and Choose Your Business</h1><p className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">A practical, research-led guide to keyword research, technical SEO, semantic content, local visibility, B2B growth, GEO, AEO, and AI-assisted SEO workflows.</p><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground"><span>By <strong className="text-foreground">BFASH</strong></span><span>•</span><span>SEO & Digital Growth Research</span><span>•</span><span>Updated for 2026</span></div></div>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <article className="min-w-0 rounded-3xl border border-border bg-card px-4 py-7 shadow-sm sm:px-7 sm:py-9 md:px-9 lg:px-11 lg:py-12 [&_.lead]:text-lg [&_.lead]:font-medium [&_.lead]:leading-8 [&_.lead]:text-foreground [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:leading-tight sm:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mt-5 [&_p]:leading-7 [&_p]:text-muted-foreground [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_li]:leading-7 [&_strong]:text-foreground [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_hr]:my-10 [&_hr]:border-border [&_table]:border-collapse" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content={title} /><meta itemProp="author" content="BFASH" /><meta itemProp="publisher" content="BFASH" /><meta itemProp="mainEntityOfPage" content={`${SITE_URL}/blog/seo-expert`} />
            <div dangerouslySetInnerHTML={{ __html: getPostContent(slug) }} />
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">On this page</p>
              <nav className="mt-4 space-y-1 text-sm">
                {[
                  ["What does an SEO expert do?", "#what"],
                  ["Keyword research", "#keywords"],
                  ["Semantic SEO", "#semantic"],
                  ["Technical SEO", "#technical"],
                  ["Topical authority", "#topical"],
                  ["B2B SEO", "#b2b"],
                  ["Local SEO & GMB", "#local"],
                  ["Backlinks", "#backlinks"],
                  ["Black hat SEO", "#blackhat"],
                  ["SEO, AEO & GEO", "#geo"],
                  ["AI automation", "#automation"],
                  ["Business outcomes", "#results"],
                  ["FAQs", "#faqs"],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="block rounded-lg px-3 py-2 text-muted-foreground no-underline transition hover:bg-muted hover:text-foreground">
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Contact BFASH</p>
                <h2 className="mt-2 text-2xl font-display font-bold leading-tight">Let's talk about growth</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Fill out the form and send the team a message. A clear brief helps BFASH understand the business, website, market, and goals.</p>
              </div>

              <form action="https://api.web3forms.com/submit" method="POST" id="blog-contact-form" className="space-y-4">
                <input type="hidden" name="access_key" value="871b202d-31db-4929-9c44-4ab92415006e" />
                <input type="hidden" name="subject" value="New SEO Strategy Inquiry from BFASH Blog" />
                <input type="hidden" name="from_name" value="BFASH Blog Contact Form" />
                <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />

                <div>
                  <label htmlFor="blog-name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" name="name" id="blog-name" placeholder="John Doe" required className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40" />
                </div>

                <div>
                  <label htmlFor="blog-email" className="mb-1.5 block text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" name="email" id="blog-email" placeholder="you@company.com" required className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40" />
                </div>

                <div>
                  <label htmlFor="blog-phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                  <input type="text" name="phone" id="blog-phone" placeholder="+1 (555) 123-4567" required className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40" />
                </div>

                <div>
                  <label htmlFor="blog-message" className="mb-1.5 block text-sm font-medium text-foreground">Your Message</label>
                  <textarea rows={5} name="message" id="blog-message" placeholder="Tell us about your website, SEO goals, or growth challenge..." required className="min-h-[120px] w-full resize-y rounded-xl border border-border bg-background px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40" />
                </div>

                <button type="submit" className="w-full rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand/40">
                  Send Message
                </button>

                <p className="text-center text-xs leading-5 text-muted-foreground">By submitting this form, the message is sent securely through Web3Forms.</p>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
