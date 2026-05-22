/* ============================================
   Chapter 2 — Real clothes route (canonical)
   ============================================ */
window.SCENES = window.SCENES || {};

window.SCENES.ch02_real_clothes = {
  steps: [
    { type: "say", char: "erdan", text: "Huh? N-no, that is not what I meant when I told you to choose an outfit." },
    { type: "thought", text: "I realized I would probably have to pick something for her myself. She might think I was testing whether she made a good bed-warmer or something." },
    { type: "say", char: "erdan", text: "I will find something else for you, if that is okay." },

    { type: "narration", text: "I swear she tensed for a second before her shoulders dropped when I simply walked past her." },
    { type: "narration", text: "After a bit of digging in the absurdly large closet, I found a simple tunic dress, leggings, low boots, and a short cloak. I held them out, eye contact heroic." },
    { type: "say", char: "erdan", text: "Here. Take these instead. I do not know if they will fit though…" },

    { type: "narration", text: "She took the bundle quickly, bowed low, and hurried to the other side of the room." },
    { type: "narration", text: "She almost seemed… relieved when I gave her the clothes." },

    { type: "say", char: "erdan", text: "Oh, and I'll be going for a small walk. I barely know my way around the palace, so I thought I should look around." },
    { type: "say", char: "erdan", text: "Y-you're free to come with me once you are done changing. I'll wait just outside the door…" },

    { type: "narration", text: "I did not even wait for an answer. I closed the door behind me and let out a deep sigh, leaning against the wall." },
    { type: "wait", ms: 800 },

    { type: "narration", text: "When she finally emerged she was wearing the simple tunic dress, leather belt, soft leggings, low boots, and a short sleeveless cloak with a tiny clasp at her neck." },
    { type: "narration", text: "It all fit her pretty well, even if it was a little oversized on her slight frame." },
    { type: "say", char: "erdan", text: "It looks good on you!" },
    { type: "say", char: "mira", text: "Mhm." },

    { type: "narration", text: "Then she froze and bowed low like she had suddenly remembered who she was talking to." },
    { type: "say", char: "mira", text: "I apologize for my rudeness just now. I am grateful for your kindness and generosity." },

    { type: "thought", text: "This was going to be hard…" },
    { type: "say", char: "erdan", text: "It is fine, really. You do not have to… uh, bow or anything." },

    { type: "narration", text: "She straightened, but her eyes stayed on the floor. The awkwardness between us felt thick enough to touch." },
    { type: "say", char: "erdan", text: "So, uh, want to see the palace? Or, I mean, you do not have to if you do not want to. I just thought we could look around or whatever." },
    { type: "say", char: "mira", text: "If that is what you wish, Master." },

    { type: "thought", text: "Master. There it was again. It was not so bad being called that. I was not sure why, but I liked it." },
    { type: "thought", text: "Maybe because it made me feel… something. Or maybe because anyone would love hearing it from a girl like her." },

    { type: "goto", target: "ch02_naming" },
  ],
};

window.SCENES.ch02_naming = {
  steps: [
    { type: "bg", id: "hallway" },
    { type: "bgm", id: "bgm_hallway" },
    { type: "say", char: "erdan", text: "So, uh… what is your name?" },
    { type: "say", char: "mira", text: "I… I do not have one. Or I did, but I do not remember it." },
    { type: "say", char: "erdan", text: "Oh, uh… what are you called then? Like, do you at least have a nickname?" },
    { type: "say", char: "mira", text: "You may call me slave, servant or simply woman like my previous Master." },

    { type: "thought", text: "Come on! How am I supposed to react to that?" },

    { type: "choice", prompt: "What do you do?", options: [
      { text: "Give her a real name.", target: "ch02_name_mira", flags: { mira_trust: 2 } },
      { text: "(Don't bother. Just call her 'you'. Do as the Romans do.)", target: "ch02_no_name", flags: { mira_trust: -3, lust: 1 }, tag: "→ Familiar swap branch" },
    ]},
  ],
};

window.SCENES.ch02_name_mira = {
  steps: [
    { type: "say", char: "erdan", text: "Oh, uhm, right… but I was thinking more of a real name, you know?" },
    { type: "say", char: "erdan", text: "Do you mind if I came up with something? Just to have something to call you. It's a bit awkward if I have to say 'hey you!' every time." },
    { type: "say", char: "mira", text: "Well… if Master feels it is necessary." },

    { type: "thought", text: "A good name, a good name… I was the one who suggested it, yet my brain went completely blank." },
    { type: "thought", text: "Lily was too basic. Sora did not fit. Ellie? Joane?" },

    { type: "wait", ms: 600 },
    { type: "say", char: "erdan", text: "How about, uh… Mira?" },
    { type: "narration", text: "She repeated the name under her breath, then nodded." },
    { type: "say", char: "mira", text: "Mira… I like it. Thank you, Master." },
    { type: "set", flags: { mira_named: 1, mira_trust: 3 } },

    { type: "say", char: "erdan", text: "Cool. Mira it is, then. Glad you like it." },

    { type: "narration", text: "We kept walking. I started to feel like we had grown a little closer. At least I hoped so." },
    { type: "goto", target: "ch02_dining" },
  ],
};

// "No name" branch — leads toward Familiar Swap (#5) territory
window.SCENES.ch02_no_name = {
  steps: [
    { type: "thought", text: "Eh. Whatever. She had a function, not a name." },
    { type: "say", char: "erdan", text: "Whatever. Forget it." },
    { type: "narration", text: "She nodded, eyes downcast, and didn't push the issue. Why would she?" },
    { type: "set", flags: { mira_unnamed: 1 } },
    { type: "goto", target: "ch02_dining" },
  ],
};

