import { Link } from "wouter";
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import Testimonials from "@/components/Testimonials";
import { updatePageMeta } from "@/lib/seoMetadata";
import { useEEATSchema, useLocalBusinessSchema } from "@/components/EEATSchema";

export default function Home() {
  useEEATSchema({
    pageType: 'home',
    title: 'Psicólogo Jorge Dias - Psicoterapia Clínica para Autoconhecimento Profundo',
    description: 'Investigação filosófica e clínica rigorosa para quem se sente perdido, sem propósito ou preso em ciclos repetitivos.',
    url: 'https://psicoterapia-site.com'
  });
  useLocalBusinessSchema();
  
  useEffect(() => {
    updatePageMeta('home');
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/UWXOi3Z0CqaqcQpJtcE94W/sandbox/ju26zNMuXhJFKpE5iHWdtf-img-1_1771894197000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVdYT2kzWjBDcWFxY1FwSnRjRTk0Vy9zYW5kYm94L2p1MjZ6Tk11WGhKRktwRTVpSFdkdGYtaW1nLTFfMTc3MTg5NDE5NzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AKi4EKWgIZYpC15uiiz08Sl~od5d6EK-1Ov7e3E83xSZklryXKZ6bQwOcdJtdNqvDFhtOPVzVO0Kb6ZMAynmrAY3YDrhDg-HqZx053Zu~FI~7bApwLN1x1zE24jIXZawEgPw-fYsxpcUtoeOo10Pc-emqcKOprpeb7BQPXtXoJWqSvrbXtRkCAvjUwfb~p9DPPfkHTaNY~fqxJtwioyr176NqKd-OAHOicbHjDOc~UitX6rug-lBsnQDVh250s9dEuCyz~c6BVZN2xnv994yXSNqgq5hf-wixHT7oqjXQ74nMAYojbD4yfI~DzapYDjoIUMjtqN2kJ3ix5BJsGx3YQ__"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
            alt="Psicólogo Jorge Dias"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover mx-auto mb-8 shadow-xl border-4 border-background"
          />
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-2 leading-tight">
            Psicólogo Jorge Dias - Psicoterapia Clínica
          </h1>
          <p className="text-lg text-muted-foreground mb-6 font-semibold">CRP 08/31462</p>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto" style={{color: '#413e3e'}}>
            Você se sente perdido, preso em ciclos que se repetem, ou vivendo uma vida que não é realmente sua? Trabalho com pessoas que chegam ao consultório buscando mais que respostas prontas. Meu trabalho é investigação profunda: desvendar as <Link href="/conceitos-fundamentais"><a className="text-primary hover:underline">regras invisíveis</a></Link> que governam você, sem dogmas ou receitas.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto" style={{color: '#413e3e'}}>
            Especializado em <strong><Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link></strong>, <strong><Link href="/autossabotagem"><a className="text-primary hover:underline">autossabotagem</a></Link></strong> e <strong><Link href="/padroes-familiares"><a className="text-primary hover:underline">padrões familiares</a></Link></strong>. Atendimento online Brasil e presencial em Presidente Epitácio - SP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato">Agendar Sessão</CTAButton>
            <Link href="/sobre">
              <a className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Minha Abordagem
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Overview */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Áreas de Especialização
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cluster 1 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/UWXOi3Z0CqaqcQpJtcE94W/sandbox/ju26zNMuXhJFKpE5iHWdtf-img-2_1771894191000_na1fn_YWR1bHRvcy1jbHVzdGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVdYT2kzWjBDcWFxY1FwSnRjRTk0Vy9zYW5kYm94L2p1MjZ6Tk11WGhKRktwRTVpSFdkdGYtaW1nLTJfMTc3MTg5NDE5MTAwMF9uYTFmbl9ZV1IxYkhSdmN5MWpiSFZ6ZEdWeS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MRqK3UlqPK3r1R1n6GV534qDACYAnGM0GnioDSohU~YKD~ti9-nc2Qx-nt-atd4JVtYeOHZiELOTx1Do6PWajP3SODHM9O53TZHvLoQ-JdObBWY2oCAMWkoxN5ekcYfANCtvjKk2GG7ckUILwMhac87zMm0LPJcgXnY9jn~EOqeKm8qfbp16qp5cdUEA5B13plnuYVKsRax2nXS5aFu1WYUGV8oCDbsoWnsvTXkknlHuRbJWDfUx~pdc5DA99tZaeGQNznjHJPxh~yzzhvS6e5yWHoltSVIzKc21x2ZKi2ZzR0mvzQ0JNujp1ymnLdcYhlCNI0G2J-v80sWmVdGOVw__"
                alt="Terapia para Adultos"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                Terapia para Adultos
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Investigação clínica para <Link href="/crise-existencial"><a className="text-primary hover:underline">crise existencial</a></Link>, <Link href="/autossabotagem"><a className="text-primary hover:underline">autossabotagem</a></Link>, regulação emocional e desenvolvimento de autonomia genuína.
              </p>
              <Link href="/terapia/adultos/crise-existencial">
                <a className="text-primary hover:text-accent font-semibold">Explorar →</a>
              </Link>
            </div>

            {/* Cluster 2 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/UWXOi3Z0CqaqcQpJtcE94W/sandbox/ju26zNMuXhJFKpE5iHWdtf-img-3_1771894194000_na1fn_Y2FzYWlzLWNsdXN0ZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVdYT2kzWjBDcWFxY1FwSnRjRTk0Vy9zYW5kYm94L2p1MjZ6Tk11WGhKRktwRTVpSFdkdGYtaW1nLTNfMTc3MTg5NDE5NDAwMF9uYTFmbl9ZMkZ6WVdsekxXTnNkWE4wWlhJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=czUBFrNK9wQ32kibt4IdeRkXr-WQbGzOPu8by58OLcMcY3XjHm0l3OENFXHYtax8RJAhCAHTEgOBIn5cBw4mWRPRtbYvGqXJ5p8JyRIyKILSKDPIkQCSWmwym4h9DEGgjT4va1Sjx9hYE3LnLyYv3eCStGoTC1~BfPkZ2NxzRwZvNqUEDmUo5hWpB0AcdMbatlsG74vytR5Fq27-1jMfHkrVze5j5esCYTLabU-4hAQoevPT5I2ifw79ZRHLLsVyOzGpNgEWu-iYuiU1nqWTUHyRm2JM40JOBinypZ7SK15c63x-SqpRO0kQjiGRBz0dpNu0P2VTHDEbkbzAe62pfQ__"
                alt="Terapia para Casais"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                Terapia para Casais
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Resolução de conflitos, integração de polaridades e transformação de padrões relacionais destrutivos.
              </p>
              <Link href="/terapia/casais/padroes-familiares">
                <a className="text-primary hover:text-accent font-semibold">Explorar →</a>
              </Link>
            </div>

            {/* Cluster 4 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/UWXOi3Z0CqaqcQpJtcE94W/sandbox/ju26zNMuXhJFKpE5iHWdtf-img-4_1771894200000_na1fn_ZXNwaXJpdHVhbGlkYWRlLWNsdXN0ZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVdYT2kzWjBDcWFxY1FwSnRjRTk0Vy9zYW5kYm94L2p1MjZ6Tk11WGhKRktwRTVpSFdkdGYtaW1nLTRfMTc3MTg5NDIwMDAwMF9uYTFmbl9aWE53YVhKcGRIVmhiR2xrWVdSbExXTnNkWE4wWlhJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RHYBYYXqlzSU6WBAnASEVnsthaL-6f25dFyAQg7Ph4iG1BgOMkUtEyfxcrRPeU8V5zibq9e6lxKRxKtupmoRR7nug829wY3fyL-wGKCYYsPYO2YK15R65CejJB7CIyqLyqyP1XxLloAztiDJO4RJ5Ftp6jCLoXIs2tDppNFMadzYF1qiumMYB81ECrqF0Kbmnrvaq0eYb5LLv1X0LYkF8bnLcPG6xKWvjnAjiMmMYXCj90CgY2oQ~fDu0ccpZ6fKTmZqgkYR4JedHFRqizhFHTw~w-iZ~-yTsnQ9VS~g7HSZ6FLeFIFdheUDI7bbtrpcKaYuj5oN98duK6l8GeZjXQ__"
                alt="Psicologia e Espiritualidade"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                Psicologia e Espiritualidade
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
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
                <Link href="/ansiedade"><a className="text-primary hover:underline">Ansiedade</a></Link> ou Intuição?
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
                A <Link href="/blog/sombra-relacionamentos"><a className="text-primary hover:underline">Sombra</a></Link> nos Relacionamentos
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
