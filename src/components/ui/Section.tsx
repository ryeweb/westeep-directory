import { ReactNode } from "react";
import { Container } from "../layout/Container";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-heading mb-3">{title}</h2>
            )}
            {subtitle && (
              <p className="text-text-muted max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
