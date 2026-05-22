/* ============================================
   Chapter 3 — Gux, Ren, Palace Tour, Night
   ============================================
   Adapts manuscript Ch4 "A Familiar Problem" and
   Ch5 "A Girl Who Wants to Be Weird" (Night taming).
*/
window.SCENES = window.SCENES || {};

// =====================================================================
// GUX AND REN INTRODUCTION
// =====================================================================
window.SCENES.ch03_gux_ren = {
  steps: [
    { type: "bgm", id: "bgm_dining" },
    { type: "narration", text: "His voice carried a rough drawl, thick but oddly charming. Definitely not from around here." },
    { type: "narration", text: "I turned and almost flinched. A lizardman stood way too close. I had figured lizardmen avoided human settlements in fantasy stories, but apparently this one didn't care about the trope." },

    { type: "show", char: "gux", at: "right", emotion: "neutral" },
    { type: "say", char: "erdan", text: "Yeah, the food was good. Thanks." },
    { type: "narration", text: "He caught my confusion and smirked, bowing low. His smooth green scales caught the light while his thick tail swayed lazily behind him." },

    { type: "say", char: "gux", text: "First, let me introduce myself. My name is Guxanjux, Commander of the Draconid Vanguard. I have been assigned as your trainer in close combat. And do not worry, I am more than capable of making a hero like you strong enough to stop Doomsday once and for all!" },
    { type: "narration", text: "Weird. He called himself a commander but wore no armor and carried no sword. Just a brown vest and loose pants. He looked more like a commoner than anything official." },
    { type: "say", char: "erdan", text: "Gu… Guxanjux?" },
    { type: "narration", text: "His face split into a wide grin before he burst out laughing." },
    { type: "say", char: "gux", text: "Bwahaha! You are probably the first human to come close to saying my name right. Close, but not quite!" },
    { type: "narration", text: "He slapped my back playfully and wiped a tear from his eye." },
    { type: "say", char: "gux", text: "Ya can call me Gux. Most do, since the full thing is a mouthful." },
    { type: "say", char: "erdan", text: "Alright, I'll call you Gux then. And I'm Erdan, so you can just call me that." },
    { type: "say", char: "gux", text: "Lord Erdan, then. If you are done eating, allow me to escort you to the training chamber." },
    { type: "say", char: "erdan", text: "Training? Already?" },
    { type: "thought", text: "Physical exercise sounded like the opposite of what I wanted right now." },
    { type: "say", char: "gux", text: "No no, not yet. I simply thought it would be good for you to know your way around. I will be training you thoroughly each day, after all." },
    { type: "thought", text: "Each day? This is a nightmare. I have to work out from now on?" },
    { type: "say", char: "erdan", text: "Is it obligatory though…?" },
    { type: "say", char: "gux", text: "The danger you will face is nothing to underestimate. A little daily training is nothing compared to the real fight. You have my word on that." },
    { type: "thought", text: "He was right, but I still didn't want to do it." },

    // --- REN BARGES IN ---
    { type: "narration", text: "The door burst open again, startling me." },
    { type: "show", char: "ren", at: "left", emotion: "neutral" },
    { type: "say", char: "ren", text: "Hey, Erdan! You in here? I heard you managed to cast a spell without an incantation!" },
    { type: "narration", text: "The newcomer wore white shorts under a white coat, a red vest, and a white shirt underneath. Pure white hair with red streaks at the ends." },
    { type: "say", char: "gux", text: "Oi oi, come on! Ya can't have him, boy-girl! I was assigned as his trainer, so know your place!" },
    { type: "thought", text: "Boy-girl? Wait… so not a girl?" },
    { type: "say", char: "ren", text: "Heh, I would not want the hero tainted by your dirty lizard fingers, after all. He is better off with me, so hand him over!" },

    { type: "narration", text: "While they argued over me, I just sat there, looking back and forth, praying I would not have to pick a side. I hated decisions. Especially ones that involved people." },
    { type: "say", char: "gux", text: "Hey, brat, how about you scurry back to your dollhouse?" },
    { type: "say", char: "ren", text: "Huuuh!? YOU should go back to your swamp, stupid lizard!" },

    { type: "narration", text: "Mira leaned in close and pointed." },
    { type: "say", char: "mira", text: "Master. You have already met Guxanjux, Commander of the Draconid Vanguard. The other is Ren, Second Division Mage. He is an equar, which is why he appears younger and shorter than he is." },
    { type: "say", char: "erdan", text: "Oh, alright…" },
    { type: "thought", text: "So, the little guy was Ren. His appearance was similar to the equar merchant from the alliance gathering. Either way, Ren definitely looked better. Femboy potential, for sure." },
    { type: "thought", text: "Mhm. Definitely keeping a spot open in the potential harem." },

    { type: "say", char: "erdan", text: "Do they always bicker like this?" },
    { type: "say", char: "mira", text: "Yes. Ren harbors prejudice against lizardmen." },
    { type: "say", char: "erdan", text: "Prejudice?" },
    { type: "say", char: "mira", text: "Simply put, he is racist." },
    { type: "say", char: "erdan", text: "Ah…" },
    { type: "say", char: "mira", text: "As for Gux, he embodies the stereotypical 'macho' male. In his eyes, Ren is a failure as a man due to his feminine appearance." },
    { type: "say", char: "erdan", text: "You know what macho means?" },
    { type: "say", char: "mira", text: "Yes. I heard it from Yosuke Minato." },
    { type: "thought", text: "Guess he was influential in more ways than one." },

    // --- MERNEL INTERVENES ---
    { type: "say", char: "gux", text: "That's it! I challenge you to a duel! And without those puny Spells of yours!" },
    { type: "say", char: "ren", text: "No magic? I'm not a brute like you! And my Spells are not 'puny'! They're honed from years of study, you illiterate buffoon!" },

    { type: "show", char: "mernel", at: "center", emotion: "stern" },
    { type: "sfx", id: "door" },
    { type: "say", char: "mernel", text: "You two, quiet down at once! Do you not have any respect, fighting like barbarians in the royal palace?" },
    { type: "narration", text: "Both of them jumped. Gux looked guilty as hell." },
    { type: "say", char: "ren", text: "B-but Master, he provoked me first!" },
    { type: "say", char: "mernel", text: "Some of us are busy doing work!" },
    { type: "narration", text: "Mernel stopped when he saw me. His eyes widened briefly before he straightened and bowed." },
    { type: "say", char: "mernel", text: "Lord Kernt, allow me to apologize for their actions. I assure you they meant no harm." },
    { type: "say", char: "erdan", text: "It's fine, really. Thanks anyway, Mernel." },
    { type: "say", char: "mernel", text: "You are simply too merciful, my lord. As you may be staying here for a prolonged time, it might do you well to learn the layout so you will not get lost. Allow me to show you around in their stead." },
    { type: "narration", text: "He gestured dismissively toward the thoroughly chastised Ren and Gux, who both suddenly found the floor very interesting." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "goto", target: "ch03_tour" },
  ],
};

