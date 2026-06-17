import { useState } from "react";
import { Calendar, Filter } from "lucide-react";
import { MatchCard } from "@/components/shared/MatchCard";
import { AdBanner } from "@/components/shared/AdBanner";
import { Button } from "@/components/ui/button";
import { allMatches } from "@/data/matches";
import { groups } from "@/data/teams";
import type { MatchStage } from "@/types";
import type { Match } from "@/types";
import { useI18n } from "@/i18n/context";
import { Seo } from "@/components/shared/Seo";

const stageOptions: { stage: MatchStage; key: string }[] = [
  { stage: "Group Stage", key: "stage.group" },
  { stage: "Round of 32", key: "stage.r32" },
  { stage: "Round of 16", key: "stage.r16" },
  { stage: "Quarter-finals", key: "stage.qf" },
  { stage: "Semi-finals", key: "stage.sf" },
  { stage: "Third Place", key: "stage.tp" },
  { stage: "Final", key: "stage.final" },
];

export default function SchedulePage() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<MatchStage | null>(null);
  const { t, lang } = useI18n();

  const filtered = allMatches.filter((m) => {
    if (selectedStage && m.stage !== selectedStage) return false;
    if (selectedGroup && m.group !== selectedGroup) return false;
    return true;
  });

  const grouped: Record<string, Match[]> = {};
  filtered.forEach((m) => {
    if (!grouped[m.date]) grouped[m.date] = [];
    grouped[m.date].push(m);
  });

  const sortedDates = Object.keys(grouped).sort();

  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00");
    return date.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <Seo
        title={lang === "zh" ? "2026世界杯完整赛程 — 全部104场比赛" : "2026 Tournament Full Schedule — All 104 Matches"}
        description={
          lang === "zh"
            ? "2026年美加墨世界杯完整赛程：小组赛、淘汰赛、半决赛、决赛。48支球队，16座主办城市，104场比赛时间表。"
            : "Complete 2026 tournament match schedule: group stage, knockout rounds, semi-finals, final. 48 teams, 16 host cities, 104 matches."
        }
        canonical="/schedule"
        ogType="website"
      />
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-8 w-8 text-amber-500" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{t("schedule.title")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">{t("schedule.subtitle")}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{t("schedule.filters")}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button
              size="sm"
              variant={selectedStage === null ? "default" : "outline"}
              className={selectedStage === null ? "bg-amber-500 hover:bg-amber-600" : ""}
              onClick={() => { setSelectedStage(null); setSelectedGroup(null); }}
            >
              {t("schedule.all")}
            </Button>
            {stageOptions.map(({ stage, key }) => (
              <Button
                key={stage}
                size="sm"
                variant={selectedStage === stage ? "default" : "outline"}
                className={selectedStage === stage ? "bg-amber-500 hover:bg-amber-600" : ""}
                onClick={() => { setSelectedStage(stage); setSelectedGroup(null); }}
              >
                {t(key as any)}
              </Button>
            ))}
          </div>
        </div>

        {(!selectedStage || selectedStage === "Group Stage") && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="text-xs text-muted-foreground self-center mr-1">{t("schedule.groups")}</span>
            <Button
              size="sm"
              variant={selectedGroup === null ? "default" : "outline"}
              className={selectedGroup === null ? "bg-amber-500 hover:bg-amber-600 text-xs" : "text-xs"}
              onClick={() => setSelectedGroup(null)}
            >
              {t("schedule.all")}
            </Button>
            {groups.map((g) => (
              <Button
                key={g}
                size="sm"
                variant={selectedGroup === g ? "default" : "outline"}
                className={selectedGroup === g ? "bg-amber-500 hover:bg-amber-600 text-xs" : "text-xs"}
                onClick={() => { setSelectedGroup(g); setSelectedStage("Group Stage"); }}
              >
                {t("teams.group")} {g}
              </Button>
            ))}
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 pb-6">
        <AdBanner size="728x90" />
      </section>

      <section className="container mx-auto px-4 pb-16">
        {sortedDates.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">{t("schedule.noMatch")}</p>
            <p className="text-sm">{t("schedule.tryAdjust")}</p>
          </div>
        )}
        {sortedDates.map((date) => (
          <div key={date} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                {formatDate(date)}
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[date].map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
