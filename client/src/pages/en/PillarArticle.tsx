import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PillarArticleEn() {
  useEffect(() => {
    document.title = "How Society Sickened the 'Self' | Jorge Dias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "An essay exploring how contemporary Western society, through its emphasis on narcissistic self-cultivation, has inadvertently sickened the self — contrasted with indigenous understandings of personhood and alterity."
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Pillar Essay" }]} />

      <article className="prose-en">
        <header className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-3 block">
            Pillar Essay · ~15 min read
          </span>
          <h1>
            How Society Sickened the 'Self': The Contrast Between Western Narcissism and Indigenous
            Alterity
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            In an age defined by hyper-individualism and relentless self-optimization, the Western
            concept of the 'self' often feels like a fragile, isolated entity — constantly battling
            external pressures and internal anxieties.
          </p>
        </header>

        <p>
          We are told to 'find ourselves,' 'love ourselves,' and 'be our authentic selves,' yet the
          very pursuit of this idealized self often leads to deeper alienation and a pervasive sense
          of inadequacy. This essay explores how contemporary Western society, through its emphasis
          on narcissistic self-cultivation, has inadvertently 'sickened' the self — and contrasts
          this with the profound wisdom embedded in indigenous understandings of personhood and
          alterity.
        </p>

        <h2>The Western 'Self': A Narcissistic Construct?</h2>
        <p>
          The modern Western self is largely a product of Enlightenment thought, emphasizing
          autonomy, rationality, and individual rights. While these ideals have brought undeniable
          progress, they have also fostered a culture where the individual is increasingly detached
          from community, tradition, and the natural world. Sociologists and critical theorists,
          from Émile Durkheim to Christopher Lasch, have long pointed to the pathologies arising
          from this isolation. Lasch famously diagnosed a <em>culture of narcissism</em>, where the
          self becomes a project of endless self-promotion and consumption, driven by an insatiable
          need for external validation.
        </p>
        <ul>
          <li>
            <strong>Hegemonic Individualism</strong>: The belief that the individual is the primary
            unit of society, responsible for their own success or failure — often at the expense of
            collective well-being.
          </li>
          <li>
            <strong>Consumerist Identity</strong>: Identity is constructed through consumption,
            where possessions and experiences become markers of self-worth and social status.
          </li>
          <li>
            <strong>Performance Anxiety</strong>: The constant pressure to perform, to be
            exceptional, to curate an idealized image — leading to burnout and chronic anxiety.
          </li>
          <li>
            <strong>Emotional Detachment</strong>: A tendency to intellectualize or suppress
            emotions, viewing vulnerability as weakness rather than a source of genuine connection.
          </li>
        </ul>
        <p>
          This relentless focus on the individual, while seemingly empowering, often produces a
          profound sense of loneliness and meaninglessness. When the self is perpetually striving
          for an unattainable ideal, it becomes caught in a cycle of desire and disappointment. The
          external world is reduced to a mirror — reflecting back an image of the self rather than
          offering genuine reciprocal relationship.
        </p>

        <h2>Indigenous Alterity: A Relational Self</h2>
        <p>
          In stark contrast, many indigenous cosmologies offer a radically different understanding
          of the self. Here, personhood is not an isolated entity but an intricate web of
          relationships — with family, community, ancestors, the land, and the spiritual world.
          Personhood is not achieved through individual accomplishment but through reciprocal
          obligations and interconnectedness. The concept of <strong>alterity</strong> — the state
          of being other or different — is not something to be overcome or assimilated, but a
          fundamental aspect of existence that enriches the collective.
        </p>
        <ul>
          <li>
            <strong>Relational Ontology</strong>: The self is understood as inherently relational,
            defined by its connections rather than its separation. As many indigenous thinkers
            articulate: <em>"I am because we are."</em>
          </li>
          <li>
            <strong>Ecological Self</strong>: The self is deeply intertwined with the natural world,
            recognizing the land, animals, and plants as kin — not merely resources to be exploited.
          </li>
          <li>
            <strong>Ancestral Wisdom</strong>: The past is not a distant memory but a living
            presence, with ancestors providing guidance, identity, and a sense of belonging.
          </li>
          <li>
            <strong>Collective Responsibility</strong>: Individual actions are understood within the
            context of their impact on the community and future generations, fostering shared
            responsibility and interdependence.
          </li>
        </ul>
        <p>
          This relational understanding offers a powerful antidote to the isolating tendencies of
          Western narcissism. In indigenous perspectives, the health of the individual is
          inseparable from the health of the community and the environment. Illness, therefore, is
          often understood not as an individual pathology but as a disruption in these vital
          relationships.
        </p>

        <h2>The Sickness of Separation: A Critical Diagnosis</h2>
        <p>
          The Western narcissistic self, in its pursuit of individual autonomy, creates a profound
          sense of separation — from others, from nature, and from deeper spiritual meaning. This
          separation manifests in various forms of psychological and social distress:
        </p>
        <ul>
          <li>
            <strong>Anxiety and Depression</strong>: The pressure to constantly perform and the fear
            of not measuring up leads to chronic anxiety and feelings of worthlessness.
          </li>
          <li>
            <strong>Existential Vacuum</strong>: Despite material abundance, many experience a deep
            emptiness and lack of purpose — a direct consequence of a self disconnected from
            meaningful relationships and values.
          </li>
          <li>
            <strong>Environmental Alienation</strong>: The exploitation of natural resources stems
            from a worldview that positions humanity as separate from and superior to nature.
          </li>
        </ul>
        <p>
          Indigenous perspectives offer a framework for understanding — and beginning to heal — this
          sickness of separation. By re-embedding the self within a web of relationships, they
          provide a path towards greater wholeness, meaning, and ecological harmony.
        </p>

        <h2>Towards an Integrative Understanding</h2>
        <p>
          The point here is not nostalgia, nor a call to abandon modernity. It is a philosophical
          provocation: what if the very category of the 'individual' — the bedrock of Western
          liberal thought — is itself a historically contingent construction, one that produces as
          many problems as it solves? And what if the traditions we have systematically marginalized
          carry within them a more adequate account of what it means to be a person?
        </p>
        <p>
          An integrative approach can draw upon both Western psychological insights and indigenous
          wisdom to foster a more relational and ecologically conscious understanding of the self.
          This means reclaiming community, reconnecting with nature, honoring ancestry, and
          cultivating the kind of humility that comes from recognizing our fundamental
          interdependence.
        </p>
        <p>
          By holding both traditions in tension — neither romanticizing indigenous thought nor
          uncritically accepting Western individualism — we open a space for genuine dialogue. And
          in that space, something new becomes possible.
        </p>

        {/* Paid reading offer */}
        <div className="mt-12 pt-8 border-t border-border bg-secondary rounded-xl p-6">
          <p className="font-semibold text-foreground mb-2 text-lg">
            If this essay shifted something in how you see yourself —
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I have condensed my complete research on indigenous subjectivation, the political
            genealogy of the Western self, and practical frameworks for self-questioning into a
            longer guide. It is available on Substack and Gumroad for those who want to go deeper.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Read the full guide on Substack →
            </a>
            <a
              href="https://your-gumroad-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
            >
              Get the PDF on Gumroad →
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="mt-6 p-5 border border-border rounded-xl text-center">
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

        {/* Related Essays */}
        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold mb-4">Continue Reading</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/en/essays/illusion-of-the-individual"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                Essay
              </span>
              <span className="font-semibold text-foreground hover:text-primary transition-colors text-sm">
                The Illusion of the Individual: A Foucaultian Reading →
              </span>
            </Link>
            <Link
              href="/en/essays/collective-shadow"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                Essay
              </span>
              <span className="font-semibold text-foreground hover:text-primary transition-colors text-sm">
                The Collective Shadow in the Pursuit of Perfection →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
