import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const clusters = [
    {
      title: "Terapia para Adultos",
      services: [
        { title: "Crise Existencial", route: "/terapia/adultos/crise-existencial" },
        { title: "Autossabotagem", route: "/terapia/adultos/autossabotagem" },
        { title: "Regulação Emocional", route: "/terapia/adultos/regulacao-emocional" },
        { title: "Autonomia e Identidade", route: "/terapia/adultos/autonomia-identidade" },
      ],
    },
    {
      title: "Terapia para Casais",
      services: [
        { title: "Padrões Familiares", route: "/terapia/casais/padroes-familiares" },
        { title: "Conflitos de Casal", route: "/terapia/casais/conflitos-casal" },
        { title: "Padrões de Relacionamento", route: "/terapia/casais/padroes-relacionamento" },
      ],
    },
    {
      title: "Psicoterapia e Espiritualidade",
      services: [
        { title: "Psicoterapia e Espiritualidade", route: "/autoridade/psicoterapia-espiritualidade" },
        { title: "Filosofia Integrativa", route: "/autoridade/filosofia-integrativa" },
      ],
    },
  ];

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      >
        Serviços
        <ChevronDown size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop Dropdown */}
      <div className="hidden md:block absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-border min-w-max">
          {/* "Ver Todos os Serviços" Link */}
          <Link href="/servicos">
            <a className="block px-6 py-3 text-primary font-semibold hover:bg-secondary rounded-t-lg border-b border-border transition-colors">
              Ver Todos os Serviços →
            </a>
          </Link>

          {/* Clusters */}
          {clusters.map((cluster, idx) => (
            <div key={idx} className={idx > 0 ? "border-t border-border" : ""}>
              <div className="px-6 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {cluster.title}
              </div>
              {cluster.services.map((service, serviceIdx) => (
                <Link key={serviceIdx} href={service.route}>
                  <a className="block px-6 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full mt-2 bg-card text-card-foreground rounded-lg shadow-lg border border-border min-w-max z-50">
          {/* "Ver Todos os Serviços" Link */}
          <Link href="/servicos">
            <a className="block px-6 py-3 text-primary font-semibold hover:bg-secondary rounded-t-lg border-b border-border transition-colors">
              Ver Todos os Serviços →
            </a>
          </Link>

          {/* Clusters */}
          {clusters.map((cluster, idx) => (
            <div key={idx} className={idx > 0 ? "border-t border-border" : ""}>
              <div className="px-6 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {cluster.title}
              </div>
              {cluster.services.map((service, serviceIdx) => (
                <Link key={serviceIdx} href={service.route}>
                  <a
                    className="block px-6 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </a>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
