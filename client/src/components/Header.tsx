import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-display text-2xl font-bold text-primary hover:text-accent transition-colors">
            Psicólogo Jorge Dias
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ServicesDropdown />
          <Link href="/sobre">
            <a className="text-foreground hover:text-primary transition-colors">Minha Abordagem</a>
          </Link>
          <Link href="/blog">
            <a className="text-foreground hover:text-primary transition-colors">Blog</a>
          </Link>
          <Link href="/faq">
            <a className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </Link>
          <a href="/contato" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200">
            Agendar Sessão
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/servicos">
              <a className="text-foreground hover:text-primary transition-colors font-semibold">Serviços</a>
            </Link>
            <Link href="/sobre">
              <a className="text-foreground hover:text-primary transition-colors">Minha Abordagem</a>
            </Link>
            <Link href="/blog">
              <a className="text-foreground hover:text-primary transition-colors">Blog</a>
            </Link>
            <Link href="/faq">
              <a className="text-foreground hover:text-primary transition-colors">FAQ</a>
            </Link>
            <a href="/contato" className="block text-center inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200">
              Agendar Sessão
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
