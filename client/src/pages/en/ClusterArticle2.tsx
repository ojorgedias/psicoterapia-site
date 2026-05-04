import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ClusterArticle2En() {
  useEffect(() => {
    document.title = "The Collective Shadow in the Pursuit of Perfection | Jorge Dias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A Jungian lens on the unacknowledged shadow of perfectionism — how societal repression of vulnerability fuels anxiety, burnout, and collective alienation."
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Essays" },
          { label: "The Collective Shadow" },
        ]}
      />

      <article className="prose-en">
        <header className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
            Essay · ~8 min read
          </span>
          <h1>The Collective Shadow in the Pursuit of Perfection</h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            In a world saturated with curated images of success and flawless living, the pursuit of
            perfection has become an almost unconscious imperative — casting a long shadow that,
            when unacknowledged, fuels widespread anxiety and inadequacy.
          </p>
        </header>

        <p>
          From social media feeds to professional aspirations, we are constantly bombarded with
          ideals that feel unattainable yet are relentlessly pursued. Drawing on Jungian concepts,
          this essay explores the nature of the <strong>collective shadow</strong> and its impact on
          individual and societal well-being.
        </p>

        <h2>The Individual Shadow: A Jungian Perspective</h2>
        <p>
          Carl Jung introduced the concept of the <strong>Shadow</strong> as the unconscious aspect
          of the personality that the conscious ego does not identify with. It comprises repressed
          ideas, weaknesses, desires, instincts, and shortcomings — everything we deny about
          ourselves, both negative and positive, that remains hidden in the unconscious. The process
          of integrating the individual Shadow is a crucial step in individuation, leading to
          greater wholeness and self-acceptance.
        </p>

        <h2>From Individual to Collective: The Societal Shadow</h2>
        <p>
          Just as individuals possess a Shadow, so too do societies. The{" "}
          <strong>collective shadow</strong> represents the disowned, repressed, or unacknowledged
          aspects of a culture — the values, beliefs, behaviors, and historical narratives that a
          society deems unacceptable or too painful to confront. They are often projected onto
          'others,' allowing the dominant culture to maintain a sanitized self-image.
        </p>
        <p>
          In the pursuit of perfection, contemporary Western society has cultivated a collective
          shadow characterized by:
        </p>
        <ul>
          <li>
            <strong>The Repression of Vulnerability</strong>: In a culture that values strength and
            constant positivity, vulnerability is seen as a weakness to be hidden — leading to
            emotional suppression and a fear of authentic connection.
          </li>
          <li>
            <strong>The Denial of Failure</strong>: Failure is pathologized rather than seen as a
            natural part of learning. This fosters a fear of risk-taking and an obsession with
            flawless outcomes.
          </li>
          <li>
            <strong>The Idealization of Productivity</strong>: Constant busyness and achievement are
            glorified, while rest and contemplation are devalued — contributing to burnout and guilt
            when not constantly 'doing.'
          </li>
          <li>
            <strong>The Erasure of Imperfection</strong>: Through filters and curated narratives,
            imperfections are systematically removed from public view, creating an illusion of
            effortless perfection that is impossible to sustain.
          </li>
        </ul>
        <p>
          This collective repression creates a societal pressure cooker. The unacknowledged
          collective shadow then manifests in rising rates of anxiety and depression, widespread
          imposter syndrome, and a pervasive sense of competitive isolation.
        </p>

        <h2>The Consequences of an Unacknowledged Shadow</h2>
        <p>
          When the collective shadow remains unacknowledged, its repressed energies find indirect
          and often destructive ways to manifest:
        </p>
        <ul>
          <li>
            <strong>Societal Projections</strong>: The demonization of 'outsiders' who do not fit
            the dominant ideal, serving as a scapegoat for societal anxieties and disowned traits.
          </li>
          <li>
            <strong>Internalized Shame</strong>: Individuals internalize the pressure to be perfect,
            leading to deep-seated shame and a constant feeling of not being 'enough.'
          </li>
          <li>
            <strong>Superficiality and Inauthenticity</strong>: The constant need to present a
            perfect facade leads to superficial relationships and a disconnect from one's genuine
            experience.
          </li>
          <li>
            <strong>Collective Burnout</strong>: The relentless striving for unattainable ideals
            results in widespread exhaustion, cynicism, and a loss of meaning.
          </li>
        </ul>

        <h2>Integrating the Collective Shadow</h2>
        <p>
          Integrating the collective shadow requires a willingness to confront uncomfortable truths,
          acknowledge collective failings, and embrace the messy reality of human experience. This
          involves cultivating self-compassion, challenging the norms that glorify productivity over
          being, embracing vulnerability as a source of connection rather than weakness, and
          promoting the kind of critical self-reflection that allows communities to examine their
          own projections.
        </p>
        <p>
          By consciously engaging with the collective shadow, we can move beyond the illusion of
          perfection towards a more integrated, compassionate, and resilient way of being — one that
          acknowledges the full spectrum of human experience rather than airbrushing it out of
          existence.
        </p>

        {/* Bridge to Pillar */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-5 leading-relaxed">
            The collective shadow is one symptom of a deeper structural problem in how the Western
            self was built. To understand the full diagnosis — and what indigenous thought offers as
            an alternative — read the main essay:
          </p>
          <Link
            href="/en/pillar"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Read: How Society Sickened the 'Self' →
          </Link>
        </div>

        {/* Paid reading offer */}
        <div className="mt-8 bg-secondary rounded-xl p-6 border border-border">
          <p className="font-semibold text-foreground mb-2">Want to go deeper?</p>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            My extended research — including a detailed Jungian analysis of collective shadow
            dynamics in digital culture and a practical framework for shadow integration — is
            available as a longer piece on Substack and as a PDF on Gumroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Read more on Substack →
            </a>
            <a
              href="https://your-gumroad-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
            >
              Get the PDF on Gumroad →
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-5 p-5 border border-border rounded-xl text-center">
          <p className="font-semibold text-foreground mb-1">
            New essays, every few weeks.
          </p>
          <p className="text-muted-foreground mb-4">
            Subscribe for free and get notified when the next piece is out — no noise, just writing.
          </p>
          <a
            href="https://your-substack-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Subscribe — it's free
          </a>
        </div>
      </article>
    </div>
  );
}
