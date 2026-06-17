import { useI18n } from "@/i18n/context";
import { Twitter, Instagram, Youtube, Globe } from "lucide-react";

export function Contact() {
  const { lang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-3">
            {lang === "zh" ? "联系我们" : "Contact Us"}
          </h1>
          <p className="text-muted-foreground">
            {lang === "zh"
              ? "有问题、建议或合作意向？欢迎通过以下方式联系我们。"
              : "Questions, suggestions, or partnership inquiries? We'd love to hear from you."}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Social */}
          <div className="border rounded-xl p-6 text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Twitter className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="font-semibold">{lang === "zh" ? "社交媒体" : "Social Media"}</h3>
            <p className="text-sm text-muted-foreground">
              {lang === "zh"
                ? "通过社交平台关注我们的最新动态"
                : "Follow us for the latest updates"}
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <a href="https://twitter.com/FIFAWorldCup" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/fifaworldcup/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/FIFA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Official */}
          <div className="border rounded-xl p-6 text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Globe className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="font-semibold">{lang === "zh" ? "官方信息" : "Official Info"}</h3>
            <p className="text-sm text-muted-foreground">
              {lang === "zh"
                ? "如需官方信息，请访问FIFA官网"
                : "For official information, please visit FIFA's website"}
            </p>
            <a
              href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-amber-600 hover:underline"
            >
              fifa.com →
            </a>
          </div>
        </div>

        <div className="container mx-auto max-w-2xl mt-8 text-center text-sm text-muted-foreground">
          <p>
            {lang === "zh"
              ? "WC2026 Live 是一个由球迷建立的非官方网站，与FIFA无任何关联。"
              : "WC2026 Live is an unofficial fan site and is not affiliated with FIFA."}
          </p>
        </div>
      </section>
    </div>
  );
}
