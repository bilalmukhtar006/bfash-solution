import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Compass,
  PencilRuler,
  Rocket,
  BarChart3,
  Linkedin,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | BFash Solution" },
      {
        name: "description",
        content:
          "Learn more about BFash Solution. We help ambitious businesses grow online through simple, practical digital marketing, SEO, and sales strategies.",
      },
      { property: "og:title", content: "About BFash Solution" },
      {
        property: "og:description",
        content:
          "Discover how BFash Solution helps businesses reach more customers and increase sales.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Quality First",
    desc: "We focus on doing things right. Every webpage, post, and campaign is built with care so your business looks great.",
  },
  {
    icon: Target,
    title: "Focused on Results",
    desc: "Good design is just the start. Our main goal is to bring you more leads, phone calls, and real sales.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    desc: "The online world changes fast. We keep up with the latest AI tools and search trends so you stay ahead.",
  },
  {
    icon: Users,
    title: "True Partnership",
    desc: "We work directly with you as part of your team, making digital growth easy, clear, and stress-free.",
  },
];

const steps = [
  {
    icon: Compass,
    title: "1. Discover",
    desc: "We learn about your business, your ideal customers, and your biggest goals to build a clear plan.",
  },
  {
    icon: PencilRuler,
    title: "2. Build & Plan",
    desc: "We create your strategy, design your pages, and prepare simple campaigns that attract buyers.",
  },
  {
    icon: Rocket,
    title: "3. Launch",
    desc: "We launch your campaigns, optimize your search visibility, and make sure everything runs smoothly.",
  },
  {
    icon: BarChart3,
    title: "4. Grow & Improve",
    desc: "We review what works, make regular improvements, and share clear updates with you every step of the way.",
  },
];

const team = [
  {
    name: "Sehar Aslam",
    role: "Vector Artist & SMM",
    email: "sehar@bfash.us",
    image: "/sehar.webp",
    linkedin: "https://www.linkedin.com/in/seharaslam/",
  },
  {
    name: "Faisal Shafqat",
    role: "Amazon & eBay Specialist & Developer",
    email: "faisal@bfash.us",
    image: "/faisal.webp",
    linkedin:
      "https://www.linkedin.com/in/faysal-ansari-298064346?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Abraham Boutros",
    role: "Ad Marketing & Sales Manager",
    email: "abraham@bfash.us",
    image: "/Boutros.webp",
    linkedin: "https://www.linkedin.com/in/abrahamboutros/",
  },
  {
    name: "Bilal Mukhtar",
    role: "TikTok Shop & SEO Specialist",
    email: "bilal@bfash.us",
    image: "/bilal.webp",
    linkedin: "https://www.linkedin.com/in/thejerryansari/",
  }, 
  {
    name: "Hafeez Ahmad",
    role: "Video Editor & Illustration Designer",
    email: "hafeez@bfash.us",
    image: "/hafeez.webp",
    linkedin: "https://www.linkedin.com/in/hafeez-ahmad-849940405/",
  },
  {
    name: "Ahmad Mahfooz",
    role: "Advertisement & CRM Manager",
    email: "ahmad@bfash.us",
    image: "/ahmad.webp",
    linkedin: "https://www.linkedin.com/in/ahmad-mahfooz-9379982b2/",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We Help Businesses Grow, Reach More People, and Win Online"
        subtitle="BFash Solution is your dedicated digital growth partner. We combine practical marketing, modern search optimization, and hands-on support so you can focus on running your business."
      />

      <Section
        title="Our Mission"
        subtitle="To provide practical, reliable, and high-quality digital marketing support to businesses of all sizes—without complicated jargon or unnecessary agency bloat."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 border border-brand/30 mb-4">
                <v.icon className="h-5 w-5 text-brand" />
              </div>

              <h3 className="font-display font-bold text-lg mb-2">
                {v.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Our Process"
        title="A Simple 4-Step Path to Clear Results"
        center
      >
        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent hidden md:block" />

          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative glass-card rounded-2xl p-6 text-center"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-strong brand-glow mb-4">
                <s.icon className="h-5 w-5 text-white" />
              </div>

              <div className="text-xs uppercase tracking-wider text-brand mb-1">
                Step {i + 1}
              </div>

              <h3 className="font-display font-bold text-lg mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The Team"
        title="Meet the people building it with you"
        center
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
            >
              {/* Profile Picture */}
              <div className="mx-auto h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br from-brand to-brand-strong mb-4">
                <img
                  src={t.image}
                  alt={`${t.name} profile`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-display font-bold">{t.name}</h3>

              {/* Role */}
              <p className="text-sm text-brand mt-1">{t.role}</p>

              {/* Email */}
              <a
                href={`mailto:${t.email}`}
                className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-brand" />
                <span>{t.email}</span>
              </a>

              {/* LinkedIn */}
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.name} on LinkedIn`}
                title={`View ${t.name}'s LinkedIn profile`}
                className="mx-auto mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-brand hover:border-brand hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}