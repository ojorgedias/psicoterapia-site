import Layout from "@/components/Layout";
import { useEffect } from 'react';
import { updatePageMeta } from '@/lib/seoMetadata';
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";

export default function HowItWorks() {
  useEffect(() => {
    updatePageMeta('howitworks');
  }, []);

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Como Funciona" }]} />

        <article className="prose-clinical">
          <h1>Como Funciona o Atendimento</h1>

          <h2>Primeira Consulta</h2>
          <p>
            A primeira sessão é uma conversa aberta onde você compartilha o que o trouxe até aqui. Não há julgamentos, apenas escuta qualificada. Neste encontro, compreendo sua história, seus desafios e seus objetivos com a terapia.
          </p>

          <h2>Processo Terapêutico</h2>
          <p>
            O trabalho clínico é progressivo. Começamos com uma investigação rigorosa da sua história pessoal, padrões comportamentais e pressupostos inconscientes. Cada sessão constrói sobre a anterior, aprofundando a compreensão e facilitando mudanças genuínas.
          </p>

          <h2>Duração e Frequência</h2>
          <p>
            Sessões individuais têm 50 minutos. A frequência recomendada é semanal, mas isso pode ser ajustado conforme suas necessidades. O processo terapêutico é contínuo e não tem prazo definido — depende do seu ritmo e dos objetivos que você estabelece.
          </p>

          <h2>Modalidades de Atendimento</h2>
          <div className="bg-secondary rounded-lg p-6 my-6 border border-border">
            <h3 className="font-display text-lg font-semibold mb-4">Online</h3>
            <p className="mb-4">
              Atendimento via videochamada para qualquer lugar do Brasil e do exterior. Você escolhe um ambiente confortável e seguro em sua casa.
            </p>

            <h3 className="font-display text-lg font-semibold mb-4">Presencial</h3>
            <p>
              Sessões presenciais no consultório em Presidente Epitácio - SP. Oferece uma experiência mais imersiva e presencial.
            </p>
          </div>

          <h2>Confidencialidade e Ética</h2>
          <p>
            Toda comunicação é confidencial e protegida pelo sigilo profissional. Você pode compartilhar tudo sem medo de julgamentos ou exposição. O espaço terapêutico é sagrado e seguro.
          </p>

          <h2>Investimento</h2>
          <p>
            O investimento em sua saúde mental é um investimento em sua vida. Os valores das sessões variam conforme a modalidade e sua situação financeira. Oferço flexibilidade para que o atendimento seja acessível.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-6">
              Pronto para começar?
            </p>
            <div className="flex justify-center">
              <CTAButton href="/contato">Agendar Primeira Sessão</CTAButton>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
