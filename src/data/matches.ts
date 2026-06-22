import type { Match } from "@/types";

// Helper to create a match
function m(
  id: string, date: string, timeET: string, stage: Match["stage"],
  group: string | undefined, home: string, away: string,
  city: string, venue: string, status: Match["status"],
  hs?: number, as?: number
): Match {
  return { id, date, time: timeET, stage, group, homeTeam: home, awayTeam: away, venue, city, status, homeScore: hs, awayScore: as };
}

// ========== COMPLETED MATCHES (June 11-16) ==========
export const completedMatches: Match[] = [
  // June 11
  m("m01", "2026-06-11", "15:00", "Group Stage", "A", "MEX", "RSA", "Mexico City", "Estadio Azteca", "finished", 2, 0),
  m("m02", "2026-06-11", "22:00", "Group Stage", "A", "KOR", "CZE", "Guadalajara", "Estadio Akron", "finished", 2, 1),
  // June 12
  m("m03", "2026-06-12", "15:00", "Group Stage", "B", "CAN", "BIH", "Toronto", "BMO Field", "finished", 1, 1),
  m("m04", "2026-06-12", "21:00", "Group Stage", "D", "USA", "PAR", "Los Angeles", "SoFi Stadium", "finished", 4, 1),
  // June 13
  m("m05", "2026-06-13", "15:00", "Group Stage", "B", "QAT", "SUI", "San Francisco", "Levi's Stadium", "finished", 1, 1),
  m("m06", "2026-06-13", "18:00", "Group Stage", "C", "BRA", "MAR", "New York", "MetLife Stadium", "finished", 1, 1),
  m("m07", "2026-06-13", "21:00", "Group Stage", "C", "HAI", "SCO", "Boston", "Gillette Stadium", "finished", 0, 1),
  // June 14
  m("m08", "2026-06-14", "00:00", "Group Stage", "D", "AUS", "TUR", "Vancouver", "BC Place", "finished", 2, 0),
  m("m09", "2026-06-14", "13:00", "Group Stage", "E", "GER", "CUW", "Houston", "NRG Stadium", "finished", 7, 1),
  m("m10", "2026-06-14", "16:00", "Group Stage", "F", "NED", "JPN", "Dallas", "AT&T Stadium", "finished", 2, 2),
  m("m11", "2026-06-14", "19:00", "Group Stage", "E", "CIV", "ECU", "Philadelphia", "Lincoln Financial Field", "finished", 1, 0),
  m("m12", "2026-06-14", "22:00", "Group Stage", "F", "SWE", "TUN", "Monterrey", "Estadio BBVA", "finished", 5, 1),
  // June 15
  m("m13", "2026-06-15", "12:00", "Group Stage", "H", "ESP", "CPV", "Atlanta", "Mercedes-Benz Stadium", "finished", 0, 0),
  m("m14", "2026-06-15", "15:00", "Group Stage", "G", "BEL", "EGY", "Seattle", "Lumen Field", "finished", 1, 1),
  m("m15", "2026-06-15", "18:00", "Group Stage", "H", "KSA", "URU", "Miami", "Hard Rock Stadium", "finished", 1, 1),
  m("m16", "2026-06-15", "21:00", "Group Stage", "G", "IRN", "NZL", "Los Angeles", "SoFi Stadium", "finished", 2, 2),
  // June 16
  m("m17", "2026-06-16", "15:00", "Group Stage", "I", "FRA", "SEN", "New York", "MetLife Stadium", "finished", 3, 1),
  m("m18", "2026-06-16", "18:00", "Group Stage", "I", "IRQ", "NOR", "Boston", "Gillette Stadium", "finished", 1, 4),
  m("m19", "2026-06-16", "21:00", "Group Stage", "J", "ARG", "ALG", "Kansas City", "Arrowhead Stadium", "finished", 3, 0),
  // June 17
  m("m20", "2026-06-17", "15:00", "Group Stage", "J", "AUT", "JOR", "Houston", "NRG Stadium", "finished", 3, 1),
  // June 17
  m("m21", "2026-06-17", "13:00", "Group Stage", "K", "POR", "COD", "Houston", "NRG Stadium", "finished", 1, 1),
  // June 17
  m("m23", "2026-06-17", "16:00", "Group Stage", "L", "ENG", "CRO", "Dallas", "AT&T Stadium", "finished", 4, 2),
  // June 18
  m("m22", "2026-06-18", "22:00", "Group Stage", "K", "UZB", "COL", "Santa Clara", "Levi's Stadium", "finished", 1, 3),
  // June 17/18
  m("m24", "2026-06-18", "19:00", "Group Stage", "L", "GHA", "PAN", "Toronto", "BMO Field", "finished", 1, 0),
];

