const fs = require("fs");
const path = require("path");

// ---- 配置 ----
const DIST = path.resolve(__dirname, "../dist");
const SITE_URL = "https://wc2026.live";

// 各页面的 Meta 信息（与 Seo.tsx 里配置的一致）
const routes = [
  {
    url: "/",
    title: "FIFA World Cup 2026 — Schedule, Scores, News",
    description:
      "Your ultimate destination for FIFA World Cup 2026 in USA, Canada & Mexico. Live scores, full schedule, 48 teams, latest news & more.",
    ogType: "website",
  },
  {
    url: "/schedule",
    title: "World Cup 2026 Full Schedule — All 104 Matches",
    description:
      "Complete FIFA World Cup 2026 match schedule: group stage, knockout rounds, semi-finals, final. 48 teams, 16 host cities, 104 matches.",
    ogType: "website",
  },
  {
    url: "/teams",
    title: "World Cup 2026 Teams — Full 48 Team List",
    description:
      "All 48 teams competing in FIFA World Cup 2026 USA Canada Mexico. Browse by group, search any team.",
    ogType: "website",
  },
  {
    url: "/scores",
    title: "World Cup 2026 Live Scores — Group Standings",
    description:
      "Live scores, group standings and today's results for FIFA World Cup 2026. All 12 groups, 48 teams.",
    ogType: "website",
  },
  {
    url: "/news",
    title: "World Cup 2026 News — Latest Updates",
    description:
      "Latest FIFA World Cup 2026 news: match results, team updates, star players, tournament analysis.",
    ogType: "website",
  },
];

// 读取 Vite 构建生成的 index.html 模板
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

let generated = 0;

routes.forEach(({ url, title, description, ogType }) => {
  // 生成该路由的 HTML
  const html = template
    // 替换 title
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    // 替换或添加 meta description
    .replace(
      /<meta name="description" content=".*?"\s*\/?>/,
      `<meta name="description" content="${description}" />`
    )
    // 添加 Open Graph 标签（如果不存在）
    .replace(
      "</head>",
      `  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${SITE_URL}${url}" />
  <meta property="og:site_name" content="WC2026 Live" />
  <meta property="og:image" content="${SITE_URL}/og-home.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${SITE_URL}/og-home.jpg" />
  <link rel="canonical" href="${SITE_URL}${url}" />
</head>`
    );

  // 写入 dist/route/index.html
  const dir = path.join(DIST, url === "/" ? "." : url.replace(/^\//, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  generated++;
  console.log(`  ✔ Generated: ${url === "/" ? "/" : url}`);
});

console.log(`\nDone — ${generated} static HTML files generated.`);
console.log("Each file includes static meta tags for search engines.\n");
