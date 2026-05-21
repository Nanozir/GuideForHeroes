/* ============================================
   Branch hubs and remaining alternate endings
   ============================================
   This file holds:
   1. Routing hubs that decide between endings based on
      flags accumulated through the playthrough.
   2. The text-only "epilogue" scenes for endings
      #7, #8, #9, #10, #11, #12, #13, #14, which trigger
      from optional choice points sprinkled into the game.
*/

// ----- Hub: Sniper-warehouse outcome -----
// Called by ch07_safehouse_sniper. Decides if Mira reaches
// Erdan in time (canonical route) or arrives too late (lust #1).
window.SCENES.hub_sniper_outcome = {
  steps: [
    { type: "if", flag: "lust_route", op: ">=", value: 1, then: "ending_lust_mira" },
    { type: "if", flag: "abandoned_nare", op: ">=", value: 1, then: "ending_lust_mira" },
    { type: "goto", target: "ch08_hallucinations" },
  ],
};

window.SCENES.ending_lust_mira = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "bg", id: "warehouse" },
    { type: "narration", text: "Mira didn't move." },
    { type: "narration", text: "Or — she did. Eventually. After the rifle. After the knife. After the warm wet spread on my shirt that I knew, even at twenty, was the wrong color to be coming out of a person." },
    { type: "narration", text: "She'd loved me. She had. She just hadn't trusted me enough, anymore, to throw her body in front of mine the way she would have last week." },
    { type: "narration", text: "The straps had been a small thing. A first thing. Everything she'd given me afterward had been quieter, and smaller, and slower, and the math had finally caught up." },
    { type: "narration", text: "The last thing I saw was her face." },
    { type: "narration", text: "It looked like the face of someone who'd seen the previous hero die exactly the same way, and had simply been waiting, the whole time, for this version of him to do it again." },
    { type: "ending", id: "lust_mira" },
  ],
};

// =====================================================================
// Optional choice nodes that can be inserted as side branches
// from the canonical path. Each leads to one of the remaining endings.
// These are reached via the title-screen "Routes" sub-menu in the
// gallery, AND occasionally as in-game prompts during long quiet
// stretches. The simplest way to surface them in v0.1 is via the
// recovery-room garden walk, where the player gets one big "give in
// to a tendency" prompt that matches whatever inner-id flag dominates.
// =====================================================================

// ----- Hub: post-recovery temptation -----
// Triggered from ch08_garden when player picks "I need time to think"
// and lingers. Reads the player's accumulated flags to offer the route
// they're closest to becoming.
window.SCENES.hub_temptation = {
  steps: [
    // Highest priority first: explicit flag chains.
    { type: "if", flag: "force_growth", op: ">=", value: 2, then: "ending_nare_yandere" },
    { type: "if", flag: "force_growth", op: ">=", value: 1, then: "ending_nare_exploit" },
    // Otherwise present a temptation menu.
    { type: "goto", target: "scene_temptation_menu" },
  ],
};

window.SCENES.scene_temptation_menu = {
  steps: [
    { type: "bg", id: "garden" },
    { type: "bgm", id: "bgm_garden" },
    { type: "narration", text: "Quiet afternoon in the gardens. Mira has wandered off to check on Night. Seraya is sketching. You're alone with the back of your own head." },
    { type: "thought", text: "There are paths still open. Different shapes the rest of this could take. Some of them are easier than what I've already chosen. Some of them are honest about being worse." },

    { type: "choice", prompt: "What are you actually thinking about, when you let yourself?", options: [
      { text: "(Trust nobody. Skim what I can. Disappear.)",                  target: "ending_paranoid_neet",   flags: { paranoid: 5 } },
      { text: "(Say yes to every favor. Be everyone's hero.)",               target: "ending_doormat",         flags: { doormat: 5 } },
      { text: "(Read the guidebook obsessively. Min-max the rest.)",         target: "ending_speedrun",        flags: { speedrun: 5 } },
      { text: "(Court the Queen's favor. Titles and estates.)",              target: "ending_pampered",        flags: { pampered: 5 } },
      { text: "(Rei. The criminal. Core theft would solve so much.)",        target: "ending_rei_gambit",      flags: { rei: 5 } },
      { text: "(Lumenari relics. Ancient ruins. A door home.)",              target: "ending_relic_obsession", flags: { relic: 5 } },
      { text: "(None of those. Stay the course.)",                            target: "ch08_garden" },
    ]},
  ],
};

// ----- Ending #7: Paranoid NEET -----
window.SCENES.ending_paranoid_neet = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "alley" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "I sold the pact back. Mira didn't argue. She didn't even cry. She left, and I told myself that was best for both of us." },
    { type: "narration", text: "I lived in the lower city for nearly two months. Skill of Appealing Presence kept the rent cheap and the questions short. I ate well. I slept poorly. I checked behind every door I opened." },
    { type: "narration", text: "The elf found me anyway. He'd been promised a hero. He hadn't been promised one who fought back, but I didn't, much." },
    { type: "narration", text: "No one came for me, in the end. I hadn't promised anyone a thing." },
    { type: "ending", id: "paranoid_neet" },
  ],
};

// ----- Ending #8: Nare exploitation -----
window.SCENES.ending_nare_exploit = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "erdan_room" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "I told myself it was for her. She was growing 'naturally', just a little faster than the books said. The dead-magic patches in the gardens were a coincidence. The headaches Mira got around me were a coincidence." },
    { type: "narration", text: "By the time the Crimson Sun came back for her, the patch she was leaking on the city's east wall was visible from three blocks away." },
    { type: "narration", text: "They didn't even arrest me. They just took her. She kept calling for me until they put a hood over her head and a bracket through her core, and then she stopped." },
    { type: "narration", text: "I never saw her again. There was nothing left in the room afterward, except a dent the size of my arm in the bed where she'd liked to nest." },
    { type: "ending", id: "nare_exploit" },
  ],
};

