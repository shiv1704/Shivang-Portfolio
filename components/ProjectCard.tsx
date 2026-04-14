"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Presentation } from "lucide-react";
import Image from "next/image";
import { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

// Initials from company name: camelCase + dot-split aware, max 2 chars
function getCompanyInitials(company: string): string {
  const segments = company
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase → "Sales Gen"
    .replace(/[.\-_]/g, " ")              // dots/dashes → spaces
    .trim()
    .split(/\s+/)
    .filter((s) => s.length > 0 && !/^\d+$/.test(s)); // drop pure numbers

  if (segments.length === 0) return "??";

  const first = segments[0];

  // Short all-caps acronym as first word (e.g. "EY", "LA"): use it whole
  if (
    segments.length >= 2 &&
    first.length === 2 &&
    /^[A-Z]+$/.test(first)
  ) {
    return first;
  }

  // Multiple segments: first letter of each of the first two
  if (segments.length >= 2) {
    return (first[0] + segments[1][0]).toUpperCase();
  }

  // Single segment: first two letters
  return first.slice(0, 2).toUpperCase();
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const hasDecks = project.deckUrl && project.deckUrl !== "";
  const [imgErrored, setImgErrored] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white ${className}`}
    >
      {/* Image / placeholder */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden">
        {/* Coral placeholder */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-coral"
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="font-display text-5xl font-bold text-cream/90 select-none">
            {getCompanyInitials(project.company)}
          </span>
        </motion.div>

        {/* Real image layer */}
        {!imgErrored && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
            onError={() => setImgErrored(true)}
          />
        )}

        {/* Year chip */}
        <span className="absolute right-4 top-4 z-10 rounded-full bg-cream/90 px-3 py-1 font-mono text-xs text-ink">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-coral">
          {project.category}
        </span>

        <h3 className="font-display text-2xl leading-tight tracking-tight text-ink">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-muted">{project.company}</p>

        <p className="font-sans text-sm leading-relaxed text-ink/80 line-clamp-2">
          {project.tagline}
        </p>

        <span className="w-fit rounded-full border border-ink/10 px-3 py-1 font-mono text-xs text-muted">
          {project.role}
        </span>

        {/* CTA row — always at bottom */}
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-ink/5 pt-4">
          {hasDecks && (
            <a
              href={project.deckUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-coral underline underline-offset-4 hover:text-ink transition-colors"
            >
              <Presentation className="h-3.5 w-3.5" />
              View deck →
            </a>
          )}

          {project.isFlagship && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-1.5 font-sans text-xs text-cream transition-colors hover:bg-ink"
            >
              <FileText className="h-3.5 w-3.5" />
              Read case study →
            </Link>
          )}

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
