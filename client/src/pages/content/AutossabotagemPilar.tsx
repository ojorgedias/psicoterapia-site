import React, { useEffect } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { updatePageMeta } from '@/lib/seoMetadata';

export default function AutossabotagemPilar() {
  useEffect(() => {
    document.title = 'Autossabotagem: Além do Conceito | Psicólogo Jorge Dias';
    
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Entenda autossabotagem não como fraqueza, mas como lealdade invisível. Explore como padrões familiares governam seu sucesso.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Autossabotagem: Além do Conceito
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Você já notou que quando as coisas começam a dar certo, algo dentro de você sabota tudo? Não é fraqueza. Não é falta de força de vontade. É algo muito mais profundo: uma lealdade invisível que governa suas ações sem que você tenha consciência disso.
          </p>
        </section>

        {/* Main Content */}
        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O que é Autossabotagem, Realmente?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Autossabotagem não é um comportamento isolado. É uma manifestação de regras invisíveis que você internalizou, frequentemente sem perceber. Essas regras governam o que você acredita ser "permitido" para você, qual é seu "lugar" no mundo, e o que significa ser leal aos seus.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Imagine que você cresceu em uma família onde o sucesso era visto como perigoso, como algo que afastaria você do grupo. Ou onde fracasso era uma forma de permanecer conectado a alguém que sofria. Essas mensagens não eram ditas explicitamente. Você as absorveu observando, sentindo, internalizando.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Lealdades Invisíveis: O Coração da Autossabotagem
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              No fundo da autossabotagem está frequentemente uma lealdade invisível. Você sabot seu sucesso porque, em algum nível profundo, acredita que ser bem-sucedido significaria:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Abandonar alguém que você ama</li>
              <li>Trair a memória de um familiar que sofreu</li>
              <li>Violar uma regra invisível sobre "seu lugar"</li>
              <li>Tornar-se alguém que você foi ensinado a desprezar</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              A Dinâmica de Onipotência e Impotência
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Existe uma dinâmica paradoxal na autossabotagem. Por um lado, há uma crença inconsciente de que você é tão poderoso que seu sucesso destruiria alguém que você ama (onipotência). Por outro lado, há uma sensação de impotência — você não consegue controlar esses impulsos sabotadores.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Essa dinâmica cria um ciclo: você deseja sucesso, trabalha para isso, mas quando se aproxima, algo dentro de você puxa o freio. Você não consegue explicar por quê. Parece irracional. Mas não é. É perfeitamente lógico do ponto de vista das lealdades invisíveis que governam você.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Explorando Seus Padrões
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Para começar a trabalhar com autossabotagem, você precisa fazer uma arqueologia pessoal de pressupostos. Questione:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Quando você consegue sucesso, o que você sente? Culpa? Medo? Vazio?</li>
              <li>Qual seria a consequência de ser realmente bem-sucedido?</li>
              <li>Para quem seu fracasso serve? A quem você permanece leal através do fracasso?</li>
              <li>Que regra invisível você estaria violando se tivesse sucesso?</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Artigos Relacionados Neste Cluster
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Explore aspectos específicos da autossabotagem em diferentes contextos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <a href="/autossabotagem-relacionamento" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Como Parar de Me Sabotar no Relacionamento</h3>
                <p className="text-sm text-slate-600">Entenda por que você sabot relacionamentos que poderiam dar certo</p>
              </a>
              <a href="/por-que-desisto-tudo-comeco" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Por Que Eu Desisto de Tudo que Começo?</h3>
                <p className="text-sm text-slate-600">A raiz psicológica da desistência crônica</p>
              </a>
              <a href="/autossabotagem-trabalho-carreira" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Sintomas de Autossabotagem no Trabalho</h3>
                <p className="text-sm text-slate-600">Como regras invisíveis limitam sua ascensão profissional</p>
              </a>
              <a href="/diferenca-preguica-autossabotagem" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Diferença Entre Preguiça e Autossabotagem</h3>
                <p className="text-sm text-slate-600">Como distinguir impulsos instintivos de padrões inconscientes</p>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Próximos Passos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Trabalhar com autossabotagem é um processo de conscientização, não de "correção". Não se trata de eliminar o impulso sabotador, mas de compreender o que ele está tentando proteger. Quando você entende a lealdade invisível por trás do comportamento, você ganha a liberdade de escolher conscientemente.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Se você está pronto para explorar seus padrões de autossabotagem de forma mais profunda, considere agendar uma sessão de terapia. Juntos, podemos fazer uma arqueologia pessoal de seus pressupostos e descobrir as regras invisíveis que governam seu sucesso.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 text-white py-16 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Explorar Seus Padrões?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a desconstruir as regras invisíveis que governam seu sucesso.
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
