import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, User, Globe, Trophy, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MatchCard } from "@/components/shared/MatchCard";
import { AdBanner } from "@/components/shared/AdBanner";
import { FlagImage } from "@/components/shared/FlagImage";
import { teams } from "@/data/teams";
import { allMatches } from "@/data/matches";
import type { Match } from "@/types";
import { useI18n } from "@/i18n/context";
import { Seo } from "@/components/shared/Seo";

export default function TeamDetailPage() {
  const { teamId } = useParams<{ teamId: string }>();
  const team = teams.find((t) => t.id === teamId);
  const { t, lang } = useI18n();

  if (!team) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
        <h1 className="text-2xl font-bold mb-2">{t("team.notFound")}</h1>
        <p className="text-muted-foreground mb-4">{t("team.notFoundDesc")}</p>
        <Link to="/teams">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t("team.back")}
          </Button>
        </Link>
      </div>
    );
  }

  const teamMatches = allMatches.filter(
    (m: Match) => m.homeTeam === team.fifaCode || m.awayTeam === team.fifaCode
  );

  return (
    <div>
      <Seo
        title={`${team.nameEn} — World Cup 2026 Team Profile`}
        description={
          lang === "zh"
            ? `${team.name}（${team.nameEn}）— 2026世界杯球队详情：FIFA排名 #${team.ranking}，主教练 ${team.coach}，历史最佳成绩 ${team.bestResult}。`
            : `${team.nameEn} — FIFA World Cup 2026 team profile: FIFA ranking #${team.ranking}, coach ${team.coach}, best result: ${team.bestResult}.`
        }
        canonical={`/teams/${teamId}`}
        ogImage={`https://flagcdn.com/w320/${team.fifaCode.toLowerCase()}.png`}
        ogType="website"
      />
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link to="/teams" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("team.back")}
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-6xl leading-none"><FlagImage fifaCode={team.fifaCode} size={72} /></span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black">{team.nameEn}</h1>
                <Badge variant="outline" className="text-sm">
                  {t("team.group")} {team.group}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  FIFA #{team.ranking}
                </Badge>
              </div>
              <p className="text-muted-foreground mt-1">{team.name}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-amber-500" />
                  {t("team.about")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{team.description}</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Trophy, label: t("team.bestResult"), value: team.bestResult },
                { icon: Globe, label: t("team.appearances"), value: `${team.worldCupAppearances}` },
                { icon: Hash, label: t("team.ranking"), value: `#${team.ranking}` },
                { icon: User, label: t("team.coach"), value: team.coach },
              ].map(({ icon: Icon, label, value }) => (
                <Card key={label}>
                  <CardContent className="p-4 text-center">
                    <Icon className="h-5 w-5 text-amber-500 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{label}</p>
                    <p className="text-sm font-semibold leading-tight">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  {t("team.stars")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {team.starPlayers.map((player) => (
                    <Badge key={player} variant="secondary" className="text-sm py-1.5 px-3">
                      ⭐ {player}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("team.matches")}</CardTitle>
              </CardHeader>
              <CardContent>
                {teamMatches.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teamMatches.map((m) => (
                      <MatchCard key={m.id} match={m} compact />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">{t("team.noMatches")}</p>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <AdBanner size="300x250" />
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">{t("team.quickFacts")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("team.fifaCode")}</span>
                  <span className="font-mono font-semibold">{team.fifaCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("team.group")}</span>
                  <span className="font-semibold">{t("team.group")} {team.group}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("team.worldRank")}</span>
                  <span className="font-semibold">#{team.ranking}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("team.wcApps")}</span>
                  <span className="font-semibold">{team.worldCupAppearances}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("team.coach")}</span>
                  <span className="font-semibold text-right max-w-[140px]">{team.coach}</span>
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
