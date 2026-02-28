import { MessageCircle } from 'lucide-react';

export default function FloatingActionButton() {
  const whatsappNumber = '5541985155583'; // Seu número com código do país e DDD
  const whatsappMessage = 'Olá! Gostaria de agendar uma sessão de psicoterapia.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* FAB - Visible only on mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
        aria-label="Agendar sessão via WhatsApp"
        title="Agendar sessão via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Pulse animation for visual attention */}
      <style>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

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

        @media (max-width: 768px) {
          a[aria-label="Agendar sessão via WhatsApp"] {
            animation: pulse-ring 2s infinite;
          }
        }
      `}</style>
    </>
  );
}
