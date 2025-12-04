import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            WeSteep
          </Link>

          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/directory"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/blog"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
