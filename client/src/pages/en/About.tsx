import { useEffect } from 'react';
import { Link } from "wouter";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import { updatePageMeta } from "@/lib/seoMetadata";
import { useEEATSchema } from "@/components/EEATSchema";

export default function AboutEn() {
  useEEATSchema({
    pageType: 'about',
    title: 'About Me: Jorge Dias | Clinical Psychotherapist',
    description: 'Clinical psychotherapist and researcher in Brazil, focused on psychoanalysis, critical theory, and indigenous perspectives.',
    url: 'https://psicoterapeutajorgedias.online/en/about'
  });
  
  useEffect(() => {
    document.title = 'About Me: Jorge Dias | Clinical Psychotherapist';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Clinical psychotherapist and researcher in Brazil, focused on psychoanalysis, critical theory, and indigenous perspectives.');
    }
  }, []);
  
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "About Me" }]} />

        <article className="prose-clinical">
          <div className="mb-12 -mx-4 md:mx-0">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
              alt="Jorge Dias | Clinical Psychotherapist"
              className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg mb-6"
            />
          </div>

          <h1>About Me: Jorge Dias | Clinical Psychotherapist</h1>
          <p>
            Hello, I'm Jorge Dias, a clinical psychotherapist and researcher based in Brazil. My practice is deeply rooted in an integrative approach, exploring the rich intersections between <strong>psychoanalysis</strong>, <strong>critical theory</strong>, and <strong>indigenous perspectives</strong>.
          </p>

          <h2>My Approach: Beyond the Surface</h2>
          <p>
            I believe that psychotherapy is not merely about finding quick fixes or generic advice. Instead, it's a rigorous laboratory for self-investigation, a space where we can deconstruct self-sabotaging patterns and reclaim authorship over our own narratives. My clinical work is informed by:
          </p>
          <ul>
            <li><strong>Analytical Psychology (Jungian)</strong>: Delving into the depths of the psyche, exploring concepts like the Shadow and the unconscious to understand the hidden dynamics that shape our lives.</li>
            <li><strong>Critical Theory (Foucaultian)</strong>: Examining the power structures and societal norms that influence our relationships and sense of self, helping to uncover the subtle ways society can shape our inner world.</li>
            <li><strong>Indigenous Perspectives</strong>: Integrating cosmologies and ways of knowing from indigenous thinkers, broadening our understanding of what it means to be in balance with ourselves and the world.</li>
          </ul>

          <h2>Who I Work With</h2>
          <p>
            My practice is a space for those who are tired of living defensively. We work together to expose "invisible family loyalties," break free from the unhealthy need for external approval, and develop unshakeable autonomy. The goal is for you to embrace the discomfort of truly being yourself, without needing to apologize for your existence.
          </p>
          <div className="bg-secondary rounded-lg p-6 my-6 border border-border">
            <h3 className="font-display text-lg font-semibold mb-4">Exclusively Online Sessions</h3>
            <p className="mb-0">
              I offer exclusively online psychotherapy sessions for individuals worldwide. This format ensures you have access to a deeply insightful therapeutic space, from the comfort and security of your own environment.
            </p>
          </div>

          <h2>My Background</h2>
          <p>
            I am a psychotherapist trained at the State University of Londrina (UEL), Brazil. With over five years of clinical practice, I have conducted more than 1000 sessions, helping individuals navigate existential crises, overcome self-sabotage, and foster healthier relationships. My experience includes psychological assessment, humanized healthcare, and couples therapy. I currently support Brazilians living abroad, including clients in Australia, Lisbon, and Porto.
          </p>

          <h2>Ethics and Confidentiality</h2>
          <p>
            All communication is confidential and protected by strict professional secrecy. You can share everything without fear of judgment. The therapeutic space is sacred, safe, and entirely yours.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-6">
              Ready to begin your self-investigation?
            </p>
            <div className="flex justify-center">
              <CTAButton href="https://your-substack-link.com" external={true}>Explore My Substack</CTAButton>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
