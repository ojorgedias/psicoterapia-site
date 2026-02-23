import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Psicoterapia Clínica para Quem Busca Autoconhecimento Profundo
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Investigação filosófica e clínica rigorosa para quem se sente perdido, sem propósito ou preso em ciclos repetitivos. Atendimento online para todo o mundo e presencial em Presidente Epitácio - SP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato">Agendar Consulta</CTAButton>
            <Link href="/sobre">
              <a className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Conheça a Abordagem
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Áreas de Especialização
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cluster 1 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                Terapia para Adultos
              </h3>
              <p className="text-muted-foreground mb-4">
                Investigação clínica para crise existencial, autossabotagem, regulação emocional e desenvolvimento de autonomia genuína.
              </p>
              <Link href="/terapia/adultos/crise-existencial">
                <a className="text-primary hover:text-accent font-semibold">Explorar →</a>
              </Link>
            </div>

            {/* Cluster 2 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                Terapia para Casais
              </h3>
              <p className="text-muted-foreground mb-4">
                Resolução de conflitos, integração de polaridades e transformação de padrões relacionais destrutivos.
              </p>
              <Link href="/terapia/casais/padroes-familiares">
                <a className="text-primary hover:text-accent font-semibold">Explorar →</a>
              </Link>
            </div>

            {/* Cluster 4 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                Psicologia e Espiritualidade
              </h3>
              <p className="text-muted-foreground mb-4">
                Integração ética entre desenvolvimento psicológico e espiritual, sem bypassing ou alienação.
              </p>
              <Link href="/autoridade/psicologia-espiritualidade">
                <a className="text-primary hover:text-accent font-semibold">Explorar →</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Últimos Artigos do Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <article className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
              <h3 className="font-display text-xl font-semibold mb-2">
                Ansiedade ou Intuição?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Entendendo os sinais do corpo além do diagnóstico
              </p>
              <Link href="/blog/ansiedade-ou-intuicao">
                <a className="text-primary hover:text-accent font-semibold">Ler mais →</a>
              </Link>
            </article>

            <article className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
              <h3 className="font-display text-xl font-semibold mb-2">
                A Sombra nos Relacionamentos
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                O que o comportamento do outro diz sobre você
              </p>
              <Link href="/blog/sombra-relacionamentos">
                <a className="text-primary hover:text-accent font-semibold">Ler mais →</a>
              </Link>
            </article>
          </div>
          <div className="text-center">
            <Link href="/blog">
              <a className="text-primary hover:text-accent font-semibold text-lg">
                Ver todos os artigos →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sidebar text-sidebar-foreground py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para Iniciar Sua Investigação?
          </h2>
          <p className="text-lg text-sidebar-foreground/80 mb-8 leading-relaxed">
            Cada jornada de autoconhecimento começa com um primeiro passo. Agende uma consulta e vamos explorar juntos o que você está buscando.
          </p>
          <CTAButton href="/contato" variant="primary">
            Agendar Primeira Sessão
          </CTAButton>
        </div>
      </section>
    </Layout>
  );
}
