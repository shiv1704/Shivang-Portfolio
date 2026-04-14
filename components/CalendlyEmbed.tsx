"use client";

import { useEffect } from "react";

type CalendlyEmbedProps = {
  url: string;
};

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-ink/10"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
