import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Obrigado() {
  useEffect(() => {
    // Bloqueia indexação para não sujar os dados do Google Ads
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // Dispara a conversão para o Google Ads
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18119858794/atendimento_whatsapp'
      });
    }

    return () => {
      if (document.head.contains(meta)) {
        document.head.removeChild(meta);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center text-center p-6">
      <div className="max-w-xl">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} className="logo mb-12 block">Jorge Dias</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl mb-8">Iniciando sua jornada.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-accent font-light mb-12">
          O seu contato foi enviado. Se a conversa no WhatsApp não abriu, clique no botão abaixo.
        </motion.p>
        <a href="https://api.whatsapp.com/send?phone=5541985155583&text=Ol%C3%A1%2C%20Jorge.%20Gostaria%20de%20agendar%20uma%20sessao%20de%20psicoterapia." className="btn-high-ticket inline-block">
          Abrir conversa no WhatsApp
        </a>
        <div className="mt-16">
          <Link href="/" className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Voltar para o site</Link>
        </div>
      </div>
    </div>
  );
}