// ========== TODAY (June 18-20) ==========
export const todayMatches: Match[] = [
  // June 18 - Completed matches
  m("m74", "2026-06-18", "12:00", "Group Stage", "A", "CZE", "RSA", "Atlanta", "Mercedes-Benz Stadium", "finished", 1, 1),
  m("m75", "2026-06-18", "15:00", "Group Stage", "B", "SUI", "BIH", "Los Angeles", "SoFi Stadium", "finished", 4, 1),
  // June 18 - Completed matches (evening)
  m("m76", "2026-06-18", "18:00", "Group Stage", "B", "CAN", "QAT", "Vancouver", "BC Place", "finished", 6, 0),
  m("m77", "2026-06-19", "21:00", "Group Stage", "A", "MEX", "KOR", "Guadalajara", "Estadio Akron", "finished", 1, 0),
  m("m78", "2026-06-18", "19:00", "Group Stage", "K", "COL", "UZB", "Santa Clara", "Levi's Stadium", "finished", 3, 1),
  // June 20 - Completed match
  m("m79", "2026-06-20", "15:00", "Group Stage", "D", "USA", "AUS", "Seattle", "Lumen Field", "finished", 2, 0),
];

// ========== UPCOMING: June 18 ==========
export const upcomingJune18: Match[] = [
];