// =====================================================================
// PALACE TOUR + CHAPEL
// =====================================================================
window.SCENES.ch03_tour = {
  steps: [
    { type: "bg", id: "hallway" },
    { type: "bgm", id: "bgm_hallway" },
    { type: "show", char: "mernel", at: "center", emotion: "neutral" },
    { type: "narration", text: "Mernel explained the different facilities and rooms in the palace as we passed by them. I would just nod along and pay attention, though I'd forget most of what he said just a few seconds later." },
    { type: "narration", text: "The palace was gigantic, probably the size of a small town by itself. The hallway walls were covered in beautiful red velvet, with intricate golden patterns and tapestries. There weren't many portraits, just a few that I guessed depicted nobles or previous kings." },

    { type: "narration", text: "Mernel noticed me staring at a particular portrait of a woman." },
    { type: "say", char: "mernel", text: "Do you know who this is, Lord Kernt?" },
    { type: "narration", text: "I shook my head." },
    { type: "say", char: "mernel", text: "It's actually Queen Elisabeth." },
    { type: "say", char: "erdan", text: "Oh, really?" },
    { type: "thought", text: "I weren't really into older women that much, but I had to admit she certainly had good looks." },
    { type: "say", char: "erdan", text: "But if she has a painting of herself, why did she hide behind that red… velvet thing? Is she sick or something?" },
    { type: "say", char: "mernel", text: "Ah, it's quite complicated, and this is hardly a place to discuss it." },
    { type: "say", char: "erdan", text: "Oh, I see. It's fine though." },

    { type: "narration", text: "He showed us the courtyard, a grand library in the vicinity of my bedroom, the guardroom, the storeroom, cellar, and lastly, a chapel." },

    // --- CHAPEL / MARCEL ---
    { type: "bg", id: "courtyard" },
    { type: "narration", text: "As we reached the entrance to the chapel, Mira spoke up in her usual calm tone." },
    { type: "say", char: "mira", text: "You go ahead Master, I will wait here." },
    { type: "say", char: "erdan", text: "Ah, alright." },

    { type: "hide", at: "center" },
    { type: "narration", text: "Once inside, it immediately reminded me of a mix between a catholic church and something else I couldn't quite put my finger on." },
    { type: "narration", text: "My eyes landed on the back of someone at the far end of the room near the altar. Mernel took a few steps forward and called out." },
    { type: "say", char: "mernel", text: "Good day, Marcel! It's rare to see you around here so early." },

    { type: "show", char: "marcel", at: "right", emotion: "neutral" },
    { type: "narration", text: "The man turned, eyes widening in recognition as he walked towards us." },
    { type: "say", char: "marcel", text: "Ah, if it isn't the Court Mage Mernel. And the hero himself too! It's a pleasure to meet you." },
    { type: "narration", text: "He stopped in front of me, grabbing my hand with both of his as he shook it with enthusiasm." },
    { type: "say", char: "marcel", text: "It's an honor to meet you, Hero Kernt. While you may not have achieved anything worthy of such recognition yet, you must understand that someone blessed with gifts from our lord is not to be treated lightly. I expect great things from you, Hero!" },
    { type: "thought", text: "That explains why heroes are so valued." },
    { type: "say", char: "erdan", text: "Thanks, sir." },
    { type: "say", char: "marcel", text: "Such a polite young man too, aren't you? A word of advice — don't let your greed corrupt you. It has happened more than you think with the previous heroes." },
    { type: "say", char: "erdan", text: "Ah, I kno–… I mean, I will be careful." },

    { type: "narration", text: "He patted my shoulder firmly, then held his hand out for a handshake." },
    { type: "say", char: "marcel", text: "I should probably introduce myself. I'm Marcel Kirshinov, the head priest here. If you have any questions about your duties or about our lord, don't be afraid to visit." },
    { type: "thought", text: "Kirshinov? That almost sounds like a Russian surname…" },
    { type: "say", char: "erdan", text: "Yeah, I'll keep that in mind." },
    { type: "set", flags: { met_marcel: 1 } },

    { type: "hide", at: "right" },
    { type: "narration", text: "I waved at him as I walked out of the chapel with Mernel." },
    { type: "narration", text: "I then remembered that Mira had been waiting near the entrance. I glanced left and right, but couldn't find her." },
    { type: "say", char: "mira", text: "Master." },
    { type: "say", char: "erdan", text: "Huh?" },
    { type: "narration", text: "I looked down to find Mira sitting against the wall with her knees drawn up to her chest, looking up at me with that same unreadable expression." },
    { type: "narration", text: "I hesitated before reaching out a hand to help her up." },
    { type: "narration", text: "My generous offer was ignored without a second thought. She stood up, brushing her skirt off." },
    { type: "say", char: "mira", text: "Thank you, Master, but I can stand on my own." },
    { type: "thought", text: "I showed her a bit of kindness and she's already showing me an attitude? Well, damn her!" },
    { type: "narration", text: "That thought quickly passed as she gave me a short bow. I just felt a bit embarrassed, rubbing the back of my head." },
    { type: "say", char: "erdan", text: "R-right. Let's catch up with Mernel then." },

    { type: "goto", target: "ch03_familiar_choice" },
  ],
};

