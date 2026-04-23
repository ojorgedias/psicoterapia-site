import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  text: string;
  date: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({
  testimonials = defaultTestimonials,
  title = "O Que Meus Clientes Dizem",
  subtitle = "Avaliações reais de pacientes que passaram por psicoterapia comigo",
}: TestimonialsProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
            alt="Psicoterapeuta Jorge Dias"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4 shadow-md"
          />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{fontSize: '16px'}}>
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-semibold">
              5.0 baseado em 42 avaliações
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card text-card-foreground rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Source Attribution */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Avaliações verificadas do{" "}
            <a
              href="https://zenklub.com.br/psicologos/jorge-luiz-dias-gama-filho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold"
            >
              Zenklub
            </a>
            , plataforma de psicoterapia online confiável.
          </p>
        </div>
      </div>
    </section>
  );
}

export const defaultTestimonials: Testimonial[] = [
  {
    name: "Vivian",
    text: "Ótimo profissional está me ajudando bastante a desmistrificar várias coisas na minha personalidade.",
    date: "Agosto 2024",
    rating: 5,
  },
  {
    name: "Allen",
    text: "Um espaço seguro e acolhedor!",
    date: "Março 2025",
    rating: 5,
  },
  {
    name: "Miguel",
    text: "Excelente, tem me ajudado muito!",
    date: "Agosto 2024",
    rating: 5,
  },
  {
    name: "Felipe",
    text: "O cara é bom! Me descreveu muito bem na primeira sessão.",
    date: "Agosto 2024",
    rating: 5,
  },
  {
    name: "Alberto",
    text: "Gostaria de expressar minha gratidão pelo excelente trabalho do Jorge. Desde que comecei a terapia com ele, tenho experimentado um progresso significativo na minha autocompreensão.",
    date: "Junho 2024",
    rating: 5,
  },
  {
    name: "Thamires",
    text: "Os meus atendimentos com o Jorge tem sido muito satisfatório. Super ético o atendimento do Jorge.",
    date: "Julho 2024",
    rating: 5,
  },
  {
    name: "Ronaldo",
    text: "Acolhedor, dinâmico, excelente profissional",
    date: "Maio 2024",
    rating: 5,
  },
  {
    name: "Renato",
    text: "Bem comunicativo e sabe ouvir. Parabéns!",
    date: "Abril 2024",
    rating: 5,
  },
  {
    name: "Matheus",
    text: "Já faço acompanhamento com Jorge tem algum tempo e é realmente perceptível e gratificante a evolução.",
    date: "Março 2024",
    rating: 5,
  },
];
