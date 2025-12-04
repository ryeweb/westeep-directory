import Link from "next/link";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt?: string;
    cover_image?: string;
    published_at?: string;
    created_at?: string;
    slug?: string;
  };
}

export function BlogCard({ blog }: BlogCardProps) {
  const href = blog.slug ? `/blog/${blog.slug}` : `/blog/${blog.id}`;
  const date = blog.published_at || blog.created_at;

  return (
    <Link href={href}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full">
        {/* Cover image placeholder */}
        <div className="h-48 bg-gray-200 relative">
          {blog.cover_image ? (
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

          {date && (
            <p className="text-xs text-gray-500 mb-3">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}

          {blog.excerpt && (
            <p className="text-sm text-gray-700 line-clamp-3">
              {blog.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
