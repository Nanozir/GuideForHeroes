/* ============================================
   Chapter 2 — Real Clothes / Naming / Dining
   ============================================
   Adapts manuscript Ch3 "Not a Fashionista, Not a Master"
   Canonical route: find real clothes, name her, dining hall.
   Lust route: accept the straps (leads to Ending #1 later).
*/
window.SCENES = window.SCENES || {};

// =====================================================================
// CANONICAL: FIND HER REAL CLOTHES
// =====================================================================
window.SCENES.ch02_real_clothes = {
  steps: [
    { type: "say", char: "erdan", text: "Huh? N-no, that is not what I meant when I told you to choose an outfit." },
    { type: "thought", text: "I realized I would probably have to pick something for her myself. She might think I was testing whether she made a good bed-warmer or something." },

    { type: "narration", text: "With a small sigh I stood up and walked to the closet, giving her a little smile as I passed." },
    { type: "say", char: "erdan", text: "I will find something else for you, if that is okay." },
    { type: "narration", text: "I swear she tensed for a second before her shoulders dropped when I simply walked past her." },

    { type: "narration", text: "I was no fashion expert. I only ever wore stuff that was comfortable and practical. The grey cargo pants and red polo I still had on were more than enough for me." },
    { type: "narration", text: "The closet itself was way bigger than I expected, stuffed with fancy clothes that were definitely for formal occasions. I wasn't touching any of those willingly." },
    { type: "narration", text: "In the corner on the floor I spotted a few items I instantly recognized as sex toys. I grabbed a nearby shirt and tossed it over them." },
    { type: "thought", text: "Yeah. I definitely did not want to see those every time I needed new pants." },

    { type: "narration", text: "After a bit more digging I finally found something decent." },
    { type: "narration", text: "I stood in front of her again, holding out the neatly folded clothes and trying my hardest to keep eye contact." },
    { type: "say", char: "erdan", text: "Here, take these instead. I do not know if they will fit though…" },
    { type: "narration", text: "She looked down at the bundle, mouth opening slightly, then took them quickly and bowed low before hurrying to the other side of the room." },
    { type: "narration", text: "She almost seemed… relieved when I gave her the clothes. A small smile tugged at my own lips, and I turned around quickly before she could see it." },

    // --- GIVING HER PRIVACY ---
    { type: "say", char: "erdan", text: "Oh, and I'll be going for a small walk. I barely know my way around the palace, so I thought I should look around." },
    { type: "say", char: "erdan", text: "Y-you're free to come with me once you are done changing. I'll wait just outside the door…" },
    { type: "narration", text: "I did not even wait for an answer, my face already hot from how awkward that came out. I closed the door behind me, checked left and right to make sure the hall was empty, then leaned against the wall and let out a deep sigh." },

    { type: "wait", ms: 600 },
    { type: "narration", text: "I had no idea how long I zoned out, playing imaginary conversations in my head, before the doorknob turned." },
    { type: "narration", text: "I pushed off the wall and turned to see her properly dressed." },

    { type: "narration", text: "She wore a simple tunic dress, clean-cut and long enough to brush her knees. A leather belt cinched her waist, paired with soft leggings and low, well-worn boots. A short sleeveless cloak hung from her shoulders, fastened at the neck with a tiny clasp I could barely see." },
    { type: "narration", text: "It all fit her pretty well, even if it was a little oversized on her slight frame." },

    { type: "say", char: "erdan", text: "It looks good on you!" },
    { type: "narration", text: "She fidgeted with the hem of the dress and let out a small \"Mhm,\" but then froze and bowed low like she had suddenly remembered who she was talking to." },
    { type: "say", char: "mira", text: "I apologize for my rudeness just now. I am grateful for your kindness and generosity." },

    { type: "thought", text: "This was going to be hard…" },
    { type: "say", char: "erdan", text: "It is fine, really. You do not have to… uh, bow or anything." },
    { type: "narration", text: "She straightened, but her eyes stayed on the floor. The awkwardness between us was thick enough to touch." },

    { type: "say", char: "erdan", text: "So, uh, want to see the palace? Or, I mean, you do not have to if you do not want to. I just thought we could look around or whatever." },
    { type: "narration", text: "I knew I had basically repeated myself from earlier, but I couldn't help it. My mouth always did that when my brain hadn't planned the words ahead." },
    { type: "say", char: "mira", text: "If that is what you wish, Master." },

    { type: "thought", text: "There it was again. Master." },
    { type: "thought", text: "It wasn't so bad being called that. I was not sure why, but I liked it. Maybe because it made me feel… something. Or maybe because anyone would love hearing it from a girl like her." },

    { type: "set", flags: { mira_trust: 2 } },
    { type: "goto", target: "ch02_naming" },
  ],
};

