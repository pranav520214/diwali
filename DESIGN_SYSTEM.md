# Happy Diwali: Cinematic Desi Maximalist Visual Design System & Creative Specification

> **Creative Direction & Visual Specification**  
> **Aesthetic Philosophy:** *Desi Maximalism* — A royal, opulent, multisensory celebration rooted in ancient Indian festivities, royal Rajasthani/Mughal architecture, sacred temple geometry, warm earthen candlelight, and sacred floristry. Rich, dense, celebratory, yet masterfully disciplined and cinematic.

---

## 1. The Royal Chromatic Spectrum (Color Palette & Lighting Tokens)

Desi Maximalism relies on the deep, mysterious contrast of midnight velvet dusk pierced by warm, living, sacred flames and glistening kundan gold.

### 1.1 Base & Midnight Canvases (Nocturnal Depths)
*These deep nocturnal shades form the celestial and palace foundation, allowing gold and flame lights to shimmer with high dynamic contrast.*

| Token Name | Hex Code | RGB | Cultural Role / Description |
| :--- | :--- | :--- | :--- |
| **`midnight-burgundy`** | `#120208` | `rgb(18, 2, 8)` | Deepest base canvas; absorbs light, prevents harsh pure-black flat tones. |
| **`velvet-burgundy`** | `#1F0510` | `rgb(31, 5, 16)` | Rich royal velvet; mid-tone shadow for palace interiors and vignetting. |
| **`royal-purple-dark`** | `#170424` | `rgb(23, 4, 36)` | Imperial Jamun / Mughal twilight dusk; cool regal atmospheric depth. |
| **`royal-purple-base`** | `#260938` | `rgb(38, 9, 56)` | Primary background gradient anchor; invokes royal courtyards under starry skies. |
| **`sindoor-crimson-dark`**| `#3A030C` | `rgb(58, 3, 12)` | Sacred vermilion shadow; rich kumkum depth behind illuminated cards. |
| **`deep-crimson`** | `#580614` | `rgb(88, 6, 20)` | Heart of the festive red velvet; evokes royal silks and crimson carpets. |

### 1.2 Festive Vibrants & Florals
*High-energy, joyful chromatic accents derived from auspicious temple rituals, traditional sweets, and festive bazaar blossoms.*

| Token Name | Hex Code | RGB | Cultural Role / Description |
| :--- | :--- | :--- | :--- |
| **`kesari-saffron`** | `#FF7700` | `rgb(255, 119, 0)` | Pure sacred saffron; primary hue of burning oil aura and spiritual warmth. |
| **`saffron-glow`** | `#FFA033` | `rgb(255, 160, 51)` | Radiating halo around diya flames; gentle illumination on stone & textiles. |
| **`genda-orange`** | `#E85D04` | `rgb(232, 93, 4)` | Ripe marigold petal orange; auspicious floral garland anchors. |
| **`genda-yellow`** | `#FFB703` | `rgb(255, 183, 3)` | Sunlit marigold blossom core; highlights on floating petals and rangoli grains. |
| **`rani-pink-base`** | `#DE1360` | `rgb(222, 19, 96)` | Authentic Rajasthani royal hot pink (Gulabi); electric festive energy accent. |
| **`rani-pink-bright`** | `#FF2A7A` | `rgb(255, 42, 122)` | Shimmering highlights on borders, festive ribbons, and celebratory badge rings. |
| **`emerald-peacock`** | `#083D2B` | `rgb(8, 61, 43)` | Traditional Vilva / peacock plumage green; balancing contrast for marigold strings. |

### 1.3 Sacred Metallics & Chandan Highlights
*Imperial golds, burnished temple brass, and cool chandan (sandalwood) silk.*

