import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Update document title and meta tags
if (typeof document !== 'undefined') {
  document.title = 'Jorge Dias | Psicoterapia e Psicanálise';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Psicoterapia e Psicanálise de alto padrão com Jorge Dias. Atendimento online para brasileiros no exterior focado em dinâmicas familiares e autoconhecimento profundo.');
  }
}

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Only scroll to top if not an anchor link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Legal Pages - kept for compliance */}
      <Route path="/politica-privacidade" component={PrivacyPolicy} />
      <Route path="/termos-uso" component={TermsOfUse} />
      
      {/* 404 Page */}
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
