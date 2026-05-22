/* ============================================
   Chapter 11 — Road / Church Holling / Sevagoth
   ============================================
   Original continuation based on lore doc hints:
   - Road encounter (crowd recognizes hero)
   - Church Holling skill evaluation
   - Meeting Sevagoth and Servafina (Veyrith devils)
   - Canonical ending after the evaluation
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// ON THE ROAD — crowd encounter, Mira's speed
// =====================================================================
window.SCENES.ch11_road = {
  steps: [
    { type: "bg", id: "road" },
    { type: "bgm", id: "bgm_hallway" },
    { type: "narration", text: "Two days of travel. The road was well-maintained, the carriage comfortable, the escorts competent. We stopped at rest stations along the way — brick buildings with slated roofs and no windows, just wide entrances." },
    { type: "narration", text: "By the second stop, I'd grown used to the rhythm: carriage, stretch, eat, carriage again. Mira was quieter than usual, but present. Seraya took notes in a small book whenever we passed something she found interesting, which was often." },

    { type: "narration", text: "As I stepped out of the bathroom building at one stop, a muscle in my neck gave a sharp jump — the tic I got when I felt eyes on me." },
    { type: "narration", text: "Near our parked carriage, a small crowd had gathered. They were agitated, shouting and pressing against the foot soldiers." },
    { type: "say", char: "crowd", text: "Over there! The hero is here!" },
    { type: "narration", text: "My breath hitched. A few broke through and started closing in. Should I run? Hide?" },

    { type: "narration", text: "Before I could decide, a hand clamped down on my wrist and pulled." },
    { type: "show", char: "mira", at: "right", emotion: "neutral" },
    { type: "say", char: "mira", text: "It's me. Come on!" },
    { type: "narration", text: "She dragged me into a nearby alleyway tucked between the bathrooms and a wall. One of the men gave chase but stumbled back as Night shot toward him in a black blur." },
    { type: "narration", text: "Once we came to a stop, I slid against the wall, breathing more raggedly than the situation warranted. Mira stood in front of me, breathing even." },

    { type: "say", char: "erdan", text: "Who the hell were they?" },
    { type: "say", char: "mira", text: "The common people never got introduced to the hero. The nobility did. Things like that spread fast." },
    { type: "say", char: "erdan", text: "That's quite a way to greet me…" },
    { type: "say", char: "erdan", text: "Wait, where's Seraya?" },
    { type: "say", char: "mira", text: "Don't worry, she's busy taking notes of the bathroom layout. By the time she comes out, the crowd will probably have dispersed." },
    { type: "say", char: "erdan", text: "But—" },
    { type: "say", char: "mira", text: "Elves have good hearing. She'll know when it's safe. You worry too much." },
    { type: "say", char: "erdan", text: "Good. I feel like I've gotten enough people into this mess already." },
    { type: "narration", text: "I smiled at her." },
    { type: "say", char: "erdan", text: "Thanks for the help." },
    { type: "say", char: "mira", text: "Don't mention it. It's my duty as your servant." },
    { type: "set", flags: { mira_trust: 1 } },
    { type: "hide", at: "right" },

    { type: "goto", target: "ch11_sevagoth" },
  ],
};


// =====================================================================
// SEVAGOTH AND SERVAFINA — devil encounter on the road
// =====================================================================
window.SCENES.ch11_sevagoth = {
  steps: [
    { type: "bg", id: "road" },
    { type: "bgm", id: "bgm_tense" },
    { type: "narration", text: "After the crowd dispersed and we regrouped, we continued on. But something felt off — that same neck tic from before. Eyes. Somewhere I couldn't see." },
    { type: "narration", text: "As I stepped out of the carriage at the next stop, someone bumped hard into my shoulder from the side. I stumbled a few steps." },

    { type: "narration", text: "He was quite tall — easily twice my size, with a lean and willowy build. His skin was unnaturally pale. Two smooth, pale horns curved outward from the sides of his forehead, framing a large, golden reptilian eye in the center." },
    { type: "narration", text: "Below it, four small colored dots — two blue and two red — were arranged symmetrically on his brow. His normal eyes were solid black, his gaze empty yet piercing." },
    { type: "thought", text: "Wait. Is that the same race as the three-eyed figure from the summoning chamber?" },

    { type: "say", char: "unknown", text: "Ah, apologies, sir. I'm yet to be accustomed to the air of the overworld. The mana is quite thin up here." },
    { type: "narration", text: "His third eye widened suddenly. He leaned forward, well past any reasonable boundary of personal space, studying my face." },
    { type: "say", char: "unknown", text: "Hmm… seems like I wasn't wrong. You should be more careful letting your core leak out mana like that." },
    { type: "narration", text: "I flinched at the closeness. My body jolted, stumbling back. The scar on my chest throbbed." },


    { type: "narration", text: "He held out his hand, the other arm resting behind his back. I instinctively backed away further." },
    { type: "narration", text: "He noticed. He slowly retracted the hand without a word." },
    { type: "say", char: "unknown", text: "You must be the newest hero, correct? The 33rd hero of Aleria, Erdan Kernt." },
    { type: "narration", text: "He placed his other hand over his chest." },
    { type: "say", char: "unknown", text: "My name is Sevagoth Lii. Please, call me Constaelous Sev. In human terms, I would have the same status as a duke. I've been looking for you." },
    { type: "thought", text: "That explains the feeling of being watched earlier." },
    { type: "narration", text: "I caught a shimmering violet mark on the back of his hand — a hexagon with jagged interlapping edges." },
    { type: "thought", text: "That looks similar to my own Servant Pact mark…" },

    { type: "say", char: "erdan", text: "And why were you looking for me? Who… no, if it's not rude to ask, what are you?" },
    { type: "narration", text: "His lips curved upwards in something that wanted to be a smile but couldn't quite commit. The lines around his mouth shifted several times." },
    { type: "say", char: "unknown", text: "What I am? Ah, you have never met a Veyrith before, have you? We are not common aboveground. Especially not within human nations." },


    // --- SERVAFINA APPEARS ---
    { type: "narration", text: "Before he could continue, a figure emerged from behind him and jumped up, grabbing onto his horns from behind with pale fingers." },
    { type: "narration", text: "A young girl in a red, ruffled dress and white high lace collar. Long dark hair spilling in waves. Pointy ears, a third eye, the colored dots — all like Sevagoth but smaller. Her horns were straight and pearlescent rather than curved." },
    { type: "say", char: "unknown", text: "Now now, stop being rude and show yourself properly." },
    { type: "narration", text: "He reached back to pry her off, only to nearly get his hand bitten. An amused laugh escaped him, and he spun to face me with her dangling behind him." },
    { type: "say", char: "unknown", text: "Hero Kernt, allow me to introduce you to the fourteenth daughter of our Fuhmar, Servafina Fuhmar the Left. In human terms, she's something akin to a princess." },
    { type: "say", char: "erdan", text: "L-left?" },

    { type: "narration", text: "The 'princess' sank her teeth into his shoulder. He calmly pulled her off with a wet squelch. She kicked her dangling legs, fists hammering his arm to no effect." },
    { type: "say", char: "erdan", text: "She's certainly… lively." },
    { type: "say", char: "unknown", text: "It's a common side-effect for young Devils in low mana-concentrated environments. Her core is still developing. Without enough mana to balance it out… well, here's the product." },

    { type: "thought", text: "Didn't he say he was a Veyrith? So they're a kind of devil." },


    // --- HIS PROPOSAL ---
    { type: "say", char: "unknown", text: "Now, allow me to get to the point. We have business in this nation, and I need your assistance in stabilizing Miss Servafina." },
    { type: "narration", text: "He looked pointedly at my chest." },
    { type: "say", char: "unknown", text: "You've been having trouble adjusting to foreign mana yourself, correct? This arrangement will ensure that your core expands and adjusts faster, while avoiding a political disaster on our visit." },
    { type: "say", char: "erdan", text: "Wait, how does that work? Why would being near me help her?" },
    { type: "say", char: "unknown", text: "A hero's core leaks excess mana passively. It's the same reason your narelith grows so quickly in your presence. For a young Devil whose core craves ambient mana to stabilize… you are the perfect environment." },

    { type: "thought", text: "So I'm basically a walking mana heater for her?" },
    { type: "thought", text: "And in exchange, my own core gets better at processing mana. That actually sounds… useful." },

    { type: "say", char: "erdan", text: "I'll think about it. We're heading to Church Holling to get my Skills evaluated first." },
    { type: "say", char: "unknown", text: "Excellent. We happen to be heading the same direction. I'll find you there." },
    { type: "narration", text: "He gave a bow — formal, practiced — and turned away. The girl was still attached to his back." },
    { type: "narration", text: "He didn't seem bothered." },
    { type: "set", flags: { met_sevagoth: 1 } },

    { type: "goto", target: "ch11_church_holling" },
  ],
};


// =====================================================================
// CHURCH HOLLING — Skill Evaluation
// =====================================================================
window.SCENES.ch11_church_holling = {
  steps: [
    { type: "bg", id: "courtyard" },
    { type: "bgm", id: "bgm_palace" },
    { type: "narration", text: "Church Holling was a small town — maybe a few hundred buildings clustered around a central square. The church itself was modest by capital standards: white stone walls, a single spire, stained glass that caught the afternoon light." },
    { type: "narration", text: "But inside, beyond the pews and the altar, was what we'd come for: an appraisal device. A relic from an older era, maintained by a pair of Church Knights stationed permanently at the building." },

    { type: "show", char: "seraya", at: "right", emotion: "neutral" },
    { type: "say", char: "seraya", text: "This one is smaller than the capital's device, but it should give us accurate Grade readings for your current Skills. The Church monopolizes these machines — they're bound to the Pope personally through a conditional pact." },
    { type: "say", char: "erdan", text: "Bound to the Pope?" },
    { type: "say", char: "seraya", text: "His Skill — Conditional Multi-Pact Anchor — allows him to form pacts with inanimate objects. Every appraisal device in every major church is an extension of his core, protected by divine contract. Tampering is nearly impossible." },
    { type: "thought", text: "So the Pope's power is basically a DRM system for magic scanners. Cool." },

    { type: "narration", text: "A young priest met us at the inner sanctum — nervous, clearly not used to visitors of our caliber. The Church Knights at the door had straightened when they saw my face." },
    { type: "say", char: "attendant", text: "H-Hero Kernt! We received word from the capital. Please, this way. The device is ready." },

    { type: "narration", text: "The device itself was similar to the Core Seal in the palace, but smaller — a waist-high pillar with a circular indent. The same blue sigils ran through the stone, pulsing with a steady rhythm." },
    { type: "narration", text: "I placed my hand on it." },


    { type: "narration", text: "This time the sensation was gentler. Not a force slamming into my head, but a slow warmth spreading up my arm and settling behind my eyes. Information crystallized — not new Skills, but the measurement of what I already had." },

    { type: "system", text: "[ Dismantle ]  Grade: Budding → Low   ·  Capacity increased slightly" },
    { type: "system", text: "[ Reflex ]  Grade: Budding   ·  No change" },
    { type: "system", text: "[ Appealing Presence ]  Grade: Low   ·  Stable" },
    { type: "system", text: "[ Language Comprehension ]  Grade: Neutral   ·  Fully integrated" },
    { type: "system", text: "— New Skill detected —" },
    { type: "system", text: "[ Mana Sense ]  Grade: Budding  ·  Passive  ·  Faint awareness of nearby mana signatures" },

    { type: "say", char: "erdan", text: "Mana Sense? I didn't… when did I get that?" },
    { type: "say", char: "seraya", text: "It's not uncommon for Skills to unlock without the bearer noticing, especially passive ones. Given everything you've been through — the Somnus Gas, the narelith imprinting, the pact formation — your core has been processing an enormous amount of foreign mana. This might be a natural adaptation." },
    { type: "say", char: "seraya", text: "It also explains why you could see that 'blue path' in the sanctum. That wasn't a hallucination. It was this Skill, forming before you had a name for it." },

    { type: "thought", text: "So I'd been using a Skill I didn't know I had. Typical." },
    { type: "set", flags: { skill_mana_sense: 1 } },


    // --- DISMANTLE UPGRADE NOTE ---
    { type: "say", char: "seraya", text: "Your [Dismantle] has grown as well. 'Low' grade means slightly larger targets, and possibly a fourth daily use soon. The backlash should also diminish with practice." },
    { type: "say", char: "erdan", text: "So breaking Kuger's whip actually made it stronger?" },
    { type: "say", char: "seraya", text: "Pushing a Skill past its comfortable limit is one of the fastest ways to advance its Grade. Painful, but effective." },
    { type: "thought", text: "Great. Growth through suffering. This world's version of 'no pain, no gain' was a lot more literal." },

    { type: "narration", text: "The priest documented everything with shaking hands. Seraya watched over his shoulder, occasionally correcting his notation. Mira stood by the door, arms crossed, watching the Church Knights more than the device." },
    { type: "narration", text: "Night sat at my feet, tail wagging. The narelith chirped from my shoulder, its eye tracking the blue sigils with obvious fascination." },

    { type: "hide", at: "right" },
    { type: "goto", target: "ch11_ending" },
  ],
};


// =====================================================================
// CANONICAL ENDING — after Church Holling
// =====================================================================
window.SCENES.ch11_ending = {
  steps: [
    { type: "bg", id: "road" },
    { type: "bgm", id: "bgm_ending_good" },
    { type: "narration", text: "We stayed in Church Holling for two nights. The inn was modest — creaky floors, thin walls, a shared bath that Seraya refused to use until the building was empty." },
    { type: "narration", text: "In the mornings, I trained with the sword Gux had given me, Mira occasionally correcting my grip without being asked. In the evenings, Seraya read from the guidebook and explained things I'd missed. The narelith grew a centimeter overnight, its fur glossier each day." },
    { type: "narration", text: "Sevagoth appeared on the second day, Servafina still attached to him. He sat across from us at dinner and explained — in that flat, steady voice — what the Underworld was actually like. Not the Church's version. The real one." },

    { type: "narration", text: "On the third morning, we left." },
    { type: "narration", text: "The road stretched east. Beyond Church Holling were larger towns, proper dungeons, and eventually the Federation's border. The Doomsday was still ticking. Kuger was still breathing. Ren-Ro was still out there." },
    { type: "narration", text: "But my Skills were growing. My party was real. And for the first time, I had a direction that wasn't 'wherever the next person pointed.'" },

    { type: "show", char: "mira", at: "left", emotion: "soft" },
    { type: "narration", text: "Mira was walking beside the carriage today, stretching her legs. She glanced back at me through the window, caught me staring, and raised an eyebrow." },
    { type: "say", char: "mira", text: "What?" },
    { type: "say", char: "erdan", text: "Nothing. Just thinking." },
    { type: "say", char: "mira", text: "About?" },
    { type: "say", char: "erdan", text: "About how weird it is that I'm not miserable right now." },
    { type: "narration", text: "She snorted — a small, private sound." },
    { type: "say", char: "mira", text: "Don't jinx it." },

    { type: "hide", at: "left" },
    { type: "wait", ms: 800 },
    { type: "narration", text: "The carriage rolled on. The road kept going. The story wasn't over." },
    { type: "narration", text: "But for now — just for now — it felt like the beginning of something I might actually want to be part of." },

    { type: "ending", id: "canonical" },
  ],
};
