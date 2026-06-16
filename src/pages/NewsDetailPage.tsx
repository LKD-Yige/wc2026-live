import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AdBanner } from "@/components/shared/AdBanner";
import { news } from "@/data/news";
import { useI18n } from "@/i18n/context";

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = news.find((n) => n.slug === slug);
  const { t } = useI18n();

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-2">{t("news.notFound")}</h1>
        <p className="text-muted-foreground mb-4">{t("news.notFoundDesc")}</p>
        <Link to="/news">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t("news.back")}
          </Button>
        </Link>
      </div>
    );
  }

  const related = news.filter((n) => n.id !== article.id && n.category === article.category).slice(0, 3);

  return (
    <div>
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link to="/news" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("news.back")}
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                {article.category.replace("-", " ")}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {article.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{article.title}</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <article className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  <p className="leading-relaxed mt-4">{t("news.preview")}</p>
                </article>
              </CardContent>
            </Card>
            <AdBanner size="728x90" />
            {related.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">{t("news.related")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((item) => (
                    <Link key={item.id} to={`/news/${item.slug}`}>
                      <Card className="h-full hover:shadow-md transition-all overflow-hidden">
                        <div className="aspect-video bg-muted overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="p-3">
                          <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <AdBanner size="300x250" />
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-amber-500" />
                  {t("home.news")}
                </h3>
                <div className="space-y-3">
                  {news.slice(0, 5).map((item) => (
                    <Link
                      key={item.id}
                      to={`/news/${item.slug}`}
                      className={`block text-sm hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${item.id === article.id ? "font-semibold text-amber-600 dark:text-amber-400" : "text-muted-foreground"}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
            <AdBanner size="300x250" />
          </div>
        </div>
      </div>
    </div>
  );
}
