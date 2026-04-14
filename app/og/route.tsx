import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Shivang Sharma";
  const subtitle = searchParams.get("subtitle") ?? "PM & Product Strategist";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 72px",
          fontFamily: "serif",
        }}
      >
        {/* Coral accent bar */}
        <div
          style={{
            width: 64,
            height: 6,
            background: "#E8614A",
            borderRadius: 3,
            marginBottom: 48,
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#1A1A2E",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#6B6B7A",
            marginTop: 24,
            fontFamily: "sans-serif",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 72,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "#E8614A",
              borderRadius: 8,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FAF8F3",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            SS
          </div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 14,
              color: "#9999AA",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            shivangsharma.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
