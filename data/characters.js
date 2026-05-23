/* ============================================
   Character definitions
   ============================================
   Every character has:
   - id: short string used in scenes
   - name: display name
   - color: speaker name color (optional, defaults to gold)
   - revealExempt: if true, name always shows (no reveal needed)
   - portraits: { expression: "path/to/image.png" }
        If empty/undefined, a placeholder slot will be used.

   To add real art later, drop PNGs into:
     game/assets/images/characters/<id>/<expression>.png
   and update the portraits map below.
*/

window.CHARACTERS = {
  erdan: {
    name: "Erdan",
    color: "#e6c068",
    revealExempt: true,
    description: "The 33rd Hero. Black, slim, glasses, short afro hair. Reluctant. Sarcastic. Cargo pants and a red polo.",
    portraits: {
      // neutral: "assets/images/characters/erdan/neutral.png",
      // worried: "assets/images/characters/erdan/worried.png",
      // smiling: "assets/images/characters/erdan/smiling.png",
      // shocked: "assets/images/characters/erdan/shocked.png",
    },
  },

  mira: {
    name: "Mira",
    color: "#b48cff",
    description: "Tenebrim, petite, silver hair, one broken horn, light-brown skin, scars across chest and abdomen. Quiet, observant, deeply loyal once she warms up.",
    portraits: {
      // neutral: "assets/images/characters/mira/neutral.png",
      // worried: "assets/images/characters/mira/worried.png",
      // soft: "assets/images/characters/mira/soft.png",
      // angry: "assets/images/characters/mira/angry.png",
    },
  },

  seraya: {
    name: "Seraya",
    color: "#d8baff",
    description: "Elven priestess of the Crimson Sun Order. Pale skin, long silver hair, violet eyes. Naive yet knowledgeable, easily flustered.",
    portraits: {
      // neutral: "assets/images/characters/seraya/neutral.png",
      // blushing: "assets/images/characters/seraya/blushing.png",
      // serious: "assets/images/characters/seraya/serious.png",
    },
  },

  elisabeth: {
    name: "Queen Elisabeth",
    color: "#e6a05a",
    description: "Iron Queen of Elysandria. Curly red hair, amber eyes. Composed, calculating, weary.",
    portraits: {},
  },

  mernel: {
    name: "Mernel",
    color: "#bca48c",
    description: "Court Mage. Old man, graying hair, slightly hunched. Patient mentor.",
    portraits: {},
  },

  kina: {
    name: "Kina",
    color: "#f0a08a",
    description: "Blonde mage assistant. Playful, dramatic.",
    portraits: {},
  },

  gux: {
    name: "Gux",
    color: "#7ac08a",
    description: "Lizardman, Commander of the Draconid Vanguard. Boisterous, sincere apologetic streak.",
    portraits: {},
  },

  ren: {
    name: "Ren",
    color: "#ffa8d8",
    description: "Equar, Second Division Mage. Femboy-coded, prejudiced against lizardmen.",
    portraits: {},
  },

  marcel: {
    name: "Marcel",
    color: "#d4d4a8",
    description: "Head priest. Polite, gentle, but a Church loyalist.",
    portraits: {},
  },

  kuger: {
    name: "Kuger",
    color: "#a04848",
    description: "Grand Priest of the Crimson Sun Order's JOAT branch. Cage-mask. Cold, fanatical.",
    portraits: {},
  },

  tenebrim: {
    name: "Tenebrim Warrior",
    color: "#c08a5a",
    description: "Brown-skinned tenebrim with crimson tribal markings. Mira's brother -- though she doesn't remember him.",
    portraits: {},
  },

  ren_ro: {
    name: "Hooded Elf",
    color: "#88a8a0",
    description: "Tall elf assassin. Long silver hair, leather scarf, mana-silent rifle.",
    portraits: {},
  },

  torren: {
    name: "Torren",
    color: "#5a98c0",
    description: "Tetrabrachian adventurer. Four arms, dark skin, lavender eyes. Cheerful.",
    portraits: {},
  },

  guthethya: {
    name: "Guthethya",
    color: "#c87850",
    description: "Tenebrim adventurer. White ponytail, brown skin, red markings. Sharp, direct.",
    portraits: {},
  },

  fiero: {
    name: "Fiero",
    color: "#fff0a8",
    description: "Count's son. White hair, citrine eyes, oily charm.",
    portraits: {},
  },

  night: {
    name: "Night",
    color: "#3a4860",
    description: "Dark Clan Fenrir pup. Black fur, white streaks, crimson eyes.",
    portraits: {},
  },

  nare: {
    name: "Nare",
    color: "#ff9ec0",
    description: "Regressed narelith. Bat-like puffball, single white eye, dark fur. Imprinted on Erdan.",
    portraits: {},
  },

  // Generic / unnamed speakers
  guard: { name: "Guard", color: "#a0a0b0", revealExempt: true, portraits: {} },
  servant: { name: "Servant", color: "#a0a0b0", revealExempt: true, portraits: {} },
  noble: { name: "Noble", color: "#c8a878", revealExempt: true, portraits: {} },
  crowd: { name: "Voice", color: "#888899", revealExempt: true, portraits: {} },
  attendant: { name: "Attendant", color: "#a0a0b0", revealExempt: true, portraits: {} },
  knight: { name: "Knight", color: "#b8b8c8", revealExempt: true, portraits: {} },
  herald: { name: "Herald", color: "#d8c068", revealExempt: true, portraits: {} },
  pope: { name: "Pope Almert", color: "#f0e8d8", revealExempt: true, portraits: {} },
  unknown: { name: "???", color: "#666666", revealExempt: true, portraits: {} },
  vision: { name: "\u2014", color: "#a888d0", revealExempt: true, portraits: {} },
};
