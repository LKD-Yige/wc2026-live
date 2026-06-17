import { useState } from "react";
import { Users, Search } from "lucide-react";
import { TeamBadge } from "@/components/shared/TeamBadge";
import { AdBanner } from "@/components/shared/AdBanner";
import { teams, groups, getTeamsByGroup } from "@/data/teams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";
import { Seo } from "@/components/shared/Seo";

export default function TeamsPage() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"groups" | "all">("groups");
  const { t, lang } = useI18n();

  const filteredTeams = teams.filter(
    (t) =>
      t.name.includes(search) ||
      t.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      t.fifaCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Seo
        title={lang === "zh" ? "2026参赛球队 — 48支球队完整名单" : "2026 Tournament Teams — Full 48 Team List"}
        description={
          lang === "zh"
            ? "2026年美加墨世界杯48支参赛球队完整名单，按12个小组分类，搜索查看任意球队详情。"
            : "All 48 teams competing in 2026 tournament USA Canada Mexico. Browse by group, search any team."
        }
        canonical="/teams"
        ogType="website"
      />
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-amber-500" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{t("teams.title")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">{t("teams.subtitle")}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("teams.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-1.5">
            <Button
              size="sm"
              variant={viewMode === "groups" ? "default" : "outline"}
              className={viewMode === "groups" ? "bg-amber-500 hover:bg-amber-600" : ""}
              onClick={() => setViewMode("groups")}
            >
              {t("teams.byGroups")}
            </Button>
            <Button
              size="sm"
              variant={viewMode === "all" ? "default" : "outline"}
              className={viewMode === "all" ? "bg-amber-500 hover:bg-amber-600" : ""}
              onClick={() => setViewMode("all")}
            >
              {t("teams.allTeams")}
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        {search && filteredTeams.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">{t("teams.noFound")}</p>
            <p className="text-sm">{t("teams.trySearch")}</p>
          </div>
        ) : viewMode === "groups" && !search ? (
          <div className="space-y-10">
            {groups.map((group) => {
              const groupTeams = getTeamsByGroup(group);
              return (
                <div key={group}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-black text-amber-500">{t("teams.group")} {group}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {groupTeams.map((team) => (
                      <TeamBadge key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              );
            })}
            <AdBanner size="728x90" className="mt-8" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredTeams.map((team) => (
              <TeamBadge key={team.id} team={team} showGroup />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
