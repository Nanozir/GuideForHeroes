/* ============================================
   Chapter 8 — Hallucinations / Recovery / Choice
   ============================================
   Adapts manuscript Ch14-19. Past-life visions from
   the Somnus Gas, waking up, Queen's stay-or-leave.
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// HALLUCINATIONS — four past lives
// =====================================================================
window.SCENES.ch08_hallucinations = {
  steps: [
    { type: "bgm", id: "bgm_hallucination" },
    { type: "bg", id: "battlefield" },
    { type: "unfade", color: "black" },

    { type: "narration", text: "The world reformed. I was running — down a muddy path, a spear clutched in a hand that didn't feel like mine. Sabatons kicked up dirt. My breath was ragged from exertion." },
    { type: "say", char: "vision", text: "Retreat! A retreat has been issued! Retreat!" },
    { type: "narration", text: "The shout came from my mouth. A crest I didn't recognize was on my chest: a stylized sun being pierced by a lance." },

    { type: "shake" },
    { type: "narration", text: "A horse skidded beside me. A gruff bald man with a serious burn mark around his neck." },
    { type: "say", char: "vision", text: "Lieutenant Richard! Get your ass up before the beasts catch up! We can't lose more men today!" },
    { type: "narration", text: "I reached up to grab his outstretched hand—" },
    { type: "narration", text: "A giant blur shot past. The wet sound of flesh tearing. The hand I was about to grab dropped limp — the upper half of the man simply gone." },
    { type: "narration", text: "Then a shadow fell over me. A pearlescent figure, bone-blades at the elbows, mouth sutured shut. Its core hovered above its head, leaking light through cracks." },
    { type: "narration", text: "It raised a hoofed leg. Brought it down." },
    { type: "fade", color: "white", duration: 400 },

    // --- VISION 2: WYVERN RIDER ---
    { type: "wait", ms: 500 },
    { type: "bg", id: "sky_battle" },
    { type: "unfade", color: "white", duration: 400 },
    { type: "narration", text: "Wind whipped at my face. Goggles. Reins in my hands. I was on a wyvern — red wings flapping as it surged toward a black-scaled dragon breathing something dark on the soldiers below." },
    { type: "say", char: "vision", text: "Charge forward! For our Motherland and the True King!" },
    { type: "narration", text: "That hadn't come from anyone else. It came from my own mouth, unfamiliar, deep, and with a passion I could never muster." },
    { type: "narration", text: "The first line of chargers exploded upon impact with the dragon's torso. Suicide bombers. I watched them die with a feeling of grim acceptance that wasn't mine." },
    { type: "narration", text: "Then the dragon's tail hit me, and I fell. The ground rushed up." },
    { type: "thought", text: "Finally… I can rest…" },
    { type: "fade", color: "white", duration: 400 },


    // --- VISION 3: ELVEN LEADER ---
    { type: "wait", ms: 500 },
    { type: "bg", id: "elven_plaza" },
    { type: "unfade", color: "white", duration: 400 },
    { type: "narration", text: "A high stone podium. Biting wind. A snow-covered plaza filled with hundreds of pointed-eared faces. My voice — amplified by a brass device at my collar — rang over the silence." },
    { type: "narration", text: "I was declaring that the Gorthon Federation must move beyond mere survival. That the true gift of Mother Frost was a chance to explore, to live for more than the next winter." },
    { type: "narration", text: "The crowd's hum of agreement grew into something warmer. Hope catching." },
    { type: "thought", text: "He has a point, actually." },
    { type: "fade", color: "white", duration: 400 },

    // --- VISION 4: ELIAS THE FARMER ---
    { type: "wait", ms: 500 },
    { type: "bg", id: "farmstead" },
    { type: "unfade", color: "white", duration: 400 },
    { type: "narration", text: "A bedroom. Morning light. Two women in the bed beside me. A child peeking in from the doorway, whispering about 'dad' to someone unseen." },
    { type: "narration", text: "A name surfaced: Elias. A wife named Anya. A silver-haired woman named Bryn who watched me too closely from the corner." },
    { type: "narration", text: "This life had warmth. It had a family. It had everything I thought I wanted." },
    { type: "thought", text: "Maybe it would be better to just… stay here. Give up." },

    { type: "narration", text: "Then a child's scream from outside. Something that should not exist on a peaceful farm. Elias's body knew how to fight — a Skill called [Perfect Replication] pulled a combo from a video game I'd loved on Earth." },
    { type: "narration", text: "I killed the beast. And Bryn turned to me — not Bryn anymore, but a voice warm and sad." },
    { type: "say", char: "vision", text: "You remembered. That you're not one of us." },
    { type: "say", char: "vision", text: "You're just visiting. A phantom inhabiting a body of the past." },
    { type: "say", char: "vision", text: "Time to wake up, Hero. They're waiting for you." },

    { type: "fade", color: "white" },
    { type: "wait", ms: 800 },

    { type: "narration", text: "In the silence between that life and my own, the truth settled over me." },
    { type: "thought", text: "These weren't legendary heroes. They were just… people. Soldiers, leaders, fathers. People who fought, hoped, and died without ever relying on 'the Hero.'" },
    { type: "thought", text: "And now I was supposed to be the one who saves everyone?" },

    { type: "goto", target: "ch08_wakeup" },
  ],
};


// =====================================================================
// WAKING UP
// =====================================================================
window.SCENES.ch08_wakeup = {
  steps: [
    // If broken_hero flag was planted in ch04, the accumulated trauma ends it.
    { type: "if", flag: "broken_hero", op: ">=", value: 1, then: "ch04_broken_continue" },

    { type: "bg", id: "infirmary" },
    { type: "bgm", id: "bgm_recovery" },
    { type: "unfade", color: "white" },
    { type: "narration", text: "Polished wooden ceiling. Clean linen smell. Herbs. Bandages tight around my chest. A crystal tube dripping glowing liquid into my arm — an IV, apparently invented by the 17th hero." },

    { type: "show", char: "mira", at: "right", emotion: "tired" },
    { type: "narration", text: "Mira was on the stool beside the bed. She looked like she hadn't slept in days." },
    { type: "say", char: "mira", text: "You've been out for four days. They carried you out right after the elf fled. Seraya kept you stable until the royal healers arrived." },
    { type: "narration", text: "Her hand was resting over mine. There were nail marks in my palm from her grip — from before, not now." },

    { type: "say", char: "erdan", text: "...Mira… you're hurt too." },
    { type: "say", char: "mira", text: "He caught my leg when he broke free. It's been treated. I'll live." },
    { type: "narration", text: "A pause. Her shoulders were tense." },
    { type: "say", char: "mira", text: "But you… you almost didn't." },

    // --- ATTENDANT REPORT ---
    { type: "show", char: "attendant", at: "left", emotion: "neutral" },
    { type: "say", char: "attendant", text: "Hero Kernt is awake. The Queen has been informed." },
    { type: "say", char: "attendant", text: "I have a report. Six guards were killed during the courtyard attack. Two more were gravely wounded. One didn't survive the night." },
    { type: "say", char: "attendant", text: "Commander Gux has been placed on suspension for six weeks. Mandatory protocol retraining." },
    { type: "say", char: "attendant", text: "The tenebrim assailant has been apprehended. One of the adventurers the Queen hired turned him in. Public execution is set for three mornings from now." },
    { type: "hide", at: "left" },
    { type: "set", flags: { mira_trust: 2, paranoia: 1 } },

    { type: "say", char: "mira", text: "Master Erdan. The Queen will visit you shortly. But before that — the man in custody. Before the execution." },
    { type: "say", char: "mira", text: "He keeps calling for someone. The guards say he refuses to speak Argon. I would like to see him." },
    { type: "say", char: "erdan", text: "Yeah. Of course. Whenever you're ready." },
    { type: "set", flags: { mira_trust: 2 } },

    { type: "goto", target: "ch08_queen_choice" },
  ],
};


// =====================================================================
// QUEEN'S CHOICE — stay or leave
// =====================================================================
window.SCENES.ch08_queen_choice = {
  steps: [
    { type: "wait", ms: 400 },
    { type: "show", char: "elisabeth", at: "center", emotion: "tired" },
    { type: "say", char: "elisabeth", text: "Lord Kernt. I came to apologize personally. The attack, the assassin, the Crimson Sun's involvement… it was a failure on my part. I underestimated Kuger's reach." },
    { type: "say", char: "elisabeth", text: "He won't escape justice, but… politics complicate things. The Order has allies in high places, even among the nobility." },
    { type: "say", char: "erdan", text: "W-why tell me this? I'm just... the hero. Not exactly a politician." },
    { type: "say", char: "elisabeth", text: "Because you're not 'just' anything, Erdan. Heroes change the world, whether they mean to or not." },

    { type: "say", char: "elisabeth", text: "I offer you a choice. Stay here under my protection. Train, heal, prepare for Doomsday with the full might of Elysandria behind you." },
    { type: "say", char: "elisabeth", text: "Or leave the capital. Take your companions, go where you will. I'll provide gold, supplies, even escorts if needed." },
    { type: "say", char: "elisabeth", text: "But know this: the monsters are rising. Lumenari or not, the world won't wait for you to decide." },

    { type: "choice", prompt: "Stay, or leave?", options: [
      { text: "\"We're leaving. After the visit to the tenebrim.\"", target: "ch08_decide_leave", flags: { decision: 1 } },
      { text: "\"I'll stay. Where else am I supposed to go?\"", target: "ch08_decide_stay", flags: { decision: 2, queen_favor: 5 }, tag: "→ The Iron Queen's Hero (#2)" },
      { text: "\"I need time to think.\"", target: "ch08_decide_think" },
    ]},
  ],
};

// --- "I need time to think" → temptation hub ---
window.SCENES.ch08_decide_think = {
  steps: [
    { type: "say", char: "erdan", text: "I… I need time to think." },
    { type: "say", char: "elisabeth", text: "Very well. The palace is yours for as long as you wish to stay. When you have an answer, send word." },
    { type: "hide", at: "center" },
    { type: "goto", target: "hub_temptation" },
  ],
};


// =====================================================================
// DECIDE TO LEAVE (canonical path continues)
// =====================================================================
window.SCENES.ch08_decide_leave = {
  steps: [
    { type: "say", char: "elisabeth", text: "Very well. I'll have supplies ready by dawn the day after." },
    { type: "narration", text: "She studied me for a long moment. Her expression didn't change — but something in the set of her shoulders eased. Like she'd expected this answer." },
    { type: "say", char: "elisabeth", text: "There is, however, one matter. The summoning was announced to the realm three weeks ago. The people were told their hero had arrived." },
    { type: "say", char: "elisabeth", text: "They need to see you. A simple welcome ball — customary for every hero. Nothing grand. You make an appearance, let them cheer, then slip away at dawn." },
    { type: "say", char: "elisabeth", text: "Refuse, and the court will see weakness. Your name will become a joke before it ever becomes anything else." },
    { type: "say", char: "erdan", text: "...Alright. I'll do it." },
    { type: "set", flags: { leave_route: 1 } },
    { type: "hide", at: "center" },
    { type: "goto", target: "ch09_ball_intro" },
  ],
};

// =====================================================================
// DECIDE TO STAY — Ending #2
// =====================================================================
window.SCENES.ch08_decide_stay = {
  steps: [
    { type: "say", char: "erdan", text: "I'll stay. Where else am I supposed to go?" },
    { type: "say", char: "elisabeth", text: "A wise choice, Hero Kernt." },
    { type: "narration", text: "The crown of decisions slid off my head and onto hers. It was, honestly, a relief." },
    { type: "set", flags: { stay_route: 1 } },
    { type: "hide", at: "center" },

    { type: "fade", color: "black" },
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "wait", ms: 800 },
    { type: "narration", text: "Months passed. I trained with the people the Queen chose. I attended the parties she chose. I went where her finger pointed and bowed when her court bowed." },
    { type: "narration", text: "The tenebrim broke free a third time, on a bad night. Better security took him down before he reached me. A guard died. The guard had a name I never learned." },
    { type: "narration", text: "Mira left without saying goodbye. The room was empty one morning, and her side of the bed was made up like she'd never been there." },
    { type: "narration", text: "Doomsday came. I went where they pointed. I died well, by their measure." },
    { type: "ending", id: "good_boy" },
  ],
};
