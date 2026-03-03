import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function RecuperarAutoestima() {
  useEffect(() => {
    document.title = 'Recuperar a Autoestima: Um Caminho para a Autenticidade e o Bem-Estar | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Descubra como reconstruir sua autoestima, superando a autocrítica e cultivando um senso de valor próprio.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Recuperar a Autoestima: Um Caminho para a Autenticidade e o Bem-Estar
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              A autoestima é a base sobre a qual construímos nossa percepção de valor pessoal, nossa capacidade de enfrentar desafios e de nos relacionarmos de forma saudável com o mundo. Quando a autoestima está abalada, sentimos um vazio, uma insegurança constante que permeia todas as áreas da vida. Recuperá-la não é um processo linear, mas uma jornada de autoconhecimento, aceitação e construção de uma relação mais gentil e autêntica consigo mesmo.
            </p>

            <h2>O Que Abala a Autoestima?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Diversos fatores podem contribuir para a baixa autoestima. Experiências de infância, como críticas constantes, falta de validação ou negligência emocional, podem criar crenças limitantes sobre o próprio valor. Relacionamentos abusivos, fracassos percebidos, comparações sociais e a pressão por padrões de perfeição inatingíveis também corroem a autoimagem. Frequentemente, a baixa autoestima se manifesta como um crítico interno implacável, que sabota conquistas e impede o florescimento pessoal.
            </p>

            <h2>Sinais de Baixa Autoestima:</h2>
            <ul>
              <li>Dificuldade em aceitar elogios e reconhecer suas qualidades.</li>
              <li>Medo excessivo de errar e de ser julgado.</li>
              <li>Procrastinação e dificuldade em iniciar novos projetos.</li>
              <li>Busca constante por aprovação externa.</li>
              <li>Comparação frequente com outras pessoas, sentindo-se inferior.</li>
              <li>Dificuldade em estabelecer limites e dizer "não".</li>
              <li>Sentimentos de culpa, vergonha ou inadequação.</li>
            </ul>

            <h2>O Caminho para a Recuperação da Autoestima</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Recuperar a autoestima é um trabalho interno que exige paciência, autocompaixão e, muitas vezes, apoio profissional. É um processo de desconstrução de velhas crenças e construção de novas narrativas sobre quem você é e o que você merece. Algumas estratégias incluem:
            </p>
            <ul>
              <li><strong>Autoconhecimento:</strong> Identificar a origem das crenças negativas e como elas afetam seu comportamento.</li>
              <li><strong>Autocompaixão:</strong> Tratar-se com a mesma gentileza e compreensão que você ofereceria a um amigo.</li>
              <li><strong>Estabelecimento de Limites:</strong> Aprender a proteger seu espaço emocional e físico, comunicando suas necessidades.</li>
              <li><strong>Celebração de Pequenas Conquistas:</strong> Reconhecer e valorizar seus esforços e progressos, por menores que sejam.</li>
              <li><strong>Desafio de Pensamentos Negativos:</strong> Questionar o crítico interno e substituí-lo por pensamentos mais realistas e positivos.</li>
              <li><strong>Cuidado Pessoal:</strong> Priorizar atividades que promovam seu bem-estar físico e mental.</li>
            </ul>

            <h2>Quando Procurar Ajuda Profissional</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Se a baixa autoestima está impactando significativamente sua qualidade de vida, seus relacionamentos ou sua capacidade de funcionar no dia a dia, a psicoterapia pode ser um recurso valioso. Um psicólogo pode ajudar a explorar as raízes profundas desses sentimentos, desenvolver estratégias eficazes de enfrentamento e construir uma autoestima sólida e duradoura. O psicólogo Jorge Dias oferece um espaço seguro e acolhedor para essa jornada de transformação, auxiliando você a redescobrir seu valor e potencial.
            </p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li>Autossabotagem: Entendendo os Ciclos que nos Prendem</li>
                <li>Síndrome do Impostor: Quando o Sucesso Não é Suficiente</li>
                <li>A Arte de Dizer Não: Construindo Limites Saudáveis</li>
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
            <a href="https://wa.me/5541985155583?text=Olá, estava lendo o artigo sobre Recuperar a Autoestima e gostaria de agendar uma sessão." className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
              Agendar Sessão via WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
