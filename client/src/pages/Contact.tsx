import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    // In a real application, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />

        <article className="prose-clinical">
          <h1>Agende Sua Consulta</h1>

          <p>
            Preencha o formulário abaixo com suas informações e uma breve descrição do que você está buscando. Responderei em breve para agendar sua primeira sessão.
          </p>

          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-800">
              Obrigado! Sua mensagem foi enviada com sucesso. Responderei em breve.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 my-8">
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

          <div className="divider-subtle"></div>

          <h2>Informações de Contato</h2>
          <p>
            <strong>Localização:</strong> Presidente Epitácio - SP
          </p>
          <p>
            <strong>Modalidades:</strong> Atendimento online para todo o Brasil e exterior, além de sessões presenciais.
          </p>
        </article>
      </div>
    </Layout>
  );
}
