/* ============================================
   Chapter 9 — The royal ball, the servant pact
   ============================================ */

window.SCENES.ch09_ball_intro = {
  steps: [
    { type: "bg", id: "erdan_room" },
    { type: "bgm", id: "bgm_room" },
    { type: "narration", text: "Tomorrow evening was the ball. Tonight was the prison." },
    { type: "narration", text: "Mira was already dressed plainly, like she had no intention of pretending tonight was anything but what it was." },

    { type: "bg", id: "prison" },
    { type: "bgm", id: "bgm_tense" },
    { type: "show", char: "tenebrim", at: "center", emotion: "broken" },
    { type: "say", char: "tenebrim", text: "…So you lived." },
    { type: "say", char: "mira", text: "Do you know me?" },
    { type: "say", char: "tenebrim", text: "You truly don't remember." },

    { type: "narration", text: "His grip on the bars tightened. He told us his siblings' names. What had happened to each of them. The marketplace. The pit. The lime. The foundation. The cold." },
    { type: "narration", text: "He told her about Vahle, the last to break. He told her about his own hands." },
    { type: "say", char: "tenebrim", text: "All because of you heroes." },

    { type: "narration", text: "His gaze landed on the back of Mira's hand — at a faint, faded slave mark." },
    { type: "say", char: "tenebrim", text: "After everything! You go from one master to another. Are you not ashamed?" },
    { type: "say", char: "tenebrim", text: "Servant Pacts are still submission. All you're doing is giving up your freedom. So you can serve yet another hero?" },

    { type: "narration", text: "Then he locked eyes with me." },
    { type: "say", char: "tenebrim", text: "And you. You might think you're different, that you're helping her. But you're not. All you're doing is giving her lighter chains." },

    { type: "thought", text: "He was right. I couldn't form an argument against him. I never could." },
    { type: "say", char: "mira", text: "It's not chains. It's a choice. My choice." },
    { type: "say", char: "tenebrim", text: "How is that any different?!" },
    { type: "say", char: "mira", text: "He is the torch in my darkness, not the darkness itself." },
    { type: "set", flags: { mira_trust: 5 } },

    { type: "narration", text: "The tenebrim's energy drained out of him. He sagged against the bars." },
    { type: "say", char: "tenebrim", text: "You really have changed, Ilivia." },
    { type: "narration", text: "Mira froze. The name lingered too long in the air. Fire. Smoke. A hand reaching out. A voice calling — gone." },
    { type: "say", char: "mira", text: "…Don't call me that." },

    { type: "narration", text: "He gestured me closer. The guards tensed. I went anyway." },
    { type: "narration", text: "His hand shot through the bars and yanked me to the iron." },
    { type: "say", char: "tenebrim", text: "(quiet) You listen to me. This place isn't what you think it is. They'll smile, talk nice, act like they're helping you. Same people who sell us, break us, throw us away when we're done." },
    { type: "say", char: "tenebrim", text: "Don't trust them. And you keep her safe. Ilivia. You keep her safe… or I'll carve a curse into your soul with my dying breath." },

    { type: "say", char: "erdan", text: "…Got it." },
    { type: "narration", text: "He shoved me back. The guards led us away." },
    { type: "say", char: "tenebrim", text: "(softer) …You lived. Good." },
    { type: "set", flags: { paranoia: 2, lighter_chains_seen: 1 } },
    { type: "hide", at: "center" },

    { type: "goto", target: "ch09_ball_evening" },
  ],
};

