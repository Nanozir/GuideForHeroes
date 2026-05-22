/* ============================================
   Background / location definitions
   ============================================
   When a real image isn't provided, we show a
   stylized gradient that hints at the mood.
   To use real backgrounds, drop them into
     game/assets/images/backgrounds/<id>.jpg
   and set image: "assets/images/backgrounds/<id>.jpg".
*/

window.LOCATIONS = {
  black: {
    name: "—",
    style: "background: #000;",
  },
  white: {
    name: "—",
    style: "background: #fff;",
  },
  void: {
    name: "Void",
    style: "background: radial-gradient(ellipse at center, #1a0030 0%, #000 70%);",
  },
  warp: {
    name: "Warp Tunnel",
    style: "background: linear-gradient(90deg, #000 0%, #fff 50%, #000 100%); animation: pulse 1.2s ease-in-out infinite;",
  },

  summon_chamber: {
    name: "Summoning Chamber",
    style: `background:
      radial-gradient(ellipse at center, rgba(230,192,104,0.15) 0%, transparent 60%),
      linear-gradient(180deg, #1a1828 0%, #2a2438 50%, #1a1828 100%);`,
  },

  testing_chamber: {
    name: "Testing Chamber",
    style: `background:
      radial-gradient(circle at 50% 40%, rgba(80,140,200,0.2), transparent 70%),
      linear-gradient(180deg, #0c0c18 0%, #1a1a2c 100%);`,
  },

  erdan_room: {
    name: "Hero's Quarters",
    style: `background:
      linear-gradient(180deg, #2a2030 0%, #3a2c40 60%, #1a1424 100%);`,
  },

  hallway: {
    name: "Palace Hallway",
    style: `background:
      linear-gradient(180deg, #2a1c30 0%, #1a1424 100%);`,
  },

  dining_room: {
    name: "Dining Hall",
    style: `background:
      radial-gradient(circle at 50% 30%, rgba(230,192,104,0.18), transparent 60%),
      linear-gradient(180deg, #2c2030 0%, #1a1020 100%);`,
  },

  throne_room: {
    name: "Throne Room",
    style: `background:
      radial-gradient(ellipse at 50% 30%, rgba(200,40,40,0.18), transparent 60%),
      linear-gradient(180deg, #2c1818 0%, #150808 100%);`,
  },

  audience_room: {
    name: "Audience Chamber",
    style: `background:
      linear-gradient(180deg, #1c1426 0%, #2a1c34 50%, #14101c 100%);`,
  },

  courtyard: {
    name: "Palace Courtyard",
    style: `background:
      radial-gradient(circle at 50% 40%, rgba(180,200,140,0.2), transparent 60%),
      linear-gradient(180deg, #4a5036 0%, #1c2418 100%);`,
  },

  courtyard_blood: {
    name: "Bloodied Courtyard",
    style: `background:
      radial-gradient(circle at 50% 60%, rgba(140,30,30,0.35), transparent 70%),
      linear-gradient(180deg, #2a1818 0%, #100808 100%);`,
  },

  garden: {
    name: "Palace Gardens",
    style: `background:
      radial-gradient(circle at 30% 40%, rgba(200,160,220,0.2), transparent 60%),
      linear-gradient(180deg, #4a4c5a 0%, #2c2a3c 100%);`,
  },

  underground_passage: {
    name: "Hidden Passage",
    style: `background:
      linear-gradient(180deg, #0c0a14 0%, #1a1424 50%, #050308 100%);`,
  },

  sanctum_hall: {
    name: "Sanctum Workshop",
    style: `background:
      radial-gradient(circle at 50% 30%, rgba(220,80,80,0.18), transparent 60%),
      linear-gradient(180deg, #221416 0%, #100608 100%);`,
  },

  sanctum_chamber: {
    name: "Sanctum Inner Chamber",
    style: `background:
      radial-gradient(ellipse at center, rgba(220,40,40,0.25) 0%, transparent 60%),
      linear-gradient(180deg, #2c0c10 0%, #100406 100%);`,
  },

  vault: {
    name: "Relic Vault",
    style: `background:
      linear-gradient(180deg, #181028 0%, #08040c 100%);`,
  },

  sewers: {
    name: "Canals",
    style: `background:
      linear-gradient(180deg, #1a2024 0%, #080a0c 100%);`,
  },

  alley: {
    name: "Back Alley",
    style: `background:
      linear-gradient(180deg, #1c1818 0%, #0a0808 100%);`,
  },

  warehouse: {
    name: "Spice Exchange",
    style: `background:
      linear-gradient(180deg, #2a2018 0%, #100a08 100%);`,
  },

  infirmary: {
    name: "Royal Infirmary",
    style: `background:
      radial-gradient(circle at 50% 30%, rgba(220,220,240,0.15), transparent 70%),
      linear-gradient(180deg, #1a1c28 0%, #0a0c14 100%);`,
  },

  ballroom: {
    name: "Royal Ballroom",
    style: `background:
      radial-gradient(ellipse at 50% 30%, rgba(230,192,104,0.25), transparent 65%),
      linear-gradient(180deg, #2c2030 0%, #1a1020 100%);`,
  },

  prison: {
    name: "Palace Prison",
    style: `background:
      linear-gradient(180deg, #14100c 0%, #050404 100%);`,
  },

  carriage: {
    name: "Carriage Interior",
    style: `background:
      linear-gradient(180deg, #2c1c20 0%, #14080c 100%);`,
  },

  road: {
    name: "Open Road",
    style: `background:
      radial-gradient(circle at 50% 30%, rgba(190,200,160,0.2), transparent 60%),
      linear-gradient(180deg, #5a6048 0%, #2a2c20 100%);`,
  },

  // Hallucination / vision backgrounds
  battlefield: {
    name: "Battlefield",
    style: `background:
      radial-gradient(circle at 50% 60%, rgba(180,40,40,0.2), transparent 70%),
      linear-gradient(180deg, #2c1c14 0%, #100808 100%);`,
  },
  sky_battle: {
    name: "Sky",
    style: `background:
      linear-gradient(180deg, #4a3c5c 0%, #2a1c30 50%, #1a1020 100%);`,
  },
  elven_plaza: {
    name: "Elven Plaza",
    style: `background:
      radial-gradient(circle at 50% 30%, rgba(200,220,240,0.2), transparent 70%),
      linear-gradient(180deg, #c8d4e8 0%, #6a7888 50%, #2a3038 100%);`,
  },
  farmstead: {
    name: "Brindleton Farmstead",
    style: `background:
      radial-gradient(circle at 50% 30%, rgba(230,200,140,0.2), transparent 70%),
      linear-gradient(180deg, #5a4830 0%, #2a2014 100%);`,
  },
};
