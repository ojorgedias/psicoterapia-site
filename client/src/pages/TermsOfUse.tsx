import { PSYCHOLOGIST } from "@/../../shared/const";
import { Link } from "wouter";

export default function TermsOfUse() {
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
          <h1 className="font-display text-4xl mb-8">Termos de Uso</h1>
          <p className="text-sm text-muted-foreground mb-12">
            <strong>Última atualização:</strong> 23 de fevereiro de 2026
          </p>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-display mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar este site, você concorda em cumprir estes Termos de Uso. Se você não concorda com qualquer
                parte destes termos, por favor, não use o site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">2. Uso Licenciado</h2>
              <p>
                É concedida a você uma licença limitada, não exclusiva e revogável para acessar e usar este site apenas para
                fins pessoais e não comerciais.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">3. Restrições de Uso</h2>
              <p>Você concorda em não:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reproduzir, duplicar ou copiar conteúdo sem permissão</li>
                <li>Usar o site para fins ilegais ou prejudiciais</li>
                <li>Tentar ganhar acesso não autorizado ao site</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Coletar dados pessoais de outros usuários</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">4. Conteúdo do Site</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, imagens e gráficos, é propriedade de {PSYCHOLOGIST.name} ou
                seus fornecedores de conteúdo e é protegido por leis de direitos autorais.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">5. Serviços de Psicoterapia</h2>
              <p>
                Os serviços de psicoterapia oferecidos são fornecidos por {PSYCHOLOGIST.name}. Estes serviços:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não substituem atendimento médico de emergência</li>
                <li>Requerem consentimento informado antes do início do tratamento</li>
                <li>Estão sujeitos ao sigilo profissional e ética clínica</li>
                <li>Podem ser encerrados por qualquer uma das partes com notificação apropriada</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">6. Limitação de Responsabilidade</h2>
              <p>
                Este site e seus conteúdos são fornecidos "como estão". {PSYCHOLOGIST.name} não oferece garantias de qualquer
                tipo, expressas ou implícitas. Em nenhum caso {PSYCHOLOGIST.name} será responsável por danos indiretos,
                incidentais ou consequentes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">7. Links Externos</h2>
              <p>
                Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou
                práticas de privacidade desses sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">8. Modificações dos Termos</h2>
              <p>
                Reservamos o direito de modificar estes Termos de Uso a qualquer momento. Alterações entram em vigor
                imediatamente após a publicação no site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">9. Rescisão</h2>
              <p>
                Podemos encerrar ou suspender sua conta e acesso ao site a qualquer momento, sem aviso prévio, por violação
                destes termos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">10. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">11. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em{" "}
                <a href={`mailto:${PSYCHOLOGIST.email}`} className="underline">{PSYCHOLOGIST.email}</a> ou pelo WhatsApp{" "}
                <a href={PSYCHOLOGIST.whatsappLink} className="underline">(41) 98515-5583</a>.
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
