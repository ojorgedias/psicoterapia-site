import { Link } from 'wouter';

export default function FloatingActionButton() {
  return (
    <>
      {/* Large Rectangular FAB - Visible only on mobile */}
      <Link href="/contato">
        <a className="md:hidden fixed bottom-6 right-6 z-50 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in font-semibold text-base whitespace-nowrap">
          Agendar Sessão
        </a>
      </Link>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
