import { PSYCHOLOGIST } from "@/../../shared/const";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-8 border-b border-border">
        <div className="container">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Jorge Dias — <span className="font-normal opacity-70">Psicoterapia e Psicanálise</span>
          </Link>
        </div>
      </header>

      <main className="container max-w-2xl mx-auto px-4 py-20">
        <article className="prose-en">
          <h1 className="font-display text-4xl mb-8">Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground mb-12">
            <strong>Última atualização:</strong> 03 de março de 2026
          </p>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-display mb-4">1. Introdução</h2>
              <p>
                Esta Política de Privacidade descreve como {PSYCHOLOGIST.name} coleta, usa e
                protege suas informações pessoais quando você visita este site ou contrata nossos serviços de psicoterapia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">2. Informações que Coletamos</h2>
              <p>Podemos coletar as seguintes informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Informações sobre sua saúde mental (apenas durante sessões terapêuticas)</li>
                <li>Dados de navegação do site (cookies, IP, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">3. Como Usamos Suas Informações</h2>
              <p>Usamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agendar e conduzir sessões de psicoterapia exclusivamente online</li>
                <li>Responder a suas consultas ou solicitações</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Cumprir obrigações legais e éticas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">4. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas
                informações contra acesso não autorizado, alteração, divulgação ou destruição. Todas as sessões
                online são realizadas através de plataformas seguras com criptografia ponta a ponta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">5. Retenção de Dados</h2>
              <p>
                Retemos suas informações pessoais pelo tempo necessário para cumprir os propósitos para os quais
                foram coletadas, incluindo exigências legais e éticas da profissão.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">6. Compartilhamento de Informações</h2>
              <p>
                Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou quando você
                fornece consentimento explícito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">7. Cookies</h2>
              <p>
                Este site utiliza cookies para melhorar sua experiência de navegação. Você pode desabilitar cookies em seu
                navegador, mas isso pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">8. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações imprecisas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Revogar consentimento para processamento de dados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">9. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em{" "}
                <a href={`mailto:${PSYCHOLOGIST.email}`} className="underline">{PSYCHOLOGIST.email}</a> ou pelo WhatsApp{" "}
                <a href={PSYCHOLOGIST.whatsappLink} className="underline">(41) 98515-5583</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">10. Alterações a Esta Política</h2>
              <p>
                Reservamos o direito de atualizar esta Política de Privacidade a qualquer momento. Alterações significativas
                serão comunicadas por email ou através de um aviso destacado no site.
              </p>
            </div>
          </section>
        </article>
      </main>

      <footer className="py-12 bg-background border-t border-border text-center">
        <div className="container">
          <Link href="/" className="text-sm uppercase tracking-widest font-semibold hover:text-primary transition-colors">
            Voltar ao início
          </Link>
        </div>
      </footer>
    </div>
  );
}
