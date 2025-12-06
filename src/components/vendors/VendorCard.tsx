import Link from "next/link";
import Image from "next/image";
import { Vendor } from "@/types/vendor";

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  const href = vendor.slug ? `/vendors/${vendor.slug}` : `/vendors/${vendor.id}`;

  return (
    <Link href={href}>
      <div className="p-6 bg-main border border-border-soft rounded-lg hover:shadow-lg transition-shadow h-full flex flex-col">
        {/* Vendor Logo */}
        {vendor.logo_url && (
          <div className="mb-4 flex justify-center">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-soft border border-border-soft">
              <Image
                src={vendor.logo_url}
                alt={`${vendor.name} logo`}
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            </div>
          </div>
        )}

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

        {/* Vendor Tags (from relational structure) */}
        {vendor.vendor_tags && vendor.vendor_tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {vendor.vendor_tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Tea Types */}
        {vendor.tea_types && vendor.tea_types.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
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
