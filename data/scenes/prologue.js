/* ============================================
   Prologue — The Warp / Summoning Chamber
   ============================================
   Adapts the manuscript's Chapter 1 opening.
   Uses the newer version (multi-race gathering, Queen speaking)
   as primary, weaving in the older version's grounding details.
*/
window.SCENES = window.SCENES || {};

window.SCENES.prologue_arrival = {
  steps: [
    // --- THE WARP ---
    { type: "bg", id: "black" },
    { type: "bgm", id: "bgm_warp" },
    { type: "wait", ms: 400 },

    { type: "narration", text: "The world dissolved into colors and distorted light." },
    { type: "narration", text: "The bright screen dissolved into a grey ribbon, and the chair back slammed into my spine, pinning me down as the world turned into a smear of green and brown, flickering brightly in the edge of my vision." },
    { type: "bg", id: "warp" },
    { type: "narration", text: "The LED-lights from my PC and the lights in my room stretched and merged, forming a luminous, monochromatic tunnel that went on forever. The sides were streaks of blinding white. The center was a void of absolute darkness, drawing me forward at incomprehensible speeds." },

    { type: "narration", text: "I gripped the armrest, fingers digging into the hard leather. My cheeks were pulled down toward my chin, the bridge of my glasses crushing my nose, and my peripheral vision vanished — leaving only that single, dark point ahead." },
    { type: "narration", text: "I tried to breathe, but my chest felt concrete-solid. A suffocating, violent weight that wanted to rip the blood from my brain." },
    { type: "shake" },

    { type: "flash" },
    { type: "narration", text: "Then it all shattered." },
    { type: "narration", text: "Those long, neon streaks of starlight snapped back into pinpricks. The deceleration felt like being pulled back by rubber bands, the casters coming to a sudden halt. My lungs flattened against my ribs, and for a heartbeat, my soul felt like it was still traveling a light-year ahead of my body." },

    { type: "bgm_stop" },
    { type: "bg", id: "black" },
    { type: "wait", ms: 600 },

    { type: "narration", text: "I panted, wheezing as I greedily inhaled the air around me. A sour taste built up in the back of my throat, stomach tightening into a knot." },
    { type: "narration", text: "Racking sounds spilled out, followed by a retch and a violent purge of my stomach's contents all over the now-solid floor." },

    { type: "wait", ms: 400 },
    { type: "thought", text: "What the hell just happened?" },

    { type: "narration", text: "I wiped the froth with the back of my hand, fighting back another wave of nausea. My eyes still tingled from the kaleidoscope, still bright around the edges. I adjusted my glasses with shaky fingers." },
    { type: "narration", text: "Body tense, muscles coiled, I dared not move off my chair — the only anchor I had in this alien place." },

    { type: "thought", text: "Okay, stay calm. I'm alive… and mostly well. Now, where the hell am I?" },
    { type: "thought", text: "It couldn't be a dream. I'd been watching a stream in the middle of the day, fully charged and awake. I even pinched myself, but nothing changed." },
    { type: "thought", text: "A kidnapping? But that didn't explain the warp-tunnel. Drugged? No, I was home alone and hadn't even eaten breakfast yet." },

    // --- LIGHTS COME ON ---
    { type: "wait", ms: 400 },
    { type: "narration", text: "A sudden penetrating light bloomed overhead, accompanied by a low-level electric buzz. I hissed and threw an arm over my eyes reflexively, heart drumming against my ribs." },
    { type: "bg", id: "summon_chamber" },
    { type: "bgm", id: "bgm_palace" },
    { type: "narration", text: "Squinting hard, I risked a glance as my vision slowly adjusted. A sphere of pale light dangled above me, humming with a constant drone." },
    { type: "narration", text: "A low, warm sensation slowly built up beneath my ribs, pulsing gently. A stark contrast with my throat raw from the vomiting." },
    { type: "narration", text: "More lights came on, a series of mechanical clanks echoing around the room, each followed by a new sphere buzzing to life. Everything lit up, and the room became clear." },

    // --- DESCRIBING THE CHAMBER ---
    { type: "narration", text: "It was circular, and large enough that the far end took a moment to register. The floor beneath me was pale stone, smooth enough to reflect the new light. Around the walls, at an elevated level, were a row of balconies." },
    { type: "narration", text: "There weren't many — maybe eight or nine, each separated from the others. Most were occupied." },

    { type: "narration", text: "The figure I made out first was a very tall, very broad man, draped in a heavy coat that somehow made him look even larger. The two people behind him had long, narrow objects resting across their knees. Maybe weapons of some kind, though not any shape I recognized." },
    { type: "narration", text: "Another balcony held someone short. Much shorter than the others, dressed neatly, with a pair of round glasses catching the light every time he shifted. He appeared to be the only one in the room who looked faintly pleased to be here." },
    { type: "narration", text: "Somewhere to my left, a figure sat writing, head down, the scratch of whatever they were using audible even across the chamber. They hadn't looked up since the lights came on." },
    { type: "narration", text: "Then there was the one that made me do a double-take." },
    { type: "narration", text: "A pale figure sat very straight, with two horns extending sideways from his forehead. And, between two ink-black eyes, a third reptilian eye protruded from his forehead. He was coughing into his fist." },
    { type: "narration", text: "I looked away fast, then looked back to confirm I'd actually seen it, then looked away again. He was still coughing. No one around him seemed concerned." },

    { type: "narration", text: "Below the balconies, around the edges of the room, more people sat on curved benches in loose clusters. I couldn't even guess who they were, but there were a lot of them." },
    { type: "narration", text: "And every single one of them was, at some point or another, looking at me." },

    { type: "thought", text: "I was still sitting in the chair I'd materialized in. The vomit was still wet on the floor nearby. I became very aware of both of those facts at the same time." },

    // --- THE QUEEN AND THE POPE ENTER ---
    { type: "narration", text: "A door opened somewhere below the empty space between the rows of balconies, a ground-level entrance I hadn't noticed. A man in white robes walked in, followed by two others." },
    { type: "narration", text: "He was tall, old, and thin, with close-cropped white hair and a straight posture. He took the seat at a long table positioned in the center of the room." },
    { type: "narration", text: "Behind him, standing at his left shoulder, was a woman." },
    { type: "narration", text: "She had red hair flowing past her shoulders, amber eyes, and the kind of face of a person that's very determined to go through something tough. She was standing slightly behind the old man, hands at her sides." },

    { type: "show", char: "elisabeth", at: "center", emotion: "neutral" },
    { type: "narration", text: "The old man looked at me, his eyes grey and very steady. Then the red-haired woman looked at me too and spoke first." },

    { type: "reveal_name", char: "elisabeth", name: "Queen Elisabeth" },
    { type: "say", char: "elisabeth", text: "I imagine this is a great deal to take in at once." },
    { type: "say", char: "elisabeth", text: "I am Queen Elisabeth Bernt Ravenshield III. I apologize that your arrival did not allow for a more measured introduction. We will give you a moment, but there are people here who have traveled far, and I will need to ask for your patience shortly." },

    { type: "thought", text: "She didn't wait for me to answer, which was fine, because I didn't have one ready." },

    { type: "say", char: "elisabeth", text: "What you're looking at is a gathering of representatives from every major race on this world. This has not happened before. Not like this." },
    { type: "say", char: "elisabeth", text: "My father's approach to heroes was his own, and I have chosen a different one." },
    { type: "say", char: "elisabeth", text: "You were brought here without your consent to solve a problem that is not yours. The least we owe you, the least we owe each other, is honesty about what that problem is and what it will require." },

    { type: "narration", text: "One of the soldiers behind the tall figure in the heavy coat said something under his breath. I didn't understand the language." },
    { type: "narration", text: "The short man with the glasses shifted: \"If we could get to the point—\"" },
    { type: "say", char: "elisabeth", text: "We could not." },
    { type: "narration", text: "He settled back. His expression didn't change much, but his hands moved to the small book in his lap and stayed there." },

    // --- THE POPE SPEAKS ---
    { type: "show", char: "pope", at: "left", emotion: "neutral" },
    { type: "narration", text: "The old man cleared his throat, and both women immediately straightened up. He stapled his fingers in front of him, eyes steady as always." },
    { type: "say", char: "pope", text: "Hero. We've taken you from your home in hopes that you will aid us in our times of trouble. I know it is incredibly selfish, and that you may have friends or family waiting." },

    { type: "narration", text: "He paused, maybe gauging for a reaction, and I just hummed. What else was I supposed to do? Argue back?" },
    { type: "thought", text: "He was right. I wouldn't see my friends or family again. More importantly, I wouldn't want my family to suffer because I randomly disappeared." },
    { type: "narration", text: "Clenching my jaw, I mustered enough courage to raise a hand. The man nodded." },

    { type: "say", char: "erdan", text: "Uh, so, how does time flow here compared to, you know, my world?" },
    { type: "say", char: "pope", text: "Good question. We've never had any heroes go to your world and return with such info. Nor do we have the tools to figure it out. I hope that's a sufficient answer." },
    { type: "thought", text: "There was nothing sufficient about it. I felt my stomach clench. Not that I would go back home, but that I'd cause others grief without being able to do anything about it." },

    // --- ERDAN'S PLEA ---
    { type: "say", char: "erdan", text: "I want to go home." },
    { type: "narration", text: "My voice cracked, but I managed to stay firm." },
    { type: "say", char: "erdan", text: "I know you probably won't let me, but you can't just… take me here without a good reason!" },
    { type: "say", char: "pope", text: "And our reason is good. I can assure you that much. The life of every inhabitant on this world is at stake." },

    { type: "choice", prompt: "What do you say?", options: [
      { text: "\"Please... just send me home. Give me a way to tell my parents not to worry.\"", target: "prologue_plea", flags: {} },
      { text: "(Refuse everything. Scream. Demand to go back.)", target: "prologue_demand_home", flags: { reject: 1 }, tag: "→ early refusal" },
    ]},
  ],
};

