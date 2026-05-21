/* ============================================
   Chapter 6 — Seraya, Kuger's plan, the choice
   ============================================ */

window.SCENES.ch06_seraya_meet = {
  steps: [
    { type: "bg", id: "sanctum_chamber" },
    { type: "bgm", id: "bgm_kuger" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "When the blindfold came off, I was somewhere new." },
    { type: "narration", text: "Red curtains draped the walls. Incense thick enough to taste. A broad rug, crystals in iron fixtures, and a young woman waiting in the center of it." },

    { type: "show", char: "seraya", at: "center", emotion: "neutral" },
    { type: "narration", text: "Tall. Composed. Long silver hair. Pointed ears. Probably the most stunning person I'd ever seen, and her gaze didn't carry the same reverent fanaticism as Kuger's. It carried tiredness. Maybe pity." },

    { type: "show", char: "kuger", at: "left", emotion: "calm" },
    { type: "say", char: "kuger", text: "Hero. This is Seraya. She is blessed beyond measure, touched by Ucliat since her youth, chosen by our Order as High Priestess." },
    { type: "say", char: "kuger", text: "It is she who will guide you through what must come." },

    { type: "say", char: "seraya", text: "…Forgive me. You're… different from the ones before." },
    { type: "thought", text: "Did she just call me short?" },

    { type: "say", char: "erdan", text: "A-alright. Uhm, so why am I here? You guys haven't really explain anything." },
    { type: "say", char: "kuger", text: "The hero is also the vessel of legacy, the seed of generations. Your blood, your essence, passed on so that the world may yet be saved when shadows fall anew." },
    { type: "say", char: "erdan", text: "So… uh, what does that mean?" },

    { type: "say", char: "seraya", text: "It seems this idiot didn't explain things properly. To put it simply… y-you're supposed to, well… do your hero's duty." },
    { type: "say", char: "kuger", text: "We will need you to create an offspring with High Priestess Seraya in order to establish a superior bloodline." },
    { type: "thought", text: "Yeah, exactly what I thought…" },

    { type: "say", char: "erdan", text: "W-what? An offspring? I'm kinda young for that, ya know?" },
    { type: "say", char: "kuger", text: "It is common for people your age to marry at your age. Your world simply has naïv—ah, standards we possibly couldn't understand." },
    { type: "say", char: "erdan", text: "S-still, I can't exactly just… do that with someone I just met." },

    { type: "narration", text: "He snapped his fingers. Two masked men grabbed and held me in place. He produced a dark purple vial." },
    { type: "say", char: "kuger", text: "Forgive us, Hero. This potion is not poison, but a sacred mixture to ease doubt." },

    { type: "choice", prompt: "What do you do?", options: [
      { text: "Bite his hand. Resist.", target: "ch06_resist", flags: { mira_trust: 1, paranoia: 1 } },
      { text: "(…She is pretty. Don't fight it. Drink the potion.)", target: "ch06_kuger_compliance", flags: { lust: 5, kuger_route: 1 }, tag: "→ Cattle of the Crimson Sun (#3)" },
    ]},
  ],
};

// Resist — canonical route
window.SCENES.ch06_resist = {
  steps: [
    { type: "narration", text: "Like hell I'd lose my virginity to someone I don't even know! Kuger's hand shot out — my body moved before I knew it. I bit down. Hard." },
    { type: "shake" },
    { type: "say", char: "kuger", text: "AGH!" },
    { type: "narration", text: "His scream rang out, raw with pain. The masked men loosened their grip in shock. I thrashed and broke free, darting behind Seraya — the only other person in the room who hadn't moved to grab me." },

    { type: "say", char: "seraya", text: "(Don't make a scene. Stay behind me. Do nothing stupid.)" },

    { type: "narration", text: "Kuger's quill manifested out of light. He scrawled a jagged whip into existence and lashed it toward me." },
    { type: "say", char: "seraya", text: "Tro-Ko Ret!" },
    { type: "narration", text: "A shimmering blue barrier blossomed in front of me. The whip cracked against it. Sparks." },

    { type: "narration", text: "I shoved my hand through her one-sided barrier and gripped his weapon." },
    { type: "say", char: "erdan", text: "Dismantle!" },
    { type: "system", text: "[ Dismantle ]  +  Seraya's mana boost  ·  Backlash: heavy" },
    { type: "narration", text: "The metal shattered into shards. My arm went numb to the bone." },

    { type: "narration", text: "I grabbed Seraya's wrist and ran. The walls shook from somewhere — Mira, fighting Kurr, somewhere in this damn complex." },
    { type: "set", flags: { seraya_trust: 3 } },
    { type: "hide", at: "left" },

    { type: "goto", target: "ch07_escape_intro" },
  ],
};

// Compliance — Ending #3
window.SCENES.ch06_kuger_compliance = {
  steps: [
    { type: "thought", text: "She's gorgeous. They want me to do this anyway. Why fight it?" },
    { type: "thought", text: "I told myself it was because Seraya was beautiful. It was, mostly, because I didn't want to fight." },
    { type: "narration", text: "I let them tilt my head back. The vial poured warm down my throat. Sweet. Heavy. Wrong." },

    { type: "fade", color: "black" },
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "wait", ms: 800 },
    { type: "narration", text: "The first month was a fever dream of warm bodies and warmer drugs. I told myself I'd earned this — the easy life, the women, the hero's reward." },
    { type: "narration", text: "The second month, the drugs started feeling less like rewards and more like leashes. I asked them to stop. They smiled at me. They didn't." },
    { type: "narration", text: "The third month, I'd forgotten how to ask. Somewhere in the dark, Seraya was still apologizing to me — softly, carefully, the way you talk to something already half-broken." },
    { type: "narration", text: "Mira never came. Why would she. I'd told her to stay in the room." },
    { type: "ending", id: "kuger_breeding" },
  ],
};
