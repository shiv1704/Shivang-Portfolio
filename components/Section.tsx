import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  label?: string;
  className?: string;
  id?: string;
};

export default function Section({ children, label, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <Container>
        {label && (
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
            {label}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
