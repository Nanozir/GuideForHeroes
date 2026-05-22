/* ============================================
   Chapter 7 — Vault, Narelith, Canals, Sniper
   ============================================
   Adapts manuscript Ch11-18. Torren reunion,
   relic vault, narelith imprinting, canal escape,
   Ren-Ro sniper attack, Mira's rescue, stabbing.
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// ESCAPE INTRO — Torren reunion, vault door
// =====================================================================
window.SCENES.ch07_escape_intro = {
  steps: [
    { type: "bg", id: "sanctum_hall" },
    { type: "bgm", id: "bgm_chase" },
    { type: "narration", text: "We ran. Seraya led, guiding us through corridors she knew by heart. The shouting behind us faded, replaced by our own ragged breathing and the slap of our boots on grated metal." },
    { type: "narration", text: "She skidded to a halt in front of a heavy iron door, pulling out a key. Inside was a small storage room — crates, dusty shelves, empty flasks." },
    { type: "narration", text: "She pressed her hand against a loose cobblestone. It sank inward with a click, and the wall shuddered apart, revealing a glowing runed platform." },
    { type: "say", char: "seraya", text: "This is called a Gate. You imbue it with mana, and it transports you to another Gate in the network. The destination is random, but it'll be within the sanctum." },
    { type: "say", char: "erdan", text: "Random? That sounds risky." },
    { type: "say", char: "seraya", text: "It's the quickest way. The Order won't be able to follow easily." },

    { type: "narration", text: "We stepped onto the platform. Light surged. The pull came straight from my core — a brief, nauseating yank — and then we were somewhere else." },
    { type: "shake" },

    { type: "narration", text: "We stumbled into a low, circular vault. The air was thick and sweet, shimmering with a faint milky mist." },
    { type: "narration", text: "Torren was already there, his lower arms braced against a collapsed metal door, his upper two pummeling it with tired but efficient blows. His hair was greasy with blood." },

    { type: "show", char: "torren", at: "left", emotion: "wounded" },
    { type: "say", char: "torren", text: "Hero! 'Bout time. This damn thing's jammed, and there's something alive scratching on the other side." },
    { type: "show", char: "seraya", at: "right", emotion: "tense" },
    { type: "say", char: "seraya", text: "That leads to the relic vaults. Nothing in there should be alive." },
    { type: "narration", text: "The scratching grew louder and sharper. Claws on stone." },


    // --- DISMANTLE THE LOCK ---
    { type: "narration", text: "Near the handle was a heavy, fist-sized lockplate etched with faint runes. I placed my hand over it, closed my eyes, and focused." },
    { type: "thought", text: "Please don't be enchanted. Please don't be enchanted." },
    { type: "system", text: "[ Dismantle ]  used  ·  0 remaining today" },
    { type: "narration", text: "A sharp crack. The lockplate flaked and split along invisible seams, crumbling into dull grey dust. The runes flickered and died." },
    { type: "narration", text: "Torren didn't waste a second. He braced all four hands and heaved. The door slid inward with a groan of stressed metal." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },

    // --- THE VAULT / NARELITH ---
    { type: "bg", id: "vault" },
    { type: "narration", text: "The room was larger than expected, lit by crystal lamps set into high walls. Shelves crammed with broken swords, crystalline orbs, a rusted gauntlet that glowed from the inside." },
    { type: "narration", text: "And in the center stood a large, transparent cylinder." },
    { type: "narration", text: "Inside it was a small figure. About the size of a large cat, all sharp angles and matted dusk-purple fur. It had one large, white eye dominating its face. Bat wings — torn in places — wrapped tightly around itself. It was shivering." },

    { type: "narration", text: "A small sign at the base read:" },
    { type: "system", text: "Specimen: Narelith (Regressed). Acquired: 31st Hero, Yosuke Minato. Status: Contained. Do not feed mana. Core instability post-donor separation. Regression to Phase 1 confirmed." },

    { type: "narration", text: "The narelith uncurled and slammed itself against the glass. Again. And again. Each impact left a new fracture spreading across the surface." },
    { type: "narration", text: "Its single eye was fixed on me." },
    { type: "sfx", id: "glass_break" },
    { type: "narration", text: "One final throw of its body, and the cylinder shattered. Shards rained down. The creature tumbled out, shaking off crystal fragments." },
    { type: "narration", text: "It rushed toward me — fast, low. My [Reflex] screamed at me to dodge, but my feet were stuck." },
    { type: "narration", text: "It reached my leg and bit down on my calf." },
    { type: "narration", text: "I braced for pain, but… it barely hurt. More like a puppy teething. It clung to my pant leg, shivering, its single eye staring up at me." },

    { type: "show", char: "seraya", at: "right", emotion: "soft" },
    { type: "say", char: "seraya", text: "It's trying to imprint. But it's regressed — it shouldn't be able to form a new bond unless…" },
    { type: "say", char: "kuger", text: "(distant) Seal the vault! They've released the specimen!" },


    // --- CHOICE: what to do with the narelith ---
    { type: "choice", prompt: "The creature clings to your leg, shivering. Kuger's men are coming.", options: [
      { text: "Feed it a sliver of mana. Take it with you.", target: "ch07_take_nare", flags: { nare_bond: 5 } },
      { text: "Feed it MORE. Force the growth. Make it useful fast.", target: "ch07_force_nare", flags: { nare_bond: 8, lust: 2, force_growth: 1 }, tag: "→ Nare exploitation (#8/#12)" },
      { text: "Leave it. It's a Crimson Sun problem, not yours.", target: "ch07_leave_nare", flags: { nare_bond: -10 } },
    ]},
  ],
};

// =====================================================================
// TAKE NARE (CANONICAL)
// =====================================================================
window.SCENES.ch07_take_nare = {
  steps: [
    { type: "thought", text: "The sign said DO NOT FEED MANA. But it was shaking. It looked abandoned." },
    { type: "thought", text: "Just like Mira had been." },

    { type: "say", char: "erdan", text: "Hey. It's okay." },
    { type: "narration", text: "I lowered my hand. My palm glowed faintly — the same thread-of-mana feeling from the book oath, this time directed down my arm and into the little creature." },
    { type: "narration", text: "Its eye widened. A tiny, pathetic chirp escaped it. The bite on my calf released as it scrambled up my chest, pressing its whole small body against me." },
    { type: "set", flags: { has_nare: 1 } },

    { type: "show", char: "torren", at: "left", emotion: "calm" },
    { type: "say", char: "torren", text: "Holy shit. You just tamed it." },
    { type: "say", char: "kuger", text: "(distant) That creature is a failed experiment! He left it because its core became unstable without him — a weapon without a trigger. Give it back, Hero!" },

    { type: "shake" },
    { type: "narration", text: "Heavy impacts on the door. A ram. Torren braced against the frame." },
    { type: "narration", text: "The narelith chirped, turned in my arms, and pointed one clawed finger at the back wall." },
    { type: "say", char: "seraya", text: "It's a maintenance hatch — but it's sealed from outside." },
    { type: "narration", text: "Torren lowered a shoulder and charged the wall. Once. Twice. On the third hit, the stone buckled inward." },
    { type: "narration", text: "We squeezed through into the dark." },
    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "goto", target: "ch07_canal_choice" },
  ],
};


// =====================================================================
// FORCE-FEED NARE (seeds Ending #8 or #12)
// =====================================================================
window.SCENES.ch07_force_nare = {
  steps: [
    { type: "narration", text: "I lowered my hand. My palm glowed. I'd read enough isekai to know the shortcut." },
    { type: "narration", text: "I poured mana into it. More than felt natural. The creature shuddered, then chirped — happy, almost drunk on it. I poured more. Its fur smoothed. It got bigger. It curled tighter into me, and the warmth in my chest doubled." },
    { type: "set", flags: { has_nare: 1, force_growth: 2, nare_yandere_seed: 1 } },
    { type: "thought", text: "This might be exactly what I needed. A perfect, devoted, ever-growing companion. All for me." },
    { type: "narration", text: "Torren cracked the back wall. We slipped through. The narelith curled against my throat, breathing in time with me." },
    { type: "goto", target: "ch07_canal_choice" },
  ],
};

// =====================================================================
// LEAVE NARE
// =====================================================================
window.SCENES.ch07_leave_nare = {
  steps: [
    { type: "narration", text: "It clung to my pants. I shook my leg. It chittered — hurt." },
    { type: "narration", text: "I shook harder. It dropped." },
    { type: "narration", text: "It looked up at me with that single white eye and made a sound I'd hear in my dreams for a long time after." },
    { type: "narration", text: "Torren was already breaking the wall. Seraya was halfway through. I went after them and didn't look back." },
    { type: "set", flags: { abandoned_nare: 1 } },
    { type: "goto", target: "ch07_canal_choice" },
  ],
};


// =====================================================================
// CANAL ESCAPE — shaft, water, which way?
// =====================================================================
window.SCENES.ch07_canal_choice = {
  steps: [
    { type: "bg", id: "sewers" },
    { type: "narration", text: "Behind the wall was a vertical shaft with a ladder bolted to the stone. The air smelled of stagnant water and rust." },
    { type: "narration", text: "I climbed down one-handed — the other arm occupied by the narelith (if I still had it) or just trembling from the adrenaline. The ladder shuddered under our combined weight. Rust flakes pattered into the void below." },
    { type: "narration", text: "My foot missed a rung. I dropped six inches before my hand locked and my other foot found purchase. My heart hammered loud enough that I was sure they could hear it above and below." },

    { type: "narration", text: "At the bottom, icy water soaked my legs to the thigh. A brick-lined canal stretched in both directions. Dim light filtered from grates far above — street level." },

    { type: "show", char: "torren", at: "left", emotion: "wounded" },
    { type: "say", char: "torren", text: "My party's safehouse is in the merchant quarter, upriver. It's the smartest move." },

    { type: "narration", text: "He was probably right. But something tugged at me — a faint, glowing blue line threading the air ahead, only I could see. Leftover from the gas? A hallucination? It pointed downriver." },
    { type: "thought", text: "Don't trust hallucinations. Trust the veteran." },
    { type: "thought", text: "But the blue line had shown me the maintenance hatch. It had found the narelith." },

    { type: "choice", prompt: "Which way?", options: [
      { text: "Trust Torren. Upriver to the safehouse.", target: "ch07_safehouse_sniper" },
      { text: "Trust the path only you can see. Downriver.", target: "ch07_safehouse_sniper" },
      { text: "\"Wait — both feel wrong. We need to surface somewhere else.\"", target: "ch07_third_way", flags: { speak_up: 1 } },
    ]},
  ],
};

window.SCENES.ch07_third_way = {
  steps: [
    { type: "say", char: "erdan", text: "Wait. Both directions feel wrong. We need to climb back up — find a hatch in the public canals. Somewhere he wouldn't expect." },
    { type: "say", char: "torren", text: "…Got reasoning to back that?" },
    { type: "say", char: "erdan", text: "Just trust me. Please." },
    { type: "narration", text: "Torren stared at me a long moment. Then he nodded, once. We climbed." },
    { type: "narration", text: "We surfaced two streets before the safehouse. Torren was less wounded by then. And Mira had time to find us." },
    { type: "set", flags: { speak_up: 2, mira_trust: 2 } },
    { type: "goto", target: "ch07_safehouse_sniper" },
  ],
};


// =====================================================================
// SNIPER ATTACK — Ren-Ro
// =====================================================================
window.SCENES.ch07_safehouse_sniper = {
  steps: [
    { type: "bg", id: "alley" },
    { type: "narration", text: "We surfaced in a narrow alley between two tall stone warehouses. Crates stacked against one wall. Cobbled street visible at the far end. For a heartbeat, the city felt almost normal." },

    { type: "sfx", id: "rifle" },
    { type: "shake" },
    { type: "narration", text: "A low whine cut through the air. Something hot and wet splashed across my cheek." },
    { type: "narration", text: "Torren staggered. One of his upper arms dropped limp — a neat hole the width of my thumb had punched clean through the meat of his bicep." },
    { type: "sfx", id: "rifle" },
    { type: "shake" },
    { type: "narration", text: "The second shot took his thigh. He buckled with a choked grunt." },
    { type: "say", char: "torren", text: "Sniper. High angle. Rooftop, probably two hundred paces. Bastard's using something with real punch." },

    { type: "say", char: "torren", text: "Down! …I'll draw fire. You two run for the spice exchange. Don't stop." },
    { type: "say", char: "erdan", text: "You're bleeding out. You can't—" },
    { type: "say", char: "torren", text: "I've had worse. You're the one they want alive. Get moving or die. Your choice, hero." },

    { type: "narration", text: "Before I could argue, he jumped up — all four arms spread wide, daring the shooter. Two more shots followed him as he veered sideways." },
    { type: "narration", text: "Seraya grabbed my wrist. We ran." },
    { type: "hide", at: "left" },


    // --- WAREHOUSE ---
    { type: "bg", id: "warehouse" },
    { type: "narration", text: "We burst into a small courtyard behind the spice exchange. Drying herbs hung from lines, the sharp smell of cumin in the air. Seraya shoved open a side door, and we stumbled into dim storage rooms that smelled of dust and old fabric." },
    { type: "narration", text: "She barred the door with a heavy beam and slumped against the wall, breathing hard. I slid down beside her." },

    { type: "wait", ms: 600 },
    { type: "narration", text: "Minutes passed. Only our breathing and distant city noise filtering through cracks in the walls." },
    { type: "narration", text: "Then the narelith — if I still had it — lifted its head. Single eye fixed on the far wall. A single, low chirp." },
    { type: "narration", text: "A warning." },

    { type: "shake" },
    { type: "sfx", id: "glass_break" },
    { type: "narration", text: "A high window exploded inward in a shower of glass." },
    { type: "narration", text: "A tall figure dropped through — cloaked in streaked grey-green, long silver hair tied back, face half-hidden by a wrapped leather scarf. In his hands was a long, slender weapon of dark wood and steel. The barrel was already at his shoulder." },

    { type: "show", char: "ren_ro", at: "left", emotion: "calm" },
    { type: "say", char: "seraya", text: "Tro-Ko… kael—" },
    { type: "narration", text: "Her voice cracked on the second syllable. Silver light sputtered from her palm — a thin, fractured dome that lasted exactly one heartbeat before shattering outward in sparks." },
    { type: "narration", text: "She cried out, staggering as the backlash ripped through her." },
    { type: "narration", text: "The elf didn't speak. He worked the bolt again. He aimed at me." },


    // --- MIRA'S RESCUE ---
    { type: "narration", text: "Before he could fire, a black shape burst from the wall behind him." },
    { type: "show", char: "mira", at: "right", emotion: "fierce" },
    { type: "show", char: "night", at: "center", emotion: "snarl" },
    { type: "narration", text: "Mira — through the goddamn wall — slammed shoulder-first into the elf's side. The impact sent him stumbling. The rifle shot went wild, punching a hole through the ceiling." },
    { type: "narration", text: "Right behind her, Night charged in, clamping his jaws around the elf's leg and yanking hard with a guttural snarl." },

    { type: "narration", text: "The elf hissed in pain, twisted, and drove the butt of the rifle into Night's skull. The pup whimpered but refused to back off." },
    { type: "narration", text: "Mira planted herself between me and the elf, fists clenched tight. Her breathing came hard, but her eyes held no hesitation." },

    { type: "narration", text: "The elf straightened, assessing. His gaze flicked toward the broken window — an exit — then back to me." },
    { type: "say", char: "ren_ro", text: "Tsk… Minato's leftovers. Seems his premonition was right after all." },

    { type: "narration", text: "He worked the bolt one more time." },
    { type: "say", char: "seraya", text: "Tro-Ko sur!" },
    { type: "narration", text: "A thin silver whip of light lashed toward the rifle barrel. The elf jerked back — it sliced clean through the wooden stock instead. Sparks flew as the ruined rifle clattered to the ground in two pieces." },
    { type: "narration", text: "He dropped into a crouch, hand reaching for a knife at his belt." },


    // --- THE STABBING ---
    { type: "narration", text: "Mira lunged. Her fist connected with cold steel — the knife sank into her arm. He swept her legs. She hit the ground but grabbed his sleeve and yanked him with her." },
    { type: "narration", text: "A tangle of limbs, silver hair, and a flash of metal—" },
    { type: "shake" },
    { type: "sfx", id: "blade" },
    { type: "narration", text: "White-hot pain exploded in my chest." },

    { type: "narration", text: "I looked down. A throwing knife. Handle sticking out of me, centimeters from my heart. Cold. Wrong." },
    { type: "narration", text: "I dropped to my knees, then slid sideways until my shoulder hit the wall." },
    { type: "say", char: "erdan", text: "(weak) Nngh… ahh…!" },
    { type: "narration", text: "The sounds were pathetic — small, nothing like the dramatic complaints I usually made. Just a choked, bubbling wheeze as blood sprayed my lips with every breath." },
    { type: "say", char: "mira", text: "Erdan!" },

    { type: "narration", text: "The elf wrenched free of Mira's grip. He looked at me once — no satisfaction, just confirmation — then vanished through the broken window." },
    { type: "narration", text: "Mira scrambled toward me, hands shaking, pressing against my chest." },
    { type: "narration", text: "I tried to answer her. All that came was another wet cough." },

    { type: "fade", color: "black" },
    { type: "bgm_stop" },
    { type: "wait", ms: 1000 },
    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "hide", at: "center" },

    // Route to sniper outcome hub (checks lust/abandoned flags)
    { type: "goto", target: "hub_sniper_outcome" },
  ],
};
