import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import CollapsibleDeck from "./CollapsibleDeck";

type Meta = {
  role?: string;
  team?: string;
  timeline?: string;
  outcome?: string;
};

type NextProject = {
  slug: string;
  title: string;
};

type CaseStudyLayoutProps = {
  category: string;
  title: string;
  tagline: string;
  meta: Meta;
  deckUrl?: string;
  nextProject?: NextProject;
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  category,
  title,
  tagline,
  meta,
  deckUrl,
  nextProject,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-coral transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        {/* Hero */}
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-coral">
            {category}
          </span>
          <h1 className="mt-3 font-display text-5xl italic leading-tight text-ink md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-4 font-sans text-lg leading-relaxed text-muted md:text-xl">
            {tagline}
          </p>

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap gap-3">
            {meta.role && (
              <MetaChip label="Role" value={meta.role} />
            )}
            {meta.team && (
              <MetaChip label="Team" value={meta.team} />
            )}
            {meta.timeline && (
              <MetaChip label="Timeline" value={meta.timeline} />
            )}
            {meta.outcome && (
              <MetaChip label="Outcome" value={meta.outcome} />
            )}
          </div>
        </div>

        {/* Deck embed */}
        {deckUrl && <CollapsibleDeck url={deckUrl} title={title} />}

        {/* MDX content */}
        <div className="prose prose-lg max-w-3xl prose-headings:font-display prose-headings:italic prose-headings:font-normal prose-headings:text-ink prose-p:text-ink/75 prose-p:font-sans prose-p:leading-relaxed prose-a:text-coral prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-li:text-ink/75 prose-li:font-sans">
          {children}
        </div>

        {/* Next project */}
        {nextProject && (
          <div className="mt-20 border-t border-ink/10 pt-10">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Next project
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-3 inline-flex items-center gap-3 font-display text-3xl italic text-ink hover:text-coral transition-colors"
            >
              {nextProject.title}
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 rounded-2xl bg-ink px-10 py-10">
          <p className="font-display text-2xl italic text-cream">
            Want to talk about this work?
          </p>
          <p className="mt-2 font-sans text-sm text-cream/60">
            I&rsquo;m actively looking for PM and product strategy roles. Let&rsquo;s connect.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-sans text-sm font-medium text-cream hover:bg-mustard hover:text-ink transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </Container>
    </div>
  );
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white px-4 py-2.5">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <p className="font-sans text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
