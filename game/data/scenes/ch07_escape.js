/* ============================================
   Chapter 7 — Escape, vault, hallucinations, sniper
   ============================================ */

window.SCENES.ch07_escape_intro = {
  steps: [
    { type: "bg", id: "sanctum_hall" },
    { type: "bgm", id: "bgm_chase" },
    { type: "narration", text: "We ran. Smoke, dust, shouts behind us. Kuger's voice over them all, ordering containment." },
    { type: "narration", text: "Seraya led, panting, dragging me by the wrist." },

    { type: "show", char: "torren", at: "left", emotion: "wounded" },
    { type: "say", char: "torren", text: "Hero! 'Bout time. This damn thing's jammed, and there's something alive scratching on the other side." },
    { type: "show", char: "seraya", at: "right", emotion: "tense" },
    { type: "say", char: "seraya", text: "That… that leads to the relic vaults. Nothing in there should be alive." },

    { type: "narration", text: "Torren battered the buckled door. Inside something was scratching — sharp, frantic claws on stone. The kind of sound that made the hairs on my neck stand straight." },

    { type: "narration", text: "I placed my hand over the lockplate. Closed my eyes. Tried not to think about the backlash." },
    { type: "system", text: "[ Dismantle ]  used  ·  0 uses remaining today" },
    { type: "narration", text: "The metal flaked. The runes died. Torren heaved the door inward." },
    { type: "hide", at: "left" },
    { type: "hide", at: "right" },

    { type: "bg", id: "vault" },
    { type: "narration", text: "Inside: shelves of broken swords, crystalline orbs, a rusted gauntlet that glowed faintly. And in the center of the room, a glass cylinder. Hunched in the center of it was a small figure, all sharp angles and matted dusk-purple fur. One large white eye on its face. Bat wings, torn." },
    { type: "narration", text: "A regressed narelith. Donated by Yosuke Minato. Donated and abandoned." },

    { type: "narration", text: "It hurled itself against the glass. Once. Twice. The third time, the cylinder shattered." },
    { type: "sfx", id: "glass_break" },
    { type: "narration", text: "It rushed at me — but didn't bite. It clung to my pant leg, shivering, its single eye staring up at me." },

    { type: "show", char: "seraya", at: "right", emotion: "soft" },
    { type: "say", char: "seraya", text: "It's… it's trying to imprint. But it's regressed. It shouldn't be able to form a new bond unless…" },
    { type: "say", char: "kuger", text: "(distant) Seal the vault! They've released the specimen!" },

    { type: "choice", prompt: "What do you do with the narelith?", options: [
      { text: "Feed it a sliver of mana. Take it with you.", target: "ch07_take_nare", flags: { nare_bond: 5 } },
      { text: "Take it — and feed it constantly. Force the growth.", target: "ch07_force_nare", flags: { nare_bond: 8, lust: 2, force_growth: 1 }, tag: "→ Nare exploitation (#8)" },
      { text: "Leave it. It's a Crimson Sun problem.", target: "ch07_leave_nare", flags: { nare_bond: -10 } },
    ]},
  ],
};

window.SCENES.ch07_take_nare = {
  steps: [
    { type: "narration", text: "The sign said DO NOT FEED MANA. But it was shaking. It looked abandoned." },
    { type: "narration", text: "Just like Mira had been." },

    { type: "say", char: "erdan", text: "Hey. It's okay." },
    { type: "narration", text: "I lowered my hand. My palm glowed faintly. I pictured the thread of mana from the book oath, this time down my arm and into the little creature." },
    { type: "narration", text: "Its eye widened. A tiny chirp. The biting pressure on my pants vanished as it scrambled up my chest and pressed into me, breathing too fast." },
    { type: "show", char: "nare", at: "center", emotion: "soft" },
    { type: "set", flags: { has_nare: 1 } },

    { type: "say", char: "torren", text: "Holy shit. You just tamed it." },
    { type: "say", char: "kuger", text: "(distant) That creature is a failed experiment! In our care it could have been stabilized — in yours it is a walking disaster!" },

    { type: "shake" },
    { type: "narration", text: "Heavy impacts on the door. They had a ram. Torren braced. Seraya searched the back of the vault." },

    { type: "narration", text: "The narelith chittered, pointed at the back wall with a clawed finger. Mira and her instincts had nothing on this little thing." },
    { type: "say", char: "seraya", text: "It's a maintenance hatch! Sealed from outside." },
    { type: "narration", text: "Torren slammed his shoulder into it. Once. Twice. The wall cracked. The third time, it gave." },
    { type: "narration", text: "We squeezed through into the dark." },
    { type: "hide", at: "right" },
    { type: "hide", at: "center" },

    { type: "goto", target: "ch07_canal_choice" },
  ],
};

