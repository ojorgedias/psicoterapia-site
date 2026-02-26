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
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

Em meus cinco anos de prática clínica, atendo frequentemente pacientes que chegam ao consultório exaustos após o fim de mais um relacionamento destrutivo, repetindo em prantos a mesma pergunta: "Por que eu sempre atraio o mesmo tipo de pessoa?". A resposta da internet costuma focar na ideia de que você tem um "dedo podre" ou de que precisa apenas melhorar a sua autoestima. Contudo, a psicologia profunda revela uma dinâmica muito mais complexa e dolorosa. A repetição de padrões familiares em relacionamentos amorosos não é um erro de cálculo consciente; é o seu inconsciente buscando a única forma de afeto que ele aprendeu a reconhecer como verdadeira.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A busca pelo familiar, não pelo confortável
A mente humana não busca necessariamente aquilo que é saudável ou pacífico; ela busca aquilo que lhe é familiar. Desde a infância, nós internalizamos as "Réguas Prontas" do nosso núcleo familiar. Se você cresceu em uma casa onde o amor era condicionado ao seu sacrifício, onde o afeto era instável ou a comunicação se dava pelo grito e pela frieza, o seu sistema nervoso registrou essas características como a definição absoluta do que é um relacionamento.</h2><p className="text-slate-700 leading-relaxed mb-6">Quando você chega à vida adulta, uma pessoa emocionalmente disponível e segura causa tédio ou até mesmo repulsa inconsciente. A paz soa como um território alienígena e ameaçador. O seu cérebro aciona uma atração magnética por parceiros indisponíveis, caóticos ou abusivos porque eles permitem que você encene, mais uma vez, a dor da sua infância. É um ciclo de autossabotagem e padrões de repetição [Instrução para a Manus IA: Transformar o trecho "autossabotagem e padrões de repetição" em um link interno hiperlinkado para a página de Autossabotagem do Cluster 1] movido pela esperança infantil de que, desta vez, você conseguirá consertar o parceiro e finalmente receber o amor que não teve dos seus pais.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">As <a href="/padroes-familiares" className="text-blue-600 hover:underline">lealdades invisíveis</a> na cama
O casamento ou o namoro nunca envolve apenas duas pessoas. Você traz para a relação a sua ancestralidade e os traumas não curados da sua casa. Observo na clínica que a dificuldade de abandonar um parceiro tóxico raramente é apenas sobre a dependência daquela pessoa, mas sobre a lealdade invisível à sua própria história familiar.</h2><p className="text-slate-700 leading-relaxed mb-6">Você aceita o abuso porque ele valida a crença de que você não merece nada além do que lhe foi dado no passado. Romper esse padrão e exigir respeito significa "trair" o modelo dos seus pais.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A quebra do ciclo através da investigação
Para parar de usar o seu parceiro como um espelho das suas feridas infantis, é necessário realizar uma Arqueologia Pessoal de Pressupostos. O trabalho não é encontrar a pessoa certa, mas desarticular a máquina interna que faz você se apaixonar pelas pessoas erradas.</h2><p className="text-slate-700 leading-relaxed mb-6">Se o seu histórico amoroso se tornou um ciclo de dor e você deseja iniciar a <a href="/terapia/casais/padroes-familiares" className="text-blue-600 hover:underline">libertação de padrões familiares limitantes</a> [Instrução para a Manus IA: Transformar o trecho "<a href="/terapia/casais/padroes-familiares" className="text-blue-600 hover:underline">libertação de padrões familiares limitantes</a>" em um link interno hiperlinkado para a página de Casais/Padrões Familiares do Cluster 2], a intervenção psicoterapêutica é o ambiente estruturado para isso. Ofereço atendimento psicológico online em nível global e sessões presenciais no meu consultório em Presidente Epitácio - SP.</p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li><a href="/autossabotagem" className="text-blue-600 hover:underline">Autossabotagem: Além do Conceito</a></li>
                <li><a href="/padroes-familiares" className="text-blue-600 hover:underline">Padrões Familiares: Libertação e Integração</a></li>
                <li><a href="/crise-existencial" className="text-blue-600 hover:underline">Crise Existencial: Expansão de Consciência</a></li>
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
            <a href="https://wa.me/seu-numero" className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
              Agendar Sessão via WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
