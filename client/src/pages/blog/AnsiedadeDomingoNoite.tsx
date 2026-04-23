import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function AnsiedadeDomingoNoite() {
  useEffect(() => {
    document.title = 'Ansiedade de domingo à noite: Como lidar com a angústia que antecipa a semana | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Ansiedade de domingo à noite: Como lidar com a angústia que antecipa a semana');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Ansiedade de domingo à noite: Como lidar com a angústia que antecipa a semana
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              A transição do fim de semana para a semana de trabalho pode ser um gatilho para muitas pessoas, manifestando-se como a conhecida "ansiedade de domingo à noite". Essa sensação de angústia, apreensão e até mesmo pânico que surge no final do domingo não é apenas um cansaço pós-lazer, mas um sintoma de um desajuste mais profundo entre as expectativas e a realidade da vida cotidiana. Compreender suas raízes e desenvolver estratégias eficazes é crucial para recuperar a tranquilidade e o bem-estar.
            </p>

            <h2>O Fenômeno da Ansiedade de Domingo à Noite</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              A ansiedade de domingo à noite é caracterizada por uma série de sintomas físicos e emocionais que surgem à medida que o fim de semana se aproxima do fim. Pode incluir insônia, irritabilidade, taquicardia, dificuldade de concentração, preocupações excessivas com o trabalho ou compromissos futuros, e uma sensação geral de desânimo. Este fenômeno é um reflexo da pressão moderna por produtividade e da dificuldade em desconectar-se das demandas profissionais, mesmo durante o período de descanso.
            </p>

            <h2>Causas Subjacentes</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              As causas da ansiedade de domingo à noite são multifacetadas. Podem estar relacionadas a um ambiente de trabalho estressante, insatisfação profissional, sobrecarga de tarefas, ou mesmo a um desequilíbrio entre vida pessoal e profissional. Para alguns, a ansiedade pode ser um sinal de que a vida profissional exige uma "performance" que se distancia muito do "eu autêntico", gerando um atrito psíquico significativo. A antecipação de conflitos, prazos apertados ou a simples rotina monótona podem alimentar essa angústia.
            </p>

            <h2>Estratégias para Lidar com a Ansiedade de Domingo à Noite</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Lidar com a ansiedade de domingo à noite exige uma abordagem consciente e proativa. Algumas estratégias eficazes incluem:
            </p>
            <ul>
              <li><strong>Planejamento Antecipado:</strong> Organizar as tarefas da semana na sexta-feira pode reduzir a sensação de sobrecarga.</li>
              <li><strong>Desconexão Digital:</strong> Estabelecer limites para o uso de dispositivos eletrônicos e e-mails de trabalho no fim de semana.</li>
              <li><strong>Atividades Relaxantes:</strong> Dedicar o domingo a atividades que promovam relaxamento e bem-estar, como leitura, exercícios físicos leves ou hobbies.</li>
              <li><strong>Rotina de Sono:</strong> Manter um horário de sono regular, mesmo nos fins de semana, para evitar desregulação do ciclo circadiano.</li>
              <li><strong>Reflexão e Autoconhecimento:</strong> Questionar as causas da ansiedade e identificar padrões de pensamento negativos.</li>
              <li><strong>Técnicas de Mindfulness e Meditação:</strong> Práticas que ajudam a focar no presente e a reduzir a ruminação mental.</li>
            </ul>

            <h2>Quando Procurar Ajuda Profissional</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Se a ansiedade de domingo à noite é persistente, intensa e interfere significativamente na sua qualidade de vida, buscar apoio psicológico é fundamental. A terapia pode ajudar a identificar as raízes mais profundas da ansiedade, desenvolver mecanismos de enfrentamento saudáveis e construir uma vida mais equilibrada e satisfatória. O psicoterapeuta Jorge Dias oferece um espaço de acolhimento e ferramentas para transformar a angústia em autoconhecimento e resiliência.
            </p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li>Compreendendo a Ansiedade</li>
                <li>Burnout Digital: Esgotamento na Era Conectada</li>
                <li>Gerenciamento de Estresse: Estratégias para o Equilíbrio</li>
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
            <a href="https://wa.me/5541985155583?text=Olá, estava lendo o artigo sobre Ansiedade de domingo à noite e gostaria de agendar uma sessão." className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
              Agendar Sessão via WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
