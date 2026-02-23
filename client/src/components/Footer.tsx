import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Psicoterapia Clínica</h3>
            <p className="text-sm text-sidebar-foreground/80">
              Atendimento psicológico online focado em autoconhecimento profundo, filosofia e pensamento integrativo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-sidebar-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="hover:text-sidebar-accent transition-colors">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:text-sidebar-accent transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="hover:text-sidebar-accent transition-colors">Contato</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm text-sidebar-foreground/80 mb-2">
              Presidente Epitácio - SP
            </p>
            <p className="text-sm text-sidebar-foreground/80">
              Atendimento online para todo o Brasil e exterior
            </p>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8 text-center text-sm text-sidebar-foreground/60">
          <p>&copy; {currentYear} Psicoterapia Clínica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
