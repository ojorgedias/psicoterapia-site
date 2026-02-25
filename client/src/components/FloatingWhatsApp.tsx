import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = '5541985155583';
  const message = encodeURIComponent('Olá Jorge! Gostaria de agendar uma sessão de psicoterapia.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      title="Enviar mensagem via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Enviar mensagem
        <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></div>
    </a>
  );
}
