import { Link } from "react-router-dom";
import type { Team } from "@/types";
import { FlagImage } from "@/components/shared/FlagImage";
import { useI18n } from "@/i18n/context";

interface TeamBadgeProps {
  team: Team;
  showGroup?: boolean;
  size?: "sm" | "md" | "lg";
}

export function TeamBadge({ team, showGroup = false, size = "md" }: TeamBadgeProps) {
  const { t } = useI18n();
  const sizes = {
    sm: { flag: 40, name: "text-[10px]", container: "p-2.5 gap-1.5" },
    md: { flag: 56, name: "text-xs", container: "p-3.5 gap-2" },
    lg: { flag: 72, name: "text-sm", container: "p-4 gap-2.5" },
  };

  const s = sizes[size];

  return (
    <Link
      to={`/teams/${team.id}`}
      className={`group flex flex-col items-center rounded-xl border bg-card hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300 ${s.container}`}
    >
      <div className="relative">
        <FlagImage fifaCode={team.fifaCode} size={s.flag} rounded />
        <div className="absolute inset-0 rounded-sm ring-1 ring-black/5 group-hover:ring-amber-300/50 transition-all" />
      </div>
      <span className={`${s.name} font-bold text-center leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`}>
        {team.nameEn}
      </span>
      {showGroup && (
        <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
          {t("teams.group")} {team.group}
        </span>
      )}
    </Link>
  );
}
