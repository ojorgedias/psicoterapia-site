import { ReactNode } from "react";
import { Link } from "wouter";
import Layout from "./Layout";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import CTAButton from "./CTAButton";
import { RelatedArticles } from "./ArticleComponents";
import { Article } from "@/lib/content";

interface ServicePageProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  relatedArticles?: Article[];
  ctaText?: string;
}

export default function ServicePage({
  title,
  breadcrumbs,
  children,
  relatedArticles = [],
  ctaText = "Agendar Consulta",
}: ServicePageProps) {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose-clinical">
          <h1>{title}</h1>
          {children}

          <div className="divider-subtle"></div>

          <div className="text-center py-8">
            <p className="text-muted-foreground mb-6">
              Pronto para iniciar sua investigação?
            </p>
            <CTAButton href="/contato">{ctaText}</CTAButton>
          </div>
        </article>

        {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}
      </div>
    </Layout>
  );
}

/**
 * Helper component for rendering internal links within content
 */
interface InternalLinkProps {
  href: string;
  children: ReactNode;
}

export function InternalLink({ href, children }: InternalLinkProps) {
  return (
    <Link href={href}>
      <a className="link-internal">{children}</a>
    </Link>
  );
}
