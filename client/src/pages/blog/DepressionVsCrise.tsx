import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function DepressionVsCrise() {
  useEffect(() => {
    document.title = 'Qual a diferença entre depressão e crise existencial? O peri | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Qual a diferença entre depressão e crise existencial? O perigo do diagnóstico raso');
  }, []);

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Qual a diferença entre <Link className="text-primary hover:underline" href="/depressao-vs-crise-existencial">depressão</Link> e <Link className="text-primary hover:underline" href="/crise-existencial">crise</Link> existencial? O perigo do diagnóstico raso
          </h1>
</section>
<section className="px-4 max-w-4xl mx-auto py-12">
<div className="prose prose-lg max-w-none">
<p className="text-slate-700 leading-relaxed mb-6">Na era da hiperinformação, tornou-se comum que o paciente chegue à primeira sessão já com um autodiagnóstico pronto. Ele relata desânimo, falta de energia para o trabalho e conclui imediatamente: "estou com depressão". No entanto, a investigação clínica rigorosa frequentemente revela um quadro estrutural muito diferente. Como psicólogo, afirmo que a capacidade de separar uma doença do humor de um colapso de sentido é vital. Confundir os dois leva a tratamentos ineficazes e, pior, ao silenciamento de uma dor que tem o propósito exato de transformar a vida do sujeito.

</p><p>A <Link className="text-primary hover:underline" href="/depressao-vs-crise-existencial">depressão</Link> como o achatamento do sujeito
Em minha prática clínica, observo que a depressão real se manifesta como um esvaziamento profundo do afeto e da vitalidade. O paciente deprimido perde a capacidade primária de desejar e de sentir prazer. O futuro não parece assustador para ele; o futuro simplesmente parece não existir. O corpo pesa, a higiene básica torna-se um desafio e há uma paralisia densa que afeta a própria fisiologia do indivíduo. A depressão é o silêncio e o apagamento da energia vital.</p><p>A <Link className="text-primary hover:underline" href="/crise-existencial">crise</Link> existencial como o excesso de angústia
A crise existencial, por outro lado, é um estado de altíssima energia interna e atrito constante. O paciente que enfrenta uma perda de sentido não perdeu a capacidade de sentir; ele está, na verdade, sentindo o choque violento entre quem ele é no fundo e a vida plástica que está levando.</p><p className="text-slate-700 leading-relaxed mb-6">Ele sente angústia, dúvida, raiva das próprias escolhas e uma vontade desesperada de entender "para onde ir". É uma fase de Antítese pura, onde o indivíduo está questionando ativamente os pilares da sua profissão e, com muita frequência, confrontando o peso das suas lealdades familiares invisíveis.</p><p>A patologização do amadurecimento
O grande perigo da psiquiatria e da psicologia superficiais hoje é tentar medicar a <Link className="text-primary hover:underline" href="/crise-existencial">crise</Link> existencial como se fosse apenas um desequilíbrio químico a ser corrigido. Tratar a falta de propósito na vida apenas com antidepressivos é o mesmo que tomar um analgésico para ignorar a mão no fogo. Silenciar a angústia de uma vida sem sentido apenas adia o problema, empurrando o paciente para ciclos destrutivos de <Link className="text-primary hover:underline" href="/autossabotagem">autossabotagem</Link> e padrões de repetição comportamental.</p><p>A investigação clínica do sintoma
O tratamento da <Link className="text-primary hover:underline" href="/depressao-vs-crise-existencial">depressão</Link> exige o resgate da funcionalidade básica, mas o manejo da crise existencial exige arqueologia pessoal e coragem filosófica. O paciente precisa adotar o "<Link className="text-primary hover:underline" href="/conceitos-fundamentais">manto</Link> da ignorância" para desconstruir suas certezas e encontrar um eixo autêntico. Se você não sabe diferenciar se está adoecido ou apenas profundamente perdido na própria trajetória, o olhar analítico de um especialista é o primeiro passo para o resgate da sua agência pessoal. Ofereço Atendimento psicológico online para Brasil e exterior.</p>
<div className="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul className="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li><Link className="text-primary hover:underline" href="/padroes-familiares">Padrões</Link> Familiares</li>
<li>Crise Existencial: Expansão de Consciência</li>
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
<a className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Qual%20a%20diferença%20entredepressão%20ecrise%20existencial%3F%20O%20perigo%20do%20diagnóstico%20raso e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</Layout>
  );
}
