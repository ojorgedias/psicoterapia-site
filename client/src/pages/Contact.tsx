import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PSYCHOLOGIST } from "@/../../shared/const";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />

        <article className="prose-clinical">
          <h1>Agende Sua Consulta</h1>
          <p>
            Entre em contato para agendar sua primeira sessão de psicoterapia. Estou disponível para atendimento online
            em todo o Brasil e exterior, além de sessões presenciais em Presidente Epitácio - SP.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2>Formas de Contato</h2>

              {/* WhatsApp */}
              <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
                <div className="flex items-start gap-4">
                  <MessageCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Envie uma mensagem direta para agendar sua consulta
                    </p>
                    <a
                      href={PSYCHOLOGIST.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Enviar Mensagem
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-3">Envie um email com suas informações</p>
                    <a
                      href={`mailto:${PSYCHOLOGIST.email}`}
                      className="text-primary hover:text-accent font-semibold break-all"
                    >
                      {PSYCHOLOGIST.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                    <p className="text-sm text-muted-foreground mb-3">Ligue ou envie mensagem de texto</p>
                    <a href={`tel:+55${PSYCHOLOGIST.whatsapp}`} className="text-primary hover:text-accent font-semibold">
                      (41) 98515-5583
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Localização</h3>
                    <p className="text-sm text-muted-foreground mb-2">Sessões presenciais:</p>
                    <p className="text-sm font-semibold">{PSYCHOLOGIST.location}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Atendimento online para todo o Brasil e exterior
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2>Envie uma Mensagem</h2>
              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-800">
                  ✓ Obrigado! Sua mensagem foi enviada com sucesso. Responderei em breve.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Telefone (opcional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Conte-me um pouco sobre o que você está buscando..."
                    className="w-full min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          <div className="divider-subtle"></div>

          <h2>Informações Profissionais</h2>
          <div className="bg-secondary rounded-lg p-6 my-6 border border-border">
            <p className="mb-3">
              <strong>Psicólogo:</strong> {PSYCHOLOGIST.name}
            </p>
            <p className="mb-3">
              <strong>CRP:</strong> {PSYCHOLOGIST.crp}
            </p>
            <p className="mb-3">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${PSYCHOLOGIST.email}`} className="text-primary hover:text-accent">
                {PSYCHOLOGIST.email}
              </a>
            </p>
            <p className="mb-3">
              <strong>WhatsApp:</strong>{" "}
              <a href={PSYCHOLOGIST.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                (41) 98515-5583
              </a>
            </p>
            <p>
              <strong>Modalidades:</strong> Atendimento online para todo o Brasil e exterior, além de sessões presenciais em
              Presidente Epitácio - SP.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
