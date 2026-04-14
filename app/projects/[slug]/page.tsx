import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/Container";
import DeckEmbed from "@/components/DeckEmbed";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import PullQuote from "@/components/case-study/PullQuote";
import Stat from "@/components/case-study/Stat";
import Gallery from "@/components/case-study/Gallery";
import Callout from "@/components/case-study/Callout";
import { projects } from "@/lib/projects";

type Frontmatter = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  role?: string;
  team?: string;
  timeline?: string;
  outcome?: string;
  deckUrl?: string;
  liveUrl?: string;
};

const mdxComponents = { PullQuote, Stat, Gallery, Callout };

function getMdxPath(slug: string) {
  return path.join(process.cwd(), "content", "projects", `${slug}.mdx`);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Shivang Sharma`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const mdxPath = getMdxPath(slug);
  const hasMdx = fs.existsSync(mdxPath);

  // ── Flagship: full MDX case study ─────────────────────────────────────────
  if (hasMdx) {
    const source = fs.readFileSync(mdxPath, "utf8");
    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source,
      options: { parseFrontmatter: true },
      components: mdxComponents,
    });

    // Find next flagship for bottom navigation
    const flagships = projects.filter((p) => p.isFlagship);
    const idx = flagships.findIndex((p) => p.slug === slug);
    const next = flagships[idx + 1] ?? null;

    return (
      <CaseStudyLayout
        category={frontmatter.category ?? project.category}
        title={frontmatter.title ?? project.title}
        tagline={frontmatter.tagline ?? project.tagline}
        meta={{
          role: frontmatter.role ?? project.role,
          team: frontmatter.team,
          timeline: frontmatter.timeline ?? project.year,
          outcome: frontmatter.outcome,
        }}
        deckUrl={frontmatter.deckUrl ?? project.deckUrl}
        nextProject={next ? { slug: next.slug, title: next.title } : undefined}
      >
        {content}
      </CaseStudyLayout>
    );
  }

  // ── Non-flagship: simple layout ────────────────────────────────────────────
  return (
    <div className="min-h-screen py-20">
      <Container>
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-coral transition-colors"
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
          <p className="mt-3 font-sans text-base text-muted">{project.company}</p>
          <p className="mt-4 font-sans text-lg leading-relaxed text-ink/70">
            {project.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-xl border border-ink/10 bg-white px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Role</p>
              <p className="font-sans text-sm font-medium text-ink">{project.role}</p>
            </span>
            <span className="rounded-xl border border-ink/10 bg-white px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Year</p>
              <p className="font-sans text-sm font-medium text-ink">{project.year}</p>
            </span>
          </div>
        </div>

        {project.deckUrl && (
          <div className="mb-12">
            <DeckEmbed url={project.deckUrl} title={project.title} />
          </div>
        )}

        <div className="flex flex-col items-center rounded-2xl border border-dashed border-ink/15 py-16 text-center">
          <p className="font-display text-2xl italic text-muted">Full case study coming soon.</p>
          <p className="mt-3 max-w-sm font-sans text-sm text-muted/60">
            The deck above has the full breakdown. Reach out if you&rsquo;d like to discuss this project directly.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-2.5 font-sans text-sm text-cream hover:bg-ink transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </Container>
    </div>
  );
}