// =====================================================================
// THE NAMING
// =====================================================================
window.SCENES.ch02_naming = {
  steps: [
    { type: "bg", id: "hallway" },
    { type: "bgm", id: "bgm_hallway" },
    { type: "narration", text: "I started walking down the hall, hands in pockets, and she followed close behind. The silence didn't bother me, but this felt like the perfect moment to keep talking. Letting it die now would make things weird later." },

    { type: "say", char: "erdan", text: "So, uh… what is your name?" },
    { type: "narration", text: "She hesitated, then answered softly." },
    { type: "say", char: "mira", text: "I… I do not have one. Or I did, but I do not remember it." },

    { type: "thought", text: "Not really that surprising for a former slave. Her name probably wouldn't have mattered around here anyway." },

    { type: "say", char: "erdan", text: "Oh, uh… what are you called then? Like, do you at least have a nickname?" },
    { type: "narration", text: "She looked up at me for a second." },
    { type: "say", char: "mira", text: "You may call me slave, servant or simply woman like my previous Master." },

    { type: "thought", text: "Come on! How am I supposed to react to that?" },

    { type: "choice", prompt: "What do you do?", options: [
      { text: "\"I was thinking more of a real name, you know?\"", target: "ch02_name_mira", flags: { mira_trust: 2 } },
      { text: "(Don't bother. Just call her 'you'. Do as the Romans do.)", target: "ch02_no_name", flags: { mira_trust: -3, lust: 1 }, tag: "→ Familiar swap seeds" },
    ]},
  ],
};

// --- Canonical: give her the name Mira ---
window.SCENES.ch02_name_mira = {
  steps: [
    { type: "say", char: "erdan", text: "Oh, uhm, right… but I was thinking more of a real name, you know?" },
    { type: "say", char: "erdan", text: "Do you mind if I came up with something? Just to have something to call you. It's a bit awkward if I have to say 'hey you!' every time." },
    { type: "say", char: "mira", text: "Well… if Master feels it is necessary." },

    { type: "thought", text: "Great, she finally gave in!" },
    { type: "thought", text: "A good name, a good name… I was the one who suggested it, yet my brain went completely blank." },
    { type: "thought", text: "Lily was too basic. Sora didn't fit. Ellie? Joane?" },

    { type: "wait", ms: 400 },
    { type: "narration", text: "After a full minute I finally landed on something simple enough." },
    { type: "say", char: "erdan", text: "How about, uh… Mira?" },
    { type: "narration", text: "She repeated the name under her breath, then nodded." },
    { type: "say", char: "mira", text: "Mira… I like it. Thank you, Master." },

    { type: "reveal_name", char: "mira", name: "Mira" },
    { type: "narration", text: "I let out a breath I hadn't realized I was holding and dared a small smile." },
    { type: "say", char: "erdan", text: "Cool. Mira it is, then. Glad you like it." },
    { type: "set", flags: { mira_named: 1, mira_trust: 3 } },

    { type: "narration", text: "We kept walking, and I started to feel like we had grown a little closer. At least I hoped so." },
    { type: "narration", text: "We passed a few guards patrolling or standing at posts. Some even bowed their heads slightly in respect. I gave them tentative smiles and small nods back, not entirely sure if I was supposed to, but doing it anyway." },

    { type: "narration", text: "Then I remembered something." },
    { type: "say", char: "erdan", text: "Hey, Mira? Do you know where the kitchen is? I mean… the dining room." },
    { type: "narration", text: "She glanced out the window at a small garden with a giant grandfather clock in the middle." },
    { type: "say", char: "mira", text: "I do, Master. I can show you the way. Lunch is about to be served soon anyways." },
    { type: "say", char: "erdan", text: "Yeah, please do." },

    { type: "goto", target: "ch02_dining" },
  ],
};

