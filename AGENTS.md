# AGENTS.md

## Project
Build a single-page interactive digital museum exhibit titled “Excavating the Junk Boat.”

The site is for an archaeology/imagination class project about the Junk Boat playground at Lincoln Square Park in Oakland Chinatown. The site should feel like a playful, colorful, polished museum exhibit, not a generic school project.

## Operating style
Before making major changes:
- State assumptions briefly.
- Use the simplest approach that solves the task.
- Do not add speculative features.
- Do not over-engineer.
- Make surgical changes when revising existing code.
- Keep files and data easy for Allen to edit later.
- If something is unclear and would change the product direction, ask before implementing.
- If the uncertainty is minor, make a reasonable assumption and continue.

## Verification
For implementation tasks:
- Define what success means.
- Run `npm run lint` and `npm run build` when relevant.
- Fix errors before reporting completion.
- Mention any warnings or unresolved issues.

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Static site data stored locally
- No backend
- No database
- No authentication
- No unnecessary dependencies unless clearly justified

## Design direction
- Bright daytime/playground colorful
- Fun, polished, immersive
- Realistic but polished Junk Boat visual direction
- Museum-style labels and exhibit cards
- Slightly personal voice, but still formal/curated
- Avoid dark cyberpunk styling
- Avoid generic SaaS landing page styling
- Avoid making it look like a children’s toy website; it should be playful but still museum-like

## Core site structure
Single-page scrolling website with these sections:
1. Hero / entrance
2. Exhibit statement
3. Interactive Junk Boat centerpiece
4. Digital collection / archive of 9 traces
5. Then and now: 1966 to 2026
6. Personal archaeology reflection
7. Closing “so what?” reflection

## Main interaction
The main interactive section should show a large Junk Boat image with 9 clickable hotspots. Hovering on a hotspot should reveal the trace title. Clicking opens an artifact panel with title, image, museum label, and interpretive note.

Use placeholder image paths for now:
- /images/hero-junk-boat.png
- /images/boat-render.png
- /images/artifacts/artifact-01.jpg through artifact-09.jpg
- /images/archive/junk-boat-1966-01.jpg
- /images/archive/junk-boat-2026-01.jpg

## Data structure
Create local data in `src/data/artifacts.ts`.
Each artifact should include:
- id
- title
- location
- image
- label
- interpretation
- hotspot position x/y as percentages

Use generic placeholder titles for now:
1. Worn Rail
2. Hidden Corner
3. Playground Surface
4. Repaired Panel
5. Bow of the Boat
6. Stairway
7. Surrounding Court
8. Archival Photograph
9. Object Left Behind

## Coding expectations
- Build reusable components.
- Keep data easy to edit.
- Make responsive layouts for desktop and mobile.
- Use clean, readable code.
- Remove unused imports or variables introduced by your own changes.
- Do not refactor unrelated code.
- Every changed line should serve the current task.