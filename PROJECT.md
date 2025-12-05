# WeSteep Directory Project Documentation

## Project Overview

**WeSteep** is a curated directory of quality tea vendors and their stories. Built with Next.js, TypeScript, and Supabase, it provides a beautiful, easy-to-navigate platform for tea enthusiasts to discover vendors and read tea-related content.

**Current Version:** 0.1.0 (MVP Phase)
**Status:** Early development - core features implemented, ready for expansion

---

## Tech Stack

### Frontend
- **Next.js 16.0.7** - React framework with App Router (latest version)
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS framework for styling

### Backend & Database
- **Supabase** - PostgreSQL database and authentication platform
- **@supabase/supabase-js ^2.86.0** - JavaScript client library

### Development Tools
- **ESLint 9** - Code linting and quality
- **PostCSS 4** - CSS preprocessing for Tailwind

### Deployment
- **Vercel** - Hosting and continuous deployment
- **GitHub** - Version control and collaboration

---

## Project Structure

```
westeep-directory/
├── public/                          # Static assets
│   └── WeSteep_Logo_Horizontal.png  # Main branding logo
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── page.tsx                 # Home page (/)
│   │   ├── layout.tsx               # Root layout with Header/Footer
│   │   ├── globals.css              # Global styles & theme
│   │   └── directory/
│   │       └── page.tsx             # Vendor directory (/directory)
│   │
│   ├── components/                  # React components
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── Container.tsx        # Max-width wrapper
│   │   │
│   │   ├── home/                    # Home page components
│   │   │   └── Hero.tsx             # Hero banner with CTA
│   │   │
│   │   ├── vendors/                 # Vendor-related components
│   │   │   ├── FeaturedVendors.tsx  # Featured vendors section
│   │   │   ├── VendorGrid.tsx       # Grid layout wrapper
│   │   │   └── VendorCard.tsx       # Individual vendor card
│   │   │
│   │   ├── blog/                    # Blog-related components
│   │   │   ├── FeaturedStories.tsx  # Featured stories section
│   │   │   ├── BlogGrid.tsx         # Grid layout wrapper
│   │   │   └── BlogCard.tsx         # Individual blog card
│   │   │
│   │   └── ui/                      # Reusable UI components
│   │       └── Section.tsx          # Section wrapper component
│   │
│   ├── supabaseClient.ts            # Supabase client initialization
│   └── queries.ts                   # Database query functions
│
├── Configuration files
    ├── package.json                 # Dependencies and scripts
    ├── tsconfig.json                # TypeScript config
    ├── next.config.ts               # Next.js config
    ├── postcss.config.mjs           # PostCSS/Tailwind config
    └── eslint.config.mjs            # ESLint config
```

---

## Database Schema

The project uses **Supabase PostgreSQL** with two main tables:

### Table: `vendors`
Stores information about tea vendors in the directory.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Unique identifier |
| `name` | string | Vendor name |
| `city` | string | City location |
| `state` | string | State/province |
| `description` | string | Description of vendor |
| `tea_types` | string[] | Array of tea types offered (e.g., "Black", "Green", "Oolong") |
| `tags` | string[] | Array of tags/categories |
| `slug` | string | URL-friendly slug for detail pages |
| `is_featured` | boolean | Whether vendor appears on home page |

**Example data:**
```json
{
  "id": "123",
  "name": "Mountain Tea Co.",
  "city": "Portland",
  "state": "OR",
  "description": "Specialty high-mountain oolong teas",
  "tea_types": ["Oolong", "Green"],
  "tags": ["Organic", "Direct Trade"],
  "slug": "mountain-tea-co",
  "is_featured": true
}
```

### Table: `blog`
Stores blog posts and tea-related stories.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Unique identifier |
| `title` | string | Blog post title |
| `excerpt` | string | Short preview/summary |
| `cover_image` | string | Image URL for blog post cover |
| `slug` | string | URL-friendly slug for detail pages |
| `status` | enum | Publication status ("published" or draft) |
| `created_at` | timestamp | Creation date |
| `published_at` | timestamp | Publication date |
| `is_featured` | boolean | Whether blog appears on home page |

