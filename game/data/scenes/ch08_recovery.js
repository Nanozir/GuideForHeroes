/* ============================================
   Chapter 8 — Hallucinations and recovery
   ============================================ */
window.SCENES = window.SCENES || {};

window.SCENES.ch08_hallucinations = {
  steps: [
    { type: "bgm", id: "bgm_hallucination" },
    { type: "bg", id: "battlefield" },
    { type: "unfade", color: "black" },

    { type: "narration", text: "The world reformed. I was running. Down a muddy path. A spear in a hand that didn't feel like mine. Sabatons. Chainmail. A retreat being shouted in my own voice." },
    { type: "say", char: "vision", text: "Retreat! A retreat has been issued! Retreat!" },
    { type: "narration", text: "The crest on my chest was a sun pierced by a lance. I didn't know it." },

    { type: "shake" },
    { type: "narration", text: "A horse skidded beside me. A bald man with a burn scar." },
    { type: "say", char: "vision", text: "Lieutenant Richard! Get your ass up before the beasts catch up!" },
    { type: "narration", text: "Then a pearlescent figure with bone-blade elbows and a sutured mouth was standing over me. Its core hovered above its head, suspended by its own body. Light leaked from its cracks." },
    { type: "narration", text: "It crushed my chest under its hoof, and I felt my heart leave with it." },
    { type: "fade", color: "white", duration: 400 },

    { type: "wait", ms: 600 },
    { type: "bg", id: "sky_battle" },
    { type: "unfade", color: "white", duration: 400 },
    { type: "narration", text: "Now I was on a wyvern. Goggles. The reins in my hands. A platoon of riders diving on a black-scaled dragon below." },
    { type: "say", char: "vision", text: "For our Motherland and the True King!" },
    { type: "narration", text: "The first wave of riders exploded on impact. I lost my reins. The dragon's tail clipped me, and I fell." },
    { type: "narration", text: "I welcomed it." },
    { type: "fade", color: "white", duration: 400 },

    { type: "wait", ms: 600 },
    { type: "bg", id: "elven_plaza" },
    { type: "unfade", color: "white", duration: 400 },
    { type: "narration", text: "A podium. Snow. A sea of pointed-eared faces in front of me. My voice — amplified by a brass crystal at my collar — declaring that the Federation must move beyond mere survival." },
    { type: "narration", text: "And in the back of my mind, my own voice, distantly: He has a point." },
    { type: "fade", color: "white", duration: 400 },

    { type: "wait", ms: 600 },
    { type: "bg", id: "farmstead" },
    { type: "unfade", color: "white", duration: 400 },
    { type: "narration", text: "A bedroom. Two women. A child in a doorway. A wife who called me Elias and reached for my hand. A silver-haired woman called Bryn watching me too closely from the corner." },
    { type: "narration", text: "And outside: the heavy, wet impact of something that should not exist on a peaceful farm." },

    { type: "thought", text: "I was getting tired of dying." },
    { type: "narration", text: "But Elias's body knew how to fight. The Skill in his bones — Perfect Replication — pulled a memory I shouldn't have had: a video game I'd loved on Earth. A character with a precise combo." },
    { type: "narration", text: "I stepped between Bryn and the creature, sword in one hand, dagger in the other. I executed the combo perfectly. The beast died." },
    { type: "narration", text: "And Bryn turned to me — not Bryn anymore, but Lieutenant Richard's voice, warm and sad." },
    { type: "say", char: "vision", text: "You're not one of us. You're just visiting. A phantom inhabiting a body of the past." },
    { type: "say", char: "vision", text: "Time to wake up, Hero. They're waiting for you." },
    { type: "fade", color: "white" },

    { type: "wait", ms: 1000 },
    { type: "goto", target: "ch08_wakeup" },
  ],
};

window.SCENES.ch08_wakeup = {
  steps: [
    { type: "bg", id: "infirmary" },
    { type: "bgm", id: "bgm_recovery" },
    { type: "unfade", color: "white" },
    { type: "narration", text: "Polished wooden beams. The smell of clean linen and herbs. Bandages tight around my chest. An IV-like crystal tube dripping glowing liquid into my arm." },
    { type: "show", char: "mira", at: "right", emotion: "tired" },
    { type: "say", char: "mira", text: "You've been out for four days. The royal healers stabilized you." },
    { type: "narration", text: "Two armored knights at the door. Same scarred blonde from the throne room. Same brown ponytail under the helmet." },

    { type: "narration", text: "Mira's hand brushed against mine, and I realized she'd been holding it. Not now — just before. There were nail marks in my palm from her grip." },

    { type: "thought", text: "These weren't dreams. These weren't legendary heroes. They were just… people. Soldiers. Leaders. Fathers. People who fought, hoped, and died without ever relying on the Heroes." },
    { type: "thought", text: "And now I was supposed to be the one who saves everyone like them?" },

    { type: "show", char: "attendant", at: "left", emotion: "neutral" },
    { type: "say", char: "attendant", text: "Hero Kernt is awake. Her Majesty has been informed." },
    { type: "say", char: "attendant", text: "Six guards were killed during the courtyard attack. Two more were gravely wounded. Commander Gux has been suspended for six weeks." },
    { type: "say", char: "attendant", text: "The tenebrim has been apprehended. Public execution is set for three mornings from now." },

    { type: "thought", text: "Three days." },
    { type: "set", flags: { mira_trust: 2, paranoia: 1 } },

    { type: "hide", at: "left" },
    { type: "say", char: "mira", text: "Master Erdan. The Queen will visit you shortly. After her, there is… one other matter." },
    { type: "say", char: "mira", text: "The man in custody. Before the execution. I would like to see him." },

    { type: "say", char: "erdan", text: "Why?" },
    { type: "say", char: "mira", text: "He keeps calling for someone. The guards say he refuses to speak Argon. It might be — it might be relevant." },

    { type: "say", char: "erdan", text: "Yeah. Of course. Whenever you're ready." },
    { type: "set", flags: { mira_trust: 2 } },
    { type: "goto", target: "ch08_queen_choice" },
  ],
};

