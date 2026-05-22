/* ============================================
   Chapter 9 — Prison Visit / Ball / Servant Pact
   ============================================
   Adapts manuscript Ch19-22. Visiting the tenebrim
   in prison, attending the ball, forming the pact.
*/
window.SCENES = window.SCENES || {};


// =====================================================================
// PRISON VISIT
// =====================================================================
window.SCENES.ch09_ball_intro = {
  steps: [
    { type: "bg", id: "prison" },
    { type: "bgm", id: "bgm_tense" },
    { type: "narration", text: "The palace prison smelled of damp stone and rust. Torches cast uneven shadows. Every footstep echoed louder than it should have." },
    { type: "narration", text: "Mira walked beside me in silence. Night slowed at my heel, ears flattened, nose twitching. A low rumble vibrated in his throat." },

    { type: "narration", text: "The guard stopped in front of a heavy iron cell." },
    { type: "show", char: "tenebrim", at: "center", emotion: "broken" },
    { type: "narration", text: "The tenebrim lifted his head when we stopped. Chains rattled faintly. His crimson eyes settled on Mira first. They stayed there for a long time." },
    { type: "narration", text: "Then something in his expression cracked." },
    { type: "say", char: "tenebrim", text: "…So you lived." },

    { type: "say", char: "mira", text: "Do you know me?" },
    { type: "say", char: "tenebrim", text: "You truly don't remember." },
    { type: "narration", text: "It wasn't a question." },
    { type: "say", char: "mira", text: "You attacked the palace. You attempted to kill the summoned hero and murdered several guards." },

    { type: "narration", text: "His eyes flicked toward me briefly. There was hatred there, but it didn't last. When he looked back at Mira it was gone, replaced with something heavier." },
    { type: "say", char: "tenebrim", text: "Do you know how many years it took?" },
    { type: "narration", text: "His hands slammed against the iron bars. The clang echoed down the corridor." },
    { type: "say", char: "tenebrim", text: "Do you know!?" },


    // --- HIS STORY ---
    { type: "narration", text: "Night growled beside me. A guard shifted his spear nervously. But the man kept talking." },
    { type: "say", char: "tenebrim", text: "Day after day I endured it. I worked. I bowed my head. I swallowed everything they did to me because I believed that someday I could find my brothers and sisters again. I could find you." },
    { type: "say", char: "tenebrim", text: "And what did I find?" },
    { type: "say", char: "tenebrim", text: "Kiria nailed to a post beside a merchant road so travelers could spit on the 'horned beast.' When I reached her the birds had already eaten her eyes." },
    { type: "say", char: "tenebrim", text: "Oumo forced into pit fights until his ribs shattered and his lungs filled with blood. When he couldn't stand anymore they dumped his body in a lime pit." },
    { type: "say", char: "tenebrim", text: "Yallek buried alive beneath the foundation of a noble's estate. I dug for hours after hearing the rumor. All I found were his fingernails clawing at the dirt." },
    { type: "say", char: "tenebrim", text: "Vahle survived the longest. Years in the slums, sold and beaten until her mind finally broke. The last time someone saw her she was wandering naked in winter, laughing at things that weren't there." },

    { type: "narration", text: "The corridor had gone completely silent. Even the guards had stopped moving." },
    { type: "say", char: "tenebrim", text: "And my hands… they're no cleaner than theirs. I've killed more men than I can count. Guards. Merchants. Anyone who stood in my way." },
    { type: "narration", text: "His eyes rose and locked onto me. Night bared his teeth." },
    { type: "say", char: "tenebrim", text: "All because of you heroes." },
    { type: "thought", text: "A tight knot formed in my stomach. Even if I hadn't done anything, that accusation was still effective." },


    // --- LIGHTER CHAINS ---
    { type: "say", char: "tenebrim", text: "After everything! You go from one master to another. Are you not ashamed?" },
    { type: "say", char: "tenebrim", text: "Servant Pacts are still submission. All you're doing is giving up your freedom. For what? So you can serve yet another hero?" },
    { type: "thought", text: "Wait — Mira and I don't have a pact yet. He must be talking about the slave mark." },
    { type: "say", char: "tenebrim", text: "And you." },
    { type: "narration", text: "His gaze locked onto me again." },
    { type: "say", char: "tenebrim", text: "You might think you're different, that you're helping her. But you're not. All you're doing is giving her lighter chains." },
    { type: "thought", text: "I didn't know what to say. My mouth opened, then closed. I couldn't meet his gaze." },

    { type: "say", char: "mira", text: "It's not chains. It's a choice. My choice." },
    { type: "say", char: "tenebrim", text: "How is that any different?!" },
    { type: "say", char: "mira", text: "He is the torch in my darkness, not the darkness itself." },
    { type: "set", flags: { mira_trust: 5 } },

    { type: "narration", text: "The energy drained from him. He sagged against the bars." },
    { type: "say", char: "tenebrim", text: "You really have changed, Ilivia." },
    { type: "narration", text: "Mira froze. The name lingered in the air too long." },
    { type: "narration", text: "Something flickered behind her eyes. Fire. Smoke. A hand reaching out. A voice calling—" },
    { type: "narration", text: "Gone." },
    { type: "say", char: "mira", text: "…Don't call me that." },
    { type: "say", char: "tenebrim", text: "…You don't even remember your own name." },


    // --- THE GRAB / THE WHISPER ---
    { type: "narration", text: "He gestured me closer. The guards tensed. I went anyway." },
    { type: "shake" },
    { type: "narration", text: "His hand shot through the bars and grabbed my collar, yanking me forward hard enough that I hit the iron with a dull clang." },
    { type: "say", char: "tenebrim", text: "(low) You listen to me. This place isn't what you think it is." },
    { type: "say", char: "tenebrim", text: "They'll smile, talk nice, act like they're helping you. Same people who sell us, break us, throw us away when we're done." },
    { type: "say", char: "tenebrim", text: "Don't trust them." },
    { type: "say", char: "tenebrim", text: "And you keep her safe. Ilivia. You keep her safe… or I'll carve a curse into your soul with my dying breath." },
    { type: "say", char: "erdan", text: "…Got it." },
    { type: "narration", text: "He shoved me back. The guards stepped in." },

    { type: "narration", text: "As we were led away, he spoke one last time." },
    { type: "say", char: "tenebrim", text: "…You lived. Good." },
    { type: "set", flags: { paranoia: 2, lighter_chains_seen: 1 } },
    { type: "hide", at: "center" },

    { type: "narration", text: "The walk back felt longer. Mira didn't speak. Her thumb rubbed against the faded mark on her hand." },
    { type: "thought", text: "Lighter chains. That was what he called it." },
    { type: "thought", text: "And the worst part was that I still couldn't tell if he was wrong." },

    { type: "goto", target: "ch09_ball_evening" },
  ],
};


