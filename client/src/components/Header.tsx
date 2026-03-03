import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEspecialidadesOpen, setIsEspecialidadesOpen] = useState(false);

  // Macrocategorias de especialidades
  const especialidades = [
    {
      title: "Terapia Individual",
      route: "/terapia/adultos/crise-existencial",
      description: "Crise existencial, autossabotagem, regulação emocional"
    },
    {
      title: "Terapia de Casal",
      route: "/terapia/casais/conflitos-casal",
      description: "Padrões familiares e conflitos de relacionamento"
    },
    {
      title: "Psicologia Integrativa",
      route: "/autoridade/psicologia-espiritualidade",
      description: "Filosofia integrativa e espiritualidade"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-bold text-primary hover:text-accent transition-colors">
          Psicólogo Jorge Dias
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Especialidades Dropdown Desktop */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              Especialidades
              <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
            </button>

            {/* Desktop Dropdown Menu */}
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-border min-w-max">
                {especialidades.map((esp, idx) => (
                  <Link key={idx} href={esp.route} className="block px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0">
                    <div className="font-semibold">{esp.title}</div>
                    <div className="text-xs text-muted-foreground">{esp.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sobre Mim (incorpora Minha Abordagem) */}
          <Link href="/sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre Mim
          </Link>

          {/* Blog */}
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>

          {/* CTA Button */}
          <Link href="/contato" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg">
            Agendar Sessão
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            
            {/* Especialidades Accordion Mobile */}
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setIsEspecialidadesOpen(!isEspecialidadesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary hover:bg-secondary/80 transition-colors font-semibold text-foreground"
              >
                Especialidades
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${isEspecialidadesOpen ? "rotate-180" : ""}`} 
                />
              </button>

              {/* Accordion Content */}
              {isEspecialidadesOpen && (
                <div className="bg-background border-t border-border">
                  {especialidades.map((esp, idx) => (
                    <Link
                      key={idx}
                      href={esp.route}
                      className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0"
                      onClick={() => {
                        setIsEspecialidadesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-sm">{esp.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{esp.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sobre Mim */}
            <Link 
              href="/sobre" 
              className="text-foreground hover:text-primary transition-colors font-semibold px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Mim
            </Link>

            {/* Blog */}
            <Link 
              href="/blog" 
              className="text-foreground hover:text-primary transition-colors font-semibold px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            {/* CTA Button - High Contrast */}
            <Link 
              href="/contato" 
              className="block text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Sessão
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