---

## Features Implemented

### Pages
- **Home Page (`/`)** - Landing page with hero, featured vendors, and featured stories
- **Directory Page (`/directory`)** - Complete listing of all tea vendors

### Components & Functionality

1. **Navigation Header** (`src/components/layout/Header.tsx`)
   - Logo with link to home
   - Navigation links: Home, Directory, Blog
   - Responsive design

2. **Hero Section** (`src/components/home/Hero.tsx`)
   - Large welcome banner
   - Call-to-action button linking to directory
   - Warm, inviting design

3. **Featured Vendors** (`src/components/vendors/FeaturedVendors.tsx`)
   - Displays vendors where `is_featured = true`
   - Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
   - Shows vendor name, location, tea types, and tags
   - Links prepared for future detail pages

4. **Featured Stories** (`src/components/blog/FeaturedStories.tsx`)
   - Displays up to 3 featured blog posts
   - Shows cover image, title, excerpt, publication date
   - Links prepared for future blog detail pages

5. **Vendor Directory** (`src/app/directory/page.tsx`)
   - Lists all vendors from database
   - Same card design as featured vendors
   - Alphabetically sorted by vendor name

6. **Footer** (`src/components/layout/Footer.tsx`)
   - Links to key pages
   - "Become a Partner" link
   - Copyright information

### Data Fetching

**Query Functions** (`src/queries.ts`):
- `getVendors()` - Fetches all vendors ordered by name
- `getFeaturedVendors()` - Fetches only featured vendors
- `getFeaturedBlogs()` - Fetches up to 3 published featured blog posts

**Architecture:**
- Uses Next.js Server Components (async/await)
- Direct Supabase queries from components
- Server-side data fetching (no client-side API calls)
- No real-time subscriptions currently

---

## Design System

### Color Palette
The project uses a warm, tea-inspired color scheme:

```css
--color-main: #FFF5DE              /* Cream background */
--color-soft: #FAEED3              /* Light cream */
--color-border-soft: #E2D3BC       /* Soft tan borders */
--color-text-main: #1F1F1F         /* Dark text */
--color-text-muted: #5B5145        /* Muted brown */
--color-heading: #322820           /* Dark brown headings */
--color-primary: #B79E7B           /* Warm tan/brown (buttons) */
--color-primary-hover: #9F8563     /* Darker tan on hover */
--color-accent: #3A4238            /* Dark olive/green */
--color-accent-soft: #D5DCCF       /* Soft green/gray */
```

**Why this palette:** The colors evoke warmth, comfort, and natural tea tones - creating an inviting atmosphere for tea enthusiasts.

### Typography
- Primary font: Geist (sans-serif)
- Monospace font: Geist Mono
- Fallback: Arial, Helvetica, sans-serif

### Responsive Design
- Mobile-first approach
- Grid layouts adjust automatically:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

---

## Environment Variables

Required in `.env.local` (NOT committed to git):

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

**Why `NEXT_PUBLIC_` prefix:** This makes the variables available to the browser. Supabase's anonymous key is designed to be public - it's safe to expose in the client.

**Where they're used:** `src/supabaseClient.ts` reads these variables to initialize the Supabase client.

---

## Authentication & Security

### Current State
- **No user authentication** - All features are public
- Uses Supabase's anonymous (public) key
- All data is publicly readable
- No protected routes or admin features

### Security Measures
- `.gitignore` includes `.env.local` to prevent committing secrets
- Environment variables for sensitive configuration
- Supabase Row-Level Security (RLS) can be added later

### Future Considerations
- Add Supabase Auth for vendor/admin login
- Implement Row-Level Security policies
- Create admin dashboard for managing vendors/blogs
- Add vendor self-service portal

