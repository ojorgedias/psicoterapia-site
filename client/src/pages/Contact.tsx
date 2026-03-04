import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PSYCHOLOGIST } from "@/../../shared/const";
import { MessageCircle, Calendar } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "5541985155583";
  const whatsappDisplay = "(41) 98515-5583";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%20Jorge,%20gostaria%20de%20agendar%20uma%20sessão%20online.`;
  const calendlyLink = "https://calendly.com/psijorgedias";

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />

        <article className="prose-clinical">
          <div className="mb-12 -mx-4 md:mx-0">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/zXQQHgptkIhrUeMR.png"
              alt="Atendimento Online - Psicólogo Jorge Dias"
              className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg mb-6"
            />
          </div>

          <h1>Agende Sua Sessão</h1>
          <p>
            Escolha a forma mais conveniente para você. Os atendimentos são <strong>exclusivamente online</strong>, garantindo flexibilidade, discrição e segurança para pacientes em todo o Brasil e no exterior.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {/* Calendly */}
            <div className="bg-card text-card-foreground border border-border p-8 rounded-lg text-center hover:border-primary transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Calendar size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Calendário</h3>
              <p className="text-muted-foreground mb-6">
                Escolha o horário que melhor se adequa à sua agenda.
              </p>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full"
              >
                Agendar no Calendário
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-card text-card-foreground border border-border p-8 rounded-lg text-center hover:border-primary transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MessageCircle size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                A forma mais rápida de tirar dúvidas e encontrar um horário disponível.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

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
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                    {whatsappDisplay}
                  </a>
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Atendimento psicoterápico online para todo o Brasil e exterior
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