// =====================================================================
// THE BALL
// =====================================================================
window.SCENES.ch09_ball_evening = {
  steps: [
    { type: "bg", id: "ballroom" },
    { type: "bgm", id: "bgm_ball" },
    { type: "narration", text: "The next evening." },
    { type: "narration", text: "The high collar around my neck felt suffocating. They had tried to slick my low taper fade afro back with some kind of scented oil that smelled like pine. It didn't really work — my hair still had its natural shape, just shinier and heavier than I liked." },
    { type: "narration", text: "Mira wore a deep green dress that hugged her frame more than anything I'd seen her in before. The fabric shimmered when she moved. Her silver hair pinned up in a loose twist, the broken horn catching the lamplight." },
    { type: "narration", text: "Seraya in midnight-blue, scars hidden under draped sleeves. A thin silver chain woven through her hair." },

    { type: "show", char: "mira", at: "left", emotion: "elegant" },
    { type: "show", char: "seraya", at: "right", emotion: "elegant" },

    { type: "narration", text: "The doors opened. The herald announced me. The crowd toasted with a polite applause. The Queen gave me one nod, then turned to do politics." },
    { type: "narration", text: "I felt every eye on me — on the afro, on the collar, on Mira standing close enough that her sleeve brushed my arm." },
    { type: "thought", text: "Stupid habit — the corner of my mouth twitched into an awkward smile." },

    // --- NOBLE ENCOUNTERS ---
    { type: "show", char: "noble", at: "center", emotion: "neutral" },
    { type: "say", char: "noble", text: "Lord Kernt. The realm is grateful for your arrival. Though we have heard… troubling reports." },
    { type: "say", char: "noble", text: "Your companion draws attention. A tenebrim, is it not? Quite rare in these halls." },
    { type: "narration", text: "He sipped his drink, eyes flicking to her broken horn." },
    { type: "say", char: "seraya", text: "The hero chooses his companions. Perhaps some here would do well to remember that." },
    { type: "set", flags: { seraya_trust: 2 } },
    { type: "narration", text: "The man laughed and drifted away. The weight of his words lingered." },
    { type: "hide", at: "center" },

    // --- FIERO ---
    { type: "show", char: "fiero", at: "center", emotion: "neutral" },
    { type: "say", char: "fiero", text: "Forgive me if I startled you, Lord Erdan. No — Master Erdan!" },
    { type: "narration", text: "Pure white hair, the strands glinting. Citrine eyes, wide smile. He wore a white suit with gold patterns." },
    { type: "say", char: "fiero", text: "My name is Fiero Jerrve Illusif, son of Count Herrek! My name means 'very useful and very handy to have in the hero's party' in an ancient language." },
    { type: "narration", text: "It got a small laugh from me before I could stop it." },
    { type: "say", char: "mira", text: "(low) He's clearly planning something. Be careful." },
    { type: "narration", text: "Fiero kept bringing food. He charmed Seraya for a stretch. The evening wore on." },
    { type: "hide", at: "center" },


    // --- THE PACT CONVERSATION ---
    { type: "wait", ms: 600 },
    { type: "narration", text: "Late into the evening. The crowd had thinned. Mira and I stood near a tall window, the city visible below." },
    { type: "say", char: "mira", text: "Master." },
    { type: "say", char: "erdan", text: "Yeah?" },
    { type: "say", char: "mira", text: "I have been thinking. About my position at your side." },
    { type: "say", char: "mira", text: "You freed me. Yet I still bear the mark of someone who belonged to another. I do not wish to remain that way." },
    { type: "say", char: "erdan", text: "Change it how?" },
    { type: "say", char: "mira", text: "A servant pact. A pact entered willingly. It would mark me as someone who chose to stand at your side." },

    { type: "thought", text: "The tenebrim's words echoed: lighter chains." },

    { type: "choice", prompt: "She's asking for a pact. By choice.", options: [
      { text: "\"If it's what you want.\"", target: "ch09_pact_form", flags: { mira_trust: 5 } },
      { text: "(Hesitate. His words are still in your head.)", target: "ch09_pact_hesitate", flags: { mira_trust: -1 } },
    ]},
  ],
};


