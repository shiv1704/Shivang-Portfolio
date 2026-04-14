import Link from "next/link";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import Container from "@/components/Container";
import DeckEmbed from "@/components/DeckEmbed";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "SalesGen — AI Sales Enablement | Shivang Sharma",
};

export default function SalesGenPage() {
  const project = projects.find((p) => p.slug === "salesgen")!;

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
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-ink/10 px-4 py-1.5 font-mono text-xs text-muted">
              {project.role}
            </span>
            <span className="rounded-full border border-ink/10 px-4 py-1.5 font-mono text-xs text-muted">
              {project.year}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-coral/40 px-4 py-1.5 font-mono text-xs text-coral hover:bg-coral hover:text-cream transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Visit live product
              </a>
            )}
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
            Will cover how SalesGen was built, the tech stack, user feedback, and
            growth experiments run.
          </p>
        </div>
      </Container>
    </div>
  );
}
