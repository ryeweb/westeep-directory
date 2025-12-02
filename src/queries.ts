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