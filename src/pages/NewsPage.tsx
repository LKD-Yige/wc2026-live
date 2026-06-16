import { Link } from "react-router-dom";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdBanner } from "@/components/shared/AdBanner";
import { news } from "@/data/news";
import { useI18n } from "@/i18n/context";
import { Seo } from "@/components/shared/Seo";

export default function NewsPage() {
  const { t, lang } = useI18n();

  return (
    <div>
      <Seo
        title={lang === "zh" ? "2026世界杯新闻 — 最新资讯" : "World Cup 2026 News — Latest Updates"}
        description={
          lang === "zh"
            ? "2026年美加墨世界杯最新新闻资讯：赛果、球队动态、球星消息、赛事分析。"
            : "Latest FIFA World Cup 2026 news: match results, team updates, star players, tournament analysis."
        }
        canonical="/news"
        ogType="website"
      />
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-2">
            <Newspaper className="h-8 w-8 text-amber-500" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{t("news.title")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">{t("news.subtitle")}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <AdBanner size="728x90" />
      </section>

      <section className="container mx-auto px-4 pb-16">
        {news[0] && (
          <Link to={`/news/${news[0].slug}`} className="block mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-muted overflow-hidden">
                  <img src={news[0].image} alt={news[0].title} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                      {news[0].category.replace("-", " ")}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{news[0].date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {news[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{news[0].excerpt}</p>
                  <span className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                    {t("news.readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </div>
            </Card>
          </Link>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(1).map((item) => (
            <Link key={item.id} to={`/news/${item.slug}`}>
              <Card className="h-full hover:shadow-md transition-all hover:border-amber-200 dark:hover:border-amber-800 overflow-hidden group">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground uppercase">
                      {item.category.replace("-", " ")}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold leading-snug line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <AdBanner size="970x250" />
        </div>
      </section>
    </div>
  );
}
