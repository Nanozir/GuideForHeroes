/* ============================================
   Chapter 5 — Second Attack / Rescue / Sanctum
   ============================================
   Adapts manuscript Ch8 "On the Move" and Ch9
   "The Crimson Sun" — the tenebrim breaks out,
   Torren/Guthethya rescue, underground passage,
   Kuger leads them into the sanctum.
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// THE SECOND ATTACK — tenebrim breaks into Erdan's room
// =====================================================================
window.SCENES.ch05_kuger_intro = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_tense" },
    { type: "narration", text: "A few more days of recovery. I could sit up without wincing. Night had healed faster than me — already back to his energetic self, chasing his own tail while I read." },
    { type: "narration", text: "Then a dull thud echoed through the hallway. Then another, followed by something heavy hitting the ground." },
    { type: "narration", text: "The sound of metal clashing against metal, followed by a scream that was cut short." },

    { type: "shake" },
    { type: "sfx", id: "door" },
    { type: "narration", text: "The door shuddered under three impacts before the wood splintered and the hinges broke into pieces." },
    { type: "narration", text: "The same man from before." },

    { type: "show", char: "tenebrim", at: "center", emotion: "feral" },
    { type: "narration", text: "Shackles still on his wrists, broken chains wrapped around them, blood and dirt smeared across his bare chest. His eyes were sharp — not the madness from before, but purpose. He held a bloodied sword in his hand." },
    { type: "narration", text: "I didn't move. I knew that any escape attempt would fail. I simply stared at him, accepting my fate." },

    { type: "narration", text: "Mira raised a stool like a weapon, but then froze. Her gaze landed on the man's face, and something flickered in her expression. Recognition? No — confusion." },
    { type: "narration", text: "The man froze too, when his eyes landed on her. His breath hitched." },
    { type: "narration", text: "He spoke words in a tongue I couldn't understand — unfamiliar syllables cutting through the silence. Mira tilted her head, then shook it slowly, answering in the same language." },
    { type: "narration", text: "Whatever she said, he didn't like it. His grip on the sword tightened, his tone rising in anger. They argued back and forth." },

    { type: "narration", text: "And then his attention snapped to me. His whole body turned, his sword lifting." },
    { type: "show", char: "mira", at: "right", emotion: "fierce" },
    { type: "narration", text: "Mira moved. She climbed onto the bed and pressed herself in front of me, arms spread protectively." },
    { type: "say", char: "mira", text: "As Master's servant, you'll have to go through me first." },


    { type: "narration", text: "The man staggered back, disbelief on his face. He raised his sword, and I braced myself for the strike—" },
    { type: "sfx", id: "whoosh" },
    { type: "narration", text: "An arrow soared through the open window, cutting between us. It buried itself in the stone wall an inch from the man's head. A hiss followed, then the room filled with thick smoke." },
    { type: "narration", text: "Shadows moved through it. Before I could resist, hands grabbed me. Strong hands, too many of them." },

    { type: "shake" },
    { type: "narration", text: "I was lifted and carried to the window. The person holding me leapt off — and the landing was smoother than I expected, now on a rooftop almost 10 meters below." },
    { type: "narration", text: "Behind us, more arrows sliced through the smoke, forcing the tenebrim back. He snarled, ready to pursue, but booted footsteps thundered down the corridor — guards finally arriving." },

    { type: "hide", at: "center" },
    { type: "hide", at: "right" },
    { type: "bg", id: "alley" },
    { type: "bgm", id: "bgm_chase" },

    // --- MEETING TORREN AND GUTHETHYA ---
    { type: "narration", text: "When I looked up to see who my inelegant savior was, I was met by the sight of a towering man with skin as dark as the night sky and eyes like lavender. His dark hair was tied into a ponytail. Four arms." },
    { type: "narration", text: "Four. Arms." },
    { type: "show", char: "torren", at: "left", emotion: "calm" },
    { type: "narration", text: "Beside him landed a shorter woman with brown skin, red markings on her face similar to Mira's. She wore a leather headband, beast-teeth choker, and a sleeveless hide top. A curved blade rested on her hip." },
    { type: "show", char: "guthethya", at: "right", emotion: "wary" },

    { type: "say", char: "erdan", text: "What's going on? Are you guys… here to save us?" },
    { type: "say", char: "torren", text: "Ah, I apologize for the fright. We're adventurers, hired by the queen herself. Complicated times, you see." },
    { type: "say", char: "torren", text: "Name's Torren. A pleasure to meet you, hero." },
    { type: "reveal_name", char: "torren", name: "Torren" },
    { type: "say", char: "guthethya", text: "Guthethya. Less talking, more moving." },
    { type: "reveal_name", char: "guthethya", name: "Guthethya" },


    { type: "say", char: "mira", text: "And how do we know we can trust you? The timing of your intervention was… convenient." },
    { type: "say", char: "guthethya", text: "You don't have much of a choice. Our companion can't stall forever, and standing here debating won't help anyone." },
    { type: "narration", text: "She was right. No matter their true intention, they'd saved our lives." },
    { type: "say", char: "erdan", text: "She's right, we have no choice but to trust them. They did save us, after all." },
    { type: "say", char: "mira", text: "If you say so, Master." },

    { type: "narration", text: "Strong hands scooped me up again — Torren carrying me like I weighed nothing. Before I could protest, he leapt from the edge with ease." },
    { type: "say", char: "torren", text: "Apologies, hero! Brace yourself!" },
    { type: "narration", text: "My stomach jolted, but the landing was smooth. Meanwhile, Mira had refused to be carried. She jumped on her own — and the ground cracked beneath her feet like an elephant had been dropped from the rooftop." },
    { type: "say", char: "torren", text: "By the Queen's bones…" },
    { type: "say", char: "guthethya", text: "Hmph. Seems they manage well enough on their own." },

    // --- THE HIDDEN PASSAGE ---
    { type: "narration", text: "Two armored guards stood waiting along the shadowed stretch of the palace wall. One tapped a torch twice against the stone. A hidden seam opened, revealing a narrow stairway leading into darkness." },
    { type: "say", char: "guard", text: "Quickly. This passage will take you beyond the palace grounds. We don't have long." },
    { type: "narration", text: "We descended. The steps were cracked and worn, the air growing colder and thicker with each flight." },
    { type: "set", flags: { paranoia: 1 } },

    { type: "hide", at: "left" },
    { type: "hide", at: "right" },
    { type: "goto", target: "ch05_sanctum_tour" },
  ],
};


// =====================================================================
// KUGER APPEARS / SANCTUM TOUR
// =====================================================================
window.SCENES.ch05_sanctum_tour = {
  steps: [
    { type: "bg", id: "underground_passage" },
    { type: "bgm", id: "bgm_tense" },
    { type: "narration", text: "The passage leveled out into a narrow tunnel. The ceiling was low enough that Torren had to duck slightly, but he didn't seem to mind. The walls were vine-covered cobblestone." },
    { type: "narration", text: "At the end of the hallway, a figure emerged from the dark. A cloaked man. Hood draped over his head, concealing unmistakable purple skin. Dark, piercing eyes. And a mask of metal bars hiding the lower half of his face." },

    { type: "show", char: "kuger", at: "center", emotion: "neutral" },
    { type: "reveal_name", char: "kuger", name: "Kuger" },
    { type: "say", char: "kuger", text: "I will keep it brief. Hand over the hero." },
    { type: "narration", text: "The air around us changed immediately. Guthethya's hand went to her blade." },
    { type: "narration", text: "He slowly extracted his left hand from a pocket, holding up a golden chain bearing an emblem — a red sun with a violet eye in the center." },
    { type: "narration", text: "Guthethya's posture eased, minutely." },
    { type: "say", char: "guthethya", text: "…The Crimson Sun Order. And of the JOAT sub-branch, no less." },
    { type: "say", char: "kuger", text: "Follow me. It'll be worthwhile." },

    // --- INSIDE THE SANCTUM ---
    { type: "bg", id: "sanctum_hall" },
    { type: "bgm", id: "bgm_sanctum" },
    { type: "narration", text: "Beyond the passage was a chamber unlike anything I'd expected beneath a palace." },
    { type: "narration", text: "Crystal lanterns set into the walls. Brass and iron pipes crisscrossing overhead, hissing faintly. Grated metal walkways for floors. The air smelled of rust and old blood." },
    { type: "narration", text: "Dozens of robed figures moved around the place, identical caged masks covering their faces. Their skin had the same unusual purple hue. Some carried scrolls, others slabs of metal with etched symbols. A few worked on strange machines that whirred and clanked." },

    { type: "thought", text: "Steampunk. Or close enough. Built from what previous heroes had brought from Earth." },


    { type: "say", char: "kuger", text: "The Crimson Sun Order is a branch of the Church of Ucliat. Within our order, we have 'sub-branches' that specialize in certain fields." },
    { type: "say", char: "kuger", text: "Ours focuses on creating prototypes of Earth's technology. Jack-of-all-trades — or JOAT, for short." },

    { type: "narration", text: "He gave us a tour. Workshops. Weapons. Bicycles. A steam-driven carriage in one corner. Repeating crossbows in various configurations. Explosive talisman tags. Even an elevator — a small wooden box reinforced with metal." },
    { type: "narration", text: "Each room he opened drew my attention further from the pattern I should've been noticing: that we were getting deeper, and more isolated, with every step." },

    { type: "narration", text: "One of the masked workers spotted us — specifically, me — and the word spread like fire." },
    { type: "say", char: "crowd", text: "I-It's the hero!" },
    { type: "narration", text: "We were immediately swarmed by a small crowd of violet-skinned figures, all in awe. A few had their hands clasped, muttering prayers." },

    { type: "say", char: "kuger", text: "My brothers and sisters! Today, our Creator has once again blessed us with a hero. Yet even now, there are those who would dare to bring him harm. It is our sacred duty to safeguard him!" },
    { type: "narration", text: "The crowd erupted into gasps and murmured prayers. Some fell to their knees." },
    { type: "say", char: "kuger", text: "A hero's body is not his own. It is a vessel, a promise to the world. Through it, strength and salvation are carried into future generations." },
    { type: "narration", text: "The way he said it made a shiver run down my spine." },


    { type: "say", char: "mira", text: "Master. Give me time, and I'll make them seem unfaithful compared to me." },
    { type: "say", char: "erdan", text: "Huh? What do you even mean?" },
    { type: "say", char: "mira", text: "I was trying to replicate someone's humor. Seems it isn't effective even with its source." },
    { type: "thought", text: "What the hell is she talking about?" },

    // --- THE SEPARATION ---
    { type: "narration", text: "Kuger explained the elevator could only fit three. He'd personally escort me and Mira. The adventurers would be guided separately." },
    { type: "narration", text: "Guthethya and Torren exchanged wary glances but nodded. I offered them a quick thanks before we parted." },

    { type: "narration", text: "The elevator shuddered and descended. Then, as Mira and I were about to step out, Kuger stood in our path." },
    { type: "narration", text: "He grabbed me by my collar — gently but firmly — pushing me out of the elevator. I stumbled over my feet." },

    { type: "shake" },
    { type: "sfx", id: "door" },
    { type: "narration", text: "The doors slammed shut. Mira's face was on the other side of translucent barrier that shimmered with each of her strikes. Her mouth moved but her voice was silent." },
    { type: "narration", text: "Then Kuger slammed a fist against the door, and the elevator dropped. Taking Mira with it." },
    { type: "say", char: "erdan", text: "Mira!" },

    { type: "say", char: "kuger", text: "Hero. I apologize, but from here on, you'll have to accompany me alone. The path ahead must remain undisturbed." },

    // --- ERDAN RUNS ---
    { type: "thought", text: "Run." },
    { type: "narration", text: "I sprinted. Nearly tripped over my own feet. He didn't even bother shouting — the walls knew his voice. Doors opened. Robed figures emerged from rooms I hadn't seen, blocking every path." },
    { type: "narration", text: "A rope. Hands holding me in place. Not painful, but inescapable." },
    { type: "say", char: "kuger", text: "Hero, please. It's futile to run. This is my sanctum, my territory, my home." },
    { type: "narration", text: "I stopped struggling. Surrender. Cooperate. Survive." },
    { type: "set", flags: { paranoia: 2 } },

    { type: "narration", text: "They bound my wrists with rope, blindfolded me, and walked me deeper into the complex. Kuger talked the entire time about sanctity, lineage, and duty. I half-listened." },
    { type: "narration", text: "The air changed — first cool and metallic, then warmer with the faint smell of incense." },

    { type: "hide", at: "center" },
    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "goto", target: "ch06_seraya_meet" },
  ],
};
