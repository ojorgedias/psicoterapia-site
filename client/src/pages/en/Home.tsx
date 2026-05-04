import { useEffect } from "react";
import { Link } from "wouter";

export default function HomeEn() {
  useEffect(() => {
    document.title = "Jorge Dias | Research & Essays";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Independent research and long-form essays at the intersection of psychoanalysis, critical theory, and indigenous thought. By Jorge Dias, based in Brazil."
      );
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Research &amp; Essays
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Jorge Dias
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Independent researcher and writer exploring the intersections between{" "}
            <strong>psychoanalysis</strong>, <strong>Foucaultian critical theory</strong>, and{" "}
            <strong>indigenous cosmologies</strong>. Based in Brazil.
          </p>
          <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            Long-form essays that challenge the modern myth of the individual — and point toward
            something more honest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/pillar"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Read the Pillar Essay
            </Link>
            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Subscribe — it's free
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-5">
            Join readers who think beyond the self-help shelf.
          </p>
        </div>
      </section>

      {/* Featured Essays */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
            Essays
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Long-form writing on the construction of the modern self, power, and the wisdom of
            non-Western thought. Free to read.
          </p>

          {/* Pillar */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-8 mb-6 hover:shadow-md transition-shadow">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-3 block">
              Pillar Essay · ~15 min read
            </span>
            <h3 className="font-display text-xl font-bold mb-3">
              <Link href="/en/pillar" className="text-foreground hover:text-primary transition-colors">
                How Society Sickened the 'Self': The Contrast Between Western Narcissism and Indigenous Alterity
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              In an age defined by hyper-individualism and relentless self-optimization, the Western
              concept of the 'self' often feels like a fragile, isolated entity. This essay explores
              how contemporary society has inadvertently sickened the self — and what indigenous
              understandings of personhood offer as a counter-narrative.
            </p>
            <Link href="/en/pillar" className="text-primary font-semibold hover:underline">
              Read essay →
            </Link>
          </div>

          {/* Cluster Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card text-card-foreground rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
                Essay · ~8 min read
              </span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link
                  href="/en/essays/illusion-of-the-individual"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  The Illusion of the Individual: A Foucaultian Reading
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                How power structures and disciplinary institutions produce the modern subject —
                and why the 'authentic self' may be a carefully constructed fiction.
              </p>
              <Link
                href="/en/essays/illusion-of-the-individual"
                className="text-primary font-semibold hover:underline"
              >
                Read essay →
              </Link>
            </div>

            <div className="bg-card text-card-foreground rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
                Essay · ~8 min read
              </span>
              <h3 className="font-display text-lg font-semibold mb-3">
                <Link
                  href="/en/essays/collective-shadow"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  The Collective Shadow in the Pursuit of Perfection
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A Jungian lens on the unacknowledged shadow of perfectionism — how societal
                repression of vulnerability fuels anxiety, burnout, and collective alienation.
              </p>
              <Link
                href="/en/essays/collective-shadow"
                className="text-primary font-semibold hover:underline"
              >
                Read essay →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Capture */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Go Deeper — Subscribe for Free
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            New essays, extended research, and ideas that don't fit the algorithm. No noise — only
            writing that earns your attention.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Subscribers also get early access to full-length guides and premium research before they
            are published anywhere else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe on Substack — Free
            </a>
            <a
              href="https://your-gumroad-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Browse Full Guides →
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Independent research. No ads. No algorithm. Just writing.
          </p>
        </div>
      </section>
    </>
  );
}
