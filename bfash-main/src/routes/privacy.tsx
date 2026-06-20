import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BFash Solutions" },
      { name: "description", content: "How BFash Solutions collects, uses, and protects your data. Cookies, user rights, and terms of service." },
      { property: "og:title", content: "Privacy Policy — BFash Solutions" },
      { property: "og:description", content: "Our approach to data protection and privacy." },
    ],
  }),
  component: Privacy,
});

const sections = [
  { h: "Introduction", b: "BFash Solutions (\"we\", \"our\", or \"us\") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or engage our services." },
  { h: "Information We Collect", b: "We collect information you provide directly — such as your name, email, phone number, company, and project details when you fill out a form. We also collect usage data automatically (pages viewed, device, referrer) via cookies and analytics tools." },
  { h: "How We Use Your Information", b: "We use collected data to respond to inquiries, deliver contracted services, improve our website, send relevant updates (only if you opt in), and comply with legal obligations." },
  { h: "Cookies", b: "We use first-party and third-party cookies to remember preferences, measure performance, and personalize content. You can accept or dismiss non-essential cookies via the consent banner at any time." },
  { h: "Data Sharing", b: "We do not sell your personal data. We share information only with trusted vendors (e.g. analytics, email, payment processors) under strict data-processing agreements, and when required by law." },
  { h: "Data Retention", b: "We retain personal information only as long as necessary for the purposes outlined here, or as required by law. Project records are typically kept for 7 years for accounting and legal compliance." },
  { h: "Your Rights", b: "Depending on your jurisdiction (GDPR, CCPA, etc.) you may request access, correction, deletion, portability, or restriction of your personal data. Contact privacy@bfashsolutions.com to exercise these rights." },
  { h: "Security", b: "We implement industry-standard technical and organizational measures — encrypted transport, access controls, regular audits — to protect data against unauthorized access, alteration, or disclosure." },
  { h: "International Transfers", b: "Where data crosses borders, we rely on Standard Contractual Clauses and equivalent safeguards approved by relevant data protection authorities." },
  { h: "Changes to This Policy", b: "We may update this policy periodically. Material changes will be highlighted on this page with an updated effective date." },
  { h: "Terms of Service", b: "Use of this website is also governed by our Terms of Service. By engaging our services you agree to those terms in full." },
  { h: "Contact", b: "For any privacy questions or requests, contact us at privacy@bfashsolutions.com." },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 2026"
      />
      <Section>
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display font-bold text-xl mb-3 text-brand">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