// ----- Ending #9: Doormat -----
window.SCENES.ending_doormat = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "alley" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "I freed Mira properly. I freed everyone I could find. I signed pacts to feed people, defend villages, escort merchants. I didn't say no, because saying no felt mean." },
    { type: "narration", text: "By the time the elf's rifle found me, I had three contradictory pacts pulling at my core, and my Skills sputtered like wet matches. Mira and Seraya were close enough to watch." },
    { type: "narration", text: "There was nothing left in the tank for myself." },
    { type: "narration", text: "It's funny. I'd spent my life not putting in the effort, and the moment I tried to be good for everyone, it killed me faster than the not-trying ever did." },
    { type: "ending", id: "doormat" },
  ],
};

// ----- Ending #10: Speedrun -----
window.SCENES.ending_speedrun = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "void" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "The guidebook was a tutorial. Every NPC was a quest-giver. Every Skill check was a stat dump. I knew the rules of this world better than anyone in it." },
    { type: "narration", text: "I formed conditional pacts with everyone whose loyalty seemed tactically valuable. The elf assassin, captured by my own gambit. The tenebrim's brother, mid-monologue. A Crimson Sun acolyte I'd flipped during the second week." },
    { type: "narration", text: "When the first pact strained, the second cascaded. By the third I was on my knees, my own core misfiring under the load, every transactional ally suddenly free of their obligations." },
    { type: "narration", text: "The kingdom of Elysandria, watching from a balcony, calculated the cheapest way to clean up the mess. It was efficient. I'd taught them that." },
    { type: "ending", id: "speedrun" },
  ],
};

// ----- Ending #11: Pampered figurehead -----
window.SCENES.ending_pampered = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "ballroom" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "The Queen offered titles. I took them. She offered estates. I took them. She offered a fiancée and I, with a shrug that I'd rehearsed in front of a mirror, took her too." },
    { type: "narration", text: "Mira left in the second month. Not in anger. She just went quiet, the way she always did when she was disappointed, and one morning her side of the bed was made up like she'd never slept there." },
    { type: "narration", text: "When Doomsday came I had never drawn my sword in earnest. The court watched me struggle on the wall. The Queen's expression didn't change. She'd known this was the most likely outcome from the moment I said yes to the first title." },
    { type: "ending", id: "pampered" },
  ],
};

// ----- Ending #12: Nare yandere -----
window.SCENES.ending_nare_yandere = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "erdan_room" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "She hit humanoid form in three weeks. She was beautiful — pink-streaked hair, a heart-mark beneath one eye, a smile only for me. She shared my mind, and she did not, ever, want to leave." },
    { type: "narration", text: "I stopped going to the gardens. I stopped meeting Mira in the halls. I stopped pretending I wanted to leave the room." },
    { type: "narration", text: "The Crimson Sun came when the dead-magic zone she was leaking reached the inner city. She put up a fight that flattened a wing of the palace. They got her, eventually. They got me, eventually, too — collapsed in the bedroom, voice gone, asking for her." },
    { type: "narration", text: "I don't remember what they did with me after. I remember her voice getting smaller as they pulled her away. That's most of what I remember from that whole stretch of my life." },
    { type: "ending", id: "nare_yandere" },
  ],
};

// ----- Ending #13: Rei gambit -----
window.SCENES.ending_rei_gambit = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "alley" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "I had Mernel pull every wanted-poster, every bounty notice, every vague rumor of the criminal who could rip a soul from a body. I read them late at night, in bed, like they were love letters from someone I hadn't met yet." },
    { type: "narration", text: "I picked a low-mana zone. I made sure I'd be alone. I made it as easy for her as I could." },
    { type: "narration", text: "Rei found me on the second night. Pale hair, faded scar across her cheek, eyes the color of nothing. She didn't even speak. She put her hand through my chest and pulled, and the hero's core that had been keeping me alive for two months popped out of me like a button off a shirt." },
    { type: "narration", text: "She didn't kill me. I think that was meant as mercy. The kingdom hunts me now as her accomplice — a man with no core, no Skills, no value, who once welcomed her to his bed." },
    { type: "narration", text: "The Doomsday is still coming. I won't be there for it. Neither will the hero I was supposed to be." },
    { type: "ending", id: "rei_gambit" },
  ],
};

// ----- Ending #14: Relic obsession -----
window.SCENES.ending_relic_obsession = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "vault" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "Every relic. Every ruin. Every rumor of a Lumenari shard that could open a door in the air." },
    { type: "narration", text: "I left Mira at the third dungeon when she insisted I rest. I left Seraya at the sixth when she said the local readings were lying. I went on alone, because alone is faster, and faster is closer to home." },
    { type: "narration", text: "The seventh dungeon collapsed on me. I had a shard in my hand. It was warm. It glowed. It looked exactly like the descriptions in the books." },
    { type: "narration", text: "I realized, far too late and with the dust filling my lungs, that the warmth was just stored mana. The glow was just a trick of light. The shard was just glass, salted with ambient leak to fool the desperate." },
    { type: "narration", text: "There had never been a ticket home. I just hadn't wanted to be the last to know." },
    { type: "ending", id: "relic_obsession" },
  ],
};
