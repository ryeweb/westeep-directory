import { supabase } from "./supabaseClient";
import { Vendor, VendorTag } from "./types/vendor";

/**
 * Transforms raw Supabase vendor data to our Vendor interface
 * Flattens the vendor_tag_assignments structure to a simple vendor_tags array
 */
function transformVendorData(rawData: any[]): Vendor[] {
  return rawData.map((vendor) => {
    // Debug: Log the raw vendor data structure
    if (process.env.NODE_ENV === "development") {
      console.log("Raw vendor data:", JSON.stringify(vendor, null, 2));
    }

    // Extract tags from the nested structure
    const vendor_tags: VendorTag[] =
      vendor.vendor_tag_assignments
        ?.map((assignment: any) => assignment.vendor_tags)
        .filter((tag: any) => tag !== null && tag !== undefined) ?? [];

    // Debug: Log the extracted tags
    if (process.env.NODE_ENV === "development") {
      console.log(`Vendor ${vendor.name} tags:`, vendor_tags);
    }

    // Remove the nested structure and add the flattened tags
    const { vendor_tag_assignments, ...vendorData } = vendor;

    return {
      ...vendorData,
      vendor_tags,
    };
  });
}

// Fetch all vendors from the "vendors" table with their tags
export async function getVendors(): Promise<Vendor[]> {
  const { data, error } = await supabase
    .from("vendors")
    .select(`
      *,
      vendor_tag_assignments(
        vendor_tags(
          id,
          name,
          slug
        )
      )
    `)
    .order("name");

  if (error) {
    console.error("Error fetching vendors:", error);
    return [];
  }

  // Debug: Log the raw response
  if (process.env.NODE_ENV === "development") {
    console.log("getVendors raw data:", JSON.stringify(data, null, 2));
  }

  return transformVendorData(data ?? []);
}

// Fetch featured vendors with their tags
export async function getFeaturedVendors(): Promise<Vendor[]> {
  const { data, error } = await supabase
    .from("vendors")
    .select(`
      *,
      vendor_tag_assignments(
        vendor_tags(
          id,
          name,
          slug
        )
      )
    `)
    .eq("is_featured", true)
    .order("name");

  if (error) {
    console.error("Error fetching featured vendors:", error);
    return [];
  }

  return transformVendorData(data ?? []);
}

// Fetch featured blog posts
export async function getFeaturedBlogs() {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("is_featured", true)
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching featured blogs:", error);
    return [];
  }

  return data ?? [];
}