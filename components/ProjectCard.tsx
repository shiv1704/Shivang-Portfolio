"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Presentation } from "lucide-react";
import { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

function getInitials(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const hasDecks = project.deckUrl && project.deckUrl !== "";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white ${className}`}
    >
      {/* Image / placeholder */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-coral/10">
        {/* Tilt effect on hover */}
        <motion.div
          className="flex h-full w-full items-center justify-center bg-coral"
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="font-display text-5xl italic font-bold text-cream/90 select-none">
            {getInitials(project.title)}
          </span>
        </motion.div>
        {/* Year chip */}
        <span className="absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1 font-mono text-xs text-ink">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* Category */}
        <span className="font-mono text-xs uppercase tracking-widest text-coral">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl italic leading-tight text-ink">
          {project.title}
        </h3>

        {/* Company */}
        <p className="font-sans text-sm text-muted">{project.company}</p>

        {/* Tagline */}
        <p className="font-sans text-sm leading-relaxed text-ink/80">
          {project.tagline}
        </p>

        {/* Role pill */}
        <span className="w-fit rounded-full border border-ink/10 px-3 py-1 font-mono text-xs text-muted">
          {project.role}
        </span>

        {/* CTA row */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 border-t border-ink/5">
          {/* Deck */}
          {hasDecks ? (
            <a
              href={project.deckUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-coral underline underline-offset-4 hover:text-ink transition-colors"
            >
              <Presentation className="h-3.5 w-3.5" />
              View deck →
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted/60 italic">
              Deck coming soon
            </span>
          )}

          {/* Case study — flagship only */}
          {project.isFlagship && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-1.5 font-sans text-xs text-cream transition-colors hover:bg-ink"
            >
              <FileText className="h-3.5 w-3.5" />
              Read case study →
            </Link>
          )}

          {/* Live link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-4 py-1.5 font-sans text-xs text-ink transition-colors hover:border-coral hover:text-coral"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Visit live →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
