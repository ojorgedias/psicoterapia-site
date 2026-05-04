export default function FloatingActionButtonEn() {
  return (
    <>
      {/* Support FAB for EN section */}
      <a
        href="https://your-support-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in font-semibold text-base whitespace-nowrap"
      >
        <span>♥</span>
        <span>Support this research</span>
      </a>

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
