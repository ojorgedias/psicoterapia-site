import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function AtaquePanico() {
  useEffect(() => {
    document.title = 'Sintomas físicos de ansiedade que parecem infarto: O corpo g | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Sintomas físicos de ansiedade que parecem infarto: O corpo gritando o que a mente cala');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Sintomas físicos de <Link href="/ansiedade"><a className="text-primary hover:underline">ansiedade</a></Link> que parecem infarto: O corpo gritando o que a mente cala
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

Uma das queixas mais aterrorizantes e frequentes que recebo no consultório é a de pacientes que foram parar na emergência de um hospital com dor no peito, dormência no braço esquerdo, falta de ar severa e a certeza absoluta de que iriam morrer. Após uma bateria de exames cardiológicos, o médico os dispensa com a frase: "Você não tem nada no coração, é apenas ansiedade". Para o paciente, esse diagnóstico costuma soar como se a sua dor estivesse sendo invalidada. No entanto, na prática clínica da psicologia de profundidade, sabemos que esses sintomas físicos de ansiedade que parecem um infarto são brutalmente reais. O seu corpo não está imaginando a dor; ele está reagindo a um colapso psíquico invisível.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A fisiologia do terror invisível
Para entender por que uma emoção pode simular um ataque cardíaco, precisamos compreender como o nosso sistema nervoso autônomo opera.
Quando a sua mente racional passa meses ou anos ignorando um sofrimento profundo — seja um casamento insustentável, um ambiente de trabalho abusivo ou a supressão da sua própria identidade —, a sua psique entra num estado de tensão extrema.</h2><p className="text-slate-700 leading-relaxed mb-6">Como a razão se recusa a resolver o conflito, a sua estrutura instintiva assume o controle. O cérebro dispara uma carga maciça de adrenalina e cortisol na sua corrente sanguínea, preparando o seu corpo para lutar ou fugir de um perigo letal. O coração acelera para bombear sangue para os músculos, a respiração fica curta e os vasos sanguíneos se contraem. O seu corpo está, literalmente, se preparando para sobreviver a um ataque físico. A dor no peito é a contração real da musculatura intercostal sob estresse extremo. O perigo pode não ser um infarto, mas o alarme biológico é idêntico.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O perigo de silenciar o alarme
O erro mais grave que observo após um episódio de ataque de pânico é a tentativa exclusiva de silenciá-lo com medicação, sem investigar a sua origem. O remédio pode abaixar a frequência cardíaca, mas não resolve a guerra interna que acionou o alarme.</h2><p className="text-slate-700 leading-relaxed mb-6">Quando o corpo chega ao ponto de simular a morte para obrigá-lo a parar, é um sinal irrefutável de que a sua forma de viver esgotou a própria sustentabilidade. É nesse momento que torna-se uma questão de urgência vital. O trabalho psicoterapêutico focado na <Link href="/ansiedade"><a className="text-primary hover:underline">regulação emocional e controle da ansiedade</a></Link> torna-se uma questão de urgência vital.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A retomada da consciência corporal
Na clínica, o trabalho não consiste em ensinar você a lutar contra o seu corpo, mas a escutá-lo. O sintoma físico extremo é a última fronteira da sua intuição implorando por uma mudança de rota.</h2><p className="text-slate-700 leading-relaxed mb-6">Aprender a decodificar essa tensão antes que ela se transforme em um ataque de pânico exige a mediação de um profissional treinado e ético. Se o medo de ter uma nova crise está limitando a sua vida, a psicoterapia é o espaço seguro para desarmar esse gatilho. Realizo atendimentos psicológicos online para pacientes em todo o mundo e sessões presenciais no meu consultório em Presidente Epitácio - SP.</p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li><a href="//autossabotagem" className="text-blue-600 hover:underline">Autossabotagem: Além do Conceito</a></li>
                <li><a href="/padroes-familiares" className="text-blue-600 hover:underline"><Link href="/padroes-familiares"><a className="text-primary hover:underline">Padrões Familiares</a></Link>: Libertação e Integração</a></li>
                <li><a href="/crise-existencial" className="text-blue-600 hover:underline"><Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link>: Expansão de Consciência</a></li>
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
