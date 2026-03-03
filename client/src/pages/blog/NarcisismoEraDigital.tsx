import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function NarcisismoEraDigital() {
  useEffect(() => {
    document.title = 'O Narcisismo na Era Digital: Transtorno real ou adaptação cu | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'O Narcisismo na Era Digital: Transtorno real ou adaptação cultural?');
  }, []);

  return (
    <layout>
<div classname="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section classname="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 classname="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            O Narcisismo na Era Digital: Transtorno real ou adaptação cultural?
          </h1>
</section>
<section classname="px-4 max-w-4xl mx-auto py-12">
<div classname="prose prose-lg max-w-none">
<p classname="text-slate-700 leading-relaxed mb-6">Nos últimos anos, a quantidade de pacientes que chegam à primeira sessão diagnosticando seus ex-parceiros, mães ou chefes como "narcisistas" cresceu de forma assustadora. A internet transformou o Transtorno de Personalidade Narcisista (TPN) em um guarda-chuva popular, usado para rotular qualquer pessoa que aja com egoísmo, imaturidade ou falta de empatia. Contudo, a realidade clínica é muito mais complexa e menos maniqueísta. O que frequentemente observo no consultório não é uma epidemia de psicopatologia clássica, mas sim o adoecimento de pessoas comuns tentando sobreviver em uma cultura que premia e exige a vaidade constante.

</p><p>A Economia da Atenção e a performance do "Eu"
A estrutura das redes sociais alterou drasticamente a nossa forma de existir no mundo. Fomos inseridos em uma Economia da Atenção, onde o valor de um indivíduo é diariamente medido por métricas algorítmicas de validação: curtidas, visualizações e seguidores.</p><p classname="text-slate-700 leading-relaxed mb-6">Nesse ambiente, apresentar uma versão inflada, perfeita e otimizada de si mesmo deixou de ser um sintoma exclusivo de arrogância clínica e passou a ser um comportamento adaptativo de sobrevivência social. A sociedade atual exige a performance. Entramos no paradoxo da "autenticidade performada": o indivíduo expõe intimidades e vulnerabilidades não para gerar conexão real, mas como uma estratégia calculada para manter o engajamento. Ele trata a si mesmo como um produto porque o ambiente pune o anonimato com a invisibilidade.</p><p>O esvaziamento da identidade real
O custo psicológico de viver para a vitrine virtual é a desconexão interna profunda. Quando um indivíduo passa anos terceirizando a validação da sua identidade para a aprovação externa, a sua bússola interna atrofia. Ele deixa de saber o que realmente quer, o que sente e o que tem valor fora das telas.</p><p classname="text-slate-700 leading-relaxed mb-6">É extremamente comum que pessoas presas nessa roda-gigante de performance cheguem à terapia enfrentando uma severa <link classname="text-primary hover:underline" href="/crise-existencial"/>crise existencial. O personagem que construíram é aplaudido publicamente, mas, no privado, gera um vazio insustentável. Além disso, a incapacidade de sustentar a vulnerabilidade real destrói a intimidade a dois, sendo frequentemente o núcleo das crises que trato na <link classname="text-blue-600 hover:underline" href="/terapia/casais/conflitos-casal"/>resolução de conflitos de casal.</p><p>A clínica como zona de descompressão
Para romper com essa adaptação cultural doentia, o indivíduo precisa urgentemente de um espaço de suspensão. A psicoterapia atua como esse ambiente de neutralidade absoluta, o único lugar na rotina do paciente onde não há necessidade de performance ou risco de cancelamento.</p><p classname="text-slate-700 leading-relaxed mb-6">É o espaço seguro para recolher as projeções, abaixar as máscaras de invulnerabilidade e reaprender a existir sem o aplauso ou a condenação de uma plateia. Se você se sente exausto de sustentar um personagem para o mundo e deseja recuperar a posse sobre a sua própria identidade, a intervenção psicológica profunda é o caminho. Ofereço Atendimento psicológico online para Brasil e exterior.</p>
<div classname="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 classname="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul classname="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li><link classname="text-primary hover:underline" href="/padroes-familiares"/>Padrões Familiares</li>
<li><link classname="text-primary hover:underline" href="/crise-existencial"/>Crise Existencial</li>
</ul>
</div>
</div>
</section>
<section classname="bg-slate-900 text-white py-16 px-4 mt-16">
<div classname="max-w-4xl mx-auto text-center">
<h2 classname="text-3xl font-bold mb-4">Pronto para Explorar Este Tema?</h2>
<p classname="text-lg text-slate-300 mb-8">
              Agende uma sessão e comece a trabalhar com este tema de forma genuína.
            </p>
<a classname="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo O%20Narcisismo%20na%20Era%20Digital%3A%20Transtorno%20real%20ou%20adaptação%20cultural%3F e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</layout>
  );
}
