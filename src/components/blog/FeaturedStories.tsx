import { getFeaturedBlogs } from "@/queries";
import { Section } from "../ui/Section";
import { BlogGrid } from "./BlogGrid";

export async function FeaturedStories() {
  const blogs = await getFeaturedBlogs();

  if (blogs.length === 0) {
    return null;
  }

  return (
    <Section
      title="Featured Stories"
      subtitle="Explore the latest tea tales and vendor spotlights"
    >
      <BlogGrid blogs={blogs} />
    </Section>
  );
}
