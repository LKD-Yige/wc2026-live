import { Link } from "react-router-dom";
import { Trophy, Twitter, Instagram, Youtube, Globe } from "lucide-react";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t bg-muted/30">
      {/* Ad slot */}
      <div className="container mx-auto px-4 py-4 border-b">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[970px] h-[90px] bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground border border-dashed">
            📢 {t("ad.placeholder")} — 970×90 Leaderboard
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <Trophy className="h-5 w-5 text-amber-500" />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                WC2026 Live
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">{t("footer.desc")}</p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">{t("footer.quick")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/schedule" className="hover:text-foreground transition-colors">{t("nav.schedule")}</Link></li>
              <li><Link to="/teams" className="hover:text-foreground transition-colors">{t("nav.teams")}</Link></li>
              <li><Link to="/scores" className="hover:text-foreground transition-colors">{t("nav.scores")}</Link></li>
              <li><Link to="/news" className="hover:text-foreground transition-colors">{t("nav.news")}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.hostCities")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.travel")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.faq")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">{t("footer.follow")}</h4>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Website">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WC2026 Live. {t("footer.disclaimer")}</p>
          <p className="mt-1">
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
            {" · "}
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.terms")}</a>
            {" · "}
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.advertise")}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
