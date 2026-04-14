"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  total: number;
  current: number;
  startYear: string;
  endYear: string;
};

export default function ProgressBar({
  total,
  current,
  startYear,
  endYear,
}: ProgressBarProps) {
  const pct = total <= 1 ? 100 : (current / (total - 1)) * 100;

  return (
    <div className="mt-6 flex items-center gap-4">
      <span className="font-mono text-xs text-muted/60">{startYear}</span>
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-coral"
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
        />
      </div>
      <span className="font-mono text-xs text-muted/60">{endYear}</span>
      <span className="font-mono text-xs text-muted">
        {current + 1} / {total}
      </span>
    </div>
  );
}
