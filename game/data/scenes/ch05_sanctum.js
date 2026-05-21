/* ============================================
   Chapter 5 — Sanctum kidnapping (Crimson Sun arc)
   ============================================ */
window.SCENES = window.SCENES || {};

window.SCENES.ch05_kuger_intro = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "Three more days of recovery. Then a second tenebrim attack — this time inside my own room." },

    { type: "shake" },
    { type: "sfx", id: "door" },
    { type: "show", char: "tenebrim", at: "left", emotion: "feral" },
    { type: "narration", text: "He stood in my doorway, shackles still on his wrists, broken chains wrapped around them. Bloodied sword. The same eyes from the courtyard — but tamer now. Almost human." },

    { type: "narration", text: "He spoke in a tongue I couldn't understand. Mira answered in the same language. They argued — short, tight." },
    { type: "narration", text: "Then his attention snapped to me. His sword lifted." },
    { type: "show", char: "mira", at: "right", emotion: "fierce" },
    { type: "say", char: "mira", text: "As Master's servant, you'll have to go through me first." },

    { type: "shake" },
    { type: "sfx", id: "whoosh" },
    { type: "narration", text: "An arrow soared through the open window, cutting between us. It buried itself in the stone wall an inch from the man's head. A hiss followed, smoke filling the room." },
    { type: "narration", text: "Hands grabbed me. I was lifted like I weighed nothing. The person carrying me leapt out the window — and landed smoothly on a rooftop ten meters below." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },

    { type: "bg", id: "alley" },
    { type: "bgm", id: "bgm_chase" },
    { type: "show", char: "torren", at: "left", emotion: "calm" },
    { type: "show", char: "guthethya", at: "right", emotion: "wary" },
    { type: "say", char: "torren", text: "Ah, I apologize for the fright. We're adventurers, hired by the queen herself. Complicated times, you see." },
    { type: "say", char: "torren", text: "Name's Torren. A pleasure to meet you, hero." },
    { type: "say", char: "guthethya", text: "Guthethya. Same order. Less talking, more moving." },

    { type: "narration", text: "They led us through hidden passages and a guarded stairway, deep below the palace." },
    { type: "hide", at: "left" },
    { type: "hide", at: "right" },

    { type: "bg", id: "underground_passage" },
    { type: "show", char: "kuger", at: "center", emotion: "neutral" },
    { type: "say", char: "kuger", text: "I will keep it brief. Hand over the hero." },
    { type: "narration", text: "He produced a golden chain bearing an emblem of a red sun with a violet eye. Guthethya's posture eased — minutely." },
    { type: "say", char: "guthethya", text: "…The Crimson Sun Order, and of the JOAT sub-branch, no less." },

    { type: "say", char: "kuger", text: "Follow me. It'll be worthwhile." },
    { type: "goto", target: "ch05_sanctum_tour" },
  ],
};

window.SCENES.ch05_sanctum_tour = {
  steps: [
    { type: "bg", id: "sanctum_hall" },
    { type: "bgm", id: "bgm_sanctum" },
    { type: "narration", text: "Crystal lanterns. Brass and iron pipes overhead. Grated walkways. The air smelled of metal and old blood. Dozens of robed figures with cage-masks worked at strange machines that whirred and clanked." },
    { type: "narration", text: "Steampunk. Or close enough. Built from what previous heroes had brought across worlds." },

    { type: "say", char: "kuger", text: "The Crimson Sun Order is a branch of the Church of Ucliat. Within our order, we have sub-branches that specialize in specialized fields." },
    { type: "say", char: "kuger", text: "Ours focuses on prototypes of Earth's technology. Jack-of-all-trades. Or JOAT, for short." },

    { type: "narration", text: "Tour. Workshops. Weapons. Bicycles, even — a steam-driven carriage in one corner. Repeating crossbows. Talisman bombs. An elevator. Each room he opened drew my attention away from a pattern I should've been clocking." },

    { type: "narration", text: "Then we reached a door. He gestured Torren and Guthethya to a different elevator. The next thing I knew, the metal cage door slammed in Mira's face — sealed shut with a translucent ripple." },
    { type: "shake" },
    { type: "say", char: "kuger", text: "Hero. I apologize, but from here on, you'll have to accompany me alone. The path ahead must remain undisturbed." },

    { type: "thought", text: "Run." },
    { type: "narration", text: "I bolted. He didn't even bother shouting. The walls knew his voice. Doors opened at his command. Robed figures emerged from rooms I hadn't even seen, blocking every path." },
    { type: "narration", text: "Surrender. Cooperate. Survive. I raised my hands." },
    { type: "set", flags: { paranoia: 2 } },

    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "goto", target: "ch06_seraya_meet" },
  ],
};