window.SCENES.ch02_dining = {
  steps: [
    { type: "bg", id: "dining_room" },
    { type: "bgm", id: "bgm_dining" },
    { type: "narration", text: "We reached two giant double doors. The guards stationed outside bowed when they saw us." },
    { type: "show", char: "guard", at: "left", emotion: "neutral" },
    { type: "say", char: "guard", text: "Oh, if it is not Lord Kernt! Our chefs have prepared a meal fitting for a hero like you. I hope it is to your liking." },
    { type: "say", char: "erdan", text: "Thank you very much. I appreciate it." },

    { type: "narration", text: "I gestured Mira forward." },
    { type: "say", char: "erdan", text: "You can go in. Ladies first, you know? Haha…" },

    { type: "narration", text: "Both guards exchanged a look. One laughed softly into his hand. Mira stared at me with blank eyes." },
    { type: "say", char: "guard", text: "I apologize for our rudeness, my lord. We simply thought it was unusual how kindly you treated a mere slave." },
    { type: "narration", text: "The other added with a grin: 'I see she even has proper clothing now. Too bad. I preferred her old outfit.'" },
    { type: "narration", text: "Mira lowered her head and took a step back from the entrance." },

    { type: "thought", text: "I understood then that the previous hero had not been the only one who treated her badly." },
    { type: "say", char: "erdan", text: "Let us go inside at the same time then, Mira." },
    { type: "narration", text: "I placed a light hand on her back. She flinched at the touch but kept walking. I pulled my hand back the second my tiny burst of boldness ran out." },
    { type: "set", flags: { mira_trust: 2 } },

    { type: "hide", at: "left" },
    { type: "narration", text: "The dining room was as ridiculously opulent as I'd expected. A table big enough for thirty people. Way too much decoration for my taste." },

    { type: "show", char: "servant", at: "left", emotion: "neutral" },
    { type: "say", char: "servant", text: "L-Lord Kernt! You came earlier than we expected. Please, take a seat." },

    { type: "narration", text: "I pulled out the chair beside mine for her." },
    { type: "say", char: "mira", text: "I could not possibly eat with you as an equal, Master. This position is more fitting." },
    { type: "say", char: "erdan", text: "It is fine. Take a seat. It would feel weird if you just stood behind me while I ate." },
    { type: "say", char: "mira", text: "If that is what you wish, Master." },

    { type: "narration", text: "Appetizers arrived. Then real food. The smell hit me as the dishes piled up." },
    { type: "say", char: "erdan", text: "Excuse me, is this all just for us?" },
    { type: "say", char: "servant", text: "Hm? Yes, this is for you. I am not sure what you meant by us." },
    { type: "say", char: "erdan", text: "I meant Mira." },
    { type: "narration", text: "He looked at her like he had only just noticed, then straightened up again." },
    { type: "say", char: "servant", text: "This meal was prepared specifically for you, Lord Kernt. You are free to share the remains with the slave if that is what you wish." },
    { type: "narration", text: "He put extra weight on the word 'slave' and didn't even try to hide it." },

    { type: "say", char: "erdan", text: "I was actually thinking she would eat… with me…" },
    { type: "thought", text: "My voice became thinner as my confidence waned. I'm an outsider, so I might've been pushing the boundaries." },
    { type: "say", char: "servant", text: "You are truly a generous hero, Lord Kernt! I understand. We will serve your slave— excuse me, Miss Mira, as well." },
    { type: "set", flags: { mira_trust: 1 } },
    { type: "hide", at: "left" },

    { type: "narration", text: "Mira finally started eating, taking small bites. At one point, I saw her closing her eyes after taking a spoonful of soup, like it was the first warm thing she'd tasted in weeks." },
    { type: "narration", text: "I didn't know what to say. So I just kept eating, stealing glances at her every now and then and pretending I wasn't." },

    { type: "say", char: "erdan", text: "I am so full! You can eat as much as you want, so do not hold back." },
    { type: "say", char: "mira", text: "Mhm." },
    { type: "thought", text: "Yes, progress! That felt good." },

    { type: "narration", text: "I heard the door open behind me. Probably just a servant doing servant things." },
    { type: "show", char: "gux", at: "right", emotion: "neutral" },
    { type: "say", char: "gux", text: "Lord Kernt? Got a moment?" },
    { type: "thought", text: "Guess not." },
    { type: "goto", target: "ch03_gux_ren" },
  ],
};

// =====================================================================
// LUST ROUTE — Erdan accepts the straps. Track to Ending #1.
// =====================================================================
window.SCENES.ch02_lust_route_in = {
  steps: [
    { type: "thought", text: "She offered. The straps. The 'master' thing. The previous hero clearly liked her like that, and… she's not going to fight me." },
    { type: "thought", text: "It's just like the isekai I read. Right? Right." },

    { type: "say", char: "erdan", text: "…Yeah. It's fine. Stay like that." },
    { type: "narration", text: "She didn't blink. She didn't flinch. She just nodded, once, the way you nod when someone is confirming something you already knew." },

    { type: "narration", text: "I told myself it was consent. I knew, somewhere underneath, that consent isn't 'she didn't fight back.' I ignored that part of myself, the way I always did." },

    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "narration", text: "The hours after blurred together in a way that, looking back, would feel like watching myself from across a room." },
    { type: "narration", text: "She did everything I asked. She didn't smile. She didn't refuse. By the time I fell asleep with my arm across her waist, I was already drafting a list of which other women in this world I might 'try' next." },
    { type: "set", flags: { lust: 5, mira_trust: -10, lust_route: 1 } },
    { type: "unfade", color: "black" },
    { type: "bg", id: "erdan_room" },
    { type: "wait", ms: 400 },
    { type: "thought", text: "This isekai thing was going to be incredible." },

    { type: "goto", target: "ch03_gux_ren" },
  ],
};
