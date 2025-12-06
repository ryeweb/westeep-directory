# Pull Request: Add vendor logos and relational tag system

**Base branch:** `main`
**Compare branch:** `claude/add-vendor-logos-01UuQf8RN5oHJUcAr1ZfZAKv`

---

## Summary

- ✅ Add vendor logo display to home page featured vendors and directory page
- ✅ Migrate from array-based tags to relational tag system (vendor_tags → vendor_tag_assignments → vendor_tags)
- ✅ Configure Next.js to load images from Supabase storage
- ✅ Create centralized TypeScript types for Vendor and VendorTag
- 🔍 Add debug logging to troubleshoot vendor tags display issue

## Changes Made

### Type Definitions
- Created `src/types/vendor.ts` with `Vendor` and `VendorTag` interfaces
- Centralized type definitions used across all vendor components

### Database Queries
- Updated `getVendors()` and `getFeaturedVendors()` to join through relational tag structure
- Added `transformVendorData()` helper to flatten nested Supabase response
- Queries now fetch `logo_url` and related tags via LEFT JOIN

### UI Components
- **VendorCard**: Added logo display (96px square, centered), shows relational tags with `tag.name`
- **VendorGrid**: Updated to use centralized `Vendor` type
- **Directory Page**: Added logo display (80px, left-aligned), displays tags from relational structure

### Configuration
- Configured Next.js `images.remotePatterns` to allow Supabase storage URLs (*.supabase.co)
- Disabled Next.js telemetry collection

### Debug Logging
- Added comprehensive logging in queries and components to track vendor tag data flow
- Logs will help identify why tags aren't displaying (if issue persists)

## Database Schema

**New structure (in use):**
- `vendor_tags` table: Contains tag definitions with `id`, `name` (display), `slug`
- `vendor_tag_assignments` junction table: Links vendors to tags

**Old structure (kept for backward compatibility):**
- `vendors.tags` text array column (not displayed in UI)

## Testing

- ✅ TypeScript compilation passes with no errors
- ✅ Logo URLs are used exactly as stored (no URL transformation)
- 🔍 Vendor tags require testing on live site with debug logs

## Test Plan

- [ ] Verify vendor logos display correctly on home page
- [ ] Verify vendor logos display correctly on directory page
- [ ] Check browser console/server logs for tag query debug output
- [ ] Confirm tags display with proper names (e.g., "Woman Owned" not "woman_owned")
- [ ] Test on multiple vendors with different tag configurations

## Notes

Debug logging is enabled in development mode to help troubleshoot the vendor tags display. Once tags are confirmed working, debug logs can be removed in a follow-up commit.

---

## To Create PR

### Option 1: Use GitHub CLI
```bash
gh pr create --title "Add vendor logos and relational tag system" --base main --head claude/add-vendor-logos-01UuQf8RN5oHJUcAr1ZfZAKv --body-file PR_DETAILS.md
```

### Option 2: Use GitHub Web UI
Visit: https://github.com/ryeweb/westeep-directory/pull/new/claude/add-vendor-logos-01UuQf8RN5oHJUcAr1ZfZAKv

Then copy the content from "Summary" onwards into the PR description.
