import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n/context";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const SITE_URL = "https://wc2026.live";
const SITE_NAME = "WC2026 Live";
const DEFAULT_IMAGE = `${SITE_URL}/og-default.jpg`;

export function Seo({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: SeoProps) {
  const { lang } = useI18n();
  const fullTitle = title.includes("WC2026")
    ? title
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || `${SITE_URL}${window.location.pathname}`;
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang — bilingual */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl.replace(/^\/zh/, "/")} />
      <link rel="alternate" hrefLang="zh" href={`${SITE_URL}/zh${canonicalUrl.replace(SITE_URL, "")}`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl.replace(/^\/zh/, "/")} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={lang === "zh" ? "zh_CN" : "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD: WebSite (homepage) or Article (news) */}
      {ogType === "website" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            description,
            inLanguage: ["en", "zh"],
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      )}
      {ogType === "article" && publishedTime && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: title,
            description,
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            author: { "@type": "Organization", name: SITE_NAME },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
            },
            image: ogImageUrl,
            inLanguage: lang === "zh" ? "zh-CN" : "en",
          })}
        </script>
      )}
    </Helmet>
  );
}
