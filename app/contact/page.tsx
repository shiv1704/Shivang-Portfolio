import { Mail, Link2, Code2, Phone } from "lucide-react";
import Container from "@/components/Container";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata = {
  title: "Contact — Shivang Sharma",
  description: "Book a chat, send an email, or connect on LinkedIn.",
};

const contactLinks = [
  {
    label: "Email",
    value: "tbm26shivang.sharma@mastersunion.org",
    href: "mailto:tbm26shivang.sharma@mastersunion.org",
    Icon: Mail,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "/in/shivang-sharma-pu",
    href: "https://linkedin.com/in/shivang-sharma-pu",
    Icon: Link2,
    copyable: false,
  },
  {
    label: "GitHub",
    value: "github.com/shiv1704",
    href: "https://github.com/shiv1704",
    Icon: Code2,
    copyable: false,
  },
  {
    label: "Phone",
    value: "+91 82798 01049",
    href: "tel:+918279801049",
    Icon: Phone,
    copyable: true,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Hero */}
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-5xl italic leading-tight text-ink md:text-6xl">
            Let&rsquo;s build something<span className="text-coral">.</span>
          </h1>
          <p className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
            I&rsquo;m looking for PM and product strategy roles post-MBA. If you&rsquo;re
            hiring, exploring a problem together, or just want to chat — I&rsquo;d love to
            hear from you.
          </p>
        </div>

        {/* Calendly embed */}
        <div className="mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Book time
          </p>
          <CalendlyEmbed url="https://calendly.com/tbm26shivang-sharma/30min" />
        </div>

        {/* Contact cards */}
        <div className="mb-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
            Or reach out directly
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-lg hover:shadow-coral/10"
              >
                <Icon className="h-5 w-5 text-coral" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    {label}
                  </p>
                  <p className="mt-1 font-sans text-sm text-ink break-all">{value}</p>
                </div>
                <p className="mt-auto font-mono text-xs text-coral opacity-0 transition-opacity group-hover:opacity-100">
                  {href.startsWith("mailto") ? "Send email →" : href.startsWith("tel") ? "Call →" : "View →"}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="font-mono text-sm text-muted/60 text-center">
          Currently based in Delhi &middot; Open to relocation for the right role.
        </p>
      </Container>
    </div>
  );
}
