export type Lang = "en" | "zh";
export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.schedule": "Schedule",
    "nav.teams": "Teams",
    "nav.scores": "Scores",
    "nav.news": "News",

    // Home
    "home.badge": "USA · Canada · Mexico",
    "home.title": "FIFA World Cup",
    "home.subtitle": "Day 6 of the biggest World Cup ever. 16 matches played, 40 goals scored. Today: France vs Senegal, Iraq vs Norway, Argentina vs Algeria.",
    "home.schedule": "View Full Schedule",
    "home.teams": "Explore Teams",
    "home.latest": "Latest Results",
    "home.latestSub": "Recent group stage action",
    "home.viewAll": "View All",
    "home.news": "Latest News",
    "home.newsSub": "Stay up to date with World Cup coverage",
    "home.allNews": "All News",
    "home.hosts": "Host Cities",
    "home.hostsSub": "16 cities across United States, Canada, and Mexico",

    // Stats
    "stats.matches": "Matches Played",
    "stats.goals": "Goals Scored",
    "stats.groups": "Groups Active",
    "stats.day": "Day",

    // Schedule
    "schedule.title": "Match Schedule",
    "schedule.subtitle": "Complete fixtures for FIFA World Cup 2026. 104 matches from June 11 to July 19. Group stage followed by knockout rounds.",
    "schedule.filters": "Filters:",
    "schedule.all": "All",
    "schedule.groups": "Groups:",
    "schedule.noMatch": "No matches found",
    "schedule.tryAdjust": "Try adjusting your filters",

    // Teams
    "teams.title": "Teams & Groups",
    "teams.subtitle": "48 teams. 12 groups. The biggest World Cup ever. Explore every team's profile, star players, and tournament history.",
    "teams.search": "Search teams...",
    "teams.byGroups": "By Groups",
    "teams.allTeams": "All Teams",
    "teams.noFound": "No teams found",
    "teams.trySearch": "Try a different search term",
    "teams.group": "Group",

    // Team Detail
    "team.back": "Back to Teams",
    "team.about": "About",
    "team.bestResult": "Best Result",
    "team.appearances": "Appearances",
    "team.ranking": "FIFA Ranking",
    "team.coach": "Coach",
    "team.stars": "Star Players",
    "team.matches": "Group Stage Matches",
    "team.noMatches": "No matches scheduled yet.",
    "team.quickFacts": "Quick Facts",
    "team.fifaCode": "FIFA Code",
    "team.group": "Group",
    "team.worldRank": "World Ranking",
    "team.wcApps": "WC Appearances",
    "team.notFound": "Team Not Found",
    "team.notFoundDesc": "The team you're looking for doesn't exist.",

    // Scores
    "scores.title": "Live Scores & Standings",
    "scores.subtitle": "16 matches played. 8 groups completed Matchday 1. Groups I & J kick off today.",
    "scores.standings": "Group Standings",
    "scores.today": "Today",
    "scores.completed": "Completed",
    "scores.noMatches": "No matches played yet in this group.",
    "scores.bracket": "Knockout Bracket",
    "scores.bracketDesc": "The knockout bracket will be available once the group stage concludes on July 1.",
    "scores.team": "Team",
    "scores.gd": "GD",
    "scores.pts": "Pts",

    // News
    "news.title": "World Cup News",
    "news.subtitle": "Latest coverage, match reports, team news, and feature stories from the 2026 FIFA World Cup.",
    "news.readMore": "Read More",
    "news.related": "Related Articles",
    "news.notFound": "Article Not Found",
    "news.notFoundDesc": "The article you're looking for doesn't exist.",
    "news.back": "Back to News",
    "news.preview": "Full coverage will be available as we get closer to the tournament.",

    // Countdown
    "countdown.live": "LIVE NOW",
    "countdown.kickoff": "Kickoff Countdown",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",

    // Hero live stats
    "hero.matches": "Matches Played",
    "hero.goals": "Goals Scored",
    "hero.groups": "Groups Active",
    "hero.day": "Day 6 · Groups I & J kick off today",

    // Footer
    "footer.desc": "Your ultimate destination for FIFA World Cup 2026 coverage. Schedules, scores, teams, and live updates.",
    "footer.quick": "Quick Links",
    "footer.resources": "Resources",
    "footer.follow": "Follow Us",
    "footer.hostCities": "Host Cities",
    "footer.travel": "Travel Guide",
    "footer.faq": "FAQ",
    "footer.contact": "Contact",
    "footer.disclaimer": "This is an unofficial fan site. Not affiliated with FIFA.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.advertise": "Advertise with Us",

    // Ad
    "ad.placeholder": "Ad Space",

    // Match card
    "match.upcoming": "UPCOMING",
    "match.live": "LIVE",
    "match.ft": "FT",
    "match.vs": "VS",

    // Stages
    "stage.group": "Group Stage",
    "stage.r32": "Round of 32",
    "stage.r16": "Round of 16",
    "stage.qf": "Quarter-finals",
    "stage.sf": "Semi-finals",
    "stage.tp": "Third Place",
    "stage.final": "Final",
  },

  zh: {
    // Nav
    "nav.home": "首页",
    "nav.schedule": "赛程",
    "nav.teams": "球队",
    "nav.scores": "比分",
    "nav.news": "新闻",

    // Home
    "home.badge": "美国 · 加拿大 · 墨西哥",
    "home.title": "FIFA 世界杯",
    "home.subtitle": "史上最大世界杯第6天。已踢16场，40个进球。今日焦点：法国vs塞内加尔、伊拉克vs挪威、阿根廷vs阿尔及利亚。",
    "home.schedule": "查看完整赛程",
    "home.teams": "探索球队",
    "home.latest": "最新战报",
    "home.latestSub": "小组赛第一轮精彩回顾",
    "home.viewAll": "查看全部",
    "home.news": "最新新闻",
    "home.newsSub": "世界杯最新资讯报道",
    "home.allNews": "全部新闻",
    "home.hosts": "主办城市",
    "home.hostsSub": "横跨美国、加拿大、墨西哥的16座城市",

    // Stats
    "stats.matches": "已踢比赛",
    "stats.goals": "进球数",
    "stats.groups": "已开赛小组",
    "stats.day": "第",

    // Schedule
    "schedule.title": "比赛赛程",
    "schedule.subtitle": "2026年FIFA世界杯完整赛程。6月11日至7月19日，104场比赛，小组赛加淘汰赛。",
    "schedule.filters": "筛选",
    "schedule.all": "全部",
    "schedule.groups": "小组",
    "schedule.noMatch": "未找到比赛",
    "schedule.tryAdjust": "请调整筛选条件",

    // Teams
    "teams.title": "球队 & 小组",
    "teams.subtitle": "48支球队，12个小组。史上最大的世界杯。探索每支球队的档案、明星球员和世界杯历史。",
    "teams.search": "搜索球队...",
    "teams.byGroups": "按小组",
    "teams.allTeams": "全部球队",
    "teams.noFound": "未找到球队",
    "teams.trySearch": "换个关键词试试",
    "teams.group": "组",

    // Team Detail
    "team.back": "返回球队列表",
    "team.about": "球队简介",
    "team.bestResult": "最佳战绩",
    "team.appearances": "参赛次数",
    "team.ranking": "FIFA排名",
    "team.coach": "主教练",
    "team.stars": "明星球员",
    "team.matches": "小组赛赛程",
    "team.noMatches": "暂无比赛安排",
    "team.quickFacts": "基本信息",
    "team.fifaCode": "FIFA代码",
    "team.group": "小组",
    "team.worldRank": "世界排名",
    "team.wcApps": "世界杯参赛",
    "team.notFound": "未找到球队",
    "team.notFoundDesc": "您查找的球队不存在。",

    // Scores
    "scores.title": "实时比分 & 积分榜",
    "scores.subtitle": "已踢完16场比赛，8个小组完成第一轮。I组和J组今天开打。",
    "scores.standings": "小组积分榜",
    "scores.today": "今日",
    "scores.completed": "已结束",
    "scores.noMatches": "该小组暂无比赛",
    "scores.bracket": "淘汰赛对阵图",
    "scores.bracketDesc": "淘汰赛对阵图将在7月1日小组赛结束后公布。",
    "scores.team": "球队",
    "scores.gd": "净胜",
    "scores.pts": "分",

    // News
    "news.title": "世界杯新闻",
    "news.subtitle": "2026年FIFA世界杯最新报道、比赛战报、球队动态和专题故事。",
    "news.readMore": "阅读全文",
    "news.related": "相关文章",
    "news.notFound": "未找到文章",
    "news.notFoundDesc": "您查找的文章不存在。",
    "news.back": "返回新闻",
    "news.preview": "完整报道将在赛事期间持续更新。",

    // Countdown
    "countdown.live": "直播中",
    "countdown.kickoff": "开幕倒计时",
    "countdown.days": "天",
    "countdown.hours": "时",
    "countdown.minutes": "分",
    "countdown.seconds": "秒",

    // Hero live stats
    "hero.matches": "已踢比赛",
    "hero.goals": "进球数",
    "hero.groups": "已开赛小组",
    "hero.day": "第6天 · I组和J组今天开打",

    // Footer
    "footer.desc": "2026年FIFA世界杯一站式资讯平台。赛程、比分、球队档案、实时更新尽在掌握。",
    "footer.quick": "快速链接",
    "footer.resources": "资源",
    "footer.follow": "关注我们",
    "footer.hostCities": "主办城市",
    "footer.travel": "旅行指南",
    "footer.faq": "常见问题",
    "footer.contact": "联系我们",
    "footer.disclaimer": "这是一个非官方球迷网站，与FIFA无关。",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.advertise": "广告合作",

    // Ad
    "ad.placeholder": "广告位",

    // Match card
    "match.upcoming": "即将",
    "match.live": "直播",
    "match.ft": "完赛",
    "match.vs": "VS",

    // Stages
    "stage.group": "小组赛",
    "stage.r32": "32强赛",
    "stage.r16": "16强赛",
    "stage.qf": "四分之一决赛",
    "stage.sf": "半决赛",
    "stage.tp": "三四名决赛",
    "stage.final": "决赛",
  },
} as const;

export type Translations = typeof translations.en;