| Token Name | Hex Code | RGB | Cultural Role / Description |
| :--- | :--- | :--- | :--- |
| **`kundan-gold`** | `#D4AF37` | `rgb(212, 175, 55)` | Master metallic gold; authentic kundan jewelry and foil stamped typography. |
| **`radiant-gold`** | `#F3CE5A` | `rgb(243, 206, 90)` | Glistening edge highlight for borders, jharokha silhouettes, and buttons. |
| **`shimmer-light`** | `#FFF4B8` | `rgb(255, 244, 184)` | Peak specular highlight for light sweeps, gold foil animations, and sparkler tips. |
| **`burnished-brass`** | `#9E721D` | `rgb(158, 114, 29)` | Aged temple bell and brass diya rim; earthy metallic grounding. |
| **`warm-ivory`** | `#FFF9ED` | `rgb(255, 249, 237)` | High-readability text color; soft chandan silk rather than harsh pure white. |
| **`chandan-silk`** | `#FAF2DE` | `rgb(250, 242, 222)` | Secondary textual tone; warm, antique, elegant parchment feel. |

---

### 1.4 Signature Gradients

```css
/* 1. Royal Dusk Atmospheric Canvas */
--gradient-royal-dusk: linear-gradient(
  135deg,
  #120208 0%,
  #260938 45%,
  #3A030C 85%,
  #1F0510 100%
);

/* 2. Saffron & Diya Radiance Aura */
--gradient-diya-radiance: radial-gradient(
  circle at center,
  rgba(255, 119, 0, 0.45) 0%,
  rgba(232, 93, 4, 0.3) 30%,
  rgba(222, 19, 96, 0.15) 55%,
  transparent 75%
);

/* 3. Kundan Gold Foil Sheen (Dynamic metallic sweep) */
--gradient-gold-foil: linear-gradient(
  105deg,
  #9E721D 0%,
  #D4AF37 25%,
  #FFF4B8 50%,
  #D4AF37 75%,
  #876512 100%
);

/* 4. Imperial Velvet Card Surface */
--gradient-velvet-surface: linear-gradient(
  180deg,
  rgba(88, 6, 20, 0.85) 0%,
  rgba(38, 9, 56, 0.95) 100%
);

/* 5. Auspicious Marigold String Gradient */
--gradient-genda-string: linear-gradient(
  90deg,
  #FFB703 0%,
  #E85D04 35%,
  #FFB703 70%,
  #D44000 100%
);
```

---

### 1.5 Glows & Shadow Elevations

```css
/* Diya Live Flame Glow - Multi-frequency pulsating shadow */
--glow-diya-flame: 
  0 0 15px 3px rgba(255, 255, 255, 0.9),
  0 0 35px 10px rgba(255, 183, 3, 0.85),
  0 0 75px 25px rgba(232, 93, 4, 0.55),
  0 0 140px 50px rgba(222, 19, 96, 0.25);

/* Golden Foil Typography Ambient Aura */
--glow-gold-text: 
  0 0 20px rgba(254, 225, 128, 0.45),
  0 2px 10px rgba(0, 0, 0, 0.95);

/* Royal Glassmorphic Card Shadow Elevation */
--shadow-royal-elevation: 
  0 25px 60px -15px rgba(10, 1, 5, 0.9),
  0 0 0 1px rgba(212, 175, 55, 0.35),
  inset 0 1px 1px rgba(255, 244, 184, 0.3);

/* Rani Pink Electric Accent Glow */
--glow-rani-accent:
  0 0 25px 4px rgba(222, 19, 96, 0.6),
  0 0 60px 15px rgba(222, 19, 96, 0.25);
```

---

## 2. Desi Maximalism Visual Elements & SVG Specifications

Desi Maximalism is defined by hand-crafted intricacy, sacred geometry, floral fullness, and architectural grandeur.

### 2.1 Ornamental Toran Arches (Mango Leaves & Marigolds)
*Draping gracefully across the top boundary of the viewport, framing the experience like an auspicious entrance to a royal haveli or temple.*

- **Anatomy**:
  1. Braided golden/crimson thread hanging with catenary sagging curves.
  2. Alternating auspicious mango leaves (*Mangifera indica* / Aam ke patte) in deep emerald and warm olive.
  3. Plump, spherical ruffled marigold (genda) blossoms strung between leaves.
  4. Subtle pendulum sway responding to ambient breeze or cursor movement.

