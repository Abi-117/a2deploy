import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import ProcessPage from "./pages/ProcessPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import WhatsAppButton from "@/components/WhatsAppButton";


import NotFound from "./pages/NotFound.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      
      
      
        <PageTransition>
          <Routes>
            
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
           <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
