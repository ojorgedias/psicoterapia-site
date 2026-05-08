import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterForm from "@/components/NewsletterForm";

export default function PillarArticleEn() {
  useEffect(() => {
    document.title = "Narcissism Is Not a Disease | Jorge Dias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "We are used to understanding narcissism as a disease. But what if the traits we pathologize are the very foundation of Western society?"
      );
    }
  }, []);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Essays" },
          { label: "Narcissism Is Not a Disease" },
        ]}
      />

      <article className="prose-en">
        <header className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3 block">
            Pillar Essay · ~15 min read
          </span>
          <h1>Narcissism Is Not a Disease</h1>
          
          <div className="mt-6 p-5 bg-secondary/50 rounded-xl border border-border">
            <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Warning:</p>
            <p className="text-sm text-muted-foreground mb-2">
              Contains high doses of self-criticism without a happy ending.
            </p>
            <p className="text-sm text-muted-foreground m-0">
              I will discuss the problem without providing the "10 steps to solve it."
            </p>
          </div>
        </header>

        <p>
          We grow up accustomed to putting labels on people: "Narcissist," "Psychopath," "Borderline." 
          We are used to understanding narcissism as a disease, as if the narcissistic person were someone 
          vastly different from what is "normal." Therefore, we place a label on this person that separates 
          them from what is considered healthy and standard in society.
        </p>

        <p>
          It might seem that the intention of this text is to "defend" the narcissist, something like: 
          <em>"Guys, the narcissist is a human being like all of us and needs to be respected."</em> 
          But no, that's not the idea. In reality, the idea is to question how we define and treat 
          so-called <strong>Mental Disorders</strong>.
        </p>

        <h2>The DSM and the Coach's Lens</h2>
        
        <p>
          When we look for the definition of Narcissistic Personality Disorder in the <strong>DSM-V</strong> 
          (Diagnostic and Statistical Manual of Mental Disorders), we find the following main definitions: 
          a pervasive pattern of grandiosity, need for admiration, and lack of empathy.
        </p>

        <p>
          The criteria include a grandiose sense of self-importance, fantasies of unlimited success and power, 
          a belief of being "special," an expectation of particularly favorable treatment, interpersonal 
          exploitation, and arrogant behaviors.
        </p>

        <p>
          Upon reading these definitions, an interesting reflection arises: these behaviors are present in all of us, 
          to a greater or lesser extent. It is not difficult to tag <strong>anyone in the world</strong> with the 
          narcissist label if our gaze is biased and focused on "finding" such traits. Realizing this is already a massive problem.
        </p>

        <p>
          But in the case of Narcissism, we can note an interesting distinction: if you observe the criteria with a 
          "gentler" eye, replacing the original terms with others socially viewed as "positive," an individual labeled 
          as a Narcissist could easily be read as a <strong>strong</strong> and <strong>dominant</strong> person. 
          Don't believe it? Try this experiment: reread the DSM criteria as if you were a self-esteem and empowerment coach. 
          A large part of the criteria (if not all) become tools for empowerment and personal growth.
        </p>

        <p>
          The way our society currently functions leads us to a dilemma with two extreme poles: we need to learn to be strong, 
          independent, conquerors, and self-sufficient, while at the same time, if we actually stop to do that, we become 
          at the very least selfish, and potentially narcissistic. It ends up being a very difficult line to balance.
        </p>

        <h2>The Alien Perspective and the Ego</h2>

        <p>
          At this point, it's important to understand the notion of the "Ego." The best way I have to introduce this idea 
          is to think about it as if I were an "alien" observing the human race. This third-person view helps us step out 
          of the "default" mode and notice things that should be obvious.
        </p>

        <p>
          Think of a being that is born totally integrated into its environment but gradually discovers that, <strong>even 
          being part of a whole, it is a separate unit</strong>. Relying on Freud, it is understood that at birth, the human 
          baby's existence is entirely connected to and dependent on the surrounding world. The baby is not a being that 
          experiences hunger, cold, and pain. <strong>It is the hunger, the cold, and the pain.</strong>
        </p>

        <p>
          As time passes and experiences accumulate, the baby begins to conceive and refine the notion of the Ego (I). 
          At this moment, it realizes its existence is part of a system involving other existences, but as far as it can 
          understand, these figures are subject to its own desire, causing a justified sense of omnipotence. This is what 
          Freud defines as <strong>Primary Narcissism</strong>.
        </p>

        <p>
          So it becomes evident that the emergence of the Ego is tied to the emergence of the Other. The tension between 
          Ego and Other reaches its peak when the invested psychic energy (libido) does not return or is "stolen" without consent. 
          This investment and return of energy in relation to the external world is what Freud defines as <strong>Secondary Narcissism</strong>.
        </p>

        <h2>The Narcissism Spectrum</h2>

        <p>
          Once we understand these concepts, it's easy to observe that this Ego/Other tension is fundamentally present in 
          all human relations. The way we view and determine the boundaries between Ego/Other is what defines these same 
          points in our society as a whole. At this point, the notion of a "Narcissistic Society" becomes clearer. 
          We stop seeing it as a disease and start observing it as a spectrum.
        </p>

        <p>
          Returning to the alien perspective: these human beings cannot comprehend the basic premise that Ego/Other are 
          different parts of the same thing. They only understand it when they treat one part as Subject and the other 
          as Object. Our society is based on this incessant movement of exchanging roles and definitions of knowledge and authority.
        </p>

        <p>
          An essential characteristic in this dynamic is comparison. The narcissism present in us makes us constantly compare 
          our condition to others. The main point is that the person labeled as a Pathological Narcissist cannot bear the 
          result of these constant comparisons, while simultaneously being unable to stop making them for a single moment.
        </p>

        <p>
          What differentiates a standard individual from one considered Pathologically Narcissistic is how independent from 
          their Ego this barrier of comparison is. In "normal" individuals, this filter is active all the time, but we often 
          notice it, remove it, and upon going through the shock of comparison, we feel shame, frustration, or sadness. 
          The Pathologically Narcissistic individual does not have the option to remove or even perceive the existence of this filter.
        </p>

        <h2>Biopower and the Dilution of the King</h2>

        <p>
          Notice how an individual with such traits is considered someone strong and resilient in our current society? 
          We live in a world that values the individual aspect through dominance. Michel Foucault created a conceptual 
          analysis system that helps us understand how this relationship is structured and maintained.
        </p>

        <p>
          According to Foucault, power is not something held in a box; it is exercised. Historically, the State was controlled 
          by a single person, the king, whose power was literal: <em>"Obey me or die."</em> The logic was: <strong>Let live or make die.</strong>
        </p>

        <p>
          In our current society, this phrase had a slight change that gave a whole new guise to the same thing. Today, power 
          is adorned with science, logic, and rationality, but its core mechanism is: <strong>Make live or let die.</strong>
        </p>

        <p>
          The State makes you live—it provides health, education, and notions of equality. But the mechanisms of power that 
          promote life also promote social adequacy and normalization, causing everything that deviates from the social norm 
          to be left to die. For Foucault, society occupies the function of the Great Other in our lives, making the Ego feel 
          constantly threatened and watched by everything external.
        </p>

        <h2>The Exhaustion of the Subject</h2>

        <p>
          This dilution of power, combined with the feeling of constant surveillance, makes all aspects of our lives confusing 
          and chaotic. We are forced to deal with various isolated social bubbles while coping with a constant fear of inadequacy, 
          leaving us with few choices:
        </p>

        <ul>
          <li>Cling to the narcissistic model, choose a social bubble and dominate it, placing oneself in the role of Subject and objectifying reality.</li>
          <li>Navigate between different bubbles, placing oneself in the role of Object at the mercy of the situation, constantly seeking to feel adequate.</li>
          <li>Accept uncertainty and inconstancy, dealing with the feeling of inadequacy and social disapproval.</li>
        </ul>

        <p>
          Just as a Pathologically Narcissistic subject wins any argument through exhaustion, our current society "exhausts" 
          our minds through an excess of information and contradictions. It is a vast, complex mechanism that accepts any 
          discourse, but through exhaustion, convinces any subject that the ideal belongs to an unreachable Great Other.
        </p>

        <p>
          As I made clear at the beginning of the text, there is no ready-made answer or "10 steps to beat the narcissistic society." 
          Otherwise, it would just be another adaptation and dilution of ideas.
        </p>

        {/* Bridge to Paid Product */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-display text-2xl font-semibold mb-4">The Alternative: Subjectivation by Mediation</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            If the Western model of the individual is an exhaustion machine based on the Ego/Other tension, how do we step outside of it? 
            We cannot solve the problem using the same logic that created it. My extended research explores an alternative ontological framework 
            grounded in the indigenous thought of Davi Kopenawa and the Yanomami cosmology—where subjectivity is not formed by dominating the Other, 
            but by mediating with the environment.
          </p>
          <div className="bg-secondary rounded-xl p-6 border border-border">
            <p className="font-semibold text-foreground mb-2">Read the complete essay</p>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              This deep dive into the escape from the narcissistic logic is available as a beautifully formatted PDF. 
              By purchasing it, you directly support my independent research.
            </p>
            <a
              href="https://your-kofi-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get the PDF Guide ($7.00) →
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-8">
          <NewsletterForm variant="inline" />
        </div>
      </article>
    </div>
  );
}
