import ServicePage from "@/components/ServicePage";
import { updatePageMeta } from '@/lib/seoMetadata';

export default function IntegrativePhilosophy() {
  useEffect(() => {
    updatePageMeta('integrativephilosophy');
  }, []);

  return (
    <ServicePage
      title="Filosofia e Pensamento Integrativo"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Autoridade", href: "/" },
        { label: "Filosofia Integrativa" },
      ]}
      ctaText="Agendar consulta sobre filosofia e pensamento"
    >
      <h2>Além da fragmentação moderna</h2>
      <p>
        A modernidade nos treinou a fragmentar a realidade em categorias isoladas: mente vs. corpo, razão vs. emoção, espírito vs. matéria, trabalho vs. vida pessoal. Essa fragmentação é a raiz de muito sofrimento contemporâneo. O pensamento integrativo propõe uma visão onde tudo está interconectado, onde a psicologia não é separada da filosofia, onde a vida não é dividida em compartimentos estanques.
      </p>

      <h2>A dialética: Tese, Antítese e Síntese</h2>
      <p>
        Um dos pilares do pensamento integrativo é a compreensão da dialética hegeliana: Tese, Antítese e Síntese. Começamos com uma verdade estabelecida (Tese), que eventualmente entra em conflito com sua negação (Antítese), e desse conflito emerge uma nova compreensão que integra ambas (Síntese). Essa dinâmica não é apenas um conceito abstrato; ela descreve o processo real de transformação psicológica e espiritual.
      </p>

      <h2>Integração de polaridades</h2>
      <p>
        Muitos conflitos pessoais e relacionais surgem da incapacidade de integrar polaridades. Queremos ser fortes, mas também vulneráveis. Queremos ser independentes, mas também conectados. Queremos ser racionais, mas também emocionais. O pensamento integrativo nos ensina que não precisamos escolher um lado; podemos integrar ambos de forma madura.
      </p>

      <h2>O caminho do meio</h2>
      <p>
        Não se trata de um compromisso medíocre onde você fica preso no meio termo. É uma integração genuína onde você consegue acessar diferentes aspectos de si mesmo conforme a situação exige. É a sabedoria de saber quando ser firme e quando ser flexível, quando agir e quando recuar, quando falar e quando escutar.
      </p>

      <h2>Aplicação prática na vida</h2>
      <p>
        O pensamento integrativo não é apenas teoria. É um guia prático para viver com maior autenticidade, coerência e paz. Quando você consegue integrar os diferentes aspectos de si mesmo e compreender a interconexão de tudo, a vida deixa de ser um conflito constante e passa a ser uma dança harmoniosa entre forças complementares.
      </p>

      <h2>Explore o pensamento integrativo</h2>
      <p>
        Se você está interessado em explorar essas questões filosóficas de forma prática e aplicada à sua vida, a psicoterapia oferece um espaço para essa investigação. Realizo atendimentos psicológicos online para o Brasil e exterior, além de sessões presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
