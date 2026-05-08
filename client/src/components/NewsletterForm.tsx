interface NewsletterFormProps {
  /** Visual variant: 'inline' for compact in-article use, 'block' for full-width section */
  variant?: "inline" | "block";
}

export default function NewsletterForm({ variant = "block" }: NewsletterFormProps) {
  return (
    <div
      className={`rounded-xl border border-border overflow-hidden ${
        variant === "block" ? "p-6 text-center" : "p-4"
      }`}
    >
      {variant === "block" && (
        <>
          <p className="font-semibold text-foreground text-lg mb-1">
            New texts, every few weeks.
          </p>
          <p className="text-muted-foreground mb-4">
            Subscribe for free — no noise, just writing.
          </p>
        </>
      )}
      {variant === "inline" && (
        <p className="font-semibold text-foreground mb-3">
          Want to follow this thought process?
        </p>
      )}
      {/* Official Substack embed iframe — the only reliable way to subscribe without a backend */}
      <iframe
        src="https://diasjorge.substack.com/embed"
        width="100%"
        height="150"
        style={{ border: "none", background: "transparent" }}
        frameBorder={0}
        scrolling="no"
        title="Subscribe to Jorge Dias on Substack"
      />
    </div>
  );
}
