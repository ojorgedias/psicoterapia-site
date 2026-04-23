import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function TerapiaOnlineAnsiedade() {
  useEffect(() => {
    document.title = 'Terapia Online para Ansiedade: Acesso e Eficácia no Cuidado Moderno | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Explore a eficácia e a conveniência da terapia online como ferramenta essencial no tratamento da ansiedade.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Terapia Online para Ansiedade: Acesso e Eficácia no Cuidado Moderno
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              A ansiedade, em suas diversas manifestações, tornou-se uma das condições psicológicas mais prevalentes na sociedade contemporânea. Em meio a rotinas aceleradas e demandas crescentes, a busca por apoio terapêutico eficaz e acessível é fundamental. A terapia online emerge como uma solução promissora, oferecendo um caminho flexível e seguro para o manejo e tratamento dos transtornos de ansiedade.
            </p>

            <h2>A Ascensão da Terapia Online</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Nos últimos anos, a terapia online deixou de ser uma alternativa secundária para se consolidar como uma modalidade de tratamento primária e altamente eficaz. A conveniência de realizar sessões do conforto do lar, sem o deslocamento e a rigidez de horários, remove barreiras significativas que muitas vezes impedem indivíduos ansiosos de buscar ajuda. Para quem lida com ansiedade social ou ataques de pânico, a segurança do ambiente familiar pode ser um fator decisivo para iniciar e manter o tratamento.
            </p>

            <h2>Eficácia Comprovada no Tratamento da Ansiedade</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Estudos e meta-análises têm consistentemente demonstrado que a terapia online é tão eficaz quanto a terapia presencial para uma vasta gama de transtornos de ansiedade, incluindo Transtorno de Ansiedade Generalizada (TAG), Transtorno do Pânico, Fobia Social e Transtorno Obsessivo-Compulsivo (TOC). Abordagens como a Terapia Cognitivo-Comportamental (TCC), amplamente utilizada no tratamento da ansiedade, adaptam-se perfeitamente ao formato online, com ferramentas interativas e recursos digitais que potencializam o processo terapêutico.
            </p>

            <h2>Benefícios Adicionais da Terapia Online para Ansiedade</h2>
            <ul>
              <li><strong>Acessibilidade:</strong> Permite que pessoas em áreas remotas ou com dificuldades de mobilidade acessem especialistas.</li>
              <li><strong>Flexibilidade:</strong> Facilita a conciliação do tratamento com compromissos profissionais e pessoais.</li>
              <li><strong>Conforto e Segurança:</strong> O ambiente familiar reduz a ansiedade associada a novos ambientes e deslocamentos.</li>
              <li><strong>Continuidade do Cuidado:</strong> Ideal para quem viaja frequentemente ou tem horários irregulares.</li>
              <li><strong>Anonimato e Redução do Estigma:</strong> Para alguns, a modalidade online oferece maior privacidade, incentivando a busca por ajuda.</li>
            </ul>

            <h2>Considerações Importantes</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Embora a terapia online ofereça inúmeros benefícios, é crucial escolher um profissional qualificado e com experiência na modalidade. A conexão estável com a internet e um espaço privado para as sessões são pré-requisitos para garantir a qualidade do atendimento. O psicoterapeuta Jorge Dias oferece atendimento online especializado, combinando a profundidade da abordagem clínica com a conveniência da plataforma digital, para auxiliar no manejo e superação da ansiedade.
            </p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li>Compreendendo a Ansiedade</li>
                <li>Lidando com Ataques de Pânico</li>
                <li>Superando a Fobia Social</li>
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
            <a href="https://wa.me/5541985155583?text=Olá, estava lendo o artigo sobre Terapia Online para Ansiedade e gostaria de agendar uma sessão." className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
              Agendar Sessão via WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
