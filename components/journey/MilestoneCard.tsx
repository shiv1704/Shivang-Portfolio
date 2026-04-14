"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Milestone } from "@/lib/journey";
import SafeImage from "@/components/SafeImage";

type MilestoneCardProps = {
  milestone: Milestone;
};

const accentMap = {
  coral: "border-coral bg-coral/5",
  mustard: "border-mustard bg-mustard/5",
  ink: "border-ink/30 bg-ink/5",
};

const dotMap = {
  coral: "bg-coral",
  mustard: "bg-mustard",
  ink: "bg-ink",
};

const tagMap = {
  coral: "bg-coral/10 text-coral",
  mustard: "bg-mustard/10 text-mustard",
  ink: "bg-ink/10 text-ink",
};

export default function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={milestone.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`mt-8 rounded-2xl border-l-4 p-8 ${accentMap[milestone.color]}`}
      >
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wider ${tagMap[milestone.color]}`}
              >
                {milestone.period}
              </span>
              <span className="font-mono text-xs text-muted">{milestone.year}</span>
            </div>

            <div>
              <h3 className="font-display text-3xl italic leading-tight text-ink">
                {milestone.title}
              </h3>
              <p className="mt-1 font-sans text-base text-muted">{milestone.subtitle}</p>
            </div>

            <p className="font-sans text-base leading-relaxed text-ink/75">
              {milestone.body}
            </p>

            <ul className="flex flex-col gap-2">
              {milestone.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 font-sans text-sm text-ink/70">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotMap[milestone.color]}`} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative h-48 overflow-hidden rounded-xl md:h-auto">
            <SafeImage
              src={milestone.image ?? ""}
              alt={milestone.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              fallbackText={milestone.title}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
