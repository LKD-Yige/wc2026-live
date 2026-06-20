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
    { fifaCode: "MEX", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 2, points: 6 },
    { fifaCode: "KOR", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 6 },
    { fifaCode: "CZE", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 1 },
    { fifaCode: "RSA", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 1 },
  ],
  "B": [
    { fifaCode: "SUI", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 2, points: 4 },
    { fifaCode: "CAN", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 1, points: 4 },
    { fifaCode: "BIH", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 5, points: 1 },
    { fifaCode: "QAT", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 7, points: 1 },
  ],
  "C": [
    { fifaCode: "MAR", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 4 },
    { fifaCode: "BRA", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 4 },
    { fifaCode: "SCO", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 1, points: 3 },
    { fifaCode: "HAI", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 4, points: 0 },
  ],
  "D": [
    { fifaCode: "USA", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 6 },
    { fifaCode: "AUS", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 3 },
    { fifaCode: "PAR", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 5, points: 3 },
    { fifaCode: "TUR", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 5, points: 0 },
  ],
  "E": [
    { fifaCode: "GER", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 1, points: 3 },
    { fifaCode: "CIV", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 3 },
    { fifaCode: "ECU", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 1, points: 0 },
    { fifaCode: "CUW", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 7, points: 0 },
  ],
  "F": [
    { fifaCode: "SWE", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 3 },
    { fifaCode: "NED", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 },
    { fifaCode: "JPN", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 },
    { fifaCode: "TUN", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 5, points: 0 },
  ],
  "G": [
    { fifaCode: "NZL", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 },
    { fifaCode: "BEL", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
    { fifaCode: "EGY", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
    { fifaCode: "IRN", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 },
  ],
  "H": [
    { fifaCode: "ESP", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 1 },
    { fifaCode: "KSA", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
    { fifaCode: "URU", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
    { fifaCode: "CPV", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 1 },
  ],
  "I": [
    { fifaCode: "FRA", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 3 },
    { fifaCode: "NOR", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 3 },
    { fifaCode: "SEN", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 0 },
    { fifaCode: "IRQ", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 4, points: 0 },
  ],
  "J": [
    { fifaCode: "AUT", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 3 },
    { fifaCode: "ARG", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 0, points: 3 },
    { fifaCode: "JOR", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 0 },
    { fifaCode: "ALG", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 3, points: 0 },
  ],
  "K": [
    { fifaCode: "COL", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 2, points: 6 },
    { fifaCode: "POR", played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 2 },
    { fifaCode: "COD", played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 2 },
    { fifaCode: "UZB", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 0 },
  ],
  "L": [
    { fifaCode: "ENG", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 3 },
    { fifaCode: "GHA", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 3 },
    { fifaCode: "CRO", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 0 },
    { fifaCode: "PAN", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 1, points: 0 },
  ],
};
