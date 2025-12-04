import { getFeaturedVendors } from "@/queries";
import { Section } from "../ui/Section";
import { VendorGrid } from "./VendorGrid";

export async function FeaturedVendors() {
  const vendors = await getFeaturedVendors();

  if (vendors.length === 0) {
    return null;
  }

  return (
    <Section
      title="Featured Vendors"
      subtitle="Discover our handpicked selection of exceptional tea vendors"
    >
      <VendorGrid vendors={vendors} />
    </Section>
  );
}
