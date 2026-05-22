/* ============================================
   Chapter 4 — Audience with the Queen, courtyard attack
   ============================================ */
window.SCENES = window.SCENES || {};

window.SCENES.ch04_attack_intro = {
  steps: [
    { type: "bg", id: "audience_room" },
    { type: "bgm", id: "bgm_throne" },
    { type: "narration", text: "Two armored knights escorted me to my audience with the Queen. A weird sensation washed over me, one I have come to associate with nervousness." },

    { type: "show", char: "elisabeth", at: "center", emotion: "neutral" },
    { type: "say", char: "elisabeth", text: "Please, take a seat. We have a lot to discuss." },
    { type: "say", char: "erdan", text: "Yeah, kind of. I'm still not very used to places like this. It's pretty big." },
    { type: "say", char: "elisabeth", text: "You speak candidly. That's good. Too many of your predecessors were either too arrogant or eager." },

    { type: "say", char: "elisabeth", text: "Tell me, Hero Kernt. Do you know why you were summoned here?" },
    { type: "thought", text: "Was it a trick question? Was there a wrong answer? Would I be considered incompetent if I revealed I'd already forgotten most of what I'd been told?" },
    { type: "say", char: "erdan", text: "I was supposed to help you with the monster influx thing. That's, uh… pretty much all I remember." },

    { type: "say", char: "elisabeth", text: "Honesty suits you, Hero Kernt. Better to admit what you do not know than to pretend otherwise." },
    { type: "say", char: "elisabeth", text: "The world you see is but half of creation. Beneath the earth stretches the Underworld, a vast expanse where creatures of all kinds dwell." },
    { type: "say", char: "elisabeth", text: "Every few generations, these floods break through. We call it the Doomsday. And this time, it may carry with it a Lumenari." },
    { type: "say", char: "elisabeth", text: "Your role, Hero Kernt, is not merely to 'help' us. You are to put a stop to it. And if you can, strike at the root and quell the cause of this surge entirely." },

    { type: "say", char: "elisabeth", text: "There is one more matter, Hero. When Ucliat bestows blessings, they are etched into the mind itself. To measure their growth, you will need the aid of the Church." },
    { type: "say", char: "erdan", text: "Uhm, do I have to go to the church then? What do I do there?" },

    { type: "narration", text: "Her smile tightened momentarily. Just a fraction of a second. The kind of smile that lives at the edge of patience." },
    { type: "say", char: "elisabeth", text: "Hero Kernt. Mernel told you what you have. I am telling you how strong it is. A child may know he owns a sword, but that does not mean he knows if it is made of wood or star-forged steel." },
    { type: "say", char: "elisabeth", text: "Do you understand the distinction now, or shall I have Mernel draw you a diagram?" },
    { type: "say", char: "erdan", text: "N-no, I get it… S-sorry. Thanks for explaining." },

    { type: "say", char: "elisabeth", text: "The Doomsday is difficult to date precisely. But you have around a year. Do not waste it." },
    { type: "say", char: "elisabeth", text: "I have high expectations of you, Hero Kernt." },

    { type: "hide", at: "center" },
    { type: "narration", text: "I stumbled out of the audience chamber, mind buzzing. Mira was waiting just outside the door." },
    { type: "say", char: "mira", text: "I wasn't allowed inside, so I waited here instead. As your slave, I must remain near my Master to serve his needs." },

    { type: "narration", text: "I winced. The knights flanking the door pretended not to hear." },
    { type: "say", char: "erdan", text: "Please don't have call yourself that when others are around. Or at all, actually. It… makes things weird." },
    { type: "say", char: "mira", text: "But that is what I am, is it not?" },

    { type: "thought", text: "Technically, yeah, but…" },
    { type: "say", char: "erdan", text: "I'd rather not own someone. Maybe… my servant? Or just companion, I guess? Only if that's fine with you!" },
    { type: "narration", text: "Mira blinked, lips parted as if to protest. No words came." },
    { type: "set", flags: { mira_trust: 2 } },

    { type: "goto", target: "ch04_courtyard_attack" },
  ],
};

