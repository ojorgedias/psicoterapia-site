import { Link } from "wouter";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles } from "@/lib/content";
import { Clock } from "lucide-react";

export default function BlogList() {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Blog" }]} />

        <article className="prose-clinical">
          <h1>Blog</h1>
          <p>
            Artigos sobre psicoterapia clínica, filosofia, relacionamentos, desenvolvimento pessoal e pensamento integrativo.
          </p>

          <div className="space-y-6 mt-12">
            {blogArticles.map((article) => (
              <div key={article.id} className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
                <Link href={article.route}>
                  <a className="group">
                    <h2 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                  </a>
                </Link>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    <span>{article.readingTime} min de leitura</span>
                  </div>
                  <Link href={article.route}>
                    <a className="text-primary hover:text-accent font-semibold">Ler mais →</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Layout>
  );
}