```svg
<!-- Toran Mango Leaf Spec (Reusable symbol) -->
<svg style="display:none;">
  <defs>
    <linearGradient id="mangoLeafGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0E5C41" />
      <stop offset="60%" stop-color="#083D2B" />
      <stop offset="100%" stop-color="#052419" />
    </linearGradient>
    <linearGradient id="marigoldPetalGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFD000" />
      <stop offset="40%" stop-color="#FF9E00" />
      <stop offset="100%" stop-color="#E85D04" />
    </linearGradient>
    
    <g id="mango-leaf">
      <!-- Elongated pointed sacred leaf with central vein -->
      <path d="M 0,0 C 15,35 22,80 0,130 C -22,80 -15,35 0,0 Z" fill="url(#mangoLeafGrad)" stroke="#177353" stroke-width="1" />
      <path d="M 0,0 L 0,120" stroke="#259B73" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
      <!-- Side veins -->
      <path d="M 0,30 Q 8,40 14,46 M 0,55 Q 10,66 16,74 M 0,80 Q 8,92 12,100" stroke="#259B73" stroke-width="0.8" opacity="0.4" />
      <path d="M 0,30 Q -8,40 -14,46 M 0,55 Q -10,66 -16,74 M 0,80 Q -8,92 -12,100" stroke="#259B73" stroke-width="0.8" opacity="0.4" />
    </g>

    <g id="marigold-flower">
      <!-- Multilayered ruffled blossom -->
      <circle cx="0" cy="0" r="22" fill="#E85D04" />
      <!-- Layered scalloped petals -->
      <path d="M 0,-20 C 5,-22 15,-18 18,-12 C 22,-5 22,5 18,12 C 15,18 5,22 0,20 C -5,22 -15,18 -18,12 C -22,5 -22,-5 -18,-12 C -15,-18 -5,-22 0,-20 Z" fill="#FF9E00" />
      <circle cx="0" cy="0" r="14" fill="#FFB703" />
      <circle cx="0" cy="0" r="8" fill="#FFD000" />
      <circle cx="0" cy="0" r="3" fill="#D44000" />
    </g>
  </defs>
</svg>
```

---

### 2.2 Rajasthani / Mughal Jharokha Silhouettes
*The multi-foil cusped arch evokes royal palaces of Udaipur and Jaipur. Used as an elegant architectural frame or subtle background vector.*

- **Key Geometry:**
  - Cusped multi-lobe arch (5 or 7 lobes) leading to a sharp pointed keel apex.
  - Decorative *Kalash* (water pot and mango leaf finial) at the pinnacle.
  - Symmetrical pierced *Jaali* lattice tracery within spandrels.

```svg
<!-- Arch Frame SVG Path Component -->
<svg viewBox="0 0 800 600" width="100%" height="100%" preserveAspectRatio="none">
  <defs>
    <linearGradient id="goldArchStroke" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFF4B8" />
      <stop offset="30%" stop-color="#D4AF37" />
      <stop offset="70%" stop-color="#9E721D" />
      <stop offset="100%" stop-color="#580614" />
    </linearGradient>
  </defs>
  <!-- Symmetrical 7-foil cusped arch curve -->
  <path d="
    M 100,600 
    L 100,280 
    C 100,240 130,220 160,240 
    C 180,210 220,200 250,225 
    C 280,185 330,175 360,205 
    C 380,175 400,140 400,100 
    C 400,140 420,175 440,205 
    C 470,175 520,185 550,225 
    C 580,200 620,210 640,240 
    C 670,220 700,240 700,280 
    L 700,600
  " fill="none" stroke="url(#goldArchStroke)" stroke-width="4" stroke-linecap="round" />
  
  <!-- Outer Arch Border Filigree -->
  <path d="
    M 80,600 
    L 80,270 
    C 80,220 120,200 150,220 
    C 175,190 215,180 245,205 
    C 275,165 325,155 355,185 
    C 375,155 400,110 400,75 
    C 400,110 425,155 445,185 
    C 475,155 525,165 555,205 
    C 585,180 625,190 650,220 
    C 680,200 720,220 720,270 
    L 720,600
  " fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6" />
</svg>
```

