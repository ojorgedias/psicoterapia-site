import { Link } from "wouter";

export default function FooterEn() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground mt-16">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Identity */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-2">Jorge Dias</h3>
            <p className="text-sm text-sidebar-foreground/70 font-medium mb-3 uppercase tracking-wide">
              Researcher &amp; Writer
            </p>
            <p className="text-base text-sidebar-foreground/80 leading-relaxed">
              Independent research at the intersection of psychoanalysis, critical theory, and
              indigenous thought. Based in Brazil.
            </p>
          </div>

          {/* Reading */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Reading</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/en/pillar" className="hover:text-sidebar-accent transition-colors">
                  Pillar Essay
                </Link>
              </li>
              <li>
                <Link href="/en/essays/illusion-of-the-individual" className="hover:text-sidebar-accent transition-colors">
                  The Illusion of the Individual
                </Link>
              </li>
              <li>
                <Link href="/en/essays/collective-shadow" className="hover:text-sidebar-accent transition-colors">
                  The Collective Shadow
                </Link>
              </li>
              <li>
                <Link href="/en/about" className="hover:text-sidebar-accent transition-colors">
                  About the Author
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Support</h3>
            <p className="text-base text-sidebar-foreground/80 mb-4 leading-relaxed">
              If this research adds value to your thinking, consider supporting it directly.
            </p>
            <a
              href="https://your-support-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
            >
              ♥ Support this research
            </a>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-6">
          <p className="text-center text-sm text-sidebar-foreground/50">
            &copy; {currentYear} Jorge Dias — Research &amp; Essays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
