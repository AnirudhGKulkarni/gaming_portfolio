import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Determine basename for BrowserRouter so routes work on GitHub Pages */}
      {/* import.meta.env.BASE_URL is set by Vite (e.g. '/gaming_portfolio/' or './') */}
      {(() => {
        let base = import.meta.env.BASE_URL || "/";
        if (base === "./") {
          base = "/gaming_portfolio/";
        }
        // remove trailing slash for BrowserRouter basename
        base = base.replace(/\/$/, "");
        return <BrowserRouter basename={base}>;
      })()}
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
