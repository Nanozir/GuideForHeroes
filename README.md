# GuideForHeroes

Source manuscript and a browser-based **Visual Novel adaptation** of *A Guide for Heroes (Who'd Rather Not Be)*. The game is at the repo root so it deploys to any static web host (GitHub Pages, Vercel, Netlify, Cloudflare Pages) with no build step or config.

## Layout

```
.
├── index.html         Game entry point
├── css/               Engine + UI styles
├── js/                Engine, save system, audio, UI, game loop
├── data/              Characters, locations, endings, scene scripts
├── tests/             Static graph walker + Playwright runtime test
├── assets/            (Drop art and music here once available)
├── lore/              Source manuscript and worldbuilding bible (.docx)
└── README.md
```

## Playing locally

Open `index.html` directly in any modern browser. That's it.

For background music and consistent localStorage saves, run a tiny local server:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploying

**GitHub Pages** (recommended for this repo):
1. Repo Settings → Pages → Build and deployment → Source: `Deploy from a branch`.
2. Branch: `main`, Folder: `/ (root)`.
3. Save. The site goes live at `https://<user>.github.io/GuideForHeroes/`.

**For Vercel / Netlify / Cloudflare Pages**: connect the repo, leave build command empty, output directory `.` (root). It just works.

See [`game-README.md`](game-README.md) for engine details, how to add character art, how to wire in music tracks (Gemini's part), and how to extend the story with new scenes.

## Collaboration model

This project is being built relay-style across three AIs:

- **Kiro** — engine, adaptation, branching logic, all 15 endings.
- **Gemini** — music generation (BGM tracks listed in `js/audio.js`).
- **Claude** — continuity passes / additional dialogue / quality checks.

The game runs without art or music — placeholders are stylized gradients and labeled portrait slots. Drop assets into `assets/` to upgrade them.

## Collaboration model

This project is being built relay-style across three AIs:

- **Kiro** — engine, adaptation, branching logic, all 15 endings.
- **Gemini** — music generation (BGM tracks listed in `game/js/audio.js`).
- **Claude** — continuity passes / additional dialogue / quality checks.

The game runs without art or music — placeholders are stylized gradients and labeled portrait slots. Drop assets into `game/assets/` to upgrade them.
