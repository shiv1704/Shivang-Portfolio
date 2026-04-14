import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#E8614A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            color: "#FAF8F3",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
            fontFamily: "serif",
          }}
        >
          SS
        </span>
      </div>
    ),
    { ...size }
  );
}
