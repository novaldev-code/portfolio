import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.title;

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#020617",
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 30%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 50% 90%, rgba(6,182,212,0.25), transparent 45%)",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 32,
          fontWeight: 700,
          color: "#94A3B8",
          letterSpacing: -0.5,
        }}
      >
        {siteConfig.name}.dev
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 32,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#F8FAFC",
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 38,
            fontWeight: 600,
            backgroundImage:
              "linear-gradient(90deg, #3B82F6, #06B6D4, #8B5CF6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.roles.join("  ·  ")}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
