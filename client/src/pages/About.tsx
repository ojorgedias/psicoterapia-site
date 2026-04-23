import { useEffect } from 'react';
import { Link } from "wouter";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import { updatePageMeta } from "@/lib/seoMetadata";
import { useEEATSchema } from "@/components/EEATSchema";

export default function About() {
  useEEATSchema({
    pageType: 'about',
    title: 'Minha Abordagem Clínica - Psicoterapeuta Jorge Dias',
    description: 'Investigação filosófica e clínica rigorosa. Abordagem integrativa que combina psicanálise, filosofia existencial e compreensão neurofisiológica.',
    url: 'https://psicoterapia-site.com/sobre'
  });
  
  useEffect(() => {
    updatePageMeta('about');
  }, []);
  
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Minha Abordagem" }]} />

        <article className="prose-clinical">
          <div className="mb-12 -mx-4 md:mx-0">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
              alt="Psicoterapeuta Jorge Dias"
              className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg mb-6"
            />
          </div>

          <h1>Sobre Mim e Minha Abordagem Clínica</h1>
          <p>
            Acredito que a psicoterapia não deve ser um espaço para o paciente receber conselhos genéricos ou respostas prontas, mas sim um laboratório rigoroso de investigação pessoal. Ao longo de meus <strong>cinco anos de prática clínica</strong>, tenho me dedicado a ajudar pessoas a desarticularem os ciclos de autossabotagem e a recuperarem a autoria sobre as próprias histórias.
          </p>

          <h2>Formação e Embaraçamento Teórico</h2>
          <p>
            Sou psicoterapeuta formado em Psicoterapia pela <strong>Universidade Estadual de Londrina (UEL)</strong>. A minha forma de escutar e intervir clinicamente foge do senso comum e da psicoterapia superficial da internet. O meu trabalho é sustentado por uma integração profunda entre a psicoterapia analítica, onde os conceitos de Jung sobre a Sombra e o Inconsciente orientam a exploração das profundezas da psique, e o pensamento crítico da filosofia contemporânea, especialmente as dinâmicas de poder nas relações estudadas por Foucault.
          </p>
          <p>
            Além disso, expando a compreensão da mente humana ao dialogar com a cosmologia de pensadores indígenas, integrando perspectivas que ampliam a nossa visão sobre o que significa estar em equilíbrio consigo mesmo e com o mundo.
          </p>

          <h2>O Foco da Terapia</h2>
          <p>
            A minha clínica é o espaço para quem está exausto de viver na defensiva. Trabalhamos juntos para expor as "lealdades invisíveis" familiares, romper com a necessidade doentia de aprovação externa e desenvolver uma autonomia inabalável. O objetivo é que você suporte o desconforto de assumir quem realmente é, sem precisar pedir desculpas por existir.
          </p>

          <h2>Modalidade de Atendimento</h2>
          <div className="bg-secondary rounded-lg p-6 my-6 border border-border">
            <h3 className="font-display text-lg font-semibold mb-4">Atendimento Exclusivamente Online</h3>
            <p className="mb-0">
              Realizo atendimentos via videochamada para pacientes em todo o Brasil e no exterior. O formato online garante que você tenha acesso a um espaço terapêutico de alta profundidade, no conforto e na segurança do seu próprio ambiente.
            </p>
          </div>

          <h2>Confidencialidade e Ética</h2>
          <p>
            Toda comunicação é confidencial e protegida pelo rigoroso sigilo profissional exigido pelo sigilo profissional. Você pode compartilhar tudo sem medo de julgamentos. O espaço terapêutico é sagrado, seguro e inteiramente seu.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-6">
              Pronto para iniciar sua investigação?
            </p>
            <div className="flex justify-center">
              <CTAButton href="/contato">Agendar Sessão</CTAButton>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
