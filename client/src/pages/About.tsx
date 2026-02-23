import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";

export default function About() {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />

        <article className="prose-clinical">
          <h1>Sobre a Abordagem Clínica</h1>

          <h2>Investigação Filosófica e Clínica Rigorosa</h2>
          <p>
            A psicoterapia que realizo não segue protocolos genéricos ou manuais de autoajuda. É uma investigação singular, artesanal e profundamente filosófica. O objetivo não é oferecer respostas rápidas, mas criar um espaço seguro onde você possa desmontar as narrativas impostas e descobrir quem você realmente é.
          </p>

          <h2>Fundamentos da Prática</h2>
          <p>
            Trabalho com uma abordagem integrativa que combina:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Psicanálise e Psicologia Profunda</li>
            <li>Filosofia Existencial e Pensamento Integrativo</li>
            <li>Compreensão Neurofisiológica dos Processos Emocionais</li>
            <li>Investigação Rigorosa de Padrões Comportamentais</li>
          </ul>

          <h2>O Trabalho Clínico</h2>
          <p>
            Não procuro "consertar" você ou encaixá-lo de volta na engrenagem social que o adoeceu. Procuro compreender a lógica interna do seu sofrimento. Quando você entende por que faz o que faz, quando consegue ver a anatomia da sua própria insatisfação, o automatismo perde o poder de coerção.
          </p>

          <h2>Modalidades de Atendimento</h2>
          <p>
            Ofereço atendimento psicológico online para todo o Brasil e exterior, além de sessões presenciais em Presidente Epitácio - SP. A escolha da modalidade depende de suas necessidades e preferências.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-6">
              Pronto para iniciar sua investigação?
            </p>
            <div className="flex justify-center">
              <CTAButton href="/contato">Agendar Consulta</CTAButton>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
