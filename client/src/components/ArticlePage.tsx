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

        {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}
      </div>
    </Layout>
  );
}
