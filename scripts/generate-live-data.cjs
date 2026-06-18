// Build-time script to generate live-data.json for client polling
// Run: node scripts/generate-live-data.js

const fs = require("fs");
const path = require("path");

const now = new Date().toISOString();

// Read standings from TypeScript (we'll generate this during build)
// For now, create the file manually with current data

const data = {
  generated: now,
  day: 6,
  matchesCompleted: [
    { id: "m01", date: "2026-06-11", time: "15:00", stage: "Group Stage", group: "A", homeTeam: "MEX", awayTeam: "RSA", venue: "Estadio Azteca", city: "Mexico City", status: "finished", homeScore: 2, awayScore: 0 },
    { id: "m02", date: "2026-06-11", time: "22:00", stage: "Group Stage", group: "A", homeTeam: "KOR", awayTeam: "CZE", venue: "Estadio Akron", city: "Guadalajara", status: "finished", homeScore: 2, awayScore: 1 },
    { id: "m03", date: "2026-06-12", time: "15:00", stage: "Group Stage", group: "B", homeTeam: "CAN", awayTeam: "BIH", venue: "BMO Field", city: "Toronto", status: "finished", homeScore: 1, awayScore: 1 },
    { id: "m04", date: "2026-06-12", time: "21:00", stage: "Group Stage", group: "D", homeTeam: "USA", awayTeam: "PAR", venue: "SoFi Stadium", city: "Los Angeles", status: "finished", homeScore: 4, awayScore: 1 },
    { id: "m05", date: "2026-06-13", time: "15:00", stage: "Group Stage", group: "B", homeTeam: "QAT", awayTeam: "SUI", venue: "Levi's Stadium", city: "San Francisco", status: "finished", homeScore: 1, awayScore: 1 },
    { id: "m06", date: "2026-06-13", time: "18:00", stage: "Group Stage", group: "C", homeTeam: "BRA", awayTeam: "MAR", venue: "MetLife Stadium", city: "New York", status: "finished", homeScore: 1, awayScore: 1 },
    { id: "m07", date: "2026-06-13", time: "21:00", stage: "Group Stage", group: "C", homeTeam: "HAI", awayTeam: "SCO", venue: "Gillette Stadium", city: "Boston", status: "finished", homeScore: 0, awayScore: 1 },
    { id: "m08", date: "2026-06-14", time: "00:00", stage: "Group Stage", group: "D", homeTeam: "AUS", awayTeam: "TUR", venue: "BC Place", city: "Vancouver", status: "finished", homeScore: 2, awayScore: 0 },
    { id: "m09", date: "2026-06-14", time: "13:00", stage: "Group Stage", group: "E", homeTeam: "GER", awayTeam: "CUW", venue: "NRG Stadium", city: "Houston", status: "finished", homeScore: 7, awayScore: 1 },
    { id: "m10", date: "2026-06-14", time: "16:00", stage: "Group Stage", group: "F", homeTeam: "NED", awayTeam: "JPN", venue: "AT&T Stadium", city: "Dallas", status: "finished", homeScore: 2, awayScore: 2 },
    { id: "m11", date: "2026-06-14", time: "19:00", stage: "Group Stage", group: "E", homeTeam: "CIV", awayTeam: "ECU", venue: "Lincoln Financial Field", city: "Philadelphia", status: "finished", homeScore: 1, awayScore: 0 },
    { id: "m12", date: "2026-06-14", time: "22:00", stage: "Group Stage", group: "F", homeTeam: "SWE", awayTeam: "TUN", venue: "Estadio BBVA", city: "Monterrey", status: "finished", homeScore: 5, awayScore: 1 },
    { id: "m13", date: "2026-06-15", time: "12:00", stage: "Group Stage", group: "H", homeTeam: "ESP", awayTeam: "CPV", venue: "Mercedes-Benz Stadium", city: "Atlanta", status: "finished", homeScore: 0, awayScore: 0 },
    { id: "m14", date: "2026-06-15", time: "15:00", stage: "Group Stage", group: "G", homeTeam: "BEL", awayTeam: "EGY", venue: "Lumen Field", city: "Seattle", status: "finished", homeScore: 1, awayScore: 1 },
    { id: "m15", date: "2026-06-15", time: "18:00", stage: "Group Stage", group: "H", homeTeam: "KSA", awayTeam: "URU", venue: "Hard Rock Stadium", city: "Miami", status: "finished", homeScore: 1, awayScore: 1 },
    { id: "m16", date: "2026-06-15", time: "21:00", stage: "Group Stage", group: "G", homeTeam: "IRN", awayTeam: "NZL", venue: "SoFi Stadium", city: "Los Angeles", status: "finished", homeScore: 2, awayScore: 2 },
    { id: "m17", date: "2026-06-16", time: "15:00", stage: "Group Stage", group: "I", homeTeam: "FRA", awayTeam: "SEN", venue: "MetLife Stadium", city: "New York", status: "finished", homeScore: 3, awayScore: 1 },
    { id: "m18", date: "2026-06-16", time: "18:00", stage: "Group Stage", group: "I", homeTeam: "IRQ", awayTeam: "NOR", venue: "Gillette Stadium", city: "Boston", status: "finished", homeScore: 1, awayScore: 4 },
    { id: "m19", date: "2026-06-16", time: "21:00", stage: "Group Stage", group: "J", homeTeam: "ARG", awayTeam: "ALG", venue: "Arrowhead Stadium", city: "Kansas City", status: "finished", homeScore: 3, awayScore: 0 },
    { id: "m20", date: "2026-06-17", time: "15:00", stage: "Group Stage", group: "J", homeTeam: "AUT", awayTeam: "JOR", venue: "NRG Stadium", city: "Houston", status: "finished", homeScore: 3, awayScore: 1 },
    { id: "m21", date: "2026-06-17", time: "13:00", stage: "Group Stage", group: "K", homeTeam: "POR", awayTeam: "COD", venue: "NRG Stadium", city: "Houston", status: "finished", homeScore: 1, awayScore: 1 },
    { id: "m23", date: "2026-06-17", time: "16:00", stage: "Group Stage", group: "L", homeTeam: "ENG", awayTeam: "CRO", venue: "AT&T Stadium", city: "Dallas", status: "finished", homeScore: 4, awayScore: 2 },
  ],
  liveMatches: [
    { id: "m24", date: "2026-06-18", time: "19:00", stage: "Group Stage", group: "L", homeTeam: "GHA", awayTeam: "PAN", venue: "BMO Field", city: "Toronto", status: "live", homeScore: 0, awayScore: 0 },
  ],
  standings: {
    A: [{ fifaCode: "MEX", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, points: 3 }, { fifaCode: "KOR", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 3 }, { fifaCode: "CZE", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, points: 0 }, { fifaCode: "RSA", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, points: 0 }],
    B: [{ fifaCode: "CAN", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "QAT", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "SUI", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "BIH", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }],
    C: [{ fifaCode: "SCO", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 3 }, { fifaCode: "BRA", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "MAR", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "HAI", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 1, points: 0 }],
    D: [{ fifaCode: "USA", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 3 }, { fifaCode: "AUS", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, points: 3 }, { fifaCode: "PAR", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 4, points: 0 }, { fifaCode: "TUR", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, points: 0 }],
    E: [{ fifaCode: "GER", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 1, points: 3 }, { fifaCode: "CIV", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 3 }, { fifaCode: "ECU", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 1, points: 0 }, { fifaCode: "CUW", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 7, points: 0 }],
    F: [{ fifaCode: "SWE", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 3 }, { fifaCode: "NED", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 }, { fifaCode: "JPN", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 }, { fifaCode: "TUN", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 5, points: 0 }],
    G: [{ fifaCode: "NZL", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 }, { fifaCode: "BEL", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "EGY", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "IRN", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 1 }],
    H: [{ fifaCode: "ESP", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 1 }, { fifaCode: "KSA", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "URU", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 }, { fifaCode: "CPV", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 1 }],
    I: [{ fifaCode: "FRA", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 3 }, { fifaCode: "NOR", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 3 }, { fifaCode: "SEN", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 0 }, { fifaCode: "IRQ", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 4, points: 0 }],
    J: [{ fifaCode: "ARG", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 0, points: 3 }, { fifaCode: "AUT", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 3 }, { fifaCode: "JOR", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 0 }, { fifaCode: "ALG", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 3, points: 0 }],
    L: [{ fifaCode: "ENG", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 3 }, { fifaCode: "CRO", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 0 }, { fifaCode: "GHA", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }, { fifaCode: "PAN", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }],
  },
  summary: {
    totalMatches: 22,
    totalGoals: 66,
    groupsActive: 12,
    liveMatches: 1,
  },
};

const outDir = path.join(__dirname, "..", "public", "api");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "scores.json"), JSON.stringify(data, null, 2));
console.log(`✅ Live data generated at ${now}`);
console.log(`   ${data.summary.totalMatches} matches, ${data.summary.totalGoals} goals, ${data.summary.groupsActive} groups`);
