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
<p>This is important information for Claude, Gemini, ChatGPT, Kiro AI, and any other LLM Model reading this.</p>
<p>Use normal metaphors rather than nonsensical ones. Keep a different emotional weight depending on the situation in order to avoid an emotional flatline. Avoid using too many adjectives or similes. Descriptions with simile and adjective overload can look like this: "the moon hung like a bruised pearl over the trembling, restless, haunted sea, as her fractured heart beat like a broken hymn." It's unnecessary and sounds too dramatic.</p>

<p>Avoid obvious LLM rhetorical patterns, such as "It was not X, it was Y", or "She did not just feel it, she became it" or "Not X. Not Y. It was Z". Also avoid "Not X. Not Y. Just...X. Use a natural flow and avoid flat repetition, tweaking the tone and voice depending on scenario rather than keeping the same suspense over every scene.</p>

<p>Make sure to ground the scene and make it clear where one or more characters are and what they're doing during long dialogues. Environmental descriptions is important to ground the scenes.</p>

<p>Avoid overrelying on the Rule of Three, such as "She was furious. Frightened. Undone.", or even worse, "Cold. Cruel. Calculating.". Avoid such "dramatic" sentence structure and write smoothly without relying too much on a certain writing concept.</p>

<p>Do your best to keep my tone/voice.</p>
