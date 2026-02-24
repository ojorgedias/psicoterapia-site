import { Link } from 'wouter';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';

export default function MedoDeSerFeliz() {
  const readingTime = 11;

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Medo de Ser Feliz' }]} />

      <article className="container max-w-3xl py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Medo de Ser Feliz: Raízes Psicológicas e Integração
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
            Você já percebeu que quando as coisas começam a ficar boas, algo dentro de você sabota? 
            Que você sente ansiedade quando deveria estar feliz? Que há uma culpa inexplicável associada 
            à alegria? Isso é querofobia - medo de ser feliz.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Temos Medo de Ser Feliz?
          </h2>

          <h3 className="text-xl font-semibold text-primary mt-6">Trauma Anterior</h3>
          <p>
            Você experimentou felicidade seguida de perda ou punição. Seu sistema nervoso aprendeu: 
            "Felicidade = perigo iminente". Agora, sempre que você se aproxima da felicidade, seu alarme dispara.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Lealdade ao Sofrimento Familiar</h3>
          <p>
            Seus pais sofriam. Você aprendeu que ser feliz era abandoná-los. Que ser feliz era desleal. 
            Que você deveria sofrer junto com eles.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Identidade Baseada no Sofrimento</h3>
          <p>
            Sua identidade está fundida com o sofrimento. Você é "alguém que sofre". Felicidade ameaça 
            essa identidade.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Medo da Queda</h3>
          <p>
            "Se sou feliz agora, quanto mais alto subo, mais dói a queda." Você sabota para manter a 
            queda controlada.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Integração e Libertação
          </h2>
          <p>
            A solução não é "pensar positivo" ou "simplesmente ser feliz". É integração profunda do medo 
            e do trauma subjacente.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">Pronto para Explorar?</h3>
            <p className="text-foreground mb-4">
              Ofereço atendimento especializado em trauma, padrões familiares e integração psicológica.
            </p>
            <CTAButton whatsapp>Agendar Sessão</CTAButton>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/terapia/adultos/regulacao-emocional">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Regulação Emocional
                </h4>
                <p className="text-sm text-muted-foreground">Abordagem clínica</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </Link>
            <Link href="/faq">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  FAQ: Perguntas Frequentes
                </h4>
                <p className="text-sm text-muted-foreground">Respostas rápidas</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Explorar</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