// =====================================================================
// FORM THE PACT
// =====================================================================
window.SCENES.ch09_pact_form = {
  steps: [
    { type: "say", char: "erdan", text: "If it's what you want." },
    { type: "say", char: "mira", text: "Conditions. Both sides must accept what the pact binds them to. Without that, it will not form." },
    { type: "say", char: "erdan", text: "I'm not treating you like property. No ordering you around for stupid stuff. And if you ever decide you don't want to stay with me anymore, the pact ends. Fair?" },
    { type: "say", char: "mira", text: "I will stand at your side by my own will. I will fight beside you and not betray you." },
    { type: "narration", text: "Her fingers brushed against the faded mark on her hand." },
    { type: "say", char: "mira", text: "But I will never belong to another again." },
    { type: "say", char: "erdan", text: "Good. Would've been weird otherwise." },

    { type: "narration", text: "She stepped closer and gently took my hand." },
    { type: "narration", text: "A faint glow formed where our skin met — soft threads of silver weaving together. It spread across the back of my hand, curling into a circular sigil with a jagged X at its center." },
    { type: "system", text: "[ Servant Pact ]  formed with Mira" },
    { type: "set", flags: { mira_pact: 1, mira_trust: 5 } },

    { type: "say", char: "mira", text: "From this moment, I serve you by my own will." },
    { type: "say", char: "erdan", text: "You don't really have to add the 'serve' part." },
    { type: "say", char: "mira", text: "I know. But what I offered you was not submission. It was service." },
    { type: "narration", text: "Her hand lowered, resting against her hip. Her expression softened." },
    { type: "say", char: "mira", text: "A servant chooses who they stand beside. I chose you." },
    { type: "say", char: "mira", text: "This isn't about fulfilling my previous master's last wish. You are different from the others, and being your servant doesn't sound too bad." },
    { type: "say", char: "erdan", text: "Oh, well… t-thanks? If that's what you've decided, then it's fine with me." },

    { type: "thought", text: "Still, I couldn't ignore that there was more to it. If there was nothing to bind us, what would be her reason to stay?" },
    { type: "goto", target: "ch10_departure_intro" },
  ],
};

// =====================================================================
// HESITATE ON THE PACT
// =====================================================================
window.SCENES.ch09_pact_hesitate = {
  steps: [
    { type: "say", char: "erdan", text: "I… I don't know if I should. He said it was just lighter chains." },
    { type: "narration", text: "Mira looked at me for a long moment. Then her eyes softened, and she nodded once." },
    { type: "say", char: "mira", text: "Then I will follow you without one. That is also my choice." },
    { type: "narration", text: "She didn't sound hurt. She sounded like she'd expected that answer, and it was fine." },
    { type: "say", char: "mira", text: "A pact doesn't change what's already here." },
    { type: "set", flags: { mira_trust: 1 } },
    { type: "goto", target: "ch10_departure_intro" },
  ],
};
