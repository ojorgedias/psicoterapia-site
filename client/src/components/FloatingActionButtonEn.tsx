import { useState } from "react";
import NewsletterForm from "./NewsletterForm";

export default function FloatingActionButtonEn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Popup form */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 shadow-2xl rounded-xl overflow-hidden border border-border bg-background animate-fade-in">
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <span className="font-semibold text-foreground">Stay in the loop</span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors text-lg leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="px-5 pb-5">
            <NewsletterForm variant="inline" />
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in font-semibold text-base whitespace-nowrap"
        aria-label="Subscribe to newsletter"
      >
        <span>✉</span>
        <span>Subscribe — it's free</span>
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
