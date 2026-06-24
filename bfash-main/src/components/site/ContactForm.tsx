import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_KEY_HERE");
    formData.append("service", service);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSent(true);
          setTimeout(() => setSent(false), 4000);
        } else {
          console.error("Form error:", data.message);
        }
      })
      .catch((error) => console.error("Form submission error:", error));
  };

  if (sent) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center animate-fade-up">
        <CheckCircle2 className="h-14 w-14 text-brand mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground">Thanks — our team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={submit} 
      className={`glass-card rounded-2xl p-6 md:p-8 space-y-5 ${compact ? "" : ""}`}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your full name" className="bg-background/50 border-border" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" className="bg-background/50 border-border" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Service Needed</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="bg-background/50 border-border">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Website Design">Website Design</SelectItem>
            <SelectItem value="SEO">SEO</SelectItem>
            <SelectItem value="Amazon Growth">Amazon Growth</SelectItem>
            <SelectItem value="Graphic Design">Graphic Design</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="msg">Message</Label>
        <Textarea id="msg" name="message" required rows={5} placeholder="Tell us about your project..." className="bg-background/50 border-border resize-none" />
      </div>
      
      <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand to-brand-strong text-white border-0 brand-glow">
        Submit Request <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}