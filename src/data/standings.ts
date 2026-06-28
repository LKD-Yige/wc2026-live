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
    { fifaCode: "SUI", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 4, points: 9 },
    { fifaCode: "CAN", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 10, goalsAgainst: 3, points: 6 },
    { fifaCode: "BIH", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 6, goalsAgainst: 10, points: 3 },
    { fifaCode: "QAT", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 12, points: 0 },
  ],
  "C": [
    { fifaCode: "BRA", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 2, points: 9 },
    { fifaCode: "MAR", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 6, points: 9 },
    { fifaCode: "SCO", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 7, points: 3 },
    { fifaCode: "HAI", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 4, goalsAgainst: 12, points: 0 },
  ],
  "D": [
    { fifaCode: "USA", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 5, points: 6 },
    { fifaCode: "AUS", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 4 },
    { fifaCode: "PAR", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 4 },
    { fifaCode: "TUR", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 5, points: 3 },
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
    { fifaCode: "BEL", played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 2, points: 5 },
    { fifaCode: "EGY", played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 5, goalsAgainst: 3, points: 5 },
    { fifaCode: "IRN", played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 3, goalsAgainst: 3, points: 3 },
    { fifaCode: "NZL", played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 4, goalsAgainst: 10, points: 1 },
  ],
  "H": [
    { fifaCode: "ESP", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 0, points: 7 },
    { fifaCode: "CPV", played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 3 },
    { fifaCode: "URU", played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 2 },
    { fifaCode: "KSA", played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 1, goalsAgainst: 5, points: 2 },
  ],
  "I": [
    { fifaCode: "FRA", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 2, points: 9 },
    { fifaCode: "NOR", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 7, points: 6 },
    { fifaCode: "SEN", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 8, goalsAgainst: 9, points: 3 },
    { fifaCode: "IRQ", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 12, points: 0 },
  ],
  "J": [
    { fifaCode: "ARG", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 1, points: 9 },
    { fifaCode: "AUT", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 6, points: 4 },
    { fifaCode: "ALG", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 7, points: 4 },
    { fifaCode: "JOR", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 3, goalsAgainst: 8, points: 0 },
  ],
  "K": [
    { fifaCode: "POR", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 8, goalsAgainst: 2, points: 7 },
    { fifaCode: "COL", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 3, points: 6 },
    { fifaCode: "COD", played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 2 },
    { fifaCode: "UZB", played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 9, points: 1 },
  ],
  "L": [
    { fifaCode: "ENG", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, points: 7 },
    { fifaCode: "CRO", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 5, points: 6 },
    { fifaCode: "GHA", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 4 },
    { fifaCode: "PAN", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 0, goalsAgainst: 4, points: 0 },
  ],
};
