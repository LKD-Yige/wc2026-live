import { useI18n } from "@/i18n/context";

export function Advertise() {
  const { lang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-3">
            {lang === "zh" ? "广告合作" : "Advertise With Us"}
          </h1>
          <p className="text-muted-foreground">
            {lang === "zh"
              ? "Global Football Live 面向全球世界杯球迷，是您品牌曝光的理想平台。"
              : "Global Football Live reaches football fans worldwide. The ideal platform for your brand exposure."}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl space-y-8">
          {/* Audience */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              {lang === "zh" ? "受众规模" : "Our Audience"}
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-500">200+</div>
                <div className="text-xs text-muted-foreground">
                  {lang === "zh" ? "国家和地区" : "Countries & Regions"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">5B+</div>
                <div className="text-xs text-muted-foreground">
                  {lang === "zh" ? "全球观众（预计）" : "Global Viewers (est.)"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">104</div>
                <div className="text-xs text-muted-foreground">
                  {lang === "zh" ? "总比赛数" : "Total Matches"}
                </div>
              </div>
            </div>
          </div>

          {/* Ad Options */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              {lang === "zh" ? "广告形式" : "Advertising Options"}
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <div>
                  <p className="font-medium">
                    {lang === "zh" ? "展示广告（Google AdSense）" : "Display Ads (Google AdSense)"}
                  </p>
                  <p className="text-muted-foreground">
                    {lang === "zh"
                      ? "网站集成 Google AdSense，自动展示与内容相关的广告。"
                      : "Site integrates Google AdSense, automatically displaying content-relevant ads."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <div>
                  <p className="font-medium">
                    {lang === "zh" ? "定制合作" : "Custom Partnership"}
                  </p>
                  <p className="text-muted-foreground">
                    {lang === "zh"
                      ? "如有特殊合作需求，请通过联系页面与我们取得联系。"
                      : "For special partnership inquiries, please contact us via the contact page."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              {lang === "zh"
                ? "如需了解更多广告合作详情，请通过联系页面与我们联系。"
                : "For more details about advertising opportunities, please contact us via the contact page."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
