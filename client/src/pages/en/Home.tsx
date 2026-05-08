import { useEffect } from "react";
import { Link } from "wouter";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomeEn() {
  useEffect(() => {
    document.title = "Jorge Dias | Rethinking the Self";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Writing on the narcissism spectrum, the illusion of the modern individual, and the Yanomami indigenous perspective as an alternative to Western pathology."
      );
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Writing &amp; Perspectives
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Jorge Dias
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            I write about the <strong>narcissism spectrum</strong> in modern society, the illusion of the isolated individual, and how <strong>indigenous cosmologies</strong> offer a way out of our collective pathology.
          </p>
          <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            No academic jargon. Just free thought on why we suffer, how we relate, and what we can learn from societies built on mediation rather than domination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/pillar"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Read: The Narcissism Spectrum
            </Link>
            <a
              href="https://diasjorge.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Subscribe — free
            </a>
          </div>
        </div>
      </section>

      {/* Featured Essay */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
            Latest Writing
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Thoughts on Western society's structural narcissism and the search for a non-abusive reality.
          </p>

          {/* Pillar */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-3 block">
              Core Perspective
            </span>
            <h3 className="font-display text-xl font-bold mb-3">
              <Link href="/en/pillar" className="text-foreground hover:text-primary transition-colors">
                Narcissism Is Not a Disease
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We pathologize narcissism in its extremes to pretend we are 'normal'. But the very traits we label as toxic in relationships — manipulation, control, hyper-individualism — are the exact traits our society rewards as 'strength and dominance'. We are all on the spectrum.
            </p>
            <Link href="/en/pillar" className="text-primary font-semibold hover:underline">
              Read full text →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container max-w-2xl mx-auto px-4">
          <NewsletterForm variant="block" />
        </div>
      </section>
    </>
  );
}