window.SCENES.ch08_queen_choice = {
  steps: [
    { type: "wait", ms: 600 },
    { type: "show", char: "elisabeth", at: "center", emotion: "tired" },
    { type: "say", char: "elisabeth", text: "Lord Kernt. I came to apologize personally. Politics complicate things. The Order has allies in high places, even among the nobility." },
    { type: "say", char: "elisabeth", text: "I offer you a choice. Stay here under my protection. Train, heal, prepare for Doomsday with the full might of Elysandria behind you." },
    { type: "say", char: "elisabeth", text: "Or leave the capital. Take your companions, go where you will. I'll provide gold, supplies, even escorts if needed." },
    { type: "say", char: "elisabeth", text: "But know this: the monsters are rising. Lumenari or not, the world won't wait for you to decide." },

    { type: "choice", prompt: "Stay, or leave?", options: [
      { text: "(I'll leave. The palace isn't safe.)", target: "ch08_decide_leave", flags: { decision: 1 } },
      { text: "(Stay. Be the Queen's hero.)", target: "ch08_decide_stay", flags: { decision: 2, queen_favor: 5 }, tag: "→ The Iron Queen's Hero (#2)" },
      { text: "(I need time to think.)", target: "ch08_decide_think" },
    ]},
  ],
};

window.SCENES.ch08_decide_think = {
  steps: [
    { type: "say", char: "erdan", text: "I… I need time to think." },
    { type: "say", char: "elisabeth", text: "Very well. The palace is yours for as long as you wish to stay, or until you choose otherwise." },
    { type: "say", char: "elisabeth", text: "Rest. Heal. When you have an answer, send word. I will listen." },
    { type: "hide", at: "center" },
    // Detour through the temptation hub — surfaces the alternate ending paths.
    { type: "goto", target: "hub_temptation" },
  ],
};

window.SCENES.ch08_garden = {
  steps: [
    { type: "bg", id: "garden" },
    { type: "bgm", id: "bgm_garden" },
    { type: "narration", text: "By morning I was cleared for a walk in the gardens. Mira at my side. Two knights behind. Night, finally returned from the menagerie, padding at my heel." },
    { type: "show", char: "mira", at: "right", emotion: "soft" },
    { type: "show", char: "night", at: "center", emotion: "happy" },

    { type: "narration", text: "Mira found the mud near a flowerbed. She knelt — only briefly — and pressed her fingers into it like she was checking it was real." },
    { type: "narration", text: "(Wait — that was Seraya, later. Not Mira. The drugs are still in my system.)" },

    { type: "say", char: "mira", text: "If I decide to see him, the man in custody… will you come with me?" },
    { type: "say", char: "erdan", text: "Yeah, of course. The guy tried to kill me on my first day. Even I want answers." },

    { type: "wait", ms: 600 },
    { type: "goto", target: "ch08_decide_leave" },
  ],
};

// ----- Stay branch (Ending #2) -----
window.SCENES.ch08_decide_stay = {
  steps: [
    { type: "say", char: "erdan", text: "I'll stay. Where else am I supposed to go?" },
    { type: "say", char: "elisabeth", text: "A wise choice, Hero Kernt." },
    { type: "narration", text: "The crown of decisions slid off my head and onto hers. It was, honestly, a relief." },
    { type: "set", flags: { stay_route: 1 } },

    { type: "fade", color: "black" },
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "wait", ms: 800 },

    { type: "narration", text: "Months passed. I trained with the people the Queen chose. I attended the parties she chose. I went where her finger pointed and bowed when her court bowed." },
    { type: "narration", text: "The tenebrim broke free a third time, on a bad night. Better security took him down before he reached me. A guard died. The guard had a name I never learned." },
    { type: "narration", text: "Mira left without saying goodbye. I think she did. The room was empty one morning, and her side of the bed was made up like she'd never been there." },
    { type: "narration", text: "Doomsday came. I went where they pointed. I died well, by their measure." },
    { type: "ending", id: "good_boy" },
  ],
};

window.SCENES.ch08_decide_leave = {
  steps: [
    { type: "say", char: "erdan", text: "We're leaving. After the visit to the tenebrim tomorrow." },
    { type: "narration", text: "The Queen studied me for a long moment. Her expression didn't change." },
    { type: "say", char: "elisabeth", text: "Very well. I'll have supplies ready by dawn the day after." },
    { type: "say", char: "elisabeth", text: "There is, however, one matter. The summoning was announced three weeks ago. The people were told their hero had arrived." },
    { type: "say", char: "elisabeth", text: "A simple welcome ball, customary for every hero. Nothing grand. Then you may slip away at dawn." },
    { type: "set", flags: { leave_route: 1 } },
    { type: "hide", at: "center" },

    { type: "goto", target: "ch09_ball_intro" },
  ],
};
