/* ============================================
   Chapter 6 — Seraya / Kuger's Plan / Escape
   ============================================
   Adapts manuscript Ch10 "The Thousand Arts."
   Meeting Seraya, the breeding reveal, the bite,
   the barrier, Dismantle on the whip, running.
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// MEETING SERAYA
// =====================================================================
window.SCENES.ch06_seraya_meet = {
  steps: [
    { type: "unfade", color: "black" },
    { type: "bg", id: "sanctum_chamber" },
    { type: "bgm", id: "bgm_kuger" },
    { type: "narration", text: "When the blindfold came off, I was somewhere new." },
    { type: "narration", text: "Large, red curtains draped the walls. The air was thick with the sharp, sweet bite of incense. A broad rug stretched beneath my feet, and crystals were set into iron fixtures on the walls, casting everything in a warm but uneasy glow." },
    { type: "narration", text: "And in the center of the room, waiting, was a young woman." },

    { type: "show", char: "seraya", at: "center", emotion: "neutral" },
    { type: "narration", text: "She was tall and composed, with a presence that made the masked men around her look small by comparison. Long silver hair. Pointed ears — unmistakably an elf. Vivid violet eyes." },
    { type: "narration", text: "Probably the most stunning person I had ever seen in my life, and the sight of her made my heart flutter." },
    { type: "narration", text: "But her gaze didn't carry the same reverent fanaticism as Kuger's. It carried tiredness. Maybe even pity." },

    { type: "show", char: "kuger", at: "left", emotion: "calm" },
    { type: "say", char: "kuger", text: "Hero. This is Seraya. She is blessed beyond measure, touched by Ucliat since her youth, chosen by our Order as High Priestess. It is she who will guide you through what must come." },
    { type: "reveal_name", char: "seraya", name: "Seraya" },

    { type: "narration", text: "She bowed her head slightly, though her gaze never left mine. There was no malice in it, but there was resignation." },
    { type: "say", char: "seraya", text: "…Forgive me. You're… different from the ones before." },
    { type: "narration", text: "She paused, as if trying to recall something." },
    { type: "say", char: "seraya", text: "The 27th hero was taller, and the 30th had lighter hair. You don't match the usual patterns." },
    { type: "thought", text: "Did she just call me short?! Just because she's a little taller than me?" },


    // --- THE REVEAL ---
    { type: "say", char: "erdan", text: "A-alright. Uhm, so why am I here? You guys haven't really explained anything." },
    { type: "narration", text: "Seraya's eyes widened a fraction, flicking toward Kuger." },
    { type: "say", char: "kuger", text: "Ah, yes. The hero is not merely a warrior of flesh and steel. He is also the vessel of legacy, the seed of generations, the proof that Ucliat's will endures beyond blade and spell." },
    { type: "say", char: "kuger", text: "Your blood carries gifts no mortal line can ever touch. Heroes alone possess Skills that reshape the world. And when those gifts pass to their offspring… the next generation will eclipse all who came before." },
    { type: "say", char: "erdan", text: "So… uh, what does that mean?" },

    { type: "narration", text: "Seraya gave a curt nod toward Kuger, something sharp in her eyes." },
    { type: "say", char: "seraya", text: "It seems this idiot didn't explain things properly." },
    { type: "narration", text: "Kuger actually flinched at the jab." },
    { type: "say", char: "seraya", text: "To put it simply… y-you're supposed to, well… do your hero's duty." },
    { type: "narration", text: "Her cheeks flushed faintly as she trailed off." },

    { type: "say", char: "kuger", text: "In short — we will need you to create an offspring with High Priestess Seraya in order to establish a superior bloodline. Certain Skills can be inherited." },
    { type: "thought", text: "Yeah, exactly what I thought… sigh." },

    { type: "say", char: "erdan", text: "W-what? An offspring? I'm kinda young for that, ya know?" },
    { type: "say", char: "kuger", text: "It is common for people your age to marry at your age. Your world simply has naïv— ah, standards we possibly couldn't understand." },
    { type: "thought", text: "Did he just say my world is naïve for not letting kids marry?" },
    { type: "say", char: "erdan", text: "S-still, I can't exactly just… do that with someone I just met. A-and also! You're religious, right? Do they really allow… you know, that before marriage?" },
    { type: "say", char: "kuger", text: "Marriage exists for inheritance of land and titles. The hero's duty transcends such worldly bonds." },


    // --- THE POTION / SYRINGE ---
    { type: "narration", text: "He snapped his fingers and motioned toward me. Two masked men grabbed and held me in place. I struggled faintly to test their grip, then gave up." },
    { type: "narration", text: "Kuger received a dark purple vial from a nearby masked woman, uncorking it with a pop." },
    { type: "say", char: "kuger", text: "Forgive us, Hero. We would not risk force if we thought you'd accept willingly. This potion is not poison, but a sacred mixture to ease doubt." },

    { type: "thought", text: "A 'sacred mixture to ease doubts' was most likely an aphrodisiac or some kind of mind-altering potion." },
    { type: "thought", text: "Like hell I'd lose my virginity to someone I don't even know! If I am going to, at least let it be someone I love." },

    { type: "narration", text: "Kuger's hand shot out, attempting to grab my chin. But my body moved before I knew it." },

    { type: "choice", prompt: "His hand is reaching for your face. The potion is right there.", options: [
      { text: "Bite his hand. Resist.", target: "ch06_resist", flags: { mira_trust: 1, paranoia: 1 } },
      { text: "(…She is pretty. Don't fight it.)", target: "ch06_kuger_compliance", flags: { lust: 5, kuger_route: 1 }, tag: "→ Cattle of the Crimson Sun (#3)" },
    ]},
  ],
};


// =====================================================================
// RESIST — CANONICAL ROUTE
// =====================================================================
window.SCENES.ch06_resist = {
  steps: [
    { type: "narration", text: "I bit down. Hard." },
    { type: "narration", text: "His skin was rough and salty, the sharp tang of blood flooding my mouth as my teeth sank in." },
    { type: "shake" },
    { type: "say", char: "kuger", text: "AGH!" },
    { type: "narration", text: "His scream rang out, raw with pain. He yanked his hand back, leaving red streaks where my teeth had marked him. I spat out blood, wrinkling my nose at the bitter taste." },
    { type: "thought", text: "Bleh! Is blood really supposed to taste this bitter?" },

    { type: "narration", text: "The masked men around me broke into startled murmurs, their composure cracked. Even the ones holding me faltered, their grip loosening for just a moment." },
    { type: "narration", text: "I thrashed with everything I had, taking advantage of the lapse. In a stroke of luck, I broke free and darted behind Seraya — the only other person in the room who hadn't moved to grab me." },
    { type: "narration", text: "She yelped in surprise at the sudden movement. I peeked out from behind her." },

    { type: "narration", text: "Then, barely audible, she whispered without moving her lips much." },
    { type: "say", char: "seraya", text: "(whisper) Don't make a scene. Stay behind me. Do nothing stupid." },
    { type: "thought", text: "So she was on my side? Or at least, not on theirs. That was something." },


    // --- KUGER'S THOUSAND ARTS ---
    { type: "narration", text: "Kuger's laugh then cut through the murmurs — soft, satisfied despite his wound." },
    { type: "say", char: "kuger", text: "How quaint. He hides behind the High Priestess." },
    { type: "say", char: "kuger", text: "I'm done giving you options, hero. You're plotting something, but I won't let you ruin the chance our lord has given us." },

    { type: "narration", text: "A glimmering orb of shifting colors burst in his hand, solidifying into a quill. He moved it across the air in rapid strokes, drawing lines that shimmered and hardened." },
    { type: "narration", text: "With a final flick, a spiked ring of metal solidified in front of him. He gripped it as it floated mid-air. The quill dissolved." },
    { type: "say", char: "kuger", text: "Behold: [Thousand Arts] — my Manifestation Skill!" },
    { type: "narration", text: "With a sharp twist of his wrist, the ring warped and snapped open into a jagged whip." },

    { type: "say", char: "kuger", text: "High Priestess Seraya, step away from the hero. He's dangerous." },
    { type: "say", char: "seraya", text: "Father Kuger, do we really need to resort to violence? Is there not any other way?" },
    { type: "say", char: "kuger", text: "Peace? He spat upon the blessing we offered him. He bit my hand. That is rebellion." },
    { type: "say", char: "kuger", text: "This is your last chance, Hero. Step forward willingly… or I'll drag you through obedience." },


    // --- ERDAN CHARGES / SERAYA'S BARRIER / DISMANTLE ---
    { type: "narration", text: "I shot an expectant look at Seraya, waiting for the supposed support. But impatience crept in. Before I knew it, I darted past her and straight toward Kuger with my palms open." },
    { type: "say", char: "seraya", text: "Hey, wait!" },
    { type: "narration", text: "The whip lashed toward my face with terrifying speed." },
    { type: "say", char: "erdan", text: "Disma—" },
    { type: "narration", text: "Too slow. The whip was already at my face." },

    { type: "say", char: "seraya", text: "Tro-ko Ret!" },
    { type: "flash" },
    { type: "narration", text: "A shimmering blue barrier bloomed between me and the whip. The metal struck it and sparked, deflecting sideways." },
    { type: "narration", text: "She had actually helped me." },

    { type: "narration", text: "I didn't hesitate. I shoved my hand through the apparently one-sided barrier and grabbed onto the golden weapon. The moment my fingers passed through Seraya's wall, I felt lighter — more power coursing through my veins. Her magic pouring into my arm." },
    { type: "say", char: "erdan", text: "Dismantle!" },
    { type: "system", text: "[ Dismantle ]  +  Seraya's mana boost  ·  Backlash: heavy" },
    { type: "shake" },
    { type: "narration", text: "A wave of pressure emitted from my hand. Cracks spread across the weapon in a spiderweb pattern until it shattered into glimmering shards. Kuger stumbled back, disbelief and fury etched into his features." },
    { type: "narration", text: "My arm went numb to the bone. A deep ache, like I'd spent all day hammering metal. My fingers trembled." },
    { type: "thought", text: "Bigger targets = bigger backlash. Noted." },
    { type: "set", flags: { seraya_trust: 3 } },


    // --- RUNNING ---
    { type: "narration", text: "With both Kuger and his acolytes stunned, I grabbed Seraya's wrist and ran toward the exit. Two masked men at the entrance blocked our path, but they seemed conflicted — their movements hesitant and stiff." },
    { type: "narration", text: "Then the whole building shook. A deep rumble rolled through the chamber, shaking dust from the ceiling. Everyone froze." },
    { type: "narration", text: "I didn't. I darted through the gap between the hesitating guards, dragging Seraya with me." },

    { type: "narration", text: "She was having a hard time keeping up because of her dress, but she quickly caught up and took the lead, guiding us through corridors she clearly knew well." },
    { type: "narration", text: "The shouting behind us got quieter the more we ran." },

    { type: "hide", at: "left" },
    { type: "hide", at: "center" },
    { type: "goto", target: "ch07_escape_intro" },
  ],
};

// =====================================================================
// COMPLIANCE — Ending #3
// =====================================================================
window.SCENES.ch06_kuger_compliance = {
  steps: [
    { type: "thought", text: "She's gorgeous. They want me to do this anyway. And honestly… why fight it?" },
    { type: "thought", text: "I told myself it was because Seraya was beautiful. It was, mostly, because I didn't want to think about consequences." },

    { type: "narration", text: "I let them tilt my head back. The vial poured warm down my throat. Sweet. Heavy. Wrong." },
    { type: "narration", text: "The warmth spread through my body immediately. My thoughts got slower, softer. The room got warmer." },

    { type: "fade", color: "black" },
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "wait", ms: 800 },
    { type: "narration", text: "The first month was a fever dream. Warm bodies and warmer drugs. I told myself I'd earned this — the easy life, the women, the hero's reward." },
    { type: "narration", text: "The second month, the drugs stopped feeling like rewards and started feeling like leashes. I asked them to stop. They smiled at me. They didn't stop." },
    { type: "narration", text: "By the third month, I'd forgotten how to ask. Somewhere in the dark, Seraya was still apologizing to me — softly, carefully, the way you talk to something already half-broken." },
    { type: "narration", text: "Mira never came. Why would she. I'd told her to stay in the room." },
    { type: "ending", id: "kuger_breeding" },
  ],
};
