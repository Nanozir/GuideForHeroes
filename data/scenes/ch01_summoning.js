/* ============================================
   Chapter 1 — Testing Chamber / Meeting Mira
   ============================================
   Adapts manuscript Ch2 "Congratulations, You're the Hero"
   and the second half of Ch1 (meeting the "gift").
*/
window.SCENES = window.SCENES || {};

// =====================================================================
// CORE SEAL TESTING
// =====================================================================
window.SCENES.ch01_testing = {
  steps: [
    { type: "bg", id: "testing_chamber" },
    { type: "bgm", id: "bgm_palace" },
    { type: "narration", text: "A circular room with black stone walls stretched before me, with faint blue sigils imprinted into the floor. At its center was a giant construct: a cross between a pillar and an altar, etched with runes that thrummed with a low hum I could feel in my teeth." },

    { type: "reveal_name", char: "mernel", name: "Mernel" },
    { type: "show", char: "mernel", at: "left", emotion: "neutral" },
    { type: "say", char: "mernel", text: "This is the Core Seal. It's an inferior version of the real deal, used for an early assessment of your abilities. The Church has monopoly on the original. We'll measure it fully soon enough." },

    { type: "reveal_name", char: "kina", name: "Kina" },
    { type: "show", char: "kina", at: "right", emotion: "playful" },
    { type: "say", char: "kina", text: "It'll sting a little. But you're a strong boy, aren't you? You won't pass out or anything." },
    { type: "say", char: "erdan", text: "Yeah… thanks for the warning." },

    { type: "narration", text: "I took a deep breath, then walked up and pressed my hand onto the circular imprint at the center of the construct." },
    { type: "narration", text: "For a second, nothing happened." },

    { type: "flash" },
    { type: "shake" },
    { type: "narration", text: "Then a force slammed straight into my head. A wave of warmth surged up my arm and crashed into my brain. Words and symbols appeared in an instant, so sudden that my vision went unfocused for a few seconds." },
    { type: "say", char: "erdan", text: "Ow! What the hell?" },

    { type: "say", char: "kina", text: "That's the Core Seal for you. It force-feeds you information of the abilities Ucliat has given you. For an otherworlder who isn't accustomed to the environment yet, it must've been overwhelming." },
    { type: "say", char: "kina", text: "Good job keeping your composure." },
    { type: "say", char: "mernel", text: "Your current abilities have now been registered into your core." },

    { type: "say", char: "erdan", text: "My core? Is it like my soul?" },
    { type: "say", char: "mernel", text: "Not just that. It's your soul, yes, but also similar to a second-heart. The core is what boosts an ordinary person's immune system. It's also where mana is stored and circulated throughout the body." },

    { type: "say", char: "kina", text: "Your core is a hell of a lot more efficient than a normal person's. A hero's core can store a larger amount of mana, and you could learn Spells within a few years if you put in the effort. You'll also recover twice or thrice as fast if you suffer any injuries." },
    { type: "narration", text: "She pressed a finger to my sternum." },
    { type: "say", char: "kina", text: "But be careful. You aren't immortal. Don't get a full head and put yourself in danger because of it." },
    { type: "say", char: "mernel", text: "Don't scare the young man. I think he understands the risks." },
    { type: "say", char: "erdan", text: "Yeah, no, I understand." },
    { type: "thought", text: "Translation: don't make me actually do anything risky. Sounds like a plan." },

    // --- SPELLS VS SKILLS EXPLANATION ---
    { type: "say", char: "erdan", text: "Soo… is it done now? I only got Skills, but I thought I'd get Spells too." },
    { type: "narration", text: "Kina let out a loud, almost scandalized scoff." },
    { type: "say", char: "mernel", text: "Lord Kernt, Spells are different from Skills. Abilities are usually divided into two main categories: Skills and Spells. Spells require mana and incantation to cast, while Skills are unlocked by fulfilling certain requirements and rarely cost mana." },
    { type: "say", char: "kina", text: "That's right! But unlike Skills, Spells require deeper understanding and more focus." },
    { type: "narration", text: "She leaned too close for comfort, pressing a finger to my chest." },
    { type: "say", char: "kina", text: "You know how many years it takes to learn just a basic elemental spell? Huh?" },
    { type: "say", char: "erdan", text: "Wh-wha? What did I do?" },
    { type: "say", char: "kina", text: "Sorry sorry, bringing it up reminded me of some unpleasant things. Ugh." },
    { type: "narration", text: "She leaned closer, hand next to her mouth, whispering conspiratorially." },
    { type: "say", char: "kina", text: "Let's hope you never get Mernel as your teacher. It was a nightmare!" },
    { type: "say", char: "mernel", text: "I can hear you, Kina. Perhaps I should assign you some extra homework." },
    { type: "say", char: "kina", text: "Please, anything but that!" },
    { type: "say", char: "mernel", text: "Nothing but that." },

    { type: "thought", text: "Who knew a supposed staff of the palace could act so silly?" },
    { type: "narration", text: "Kina clearly noticed my smile, because her dramatic façade immediately turned smug." },
    { type: "say", char: "kina", text: "Look! I made the hero, our future savior, smile! That counts for something, right? That means I deserve a reward instead!" },
    { type: "say", char: "mernel", text: "You're also delaying the hero's evaluation." },
    { type: "say", char: "kina", text: "Boo! Geezer! Boring!" },

    // --- MERNEL DEMONSTRATES A SPELL ---
    { type: "say", char: "mernel", text: "Hero, look closely now." },
    { type: "say", char: "kina", text: "W-wait… What are you going to do? You're not gonna—" },
    { type: "say", char: "mernel", text: "Trovak enshari korim thalos…" },
    { type: "narration", text: "Faint, colorful particles began to fade into view, growing in size and brightness with each word. They gathered in front of Mernel's outstretched hand." },
    { type: "say", char: "kina", text: "M-Mernel, wait—" },
    { type: "say", char: "mernel", text: "Affarto!" },
    { type: "narration", text: "The particles came together, forming a small orb of clear liquid the size of a fist. It floated above his fingertips. Then he flicked his wrist, sending the liquid splashing across Kina's face and clothes." },
    { type: "say", char: "kina", text: "Ugh, you ruined my hair!" },

    { type: "narration", text: "She groaned, wiping her face with her sleeves. But I watched closely — the water wasn't exactly drying. It was disappearing into her skin and clothes. In seconds, not a trace of liquid was left on her body." },

    { type: "say", char: "mernel", text: "Spells use mana, a building block unique to our world and different from other matters. The 'water spell' I used is not actual water." },
    { type: "narration", text: "He nodded toward Kina." },
    { type: "say", char: "mernel", text: "She's a unique case, so we were able to demonstrate safely. A win-win." },
    { type: "say", char: "kina", text: "Ugh. I'll meet you later, Erdan. I have to run an errand." },

    // --- SKILLS SUMMARY ---
    { type: "narration", text: "After Kina left, Mernel explained the rest more formally. The Skills I currently possessed were bestowed upon me by Ucliat, 'based on the purity of my core' — whatever that meant — or granted by requirements I'd already met back in my original world." },
    { type: "narration", text: "It wasn't like a menu popping up, but more like a sudden knowing. Like recalling a memory I'd always had." },

    { type: "system", text: "[ Dismantle ]  Active  ·  3 uses/day  ·  Dismantles small items on touch" },
    { type: "system", text: "[ Appealing Presence ]  Passive  ·  Softens first impressions if the person is neutral" },
    { type: "system", text: "[ Language Comprehension ]  Passive  ·  Rewires brain to comprehend Algon (read/write/speak)" },
    { type: "system", text: "[ Reflex ]  Passive  ·  Slightly faster dodge to perceived visible threats" },
    { type: "set", flags: { skill_dismantle: 1, skill_reflex: 1, skill_appealing: 1, skill_language: 1 } },

    { type: "say", char: "mernel", text: "Since you're a hero, the requirements for gaining new Skills are much more lenient, and you'll find yourself gaining them more easily than ordinary folk." },
    { type: "say", char: "erdan", text: "I see. Alright, that's good to know. Thanks." },
    { type: "thought", text: "[Reflex] was probably thanks to my above-average reflexes from my previous world. I'd built those from years of flinching away from anyone who tried to touch me. Paranoia had its perks." },

    // --- TRANSITION TO ROOM ---
    { type: "narration", text: "After that whole ordeal, I was guided back to my room, with Kina — who'd returned — explaining a couple things I didn't quite understand about the abilities." },
    { type: "say", char: "mernel", text: "There is also an interesting gift waiting in your quarters. Something the previous hero left behind for the next hero." },
    { type: "thought", text: "Considering the fact that he was summoned decades ago, I wondered what it was that could last so long and still be in decent condition." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "goto", target: "ch01_room_arrival" },
  ],
};

