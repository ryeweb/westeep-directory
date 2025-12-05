import Link from "next/link";

interface VendorCardProps {
  vendor: {
    id: string;
    name: string;
    city?: string;
    state?: string;
    description?: string;
    tea_types?: string[];
    tags?: string[];
    slug?: string;
  };
}

export function VendorCard({ vendor }: VendorCardProps) {
  const href = vendor.slug ? `/vendors/${vendor.slug}` : `/vendors/${vendor.id}`;

  return (
    <Link href={href}>
      <div className="p-6 bg-main border border-border-soft rounded-lg hover:shadow-lg transition-shadow h-full">
        <h3 className="text-xl font-semibold text-heading mb-2">{vendor.name}</h3>

        {(vendor.city || vendor.state) && (
          <p className="text-sm text-text-muted mb-3">
            {vendor.city}{vendor.city && vendor.state ? ", " : ""}{vendor.state}
          </p>
        )}

        {vendor.description && (
          <p className="text-sm text-text-main mb-4 line-clamp-3">
            {vendor.description}
          </p>
        )}

        {vendor.tea_types && vendor.tea_types.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {vendor.tea_types.slice(0, 3).map((type, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-accent-soft text-accent rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
