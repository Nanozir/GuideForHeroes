/* ============================================
   Chapter 3 — Gux, Ren, and the palace tour
   ============================================ */
window.SCENES = window.SCENES || {};

window.SCENES.ch03_gux_ren = {
  steps: [
    { type: "bgm", id: "bgm_dining" },
    { type: "say", char: "gux", text: "Lord Kernt! I hope ya liked the food. You can't find anything better in this country!" },
    { type: "narration", text: "His voice carried a rough drawl, thick but oddly charming." },

    { type: "narration", text: "I turned and almost flinched. A lizardman stood way too close. Smooth green scales. Thick tail swaying lazily behind him. No armor — just a brown vest and loose pants." },
    { type: "say", char: "erdan", text: "Yeah, the food was good. Thanks." },

    { type: "say", char: "gux", text: "Name's Guxanjux, Commander of the Draconid Vanguard. I have been assigned as your trainer in close combat. And do not worry, I am more than capable of making a hero like you strong enough to stop Doomsday once and for all!" },
    { type: "say", char: "erdan", text: "Gu… Guxanjux?" },
    { type: "say", char: "gux", text: "Bwahaha! You are probably the first human to come close to saying my name right. Close, but not quite! Ya can call me Gux." },
    { type: "say", char: "erdan", text: "Alright, I'll call you Gux then. And I'm Erdan, so you can just call me that." },
    { type: "say", char: "gux", text: "Lord Erdan, then." },
    { type: "say", char: "erdan", text: "You do not need to add the 'lord' part…" },
    { type: "narration", text: "He either did not hear or ignored me." },

    { type: "show", char: "ren", at: "left", emotion: "neutral" },
    { type: "say", char: "ren", text: "Hey, Erdan! You in here? I heard you managed to cast a spell without an incantation!" },
    { type: "say", char: "gux", text: "Oi oi, come on! Ya can't have him, boy-girl! I was assigned as his trainer, so know your place!" },
    { type: "say", char: "ren", text: "Heh, I would not want the hero tainted by your dirty lizard fingers, after all. He is better off with me, so hand him over!" },

    { type: "narration", text: "While they argued over me like I was property, I just sat there, looking back and forth, praying I would not have to pick a side." },
    { type: "say", char: "mira", text: "Master. You have already met Guxanjux, Commander of the Draconid Vanguard. The other is Ren, Second Division Mage. He is an equar — which is why he appears younger and shorter than he is." },
    { type: "say", char: "erdan", text: "Oh, alright…" },

    { type: "say", char: "mira", text: "They always bicker like this. Ren harbors prejudice against lizardmen. As for Gux, he embodies the stereotypical 'macho' male." },
    { type: "say", char: "erdan", text: "You know what macho?" },
    { type: "say", char: "mira", text: "Yes. I heard it from Yosuke Minato." },
    { type: "thought", text: "Guess he was influential in more ways than one." },

    { type: "say", char: "gux", text: "That's it! I challenge you to a duel! And without those puny Spells of yours!" },
    { type: "say", char: "ren", text: "No magic? I'm not a brute like you! And my Spells are not 'puny'!" },

    { type: "show", char: "mernel", at: "right", emotion: "stern" },
    { type: "say", char: "mernel", text: "You two, quiet down at once! Do you not have any respect, fighting like barbarians in the royal palace?" },
    { type: "say", char: "ren", text: "B-but Master, he provoked me first!" },
    { type: "say", char: "mernel", text: "Lord Kernt, allow me to apologize for their actions. I will show you around the castle in their stead." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },

    { type: "goto", target: "ch03_tour" },
  ],
};

