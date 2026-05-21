/* ============================================
   Chapter 10 — Leaving, the canonical opening
   ============================================ */

window.SCENES.ch10_departure_intro = {
  steps: [
    { type: "bg", id: "carriage" },
    { type: "bgm", id: "bgm_garden" },
    { type: "narration", text: "Dawn. The carriage wheeled out of the palace gates while most of the court was still in bed." },
    { type: "narration", text: "Mira on one bench, watching the window. Seraya on another, reading. Night and Nare in a heap on the floor, finally tired of chasing each other." },

    { type: "show", char: "mira", at: "left", emotion: "calm" },
    { type: "show", char: "seraya", at: "right", emotion: "soft" },

    { type: "narration", text: "I traced the mark on the back of my hand. Or where there would have been one. Or where there was, depending on which choices I'd made." },

    { type: "thought", text: "We were leaving. Not running. Going. With supplies, gold, even an escort if we wanted." },
    { type: "thought", text: "And four people — well, two and two beasts — who'd picked me back." },

    { type: "say", char: "mira", text: "Master?" },
    { type: "say", char: "erdan", text: "Yeah?" },
    { type: "say", char: "mira", text: "Where do we go first?" },

    { type: "narration", text: "I thought about it. The tenebrim's siblings, scattered across a continent that had treated his people like cattle. The Vault and the relic Light Kagami had buried in the elven north. The clean simple thing of finding Seraya's family, if any of her family was still alive." },
    { type: "narration", text: "The Doomsday clock kept ticking, somewhere underneath all of it." },

    { type: "say", char: "erdan", text: "Somewhere with a real church. Get my Skills properly checked. Without the palace's eyes on me." },
    { type: "say", char: "seraya", text: "Church Holling, a few days east. Good place to start." },
    { type: "say", char: "erdan", text: "Then that's where we go." },

    { type: "narration", text: "Mira nodded. Seraya turned a page. Night sighed in his sleep. Nare chirped from my collarbone." },

    { type: "wait", ms: 800 },
    { type: "narration", text: "The carriage rolled on. The road kept going. The story wasn't over." },
    { type: "narration", text: "But for the first time since the warp tunnel swallowed me whole, I had picked the people in the room. And they had picked me back." },
    { type: "narration", text: "It's a start." },

    { type: "ending", id: "canonical" },
  ],
};
