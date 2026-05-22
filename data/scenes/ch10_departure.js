/* ============================================
   Chapter 10 — Departure / The Open Road
   ============================================
   Adapts manuscript Ch23 "Thrown into the deep end."
   The morning after the ball. Leaving the palace.
   The canonical ending (for now — story continues
   in later chapters using lore).
*/
window.SCENES = window.SCENES || {};

window.SCENES.ch10_departure_intro = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "The next morning arrived quickly. I had stayed up most of the night, unable to sleep." },
    { type: "narration", text: "I'd find myself brushing my thumb over the mark on my hand without thinking. Between being summoned to an unknown world, constantly having people try to kill me, and mixing myself into some deep shit, I wasn't even sure what I was doing anymore." },
    { type: "narration", text: "I felt weak and powerless. A familiar combination that didn't improve anything just because I acknowledged it." },

    { type: "narration", text: "Mira moved quietly. She hadn't spoken a word to me even after I said good morning. I doubted she had slept much either." },
    { type: "narration", text: "The narelith and Night were in the corner, chasing each other around in circles. Carefree." },

    { type: "narration", text: "One of the Queen's attendants had informed us of the details. The only luggage I had was the knife and sword, some practical spare clothing, and the thick guidebook. Mira barely packed anything — she didn't own much to begin with. Seraya had brought a few books and herbs from what was left of the Crimson Sun Order." },
    { type: "narration", text: "The Queen kept her promises. Gold. Rations. Weapons. Maps." },
    { type: "thought", text: "But for how long?" },

    { type: "fade", color: "black" },
    { type: "wait", ms: 400 },
    { type: "bg", id: "carriage" },
    { type: "bgm", id: "bgm_garden" },
    { type: "unfade", color: "black" },
    { type: "goto", target: "ch10_carriage" },
  ],
};


window.SCENES.ch10_carriage = {
  steps: [
    { type: "narration", text: "The carriage rolled forward, the quiet hum of the wheels settling into a steady rhythm. The cushions were soft enough to handle the worst of the bumps." },
    { type: "narration", text: "Night and the narelith had long since worn themselves out, napping in a heap on the floor. The scenery outside changed — more greenery, open fields, the palace shrinking behind us." },

    { type: "show", char: "mira", at: "left", emotion: "calm" },
    { type: "show", char: "seraya", at: "right", emotion: "soft" },
    { type: "narration", text: "Mira stared aimlessly out the window. Seraya was engrossed in a book — or at least pretending to be, to avoid the awkward atmosphere." },

    { type: "thought", text: "I remembered the first time I met Mira, and the way she'd been treated. When her brother attacked the palace, he wasn't even referred to as a person, but rather a beast." },
    { type: "thought", text: "It was a given that as long as there were two different living things, one would always be the 'better' one." },
    { type: "thought", text: "And Mira's brother… the story of how his siblings suffered, and his desire to find Mira, just to end up on death row? How he blamed the heroes, and indirectly, me." },
    { type: "thought", text: "It was heavy. A weight I would have to learn how to carry. Not because I was better suited, but because it was entrusted to me." },

    // --- CONVERSATION ---
    { type: "say", char: "erdan", text: "Hey, Mira?" },
    { type: "say", char: "mira", text: "…" },
    { type: "say", char: "erdan", text: "Hello?" },
    { type: "narration", text: "I scooted a bit closer, nudging her lightly with my elbow." },
    { type: "say", char: "mira", text: "What?" },
    { type: "narration", text: "Her head snapped at me faster than I anticipated." },
    { type: "say", char: "erdan", text: "Oh, uh, nothing. I was just worried since you didn't answer when I called." },
    { type: "say", char: "mira", text: "I see. I apologize, Master. I've just been thinking about everything." },
    { type: "say", char: "erdan", text: "Oh, okay. I was just wondering if you heard what the escort said. We're gonna stop for a break soon." },
    { type: "say", char: "mira", text: "Mhm." },


    { type: "narration", text: "A long beat of silence stretched between us." },
    { type: "say", char: "mira", text: "Erdan. You worry too much." },
    { type: "narration", text: "I froze at her direct use of my name." },
    { type: "say", char: "mira", text: "I'm not a frail little girl." },
    { type: "say", char: "erdan", text: "Sorry." },
    { type: "say", char: "mira", text: "Don't be. I'm fine." },

    { type: "wait", ms: 400 },
    { type: "say", char: "erdan", text: "You still holding up good?" },
    { type: "say", char: "mira", text: "Still trying to figure out who the real me is." },
    { type: "narration", text: "Her eyes didn't meet mine even as she turned her head." },
    { type: "say", char: "mira", text: "And you? Not everything is about me. You've also been through a lot." },
    { type: "say", char: "erdan", text: "I'm fine, really. No need to worry about me. Alive and kicking. Ahah.." },
    { type: "say", char: "mira", text: "If you say so." },

    // --- THE BROTHER'S MESSAGE ---
    { type: "say", char: "erdan", text: "Hey, are you really sure about this?" },
    { type: "narration", text: "I glanced at the mark on my hand." },
    { type: "say", char: "erdan", text: "Your brother said it. It's basically just lighter chains. I don't want you to feel bound to me, or anyone." },
    { type: "say", char: "mira", text: "It was my choice. Yosuke Minato didn't give me one. You did. I chose to have it." },
    { type: "say", char: "erdan", text: "But why? After everything you've been through?" },
    { type: "say", char: "mira", text: "Being given freedom so suddenly is jarring, Erdan. After all these years, all I've known is servitude. I can't just embrace the empty feeling after the chains are broken." },
    { type: "narration", text: "She looked at me directly." },
    { type: "say", char: "mira", text: "Please, allow me to stay by your side, at least until I figure out how to stand on my own. I want to adjust at my pace, if that makes sense." },
    { type: "say", char: "erdan", text: "Oh, yeah yeah, of course! That sounds good to me. Just tell me, and we can break the pact anytime…" },

    { type: "thought", text: "But even as those words left me, something in my chest tightened. It wasn't that I wanted her to be bound to me. But if there was nothing to bind us, what would be her reason to keep staying by my side?" },


    // --- SERAYA / DESTINATION ---
    { type: "wait", ms: 600 },
    { type: "say", char: "seraya", text: "Where do we go first?" },
    { type: "narration", text: "She'd looked up from her book. Her expression was lighter now — curious, even." },
    { type: "say", char: "erdan", text: "Somewhere with a real church. Get my Skills properly checked. Without the palace's eyes on me." },
    { type: "say", char: "seraya", text: "Church Holling, a few days east. Small town, decent church with an appraisal device. Good place to start." },
    { type: "say", char: "erdan", text: "Then that's where we go." },

    { type: "narration", text: "Mira nodded. Seraya turned a page. Night sighed in his sleep. The narelith chirped softly from its position on my collarbone." },
    { type: "narration", text: "The carriage rolled on. The road kept going." },

    { type: "wait", ms: 800 },

    { type: "narration", text: "Nothing about this was safe. The Doomsday was still coming. The Crimson Sun still breathed. The elf's bullet was still a phantom ache across my ribs." },
    { type: "narration", text: "But for the first time since the warp tunnel swallowed me whole, I got to pick the people in the room. And they picked me back." },
    { type: "thought", text: "It's a start." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "goto", target: "ch11_road" },
  ],
};
