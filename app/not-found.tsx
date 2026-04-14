import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      <span className="font-mono text-xs uppercase tracking-widest text-coral">404</span>
      <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm font-sans text-base text-muted">
        This page doesn&rsquo;t exist, or was moved. Let&rsquo;s get you back somewhere useful.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-coral px-6 py-2.5 font-sans text-sm text-cream transition-colors hover:bg-ink"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-ink/15 px-6 py-2.5 font-sans text-sm text-ink transition-colors hover:border-coral hover:text-coral"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}
