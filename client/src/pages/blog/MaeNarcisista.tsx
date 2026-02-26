import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function MaeNarcisista() {
  const readingTime = 15;
  const metadata = getBlogPostMetadata('mae-narcisista-impacto-adulto');
  
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
  
  useEffect(() => {
    document.title = metadata?.headline + ' - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metadata) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [metadata]);

  return (
    <Layout>
    <div className="bg-background">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Mãe Narcisista' }]} />

      <article className="container max-w-3xl py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Mãe Narcisista: Impacto na Vida Adulta e Caminhos de Cura
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min de leitura</span>
            </div>
            <span>23 de fevereiro de 2026</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            Crescer com uma mãe narcisista deixa cicatrizes profundas. Não é abuso óbvio - é mais sutil. 
            É a fragmentação da sua identidade, a erosion da sua autonomia e o condicionamento para servir as necessidades emocionais de um adulto. É uma forma de abuso que opera nas sombras.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Dinâmica Mãe Narcisista
          </h2>
          <p>
            Uma mãe narcisista vê seu filho não como uma pessoa separada, mas como uma extensão de si mesma. 
            Seus sucessos são dela. Seus fracassos são humilhação para ela. Suas necessidades são irrelevantes 
            comparadas aos seus sentimentos.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            10 Efeitos Psicológicos na Vida Adulta
          </h2>

          <h3 className="text-xl font-semibold text-primary mt-6">1. Fragmentação da Identidade e Senso de Valor</h3>
          <p>
            Você cresceu recebendo a mensagem: "Você não é suficiente. Você é responsável pelos meus 
            sentimentos. Sua existência é um fardo." Essas mensagens se tornaram estruturas profundas em como você se relaciona consigo mesmo.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">2. Dificuldade em Estabelecer Limites</h3>
          <p>
            Você aprendeu que seus limites não importam. Que dizer "não" é egoísmo. Agora, como adulto, 
            você deixa as pessoas pisarem em você.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">3. Autossabotagem</h3>
          <p>
            Inconscientemente, você sabota seu sucesso. Por quê? Porque sucesso significa deixar sua mãe 
            para trás. Significa ser desleal. Significa ser rejeitado.
          </p>

          <p className="bg-primary/10 border-l-4 border-primary p-4 italic">
            <strong>Leia também:</strong> Nosso artigo aprofundado sobre{' '}
            <Link href="/blog/autossabotagem-inconsciente">
              <a className="text-primary hover:underline">autossabotagem inconsciente</a>
            </Link>
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">4. Padrões de Relacionamento Disfuncionais</h3>
          <p>
            Você escolhe parceiros que a tratam como sua mãe a tratava. Ou você escolhe parceiros que 
            você tenta "consertar", repetindo o papel de cuidador emocional que tinha com sua mãe.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">5. Codependência</h3>
          <p>
            Sua identidade está fundida com a de outras pessoas. Você não sabe quem é sem alguém para 
            cuidar. Você se sente responsável pelos sentimentos de todos.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">6. Ansiedade Social e Medo do Julgamento</h3>
          <p>
            Você cresceu sendo constantemente criticado e julgado. Agora, você assume que todos o julgam. 
            Seu "Mamute Interior" está em alerta máximo.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">7. Dificuldade em Confiar</h3>
          <p>
            A pessoa que deveria ser sua maior fonte de segurança foi sua maior fonte de dano. Como você 
            confia em alguém agora?
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">8. Perfeccionismo Defensivo</h3>
          <p>
            Você tenta ser perfeito para evitar crítica. Qualquer falha é uma ameaça existencial. Você 
            nunca relaxa.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">9. Raiva Reprimida</h3>
          <p>
            Você não podia expressar raiva quando criança. Agora, você carrega raiva profunda que pode 
            explodir ou se transformar em depressão.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">10. Perda de Identidade</h3>
          <p>
            Você não sabe quem você é. Você foi criado para ser o que sua mãe precisava que você fosse, 
            não quem você realmente é.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Caminhos de Cura
          </h2>

          <h3 className="text-xl font-semibold text-primary mt-6">1. Reconhecimento e Validação</h3>
          <p>
            O primeiro passo é reconhecer: isso foi abuso emocional. Seus sentimentos são válidos. Você 
            não está sendo "dramático" ou "ingrato".
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">2. Estabelecimento de Limites</h3>
          <p>
            Estabeleça limites firmes com sua mãe. Isso pode significar reduzir contato ou até corte total. 
            Você merece estar seguro.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">3. Desenvolvimento de Identidade Autêntica</h3>
          <p>
            Quem você é quando ninguém está observando? Quais são seus valores genuínos? Quais são seus 
            desejos autênticos? Comece a forjar sua própria "régua".
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">4. Terapia Profissional</h3>
          <p>
            Trabalhar com um psicólogo especializado em trauma familiar é essencial. Você não pode fazer 
            isso sozinho.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">Recuperação de Trauma Familiar</h3>
            <p className="text-foreground mb-4">
              Ofereço atendimento especializado em trauma familiar, padrões familiares e desenvolvimento 
              de autonomia genuína. Atendimento online para todo o país.
            </p>
            <CTAButton whatsapp>Agendar Sessão</CTAButton>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/padroes-familiares-relacionamentos">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Padrões Familiares em Relacionamentos
                </h4>
                <p className="text-sm text-muted-foreground">Como padrões se repetem</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Ler artigo</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </Link>
            <Link href="/terapia/adultos/autonomia-identidade">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: Autonomia e Identidade
                </h4>
                <p className="text-sm text-muted-foreground">Desenvolvimento de identidade autêntica</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
    </Layout>
  );
}
