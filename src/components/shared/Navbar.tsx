import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Trophy, Globe, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";
import { useLiveData } from "@/components/LiveDataProvider";
import type { TranslationKey } from "@/i18n/translations";

const navItems: { key: TranslationKey; href: string }[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.schedule", href: "/schedule" },
  { key: "nav.teams", href: "/teams" },
  { key: "nav.scores", href: "/scores" },
  { key: "nav.news", href: "/news" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const { t, lang, setLang } = useI18n();
  const { lastUpdated, isPolling, refresh } = useLiveData();

  useEffect(() => {
    const stored = localStorage.getItem("wc2026-theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("wc2026-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Trophy className="h-6 w-6 text-amber-500" />
          <span className="hidden sm:inline bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            WC2026 Live
          </span>
        </Link>

        {/* Live indicator */}
        {lastUpdated && (
          <div className="hidden md:flex items-center gap-1.5 text-[10px] text-muted-foreground ml-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isPolling ? "bg-amber-500 animate-pulse" : "bg-green-500"}`} />
            <span>{lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            <button onClick={refresh} className="hover:text-foreground transition-colors" title="Refresh now">
              <RefreshCw className={`h-3 w-3 ${isPolling ? "animate-spin" : ""}`} />
            </button>
          </div>
        )}

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="gap-1 text-xs font-medium"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{lang === "en" ? "中文" : "EN"}</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t bg-background px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1 ${
                location.pathname === item.href
                  ? "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
