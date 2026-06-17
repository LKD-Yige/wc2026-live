import { useI18n } from "@/i18n/context";

export function PrivacyPolicy() {
  const { lang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">
          {lang === "zh" ? "隐私政策" : "Privacy Policy"}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {lang === "zh"
            ? "最后更新：2026年6月17日"
            : "Last updated: June 17, 2026"}
        </p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "1. 信息收集" : "1. Information Collection"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站为2026年FIFA世界杯非官方资讯网站。我们不直接收集您的个人信息。当您访问本网站时，我们的服务器可能自动记录标准日志信息，包括IP地址、浏览器类型、访问时间和引用页面。"
                : "This website is an unofficial information site for the 2026 FIFA World Cup. We do not directly collect your personal information. When you visit this site, our servers may automatically record standard log information including IP address, browser type, access time, and referring pages."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "2. Cookie 使用" : "2. Cookie Usage"}
            </h2>
                       <p>
              {lang === "zh"
                ? "本网站使用 Cookie 来改善用户体验。同时，本网站集成了 Google AdSense 广告服务，AdSense 可能使用 Cookie 来展示个性化广告。您可以通过浏览器设置拒绝 Cookie，但这可能影响网站部分功能的使用。"
                : "This website uses cookies to improve user experience. Additionally, this site integrates Google AdSense for advertising. AdSense may use cookies to serve personalized ads. You can refuse cookies through your browser settings, but this may affect the functionality of certain features."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "3. 广告服务" : "3. Advertising Services"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站使用 Google AdSense 展示广告。Google AdSense 可能使用 Cookie 和网页信标收集非个人身份信息，用于投放与您兴趣相关的广告。有关 Google 广告隐私实践的更多信息，请访问 Google 的广告隐私政策页面。"
                : "This website uses Google AdSense to display ads. Google AdSense may use cookies and web beacons to collect non-personally identifiable information for serving ads based on your interests. For more information about Google's advertising privacy practices, please visit Google's Advertising Privacy Policy page."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "4. 第三方链接" : "4. Third-Party Links"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站可能包含指向第三方网站的链接（如FIFA官网、社交媒体等）。我们不对这些第三方网站的隐私实践负责。建议您在访问这些网站时查阅其隐私政策。"
                : "This website may contain links to third-party websites (such as FIFA official website, social media, etc.). We are not responsible for the privacy practices of these third parties. We recommend reviewing their privacy policies when visiting those sites."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "5. 免责声明" : "5. Disclaimer"}
            </h2>
            <p>
              {lang === "zh"
                ? "本网站为球迷自建的非官方网站，与FIFA（国际足球联合会）无任何关联。网站上提供的信息仅供参考，不保证其准确性、完整性或时效性。本站不对因使用本网站信息而导致的任何损失承担责任。"
                : "This website is an unofficial fan site and is not affiliated with FIFA (Fédération Internationale de Football Association) in any way. Information provided on this site is for reference only and accuracy, completeness, or timeliness is not guaranteed. This site is not liable for any losses resulting from the use of information on this website."}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              {lang === "zh" ? "6. 联系我们" : "6. Contact Us"}
            </h2>
            <p>
              {lang === "zh"
                ? "如果您对本隐私政策有任何疑问，请通过本网站联系页面与我们联系。"
                : "If you have any questions about this Privacy Policy, please contact us through the contact page of this website."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
