import { useI18n } from "@/i18n/context";

export function TermsOfService() {
  const { lang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">
          {lang === "zh" ? "服务条款" : "Terms of Service"}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {lang === "zh"
            ? "最后更新：2026年6月17日"
            : "Last updated: June 17, 2026"}
        </p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "1. 网站性质" : "1. Site Nature"}
            </h2>
            <p>
              {lang === "zh"
                ? "WC2026 Live 是一个非官方的2026足球锦标赛资讯网站，由球迷自发建立和维护。本网站与FIFA（国际足球联合会）无任何官方关联或授权关系。"
                : "WC2026 Live is an unofficial FIFA World Cup information website, voluntarily established and maintained by fans. This website has no official affiliation or authorization relationship with FIFA (Fédération Internationale de Football Association)."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "2. 内容使用" : "2. Content Usage"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站上的内容（包括文字、数据、赛程信息等）仅供个人非商业用途。未经书面许可，不得复制、分发或修改本网站的任何内容。世界杯相关商标和标识为FIFA所有，本网站的使用不构成任何授权。"
                : "Content on this website (including text, data, schedule information, etc.) is for personal non-commercial use only. No content from this website may be reproduced, distributed, or modified without written permission. World Cup related trademarks and logos are owned by FIFA, and use of this website does not constitute any authorization."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "3. 广告与赞助" : "3. Advertising & Sponsorship"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站使用 Google AdSense 展示第三方广告。我们不对广告内容的准确性或合法性负责。广告链接指向的第三方网站内容由相关广告商负责。"
                : "This website uses Google AdSense to display third-party advertisements. We are not responsible for the accuracy or legality of advertisement content. Content of third-party websites linked from advertisements is the responsibility of the respective advertisers."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "4. 免责声明" : "4. Disclaimer"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站尽力确保信息的准确性，但不对信息的完整性、准确性或时效性作出保证。对于因使用本网站信息而导致的任何直接或间接损失，本网站不承担任何责任。比赛结果、赛程、积分榜等信息以FIFA官方发布为准。"
                : "This website strives to ensure the accuracy of information but does not guarantee the completeness, accuracy, or timeliness of such information. This website assumes no liability for any direct or indirect losses resulting from the use of information on this website. Match results, schedules, standings, and other information are subject to official FIFA releases."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "5. 网站可用性" : "5. Site Availability"}
            </h2>
            <p>
              {lang === "zh"
                ? "我们尽力确保本网站的持续可用性，但不保证网站不会中断或出现故障。我们保留随时修改、暂停或终止本网站服务的权利，无需事先通知。"
                : "We strive to ensure the continuous availability of this website, but do not guarantee that the site will be uninterrupted or error-free. We reserve the right to modify, suspend, or terminate this website's services at any time without prior notice."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "6. 法律适用" : "6. Governing Law"}
            </h2>
            <p>
              {lang === "zh"
                ? "本服务条款受适用法律管辖。任何因本网站引起的争议，应首先通过友好协商解决。"
                : "These Terms of Service are governed by applicable law. Any dispute arising from this website shall first be resolved through friendly negotiation."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
