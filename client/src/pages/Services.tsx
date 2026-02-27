import Layout from "@/components/Layout";
import { useEffect } from 'react';
import { updatePageMeta } from '@/lib/seoMetadata';
import { Link } from "wouter";
import CTAButton from "@/components/CTAButton";
import { ArrowRight } from "lucide-react";

export default function Services() {
  useEffect(() => {
    updatePageMeta('services');
  }, []);

  const clusters = [
    {
      title: "Terapia para Adultos",
      description: "Investigação clínica para questões existenciais, autossabotagem, regulação emocional e desenvolvimento de autonomia genuína.",
      icon: "👤",
      services: [
        {
          title: "Crise Existencial",
          description: "Para quem se sente perdido, sem propósito ou em transição dolorosa",
          route: "/terapia/adultos/crise-existencial",
        },
        {
          title: "Autossabotagem",
          description: "Desconstruir ciclos repetitivos e restaurar a agência pessoal",
          route: "/terapia/adultos/autossabotagem",
        },
        {
          title: "Regulação Emocional",
          description: "Trabalho clínico rigoroso para equilibrar emoção e razão",
          route: "/terapia/adultos/regulacao-emocional",
        },
        {
          title: "Autonomia e Identidade",
          description: "Desenvolvimento de autonomia genuína e identidade integrada",
          route: "/terapia/adultos/autonomia-identidade",
        },
      ],
    },
    {
      title: "Terapia para Casais",
      description: "Resolução de conflitos, integração de polaridades e transformação de padrões relacionais destrutivos.",
      icon: "💑",
      services: [
        {
          title: "Padrões Familiares",
          description: "Investigação dos padrões herdados que afetam relacionamentos atuais",
          route: "/terapia/casais/padroes-familiares",
        },
        {
          title: "Conflitos de Casal",
          description: "Resolução de conflitos e comunicação efetiva em relacionamentos",
          route: "/terapia/casais/conflitos-casal",
        },
        {
          title: "Padrões de Relacionamento",
          description: "Transformação de dinâmicas relacionais repetitivas e destrutivas",
          route: "/terapia/casais/padroes-relacionamento",
        },
      ],
    },
    {
      title: "Psicologia e Espiritualidade",
      description: "Integração ética entre desenvolvimento psicológico e espiritual, sem bypassing ou alienação.",
      icon: "🌟",
      services: [
        {
          title: "Psicologia e Espiritualidade",
          description: "Integração entre desenvolvimento psicológico e caminho espiritual",
          route: "/autoridade/psicologia-espiritualidade",
        },
        {
          title: "Filosofia Integrativa",
          description: "Pensamento filosófico aplicado ao desenvolvimento pessoal e existencial",
          route: "/autoridade/filosofia-integrativa",
        },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Serviços de Psicoterapia Clínica
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Investigação clínica rigorosa e filosoficamente informada para diferentes contextos de vida. Escolha a área que melhor se alinha com suas necessidades.
          </p>
        </div>
      </section>

      {/* Services Clusters */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          {clusters.map((cluster, clusterIdx) => (
            <div key={clusterIdx} className="mb-16 last:mb-0">
              {/* Cluster Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{cluster.icon}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {cluster.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  {cluster.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                {cluster.services.map((service, serviceIdx) => (
                  <Link key={serviceIdx} href={service.route}>
                    <a className="group block bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border hover:border-primary hover:shadow-md transition-all duration-300">
                      <h3 className="font-display text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-accent transition-colors font-semibold">
                        Saiba mais
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              {clusterIdx < clusters.length - 1 && (
                <div className="border-t border-border my-12"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sidebar text-sidebar-foreground py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-sidebar-foreground/80 mb-8 leading-relaxed">
            Agende uma consulta inicial para discutir qual abordagem é mais adequada para sua situação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato" variant="primary">
              Agendar Sessão
            </CTAButton>
            <a
              href="https://wa.me/5541985155583?text=Olá%20Jorge%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-sidebar-foreground text-sidebar-foreground hover:bg-sidebar-foreground hover:text-sidebar hover:opacity-90 transition-all"
            >
              Enviar Mensagem WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
