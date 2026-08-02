import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)",
        color: "#F8FAFC",
        fontSize: 96,
        fontWeight: 700,
      }}
    >
      N
    </div>,
    { ...size },
  );
}
