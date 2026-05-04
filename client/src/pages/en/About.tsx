import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutEn() {
  useEffect(() => {
    document.title = "About the Author | Jorge Dias — Research & Essays";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Jorge Dias is an independent researcher and writer based in Brazil, working at the intersection of psychoanalysis, Foucaultian critical theory, and indigenous cosmologies."
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "About" }]} />

      <article className="prose-clinical">
        <h1>About the Author</h1>

        <p>
          I'm <strong>Jorge Dias</strong>, an independent researcher and writer based in Brazil. My
          work lives at the intersection of <strong>psychoanalysis</strong>,{" "}
          <strong>Foucaultian critical theory</strong>, and{" "}
          <strong>indigenous cosmologies</strong> — three traditions that rarely speak to each other,
          but which together offer a surprisingly coherent diagnosis of how the modern self got so
          lost.
        </p>

        <h2>What This Research Is About</h2>
        <p>
          The central question driving my writing is deceptively simple: <em>Why does the modern
          Western self feel so fragile?</em> Despite unprecedented material comfort and individual
          freedom, rates of anxiety, depression, and existential emptiness keep rising. I don't
          think this is a coincidence or a personal failure. I think it's a structural problem — one
          baked into how Western modernity constructed the very idea of what a "self" is.
        </p>
        <p>
          My research draws on three main sources of insight:
        </p>
        <ul>
          <li>
            <strong>Psychoanalysis (Jungian and Lacanian)</strong>: The unconscious is not a
            personal quirk — it is the archive of everything a culture cannot afford to look at
            directly. Jung's concept of the Shadow, applied collectively, reveals the hidden cost of
            perfectionism and the repression of vulnerability.
          </li>
          <li>
            <strong>Critical Theory (Foucault, Marcuse)</strong>: The individual is not a natural
            given — it is a historical product of disciplinary institutions. Schools, clinics,
            prisons, and social media all participate in producing a subject that is legible,
            manageable, and perpetually self-optimizing.
          </li>
          <li>
            <strong>Indigenous Thought</strong>: Many indigenous cosmologies offer a radically
            different ontology — one where the self is not an isolated unit but a node in a web of
            relationships with community, ancestors, and the land. This is not romanticism; it is a
            genuine philosophical alternative to the atomized Western subject.
          </li>
        </ul>

        <h2>Why Write in English?</h2>
        <p>
          My primary academic and clinical work is in Portuguese, for a Brazilian audience. But
          these ideas — the critique of narcissistic individualism, the recovery of relational
          ontologies, the political dimensions of the unconscious — are conversations happening
          globally. Writing in English is my way of joining that conversation, particularly in
          spaces like Reddit's philosophy and critical theory communities, where this kind of
          cross-cultural inquiry is genuinely valued.
        </p>

        <h2>Extended Reading</h2>
        <p>
          Beyond these free essays, I publish longer, more detailed research on Substack and
          occasionally release guides and annotated reading lists. If you find the ideas here
          useful, following along there is the best way to stay connected to the work.
        </p>

        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/en/pillar"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Read the Pillar Essay
            </Link>
            <a
              href="https://your-support-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ♥ Support this research
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
