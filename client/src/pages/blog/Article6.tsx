import { Link } from 'wouter';
import ArticlePage from "@/components/ArticlePage";
import { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function Article6() {
  const relatedArticles = getRelatedArticles("article-6", 3);

  return (
    <ArticlePage
      title="Guerra dos Sexos e Polarização: A morte do diálogo nos relacionamentos"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Guerra dos Sexos" },
      ]}
      readingTime={9}
      relatedArticles={relatedArticles}
    >
      <h2>Por que se relacionar parece um campo de batalha?</h2>
      <p>
        Nos últimos anos, a internet foi tomada por debates inflamados sobre "masculinidade tóxica", "redpill", feminismo radical e regras estritas sobre o que homens e mulheres devem ou não fazer. Milhões de pessoas consomem esse conteúdo buscando entender por que os relacionamentos modernos estão tão difíceis. O problema é que esses movimentos de internet transformaram a vida amorosa em um tribunal, onde um gênero é sempre o vilão e o outro é sempre a vítima. Na psicologia clínica, vemos diariamente o estrago que essa polarização extrema causa na saúde mental e na intimidade real dos casais.
      </p>

      <h2>A armadilha do pensamento binário</h2>
      <p>
        A mente humana sob estresse adora respostas simples. É muito mais fácil acreditar que "todos os homens são narcisistas" ou que "todas as mulheres são interesseiras" do que assumir a complexidade de um relacionamento real. A filosofia explica isso através do conceito de Tese e Antítese: a sociedade cria uma regra extrema (a Tese) e, como reação, surge um movimento igualmente extremo e oposto (a Antítese).
      </p>

      <p>
        Quando as pessoas levam esses discursos de internet para dentro de casa, o diálogo morre. O parceiro deixa de ser visto como um ser humano cheio de falhas e passa a ser tratado como um inimigo a ser vencido ou corrigido. Essa visão em "preto e branco" é a receita para o ressentimento crônico. Na <InternalLink href="/terapia/casais/conflitos-casal">resolução de conflitos de casal e choque de valores</InternalLink>, o primeiro passo é desarmar esse tribunal para que as pessoas voltem a se olhar sem as lentes da internet.
      </p>

      <h2>O espelho das próprias feridas</h2>
      <p>
        O que esses movimentos radicais frequentemente escondem é a projeção da <Link href="/blog/sombra-relacionamentos" className="text-primary hover:underline">Sombra</Link>. É muito mais fácil aderir a um discurso que culpa o outro gênero por todos os problemas do que olhar para a própria <InternalLink href="/terapia/adultos/autossabotagem">autossabotagem e padrões de repetição</InternalLink>. Aquele que ataca ferozmente o outro na internet, muitas vezes, está apenas espelhando uma dor infantil não curada e o medo profundo de ser rejeitado ou abandonado.
      </p>

      <h2>A Síntese e o encontro real</h2>
      <p>
        Para que um relacionamento sobreviva no mundo de hoje, o casal precisa atingir o que chamamos de Síntese. A Síntese não é o silenciamento das diferenças, mas a capacidade madura de integrar polaridades. É entender que homens e mulheres não estão em uma guerra de poder, mas são arquiteturas psíquicas que precisam colaborar para existir.
      </p>

      <p>
        Se o seu relacionamento foi contaminado por essa polarização e vocês não conseguem mais conversar sem entrar em modo de defesa, a psicoterapia oferece uma zona neutra e ética para restabelecer a comunicação. Não procuramos culpados, procuramos a integração. Ofereço psicoterapia online para adultos e casais em todo o mundo, .
      </p>
    </ArticlePage>
  );
}
