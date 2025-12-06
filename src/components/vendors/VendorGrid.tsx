import { VendorCard } from "./VendorCard";
import { Vendor } from "@/types/vendor";

interface VendorGridProps {
  vendors: Vendor[];
}

export function VendorGrid({ vendors }: VendorGridProps) {
  if (vendors.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        No vendors found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}
