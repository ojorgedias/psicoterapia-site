import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function QuebrarCiclosFamiliares() {
  useEffect(() => {
    document.title = 'Sentimento de culpa ao se afastar da família: Quando o limit | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Sentimento de culpa ao se afastar da família: Quando o limite é a única cura');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Sentimento de culpa ao se afastar da família: Quando o limite é a única cura
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

"Eu sei que eles me fazem mal, sei que eu preciso me afastar, mas a culpa está me corroendo". Essa é a frase que marca o início do processo de individuação de grande parte dos meus pacientes. A sociedade ocidental idolatra a instituição familiar, impondo a ideia de que os laços de sangue devem suportar qualquer nível de abuso. Quando um adulto toma a difícil decisão de estabelecer limites severos ou cortar o contato com pais, irmãos ou familiares adoecidos, ele não encontra apoio social; ele encontra julgamento. O que observo no consultório é que o sentimento de culpa ao se afastar da família não é o sinal de que você cometeu um crime, mas o sintoma mais claro de que você finalmente começou a existir como um indivíduo separado.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A culpa como mecanismo de controle
Em famílias com dinâmicas disfuncionais ou traços narcisistas, a culpa é a principal moeda de troca e o maior instrumento de controle. Quando o sistema não consegue mais dominar você pelo medo ou pela dependência financeira, ele apelará para o seu senso de obrigação moral. Frases como "depois de tudo que eu fiz por você" ou "eu não vou durar para sempre" são armadilhas arquitetadas para paralisar a sua agência pessoal.</h2><p className="text-slate-700 leading-relaxed mb-6">Na clínica, costumo intervir diretamente nessa confusão: a culpa que o paciente sente não é uma culpa real (gerada por ter causado dano intencional a alguém). É uma culpa neurótica. Ela surge porque você está desobedecendo a uma regra invisível que dizia que o seu papel no mundo era ser o amortecedor emocional dos seus pais.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O luto da família idealizada
A resistência em manter o distanciamento raramente é sobre o amor pela família real que o paciente tem. É sobre o luto pela família idealizada que ele nunca teve e percebeu que nunca terá. Voltar para o ambiente abusivo é uma forma de autossabotagem e padrões de repetição [Instrução para a Manus IA: Transformar o trecho "autossabotagem e padrões de repetição" em um link interno hiperlinkado para a página de Serviço sobre Autossabotagem do Cluster 1], alimentada pela esperança infantil de que, se você ceder mais uma vez, eles finalmente o amarão como você merece.</h2><p className="text-slate-700 leading-relaxed mb-6">Para suportar o distanciamento, o paciente precisa adotar o "manto da ignorância" e suspender a sua necessidade de ter razão ou de fazer os familiares entenderem os seus motivos. Eles provavelmente nunca entenderão, e a maturidade exige que você fique em paz com essa incompletude.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A travessia para a saúde mental
O distanciamento físico ou emocional de familiares não é um ato de vingança, mas um ato de preservação estrutural. É impossível curar-se no mesmo ambiente que o adoeceu. O espaço terapêutico existe para ajudar você a tolerar a culpa até que ela perca a força, permitindo que a sua identidade floresça sem o peso do adoecimento alheio.</h2><p className="text-slate-700 leading-relaxed mb-6">Se a convivência familiar está custando a sua saúde mental e você precisa de um acompanhamento ético para sustentar os seus limites, a psicoterapia de profundidade é o caminho seguro. Ofereço atendimento psicológico online em nível global e sessões presenciais em Presidente Epitácio - SP.</p>

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
