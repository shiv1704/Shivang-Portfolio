import { Mail, Link2, Code2, Phone, Video } from "lucide-react";
import Container from "@/components/Container";

export const metadata = {
  title: "Contact",
  description: "Book a chat, send an email, or connect on LinkedIn.",
};

const contactLinks = [
  {
    label: "Email",
    value: "shivangsharma1703@gmail.com",
    href: "mailto:shivangsharma1703@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/shivangsharma-pm",
    href: "https://www.linkedin.com/in/shivangsharma-pm/",
    Icon: Link2,
  },
  {
    label: "GitHub",
    value: "github.com/shiv1704",
    href: "https://github.com/shiv1704",
    Icon: Code2,
  },
  {
    label: "Phone",
    value: "+91 82798 01049",
    href: "tel:+918279801049",
    Icon: Phone,
  },
];

// Google Calendar — creates a 30-min event with Shivang as a guest
const GCAL_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Chat+with+Shivang+Sharma" +
  "&details=Looking+forward+to+connecting!+I%27ll+send+a+Google+Meet+link." +
  "&add=shivangsharma1703@gmail.com" +
  "&duration=3000";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Hero */}
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Let&rsquo;s build something<span className="text-coral">.</span>
          </h1>
          <p className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
            I&rsquo;m looking for PM and product strategy roles post-MBA. If you&rsquo;re
            hiring, exploring a problem together, or just want to chat, I&rsquo;d love to
            hear from you.
          </p>
        </div>

        {/* Book a Google Meet */}
        <div className="mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Book time
          </p>
          <div className="flex flex-col gap-6 rounded-2xl border border-ink/10 bg-white p-10 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/10">
                  <Video className="h-5 w-5 text-coral" />
                </div>
                <p className="font-display text-2xl tracking-tight text-ink">30-min Google Meet</p>
              </div>
              <p className="font-sans text-sm leading-relaxed text-ink/60 max-w-md">
                Pick a time that works for you. Add it directly to your Google Calendar and
                I&rsquo;ll confirm with a Meet link.
              </p>
            </div>
            <a
              href={GCAL_URL}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-sans text-sm font-medium text-cream transition-colors hover:bg-ink"
            >
              <Video className="h-4 w-4" />
              Schedule on Google Calendar
            </a>
          </div>
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

        <p className="font-mono text-sm text-muted/60 text-center">
          Currently based in Delhi · Open to relocation for the right role.
        </p>
      </Container>
    </div>
  );
}
