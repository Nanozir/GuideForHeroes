/* ============================================
   Chapter 4 — Queen Audience / Courtyard Attack
   ============================================
   Adapts manuscript Ch5 (audience with Queen) and
   Ch6 "First Blood" (tenebrim attack, recovery).
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// AUDIENCE WITH THE QUEEN
// =====================================================================
window.SCENES.ch04_attack_intro = {
  steps: [
    { type: "bg", id: "audience_room" },
    { type: "bgm", id: "bgm_throne" },
    { type: "narration", text: "Two armored knights escorted me to my audience with the Queen. A weird sensation washed over me — nervousness. An audience, all alone with the highest power in this place, without Mernel backing me up." },
    { type: "narration", text: "The two Knights escorting me were quite beautiful, even in their full silver armor. One of them, a blonde with a stern expression and a scar across her face, somehow looked no less attractive for it." },
    { type: "narration", text: "The other wore the same armor, but certain parts didn't have the same kind of curves. I couldn't really call her attractive since her face was hidden behind a helmet. Still, from the long brown hair spilling out beneath it, it was clear she was a woman." },

    { type: "narration", text: "They positioned themselves on each side of a giant double door at the end of a hallway, then grabbed a knob each and opened it for me. I thanked them with a murmured 'thanks' before hurrying inside." },

    { type: "show", char: "elisabeth", at: "center", emotion: "neutral" },
    { type: "narration", text: "At the end of the table sat a well-dressed and stunning woman who seemed to be in her early thirties, a crown placed on her head. Curly red hair framing her neck in soft waves. And this time, she wasn't hidden behind anything." },
    { type: "say", char: "elisabeth", text: "Please, take a seat. We have a lot to discuss." },


    { type: "narration", text: "I gave a nod, took a deep breath, walked over and took a seat. Sitting straight, elbows on the table, wringing my hands together." },
    { type: "narration", text: "I could barely keep eye contact for more than a few seconds, darting my gaze across the room. My leg was jumping up and down." },

    { type: "say", char: "elisabeth", text: "Good evening, Hero Kernt. I trust you have settled in?" },
    { type: "say", char: "erdan", text: "Yeah, kind of. I'm still not very used to places like this. It's pretty big, after all, and much more luxurious than I'm used to." },
    { type: "narration", text: "Her smile didn't fade. If anything, her eyes narrowed slightly in amusement as she snapped her fan open, shielding the lower half of her face." },
    { type: "say", char: "elisabeth", text: "You speak candidly. That's good. Too many of your predecessors were either too arrogant or eager." },

    { type: "say", char: "elisabeth", text: "Tell me, Hero Kernt. Do you know why you were summoned here?" },
    { type: "thought", text: "Was it a trick question? Was there a wrong answer?" },
    { type: "say", char: "erdan", text: "I was supposed to help you with the monster influx thing. That's, uh… pretty much all I remember." },
    { type: "say", char: "elisabeth", text: "Honesty suits you, Hero Kernt. Better to admit what you do not know than to pretend otherwise." },


    { type: "say", char: "elisabeth", text: "The world you see is but half of creation. Beneath the earth stretches the Underworld — a vast expanse where creatures of all kinds dwell. Unlike us, they do not wage war for crowns or gold. They war for land." },
    { type: "say", char: "elisabeth", text: "And when their endless breeding fills their caverns to bursting, they spill upward, into our world, devouring whatever lies before them." },
    { type: "say", char: "elisabeth", text: "Every few generations, these floods break through. We call it the Doomsday. Your task will be to help hold them back." },
    { type: "say", char: "elisabeth", text: "And this time… the doomsday may carry with it a Lumenari." },

    { type: "say", char: "erdan", text: "C-can I ask something else? When exactly is the Doomsday? Do I have to prepare right away?" },
    { type: "say", char: "elisabeth", text: "It's difficult to accurately determine when. But Hero Summonings have usually been possible about a year prior to it. In other words, you have around that long to grow stronger." },
    { type: "thought", text: "A year? I was supposed to get strong enough to defeat a horde of monsters in a year?" },
    { type: "say", char: "elisabeth", text: "Do not worry. All of the heroes before you managed to grow strong enough in time. The blessings our lord has bestowed upon you are not to be underestimated." },

    { type: "say", char: "elisabeth", text: "There is one more matter. To measure the growth of your gifts, you will need the aid of the Church. Within their halls are relics from an old age — devices capable of revealing the Grade of your skills and spells." },
    { type: "say", char: "erdan", text: "Uhm, do I have to go to the church then?" },


    { type: "narration", text: "Her smile vanished, just for a fraction of a second. Her eyes sharpened into points of weary impatience. Then it was gone, smoothed over so quickly I thought I might've imagined it." },
    { type: "say", char: "elisabeth", text: "Hero Kernt. Mernel told you what you have. I am telling you how strong it is. A child may know he owns a sword, but that does not mean he knows if it is made of wood or star-forged steel. The Church provides the whetstone and the scale." },
    { type: "say", char: "elisabeth", text: "Do you understand the distinction now, or shall I have Mernel draw you a diagram?" },
    { type: "say", char: "erdan", text: "N-no, I get it… S-sorry. Thanks for explaining." },
    { type: "thought", text: "So it's like checking the level of my abilities then." },

    { type: "say", char: "elisabeth", text: "Now then. You should rest for today. Soon enough, your true work will begin. I have high expectations of you, Hero Kernt." },
    { type: "narration", text: "She rose smoothly, her gown rustling faintly." },
    { type: "say", char: "elisabeth", text: "Oh — one more thing. You are expected at the upcoming royal ball. It is customary for newly summoned heroes to attend. Consider it part ceremony, part celebration. Your… slave will fill you in." },
    { type: "thought", text: "A ball? Great, just what I needed." },

    { type: "hide", at: "center" },
    { type: "narration", text: "Closing the door behind me, I turned to find Mira leaning against the wall. She pushed off when she saw me." },
    { type: "say", char: "mira", text: "I wasn't allowed inside, so I waited here instead. As your slave, I must remain near my Master to serve his needs." },
    { type: "thought", text: "The weight of the knights' gazes behind me got my words stuck in my throat." },
    { type: "say", char: "erdan", text: "Please don't call yourself that when others are around. Or at all, actually. It… makes things weird." },
    { type: "say", char: "mira", text: "But that is what I am, is it not?" },


    { type: "say", char: "erdan", text: "I'd rather not own someone, so maybe… My servant? Or just companion, I guess? Only if that's fine with you!" },
    { type: "narration", text: "Mira blinked, lips parting as if to protest. No words came. She stared at me, then lowered her head. A few soft words slipped past her lips, too quiet for me to catch." },
    { type: "say", char: "erdan", text: "Huh? Did you say something?" },
    { type: "narration", text: "She shook her head and kept walking." },
    { type: "set", flags: { mira_trust: 2 } },

    { type: "goto", target: "ch04_courtyard_attack" },
  ],
};


// =====================================================================
// COURTYARD ATTACK
// =====================================================================
window.SCENES.ch04_courtyard_attack = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "Back in my room. Night curled in my lap. Mira on the stool beside me. Quiet." },
    { type: "narration", text: "She'd told me about 'tenebrim' — her race. About how they're naturally stronger, how they come from a wasteland called Menfor. About their horns being like their 'pride and identity.' About how they can't use magic but have hereditary Skills." },
    { type: "narration", text: "She'd even shown me the red tribal markings on her back. I had touched them. Briefly. My hands were cold. She didn't flinch, but she didn't lean into it either." },

    { type: "narration", text: "Then Night's ears perked up. His playful growls turned into a low, tense rumble as he stared at the door." },

    { type: "shake" },
    { type: "sfx", id: "door" },
    { type: "show", char: "gux", at: "left", emotion: "alarm" },
    { type: "say", char: "gux", text: "Boy-o, we got trouble! Grab whatever weapons you have and get ready!" },
    { type: "say", char: "erdan", text: "H-huh? Wha- why? What's going on?" },
    { type: "say", char: "gux", text: "Some bastard's going on a rampage outside. I don't have time to explain the details, so hurry!" },
    { type: "narration", text: "He passed me my sword from the desk. Mira stepped over and handed me the belt with the scabbard. I swapped it quickly." },
    { type: "say", char: "gux", text: "The assailant is an armed tenebrim. Be careful, boy." },


    { type: "bg", id: "courtyard_blood" },
    { type: "bgm", id: "bgm_battle" },
    { type: "hide", at: "left" },
    { type: "narration", text: "We arrived at the courtyard. At least half a dozen palace guards stood in a loose circle, their spears and swords aimed at the intruder." },
    { type: "narration", text: "And there he was, crouched on top of the fountainhead." },

    { type: "show", char: "tenebrim", at: "center", emotion: "feral" },
    { type: "narration", text: "The man was taller than I expected, broad-shouldered with dark chocolate-brown skin and a pair of stubbed horns on his head. His clothes were worn but sturdy, and a heavy, curved axe rested on his shoulder. Deep crimson tribal markings covered his body." },
    { type: "narration", text: "Night started barking at the man, fur bristling." },

    { type: "say", char: "gux", text: "Oi, you bastard! You realize this is the royal palace, right? You've got two choices: drop your weapon and explain yourself, or we put you in the ground." },

    { type: "narration", text: "The man scanned the crowd, before his eyes locked onto Mira. His eyes widened as if in shock, his stance wavering for a moment." },
    { type: "narration", text: "Then, without warning, he let out a guttural, animalistic war cry." },
    { type: "shake" },


    { type: "narration", text: "He launched himself off the fountain, spinning his axe as he descended. He landed in a crouch and rose in a single motion, cleaving straight through the first guard's chestplate." },
    { type: "narration", text: "He twisted it sideways, wrenching the blade free. The next guard lunged, but the man caught his spear, yanked him forward, and slammed the axe haft into his jaw with a crunch." },
    { type: "narration", text: "The third tried to retreat, but the horned man seized him by the collar, hoisted him up, and drove the axe from shoulder to hip." },

    { type: "thought", text: "My chest tightened and my hands clenched against the pillar. I'd seen stuff like this in movies, even in games… but this wasn't behind a screen." },
    { type: "narration", text: "I ducked behind a pillar, fisting my dagger. Mira followed suit, pressing against a nearby wall. Night growled low, fur bristling." },

    { type: "narration", text: "More guards fell. Gux ordered the wedge formation. Ren held a binding spell. But the man was too fast. Froth spilled from his lips as he ripped through them." },
    { type: "narration", text: "And instead of fear, my heart thudded with a strange heat. This was real, brutal, and dangerous. And yet… I wanted to learn." },

    // --- BRANCH: familiar swap check ---
    { type: "if", flag: "swap_familiar", op: ">=", value: 1, then: "ch04_swap_dies" },
    { type: "goto", target: "ch04_night_saves" },
  ],
};


// =====================================================================
// NIGHT SAVES ERDAN (CANONICAL)
// =====================================================================
window.SCENES.ch04_night_saves = {
  steps: [
    { type: "narration", text: "\"Look out, hero!\"" },
    { type: "shake" },
    { type: "narration", text: "A blur of fur darted in. Night yanked me off balance by my pants leg, throwing me hard onto my ass just as an axe flew through the air and buried itself deep in the pillar where I'd been standing." },
    { type: "narration", text: "I scrambled back in a panic, scooping up Night in my arms before bolting toward the farthest cover I could find." },
    { type: "narration", text: "In the corner of my eye, I saw the axe twitch free of the pillar, then shoot straight back into the man's hand with a dull metallic click. Something glinted under his skin — a flash of metal at the base of his palm." },
    { type: "thought", text: "Are you kidding me? He can use telekinesis too!?" },
    { type: "set", flags: { night_bond: 5 } },

    { type: "shake" },
    { type: "narration", text: "The second I blinked, pain shot up my ribs as his fist connected to my side. White-hot. I was flung against the wall, a scream escaping my throat, clutching my side as I crumpled to the ground." },
    { type: "thought", text: "It hurts… fuck it hurts! Something definitely broke!" },
    { type: "narration", text: "Night lunged at the man's leg, biting down hard, but it was pointless. He pried him off with brute force and kicked the poor dog away." },


    { type: "show", char: "mira", at: "right", emotion: "panic" },
    { type: "say", char: "mira", text: "Master!" },
    { type: "narration", text: "Mira crouched down next to me, pressing her hands on my wound." },
    { type: "narration", text: "The sound of the man's footsteps coming my way. I curled into a ball, holding my side, accepting whatever came next." },

    { type: "flash" },
    { type: "say", char: "ren", text: "Tro-ko Branto!" },
    { type: "narration", text: "A burst of light flared across the courtyard. Glowing chains of runes erupted from the earth, wrapping around the man's limbs with a sizzling hiss and breaking his stride." },
    { type: "show", char: "ren", at: "left", emotion: "focused" },
    { type: "say", char: "ren", text: "Stay down, damn you!" },

    { type: "narration", text: "Eight heavily armored knights and a man in a white robe rushed in, led by Mernel. The white-robed man hurried over, kneeling next to me and pulling out a vial." },
    { type: "narration", text: "He gulped down the liquid, then placed his hands near my wound." },
    { type: "say", char: "marcel", text: "Trovak enshari korim thalos… Hetyn." },
    { type: "narration", text: "A soothing feeling washed over me. My wound knitting together with golden threads, the pain numbing over time." },
    { type: "say", char: "mira", text: "Master Erdan! Are you okay? Does it still hurt?" },
    { type: "say", char: "erdan", text: "N-no, the pain's gone. Most of it, at least." },


    { type: "narration", text: "The robed man helped me to my feet. Despite the sudden burst of energy from the healing, my legs were unsteady." },
    { type: "narration", text: "I watched as Mernel stepped forward, pressed two fingers to the tenebrim's forehead, and the man went limp. Unconscious. The knights dragged him away." },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "goto", target: "ch04_recovery" },
  ],
};

// =====================================================================
// FAMILIAR SWAP DIES (Ending #5)
// =====================================================================
window.SCENES.ch04_swap_dies = {
  steps: [
    { type: "narration", text: "\"Look out, hero!\"" },
    { type: "shake" },
    { type: "narration", text: "I waited for something to save me. For the blur of fur, the tug on my pants, the instinctive yank that would pull me out of the way." },
    { type: "narration", text: "Nothing came." },
    { type: "narration", text: "The pretty cat-thing I'd asked for was still in my room. Curled on the windowsill. Indifferent to alarm bells and screaming." },
    { type: "narration", text: "The axe came down before I could even raise my hands." },
    { type: "shake" },
    { type: "narration", text: "It went through my collarbone with a wet crunch, and the world tilted sideways into red. Mira moved — too late." },
    { type: "narration", text: "The last thing I felt was the hot spread of my own blood, and the perfectly indifferent gaze of a familiar I'd picked because she was prettier than the one who would have died for me." },
    { type: "fade", color: "black" },
    { type: "ending", id: "swap_familiar" },
  ],
};


// =====================================================================
// RECOVERY — VISITORS, FORGIVENESS, THE GUIDEBOOK OATH
// =====================================================================
window.SCENES.ch04_recovery = {
  steps: [
    { type: "unfade", color: "black" },
    { type: "bg", id: "infirmary" },
    { type: "bgm", id: "bgm_recovery" },
    { type: "narration", text: "When I woke, an unfamiliar blurry roof and a comfortable four-poster bed. The setting sun beamed through the open window." },
    { type: "say", char: "erdan", text: "Where are my glasses…?" },
    { type: "say", char: "mira", text: "Here, Master Erdan." },
    { type: "narration", text: "She slid them on for me, and everything became clear. She was sitting at the edge of my bed." },
    { type: "say", char: "erdan", text: "Thanks, Mira. What about the man? Was he detained?" },
    { type: "say", char: "mira", text: "Yes. He is being held in the dungeon for interrogation." },

    { type: "show", char: "mira", at: "right", emotion: "neutral" },
    { type: "narration", text: "Marcel visited and prayed over me. Kina came with snacks. Ren checked in briefly. And then Gux arrived — escorted by two stern-looking guards." },
    { type: "narration", text: "He threw himself to the ground, head bowed, palms flat." },
    { type: "show", char: "gux", at: "left", emotion: "neutral" },
    { type: "say", char: "gux", text: "I am deeply sorry for the danger I carelessly put you in! I know that no number of apologies will compensate for my mistake and the pain I put you through." },
    { type: "say", char: "gux", text: "I do not expect you to take pity on me. I will accept any punishment without a single complaint!" },


    { type: "thought", text: "The difference between the boisterous Gux from earlier and the one prostrating in front of me was jarring." },
    { type: "narration", text: "What he wanted wasn't for me to give a half-hearted response. It was something genuine." },
    { type: "say", char: "erdan", text: "Guxanjux. Please, raise your head." },
    { type: "narration", text: "He obeyed, still kneeling, hands on the rug. Our gaze met." },
    { type: "say", char: "erdan", text: "I've heard your apology. Yes, it was scary. And yes, it hurt a lot. But I don't blame you for it. I know your intentions were pure, and now I can see that you're truly sorry." },
    { type: "say", char: "erdan", text: "The healers patched me up good anyway. I've never broken a bone before either. Maybe I'm weird for it, but I've kind of wondered how it feels. And now I know to never break one again." },
    { type: "say", char: "erdan", text: "I don't want to punish you. That apology was so sincere I could hardly stay mad. You're a good guy, Gux." },

    { type: "narration", text: "He blinked slowly, jaw slack. Then a deep breath left him, and gratitude filled his expression." },
    { type: "say", char: "gux", text: "Hero Kernt. It seems I underestimated you as well. Thank you, truly." },
    { type: "narration", text: "He bowed deeply, then turned to leave. Before he left the threshold, he glanced back with a wide grin." },
    { type: "say", char: "gux", text: "Hey, Erdan? I have faith in you. Keep that attitude, and stay safe out there." },
    { type: "hide", at: "left" },

    { type: "narration", text: "Later, Kina told me that my forgiveness actually affected how severe his punishment would be. If I'd been gravely injured, he could've been executed." },
    { type: "thought", text: "What a scary world…" },


    // --- THE GUIDEBOOK OATH ---
    { type: "narration", text: "With nothing to do other than rest, Mira slid onto the stool next to my bed, holding out the red book." },
    { type: "say", char: "mira", text: "I thought Master would be bored with nothing to do, so I brought this." },
    { type: "narration", text: "I opened it to the first page. Below Light Kagami's insufferable intro, there was text I hadn't noticed before." },
    { type: "system", text: "Before you read further, you'll have to swear an oath by imbuing your mana. You are restricted from telling the contents to anyone related to royalty, or using the information to do harm. It can only be accessed by heroes." },
    { type: "system", text: "Exceptions: slaves, servants, or familiars bound to you by pact." },
    { type: "thought", text: "Interesting. So the author didn't trust royalty either." },

    { type: "say", char: "erdan", text: "How do I, uh… channel mana into something?" },
    { type: "say", char: "mira", text: "Master Yosuke said something about picturing a line or thread from your core to whatever object you want to pour your mana into." },
    { type: "narration", text: "I placed my hand on the sigil at the top-right corner of the cover. Closed my eyes. Pictured a golden thread from the bright orb in my chest, flowing through my arm into the book." },
    { type: "narration", text: "A warm feeling spread through my nerves. Then a faint glow." },
    { type: "say", char: "mira", text: "Master, the sigil. It's glowing." },
    { type: "system", text: "[ A Guide for Heroes ]  Oath bound. Pages unlocked." },
    { type: "set", flags: { guidebook_oath: 1 } },
    { type: "say", char: "mira", text: "Congratulations, Master Erdan. I knew you could do it." },
    { type: "say", char: "erdan", text: "Well, it's thanks to you that I could figure it out, so thank you Mira." },
    { type: "narration", text: "Her eyes widened briefly before softening into a small smile." },


    // --- MIRA TALKS ABOUT TENEBRIM / CORES ---
    { type: "narration", text: "We talked for a while. About cores. About races. About what she was and what I was, and what we were doing in the same room." },
    { type: "say", char: "mira", text: "Your body will grow stronger faster than any normal person's. The core is what accelerates it. And you were already healed quickly because of it." },
    { type: "say", char: "erdan", text: "So ironically, getting my ass beat makes me stronger then?" },
    { type: "say", char: "mira", text: "Physical training is also an option. There is a quicker way, but it's a painful process, and the special artifact used is owned by the church." },
    { type: "say", char: "erdan", text: "A church, huh? So that's why the Queen told me to head there." },

    { type: "narration", text: "I tried to get up. Mira blocked the doorway with both arms spread." },
    { type: "say", char: "mira", text: "Please reconsider. If you leave now, your safety cannot be guaranteed." },
    { type: "say", char: "erdan", text: "Even if I say it's an order?" },
    { type: "say", char: "mira", text: "Why are you so determined to leave? I don't understand the rush." },
    { type: "thought", text: "She was right. I was being stupid. I wasn't the type to cling to pride or throw a tantrum over nothing." },
    { type: "say", char: "erdan", text: "Hah, I'm just joking! I know it's stupid to go right now. I can always check it later, yeah?" },
    { type: "say", char: "mira", text: "…Well, as long as you understand, then that's good. But please don't joke like that again." },
    { type: "say", char: "erdan", text: "Yeah, sorry sorry." },

    { type: "choice", prompt: "How do you feel about everything that's happened?", options: [
      { text: "(Determined. I'll figure this out. With Mira.)", target: "ch05_kuger_intro", flags: { mira_trust: 2 } },
      { text: "(Exhausted. Maybe I should just stop trying.)", target: "ch04_broken_setup", flags: { broken_seed: 1, paranoia: 1 }, tag: "→ Broken hero seeds" },
    ]},
  ],
};


// =====================================================================
// BROKEN HERO SETUP (seeds Ending #4)
// =====================================================================
window.SCENES.ch04_broken_setup = {
  steps: [
    { type: "thought", text: "I'd been here a week and I'd already nearly died twice. They wanted me to stop a flood of monsters. I couldn't even stop a single one." },
    { type: "thought", text: "Maybe I just… stop pretending. A broken hero can't save the world, after all. Maybe it's safer if I'm broken." },
    { type: "set", flags: { broken_hero: 1 } },
    { type: "goto", target: "ch05_kuger_intro" },
  ],
};

// =====================================================================
// BROKEN HERO ENDING (reached from ch08_wakeup if flag is set)
// =====================================================================
window.SCENES.ch04_broken_continue = {
  steps: [
    { type: "unfade", color: "black" },
    { type: "bg", id: "infirmary" },
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "narration", text: "I woke up. I didn't get up." },
    { type: "narration", text: "The healers spoke. Mira spoke. Mernel spoke. I closed my eyes whenever I could. I was very, very tired, and the trying part was over." },
    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "narration", text: "On the third night, the chains in the dungeon failed. The tenebrim came for me. I didn't see him coming. The light was off. He was quiet." },
    { type: "narration", text: "I think he hesitated, when he saw I wasn't even raising my hands." },
    { type: "narration", text: "Maybe that was its own kind of mercy." },
    { type: "ending", id: "broken_hero" },
  ],
};
