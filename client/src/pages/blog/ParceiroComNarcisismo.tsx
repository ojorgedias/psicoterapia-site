import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function ParceiroComNarcisismo() {
  useEffect(() => {
    document.title = 'Como recuperar a autoestima após relacionamento narcisista:  | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Como recuperar a autoestima após relacionamento narcisista: O resgate da própria identidade');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Como recuperar a autoestima após relacionamento narcisista: O resgate da própria identidade
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

O término de um relacionamento abusivo raramente se assemelha a um luto amoroso comum. Na minha prática clínica, observo que pacientes que conseguem sair de dinâmicas com parceiros narcisistas não chegam ao consultório apenas tristes pelo fim da relação; eles chegam com a estrutura psíquica fragmentada. A dor principal não é a saudade do outro, mas o terror de não saber mais quem se é. A recuperação da autoestima após esse tipo de violência invisível não acontece através de idas ao salão de beleza ou frases motivacionais. Trata-se de um processo clínico de reconstrução da própria capacidade de confiar na sua percepção da realidade.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A erosão da realidade e o "Gaslighting"
A característica mais destrutiva do abuso narcisista não é a ofensa direta, mas a distorção metódica da realidade, frequentemente chamada de gaslighting. Durante o relacionamento, o paciente é sistematicamente condicionado a duvidar da própria memória, dos seus sentimentos e do seu julgamento. Se ele reclama de uma atitude agressiva, ouve que "está imaginando coisas" ou que "é sensível demais".</h2><p className="text-slate-700 leading-relaxed mb-6">Com o tempo, para evitar conflitos exaustivos, o paciente terceiriza a sua bússola moral para o abusador. Ele passa a enxergar o mundo e a si mesmo através dos olhos de quem o ataca. Quando a relação termina, o sintoma mais severo é a dissonância cognitiva: o paciente está livre fisicamente, mas a sua mente continua operando sob as regras punitivas do ex-parceiro. Esse estado de alerta constante exige, num primeiro momento, um trabalho focado na <a href="/terapia/adultos/regulacao-emocional" className="text-blue-600 hover:underline">regulação emocional e controle da ansiedade</a> para retirar o sistema nervoso do estado de ameaça contínua.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O luto pelo "eu" que foi silenciado
A autoestima não é apenas gostar da própria imagem no espelho; é a convicção profunda de que os seus sentimentos e limites são válidos. Em um relacionamento narcisista, a única forma de o paciente sobreviver é anulando as próprias necessidades para alimentar a grandiosidade do outro.</h2><p className="text-slate-700 leading-relaxed mb-6">Na terapia, realizamos o luto não pelo abusador, mas pelo tempo e pela energia investidos em uma fantasia. Nós fazemos uma Arqueologia Pessoal para desenterrar os valores, os gostos e as opiniões que o paciente precisou enterrar para caber na relação. A pergunta que guia o tratamento não é "por que ele fez isso comigo?", mas sim "o que eu preciso fazer para voltar a habitar a minha própria vida?".</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A retomada da agência pessoal
Recuperar a identidade após o abuso é voltar a ser o autor do próprio roteiro. O objetivo da psicoterapia é o <a href="/terapia/adultos/autonomia-identidade" className="text-blue-600 hover:underline">desenvolvimento de uma autonomia e identidade inabaláveis</a>, blindando a sua estrutura psíquica para que esse padrão nunca mais se repita. Se você está exausto de duvidar de si mesmo e deseja reconstruir a sua bússola interna, a intervenção clínica é o espaço seguro para isso. Realizo atendimentos psicológicos online em nível global.</h2>

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
