import { Link } from 'wouter';
import { updatePageMeta } from '@/lib/seoMetadata';
import ServicePage from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function AutonomyIdentity() {
  useEffect(() => {
    updatePageMeta('autonomyidentity');
  }, []);

  const relatedArticles = getRelatedArticles("article-8", 3);

  return (
    <ServicePage
      title="Autonomia e Identidade Inabaláveis"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Adultos", href: "/" },
        { label: "Autonomia e Identidade" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Agendar consulta sobre desenvolvimento de identidade"
    >
      <h2>O desenvolvimento da verdadeira autonomia</h2>
      <p>
        Autonomia não é simplesmente a capacidade de tomar decisões independentes. É o resultado de um processo profundo de autoconhecimento, onde você deixa de ser um reflexo das expectativas alheias e passa a ser o arquiteto genuíno da sua própria vida. Uma identidade inabalável é construída sobre o alicerce de uma bússola interna clara, onde suas escolhas emanam de valores genuinamente seus, não de imposições externas.
      </p>

      <h2>Libertar-se das <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">lealdades invisíveis</Link></h2>
      <p>
        Muitas pessoas vivem prisioneiras de lealdades invisíveis — compromissos não ditos com figuras do passado, com expectativas familiares, com identidades que lhes foram atribuídas. Essas lealdades operam nas sombras, governando comportamentos e escolhas sem que a pessoa sequer perceba. O trabalho clínico consiste em trazer essas lealdades à luz, compreender sua origem e, finalmente, renegociá-las de forma consciente.
      </p>

      <h2>A construção de uma identidade genuína</h2>
      <p>
        Quando você consegue se desembaraçar das narrativas impostas, surge a oportunidade de construir uma identidade que é verdadeiramente sua. Não é uma identidade perfeita ou sem contradições, mas uma identidade integrada, onde você consegue abraçar suas complexidades, suas sombras e suas luzes de forma madura e responsável.
      </p>

      <h2>Responsabilidade e liberdade</h2>
      <p>
        Uma das verdades mais libertadoras da psicoterapia é que a autonomia vem acompanhada de responsabilidade. Quando você deixa de culpar o mundo pelas suas circunstâncias e assume a responsabilidade pelas suas escolhas, você ganha o poder real de mudança. Essa é a maturidade que permite uma vida genuinamente autêntica.
      </p>

      <h2>Construa sua própria régua moral</h2>
      <p>
        O objetivo final desse trabalho é que você chegue à Síntese — o ponto onde você consegue forjar a sua própria régua moral, onde sua bússola interna guia com clareza as suas escolhas. Se você está pronto para esse trabalho de profunda investigação e transformação, estou aqui para acompanhá-lo nessa jornada. Realizo atendimentos psicológicos online para todo o mundo e presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