// --- Canonical: the plea, then acceptance ---
window.SCENES.prologue_plea = {
  steps: [
    { type: "say", char: "erdan", text: "I'm not your hero. I never said I was. Please... just send me home. Give me a way to tell my parents to not worry. Just that. Then you can take me back here for all I care." },

    { type: "narration", text: "The red-haired woman's expression seemed to tighten for a heartbeat, but it might've just been my imagination." },
    { type: "narration", text: "The room stayed silent. Nobody moved. The three-eyed man had stopped coughing." },

    { type: "say", char: "elisabeth", text: "Hero Kernt." },
    { type: "narration", text: "Her voice carried without effort, even at that low volume." },
    { type: "say", char: "elisabeth", text: "I cannot give you what does not exist. No hero has ever returned a message. But I can promise you this: we will not waste the time you've been forced to give us. And if there is a way home after your duty is done, you will have every resource this kingdom can muster to find it." },

    { type: "narration", text: "I didn't have a response for that either. My throat was tight, and the aftertaste of vomit wasn't helping." },
    { type: "thought", text: "Did I truly want to return home? I did live a decent life there and had a loving family. The only regret I had was vanishing without being able to tell them I wasn't dead in a random ditch." },
    { type: "thought", text: "I had many siblings, and my family had lately had it a bit rough with economy, so perhaps having one less mouth to feed would make it a bit easier for them." },
    { type: "thought", text: "That's a depressing thought. Stop it." },

    { type: "say", char: "elisabeth", text: "You will be tested, briefly, to confirm what gifts you've been given. After that, you will be allowed to rest. Mernel and Kina will accompany you." },
    { type: "say", char: "elisabeth", text: "I will meet you later in the evening for a private chat." },

    { type: "narration", text: "She gave a small nod of acknowledgement. I let out a sigh of relief at her acceptance of my silence as an answer." },

    { type: "say", char: "erdan", text: "Can I ask one more thing? Do I get some kind of ability? I mean, if I'm supposed to do something here…" },
    { type: "narration", text: "The words came out quieter than I wanted." },
    { type: "say", char: "elisabeth", text: "Correct. As a summoned hero, you have already been imparted with gifts — abilities bestowed upon you by Ucliat, the Creator himself. You will be taken to the testing chamber, where they shall be properly assessed." },

    { type: "thought", text: "Ucliat, huh? I was expecting this world to believe in several gods, but I guess only believing in one is more common." },

    { type: "narration", text: "A woman emerged from behind the veil of the room's edge. In her hands was a thick, engraved book, its surface faintly etched with patterns that almost looked like they were shifting." },
    { type: "narration", text: "She walked over and handed the book to me. I took it hesitantly." },

    { type: "say", char: "elisabeth", text: "This is a guidebook for heroes, made by the 24th hero, Light Kagami. The heroes who came after have added their own knowledge into it. I hope you will find it useful on your journey." },

    { type: "thought", text: "Which weeb was it that decided to name himself 'Light Kagami'? The name isn't even right!" },
    { type: "narration", text: "The book was thick. Probably around 400 pages. I ran my hand over the intricate golden letters across the red cover. It was titled \"A Guide for Heroes.\"" },
    { type: "narration", text: "I opened it." },
    { type: "narration", text: "Japanese." },
    { type: "thought", text: "Were all the heroes summoned from Japan? Why Japanese?" },

    { type: "say", char: "erdan", text: "Uh, I can't understand this…" },
    { type: "say", char: "elisabeth", text: "Do not fret, Hero. One of the heroes has imparted a translated version as well. It is in a language called Ingleesh, if I'm correct. I've heard it's quite common in your world." },

    { type: "narration", text: "A second book was handed to me. I opened it and could finally understand the contents." },
    { type: "narration", text: "The first few lines:" },
    { type: "system", text: "Great hero! Have you been destined to save the world, but find yourself clueless about where to begin? Don't worry, because I, Light Kagami, will impart my veteran knowledge onto you. Be grateful, peasant!" },
    { type: "system", text: "PS: There is no video-game-like interface, so give up on that idea." },
    { type: "thought", text: "My first impression of him had already gotten worse. At least that last sentence was helpful." },

    { type: "narration", text: "I quickly flipped through the pages. Nothing beyond the first page. The damn book was empty. I flipped further, and the pages kept increasing, book getting thicker the more I browsed." },
    { type: "narration", text: "I quickly closed it, and it shrunk back to its 'original' size." },
    { type: "thought", text: "Weird." },

    { type: "hide", at: "center" },
    { type: "hide", at: "left" },
    { type: "narration", text: "The Queen and the Pope rose. The audience above murmured, then began to disperse." },
    { type: "narration", text: "I stood up from the chair I'd materialized in, legs wobbly, and pretended my balance was fine." },

    { type: "goto", target: "ch01_testing" },
  ],
};

