# Overview

A personal note-taking website with a night sky theme built for showcasing academic notes and learning content. The application features a beautiful celestial-themed interface with a dynamic star field background, implementing a clean and immersive reading experience. Users can browse notes by category, search through content, and create new notes through an intuitive interface. The site is designed to present learning materials in an organized, visually appealing manner while maintaining excellent readability.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. Routes include home (`/`), notes listing (`/notes`), individual note view (`/note/:id`), and about page (`/about`).

**State Management**: TanStack Query (React Query) for server state management, handling data fetching, caching, and synchronization. No global client state management library is used, relying instead on React's built-in hooks and component state.

**UI Components**: Extensive use of Radix UI primitives (45+ components) wrapped with custom styling through shadcn/ui patterns. Components follow the "new-york" style variant with custom theming.

**Styling**: Tailwind CSS with a custom design system featuring:
- Night sky theme with celestial aesthetics
- Custom color palette defined through CSS variables supporting light/dark modes
- Typography using Inter for body text, Space Grotesk for headings, and JetBrains Mono for code
- Responsive breakpoints and spacing system
- Custom hover and active elevation effects

**Form Handling**: React Hook Form with Zod schema validation for type-safe form inputs, particularly for note creation.

## Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API with endpoints for:
- `GET /api/notes` - Retrieve all notes
- `GET /api/notes/category/:category` - Filter notes by category
- `GET /api/notes/search?q=<query>` - Search notes by content
- `GET /api/notes/:id` - Get specific note
- `POST /api/notes` - Create new note (implied by frontend)

**Data Storage**: Currently uses in-memory storage (`MemStorage` class) with sample seed data. The architecture is designed to support database integration through the `IStorage` interface abstraction.

**Development Setup**: Custom Vite middleware integration for HMR (Hot Module Replacement) during development, with production build serving static assets from Express.

**Data Validation**: Shared schema definitions using Drizzle-Zod for consistent validation between client and server.

## Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL with the Neon serverless driver.

**Schema Structure**: Single `notes` table with columns:
- `id`: Primary key (UUID, auto-generated)
- `title`: Text, required
- `content`: Text, required (supports markdown)
- `subject`: Text, required
- `category`: Text, required
- `date`: Timestamp, defaults to current time

**Migration Strategy**: Uses Drizzle Kit for schema migrations stored in `/migrations` directory.

**Note**: The application is architected to support PostgreSQL but currently runs with in-memory storage. The database integration is prepared but not yet connected.

## Design System

**Theme**: Night sky aesthetic with dark backgrounds, starfield animations, and celestial color accents.

**Component Patterns**:
- Card-based layouts with backdrop blur effects
- Category-specific color coding (8 subject categories with unique color schemes)
- Responsive grid layouts (1-column mobile, 2-column tablet, 3-column desktop)
- Smooth transitions and hover effects throughout

**Typography Hierarchy**:
- Hero titles: 4xl-7xl font sizes
- Section headers: 2xl-3xl
- Note titles: xl-2xl
- Body text: base-lg with relaxed line height

**Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support through Radix UI primitives.

# External Dependencies

## Third-Party UI Libraries

**Radix UI**: Unstyled, accessible component primitives for dialogs, dropdowns, tabs, tooltips, and 40+ other interactive elements. Provides WCAG-compliant accessibility features out of the box.

**shadcn/ui**: Component patterns and styling conventions built on top of Radix UI, configured through `components.json` with the "new-york" style variant.

**Class Variance Authority (CVA)**: Utility for creating variant-based component APIs with TypeScript support.

**Tailwind Merge & CLSX**: Utilities for conditional class merging and conflict resolution in Tailwind CSS.

## Data Fetching & Validation

**TanStack Query**: Client-side data fetching, caching, and synchronization with configurable stale times and refetch behaviors.

**Zod**: Runtime type validation for forms and API requests/responses.

**React Hook Form**: Form state management with built-in validation.

**@hookform/resolvers**: Integration layer between React Hook Form and Zod validators.

## Date Handling

**date-fns**: Date formatting and manipulation with `zh-TW` locale support for Traditional Chinese date displays.

## Database & ORM

**Drizzle ORM**: TypeScript-first ORM with PostgreSQL dialect configuration.

**@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database platform.

**Drizzle Kit**: CLI tool for generating and running database migrations.

**connect-pg-simple**: PostgreSQL session store for Express (included but session management not yet implemented).

## Development Tools

**Vite**: Build tool providing fast HMR, optimized production builds, and ESM-based development.

**TypeScript**: Static type checking with strict mode enabled.

**PostCSS & Autoprefixer**: CSS processing pipeline for Tailwind.

**ESBuild**: Fast JavaScript bundler used by Vite and for server-side bundling.

## Replit-Specific Integrations

**@replit/vite-plugin-runtime-error-modal**: Development error overlay.

**@replit/vite-plugin-cartographer**: Code mapping for Replit IDE integration.

**@replit/vite-plugin-dev-banner**: Development environment indicator.

## Icon Library

**Lucide React**: Modern icon set with tree-shakeable imports, used extensively throughout the UI.

## Other Utilities

**wouter**: Minimalist router for React (2KB alternative to React Router).

**nanoid**: Unique ID generation for various application needs.

**cmdk**: Command menu component (included but not actively used in current implementation).