---

### 2.3 Authentic Diya Anatomy (The Living Flame & Terracotta Vessel)
The sacred Diya is the beating heart of Diwali. It must feel weightful, textured, and alive.

```
       (  )          <- Outer Corona Halo (warm crimson/saffron glow, soft blur)
      (    )         <- Mid Flame (saffron & golden amber, organic flutter)
     (  /\  )        <- Inner Mantle (luminescent electric yellow)
    (  |  |  )       <- Flame Core (pure incandescent white + cyan base)
       \  /
       _||_          <- Charred cotton wick tip (krishna-shyam carbon tip)
   /===========\     <- Polished Brass (Peetal) Filigree Rim with kundan studs
  /  (~~~~~~~)  \    <- Tel Kund (golden mustard/ghee oil reservoir pool)
 (   terracotta  )   <- Sculpted Mitti Base (warm earthen clay with highlights)
  \_____________/
   \___________/     <- Ground Reflection Pool (expanding radial amber caustics)
```

#### Detailed Layer Specifications:
1. **The Clay Vessel (Mitti ka Patra):**
   - Natural earthen gradient: `#7D3C1B` to `#4A1E0D`.
   - Subtle top-down specular rim representing the oil glaze.
2. **The Brass Filigree Rim (Peetal Kinari):**
   - Antique brass trim `#D4AF37` punctuated with embossed decorative beads (`#FFF4B8`).
3. **The Ghee / Mustard Oil Reservoir (Tel Kund):**
   - Deep translucent liquid reflection pool: dark amber `#3B1C05` with animated wavy caustic highlights reflecting the flame's movement above.
4. **The Cotton Wick (Rui ki Baati):**
   - Twisted organic curve extending from the oil pool. White cotton body `#EDE6D6` transitioning to charred black tip `#1A110D`.
5. **The Quad-Layer Flame (Jwala):**
   - **Layer 1: Flame Root & Core:** Electric pale cyan-white (`#E6F8FF` to `#FFFFFF`). This represents the highest thermal intensity at the wick base.
   - **Layer 2: Inner Mantle:** Rich warm canary gold (`#FFE853`).
   - **Layer 3: Mid Flame Body:** Vibrating kesari saffron (`#FF7700`).
   - **Layer 4: Outer Corona & Flame Tip:** Deep translucent fiery crimson (`#E01E37`).
6. **Ground Caustics & Ambient Cast Light:**
   - Soft radial reflection expanding downward across the surface beneath the diya: `radial-gradient(ellipse at 50% 10%, rgba(255,160,51,0.6) 0%, transparent 70%)`.

---

### 2.4 Layered Rangoli & Sacred Geometric Mandala Vectors
*Concentric sacred geometry combining 8-petaled Padma (lotus), 16-point petal starbursts, and auspicious diagonal symmetries.*

- **Vector Architecture (Multi-Ring System):**
  - **Ring 0 (Center Hub):** Bindu (focal center) encircled by an 8-petal blooming lotus holding the central diya.
  - **Ring 1 (Intermediate Kolam):** Interlocking diamond jaali weave with teardrop motif buds.
  - **Ring 2 (Outer Starburst):** 16-pointed radiating petals crowned with miniature oil lamp silhouettes.
  - **Ring 3 (Perimeter Floral Garland):** Beaded border ring designed for rotating ambient parallax.

