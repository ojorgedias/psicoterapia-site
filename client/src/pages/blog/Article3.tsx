import { Link } from 'wouter';
import { useEffect } from 'react';
import { updatePageMeta } from '@/lib/seoMetadata';
import ArticlePage from "@/components/ArticlePage";
import { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function Article3() {
  useEffect(() => {
    updatePageMeta('article3');
  }, []);

  const relatedArticles = getRelatedArticles("article-3", 3);

  return (
    <ArticlePage
      title="Fobia Social e a Necessidade de Aprovação: A biologia do medo da rejeição"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Fobia Social" },
      ]}
      readingTime={8}
      relatedArticles={relatedArticles}
    >
      <h2>Por que a opinião alheia dói tanto?</h2>
      <p>
        Seja no ambiente de trabalho, em uma roda de amigos ou ao pensar em publicar algo na internet, o medo do julgamento costuma paralisar pessoas brilhantes. Quando a fobia social ataca, é comum que o indivíduo se culpe, acreditando que é fraco ou inseguro demais. No entanto, a psicologia profunda nos mostra que o medo da rejeição não é uma falha de caráter. Na verdade, ele é um dos mecanismos de sobrevivência mais antigos e poderosos que o nosso cérebro possui. Entender a biologia por trás dessa necessidade de aprovação é o primeiro passo para deixar de ser refém dela.
      </p>

      <h2>O "<Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link>" e a nossa herança evolutiva</h2>
      <p>
        Para compreender a fobia social, precisamos olhar para os nossos ancestrais. O cérebro humano foi forjado em um contexto tribal, onde pertencer ao grupo era a única garantia de sobrevivência. Se você fosse rejeitado ou expulso da sua tribo, as suas chances de sobreviver sozinho ao inverno ou a um predador eram nulas. A rejeição social significava, literalmente, a morte.
      </p>

      <p>
        Esse mecanismo biológico continua operando na nossa mente hoje. Eu costumo chamar esse medo primitivo de "<Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link>". Quando você pensa em dar uma opinião que contraria o seu grupo, o seu cérebro não interpreta isso apenas como um "deslize social". O alarme biológico soa como se a sua vida estivesse em perigo. O suor frio, a taquicardia e a <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link> paralisante são o seu corpo se preparando para uma ameaça de morte que, na vida moderna, simplesmente não existe mais.
      </p>

      <h2>Quando o instinto de sobrevivência vira fobia social</h2>
      <p>
        O problema é que, no mundo contemporâneo, esse alarme está desregulado. Um comentário ruim no Instagram ou um olhar torto em uma reunião de trabalho ativam o mesmo nível de pânico que antigamente seria reservado para ameaças reais. Para evitar essa dor, a pessoa com fobia social passa a viver na defensiva. Ela pratica a autocensura, adota opiniões que não são suas e tenta agradar a todos, perdendo completamente o contato com os seus próprios desejos.
      </p>

      <p>
        Ao tentar se proteger do julgamento, o indivíduo acaba sofrendo com graves problemas na <InternalLink href="/terapia/adultos/regulacao-emocional">regulação emocional e controle da <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link></InternalLink>. O esforço para não desagradar ninguém é tão exaustivo que não sobra energia para construir uma vida autêntica.
      </p>

      <h2>Atualizando o seu sistema mental</h2>
      <p>
        O objetivo do trabalho clínico não é extirpar o medo, mas atualizar esse "software" ancestral. Na terapia, nós fazemos um trabalho rigoroso para que o paciente consiga separar os perigos reais dos perigos imaginários. É o espaço para entender que não agradar a todos não significa que você será devorado por um predador social.
      </p>

      <p>
        Esse é um processo central no <InternalLink href="/terapia/adultos/autonomia-identidade">desenvolvimento de uma autonomia e identidade inabaláveis</InternalLink>. Se você deseja parar de viver em função do que os outros pensam e quer recuperar a direção da sua vida, a psicoterapia oferece as ferramentas estruturais para essa mudança. Realizo atendimentos psicológicos online para todo o mundo, além de sessões presenciais em Presidente Epitácio - SP.
      </p>
    </ArticlePage>
  );
}
