import type { Team } from "@/types";

export const teams: Team[] = [
  // ===== Group A =====
  { id: "mexico", name: "墨西哥", nameEn: "Mexico", fifaCode: "MEX", flag: "🇲🇽", group: "A", ranking: 15, description: "联合东道主墨西哥，在阿兹特克体育场揭幕战2-0击败南非，取得完美开局。", coach: "Javier Aguirre", starPlayers: ["Santiago Giménez", "Edson Álvarez", "Julián Quiñones"], worldCupAppearances: 18, bestResult: "四分之一决赛 (1970, 1986)" },
  { id: "south-africa", name: "南非", nameEn: "South Africa", fifaCode: "RSA", flag: "🇿🇦", group: "A", ranking: 57, description: "非洲代表南非队，揭幕战0-2不敌墨西哥，需在后续比赛中证明自己。", coach: "Hugo Broos", starPlayers: ["Percy Tau", "Lyle Foster", "Teboho Mokoena"], worldCupAppearances: 4, bestResult: "小组赛" },
  { id: "czechia", name: "捷克", nameEn: "Czechia", fifaCode: "CZE", flag: "🇨🇿", group: "A", ranking: 36, description: "捷克队首战1-2惜败韩国，绍切克领衔的中场仍有实力。", coach: "Ivan Hašek", starPlayers: ["Tomáš Souček", "Patrik Schick", "Adam Hložek"], worldCupAppearances: 10, bestResult: "亚军 (1934, 1962)" },
  { id: "south-korea", name: "韩国", nameEn: "Korea Republic", fifaCode: "KOR", flag: "🇰🇷", group: "A", ranking: 24, description: "韩国队首战2-1逆转捷克，孙兴慜领衔的太极虎军团展现顽强斗志。", coach: "Hong Myung-bo", starPlayers: ["Son Heung-min", "Kim Min-jae", "Lee Kang-in"], worldCupAppearances: 12, bestResult: "第四名 (2002)" },

  // ===== Group B =====
  { id: "bosnia", name: "波黑", nameEn: "Bosnia & Herz.", fifaCode: "BIH", flag: "🇧🇦", group: "B", ranking: 44, description: "波黑首战1-1战平加拿大，在B组展现了竞争力。", coach: "Sergej Barbarez", starPlayers: ["Edin Džeko", "Miralem Pjanić", "Amar Dedić"], worldCupAppearances: 2, bestResult: "小组赛" },
  { id: "canada", name: "加拿大", nameEn: "Canada", fifaCode: "CAN", flag: "🇨🇦", group: "B", ranking: 41, description: "联合东道主加拿大首战1-1战平波黑，戴维斯和戴维领衔。", coach: "Jesse Marsch", starPlayers: ["Alphonso Davies", "Jonathan David", "Stephen Eustáquio"], worldCupAppearances: 3, bestResult: "小组赛" },
  { id: "qatar", name: "卡塔尔", nameEn: "Qatar", fifaCode: "QAT", flag: "🇶🇦", group: "B", ranking: 49, description: "上届东道主卡塔尔首战1-1战平瑞士，亚洲冠军展现了实力。", coach: "Tintín Márquez", starPlayers: ["Akram Afif", "Almoez Ali", "Abdulaziz Hatem"], worldCupAppearances: 2, bestResult: "小组赛" },
  { id: "switzerland", name: "瑞士", nameEn: "Switzerland", fifaCode: "SUI", flag: "🇨🇭", group: "B", ranking: 19, description: "瑞士队首战1-1战平卡塔尔，扎卡领衔的十字军团稳健依旧。", coach: "Murat Yakin", starPlayers: ["Granit Xhaka", "Manuel Akanji", "Noah Okafor"], worldCupAppearances: 13, bestResult: "四分之一决赛" },

  // ===== Group C =====
  { id: "brazil", name: "巴西", nameEn: "Brazil", fifaCode: "BRA", flag: "🇧🇷", group: "C", ranking: 3, description: "足球王国巴西首战1-1被摩洛哥逼平，爆出冷门，维尼修斯需要尽快找到状态。", coach: "Dorival Júnior", starPlayers: ["Vinícius Jr.", "Rodrygo", "Alisson Becker"], worldCupAppearances: 22, bestResult: "冠军 (5次)" },
  { id: "haiti", name: "海地", nameEn: "Haiti", fifaCode: "HAI", flag: "🇭🇹", group: "C", ranking: 86, description: "海地队历史性重返世界杯，首战0-1惜败苏格兰。", coach: "Sébastien Migné", starPlayers: ["Frantzdy Pierrot", "Duckens Nazon", "Carlens Arcus"], worldCupAppearances: 2, bestResult: "小组赛" },
  { id: "morocco", name: "摩洛哥", nameEn: "Morocco", fifaCode: "MAR", flag: "🇲🇦", group: "C", ranking: 13, description: "2022年四强摩洛哥继续黑马本色，首战1-1逼平巴西令人震惊。", coach: "Walid Regragui", starPlayers: ["Achraf Hakimi", "Brahim Díaz", "Youssef En-Nesyri"], worldCupAppearances: 7, bestResult: "第四名 (2022)" },
  { id: "scotland", name: "苏格兰", nameEn: "Scotland", fifaCode: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C", ranking: 36, description: "苏格兰重返世界杯，首战1-0击败海地取得开门红。", coach: "Steve Clarke", starPlayers: ["Andrew Robertson", "Scott McTominay", "Billy Gilmour"], worldCupAppearances: 9, bestResult: "小组赛" },

  // ===== Group D =====
  { id: "australia", name: "澳大利亚", nameEn: "Australia", fifaCode: "AUS", flag: "🇦🇺", group: "D", ranking: 26, description: "袋鼠军团首战2-0完胜土耳其，展现出强大的身体对抗能力。", coach: "Tony Popović", starPlayers: ["Nestory Irankunda", "Harry Souttar", "Mathew Ryan"], worldCupAppearances: 7, bestResult: "16强" },
  { id: "paraguay", name: "巴拉圭", nameEn: "Paraguay", fifaCode: "PAR", flag: "🇵🇾", group: "D", ranking: 53, description: "巴拉圭首战1-4惨败美国，防守端暴露出严重问题。", coach: "Gustavo Alfaro", starPlayers: ["Miguel Almirón", "Julio Enciso", "Ramón Sosa"], worldCupAppearances: 9, bestResult: "四分之一决赛" },
  { id: "turkey", name: "土耳其", nameEn: "Turkey", fifaCode: "TUR", flag: "🇹🇷", group: "D", ranking: 37, description: "土耳其首战0-2不敌澳大利亚，2002年季军需要调整。", coach: "Vincenzo Montella", starPlayers: ["Hakan Çalhanoğlu", "Arda Güler", "Kenan Yıldız"], worldCupAppearances: 3, bestResult: "季军 (2002)" },
  { id: "usa", name: "美国", nameEn: "USA", fifaCode: "USA", flag: "🇺🇸", group: "D", ranking: 11, description: "联合东道主美国首战4-1大胜巴拉圭，普利西奇状态火热。", coach: "Mauricio Pochettino", starPlayers: ["Christian Pulisic", "Gio Reyna", "Weston McKennie"], worldCupAppearances: 12, bestResult: "季军 (1930)" },

  // ===== Group E =====
  { id: "curacao", name: "库拉索", nameEn: "Curaçao", fifaCode: "CUW", flag: "🇨🇼", group: "E", ranking: 92, description: "库拉索历史性首次入围世界杯，首战1-7惨败德国，体验了世界顶级足球的残酷。", coach: "Dick Advocaat", starPlayers: ["Leandro Bacuna", "Cuco Martina", "Juninho Bacuna"], worldCupAppearances: 1, bestResult: "首次参赛" },
  { id: "ecuador", name: "厄瓜多尔", nameEn: "Ecuador", fifaCode: "ECU", flag: "🇪🇨", group: "E", ranking: 31, description: "厄瓜多尔首战0-1不敌科特迪瓦，凯塞多领衔的中场需找回状态。", coach: "Sebastián Beccacece", starPlayers: ["Moisés Caicedo", "Piero Hincapié", "Kendry Páez"], worldCupAppearances: 5, bestResult: "16强" },
  { id: "germany", name: "德国", nameEn: "Germany", fifaCode: "GER", flag: "🇩🇪", group: "E", ranking: 16, description: "德国战车首战7-1血洗库拉索，穆西亚拉和维尔茨双双梅开二度，火力全开。", coach: "Julian Nagelsmann", starPlayers: ["Jamal Musiala", "Florian Wirtz", "Joshua Kimmich"], worldCupAppearances: 20, bestResult: "冠军 (4次)" },
  { id: "ivory-coast", name: "科特迪瓦", nameEn: "Ivory Coast", fifaCode: "CIV", flag: "🇨🇮", group: "E", ranking: 47, description: "非洲杯冠军科特迪瓦首战1-0力克厄瓜多尔，阿丁格拉打入制胜球。", coach: "Emerse Faé", starPlayers: ["Simon Adingra", "Franck Kessié", "Sébastien Haller"], worldCupAppearances: 4, bestResult: "小组赛" },

  // ===== Group F =====
  { id: "japan", name: "日本", nameEn: "Japan", fifaCode: "JPN", flag: "🇯🇵", group: "F", ranking: 17, description: "日本队首战2-2战平荷兰，三笘薫和久保建英展现了亚洲顶级技术。", coach: "Hajime Moriyasu", starPlayers: ["Kaoru Mitoma", "Takefusa Kubo", "Wataru Endo"], worldCupAppearances: 8, bestResult: "16强" },
  { id: "netherlands", name: "荷兰", nameEn: "Netherlands", fifaCode: "NED", flag: "🇳🇱", group: "F", ranking: 6, description: "橙色军团首战2-2被日本逼平，范戴克坐镇的后防线出现松动。", coach: "Ronald Koeman", starPlayers: ["Virgil van Dijk", "Frenkie de Jong", "Cody Gakpo"], worldCupAppearances: 12, bestResult: "亚军 (3次)" },
  { id: "sweden", name: "瑞典", nameEn: "Sweden", fifaCode: "SWE", flag: "🇸🇪", group: "F", ranking: 28, description: "瑞典队首战5-1狂胜突尼斯，伊萨克和哲凯赖什双双进球，火力惊人。", coach: "Jon Dahl Tomasson", starPlayers: ["Alexander Isak", "Viktor Gyökeres", "Dejan Kulusevski"], worldCupAppearances: 12, bestResult: "亚军 (1958)" },
  { id: "tunisia", name: "突尼斯", nameEn: "Tunisia", fifaCode: "TUN", flag: "🇹🇳", group: "F", ranking: 44, description: "突尼斯首战1-5惨败瑞典，防守端漏洞百出。", coach: "Jalel Kadri", starPlayers: ["Aïssa Laïdouni", "Anis Ben Slimane", "Hannibal Mejbri"], worldCupAppearances: 7, bestResult: "小组赛" },

  // ===== Group G =====
  { id: "belgium", name: "比利时", nameEn: "Belgium", fifaCode: "BEL", flag: "🇧🇪", group: "G", ranking: 5, description: "比利时首战1-1战平埃及，德布劳内状态一般，红魔黄金一代逐渐谢幕。", coach: "Rudi Garcia", starPlayers: ["Kevin De Bruyne", "Jérémy Doku", "Loïs Openda"], worldCupAppearances: 15, bestResult: "季军 (2018)" },
  { id: "egypt", name: "埃及", nameEn: "Egypt", fifaCode: "EGY", flag: "🇪🇬", group: "G", ranking: 35, description: "法老军团首战1-1逼平比利时，萨拉赫虽未进球但牵制力十足。", coach: "Hossam Hassan", starPlayers: ["Mohamed Salah", "Omar Marmoush", "Trézéguet"], worldCupAppearances: 4, bestResult: "小组赛" },
  { id: "iran", name: "伊朗", nameEn: "Iran", fifaCode: "IRN", flag: "🇮🇷", group: "G", ranking: 22, description: "伊朗首战1-2不敌新西兰，遭遇冷门。", coach: "Amir Ghalenoei", starPlayers: ["Mehdi Taremi", "Sardar Azmoun", "Alireza Jahanbakhsh"], worldCupAppearances: 7, bestResult: "小组赛" },
  { id: "new-zealand", name: "新西兰", nameEn: "New Zealand", fifaCode: "NZL", flag: "🇳🇿", group: "G", ranking: 94, description: "新西兰首战2-1爆冷击败伊朗，贾斯特梅开二度，取得队史世界杯第二胜。", coach: "Darren Bazeley", starPlayers: ["Chris Wood", "Elijah Just", "Liberato Cacace"], worldCupAppearances: 3, bestResult: "小组赛" },

  // ===== Group H =====
  { id: "spain", name: "西班牙", nameEn: "Spain", fifaCode: "ESP", flag: "🇪🇸", group: "H", ranking: 8, description: "西班牙首战0-0被佛得角逼平，亚马尔哑火，传控足球遭遇顽强抵抗。", coach: "Luis de la Fuente", starPlayers: ["Lamine Yamal", "Pedri", "Rodri"], worldCupAppearances: 16, bestResult: "冠军 (2010)" },
  { id: "cape-verde", name: "佛得角", nameEn: "Cape Verde", fifaCode: "CPV", flag: "🇨🇻", group: "H", ranking: 72, description: "佛得角历史性首战0-0逼平西班牙，门将卡布拉尔表现出色，创造奇迹。", coach: "Bubista", starPlayers: ["Ryan Mendes", "Jovane Cabral", "Sidny Cabral"], worldCupAppearances: 1, bestResult: "首次参赛" },
  { id: "saudi-arabia", name: "沙特阿拉伯", nameEn: "Saudi Arabia", fifaCode: "KSA", flag: "🇸🇦", group: "H", ranking: 56, description: "沙特首战1-1战平乌拉圭，阿尔阿姆里头球破门，继续展现亚洲足球的进步。", coach: "Hervé Renard", starPlayers: ["Salem Al-Dawsari", "Firas Al-Buraikan", "Abdulelah Al-Amri"], worldCupAppearances: 7, bestResult: "16强" },
  { id: "uruguay", name: "乌拉圭", nameEn: "Uruguay", fifaCode: "URU", flag: "🇺🇾", group: "H", ranking: 14, description: "乌拉圭首战1-1战平沙特，巴尔韦德表现平平，贝尔萨的球队需尽快调整。", coach: "Marcelo Bielsa", starPlayers: ["Federico Valverde", "Darwin Núñez", "Ronald Araújo"], worldCupAppearances: 15, bestResult: "冠军 (1930, 1950)" },

  // ===== Group I (today!) =====
  { id: "france", name: "法国", nameEn: "France", fifaCode: "FRA", flag: "🇫🇷", group: "I", ranking: 2, description: "卫冕热门法国队今日首战塞内加尔，姆巴佩领衔的豪华攻击线蓄势待发。", coach: "Didier Deschamps", starPlayers: ["Kylian Mbappé", "Eduardo Camavinga", "William Saliba"], worldCupAppearances: 16, bestResult: "冠军 (1998, 2018)" },
  { id: "senegal", name: "塞内加尔", nameEn: "Senegal", fifaCode: "SEN", flag: "🇸🇳", group: "I", ranking: 18, description: "塞内加尔今日挑战法国，非洲冠军渴望再造惊喜。", coach: "Pape Thiaw", starPlayers: ["Nicolas Jackson", "Ismaïla Sarr", "Kalidou Koulibaly"], worldCupAppearances: 4, bestResult: "四分之一决赛 (2002)" },
  { id: "iraq", name: "伊拉克", nameEn: "Iraq", fifaCode: "IRQ", flag: "🇮🇶", group: "I", ranking: 68, description: "伊拉克重返世界杯舞台，今日迎战拥有哈兰德的挪威。", coach: "Jesús Casas", starPlayers: ["Aymen Hussein", "Zidane Iqbal", "Ali Jasim"], worldCupAppearances: 2, bestResult: "小组赛" },
  { id: "norway", name: "挪威", nameEn: "Norway", fifaCode: "NOR", flag: "🇳🇴", group: "I", ranking: 42, description: "哈兰德的世界杯首秀就在今天！挪威今日对阵伊拉克，全球目光聚焦。", coach: "Ståle Solbakken", starPlayers: ["Erling Haaland", "Martin Ødegaard", "Antonio Nusa"], worldCupAppearances: 4, bestResult: "16强" },

  // ===== Group J =====
  { id: "argentina", name: "阿根廷", nameEn: "Argentina", fifaCode: "ARG", flag: "🇦🇷", group: "J", ranking: 1, description: "卫冕冠军阿根廷今日首战阿尔及利亚，梅西的第6届世界杯征程开启。", coach: "Lionel Scaloni", starPlayers: ["Lionel Messi", "Julián Álvarez", "Enzo Fernández"], worldCupAppearances: 19, bestResult: "冠军 (3次)" },
  { id: "algeria", name: "阿尔及利亚", nameEn: "Algeria", fifaCode: "ALG", flag: "🇩🇿", group: "J", ranking: 43, description: "沙漠之狐阿尔及利亚今日挑战卫冕冠军阿根廷。", coach: "Vladimir Petković", starPlayers: ["Riyad Mahrez", "Ismaël Bennacer", "Amine Gouiri"], worldCupAppearances: 5, bestResult: "16强" },
  { id: "austria", name: "奥地利", nameEn: "Austria", fifaCode: "AUT", flag: "🇦🇹", group: "J", ranking: 25, description: "奥地利在朗尼克带领下踢出高强度足球，明日首战约旦。", coach: "Ralf Rangnick", starPlayers: ["David Alaba", "Marcel Sabitzer", "Christoph Baumgartner"], worldCupAppearances: 8, bestResult: "季军 (1954)" },
  { id: "jordan", name: "约旦", nameEn: "Jordan", fifaCode: "JOR", flag: "🇯🇴", group: "J", ranking: 70, description: "约旦历史性首次参加世界杯，亚洲杯亚军证明了自己的实力。", coach: "Jamal Sellami", starPlayers: ["Musa Al-Taamari", "Yazan Al-Naimat", "Ali Olwan"], worldCupAppearances: 1, bestResult: "首次参赛" },

  // ===== Group K =====
  { id: "portugal", name: "葡萄牙", nameEn: "Portugal", fifaCode: "POR", flag: "🇵🇹", group: "K", ranking: 7, description: "葡萄牙黄金一代明日首战刚果民主共和国，C罗有望迎来最后一届世界杯。", coach: "Roberto Martínez", starPlayers: ["Bruno Fernandes", "Rafael Leão", "Rúben Dias"], worldCupAppearances: 9, bestResult: "季军 (1966)" },
  { id: "dr-congo", name: "刚果(金)", nameEn: "DR Congo", fifaCode: "COD", flag: "🇨🇩", group: "K", ranking: 61, description: "刚果民主共和国重返世界杯，非洲足球的新力量。", coach: "Sébastien Desabre", starPlayers: ["Yoane Wissa", "Gaël Kakuta", "Chancel Mbemba"], worldCupAppearances: 2, bestResult: "小组赛" },
  { id: "uzbekistan", name: "乌兹别克斯坦", nameEn: "Uzbekistan", fifaCode: "UZB", flag: "🇺🇿", group: "K", ranking: 58, description: "乌兹别克斯坦历史性首次入围世界杯，中亚足球的里程碑时刻。", coach: "Timur Kapadze", starPlayers: ["Eldor Shomurodov", "Jaloliddin Masharipov", "Abbosbek Fayzullaev"], worldCupAppearances: 1, bestResult: "首次参赛" },
  { id: "colombia", name: "哥伦比亚", nameEn: "Colombia", fifaCode: "COL", flag: "🇨🇴", group: "K", ranking: 9, description: "哥伦比亚明日首战乌兹别克斯坦，迪亚斯领衔的咖啡军团备受期待。", coach: "Néstor Lorenzo", starPlayers: ["Luis Díaz", "James Rodríguez", "Jhon Durán"], worldCupAppearances: 7, bestResult: "四分之一决赛" },

  // ===== Group L =====
  { id: "england", name: "英格兰", nameEn: "England", fifaCode: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L", ranking: 4, description: "三狮军团明日首战克罗地亚，贝林厄姆领衔豪华阵容，目标直指冠军。", coach: "Thomas Tuchel", starPlayers: ["Jude Bellingham", "Harry Kane", "Bukayo Saka"], worldCupAppearances: 16, bestResult: "冠军 (1966)" },
  { id: "croatia", name: "克罗地亚", nameEn: "Croatia", fifaCode: "CRO", flag: "🇭🇷", group: "L", ranking: 10, description: "格子军团明日大战英格兰，莫德里奇的大师级中场仍是克罗地亚最大武器。", coach: "Zlatko Dalić", starPlayers: ["Luka Modrić", "Joško Gvardiol", "Mateo Kovačić"], worldCupAppearances: 7, bestResult: "亚军 (2018)" },
  { id: "ghana", name: "加纳", nameEn: "Ghana", fifaCode: "GHA", flag: "🇬🇭", group: "L", ranking: 60, description: "加纳黑星明日首战巴拿马，库杜斯领衔的年轻军团充满活力。", coach: "Otto Addo", starPlayers: ["Mohammed Kudus", "Thomas Partey", "Antoine Semenyo"], worldCupAppearances: 5, bestResult: "四分之一决赛 (2010)" },
  { id: "panama", name: "巴拿马", nameEn: "Panama", fifaCode: "PAN", flag: "🇵🇦", group: "L", ranking: 63, description: "巴拿马第二次参加世界杯，明日对阵加纳。", coach: "Thomas Christiansen", starPlayers: ["José Fajardo", "Aníbal Godoy", "Michael Murillo"], worldCupAppearances: 2, bestResult: "小组赛" },
];

export const getTeamByCode = (fifaCode: string): Team | undefined =>
  teams.find((t) => t.fifaCode === fifaCode);

export const getTeamsByGroup = (group: string): Team[] =>
  teams.filter((t) => t.group === group);

export const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"] as const;
