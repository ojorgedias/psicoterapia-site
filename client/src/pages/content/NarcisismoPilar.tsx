import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function NarcisismoPilar() {
  useEffect(() => {
    document.title = 'Narcisismo: Compreensão e Libertação | Psicoterapeuta Jorge Dias';
    
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Entenda narcisismo não como maldade, mas como defesa contra vulnerabilidade. Explore padrões, relacionamentos e caminhos para libertação.');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Narcisismo: Compreensão e Libertação
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Você está em um relacionamento com alguém que parece incapaz de empatia? Que precisa constantemente de admiração? Que manipula para manter controle? Ou você reconhece esses traços em si mesmo?
          </p>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              O que é Narcisismo, Realmente?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Narcisismo não é maldade. Não é simplesmente "falta de empatia". É uma estrutura defensiva contra vulnerabilidade profunda. A pessoa narcisista construiu uma fortaleza ao redor de um núcleo frágil.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Frequentemente, narcisismo é uma resposta a traumas relacionais precoces: negligência emocional, rejeição, ou uma mãe que usava o filho para suas próprias necessidades emocionais. A criança aprendeu que a única forma de ser vista era ser perfeita, ser admirável, ser especial.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Narcisismo vs. Egoísmo
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              É importante diferenciar narcisismo de egoísmo simples:
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Egoísmo</strong> é uma operação em nível inferior do Contínuo Humano. A pessoa quer satisfazer seus desejos, mas pode reconhecer os desejos dos outros. Pode ser educada.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Narcisismo</strong> é uma estrutura defensiva mais profunda. A pessoa não consegue reconhecer os outros como seres separados com necessidades próprias. Os outros existem apenas como extensões de si mesma ou como ferramentas para validação.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Narcisismo Óbvio vs. Encoberto
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Existem duas formas principais de narcisismo:
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Narcisismo Óbvio:</strong> Grandiosidade aberta, necessidade constante de admiração, falta de empatia óbvia. Mais fácil de identificar.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Narcisismo Encoberto:</strong> Aparência de humildade, mas com expectativas de admiração disfarçadas. Manipulação sutil. Vitimização. Muito mais difícil de identificar porque a pessoa parece "sensível".
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Dinâmicas em Relacionamentos Narcisistas
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Se você está em um relacionamento com alguém narcisista, você provavelmente reconhece esses padrões:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Sua realidade é constantemente questionada (gaslighting)</li>
              <li>Você é responsabilizado pelos sentimentos da outra pessoa</li>
              <li>Seus sucessos são minimizados ou apropriados</li>
              <li>Você se sente constantemente inadequado</li>
              <li>Há ciclos de idealização e devalorização</li>
              <li>Você se vê constantemente tentando "provar seu valor"</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">Lealdades Invisíveis</Link> e Narcisismo
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Frequentemente, pessoas que se relacionam com narcisistas têm lealdades invisíveis:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Lealdade a um parental narcisista (repetição de padrão)</li>
              <li>Crença de que "amor verdadeiro" significa tolerância ilimitada</li>
              <li>Crença de que você pode "consertar" a outra pessoa</li>
              <li>Crença de que seu valor está em ser útil/necessário</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Caminhos para Libertação
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Se você está em um relacionamento narcisista, libertação envolve:
            </p>
            <ol className="list-decimal list-inside text-slate-700 mb-6 space-y-3">
              <li><strong>Reconhecimento:</strong> Identificar o padrão narcisista</li>
              <li><strong>Responsabilidade:</strong> Entender sua lealdade invisível (por que você aceitou isso?)</li>
              <li><strong>Estabelecimento de Limites:</strong> Dizer "não" sem culpa</li>
              <li><strong>Separação:</strong> Física ou emocional, dependendo da situação</li>
              <li><strong>Recuperação:</strong> Reconstruir sua autoestima e valores autênticos</li>
            </ol>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Se Você Reconhece Traços Narcisistas em Si Mesmo
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Se você reconhece traços narcisistas em si mesmo, é importante saber que isso não é uma sentença. Narcisismo é uma estrutura defensiva que pode ser trabalhada.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              O trabalho envolve:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-3">
              <li>Explorar o trauma ou negligência que criou a necessidade de defesa</li>
              <li>Desenvolver capacidade de empatia genuína</li>
              <li>Questionar a necessidade de admiração constante</li>
              <li>Integrar vulnerabilidade como força, não fraqueza</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Artigos Relacionados Neste Cluster
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Explore diferentes aspectos do narcisismo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <a href="/mae-narcisista-vida-adulta" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Como Lidar com Mãe Narcisista na Vida Adulta</h3>
                <p className="text-sm text-slate-600"><Link href="/padroes-familiares" className="text-primary hover:underline">Padrões familiares</Link> e <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">lealdades invisíveis</Link></p>
              </a>
              <a href="/sinais-parceiro-narcisismo-oculto" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Sinais de Parceiro com Traços de Narcisismo Oculto</h3>
                <p className="text-sm text-slate-600">Identificando padrões sutis</p>
              </a>
              <a href="/recuperar-autoestima-relacionamento-narcisista" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Como Recuperar Autoestima Após Relacionamento Narcisista</h3>
                <p className="text-sm text-slate-600">Reconstrução de valores autênticos</p>
              </a>
              <a href="/diferenca-egoismo-narcisismo" className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow block">
                <h3 className="font-bold text-slate-900 mb-2">Diferença Entre Egoísmo e Transtorno de Personalidade Narcisista</h3>
                <p className="text-sm text-slate-600">Compreensão clínica e compaixão</p>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Próximos Passos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Trabalhar com narcisismo — seja em um relacionamento ou em si mesmo — requer compreensão profunda e compaixão. Não é sobre julgamento, mas sobre libertação genuína.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Se você está pronto para explorar suas dinâmicas narcisistas, considere agendar uma sessão. Juntos, podemos trabalhar com as <Link href="/terapia/casais/padroes-familiares" className="text-primary hover:underline">lealdades invisíveis</Link> e construir relacionamentos mais autênticos.
            </p>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-16 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Explorar Dinâmicas Narcisistas?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a trabalhar com narcisismo de forma genuína.
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
