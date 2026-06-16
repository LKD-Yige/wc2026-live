import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/context";

const ADS_ENABLED = true;
const ADS_CLIENT_ID = "ca-pub-1452616103837441";

// Ad unit slots — create these in Google AdSense panel
// Settings → Ads → Ad units → By ad size
const AD_SLOTS: Record<string, string> = {
  "728x90": "2478510396",
  "300x250": "3955243567", 
  "970x250": "5431976734",
};

interface AdBannerProps {
  size?: "728x90" | "300x250" | "300x600" | "970x250";
  className?: string;
  slot?: string;
}

export function AdBanner({ size = "728x90", className = "", slot }: AdBannerProps) {
  const { t } = useI18n();
  const adRef = useRef<HTMLModElement>(null);

  const dimensions: Record<string, { w: number; h: number }> = {
    "728x90": { w: 728, h: 90 },
    "300x250": { w: 300, h: 250 },
    "300x600": { w: 300, h: 600 },
    "970x250": { w: 970, h: 250 },
  };

  const { w, h } = dimensions[size];

  const adSlot = slot || AD_SLOTS[size] || "";

  useEffect(() => {
    if (!ADS_ENABLED || !adRef.current) return;
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch {
      // AdSense not loaded
    }
  }, []);

  if (ADS_ENABLED) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: w, height: h, maxWidth: "100%" }}
          data-ad-client={ADS_CLIENT_ID}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className="bg-muted/50 rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/20 text-xs text-muted-foreground/50"
        style={{ width: w, height: h, maxWidth: "100%" }}
      >
        <div className="text-center">
          <p className="font-semibold mb-1 opacity-50">📢 {t("ad.placeholder")}</p>
          <p className="opacity-50">{size}</p>
        </div>
      </div>
    </div>
  );
}
