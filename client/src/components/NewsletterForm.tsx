import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface NewsletterFormProps {
  /** Visual variant: 'inline' for compact in-article use, 'block' for full-width section */
  variant?: "inline" | "block";
}

export default function NewsletterForm({ variant = "block" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      // Substack free subscription endpoint
      const formData = new FormData();
      formData.append("email", email);
      formData.append("source", "embed");
      formData.append("first_url", "https://diasjorge.substack.com/embed");
      formData.append("current_url", "https://diasjorge.substack.com/embed");

      const res = await fetch("https://diasjorge.substack.com/api/v1/free", {
        method: "POST",
        mode: "no-cors", // Substack doesn't send CORS headers on this endpoint
        body: formData,
      });

      // With no-cors, response is opaque — we assume success if no network error
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or subscribe directly at diasjorge.substack.com.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border border-border text-center ${
          variant === "block" ? "p-8" : "p-5"
        }`}
      >
        <div className="text-2xl mb-2">✓</div>
        <p className="font-semibold text-foreground mb-1">You're in.</p>
        <p className="text-muted-foreground">
          Check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-border ${
        variant === "block" ? "p-8 text-center" : "p-5"
      }`}
    >
      {variant === "block" && (
        <>
          <p className="font-semibold text-foreground text-lg mb-1">
            New texts, every few weeks.
          </p>
          <p className="text-muted-foreground mb-5">
            Subscribe for free — no noise, just writing.
          </p>
        </>
      )}

      {variant === "inline" && (
        <p className="font-semibold text-foreground mb-3">
          Want to follow this thought process?
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className={`flex gap-2 ${variant === "block" ? "max-w-sm mx-auto flex-col sm:flex-row" : "flex-col sm:flex-row"}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 text-base"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap text-base"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe — free"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-sm text-destructive">
          {errorMsg || "Something went wrong. Please try again."}
        </p>
      )}

      <p className="mt-3 text-xs text-muted-foreground">
        No spam. Unsubscribe at any time.{" "}
        <a
          href="https://diasjorge.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          View on Substack
        </a>
      </p>
    </div>
  );
}