// =====================================================================
// FAMILIAR — THE WOLF IN THE ROOM
// =====================================================================
window.SCENES.ch03_familiar_choice = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "After a bit of walking, we arrived back to where my room was." },
    { type: "say", char: "erdan", text: "Didn't you say you were going to show me something? We're just back to my room…" },

    { type: "show", char: "mernel", at: "left", emotion: "soft" },
    { type: "say", char: "mernel", text: "Hero Kernt, we took the chance while you were out to prepare a little gift for you." },
    { type: "say", char: "erdan", text: "Really? But I've already gotten so much, so I don't really need more…" },
    { type: "say", char: "mernel", text: "Ah, don't be shy! It's only natural we help you settle in and make your life here comfortable. Or something like that." },
    { type: "thought", text: "What an honest man…" },

    { type: "narration", text: "Swallowing lightly, I pressed down the doorhandle and slowly opened the door, wondering what my new 'gift' would be." },
    { type: "narration", text: "In front of me was a wall of black fur." },
    { type: "narration", text: "Looking up, I saw what it truly was. A massive, wolf-like beast was sprawled across the floor, its tail wagging and eyes staring right at me." },
    { type: "narration", text: "I stared back blankly, unable to process whatever this giant beast was, before slamming the door shut." },

    { type: "say", char: "erdan", text: "Mernel?" },
    { type: "say", char: "mernel", text: "Yes, Lord Kernt?" },
    { type: "say", char: "erdan", text: "Wha... what the hell is that?" },
    { type: "say", char: "mernel", text: "Ah, that's your familiar! Or future familiar to be more accurate. Only heroes like you can tame them, and it will be useful for your journey. Quite the honor, if you ask me." },
    { type: "thought", text: "How about you warn me beforehand!?" },

    { type: "say", char: "erdan", text: "Tame it? H-how? Don't I need some Skill or something?" },
    { type: "say", char: "mernel", text: "No need, no need! Just… be yourself." },
    { type: "thought", text: "What's with his attitude? He was being all mentor-like just moments ago!" },

    { type: "narration", text: "He also mentioned something interesting while I stood there frozen." },
    { type: "say", char: "mernel", text: "You'd be the first of the heroes to tame one of its kind, actually." },
    { type: "say", char: "erdan", text: "How come? Did the others fail?" },
    { type: "say", char: "mernel", text: "Not quite. They were either afraid of them, wanted another familiar, or had more… interesting reasons." },
    { type: "say", char: "erdan", text: "Interesting reasons?" },
    { type: "say", char: "mernel", text: "The 31st hero, for example. When he found out that the familiar offered to him was male, he requested another one immediately." },
    { type: "say", char: "erdan", text: "Seriously? What does gender have to do with a familiar?" },
    { type: "say", char: "mernel", text: "Apparently he wanted to build a 'harem'. A female familiar takes upon a female humanoid form, and vice versa." },
    { type: "thought", text: "Ah, so no cute familiar girl for me then. I wouldn't know how to act around one anyways." },
    { type: "say", char: "mernel", text: "In human years, your familiar would be roughly 17 or 18 years old, give or take." },

    // --- BRANCH: Tame Night vs Swap (only if lust route is active) ---
    { type: "if", flag: "lust_route", op: ">=", value: 1, then: "ch03_familiar_swap_setup" },
    { type: "goto", target: "ch03_tame_night" },
  ],
};

