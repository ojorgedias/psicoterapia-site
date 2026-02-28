import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function RecuperarAutoestima() {
  useEffect(() => {
    document.title = 'Diferença entre egoísmo e transtorno de personalidade narcis | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Diferença entre egoísmo e transtorno de personalidade narcisista: O limite do diagnóstico');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Diferença entre egoísmo e transtorno de personalidade narcisista: O limite do diagnóstico
          </h1>
        </section>

        <section className="px-4 max-w-4xl mx-auto py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

Diariamente, atendo pacientes que chegam à sessão diagnosticando amigos, colegas de trabalho ou ex-parceiros com Transtorno de Personalidade Narcisista (TPN). A popularização da psicologia na internet trouxe luz a abusos reais, mas também criou uma histeria diagnóstica. Hoje, qualquer pessoa que priorize os próprios interesses em detrimento dos nossos é rapidamente rotulada como narcisista. Contudo, como especialista clínico, preciso ser categórico: o egoísmo é um traço humano universal e, até certo ponto, necessário para a sobrevivência; já o transtorno narcisista é uma arquitetura psíquica severa, baseada na instrumentalização total do outro.

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O egoísmo comum versus a instrumentalização
O indivíduo egoísta toma decisões que o beneficiam, muitas vezes sendo insensível às necessidades de quem o cerca. Ele pode ser um parceiro difícil e um péssimo colega de trabalho, mas ele reconhece que as outras pessoas existem como seres separados, com vontades próprias.</h2><p className="text-slate-700 leading-relaxed mb-6">O verdadeiro narcisista clínico não opera com essa distinção. Para ele, o outro não é um ser humano autônomo; o outro é um objeto, uma extensão dele mesmo, cuja única função é servir como espelho para refletir a sua grandiosidade. Quando o outro falha em aplaudir ou decide impor um limite, o narcisista não sente apenas raiva, ele sente que uma parte do seu próprio corpo o traiu. É por isso que as reações costumam ser desproporcionais e cruéis. Entender essa diferença é fundamental para quem busca a <a href="/terapia/casais/conflitos-casal" className="text-blue-600 hover:underline">resolução de conflitos de casal</a>, pois conflitos com pessoas egoístas podem ser mediados; já a relação com um narcisista clínico exige estratégias de distanciamento e proteção.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A capacidade de reparação e a inversão de culpa
A principal métrica clínica que utilizo para separar o egoísmo do TPN é a capacidade de reparação. Uma pessoa egoísta, quando confrontada com a dor que causou, é capaz de sentir culpa. Ela pode ter dificuldade em mudar, mas o sentimento de remorso existe.</h2><p className="text-slate-700 leading-relaxed mb-6">O narcisista, devido a uma fratura profunda na própria identidade, é estruturalmente incapaz de suportar a culpa. Assumir um erro significaria o colapso do seu ego inflado. Portanto, ele utiliza a projeção contínua: o erro é sempre do outro. Se ele o ofendeu, foi porque você "o provocou". A culpa é constantemente invertida.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Saia do papel de diagnosticador
Na psicoterapia, o meu papel é tirar o paciente da função de "psiquiatra do ex". Tentar fechar o diagnóstico de quem o magoou é uma forma de <Link href="/autossabotagem" className="text-primary hover:underline">autossabotagem</Link> e padrões de repetição, que o mantém obcecado e focado no agressor.</h2><p className="text-slate-700 leading-relaxed mb-6">A investigação clínica verdadeira foca em você: por que a sua estrutura permitiu a permanência em uma dinâmica tão predatória? Se você deseja sair do ciclo de analisar o comportamento alheio para finalmente tratar as próprias feridas, a psicoterapia de profundidade oferece esse espaço. Ofereço acompanhamento psicológico online para o Brasil e exterior, .</p>

            <div className="mt-12 p-8 bg-slate-100 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                <li><a href="//autossabotagem" className="text-blue-600 hover:underline">Autossabotagem: Além do Conceito</a></li>
                <li><Link href="/padroes-familiares" className="text-primary hover:underline">Padrões Familiares</Link></li>
                <li><Link href="/crise-existencial" className="text-primary hover:underline">Crise Existencial</Link></li>
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
