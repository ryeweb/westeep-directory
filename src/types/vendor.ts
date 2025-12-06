/**
 * Type definitions for vendors and related entities
 */

/**
 * Represents a tag from the vendor_tags table
 */
export interface VendorTag {
  id: string;
  name: string;  // Display name like "Woman Owned"
  slug: string;  // URL-friendly slug like "woman-owned"
}

/**
 * Represents a vendor from the vendors table with all related data
 */
export interface Vendor {
  id: string;
  name: string;
  city?: string;
  state?: string;
  description?: string;
  tea_types?: string[];
  slug?: string;
  is_featured?: boolean;
  logo_url?: string;

  // New relational tags structure
  vendor_tags?: VendorTag[];

  // Old tags array - kept for backward compatibility but not used in display
  tags?: string[];
}
