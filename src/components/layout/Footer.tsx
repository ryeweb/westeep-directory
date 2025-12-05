import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-soft border-t border-border-soft mt-16">
      <Container>
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} WeSteep. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/directory"
                className="text-sm text-text-muted hover:text-heading transition-colors"
              >
                Directory
              </Link>
              <Link
                href="/blog"
                className="text-sm text-text-muted hover:text-heading transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/become-a-partner"
                className="text-sm text-text-muted hover:text-heading transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
