import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function CriseExistencialPilar() {
  useEffect(() => {
    document.title = 'Crise Existencial: Expansão de Consciência | Psicólogo Jorge Dias';
    
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Crise existencial como expansão de consciência. Quando a régua pronta se torna insuportável e você precisa forjar a sua própria.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link>: Expansão de Consciência
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Você chegou a um ponto onde a vida que construiu não faz mais sentido? Onde as respostas que funcionavam antes agora parecem vazias? Onde você vê múltiplas possibilidades e não consegue categorizar nenhuma delas?
          </p>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O que é <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link>?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Crise existencial não é patologia. É expansão de consciência. É o momento em que a "régua pronta" — aquela que você herdou da família, da cultura, da sociedade — se torna insuportável. Quando você percebe que não pode mais viver de acordo com pressupostos que nunca questionou.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Diferente de depressão, que é contração de consciência (você não vê nenhuma possibilidade), <Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link> é expansão (você vê muitas possibilidades e não consegue diferenciá-las). É caótico, desorientador, mas é também profundamente evolutivo.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Sinais de que Você Está em <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link>
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Você pode estar em crise existencial se:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>A vida que construiu não faz mais sentido</li>
              <li>Você questiona tudo: sua carreira, seu relacionamento, seus valores</li>
              <li>Você sente que está vivendo uma vida que não é sua</li>
              <li>Você vê múltiplas caminhos possíveis mas não consegue escolher</li>
              <li>Você sente um vazio profundo, mesmo quando tudo "deveria" estar bem</li>
              <li>Você questiona quem você realmente é, além dos papéis que desempenha</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link> vs. Depressão
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              É importante diferenciar crise existencial de depressão, pois o tratamento é muito diferente:
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Depressão</strong> é contração de consciência. Você não vê nenhuma possibilidade de caminho a sua frente. Tudo parece fechado, sem saída. É uma operação em nível inferior do contínuo humano.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong><Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link></strong> é expansão de consciência. Você vê muitas possibilidades, mas não consegue categorizá-las. É caótico porque você está operando em um nível superior de consciência, mas ainda não tem ferramentas para integrar essa nova visão.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ambas causam sofrimento. Ambas podem coexistir. Mas a resposta é diferente: depressão requer reintegração; <Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link> requer expansão e integração de novos valores.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O Processo de Evolução em Espiral
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise existencial</a></Link> é parte de um processo dialético de evolução:
            </p>
            <ol className="list-decimal list-inside text-slate-700 mb-6 space-y-3">
              <li><strong>Tese:</strong> Você vive de acordo com a "régua pronta" (valores herdados)</li>
              <li><strong>Antítese:</strong> Você questiona tudo (<Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link>)</li>
              <li><strong>Síntese:</strong> Você forja sua própria régua (valores autênticos)</li>
            </ol>
            <p className="text-slate-700 leading-relaxed mb-6">
              O importante é que você não fica na antítese. Você passa por ela. A crise é temporária, mas transformadora.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Forjando Sua Própria Régua
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Depois de questionar tudo, você precisa construir seus próprios valores. Não através de intelectualização, mas através de experiência genuína. Isso envolve:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Exploração: Experimentar diferentes formas de ser</li>
              <li>Reflexão: Questionar o que realmente ressoa com você</li>
              <li>Integração: Incorporar novos valores de forma genuína</li>
              <li>Ação: Viver de acordo com seus valores autênticos</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Artigos Relacionados Neste Cluster
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Explore diferentes aspectos da <Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <a href="/crise-existencial-aos-30-anos" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Sintomas de <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link> aos 30 Anos</h3>
                <p className="text-sm text-slate-600">Quando a vida pronta não cabe mais</p>
              </a>
              <a href="/diferenca-depressao-crise-existencial" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Diferença Entre Depressão e <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise Existencial</a></Link></h3>
                <p className="text-sm text-slate-600">Contração vs. expansão de consciência</p>
              </a>
              <a href="/vida-perde-sentido-psicologia" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">O Que Fazer Quando a Vida Perde o Sentido</h3>
                <p className="text-sm text-slate-600">Crise como oportunidade de reconstrução</p>
              </a>
              <a href="/crise-identidade-profissional" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Crise de Identidade Profissional: O Que Fazer</h3>
                <p className="text-sm text-slate-600">Quando a carreira não representa mais quem você é</p>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Próximos Passos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              <Link href="/crise-existencial"><a className="text-primary hover:underline">Crise existencial</a></Link> é um convite à evolução. Não é algo para "resolver" rapidamente, mas para atravessar conscientemente. O objetivo não é voltar ao conforto anterior, mas emergir com uma compreensão mais profunda de quem você realmente é.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Se você está atravessando uma <Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link>, considere agendar uma sessão. Juntos, podemos explorar suas questões fundamentais e ajudá-lo a forjar sua própria régua.
            </p>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-16 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Explorar Suas Questões Existenciais?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a forjar sua própria régua.
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
