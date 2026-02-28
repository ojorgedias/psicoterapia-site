import { Link } from 'wouter';
import { Calendar } from 'lucide-react';

export default function FloatingActionButton() {
  return (
    <>
      {/* FAB - Visible only on mobile */}
      <Link href="/contato">
        <a className="md:hidden fixed bottom-6 right-6 z-40 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in font-semibold">
          <Calendar size={20} />
          Agendar
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
