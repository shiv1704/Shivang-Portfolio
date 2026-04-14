import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import SafeImage from "@/components/SafeImage";

export const metadata = {
  title: "About",
  description:
    "Ex-software engineer turned product strategist. MBA at Masters' Union. Building Why.AI.",
};

const skills = [
  {
    category: "Product & Strategy",
    items: ["Product teardowns", "GTM strategy", "Positioning", "Roadmapping", "User research"],
  },
  {
    category: "AI & Tech",
    items: ["Claude API", "Agentic systems", "Prompt engineering", "Next.js", "TypeScript", "Supabase"],
  },
  {
    category: "Design & Prototyping",
    items: ["Figma", "Lovable", "v0", "Rapid prototyping"],
  },
  {
    category: "Analysis",
    items: ["PowerBI", "SQL", "Market sizing", "Competitive analysis"],
  },
  {
    category: "Leadership",
    items: ["Team building", "Cross-functional alignment", "Netflix Fraternity President"],
  },
];

const beyondWork = [
  { image: "/images/hero/beyond-1.jpg", caption: "Winning together on the field", fallback: "Team" },
  { image: "/images/hero/beyond-2.jpg", caption: "My constant companion", fallback: "Life" },
  { image: "/images/hero/beyond-3.jpg", caption: "Cricket. Always cricket.", fallback: "Cricket" },
  { image: "/images/hero/beyond-4.jpg", caption: "Leading the Netflix Fraternity", fallback: "Lead" },
];

const reading = [
  { type: "Reading", title: "The Innovator's Dilemma", author: "Clayton Christensen" },
  { type: "Listening", title: "Acquired Podcast", author: "Ben & David" },
  { type: "Watching", title: "How I Built This", author: "Guy Raz / NPR" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid items-start gap-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">About</p>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
                Ex-engineer. Product-obsessed.{" "}
                <span className="text-coral">Still learning.</span>
              </h1>

              <div className="mt-8 flex flex-col gap-5 font-sans text-base leading-relaxed text-ink/70">
                <p>
                  I spent four years writing automation code at Samsung R&D and United Airlines. Shipping features that touched millions of devices and keeping pricing infrastructure running for a global airline. Engineering taught me how to think in systems, break down complexity, and care deeply about the person on the other end of the product.
                </p>
                <p>
                  At Masters&rsquo; Union, I made the pivot I&rsquo;d been building toward for years. Not because I stopped loving technology, but because I realised the problems I wanted to solve lived at the intersection of technology, people, and markets. That&rsquo;s product.
                </p>
                <p>
                  Right now I&rsquo;m building Why.AI, running the Netflix Fraternity, and thinking hard about how AI actually changes the way organisations work, not in theory but in practice. I&rsquo;m looking for PM and product strategy roles where I can bring both the engineering depth and the strategic lens.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative h-80 w-80 overflow-hidden rounded-2xl shadow-2xl">
                <SafeImage
                  src="/images/hero/shivang-profile.jpg"
                  alt="Shivang Sharma"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                  fallbackText="Shivang Sharma"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Skills grid ───────────────────────────────────────────────────── */}
      <section className="border-y border-ink/8 bg-ink/[0.02] py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Skills</p>
              <h2 className="mt-3 font-display text-4xl tracking-tight text-ink">What I bring.</h2>
              <p className="mt-4 font-sans text-base text-ink/60">
                Four years of engineering fluency, now applied to product thinking. I can go deep on the technical side and broad on the strategic side, knowing when each is needed.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/10 bg-white px-3 py-1 font-sans text-xs text-ink/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Beyond work ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Beyond work</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink">
            The rest of the picture.
          </h2>
          <p className="mt-4 mb-10 max-w-2xl font-sans text-base leading-relaxed text-ink/60">
            I lead because it&rsquo;s instinctive, not instructed — six years as Cultural Captain at school was just the beginning. Cricket is the reset button: I&rsquo;ve played it my whole life and still feel most like myself on a pitch. Off the field, I&rsquo;m usually with my dog, behind a camera, or on a dance floor. The things I care about tend to involve either a team, a challenge, or both.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {beyondWork.map((block) => (
              <div key={block.caption} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <SafeImage
                    src={block.image}
                    alt={block.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackText={block.fallback}
                  />
                </div>
                <p className="font-sans text-sm text-ink/60">{block.caption}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Reading / listening ───────────────────────────────────────────── */}
      <section className="border-t border-ink/8 py-16">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Right now</p>
          <h2 className="mt-3 mb-8 font-display text-3xl tracking-tight text-ink">
            What I&rsquo;m reading &amp; listening to.
          </h2>

          <div className="flex flex-wrap gap-4">
            {reading.map((item) => (
              <div key={item.title} className="rounded-xl border border-ink/10 bg-white px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-coral">
                  {item.type}
                </p>
                <p className="mt-1 font-sans text-sm font-medium text-ink">{item.title}</p>
                <p className="font-sans text-xs text-muted">{item.author}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <Container>
          <div className="flex items-center justify-between gap-8 rounded-2xl bg-ink px-10 py-10">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-cream">
                Think we&rsquo;d work well together?
              </h2>
              <p className="mt-2 font-sans text-sm text-cream/60">
                I&rsquo;m actively looking for PM and product strategy roles.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-sans text-sm font-medium text-cream hover:bg-mustard hover:text-ink transition-colors"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