window.SCENES.ch04_courtyard_attack = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "Back in my room. Night curled in my lap. Mira on the stool beside me. Quiet. Almost peaceful." },
    { type: "show", char: "mira", at: "right", emotion: "neutral" },

    { type: "narration", text: "Then Night's ears perked up. His playful growls turned into a low, tense rumble as he stared at the door." },
    { type: "narration", text: "Our peace hadn't lasted long." },

    { type: "shake" },
    { type: "sfx", id: "door" },
    { type: "show", char: "gux", at: "left", emotion: "alarm" },
    { type: "say", char: "gux", text: "Boy-o, we got trouble! Grab whatever weapons you have and get ready!" },
    { type: "say", char: "erdan", text: "H-huh? Wha- why? What's going on?" },
    { type: "say", char: "gux", text: "Some bastard's going on a rampage outside. The assailant is an armed tenebrim. Be careful, boy." },

    { type: "bg", id: "courtyard_blood" },
    { type: "bgm", id: "bgm_battle" },
    { type: "hide", at: "left" },
    { type: "hide", at: "right" },

    { type: "narration", text: "We arrived in the courtyard met by quite the sight. At least half a dozen palace guards stood in a loose circle, their spears and swords aimed at the intruder." },
    { type: "narration", text: "And there he was, crouched on top of the fountainhead." },
    { type: "show", char: "tenebrim", at: "center", emotion: "feral" },
    { type: "narration", text: "Taller than I expected. Broad-shouldered. Dark, chocolate-brown skin and a pair of stubbed horns on his head. Crimson tribal markings all over his body." },

    { type: "say", char: "gux", text: "Oi, you bastard! You realize this is the royal palace, right? You've got two choices: drop your weapon and explain yourself, or we put you in the ground." },

    { type: "narration", text: "His eyes scanned the crowd, before locking onto Mira. They widened, his stance wavering for a moment. Then, without warning, he let out a guttural war cry." },
    { type: "shake" },
    { type: "narration", text: "He launched himself off the fountain. Cleaved through the first guard's chestplate. Wrenched the blade free. Caught a spear, yanked the guard forward, slammed the axe haft into his jaw with a crunch." },
    { type: "narration", text: "Three men were down before I could process what I'd just seen." },

    { type: "thought", text: "I'd seen stuff like this in movies, in games. This wasn't behind a screen." },
    { type: "narration", text: "Night barked, fur bristling. I ducked behind a pillar." },

    { type: "if", flag: "swap_familiar", op: ">=", value: 1, then: "ch04_swap_dies" },
    { type: "goto", target: "ch04_night_saves" },
  ],
};

window.SCENES.ch04_night_saves = {
  steps: [
    { type: "shake" },
    { type: "narration", text: "A blur of fur darted in. Teeth clamped into my pants leg. Night yanked me off balance, throwing me hard onto my ass just as an axe flew through the air and buried itself deep in the pillar where I'd been standing." },
    { type: "narration", text: "I scrambled back, twisted onto my feet, scooped Night into my arms and bolted toward the farthest cover I could find." },
    { type: "set", flags: { night_bond: 5 } },

    { type: "narration", text: "In the corner of my eye, I could see the axe twitching free of the pillar, then shooting straight back into his hand with a dull metallic click." },
    { type: "thought", text: "Are you kidding me? He can use telekinesis too!?" },

    { type: "shake" },
    { type: "narration", text: "Pain shot up my ribs. His fist had connected to my side. White-hot pain. A scream escaped my throat as I crumpled to the ground." },
    { type: "thought", text: "It hurts… fuck it hurts! Something definitely broke!" },

    { type: "show", char: "mira", at: "right", emotion: "panic" },
    { type: "say", char: "mira", text: "Master!" },
    { type: "narration", text: "Mira dropped to her knees beside me, pressing her hands on my wound." },

    { type: "shake" },
    { type: "narration", text: "And then a sudden burst of light flared across the courtyard. Glowing chains of runes erupted from the earth, wrapping around the man's limbs with a sizzling hiss." },
    { type: "show", char: "ren", at: "left", emotion: "focused" },
    { type: "say", char: "ren", text: "Tro-ko Branto! …Stay down, damn you!" },

    { type: "show", char: "mernel", at: "center", emotion: "stern" },
    { type: "narration", text: "Mernel arrived with a healer in white robes. The healer pressed a vial to my lips and murmured a prayer." },
    { type: "say", char: "marcel", text: "Trovak enshari korim thalos… Hetyn." },
    { type: "narration", text: "A soothing feeling. The wound knitted together with golden threads. Pain numbed." },

    { type: "say", char: "marcel", text: "I've managed to heal your wounds, but your body will fail to function properly due to the lack of experience in being healed. You'll need to rest." },

    { type: "hide", at: "left" },
    { type: "hide", at: "center" },
    { type: "hide", at: "right" },
    { type: "fade", color: "black" },
    { type: "wait", ms: 800 },
    { type: "goto", target: "ch04_recovery_choice" },
  ],
};

