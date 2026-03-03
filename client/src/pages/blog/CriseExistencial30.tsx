import { Link } from 'wouter';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function CriseExistencial30() {
  useEffect(() => {
    document.title = 'Sintomas de crise existencial aos 30 anos: O colapso do rote | Jorge Dias';
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', 'Sintomas de crise existencial aos 30 anos: O colapso do roteiro ideal');
  }, []);

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
<h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Sintomas de <Link className="text-primary hover:underline" href="/crise-existencial">crise</Link> existencial aos 30 anos: O colapso do roteiro ideal
          </h1>
</section>
<section className="px-4 max-w-4xl mx-auto py-12">
<div className="prose prose-lg max-w-none">
<p className="text-slate-700 leading-relaxed mb-6">Recebo com enorme frequência no consultório homens e mulheres entre 28 e 32 anos que descrevem uma sensação idêntica: o peso esmagador de que a vida perdeu o brilho, mesmo quando, no papel, "tudo está bem". A marca dos 30 anos carrega um peso cultural e psicológico imenso. É a linha de chegada imaginária onde a sociedade exige que o seu roteiro de vida — carreira sólida, casamento, independência — esteja concluído. Quando o indivíduo atinge essa marca e percebe que o sucesso não trouxe paz, ou se depara com a frustração de estar muito longe de onde achava que estaria, os sintomas de uma crise existencial começam a paralisar a sua rotina.

</p><p>A desilusão com as "Réguas Prontas"
Durante a faixa dos 20 anos, a esmagadora maioria das pessoas opera na fase que a filosofia chama de Tese: aceitamos e buscamos cegamente as réguas de sucesso da família e da cultura. O paciente corre atrás do diploma, do cargo e da validação. Aos 30, a realidade cobra a conta.</p><p className="text-slate-700 leading-relaxed mb-6">Observo na clínica que o principal sintoma dessa crise não é a tristeza clássica, mas uma apatia angustiante e a sensação visceral de estar vivendo a vida de um estranho. Esse é o início da fase da Antítese. É o momento em que a estrutura psíquica entra em atrito com a realidade, e o paciente começa a questionar ativamente a utilidade do próprio casamento, a escolha da profissão e as bases da sua identidade. O roteiro que lhe foi entregue exauriu a sua utilidade.</p><p>O corpo sinaliza o que a mente tenta calar
Como a mente racional tem pavor de mudanças drásticas, ela tenta ignorar essa falta de sentido para manter a estabilidade financeira ou o status quo familiar. O resultado? O corpo absorve o impacto. O paciente desenvolve insônia crônica, irritabilidade desproporcional e passa a enfrentar problemas severos na <Link className="text-primary hover:underline" href="/ansiedade">regulação</Link> emocional e controle da ansiedade. O que a pessoa chama de "crise de ansiedade aos 30" é, frequentemente, o seu próprio sistema forçando uma parada obrigatória para revisão de rota.</p><p>O luto pelo "eu" que não existiu
O trabalho da psicoterapia de profundidade nessa fase não é fornecer dicas motivacionais para o paciente voltar a produzir. A clínica é o espaço para ajudá-lo a elaborar o luto pelas expectativas irreais que não se cumpriram e pelas ilusões que precisaram morrer.</p><p className="text-slate-700 leading-relaxed mb-6">Esse desconforto temporário é o alicerce obrigatório para o desenvolvimento de uma autonomia e identidade inabaláveis. Se você chegou aos 30 anos sentindo-se um passageiro na própria vida e deseja forjar a sua própria régua moral, a psicoterapia é o ambiente seguro para essa reconstrução. Realizo atendimentos online em nível global.</p>
<div className="mt-12 p-8 bg-slate-100 rounded-lg">
<h3 className="text-2xl font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
<ul className="space-y-3">
<li>Autossabotagem: Além do Conceito</li>
<li><Link className="text-primary hover:underline" href="/padroes-familiares">Padrões</Link> Familiares: Libertação e Integração</li>
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
<a className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors" href="https://wa.me/5541985155583?text=Olá, estava lendo Sintomas%20decrise%20existencial%20aos%2030%20anos%3A%20O%20colapso%20do%20roteiro%20ideal e gostaria de agendar uma sessão.">
              Agendar Sessão via WhatsApp
            </a>
</div>
</section>
</div>
</Layout>
  );
}
