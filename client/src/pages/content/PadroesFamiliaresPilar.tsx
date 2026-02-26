import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';

export default function PadroesFamiliaresPilar() {
  useEffect(() => {
    document.title = 'Padrões Familiares: Libertação e Integração | Psicólogo Jorge Dias';
    
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Entenda como estruturas familiares continuam governando seu comportamento. Explore lealdades invisíveis, padrões repetidos e caminhos para libertação genuína.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            <Link href="/padroes-familiares" className="text-primary hover:underline">Padrões Familiares</Link>: Libertação e Integração
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Você já percebeu que repete os mesmos padrões relacionais que viu na sua família? Que escolhe parceiros que replicam dinâmicas antigas? Que sente uma lealdade invisível que o prende a comportamentos que não quer mais?
          </p>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O que São <Link href="/padroes-familiares" className="text-primary hover:underline">Padrões Familiares</Link>?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Padrões familiares não são apenas comportamentos que você observou. São estruturas entrelaçadas com o social, com <Link href="/conceitos-fundamentais" className="text-primary hover:underline">regras invisíveis</Link> que governam como você se relaciona, como você trabalha, como você ama. Eles são tão naturalizados que você frequentemente nem percebe que está vivendo dentro deles.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Sua família não disse "você deve escolher parceiros que te desprezem". Mas você aprendeu, através de observação e absorção, que relacionamentos envolvem desprezo. Sua mãe não disse "você deve trabalhar até o esgotamento". Mas você absorveu que trabalho é sacrifício, que descanso é preguiça.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">Lealdades Invisíveis</Link>: O Coração do Padrão
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              No fundo de todo padrão familiar está uma lealdade invisível. Você repete padrões não porque "gosta" deles, mas porque em algum nível profundo, acredita que repetir é uma forma de permanecer conectado, de honrar, de ser leal.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Essa lealdade pode ser:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Lealdade ao sofrimento de um parental (repetir para permanecer próximo)</li>
              <li>Lealdade à identidade familiar (ser "o fracassado", "o responsável", "o problema")</li>
              <li>Lealdade a um pacto invisível ("se você for feliz, eu fico sozinho")</li>
              <li>Lealdade a uma missão não dita ("você deve consertar o que eu não consegui")</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Como os Padrões se Manifestam
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Os <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link> se manifestam em diferentes contextos da vida adulta:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li><strong>Relacionamentos amorosos:</strong> Você escolhe parceiros que replicam dinâmicas familiares</li>
              <li><strong>Trabalho:</strong> Você reproduz hierarquias e dinâmicas de poder que viu em casa</li>
              <li><strong>Amizades:</strong> Você assume papéis que aprendeu (cuidador, vítima, mediador)</li>
              <li><strong>Autocuidado:</strong> Você negligencia a si mesmo da mesma forma que viu ser negligenciado</li>
              <li><strong>Decisões importantes:</strong> Você escolhe caminhos que honram a família, não a si mesmo</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O Processo de Libertação
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Libertação de <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link> não significa rejeição. Significa conscientização, compreensão e, eventualmente, escolha genuína.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              O processo envolve:
            </p>
            <ol className="list-decimal list-inside text-slate-700 mb-6 space-y-3">
              <li><strong>Conscientização:</strong> Reconhecer o padrão que você está vivendo</li>
              <li><strong>Contextualização:</strong> Entender por que esse padrão fazia sentido no contexto familiar</li>
              <li><strong>Compaixão:</strong> Desenvolver compaixão por você mesmo e por sua família</li>
              <li><strong>Reavaliação:</strong> Questionar se esse padrão ainda serve você</li>
              <li><strong>Experimentação:</strong> Tentar novas formas de ser e relacionar</li>
              <li><strong>Integração:</strong> Incorporar novos padrões de forma genuína</li>
              <li><strong>Renegociação:</strong> Renegociar relacionamentos familiares a partir de um novo lugar</li>
            </ol>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Explorando Seus Padrões
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Para começar a trabalhar com <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link>, faça uma arqueologia pessoal:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Qual padrão você repete em relacionamentos?</li>
              <li>Como esse padrão aparecia na sua família de origem?</li>
              <li>Para quem você permanece leal ao repetir esse padrão?</li>
              <li>O que você teme que aconteça se você quebrar esse padrão?</li>
              <li>Qual seria a consequência para sua família se você mudasse?</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Artigos Relacionados Neste Cluster
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Explore aspectos específicos dos <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <a href="/como-quebrar-ciclos-familiares-toxicos" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Como Quebrar Ciclos Familiares Tóxicos</h3>
                <p className="text-sm text-slate-600">O processo de 7 passos para libertação genuína</p>
              </a>
              <a href="/culpa-afastar-familia" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Sentimento de Culpa ao Se Afastar da Família</h3>
                <p className="text-sm text-slate-600">Diferença entre responsabilidade genuína e lealdade inconsciente</p>
              </a>
              <a href="/repeticao-padroes-relacionamentos" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Repetição de Padrões em Relacionamentos Amorosos</h3>
                <p className="text-sm text-slate-600">Por que você escolhe parceiros que replicam dinâmicas familiares</p>
              </a>
              <a href="/maes-emocionalmente-imaturas" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Como Identificar Mães Emocionalmente Imaturas</h3>
                <p className="text-sm text-slate-600">Reconhecer padrões sem culpabilização</p>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Próximos Passos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Trabalhar com <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link> é um processo de desconstrução e reconstrução. Não se trata de rejeitar sua família, mas de recuperar sua agência pessoal. De questionar quais padrões você quer manter e quais você quer transformar.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Se você está pronto para explorar seus <Link href="/padroes-familiares" className="text-primary hover:underline">padrões familiares</Link> de forma mais profunda, considere agendar uma sessão. Juntos, podemos fazer uma arqueologia pessoal de suas <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">lealdades invisíveis</Link> e descobrir novos caminhos.
            </p>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-16 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Explorar Seus Padrões?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a desconstruir as <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">lealdades invisíveis</Link> que governam suas escolhas.
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
