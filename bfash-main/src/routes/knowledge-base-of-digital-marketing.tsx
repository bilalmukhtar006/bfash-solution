import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/knowledge-base-of-digital-marketing")({
  component: KnowledgeBasePage,
});

function KnowledgeBasePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#120b24]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Knowledge Base of Digital Marketing</h1>
        <p className="text-white mt-4">If you can see this, the page is working!</p>
        <p className="text-muted-foreground mt-2">The page loads without errors!</p>
      </div>
    </div>
  );
}