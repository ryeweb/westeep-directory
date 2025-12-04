import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  blogs: Array<{
    id: string;
    title: string;
    excerpt?: string;
    cover_image?: string;
    published_at?: string;
    created_at?: string;
    slug?: string;
  }>;
}

export function BlogGrid({ blogs }: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        No stories found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
