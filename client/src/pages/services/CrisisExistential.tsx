import { Link } from 'wouter';
import { useEffect } from 'react';
import { updatePageMeta } from '@/lib/seoMetadata';
import ServicePage, { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function CrisisExistential() {
  useEffect(() => {
    updatePageMeta('crisisexistential');
  }, []);

  const relatedArticles = getRelatedArticles("article-1", 3);

  return (
    <ServicePage
      title="Psicoterapia Online para Crise Existencial e Falta de Propósito"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Adultos", href: "/" },
        { label: "Crise Existencial" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Quero agendar minha primeira sessão"
    >
      <h2>A sensação de estar vivendo o roteiro de outra pessoa</h2>
      <p>
        Sabe aquele sentimento persistente de vazio e a impressão de que você está apenas cumprindo tabela na própria vida? Frequentemente, a sociedade trata isso como um problema a ser silenciado ou resolvido com rapidez. Mas, na realidade clínica, a crise existencial não é uma falha no seu funcionamento. Ela é um evento estrutural vital. É o momento exato em que a fundação de vida que você construiu — ou que construíram para você — perde a sustentabilidade. Você não está quebrado; você apenas exauriu a utilidade do roteiro que lhe foi entregue.
      </p>

      <p>
        A <Link href="/crise-existencial" className="text-primary hover:underline">crise existencial</Link> frequentemente se mascara sob sintomas físicos e emocionais intensos. A tentativa de silenciar esse chamado através da distração inevitavelmente resulta em estados de exaustão ou problemas na{" "}
        <InternalLink href="/terapia/adultos/regulacao-emocional">
          regulação emocional e controle da <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link>
        </InternalLink>
        . O corpo e a mente tentam comunicar que a rota atual é insustentável. Nossa psique opera em um contínuo, e quando a mente racional insiste em ignorar as necessidades fundamentais do seu próprio ser, o sistema entra em colapso para forçar uma mudança.
      </p>

      <h2>O peso das "Réguas Prontas" e a fase da Antítese</h2>
      <p>
        Desde que nascemos, absorvemos o que chamo de "Réguas Prontas". São os valores, as expectativas de sucesso, as morais e as regras de como viver que herdamos da nossa cultura e do nosso núcleo de origem. Essa dinâmica de aceitação cega está profundamente atrelada à forma como absorvemos{" "}
        <InternalLink href="/terapia/casais/padroes-familiares">
          <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link> e <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">lealdades invisíveis</Link>
        </InternalLink>
        , aceitando as visões de mundo dos nossos pais como verdades absolutas. Em termos filosóficos, vivemos em um estado de Tese: aceitamos passivamente o mundo como ele nos foi apresentado.
      </p>

      <p>
        Porém, chega um momento na vida adulta em que essa régua externa se torna insuportável. O sucesso que prometia segurança não traz paz, ou o caminho seguro de repente parece um confinamento. Essa angústia e essa perda de sentido marcam a chegada da Antítese. A <Link href="/crise-existencial" className="text-primary hover:underline">crise existencial</Link> nada mais é do que o choque violento entre a vida que foi projetada para você e as necessidades reais da sua individualidade.
      </p>

      <p>
        Entrar nessa fase exige uma coragem intelectual imensa. Na clínica, convido o paciente a adotar conscientemente o que chamo de "<Link href="/conceitos-fundamentais" className="text-primary hover:underline">manto da ignorância</Link>". Isso significa que, para descobrir quem você realmente é, precisamos primeiro suspender temporariamente todas as certezas de quem você achava que deveria ser. É admitir o não-saber como ferramenta de exploração de si mesmo.
      </p>

      <h2>Um trabalho filosófico e artesanal</h2>
      <p>
        O papel da psicoterapia, neste cenário, passa longe de oferecer conselhos, ditar o que você deve fazer ou tentar encaixar você de volta na engrenagem social que o adoeceu. O trabalho que realizo é uma investigação filosófica e clínica singular. O objetivo não é anestesiar a angústia com otimismo vazio, mas suportá-la o suficiente para investigarmos o que ela está tentando destruir e o que ela quer construir no lugar.
      </p>

      <p>
        Neste espaço, desmontamos as narrativas impostas com um questionamento radical e meticuloso das regras que governam suas escolhas. É um processo lento e cuidadoso de escavação, onde cada paciente precisa descobrir a anatomia da própria insatisfação e assumir a responsabilidade pela própria trajetória.
      </p>

      <h2>O processo de forjar a própria régua moral (A Síntese)</h2>
      <p>
        O destino desse trabalho clínico é chegarmos à Síntese. É o momento de libertação onde você deixa de ser um mero repetidor das expectativas alheias e assume o peso — e a liberdade — de forjar a sua própria régua moral. É olhar para tudo o que te ensinaram, descartar o que é peso morto e construir um sistema de valores genuinamente seu.
      </p>

      <p>
        Neste ponto, o indivíduo atinge uma maturidade onde não precisa mais terceirizar suas decisões para a sociedade. Esse é o pilar fundamental para o{" "}
        <InternalLink href="/terapia/adultos/autonomia-identidade">
          desenvolvimento de uma autonomia e identidade inabaláveis
        </InternalLink>
        , onde a sua bússola interna passa a guiar as suas escolhas.
      </p>

      <p>
        Se você se sente perdido, sem propósito ou no meio de uma transição dolorosa, saiba que essa travessia não precisa ser feita às cegas. Ofereço atendimento psicológico online para adultos em todo o mundo, além de sessões presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