// =====================================================================
// MEETING MIRA
// =====================================================================
window.SCENES.ch01_room_arrival = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_mira" },
    { type: "narration", text: "And then I saw the last thing I expected to see: a person." },
    { type: "narration", text: "So now, I stood awkwardly at the doorway of the large room I was given, unable to focus on anything other than coming up with a way to greet my new… roommate." },
    { type: "narration", text: "Who was, by the way, locked in a small cage, barely clad in anything but a piece of cloth." },

    { type: "show", char: "mira", at: "center", emotion: "blank" },
    { type: "narration", text: "The previous hero, Yosuke Minato, had thought it was a good idea to enslave someone and then abandon them for years as a 'gift' for the next hero while he returned to his world. At least according to Mernel, who clearly didn't have a high opinion of him when he told me." },
    { type: "thought", text: "It was disgusting that this kind of thing was allowed. But I had already expected to see similar things since… well, since people had always been scum, no matter time or place." },
    { type: "thought", text: "The fact that I found myself being detached and not having a real opinion of this made it clear that I had a lot of preconceived notions of this world already." },

    { type: "narration", text: "I set down my stuff on a nearby desk — items I'd received from Mernel and Kina, along with other things passed down from older heroes, and a few 'welcome gifts' from the Queen herself. I felt like a younger brother inheriting hand-me-downs from my siblings, which wasn't exactly far from the truth." },

    { type: "narration", text: "I glanced over at the cage, opening my mouth to say something, then closing it again." },
    { type: "thought", text: "How was I supposed to react in this situation? This person had probably gone through a lot, so being too familiar or kind might have the opposite effect." },

    { type: "narration", text: "I took a deep breath, gathering what little courage I had. I walked over and knelt in front of the cage, doing my best not to make direct eye contact with the pair of dark, blank eyes staring straight into my soul." },
    { type: "narration", text: "Staring firmly at the lock, I tugged on it lightly, then harder." },
    { type: "thought", text: "Then I remembered one of the Skills I had received earlier. [Dismantle]." },
    { type: "narration", text: "I tightened my grip on the lock and willed it to break apart." },
    { type: "system", text: "[ Dismantle ]  used  ·  2 remaining today" },
    { type: "narration", text: "It worked. The pieces clattered to the ground. A faint, electric feeling ran up my arm, my hairs standing on end. It dissipated just as quickly, leaving me wondering if it was safe to use it again." },

    { type: "narration", text: "I opened the cage and took a few steps back." },
    { type: "narration", text: "She remained there for a few moments before slowly crawling out and then standing up on shaky legs." },

    { type: "narration", text: "My eyes widened slightly at her full appearance, but I quickly glanced away as I noticed that all she wore was a slightly oversized tunic that barely covered enough." },
    { type: "thought", text: "A part of me couldn't help but think about the way her chest looked since she clearly didn't wear a bra. Though I quickly pushed those thoughts away. I quickly looked away, reminding myself to not ogle." },

    { type: "narration", text: "She seemed to be around my age, maybe a bit older. Late teens at most — which made no sense since Mernel had said she'd been around for decades." },
    { type: "narration", text: "She was shorter than me, with a toned and lithe body. Small black horns peeked out of her short silver hair, one broken in half. I was curious about that, but I knew better than to ask." },

    { type: "thought", text: "But what really caught me off-guard wasn't the horns." },
    { type: "thought", text: "She was black too. A bit lighter than me, but still. In a strange world where everyone else I'd met so far looked straight out of some medieval European history book, that was… unexpected. Welcome, but unexpected." },

    { type: "narration", text: "I didn't recognize her race. I could at least deduce she wasn't fully human since she had horns. It would probably be a bad idea to assume the fantasy races I know of are the same in this world." },

    { type: "narration", text: "There was a long silence before she finally spoke up in a low, hoarse voice, as if she hadn't spoken in a while." },
    { type: "say", char: "mira", text: "Are you… are you my new Master?" },
    { type: "say", char: "erdan", text: "Huh?" },
    { type: "say", char: "mira", text: "You're the hero, right?" },
    { type: "say", char: "erdan", text: "Yes?" },
    { type: "say", char: "mira", text: "Then you're my new Master. My previous Master has entrusted me to you. I'll serve your every need without fail." },

    { type: "narration", text: "She bowed low. The utter unemotional delivery of those words. I didn't even have the heart to argue about it." },
    { type: "narration", text: "I caught her tunic slipping off one shoulder when she bowed, and it was only then I noticed a black, almost faded mark. An X-shaped chain inside a jagged circle." },

    { type: "narration", text: "As soon as her eyes twitched to look at me, I quickly glanced around the room and noticed a wardrobe in the corner." },
    { type: "say", char: "erdan", text: "There are… uh, clothes in the closet. At least that's what Mernel told me…" },
    { type: "say", char: "erdan", text: "You can take it, if you want. Pick out an outfit, I mean." },

    { type: "narration", text: "I felt her gaze lingering on me for a beat longer than necessary, before she moved on. The sound of her footsteps advancing toward the closet." },
    { type: "thought", text: "She was probably surprised at my sudden generosity. Maybe she was distrustful. Maybe she thought I was trying to gain her trust just to use her for my own gain." },

    { type: "narration", text: "I never really put much effort into things, including relationships. Others tended to maintain them instead, so I never really saw any reason to do much on my end." },
    { type: "narration", text: "And now, in this new world, it was the perfect chance for me to finally start anew and live life correcting the errors of my past… or something grand like that." },

    // --- THE OUTFIT REVEAL ---
    { type: "wait", ms: 600 },
    { type: "say", char: "mira", text: "Master." },
    { type: "say", char: "erdan", text: "Yeah?" },
    { type: "say", char: "mira", text: "I… I'm done dressing." },

    { type: "thought", text: "Like hell she was!" },
    { type: "narration", text: "What stood in front of me barely counted as clothing. It looked exactly like the slave outfit you could put on pawns in one of my favorite games — nothing but black straps that only covered the important bits and left everything else bare." },
    { type: "narration", text: "Nothing else." },

    { type: "narration", text: "In those stunned seconds I noticed two things. First, scars crossed her chest and lower abdomen. Clearly she had not been treated well. I made a quiet mental note." },
    { type: "thought", text: "Second… she had a nicely shaped C-cup. Or maybe it was smaller?" },
    { type: "thought", text: "Stop. Stop it." },

    { type: "say", char: "mira", text: "Was this not to your liking, Master? Master Yosuke told me all men were into things like this." },
    { type: "thought", text: "I was not sure what kind of guy the previous hero had been, but he sounded like a complete scumbag. I kept my opinion about the outfit to myself." },

    { type: "choice", prompt: "She's standing there in straps. Waiting for your response.", options: [
      { text: "\"That is not what I meant. I'll find you something else.\"", target: "ch02_real_clothes", flags: { mira_trust: 2, lust: -1 } },
      { text: "(…Don't argue. She offered. Let her stay like that.)", target: "ch02_lust_route_in", flags: { lust: 2, mira_trust: -2 }, tag: "→ Lust route" },
    ]},
  ],
};
