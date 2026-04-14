import Container from "@/components/Container";
import { Mail, Link2, Calendar } from "lucide-react";

export const metadata = {
  title: "Contact — Shivang Sharma",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-ink md:text-6xl">
            Let&rsquo;s talk.
          </h1>
          <p className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
            I&rsquo;m actively looking for PM and Strategy roles. If you&rsquo;re
            building something ambitious or want to talk product — I&rsquo;m always
            up for a conversation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:shivang@example.com"
            className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-lg hover:shadow-coral/10"
          >
            <Mail className="h-6 w-6 text-coral" />
            <div>
              <p className="font-sans font-medium text-ink">Email</p>
              <p className="mt-1 font-mono text-sm text-muted">shivang@example.com</p>
            </div>
            <p className="mt-auto font-mono text-xs text-coral opacity-0 transition-opacity group-hover:opacity-100">
              Send email →
            </p>
          </a>

          <a
            href="https://linkedin.com/in/shivangsharma"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-lg hover:shadow-coral/10"
          >
            <Link2 className="h-6 w-6 text-coral" />
            <div>
              <p className="font-sans font-medium text-ink">LinkedIn</p>
              <p className="mt-1 font-mono text-sm text-muted">/in/shivangsharma</p>
            </div>
            <p className="mt-auto font-mono text-xs text-coral opacity-0 transition-opacity group-hover:opacity-100">
              View profile →
            </p>
          </a>

          <a
            href="#"
            className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-lg hover:shadow-coral/10"
          >
            <Calendar className="h-6 w-6 text-coral" />
            <div>
              <p className="font-sans font-medium text-ink">Calendly</p>
              <p className="mt-1 font-mono text-sm text-muted">Book a 30-min chat</p>
            </div>
            <p className="mt-auto font-mono text-xs text-coral opacity-0 transition-opacity group-hover:opacity-100">
              Book time →
            </p>
          </a>
        </div>
      </Container>
    </div>
  );
}
