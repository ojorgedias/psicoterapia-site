import React, { useEffect } from 'react';
import { updatePageMeta } from '@/lib/seoMetadata';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function AnsiedadePilar() {
  useEffect(() => {
    updatePageMeta('ansiedadepilar');
  }, []);

  useEffect(() => {
    document.title = 'Ansiedade: Do Mamute Interior à Integração | Psicólogo Jorge Dias';
    
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Entenda ansiedade não como doença, mas como ativação do Mamute Interior. Explore integração entre corpo, mente e intuição.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Ansiedade: Do <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> à Integração
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Seu coração bate acelerado. Você sente falta de ar. Seus músculos ficam tensos. Você "sabe" que algo ruim vai acontecer, mas não consegue identificar o quê. Bem-vindo ao Mamute Interior.
          </p>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link>: Entendendo a Ansiedade
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ansiedade não é um problema moderno. É um mecanismo ancestral. Imagine um mamute aproximando-se de seus ancestrais. O corpo precisa estar pronto para lutar ou fugir. Esse sistema de alerta é o Mamute Interior.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              O problema é que seu <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> está ativado por ameaças que não são físicas: julgamento social, incerteza, perda de controle. Seu corpo reage como se um mamute real estivesse vindo, mas a ameaça é psicológica.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Ansiedade e o Contínuo Humano
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ansiedade é uma manifestação de desconexão entre diferentes níveis do Contínuo Humano:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li><strong>Carro (Corpo):</strong> Está ativado, pronto para ação</li>
              <li><strong>Motorista (Mente):</strong> Está em pânico, tentando controlar</li>
              <li><strong>GPS (Intuição):</strong> Está silenciado, não consegue orientar</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-6">
              Quando esses três níveis não estão integrados, você sente ansiedade. O corpo quer agir, a mente quer controlar, e a intuição não consegue orientar.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              <Link href="/conceitos-fundamentais" className="text-primary hover:underline">Regras Invisíveis</Link> e Ansiedade
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Frequentemente, ansiedade é ativada por regras invisíveis. Você sente ansiedade de domingo à noite porque uma regra invisível diz "você deve estar preparado para a semana". Você sente ansiedade em situações sociais porque uma regra invisível diz "você será julgado".
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Essas regras são tão naturalizadas que você nem percebe que está vivendo dentro delas. Você apenas sente o <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> sendo ativado.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Sintomas Físicos de Ansiedade
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ansiedade se manifesta de formas muito reais no corpo:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Taquicardia (coração acelerado)</li>
              <li>Falta de ar ou respiração superficial</li>
              <li>Tremores ou tensão muscular</li>
              <li>Suor excessivo</li>
              <li>Sensação de formigamento</li>
              <li>Dor no peito</li>
              <li>Sensação de desrealização</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Integração: O Caminho para Além da Ansiedade
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Trabalhar com ansiedade não é "eliminar" o <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link>. É integrar. É criar diálogo entre o corpo, a mente e a intuição.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Isso envolve:
            </p>
            <ol className="list-decimal list-inside text-slate-700 mb-6 space-y-3">
              <li><strong>Reconhecer o Mamute:</strong> Perceber quando está ativado</li>
              <li><strong>Questionar a Ameaça:</strong> É realmente um mamute ou é uma regra invisível?</li>
              <li><strong>Dialogar com o Corpo:</strong> Ouvir o que o corpo está tentando comunicar</li>
              <li><strong>Ativar a Intuição:</strong> Conectar com o GPS para orientação genuína</li>
              <li><strong>Integrar:</strong> Criar harmonia entre os três níveis</li>
            </ol>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Ansiedade vs. Intuição
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Uma confusão comum é entre ansiedade e intuição. Ambas são sensações corporais, mas vêm de lugares diferentes:
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Ansiedade</strong> é o <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> em pânico. É reativa, descontrolada, baseada em ameaças imaginadas.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Intuição</strong> é o GPS funcionando. É orientadora, clara, baseada em sabedoria profunda.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Artigos Relacionados Neste Cluster
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Explore diferentes aspectos da ansiedade:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <a href="/sintomas-fisicos-ansiedade-infarto" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Sintomas Físicos de Ansiedade que Parecem Infarto</h3>
                <p className="text-sm text-slate-600">Entendendo a ativação do <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link></p>
              </a>
              <a href="/ansiedade-domingo-noite" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Ansiedade de Domingo à Noite: Como Lidar</h3>
                <p className="text-sm text-slate-600"><Link href="/conceitos-fundamentais" className="text-primary hover:underline">Regras invisíveis</Link> e obrigação</p>
              </a>
              <a href="/crise-ansiedade-forte-sozinho" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Como Acalmar Crise de Ansiedade Forte Sozinho</h3>
                <p className="text-sm text-slate-600">Técnicas de integração corpo-mente</p>
              </a>
              <a href="/terapia-online-ansiedade-generalizada" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Terapia Online para Ansiedade Generalizada Funciona?</h3>
                <p className="text-sm text-slate-600">Reintegração através da terapia</p>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Próximos Passos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Trabalhar com ansiedade é um processo de integração, não de eliminação. O <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> sempre estará lá — é parte de você. O objetivo é aprender a dialogar com ele, a entender quando está realmente em perigo e quando está respondendo a ameaças imaginárias.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Se você está lutando com ansiedade, considere agendar uma sessão. Juntos, podemos explorar suas <Link href="/conceitos-fundamentais" className="text-primary hover:underline">regras invisíveis</Link> e aprender a integrar o <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> com o resto de você.
            </p>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-16 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Integrar Seu <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link>?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a trabalhar com ansiedade de forma genuína.
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
