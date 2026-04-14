"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { journey } from "@/lib/journey";
import Station from "./Station";
import MilestoneCard from "./MilestoneCard";
import ProgressBar from "./ProgressBar";

const STATION_W = 140;
const GAP = 80;
const STRIDE = STATION_W + GAP;

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const totalWidth = journey.length * STRIDE - GAP;
  const maxDrag = Math.min(0, containerWidth - totalWidth - 80);

  const snapToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(journey.length - 1, index));
      const target = -(clamped * STRIDE) + containerWidth / 2 - STATION_W / 2;
      const bounded = Math.max(maxDrag, Math.min(0, target));
      animate(x, bounded, { type: "spring", stiffness: 300, damping: 35 });
      setActiveIndex(clamped);
    },
    [containerWidth, maxDrag, x]
  );

  // Snap to first station on mount / container resize
  useEffect(() => {
    snapToIndex(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") snapToIndex(activeIndex + 1);
      if (e.key === "ArrowLeft") snapToIndex(activeIndex - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, snapToIndex]);

  function handleDragEnd() {
    const xVal = x.get();
    const offset = -xVal + containerWidth / 2 - STATION_W / 2;
    const rawIndex = Math.round(offset / STRIDE);
    snapToIndex(rawIndex);
  }

  return (
    <div>
      {/* ── Desktop: draggable horizontal ─────────────────────────────── */}
      <div className="hidden md:block">
        <div ref={containerRef} className="relative overflow-hidden py-2">
          {/* Dashed connecting line */}
          <div className="pointer-events-none absolute top-[3.25rem] left-0 right-0 h-px border-t-2 border-dashed border-ink/15" />

          <motion.div
            drag="x"
            dragConstraints={{ left: maxDrag, right: 0 }}
            dragElastic={0.08}
            dragMomentum={true}
            style={{ x, width: totalWidth }}
            onDragEnd={handleDragEnd}
            className="relative flex cursor-grab items-center gap-0 py-4 active:cursor-grabbing select-none"
          >
            {journey.map((milestone, i) => (
              <div
                key={milestone.id}
                style={{ width: STATION_W, marginRight: i < journey.length - 1 ? GAP : 0 }}
                className="flex justify-center"
              >
                <Station
                  milestone={milestone}
                  isActive={i === activeIndex}
                  onClick={() => snapToIndex(i)}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <ProgressBar
          total={journey.length}
          current={activeIndex}
          startYear="2004"
          endYear="2026"
        />

        <MilestoneCard milestone={journey[activeIndex]} />

        {/* Arrow key hint */}
        <p className="mt-4 text-center font-mono text-xs text-muted/40">
          ← → arrow keys · drag · click any station
        </p>
      </div>

      {/* ── Mobile: vertical scroll ────────────────────────────────────── */}
      <div className="flex flex-col gap-0 md:hidden">
        {journey.map((milestone, i) => {
          const isLast = i === journey.length - 1;
          const dotColor =
            milestone.color === "coral"
              ? "bg-coral"
              : milestone.color === "mustard"
              ? "bg-mustard"
              : "bg-ink";

          return (
            <div key={milestone.id} className="flex gap-4">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className={`mt-5 h-4 w-4 shrink-0 rounded-full ${dotColor}`} />
                {!isLast && <div className="w-px flex-1 bg-ink/10 my-1" />}
              </div>

              {/* Card */}
              <div className="pb-8 flex-1">
                <p className="font-mono text-xs text-muted/60 mb-1">{milestone.year}</p>
                <h3 className="font-display text-xl italic text-ink">{milestone.title}</h3>
                <p className="font-sans text-sm text-muted mb-2">{milestone.subtitle}</p>
                <p className="font-sans text-sm leading-relaxed text-ink/70 mb-3">
                  {milestone.body}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {milestone.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 font-sans text-xs text-ink/60">
                      <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