// --- No-name branch (seeds the familiar-swap path) ---
window.SCENES.ch02_no_name = {
  steps: [
    { type: "thought", text: "Eh. Whatever. She had a function, not a name. If this was how people worked here, who was I to argue?" },
    { type: "say", char: "erdan", text: "Whatever. Forget it." },
    { type: "narration", text: "She nodded, eyes downcast, and didn't push the issue. Why would she?" },
    { type: "set", flags: { mira_unnamed: 1 } },
    { type: "narration", text: "We walked in silence. It was a different kind of silence than before — heavier, with less room in it for either of us." },
    { type: "goto", target: "ch02_dining" },
  ],
};

// =====================================================================
// DINING HALL (ROUTER)
// =====================================================================
window.SCENES.ch02_dining = {
  steps: [
    { type: "if", flag: "mira_unnamed", op: ">=", value: 1, then: "ch02_dining_unnamed", else: "ch02_dining_named" },
  ],
};

// =====================================================================
// DINING HALL — NAMED PATH (canonical, Mira has a name)
// =====================================================================
window.SCENES.ch02_dining_named = {
  steps: [
    { type: "bg", id: "dining_room" },
    { type: "bgm", id: "bgm_dining" },
    { type: "narration", text: "We reached two giant double doors. The guards stationed outside bowed when they saw us." },
    { type: "say", char: "guard", text: "Oh, if it is not Lord Kernt! Our chefs have prepared a meal fitting for a hero like you. I hope it is to your liking." },
    { type: "say", char: "erdan", text: "Thank you very much. I appreciate it." },
    { type: "narration", text: "I smiled and nodded, then glanced at Mira and gestured her forward." },
    { type: "say", char: "erdan", text: "You can go in. Ladies first, you know? Haha…" },

    { type: "narration", text: "Both guards exchanged a look. One laughed softly into his hand. Mira stared at me with blank eyes. I wondered if I had said something weird." },
    { type: "say", char: "erdan", text: "What?" },
    { type: "say", char: "guard", text: "I apologize for our rudeness, my lord. We simply thought it was unusual how kindly you treated a mere slave." },
    { type: "narration", text: "The other guard added with a grin: \"I see she even has proper clothing now. Too bad. I preferred her old outfit.\"" },

    { type: "narration", text: "Mira lowered her head and took a step back from the entrance." },
    { type: "thought", text: "I understood then that the previous hero had not been the only one who treated her badly." },

    { type: "say", char: "erdan", text: "Let us go inside at the same time then, Mira." },
    { type: "narration", text: "I hesitated, then placed a light hand on her back to guide her forward. Being this casual with a girl was not like me, but right now the important thing was to make a statement: That I was here for her." },
    { type: "narration", text: "She flinched at the touch but kept walking. I pulled my hand back the second my tiny burst of boldness ran out." },
    { type: "set", flags: { mira_trust: 2 } },

    // --- INSIDE THE DINING HALL ---
    { type: "narration", text: "The dining room was as ridiculously opulent as I had expected, with a table big enough for thirty people and way too much decoration for my taste. Coming from a cramped apartment shared with six family members, the whole thing felt more off-putting than impressive." },

    { type: "show", char: "servant", at: "left", emotion: "neutral" },
    { type: "say", char: "servant", text: "L-Lord Kernt! You came earlier than we expected. Please, take a seat." },
    { type: "narration", text: "He pulled out a chair for me. I gave my usual nod and smile." },
    { type: "say", char: "erdan", text: "Thanks." },
    { type: "narration", text: "I glanced back at Mira and pulled out the chair beside mine." },
    { type: "say", char: "mira", text: "I could not possibly eat with you as an equal, Master. This position is more fitting." },
    { type: "say", char: "erdan", text: "It is fine. Take a seat. It would feel weird if you just stood behind me while I ate." },
    { type: "say", char: "mira", text: "If that is what you wish, Master." },

    { type: "narration", text: "Finally, she sat beside me, hands folded in her lap, eyes downcast. The servant hurried back with plates." },
    { type: "say", char: "erdan", text: "Excuse me, is this all just for us?" },
    { type: "say", char: "servant", text: "Hm? Yes, this is for you. I am not sure what you meant by us." },
    { type: "say", char: "erdan", text: "I meant Mira." },
    { type: "narration", text: "He looked at her like he had only just noticed her existence, then straightened up again." },
    { type: "say", char: "servant", text: "This meal was prepared specifically for you, Lord Kernt. You are free to share the remains with the slave if that is what you wish." },
    { type: "narration", text: "He put extra weight on the word 'slave' and didn't even try to hide it." },

    { type: "say", char: "erdan", text: "I was actually thinking she would eat… with me…" },
    { type: "thought", text: "My voice became thinner as my confidence waned. I'm an outsider, so I might've been pushing the boundaries." },
    { type: "narration", text: "His lip tightened for a moment before he forced a smile that never reached his eyes." },
    { type: "say", char: "servant", text: "You are truly a generous hero, Lord Kernt! I understand. We will serve your slave— excuse me, Miss Mira, as well." },
    { type: "narration", text: "He excused himself and left." },
    { type: "hide", at: "left" },

    { type: "narration", text: "I let out a small sigh. When I noticed Mira watching me, I just gave her a small, awkward smile." },
    { type: "set", flags: { mira_trust: 1 } },

    // --- EATING ---
    { type: "narration", text: "When everything was laid out, I dug in right away. Meats I could not name, stews still bubbling in their bowls, juicy cuts, and soft bread that practically melted. Grilled vegetables in something sweet sat there too, but I skipped most of them." },
    { type: "narration", text: "Mira didn't touch anything at first. She sat with her hands in her lap, eyes flicking over the dishes like she wasn't sure she was allowed to breathe the air around the food." },
    { type: "narration", text: "I slid a plate of roasted chicken closer to her and gestured with my chin since my mouth was full." },
    { type: "say", char: "erdan", text: "Mmmh, mmh!" },
    { type: "narration", text: "She blinked, understood the nonsense, and slowly reached for a piece." },

    { type: "narration", text: "We ate in silence for a while. At one point, I saw her closing her eyes after taking a spoonful of soup, as if it was the first warm thing she'd tasted in weeks." },
    { type: "thought", text: "I didn't know what to say. I wasn't used to this kind of quiet gratitude, or sadness, or hunger — whatever it was. So I just kept eating, stealing glances at her every now and then and pretending I wasn't." },

    { type: "narration", text: "When I finally finished, I leaned back with a content sigh." },
    { type: "say", char: "erdan", text: "I am so full! You can eat as much as you want, so do not hold back." },
    { type: "narration", text: "She gave a small nod and nibbled on a piece of bread." },
    { type: "thought", text: "Yes, progress! That felt good." },

    // --- GUX ARRIVES ---
    { type: "narration", text: "I heard the door open behind me but did not bother looking. Probably just a servant doing servant things." },
    { type: "say", char: "gux", text: "Lord Kernt? Got a moment?" },
    { type: "thought", text: "Guess not." },

    { type: "goto", target: "ch03_gux_ren" },
  ],
};

