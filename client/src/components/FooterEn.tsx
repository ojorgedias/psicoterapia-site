import { Link } from "wouter";
import { PSYCHOLOGIST } from "@/../../shared/const";

export default function FooterEn() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">Jorge Dias | Clinical Psychotherapy</h3>
            <p className="text-xs text-sidebar-foreground/80 font-semibold mb-3">
              Clinical Psychotherapist
            </p>
            <p className="text-sm text-sidebar-foreground/80">
              Online psychotherapeutic care focused on deep self-knowledge, philosophy, and integrative thinking.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/about" className="hover:text-sidebar-accent transition-colors">
                  Individual Psychotherapy
                </Link>
              </li>
              <li>
                <Link href="/en/about" className="hover:text-sidebar-accent transition-colors">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="/en/about" className="hover:text-sidebar-accent transition-colors">
                  Psychotherapy &amp; Spirituality
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/about" className="hover:text-sidebar-accent transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/en/pillar" className="hover:text-sidebar-accent transition-colors">
                  Pillar Essay
                </Link>
              </li>
              <li>
                <Link href="/en/essays/illusion-of-the-individual" className="hover:text-sidebar-accent transition-colors">
                  Essays
                </Link>
              </li>
              <li>
                <a
                  href="https://your-substack-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Substack
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${PSYCHOLOGIST.email}`}
                  className="text-sidebar-foreground/80 hover:text-sidebar-accent transition-colors break-all"
                >
                  {PSYCHOLOGIST.email}
                </a>
              </li>
              <li className="text-sidebar-foreground/80 text-xs font-semibold">
                100% Online — Brazil and Abroad
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <p className="text-center text-xs text-sidebar-foreground/60">
            &copy; {currentYear} Clinical Psychotherapy — {PSYCHOLOGIST.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
