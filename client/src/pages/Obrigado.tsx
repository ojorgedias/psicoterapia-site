import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Obrigado() {
  useEffect(() => {
    // Adiciona noindex dinamicamente para SEO
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);

    // Envia evento de conversão se o gtag estiver disponível
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18119858794/atendimento_whatsapp'
      });
    }

    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center text-center p-6 selection:bg-accent/30 selection:text-primary">
      <div className="max-w-xl">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="logo mb-12 block"
        >
          Jorge Dias
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl mb-8"
        >
          Iniciando sua jornada.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-accent font-light leading-relaxed mb-12"
        >
          O seu contato foi enviado. Se a conversa no WhatsApp não abriu automaticamente, 
          clique no botão abaixo para falar diretamente comigo.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://api.whatsapp.com/send?phone=5541985155583&text=Ol%C3%A1%2C%20Jorge.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento."
            className="btn-high-ticket inline-block"
          >
            Abrir conversa no WhatsApp
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Link href="/" className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            Voltar para o site
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
