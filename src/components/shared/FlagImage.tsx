import { useState } from "react";
import { getFlagUrl, getFlagEmoji } from "@/utils/flags";

interface FlagImageProps {
  fifaCode: string;
  size?: number;
  className?: string;
  rounded?: boolean;
}

export function FlagImage({ fifaCode, size = 36, className = "", rounded = true }: FlagImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <span
        className={`text-3xl leading-none flex items-center justify-center ${className}`}
        style={{ width: size, height: size * 0.75, fontSize: size * 0.65 }}
      >
        {getFlagEmoji(fifaCode)}
      </span>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-muted ${rounded ? "rounded-sm" : ""} ${className}`}
      style={{ width: size, height: size * 0.75 }}
    >
      {/* Shimmer placeholder while loading */}
      {!loaded && (
        <div className="absolute inset-0 shimmer rounded-sm" />
      )}
      <img
        src={getFlagUrl(fifaCode, Math.ceil(size * 2))}
        alt={fifaCode}
        className={`w-full h-full object-cover ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  );
}