// Familiar swap branch — Ending #5
window.SCENES.ch04_swap_dies = {
  steps: [
    { type: "shake" },
    { type: "narration", text: "I waited for Night. Then I remembered." },
    { type: "narration", text: "There was no Night." },
    { type: "narration", text: "The pretty cat-thing I'd asked for in his place hadn't moved. She was still curled in the corner of my room, where I'd left her, indifferent to the alarm bells." },

    { type: "narration", text: "The axe came down before I could even raise my hands. It went through my collarbone with a wet crunch, and the world tilted sideways into red." },
    { type: "shake" },
    { type: "narration", text: "Mira moved — too late." },
    { type: "narration", text: "The last thing I felt was the hot spread of my own blood, and the perfectly indifferent gaze of the familiar I'd picked because she was prettier than the one who would have died for me." },

    { type: "fade", color: "black" },
    { type: "ending", id: "swap_familiar" },
  ],
};

// =====================================================================
// Recovery branch point — Lust route check, Trauma route, Continue
// =====================================================================
window.SCENES.ch04_recovery_choice = {
  steps: [
    { type: "if", flag: "lust_route", op: ">=", value: 1, then: "ch04_lust_route_dies" },
    { type: "if", flag: "broken_seed", op: ">=", value: 1, then: "ch04_broken_continue" },
    { type: "goto", target: "ch04_recovery" },
  ],
};

window.SCENES.ch04_lust_route_dies = {
  steps: [
    { type: "unfade", color: "black" },
    { type: "bg", id: "infirmary" },
    { type: "bgm", id: "bgm_recovery" },
    { type: "narration", text: "I survived. The healers were good." },
    { type: "narration", text: "But Mira had been a half-step too slow. She'd reached me, eventually. After Night did. After Mernel arrived. After the worst was already over." },
    { type: "narration", text: "When she pressed her hands to my wound, there was nothing wrong with the gesture. There was something wrong with the silence inside it." },
    { type: "narration", text: "She knew. I knew. The thing I'd taken from her three nights ago hadn't bought loyalty. It had just bought a little more silence. And silence was the cheapest currency in this palace." },
    { type: "set", flags: { mira_trust: -5 } },
    { type: "goto", target: "ch04_recovery" },
  ],
};

window.SCENES.ch04_recovery = {
  steps: [
    { type: "unfade", color: "black" },
    { type: "bg", id: "infirmary" },
    { type: "bgm", id: "bgm_recovery" },
    { type: "narration", text: "When I woke I was in a hospital-like room. Bandages tight around my chest. Mira on the stool by the bed, asleep with her head in her hands." },
    { type: "show", char: "mira", at: "right", emotion: "tired" },
    { type: "say", char: "mira", text: "You've been out for four days. The royal healers stabilized you." },

    { type: "say", char: "mira", text: "I'm going to bring you the guidebook to keep you occupied. It seems Master Yosuke wrote a great deal in it." },
    { type: "narration", text: "She brought me the thick red book and explained how to swear the oath. I traced the sigil with my hand and channeled mana into it." },
    { type: "system", text: "[ A Guide for Heroes ]   Oath bound. Pages unlocked." },
    { type: "set", flags: { guidebook_oath: 1 } },

    { type: "say", char: "erdan", text: "It says I can share with bound servants and familiars." },
    { type: "say", char: "mira", text: "Then I will know what you know. Useful." },

    { type: "narration", text: "We talked. About cores. About races. About what I was, and what she was, and what we were doing in the same room." },

    { type: "choice", prompt: "How do you feel about everything?", options: [
      { text: "(Determined. I'll figure this out. With Mira.)", target: "ch05_kuger_intro", flags: { mira_trust: 2 } },
      { text: "(Exhausted. Maybe I should just stop trying.)", target: "ch04_broken_setup", flags: { broken_seed: 1, paranoia: 1 }, tag: "→ Broken-hero seeds" },
    ]},
  ],
};

window.SCENES.ch04_broken_setup = {
  steps: [
    { type: "thought", text: "I'd been here a week and I'd already nearly died twice. They wanted me to stop a flood of monsters. I couldn't even stop a single one." },
    { type: "thought", text: "Maybe I just… stop pretending. A broken hero can't save the world, after all. Maybe it's safer if I'm broken." },
    { type: "set", flags: { broken_hero: 1 } },
    { type: "goto", target: "ch05_kuger_intro" },
  ],
};

window.SCENES.ch04_broken_continue = {
  steps: [
    { type: "unfade", color: "black" },
    { type: "bg", id: "infirmary" },
    { type: "narration", text: "I woke up. I didn't get up." },
    { type: "narration", text: "The healers spoke. Mira spoke. Mernel spoke. I closed my eyes whenever I could. I was very, very tired, and the trying part was over." },
    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "narration", text: "On the third night, the chains in the dungeon failed. The tenebrim came for me. I didn't see him. The light was off. He was quiet." },
    { type: "narration", text: "I think he hesitated, when he saw I wasn't even raising my hands." },
    { type: "narration", text: "Maybe that was its own kind of mercy." },
    { type: "ending", id: "broken_hero" },
  ],
};
