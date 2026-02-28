import ServicePage, { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function PsychologySpirituality() {
  const relatedArticles = getRelatedArticles("article-7", 3);

  return (
    <ServicePage
      title="Psicologia e Espiritualidade de Forma Integrativa"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Autoridade", href: "/" },
        { label: "Psicologia e Espiritualidade" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Agendar consulta sobre desenvolvimento integral"
    >
      <h2>Integrando psicologia e espiritualidade</h2>
      <p>
        A busca por sentido e transcendência é profundamente humana. No entanto, muitas pessoas caem na armadilha do "bypassing espiritual" — usar ideias e práticas espirituais para evitar o confronto com feridas emocionais, traumas de infância ou responsabilidades da vida adulta. A espiritualidade não deve ser uma anestesia, mas um caminho de integração.
      </p>

      <h2>O perigo do desvio espiritual</h2>
      <p>
        Uma pessoa pode estar num retiro espiritual, meditando profundamente, e ainda assim estar completamente desconectada das suas emoções reais. Pode responder a um conflito grave de relacionamento dizendo que "tudo é energia e precisamos apenas emanar luz", quando na verdade não desenvolveu as ferramentas mínimas para lidar com a regulação emocional. A espiritualidade genuína não transcende a psicologia; ela a integra.
      </p>

      <h2>A metáfora do jardim interior</h2>
      <p>
        Gosto de usar a metáfora do Jardim Interior para explicar essa integração. Imagine a sua mente como um vasto jardim vertical. Nas raízes profundas, na terra escura, estão os seus instintos mais primitivos, os seus medos, a sua sobrevivência e os traumas do seu passado. No meio, estão as folhas e os galhos, que representam as suas emoções. E lá no topo, as copas das árvores, que alcançam o céu, representam a sua consciência superior e a sua espiritualidade.
      </p>

      <p>
        O grande erro da busca espiritual moderna é querer viver apenas na copa da árvore, olhando para a luz, enquanto as raízes apodrecem. Uma copa frondosa é completamente dependente de raízes saudáveis. Você não pode voar alto no espírito se a sua estrutura psicológica não tem estabilidade para sustentar esse voo.
      </p>

      <h2>O caminho integrado</h2>
      <p>
        O verdadeiro despertar exige que você desça até a terra, limpe as suas raízes e organize a sua base emocional. Isso significa olhar para as suas sombras, resolver conflitos familiares e assumir a responsabilidade pela própria vida. Somente com essa base sólida é que a espiritualidade pode florescer de forma genuína e transformadora.
      </p>

      <h2>Desenvolva-se com os pés no chão</h2>
      <p>
        Se você leva o seu desenvolvimento interior a sério e deseja integrar a mente e o espírito de forma pragmática, sem cair em ilusões ou sectarismos, a abordagem integrativa oferece um caminho seguro. Realizo atendimentos psicológicos online para Brasil e exterior.
      </p>
    </ServicePage>
  );
}
