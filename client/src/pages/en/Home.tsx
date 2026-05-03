import { useEffect } from "react";
import { Link } from "wouter";

export default function HomeEn() {
  useEffect(() => {
    document.title = "Jorge Dias | Clinical Psychotherapy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Clinical psychotherapy online focused on philosophical inquiry, deep self-knowledge, and integral development. Online sessions for individuals worldwide."
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Jorge Dias | Clinical Psychotherapy
          </h1>
          <p className="text-lg text-muted-foreground mb-2 font-semibold">Integrative Approach</p>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto italic">
            "Know all the theories, master all the techniques, but when you touch a human soul, be just another human soul."
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Psychotherapist and researcher in Brazil, working at the intersection of{" "}
            <strong>psychoanalysis</strong>, <strong>critical theory</strong>, and{" "}
            <strong>indigenous perspectives</strong>. Online sessions for individuals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Read on Substack
            </a>
            <Link
              href="/en/about"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              About My Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Featured Essays
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Long-form writing on psychoanalysis, critical theory, and indigenous thought — free to read.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-2 block">Pillar Essay</span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link href="/en/pillar" className="text-foreground hover:text-primary transition-colors">
                  How Society Sickened the 'Self'
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                The contrast between Western narcissism and indigenous alterity. ~15 min read.
              </p>
              <Link href="/en/pillar" className="text-primary font-semibold text-sm hover:underline">
                Read essay →
              </Link>
            </article>

            <article className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 block">Essay</span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link href="/en/essays/illusion-of-the-individual" className="text-foreground hover:text-primary transition-colors">
                  The Illusion of the Individual
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                A Foucaultian reading of how power produces the modern self. ~8 min read.
              </p>
              <Link href="/en/essays/illusion-of-the-individual" className="text-primary font-semibold text-sm hover:underline">
                Read essay →
              </Link>
            </article>

            <article className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 block">Essay</span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link href="/en/essays/collective-shadow" className="text-foreground hover:text-primary transition-colors">
                  The Collective Shadow in the Pursuit of Perfection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                A Jungian lens on societal pressure and the unacknowledged shadow. ~8 min read.
              </p>
              <Link href="/en/essays/collective-shadow" className="text-primary font-semibold text-sm hover:underline">
                Read essay →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">About This Work</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I am a clinical psychotherapist and researcher based in Brazil. My practice draws on
            psychoanalysis, Foucaultian critical theory, and indigenous cosmologies to understand
            how the modern self is constructed — and how it can be healed.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            These essays are the public face of that research. If they resonate, follow my work on
            Substack or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/about"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Read About Me
            </Link>
            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Follow on Substack
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
