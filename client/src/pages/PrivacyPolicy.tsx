import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PSYCHOLOGIST } from "@/../../shared/const";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]} />

        <article className="prose-clinical">
          <h1>Política de Privacidade</h1>
          <p>
            <strong>Última atualização:</strong> 23 de fevereiro de 2026
          </p>

          <h2>1. Introdução</h2>
          <p>
            Esta Política de Privacidade descreve como {PSYCHOLOGIST.name} (CRP {PSYCHOLOGIST.crp}) coleta, usa e
            protege suas informações pessoais quando você visita este site ou contrata nossos serviços de psicoterapia.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <p>Podemos coletar as seguintes informações:</p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de email</li>
            <li>Número de telefone</li>
            <li>Informações sobre sua saúde mental (apenas durante sessões terapêuticas)</li>
            <li>Dados de navegação do site (cookies, IP, etc.)</li>
          </ul>

          <h2>3. Como Usamos Suas Informações</h2>
          <p>Usamos suas informações para:</p>
          <ul>
            <li>Agendar e conduzir sessões de psicoterapia</li>
            <li>Responder a suas consultas e mensagens</li>
            <li>Melhorar nosso site e serviços</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Enviar atualizações sobre nossos serviços (com seu consentimento)</li>
          </ul>

          <h2>4. Confidencialidade Terapêutica</h2>
          <p>
            Todas as informações compartilhadas durante sessões de psicoterapia são confidenciais e protegidas por sigilo
            profissional, conforme exigido pelo Código de Ética Profissional do Psicólogo. As exceções legais incluem
            situações de risco iminente à vida.
          </p>

          <h2>5. Proteção de Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não
            autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>6. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou quando você
            fornece consentimento explícito.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Este site utiliza cookies para melhorar sua experiência de navegação. Você pode desabilitar cookies em seu
            navegador, mas isso pode afetar a funcionalidade do site.
          </p>

          <h2>8. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir informações imprecisas</li>
            <li>Solicitar a exclusão de suas informações</li>
            <li>Revogar consentimento para processamento de dados</li>
          </ul>

          <h2>9. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em{" "}
            <a href={`mailto:${PSYCHOLOGIST.email}`}>{PSYCHOLOGIST.email}</a> ou pelo WhatsApp{" "}
            <a href={PSYCHOLOGIST.whatsappLink}>(41) 98515-5583</a>.
          </p>

          <h2>10. Alterações a Esta Política</h2>
          <p>
            Reservamos o direito de atualizar esta Política de Privacidade a qualquer momento. Alterações significativas
            serão comunicadas por email ou através de um aviso destacado no site.
          </p>
        </article>
      </div>
    </Layout>
  );
}