// ========== REMAINING SCHEDULE (MD2 + MD3 placeholder) ==========
export const remainingMatches: Match[] = [
  // MD2: June 19-26 (FIFA official schedule)
  // June 20 (Group C & D)
  m("m29", "2026-06-20", "18:00", "Group Stage", "C", "SCO", "MAR", "Boston", "Gillette Stadium", "finished", 0, 1),
  m("m30", "2026-06-20", "20:30", "Group Stage", "C", "BRA", "HAI", "Philadelphia", "Lincoln Financial Field", "finished", 3, 0),
  m("m31", "2026-06-20", "23:00", "Group Stage", "D", "TUR", "PAR", "San Francisco", "Levi's Stadium", "finished", 0, 1),
  // June 21 (Group E & F)
  m("m32", "2026-06-20", "16:00", "Group Stage", "E", "GER", "CIV", "Toronto", "BMO Field", "finished", 2, 1),
  m("m33", "2026-06-20", "20:00", "Group Stage", "E", "ECU", "CUW", "Kansas City", "Arrowhead Stadium", "finished", 0, 0),
  m("m34", "2026-06-21", "13:00", "Group Stage", "F", "NED", "SWE", "Houston", "NRG Stadium", "finished", 5, 1),
  m("m35", "2026-06-21", "18:00", "Group Stage", "F", "TUN", "JPN", "Atlanta", "Mercedes-Benz Stadium", "finished", 0, 4),
  // June 22 (Group G & H) - MD2 matches
  m("m36", "2026-06-21", "15:00", "Group Stage", "G", "BEL", "IRN", "Los Angeles", "SoFi Stadium", "finished", 0, 0),
  m("m37", "2026-06-21", "21:00", "Group Stage", "G", "NZL", "EGY", "Vancouver", "BC Place", "finished", 1, 3),
  m("m38", "2026-06-21", "12:00", "Group Stage", "H", "ESP", "KSA", "Atlanta", "Mercedes-Benz Stadium", "finished", 4, 0),
  m("m39", "2026-06-21", "18:00", "Group Stage", "H", "URY", "CPV", "Miami", "Hard Rock Stadium", "finished", 2, 2),
  // June 23 (Group I & J)
  m("m40", "2026-06-23", "15:00", "Group Stage", "I", "SEN", "IRQ", "Dallas", "AT&T Stadium", "upcoming"),
  m("m41", "2026-06-23", "21:00", "Group Stage", "I", "FRA", "NOR", "New York", "MetLife Stadium", "upcoming"),
  m("m42", "2026-06-23", "18:00", "Group Stage", "J", "ALG", "AUT", "Boston", "Gillette Stadium", "upcoming"),
  m("m43", "2026-06-23", "15:00", "Group Stage", "J", "ARG", "JOR", "Kansas City", "Arrowhead Stadium", "upcoming"),
  // June 24 (Group K & L)
  m("m44", "2026-06-24", "15:00", "Group Stage", "K", "COD", "UZB", "Seattle", "Lumen Field", "upcoming"),
  m("m45", "2026-06-24", "21:00", "Group Stage", "K", "POR", "COL", "Santa Clara", "Levi's Stadium", "upcoming"),
  m("m46", "2026-06-24", "18:00", "Group Stage", "L", "CRO", "GHA", "Vancouver", "BC Place", "upcoming"),
  m("m47", "2026-06-24", "15:00", "Group Stage", "L", "ENG", "PAN", "Dallas", "AT&T Stadium", "upcoming"),
  // MD3: June 27-30
  m("m49", "2026-06-27", "16:00", "Group Stage", "A", "MEX", "KOR", "Mexico City", "Estadio Azteca", "upcoming"),
  m("m50", "2026-06-27", "16:00", "Group Stage", "A", "RSA", "CZE", "Guadalajara", "Estadio Akron", "upcoming"),
  m("m51", "2026-06-27", "20:00", "Group Stage", "B", "CAN", "QAT", "Toronto", "BMO Field", "upcoming"),
  m("m52", "2026-06-27", "20:00", "Group Stage", "B", "BIH", "SUI", "Vancouver", "BC Place", "upcoming"),
  m("m53", "2026-06-28", "16:00", "Group Stage", "C", "BRA", "HAI", "New York", "MetLife Stadium", "upcoming"),
  m("m54", "2026-06-28", "16:00", "Group Stage", "C", "MAR", "SCO", "Boston", "Gillette Stadium", "upcoming"),
  m("m55", "2026-06-28", "20:00", "Group Stage", "D", "USA", "AUS", "Los Angeles", "SoFi Stadium", "upcoming"),
  m("m56", "2026-06-28", "20:00", "Group Stage", "D", "PAR", "TUR", "Seattle", "Lumen Field", "upcoming"),
  m("m57", "2026-06-29", "16:00", "Group Stage", "E", "GER", "CIV", "Houston", "NRG Stadium", "upcoming"),
  m("m58", "2026-06-29", "16:00", "Group Stage", "E", "CUW", "ECU", "Miami", "Hard Rock Stadium", "upcoming"),
  m("m59", "2026-06-29", "20:00", "Group Stage", "F", "NED", "SWE", "Atlanta", "Mercedes-Benz Stadium", "upcoming"),
  m("m60", "2026-06-29", "20:00", "Group Stage", "F", "JPN", "TUN", "Kansas City", "Arrowhead Stadium", "upcoming"),
  m("m61", "2026-06-30", "16:00", "Group Stage", "G", "BEL", "IRN", "San Francisco", "Levi's Stadium", "upcoming"),
  m("m62", "2026-06-30", "16:00", "Group Stage", "G", "EGY", "NZL", "Los Angeles", "SoFi Stadium", "upcoming"),
  m("m63", "2026-06-30", "20:00", "Group Stage", "H", "ESP", "KSA", "Philadelphia", "Lincoln Financial Field", "upcoming"),
  m("m64", "2026-06-30", "20:00", "Group Stage", "H", "URU", "CPV", "Miami", "Hard Rock Stadium", "upcoming"),
  m("m65", "2026-06-30", "20:00", "Group Stage", "I", "FRA", "IRQ", "New York", "MetLife Stadium", "upcoming"),
  m("m66", "2026-06-30", "20:00", "Group Stage", "I", "SEN", "NOR", "Dallas", "AT&T Stadium", "upcoming"),
  m("m67", "2026-06-30", "20:00", "Group Stage", "J", "ARG", "AUT", "Kansas City", "Arrowhead Stadium", "upcoming"),
  m("m68", "2026-06-30", "20:00", "Group Stage", "J", "ALG", "JOR", "Boston", "Gillette Stadium", "upcoming"),
  m("m69", "2026-07-01", "16:00", "Group Stage", "K", "POR", "UZB", "Santa Clara", "Levi's Stadium", "upcoming"),
  m("m70", "2026-07-01", "16:00", "Group Stage", "K", "COL", "COD", "Seattle", "Lumen Field", "upcoming"),
  m("m71", "2026-07-01", "20:00", "Group Stage", "L", "ENG", "GHA", "Dallas", "AT&T Stadium", "upcoming"),
  m("m72", "2026-07-01", "20:00", "Group Stage", "L", "CRO", "PAN", "Vancouver", "BC Place", "upcoming"),
];

