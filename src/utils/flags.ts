// FIFA code → ISO 3166-1 alpha-2 for flag CDN
const fifaToIso: Record<string, string> = {
  MEX: "mx", RSA: "za", CZE: "cz", KOR: "kr",
  BIH: "ba", CAN: "ca", QAT: "qa", SUI: "ch",
  BRA: "br", HAI: "ht", MAR: "ma", SCO: "gb-sct",
  AUS: "au", PAR: "py", TUR: "tr", USA: "us",
  CUW: "cw", ECU: "ec", GER: "de", CIV: "ci",
  JPN: "jp", NED: "nl", SWE: "se", TUN: "tn",
  BEL: "be", EGY: "eg", IRN: "ir", NZL: "nz",
  ESP: "es", CPV: "cv", KSA: "sa", URU: "uy",
  FRA: "fr", SEN: "sn", IRQ: "iq", NOR: "no",
  ARG: "ar", ALG: "dz", AUT: "at", JOR: "jo",
  POR: "pt", COD: "cd", UZB: "uz", COL: "co",
  ENG: "gb-eng", CRO: "hr", GHA: "gh", PAN: "pa",
};

// Try multiple CDNs — jsdelivr works well globally including China
function getIso(fifaCode: string): string {
  return fifaToIso[fifaCode] || fifaCode.toLowerCase();
}

export function getFlagUrl(fifaCode: string, _size?: number): string {
  const iso = getIso(fifaCode);
  // jsdelivr CDN — flag-icons package, works in China
  return `https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/${iso}.svg`;
}

// Fallback emoji
export function getFlagEmoji(fifaCode: string): string {
  const emojis: Record<string, string> = {
    MEX: "🇲🇽", RSA: "🇿🇦", CZE: "🇨🇿", KOR: "🇰🇷",
    BIH: "🇧🇦", CAN: "🇨🇦", QAT: "🇶🇦", SUI: "🇨🇭",
    BRA: "🇧🇷", HAI: "🇭🇹", MAR: "🇲🇦", SCO: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    AUS: "🇦🇺", PAR: "🇵🇾", TUR: "🇹🇷", USA: "🇺🇸",
    CUW: "🇨🇼", ECU: "🇪🇨", GER: "🇩🇪", CIV: "🇨🇮",
    JPN: "🇯🇵", NED: "🇳🇱", SWE: "🇸🇪", TUN: "🇹🇳",
    BEL: "🇧🇪", EGY: "🇪🇬", IRN: "🇮🇷", NZL: "🇳🇿",
    ESP: "🇪🇸", CPV: "🇨🇻", KSA: "🇸🇦", URU: "🇺🇾",
    FRA: "🇫🇷", SEN: "🇸🇳", IRQ: "🇮🇶", NOR: "🇳🇴",
    ARG: "🇦🇷", ALG: "🇩🇿", AUT: "🇦🇹", JOR: "🇯🇴",
    POR: "🇵🇹", COD: "🇨🇩", UZB: "🇺🇿", COL: "🇨🇴",
    ENG: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", CRO: "🇭🇷", GHA: "🇬🇭", PAN: "🇵🇦",
  };
  return emojis[fifaCode] || "🏳️";
}
