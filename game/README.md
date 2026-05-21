# A Guide for Heroes (Who'd Rather Not Be) — Visual Novel

A browser-based visual novel adapting the lore of *A Guide for Heroes (Who'd Rather Not Be)*. Pure HTML/CSS/JS, no build step required.

## Quick start

Open `index.html` in any modern browser. That's it.

If you want background music or saves to persist across origins, serve it via a tiny local web server:

```bash
# from the /game directory
python3 -m http.server 8080
# then open http://localhost:8080
```

## What's included

- **Custom VN engine** — dialogue, branching choices, flag/affinity tracking, save/load to localStorage (9 slots + auto), backlog, settings.
- **Faithful adaptation** of Chapters 1–10 (the canonical content), condensed for VN pacing while keeping Erdan's voice.
- **15 endings**, including the canonical "Open Road" and the 14 alternate routes the original author wrote prompts for.
- **Hooks for art and music**, ready to be filled in by Gemini (music) and any image source you provide.

## Adding character art

Drop PNGs into `assets/images/characters/<id>/<expression>.png` and update the `portraits` map in `data/characters.js`:

```js
erdan: {
  name: "Erdan",
  portraits: {
    neutral: "assets/images/characters/erdan/neutral.png",
    worried: "assets/images/characters/erdan/worried.png",
    smiling: "assets/images/characters/erdan/smiling.png",
    shocked: "assets/images/characters/erdan/shocked.png",
  },
},
```

Until you do, the game shows a labeled placeholder slot — playable, just unstyled.

### Recommended portrait set per character

For the main cast, the script currently uses these expressions. Wherever an expression is referenced but not registered, the engine falls back to `neutral`, then to a placeholder.

- **erdan**: neutral, worried, smiling, shocked, sheepish
- **mira**: blank, neutral, soft, fierce, panic, tired, elegant
- **seraya**: neutral, soft, tense, blushing, elegant, focused
- **elisabeth**: neutral, tired, weary
- **mernel**: neutral, stern, soft
- **kina**: playful, neutral
- **gux**: neutral, alarm
- **ren**: neutral, focused
- **kuger**: neutral, calm
- **tenebrim**: feral, broken
- **night**: happy, snarl
- **nare**: soft

## Adding background art

Drop a JPG into `assets/images/backgrounds/<id>.jpg` and add an `image` field in `data/locations.js`:

```js
throne_room: {
  name: "Throne Room",
  image: "assets/images/backgrounds/throne_room.jpg",
  style: "background: ...",   // fallback gradient still useful
},
```

If `image` is set it takes precedence; otherwise the gradient `style` is used as a stylized stand-in.

## Adding music (Gemini's part)

Drop MP3s into `assets/audio/bgm/<id>.mp3` and `assets/audio/sfx/<id>.mp3`. The list of expected tracks (and their moods, ready to feed to a music model) lives in `js/audio.js` under `window.BGM_TRACKS`.

Suggested tracks for Gemini:

| ID | Mood |
|---|---|
| `title` | Bittersweet, hopeful, gentle piano with strings |
| `bgm_warp` | Dissonant tunnel — brief intro |
| `bgm_palace` | Stately court strings |
| `bgm_throne` | Heavy, queenly, undercurrent of tension |
| `bgm_room` | Quiet fingerpicked guitar |
| `bgm_mira` | Solo cello, soft chimes — Mira's theme |
| `bgm_seraya` | Ethereal, light vocals — Seraya's theme |
| `bgm_battle` | Driving percussion, dread |
| `bgm_chase` | Frantic, sniper sequence |
| `bgm_sanctum` | Industrial pipe organ + clockwork |
| `bgm_kuger` | Fanatical choral, slowly escalating |
| `bgm_hallucination` | Time-stretched piano, layered voices |
| `bgm_garden` | Soft harp, breath of relief |
| `bgm_ball` | Formal waltz with subtle dread |
| `bgm_recovery` | Faint, drifting piano |
| `bgm_ending_good` | Bittersweet hopeful |
| `bgm_ending_bad` | Quiet defeated piano fade |

If a file isn't there yet, the game silently skips it. No crashes.

## Story structure

```
Prologue → Ch01 (Summoning) → Ch02 (Mira) → Ch03 (Palace) →
Ch04 (Attack) → Ch05 (Sanctum) → Ch06 (Seraya) →
Ch07 (Escape) → Ch08 (Recovery + Queen) → Ch09 (Ball) →
Ch10 (Departure / Canonical Ending)
```

## Branch endings (per the author's prompts)

| # | Name | Trigger |
|---|---|---|
| 0 | The Open Road (canonical) | Make the canonical choices |
| 1 | The Easy Yes | Accept the straps in Ch02 — dies to the elf in Ch07 |
| 2 | The Iron Queen's Hero | Choose to stay in Ch08 |
| 3 | Cattle of the Crimson Sun | Don't fight Kuger in Ch06 |
| 4 | The Broken Hero | Pick "exhausted, stop trying" in Ch04 |
| 5 | The Wrong Wolf | Swap out Night in Ch03 |
| 6 | Take Me Home | Sabotage on Day 1 in the Prologue |
| 7 | The Capital's Ghost | Pick "trust nobody" in the temptation hub |
| 8 | Comfort Until Collection | Force-feed Nare in Ch07 |
| 9 | The Last Yes | Pick "say yes to everyone" in the temptation hub |
| 10 | Min-Maxer's Collapse | Pick "speedrun" in the temptation hub |
| 11 | The Pampered Figurehead | Pick "court the Queen" in the temptation hub |
| 12 | Bedroom Eternity | Force-feed Nare twice |
| 13 | Cheat Code | Pick "find Rei" in the temptation hub |
| 14 | The False Ticket | Pick "Lumenari relics" in the temptation hub |

The "temptation hub" is reached by picking **"I need time to think"** in Ch08's audience with the Queen.

## Adding more story

Each scene file lives in `data/scenes/`. A scene is a JS object registered on `window.SCENES`:

```js
window.SCENES.my_new_scene = {
  steps: [
    { type: "bg", id: "garden" },
    { type: "bgm", id: "bgm_garden" },
    { type: "say", char: "mira", text: "Master, you idiot." },
    { type: "thought", text: "Yeah." },
    { type: "choice", options: [
      { text: "Apologize.", target: "another_scene", flags: { mira_trust: 1 } },
      { text: "Mumble defensively.", target: "yet_another", flags: { mira_trust: -1 } },
    ]},
  ],
};
```

Then add a `<script>` tag for the file in `index.html`. All step types and flags are documented at the top of `js/engine.js`.

## File layout

```
game/
├── index.html
├── css/
│   ├── main.css      (layout, screens, dialogue)
│   └── ui.css        (modals, save slots, controls)
├── js/
│   ├── engine.js     (scene runner, step handlers)
│   ├── ui.js         (DOM controller)
│   ├── save.js       (localStorage)
│   ├── audio.js      (BGM/SFX hooks)
│   └── game.js       (entry point)
├── data/
│   ├── characters.js (cast definitions)
│   ├── locations.js  (backgrounds)
│   ├── endings.js    (15 endings registry)
│   └── scenes/       (one file per chapter + branches.js)
└── assets/
    ├── images/       (drop your art here)
    └── audio/        (drop Gemini's tracks here)
```

## Credits

- Original lore and characters by the author of *A Guide for Heroes (Who'd Rather Not Be)*.
- Engine and adaptation by Kiro.
- Music (planned) by Gemini.
- Continuity passes (planned) by Claude.

The game is unfinished — it covers the canonical chapters that exist in the source manuscript, plus all 14 alternate-route endings. As more story is written, more scenes can be added without touching the engine.
