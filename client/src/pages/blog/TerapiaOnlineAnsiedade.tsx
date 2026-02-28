import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function TerapiaOnlineAnsiedade() {
  useEffect(() => {
    document.title = 'Ansiedade de domingo à noite: Como lidar com a angústia que  | Jorge Dias';
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
            <p className="text-slate-700 leading-relaxed mb-6">(Copiar a partir daqui)

Observo sistematicamente na clínica um padrão comportamental intrigante: pacientes que relatam uma piora drástica dos quadros de angústia, irritabilidade e taquicardia no final da tarde de domingo. A internet popularizou esse fenômeno com nomes lúdicos, mas a "ansiedade de domingo à noite" é um sintoma clínico extremamente revelador. O paciente costuma culpar o cansaço do fim de semana ou a quantidade de e-mails que o aguarda na segunda-feira. Porém, a investigação profunda demonstra que a dor raramente é sobre a quantidade de trabalho. A angústia do domingo é, na verdade, o atrito psíquico gerado pela transição entre o "eu autêntico" e o "eu performático".

</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O choque entre a liberdade e a performance
Durante o fim de semana, a maior parte das pessoas tem a permissão social para baixar a guarda. Você acorda na hora que o seu corpo pede, veste roupas confortáveis e interage com o mundo a partir dos seus próprios desejos. O fim de semana é, frequentemente, o último refúgio da autenticidade.</h2><p className="text-slate-700 leading-relaxed mb-6">No entanto, à medida que o sol se põe no domingo, o seu cérebro começa a antecipar a segunda-feira. E a segunda-feira, para a maioria dos adultos, significa vestir uma armadura. Significa ter que voltar a atuar num ambiente corporativo que exige obediência, engolir emoções diante de chefes ou clientes e encaixar-se novamente nas "Réguas Prontas" do sucesso. A ansiedade de domingo não é o medo do trabalho em si; é o luto antecipado da perda da própria liberdade. A sua psique entra em desespero ao perceber que terá que abandonar as próprias necessidades por mais cinco dias para performar um personagem.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">O sintoma de uma vida dividida
Quando essa transição dói a ponto de paralisar o seu domingo, ela deixou de ser um "cansaço normal" e se tornou o sintoma de uma profunda <Link href="/crise-existencial" className="text-primary hover:underline">crise existencial</Link>. O seu corpo está informando que a distância entre quem você é no domingo e quem você é obrigado a ser na segunda-feira tornou-se insustentável.</h2><p className="text-slate-700 leading-relaxed mb-6">Muitas pessoas tentam anestesiar esse desconforto consumindo álcool no domingo à noite, maratonando séries ou caindo em ciclos de <Link href="/autossabotagem" className="text-primary hover:underline">autossabotagem</Link> e padrões de repetição. Mas a fuga apenas agrava a desorientação.</p><h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A integração do sujeito
A solução clínica para esse quadro não é aplicar dicas superficiais de organização de agenda. O trabalho terapêutico exige a integração das suas partes. Nós precisamos investigar o porquê de a sua vida profissional exigir a anulação quase total da sua identidade, e como você pode construir um cotidiano onde não precise se fragmentar para sobreviver.</h2><p className="text-slate-700 leading-relaxed mb-6">Se a angústia domina o final do seu fim de semana e você deseja construir uma vida que não exija fugas constantes, a intervenção psicoterapêutica oferece a estrutura para essa travessia. Ofereço acompanhamento online em nível global e .</p>

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
