import Container from "@/components/Container";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Journey — Shivang Sharma",
};

export default function JourneyPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            The story
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-ink md:text-6xl">
            Journey
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-dashed border-ink/15 py-32 text-center">
          <Clock className="mb-6 h-10 w-10 text-muted/30" />
          <h2 className="font-display text-3xl italic text-muted">
            Coming in Session 2
          </h2>
          <p className="mt-3 max-w-sm font-sans text-sm text-muted/60">
            A draggable, editorial timeline — from engineer at Samsung to MBA student
            and AI builder. Each stop tells a story.
          </p>
        </div>
      </Container>
    </div>
  );
}
