"use client";

import { useState } from "react";
import { Presentation, Loader2 } from "lucide-react";

type DeckEmbedProps = {
  url?: string;
  title?: string;
  aspectRatio?: "16/9" | "4/3";
};

export default function DeckEmbed({
  url,
  title = "Deck",
  aspectRatio = "16/9",
}: DeckEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  // Empty state
  if (!url) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink/15 bg-cream py-20 text-center">
        <Presentation className="mb-4 h-10 w-10 text-muted/40" />
        <p className="font-display text-xl tracking-tight text-muted">Deck coming soon</p>
        <p className="mt-2 font-sans text-sm text-muted/60">
          Add the{" "}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-xs">
            deckUrl
          </code>{" "}
          in{" "}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-xs">
            /lib/projects.ts
          </code>{" "}
          to embed the deck here.
        </p>
      </div>
    );
  }

  const paddingBottom = aspectRatio === "16/9" ? "56.25%" : "75%";

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-ink/10 shadow-sm"
      style={{ paddingBottom, height: 0 }}
    >
      {/* Loading spinner */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream">
          <Loader2 className="h-8 w-8 animate-spin text-coral" />
        </div>
      )}
      <iframe
        src={url}
        title={title}
        allow="autoplay"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s" }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