// --- Lust route: the harem thought surfaces ---
window.SCENES.ch03_familiar_swap_setup = {
  steps: [
    { type: "thought", text: "A female familiar takes a humanoid form when old enough. The 31st hero wanted a harem…" },
    { type: "thought", text: "I already have one girl. Why not two?" },

    { type: "choice", prompt: "The wolf is male. Mernel just told you familiars can take humanoid forms…", options: [
      { text: "Tame the wolf. He's already here, and he looks strong.", target: "ch03_tame_night", flags: { night_bond: 3 } },
      { text: "Ask for a different familiar. A female one.", target: "ch03_swap_familiar", flags: { swap_familiar: 1, lust: 2 }, tag: "→ The Wrong Wolf (#5)" },
    ]},
  ],
};

// =====================================================================
// TAMING NIGHT (CANONICAL)
// =====================================================================
window.SCENES.ch03_tame_night = {
  steps: [
    { type: "say", char: "mira", text: "Master, do you want me to accompany you during the taming?" },
    { type: "say", char: "erdan", text: "Y-you will? Yeah, I mean, if it's okay with you." },
    { type: "narration", text: "She gave a small nod, turning around and entering the room before I could prepare myself mentally." },
    { type: "say", char: "erdan", text: "W-wai—" },
    { type: "say", char: "mira", text: "Let's head inside, Master. I wouldn't recommend leaving a beast like that untamed in the palace." },
    { type: "thought", text: "Why is it even here without surveillance in the first place!?" },

    { type: "hide", at: "left" },
    { type: "narration", text: "Having no choice, I stepped into the room too, pretty much hiding behind Mira. She just stepped to the side when she saw me standing behind her, making it clear I had to approach the beast myself." },

    { type: "show", char: "night", at: "center", emotion: "happy" },
    { type: "narration", text: "The giant furball was staring at me, its jaw open and tongue lolling out. It didn't seem to have any hostile intent, even if it was slightly intimidating." },
    { type: "say", char: "mira", text: "You need to place your hand on it, and imagine a connection between the two of you." },
    { type: "say", char: "erdan", text: "How do I even do that? No one explained the process to me." },
    { type: "narration", text: "She grabbed my wrist and guided my hand to rest on the black fur of its snout. I instinctively tried to pull back, but her grip was unyielding." },
    { type: "narration", text: "I relaxed my hand after a few seconds, cautiously patting the creature. It lowered its head to allow me to continue." },

    { type: "say", char: "mernel", text: "Try focusing on a visual image! Like a thread connecting you two together!" },
    { type: "narration", text: "I closed my eyes, focusing on visualizing a sort of pathway between me and the wolf." },
    { type: "narration", text: "And then I felt it. A string pulling straight out from my body, stretching toward the black wolf. I didn't have to imagine anything — I was simply there, in a vast black emptiness with it. My hand met its paw, drawn by an invisible force." },

    { type: "flash" },
    { type: "narration", text: "My eyes shot open at a sudden jolt of something electric running through me. A sudden gust of wind hit me, a swirling vortex manifesting around the wolf. I had to take a few steps back before the room settled again." },
    { type: "narration", text: "I lowered my arms that I had instinctively brought up to my face as I heard a high-pitched barking." },
    { type: "narration", text: "Looking down, I saw not the giant, intimidating wolf, but a smaller and cuter version of it pawing at my pants." },

    { type: "say", char: "mira", text: "Congratulations, Master. You've successfully tamed your very first familiar." },
    { type: "thought", text: "Was that a deadpan clap I just heard?" },
    { type: "set", flags: { night_bond: 5, mira_trust: 1 } },

    { type: "say", char: "erdan", text: "…Did it get smaller because I tamed it?" },
    { type: "say", char: "mira", text: "Familiars take the form most suited to their master. In your case, this is appropriate." },
    { type: "say", char: "erdan", text: "Appropriate?" },
    { type: "narration", text: "I crouched down, reaching out a hand. The puppy yipped happily, rolled onto its back, and pawed at the air." },
    { type: "say", char: "erdan", text: "Aww…" },

    // --- NAMING NIGHT ---
    { type: "say", char: "mira", text: "You should name it. Giving your familiar a name will seal your pact." },
    { type: "say", char: "erdan", text: "I'm not very good at naming things though." },
    { type: "narration", text: "She suddenly poked my side, making me yelp in surprise." },
    { type: "say", char: "erdan", text: "W-what was that for?" },
    { type: "say", char: "mira", text: "You gave me a decent name, didn't you? I'm sure you can come up with a good name for him too." },

    { type: "say", char: "erdan", text: "It has black fur, and it's male. Something like… I don't know actually. What do you think we should name him?" },
    { type: "narration", text: "She brought a hand to her chin, her lips pursed in thought. I don't think I'd ever seen her that serious before." },
    { type: "say", char: "mira", text: "What about… Blackie?" },
    { type: "say", char: "erdan", text: "...Blackie?" },
    { type: "say", char: "mira", text: "Yes, because of his black fur." },
    { type: "say", char: "erdan", text: "I can see where that came from." },
    { type: "thought", text: "She wasn't great at naming. But if I just shot her down and picked one myself, it'd make her feel like her words didn't matter. And that'd only push her back into that obedient shell she was trying to crawl out of." },
    { type: "say", char: "erdan", text: "Can you come up with something more… fitting for a familiar or pet?" },
    { type: "narration", text: "She stared at the puppy, then looked back at me." },
    { type: "say", char: "mira", text: "What about Night?" },
    { type: "say", char: "erdan", text: "…Isn't that a bit too simple?" },
    { type: "say", char: "mira", text: "…If Master says so. Forgive me for speaking out of turn." },
    { type: "thought", text: "My chest tightened." },
    { type: "say", char: "erdan", text: "No, no, it's fine! Night works too." },

    { type: "set", flags: { mira_trust: 2, night_named: 1 } },
    { type: "narration", text: "And just like that, my fluffy companion became Night." },
    { type: "narration", text: "Basic or not, it kinda suited him." },
    { type: "hide", at: "center" },

    // --- NIGHT'S EARS PERK ---
    { type: "narration", text: "For a while, it was almost peaceful. Night padded over, jumped on the bed, and curled up against my side. I scratched behind his ear, smiling at his cuteness." },
    { type: "narration", text: "Then Night's ears perked up. His playful growls turned into a low, tense rumble as he stared at the door." },
    { type: "narration", text: "Our peace hadn't lasted long." },

    { type: "goto", target: "ch04_attack_intro" },
  ],
};

