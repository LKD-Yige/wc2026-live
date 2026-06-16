import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Newspaper, Activity, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { MatchCard } from "@/components/shared/MatchCard";
import { AdBanner } from "@/components/shared/AdBanner";
import { completedMatches } from "@/data/matches";
import { getLatestNews } from "@/data/news";
import { useI18n } from "@/i18n/context";

const featuredMatches = completedMatches.slice(-4).reverse();
const latestNews = getLatestNews(4);

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-10 left-10 text-8xl">⚽</div>
          <div className="absolute bottom-10 right-10 text-8xl">🏆</div>
          <div className="absolute top-1/2 left-1/2 text-9xl -translate-x-1/2 -translate-y-1/2">⭐</div>
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              {t("home.badge")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              {t("home.title")}{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              {t("home.subtitle")}
            </p>

            <CountdownTimer />

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/schedule">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t("home.schedule")}
                </Button>
              </Link>
              <Link to="/teams">
                <Button size="lg" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  {t("home.teams")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AD */}
      <section className="container mx-auto px-4 py-4">
        <AdBanner size="728x90" />
      </section>

      {/* LATEST RESULTS */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("home.latest")}</h2>
            <p className="text-muted-foreground mt-1">{t("home.latestSub")}</p>
          </div>
          <Link to="/schedule">
            <Button variant="ghost" className="gap-1">
              {t("home.viewAll")} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {featuredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "48", label: t("teams.title"), icon: Users },
              { value: "104", label: t("stats.matches"), icon: Activity },
              { value: "16", label: t("home.hosts"), icon: Globe },
              { value: "3", label: t("footer.resources"), icon: Globe },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("home.news")}</h2>
            <p className="text-muted-foreground mt-1">{t("home.newsSub")}</p>
          </div>
          <Link to="/news">
            <Button variant="ghost" className="gap-1">
              {t("home.allNews")} <Newspaper className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map((item) => (
            <Link key={item.id} to={`/news/${item.slug}`}>
              <Card className="h-full hover:shadow-md transition-all hover:border-amber-200 dark:hover:border-amber-800 overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" loading="lazy" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 uppercase">
                      {item.category.replace("-", " ")}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2">{item.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* AD */}
      <section className="container mx-auto px-4 pb-12">
        <AdBanner size="970x250" />
      </section>

      {/* HOST CITIES */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{t("home.hosts")}</h2>
        <p className="text-muted-foreground mb-6">{t("home.hostsSub")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { city: "Mexico City", icon: "🇲🇽" }, { city: "New York", icon: "🇺🇸" },
            { city: "Dallas", icon: "🇺🇸" }, { city: "Kansas City", icon: "🇺🇸" },
            { city: "Atlanta", icon: "🇺🇸" }, { city: "Los Angeles", icon: "🇺🇸" },
            { city: "Miami", icon: "🇺🇸" }, { city: "Boston", icon: "🇺🇸" },
            { city: "Philadelphia", icon: "🇺🇸" }, { city: "Seattle", icon: "🇺🇸" },
            { city: "San Francisco", icon: "🇺🇸" }, { city: "Houston", icon: "🇺🇸" },
            { city: "Toronto", icon: "🇨🇦" }, { city: "Vancouver", icon: "🇨🇦" },
            { city: "Guadalajara", icon: "🇲🇽" }, { city: "Monterrey", icon: "🇲🇽" },
          ].map(({ city, icon }) => (
            <div key={city} className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:border-amber-200 dark:hover:border-amber-800 transition-colors">
              <span className="text-xl">{icon}</span>
              <span className="text-sm font-medium">{city}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
