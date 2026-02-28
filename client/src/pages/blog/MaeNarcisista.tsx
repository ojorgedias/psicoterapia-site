import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function MaeNarcisista() {
  useEffect(() => {
    document.title = 'Sinais de parceiro com traços de narcisismo oculto: O abuso  | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Sinais de parceiro com traços de narcisismo oculto: O abuso silencioso nas relações');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Sinais de parceiro com traços de <Link href="/narcisismo" className="text-primary hover:underline">narcisismo</Link> oculto: O abuso silencioso nas relações
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

Em meus acompanhamentos clínicos focados em dinâmica de casais, observo um padrão perigoso que destrói a saúde mental de forma extremamente silenciosa. Muitas pessoas chegam à sessão duvidando da própria sanidade porque não conseguem identificar em seus cônjuges o perfil clássico, grandioso e arrogante do narcisista que a mídia retrata. O parceiro, aos olhos da sociedade, é visto como alguém prestativo, sensível e até mesmo frágil. Contudo, entre quatro paredes, o paciente vive um esgotamento crônico. Esse é o território sombrio do narcisismo oculto (ou vulnerável), onde o controle não é exercido pelo grito ou pela vaidade extrema, mas pela manipulação da culpa e pela vitimização constante.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A diferença entre o <Link href="/narcisismo" className="text-primary hover:underline">narcisismo</Link> grandioso e o oculto
Enquanto o narcisista grandioso exige aplausos e admiração direta, o narcisista oculto exige compaixão ininterrupta. A principal arma de controle dessa arquitetura psíquica é a sua própria vulnerabilidade.</h2><p className="text-slate-700 leading-relaxed mb-6">Na prática, o paciente relata que é impossível ter um diálogo sobre as necessidades da relação. Qualquer crítica construtiva ou pedido de mudança é imediatamente distorcido. O parceiro com traços ocultos adota a postura de vítima injustiçada, ofendendo-se profundamente e invertendo o jogo. Em questão de minutos, o paciente que foi tentar resolver um problema acaba pedindo desculpas por ter "magoado" o parceiro. Esse mecanismo de inversão contínua cria uma dissonância cognitiva brutal, levando o sujeito a episódios graves que exigem intervenção clínica para <Link href="/ansiedade" className="text-primary hover:underline">regulação emocional e controle da ansiedade</Link>.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A dinâmica do "salvador"
A grande questão que levanto na clínica é: por que o paciente se mantém em uma relação onde é constantemente sugado? A resposta exige uma Arqueologia Pessoal de Pressupostos. Muitas vezes, quem se relaciona com um narcisista oculto carrega a "Régua Pronta" do salvador.</h2><p className="text-slate-700 leading-relaxed mb-6">Se você aprendeu na infância que o amor precisa ser conquistado através da utilidade e do cuidado excessivo, você será um ímã para parceiros que se colocam no lugar de doentes ou incompreendidos pelo mundo. A sua psique entra em um ciclo de <a href="//autossabotagem" className="text-blue-600 hover:underline">autossabotagem e padrões de repetição comportamental</a>, acreditando que, se você amar o suficiente ou se sacrificar mais um pouco, o outro finalmente irá mudar e reconhecer o seu valor.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O resgate da própria percepção
O objetivo da terapia em casos de abuso silencioso não é diagnosticar o seu parceiro que não está na sala, mas resgatar a sua capacidade de confiar na própria percepção da realidade. É desmontar a estrutura que faz você se sentir responsável pela miséria emocional do outro.</h2><p className="text-slate-700 leading-relaxed mb-6">Se você está exausto de pisar em ovos e deseja investigar essas dinâmicas com a profundidade e o rigor que elas exigem, a psicoterapia é a via adequada. Ofereço intervenções psicológicas online em nível global.</p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li><a href="//autossabotagem" className="text-blue-600 hover:underline">Autossabotagem: Além do Conceito</a></li>
                <li><Link href="/padroes-familiares" className="text-primary hover:underline">Padrões Familiares</Link></li>
                <li><Link href="/crise-existencial" className="text-primary hover:underline">Crise Existencial</Link></li>
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
