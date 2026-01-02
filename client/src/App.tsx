import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotePage from "@/pages/NotePage";
import NotesPage from "@/pages/NotesPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/notes" component={NotesPage} />
      <Route path="/note/:slug" component={NotePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    
  );
}

export default App;