```svg
<!-- Central Hero Rangoli SVG Outline Spec -->
<svg viewBox="-200 -200 400 400" width="100%" height="100%" class="rangoli-mandala">
  <defs>
    <radialGradient id="rangoliGlow" cx="0" cy="0" r="100%" fx="0" fy="0">
      <stop offset="0%" stop-color="#FFB703" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#E85D04" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#DE1360" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Ambient Under-Glow -->
  <circle cx="0" cy="0" r="180" fill="url(#rangoliGlow)" />

  <!-- Outer Ring: 16-point geometric lotus petals -->
  <g class="rangoli-outer-ring" stroke="#D4AF37" stroke-width="1.5" fill="none">
    <circle cx="0" cy="0" r="170" stroke-dasharray="4 6" opacity="0.6" />
    <!-- 16 Petals generated radially (angle = i * 22.5 deg) -->
    <!-- Sample petal template repeated via transform -->
    <path d="M 0,-170 C 20,-150 20,-120 0,-100 C -20,-120 -20,-150 0,-170 Z" fill="rgba(222, 19, 96, 0.15)" />
  </g>

  <!-- Middle Ring: 8-Petal Sacred Lotus -->
  <g class="rangoli-middle-ring" stroke="#FFB703" stroke-width="2" fill="rgba(232, 93, 4, 0.2)">
    <circle cx="0" cy="0" r="100" stroke="#D4AF37" stroke-width="1" />
    <!-- 8 Lotus Petals -->
    <path d="M 0,-100 C 35,-80 35,-40 0,0 C -35,-40 -35,-80 0,-100 Z" />
    <path d="M 100,0 C 80,35 40,35 0,0 C 40,-35 80,-35 100,0 Z" />
    <path d="M 0,100 C 35,80 35,40 0,0 C -35,40 -35,80 0,100 Z" />
    <path d="M -100,0 C -80,35 -40,35 0,0 C -40,-35 -80,-35 -100,0 Z" />
  </g>

  <!-- Inner Sanctum: Diya Base Rest -->
  <g class="rangoli-inner-hub">
    <circle cx="0" cy="0" r="45" fill="#3A030C" stroke="#FFF4B8" stroke-width="2" />
    <circle cx="0" cy="0" r="35" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3 3" />
  </g>
</svg>
```

---

### 2.5 Decorative Indian Jaali Lattice Borders
*Pierced screen pattern used for card borders, subtle backgrounds, and modal separators.*

- **Pattern Design:** Interlocking octagonal stars with quadrilateral diamond intersections.
- **Opacity Guideline:** 
  - Background watermarks: `opacity: 0.08` to `0.14`.
  - Card borders / dividers: `opacity: 0.4` to `0.75` with gold foil gradient strokes.

```svg
<!-- 100x100 Reusable SVG Pattern Tile for Jaali -->
<pattern id="jaali-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
  <path d="
    M 40,0 L 50,15 L 65,15 L 55,27 L 60,40 L 48,35 L 40,48 L 32,35 L 20,40 L 25,27 L 15,15 L 30,15 Z
    M 40,80 L 50,65 L 65,65 L 55,53 L 60,40 L 48,45 L 40,32 L 32,45 L 20,40 L 25,53 L 15,65 L 30,65 Z
    M 0,40 L 15,50 L 15,65 L 27,55 L 40,60 L 35,48 L 48,40 L 35,32 L 40,20 L 27,25 L 15,15 L 15,30 Z
    M 80,40 L 65,50 L 65,65 L 53,55 L 40,60 L 45,48 L 32,40 L 45,32 L 40,20 L 53,25 L 65,15 L 65,30 Z
  " fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.4" />
</pattern>
```

---

### 2.6 Floating Marigold Petals & Golden Stardust Particles
1. **Marigold Petal Dynamics:**
   - Individual curved teardrop petals with gentle ruffled edges.
   - Colors: Gradient from `#FFB703` (base) to `#E85D04` (tip) to deep `#8A1E00` (calyx connection).
   - Motion: Gentle 3D tumble (simultaneous `rotateX`, `rotateY`, `rotateZ`) with sinusoidal horizontal drift simulating gentle autumn air currents.
2. **Golden Stardust / Firefly Sparks:**
   - Tiny glowing points of light (1.5px to 4px) radiating golden halos (`#FFF4B8` center with `#FFA033` aura).
   - Rising gently upward via thermal convection from burning diyas.
   - Micro-pulsing opacity (simulating nocturnal fireflies and golden sparkler embers).

---

