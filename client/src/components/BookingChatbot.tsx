import { useState } from 'react';
import { MessageCircle, X, Send, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimeSlot {
  day: string;
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { day: "Segunda", time: "09:00", available: true },
  { day: "Segunda", time: "10:30", available: true },
  { day: "Segunda", time: "14:00", available: true },
  { day: "Terça", time: "09:00", available: true },
  { day: "Terça", time: "15:30", available: true },
  { day: "Quarta", time: "10:00", available: true },
  { day: "Quarta", time: "16:00", available: true },
  { day: "Quinta", time: "09:30", available: true },
  { day: "Quinta", time: "14:30", available: true },
  { day: "Sexta", time: "10:00", available: true },
  { day: "Sexta", time: "15:00", available: true },
];

type ChatMessage = {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
};

export function BookingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Olá! 👋 Bem-vindo. Gostaria de agendar uma sessão comigo?',
      timestamp: new Date()
    }
  ]);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<'greeting' | 'time-selection' | 'confirmation'>('greeting');

  const handleStartBooking = () => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: 'Sim, gostaria de agendar',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Ótimo! 📅 Abaixo estão os horários disponíveis para esta semana. Qual você prefere?',
        timestamp: new Date()
      }]);
      setStep('time-selection');
    }, 500);
  };

  const handleSelectTime = (slot: TimeSlot) => {
    setSelectedTime(slot);
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: `${slot.day} às ${slot.time}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `Perfeito! 🎯 Confirmando sua sessão para ${slot.day} às ${slot.time}. Vou redirecionar você para o Calendly para finalizar o agendamento.`,
        timestamp: new Date()
      }]);
      setStep('confirmation');
    }, 500);
  };

  const handleConfirmBooking = () => {
    if (selectedTime) {
      // Redirecionar para Calendly
      window.open('https://calendly.com/jorgedias', '_blank');
      setIsOpen(false);
      // Reset
      setStep('greeting');
      setSelectedTime(null);
      setMessages([{
        id: '1',
        type: 'bot',
        content: 'Olá! 👋 Bem-vindo. Gostaria de agendar uma sessão comigo?',
        timestamp: new Date()
      }]);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5541985155583?text=Olá, gostaria de agendar uma sessão', '_blank');
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Abrir chatbot de agendamento"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Janela do Chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-24px)] bg-white rounded-lg shadow-2xl flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Agendar Sessão</h3>
            <p className="text-sm text-primary-foreground/80">Escolha um horário disponível</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Time Selection Grid */}
            {step === 'time-selection' && (
              <div className="space-y-3 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectTime(slot)}
                      className="p-2 text-sm border border-gray-300 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <Clock className="w-3 h-3" />
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="border-t p-4 space-y-2 bg-white rounded-b-lg">
            {step === 'greeting' && (
              <Button
                onClick={handleStartBooking}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Agendar Agora
              </Button>
            )}

            {step === 'confirmation' && (
              <>
                <Button
                  onClick={handleConfirmBooking}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirmar no Calendly
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full"
                >
                  Conversar no WhatsApp
                </Button>
              </>
            )}

            {step === 'greeting' && (
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full"
              >
                Ou fale comigo no WhatsApp
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
