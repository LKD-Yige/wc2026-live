import { useState } from "react";
import { Activity, Calendar, Trophy } from "lucide-react";
import { MatchCard } from "@/components/shared/MatchCard";
import { AdBanner } from "@/components/shared/AdBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { completedMatches, todayMatches } from "@/data/matches";
import { groups, getTeamByCode } from "@/data/teams";
import { standings } from "@/data/standings";
import { useI18n } from "@/i18n/context";
import { FlagImage } from "@/components/shared/FlagImage";
import { Seo } from "@/components/shared/Seo";

export default function ScoresPage() {
  const [selectedGroup, setSelectedGroup] = useState<string>("A");
  const { t, lang } = useI18n();

  const groupStandings = standings[selectedGroup] || [];
  const groupCompleted = completedMatches.filter((m) => m.group === selectedGroup);
  const groupToday = todayMatches.filter((m) => m.group === selectedGroup);

  return (
    <div>
      <Seo
        title={lang === "zh" ? "2026世界杯比分直播 — 小组积分榜" : "World Cup 2026 Live Scores — Group Standings"}
        description={
          lang === "zh"
            ? "2026年世界杯实时比分、小组积分榜、今日赛果。覆盖全部12个小组48支球队。"
            : "Live scores, group standings and today's results for FIFA World Cup 2026. All 12 groups, 48 teams."
        }
        canonical="/scores"
        ogType="website"
      />
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="h-8 w-8 text-amber-500" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{t("scores.title")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">{t("scores.subtitle")}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-4">
        <AdBanner size="728x90" />
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  {t("scores.standings")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {groups.map((g) => {
                    const hasData = standings[g]?.some((s) => s.played > 0);
                    return (
                      <Button
                        key={g}
                        size="sm"
                        variant={selectedGroup === g ? "default" : "outline"}
                        className={selectedGroup === g ? "bg-amber-500 hover:bg-amber-600 text-xs h-8 w-8 p-0" : `text-xs h-8 w-8 p-0 ${hasData ? "" : "opacity-50"}`}
                        onClick={() => setSelectedGroup(g)}
                      >
                        {g}
                      </Button>
                    );
                  })}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground text-xs">
                        <th className="text-left py-2 font-medium">{t("scores.team")}</th>
                        <th className="text-center py-2 font-medium w-6">P</th>
                        <th className="text-center py-2 font-medium w-6">W</th>
                        <th className="text-center py-2 font-medium w-6">D</th>
                        <th className="text-center py-2 font-medium w-6">L</th>
                        <th className="text-center py-2 font-medium w-6">{t("scores.gd")}</th>
                        <th className="text-center py-2 font-bold w-8">{t("scores.pts")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupStandings.map((s, i) => {
                        const team = getTeamByCode(s.fifaCode);
                        const gd = s.goalsFor - s.goalsAgainst;
                        return (
                          <tr key={s.fifaCode} className={`border-b last:border-0 transition-colors hover:bg-muted/50 ${i < 2 ? "bg-amber-50/50 dark:bg-amber-950/20" : ""}`}>
                            <td className="py-2.5 flex items-center gap-2.5">
                              <FlagImage fifaCode={s.fifaCode} size={24} rounded />
                              <span className="font-semibold text-xs">{team?.nameEn || s.fifaCode}</span>
                            </td>
                            <td className="text-center py-2.5 text-xs">{s.played}</td>
                            <td className="text-center py-2.5 text-xs">{s.won}</td>
                            <td className="text-center py-2.5 text-xs">{s.drawn}</td>
                            <td className="text-center py-2.5 text-xs">{s.lost}</td>
                            <td className="text-center py-2.5 text-xs">{gd > 0 ? `+${gd}` : gd}</td>
                            <td className="text-center py-2.5 font-bold text-xs">{s.points}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <AdBanner size="300x250" />
          </div>

          <div className="lg:col-span-2 space-y-6">
            {groupToday.length > 0 && (
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-600">
                    <Activity className="h-5 w-5" />
                    {t("scores.today")} — {t("teams.group")} {selectedGroup}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {groupToday.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-500" />
                  {t("teams.group")} {selectedGroup} — {t("scores.completed")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {groupCompleted.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {groupCompleted.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">{t("scores.noMatches")}</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="p-8 text-center text-muted-foreground">
                <Trophy className="h-12 w-12 mx-auto mb-3 opacity-30" />
                <h3 className="text-lg font-semibold mb-1">{t("scores.bracket")}</h3>
                <p className="text-sm">{t("scores.bracketDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
