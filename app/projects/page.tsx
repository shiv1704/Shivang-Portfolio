"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects, ALL_CATEGORIES, type ProjectCategory } from "@/lib/projects";

const ALL_LABEL = "All";

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | typeof ALL_LABEL>(ALL_LABEL);

  const filtered =
    active === ALL_LABEL ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            All work
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-ink md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 max-w-lg font-sans text-base text-muted">
            14 projects across AI product, brand strategy, growth, and consumer. Filter
            by category below.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap gap-2">
          <FilterChip
            label={ALL_LABEL}
            active={active === ALL_LABEL}
            onClick={() => setActive(ALL_LABEL)}
          />
          {ALL_CATEGORIES.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={active === cat}
              onClick={() => setActive(cat)}
            />
          ))}
        </div>

        {/* Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-sans text-muted">
            No projects in this category yet.
          </p>
        )}
      </Container>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
        active
          ? "bg-coral text-cream shadow-md shadow-coral/25"
          : "border border-ink/15 text-muted hover:border-coral hover:text-coral"
      }`}
    >
      {label}
    </button>
  );
}
