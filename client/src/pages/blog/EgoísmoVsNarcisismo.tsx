import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function EgoísmoVsNarcisismo() {
  useEffect(() => {
    document.title = 'Como quebrar ciclos familiares tóxicos na fase adulta: O pre | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Como quebrar ciclos familiares tóxicos na fase adulta: O preço da autonomia');
  }, []);

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Como quebrar ciclos familiares tóxicos na fase adulta: O preço da autonomia
          </h1>
</section>
<section className="px-4 max-w-4xl mx-auto py-12">
<div className="prose prose-lg max-w-none">
<p className="text-slate-700 leading-relaxed mb-6">Na minha prática clínica, é muito frequente receber pacientes na faixa dos 30 ou 40 anos em estado de choque e frustração profunda após uma constatação dura: "Eu jurei a mim mesmo que nunca seria como o meu pai (ou minha mãe), mas acabei de ter a exata mesma atitude que eles". A internet costuma tratar a repetição de comportamentos abusivos ou disfuncionais como uma simples falta de vontade de mudar. Contudo, a psicologia profunda revela que quebrar ciclos familiares tóxicos na fase adulta exige o enfrentamento de uma das forças mais primitivas da nossa psique: a lealdade invisível ao nosso sistema de origem.

</p><p>A repetição como prova de amor infantil
Para o cérebro de uma criança, os pais são deuses e a família é o mundo inteiro. Nós aprendemos o que é o amor, a raiva e o sucesso observando a dinâmica da nossa casa. Se você cresceu em um ambiente onde o afeto era condicionado à submissão, ou onde a agressividade era a única forma de comunicação, a sua mente registrou essas "Réguas Prontas" como leis universais de sobrevivência.</p><p className="text-slate-700 leading-relaxed mb-6">Quando o paciente chega à vida adulta e tenta agir de forma diferente, a sua mente inconsciente entra em curto-circuito. Romper com o padrão familiar disfuncional soa, para o nosso lado instintivo, como uma traição à nossa tribo. A repetição do comportamento tóxico (seja no seu próprio casamento ou no trabalho) é, paradoxalmente, uma forma de amor e lealdade cega à dor dos seus pais. É por isso que promessas de ano novo não quebram ciclos; apenas a investigação estrutural consegue desativar essa bomba.</p><p>A dor de ser o "traidor" do sistema
O trabalho clínico focado na <Link className="text-primary hover:underline" href="/padroes-familiares">padrões</Link> familiares não é um caminho florido. Quando você decide que não vai mais gritar com os seus filhos como gritaram com você, ou que não vai aceitar o papel de salvador da família, o sistema familiar frequentemente reage com violência passiva, manipulação ou distanciamento.</p><p className="text-slate-700 leading-relaxed mb-6">Quebrar o ciclo significa suportar o atrito de ser apontado como o "egoísta" ou o "frio" da família. O paciente precisa elaborar o luto da fantasia de que a sua família um dia irá aplaudir a sua saúde mental. Muitas vezes, a sua cura é a maior ofensa para quem decidiu continuar doente.</p><p>A Arqueologia das suas escolhas
Para deixar de ser um mero repetidor das tragédias dos seus pais, você precisa realizar uma Arqueologia Pessoal de Pressupostos. Nós precisamos desenterrar a origem de cada atitude sua e devolver o que não lhe pertence.</p><p className="text-slate-700 leading-relaxed mb-6">Se você está exausto de destruir as próprias relações e deseja construir o desenvolvimento de uma autonomia e identidade inabaláveis, a psicoterapia é o bisturi necessário para essa separação. Realizo atendimentos psicológicos online para pacientes em todo o mundo.</p>
<div className="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul className="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li><Link className="text-primary hover:underline" href="/padroes-familiares">Padrões</Link> Familiares</li>
<li><Link className="text-primary hover:underline" href="/crise-existencial">Crise</Link> Existencial</li>
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
<a className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Como%20quebrar%20ciclos%20familiares%20tóxicos%20na%20fase%20adulta%3A%20O%20preço%20da%20autonomia e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</Layout>
  );
}
