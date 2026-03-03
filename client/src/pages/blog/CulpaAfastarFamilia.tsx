import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function CulpaAfastarFamilia() {
  useEffect(() => {
    document.title = 'Repetição de padrões familiares em relacionamentos amorosos: | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Repetição de padrões familiares em relacionamentos amorosos: Por que você escolhe o que machuca');
  }, []);

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Repetição de padrões familiares em relacionamentos amorosos: Por que você escolhe o que machuca
          </h1>
</section>
<section className="px-4 max-w-4xl mx-auto py-12">
<div className="prose prose-lg max-w-none">
<p className="text-slate-700 leading-relaxed mb-6">Em meus cinco anos de prática clínica, atendo frequentemente pacientes que chegam ao consultório exaustos após o fim de mais um relacionamento destrutivo, repetindo em prantos a mesma pergunta: "Por que eu sempre atraio o mesmo tipo de pessoa?". A resposta da internet costuma focar na ideia de que você tem um "dedo podre" ou de que precisa apenas melhorar a sua autoestima. Contudo, a psicologia profunda revela uma dinâmica muito mais complexa e dolorosa. A repetição de padrões familiares em relacionamentos amorosos não é um erro de cálculo consciente; é o seu inconsciente buscando a única forma de afeto que ele aprendeu a reconhecer como verdadeira.

</p><p>A busca pelo familiar, não pelo confortável
A mente humana não busca necessariamente aquilo que é saudável ou pacífico; ela busca aquilo que lhe é familiar. Desde a infância, nós internalizamos as "Réguas Prontas" do nosso núcleo familiar. Se você cresceu em uma casa onde o amor era condicionado ao seu sacrifício, onde o afeto era instável ou a comunicação se dava pelo grito e pela frieza, o seu sistema nervoso registrou essas características como a definição absoluta do que é um relacionamento.</p><p className="text-slate-700 leading-relaxed mb-6">Quando você chega à vida adulta, uma pessoa emocionalmente disponível e segura causa tédio ou até mesmo repulsa inconsciente. A paz soa como um território alienígena e ameaçador. O seu cérebro aciona uma atração magnética por parceiros indisponíveis, caóticos ou abusivos porque eles permitem que você encene, mais uma vez, a dor da sua infância. É um ciclo de autossabotagem e padrões de repetição movido pela esperança infantil de que, desta vez, você conseguirá consertar o parceiro e finalmente receber o amor que não teve dos seus pais.</p><p>As lealdades invisíveis na cama
O casamento ou o namoro nunca envolve apenas duas pessoas. Você traz para a relação a sua ancestralidade e os traumas não curados da sua casa. Observo na clínica que a dificuldade de abandonar um parceiro tóxico raramente é apenas sobre a dependência daquela pessoa, mas sobre a lealdade invisível à sua própria história familiar.</p><p className="text-slate-700 leading-relaxed mb-6">Você aceita o abuso porque ele valida a crença de que você não merece nada além do que lhe foi dado no passado. Romper esse padrão e exigir respeito significa "trair" o modelo dos seus pais.</p><p>A quebra do ciclo através da investigação
Para parar de usar o seu parceiro como um espelho das suas feridas infantis, é necessário realizar uma Arqueologia Pessoal de Pressupostos. O trabalho não é encontrar a pessoa certa, mas desarticular a máquina interna que faz você se apaixonar pelas pessoas erradas.</p><p className="text-slate-700 leading-relaxed mb-6">Se o seu histórico amoroso se tornou um ciclo de dor e você deseja iniciar a libertação de padrões familiares limitantes, a intervenção psicoterapêutica é o ambiente estruturado para isso. Ofereço atendimento psicológico online em nível global.</p>
<div className="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul className="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li>Padrões Familiares: Libertação e Integração</li>
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
<a className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Repetição%20de%20padrões%20familiares%20em%20relacionamentos%20amorosos%3A%20Por%20que%20você%20escolhe%20o%20que%20machuca e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</Layout>
  );
}
