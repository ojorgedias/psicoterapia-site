import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function RepeticaoPadroesFamiliares() {
  useEffect(() => {
    document.title = 'Como identificar mães emocionalmente imaturas: O impacto do  | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Como identificar mães emocionalmente imaturas: O impacto do vazio afetivo na vida adulta');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Como identificar mães emocionalmente imaturas: O impacto do vazio afetivo na vida adulta
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

Observo no consultório uma dor silenciosa que paralisa adultos independentes e de grande sucesso profissional: a sensação crônica de inadequação, irritabilidade e exaustão que surge imediatamente após uma simples visita ou ligação telefônica para a casa dos pais. A nossa cultura insiste no mito de que o amor materno é sempre sábio e incondicional. No entanto, a realidade clínica nos obriga a encarar um fato duro: a maternidade biológica não garante a maturidade psicológica. Saber como identificar mães emocionalmente imaturas não é um exercício de ingratidão, mas o primeiro passo obrigatório para que o paciente adulto pare de se culpar por não conseguir ter a relação familiar idealizada que a sociedade cobra.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A inversão de papéis e a adultificação
O traço mais evidente que encontro na clínica ao analisar essas dinâmicas familiares é a inversão de papéis. Uma mãe emocionalmente imatura é incapaz de conter a própria angústia ou frustração. Ela age de forma reativa, centrada apenas em si mesma, e não possui recursos internos para acolher a dor do filho.</h2><p className="text-slate-700 leading-relaxed mb-6">O resultado? A criança percebe rapidamente que, se quiser manter a estabilidade da casa, terá que se tornar o "terapeuta" da própria mãe. O paciente cresce hipervigilante, aprendendo a ler o humor da mãe para evitar crises, enquanto as suas próprias necessidades infantis são completamente invisibilizadas. Essa criança chega à vida adulta com graves dificuldades em estabelecer limites, sofrendo frequentemente com problemas na <a href="/terapia/adultos/regulacao-emocional" className="text-blue-600 hover:underline">regulação emocional e controle da ansiedade</a> porque aprendeu que o seu único valor reside em resolver os problemas dos outros.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A superficialidade e o mecanismo da culpa
Mães imaturas não suportam a profundidade emocional. Elas fogem de conversas difíceis, invalidam a tristeza do filho e, quando confrontadas com qualquer erro, adotam o papel de vítima, utilizando a culpa como principal moeda de controle.</h2><p className="text-slate-700 leading-relaxed mb-6">O paciente adulto entra em colapso porque continua tentando ter diálogos maduros com uma mãe que opera no nível emocional de uma adolescente defensiva. Na psicoterapia, a intervenção cirúrgica que aplico é mostrar ao paciente que ele está buscando água em um poço seco. O sofrimento não vem do que a mãe faz hoje, mas da expectativa irreal do filho de que ela, milagrosamente, mude e ofereça o acolhimento que ela não possui internamente.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O luto da mãe imaginária
O tratamento exige que o paciente abandone o papel de salvador da família e viva o luto da mãe que ele desejava ter. É apenas ao desistir de consertar os pais que o indivíduo abre espaço para o <a href="/terapia/adultos/autonomia-identidade" className="text-blue-600 hover:underline">desenvolvimento de uma autonomia e identidade inabaláveis</a>.</h2><p className="text-slate-700 leading-relaxed mb-6">Se a relação com a sua família de origem está adoecendo a sua vida adulta e você deseja romper com a culpa que o paralisa, a psicoterapia é a ferramenta clínica para garantir essa diferenciação. Realizo atendimentos psicológicos online para pacientes em todo o mundo.</p>

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
