import { useState } from "react";
import { getCompanyLogoPath } from "@/data/companies";

interface CompanyLogoProps {
  slug: string;
  short: string;
  color: string;
  accent: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { text: "10px", img: "h-10 w-auto max-w-[120px]", fallback: "w-10 h-10" },
  md: { text: "12px", img: "h-16 w-auto max-w-[180px]", fallback: "w-12 h-12" },
  lg: { text: "14px", img: "h-24 w-auto max-w-[260px]", fallback: "w-16 h-16" },
};

export function CompanyLogo({ slug, short, color, accent, size = "md", className = "" }: CompanyLogoProps) {
  const [useFallback, setUseFallback] = useState(false);
  const s = sizes[size];

  if (useFallback) {
    return (
      <div
        className={`${s.fallback} rounded-2xl flex items-center justify-center shrink-0 ${className}`}
        style={{ background: `linear-gradient(135deg, ${color}, ${accent})` }}
      >
        <span style={{ fontWeight: 800, fontSize: s.text, color: "white" }}>{short}</span>
      </div>
    );
  }

  return (
    <img
      src={getCompanyLogoPath(slug)}
      alt={`${short} logo`}
      className={`${s.img} object-contain ${className}`}
      onError={() => setUseFallback(true)}
    />
  );
}
