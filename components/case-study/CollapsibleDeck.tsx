"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DeckEmbed from "@/components/DeckEmbed";

type CollapsibleDeckProps = {
  url?: string;
  title?: string;
};

export default function CollapsibleDeck({ url, title }: CollapsibleDeckProps) {
  const [open, setOpen] = useState(true);

  if (!url) return null;

  return (
    <div className="mb-12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-coral transition-colors"
      >
        <motion.span animate={{ rotate: open ? 0 : -90 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
        {open ? "Collapse deck" : "Expand deck"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <DeckEmbed url={url} title={title} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
