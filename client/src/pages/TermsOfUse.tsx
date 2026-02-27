import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PSYCHOLOGIST } from "@/../../shared/const";

export default function TermsOfUse() {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]} />

        <article className="prose-clinical">
          <h1>Termos de Uso</h1>
          <p>
            <strong>Última atualização:</strong> 23 de fevereiro de 2026
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar este site, você concorda em cumprir estes Termos de Uso. Se você não concorda com qualquer
            parte destes termos, por favor, não use o site.
          </p>

          <h2>2. Uso Licenciado</h2>
          <p>
            É concedida a você uma licença limitada, não exclusiva e revogável para acessar e usar este site apenas para
            fins pessoais e não comerciais.
          </p>

          <h2>3. Restrições de Uso</h2>
          <p>Você concorda em não:</p>
          <ul>
            <li>Reproduzir, duplicar ou copiar conteúdo sem permissão</li>
            <li>Usar o site para fins ilegais ou prejudiciais</li>
            <li>Tentar ganhar acesso não autorizado ao site</li>
            <li>Transmitir vírus ou código malicioso</li>
            <li>Coletar dados pessoais de outros usuários</li>
          </ul>

          <h2>4. Conteúdo do Site</h2>
          <p>
            Todo o conteúdo deste site, incluindo textos, imagens e gráficos, é propriedade de {PSYCHOLOGIST.name} ou
            seus fornecedores de conteúdo e é protegido por leis de direitos autorais.
          </p>

          <h2>5. Serviços de Psicoterapia</h2>
          <p>
            Os serviços de psicoterapia oferecidos são fornecidos por {PSYCHOLOGIST.name}, psicólogo registrado com CRP{" "}
            {PSYCHOLOGIST.crp}. Estes serviços:
          </p>
          <ul>
            <li>Não substituem atendimento médico de emergência</li>
            <li>Requerem consentimento informado antes do início do tratamento</li>
            <li>Estão sujeitos ao Código de Ética Profissional do Psicólogo</li>
            <li>Podem ser encerrados por qualquer uma das partes com notificação apropriada</li>
          </ul>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            Este site e seus conteúdos são fornecidos "como estão". {PSYCHOLOGIST.name} não oferece garantias de qualquer
            tipo, expressas ou implícitas. Em nenhum caso {PSYCHOLOGIST.name} será responsável por danos indiretos,
            incidentais ou consequentes.
          </p>

          <h2>7. Links Externos</h2>
          <p>
            Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou
            práticas de privacidade desses sites.
          </p>

          <h2>8. Modificações dos Termos</h2>
          <p>
            Reservamos o direito de modificar estes Termos de Uso a qualquer momento. Alterações entram em vigor
            imediatamente após a publicação no site.
          </p>

          <h2>9. Rescisão</h2>
          <p>
            Podemos encerrar ou suspender sua conta e acesso ao site a qualquer momento, sem aviso prévio, por violação
            destes termos.
          </p>

          <h2>10. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil, especificamente do Estado de
            São Paulo.
          </p>

          <h2>11. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em{" "}
            <a href={`mailto:${PSYCHOLOGIST.email}`}>{PSYCHOLOGIST.email}</a> ou pelo WhatsApp{" "}
            <a href={PSYCHOLOGIST.whatsappLink}>(41) 98515-5583</a>.
          </p>
        </article>
      </div>
    </Layout>
  );
}
