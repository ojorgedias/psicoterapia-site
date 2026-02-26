import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import AutossabotagemInconsciente from "./pages/blog/AutossabotagemInconsciente";
import PadroesFamiliaresRelacionamentos from "./pages/blog/PadroesFamiliaresRelacionamentos";
import NarcisismoEncoberto from "./pages/blog/NarcisismoEncoberto";
import MaeNarcisista from "./pages/blog/MaeNarcisista";
import MedoDeSerFeliz from "./pages/blog/MedoDeSer Feliz";
import BurnoutDigital from "./pages/blog/BurnoutDigital";
import SindromeImpostorTerapeutas from "./pages/blog/SindromeImpostorTerapeutas";
import SpiritualBypass from "./pages/blog/SpiritualBypass";
import IntegracaoPsicologiaEspiritualidade from "./pages/blog/IntegracaoPsicologiaEspiritualidade";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/BlogList";
import CrisisExistential from "./pages/services/CrisisExistential";
import SelfSabotage from "./pages/services/SelfSabotage";
import EmotionalRegulation from "./pages/services/EmotionalRegulation";
import AutonomyIdentity from "./pages/services/AutonomyIdentity";
import FamilyPatterns from "./pages/services/FamilyPatterns";
import CoupleConflicts from "./pages/services/CoupleConflicts";
import RelationshipPatterns from "./pages/services/RelationshipPatterns";
import PsychologySpirituality from "./pages/services/PsychologySpirituality";
import IntegrativePhilosophy from "./pages/services/IntegrativePhilosophy";
import Article1 from "./pages/blog/Article1";
import Article2 from "./pages/blog/Article2";
import Article3 from "./pages/blog/Article3";
import Article4 from "./pages/blog/Article4";
import Article5 from "./pages/blog/Article5";
import Article6 from "./pages/blog/Article6";
import Article7 from "./pages/blog/Article7";
import Article8 from "./pages/blog/Article8";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Services from "./pages/Services";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ConceptosFundamentais from "./pages/ConceptosFundamentais";
import AutossabotagemPilar from "./pages/content/AutossabotagemPilar";
import PadroesFamiliaresPilar from "./pages/content/PadroesFamiliaresPilar";
import CriseExistencialPilar from "./pages/content/CriseExistencialPilar";
import AnsiedadePilar from "./pages/content/AnsiedadePilar";
import NarcisismoPilar from "./pages/content/NarcisismoPilar";
import SabotagemRelacionamento from "./pages/blog/SabotagemRelacionamento";
import PorQueDesistoTudo from "./pages/blog/PorQueDesistoTudo";
import SintomasAutossabotagem from "./pages/blog/SintomasAutossabotagem";
import PreguicaVsAutossabotagem from "./pages/blog/PreguicaVsAutossabotagem";
import FobiaSocial from "./pages/blog/FobiaSocial";
import NarcisismoEraDigital from "./pages/blog/NarcisismoEraDigital";
import CriseExistencial30 from "./pages/blog/CriseExistencial30";
import DepressionVsCrise from "./pages/blog/DepressionVsCrise";
import VidaPerdeSentido from "./pages/blog/VidaPerdeSentido";
import CriseIdentidadeProfissional from "./pages/blog/CriseIdentidadeProfissional";
import AtaquePanico from "./pages/blog/AtaquePanico";
import TerapiaOnlineAnsiedade from "./pages/blog/TerapiaOnlineAnsiedade";
import AnsiedadeDomingoNoite from "./pages/blog/AnsiedadeDomingoNoite";
import ParceiroComNarcisismo from "./pages/blog/ParceiroComNarcisismo";
import RecuperarAutoestima from "./pages/blog/RecuperarAutoestima";
import EgoísmoVsNarcisismo from "./pages/blog/EgoísmoVsNarcisismo";
import QuebrarCiclosFamiliares from "./pages/blog/QuebrarCiclosFamiliares";
import CulpaAfastarFamilia from "./pages/blog/CulpaAfastarFamilia";
import RepeticaoPadroesFamiliares from "./pages/blog/RepeticaoPadroesFamiliares";
import MaesImaturas from "./pages/blog/MaesImaturas";

