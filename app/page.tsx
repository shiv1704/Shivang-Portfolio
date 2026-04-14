import Link from "next/link";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Magnetic from "@/components/Magnetic";
import { flagshipProjects } from "@/lib/projects";

// ── Brand logos data ─────────────────────────────────────────────────────────
const brandLogos = [
  { name: "Samsung R&D", abbr: "Samsung" },
  { name: "United Airlines", abbr: "United" },
  { name: "Newgen", abbr: "Newgen" },
  { name: "TATA AIG", abbr: "TATA AIG" },
];

// ── Currently cards ──────────────────────────────────────────────────────────
const currentlyCards = [
  { label: "Building →", value: "Why.AI", sub: "AI adoption intelligence" },
  { label: "Learning →", value: "Masters' Union", sub: "MBA · Gurugram" },
  { label: "Exploring →", value: "AI in India", sub: "Enterprise adoption patterns" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden pt-16 md:pt-24">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                PM + Strategy · Ex-Engineer · AI Builder
              </p>

              <h1 className="font-display text-6xl italic leading-none text-ink md:text-7xl lg:text-8xl">
                Hey, I&rsquo;m{" "}
                <span className="relative inline-block">
                  Shivang
                  <span className="text-coral">.</span>
                </span>
              </h1>

              <p className="max-w-lg font-sans text-lg leading-relaxed text-ink/70 md:text-xl">
                Ex-software engineer turned product strategist. Currently at{" "}
                <span className="font-medium text-ink">Masters&rsquo; Union</span>, building{" "}
                <span className="font-medium text-coral">Why.AI</span>, and obsessed with how
                teams actually adopt AI.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Magnetic>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-sans text-sm font-medium text-cream shadow-lg shadow-coral/25 transition-all hover:bg-ink hover:shadow-ink/20"
                  >
                    See my work <ArrowRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/journey"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 font-sans text-sm font-medium text-ink transition-all hover:border-coral hover:text-coral"
                  >
                    Read my journey
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Right — photo placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Coral ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-coral/40" />
                {/* Float animation wrapper */}
                <div className="animate-float">
                  <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-coral/20 to-mustard/20 shadow-2xl md:h-80 md:w-80">
                    {/* Replace with <Image> once you have a photo */}
                    <span className="font-display text-7xl italic text-coral/60">SS</span>
                  </div>
                </div>
                {/* Decorative dot */}
                <div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-mustard" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Worked with strip ─────────────────────────────────────────────── */}
      <div className="border-y border-ink/8 py-10">
        <Container>
          <div className="flex flex-col items-center gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Worked with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {brandLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="group cursor-default select-none"
                >
                  <span className="font-sans text-base font-semibold text-ink/30 transition-colors duration-300 group-hover:text-ink">
                    {logo.abbr}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Currently block ───────────────────────────────────────────────── */}
      <Section label="Right now">
        <div className="grid gap-6 md:grid-cols-3">
          {currentlyCards.map((card) => (
            <div
              key={card.label}
              className="group rounded-2xl border border-coral/30 bg-white p-8 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-lg hover:shadow-coral/10"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-coral">
                {card.label}
              </p>
              <p className="mt-3 font-display text-2xl italic text-ink">
                {card.value}
              </p>
              <p className="mt-1 font-sans text-sm text-muted">{card.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Flagship projects ─────────────────────────────────────────────── */}
      <Section label="Flagship Work" className="bg-ink/[0.02]">
        <h2 className="mb-12 font-display text-4xl italic text-ink md:text-5xl">
          Work I&rsquo;m proud of.
        </h2>
        {/* Asymmetric editorial layout */}
        <div className="grid gap-6 md:grid-cols-5">
          {/* First card — wide */}
          <div className="md:col-span-3">
            <ProjectCard project={flagshipProjects[0]} className="h-full" />
          </div>
          {/* Next two — stacked */}
          <div className="flex flex-col gap-6 md:col-span-2">
            {flagshipProjects.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} className="flex-1" />
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted underline underline-offset-4 hover:text-coral"
          >
            See all 14 projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      {/* ── Journey teaser ────────────────────────────────────────────────── */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              The story
            </p>
            <h2 className="mt-4 font-display text-4xl italic leading-tight text-ink md:text-5xl">
              From writing code at Samsung to strategy at Masters&rsquo; Union.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-base leading-relaxed text-ink/70">
              4+ years of engineering, consulting, and product work across enterprise
              software, insurance, and now AI. Here&rsquo;s how I got here and where
              I&rsquo;m going.
            </p>
            <Link
              href="/journey"
              className="w-fit inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-sans text-sm text-ink transition-all hover:border-coral hover:text-coral"
            >
              Read my journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <section className="bg-ink py-24">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-display text-5xl italic text-cream md:text-7xl">
              Let&rsquo;s build something
              <span className="text-coral">.</span>
            </h2>
            <p className="max-w-md font-sans text-base text-cream/60">
              Looking for PM / Strategy roles starting 2025. Open to interesting problems
              in AI, consumer, and B2B.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Magnetic>
                <a
                  href="mailto:shivang@example.com"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-sans text-sm font-medium text-cream transition-colors hover:bg-mustard hover:text-ink"
                >
                  <Mail className="h-4 w-4" /> Send an email
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 font-sans text-sm font-medium text-cream transition-all hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <Calendar className="h-4 w-4" /> Book a chat
                </a>
              </Magnetic>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