window.SCENES.ch03_tour = {
  steps: [
    { type: "bg", id: "hallway" },
    { type: "bgm", id: "bgm_hallway" },
    { type: "narration", text: "Mernel walked me through the palace, naming rooms I'd forget by tomorrow." },
    { type: "narration", text: "Hallway walls in red velvet, golden patterns, tapestries. Portraits of nobles and old kings. The palace was the size of a small town by itself. Royalty here were swimming in money." },

    { type: "show", char: "mernel", at: "center", emotion: "neutral" },
    { type: "say", char: "mernel", text: "The courtyard. The library. Guardroom. Storerooms. Cellar. And the chapel — I'll introduce you to the head priest before we head back." },

    { type: "bg", id: "courtyard" },
    { type: "bgm", id: "bgm_garden" },
    { type: "narration", text: "Through a window I caught a glimpse of a private courtyard with a fountain at its center. A grandfather clock had been mounted at the far edge. Strange in a beautiful way. Or beautiful in a strange way." },
    { type: "narration", text: "Mira walked just slightly behind me. Not close enough to touch. Not far enough to lose me." },

    { type: "narration", text: "The chapel resembled a Catholic church mixed with something older I couldn't place. At the altar, a man with a polite smile turned at our approach." },
    { type: "show", char: "marcel", at: "right", emotion: "neutral" },
    { type: "say", char: "marcel", text: "Ah, if it isn't the Court Mage Mernel. And the hero himself too! It's a pleasure to meet you." },
    { type: "say", char: "marcel", text: "It's an honor to meet you, Hero Kernt. While you may not have achieved anything worthy of such recognition yet, you must understand that someone blessed with gifts from our lord is not to be treated lightly. I expect great things from you, Hero!" },
    { type: "thought", text: "That explains why heroes are so valued." },
    { type: "say", char: "erdan", text: "Thanks, sir." },
    { type: "say", char: "marcel", text: "A word of advice, don't let your greed corrupt you. It has happened more than you think with the previous heroes." },
    { type: "say", char: "marcel", text: "I'm Marcel Kirshinov, the head priest here. If you have any questions about your duties or about our lord, don't be afraid to visit." },
    { type: "thought", text: "Kirshinov? That almost sounds like a Russian surname…" },
    { type: "set", flags: { met_marcel: 1 } },
    { type: "hide", at: "right" },

    { type: "goto", target: "ch03_familiar_choice" },
  ],
};

// Familiar branch — Night vs swap-out (Ending #5 setup)
window.SCENES.ch03_familiar_choice = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "Mernel led me back to my room, stopping outside the door with a gentle smile." },
    { type: "show", char: "mernel", at: "center", emotion: "soft" },
    { type: "say", char: "mernel", text: "Hero Kernt, we took the chance while you were out to prepare a little gift for you." },
    { type: "say", char: "erdan", text: "Really? But I've already gotten so much, so I don't really need more…" },
    { type: "say", char: "mernel", text: "Ah, don't be shy! It's only natural we help you settle in." },

    { type: "narration", text: "I opened the door and froze." },
    { type: "narration", text: "A wall of black fur. A massive, wolf-like beast was sprawled across the floor, tail wagging, eyes locked on me." },
    { type: "narration", text: "I slammed the door shut." },
    { type: "say", char: "erdan", text: "Mernel? What… what the hell is that?" },
    { type: "say", char: "mernel", text: "Ah, that's your familiar! Or future familiar to be more accurate. Only heroes like you can tame them." },

    { type: "if", flag: "lust_route", op: ">=", value: 1, then: "ch03_familiar_swap_setup" },
    { type: "goto", target: "ch03_tame_night" },
  ],
};

// Lust route variant — they're already thinking about a harem.
window.SCENES.ch03_familiar_swap_setup = {
  steps: [
    { type: "thought", text: "Mernel mentioned something earlier. The 31st hero asked for a different familiar because his was male. Wanted to build a 'harem'." },
    { type: "thought", text: "And… female familiars take a humanoid form when they're old enough. Don't they?" },

    { type: "choice", prompt: "What do you do?", options: [
      { text: "Tame the wolf. He's already here.", target: "ch03_tame_night", flags: { night_bond: 3 } },
      { text: "Ask for a different familiar. A female one.", target: "ch03_swap_familiar", flags: { swap_familiar: 1, lust: 2 }, tag: "→ Familiar Swap (Ending #5)" },
    ]},
  ],
};

