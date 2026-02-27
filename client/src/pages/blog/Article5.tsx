import ArticlePage from "@/components/ArticlePage";
import { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function Article5() {
  const relatedArticles = getRelatedArticles("article-5", 3);

  return (
    <ArticlePage
      title="Burnout Digital e Vício em Celular: Como os algoritmos estão moldando os seus valores"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Burnout Digital" },
      ]}
      readingTime={8}
      relatedArticles={relatedArticles}
    >
      <h2>Muito além do "detox de dopamina"</h2>
      <p>
        As buscas por "como curar o vício em celular" ou "detox de dopamina" explodiram nos últimos anos. As pessoas sentem-se esgotadas, com a atenção fragmentada e incapazes de passar dez minutos em silêncio sem olhar para uma tela. O senso comum costuma tratar esse problema apenas como uma falha química do cérebro, recomendando que você simplesmente desligue o aparelho. No entanto, na psicologia profunda, observamos que o buraco é mais embaixo. O consumo compulsivo de redes sociais não está apenas sugando o seu tempo; ele está causando o que chamo de terceirização do pensamento.
      </p>

      <h2>Gurus de internet e o pensamento pré-fabricado</h2>
      <p>
        Quando você consome vídeos curtos por horas a fio, o seu cérebro entra em um estado de passividade absoluta. Em vez de passar pelo trabalho árduo de ler, refletir, ter dúvidas e forjar a sua própria opinião, você recebe ideias mastigadas. A internet está cheia de "gurus" que oferecem respostas prontas e simplistas para dores complexas.
      </p>

      <p>
        O perigo desse consumo passivo é que você começa a vestir essas ideologias pré-fabricadas como se fossem a sua própria personalidade. Você terceiriza a sua capacidade de pensar. E quando a responsabilidade pelo pensamento crítico é transferida para o algoritmo ou para o influenciador, o indivíduo perde a sua bússola moral. Esse é um atalho perigoso que frequentemente desagua em uma profunda <InternalLink href="/terapia/adultos/crise-existencial"><Link href="/crise-existencial" className="text-primary hover:underline">crise existencial</Link> e falta de propósito</InternalLink>, pois as respostas do "guru" inevitavelmente falharão em resolver a sua vida real.
      </p>

      <h2>Bolhas intelectuais e a atrofia da mente</h2>
      <p>
        Os algoritmos são programados para um único objetivo: prender a sua atenção. Para isso, eles colocam você dentro de uma "bolha intelectual", mostrando apenas informações que confirmam as crenças que você já tem. Se você está triste ou irritado, o algoritmo entregará horas de conteúdo que validam a sua tristeza ou alimentam a sua raiva.
      </p>

      <p>
        O resultado disso é a atrofia da mente. Ao nunca ser confrontado com o diferente, o indivíduo perde a capacidade de lidar com a frustração. Quando ele precisa desligar a tela e lidar com um colega de trabalho ou um parceiro amoroso que pensa diferente, o sistema psíquico entra em curto-circuito, gerando graves problemas na <InternalLink href="/terapia/adultos/regulacao-emocional">regulação emocional e controle da <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link></InternalLink>.
      </p>

      <h2>Recuperando a sua autonomia</h2>
      <p>
        O antídoto para o burnout digital não é jogar o celular no lixo, mas recuperar a agência sobre a própria mente. Na psicoterapia, nós trabalhamos para que você recupere a coragem de pensar por si mesmo, de tolerar a incerteza e de desenvolver um discernimento que não dependa de curtidas.
      </p>

      <p>
        Esse é o verdadeiro <InternalLink href="/terapia/adultos/autonomia-identidade">desenvolvimento de uma autonomia e identidade inabaláveis</InternalLink>. Se você está cansado de viver no piloto automático digital e deseja construir uma mente forte e independente, a terapia é o espaço para essa investigação. Realizo atendimentos psicológicos online em nível global e presenciais em Presidente Epitácio - SP.
      </p>
    </ArticlePage>
  );
}
