import { useState } from "react";

export const HOLDINGS_LOGO_PATH = "/logos/british-way-holdings.png";

interface BrandLogoProps {
  height?: number;
  className?: string;
}

export function BrandLogo({ height = 40, className = "" }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl shadow-md ${className}`}
        style={{ height, minWidth: height, background: "linear-gradient(135deg, #4a80b4, #2a5a94)" }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "13px", color: "white" }}>BW</span>
      </div>
    );
  }

  return (
    <img
      src={HOLDINGS_LOGO_PATH}
      alt="British Way Holdings"
      className={`object-contain object-left ${className}`}
      style={{ height, width: "auto", maxWidth: "none" }}
      onError={() => setFailed(true)}
    />
  );
}
