import { Link } from "wouter";
import { Clock } from "lucide-react";
import { Article } from "@/lib/content";

interface ReadingTimeProps {
  minutes: number;
}

export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <div className="reading-time flex items-center gap-2">
      <Clock size={16} />
      <span>{minutes} min de leitura</span>
    </div>
  );
}

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="related-articles">
      <div className="col-span-full mb-4">
        <h2 className="text-2xl font-display font-semibold">Continue sua investigação</h2>
        <p className="text-muted-foreground mt-2">
          Explore outros artigos e páginas relacionadas para aprofundar sua compreensão
        </p>
      </div>
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-muted-foreground">{article.readingTime} min</span>
            <Link href={article.route} className="text-primary hover:text-accent font-semibold">
              Ler mais →
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
