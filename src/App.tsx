
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GridDemo from "./pages/GridDemo";
import { ROUTES } from "./api/config";
import TripPlansSearchHub from "./pages/TripPlansSearchHub";
import TripPlansSearchHubAPI from "./pages/TripPlansSearchHubAPI";
import FlexGridDemo from "./pages/FlexGridDemo";
import FlexGridLayoutPage from "./pages/FlexGridLayoutPage";
import TripExecution from "./pages/TripExecution";
import SideDrawerDemo from "./pages/SideDrawerDemo";
import NotFound from "./pages/NotFound";
import QuickOrderManagement from "./pages/QuickOrderManagement";
import CreateQuickOrder from "./pages/createQuickOrder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<QuickOrderManagement />} />
          <Route path={ROUTES.HOME} element={<QuickOrderManagement />} />
          <Route path="/quick-order" element={<QuickOrderManagement />} />
          <Route path="/trip-plans-search-hub" element={<TripPlansSearchHub />} />
          <Route path="/create-quick-order" element={<CreateQuickOrder />} />

          {/* <Route path="/" element={<Index />} />
          <Route path="/grid-demo" element={<GridDemo />} />
          <Route path="/trip-plans-search-hub" element={<TripPlansSearchHub />} />
          <Route path="/trip-plans-search-hub-api" element={<TripPlansSearchHubAPI />} />
          <Route path="/dynamic-panel-demo" element={<DynamicPanelDemo />} />
          <Route path="/flex-grid-demo" element={<FlexGridDemo />} />
          <Route path="/flex-grid-layout-page" element={<FlexGridLayoutPage />} />
          <Route path="/trip-execution" element={<TripExecution />} />
          <Route path="/side-drawer-demo" element={<SideDrawerDemo />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