// =====================================================================
// DINING HALL — UNNAMED PATH (Mira has no name)
// =====================================================================
window.SCENES.ch02_dining_unnamed = {
  steps: [
    { type: "bg", id: "dining_room" },
    { type: "bgm", id: "bgm_dining" },
    { type: "narration", text: "We reached two giant double doors. The guards stationed outside bowed when they saw us." },
    { type: "say", char: "guard", text: "Oh, if it is not Lord Kernt! Our chefs have prepared a meal fitting for a hero like you. I hope it is to your liking." },
    { type: "say", char: "erdan", text: "Thank you very much. I appreciate it." },
    { type: "narration", text: "I smiled and nodded, then glanced at her and gestured forward." },
    { type: "say", char: "erdan", text: "You can go in. Ladies first, you know? Haha…" },

    { type: "narration", text: "Both guards exchanged a look. One laughed softly into his hand. She stared at me with blank eyes. I wondered if I had said something weird." },
    { type: "say", char: "erdan", text: "What?" },
    { type: "say", char: "guard", text: "I apologize for our rudeness, my lord. We simply thought it was unusual how kindly you treated a mere slave." },
    { type: "narration", text: "The other guard added with a grin: \"I see she even has proper clothing now. Too bad. I preferred her old outfit.\"" },

    { type: "narration", text: "She lowered her head and took a step back from the entrance." },
    { type: "thought", text: "I understood then that the previous hero had not been the only one who treated her badly." },

    { type: "say", char: "erdan", text: "Let us go inside at the same time then." },
    { type: "narration", text: "I hesitated, then placed a light hand on her back to guide her forward. Being this casual with a girl was not like me, but right now the important thing was to make a statement: That I was here for her." },
    { type: "narration", text: "She flinched at the touch but kept walking. I pulled my hand back the second my tiny burst of boldness ran out." },
    { type: "set", flags: { mira_trust: 2 } },

    // --- INSIDE THE DINING HALL ---
    { type: "narration", text: "The dining room was as ridiculously opulent as I had expected, with a table big enough for thirty people and way too much decoration for my taste. Coming from a cramped apartment shared with six family members, the whole thing felt more off-putting than impressive." },

    { type: "show", char: "servant", at: "left", emotion: "neutral" },
    { type: "say", char: "servant", text: "L-Lord Kernt! You came earlier than we expected. Please, take a seat." },
    { type: "narration", text: "He pulled out a chair for me. I gave my usual nod and smile." },
    { type: "say", char: "erdan", text: "Thanks." },
    { type: "narration", text: "I glanced back at her and pulled out the chair beside mine." },
    { type: "say", char: "mira", text: "I could not possibly eat with you as an equal, Master. This position is more fitting." },
    { type: "say", char: "erdan", text: "It is fine. Take a seat. It would feel weird if you just stood behind me while I ate." },
    { type: "say", char: "mira", text: "If that is what you wish, Master." },

    { type: "narration", text: "Finally, she sat beside me, hands folded in her lap, eyes downcast. The servant hurried back with plates." },
    { type: "say", char: "erdan", text: "Excuse me, is this all just for us?" },
    { type: "say", char: "servant", text: "Hm? Yes, this is for you. I am not sure what you meant by us." },
    { type: "say", char: "erdan", text: "I mean her. She eats with me." },
    { type: "narration", text: "He looked at her like he had only just noticed her existence, then straightened up again." },
    { type: "say", char: "servant", text: "This meal was prepared specifically for you, Lord Kernt. You are free to share the remains with the slave if that is what you wish." },
    { type: "narration", text: "He put extra weight on the word 'slave' and didn't even try to hide it." },

    { type: "say", char: "erdan", text: "I was actually thinking she would eat… with me…" },
    { type: "thought", text: "My voice became thinner as my confidence waned. I'm an outsider, so I might've been pushing the boundaries." },
    { type: "narration", text: "His lip tightened for a moment before he forced a smile that never reached his eyes." },
    { type: "say", char: "servant", text: "You are truly a generous hero, Lord Kernt! I understand. We will serve your companion as well." },
    { type: "reveal_name", char: "mira", name: "Slave" },
    { type: "narration", text: "He excused himself and left." },
    { type: "hide", at: "left" },

    { type: "narration", text: "I let out a small sigh. When I noticed her watching me, I just gave her a small, awkward smile." },
    { type: "set", flags: { mira_trust: 1 } },

    // --- EATING ---
    { type: "narration", text: "When everything was laid out, I dug in right away. Meats I could not name, stews still bubbling in their bowls, juicy cuts, and soft bread that practically melted. Grilled vegetables in something sweet sat there too, but I skipped most of them." },
    { type: "narration", text: "She didn't touch anything at first. She sat with her hands in her lap, eyes flicking over the dishes like she wasn't sure she was allowed to breathe the air around the food." },
    { type: "narration", text: "I slid a plate of roasted chicken closer to her and gestured with my chin since my mouth was full." },
    { type: "say", char: "erdan", text: "Mmmh, mmh!" },
    { type: "narration", text: "She blinked, understood the nonsense, and slowly reached for a piece." },

    { type: "narration", text: "We ate in silence for a while. At one point, I saw her closing her eyes after taking a spoonful of soup, as if it was the first warm thing she'd tasted in weeks." },
    { type: "thought", text: "I didn't know what to say. I wasn't used to this kind of quiet gratitude, or sadness, or hunger — whatever it was. So I just kept eating, stealing glances at her every now and then and pretending I wasn't." },

    { type: "narration", text: "When I finally finished, I leaned back with a content sigh." },
    { type: "say", char: "erdan", text: "I am so full! You can eat as much as you want, so do not hold back." },
    { type: "narration", text: "She gave a small nod and nibbled on a piece of bread." },
    { type: "thought", text: "Yes, progress! That felt good." },

    // --- GUX ARRIVES ---
    { type: "narration", text: "I heard the door open behind me but did not bother looking. Probably just a servant doing servant things." },
    { type: "say", char: "gux", text: "Lord Kernt? Got a moment?" },
    { type: "thought", text: "Guess not." },

    { type: "goto", target: "ch03_gux_ren" },
  ],
};

