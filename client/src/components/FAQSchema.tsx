import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona a terapia online?",
    answer: "A terapia é realizada 100% online via videochamada. Você pode agendar sessões em horários flexíveis, de qualquer lugar do Brasil ou exterior. Utilizamos plataforma segura com criptografia end-to-end."
  },
  {
    question: "Qual é a duração de uma sessão?",
    answer: "Cada sessão tem duração de 50 minutos. Recomendo sessões semanais para melhor acompanhamento, mas a frequência é ajustada conforme sua necessidade e disponibilidade."
  },
  {
    question: "Quanto custa uma sessão?",
    answer: "Os valores variam conforme a modalidade de atendimento. Entre em contato via WhatsApp ou Calendly para conhecer os pacotes disponíveis e promoções vigentes."
  },
  {
    question: "Como funciona o agendamento?",
    answer: "Você pode agendar diretamente pelo Calendly (acesso instantâneo) ou entrar em contato via WhatsApp. Após confirmar o horário, você receberá o link da videochamada por email."
  },
  {
    question: "Qual é sua formação profissional?",
    answer: "Sou psicoterapeuta formado em Psicoterapia pela Universidade Estadual de Londrina (UEL), com 5+ anos de experiência clínica. Minha abordagem integra psicoterapia analítica (Jung), filosofia (Foucault) e cosmologias indígenas."
  },
  {
    question: "Como é a primeira sessão?",
    answer: "A primeira sessão é uma conversa exploratória. Você compartilha o que o trouxe até aqui, e eu ouço atentamente para entender sua situação. Não há pressão para 'resolver' nada nesse primeiro encontro."
  },
  {
    question: "Vocês atendem casos de ansiedade e depressão?",
    answer: "Sim, trabalho com diversos temas: ansiedade, depressão, padrões familiares, relacionamentos, crise existencial, narcisismo e autossabotagem. Cada caso é único e merece uma abordagem personalizada."
  },
  {
    question: "Qual é a diferença entre sua abordagem e outras terapias?",
    answer: "Meu trabalho vai além de técnicas prontas. Realizo uma investigação profunda para desvendar as regras invisíveis que governam você, unindo rigor científico com reflexão filosófica e sabedoria ancestral."
  }
];

export function FAQSchema() {
  useEffect(() => {
    // Gerar Schema JSON-LD para FAQ
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Adicionar script ao head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // Componente apenas injeta Schema, não renderiza nada
}

export { faqData };
