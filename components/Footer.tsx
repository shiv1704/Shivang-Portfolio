import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Shivang Sharma
        </p>

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
