# Design Guidelines: Personal Note-Taking Website with Night Sky Theme

## Design Approach

**Selected Approach:** Reference-Based + Custom Aesthetic  
Drawing inspiration from Notion's clean note organization and Medium's reading experience, enhanced with a distinctive celestial theme as specifically requested.

**Core Principle:** Create an immersive night sky atmosphere that enhances readability while showcasing personality and academic content.

---

## Typography System

**Font Families:**
- Primary (Body/Notes): 'Inter' or 'DM Sans' for excellent readability
- Accent (Headings): 'Space Grotesk' or 'Outfit' for modern, friendly personality
- Code/Technical: 'JetBrains Mono' for code snippets

**Hierarchy:**
- Hero/Page Titles: text-4xl to text-6xl, font-bold
- Section Headers: text-2xl to text-3xl, font-semibold
- Note Titles: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Metadata/Labels: text-sm, font-medium

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component gaps: gap-4 to gap-6
- Section padding: py-16 to py-24
- Container margins: mx-auto with max-w-6xl for content, max-w-prose for reading

**Grid Structure:**
- Homepage note cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Individual notes: Single column, max-w-3xl for optimal reading
- Category sections: Flexible grid with gap-6

---

## Component Library

### Navigation
- Sticky header with backdrop-blur effect
- Logo/site name on left
- Navigation links: Home, Notes, About, Categories
- Minimal, clean design allowing star field to shine through

### Homepage Structure

**Hero Section (50-60vh):**
- Personal introduction with large typography
- Animated subtitle describing the student
- Ethereal floating elements suggesting stars/constellations
- CTA button to explore notes (with backdrop-blur-md)

**Featured Notes Gallery:**
- Card-based layout showcasing 6-9 recent/featured notes
- Each card includes: subject icon, title, preview snippet, date, category tag
- Hover effect with subtle lift (translate-y-1) and glow
- Cards have semi-transparent backgrounds with backdrop-blur

**About Section:**
- Personal bio with photo (circular with glow effect)
- Academic interests and goals
- 2-column layout on desktop: photo/intro left, details right

**Categories Overview:**
- Visual grid of subject categories (Math, Science, Literature, etc.)
- Icon + label + note count for each category
- Click to filter notes

### Individual Note Page

**Note Header:**
- Large title with category badge
- Metadata row: date, reading time, subject
- Breadcrumb navigation

**Note Content:**
- Clean, spacious reading layout with generous margins
- Support for: headings, paragraphs, lists, code blocks, blockquotes, images
- Table of contents sidebar for long notes (fixed on scroll)
- Line spacing: leading-7 to leading-8 for comfortable reading

**Note Footer:**
- Related notes section (3-4 cards)
- Navigation to previous/next note in category

### Category/Filter Page
- Filter bar with subject tabs
- Search input with icon
- Filtered note grid (same card design as homepage)
- Empty state when no notes match

### Reusable Components

**Note Cards:**
- Rounded corners (rounded-xl)
- Semi-transparent background with backdrop-blur-sm
- Subtle border with glow on hover
- Shadow: shadow-lg with enhanced glow effect
- Padding: p-6

**Buttons:**
- Primary CTA: px-6 py-3, rounded-full, font-medium
- Secondary: outlined variant with border
- All buttons: backdrop-blur-md background when over imagery
- No custom hover states (rely on component defaults)

**Tags/Badges:**
- Small rounded pills (rounded-full, px-3 py-1, text-sm)
- Used for categories, subjects, metadata

---

## Animations & Interactions

**Celestial Effects (Minimal, Purposeful):**
- Subtle twinkling star particles in background (CSS animation, not heavy JS)
- Gentle floating animation on hero elements (slow, calm motion)
- Parallax scrolling for background layers (very subtle)

**UI Animations:**
- Card hover: transform, shadow enhancement (duration-300)
- Page transitions: Smooth fade-in on load
- Scroll-triggered fade-ins for note cards (intersection observer)

**Performance Priority:** Keep animations lightweight; stars should be CSS-based sprites or small canvas elements

---

## Images

**Hero Section Image:** NO - Instead use animated star field/constellation graphic or CSS gradient with particle effects

**About Section Image:** YES - Personal photo of the student, circular frame with soft glow effect, approximately 200-300px diameter

**Note Cards:** OPTIONAL - Small subject-related icons or illustrations (64x64px), not photos

**Image Placement Strategy:**
- Avoid heavy images that compete with star theme
- Use illustrations/icons to enhance, not dominate
- Keep focus on typography and content readability

---

## Accessibility Considerations

- Maintain consistent focus states across all interactive elements
- Ensure sufficient contrast despite theme (text must remain readable)
- Provide skip navigation link
- Semantic HTML structure with proper heading hierarchy
- ARIA labels for icon-only buttons
- Keyboard navigation for all interactive elements

---

## Responsive Behavior

**Mobile (< 768px):**
- Single column layouts
- Reduced spacing (py-12 instead of py-24)
- Simplified star effects for performance
- Hamburger menu for navigation

**Tablet (768px - 1024px):**
- 2-column note grids
- Maintained spacing hierarchy
- Optimized star density

**Desktop (> 1024px):**
- 3-column note grids
- Full spacing system
- Rich star field background
- Sidebar table of contents for notes

---

## Icon Library

Use **Heroicons** via CDN for consistent, clean iconography throughout the site.