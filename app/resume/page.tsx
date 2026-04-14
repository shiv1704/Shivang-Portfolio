import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Shivang Sharma's resume — PM & Product Strategist, ex-software engineer, MBA at Masters' Union.",
};

const RESUME_PDF = "/resume/shivang-sharma-resume.pdf";

export default function ResumePage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-coral">Resume</span>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Shivang Sharma
            </h1>
            <p className="mt-2 font-sans text-lg text-muted">
              PM & Product Strategist · MBA, Masters&rsquo; Union
            </p>
          </div>
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-sans text-sm text-cream transition-colors hover:bg-ink"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* PDF embed */}
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <iframe
            src={`${RESUME_PDF}#toolbar=0`}
            className="h-[80vh] w-full"
            title="Shivang Sharma Resume"
          />
        </div>

        {/* Fallback */}
        <p className="mt-6 text-center font-sans text-sm text-muted/60">
          PDF not rendering?{" "}
          <a
            href={RESUME_PDF}
            download
            className="text-coral underline-offset-2 hover:underline"
          >
            Download directly
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-coral underline-offset-2 hover:underline">
            get in touch
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