## 3. Typography Hierarchy & Sacred Festive Text

### 3.1 Font Pairing Matrix

| Level | Primary Font | Alternate / Fallback | Weight | Letter Spacing | CSS Treatment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Grand Festive Display (Hero Title)** | `Cinzel Decorative` | `Rozha One`, `Cinzel`, `Playfair Display`, serif | 700 / 900 Bold | `tracking-[0.12em]` | Kundan Gold Foil gradient mask, soft ambient glow, uppercase. |
| **Sacred Devanagari Script** | `Rozha One` / `Yatra One` | `Noto Serif Devanagari`, serif | 400 / 700 Regular | `tracking-normal` | "शुभ दीपावली" — Gold foil with subtle radiant crimson under-glow. |
| **Poetic Subtitles & Blessings** | `Cormorant Garamond` | `Cinzel`, `Georgia`, serif | 500 Medium Italic | `tracking-[0.08em]` | Warm Ivory (`#FFF9ED`), high contrast, delicate drop-shadow. |
| **Micro-Labels & UI Badges** | `Outfit` / `Plus Jakarta Sans` | `Inter`, sans-serif | 600 Semi-Bold | `tracking-[0.2em]` | Uppercase, antique brass border with pill background. |

---

### 3.2 Gold Foil Shimmer CSS Filter Spec

```css
/* Gold Foil Typography Shimmer Class */
.gold-foil-text {
  background: linear-gradient(
    105deg,
    #9E721D 0%,
    #D4AF37 20%,
    #FFF4B8 45%,
    #FFFFFF 50%,
    #FFF4B8 55%,
    #D4AF37 80%,
    #876512 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 18px rgba(212, 175, 55, 0.4));
  animation: goldFoilSweep 6s ease-in-out infinite;
}

@keyframes goldFoilSweep {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}
```

---

### 3.3 Authentic Cultural Motifs & Festive Copy

- **Devanagari Sacred Invocation:**
  > **शुभ दीपावली**  
  > *Shubh Deepavali (Auspicious Festival of Lights)*

- **Ancient Sanskrit Vedic Shloka (Brihadaranyaka Upanishad):**
  > **ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥**  
  > *"Lead us from the unreal to the real, from darkness unto light, from mortality to immortality."*

- **Cinematic Festive English Copy:**
  - **Hero Eyebrow:** `FESTIVAL OF LIGHTS • CELEBRATING THE TRIUMPH OF LIGHT OVER DARKNESS`
  - **Hero Headline:** `May the Divine Radiance of a Billion Diyas Awaken Joy, Prosperity, and Peace`
  - **Poetic Blessing:** *"As earthen lamps dispel the deepest night, may your home and heart be illuminated with boundless love, wisdom, and eternal prosperity."*

---

## 4. Multi-Plane Atmospheric Depth Architecture (Z-Index Hierarchy)

To achieve true cinematic immersion without visual collision or click blockage, all visual planes are strictly partitioned across explicit z-index intervals.

```
+-------------------------------------------------------------------------+
| [z-60] Interactive Overlay Layer: Sparks Cursor, Modals, Audio Toggle  |
+-------------------------------------------------------------------------+
| [z-50] Foreground Drift: High-Speed Floating Petals, Toran Fringe Sag   |
+-------------------------------------------------------------------------+
| [z-40] UI Presentation Plane: Royal Cards, Gold Typography, Buttons     |
+-------------------------------------------------------------------------+
| [z-30] Interactive Hero Plane: Central Diya, Burning Wick, Rangoli Base |
+-------------------------------------------------------------------------+
| [z-20] Midground Atmospheric Particles: Golden Stardust, Rising Embers   |
+-------------------------------------------------------------------------+
| [z-10] Architectural Silhouette: Jharokha Cusped Arches, Jaali Watermark |
+-------------------------------------------------------------------------+
| [z-0]  Deep Canvas: Velvet Burgundy Dusk Nebula, Vignette, Night Sky    |
+-------------------------------------------------------------------------+
```

