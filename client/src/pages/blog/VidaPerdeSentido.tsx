import React, { useEffect } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';

export default function VidaPerdeSentido() {
  useEffect(() => {
    document.title = 'O que fazer quando a vida perde o sentido: A visão da psicol | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'O que fazer quando a vida perde o sentido: A visão da psicologia clínica');
  }, []);

  return (
    <layout>
<div classname="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section classname="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 classname="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            O que fazer quando a vida perde o sentido: A visão da psicologia clínica
          </h1>
</section>
<section classname="px-4 max-w-4xl mx-auto py-12">
<div classname="prose prose-lg max-w-none">
<p classname="text-slate-700 leading-relaxed mb-6">"Eu tenho tudo para ser feliz, mas sinto um vazio absoluto. O que eu faço?". Escuto essa exata formulação semanalmente na minha prática clínica. Quando um paciente digita no Google buscando saber o que fazer quando a vida perde o sentido e adiciona a palavra "psicologia" à busca, ele não está procurando frases de motivação rasas; ele está pedindo uma intervenção estrutural. Na clínica de profundidade, compreendemos que a perda de sentido não é uma falha no seu cérebro, mas um evento psíquico necessário. É o som da fundação da sua vida rachando porque o roteiro que você seguia não suporta mais a pessoa que você se tornou.

</p><p>O desmoronamento das certezas emprestadas
O vazio existencial costuma atingir com mais violência as pessoas que foram excelentes cumpridoras de regras. Desde a infância, nós recebemos da família e da cultura um manual com "Réguas Prontas" sobre o que deve ter valor: casar até tal idade, alcançar um cargo específico, acumular bens. O indivíduo passa anos correndo atrás dessas metas.</p><p classname="text-slate-700 leading-relaxed mb-6">A crise se instaura no momento exato em que a meta é atingida (ou quando se percebe que ela é inatingível) e a promessa de completude falha miseravelmente. Observo no consultório que a dor da perda de sentido é, na verdade, o luto pelas certezas emprestadas. Você descobre que passou a vida inteira terceirizando o seu pensamento e vivendo os valores de outras pessoas. É uma fase de profunda desorientação que exige uma investigação severa, abordada diretamente no tratamento de <link classname="text-primary hover:underline" href="/crise-existencial"/>crise existencial.</p><p>O erro de preencher o vazio rapidamente
O instinto imediato de quem sente esse vazio é tentar tapá-lo com urgência. O paciente troca de emprego impulsivamente, termina casamentos de forma reativa ou mergulha em fanatismos (sejam eles religiosos, políticos ou hiperprodutivos). Essa fuga apenas adia o problema.</p><p classname="text-slate-700 leading-relaxed mb-6">Como psicólogo, a minha primeira intervenção é ensinar o paciente a suportar o desconforto de não ter respostas. É o que conceituo como vestir o "<link classname="text-primary hover:underline" href="/conceitos-fundamentais"/>manto da ignorância". Admitir conscientemente que você não sabe quem é ou o que quer, sem entrar em pânico, é o pré-requisito absoluto para que a verdadeira investigação de si mesmo comece. Apenas no vácuo do "não-saber" é que os seus desejos autênticos conseguem emergir.</p><p>Forjando o próprio sentido
A terapia não devolve o sentido antigo que você perdeu; ela oferece as ferramentas para que você forje um novo. Esse é um processo analítico de arqueologia pessoal, onde desmontamos as expectativas externas para que você construa um sistema de valores genuinamente seu.</p><p classname="text-slate-700 leading-relaxed mb-6">Se a vida perdeu o sabor e você está exausto de tentar se encaixar em um roteiro que não lhe pertence, o espaço psicoterapêutico é a forja para essa transformação. Realizo atendimentos psicológicos online para Brasil e exterior.</p>
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
<a classname="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo O%20que%20fazer%20quando%20a%20vida%20perde%20o%20sentido%3A%20A%20visão%20da%20psicologia%20clínica e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</layout>
  );
}