// =====================================================================
// FAMILIAR SWAP (LUST/SWAP BRANCH → Ending #5)
// =====================================================================
window.SCENES.ch03_swap_familiar = {
  steps: [
    { type: "say", char: "erdan", text: "Hey, uh… would it be possible to… get a different familiar? I'm not sure this one's right for me." },
    { type: "narration", text: "Mernel's smile didn't change. His eyes did, briefly — something flickered there, maybe disappointment, maybe just surprise. Then he bowed." },
    { type: "say", char: "mernel", text: "Of course, Hero Kernt. We have… alternatives." },

    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "unfade", color: "black" },
    { type: "narration", text: "By evening, the wolf was gone. In its place sat a sleek, slim creature — feline in build, with shimmering pale fur and half-lidded eyes. A female. They told me she'd grow into a humanoid form within a year." },
    { type: "narration", text: "She was beautiful. She was also distant in a way the wolf had never been. She didn't lean into my hand. She didn't bark when strangers approached. She sat on the windowsill and watched me with an expression that could've meant anything or nothing." },
    { type: "thought", text: "I told myself I was building the harem of my dreams." },
    { type: "thought", text: "I should've read the room." },
    { type: "set", flags: { swap_familiar: 1, night_bond: -10, lust: 3 } },

    { type: "goto", target: "ch04_attack_intro" },
  ],
};
