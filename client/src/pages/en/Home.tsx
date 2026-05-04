import { useEffect } from "react";
import { Link } from "wouter";

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
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Subscribe to the Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Featured Essays */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
            Latest Writings
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Thoughts on Western society's structural narcissism and the search for a non-abusive reality.
          </p>

          {/* Pillar */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-8 mb-6 hover:shadow-md transition-shadow">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-3 block">
              Core Perspective
            </span>
            <h3 className="font-display text-xl font-bold mb-3">
              <Link href="/en/pillar" className="text-foreground hover:text-primary transition-colors">
                Narcissism Isn't a Disorder; It's the Foundation of Western Society
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We pathologize narcissism in its extremes to pretend we are 'normal'. But the very traits we label as toxic in relationships—manipulation, control, hyper-individualism—are the exact traits our society rewards as 'strength and dominance'. We are all on the spectrum.
            </p>
            <Link href="/en/pillar" className="text-primary font-semibold hover:underline">
              Read full text →
            </Link>
          </div>

          {/* Cluster Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card text-card-foreground rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
                Perspective
              </span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link
                  href="/en/essays/illusion-of-the-individual"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  The Illusion of the Authentic Self
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                How the pressure to 'find yourself' isolates us. The modern ego is a fiction that forces us into a constant state of performance and control.
              </p>
              <Link
                href="/en/essays/illusion-of-the-individual"
                className="text-primary font-semibold hover:underline"
              >
                Read text →
              </Link>
            </div>

            <div className="bg-card text-card-foreground rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
                Perspective
              </span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link
                  href="/en/essays/collective-shadow"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  The Thin Line Between Normal and Pathological
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A compulsive liar and a narcissist might share the same suffering. Why the clinical boundary between healthy and toxic is an illusion.
              </p>
              <Link
                href="/en/essays/collective-shadow"
                className="text-primary font-semibold hover:underline"
              >
                Read text →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Yanomami Alternative (Premium Upsell) */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-3 block">
            The Alternative
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Subjectivation by Mediation: The Yanomami Logic
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If our society is sick because it operates on a logic of domination (Subject-Object), how do we step outside of it? I've been studying the indigenous Yanomami perspective through the words of Davi Kopenawa. They operate on a logic of mediation, where "everything is people" and existence is a shared, horizontal experience.
          </p>
          <div className="bg-secondary p-6 rounded-xl border border-border mb-6 text-left">
            <p className="text-foreground font-medium mb-3">
              I've compiled this research into a comprehensive guide exploring:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
              <li>Why Western society became the "people of merchandise"</li>
              <li>How the Yanomami Shaman acts as a cosmic diplomat, not a ruler</li>
              <li>Practical philosophical tools to step away from our narcissistic culture</li>
            </ul>
            <div className="flex justify-center">
              <a
                href="https://your-gumroad-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
              >
                Get the Full Guide on Gumroad
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