// --- Branch: immediate rejection (Ending #6 setup) ---
window.SCENES.prologue_demand_home = {
  steps: [
    { type: "say", char: "erdan", text: "I'm not your hero. I never said I was. Send me home. Now!" },
    { type: "say", char: "erdan", text: "I don't care about your world! I didn't ask for this! Send me back!" },

    { type: "say", char: "pope", text: "And our reason is good. The life of every inhabitant on this world is at stake." },
    { type: "say", char: "erdan", text: "I don't care!" },

    { type: "narration", text: "The Queen's expression didn't move. The Pope's didn't either. The room went very still." },
    { type: "narration", text: "I could feel it — the weight of a hundred gazes shifting from curiosity to something colder. The lion-faced woman's ears had flattened. The three-eyed figure had stopped coughing." },
    { type: "say", char: "elisabeth", text: "Hero Kernt. Please calm yourself." },
    { type: "thought", text: "I should sabotage that test thing they keep talking about. Whatever it is. Make myself useless. Make them send me back." },

    { type: "choice", options: [
      { text: "Sabotage the Core Seal. Refuse everything.", target: "ending_route_reject", flags: { reject: 2 } },
      { text: "(…Maybe I'm overreacting. Take a breath.)", target: "prologue_plea", flags: { reject: -1 } },
    ]},
  ],
};

// --- Ending route: immediate rejection (#6) ---
window.SCENES.ending_route_reject = {
  steps: [
    { type: "bgm", id: "bgm_ending_bad" },
    { type: "fade", color: "black" },
    { type: "wait", ms: 600 },
    { type: "bg", id: "erdan_room" },
    { type: "unfade", color: "black" },
    { type: "narration", text: "They didn't argue. They didn't punish me. They simply closed the door behind me and locked it." },
    { type: "narration", text: "The wing they gave me had a fountain. Three meals a day. Fresh towels. A library so vast I could've spent years in it without finishing the third shelf." },
    { type: "narration", text: "A month in, I started knocking on the door. Two months in, I started shouting." },
    { type: "narration", text: "The Doomsday clock kept ticking. The kingdom moved on. The girl in the cage was given to someone else. The wolf was bonded to a hero who actually wanted him." },
    { type: "narration", text: "By the time I asked to be useful, no one was answering anymore." },
    { type: "ending", id: "reject_everything" },
  ],
};
