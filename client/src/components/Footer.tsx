import { Link } from "wouter";
import { PSYCHOLOGIST } from "@/../../shared/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About with Photo */}
          <div>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
              alt="Jorge Dias | Psicoterapia Clínica"
              className="w-20 h-20 rounded-full object-cover mb-3 shadow-md"
            />
            <h3 className="font-display text-lg font-semibold mb-2">Jorge Dias | Psicoterapia Clínica</h3>
            <p className="text-xs text-sidebar-foreground/80 font-semibold mb-3">
              Psicoterapeuta Clínico
            </p>
            <p className="text-sm text-sidebar-foreground/80">
              Atendimento psicoterapêutico online focado em autoconhecimento profundo, filosofia e pensamento integrativo.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terapia/adultos/crise-existencial" className="hover:text-sidebar-accent transition-colors">
                  Terapia para Adultos
                </Link>
              </li>
              <li>
                <Link href="/terapia/casais/conflitos-casal" className="hover:text-sidebar-accent transition-colors">
                  Terapia de Casal
                </Link>
              </li>
              <li>
                <Link href="/autoridade/psicoterapia-espiritualidade" className="hover:text-sidebar-accent transition-colors">
                  Psicoterapia e Espiritualidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-sidebar-accent transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sidebar-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-sidebar-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-sidebar-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${PSYCHOLOGIST.email}`}
                  className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors break-all"
                >
                  {PSYCHOLOGIST.email}
                </a>
              </li>
              <li>
                <a
                  href={PSYCHOLOGIST.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors font-semibold"
                >
                  WhatsApp: (41) 98515-5583
                </a>
              </li>
              <li className="text-sidebar-foreground/80 text-xs font-semibold">
                100% Online - Brasil e Exterior
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 text-xs">
            <Link href="/politica-privacidade" className="hover:text-sidebar-accent transition-colors">
              Política de Privacidade
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/termos-uso" className="hover:text-sidebar-accent transition-colors">
              Termos de Uso
            </Link>
          </div>
          <p className="text-center text-xs text-sidebar-foreground/60">
            &copy; {currentYear} Psicoterapia Clínica - {PSYCHOLOGIST.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
