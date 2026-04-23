import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function PorQueDesistoTudo() {
  useEffect(() => {
    document.title = 'Por que eu desisto de tudo que começo? A psicoterapia por trás | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Por que eu desisto de tudo que começo? A psicoterapia por trás do ciclo de abandono');
  }, []);

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Por que eu desisto de tudo que começo? A psicoterapia por trás do ciclo de abandono
          </h1>
</section>
<section className="px-4 max-w-4xl mx-auto py-12">
<div className="prose prose-lg max-w-none">
<p className="text-slate-700 leading-relaxed mb-6">
              A angústia do eterno iniciante. Matricular-se em um curso e parar no segundo mês. Começar um projeto profissional com empolgação e abandoná-lo na primeira dificuldade. Iniciar uma mudança de hábitos e desistir logo em seguida. Se você frequentemente se pergunta "por que eu desisto de tudo que começo?", saiba que você não está sozinho. A internet costuma diagnosticar esse comportamento rapidamente como preguiça, falta de foco ou até mesmo sugerir transtornos de atenção sem qualquer avaliação clínica. No entanto, na psicoterapia de profundidade, compreendemos que o abandono crônico de projetos é um mecanismo de defesa altamente sofisticado da psique para evitar o confronto com a própria identidade.
            </p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              A ilusão da preguiça e a fase da Antítese
            </h2>
<p className="text-slate-700 leading-relaxed mb-6">
              A desistência raramente acontece por falta de vontade de vencer; ela acontece pelo terror de falhar ou, ironicamente, pelo terror de dar certo. Quando começamos algo novo, estamos cheios de idealizações. Mas assim que o processo exige esforço real, nós nos deparamos com a nossa própria ignorância e limitação. Esse é o momento do atrito, a fase que a filosofia chama de Antítese. Desistir no meio do caminho é uma estratégia para não lidar com a frustração de não ser perfeito. É muito mais confortável para o ego dizer "eu não terminei aquele projeto porque perdi o interesse" do que terminá-lo e descobrir que ele ficou mediano e será alvo de críticas. O abandono protege a sua imagem idealizada, mas mantém você paralisado na vida real.
            </p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O medo de forjar a própria régua
            </h2>
<p className="text-slate-700 leading-relaxed mb-6">
              Além do medo do erro, há uma questão existencial mais profunda. Quando você leva um projeto até o fim, você muda de patamar. Você inevitavelmente se destaca, cresce e, com isso, corre o risco de não pertencer mais ao mesmo grupo ou de não caber mais nas expectativas da sua família. Desistir é uma forma de <Link className="text-primary hover:underline" href="/autossabotagem">autossabotagem</Link> e padrão de repetição que garante que você permaneça no seu lugar de sempre, evitando o peso da responsabilidade de ser o autor da própria história.
            </p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Suportando o desconforto de não saber
            </h2>
<p className="text-slate-700 leading-relaxed mb-6">
              Para quebrar o ciclo do abandono, você não precisa de mais planilhas de organização ou discursos motivacionais. Você precisa desenvolver a tolerância ao desconforto. Na clínica, trabalhamos para que o paciente suporte a fase em que ele é apenas um aprendiz vulnerável, desarmando a exigência irreal de perfeição imediata. Sustentar o "meio do caminho", com todas as suas dúvidas e tédios, é o único trajeto para o desenvolvimento de uma autonomia e identidade inabaláveis. Se a frustração de nunca terminar o que começa está esgotando a sua vitalidade, a psicoterapia é o espaço de investigação para desconstruir essa paralisia. Ofereço atendimento psicológico online para todo o Brasil.
            </p>
<div className="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul className="space-y-3">
<li><Link className="text-primary hover:underline" href="/autossabotagem">Autossabotagem:</Link> Além do Conceito</li>
<li><Link className="text-primary hover:underline" href="/padroes-familiares">Padrões</Link> Familiares</li>
<li><Link className="text-primary hover:underline" href="/crise-existencial">Crise</Link> Existencial</li>
</ul>
</div>
</div>
</section>
<section className="bg-slate-900 text-white py-16 px-4 mt-16">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-bold mb-4">Pronto para Explorar Este Tema?</h2>
<p className="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a trabalhar com este tema de forma genuína.
            </p>
<a className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Por%20que%20eu%20desisto%20de%20tudo%20que%20começo%3F%20A%20psicoterapia%20por%20trás%20do%20ciclo%20de%20abandono e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</Layout>
  );
}
