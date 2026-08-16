import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — 24×7 Taxi & Tour Service in Udupi, Karnataka`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a161d 0%, #152c3b 55%, #254b63 100%)",
          color: "#FAF6EF",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 15c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"
              stroke="#C7A15A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 9.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"
              stroke="#FAF6EF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ fontSize: 26, letterSpacing: 3, textTransform: "uppercase", opacity: 0.75, fontFamily: "sans-serif" }}>
            Thonse Tours &amp; Travels
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 74, lineHeight: 1.08, maxWidth: 920 }}>
            Udupi, at your own pace.
          </div>
          <div style={{ fontSize: 28, opacity: 0.8, fontFamily: "sans-serif", maxWidth: 780 }}>
            24×7 taxi &amp; tour service — temples, beaches and the coast of Udupi, Karnataka.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.65,
            fontFamily: "sans-serif",
          }}
        >
          {siteConfig.city}, Karnataka · {siteConfig.phoneIntl}
        </div>
      </div>
    ),
    { ...size }
  );
}
