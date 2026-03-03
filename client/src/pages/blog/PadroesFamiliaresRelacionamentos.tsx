import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function PadroesFamiliaresRelacionamentos() {
  const readingTime = 14;
  const metadata = getBlogPostMetadata('padroes-familiares-relacionamentos');
  
  if (metadata) {
    useBlogPostingSchema({
      headline: metadata.headline,
      description: metadata.description,
      image: metadata.image,
      datePublished: metadata.datePublished,
      dateModified: metadata.dateModified,
      author: { '@type': 'Person', name: metadata.author },
    });
  }
  
  useEffect(() =&gt; {
    document.title = metadata?.headline + ' - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription &amp;&amp; metadata) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [metadata]);

  return (
    <layout>
<div classname="bg-background">
<breadcrumbs '="" 'blog',="" 'padrões="" blog'="" familiares'="" href:="" items="{[{" label:="" {="" },="" }]}=""></breadcrumbs>
<article classname="container max-w-3xl py-12 md:py-20">
<div classname="mb-8">
<h1 classname="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Padrões Familiares em Relacionamentos: Libertação Consciente
          </h1>
<div classname="flex items-center gap-4 text-muted-foreground">
<div classname="flex items-center gap-2">
<clock size="{18}"></clock>
<span>{readingTime} min de leitura</span>
</div>
<span>23 de fevereiro de 2026</span>
</div>
</div>
<div classname="prose prose-invert max-w-none text-foreground space-y-6">
<p classname="text-lg leading-relaxed">
            Você escolhe o mesmo tipo de pessoa repetidamente? Seus relacionamentos seguem o mesmo padrão 
            doloroso? Você se vê repetindo dinâmicas que seus pais tiveram? Não é coincidência. É transmissão 
            transgeracional de padrões - um fenômeno profundo que afeta bilhões de pessoas.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Repetimos <link classname="text-primary hover:underline" href="/padroes-familiares"/>Padrões Familiares?
          </h2>
<p>
            Os padrões familiares não são escolhas conscientes. Eles são programações profundas instaladas 
            durante seus anos formativos. Você observou como seus pais se relacionavam. Você aprendeu, 
            através de observação silenciosa, o que era "normal" em um relacionamento.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6"><link classname="text-primary hover:underline" href="/terapia/casais/padroes-familiares"/>Lealdades Invisíveis</h3>
<p>
            Existe algo chamado "lealdade invisível" - um compromisso inconsciente com sua família de origem. 
            Você pode estar repetindo padrões dolorosos porque, em algum nível profundo, acredita que é 
            desleal quebrar o padrão.
          </p>
<p classname="bg-primary/10 border-l-4 border-primary p-4 italic">
<strong>Exemplo:</strong> Sua mãe foi abandonada. Você escolhe parceiros que a abandonam. 
            Você está sendo leal ao sofrimento da sua mãe, repetindo seu padrão para que ela não esteja sozinha.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Normalização do Disfuncional</h3>
<p>
            Se você cresceu com dinâmicas abusivas ou disfuncionais, seu sistema nervoso foi calibrado para 
            essas dinâmicas. Relacionamentos saudáveis podem parecer "chatos" ou "errados" porque não ativam 
            o padrão familiar que seu corpo conhece.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            O Processo de Libertação
          </h2>
<h3 classname="text-xl font-semibold text-primary mt-6">Passo 1: Conscientização</h3>
<p>
            Identifique o padrão. Qual dinâmica você repete? Qual papel você sempre assume? Qual tipo de 
            pessoa você sempre escolhe? Escreva isso. Seja específico.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Passo 2: Arqueologia Pessoal</h3>
<p>
            Escave a origem. De quem você aprendeu esse padrão? Como seus pais se relacionavam? Qual mensagem 
            implícita você recebeu sobre relacionamentos? Qual papel você tinha na dinâmica familiar?
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Passo 3: Compaixão</h3>
<p>
            Desenvolva compaixão por si mesmo e por seus pais. Eles também estavam repetindo padrões. 
            Você não é culpado por ter aprendido o que foi ensinado. Mas agora você é responsável por 
            escolher conscientemente.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Passo 4: Renegociação Relacional</h3>
<p>
            Estabeleça novos limites e dinâmicas com sua família de origem. Isso não significa rejeitar 
            sua família, mas sim renegociar a relação de forma que você possa ser autêntico.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Passo 5: Experimentação Comportamental</h3>
<p>
            Teste novos padrões em pequena escala. Escolha parceiros diferentes. Responda de forma diferente. 
            Seu sistema nervoso precisa aprender que novos padrões são seguros.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Relacionamentos com <link classname="text-primary hover:underline" href="/narcisismo"/>Narcisismo Familiar
          </h2>
<p>
            Se você cresceu com um dos pais narcisista, os padrões são ainda mais complexos. Você pode estar 
            escolhendo parceiros narcisistas ou desenvolvendo traços narcisistas defensivos.
          </p>
<p classname="bg-primary/10 border-l-4 border-primary p-4 italic">
<strong>Leia também:</strong> Nosso artigo aprofundado sobre{' '}
            <link classname="text-primary hover:underline" href="/blog/mae-narcisista-impacto-adulto"/>mãe narcisista e seu impacto na vida adulta
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Quando Procurar Ajuda Profissional
          </h2>
<p>
            Se você está preso em ciclos relacionais dolorosos, a terapia pode oferecer um espaço seguro 
            para explorar essas raízes profundas e desenvolver novos padrões. Isso não é fraqueza; é 
            auto-responsabilidade.
          </p>
<div classname="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 classname="text-xl font-semibold text-foreground mb-3">Especializados em <link classname="text-primary hover:underline" href="/padroes-familiares"/>Padrões Familiares</h3>
<p classname="text-foreground mb-4">
              Ofereço atendimento especializado em padrões familiares, relacionamentos e libertação de 
              dinâmicas limitantes. Atendimento online para todo o país.
            </p>
<ctabutton whatsapp="">Agendar Sessão</ctabutton>
</div>
</div>
<div classname="mt-16 pt-8 border-t border-border">
<h3 classname="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div classname="grid grid-cols-1 md:grid-cols-2 gap-4">
<link href="/terapia/casais/padroes-familiares"/>
<a classname="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 classname="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: <link classname="text-primary hover:underline" href="/padroes-familiares"/>Padrões Familiares
                </h4>
<p classname="text-sm text-muted-foreground">Abordagem clínica especializada</p>
<div classname="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Saiba mais</span>
<arrowright size="{16}"></arrowright>
</div>
</a>
<link href="/faq"/>
<a classname="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 classname="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  FAQ: Perguntas Frequentes
                </h4>
<p classname="text-sm text-muted-foreground">Respostas a perguntas comuns</p>
<div classname="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Explorar</span>
<arrowright size="{16}"></arrowright>
</div>
</a>
</div>
</div>
</article>
</div>
</layout>
  );
}
