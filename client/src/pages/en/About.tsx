import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutEn() {
  useEffect(() => {
    document.title = "About Me: Jorge Dias | Clinical Psychotherapist";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Clinical psychotherapist and researcher in Brazil, focused on psychoanalysis, critical theory, and indigenous perspectives."
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "About Me" }]} />

      <article className="prose-clinical">
        <h1>About Me</h1>

        <p>
          Hello, I'm <strong>Jorge Dias</strong>, a clinical psychotherapist and researcher based in
          Brazil. My practice is rooted in an integrative approach that explores the intersections
          between <strong>psychoanalysis</strong>, <strong>critical theory</strong>, and{" "}
          <strong>indigenous perspectives</strong>.
        </p>

        <h2>My Approach: Beyond the Surface</h2>
        <p>
          I believe psychotherapy is not merely about finding quick fixes or generic advice. It is a
          rigorous laboratory for self-investigation — a space where we deconstruct self-sabotaging
          patterns and reclaim authorship over our own narratives. My clinical work draws on:
        </p>
        <ul>
          <li>
            <strong>Analytical Psychology (Jungian)</strong>: Exploring the Shadow, the unconscious,
            and the process of individuation to understand hidden dynamics that shape our lives.
          </li>
          <li>
            <strong>Critical Theory (Foucaultian)</strong>: Examining how power structures and
            societal norms shape our relationships and sense of self from the inside out.
          </li>
          <li>
            <strong>Indigenous Perspectives</strong>: Integrating cosmologies and ways of knowing
            from indigenous thinkers, broadening our understanding of what it means to be in balance
            with ourselves and the world.
          </li>
        </ul>

        <h2>Who I Work With</h2>
        <p>
          My practice is a space for those who are tired of living defensively. Together we work to
          expose invisible family loyalties, break free from the unhealthy need for external
          approval, and develop unshakeable autonomy. The goal is for you to embrace the discomfort
          of truly being yourself — without needing to apologize for your existence.
        </p>

        <div className="bg-secondary rounded-lg p-6 my-6 border border-border">
          <h3 className="font-display text-lg font-semibold mb-3">Exclusively Online Sessions</h3>
          <p className="mb-0 text-muted-foreground">
            I offer exclusively online psychotherapy sessions for individuals worldwide. This format
            ensures access to a deeply insightful therapeutic space from the comfort and security of
            your own environment.
          </p>
        </div>

        <h2>Background</h2>
        <p>
          I am a psychotherapist trained at the State University of Londrina (UEL), Brazil. With
          over five years of clinical practice and more than 1,000 sessions conducted, I have helped
          individuals navigate existential crises, overcome self-sabotage, and foster healthier
          relationships. I currently support clients in Brazil and abroad, including individuals in
          Australia, Portugal, and other countries.
        </p>

        <h2>Ethics and Confidentiality</h2>
        <p>
          All communication is confidential and protected by strict professional secrecy. You can
          share everything without fear of judgment. The therapeutic space is sacred, safe, and
          entirely yours.
        </p>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-6">
            Want to explore my research before reaching out?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/pillar"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Read My Pillar Essay
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
      </article>
    </div>
  );
}
