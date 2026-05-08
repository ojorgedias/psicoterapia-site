import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function HeaderEn() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link href="/en" className="font-display text-2xl font-bold text-primary hover:text-accent transition-colors leading-tight">
          Jorge Dias<br />
          <span className="text-sm font-normal text-muted-foreground tracking-wide">Research &amp; Essays</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/en" className="text-base text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/en/about" className="text-base text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/en/pillar" className="text-base text-foreground hover:text-primary transition-colors">
            Pillar Essay
          </Link>
          <a
            href="https://diasjorge.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Subscribe — free
          </a>
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
          <div className="container max-w-4xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/en"
              className="text-foreground hover:text-primary transition-colors text-base font-medium px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/en/about"
              className="text-foreground hover:text-primary transition-colors text-base font-medium px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/en/pillar"
              className="text-foreground hover:text-primary transition-colors text-base font-medium px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pillar Essay
            </Link>
            <a
              href="https://diasjorge.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-3 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:opacity-90 transition-opacity mt-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subscribe — free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
