import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function CriseIdentidadeProfissional() {
  useEffect(() => {
    document.title = 'Crise de identidade profissional: O que fazer quando o traba | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Crise de identidade profissional: O que fazer quando o trabalho perde o sentido');
  }, []);

  return (
    <layout>
<div classname="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section classname="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 classname="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Crise de identidade profissional: O que fazer quando o trabalho perde o sentido
          </h1>
</section>
<section classname="px-4 max-w-4xl mx-auto py-12">
<div classname="prose prose-lg max-w-none">
<p classname="text-slate-700 leading-relaxed mb-6">A crise de identidade profissional é uma das demandas mais frequentes e silenciosas que chegam ao meu consultório. Profissionais competentes, com carreiras sólidas, frequentemente sentam-se à minha frente relatando uma sensação de fraude, cinismo em relação à própria área ou um desejo impulsivo de abandonar anos de construção acadêmica. A internet costuma aconselhar essas pessoas a "seguirem a sua paixão" ou a "mudarem de área". Contudo, a experiência clínica mostra que o buraco é estrutural. A crise raramente é sobre a profissão em si; é sobre o que a profissão passou a representar na arquitetura da identidade do sujeito.

</p><p>A perigosa fusão entre "quem eu sou" e "o que eu faço"
O mercado de trabalho contemporâneo exige não apenas o nosso tempo, mas a nossa alma. Nós somos condicionados a responder à pergunta "quem é você?" com o nosso cargo. Quando o indivíduo funde completamente a sua identidade com a sua profissão, o trabalho deixa de ser uma via de subsistência ou expressão e passa a ser a única métrica do seu valor como ser humano.</p><p classname="text-slate-700 leading-relaxed mb-6">Observo que, quando a carreira sofre qualquer abalo — uma demissão, a falta de reconhecimento ou simplesmente o tédio de uma rotina sem sentido —, a psique entra em colapso. Como a pessoa não sabe quem ela é fora do crachá corporativo, o atrito no trabalho gera uma desestruturação global. É aqui que o sistema nervoso falha e surgem sintomas físicos graves, exigindo frequentemente um trabalho prévio focado na regulação emocional e controle da ansiedade para que o paciente não tome decisões precipitadas e destrutivas.</p><p>A Arqueologia da sua ambição
Na psicoterapia, o que fazemos diante dessa crise não é um teste vocacional. Nós realizamos uma Arqueologia Pessoal de Pressupostos. A pergunta clínica não é "para qual área você deve ir", mas sim "por que você escolheu essa carreira em primeiro lugar?".</p><p classname="text-slate-700 leading-relaxed mb-6">Muitas vezes, descobrimos que a escolha profissional foi feita para curar uma ferida familiar, para buscar a aprovação de um pai ausente ou para provar valor à sociedade. Quando essa necessidade infantil perde a força na vida adulta, o trabalho se esvazia de sentido. Reconhecer essas heranças é um passo desconfortável, mas fundamental. Desvincular a sua identidade dos padrões de exigência familiar exige a quebra de lealdades invisíveis.</p><p>A separação necessária
Resolver uma crise de identidade profissional exige que você recupere a sua autonomia. O objetivo da intervenção psicológica é ajudar você a enxergar que a sua profissão é apenas uma das roupas que você veste, e não a sua pele.</p><p classname="text-slate-700 leading-relaxed mb-6">Se o seu trabalho se tornou um ambiente de angústia insuportável e você deseja investigar a raiz dessa paralisia com ética e rigor metodológico, a psicoterapia é o ambiente adequado. Ofereço atendimento psicológico online em nível global.</p>
<div classname="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 classname="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul classname="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li><link classname="text-primary hover:underline" href="/padroes-familiares"/>Padrões Familiares</li>
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
<a classname="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Crise%20de%20identidade%20profissional%3A%20O%20que%20fazer%20quando%20o%20trabalho%20perde%20o%20sentido e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</layout>
  );
}
