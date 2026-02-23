import ServicePage, { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function CoupleConflicts() {
  const relatedArticles = getRelatedArticles("article-6", 3);

  return (
    <ServicePage
      title="Resolução de Conflitos de Casal e Choque de Valores"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Casais", href: "/" },
        { label: "Conflitos de Casal" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Informações sobre agendamento de sessões de casal"
    >
      <h2>Quando o diálogo morre</h2>
      <p>
        Muitos casais chegam à terapia num estado de polarização extrema. Um parceiro se tornou excessivamente frio e racional, enquanto o outro se tornou cada vez mais caótico e emocional. Eles não conseguem mais conversar sem entrar em modo de defesa. Cada um joga a sua própria Sombra para cima do parceiro, criando um tribunal de acusações onde ninguém consegue ser ouvido.
      </p>

      <h2>A projeção da Sombra nos relacionamentos</h2>
      <p>
        Nos relacionamentos íntimos, a projeção psicológica atinge o seu nível máximo. Tudo o que você reprimiu em si mesmo, você passa a enxergar (e a atacar) no outro. Se você é uma pessoa que se obriga a ser sempre produtiva e se proíbe de descansar, provavelmente sentirá uma irritação desproporcional ao conviver com alguém que é descontraído e lento. Você não odeia o atraso do outro; você odeia a liberdade que o outro tem de não ser perfeito, algo que você não se permite ser.
      </p>

      <h2>O trabalho de integração</h2>
      <p>
        Na psicoterapia de casal, o trabalho consiste exatamente em parar esse tribunal de acusações. O objetivo não é fazer um parceiro "vencer" o outro, mas fazer com que cada um recolha as suas próprias projeções e admita que o "defeito" do outro é, na verdade, uma parte de si mesmo que precisa ser integrada.
      </p>

      <p>
        Quando ambos conseguem fazer esse trabalho, algo mágico acontece. O parceiro deixa de ser um inimigo a ser vencido e passa a ser um espelho para o autoconhecimento. A relação se transforma de um campo de batalha para um espaço de crescimento mútuo.
      </p>

      <h2>Restabelecer a comunicação</h2>
      <p>
        A comunicação genuína só é possível quando ambos conseguem sair do modo defensivo. Na terapia, criamos um espaço neutro e seguro onde cada um pode ser ouvido sem julgamentos. Ensinamos técnicas de comunicação não-violenta, onde cada parceiro consegue expressar suas necessidades sem atacar o outro.
      </p>

      <h2>Transforme seu relacionamento</h2>
      <p>
        Se o seu relacionamento foi contaminado por essa polarização e vocês não conseguem mais conversar sem entrar em modo de defesa, a psicoterapia oferece uma zona neutra e ética para restabelecer a comunicação. Não procuramos culpados, procuramos a integração. Ofereço psicoterapia online para adultos e casais em todo o mundo, além de sessões presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
