# AI Assistant Guidelines for Abhiram Fitness Coach Website

## Project Overview
This is a React-based fitness coach website for Abhiram Nair, focused on transformation coaching. The site uses a modern, responsive design with carefully crafted animations and theming.

## Architecture & Key Concepts

### Theme System
- Uses React Context API for theme management (`ThemeProvider.tsx` and `ThemeContext`)
- Custom hook `useTheme()` provides access to theme state and setter
- Consistent dark/light theming across components with three primary brand colors:
  - `electric-blue`: Primary color for dark theme (200, 100%, 70%)
  - `amber-gold`: Accent color for both themes, primary for light theme (43, 96%, 58%/65%)
  - `strong-green`: Secondary color used in both themes (142, 71%, 30%/45%)

### Component Structure
- `HeroSection.tsx`: Main landing component with staggered fade-in animations
- `AboutSection.tsx`: Timeline-based journey visualization with scroll animations
- `Navbar.tsx`: Responsive navigation with mobile/desktop variants

### Styling Patterns
- Tailwind CSS with custom color classes defined in `index.css`
- Custom animations with keyframes (fadeIn, pulse-slow)
- Responsive design using mobile-first approach with different layouts
- Gradients are used extensively, with different patterns for dark/light themes
- Custom font families include 'ZT Formom' and 'Eyes for Serif1'

## Common Patterns & Conventions

### Animation Pattern
```tsx
<element className="opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 0.5s forwards"}}>
  Content here
</element>
```

### Theme-conditional Styling
```tsx
className={`${
  theme === 'dark' 
    ? 'text-electric-blue bg-zinc-900/75' 
    : 'text-amber-gold bg-slate-50/90'
}`}
```

### Section Layout Structure
Components typically follow this structure:
1. Container with theme-conditional background
2. Content wrapper with responsive padding/margins
3. Responsive variants (mobile/desktop) with conditional rendering

## Development Workflows

### Theme Testing
Always test components in both light and dark themes to ensure proper contrast and visual consistency.

### Animation Timing
When adding new animated elements, ensure proper sequencing with existing animations:
- Hero section: Elements animate in sequence from 0.3s to 2.7s
- Maintain appropriate delay gaps (typically 0.3s between elements)

### Mobile Considerations
Always implement and test both mobile and desktop variants:
- Use the `md:` breakpoint as the primary transition point
- Mobile layouts should stack vertically and center content
- Desktop layouts often use left alignment and horizontal arrangements
