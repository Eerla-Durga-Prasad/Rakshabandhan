 /**
 * ═══════════════════════════════════════════════════════
 * CONFIG.JS — Centralized Content & Photo Configuration
 * ═══════════════════════════════════════════════════════
 *
 * HOW TO ADD YOUR SISTER'S PHOTOS:
 * ─────────────────────────────────
 * 1. Place your image files in the /images/ folder.
 * 2. Update the `src` field for each photo below.
 * 3. Add a meaningful `caption` and `year` (optional).
 * 4. Supported formats: .webp (preferred), .jpg, .png, .avif
 *
 * EXAMPLE:
 *   src: "images/sister-birthday-2018.webp",
 *   caption: "Her birthday cake obsession phase.",
 *   year: "2018"
 *
 * DO NOT change the `key` values — they link to the HTML.
 * ═══════════════════════════════════════════════════════
 */

window.RBConfig = {

  // ── PHOTOS ──────────────────────────────────────────
  // Add your real photo paths here. Leave src empty ("") to show placeholder.
  photos: {
    photo01: {
      src:     "images/rakhi-ceremony.webp",
      alt:     "Tying Rakhi — sister lovingly tying rakhi on brother's wrist",
      caption: "The silly moments were always the best.",
      year:    ""
    },
    photo02: {
       src: "images/sibling-memories.webp",
       alt: "Sibling Memories — brother and sister sharing a candid moment",
       caption: "Some smiles never need a reason.",
       year: ""
    },
    photo03: {
       src: "images/rakhi-thali.webp",
       alt: "Festive Traditions — realistic rakhi thali with diya, kumkum, sweets",
       caption: "The smiles I'll always remember.",
       year: ""
    },
    photo04: {
       src: "images/childhood-bond.webp",
       alt: "Childhood Bond — young Indian siblings laughing and sharing sweets",
       caption: "Growing into the person you were meant to be.",
       year: ""
    },
    photo05: {
       src: "images/growing-together.webp",
       alt: "Growing Together — siblings walking together outdoors with care",
       caption: "Growing up, together.",
       year: ""
    },
    photo06: {
       src: "images/forever-bond.webp",
       alt: "Forever Bond — brother and sister sharing a warm smile",
       caption: "Some memories are better together.",
       year: ""
    },
    photo07: {
       src: "images/moments-forever.webp",
       alt: "Moments worth keeping forever — Indian siblings laughing and celebrating together",
       caption: "Moments worth keeping forever.",
       year: ""
    },
    photo08: {
       src: "images/together-always.webp",
       alt: "Together, always — elder sister and brother sharing a warm moment at sunset",
       caption: "And somehow, after all these years, it's still us.",
       year: ""
    }
  },

  // ── MUSIC ───────────────────────────────────────────
  // Place your music file in /audio/ and update the path below.
  // Supported: .mp3, .ogg
  music: {
    src:    "audio/kaalamaagi-choosina.mp3",          // e.g. "audio/background.mp3"
    volume: 0.35,        // 0.0 to 1.0
    loop:   true
  },

  // ── SITE CONTENT (optional overrides) ───────────────
  content: {
    sisterName: "Akka",
    heroLine1:  "My Dearest Sister…",
    heroLine2:  "Ee surprise nee kosam.",
    heroLine3:  "Just for you. ❤️"
  }
};
