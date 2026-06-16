import { useCountdown } from "@/hooks/useCountdown";
import { Trophy, Activity } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { useLiveData } from "@/components/LiveDataProvider";

export function CountdownTimer() {
  const kickoff = new Date("2026-06-11T12:00:00-06:00");
  const { days, hours, minutes, seconds, isExpired } = useCountdown(kickoff);
  const { t } = useI18n();
  const { liveData } = useLiveData();

  const summary = liveData?.summary ?? { totalMatches: 16, totalGoals: 40, groupsActive: 8 };

  const items = [
    { value: days, label: t("countdown.days") },
    { value: hours, label: t("countdown.hours") },
    { value: minutes, label: t("countdown.minutes") },
    { value: seconds, label: t("countdown.seconds") },
  ];

  return (
    <div className="text-center">
      {!isExpired ? (
        <>
          <div className="flex items-center justify-center gap-1 mb-3">
            <Trophy className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              {t("countdown.kickoff")}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {items.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
                    {String(value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground mt-1.5 uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            June 11, 2026 · Estadio Azteca, Mexico City
          </p>
        </>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Activity className="h-5 w-5 text-red-500 animate-pulse" />
            <p className="text-lg font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              {t("countdown.live")}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="text-center">
              <span className="text-2xl font-black text-amber-600">{summary.totalMatches}</span>
              <p className="text-xs text-muted-foreground">{t("hero.matches")}</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="text-2xl font-black text-amber-600">{summary.totalGoals}</span>
              <p className="text-xs text-muted-foreground">{t("hero.goals")}</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="text-2xl font-black text-amber-600">{summary.groupsActive}</span>
              <p className="text-xs text-muted-foreground">{t("hero.groups")}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{t("hero.day")}</p>
        </div>
      )}
    </div>
  );
}
