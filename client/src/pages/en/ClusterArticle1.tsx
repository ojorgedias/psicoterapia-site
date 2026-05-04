import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ClusterArticle1En() {
  useEffect(() => {
    document.title = "The Illusion of the Individual | Jorge Dias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A Foucaultian reading of how power produces the modern subject — and why the 'authentic self' may be a carefully constructed fiction."
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Essays" },
          { label: "The Illusion of the Individual" },
        ]}
      />

      <article className="prose-clinical">
        <header className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
            Essay · ~8 min read
          </span>
          <h1>The Illusion of the Individual: A Foucaultian Reading</h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            The modern concept of the individual is often presented as self-evident and natural. But
            from a Foucaultian perspective, it is a meticulously constructed effect of power
            relations and discursive practices.
          </p>
        </header>

        <p>
          In contemporary Western thought, we are taught to believe in a core, authentic self that
          exists independently of external forces — a unique essence waiting to be discovered and
          expressed. However, Michel Foucault's work invites us to question this assumption
          radically.
        </p>

        <h2>The Birth of the Subject</h2>
        <p>
          Foucault argued that the modern individual, as we understand it, is not a pre-existing
          reality but a historical invention — a product of specific historical conditions and
          technologies of power. In <em>Discipline and Punish</em>, he demonstrates how
          institutions like prisons, schools, and hospitals emerged not just to punish or cure, but
          to produce docile and governable subjects. These institutions employed disciplinary
          techniques — surveillance, normalization, examination — to categorize, measure, and
          differentiate individuals, thereby creating the very notion of individuality.
        </p>
        <p>
          For Foucault, power is not merely repressive; it is productive. It doesn't just forbid —
          it shapes, molds, and constitutes. The individual is not simply subjected to power; they
          are <em>produced</em> by it. The confession, for instance, is not merely an act of
          revealing a pre-existing truth about oneself, but a ritual that actively constitutes the
          confessing subject as a particular kind of individual — one with a hidden truth, a secret
          life, a unique psychology.
        </p>

        <h2>Technologies of the Self</h2>
        <p>
          Beyond external disciplinary mechanisms, Foucault also explored the ways individuals
          internalize and participate in their own subjectivation through what he called
          "technologies of the self." These are practices individuals undertake to transform
          themselves — often in the name of self-improvement, authenticity, or liberation. However,
          even these seemingly autonomous acts are often guided by societal norms and power
          structures, leading us to conform to certain ideals of what a "good" or "healthy"
          individual should be.
        </p>
        <p>
          Consider the modern obsession with self-help, journaling, and personal development. While
          these practices can be genuinely useful, they also subtly reinforce the idea that there is
          a <em>correct</em> way to be an individual — a set of prescribed behaviors, thoughts, and
          emotions that constitute a well-adjusted self. We are encouraged to constantly monitor,
          analyze, and optimize our inner lives, often through categories and frameworks provided by
          experts and institutions. This internal gaze, while appearing to be an act of freedom, can
          become another form of discipline — where we become our own wardens, perpetually striving
          for an elusive ideal of selfhood.
        </p>

        <h2>The Deconstruction of the Subject</h2>
        <p>
          Foucault's work invites us to question the very stability and coherence of the individual.
          He suggests that the "self" is not a fixed essence but a fluid, historically contingent
          construct — constantly being shaped and reshaped by the discourses and practices in which
          we are embedded. This deconstruction of the subject is not an attempt to deny individual
          experience or agency, but rather to understand how these are constituted within specific
          historical and social contexts.
        </p>
        <p>
          By recognizing the constructed nature of the individual, we can begin to challenge the
          naturalized assumptions that underpin many of our social and psychological problems. If
          the individual is an effect of power, then it is possible to imagine and create different
          forms of subjectivity — different ways of being in the world that are less constrained by
          disciplinary norms and more open to genuine alterity and collective flourishing.
        </p>

        {/* Bridge to Pillar */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-5 leading-relaxed">
            This Foucaultian deconstruction of the individual is one thread in a larger argument.
            To see how it connects to indigenous ontologies and the broader diagnosis of the
            sickened self, read the main essay:
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
            My extended research — including a close reading of Foucault's <em>Discipline and
            Punish</em> applied to digital subjectivity, and a comparative analysis with indigenous
            ontologies — is available as a longer piece on Substack and as a PDF on Gumroad.
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

        {/* Support */}
        <div className="mt-5 p-5 border border-border rounded-xl text-center">
          <p className="text-sm text-muted-foreground mb-3">
            This research is free and independent. If it's useful to you, consider supporting it.
          </p>
          <a
            href="https://your-support-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            ♥ Support this research
          </a>
        </div>
      </article>
    </div>
  );
}
