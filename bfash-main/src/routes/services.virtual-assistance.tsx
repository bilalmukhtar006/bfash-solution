import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Headphones } from "lucide-react";

export const Route = createFileRoute("/services/virtual-assistance")({
  head: () => ({
    meta: [
      { title: "Virtual Assistance & Business Support — BFash Solutions" },
      {
        name: "description",
        content:
          "Reliable virtual assistants for administrative support, customer service, CRM management, and social media. Save time and focus on growth.",
      },
      {
        property: "og:title",
        content: "Virtual Assistance & Business Support — BFash Solutions",
      },
      {
        property: "og:description",
        content:
          "Streamline your daily operations with dedicated virtual assistant support.",
      },
    ],
  }),
  component: () => (
    <ServicePage
      icon={Headphones}
      eyebrow="Virtual Assistance & Business Support"
      title="Your business runs smoother when you have the right support"
      subtitle="From inbox management to customer service and CRM upkeep — we take the repetitive tasks off your plate so you can focus on growth."
      intro="You don't need to hire full-time staff to get things done. Our trained virtual assistants integrate into your workflow and handle the operational details that slow you down."
      features={[
        {
          title: "Administrative Support",
          desc: "Email management, calendar scheduling, travel coordination, document preparation, and data entry — handled reliably and on time.",
        },
        {
          title: "Customer Service",
          desc: "Phone, chat, and email support for your customers. We manage inquiries, resolve issues, and maintain your service standards.",
        },
        {
          title: "CRM Management",
          desc: "Customer database updates, lead tracking, pipeline management, and CRM automation setup to keep your sales process organized.",
        },
        {
          title: "Social Media Management",
          desc: "Content scheduling, community engagement, comment moderation, and basic analytics reporting across your social channels.",
        },
        {
          title: "Research & Lead Generation",
          desc: "Market research, competitor analysis, prospect list building, and outreach support to feed your sales pipeline.",
        },
        {
          title: "Project & Task Coordination",
          desc: "Follow-ups, vendor communication, team reminders, and project management support to keep everything moving forward.",
        },
      ]}
      deliverables={[
        "Dedicated virtual assistant",
        "Process documentation (SOPs)",
        "Weekly task reports",
        "CRM data hygiene",
        "Inbox & calendar management",
        "Ongoing communication & support",
      ]}
    />
  ),
});