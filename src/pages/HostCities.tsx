import { useI18n } from "@/i18n/context";
import { FlagImage } from "@/components/shared/FlagImage";

const HOST_CITIES = [
  { city: "Los Angeles", country: "USA", code: "US", stadium: "SoFi Stadium", capacity: "70,240", matches: 8, icon: "🇺🇸" },
  { city: "New York / New Jersey", country: "USA", code: "US", stadium: "MetLife Stadium", capacity: "82,500", matches: 8, icon: "🇺🇸" },
  { city: "Dallas", country: "USA", code: "US", stadium: "AT&T Stadium", capacity: "80,000", matches: 9, icon: "🇺🇸" },
  { city: "Houston", country: "USA", code: "US", stadium: "NRG Stadium", capacity: "72,220", matches: 7, icon: "🇺🇸" },
  { city: "Atlanta", country: "USA", code: "US", stadium: "Mercedes-Benz Stadium", capacity: "71,000", matches: 7, icon: "🇺🇸" },
  { city: "Miami", country: "USA", code: "US", stadium: "Hard Rock Stadium", capacity: "64,767", matches: 7, icon: "🇺🇸" },
  { city: "Philadelphia", country: "USA", code: "US", stadium: "Lincoln Financial Field", capacity: "69,176", matches: 6, icon: "🇺🇸" },
  { city: "Seattle", country: "USA", code: "US", stadium: "Lumen Field", capacity: "69,000", matches: 6, icon: "🇺🇸" },
  { city: "San Francisco Bay Area", country: "USA", code: "US", stadium: "Levi's Stadium", capacity: "68,500", matches: 6, icon: "🇺🇸" },
  { city: "Kansas City", country: "USA", code: "US", stadium: "GEHA Field at Arrowhead", capacity: "76,416", matches: 6, icon: "🇺🇸" },
  { city: "Boston", country: "USA", code: "US", stadium: "Gillette Stadium", capacity: "70,000", matches: 6, icon: "🇺🇸" },
  { city: "Vancouver", country: "Canada", code: "CA", stadium: "BC Place", capacity: "54,500", matches: 7, icon: "🇨🇦" },
  { city: "Toronto", country: "Canada", code: "CA", stadium: "BMO Field", capacity: "45,736", matches: 7, icon: "🇨🇦" },
  { city: "Mexico City", country: "Mexico", code: "MX", stadium: "Estadio Azteca", capacity: "87,523", matches: 7, icon: "🇲🇽" },
  { city: "Guadalajara", country: "Mexico", code: "MX", stadium: "Estadio Akron", capacity: "48,071", matches: 5, icon: "🇲🇽" },
  { city: "Monterrey", country: "Mexico", code: "MX", stadium: "Estadio BBVA", capacity: "53,500", matches: 5, icon: "🇲🇽" },
];

export function HostCities() {
  const { lang } = useI18n();

  const usa = HOST_CITIES.filter((c) => c.country === "USA");
  const canada = HOST_CITIES.filter((c) => c.country === "Canada");
  const mexico = HOST_CITIES.filter((c) => c.country === "Mexico");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-3">
            {lang === "zh" ? "2026世界杯主办城市" : "2026 World Cup Host Cities"}
          </h1>
          <p className="text-muted-foreground">
            {lang === "zh"
              ? "16座城市，3个国家，史上规模最大的世界杯。从墨西哥城的传奇阿兹特克球场，到洛杉矶的 SoFi 体育场，共同见证足球历史。"
              : "16 cities across 3 countries. The biggest World Cup ever. From the legendary Estadio Azteca in Mexico City to SoFi Stadium in Los Angeles, witness football history together."}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 px-4 border-b">
        <div className="container mx-auto grid grid-cols-3 max-w-2xl text-center gap-4">
          <div>
            <div className="text-2xl font-bold text-amber-500">16</div>
            <div className="text-xs text-muted-foreground">
              {lang === "zh" ? "主办城市" : "Host Cities"}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-500">104</div>
            <div className="text-xs text-muted-foreground">
              {lang === "zh" ? "总比赛数" : "Total Matches"}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-500">3</div>
            <div className="text-xs text-muted-foreground">
              {lang === "zh" ? "主办国家" : "Host Countries"}
            </div>
          </div>
        </div>
      </section>

      {/* USA */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FlagImage fifaCode="USA" size={28} /> {lang === "zh" ? "美国（11座城市）" : "United States (11 Cities)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usa.map((c) => (
              <CityCard key={c.city} city={c} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Canada */}
      <section className="py-10 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FlagImage fifaCode="CAN" size={28} /> {lang === "zh" ? "加拿大（2座城市）" : "Canada (2 Cities)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {canada.map((c) => (
              <CityCard key={c.city} city={c} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Mexico */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FlagImage fifaCode="MEX" size={28} /> {lang === "zh" ? "墨西哥（3座城市）" : "Mexico (3 Cities)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mexico.map((c) => (
              <CityCard key={c.city} city={c} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CityCard({ city, lang }: { city: typeof HOST_CITIES[0]; lang: "en" | "zh" }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-card">
      <h3 className="font-bold text-base mb-1">{city.city}</h3>
      <p className="text-xs text-muted-foreground mb-3">{city.stadium}</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-muted-foreground">
            {lang === "zh" ? "容量：" : "Capacity: "}
          </span>
          <span className="font-medium">{city.capacity}</span>
        </div>
        <div>
          <span className="text-muted-foreground">
            {lang === "zh" ? "比赛：" : "Matches: "}
          </span>
          <span className="font-medium">{city.matches}</span>
        </div>
      </div>
    </div>
  );
}
