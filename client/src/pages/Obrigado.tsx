import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Obrigado() {
  // Centralizamos o link para facilitar caso precise mudar a mensagem no futuro
  const whatsappLink = "https://api.whatsapp.com/send?phone=5541985155583&text=Ol%C3%A1%20Jorge%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20psicoterapia.";

  useEffect(() => {
    // Bloqueia indexação para não sujar os dados do Google Ads no SEO
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // 1. Dispara a conversão para o Google Ads imediatamente ao carregar a página
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18119858794/atendimento_whatsapp'
      });
    }

    // 2. Redireciona o usuário para o WhatsApp após 2.5 segundos
    // Esse tempo garante que o evento do Google Ads foi enviado com sucesso antes de sair da página
    const timeoutId = setTimeout(() => {
      window.location.href = whatsappLink;
    }, 2500);

    return () => {
      if (document.head.contains(meta)) {
        document.head.removeChild(meta);
      }
      // Limpa o cronômetro caso o usuário feche a aba antes do tempo
      clearTimeout(timeoutId); 
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center text-center p-6">
      <div className="max-w-xl">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} className="logo mb-12 block">
          Jorge Dias
        </motion.span>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-4xl mb-8">
          Conectando ao WhatsApp...
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-accent font-light mb-12">
          Aguarde um instante. Você está sendo redirecionado para conversar diretamente com o Jorge.
        </motion.p>
        
        {/* Fallback caso o navegador mobile do usuário bloqueie redirecionamentos automáticos */}
        <a href={whatsappLink} className="btn-high-ticket inline-block text-sm">
          Abrir conversa manualmente
        </a>
        
        <div className="mt-16">
          <Link href="/" className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
}