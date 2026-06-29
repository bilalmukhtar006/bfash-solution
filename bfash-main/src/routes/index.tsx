import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#120b24]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">BFash Solutions</h1>
        <p className="text-white mt-4">If you can see this, the page loads correctly!</p>
        <p className="text-gray-400 mt-2">Now we can add components back one by one.</p>
        
        {/* Simple test form - no React state */}
        <div className="mt-8 max-w-md mx-auto">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            target="_blank"
            className="space-y-4 bg-white/10 p-6 rounded-lg"
          >
            <input type="hidden" name="access_key" value="871b202d-31db-4929-9c44-4ab92415006e" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}