/* ============================================
   Prologue — The warp tunnel
   ============================================ */

window.SCENES.prologue_arrival = {
  steps: [
    { type: "bg", id: "warp" },
    { type: "bgm", id: "bgm_warp" },
    { type: "narration", text: "The world dissolved into colors and distorted light." },
    { type: "narration", text: "The bright screen melted into a grey ribbon. The chair back slammed into my spine. The room went streaks of green and brown — bright as eye floaters in my peripheral vision." },
    { type: "shake" },
    { type: "narration", text: "LED-lights, ceiling lights, every glow I knew stretched and merged into a luminous monochromatic tunnel. White streaks at the edges, a void of absolute darkness at the center, drawing me forward at incomprehensible speeds." },
    { type: "thought", text: "Oh, you have GOT to be kidding me." },
    { type: "narration", text: "My cheeks dragged toward my chin. The bridge of my glasses crushed my nose. My peripheral vision vanished, leaving only that single dark point ahead." },
    { type: "narration", text: "I tried to breathe. My chest felt concrete-solid." },
    { type: "flash" },
    { type: "bg", id: "summon_chamber", fade: 200 },
    { type: "bgm_stop" },
    { type: "narration", text: "Then it all shattered. Like severed guitar strings — the long, neon streaks of starlight snapped back into pinpricks." },
    { type: "narration", text: "I panted like a drowning man out of water." },

    { type: "wait", ms: 600 },
    { type: "thought", text: "What the hell just happened…?" },
    { type: "thought", text: "Okay. Stay calm. I'm alive… and mostly well. Now, where the hell am I?" },

    { type: "bgm", id: "bgm_palace" },
    { type: "narration", text: "Pale stone floor. A circle of balconies above me, occupied by figures whose details I couldn't quite make out yet. A dozen more on benches around the edges of the chamber." },
    { type: "narration", text: "Every single one of them was, at some point or another, looking at me." },
    { type: "thought", text: "What was I, a fucking zoo animal?" },

    { type: "narration", text: "A door opened somewhere below the empty space between the rows of balconies. A man in white robes walked in, followed by two others." },
    { type: "narration", text: "Tall. Old. Thin. Close-cropped white hair, straight back. He took the seat at a long table positioned in the center of the room." },
    { type: "narration", text: "Behind him, standing at his left shoulder, was a woman with red hair flowing past her shoulders. Amber eyes. The kind of face of a person very determined to go through something tough." },

    { type: "show", char: "elisabeth", at: "center", emotion: "neutral" },
    { type: "say", char: "elisabeth", text: "I imagine this is a great deal to take in at once." },
    { type: "say", char: "elisabeth", text: "I am Queen Elisabeth Bernt Ravenshield III. I apologize that your arrival did not allow for a more measured introduction." },
    { type: "say", char: "elisabeth", text: "We will give you a moment. But there are people here who have traveled far, and I will need to ask for your patience shortly." },
    { type: "thought", text: "She didn't wait for me to answer. Which was fine, because I didn't have one ready." },

    { type: "say", char: "elisabeth", text: "What you're looking at is a gathering of representatives from every major race on this world. This has not happened before. Not like this. My father's approach to heroes was his own. I have chosen a different one." },
    { type: "say", char: "elisabeth", text: "You were brought here without your consent to solve a problem that is not yours. The least we owe you, the least we owe each other, is honesty about what that problem is and what it will require." },

    { type: "show", char: "pope", at: "left", emotion: "neutral" },
    { type: "say", char: "pope", text: "Hero. We've taken you from your home in hopes that you will aid us in our times of trouble. I know it is incredibly selfish, and that you may have friends or family waiting." },

    { type: "thought", text: "He paused, maybe gauging for a reaction." },
    { type: "thought", text: "He was right. I wouldn't see my friends or family again. More importantly, I wouldn't want my family to suffer because I randomly disappeared." },

    { type: "choice", prompt: "What do you say?", options: [
      { text: "(I want to go home. Demand it.)", target: "prologue_demand_home", flags: { reject: 1 }, tag: "→ early refusal" },
      { text: "(Hum and nod. What else am I supposed to do?)", target: "prologue_compliant" },
      { text: "(Test them — ask about time flow first.)", target: "prologue_compliant" },
    ]},
  ],
};

// Branch: immediate rejection (Ending #6 setup)
window.SCENES.prologue_demand_home = {
  steps: [
    { type: "say", char: "erdan", text: "I'm not your hero. I never said I was. Send me home. Now." },
    { type: "say", char: "erdan", text: "Give me a way to tell my parents I'm not dead in a ditch. Then take me back here for all I care." },

    { type: "say", char: "pope", text: "And our reason is good. The life of every inhabitant on this world is at stake." },
    { type: "say", char: "erdan", text: "I don't care! Send me home!" },

    { type: "narration", text: "The Queen's expression didn't move. The Pope's didn't either. The room around me — the lion-faced woman, the three-eyed figure, the soldiers above — went very still." },
    { type: "say", char: "elisabeth", text: "Hero Kernt. Please calm yourself." },
    { type: "thought", text: "I should — I should sabotage that test thing they keep talking about. Whatever it is. Make myself useless. Make them send me back." },

    { type: "choice", options: [
      { text: "Sabotage the Core Seal. Refuse everything.", target: "ending_route_reject", flags: { reject: 2 } },
      { text: "(…Maybe I'm being paranoid. Hum and nod.)", target: "prologue_compliant", flags: { reject: -1 } },
    ]},
  ],
};

window.SCENES.prologue_compliant = {
  steps: [
    { type: "say", char: "erdan", text: "Uh… so. How does time flow here compared to my world?" },
    { type: "say", char: "pope", text: "Good question. We've never had heroes go to your world and return with such info. Nor do we have the tools to figure it out. I hope that's a sufficient answer." },
    { type: "thought", text: "There was nothing sufficient about it." },

    { type: "say", char: "elisabeth", text: "I won't pretend this is fair. You will be tested, briefly, to confirm what gifts you've been given. After that, you will be allowed to rest." },
    { type: "say", char: "elisabeth", text: "Mernel and Kina will accompany you to the testing chamber. I will meet you later in the evening for a private chat." },

    { type: "hide", at: "center" },
    { type: "hide", at: "left" },
    { type: "narration", text: "The Queen rose. The Pope rose with her. The audience above murmured, then began to disperse." },
    { type: "narration", text: "I stood up from a chair I hadn't actually sat back down in. I pretended I had." },
    { type: "goto", target: "ch01_testing" },
  ],
};

// ----- Ending route: immediate rejection (#6) -----
window.SCENES.ending_route_reject = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "bg", id: "erdan_room" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "They didn't argue. They didn't punish me. They simply… closed the door behind me and locked it." },
    { type: "narration", text: "The wing they gave me had a fountain. Three meals a day. Fresh towels. A library so vast I could've spent years in it without finishing the third shelf." },
    { type: "narration", text: "A month in, I started knocking. Two months in, I started shouting." },
    { type: "narration", text: "The Doomsday clock kept ticking. The kingdom moved on. Mira was given to someone else. Night was bonded to a hero who actually wanted him." },
    { type: "narration", text: "By the time I asked to be useful, no one was answering anymore." },
    { type: "ending", id: "reject_everything" },
  ],
};
