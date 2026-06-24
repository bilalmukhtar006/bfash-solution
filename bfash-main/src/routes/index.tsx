import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text">BFash Solutions</h1>
        <p className="text-white mt-4">If you can see this, the page loads correctly!</p>
        <p className="text-muted-foreground mt-2">Now we can add components back one by one.</p>
      </div>
    </div>
  );
}