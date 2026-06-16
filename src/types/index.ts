export interface Team {
  id: string;
  name: string;
  nameEn: string;
  fifaCode: string;
  flag: string; // emoji flag
  group: string;
  ranking: number;
  description: string;
  coach: string;
  starPlayers: string[];
  worldCupAppearances: number;
  bestResult: string;
}

export interface Match {
  id: string;
  date: string; // ISO date string
  time: string; // local time
  stage: MatchStage;
  group?: string;
  homeTeam: string; // fifaCode
  awayTeam: string; // fifaCode
  homeScore?: number;
  awayScore?: number;
  venue: string;
  city: string;
  status: MatchStatus;
}

export type MatchStage =
  | "Group Stage"
  | "Round of 32"
  | "Round of 16"
  | "Quarter-finals"
  | "Semi-finals"
  | "Third Place"
  | "Final";

export type MatchStatus = "upcoming" | "live" | "finished";

export interface GroupStanding {
  group: string;
  teams: GroupTeamEntry[];
}

export interface GroupTeamEntry {
  fifaCode: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: "match-report" | "team-news" | "feature" | "transfer";
  slug: string;
}

export interface AdSlot {
  id: string;
  position: "header" | "sidebar" | "in-content" | "footer";
  size: "728x90" | "300x250" | "300x600" | "970x250";
}
