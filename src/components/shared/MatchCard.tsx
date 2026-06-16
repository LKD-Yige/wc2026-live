import { Clock, MapPin } from "lucide-react";
import type { Match } from "@/types";
import { getTeamByCode } from "@/data/teams";
import { Badge } from "@/components/ui/badge";
import { FlagImage } from "@/components/shared/FlagImage";
import { useI18n } from "@/i18n/context";

const stageKeys: Record<string, string> = {
  "Group Stage": "stage.group",
  "Round of 32": "stage.r32",
  "Round of 16": "stage.r16",
  "Quarter-finals": "stage.qf",
  "Semi-finals": "stage.sf",
  "Third Place": "stage.tp",
  "Final": "stage.final",
};

interface MatchCardProps {
  match: Match;
  compact?: boolean;
}

export function MatchCard({ match, compact = false }: MatchCardProps) {
  const { t, lang } = useI18n();
  const homeTeam = getTeamByCode(match.homeTeam);
  const awayTeam = getTeamByCode(match.awayTeam);
  const isTbd = match.homeTeam === "TBD";

  const statusBadge = () => {
    switch (match.status) {
      case "live":
        return (
          <Badge className="bg-red-500 hover:bg-red-600 text-white animate-pulse gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            {t("match.live")}
          </Badge>
        );
      case "finished":
        return <Badge variant="secondary" className="font-semibold">{t("match.ft")}</Badge>;
      default:
        return <Badge variant="outline" className="text-muted-foreground">{t("match.upcoming")}</Badge>;
    }
  };

  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00");
    return date.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const displayLabel = (): string => {
    if (match.group) return `${t("teams.group")} ${match.group}`;
    const key = stageKeys[match.stage];
    return key ? t(key as any) : match.stage;
  };

  const isFinished = match.status === "finished";
  const hasScore = match.homeScore !== undefined && match.awayScore !== undefined;

  return (
    <div className={`group rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700 overflow-hidden ${isFinished ? "" : ""}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/30 border-b">
        {statusBadge()}
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          {displayLabel()}
        </span>
      </div>

      {/* Match body */}
      <div className={`${compact ? "p-2.5" : "p-3 sm:p-4"}`}>
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {/* Home team */}
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
            {!isTbd ? (
              <>
                <div className="relative">
                  <FlagImage fifaCode={match.homeTeam} size={compact ? 36 : 48} rounded />
                </div>
                <span className={compact ? "text-[10px] font-semibold truncate w-full text-center leading-tight" : "text-[11px] sm:text-xs font-bold truncate w-full text-center leading-tight"}>
                  {homeTeam?.nameEn || match.homeTeam}
                </span>
              </>
            ) : (
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-[36px] h-[27px] sm:w-[48px] sm:h-[36px] rounded-sm bg-muted flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground">?</span>
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground">{match.homeTeam}</span>
              </div>
            )}
          </div>

          {/* Score / VS */}
          <div className="flex flex-col items-center flex-shrink-0 px-2 sm:px-3">
            {isFinished && hasScore ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`text-xl sm:text-2xl font-black tabular-nums ${match.homeScore! > match.awayScore! ? "text-foreground" : "text-muted-foreground"}`}>
                  {match.homeScore}
                </span>
                <span className="text-sm sm:text-base font-bold text-muted-foreground/40">:</span>
                <span className={`text-xl sm:text-2xl font-black tabular-nums ${match.awayScore! > match.homeScore! ? "text-foreground" : "text-muted-foreground"}`}>
                  {match.awayScore}
                </span>
              </div>
            ) : (
              <>
                <span className="text-xs sm:text-sm font-black text-muted-foreground/30">{t("match.vs")}</span>
                <span className="text-[9px] sm:text-xs text-muted-foreground mt-0.5">{match.time}</span>
              </>
            )}
          </div>

          {/* Away team */}
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
            {!isTbd ? (
              <>
                <div className="relative">
                  <FlagImage fifaCode={match.awayTeam} size={compact ? 36 : 48} rounded />
                </div>
                <span className={compact ? "text-[10px] font-semibold truncate w-full text-center leading-tight" : "text-[11px] sm:text-xs font-bold truncate w-full text-center leading-tight"}>
                  {awayTeam?.nameEn || match.awayTeam}
                </span>
              </>
            ) : (
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-[36px] h-[27px] sm:w-[48px] sm:h-[36px] rounded-sm bg-muted flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground">?</span>
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground">{match.awayTeam}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      {!compact && (
        <div className="px-4 py-2.5 border-t bg-muted/20 flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            <span className="truncate max-w-[130px]">{match.city}</span>
          </div>
        </div>
      )}
    </div>
  );
}
