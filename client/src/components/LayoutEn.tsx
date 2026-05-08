import { ReactNode, useEffect } from "react";
import HeaderEn from "./HeaderEn";
import FooterEn from "./FooterEn";
import FloatingActionButtonEn from "./FloatingActionButtonEn";

interface LayoutEnProps {
  children: ReactNode;
}

export default function LayoutEn({ children }: LayoutEnProps) {
  useEffect(() => {
    // Set document language to English for the /en section
    document.documentElement.lang = "en";

    // Canonical base URL
    const canonicalUrl = `https://www.psicoterapeutajorgedias.online${window.location.pathname}`;

    // Update or create canonical link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Open Graph locale
    let ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement("meta");
      ogLocale.setAttribute("property", "og:locale");
      document.head.appendChild(ogLocale);
    }
    ogLocale.content = "en_US";

    // Open Graph type
    let ogType = document.querySelector<HTMLMetaElement>('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.content = "website";

    // Open Graph site name
    let ogSiteName = document.querySelector<HTMLMetaElement>('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement("meta");
      ogSiteName.setAttribute("property", "og:site_name");
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.content = "Jorge Dias — Research & Essays";

    // hreflang: en version
    let hreflangEn = document.querySelector<HTMLLinkElement>('link[hreflang="en"]');
    if (!hreflangEn) {
      hreflangEn = document.createElement("link");
      hreflangEn.rel = "alternate";
      hreflangEn.setAttribute("hreflang", "en");
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.href = "https://www.psicoterapeutajorgedias.online/en";

    // hreflang: pt-BR version
    let hreflangPt = document.querySelector<HTMLLinkElement>('link[hreflang="pt-BR"]');
    if (!hreflangPt) {
      hreflangPt = document.createElement("link");
      hreflangPt.rel = "alternate";
      hreflangPt.setAttribute("hreflang", "pt-BR");
      document.head.appendChild(hreflangPt);
    }
    hreflangPt.href = "https://www.psicoterapeutajorgedias.online/";

    // Cleanup: restore Portuguese lang when leaving /en
    return () => {
      document.documentElement.lang = "pt-BR";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeaderEn />
      <main className="flex-1">{children}</main>
      <FooterEn />
      <FloatingActionButtonEn />
    </div>
  );
}
