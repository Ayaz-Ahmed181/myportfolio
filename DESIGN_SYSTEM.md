# Design System

## Core Aesthetics
- **Style:** Original tactical digital interface with agile web-inspired motion.
- **Borders & Motifs:** Thin connecting lines, animated SVG paths, geometric brackets, subtle crosshair motifs.
- **Surfaces:** Glass panels (glassmorphism), occasional diagonal cuts, subtle grain/noise overlays.
- **Layouts:** Asymmetrical card layouts.

## Color Palette
- **Background:** Deep dark slate/black (e.g., `#0A0A0C` or `#111111`).
- **Surface:** Semi-transparent dark (e.g., `rgba(20, 20, 25, 0.6)`).
- **Primary Text:** Crisp white/off-white (`#F8F8F8`).
- **Secondary Text:** Muted grey (`#8B8B8B`).
- **Accent:** Subtle Red (e.g., `#E63946` or `#FF4655` - tactical/gaming feel).

## Typography
- **Headings:** Bold, geometric, sans-serif (e.g., Rajdhani, Roboto, or Inter).
- **Body:** Clean, legible sans-serif (e.g., Inter, Open Sans).
- **Monospace/Tech details:** JetBrains Mono or Fira Code for code snippets/HUD elements.

## UI Components
- **Buttons:** Angled edges, occasional diagonal cuts, hover fill effects.
- **Cards:** Asymmetrical glass panels, subtle red highlights on hover.
- **HUD Elements:** Small system labels, coordinate-like decorative metadata, geometric brackets `[ ]`.
- **Accents:** Restrained red highlights (avoid excessive neon or glowing effects).

## Motion & Animation (Anime.js)
Animation must enhance the interface rather than obstruct content.

**Hero Sequence**
- Boot sequence: 1.5–2.5 seconds maximum.
- Text enters using staggered animation.
- Avoid blocking the user after the sequence completes.

**Scroll Reveals**
- Sections reveal as they enter the viewport.
- Use opacity + transform + subtle clipping.
- Avoid excessive parallax.

**Cards & Interactions**
- Fast hover response.
- Slight translation/scale.
- Border/glow changes should be subtle.

**Web Transitions**
- Use thin SVG paths and Anime.js.
- Motion should feel agile and directional.
- Avoid literal spider-web imagery.

**Accessibility**
- Respect `prefers-reduced-motion`.
- When reduced motion is enabled, remove decorative movement while preserving content and navigation.

**Performance**
- Avoid continuously running animations when elements are not visible.
- Avoid large canvas effects unless necessary.
- Prefer transform and opacity animations.
