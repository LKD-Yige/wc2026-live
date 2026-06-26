import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { I18nProvider } from "@/i18n/context";
import { LiveDataProvider } from "@/components/LiveDataProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import HomePage from "@/pages/HomePage";
import SchedulePage from "@/pages/SchedulePage";
import TeamsPage from "@/pages/TeamsPage";
import TeamDetailPage from "@/pages/TeamDetailPage";
import ScoresPage from "@/pages/ScoresPage";
import NewsPage from "@/pages/NewsPage";
import NewsDetailPage from "@/pages/NewsDetailPage";
import { HostCities } from "@/pages/HostCities";
import { FAQ } from "@/pages/FAQ";
import { Contact } from "@/pages/Contact";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfService } from "@/pages/TermsOfService";
import { Advertise } from "@/pages/Advertise";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <I18nProvider>
          <LiveDataProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/schedule" element={<SchedulePage />} />
                  <Route path="/teams" element={<TeamsPage />} />
                  <Route path="/teams/:teamId" element={<TeamDetailPage />} />
                  <Route path="/scores" element={<ScoresPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/news/:slug" element={<NewsDetailPage />} />
                  <Route path="/host-cities" element={<HostCities />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/advertise" element={<Advertise />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Analytics />
          </LiveDataProvider>
        </I18nProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
