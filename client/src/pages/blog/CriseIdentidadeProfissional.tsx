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
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Crise de identidade profissional: O que fazer quando o trabalho perde o sentido
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

A crise de identidade profissional é uma das demandas mais frequentes e silenciosas que chegam ao meu consultório. Profissionais competentes, com carreiras sólidas, frequentemente sentam-se à minha frente relatando uma sensação de fraude, cinismo em relação à própria área ou um desejo impulsivo de abandonar anos de construção acadêmica. A internet costuma aconselhar essas pessoas a "seguirem a sua paixão" ou a "mudarem de área". Contudo, a experiência clínica mostra que o buraco é estrutural. A crise raramente é sobre a profissão em si; é sobre o que a profissão passou a representar na arquitetura da identidade do sujeito.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A perigosa fusão entre "quem eu sou" e "o que eu faço"
O mercado de trabalho contemporâneo exige não apenas o nosso tempo, mas a nossa alma. Nós somos condicionados a responder à pergunta "quem é você?" com o nosso cargo. Quando o indivíduo funde completamente a sua identidade com a sua profissão, o trabalho deixa de ser uma via de subsistência ou expressão e passa a ser a única métrica do seu valor como ser humano.</h2><p className="text-slate-700 leading-relaxed mb-6">Observo que, quando a carreira sofre qualquer abalo — uma demissão, a falta de reconhecimento ou simplesmente o tédio de uma rotina sem sentido —, a psique entra em colapso. Como a pessoa não sabe quem ela é fora do crachá corporativo, o atrito no trabalho gera uma desestruturação global. É aqui que o sistema nervoso falha e surgem sintomas físicos graves, exigindo frequentemente um trabalho prévio focado na <a href="/ansiedade" className="text-blue-600 hover:underline">regulação emocional e controle da ansiedade</a> para que o paciente não tome decisões precipitadas e destrutivas.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A Arqueologia da sua ambição
Na psicoterapia, o que fazemos diante dessa crise não é um teste vocacional. Nós realizamos uma Arqueologia Pessoal de Pressupostos. A pergunta clínica não é "para qual área você deve ir", mas sim "por que você escolheu essa carreira em primeiro lugar?".</h2><p className="text-slate-700 leading-relaxed mb-6">Muitas vezes, descobrimos que a escolha profissional foi feita para curar uma ferida familiar, para buscar a aprovação de um pai ausente ou para provar valor à sociedade. Quando essa necessidade infantil perde a força na vida adulta, o trabalho se esvazia de sentido. Reconhecer essas heranças é um passo desconfortável, mas fundamental. Desvincular a sua identidade dos padrões de exigência familiar exige a quebra de <a href="/padroes-familiares" className="text-blue-600 hover:underline">lealdades invisíveis</a>.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A separação necessária
Resolver uma crise de identidade profissional exige que você recupere a sua autonomia. O objetivo da intervenção psicológica é ajudar você a enxergar que a sua profissão é apenas uma das roupas que você veste, e não a sua pele.</h2><p className="text-slate-700 leading-relaxed mb-6">Se o seu trabalho se tornou um ambiente de angústia insuportável e você deseja investigar a raiz dessa paralisia com ética e rigor metodológico, a psicoterapia é o ambiente adequado. Ofereço atendimento psicológico online em nível global.</p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li><a href="//autossabotagem" className="text-blue-600 hover:underline">Autossabotagem: Além do Conceito</a></li>
                <li><Link href="/padroes-familiares" className="text-primary hover:underline">Padrões Familiares</Link></li>
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