window.SCENES.ch09_ball_evening = {
  steps: [
    { type: "bg", id: "ballroom" },
    { type: "bgm", id: "bgm_ball" },
    { type: "narration", text: "The next evening. The ball." },
    { type: "narration", text: "Mira in a deep green dress that hugged her frame more than anything I'd seen her in before. Seraya in midnight-blue, scars hidden under sleeves." },
    { type: "show", char: "mira", at: "left", emotion: "elegant" },
    { type: "show", char: "seraya", at: "right", emotion: "elegant" },
    { type: "narration", text: "I was crammed into a high collar that made my neck want to flee my body. They'd tried to slick my afro back with pine oil. It hadn't worked." },

    { type: "narration", text: "The doors opened. The herald announced me. The crowd toasted with a polite applause that meant nothing. The Queen gave me one nod and then turned away to do politics." },

    { type: "show", char: "noble", at: "center", emotion: "smug" },
    { type: "say", char: "noble", text: "Lord Kernt. The realm is grateful for your arrival. Though we have heard… troubling reports of recent events in the palace." },
    { type: "say", char: "noble", text: "Your companion draws attention. A tenebrim, is it not? Some might question the wisdom of bringing such… exotic company to court." },
    { type: "narration", text: "Mira didn't move. Seraya did." },
    { type: "say", char: "seraya", text: "The hero chooses his companions. Perhaps some here would do well to remember that." },
    { type: "set", flags: { seraya_trust: 2 } },
    { type: "hide", at: "center" },

    { type: "show", char: "fiero", at: "center", emotion: "smile" },
    { type: "say", char: "fiero", text: "Forgive me if I startled you, Lord Erdan. No—Master Erdan!" },
    { type: "say", char: "fiero", text: "My name is Fiero Jerrve Illusif, son of Count Herrek! My name means 'very useful and very handy to have in the hero's party' in an ancient language." },
    { type: "narration", text: "It got a small laugh from me before I could stop it." },
    { type: "say", char: "mira", text: "(low) He's clearly planning something. Be careful." },
    { type: "narration", text: "Fiero kept bringing food. He kept talking. He charmed Seraya for a stretch. Mira watched him like a hawk." },
    { type: "hide", at: "center" },

    { type: "wait", ms: 800 },
    { type: "narration", text: "Late into the evening. The crowd thinned. Mira and I stood near a window." },
    { type: "say", char: "mira", text: "Master." },
    { type: "say", char: "erdan", text: "Yeah?" },
    { type: "say", char: "mira", text: "I have been thinking. About my position at your side." },
    { type: "say", char: "mira", text: "You freed me. Yet I still bear the mark of someone who belonged to another. I do not wish to remain that way." },
    { type: "say", char: "mira", text: "A servant pact. A pact entered willingly." },

    { type: "choice", prompt: "Accept the pact?", options: [
      { text: "If it's what you want.", target: "ch09_pact_form", flags: { mira_trust: 5 } },
      { text: "(Hesitate. The tenebrim's words.)", target: "ch09_pact_hesitate", flags: { mira_trust: -1 } },
    ]},
  ],
};

window.SCENES.ch09_pact_form = {
  steps: [
    { type: "say", char: "erdan", text: "If it's what you want." },
    { type: "say", char: "mira", text: "Conditions. Both sides must accept what the pact binds them to." },
    { type: "say", char: "erdan", text: "I'm not treating you like property. No ordering you around for stupid stuff. And if you ever decide you don't want to stay with me, the pact ends. Fair?" },
    { type: "say", char: "mira", text: "I will stand at your side by my own will. I will fight beside you and not betray you. But I will never belong to another again." },
    { type: "say", char: "erdan", text: "Good. Would've been weird otherwise." },

    { type: "narration", text: "She took my hand. A faint glow, silver threads weaving across our skin. The mark on the back of my hand: a circle with a jagged X at its center." },
    { type: "system", text: "[ Servant Pact ]   formed with Mira" },
    { type: "set", flags: { mira_pact: 1, mira_trust: 5 } },
    { type: "say", char: "mira", text: "From this moment, I serve you by my own will." },

    { type: "goto", target: "ch10_departure_intro" },
  ],
};

window.SCENES.ch09_pact_hesitate = {
  steps: [
    { type: "say", char: "erdan", text: "I… I don't know if I should. He said it was just lighter chains." },
    { type: "narration", text: "Mira looked at me a long moment. Then her eyes softened, and she nodded — once." },
    { type: "say", char: "mira", text: "Then I will follow you without one. That is also my choice." },
    { type: "set", flags: { mira_trust: 1 } },
    { type: "goto", target: "ch10_departure_intro" },
  ],
};
