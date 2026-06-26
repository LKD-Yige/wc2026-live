// Real group standings as of June 18, 2026 (after Matchday 2 for Groups A, B, K)

export interface StandingEntry {
  fifaCode: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export const standings: Record<string, StandingEntry[]> = {
  "A": [
    { fifaCode: "MEX", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 0, points: 9 },
    { fifaCode: "RSA", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 4 },
    { fifaCode: "KOR", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 3, points: 3 },
    { fifaCode: "CZE", played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 1 },
  ],
  "B": [
    { fifaCode: "SUI", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, points: 7 },
    { fifaCode: "CAN", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 3, points: 4 },
    { fifaCode: "BIH", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 8, points: 4 },
    { fifaCode: "QAT", played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 10, points: 1 },
  ],
  "C": [
    { fifaCode: "BRA", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 2, points: 9 },
    { fifaCode: "MAR", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 6, points: 9 },
    { fifaCode: "SCO", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 7, points: 3 },
    { fifaCode: "HAI", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 4, goalsAgainst: 12, points: 0 },
  ],
  "D": [
    { fifaCode: "USA", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 6 },
    { fifaCode: "AUS", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 3 },
    { fifaCode: "PAR", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 5, points: 3 },
    { fifaCode: "TUR", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 5, points: 0 },
  ],
  "E": [
    { fifaCode: "GER", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 10, goalsAgainst: 4, points: 6 },
    { fifaCode: "CIV", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 6 },
    { fifaCode: "ECU", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 4 },
    { fifaCode: "CUW", played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 9, points: 1 },
  ],
  "F": [
    { fifaCode: "NED", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 10, goalsAgainst: 4, points: 7 },
    { fifaCode: "JPN", played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 3, points: 5 },
    { fifaCode: "SWE", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 7, goalsAgainst: 4, points: 4 },
    { fifaCode: "TUN", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 12, points: 0 },
  ],
  "G": [
    { fifaCode: "EGY", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4 },
    { fifaCode: "IRN", played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 2 },
    { fifaCode: "BEL", played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 2 },
    { fifaCode: "NZL", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 5, points: 1 },
  ],
  "H": [
    { fifaCode: "ESP", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 0, points: 4 },
    { fifaCode: "URU", played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 3, points: 2 },
    { fifaCode: "CPV", played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 2 },
    { fifaCode: "KSA", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 4, points: 1 },
  ],
  "I": [
    { fifaCode: "FRA", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 6 },
    { fifaCode: "NOR", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 3, points: 6 },
    { fifaCode: "SEN", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 6, points: 0 },
    { fifaCode: "IRQ", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 7, points: 0 },
  ],
  "J": [
    { fifaCode: "ARG", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 0, points: 6 },
    { fifaCode: "AUT", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 3 },
    { fifaCode: "ALG", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 3 },
    { fifaCode: "JOR", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 0 },
  ],
  "K": [
    { fifaCode: "COL", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 6 },
    { fifaCode: "POR", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 4 },
    { fifaCode: "COD", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 2, points: 1 },
    { fifaCode: "UZB", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 8, points: 0 },
  ],
  "L": [
    { fifaCode: "ENG", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4 },
    { fifaCode: "GHA", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 4 },
    { fifaCode: "CRO", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 3 },
    { fifaCode: "PAN", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 2, points: 0 },
  ],
};
