import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundry";
import NotFound from "./pages/NotFound";
import TrustSecurityCenter from './pages/trust-security-center';
import CountryDetailPages from './pages/country-detail-pages';
import ApplicationPortal from './pages/application-portal';
import Homepage from './pages/homepage';
import LiveTrackingDashboard from './pages/live-tracking-dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/trust-security-center" element={<TrustSecurityCenter />} />
        <Route path="/country-detail-pages" element={<CountryDetailPages />} />
        <Route path="/application-portal" element={<ApplicationPortal />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/live-tracking-dashboard" element={<LiveTrackingDashboard />} />
        <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
