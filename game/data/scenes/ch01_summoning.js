/* ============================================
   Chapter 1 — Testing chamber, first Skills
   ============================================ */

window.SCENES.ch01_testing = {
  steps: [
    { type: "bg", id: "testing_chamber" },
    { type: "bgm", id: "bgm_palace" },
    { type: "narration", text: "Black stone walls stretched before me, blue sigils imprinted into the floor like veins. At the center stood a pillar-altar etched with runes that thrummed like a heartbeat." },

    { type: "show", char: "mernel", at: "left", emotion: "neutral" },
    { type: "say", char: "mernel", text: "This is the Core Seal. An inferior version of the real deal, used for an early assessment of your abilities. The Church has the original under lock and key. We'll measure you fully soon enough." },

    { type: "show", char: "kina", at: "right", emotion: "playful" },
    { type: "say", char: "kina", text: "It'll sting a little. But you're a strong boy, aren't you? You won't pass out or anything." },
    { type: "say", char: "erdan", text: "Yeah… thanks for the warning." },

    { type: "narration", text: "I pressed my hand onto the imprint. For a second, nothing happened — until a force slammed into my head." },
    { type: "flash" },
    { type: "shake" },
    { type: "narration", text: "Words and symbols appeared in an instant, so sudden my vision went unfocused." },

    { type: "system", text: "[ Dismantle ]   Active   ·   3 uses / day  ·  Small items only" },
    { type: "system", text: "[ Reflex ]   Passive  ·  Slightly faster reaction to perceived threats" },
    { type: "system", text: "[ Appealing Presence ]   Passive  ·  Softens neutral first impressions" },
    { type: "system", text: "[ Language Comprehension ]   Passive  ·  Algon — read, write, speak" },

    { type: "say", char: "kina", text: "Force-feeds you info on the abilities Ucliat gave you. Overwhelming for a fresh-summoned otherworlder. You handled it well." },
    { type: "say", char: "mernel", text: "Your current abilities have now been registered into your core." },

    { type: "say", char: "erdan", text: "My core?" },
    { type: "say", char: "mernel", text: "Not just your soul, no. It's your soul, yes — but also a kind of second heart. The core is what boosts an ordinary person's immune system. It's where mana is stored and circulated." },
    { type: "say", char: "kina", text: "A hero's core is a hell of a lot more efficient. Larger storage. Spells in a few years if you put in the effort. You'll heal twice or thrice as fast. But —" },
    { type: "say", char: "kina", text: "— don't get a full head and put yourself in danger because of it. You aren't immortal." },

    { type: "say", char: "erdan", text: "Yeah, no. I understand the risks." },
    { type: "thought", text: "Translation: don't make me actually do anything risky." },

    { type: "say", char: "mernel", text: "Skills are unlocked by fulfilling specific requirements — sometimes obscure ones. Spells are different: mana plus incantation. You'll learn to tell them apart with practice." },

    { type: "set", flags: { skill_dismantle: 1, skill_reflex: 1, skill_appealing: 1, skill_language: 1 } },
    { type: "narration", text: "After that whole ordeal, I was guided back to my room. Kina explaining things along the way I'd half-forget by morning." },

    { type: "say", char: "mernel", text: "There's also a gift waiting in your quarters. Something the previous hero left behind for the next." },
    { type: "thought", text: "A gift, huh? From the man who'd been summoned decades ago. Whatever it was must've held up well." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "goto", target: "ch01_room_arrival" },
  ],
};

// Erdan walks to his quarters and meets the "gift"
window.SCENES.ch01_room_arrival = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "Then I saw the last thing I expected to see in a luxurious palace bedroom: a person." },
    { type: "narration", text: "She was locked in a small cage, barely clad in anything but a piece of cloth." },

    { type: "show", char: "mira", at: "center", emotion: "blank" },
    { type: "narration", text: "The previous hero, Yosuke Minato, had thought it was a good idea to enslave someone and then abandon them for years as a 'gift' for the next hero while he returned to his world." },
    { type: "narration", text: "At least according to Mernel, who clearly didn't have a high opinion of him." },
    { type: "thought", text: "It was disgusting. But I had already expected to see things like this — people had always been scum, no matter the time or place." },
    { type: "thought", text: "The fact that I was so detached, so utterly unsurprised, made it clear to me that I had a lot of preconceived notions of this world already." },

    { type: "narration", text: "I set my stuff on the desk. Sword. Dagger. The thick red book Mernel had handed me on the way out. Hand-me-downs from heroes I'd never meet." },

    { type: "narration", text: "I knelt in front of the cage. Tried not to make eye contact." },
    { type: "narration", text: "I tugged on the lock. Then harder. Then I remembered the Skill." },
    { type: "system", text: "[ Dismantle ]  used  ·  2 uses remaining today" },
    { type: "narration", text: "The lock clattered to the ground in pieces. A faint electric backlash ran up my arm — bearable, but enough to make a note of." },

    { type: "narration", text: "I opened the cage and stepped back." },
    { type: "narration", text: "She crawled out slowly, then stood up on shaky legs. Late teens, maybe — though Mernel had said she'd been around for decades." },
    { type: "narration", text: "Toned, lithe. Small black horns peeked out of short silver hair. One was broken in half." },

    { type: "thought", text: "And — okay, this is probably not the most sensitive observation I could be making right now, but…" },
    { type: "thought", text: "She was black, too. Lighter than me. But still. In a world that looked straight out of a medieval European history book, that was unexpected. Welcome, but unexpected." },

    { type: "say", char: "mira", text: "Are you… are you my new Master?" },
    { type: "say", char: "erdan", text: "Huh?" },
    { type: "say", char: "mira", text: "You're the hero, right?" },
    { type: "say", char: "erdan", text: "Yes?" },
    { type: "say", char: "mira", text: "Then you're my new Master. My previous Master has entrusted me to you. I'll serve your every need without fail." },

    { type: "thought", text: "The utter unemotional delivery of those words. I didn't even have the heart to argue about it." },
    { type: "narration", text: "Her tunic slipped off one shoulder when she bowed, and only then did I notice a faded mark — an X-shaped chain inside a jagged circle." },

    { type: "say", char: "erdan", text: "There are… uh, clothes in the closet. At least that's what Mernel told me…" },
    { type: "say", char: "erdan", text: "You can take it. If you want. Pick out an outfit, I mean." },

    { type: "narration", text: "She studied me for a beat longer than necessary, then moved toward the closet. I turned my back to give her privacy and started sorting through my own things." },

    { type: "wait", ms: 600 },
    { type: "say", char: "mira", text: "Master." },
    { type: "say", char: "erdan", text: "Yeah?" },
    { type: "say", char: "mira", text: "I… I'm done dressing." },

    { type: "thought", text: "Like hell she was." },
    { type: "narration", text: "What stood in front of me barely counted as clothing. It looked exactly like the slave outfit you could put on pawns in one of my favorite games — black straps that only covered the important bits, and left everything else bare." },

    { type: "say", char: "mira", text: "Was this not to your liking, Master? Master Yosuke told me all men were into things like this." },

    { type: "thought", text: "I was not sure what kind of guy the previous hero had been, but he sounded like a complete scumbag." },

    { type: "choice", prompt: "She's offering. The straps. The 'master' thing.", options: [
      { text: "(Find her something else. Real clothes.)", target: "ch02_real_clothes", flags: { mira_trust: 2, lust: -1 } },
      { text: "(…Don't argue. Let her stay like that.)", target: "ch02_lust_route_in", flags: { lust: 2, mira_trust: -2 }, tag: "→ Lust route" },
    ]},
  ],
};