// Knockout (TBD)
function ko(id: string, date: string, time: string, stage: Match["stage"], venueIdx: number): Match {
  const venues = [
    { city: "New York", venue: "MetLife Stadium" },
    { city: "Los Angeles", venue: "SoFi Stadium" },
    { city: "Dallas", venue: "AT&T Stadium" },
    { city: "Atlanta", venue: "Mercedes-Benz Stadium" },
    { city: "Miami", venue: "Hard Rock Stadium" },
    { city: "Kansas City", venue: "Arrowhead Stadium" },
    { city: "Boston", venue: "Gillette Stadium" },
    { city: "Philadelphia", venue: "Lincoln Financial Field" },
    { city: "San Francisco", venue: "Levi's Stadium" },
    { city: "Seattle", venue: "Lumen Field" },
    { city: "Houston", venue: "NRG Stadium" },
    { city: "Vancouver", venue: "BC Place" },
  ];
  const v = venues[venueIdx % venues.length];
  return { id, date, time, stage, homeTeam: "TBD", awayTeam: "TBD", venue: v.venue, city: v.city, status: "upcoming" };
}

export const knockoutMatches: Match[] = [
  ko("r32-01", "2026-07-03", "16:00", "Round of 32", 0),
  ko("r32-02", "2026-07-03", "20:00", "Round of 32", 1),
  ko("r32-03", "2026-07-04", "12:00", "Round of 32", 2),
  ko("r32-04", "2026-07-04", "16:00", "Round of 32", 3),
  ko("r32-05", "2026-07-04", "20:00", "Round of 32", 4),
  ko("r32-06", "2026-07-05", "12:00", "Round of 32", 5),
  ko("r32-07", "2026-07-05", "16:00", "Round of 32", 6),
  ko("r32-08", "2026-07-05", "20:00", "Round of 32", 7),
  ko("r32-09", "2026-07-06", "12:00", "Round of 32", 8),
  ko("r32-10", "2026-07-06", "16:00", "Round of 32", 9),
  ko("r32-11", "2026-07-06", "20:00", "Round of 32", 10),
  ko("r32-12", "2026-07-07", "12:00", "Round of 32", 11),
  ko("r32-13", "2026-07-07", "16:00", "Round of 32", 0),
  ko("r32-14", "2026-07-07", "20:00", "Round of 32", 1),
  ko("r32-15", "2026-07-08", "16:00", "Round of 32", 2),
  ko("r32-16", "2026-07-08", "20:00", "Round of 32", 3),
  ko("r16-01", "2026-07-09", "16:00", "Round of 16", 4),
  ko("r16-02", "2026-07-09", "20:00", "Round of 16", 5),
  ko("r16-03", "2026-07-10", "16:00", "Round of 16", 6),
  ko("r16-04", "2026-07-10", "20:00", "Round of 16", 7),
  ko("r16-05", "2026-07-11", "12:00", "Round of 16", 8),
  ko("r16-06", "2026-07-11", "16:00", "Round of 16", 9),
  ko("r16-07", "2026-07-11", "20:00", "Round of 16", 10),
  ko("r16-08", "2026-07-12", "16:00", "Round of 16", 11),
  ko("qf-01", "2026-07-13", "16:00", "Quarter-finals", 0),
  ko("qf-02", "2026-07-13", "20:00", "Quarter-finals", 1),
  ko("qf-03", "2026-07-14", "16:00", "Quarter-finals", 2),
  ko("qf-04", "2026-07-14", "20:00", "Quarter-finals", 3),
  ko("sf-01", "2026-07-16", "16:00", "Semi-finals", 0),
  ko("sf-02", "2026-07-17", "16:00", "Semi-finals", 1),
  ko("tp-01", "2026-07-19", "12:00", "Third Place", 2),
  ko("final", "2026-07-19", "16:00", "Final", 0),
];

export const allMatches = [...completedMatches, ...todayMatches, ...upcomingJune18, ...remainingMatches, ...knockoutMatches];

export const getMatchesByDate = (date: string): Match[] =>
  allMatches.filter((m) => m.date === date);

export const getMatchesByGroup = (group: string): Match[] =>
  allMatches.filter((m) => m.group === group && m.stage === "Group Stage");

export const getMatchesByStage = (stage: Match["stage"]): Match[] =>
  allMatches.filter((m) => m.stage === stage);

export const getLiveMatches = (): Match[] =>
  allMatches.filter((m) => m.status === "live");
