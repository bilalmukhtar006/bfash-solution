import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/knowledge-base-of-digital-marketing")({
  head: () => ({
    meta: [
      {
        title:
          "Knowledge Base of Digital Marketing | SEO, GEO, Social Media & Growth | BFASH",
      },
      {
        name: "description",
        content:
          "Explore the BFASH Knowledge Base of Digital Marketing for practical guides on SEO, GEO, social media marketing, Google Ads, email marketing, CRM, business growth, and more.",
      },
      {
        name: "keywords",
        content:
          "digital marketing knowledge base, digital marketing guide, SEO guide, GEO SEO, social media marketing, Google Ads, email marketing, business growth, digital marketing tips",
      },
    ],
  }),

  component: KnowledgeBasePage,
});

function KnowledgeBasePage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold md:text-6xl">
            Knowledge Base of Digital Marketing
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Practical digital marketing knowledge to help businesses increase
            visibility, generate leads, reach more customers, and grow online.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border p-6">
              <h2 className="text-2xl font-semibold">SEO</h2>
              <p className="mt-3">
                Learn how search engine optimization can improve website
                visibility and attract organic traffic.
              </p>
            </article>

            <article className="rounded-xl border p-6">
              <h2 className="text-2xl font-semibold">GEO</h2>
              <p className="mt-3">
                Understand how to optimize content for AI-powered search and
                generative search experiences.
              </p>
            </article>

            <article className="rounded-xl border p-6">
              <h2 className="text-2xl font-semibold">Social Media Marketing</h2>
              <p className="mt-3">
                Explore strategies for building audiences, increasing reach,
                and generating customers through social media.
              </p>
            </article>

            <article className="rounded-xl border p-6">
              <h2 className="text-2xl font-semibold">Google Ads & GMB</h2>
              <p className="mt-3">
                Learn how paid search and Google Business Profile optimization
                can help local businesses generate leads.
              </p>
            </article>

            <article className="rounded-xl border p-6">
              <h2 className="text-2xl font-semibold">Email Marketing</h2>
              <p className="mt-3">
                Discover ways to use email campaigns and automation to nurture
                leads and increase sales.
              </p>
            </article>

            <article className="rounded-xl border p-6">
              <h2 className="text-2xl font-semibold">Business Growth</h2>
              <p className="mt-3">
                Learn practical strategies for increasing leads, sales,
                customer retention, and overall business growth.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}