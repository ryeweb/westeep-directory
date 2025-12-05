import Link from "next/link";
import { Container } from "../layout/Container";

export function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center bg-soft">
      {/* Background image - assumes /public/images/hero.jpg exists */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Discover Exceptional Tea
          </h1>
          <p className="text-xl mb-8">
            A curated directory of quality tea vendors and their stories
          </p>
          <Link
            href="/directory"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
          >
            Explore Directory
          </Link>
        </div>
      </Container>
    </section>
  );
}
