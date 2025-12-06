import Image from "next/image";
import { getVendors } from "../../queries";

export default async function DirectoryPage() {
  const vendors = await getVendors();

  // Debug: Log vendor data to see what we're getting
  if (process.env.NODE_ENV === "development") {
    console.log("Directory page vendors:", vendors.map(v => ({
      name: v.name,
      has_logo: !!v.logo_url,
      logo_url: v.logo_url,
      tags_count: v.vendor_tags?.length ?? 0,
      tags: v.vendor_tags
    })));
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Tea Vendors</h1>

      <div className="space-y-4">
        {vendors?.map((v) => (
          <div key={v.id} className="p-4 border rounded-lg bg-main border-border-soft">
            <div className="flex items-start gap-4">
              {/* Vendor Logo */}
              {v.logo_url && (
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-soft border border-border-soft flex-shrink-0">
                  <Image
                    src={v.logo_url}
                    alt={`${v.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="80px"
                  />
                </div>
              )}

              {/* Vendor Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-heading">{v.name}</h2>
                <p className="text-sm text-text-muted">
                  {v.city}, {v.state}
                </p>

                {v.tea_types && v.tea_types.length > 0 && (
                  <p className="mt-2 text-sm text-text-main">
                    <strong>Tea Types:</strong> {v.tea_types.join(", ")}
                  </p>
                )}

                {/* Display vendor_tags from relational structure */}
                {v.vendor_tags && v.vendor_tags.length > 0 && (
                  <div className="mt-2">
                    <strong className="text-sm">Tags:</strong>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {v.vendor_tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