window.SCENES.ch07_force_nare = {
  steps: [
    { type: "narration", text: "I lowered my hand. My palm glowed. I'd read enough cursed isekai novels to know the shortcut." },
    { type: "narration", text: "I poured. More than the book said to. The little creature shuddered, then chirped — happy, drunk on it. I poured more. It got bigger. Its fur smoothed. It curled tighter into me, and the warmth in my chest doubled." },
    { type: "set", flags: { has_nare: 1, force_growth: 2, nare_yandere_seed: 1 } },
    { type: "show", char: "nare", at: "center", emotion: "soft" },
    { type: "thought", text: "This… this might be exactly what I needed. A perfect, devoted, ever-growing companion. All for me." },

    { type: "narration", text: "Torren cracked the back wall. We slipped through into the dark. The narelith curled against my throat, breathing in time with me." },
    { type: "hide", at: "right" },
    { type: "hide", at: "center" },

    { type: "goto", target: "ch07_canal_choice" },
  ],
};

window.SCENES.ch07_leave_nare = {
  steps: [
    { type: "narration", text: "It clung to my pants. I shook my leg. It chittered, hurt." },
    { type: "narration", text: "I shook harder. It dropped." },
    { type: "narration", text: "It looked up at me with that single white eye, and made a sound I'd hear in my dreams for a long time after." },
    { type: "narration", text: "Torren was already breaking the back wall. Seraya was halfway through. I went after them and didn't look back." },
    { type: "set", flags: { abandoned_nare: 1 } },
    { type: "goto", target: "ch07_canal_choice" },
  ],
};

window.SCENES.ch07_canal_choice = {
  steps: [
    { type: "bg", id: "sewers" },
    { type: "bgm", id: "bgm_chase" },
    { type: "narration", text: "A vertical shaft. A ladder bolted to wet stone. The smell of stagnant water and rust." },
    { type: "narration", text: "I climbed down with one hand. The other clutched the narelith — still trembling — to my chest." },
    { type: "narration", text: "We splashed into icy water at the bottom. Tunnel walls slick with slime. A weird blue-glowing path threaded the air ahead of me, only mine to see — leftover from the gas, leftover from whatever was wrong with my eyes now." },

    { type: "show", char: "torren", at: "left", emotion: "wounded" },
    { type: "show", char: "seraya", at: "right", emotion: "tense" },
    { type: "say", char: "torren", text: "We'll go down — they'll expect us to go up, toward the palace. My party's safehouse is in the merchant quarter, upriver." },

    { type: "thought", text: "Up the river, his way. Or down the river — the way the weird blue line in my head wants to go. The line that isn't there." },
    { type: "thought", text: "Don't trust hallucinations. Trust the veteran." },

    { type: "choice", prompt: "Which way?", options: [
      { text: "Trust Torren. Upriver to the safehouse.", target: "ch07_safehouse_sniper", flags: { paranoia: 1 } },
      { text: "Trust the path only you can see. Downriver.", target: "ch07_safehouse_sniper", flags: { paranoia: 1 } },
      { text: "(Speak up. Demand we go a third way — your gut says trap.)", target: "ch07_third_way", flags: { speak_up: 1, paranoia: 0 } },
    ]},
  ],
};