// =====================================================================
// LUST ROUTE — Erdan accepts the straps
// =====================================================================
window.SCENES.ch02_lust_route_in = {
  steps: [
    { type: "thought", text: "She offered. The straps. The 'master' thing. The previous hero clearly liked her this way, and… she's not going to fight me on it." },
    { type: "thought", text: "It's just like the isekai I read. Right? Right." },

    { type: "say", char: "erdan", text: "…Yeah. It's fine. Stay like that." },
    { type: "narration", text: "She didn't blink. She didn't flinch. She just nodded, once — the way you nod when someone is confirming something you already knew was coming." },

    { type: "thought", text: "I told myself it was consent. I knew, somewhere underneath, that consent isn't 'she didn't fight back.' I ignored that part of myself, the way I always did." },

    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "narration", text: "The hours after blurred together in a way that, looking back, would feel like watching myself from across a room." },
    { type: "narration", text: "She did everything I asked. She didn't smile. She didn't refuse. By the time I fell asleep with my arm across her waist, I was already drafting a list of which other women in this world I might 'try' next." },
    { type: "set", flags: { lust: 5, mira_trust: -10, lust_route: 1 } },
    { type: "unfade", color: "black" },
    { type: "bg", id: "erdan_room" },
    { type: "wait", ms: 400 },
    { type: "thought", text: "This isekai thing was going to be incredible." },

    { type: "narration", text: "The next day went about the same as it would have otherwise. Mernel came. Kina came. I met the people I was supposed to meet. The only difference was the girl trailing behind me in straps, and the way people looked at her, and the way she didn't look at anything." },
    { type: "narration", text: "I told myself this was normal here. That made it easier." },

    { type: "goto", target: "ch03_gux_ren" },
  ],
};
