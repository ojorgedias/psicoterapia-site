import { Link } from 'wouter';
import { updatePageMeta } from '@/lib/seoMetadata';
import ServicePage, { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function EmotionalRegulation() {
  useEffect(() => {
    updatePageMeta('emotionalregulation');
  }, []);

  const relatedArticles = getRelatedArticles("article-3", 3);

  return (
    <ServicePage
      title="Psicoterapia para Regulação Emocional: Ansiedade, Exagero e Distanciamento"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Adultos", href: "/" },
        { label: "Regulação Emocional" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Agendar consulta sobre regulação emocional"
    >
      <h2>A ilusão do controle e os extremos da experiência humana</h2>
      <p>
        Na cultura contemporânea, somos frequentemente levados a acreditar que o funcionamento psicológico saudável consiste num estado de equilíbrio perpétuo, uma espécie de planície emocional onde nada nos afeta profundamente. No entanto, a realidade clínica demonstra que não existe uma fórmula única para equilibrar a racionalização e a vivência das emoções. Cada indivíduo sente, processa e funciona através de uma arquitetura psíquica absolutamente singular. O sofrimento agudo, traduzido frequentemente em picos de ansiedade ou num vazio insuportável, não surge do facto de sentirmos demasiado, mas de nos tornarmos reféns de mecanismos automáticos de defesa face àquilo que sentimos.
      </p>

      <p>
        Quando não existe uma elaboração profunda e consciente do nosso mundo interno, a mente tende a lidar com o desconforto através de estados de "quase transe", operando em dois extremos destrutivos: o exagero emocional ou o distanciamento absoluto. Identificar em qual destes polos o indivíduo procura refúgio é o primeiro passo de um trabalho clínico rigoroso. Sem esta investigação, qualquer tentativa de intervenção torna-se meramente superficial, mascarando o sintoma sem jamais tocar na estrutura que o origina.
      </p>

      <h2>O transe do exagero emocional</h2>
      <p>
        O padrão do exagero emocional ocorre quando, perante situações de stresse ou rutura, o indivíduo abandona por completo a sua capacidade de racionalização. A pessoa é tragada por um estado de transe onde passa a viver exclusivamente em função do que está a sentir no momento. A angústia, a <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link> ou a raiva tornam-se absolutas.
      </p>

      <p>
        Neste estado, o sintoma precisa de ser mantido a todo o custo, e a psique começa a fabricar novos "picos" de crise para justificar e prolongar a intensidade daquele sentimento. A pessoa que não elaborou adequadamente as suas emoções tende a amplificá-las de forma inconsciente, estendendo a duração e a violência das crises. A emoção deixa de ser uma bússola natural e passa a ser um tirano que consome toda a perceção de realidade do indivíduo, conduzindo a um esgotamento severo e à paralisação da sua vida funcional.
      </p>

      <h2>O transe do distanciamento e a repressão invisível</h2>
      <p>
        No outro extremo, encontramos o padrão do distanciamento emocional. Aqui, o indivíduo desenvolve uma capacidade quase sobrenatural de se desconectar dos seus sentimentos. Pode estar numa situação devastadora e manter uma calma artificial, uma frieza que parece admirável à primeira vista, mas que é, na verdade, uma defesa contra a vulnerabilidade.
      </p>

      <p>
        O problema é que as emoções reprimidas não desaparecem. Elas acumulam-se nas sombras do corpo e da psique, manifestando-se através de sintomas físicos, insónia, depressão silenciosa ou explosões inesperadas de raiva. A pessoa que vive no distanciamento emocional frequentemente relata uma sensação de vazio, de estar "adormecida" na própria vida, incapaz de sentir alegria genuína ou conexão profunda com outras pessoas.
      </p>

      <h2>Restaurar a bússola emocional</h2>
      <p>
        O trabalho clínico consiste em restaurar a capacidade do indivíduo de estar presente com as suas emoções sem ser consumido por elas. Não se trata de eliminar a <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link> ou a tristeza, mas de compreender a sua linguagem. Cada emoção é um mensageiro, e quando aprendemos a escutá-la, ela deixa de ser um tirano.
      </p>

      <p>
        Na terapia, desenvolvemos técnicas de regulação que permitem ao paciente navegar entre os extremos. Aprendemos a tolerar o desconforto emocional sem nos dissociarmos, e a sentir profundamente sem nos perdermos na emoção. Este é um processo lento, artesanal e profundamente transformador.
      </p>

      <h2>Transforme sua relação com as emoções</h2>
      <p>
        Se você vive oscilando entre crises emocionais intensas e um vazio paralisante, ou se sente preso num dos extremos, a psicoterapia oferece um caminho para a libertação. Realizo atendimentos psicológicos online em nível global e presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
