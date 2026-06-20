import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export function QuoteModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-[#120b24] border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl gradient-text">Get a Free Quote</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Share a few details about your project. We'll send a tailored proposal within one business day.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
