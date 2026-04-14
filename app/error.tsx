"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      <span className="font-mono text-xs uppercase tracking-widest text-coral">Error</span>
      <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-sm font-sans text-base text-muted">
        An unexpected error occurred. Try refreshing, or head back home.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-coral px-6 py-2.5 font-sans text-sm text-cream transition-colors hover:bg-ink"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-ink/15 px-6 py-2.5 font-sans text-sm text-ink transition-colors hover:border-coral hover:text-coral"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
