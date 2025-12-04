import { Hero } from "@/components/home/Hero";
import { FeaturedVendors } from "@/components/vendors/FeaturedVendors";
import { FeaturedStories } from "@/components/blog/FeaturedStories";

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedVendors />
      <FeaturedStories />
    </main>
  );
}
