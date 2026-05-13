import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-6 text-center">
      <h1 className="font-display text-6xl md:text-8xl mb-4 opacity-20">404</h1>
      <h2 className="text-2xl font-display mb-6">Página não encontrada</h2>
      <p className="text-muted-foreground mb-12 max-w-md mx-auto">
        A página que você procura não existe ou foi movida durante a nossa reestruturação.
      </p>
      <Link href="/" className="btn-high-ticket">
        Voltar ao início
      </Link>
    </div>
  );
}
