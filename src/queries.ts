import { supabase } from "./supabaseClient";

// Fetch all vendors from the "vendors" table
export async function getVendors() {
  const { data, error } = await supabase
    .from("vendors")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching vendors:", error);
    return [];
  }

  return data ?? [];
}

// Fetch featured vendors
export async function getFeaturedVendors() {
  const { data, error } = await supabase
    .from("vendors")
    .select("*")
    .eq("is_featured", true)
    .order("name");

  if (error) {
    console.error("Error fetching featured vendors:", error);
    return [];
  }

  return data ?? [];
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