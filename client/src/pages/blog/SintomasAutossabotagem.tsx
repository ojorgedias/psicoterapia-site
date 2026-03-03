import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function SintomasAutossabotagem() {
  useEffect(() => {
    document.title = 'Sintomas de autossabotagem no trabalho e carreira: O esgotam | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Sintomas de autossabotagem no trabalho e carreira: O esgotamento que não vem do excesso de tarefas');
  }, []);

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Sintomas de autossabotagem no trabalho e carreira: O esgotamento que não vem do excesso de tarefas
          </h1>
</section>
<section className="px-4 max-w-4xl mx-auto py-12">
<div className="prose prose-lg max-w-none">
<p className="text-slate-700 leading-relaxed mb-6">Recebo frequentemente no consultório profissionais de alto desempenho que relatam um esgotamento extremo, perda de prazos inexplicável ou conflitos repentinos com a chefia. O mercado corporativo tem a tendência de rotular rapidamente qualquer estafa como um quadro de burnout causado pelo excesso de horas trabalhadas. Contudo, a escuta clínica atenta revela que, na esmagadora maioria das vezes, o paciente não está cansado por trabalhar muito. Ele está exausto pelo esforço descomunal que a sua própria mente faz para obrigá-lo a continuar caminhando em uma direção profissional que já não faz o menor sentido existencial.

</p><p>A dissonância entre a razão e a bússola interna
A autossabotagem no ambiente corporativo ocorre quando há uma ruptura violenta entre o que a sua mente racional exige e o que a sua intuição tolera. O paciente costuma adotar as "Réguas Prontas" do sucesso corporativo — o salário alto, a liderança, o status — e decide, de forma engessada, que precisa seguir esse trajeto a qualquer custo.</p><p className="text-slate-700 leading-relaxed mb-6">Porém, a sua bússola interna (a intuição) percebe que aquele ambiente ou função violenta os seus valores mais íntimos. Como a razão se recusa a mudar a rota, o próprio sistema psíquico aciona o freio de emergência no corpo. É aqui que começam os "sintomas" que o paciente não compreende: a procrastinação crônica, o adoecimento físico frequente ou os erros primários em tarefas simples. O que chamamos de autossabotagem é, na realidade, a sua estrutura interna tentando desesperadamente tirar você de um caminho que o está destruindo.</p><p>O terror da avaliação e a anulação profissional
Outro sintoma grave que observo na prática clínica é a incapacidade absoluta de dizer "não" ou o pânico desproporcional antes de apresentar um projeto. O ambiente corporativo costuma ativar mecanismos primitivos de sobrevivência: o cérebro interpreta a rejeição de um chefe ou colega como uma ameaça literal à própria vida, uma herança biológica do medo da exclusão.</p><p className="text-slate-700 leading-relaxed mb-6">Para evitar essa rejeição imaginária, o profissional se anula. Ele aceita demandas abusivas e tenta performar um personagem corporativo impecável. Esse distanciamento brutal das próprias emoções leva o sistema a um colapso iminente. O trabalho de recuperação não passa por planilhas de gestão de tempo, mas exige uma atenção rigorosa à <Link className="text-primary hover:underline" href="/ansiedade">regulação</Link> emocional e controle da ansiedade, ensinando o paciente a separar a ameaça profissional irreal da sua integridade psíquica.</p><p>A escavação do próprio valor
Tentar resolver essa paralisia com aplicativos de produtividade ou discursos motivacionais é inútil. O processo psicoterapêutico exige o que chamo de Arqueologia Pessoal de Pressupostos: precisamos escavar quem foi que determinou que o seu sucesso precisa, obrigatoriamente, custar a sua saúde mental.</p><p className="text-slate-700 leading-relaxed mb-6">Ao desarticular essa herança, abrimos espaço para o desenvolvimento de uma autonomia e identidade inabaláveis. Se a sua carreira tornou-se um cenário de estagnação dolorosa, a psicoterapia oferece a técnica adequada para recalcular a sua rota com clareza. Realizo atendimentos online para todo o mundo.</p>
<div className="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul className="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li><Link className="text-primary hover:underline" href="/padroes-familiares">Padrões</Link> Familiares: Libertação e Integração</li>
<li><Link className="text-primary hover:underline" href="/crise-existencial">Crise</Link> Existencial: Expansão de Consciência</li>
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
<a className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Sintomas%20de%20autossabotagem%20no%20trabalho%20e%20carreira%3A%20O%20esgotamento%20que%20não%20vem%20do%20excesso%20de%20tarefas e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</Layout>
  );
}