---

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## Known Issues & Technical Debt

1. **Missing Pages:**
   - `/blog` - Blog listing page (linked in nav but not implemented)
   - `/vendors/[slug]` - Individual vendor detail pages
   - `/blog/[slug]` - Individual blog post detail pages
   - `/become-a-partner` - Partner signup page (linked in footer)

2. **No Search/Filter:**
   - Vendor directory shows all vendors with no search capability
   - No filtering by tea type, location, or tags

3. **No Pagination:**
   - All vendors and blogs load at once
   - Could cause performance issues with large datasets

4. **No Error Handling UI:**
   - Query functions return empty arrays on error
   - No user-friendly error messages

5. **Missing Image Assets:**
   - Hero component references `/images/hero.jpg` which may not exist
   - No placeholder images for vendors/blogs without cover images

6. **No Form Validation:**
   - No input sanitization visible
   - Future forms will need validation

7. **No Analytics:**
   - No tracking of page views or user behavior

---

## Upcoming Features (Planned)

1. **Individual Detail Pages:**
   - Vendor detail pages showing full information, contact, hours, etc.
   - Blog post detail pages with full article content

2. **Blog Listing Page:**
   - `/blog` route with all published posts
   - Filtering by category/tag

3. **Search & Filtering:**
   - Search vendors by name, location, tea type
   - Filter by tags, featured status, region

4. **Vendor Authentication:**
   - Allow vendors to claim and manage their listings
   - Add/edit vendor information
   - Upload images

5. **Admin Dashboard:**
   - Manage all vendors and blog posts
   - Approve vendor claims
   - Moderate content

6. **Enhanced Blog Features:**
   - Rich text content
   - Categories and tags
   - Author profiles
   - Comments (maybe)

7. **Maps Integration:**
   - Show vendor locations on a map
   - Search by proximity

---

## Important "Why" Decisions

### Why Next.js App Router?
The App Router (vs Pages Router) offers better performance through Server Components and is the modern, recommended approach for new Next.js projects. It allows us to fetch data directly in components without separate API routes.

### Why Supabase?
Supabase provides:
- PostgreSQL database (reliable, SQL-based)
- Built-in authentication system (for future use)
- Real-time capabilities (if needed later)
- Easy to use for beginners
- Generous free tier

### Why TypeScript?
TypeScript catches errors early and provides better autocomplete/documentation. While it adds complexity, it prevents common bugs and makes the codebase more maintainable as it grows.

### Why Server Components?
Most of our data fetching happens server-side, which means:
- Faster initial page loads
- Better SEO (content is rendered on server)
- More secure (database credentials never exposed to browser)
- Simpler code (no useState/useEffect for initial data)

### Why Simple Component Organization?
Components are organized by feature (layout, vendors, blog, ui) rather than by type. This makes it easier to find related code and understand what each component does.

---

## Recent Changes

### 2024-12-05: Project Documentation
- Created `CLAUDE.md` - AI assistant configuration and working principles
- Created `PROJECT.md` - Comprehensive project documentation

### 2024 (Recent Commits):
- **Next.js Security Update** - Updated to Next.js 16.0.7 to fix security vulnerability
- **Color Scheme Update** - Implemented warm, tea-inspired color palette
- **Header Layout** - Updated navigation header design
- **MVP Implementation** - Initial home page and directory structure

---

## Getting Started (For New Developers)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd westeep-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local` (if example exists)
   - Add your Supabase URL and key
   - Get these from your Supabase project settings

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

---

## Resources & Links

- **Next.js Documentation:** https://nextjs.org/docs
- **Supabase Documentation:** https://supabase.com/docs
- **Tailwind CSS Documentation:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Vercel Deployment Guide:** https://vercel.com/docs

---

## Questions or Improvements?

As this is a learning project, questions and suggestions are always welcome! Document new features and changes in this file as the project grows.

**Last Updated:** 2025-12-05
