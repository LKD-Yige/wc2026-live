const fs = require("fs");
const path = require("path");

// Load data (same logic as generate-live-data.cjs)
const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://wc2026.live";

// Static pages
const staticPages = [
  { url: "/", changefreq: "hourly", priority: "1.0" },
  { url: "/schedule", changefreq: "daily", priority: "0.9" },
  { url: "/teams", changefreq: "weekly", priority: "0.9" },
  { url: "/scores", changefreq: "hourly", priority: "0.9" },
  { url: "/news", changefreq: "hourly", priority: "0.8" },
];

// Load teams
let teams = [];
try {
  const teamsData = require(path.resolve(ROOT, "src/data/teams.ts"));
  // Can't directly require .ts, so we'll read the JSON file if it exists
  // Fallback: read the .ts file and parse
} catch (e) {}

// Try to load pre-built data
const dataDir = path.resolve(ROOT, "public/data");
if (fs.existsSync(path.resolve(dataDir, "teams.json"))) {
  teams = JSON.parse(fs.readFileSync(path.resolve(dataDir, "teams.json"), "utf8"));
} else {
  // Fallback: use the news slugs we know about
}

// Load news slugs
let newsSlugs = [];
const newsFile = path.resolve(ROOT, "src/data/news.ts");
if (fs.existsSync(newsFile)) {
  const content = fs.readFileSync(newsFile, "utf8");
  const slugMatches = content.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of slugMatches) {
    newsSlugs.push(match[1]);
  }
}

// If no slugs found, use known ones
if (newsSlugs.length === 0) {
  newsSlugs = [
    "wc2026-full-schedule-announced",
    "messi-last-world-cup",
    "host-cities-venue-tour",
  ];
}

// Build sitemap XML
const now = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
xml += `        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n\n`;

// Static pages
for (const page of staticPages) {
  xml += `  <url>\n`;
  xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  // hreflang
  xml += `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${page.url}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}/zh${page.url}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${page.url}" />\n`;
  xml += `  </url>\n\n`;
}

// Team pages (if teams data available)
// For now, skip dynamic team pages in sitemap (they'll be added when we have the data)

// News pages
for (const slug of newsSlugs) {
  xml += `  <url>\n`;
  xml += `    <loc>${SITE_URL}/news/${slug}</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.7</priority>\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/news/${slug}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}/zh/news/${slug}" />\n`;
  xml += `  </url>\n\n`;
}

xml += `</urlset>`;

// Write sitemap.xml
const outPath = path.resolve(ROOT, "public/sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`✅ sitemap.xml generated: ${outPath}`);
console.log(`   Pages: ${staticPages.length + newsSlugs.length}`);
