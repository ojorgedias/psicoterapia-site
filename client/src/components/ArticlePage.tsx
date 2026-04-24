import { ReactNode } from "react";
import Layout from "./Layout";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import { ReadingTime, RelatedArticles } from "./ArticleComponents";
import { Article } from "@/lib/content";

interface ArticlePageProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  readingTime: number;
  children: ReactNode;
  relatedArticles?: Article[];
}

export default function ArticlePage({
  title,
  breadcrumbs,
  readingTime,
  children,
  relatedArticles = [],
}: ArticlePageProps) {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose-clinical">
          <h1>{title}</h1>
          <ReadingTime minutes={readingTime} />

          {children}
        </article>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-border bg-secondary rounded-lg p-6">
          <div className="flex gap-4 items-start">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
              alt="Jorge Dias | Psicoterapia Clínica"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-md"
            />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Jorge Dias | Psicoterapia Clínica
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Psicoterapia Clínica Integrativa
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Especializado em crise existencial, autossabotagem, padrões familiares e integração psicoterapia-espiritualidade. Atendimento online para Brasil e exterior.
              </p>
            </div>
          </div>
        </div>

        {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}
      </div>
    </Layout>
  );
}
