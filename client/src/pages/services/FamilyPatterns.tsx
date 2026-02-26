import ServicePage, { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function FamilyPatterns() {
  const relatedArticles = getRelatedArticles("article-2", 3);

  return (
    <ServicePage
      title="Padrões Familiares e Lealdades Invisíveis"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Casais", href: "/" },
        { label: "Padrões Familiares" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Agendar consulta sobre padrões familiares"
    >
      <h2>Como a história familiar molda os relacionamentos atuais</h2>
      <p>
        Os padrões que observamos em nossos pais, avós e ancestrais não desaparecem simplesmente porque crescemos e nos tornamos adultos. Eles se infiltram nas nossas escolhas, nas nossas reações, nos nossos relacionamentos. Frequentemente, repetimos dinâmicas que jurávamos nunca repetir, atraindo parceiros que replicam papéis familiares antigos, ou assumindo posições que espelhavam as de nossos pais.
      </p>

      <h2>As <Link href="/terapia/casais/padroes-familiares"><a className="text-primary hover:underline">lealdades invisíveis</a></Link></h2>
      <p>
        Existem compromissos não ditos que carregamos — lealdades a figuras do passado, a papéis que nos foram atribuídos, a expectativas que internalizamos sem questionar. Uma filha pode se sacrificar por um pai ausente, repetindo esse padrão em todos os seus relacionamentos. Um filho pode se tornar o "salvador" da família, carregando o peso de manter todos unidos. Essas lealdades operam nas sombras, governando comportamentos que parecem inexplicáveis à primeira vista.
      </p>

      <h2>O trabalho de investigação</h2>
      <p>
        Na psicoterapia, fazemos uma escavação rigorosa da sua história familiar. Não para culpar os pais, mas para compreender as dinâmicas que moldaram você. Investigamos as mensagens que você recebeu, explícitas e implícitas, sobre relacionamentos, sobre o que significa ser homem ou mulher, sobre o que é aceitável sentir e expressar.
      </p>

      <h2>Renegociar as lealdades</h2>
      <p>
        Uma vez que você compreende essas lealdades, você ganha a oportunidade de renegociá-las de forma consciente. Não se trata de rejeitar sua família ou sua história, mas de integrar essas experiências de forma madura. Você pode honrar a história sem ser prisioneiro dela.
      </p>

      <h2>Transforme seus relacionamentos</h2>
      <p>
        Quando você consegue se desembaraçar dos <Link href="/padroes-familiares"><a className="text-primary hover:underline">padrões familiares</a></Link> não resolvidos, seus relacionamentos amorosos se transformam radicalmente. Você deixa de atrair pessoas que replicam dinâmicas antigas e passa a fazer escolhas genuinamente suas. Se você sente que está repetindo ciclos familiares nos seus relacionamentos, a psicoterapia de casal oferece um espaço seguro para essa investigação. Realizo atendimentos psicológicos online em nível global e presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
