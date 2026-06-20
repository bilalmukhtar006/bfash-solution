import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      if (typeof window !== "undefined" && !localStorage.getItem("bfash-cookies")) setShow(true);
    }, 800);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-md z-50 animate-fade-up">
      <div className="rounded-2xl border border-border bg-[#120b24]/95 backdrop-blur-xl p-5 shadow-2xl brand-glow">
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/20">
            <Cookie className="h-5 w-5 text-brand" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground/90 leading-relaxed">
              We use cookies to optimize your website experience, analyze traffic, and assist with our
              marketing efforts. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => { localStorage.setItem("bfash-cookies", "1"); setShow(false); }}
                className="bg-gradient-to-r from-brand to-brand-strong text-white border-0 flex-1"
              >
                Accept All
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShow(false)}
                className="text-muted-foreground"
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
