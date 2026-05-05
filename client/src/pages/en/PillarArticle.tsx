import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterForm from "@/components/NewsletterForm";

export default function PillarArticleEn() {
  useEffect(() => {
    document.title = "The Narcissism Spectrum | Jorge Dias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Narcissism isn't a binary disorder; it's the foundation of Western society. A reflection on how we pathologize extremes while rewarding the same behavior as strength."
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Perspective" }]} />

      <article className="prose-en">
        <header className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-3 block">
            Core Perspective
          </span>
          <h1>
            Narcissism Isn't a Disorder; It's the Foundation of Western Society
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            We pathologize narcissism in its extremes to pretend we are 'normal'. But the very traits we label as toxic in relationships—manipulation, control, hyper-individualism—are the exact traits our society rewards as 'strength and dominance'.
          </p>
        </header>

        <p>
          There is a comforting illusion in modern psychology: the idea that there is a clear, bright line separating the "normal" person from the "pathological" narcissist. We consume endless content on how to spot a narcissist, how to survive them, and how to protect our boundaries. This excessive pathologization does something very convenient—it distances us from the subject. It creates a safe binary where the narcissist is always the <em>Other</em>.
        </p>
        <p>
          But my perspective is different. I believe that narcissism is not a binary disorder; it is a spectrum, and more importantly, it is the foundational logic of modern Western society.
        </p>

        <h2>The Hypocrisy of the "Normal"</h2>
        <p>
          Consider the characteristics we associate with extreme, pathological narcissism: a relentless drive for control, the manipulation of reality to serve one's ego, a lack of genuine empathy, and viewing others merely as extensions of oneself (objects to be used).
        </p>
        <p>
          When these traits are exhibited in their absolute extremes, usually in intimate relationships, we correctly identify them as abusive and pathological. However, when these exact same traits are exhibited in slightly less extreme, more specific situations—say, in the corporate world, in political leadership, or in the pursuit of wealth—they are not only normalized, they are actively celebrated.
        </p>
        <p>
          We call it "drive." We call it "leadership." We call it "strength and dominance." We live in a society that financially and socially rewards the very behaviors that, in private, destroy lives.
        </p>

        <h2>The Spectrum of Suffering</h2>
        <p>
          There is no well-drawn line between normal and pathological. Everything is an extreme, including small, isolated behaviors. The extreme and the "normal" can reside within the exact same individual, causing immense suffering not only to those around them but to themselves.
        </p>
        <p>
          A person can be a compulsive liar, just like a narcissist, but lack the cold calculation required to manipulate reality effectively. Someone can have deeply ingrained comparative and competitive attitudes, but instead of using them as a mechanism of control over others, these attitudes become a mechanism of <em>loss of control</em> over themselves—leading to anxiety, burnout, and depression.
        </p>
        <p>
          By destigmatizing and unpacking the term "narcissism," we can stop looking at it merely as a clinical label and start looking at it as a cultural mirror. We have grown up in a society whose core values are founded on narcissistic logic. We must question our own individualistic behaviors. We must ask ourselves: how can we perceive the world and live a reality that is not so inherently invasive and abusive?
        </p>

        <h2>The Monopoly of the Logos</h2>
        <p>
          This narcissistic structure is deeply tied to what we can call the "Monopoly of the Logos." In Western thought, the Subject uses Language (Reason) to proclaim itself the sole dominator. Whoever holds rational speech constructs the Truth and becomes the Subject; everything else—nature, animals, spirituality, and often other people—is reduced to the status of a mute object, a resource to be managed and controlled.
        </p>
        <p>
          This Subject-Object split is the root of our collective illness. We are trapped in a performance of the self, constantly trying to dominate our environment and each other, while remaining fundamentally isolated.
        </p>

        {/* Bridge to Kopenawa */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-2xl font-bold mb-4">
            Stepping Outside the Loop: The Yanomami Perspective
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            If our entire societal structure is based on this narcissistic, dominating logic, how do we find a way out? I have been working on a perspective that analyzes a society that does <em>not</em> reproduce this pattern.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Drawing on the philosophy of Davi Kopenawa and the Yanomami indigenous logic of Brazil, we find a radically different way of existing: <strong>Subjectivation by Mediation</strong>. In their cosmology, "everything is people." There is no Subject-Object split. The goal is not to dominate nature or others, but to act as a mediator in a complex web of relationships.
          </p>
        </div>

        {/* Premium Upsell — Full Guide */}
        <div className="bg-secondary rounded-xl p-6 border border-border">
          <p className="font-semibold text-foreground mb-2 text-lg">
            The Alternative: A Society of Mediation
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I have compiled my research on this alternative worldview into a comprehensive guide. It explores Kopenawa's critique of the "people of merchandise," the role of the Shaman as a cosmic diplomat rather than a ruler, and how we can apply this non-narcissistic logic to our own lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://your-gumroad-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Get the Full Text on Gumroad →
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-6">
          <NewsletterForm variant="inline" />
        </div>
      </article>
    </div>
  );
}
