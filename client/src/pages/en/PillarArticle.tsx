import { useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterForm from "@/components/NewsletterForm";

export default function PillarArticleEn() {
  useEffect(() => {
    document.title = "Narcissism Is Not a Disease | Jorge Dias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "We grew up with the habit of labeling people: 'Narcissist', 'Psychopath', 'Borderline'. I will explain why definitions matter, but labels can be a problem."
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

          <div className="mt-6 p-5 bg-secondary/50 rounded-xl border border-border text-center">
            <p className="text-base font-bold text-foreground uppercase tracking-wide mb-2">
              WARNING: CONTAINS HIGH DOSES OF SELF-CRITICISM WITHOUT A HAPPY ENDING
            </p>
            <p className="text-base font-bold text-foreground uppercase tracking-wide m-0">
              I WILL TALK ABOUT THE PROBLEM WITHOUT PROVIDING THE "10 STEPS TO SOLVE IT"
            </p>
          </div>
        </header>

        <p>
          We are used to understanding narcissism as a disease, as if the narcissistic person were someone very
          different from what is "normal." So we place a label on this person that separates them from what is
          considered healthy and standard in society.
        </p>

        <p>
          It might seem like the intention of this text is to "defend" the narcissist, something like: "Guys, the
          narcissist is a human being just like all of us and deserves to be respected." But no, that's not the
          idea. In reality, the idea is to question the way we define and treat the so-called{" "}
          <strong>Mental Disorders.</strong>
        </p>

        <p>
          When we look up the definition of Narcissistic Disorder in the{" "}
          <strong>DSM V</strong> <em>(Diagnostic and Statistical Manual of Mental Disorders)</em>, we find the
          following main definitions:
        </p>

        <blockquote>
          <p>Global pattern of grandiosity;</p>
          <p>Need for admiration;</p>
          <p>Lack of empathy.</p>
        </blockquote>

        <p>With the following <strong>criteria:</strong></p>

        <ul>
          <li>Grandiose sense of self-importance;</li>
          <li>Preoccupation with fantasies of unlimited success, power, brilliance, beauty, or ideal love;</li>
          <li>
            Belief of being "special" and unique, and that they can only be understood by, or associate with,
            other special or high-status people (or institutions);
          </li>
          <li>Requirement of excessive admiration;</li>
          <li>
            Expectations of especially favorable treatment or automatic compliance with their expectations;
          </li>
          <li>Interpersonal exploitation, taking advantage of others to achieve their own ends;</li>
          <li>
            Lack of empathy: reluctant to recognize or identify with the feelings and needs of others;
          </li>
          <li>Frequently envies others or believes that others envy them;</li>
          <li>Arrogant and insolent behaviors or attitudes.</li>
        </ul>

        <p>When reading these definitions, we can have an interesting reflection:</p>

        <p>
          These behaviors are present in all of us, to a greater or lesser extent. It is not difficult to label{" "}
          <strong>anyone in the world</strong> with the narcissist tag if our gaze is biased and focused on
          "finding" such traits. Realizing this is already a huge problem. The DSM (which is like the bible of
          mental disorders) is a powerful instrument that, depending on how it is used, can destroy someone's
          life.
        </p>

        <p>
          Actually, this is nothing new. This pattern can be observed with a good part of the mental disorders
          described in the DSM. This even generates intense debate in the scientific community. But, in the case
          of Narcissism, we can notice an interesting distinction: If you look at the criteria with a "gentler"
          eye, replacing the original terms with others socially seen as "positive," an individual labeled as a
          Narcissist could easily be read as a <strong>strong</strong> and <strong>dominant</strong> person.
          Don't believe it? Try the following experiment: Reread the quote above with the criteria for
          Narcissistic Disorder as if you were a self-esteem and empowerment coach. A good part of the criteria
          (if not all) start to be seen as tools of <strong>empowerment</strong> and{" "}
          <strong>personal growth.</strong>
        </p>

        <p>
          The way our society currently works leads us to a dilemma with two extreme poles: We need to learn to
          be strong, independent, conquerors, and self-sufficient, while at the same time, if we actually stop
          to do that, we become at the very least selfish and potentially narcissistic. It ends up being a very
          difficult line to balance.
        </p>

        <p>
          We already have enough studies and concepts to see how our current society is individualistic,
          selfish, etc. My point is not necessarily to prove or dissect that. The thing is, because we were
          raised and educated by this society, our worldview is entirely based on it — even when we try to be
          altruistic, less selfish, and different from this pattern, we start to consider ourselves "Evolved,"
          "Enlightened," which places other people in the position of "backward," "behind." Did you notice how
          the words changed, but the pattern remains the same? We cannot escape this logic to a greater or
          lesser extent.
        </p>

        <p>
          At this point it is important that we understand the notion of the "Ego." It is a difficult task to
          talk about this subject without entering into complex and deep philosophical reflections or making
          long digressions to be able to "tie together" all the context.
        </p>

        <p>
          <em>
            By the way, digressions are a very big challenge for me as a writer. Each pair of paragraphs
            written here could easily be turned into a new text of equal size and depth, given the importance
            of each of the sub-themes.
          </em>
        </p>

        <p>
          The best way I have to introduce the idea of the Ego is to think of this question as if I were an
          "alien" observing the human race. This third-person view helps us step out of "default" mode and
          notice things that should be obvious.
        </p>

        <p>
          Think of a being that is born totally integrated into the environment it is in, but gradually
          discovers that, <strong>even being part of a whole, it is a separate unit.</strong> Here things
          become complex to understand and even more complex to explain.
        </p>

        <p>
          Drawing on <em>Freud</em>, we understand that at birth, the human baby's existence is entirely
          connected to and dependent on the world around it. The baby is not a being that experiences hunger,
          cold, and pain. <strong>It is the hunger, the cold, and the pain.</strong> There is no separation
          between what it is and what it feels, where it is, what it thinks, etc. So, in the baby's early
          mind, everything around it is an extension of itself. Gradually, small connections and integrations
          are made:
        </p>

        <p className="text-center font-medium">
          Hunger → Crying → Milk → Satiety
        </p>

        <p>
          Today, as adults, we see this as a sequence of different connected events, with different subjects,
          sensations, and moments involved, but the early mind of a baby tends to see this sequence in a much
          more direct way, with one or at most two different states of a single thing. So the baby understands
          that, even though all existence is one thing, it can compress or expand to reach different realities
          and states.
        </p>

        <p>
          As time passes and experiences accumulate, the baby begins to conceive and refine the notion of the
          Ego (I). At this point, it realizes that its existence is part of a system that involves other
          existences and figures external to it, but as far as it can understand, these figures are subject to
          its own desire, which causes a justified sense of omnipotence. This is what Freud defines as{" "}
          <strong>Primary Narcissism.</strong>
        </p>

        <blockquote>
          <p>
            The child shall have a better time than his parents; he shall not be subject to the necessities
            which they have recognized as paramount in life. Illness, death, renunciation of enjoyment,
            restrictions on his own will, shall not touch him; the laws of nature and of society shall be
            abrogated in his favour; he shall once more really be the centre and core of creation — 'His
            Majesty the Baby', as we once fancied ourselves. The child shall fulfil those wishful dreams of
            the parents which they never carried out — the boy shall become a great man and a hero in his
            father's place, and the girl shall marry a prince as a tardy compensation for her mother. At the
            most touchy point in the narcissistic system, the immortality of the ego, which is so hard pressed
            by reality, security is achieved by taking refuge in the child. Parental love, which is so moving
            and at bottom so childish, is nothing but the parents' narcissism born again, which, transformed
            into object-love, unmistakably reveals its former nature.
          </p>
          <footer>
            <strong>Sigmund Freud</strong>,{" "}
            <em>On Narcissism: An Introduction</em> (1914).
          </footer>
        </blockquote>

        <p>
          So it becomes evident that the emergence of the Ego is tied to the emergence of the Other, with the
          Ego being omnipotent and the Other an almost inanimate object devoid of its own will. This feeling
          does not last long, but it is very potent and necessary in child development. It is the process of
          investing one's own energy which, in this phase of omnipotence, permeates the external object, but
          never really leaves the Ego. This energy touches and recognizes the other, but the baby remains the
          center of everything.
        </p>

        <p>
          Note that when I use the term "energy," I am talking about the psychic energy that drives our
          desires, actions, and directions, defined by Freud as <em>libido.</em>
        </p>

        <p>
          As time passes, energy becomes increasingly invested in the other, to the point of being fully sent
          out, in the hope of immediate return. This is where the phase of tantrums, uncontrolled crying, and
          frustration begins. At this moment, omnipotence begins to be questioned and the notion of an Other
          with its own agency and will emerges in the baby. The tension between Ego/Other reaches its peak
          when the invested energy does not return or, in a sense, is "stolen" without consent.
        </p>

        <p>
          This investment and return of energy in relation to the external world is what Freud defines as{" "}
          <strong>Secondary Narcissism.</strong> It is how we learn to direct and invest our energy in people,
          ideas, projects, feelings, and also to return it to ourselves. When we feel a very strong toothache,
          we withdraw our interest from work, friends, studies, and invest it all in ourselves. It is a basic
          mechanism of defense and self-preservation. When we deal with grief, the energy previously invested
          in the lost person returns to us, causing temporary pain, until we can process it and reinvest it in
          a new Other.
        </p>

        <p>
          After understanding these concepts, it is easy to observe that this Ego/Other tension is something
          fundamentally present in all human relationships. The way we see and determine the functions,
          definitions, rules, and limits between Ego/Other is what defines, by extension, those same points in
          our society as a whole.
        </p>

        <p>
          At this point in the text, the notion of a "Narcissistic Society" becomes clearer. By understanding
          what narcissism is and how it is present in all of us, we stop seeing it as something separate from
          us:
        </p>

        {/* Image 1 — "Sick Bad Person / Healthy Good Person" */}
        <figure className="my-8 flex flex-col items-center">
          <img
            src="/images/pillar/img1_en.png"
            alt="Diagram showing the binary view of narcissism: Sick Bad Person (Not Me) vs Healthy Good Person (Me)"
            className="max-w-full rounded"
          />
        </figure>

        <p>And we start to observe it more as a spectrum:</p>

        {/* Image 2 — "Selfish ← Dynamic Ego → Selfless" spectrum */}
        <figure className="my-8 flex flex-col items-center">
          <img
            src="/images/pillar/img2_en.png"
            alt="Spectrum diagram: Selfish (ME/other) ← Dynamic Ego → Selfless (me/OTHER), both extremes labeled as Potential Narcissist"
            className="max-w-full rounded"
          />
        </figure>

        <p>
          I know it might seem counterintuitive to think of an altruistic person as a Potential Narcissist,
          but remember the criteria we observed in the first paragraphs and how the result depends on the
          "lens" of the observer. Would the narcissist be a person with an extremely fragile Ego who compares
          themselves too much to others and always seeks to convince themselves they are superior? Or would
          they be a person with an extremely strong Ego who subjugates others who don't know how to "defend"
          themselves from it?
        </p>

        <p>
          Going back to the alien perspective: these human beings cannot understand and deal with the basic
          premise that Ego/Other are different parts of the same thing. They can only understand it when they
          treat one part as Subject and the other as Object, which makes this tension continue to exist
          incessantly, where sometimes they are Subjects who objectify the other, and sometimes they are
          objectified by the other (who is occupying the role of subject). Our society is based on this
          incessant movement of exchanging roles and definitions of knowledge and authority.
        </p>

        <p>
          An essential characteristic in all this dynamic involving narcissism is comparison. The narcissism
          present in us makes us constantly compare our condition to the condition of other people. The main
          point is that the person labeled as a Pathological Narcissist is not capable of bearing the result
          of these constant comparisons, while at the same time being unable to stop making them for even a
          single moment. So all their relationships are fundamentally based on comparison.
        </p>

        <p>
          Think about everything we talked about regarding babies, the Ego/Other, and energy investment. In an
          ideal relational situation, the energy of the Ego that is invested in the Other always returns as a
          mixture of both, because, obviously, the Other is not identical to me. From this, I receive (or
          refuse) this initial energy that comes back modified and I am affected by it.
        </p>

        {/* Image 3 — A (ME) → B (OTHER), A+B returning */}
        <figure className="my-8 flex flex-col items-center">
          <img
            src="/images/pillar/img3_en.png"
            alt="Diagram of relational energy exchange: A (ME) sends energy to B (OTHER), which returns as A+B"
            className="max-w-full rounded"
          />
        </figure>

        <p>
          What happens in the case of the person who is at one extreme (selfish or altruistic) of the spectrum
          is that they project a part of themselves that intervenes in every single relationship and energy
          exchange. This projected part, even though entirely based on comparison, acts as a defense mechanism
          that filters (outside the Ego) and intensifies all energy that goes out and comes back. This makes
          any relational energy exchange favorable to the Ego.
        </p>

        <p>
          This way, it doesn't matter whether the Ego, in its most intimate aspect, is well or poorly
          constituted — this barrier will always make the result of any relationship an excess of original
          energy that returns to the Ego. This barrier will always function as an instance that compares and
          benefits the Ego. The movement between selfish or altruistic will depend on how well this excess
          energy is received and assimilated by the Ego and by the Other. That is, on how much this barrier
          manages to convince the other and the Ego itself that the excessive balance of the relationship is
          real and spontaneous.
        </p>

        {/* Image 4 — Excess A flooding back */}
        <figure className="my-8 flex flex-col items-center">
          <img
            src="/images/pillar/img4_en.png"
            alt="Diagram showing excess energy (AAA+B) returning to the Ego when the comparison barrier is active"
            className="max-w-full rounded"
          />
        </figure>

        <p>
          <em>
            I find it curious how the paragraph where I explain narcissistic thinking has an excessive
            repetition of the word "Ego." It ends up being self-explanatory.
          </em>
        </p>

        <p>
          I think it is important to reinforce a point at this moment in the text: How can a Narcissist be
          altruistic? If the Pathological Narcissist is a subject dominated by an excess of Ego, how could
          they think about and prioritize others? The answer is that an excess of Ego does not necessarily
          mean selfishness. Let's try to understand better:
        </p>

        <p>
          <strong>Selfishness:</strong> Prioritizing oneself at the expense of the other.
        </p>
        <p>
          <strong>Altruism:</strong> Prioritizing the other at the expense of oneself.
        </p>
        <p>
          <strong>Excess of ego:</strong> Seeing any situation through one's own point of view, minimizing and
          diluting the will and agency of the other (Egocentrism).
        </p>

        {/* Image 4 repeated — as referenced in the original text */}
        <figure className="my-8 flex flex-col items-center">
          <img
            src="/images/pillar/img4_en.png"
            alt="Diagram showing excess energy (AAA+B) returning to the Ego when the comparison barrier is active"
            className="max-w-full rounded"
          />
        </figure>

        <p>
          Let's look again at the example diagram: Red and Yellow debate the same topic.
        </p>

        <p>
          "A" represents the perspective of the red individual; "B" represents the perspective of the yellow
          individual.
        </p>

        <p>
          The excess of "A" in the image does not necessarily mean the conversation is focused only on the red
          individual. It means the conversation is being dominated by their opinion on the subject. Let's
          suppose the subject is a car that the yellow individual is thinking about buying and that the red
          individual is a car salesperson.
        </p>

        <p>
          The red individual shows themselves as highly altruistic and concerned with the yellow's happiness,
          so concerned that they even manage to perceive nuances and issues about the subject that even the
          yellow themselves had not noticed. It is a well-intentioned form of invasion. The yellow individual's
          defenses do not go on alert, because, even though the conversation is being dominated by the red,
          the subject is entirely directed and focused on the yellow's interest.
        </p>

        <p>
          When the red receives the yellow's response, it already comes filtered and shaped by the external
          barrier, causing the red not to go through the initial shock of comparison and to make an analysis
          focused only on their own interest, while the yellow receives the shock for both. This shock,
          combined with the lack of defenses, causes the opinion of the red individual to dominate not only
          the conversation, but also the psyche of the yellow individual.
        </p>

        <p>
          It is as if the baby did not want to deal with the fact that the invested energy did not return as
          desired and, instead of crying, throwing a tantrum, and dealing with the frustration, it projected a
          part of itself that acts independently and does all the work of dealing with the Ego/Other tension,
          bringing back to the Ego only the desired energy that validates it.
        </p>

        <p>
          The analogies brought by the diagrams show ideal and extreme situations, but what happens is that in
          real life all of us have a comparison barrier. Whether larger or smaller, stronger or weaker, our
          society encourages and is based on this. Basically, our psyche is trained from childhood to compare
          and seek social adequacy all the time, at any cost.
        </p>

        <p>
          What differentiates a standard individual from one considered Pathologically Narcissistic is how
          independent from their Ego this barrier is. In some individuals, this barrier is so autonomous that
          it becomes a filter that modifies the reality of all relationships. It is not as if the Ego actively
          makes a conscious comparison movement at every moment. It is something naturalized and incorporated
          into the subject's standard functioning. The result of any relational exchange already arrives
          filtered to the Ego.
        </p>

        <p>
          Just as when we spend an entire day in the sun wearing sunglasses and our vision no longer perceives
          the difference caused by the glasses, the filtered perspective becomes our default reality.
          Individuals considered "normal" have this filter active all the time and often notice it, remove it,
          and upon going through the shock of comparison, feel shame, frustration, sadness…
        </p>

        <p>
          You know that feeling of realizing that even while trying to help you ended up getting in the way?
          Or that embarrassment of noticing that only you laughed at that joke and no one else identified with
          it? That is when we had the "filter" on without realizing it.
        </p>

        <p>
          The individual considered Pathologically Narcissistic does not have the option of removing or even
          perceiving the existence of this filter. It is as if, instead of glasses, they wore a fixed contact
          lens that not only filters the sun, but makes their entire perspective of reality have a different
          coloring. Information already arrives to them modified by a mechanism that avoids uncomfortable
          feelings at all costs. That is why every Pathologically Narcissistic individual has a huge ability
          to convince people and manipulate conversations, because they have inside themselves an active
          mechanism running 24 hours a day that works convincing themselves that reality is the way they see
          it.
        </p>

        <p>
          Do you notice how an individual with such characteristics is considered someone strong and resilient
          in our current society? We live in a world that values the individual aspect through dominance. The
          way we do this is through the constant tension of the Subject/Object relationship. When we label a
          subject as "sick," "beautiful," "innocent," "ADHD," "Narcissist," etc., we are objectifying a unique
          individual experience and reducing it to a conceptual pattern.
        </p>

        <p>
          Look, the definition and categorization of people through concepts is very important for social
          organization and compliance with norms, but the personal perspective and the recognition of
          subjectivities dissolves amid so many definitions and categories.
        </p>

        <p>
          Michel Foucault created a conceptual analysis system that helps us understand how this relationship
          is structured and maintained in our society. A large part of his theory focused on defining this
          mechanism and how it influences our lives in various spheres and different ways. When we talk about
          this, it is not necessarily a social behavior, a custom, or a habit that we nurture and have
          difficulty "letting go of." It is the structure on which our society is based. It is an adaptable
          and dynamic machine.
        </p>

        <p>
          According to Foucault, the function of this machine is to use subtle control mechanisms aimed at
          creating what he calls "docile bodies." Individuals who are economically productive and politically
          obedient. Also according to Foucault, for this structure to work well, it needs two things:
        </p>

        <p>
          <strong>Biopolitics and Biopower:</strong> Simply and directly: Bio means body, life. Therefore:
        </p>

        <p>
          <strong>Biopolitics:</strong> The policies created to categorize, define, understand, and ultimately
          dominate bodies and lives collectively.
        </p>

        <p>
          <strong>Biopower:</strong> The way in which biopolitics is exercised and maintained.
        </p>

        <p>Let's then look more carefully at the definition of power:</p>

        <p>
          For Foucault, power is not something affirmed, defined, or controlled. Power is exercised. It is
          everywhere. It basically means a vertical relationship (top-down). It can be the
          parent/child, student/teacher, doctor/patient relationship, etc. To better understand how power
          works today, we need to look at the past:
        </p>

        <p>
          As human beings populated the earth, many people gathered in a place they decided to call a nation.
          They had to divide the land, the resources, and nurture personal relationships with one another. To
          organize all this mess, something called the state emerged. The idea at this moment was that the
          state would be controlled by a single person, the king, who defined the rules and exercised maximum
          power.
        </p>

        <p>
          This power was exercised in the most direct and literal way possible: Obey me or die. Hence the
          concept of:
        </p>

        <p className="text-center font-semibold italic">Let live or make die</p>

        <p>
          So the king said: You are only alive because I allow it. How you are born, grow, or deal with your
          problems doesn't interest me much, as long as you don't break my rules or make me angry. If that
          happens, I'll kill you.
        </p>

        <p>
          Life, here, does not matter to the State; it is merely the absence of the king's sword. In this
          scenario, the absolutist king has absolutely no interest in social issues, freedom, plurality, etc.
          He places himself in a separate place from the common citizen, conferring on them only a function of
          servitude and utility. The common citizen only appears in the king's eyes when they are useful for
          the king's own purposes or when they break some order or law.
        </p>

        <p>
          The problem is that this power exercised in a partial and coercive way gradually causes people to
          revolt and question the origin and function of such power. At some point people realize: "Wait, we
          are 5,000 peasants together here in poverty and the king has an army of only 500." This is the
          moment when revolutions, wars, and changes in the socioeconomic structure emerge.
        </p>

        <p>
          When we look at our current politics and society, it seems we have made a giant leap forward, a
          paradigm shift that respects, empowers, and grants freedom to everyone. Really?
        </p>

        <p>
          In Foucault's reading of current society, this phrase underwent a small change that gave a whole new
          guise to the same thing: Power. Today power is adorned, full of words, concepts, ideas, science,
          logic, rationality, but, in the end, it continues to fulfill a very similar function:
        </p>

        <p className="text-center font-semibold italic">Make live or let die</p>

        <p>
          The central mechanism remains the same: Who defines the rules of the game and exercises power is the
          state, but instead of this power being exercised by a single king, it is diluted throughout society
          and exercised in small portions and previously defined and categorized contexts. It seems like a much
          more coherent and fair logic in theory, right?
        </p>

        <p>
          How does this work in practice? The state makes you live. Not just that, it helps you live in the
          best way possible! Nowadays we have basic sanitation, health, education, hygiene, birth control,
          notions of equality, justice, and freedom for all on an equal scale.
        </p>

        <p>
          But what happens in practice is that the mechanisms of power that promote life also promote social
          adequacy and normalization, causing everything that deviates from the social norm to be left to die.
          Do you see how this feeds that dynamic of Ego/Other tension?
        </p>

        <p>
          For Foucault, society occupies the function of the Great Other in our lives, making the Ego feel
          constantly threatened and watched by everything external. Power, while it can be exercised by me,
          can also be exercised by any other person, as long as they are socially validated.
        </p>

        <p>
          Here comes the most interesting part defined by Foucault: The notion that power is not something
          rigid and conceptual, it is exercised. You cannot take power and store it in a box, because it is
          not a commodity or an exclusive privilege.
        </p>

        <p>
          You cannot exercise power simply by saying "look, power is now in my hands." For this to work,
          people need to believe that you, for some reason, are responsible for exercising that power (like a
          doctor who makes a diagnosis to a patient). The main point is that power is something relational. Power
          does not exist with just one person. It is only exercised when someone exercises it in relation to
          another person.
        </p>

        <p>
          This diluted and capillarized power means that the great authority figure, responsible for
          surveilling and punishing, is not far away, living in their distant castle and therefore being a
          distant threat. In current society, any figure is a potential watchman who can bring your
          punishment. And you yourself can also be a "watchman" in your relationships.
        </p>

        <p>
          Think of the following analogy: There is a barracks, with its own rules, customs, specific clothing,
          and traditions, where each soldier must strictly follow their role and cannot, under any
          circumstances, go out for ice cream between 2pm and 6pm. No matter how hot it is. No matter that it
          makes no difference to the barracks routine, no matter that they are idle or that the ice cream is
          on sale for 50 cents.
        </p>

        <p>
          Now imagine you are a soldier who loves ice cream. The day is hot, you have been idle for two hours,
          and the ice cream shop across the street is empty with a freshly arrived shipment of your favorite
          flavor. This is the moment when personal ethics tends to suppress collective ethics. Once your
          personal ethics allow you to leave and deal with the guilt for it (or the absence of such guilt),
          what prevents you from reaching the so-desired ice cream is only the power exercised over you.
        </p>

        <p>
          If power is only exercised by the general, who stays at the back of the barracks in their closed
          room having meetings all day, the ice cream becomes a reality. But if power is exercised by both
          your fellow soldiers and by officers of other ranks, you will feel that everyone around you is a
          potential watchman. In this way, the chance of your individual ethics suppressing collective ethics
          is almost zero.
        </p>

        <p>
          This dilution of power, combined with the feeling of constant surveillance and the globalization
          existing in today's world, makes all aspects of our lives become confusing and chaotic. At the same
          time that we grow up learning that there is a general rule of adequacy with a single model of right
          and wrong, we are bombarded by contradictory news, ideas, and perspectives that make us question
          ourselves and others.
        </p>

        <p>
          This activates mechanisms that make our psyche remain in a constant search for the "right way" to
          live, forcing us to deal with various isolated social bubbles, while at the same time dealing with a
          constant feeling of fear of inadequacy, leaving us with few choices:
        </p>

        <ul>
          <li>
            Cling to the narcissistic model, choose a social bubble and dominate it, placing oneself in the
            role of Subject, objectifying all reality, ignoring and filtering any perspective that is not
            consistent with one's own point of view;
          </li>
          <li>
            Navigate between different bubbles, placing oneself in the role of Object at the mercy of the
            situation and the various Subjects who dominate the moment, while constantly seeking to feel
            adequate and belonging;
          </li>
          <li>Accept uncertainty and inconstancy, dealing with the feeling of inadequacy and social disapproval.</li>
        </ul>

        <p>
          Just as a Pathologically Narcissistic subject wins any argument through exhaustion via an excess of
          argumentation and logic, current society "exhausts" our minds through an excess of information and
          contradictions. Instead of punishing and separating what is contradictory (as the king used to do),
          it receives and incorporates it, but with one essential condition: That the thought be diluted in
          the infinite existing rules and mechanisms. It is a large and complex mechanism that accepts any
          discourse and idea, but through exhaustion and excess of arguments, convinces any subject that, in
          the end, the ideal belongs to a great Other, unreachable and inconstant.
        </p>

        <p>
          A person can work years in an office editing spreadsheets, texts, and calculating factors, without
          having the slightest notion (or desire) to understand what the final objective of their work is. In
          the same way, I see psychology theorists dissecting categories, details, diagnoses, and definitions
          without stopping to question the meaning and necessity of these categorizations.
        </p>

        <p>
          Worse than that, even the subjects who stop to question the system in which we live end up having to
          adapt their ideas and perspectives to social norms, seeing complex work full of criticism get diluted
          in various other perspectives and variations that distort and modify the main idea, while dealing
          with the constant fear of receiving labels of "uninteresting," "unscientific," or "speculative," and
          the fear of being "left to die" on the margins of society.
        </p>

        <p>
          As I made clear at the beginning of the text, there is no ready-made answer or "10 steps to beat
          the narcissistic society," otherwise it would just be another adaptation and dilution of ideas.
        </p>

        {/* Newsletter CTA */}
        <div className="mt-12 pt-8 border-t border-border">
          <NewsletterForm variant="inline" />
        </div>
      </article>
    </div>
  );
}
