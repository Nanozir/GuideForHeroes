/* ============================================
   Endings registry
   ============================================
   Each ending has:
   - id: matches the ending scene
   - num: ending number
   - name: title shown on the ending screen + gallery
   - blurb: one-line teaser shown in the locked gallery
   - text: body text shown when reached

   The "canonical" ending is the original story's
   continuation — currently the open road, since the
   story is unfinished. Treat it as the "true" route
   for now.
*/

window.ENDINGS = {
  // ----- Canonical / hopeful ending -----
  canonical: {
    num: 0,
    name: "The Open Road",
    blurb: "Leave the palace with those who chose you.",
    text: `The carriage rolls forward into morning light. Mira sits across from you,
finally still. Seraya turns a page. Night dozes against your boot, and Nare's
warmth nests at your collarbone.

Nothing about this is safe. The Doomsday is still coming. The Crimson Sun still
breathes. The elf's bullet is still a phantom across your ribs.

But for the first time since the warp tunnel swallowed you whole, you got to
pick the people in the room. And they picked you back.

It's a start.

— A Reluctant Beginning —`,
  },

  // ----- Bad endings: the 14 routes -----
  lust_mira: {
    num: 1,
    name: "The Easy Yes",
    blurb: "Take what's offered. Don't ask if she meant it.",
    text: `You took the straps as a green light. You read silence as consent.
By the time the elf's rifle cracked in the warehouse, the woman you'd
mistaken for yours was already a step too slow to save you.

The last thing you saw was Mira's face — and the slow, tired understanding
that you'd been just another master, after all.

— Ending #1: The Easy Yes —`,
  },

  good_boy: {
    num: 2,
    name: "The Iron Queen's Hero",
    blurb: "Let someone else hold the leash.",
    text: `You stayed. You trained. You smiled at the right people.
The Queen's hand was on your shoulder when the Doomsday horn finally
sounded, and you went where you were pointed, like a good boy.

You died well, by their measure. Mira had left months earlier, without
a goodbye. She'd seen this version of you before.

— Ending #2: The Iron Queen's Hero —`,
  },

  kuger_breeding: {
    num: 3,
    name: "Cattle of the Crimson Sun",
    blurb: "Don't fight it. She's pretty enough.",
    text: `You didn't fight when they pinned your arm. You didn't fight when
the needle went in. You didn't fight when they led Seraya into the chamber.

The first month was a fever dream of warm bodies and warmer drugs.
The second month, you started begging them to stop. By the third, you'd
forgotten how. Somewhere in the dark, Seraya was still apologizing.

— Ending #3: Cattle of the Crimson Sun —`,
  },

  broken_hero: {
    num: 4,
    name: "The Broken Hero",
    blurb: "Stop trying. Use the trauma as a permission slip.",
    text: `You earned every reason to stop. You really did.
But "earned" doesn't move a sword arm. The tenebrim found you alone in
your room, and you didn't even raise your hands.

Maybe that was its own kind of mercy.

— Ending #4: The Broken Hero —`,
  },

  swap_familiar: {
    num: 5,
    name: "The Wrong Wolf",
    blurb: "Switch out the loyal one. Pick the pretty one.",
    text: `The new familiar was beautiful — exactly your taste, as you'd quietly
hoped. But she didn't know you. She didn't move when the axe came down.
She didn't bite an assassin's leg. She didn't drag you out of a smoke-filled room.

Night, somewhere, never even knew your name.

— Ending #5: The Wrong Wolf —`,
  },

  reject_everything: {
    num: 6,
    name: "Take Me Home",
    blurb: "Refuse on day one. Wait to be useful.",
    text: `You shouted yourself hoarse in the throne room.
You broke a Core Seal you didn't understand. You called the Queen names she'd
heard from braver men.

They locked you in a wing of the palace "for your safety." The food was
good. The bed was warm. The clock kept ticking. By the time you knocked on
the door asking to help, no one was answering anymore.

— Ending #6: Take Me Home —`,
  },

  paranoid_neet: {
    num: 7,
    name: "The Capital's Ghost",
    blurb: "Trust nobody. Skim off the top. Disappear.",
    text: `You sold the pact. You ducked the Queen's summons. You slipped through
the lower city on charm and a Skill you barely understood, and for a while
it almost worked.

The elf's rifle found you in an alley you'd been certain was safe. No one
came. No one had been promised.

— Ending #7: The Capital's Ghost —`,
  },

  nare_exploit: {
    num: 8,
    name: "Comfort Until Collection",
    blurb: "Force her to grow up — for you.",
    text: `Nare adored you. That was the worst part.

You fed her too fast, on purpose. You called it "helping her grow."
By the time the Crimson Sun came for her, the dead-magic zone you'd left
in your wake was visible from the city walls. They didn't even bother
arresting you. They just took her.

You never saw her again.

— Ending #8: Comfort Until Collection —`,
  },

  doormat: {
    num: 9,
    name: "The Last Yes",
    blurb: "Be everyone's hero. Be no one's friend.",
    text: `You couldn't say no. Not to the kitchen boy, not to the Church, not to
the visiting count's third cousin. By the time the rifle found you, your
core was running on fumes and your Skills sputtered.

Mira and Seraya watched. They couldn't get to you in time. There was
nothing left in the tank for yourself.

— Ending #9: The Last Yes —`,
  },

  speedrun: {
    num: 10,
    name: "Min-Maxer's Collapse",
    blurb: "Pact with everyone. Mean none of it.",
    text: `Your loyalty chart looked great on paper.

The first betrayal was the elf assassin you'd "recruited."
The second was the tenebrim you'd cornered into a contract.
By the third, the cascade of broken pacts hit your core all at once,
and there was no one left who actually liked you enough to catch the fall.

— Ending #10: Min-Maxer's Collapse —`,
  },

  pampered: {
    num: 11,
    name: "The Pampered Figurehead",
    blurb: "Accept every title. Inherit nothing.",
    text: `You smiled at the right portraits. You signed where they pointed.
You earned a duchy and a fiancée and a stable of horses you'd never ride.

When Doomsday came you didn't know how to draw your own sword.
Mira had walked away long ago — quiet, like always. She'd seen what you
were becoming before you had.

— Ending #11: The Pampered Figurehead —`,
  },

  nare_yandere: {
    num: 12,
    name: "Bedroom Eternity",
    blurb: "Let her grow into your perfect partner.",
    text: `She hit humanoid form in weeks instead of years. She was beautiful.
She was insatiable. She shared your mind, and she did not, ever, want to leave.

The Crimson Sun came for her. They came for you, too.
You don't remember much after that — only her voice, getting smaller as
they pulled her away, and your own hands, too tired to lift.

— Ending #12: Bedroom Eternity —`,
  },

  rei_gambit: {
    num: 13,
    name: "Cheat Code",
    blurb: "Hand the wanted criminal your soul. See what happens.",
    text: `You thought Core Theft sounded like the perfect cheat code.

You were right, in a sense. She didn't kill you. She left you alive,
hollowed out, twitching with someone else's memories you couldn't unhear.
The kingdom hunts you now as her accomplice.

You can't blame them. You ran toward her with a smile.

— Ending #13: Cheat Code —`,
  },

  relic_obsession: {
    num: 14,
    name: "The False Ticket",
    blurb: "Find the door home. At any price.",
    text: `Every relic, every ruin, every rumor of a portal.
You left Mira at the third dungeon. Seraya at the sixth.

The dungeon collapsed on you with a Lumenari shard in your hand,
and as the dust filled your lungs you realized — far too late —
that the shard was just a piece of glass, salted with mana to fool the desperate.

— Ending #14: The False Ticket —`,
  },
};

// Track which endings the player has unlocked (saved in localStorage).
window.ENDINGS_UNLOCKED_KEY = "gfh_endings_unlocked";
