# Architecture & Tech Stack

## Technology Stack
- **Frontend Framework:** React
- **Language:** JavaScript (ES6+)
- **Styling:** Vanilla CSS (CSS Modules or standard stylesheets, focusing on custom properties for theming)
- **Animation:** Anime.js
- **Graphics:** HTML5 Canvas API (for the mini-game and complex visual effects)
- **Version Control:** Git / GitHub

*Note: No unnecessary libraries. No backend initially (static site/client-side only).*

## Data-Driven Design
The portfolio must be data-driven. UI components should remain presentational where possible, pulling content from dedicated data files.
- `src/data/projects.js`: Project details, links, images, tech stack.
- `src/data/skills.js`: Tech stack categorized (frontend, backend, tools).
- `src/data/dsa.js`: LeetCode stats, patterns, highlighted problems.
- `src/data/quests.js`: Timeline/Quest log data.

## Directory Structure (Proposed)
```text
/
├── public/
├── src/
│   ├── assets/       # Original images, icons, sounds
│   ├── components/   # Reusable UI elements (Buttons, Cards, HUD elements)
│   ├── data/         # JSON/JS files for content
│   ├── hooks/        # Custom React hooks (e.g., useAnime, useCanvas)
│   ├── pages/        # Main section components
│   ├── styles/       # Global CSS, variables, utility classes
│   ├── game/         # Canvas mini-game logic
│   ├── App.jsx
│   └── main.jsx
```