window.SCENES.ch07_third_way = {
  steps: [
    { type: "say", char: "erdan", text: "Wait. Both directions are wrong. We need to climb back up — find a hatch in the public canals." },
    { type: "say", char: "torren", text: "…Got reasoning to back that?" },
    { type: "say", char: "erdan", text: "Just trust me. Please." },
    { type: "narration", text: "Torren stared at me a long moment. Then he nodded, once. We climbed." },
    { type: "narration", text: "We came up two streets earlier than the safehouse. The sniper had set up at the safehouse. The sniper found us anyway, eventually — but Torren was less wounded by then, and Mira had time to find us." },
    { type: "set", flags: { speak_up: 2, mira_trust: 2 } },
    { type: "goto", target: "ch07_safehouse_sniper" },
  ],
};

window.SCENES.ch07_safehouse_sniper = {
  steps: [
    { type: "bg", id: "alley" },
    { type: "bgm", id: "bgm_chase" },
    { type: "narration", text: "We surfaced in a narrow alley between two warehouses. Crates, cobbles, the smell of coal smoke. For a heartbeat, the city felt almost normal." },

    { type: "sfx", id: "rifle" },
    { type: "shake" },
    { type: "narration", text: "A low whine cut through the air. Something hot and wet splashed across my cheek." },
    { type: "say", char: "torren", text: "(stunned) …" },
    { type: "narration", text: "Torren's upper arm dropped limp. A neat hole the width of my thumb had punched clean through the meat of his bicep." },
    { type: "shake" },
    { type: "sfx", id: "rifle" },
    { type: "narration", text: "The second shot took his thigh. Sniper. Two streets away. Mana-silent rifle. Ren-Ro." },

    { type: "say", char: "torren", text: "Down! …I'll draw fire. You two run for the spice exchange." },
    { type: "say", char: "erdan", text: "You're bleeding out. You can't—" },
    { type: "say", char: "torren", text: "I've had worse. You're the one they want alive. Get moving, hero." },

    { type: "narration", text: "Then he was up, all four arms spread, drawing the next shot. Seraya's hand closed around my wrist. We ran." },
    { type: "hide", at: "left" },

    { type: "bg", id: "warehouse" },
    { type: "narration", text: "We burst into a small storage room behind the spice exchange. Seraya barred the door with a heavy beam and slumped against the wall, breathing hard." },

    { type: "wait", ms: 800 },
    { type: "narration", text: "The narelith lifted its head. Single eye fixed on the far wall. A single, low chirp. A warning." },
    { type: "shake" },
    { type: "sfx", id: "glass_break" },
    { type: "narration", text: "A high window exploded inward. A tall figure dropped through — long silver hair tied back, leather scarf, streaked grey-green cloak. The rifle in his hands was already at his shoulder." },

    { type: "show", char: "ren_ro", at: "left", emotion: "calm" },
    { type: "say", char: "seraya", text: "Tro-Ko… kael—" },
    { type: "narration", text: "Her voice cracked. Silver light sputtered from her palm in a fractured dome that lasted exactly one heartbeat before shattering outward." },
    { type: "shake" },
    { type: "narration", text: "He worked the bolt. He aimed at me." },

    { type: "narration", text: "A black blur and a silver one — Mira through the wall, Night at her heels. Mira drove her shoulder into him; Night locked his jaws on the assassin's leg. The shot went wild and punched a hole through the ceiling instead of my heart." },
    { type: "show", char: "mira", at: "right", emotion: "fierce" },
    { type: "show", char: "night", at: "center", emotion: "snarl" },

    { type: "shake" },
    { type: "narration", text: "Knife. Fast. Mira blocked it with her arm, dropped to the ground, dragged him with her — but a flash of metal, and—" },
    { type: "shake" },
    { type: "sfx", id: "blade" },
    { type: "narration", text: "White-hot pain exploded in my chest." },

    { type: "say", char: "erdan", text: "(weak) Nngh… ahh…!" },
    { type: "narration", text: "Cold handle. Centimeters from my heart. I dropped to my knees, then slid sideways until my shoulder hit the wall next to Seraya." },
    { type: "say", char: "mira", text: "Erdan!" },

    { type: "fade", color: "black" },
    { type: "bgm_stop" },
    { type: "wait", ms: 1200 },

    // Branch into outcome hub: lust / abandoned-nare paths end here.
    { type: "goto", target: "hub_sniper_outcome" },
  ],
};
