import { useEffect } from "react";

/**
 * The old quote modal mounted a Radix/shadcn Dialog.
 * On this site that dialog was causing the browser main thread to hang
 * when opened. The quote CTA now uses the dedicated Contact route instead.
 *
 * Keeping this component means Header.tsx does not need to change.
 */
export function QuoteModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  useEffect(() => {
    if (!open) return;

    // Close the old modal state before navigating.
    onOpenChange(false);

    // Use a normal document navigation so this CTA does not depend on
    // the dialog/focus-trap implementation.
    window.location.assign("/contact");
  }, [open, onOpenChange]);

  return null;
}
