import Layout from "@/components/Layout";
import { Link } from "wouter";
import CTAButton from "@/components/CTAButton";
import { ArrowRight } from "lucide-react";

export default function Services() {
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
          description: "Como as lealdades invisíveis afetam o relacionamento amoroso",
          route: "/terapia/casais/padroes-familiares",
        },
        {
          title: "Conflitos de Casal",
          description: "Mediação para choque de valores e falta de comunicação",
          route: "/terapia/casais/conflitos-casal",
        },
        {
          title: "Padrões de Relacionamento",
          description: "Quebra de repetições tóxicas e projeções",
          route: "/terapia/casais/padroes-relacionamento",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-sidebar text-sidebar-foreground py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Serviços e Abordagens
          </h1>
          <p className="text-xl text-sidebar-foreground/80 max-w-2xl mx-auto">
            Atendimento exclusivamente online, oferecendo um espaço seguro e rigoroso para investigação pessoal, focado em resultados duradouros.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          {clusters.map((cluster, clusterIdx) => (
            <div key={clusterIdx} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{cluster.icon}</span>
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    {cluster.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mt-2">
                    {cluster.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cluster.services.map((service, serviceIdx) => (
                  <div
                    key={serviceIdx}
                    className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Link href={service.route}>
                      <a className="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors">
                        Explorar abordagem
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>

              {clusterIdx < clusters.length - 1 && (
                <div className="border-t border-border my-12"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sidebar text-sidebar-foreground py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-sidebar-foreground/80 mb-8 leading-relaxed">
            Agende uma consulta inicial online para discutirmos a abordagem ideal para o seu momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato" variant="primary">
              Agendar Sessão
            </CTAButton>
            <a
              href="https://wa.me/5518999999999?text=Olá%20Jorge%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia%20online."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-sidebar-foreground text-sidebar-foreground hover:bg-sidebar-foreground hover:text-sidebar hover:opacity-90 transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
