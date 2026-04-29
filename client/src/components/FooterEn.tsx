import { Link } from "wouter";
import { PSYCHOLOGIST } from "@/../../shared/const";

export default function FooterEn() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About with Photo */}
          <div>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
              alt="Jorge Dias | Clinical Psychotherapy"
              className="w-20 h-20 rounded-full object-cover mb-3 shadow-md"
            />
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
                <Link href="/en/contact" className="hover:text-sidebar-accent transition-colors">
                  Individual Psychotherapy
                </Link>
              </li>
              <li>
                <Link href="/en/contact" className="hover:text-sidebar-accent transition-colors">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="/en/contact" className="hover:text-sidebar-accent transition-colors">
                  Psychotherapy & Spirituality
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/about" className="hover:text-sidebar-accent transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="https://your-substack-link.com" external={true} className="hover:text-sidebar-accent transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/en/contact" className="hover:text-sidebar-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
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
                100% Online - Brazil and Abroad
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 text-xs">
            <Link href="/en/privacy-policy" className="hover:text-sidebar-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/en/terms-of-use" className="hover:text-sidebar-accent transition-colors">
              Terms of Use
            </Link>
          </div>
          <p className="text-center text-xs text-sidebar-foreground/60">
            &copy; {currentYear} Clinical Psychotherapy - {PSYCHOLOGIST.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