// Update document title and meta tags
if (typeof document !== 'undefined') {
  document.title = 'Psicólogo Jorge Dias - Psicoterapia Clínica Online';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Psicoterapia clínica com Jorge Dias (CRP 08/31462). Especializado em crise existencial, autossabotagem e relacionamentos. Atendimento online Brasil e presencial em Presidente Epitácio - SP.');
  }
}

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servicos"} component={Services} />
      <Route path={"/sobre"} component={About} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/blog"} component={BlogList} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/conceitos-fundamentais"} component={ConceptosFundamentais} />
      
      {/* Pillar Pages for Long-Tail SEO */}
      <Route path={"/autossabotagem"} component={AutossabotagemPilar} />
      <Route path={"/padroes-familiares"} component={PadroesFamiliaresPilar} />
      <Route path={"/crise-existencial"} component={CriseExistencialPilar} />
      <Route path={"/ansiedade"} component={AnsiedadePilar} />
      <Route path={"/narcisismo"} component={NarcisismoPilar} />
      
      {/* Cluster 1: Terapia para Adultos */}
      <Route path={"/terapia/adultos/crise-existencial"} component={CrisisExistential} />
      <Route path={"/terapia/adultos/autossabotagem"} component={SelfSabotage} />
      <Route path={"/terapia/adultos/regulacao-emocional"} component={EmotionalRegulation} />
      <Route path={"/terapia/adultos/autonomia-identidade"} component={AutonomyIdentity} />
      
      {/* Cluster 2: Terapia para Casais */}
      <Route path={"/terapia/casais/padroes-familiares"} component={FamilyPatterns} />
      <Route path={"/terapia/casais/conflitos-casal"} component={CoupleConflicts} />
      <Route path={"/terapia/casais/padroes-relacionamento"} component={RelationshipPatterns} />
      
      {/* Cluster 4: Autoridade */}
      <Route path={"/autoridade/psicologia-espiritualidade"} component={PsychologySpirituality} />
      <Route path={"/autoridade/filosofia-integrativa"} component={IntegrativePhilosophy} />
      
      {/* Original Blog Articles */}
      <Route path={"/blog/ansiedade-ou-intuicao"} component={Article1} />
      <Route path={"/blog/sombra-relacionamentos"} component={Article2} />
      <Route path={"/blog/fobia-social"} component={Article3} />
      <Route path={"/blog/narcisismo-era-digital"} component={Article4} />
      <Route path={"/blog/burnout-digital-original"} component={Article5} />
      <Route path={"/blog/guerra-sexos"} component={Article6} />
      <Route path={"/blog/despertar-espiritual"} component={Article7} />
      <Route path={"/blog/sindrome-impostor-original"} component={Article8} />
      
      {/* New SEO-Optimized Blog Articles */}
      <Route path={"/blog/autossabotagem-inconsciente"} component={AutossabotagemInconsciente} />
      <Route path={"/blog/padroes-familiares-relacionamentos"} component={PadroesFamiliaresRelacionamentos} />
      <Route path={"/blog/narcisismo-encoberto"} component={NarcisismoEncoberto} />
      <Route path={"/blog/mae-narcisista-impacto-adulto"} component={MaeNarcisista} />
      <Route path={"/blog/medo-de-ser-feliz"} component={MedoDeSerFeliz} />
      <Route path={"/blog/burnout-digital"} component={BurnoutDigital} />
      <Route path={"/blog/sindrome-impostor-terapeutas"} component={SindromeImpostorTerapeutas} />
      <Route path={"/blog/spiritual-bypass"} component={SpiritualBypass} />
      <Route path={"/blog/integracao-psicologia-espiritualidade"} component={IntegracaoPsicologiaEspiritualidade} />
      
      {/* Long-Tail SEO Articles - Autossabotagem Cluster */}
      <Route path="/sabotagem-relacionamento" component={SabotagemRelacionamento} />
      <Route path="/por-que-desisto-tudo" component={PorQueDesistoTudo} />
      <Route path="/sintomas-autossabotagem-trabalho" component={SintomasAutossabotagem} />
      <Route path="/preguica-vs-autossabotagem" component={PreguicaVsAutossabotagem} />
      
      {/* Long-Tail SEO Articles - Ansiedade Cluster */}
      <Route path="/fobia-social" component={FobiaSocial} />
      <Route path="/ataque-panico" component={AtaquePanico} />
      <Route path="/terapia-online-ansiedade" component={TerapiaOnlineAnsiedade} />
      <Route path="/ansiedade-domingo-noite" component={AnsiedadeDomingoNoite} />
      
      {/* Long-Tail SEO Articles - Crise Existencial Cluster */}
      <Route path="/crise-existencial-30-anos" component={CriseExistencial30} />
      <Route path="/depressao-vs-crise-existencial" component={DepressionVsCrise} />
      <Route path="/vida-perde-sentido" component={VidaPerdeSentido} />
      <Route path="/crise-identidade-profissional" component={CriseIdentidadeProfissional} />
      
      {/* Long-Tail SEO Articles - Narcisismo Cluster */}
      <Route path="/narcisismo-era-digital" component={NarcisismoEraDigital} />
      <Route path="/parceiro-narcisismo-oculto" component={ParceiroComNarcisismo} />
      <Route path="/recuperar-autoestima-narcisista" component={RecuperarAutoestima} />
      <Route path="/egoismo-vs-narcisismo" component={EgoísmoVsNarcisismo} />
      
      {/* Long-Tail SEO Articles - Padrões Familiares Cluster */}
      <Route path="/quebrar-ciclos-familiares" component={QuebrarCiclosFamiliares} />
      <Route path="/culpa-afastar-familia" component={CulpaAfastarFamilia} />
      <Route path="/repeticao-padroes-familiares" component={RepeticaoPadroesFamiliares} />
      <Route path="/maes-imaturas" component={MaesImaturas} />
      
      {/* Legal Pages */}
      <Route path={"/politica-privacidade"} component={PrivacyPolicy} />
      <Route path={"/termos-uso"} component={TermsOfUse} />
      
      {/* 404 Page */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <FloatingWhatsApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
