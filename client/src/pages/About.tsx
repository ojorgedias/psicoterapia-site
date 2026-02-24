import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";

export default function About() {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />

        <article className="prose-clinical">
          {/* Hero Section with Jorge's Photo */}
          <div className="mb-12 -mx-4 md:mx-0">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/UWXOi3Z0CqaqcQpJtcE94W/sandbox/s9yO8neJBxZtpoH7kQNTzU-img-1_1771894657000_na1fn_am9yZ2UtaGVhZHNob3QtcHJvZmVzc2lvbmFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVdYT2kzWjBDcWFxY1FwSnRjRTk0Vy9zYW5kYm94L3M5eU84bmVKQnhadHBvSDdrUU5UelUtaW1nLTFfMTc3MTg5NDY1NzAwMF9uYTFmbl9hbTl5WjJVdGFHVmhaSE5vYjNRdGNISnZabVZ6YzJsdmJtRnMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VjY2ZO89GYL1uUsmQygHPeHtA94UfOpP67qqOrVLaFQ4wFjg2i4~E4awOPboTXZ8bQO-3kYcCGSNs5b9seVvrvCtLP-IDLEbmf0NH6FyOjEl~Yvu4IQk2qI0c2E0F-nvXDk~16BdXlCghKOP1uKppYa7lpOM07nNTb~5LkHomjj5C2YQcOxAylxrTkk8oQe2wyp1sXVaK-14x-jBB6X5SJgTyvo5ZKZ9DJgxOgjAGW33BTVvNrf5LORjOqhpuc3j9f0Pxcl2YCKvB8vrKqQFVkGOH6nNaE4t3W~4yfsnlNDjMYH7JkGo92MaNyXX7qUQ7ukqBXqaoRT5oOztXNVImA__"
              alt="Psicólogo Jorge Dias"
              className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg mb-6"
            />
            <h1 className="text-center mb-2">Psicólogo Jorge Dias</h1>
            <p className="text-center text-muted-foreground text-lg mb-8">
              CRP 08/31462 | Psicoterapia Clínica para Autoconhecimento Profundo
            </p>
          </div>

          <h1>Sobre a Abordagem e o Atendimento</h1>

          {/* SECTION 1: Abordagem Clínica */}
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
