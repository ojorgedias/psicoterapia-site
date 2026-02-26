import { useEffect } from 'react';
import { Link } from "wouter";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import { updatePageMeta } from "@/lib/seoMetadata";
import { useEEATSchema } from "@/components/EEATSchema";

export default function About() {
  useEEATSchema({
    pageType: 'about',
    title: 'Minha Abordagem Clínica - Psicólogo Jorge Dias',
    description: 'Investigação filosófica e clínica rigorosa. Abordagem integrativa que combina psicanálise, filosofia existencial e compreensão neurofisiológica.',
    keywords: 'sobre psicólogo, abordagem terapêutica, psicologia integrativa, investigação profunda, Jorge Dias',
    url: 'https://psicoterapia-site.com/sobre'
  });
  
  useEffect(() => {
    updatePageMeta('about');
  }, []);
  
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Minha Abordagem" }]} />

        <article className="prose-clinical">
          {/* Hero Section with Jorge's Photo */}
          <div className="mb-12 -mx-4 md:mx-0">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
              alt="Psicólogo Jorge Dias"
              className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg mb-6"
            />
            <h1 className="text-center mb-2">Psicólogo Jorge Dias</h1>
            <p className="text-center text-muted-foreground text-lg mb-8">
              CRP 08/31462 | Psicoterapia Clínica para Autoconhecimento Profundo
            </p>
          </div>

          <h1>Minha Abordagem Clínica</h1>

          <p className="text-lg leading-relaxed mb-6 italic text-slate-700">
            "Eu não trabalho para devolver você à engrenagem que o adoeceu. Trabalho para você compreender a lógica interna do seu sofrimento."
          </p>

          {/* SECTION 1: Abordagem Clínica */}
          <h2>Investigação Filosófica e Clínica Rigorosa</h2>
          <p>
            Quando alguém chega ao meu consultório, geralmente já tentou de tudo. Leu livros de autoajuda, foi a outros terapeutas, talvez tenha tomado medicação. Mas ainda se sente preso. E isso é porque a maioria das abordagens trata o sintoma, não a raiz.
          </p>
          <p>
            Meu trabalho é diferente. Não é rápido, não é fácil, mas é genuinamente transformador. Criamos um espaço onde você pode desmontar as narrativas impostas — aquelas que você herdou da família, da cultura, da sociedade — e descobrir quem você realmente é por baixo de tudo isso.
          </p>

          <h2>Fundamentos da Prática</h2>
          <p>
            Minha forma de trabalhar integra várias perspectivas, mas sempre com rigor e sem dogmatismo:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Psicanálise e Psicologia Profunda:</strong> Entender o inconsciente, as defesas, a <Link href="/blog/sombra-relacionamentos"><a className="text-primary hover:underline">sombra</a></Link> que você não quer ver</li>
            <li><strong>Filosofia Existencial:</strong> Questionar pressupostos, reconhecer sua liberdade e responsabilidade genuína</li>
            <li><strong>Compreensão Neurofisiológica:</strong> Saber como o corpo e o sistema nervoso reagem ao estresse e ao trauma</li>
            <li><strong>Investigação de Padrões:</strong> Desvendar as <Link href="/conceitos-fundamentais"><a className="text-primary hover:underline">regras invisíveis</a></Link> que governam seu comportamento</li>
          </ul>

          <h2>O Trabalho Clínico</h2>
          <p>
            Você já parou para pensar que a maioria das pessoas vive segundo "regras" que nunca escolheu? Regras sobre como deve ser feliz, o que deve valorizar, qual carreira deve seguir. Essas regras vêm da família, da cultura, do que "se espera de você". E quando você tenta viver diferente, sente culpa, <Link href="/ansiedade"><a className="text-primary hover:underline">ansiedade</a></Link>, medo.
          </p>
          <p>
            Meu trabalho é ajudar você a ver essas <Link href="/conceitos-fundamentais"><a className="text-primary hover:underline">regras invisíveis</a></Link>. Quando você consegue enxergá-las, elas perdem o poder. Você recupera a capacidade de escolher genuinamente.
          </p>

          {/* SECTION 2: Como Funciona */}
          <h2>Como Funciona o Atendimento</h2>

          <h3>Primeira Sessão</h3>
          <p>
            A primeira sessão é uma conversa aberta onde você compartilha o que o trouxe até aqui. Não há julgamentos, apenas escuta qualificada. Neste encontro, compreendo sua história, seus desafios e seus objetivos com a terapia.
          </p>

          <h3>Processo Terapêutico</h3>
          <p>
            O trabalho clínico é progressivo. Começamos com uma investigação rigorosa da sua história pessoal, padrões comportamentais e pressupostos inconscientes. Cada sessão constrói sobre a anterior, aprofundando a compreensão e facilitando mudanças genuínas.
          </p>

          <h3>Duração e Frequência</h3>
          <p>
            Sessões individuais têm 50 minutos. A frequência recomendada é semanal, mas isso pode ser ajustado conforme suas necessidades. O processo terapêutico é contínuo e não tem prazo definido — depende do seu ritmo e dos objetivos que você estabelece.
          </p>

          {/* SECTION 3: Modalidades */}
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

          {/* SECTION 4: Confidencialidade e Investimento */}
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
              Pronto para iniciar sua investigação?
            </p>
            <div className="flex justify-center">
              <CTAButton href="/contato">Agendar Sessão</CTAButton>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
