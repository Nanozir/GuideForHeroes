# GuideForHeroes

Source manuscript and a browser-based **Visual Novel adaptation** of *A Guide for Heroes (Who'd Rather Not Be)*.

## Layout

- `A (Real) Guide For Heroes.docx` — the worldbuilding bible (lore, races, magic, factions).
- `A Guide for Heroes (Who'd Rather Not Be).docx` — the manuscript (Chapters 1–23 + a non-canon vignette + Volume X intro).
- `game/` — a complete VN adapting the manuscript, with 15 endings, save/load, branching, and hooks for art and music.

## Playing the VN

```bash
cd game
python3 -m http.server 8080
# open http://localhost:8080
```

Or just open `game/index.html` directly in any modern browser.

See [`game/README.md`](game/README.md) for engine details, how to add character art, how to wire in music tracks (Gemini's part), and how to extend the story with new scenes.

## Collaboration model

This project is being built relay-style across three AIs:

- **Kiro** — engine, adaptation, branching logic, all 15 endings.
- **Gemini** — music generation (BGM tracks listed in `game/js/audio.js`).
- **Claude** — continuity passes / additional dialogue / quality checks.

The game runs without art or music — placeholders are stylized gradients and labeled portrait slots. Drop assets into `game/assets/` to upgrade them.
