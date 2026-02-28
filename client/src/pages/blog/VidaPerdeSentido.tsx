import React, { useEffect } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';

export default function VidaPerdeSentido() {
  useEffect(() => {
    document.title = 'O que fazer quando a vida perde o sentido: A visão da psicol | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'O que fazer quando a vida perde o sentido: A visão da psicologia clínica');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            O que fazer quando a vida perde o sentido: A visão da psicologia clínica
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

"Eu tenho tudo para ser feliz, mas sinto um vazio absoluto. O que eu faço?". Escuto essa exata formulação semanalmente na minha prática clínica. Quando um paciente digita no Google buscando saber o que fazer quando a vida perde o sentido e adiciona a palavra "psicologia" à busca, ele não está procurando frases de motivação rasas; ele está pedindo uma intervenção estrutural. Na clínica de profundidade, compreendemos que a perda de sentido não é uma falha no seu cérebro, mas um evento psíquico necessário. É o som da fundação da sua vida rachando porque o roteiro que você seguia não suporta mais a pessoa que você se tornou.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O desmoronamento das certezas emprestadas
O vazio existencial costuma atingir com mais violência as pessoas que foram excelentes cumpridoras de regras. Desde a infância, nós recebemos da família e da cultura um manual com "Réguas Prontas" sobre o que deve ter valor: casar até tal idade, alcançar um cargo específico, acumular bens. O indivíduo passa anos correndo atrás dessas metas.</h2><p className="text-slate-700 leading-relaxed mb-6">A crise se instaura no momento exato em que a meta é atingida (ou quando se percebe que ela é inatingível) e a promessa de completude falha miseravelmente. Observo no consultório que a dor da perda de sentido é, na verdade, o luto pelas certezas emprestadas. Você descobre que passou a vida inteira terceirizando o seu pensamento e vivendo os valores de outras pessoas. É uma fase de profunda desorientação que exige uma investigação severa, abordada diretamente no tratamento de <Link href="/crise-existencial" className="text-primary hover:underline">crise existencial</Link>.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O erro de preencher o vazio rapidamente
O instinto imediato de quem sente esse vazio é tentar tapá-lo com urgência. O paciente troca de emprego impulsivamente, termina casamentos de forma reativa ou mergulha em fanatismos (sejam eles religiosos, políticos ou hiperprodutivos). Essa fuga apenas adia o problema.</h2><p className="text-slate-700 leading-relaxed mb-6">Como psicólogo, a minha primeira intervenção é ensinar o paciente a suportar o desconforto de não ter respostas. É o que conceituo como vestir o "<Link href="/conceitos-fundamentais" className="text-primary hover:underline">manto da ignorância</Link>". Admitir conscientemente que você não sabe quem é ou o que quer, sem entrar em pânico, é o pré-requisito absoluto para que a verdadeira investigação de si mesmo comece. Apenas no vácuo do "não-saber" é que os seus desejos autênticos conseguem emergir.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Forjando o próprio sentido
A terapia não devolve o sentido antigo que você perdeu; ela oferece as ferramentas para que você forje um novo. Esse é um processo analítico de arqueologia pessoal, onde desmontamos as expectativas externas para que você construa um sistema de valores genuinamente seu.</h2><p className="text-slate-700 leading-relaxed mb-6">Se a vida perdeu o sabor e você está exausto de tentar se encaixar em um roteiro que não lhe pertence, o espaço psicoterapêutico é a forja para essa transformação. Realizo atendimentos psicológicos online para Brasil e exterior.</p>

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