window.SCENES.ch03_tame_night = {
  steps: [
    { type: "say", char: "erdan", text: "T-tame it? H-how? Don't I need some Skill or something?" },
    { type: "say", char: "mernel", text: "No need, no need! Just… be yourself." },
    { type: "thought", text: "Why is he being so cagey? He was being all mentor-like just moments ago!" },

    { type: "say", char: "mira", text: "Master, do you want me to accompany you during the taming?" },
    { type: "say", char: "erdan", text: "Y-you will? Yeah, I mean, if it's okay with you." },
    { type: "set", flags: { mira_trust: 1 } },

    { type: "narration", text: "She entered before I could prepare myself mentally. I followed, pretty much hiding behind her." },

    { type: "show", char: "night", at: "center", emotion: "happy" },
    { type: "narration", text: "Mira guided my hand to the wolf's snout. I patted, cautiously. He didn't bite." },
    { type: "say", char: "mira", text: "You need to place your hand on it, and imagine a connection between the two of you." },
    { type: "say", char: "mernel", text: "Try focusing on a visual image! Like a thread connecting you two together!" },

    { type: "narration", text: "I closed my eyes. Pictured a string from somewhere in my chest reaching out to him." },
    { type: "flash" },
    { type: "narration", text: "A jolt. A swirling vortex of wind. By the time I opened my eyes, the giant wolf had become a small black puppy pawing at my pants." },
    { type: "set", flags: { night_bond: 5 } },

    { type: "say", char: "mira", text: "Familiars take the form most suited to their master. In your case, this is appropriate." },
    { type: "say", char: "erdan", text: "Appropriate?" },

    { type: "say", char: "mira", text: "You should name him." },
    { type: "say", char: "mira", text: "What about… Blackie?" },
    { type: "say", char: "erdan", text: "…Blackie?" },
    { type: "say", char: "mira", text: "Yes, because of his black fur." },

    { type: "say", char: "erdan", text: "Can you come up with something more… fitting for a familiar?" },
    { type: "say", char: "mira", text: "What about Night?" },
    { type: "say", char: "erdan", text: "…Isn't that a bit too simple?" },
    { type: "say", char: "mira", text: "…If Master says so. Forgive me for speaking out of turn." },

    { type: "thought", text: "My chest tightened." },
    { type: "say", char: "erdan", text: "No, no, it's fine! Night works too." },
    { type: "set", flags: { mira_trust: 2, night_named: 1 } },

    { type: "narration", text: "And just like that, my fluffy companion became Night. Basic or not, it kinda suited him." },
    { type: "hide", at: "center" },

    { type: "goto", target: "ch04_attack_intro" },
  ],
};

// Familiar swap — locks in Ending #5 trajectory.
window.SCENES.ch03_swap_familiar = {
  steps: [
    { type: "say", char: "erdan", text: "Hey, uh… would it be possible to… get a different familiar? I'm not sure this one's right for me." },
    { type: "narration", text: "Mernel's smile didn't change. His eyes did, briefly. Then he bowed." },
    { type: "say", char: "mernel", text: "Of course, Hero Kernt. We have… alternatives." },

    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "unfade", color: "black" },
    { type: "narration", text: "By evening, the wolf was gone. In his place sat a sleek, slim creature — feline in build, with shimmering pale fur. A female. They told me she'd grow into a humanoid form within a year." },
    { type: "narration", text: "She was beautiful. She was also distant in a way Night had never been. She didn't lean into my hand. She didn't bark when strangers approached." },
    { type: "narration", text: "I told myself I was building the harem of my dreams." },
    { type: "narration", text: "I should have read the room." },
    { type: "set", flags: { swap_familiar: 1, night_bond: -10, lust: 3 } },

    { type: "goto", target: "ch04_attack_intro" },
  ],
};
