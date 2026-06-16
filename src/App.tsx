import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
                </Routes>
              </main>
              <Footer />
            </div>
          </LiveDataProvider>
        </I18nProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
