import Link from "next/link";
import { GitFork, Link2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Shivang Sharma
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/shivangsharma"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-coral"
          >
            <Link2 className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/shivangsharma"
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
            className="text-muted transition-colors hover:text-coral"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/shivangsharma"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-coral"
          >
            <GitFork className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-muted">
          Built with{" "}
          <Link
            href="https://claude.ai/code"
            target="_blank"
            className="underline underline-offset-2 hover:text-coral"
          >
            Claude Code
          </Link>
        </p>
      </div>
    </footer>
  );
}
