import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function AnsiedadeDomingoNoite() {
  useEffect(() => {
    document.title = 'Como lidar com mãe narcisista na vida adulta: A quebra da le | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Como lidar com mãe narcisista na vida adulta: A quebra da lealdade invisível');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Como lidar com mãe narcisista na vida adulta: A quebra da lealdade invisível
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

É uma das queixas mais dolorosas e complexas que acompanho nestes meus cinco anos de prática clínica: homens e mulheres adultos, com carreiras bem-sucedidas e vidas independentes, que regridem emocionalmente e são tomados por uma culpa paralisante após cinco minutos de conversa com as próprias mães. A internet popularizou o termo "mãe narcisista", mas lidar com essa realidade na vida adulta exige muito mais do que ler listas de sintomas nas redes sociais. Exige o enfrentamento da estrutura mais arcaica e enraizada da psique humana: a necessidade de ser amado por quem nos gerou.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O teatro familiar e a inversão de papéis
A dinâmica de uma mãe com traços narcisistas não se baseia apenas no egoísmo, mas no controle absoluto da narrativa familiar. Observo no consultório que a principal "Régua Pronta" imposta por essas mães é a de que o filho existe para regular as emoções dela. Ouve-se frequentemente o discurso do sacrifício ("eu abri mão de tudo por você"), que funciona como um contrato de dívida impagável.</h2><p className="text-slate-700 leading-relaxed mb-6">Nesse cenário, ocorre uma inversão de papéis. O filho torna-se o cuidador emocional da mãe. Quando esse filho cresce e tenta estabelecer qualquer limite saudável — seja sobre o seu casamento, a sua profissão ou o seu tempo livre —, a mãe interpreta a individualidade do filho como uma agressão e um abandono. A resposta imediata é a vitimização e a punição através do silêncio ou da manipulação, gerando um atrito insustentável na vida do adulto.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A culpa como mecanismo de controle
O paciente que chega à clínica tentando entender como lidar com essa dinâmica costuma estar esgotado. A sua mente racional sabe que a relação é abusiva, mas a sua estrutura emocional está presa ao que chamo de lealdade invisível. Para a nossa psique, romper com o mandato materno soa como uma heresia.</h2><p className="text-slate-700 leading-relaxed mb-6">Essa é a fase mais difícil do tratamento. O trabalho profundo focado na <a href="/terapia/casais/padroes-familiares" className="text-blue-600 hover:underline">libertação de <Link href="/padroes-familiares"><a className="text-primary hover:underline">padrões familiares</a></Link> limitantes</a> consiste em fazer o paciente suportar a culpa de não ser o "filho perfeito" que a neurose da mãe exige. A culpa, nesse contexto, não é o sinal de que você fez algo errado; é apenas o sintoma de que você finalmente começou a existir como um indivíduo separado.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A separação necessária
Lidar com uma mãe narcisista não significa, obrigatoriamente, cortar laços de forma definitiva, mas significa matar a ilusão de que um dia ela será a mãe acolhedora que você sempre desejou. É um processo de luto. Na psicoterapia, realizamos uma Arqueologia Pessoal para desativar os botões emocionais que a sua família ainda aperta.</h2><p className="text-slate-700 leading-relaxed mb-6">Se você se sente refém das chantagens emocionais e deseja construir o <a href="/terapia/adultos/autonomia-identidade" className="text-blue-600 hover:underline">desenvolvimento de uma autonomia e identidade inabaláveis</a> que não desmoronem a cada conflito familiar, o espaço clínico é o ambiente ético para essa desconstrução. Realizo atendimentos psicológicos online para pacientes em todo o mundo e sessões presenciais no meu consultório em Presidente Epitácio - SP.</p>

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
