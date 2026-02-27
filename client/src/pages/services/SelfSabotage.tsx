import { Link } from 'wouter';
import ServicePage, { InternalLink } from "@/components/ServicePage";
import { getRelatedArticles } from "@/lib/content";

export default function SelfSabotage() {
  const relatedArticles = getRelatedArticles("article-2", 3);

  return (
    <ServicePage
      title="Tratamento Psicológico Online para Autossabotagem e Padrões de Repetição"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Terapia", href: "/" },
        { label: "Adultos", href: "/" },
        { label: "Autossabotagem" },
      ]}
      relatedArticles={relatedArticles}
      ctaText="Quero agendar uma sessão e romper esses padrões"
    >
      <h2>A obediência cega a <Link href="/conceitos-fundamentais" className="text-primary hover:underline">regras invisíveis</Link></h2>
      <p>
        Você já se viu preso em um ciclo onde, não importa o quanto tente agir diferente, acaba repetindo os mesmos erros, escolhendo relacionamentos frustrantes ou minando as próprias conquistas? Quando isso acontece, o senso comum costuma culpar uma suposta fraqueza de caráter. Contudo, na análise clínica profunda, compreendemos que esses ciclos não são defeitos morais. Eles são atos de obediência estrita a regras invisíveis que governam o seu comportamento sem que você perceba.
      </p>

      <p>
        Esses automatismos não operam no vácuo; eles se manifestam de forma visceral nas nossas interações diárias. Quando você se percebe em ciclos de conflito ou atraindo parceiros distantes, está frequentemente encenando o que chamo de Teatro da Psique. Essa é a base do que exploramos na{" "}
        <InternalLink href="/terapia/casais/conflitos-casal">
          psicoterapia voltada para casais e resolução de conflitos
        </InternalLink>
        , onde compreendemos que o outro muitas vezes atua como um espelho das nossas próprias sombras e condicionamentos não resolvidos.
      </p>

      <h2>A Arqueologia Pessoal de Pressupostos</h2>
      <p>
        Desde a infância, nós internalizamos dinâmicas de sobrevivência e pressupostos sobre como o mundo funciona. Muitas dessas estruturas foram úteis na infância, mas tornaram-se obsoletas na vida adulta. Quando você tenta mudar a direção da sua vida e se vê puxado de volta para o padrão conhecido, sua mente está apenas operando para manter a estabilidade de um sistema antigo, demonstrando uma lealdade invisível a histórias do passado.
      </p>

      <p>
        Para desarticular essa repetição, meu trabalho baseia-se no que conceituo como Arqueologia Pessoal de Pressupostos. Não se trata de uma fórmula genérica, mas de uma escavação rigorosa da sua história. Vamos desenterrar os artefatos da sua mente e questionar as fundações das suas atitudes. Investigamos a origem do comportamento: esse pressuposto é originalmente seu, ou é um mecanismo de defesa enraizado?
      </p>

      <p>
        O paradoxo da mudança é que o sistema psíquico frequentemente prefere a miséria conhecida à incerteza do novo. Abandonar um comportamento antigo muitas vezes provoca uma sensação de desorientação, culminando em uma sensação de{" "}
        <InternalLink href="/terapia/adultos/crise-existencial">
          <Link href="/crise-existencial" className="text-primary hover:underline">crise existencial</Link> e vazio
        </InternalLink>
        . Suportar o desconforto desse vazio, sem recuar imediatamente para a segurança da <Link href="/autossabotagem" className="text-primary hover:underline">autossabotagem</Link>, é uma das etapas mais delicadas da psicoterapia.
      </p>

      <h2>A restauração da agência pessoal</h2>
      <p>
        O objetivo dessa investigação clínica não é apontar culpados no passado, mas expor à luz da consciência os mecanismos que operam nas sombras do presente. Enquanto um padrão de comportamento permanece não examinado, ele funciona como um destino inescapável. No entanto, quando fazemos esse trabalho de análise cirúrgica e compreendemos a lógica interna da repetição, o automatismo perde o seu poder de coerção.
      </p>

      <p>
        Não se trata de substituir artificialmente um pensamento por outro. Trata-se de desmantelar a máquina que produz a repetição. A partir do momento em que o paciente entende o seu funcionamento mais íntimo, ele ganha uma liberdade madura. Ele deixa de ser refém das próprias sombras e passa a exercer uma agência genuína sobre as suas escolhas.
      </p>

      <h2>Rompa o ciclo de repetição</h2>
      <p>
        Desconstruir padrões tão enraizados exige técnica clínica rigorosa, um espaço de acolhimento e a coragem intelectual para olhar além da superfície. Se você está cansado de esbarrar nos mesmos obstáculos e busca um trabalho de profunda investigação, eu posso te ajudar a escavar e transformar essas dinâmicas. Realizo atendimentos psicológicos online em nível global e presenciais em Presidente Epitácio - SP.
      </p>
    </ServicePage>
  );
}
