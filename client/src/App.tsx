import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
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

// Update document title and meta tags
if (typeof document !== 'undefined') {
  document.title = 'Psicólogo Jorge Dias - Psicoterapia Clínica Online';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Psicoterapia clínica com Jorge Dias (CRP 08/31462). Especializado em crise existencial, autossabotagem e relacionamentos. Atendimento online Brasil e presencial em Presidente Epitácio - SP.');
  }
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={About} />
      <Route path={"/como-funciona"} component={HowItWorks} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/blog"} component={BlogList} />
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
      {/* Blog Articles */}
      <Route path={"/blog/ansiedade-ou-intuicao"} component={Article1} />
      <Route path={"/blog/sombra-relacionamentos"} component={Article2} />
      <Route path={"/blog/fobia-social"} component={Article3} />
      <Route path={"/blog/narcisismo-era-digital"} component={Article4} />
      <Route path={"/blog/burnout-digital"} component={Article5} />
      <Route path={"/blog/guerra-sexos"} component={Article6} />
      <Route path={"/blog/despertar-espiritual"} component={Article7} />
      <Route path={"/blog/sindrome-impostor"} component={Article8} />
      {/* Legal Pages */}
      <Route path={"/politica-privacidade"} component={PrivacyPolicy} />
      <Route path={"/termos-uso"} component={TermsOfUse} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
