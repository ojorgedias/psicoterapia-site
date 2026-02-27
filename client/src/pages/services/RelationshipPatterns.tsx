import ServicePage from "@/components/ServicePage";
import { updatePageMeta } from '@/lib/seoMetadata';
import { useEffect } from 'react';
import { getRelatedArticles } from "@/lib/content";

export default function RelationshipPatterns() {
  useEffect(() => {
    updatePageMeta('relationshippatterns');
  }, []);

  const relatedArticles = getRelatedArticles("article-2", 3);

  return (
    <ServicePage
      title="Transforme o Seu Padrão de Relacionamento"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Casais", href: "/" },
        { label: "Padrões de Relacionamento" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Informações sobre agendamento de sessões"
    >
      <h2>Superar o rompimento e evitar ciclos destrutivos</h2>
      <p>
        Um rompimento amoroso doloroso não é apenas o fim de um relacionamento. É frequentemente o ponto onde você percebe que está preso num ciclo. Você atrai o mesmo tipo de pessoa, vivencia os mesmos conflitos, termina da mesma forma. O padrão se repete porque as raízes não foram tratadas.
      </p>

      <h2>A investigação do padrão</h2>
      <p>
        Quando você consegue olhar para trás e ver a anatomia dos seus relacionamentos anteriores, você ganha a oportunidade de fazer escolhas diferentes. Não se trata de culpar os parceiros anteriores, mas de compreender qual era a sua contribuição para o padrão. Que tipo de pessoa você atrai? Qual é o seu papel no conflito? Que necessidades não resolvidas você está tentando preencher através do outro?
      </p>

      <h2>Restaurar a confiança em si mesmo</h2>
      <p>
        Após um rompimento traumático, muitas pessoas perdem a confiança em sua capacidade de escolher bem. A dúvida se infiltra: "Será que consigo reconhecer uma pessoa saudável? Será que meu julgamento é confiável?" O trabalho clínico consiste em restaurar essa confiança, não através de falsas garantias, mas através da compreensão genuína de quem você é e do que você realmente precisa num relacionamento.
      </p>

      <h2>Construir relacionamentos saudáveis</h2>
      <p>
        Um relacionamento saudável não é aquele sem conflitos. É aquele onde ambos conseguem se comunicar, onde há espaço para vulnerabilidade, onde cada um respeita a autonomia do outro. Quando você consegue se libertar dos padrões antigos, você fica disponível para esse tipo de relacionamento genuíno.
      </p>

      <h2>Transforme sua vida amorosa</h2>
      <p>
        Superar um rompimento doloroso e evitar a repetição de ciclos destrutivos exige um ambiente de escuta qualificada, livre de clichês e julgamentos morais. Se percebe que está preso nestes padrões, a intervenção profissional pode ajudá-lo a reescrever o seu roteiro afetivo. Ofereço atendimento psicológico online em nível global e presencial em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
