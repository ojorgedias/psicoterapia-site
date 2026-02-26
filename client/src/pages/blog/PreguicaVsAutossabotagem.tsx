import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function PreguicaVsAutossabotagem() {
  useEffect(() => {
    document.title = 'Qual a diferença entre preguiça e autossabotagem? Por que a  | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Qual a diferença entre preguiça e autossabotagem? Por que a sua mente paralisa o seu corpo');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Qual a diferença entre preguiça e autossabotagem? Por que a sua mente paralisa o seu corpo
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

"Eu sei exatamente o que preciso fazer, mas na hora de agir, simplesmente não consigo sair do lugar. Sou um preguiçoso irreparável". Essa é, sem dúvida, uma das autocríticas mais comuns e destrutivas que escuto na prática clínica. A nossa sociedade, doente pela necessidade de hiperprodutividade, ensinou as pessoas a tratarem qualquer dificuldade de iniciar uma tarefa como uma falha moral ou falta de caráter. No entanto, a análise psicológica rigorosa nos obriga a separar o joio do trigo. Existe uma diferença abissal e estrutural entre a verdadeira apatia da preguiça e a autossabotagem profunda mascarada de procrastinação.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A anatomia da indiferença versus a guerra interna
A verdadeira preguiça é caracterizada pela ausência de desejo e pela indiferença pacífica. O indivíduo preguiçoso não executa a tarefa e, fundamentalmente, não se importa com o impacto dessa não-ação. Ele encontra paz na sua própria inércia.</h2><p className="text-slate-700 leading-relaxed mb-6">O paciente que sofre de autossabotagem, por outro lado, vivencia uma verdadeira guerra interna. Ele quer desesperadamente concluir o projeto, estudar para a prova ou tomar uma decisão financeira. Contudo, uma <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link> paralisante e invisível toma conta do seu corpo. Ele se distrai, adia e termina o dia consumido por uma culpa esmagadora que beira o desespero. A autossabotagem não é a ausência de energia; é o uso maciço de toda a sua energia psíquica para travar uma ação que o seu inconsciente interpreta como uma ameaça gravíssima.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O sucesso como traição familiar
Mas por que a mente consideraria o próprio avanço pessoal como um perigo? Na clínica, encontro a resposta nas <Link href="/conceitos-fundamentais" className="text-primary hover:underline">Regras Invisíveis</Link> que governam a identidade do paciente. Frequentemente, agir e ter sucesso significa abandonar uma zona de conforto emocional ou confrontar a história de escassez da própria família.</h2><p className="text-slate-700 leading-relaxed mb-6">Se você cresceu em um núcleo onde o destaque gerava inveja, ou onde o sacrifício e a dificuldade eram vistos como virtudes absolutas, brilhar pode soar no seu inconsciente como uma traição aos seus pais. Essa dinâmica é o foco central do trabalho de <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link>. A sua mente trava o seu corpo (aquilo que você chama de "preguiça") para protegê-lo do julgamento ou da culpa que ela acredita que o seu sucesso atrairá.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O fim da punição mental
Tentar tratar a autossabotagem com castigos mentais ("eu preciso me esforçar mais") apenas alimenta o ciclo de <Link href="/ansiedade" className="text-primary hover:underline">ansiedade</Link> e fracasso. É um esforço violento e inútil que apenas aprofunda o sintoma.</h2><p className="text-slate-700 leading-relaxed mb-6">O trabalho clínico consiste em realizar uma escavação cuidadosa da sua psique. O objetivo é desativar a máquina da autossabotagem e padrões de repetição pela via da compreensão lógica: entendendo como essa defesa foi erguida no passado e por que você já possui maturidade para não precisar mais dela hoje.</p><p className="text-slate-700 leading-relaxed mb-6">Se você está exausto de lutar contra si mesmo e viver acorrentado pela paralisia e pela culpa, a psicoterapia é o caminho estruturado para retomar o controle. Ofereço acompanhamento psicológico online em nível global e presencial em Presidente Epitácio - SP.</p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li><a href="/autossabotagem" className="text-blue-600 hover:underline">Autossabotagem: Além do Conceito</a></li>
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
