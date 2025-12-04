import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container>
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} WeSteep. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/directory"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Directory
              </Link>
              <Link
                href="/blog"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/become-a-partner"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
