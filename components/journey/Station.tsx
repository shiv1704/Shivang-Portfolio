"use client";

import { motion } from "framer-motion";
import { Milestone } from "@/lib/journey";

type StationProps = {
  milestone: Milestone;
  isActive: boolean;
  onClick: () => void;
};

const colorMap = {
  coral: {
    bg: "bg-coral",
    ring: "ring-coral/40",
    glow: "shadow-coral/50",
    text: "text-coral",
  },
  mustard: {
    bg: "bg-mustard",
    ring: "ring-mustard/40",
    glow: "shadow-mustard/50",
    text: "text-mustard",
  },
  ink: {
    bg: "bg-ink",
    ring: "ring-ink/30",
    glow: "shadow-ink/30",
    text: "text-ink",
  },
};

export default function Station({ milestone, isActive, onClick }: StationProps) {
  const colors = colorMap[milestone.color];

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 focus:outline-none"
      aria-label={`${milestone.period}: ${milestone.title}`}
      aria-pressed={isActive}
    >
      {/* Year label */}
      <span
        className={`font-mono text-xs transition-colors duration-200 ${
          isActive ? colors.text : "text-muted/60"
        }`}
      >
        {milestone.year}
      </span>

      {/* Node */}
      <motion.div
        animate={{
          scale: isActive ? 1.25 : 1,
          boxShadow: isActive
            ? `0 0 0 6px var(--tw-shadow-color, rgba(0,0,0,0.1)), 0 8px 24px var(--tw-shadow-color)`
            : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`relative h-4 w-4 rounded-full ${colors.bg} ${
          isActive ? `ring-4 ${colors.ring} shadow-lg ${colors.glow}` : ""
        } cursor-pointer transition-all duration-200`}
      >
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 rounded-full bg-white/30"
          />
        )}
      </motion.div>

      {/* Period label */}
      <span
        className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-200 ${
          isActive ? "text-ink font-semibold" : "text-muted/50"
        }`}
      >
        {milestone.period}
      </span>
    </button>
  );
}
