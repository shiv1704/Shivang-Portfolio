import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: "#FAF8F3",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "-0.5px",
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
