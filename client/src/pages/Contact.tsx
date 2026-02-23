import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PSYCHOLOGIST } from "@/../../shared/const";
import { MessageCircle, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />

        <article className="prose-clinical">
          <h1>Agende Sua Sessão</h1>
          <p>
            Escolha a forma mais conveniente para você. Estou disponível para atendimento online em todo o Brasil e exterior, 
            além de sessões presenciais em Presidente Epitácio - SP.
          </p>

          {/* Two Main CTA Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {/* WhatsApp */}
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-8 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <MessageCircle className="text-primary-foreground" size={32} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">WhatsApp</h2>
                  <p className="text-sm text-muted-foreground mt-1">Conversa direta</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Envie uma mensagem direto pelo WhatsApp para discutir suas necessidades e agendar sua primeira sessão. 
                Respondo rapidamente e podemos conversar sobre sua situação.
              </p>

              <a
                href={PSYCHOLOGIST.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Enviar Mensagem WhatsApp
              </a>
            </div>

            {/* Calendly */}
            <div className="bg-card text-card-foreground rounded-lg shadow-sm p-8 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Calendar className="text-primary-foreground" size={32} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Agendar Sessão</h2>
                  <p className="text-sm text-muted-foreground mt-1">Agendamento automático</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Acesse meu calendário online e escolha o horário que melhor se adequa à sua disponibilidade. 
                Você receberá confirmação imediata e o link para a sessão.
              </p>

              <a
                href="https://calendly.com/jorgediasgama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Abrir Calendário
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-secondary rounded-lg p-8 border border-border my-12">
            <h2>Informações Profissionais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="mb-4">
                  <strong>Psicólogo:</strong> {PSYCHOLOGIST.name}
                </p>
                <p className="mb-4">
                  <strong>CRP:</strong> {PSYCHOLOGIST.crp}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${PSYCHOLOGIST.email}`} className="text-primary hover:text-accent">
                    {PSYCHOLOGIST.email}
                  </a>
                </p>
              </div>
              <div>
                <p className="mb-4">
                  <strong>WhatsApp:</strong>{" "}
                  <a href={PSYCHOLOGIST.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                    (41) 98515-5583
                  </a>
                </p>
                <p>
                  <strong>Localização:</strong> {PSYCHOLOGIST.location}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Atendimento online para todo o Brasil e exterior
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