### Depth & Parallax Guidance:
1. **`z-0` (Canvas Base):** Deep burgundy/purple gradient with subtle animated radial color drift (`scale(1.05)` breathing).
2. **`z-10` (Architecture):** Fixed or slow parallax (`0.15x` scroll rate). Gives the feeling of looking through the archway of a royal palace balcony overlooking the illuminated city.
3. **`z-20` (Embers):** Lightweight canvas rendering 60-100 rising embers. Speed: 30-70px/sec upward with horizontal sine-wave perturbation.
4. **`z-30` (The Diya & Rangoli):** Hero interactive focal point. The central diya responds to mouse clicks (lighting/brightening) and emits responsive light pulses onto surrounding surfaces.
5. **`z-40` (UI & Typography):** Glassmorphic velvet cards with backdrop blur (`backdrop-blur-md`), 1px antique gold borders, and gold-foil titles.
6. **`z-50` (Foreground Petals):** Blurred out-of-focus marigold petals drifting close to the camera lens (`filter: blur(1.5px)`), moving at `1.4x` parallax speed for true 3D stereoscopic depth.
7. **`z-60` (Interactive FX):** Sparkler cursor trail following mouse movements, custom audio player controls, and full-screen greetings modal.

---

## 5. Review Criteria & Quality Guidelines for Engineering Specialists

*To ensure the final build feels truly luxurious, celebratory, handcrafted, and never cluttered or cheap, the GSAP specialist and Frontend Architect must adhere to these five non-negotiable laws:*

### Law 1: "Curated Maximalism, Not Visual Noise"
- Maximalism is about **density of craft**, not clutter.
- Maintain disciplined optical margins: never cram text against decorative borders. All typography must have a minimum of `24px` to `48px` breathing room from adjacent jaali or toran elements.
- Ensure high contrast: background textures behind text must never exceed `15%` opacity or must sit beneath a frosted velvet scrim (`bg-[#1F0510]/80 backdrop-blur-sm`).

### Law 2: "Living Light Physics (Cohesive Illumination)"
- The diya is not a static graphic; it is a live light emitter.
- When the diya flame flickers or intensifies:
  - The floor reflection pool must breathe synchronously.
  - The gold borders on nearby cards must catch specular flickers.
  - The Rangoli colors must shift slightly warmer (`hue-rotate` or opacity flutter).
- Avoid robotic sinusoidal flicker loops: combine two irrational frequencies (e.g. 1.7Hz and 2.9Hz) or Perlin-like noise for flame scaling (`scaleY: 0.96 to 1.05`, `scaleX: 0.98 to 1.03`, `rotation: -2deg to 2deg`).

### Law 3: "Cultural Authenticity in Every Curve"
- No generic Arabic, Turkish, or neon cyberpunk tropes. This is Indian Desi elegance:
  - Arches must have Rajasthani multi-foil cusped lobes with traditional finials.
  - Garlands must be authentic Marigold (*Genda*) and Mango leaves, not generic rose wreaths.
  - Colors must honor Haldi (turmeric yellow), Kumkum (sacred vermilion), Chandan (sandalwood), Genda (marigold), and Peetal (temple brass).

### Law 4: "Fluid 60FPS Performance Standards"
- High-count particle systems (stardust embers, sparkler particles) must run in HTML5 `<canvas>` using `requestAnimationFrame`, NOT hundreds of heavy DOM `<div>` nodes.
- Foreground petals and SVG arches should use hardware-accelerated CSS/GSAP transforms (`transform: translate3d(x,y,0)` and `will-change: transform`).
- Audio integration (the provided Diwali soundtrack) must be gentle, high-fidelity, and gracefully toggleable with sound wave visualizer feedback.

### Law 5: "Tactile Delight & Micro-Interactions"
- Hovering over diyas should cause the flame to stand taller and emit a soft crackle or spark burst.
- Clicking the diya should ignite a celebratory wave of golden light ripples radiating across the rangoli.
- Gold buttons should feature specular light sweeps that follow the user's cursor angle.

---
*Created by Agent 1: Creative Director & Visual Design Specialist.*
