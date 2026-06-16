import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

interface I18nContextType {
  lang: Lang;
  t: (key: TranslationKey) => string;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectBrowserLang(): Lang {
  if (typeof window === "undefined") return "en";

  // Check localStorage first
  const stored = localStorage.getItem("wc2026-lang") as Lang | null;
  if (stored === "en" || stored === "zh") return stored;

  // Detect from browser
  const nav = navigator.language || "";
  if (nav.startsWith("zh")) return "zh";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectBrowserLang());

  const t = useCallback(
    (key: TranslationKey): string => {
      const val = translations[lang]?.[key];
      if (val !== undefined) return val as string;
      // Fallback to English
      const fallback = translations.en[key];
      return fallback !== undefined ? (fallback as string) : key;
    },
    [lang]
  );

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("wc2026-lang", l);
    // Update HTML lang attribute
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "zh" : "en");
  }, [lang, setLang]);

  // Set initial HTML lang
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
