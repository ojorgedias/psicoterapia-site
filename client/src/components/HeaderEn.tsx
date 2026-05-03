import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function HeaderEn() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);

  const specialties = [
    {
      title: "Individual Psychotherapy",
      route: "/en/about",
      description: "Existential crisis, self-sabotage, emotional regulation"
    },
    {
      title: "Couples Therapy",
      route: "/en/about",
      description: "Family patterns and relationship conflicts"
    },
    {
      title: "Integrative Psychotherapy",
      route: "/en/about",
      description: "Integrative philosophy and spirituality"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/en" className="font-display text-xl font-bold text-primary hover:text-accent transition-colors">
          Jorge Dias | Psychotherapy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Specialties Dropdown Desktop */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              Specialties
              <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-border min-w-max">
                {specialties.map((esp, idx) => (
                  <Link key={idx} href={esp.route} className="block px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0">
                    <div className="font-semibold">{esp.title}</div>
                    <div className="text-xs text-muted-foreground">{esp.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/en/about" className="text-foreground hover:text-primary transition-colors">
            About Me
          </Link>

          <Link href="/en/pillar" className="text-foreground hover:text-primary transition-colors">
            Essays
          </Link>

          <a
            href="https://your-substack-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            Read on Substack
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
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">

            {/* Specialties Accordion Mobile */}
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary hover:bg-secondary/80 transition-colors font-semibold text-foreground"
              >
                Specialties
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isSpecialtiesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isSpecialtiesOpen && (
                <div className="bg-background border-t border-border">
                  {specialties.map((esp, idx) => (
                    <Link
                      key={idx}
                      href={esp.route}
                      className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0"
                      onClick={() => { setIsSpecialtiesOpen(false); setIsMobileMenuOpen(false); }}
                    >
                      <div className="font-semibold text-sm">{esp.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{esp.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/en/about"
              className="text-foreground hover:text-primary transition-colors font-semibold px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Me
            </Link>

            <Link
              href="/en/pillar"
              className="text-foreground hover:text-primary transition-colors font-semibold px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Essays
            </Link>

            <a
              href="https://your-substack-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Read on Substack
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
