import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function FobiaSocial() {
  useEffect(() =&gt; {
    document.title = 'Fobia Social e a Necessidade de Aprovação: A biologia do med | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Fobia Social e a Necessidade de Aprovação: A biologia do medo da rejeição');
  }, []);

  return (
    <layout>
<div classname="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section classname="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 classname="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Fobia Social e a Necessidade de Aprovação: A biologia do medo da rejeição
          </h1>
</section>
<section classname="px-4 max-w-4xl mx-auto py-12">
<div classname="prose prose-lg max-w-none">
<p classname="text-slate-700 leading-relaxed mb-6">É frequente receber no consultório profissionais com currículos brilhantes que paralisam completamente antes de uma apresentação ou pessoas que aceitam dinâmicas abusivas por puro terror de desagradar. Quando a fobia social ataca, o paciente costuma se punir, acreditando ser portador de uma fraqueza moral ou de uma insegurança crônica. No entanto, o que observo na prática clínica é que o medo do julgamento raramente é uma falha de caráter. Trata-se do sequestro da sua mente racional por um dos mecanismos de sobrevivência mais antigos e poderosos do cérebro humano.

</p><p>A herança evolutiva da exclusão social
Para desarticular a fobia social, precisamos entender a sua raiz neurobiológica. O cérebro humano foi forjado em um contexto ancestral onde pertencer a um grupo não era uma questão de status, mas a única garantia literal de sobrevivência. Um indivíduo expulso da sua tribo estava condenado à morte por fome ou predadores.</p><p classname="text-slate-700 leading-relaxed mb-6">Quando você está em uma reunião de trabalho e pensa em dar uma opinião divergente da chefia, a sua mente racional sabe que, na pior das hipóteses, você receberá uma crítica. Mas a camada primitiva do seu cérebro não entende o contexto moderno. Para o seu sistema nervoso, contrariar o grupo aciona o mesmo alarme biológico de risco de morte que os nossos ancestrais sentiam. O suor frio, a taquicardia e a vontade de fugir são o seu corpo se preparando para uma ameaça letal que, na realidade atual, não existe.</p><p>O alto custo da autocensura
O problema se agrava quando o indivíduo passa a organizar toda a sua vida para evitar o acionamento desse alarme. Para não lidar com o terror da rejeição, a pessoa se anula. Ela pratica a autocensura severa, sorri quando quer chorar e adota as opiniões da maioria, perdendo completamente o contato com os seus próprios desejos e limites.</p><p classname="text-slate-700 leading-relaxed mb-6">Essa performance de adequação ininterrupta cobra um preço altíssimo do corpo. Em meus atendimentos, observo que pacientes que vivem na defensiva social frequentemente desenvolvem quadros de esgotamento e graves problemas na regulação emocional e controle da ansiedade. O esforço para não desagradar ninguém drena toda a energia que deveria ser usada para construir uma vida autêntica.</p><p>Atualizando o sistema de defesa
O objetivo do trabalho psicoterapêutico não é fazer você parar de se importar com as pessoas, mas sim atualizar o seu sistema de defesa biológico. Na clínica, fazemos uma investigação rigorosa para que você consiga separar, na prática, o perigo real do perigo imaginário.</p><p classname="text-slate-700 leading-relaxed mb-6">Trabalhamos a tolerância ao desconforto, ensinando a sua mente a suportar o atrito de não ser aprovado por todos. Esse é o processo central no desenvolvimento de uma autonomia e identidade inabaláveis. Se você deseja parar de terceirizar o seu valor para a opinião alheia, a psicoterapia oferece as ferramentas estruturais para essa mudança. Realizo atendimentos psicológicos online para pacientes em qualquer parte do globo.</p>
<div classname="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 classname="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul classname="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li>Padrões Familiares: Libertação e Integração</li>
<li>Crise Existencial: Expansão de Consciência</li>
</ul>
</div>
</div>
</section>
<section classname="bg-slate-900 text-white py-16 px-4 mt-16">
<div classname="max-w-4xl mx-auto text-center">
<h2 classname="text-3xl font-bold mb-4">Pronto para Explorar Este Tema?</h2>
<p classname="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a trabalhar com este tema de forma genuína.
            </p>
<a classname="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Fobia%20Social%20e%20a%20Necessidade%20de%20Aprovação%3A%20A%20biologia%20do%20medo%20da%20rejeição e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</layout>
  );
}
