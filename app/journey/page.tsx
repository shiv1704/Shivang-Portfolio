import Container from "@/components/Container";
import Timeline from "@/components/journey/Timeline";
import { MoveHorizontal } from "lucide-react";

export const metadata = {
  title: "Journey — Shivang Sharma",
  description:
    "From writing code at Samsung to strategy at Masters' Union. Drag through the timeline to explore every chapter.",
};

export default function JourneyPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Intro */}
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            My Journey
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            From writing code to{" "}
            <span className="text-coral">shaping products.</span>
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink/65 md:text-lg">
            Drag the timeline to scrub through. Click any station for the full story.
          </p>
          <div className="mt-3 hidden items-center gap-2 md:flex">
            <MoveHorizontal className="h-4 w-4 text-muted/50" />
            <span className="font-mono text-xs text-muted/50">drag left or right</span>
          </div>
        </div>

        {/* Timeline */}
        <Timeline />
      </Container>
    </div>
  );
}
