import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Container from "@/components/Container";
import DeckEmbed from "@/components/DeckEmbed";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Why.AI — AI Adoption Intelligence Platform | Shivang Sharma",
};

export default function WhyAIPage() {
  const project = projects.find((p) => p.slug === "why-ai")!;

  return (
    <div className="min-h-screen py-20">
      <Container>
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-coral"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-coral">
            {project.category}
          </span>
          <h1 className="mt-3 font-display text-5xl italic leading-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 font-sans text-lg text-muted">{project.company}</p>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink/70">
            {project.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="rounded-full border border-ink/10 px-4 py-1.5 font-mono text-xs text-muted">
              {project.role}
            </span>
            <span className="rounded-full border border-ink/10 px-4 py-1.5 font-mono text-xs text-muted">
              {project.year}
            </span>
          </div>
        </div>

        <div className="mb-16">
          <DeckEmbed url={project.deckUrl} title={project.title} />
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-dashed border-ink/15 py-20 text-center">
          <Clock className="mb-4 h-8 w-8 text-muted/40" />
          <h2 className="font-display text-3xl italic text-muted">
            Full case study coming in Session 2
          </h2>
          <p className="mt-3 max-w-md font-sans text-sm text-muted/60">
            Will cover product vision, architecture decisions, metrics, and the
            founding story of Why.AI.
          </p>
        </div>
      </Container>
    </div>
  );
}
