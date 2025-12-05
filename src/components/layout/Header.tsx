import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="bg-soft border-b border-border-soft">
      <Container>
        <div className="flex flex-col items-center py-6 gap-4">
          <Link href="/">
            <Image
              src="/WeSteep_Logo_Horizontal.png"
              alt="WeSteep"
              width={200}
              height={50}
              className="h-auto"
              priority
            />
          </Link>

          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-text-main hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/directory"
              className="text-sm text-text-main hover:text-primary transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/blog"
              className="text-sm text-text-main hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
