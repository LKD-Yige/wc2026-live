import type { Match } from "@/types";

// Helper to create a match
function m(
  id: string, date: string, timeET: string, stage: Match["stage"],
  group: string | undefined, home: string, away: string,
  city: string, venue: string, status: Match["status"],
  hs?: number, as?: number, phs?: number, pas?: number
): Match {
  const match: Match = { id, date, time: timeET, stage, group, homeTeam: home, awayTeam: away, venue, city, status, homeScore: hs, awayScore: as };
  if (phs !== undefined) match.penaltyHomeScore = phs;
  if (pas !== undefined) match.penaltyAwayScore = pas;
  return match;
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

// ========== TODAY (June 24-25) ==========
export const todayMatches: Match[] = [
  // June 18 - Completed matches
  m("m74", "2026-06-18", "12:00", "Group Stage", "A", "CZE", "RSA", "Atlanta", "Mercedes-Benz Stadium", "finished", 1, 1),
  m("m75", "2026-06-18", "15:00", "Group Stage", "B", "SUI", "BIH", "Los Angeles", "SoFi Stadium", "finished", 4, 1),
  // June 18 - Completed matches (evening)
  m("m76", "2026-06-18", "18:00", "Group Stage", "B", "CAN", "QAT", "Vancouver", "BC Place", "finished", 6, 0),
  m("m77", "2026-06-19", "21:00", "Group Stage", "A", "MEX", "KOR", "Guadalajara", "Estadio Akron", "finished", 1, 0),
  m("m78", "2026-06-24", "09:00", "Group Stage", "K", "COL", "COD", "Guadalajara", "Estadio Akron", "finished", 1, 0),
  // June 20 - Completed match
  m("m79", "2026-06-20", "15:00", "Group Stage", "D", "USA", "AUS", "Seattle", "Lumen Field", "finished", 2, 0),
  // June 24-25 - MD3 matches (Group B)
  m("m80", "2026-06-25", "01:00", "Group Stage", "B", "BIH", "QAT", "Seattle", "Lumen Field", "finished", 3, 1),
  m("m81", "2026-06-24", "21:00", "Group Stage", "B", "SUI", "CAN", "Vancouver", "BC Place", "finished", 2, 1),
  // June 24-25 - MD3 matches (Group C)
  m("m82", "2026-06-25", "18:00", "Group Stage", "C", "MAR", "HAI", "Atlanta", "Mercedes-Benz Stadium", "finished", 4, 2),
  m("m83", "2026-06-25", "18:00", "Group Stage", "C", "SCO", "BRA", "Miami Gardens", "Hard Rock Stadium", "finished", 0, 3),
  // June 27 - Group K & L MD3
  m("m44", "2026-06-27", "19:30", "Group Stage", "K", "COD", "UZB", "Atlanta", "Mercedes-Benz Stadium", "finished", 3, 1),
  m("m45", "2026-06-27", "19:30", "Group Stage", "K", "POR", "COL", "Miami", "Hard Rock Stadium", "finished", 0, 0),
  m("m46", "2026-06-27", "17:00", "Group Stage", "L", "CRO", "GHA", "Philadelphia", "Lincoln Financial Field", "finished", 2, 1),
  m("m47", "2026-06-27", "17:00", "Group Stage", "L", "PAN", "ENG", "New York", "MetLife Stadium", "finished", 0, 2),
  // June 28 - Group J MD3 (finished)
  m("m85", "2026-06-28", "09:00", "Group Stage", "J", "ALG", "AUT", "Kansas City", "Arrowhead Stadium", "finished", 3, 3),
  m("m86", "2026-06-28", "09:00", "Group Stage", "J", "JOR", "ARG", "Dallas", "AT&T Stadium", "finished", 1, 3),
];

// ========== UPCOMING: June 18 ==========
export const upcomingJune18: Match[] = [
];

// ========== COMPLETED KNOCKOUT MATCHES ==========
export const completedKnockout: Match[] = [
  // Round of 32 - June 28 (first knockout match)
  m("r32-01", "2026-06-28", "15:00", "Round of 32", undefined, "RSA", "CAN", "Inglewood", "SoFi Stadium", "finished", 0, 1),
  // Round of 32 - June 29 (second knockout match)
  m("r32-02", "2026-06-29", "13:00", "Round of 32", undefined, "BRA", "JPN", "Houston", "NRG Stadium", "finished", 2, 1),
  // Round of 32 - June 29 (third knockout match, extra time + penalties)
  // Penalty shootout: GER 3-4 PAR (Havertz saved, Waldtmed over bar, Tah over bar; Canale scored sudden death)
  m("r32-04", "2026-06-29", "16:30", "Round of 32", undefined, "GER", "PAR", "Boston", "Gillette Stadium", "finished", 1, 1, 3, 4),
  // Round of 32 - June 29 (fourth knockout match, extra time + penalties)
  // Penalty shootout: NED 2-3 MAR (Koopmeiners scored, Kluivert missed, Weghorst scored, Timber missed, Summerville saved; El Aynaoui missed, Rahimi scored, Talbi missed, Hakimi hit post, Saibari scored)
  m("r32-05", "2026-06-29", "21:00", "Round of 32", undefined, "NED", "MAR", "Monterrey", "Estadio BBVA", "finished", 1, 1, 2, 3),
  // Round of 32 - June 30 (fifth knockout match)
  // Norway won 2-1: Nusa 39', Diallo 74', Haaland 86'
  m("r32-06", "2026-06-30", "13:00", "Round of 32", undefined, "CIV", "NOR", "Arlington", "AT&T Stadium", "finished", 1, 2),
  // Round of 32 - June 30 (sixth knockout match, FINAL)
  // France won 3-0: Barcola 45+1', Mbappé 53', Mbappé 74'
  // Mbappé now has 6 goals in tournament, tied for Golden Boot lead
  m("r32-07", "2026-06-30", "17:00", "Round of 32", undefined, "FRA", "SWE", "New York", "MetLife Stadium", "finished", 3, 0),
  // Round of 32 - July 1 (seventh knockout match, FINAL)
  // Mexico won 2-0: Quiñones 22', Jiménez 31'
  // Mexico advances to Round of 16, will play winner of r32-09 (ENG vs COD)
  m("r32-08", "2026-06-30", "22:00", "Round of 32", undefined, "MEX", "ECU", "Mexico City", "Estadio Azteca", "finished", 2, 0),
  // Round of 32 - July 1 (ninth knockout match, FINAL)
  // England won 2-1: Cipenga 7' (COD), Kane 75', Kane 86'
  // England advances to Round of 16, will play MEX (r32-08 winner)
  m("r32-09", "2026-07-01", "12:00", "Round of 32", undefined, "ENG", "COD", "Atlanta", "Mercedes-Benz Stadium", "finished", 2, 1),
  // Round of 32 - July 1 (tenth knockout match, FINAL - after extra time)
  // Belgium won 3-2 after incredible comeback: Diarra 24', Sarr 52', Lukaku 86', Tielemans 88', Tielemans 120+6' (pen)
  // Belgium advances to Round of 16, will play winner of r32-11 (USA vs BIH)
  m("r32-10", "2026-07-01", "16:00", "Round of 32", undefined, "BEL", "SEN", "Seattle", "Lumen Field", "finished", 3, 2),
  // Round of 32 - July 1 (eleventh knockout match, FINAL)
  // USA won 2-0: Balogun 45', Tillman 81'
  // Match was live with USA down to 10 men (Balogun red card 64'), but USA held on
  // USA advances to Round of 16, will play BEL (r32-10 winner)
  m("r32-11", "2026-07-01", "21:00", "Round of 32", undefined, "USA", "BIH", "Santa Clara", "Levi's Stadium", "finished", 2, 0),
  // Round of 32 - July 2 (twelfth knockout match, FINAL)
  // Spain won 3-0: Oyarzabal 36', Porro 66', Oyarzabal 89'
  // Spain advances to Round of 16, will play winner of r32-13 (POR vs CRO)
  m("r32-12", "2026-07-03", "02:00", "Round of 32", undefined, "ESP", "AUT", "Inglewood", "SoFi Stadium", "finished", 3, 0),
  // Round of 32 - July 2 (thirteenth match, FINAL)
  // Portugal won 2-1: Perisic 53' (CRO 0-1), Ronaldo 68' penalty (1-1), Ramos 90+4' (2-1)
  // Portugal advances to Round of 16, will play ESP (r32-12 winner)
  m("r32-13", "2026-07-03", "06:00", "Round of 32", undefined, "POR", "CRO", "Toronto", "BMO Field", "finished", 2, 1),
  // Round of 32 - July 3 (fourteenth match, FINAL)
  // Switzerland won 2-0: Embolo 10', Ndoye 46'
  // Switzerland advances to Round of 16, will play r32-15 winner (Egypt)
  m("r32-14", "2026-07-03", "23:00", "Round of 32", undefined, "SUI", "ALG", "Vancouver", "BC Place", "finished", 2, 0),
  // Round of 32 - July 3 (fifteenth match, COMPLETED - after penalties)
  // Australia 1-1 Egypt (FT); Australia 2-4 Egypt (penalties)
  // Goals: Ashour 13' (EGY), Hany OG 55' (AUS)
  // Egypt advances to Round of 16
  m("r32-15", "2026-07-03", "13:00", "Round of 32", undefined, "AUS", "EGY", "Arlington", "AT&T Stadium", "finished", 1, 1, 2, 4),
  // Round of 32 - July 3 (sixteenth match, COMPLETED - after extra time)
  // Argentina 3-2 Cape Verde (ET)
  // Match was 2-2 at 107' (extra time), final score 3-2 to Argentina
  // Argentina advances to Round of 16
  m("r32-16", "2026-07-03", "18:00", "Round of 32", undefined, "ARG", "CPV", "Miami", "Hard Rock Stadium", "finished", 3, 2),
  // Round of 32 - July 3 (seventeenth match, COMPLETED)
  // Colombia won 1-0: Arias 14'
  // Colombia advances to Round of 16, will play Switzerland (r32-14 winner)
  m("r32-17", "2026-07-03", "20:30", "Round of 32", undefined, "COL", "GHA", "Kansas City", "Arrowhead Stadium", "finished", 1, 0),
  // Round of 16 - July 4 (first match, COMPLETED)
  // Morocco won 3-0: Ounahi 50', Ounahi 82', Rahimi 90+8'
  // Morocco advances to quarterfinals, will play winner of r16-02 (PAR vs FRA)
  m("r16-01", "2026-07-04", "13:00", "Round of 16", undefined, "CAN", "MAR", "Houston", "NRG Stadium", "finished", 0, 3),
  // Round of 16 - July 4 (second match, COMPLETED)
  // France won 1-0: Mbappé 70' (penalty)
  // France advances to quarterfinals, will play Morocco (r16-01 winner)
  m("r16-02", "2026-07-04", "17:00", "Round of 16", undefined, "PAR", "FRA", "Philadelphia", "Lincoln Financial Field", "finished", 0, 1),
  // Round of 16 - July 5 (third match, COMPLETED)
  // Norway won 2-1: Nusa 39', Diallo 74', Haaland 86'
  // Norway advances to quarterfinals
  m("r16-03", "2026-07-05", "16:00", "Round of 16", undefined, "BRA", "NOR", "East Rutherford", "MetLife Stadium", "finished", 1, 2),
  // Round of 16 - July5 (fourth match, COMPLETED)
  // England won 3-2: Bellingham 36', Bellingham 38', Quiñones 42', Kane 60' (pen), Jiménez 90+13' (pen)
  // England played with 10 men after Quansah red card 54'
  m("r16-04", "2026-07-05", "21:00", "Round of 16", undefined, "MEX", "ENG", "Mexico City", "Estadio Azteca", "finished", 2, 3),
];

// ========== LIVE KNOCKOUT MATCHES ==========
// Portugal vs Spain - LIVE at 26' (0-0 as of 03:25 GMT+8)
export const liveKnockout: Match[] = [
  m("r16-05", "2026-07-06", "15:00", "Round of 16", undefined, "POR", "ESP", "Arlington", "AT&T Stadium", "live", 0, 0),
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
  // June 23 (Group I & J) - MD2 matches
  m("m40", "2026-06-23", "17:00", "Group Stage", "I", "FRA", "IRQ", "Philadelphia", "Lincoln Financial Field", "finished", 3, 0),
  m("m41", "2026-06-23", "20:00", "Group Stage", "I", "NOR", "SEN", "New York", "MetLife Stadium", "finished", 3, 2),
  m("m42", "2026-06-23", "23:00", "Group Stage", "J", "JOR", "ALG", "Santa Clara", "Levi's Stadium", "finished", 1, 2),
  m("m43", "2026-06-22", "13:00", "Group Stage", "J", "ARG", "AUT", "Arlington", "AT&T Stadium", "finished", 2, 0),
  // June 23 (Group K & L) - MD2 matches
  // MD3: June 27 - July 1 (Group K & L completed)
  m("m69", "2026-06-23", "13:00", "Group Stage", "K", "POR", "COD", "Houston", "NRG Stadium", "finished", 1, 1),
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
  // Round of 32 - June 28-July 4, 2026
  ko("r32-01", "2026-06-28", "15:00", "Round of 32", 1), // Completed: RSA 0-1 CAN
  ko("r32-03", "2026-06-29", "13:00", "Round of 32", 3), // Completed: BRA 2-1 JPN (actual r32-02)
  ko("r32-06", "2026-06-30", "13:00", "Round of 32", 6), // Completed: CIV 1-2 NOR (actual r32-06)
  m("r32-07", "2026-06-30", "17:00", "Round of 32", undefined, "FRA", "SWE", "New York", "MetLife Stadium", "finished", 3, 0),
  // r32-08 (MEX vs ECU) moved to completedKnockout - FT (2-0)
  // r32-09 (ENG vs COD) moved to completedKnockout - FT (2-1)
  // r32-10 (BEL vs SEN) moved to completedKnockout - FT (3-2, after extra time)
  // r32-11 (USA vs BIH) moved to completedKnockout - FT (2-0)
  // Round of 32 - July 2 (twelfth match, COMPLETED)
  m("r32-12", "2026-07-03", "02:00", "Round of 32", undefined, "ESP", "AUT", "Inglewood", "SoFi Stadium", "finished", 3, 0),
  // Round of 32 - July 2 (thirteenth match, FINISHED)
  // Portugal won 2-1: Perisic 53' (CRO 0-1), Ronaldo 68' penalty (1-1), Ramos 90+4' (2-1)
  // Portugal advances to Round of 16, will play ESP (r32-12 winner)
  m("r32-13", "2026-07-03", "06:00", "Round of 32", undefined, "POR", "CRO", "Toronto", "BMO Field", "finished", 2, 1),
  // Round of 32 - July 3 (fourteenth match, FINISHED)
  // Switzerland won 2-0: Embolo 10', Ndoye 46'
  // Switzerland advances to Round of 16, will play r32-15 winner (Egypt)
  m("r32-14", "2026-07-03", "23:00", "Round of 32", undefined, "SUI", "ALG", "Vancouver", "BC Place", "finished", 2, 0),
  // Round of 32 - July 3 (fifteenth match, COMPLETED - after penalties)
  // Australia 1-1 Egypt (FT); Australia 2-4 Egypt (penalties)
  // Goals: Ashour 13' (EGY), Hany OG 55' (AUS)
  // Egypt advances to Round of 16
  m("r32-15", "2026-07-03", "13:00", "Round of 32", undefined, "AUS", "EGY", "Arlington", "AT&T Stadium", "finished", 1, 1, 2, 4),
  // Round of 32 - July 3 (sixteenth match, FINISHED - after extra time)
  // Argentina won 3-2 after extra time
  // Argentina advances to Round of 16
  m("r32-16", "2026-07-03", "18:00", "Round of 32", undefined, "ARG", "CPV", "Miami", "Hard Rock Stadium", "finished", 3, 2),
  // Round of 32 - July 4 (seventeenth match, COMPLETED)
  // Colombia won 1-0: Arias 14'
  // Colombia advances to Round of 16, will play Switzerland (r32-14 winner)
  m("r32-17", "2026-07-03", "20:30", "Round of 32", undefined, "COL", "GHA", "Kansas City", "Arrowhead Stadium", "finished", 1, 0),
  // Round of 16 - July 4-7, 2026 (CORRECTED SCHEDULE)
  // Match 1: Canada vs Morocco - July 4 - FINISHED (Morocco won 3-0)
  // Match 2: Paraguay vs France - July 4 - FINISHED (France won 1-0)
  // Match 3: Brazil vs Norway - July 5 - FINISHED (Norway won 2-1)
  // Match 4: Mexico vs England - July 5 - FINISHED (England won 3-2)
  // Match 5: Portugal vs Spain - July 6 3:00 PM ET - LIVE (moved to liveKnockout at 03:25 GMT+8 July 7)
  // Match 6: USA vs Belgium - July 6 8:00 PM ET (Lumen Field, Seattle)
  m("r16-06", "2026-07-06", "20:00", "Round of 16", undefined, "USA", "BEL", "Seattle", "Lumen Field", "upcoming"),
  // Match 7: Switzerland vs Egypt - July 7 12:00 PM ET (Mercedes-Benz Stadium, Atlanta)
  m("r16-07", "2026-07-07", "12:00", "Round of 16", undefined, "SUI", "EGY", "Atlanta", "Mercedes-Benz Stadium", "upcoming"),
  // Match 8: Argentina vs Colombia - July 7 4:00 PM ET (BC Place, Vancouver)
  m("r16-08", "2026-07-07", "16:00", "Round of 16", undefined, "ARG", "COL", "Vancouver", "BC Place", "upcoming"),
  // Quarter-finals - July 10-11, 2026
  ko("qf-01", "2026-07-10", "16:00", "Quarter-finals", 1),
  ko("qf-02", "2026-07-10", "20:00", "Quarter-finals", 2),
  ko("qf-03", "2026-07-11", "16:00", "Quarter-finals", 3),
  ko("qf-04", "2026-07-11", "20:00", "Quarter-finals", 4),
  // Semi-finals - July 14-15, 2026
  ko("sf-01", "2026-07-14", "16:00", "Semi-finals", 5),
  ko("sf-02", "2026-07-15", "16:00", "Semi-finals", 6),
  // Third Place - July 18, 2026
  ko("tp-01", "2026-07-18", "16:00", "Third Place", 7),
  // Final - July 19, 2026
  ko("final", "2026-07-19", "16:00", "Final", 0),
];

export const allMatches = [...completedMatches, ...todayMatches, ...upcomingJune18, ...remainingMatches, ...completedKnockout, ...liveKnockout, ...knockoutMatches];

export const getMatchesByDate = (date: string): Match[] =>
  allMatches.filter((m) => m.date === date);

export const getMatchesByGroup = (group: string): Match[] =>
  allMatches.filter((m) => m.group === group && m.stage === "Group Stage");

export const getMatchesByStage = (stage: Match["stage"]): Match[] =>
  allMatches.filter((m) => m.stage === stage);

export const getLiveMatches = (): Match[] =>
  allMatches.filter((m) => m.status === "live");
