import { useI18n } from "@/i18n/context";

const FAQ_ITEMS_EN = [
  {
    q: "When does the 2026 World Cup start?",
    a: "The tournament kicks off on June 11, 2026, with the opening match at Estadio Azteca in Mexico City. The final will be played on July 19, 2026, at MetLife Stadium in New York/New Jersey.",
  },
  {
    q: "How many teams are in the 2026 World Cup?",
    a: "The 2026 tournament features 48 teams, expanded from the previous 32. The teams are divided into 12 groups of 4, with the top 2 from each group plus the 8 best third-place teams advancing to the round of 32.",
  },
  {
    q: "Which countries are hosting the 2026 World Cup?",
    a: "The tournament is co-hosted by the United States (11 host cities), Canada (2 cities: Vancouver and Toronto), and Mexico (3 cities: Mexico City, Guadalajara, and Monterrey). This is the first World Cup hosted by three countries.",
  },
  {
    q: "How many matches are there in total?",
    a: "There are 104 matches in total: 72 group stage matches (up from 48 in previous tournaments) and 32 knockout matches from the round of 32 through to the final.",
  },
  {
    q: "Where can I watch the matches?",
    a: "Broadcasting rights vary by country. In the United States, matches will be broadcast on FOX and Telemundo. Check your local listings for coverage in your region.",
  },
  {
    q: "Is this website official?",
    a: "No, this is an unofficial fan site. For official information, please visit FIFA's official website at fifa.com. All match data on this site is compiled from publicly available sources.",
  },
  {
    q: "How often is the match data updated?",
    a: "Match scores and standings are updated hourly during the tournament. You can also manually refresh the data using the refresh button on the Scores page.",
  },
];

const FAQ_ITEMS_ZH = [
  {
    q: "2026年世界杯什么时候开始？",
    a: "2026年世界杯于6月11日开幕，揭幕战在墨西哥城阿兹特克球场举行。决赛将于2026年7月19日在纽约/新泽西的大都会人寿球场举行。",
  },
  {
    q: "2026年世界杯有多少支球队参加？",
    a: "2026年世界杯扩军至48支球队，比之前的32支大幅增加。48支球队分为12个小组，每组4队，每个小组前两名以及8个成绩最好的小组第三晋级32强。",
  },
  {
    q: "2026年世界杯由哪些国家主办？",
    a: "本届世界杯由美国（11个主办城市）、加拿大（2个城市：温哥华和多伦多）和墨西哥（3个城市：墨西哥城、瓜达拉哈拉和蒙特雷）联合主办。这是首届由三个国家联合主办的世界杯。",
  },
  {
    q: "总共有多少场比赛？",
    a: "总共有104场比赛：72场小组赛（比之前的世界杯多24场）和32场淘汰赛（从32强到决赛）。",
  },
  {
    q: "在哪里可以观看比赛？",
    a: "转播权因国家/地区而异。在美国，比赛将在FOX和Telemundo播出。请查看您所在地区当地的转播信息。",
  },
  {
    q: "这个网站是官方网站吗？",
    a: "不是，这是一个非官方球迷网站。如需官方信息，请访问FIFA官方网站 fifa.com。本网站所有比赛数据均来自公开信息源。",
  },
  {
    q: "比赛数据多久更新一次？",
    a: "比赛期间，比分和积分榜每小时更新一次。您也可以使用比分页面上的刷新按钮手动更新数据。",
  },
];

export function FAQ() {
  const { lang } = useI18n();
  const items = lang === "zh" ? FAQ_ITEMS_ZH : FAQ_ITEMS_EN;

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-3">
            {lang === "zh" ? "常见问题" : "Frequently Asked Questions"}
          </h1>
          <p className="text-muted-foreground">
            {lang === "zh"
              ? "关于2026年FIFA世界杯的常见问题解答"
              : "Answers to common questions about the 2026 FIFA World Cup"}
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto max-w-2xl space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group border rounded-lg p-4 hover:bg-muted/30 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer font-medium text-sm">
                <span>{item.q}</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
