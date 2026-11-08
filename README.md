# 🪔 Happy Diwali — Cinematic Desi Maximalist Experience

> **An opulent, culturally immersive, cinematic Indian festive web experience celebrating the Festival of Lights (Deepavali).** Built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP 3D Timelines, Framer Motion, and Web Audio API.

---

## 🌟 Visual & Creative Philosophy: Desi Maximalism

This project departs from generic festive web templates to deliver an authentic, royal, handcrafted atmosphere steeped in Indian heritage:

- **Nocturnal Jewel-Tone Palette:** Velvet midnight burgundy (`#120208`), imperial royal purple (`#260938`), deep kumkum crimson (`#580614`), and nocturnal dusk.
- **Auspicious Festive Vibrants:** Pure kesari saffron (`#FF7700`), genda phool marigold orange (`#E85D04`) & yellow (`#FFB703`), and Rajasthani rani pink (`#DE1360`).
- **Sacred Metallics & Chandan Lights:** 24K kundan gold foil (`#D4AF37`), radiant gold (`#F3CE5A`), burnished temple brass (`#9E721D`), and warm sandalwood ivory (`#FFF9ED`).
- **Authentic Indian Heritage Elements:**
  - **Traditional Toran Arch:** Draped across the viewport top with auspicious *aam ke patte* (mango leaves), braided sacred kalawa thread, and ruffled marigold blossoms.
  - **Mughal / Rajasthani Jharokha:** Architectural multi-foil cusped arch curves with kalash apex finial and delicate jaali lattice tracery.
  - **Sacred Concentric Rangoli & Lotus Mandala:** Dual counter-rotating concentric rings featuring an 8-petal central Padma (lotus) and 16-point starburst rim.
  - **Authentic Multi-Tiered Diya:** Terracotta clay belly, embossed brass rim, dark ghee reservoir, charred cotton wick, and a living 4-stage flame with dynamic ground caustic reflection.
  - **Sacred Typography:** Royal display headings in `Cinzel Decorative` with animated gold foil shimmer sweeps, Sanskrit/Devanagari shlokas in `Rozha One` (*"॥ शुभ दीपावली ॥"* & *"तमसो मा ज्योतिर्गमय"*), and blessings in italic `Cormorant Garamond`.

---

## 🎬 4-Scene GSAP Motion Architecture

The intro sequence runs a coordinated, hardware-accelerated 11.5s cinematic timeline (with an instant `Skip to Celebration` button available at all times):

1. **Scene 1: Cosmic Spark & Central Emergence (0.0s – 3.5s)**
   - Starts in a velvety dark burgundy void (`#0a0104`).
   - A golden pinhole light flares up in the exact center and blooms into warm amber fog.
   - The central sculpted diya emerges upward through the haze.
   - Initial flame strike ignites with audio chime feedback, shedding rising golden stardust embers.

2. **Scene 2: The Sacred Aperture — 3D Diya Hinge Opening (3.5s – 6.3s)**
   - The central diya appears fully in a 3D perspective stage (`perspective: 1200px`).
   - The two visual halves of the diya open symmetrically around a central hinge approximately halfway (`rotateY: -48°` and `rotateY: +48°`).
   - Inner sanctuary light blazes out from the opening aperture.
   - Conic volumetric god rays sweep and rotate outward in dramatic god rays.

3. **Scene 3: Sacred Typography & Blossoming Lotus Mandala (6.3s – 9.2s)**
   - Sacred Devanagari invocation (*"॥ शुभ दीपावली ॥"*) rises with optical de-blurring.
   - "HAPPY DIWALI" is revealed letter-by-letter with a 3D letter flip animation.
   - A 24K gold foil specular shimmer sweep glints across the typography.
   - Concentric sacred mandala rings unfold and blossom outwards with counter-rotation.

4. **Scene 4: Maximalist Festive Expansion (9.2s – 11.5s+)**
   - The central diya smoothly scales and settles into its hero focal anchor position.
   - Peripheral glowing diyas cascade ignite along the lower festive arc.
   - Celebratory golden confetti fireworks burst across the viewport.
   - Golden marigold flower petals drift continuously with 3D tumbling physics (`FloatingPetalsCanvas`).
   - Seamless handoff to the interactive homepage with continuous micro-motions (flame flicker, rotating mandala gears, floating fireflies).

---

## 🕹️ Interactive Features

| Action | Interaction Details |
| :--- | :--- |
| **Send Happy Diwali** | Opens a luxurious greeting card studio modal. Customize recipient name, sender name, message, and pick between 4 royal themes (*Royal Swarna Gold, Ruby Gulal, Peacock Emerald, Kesari Sunset*). Instant WhatsApp send, URL copy, and live card preview. |
| **Light a Diya** | Virtual sacred diya lighting ritual. Choose your dedication intent (*Peace, Health, Prosperity, Family, Gratitude*), light the community diya, increment the live celebration counter, and trigger a grand fireworks show. |
| **Share the Joy** | Multi-tier sharing matrix: Uses native **Web Share API** on mobile devices (Instagram, WhatsApp, Messages); seamlessly falls back to direct **WhatsApp Web**, **Twitter/X**, and clipboard copy with animated toast feedback. |
| **Centerpiece Diya** | Clickable at any time on the main screen to "rekindle" the sacred flame with high bell chimes, shockwave ripples, and celebratory starburst confetti. |
| **Burst Fireworks** | Instant celebratory particle bursts across the screen with randomized festive colors. |
| **Replay Intro** | Re-triggers the complete 4-scene cinematic GSAP timeline from the beginning. |

---

## 🎵 Resilient Audio Engine

The application includes a fault-tolerant audio system located in `src/lib/audioEngine.ts`:

- **Primary Source:** Local file `/public/audio/diwali-song.mp4` (with automatic fallback to `/public/audio/diwali-song.mp3`).
- **Zero Broken Audio Guarantee:** If no audio file is supplied or the media fails to decode, the engine immediately switches to an internal **Web Audio API synthesizer** generating an authentic Indian ambient drone (Sa-Pa tanpura resonance) with metallic temple bell chimes.
- **Autoplay Policy Handling:** If browser security blocks autoplay (Chrome MEI, Safari User Gesture restriction), a golden banner appears: *"Tap to Celebrate with Festive Music"*, and a single global pointer tap unlocks and starts playback.
- **Persistent Equalizer Pill:** Floating gold pill at bottom-right with real-time dancing equalizer soundwave bars, mute/unmute toggle, and `localStorage` preference persistence.
- **Sound Effects:** Algorithmic synthesizer bell chimes synced to diya lighting, hinge opening, and button clicks.

---

## 📁 Project Structure

```
diwali/
├── public/
│   ├── audio/
│   │   ├── diwali-song.mp4       # Local supplied festive song
│   │   └── diwali-song.mp3       # Fallback audio format
│   └── favicon.ico
├── src/
│   ├── animations/
│   │   ├── index.ts              # Unified animation exports
│   │   ├── microMotions.ts       # Organic flame flicker, rotating gears, 60fps canvas particles
│   │   ├── motionStyles.css      # GPU-accelerated 3D transforms, god rays, gold shimmer
│   │   ├── timeline.ts           # Master 4-scene GSAP timeline choreography
│   │   ├── types.ts              # TypeScript animation interfaces & refs
│   │   └── useDiwaliTimeline.ts  # React 19 hook with strict-mode & reduced-motion handling
│   ├── app/
│   │   ├── globals.css           # Tailwind v4 theme tokens, gold foil sweep, flame flutter
│   │   ├── layout.tsx            # Google fonts (Cinzel, Rozha One, Outfit, Cormorant) & metadata
│   │   └── page.tsx              # Main state machine, interactive action dock, modals
│   ├── components/
│   │   ├── AudioController.tsx    # Persistent floating music pill & autoplay banner
│   │   ├── BlessingMantraModal.tsx# Vedic shloka modal (Asato Ma Sadgamaya)
│   │   ├── DiyaStage.tsx         # Centerpiece interactive diya with shockwave & rekindle count
│   │   ├── FestiveBackground.tsx # Layered jewel-tone canvas, rotating rangoli, jaali filigree
│   │   ├── FestiveHeader.tsx     # Typography header, Devanagari greeting, divider
│   │   ├── FloatingPetalsCanvas.tsx # 60fps canvas particle simulation (marigolds & fireflies)
│   │   ├── GreetingCardModal.tsx # Customizable greeting card generator with 4 royal themes
│   │   ├── IntroSequence.tsx     # Cinematic 4-scene GSAP intro controller
│   │   ├── LightDiyaExperience.tsx# Diya lighting ritual, dedications & community counter
│   │   ├── ShareModal.tsx        # Web Share API + WhatsApp + Clipboard share dialog
│   │   └── decorative/
│   │       ├── Diya.tsx          # Authentic terracotta & peetal diya vector
│   │       ├── JharokhaFrame.tsx # Rajasthani 7-foil cusped arch frame with jaali
│   │       ├── RangoliMandala.tsx# Concentric sacred lotus mandala SVG
│   │       └── ToranArch.tsx     # Hanging mango leaves & marigold toran
│   ├── constants/
│   │   └── a11y-theme.ts         # WCAG AA contrast tokens, breakpoints, touch sizes
│   ├── design-system/
│   │   ├── fonts.ts              # Google font definitions
│   │   └── tokens.ts             # Palette specifications, gradients, glows, and z-indices
│   ├── hooks/
│   │   ├── useFocusTrap.ts       # WCAG modal focus trapping & Escape key handling
│   │   └── useReducedMotion.ts   # System prefers-reduced-motion detection hook
│   ├── lib/
│   │   ├── audioEngine.ts        # Media playback, Web Audio drone synth, autoplay unlock
│   │   └── confetti.ts           # Golden starburst fireworks & sparkler bursts
│   ├── types/
│   │   └── index.ts              # Global TypeScript interfaces
│   └── utils/
│       ├── audioController.ts    # Audio autoplay helper
│       └── shareHelper.ts        # Web Share API helper
├── DESIGN_SYSTEM.md              # Detailed visual and cultural creative specification
├── next.config.ts                # Next.js configuration with Turbopack root
└── package.json                  # Dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js:** v18.17+ or v20+ (developed and verified on Node.js v24.19.0)
- **npm:** v9+ or v10+

### 2. Installation
```bash
git clone <your-repo-url> diwali
cd diwali
npm install
```

### 3. Adding Your Custom Song
Place your local MP4 or MP3 file in the `public/audio/` directory:
```
public/audio/diwali-song.mp4
```
*(The repository already includes an optimized festive track ready to play immediately).*

### 4. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build Verification
```bash
npm run build
npm run start
```

---

## ☁️ Vercel Deployment Guide

This project is fully optimized for zero-config deployment on Vercel:

### Option A: Using Vercel CLI
```bash
# 1. Login to your Vercel account
npx vercel login

# 2. Deploy preview build
npx vercel

# 3. Deploy to production
npx vercel --prod
```

### Option B: Deploy via GitHub / GitLab / Bitbucket
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the `diwali` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. The site will build and deploy in seconds!

---

## ♿ Accessibility & Quality Assurance

- **WCAG 2.1 AA / AAA Compliance:** High contrast text (Warm Ivory `#FFF9ED` and Gold `#F9D776` on Deep Burgundy `#120208` exceeds 14:1 contrast ratio).
- **Reduced Motion Support:** When `prefers-reduced-motion` is enabled in OS settings, the GSAP timeline instantly transitions to the settled state and particle animations reduce to gentle ambient lighting.
- **Mobile First & Responsive:** Tested from 360px (compact mobile) up to 1440px+ (desktop 4K). No horizontal scrollbars. Touch targets meet or exceed 44x44px.
- **Keyboard Trapping:** Modal dialogs trap focus and close cleanly on the `Escape` key, restoring focus to triggering elements.

---

## 📜 License & Blessings

May this Diwali illuminate your life with infinite joy, prosperity, health, and peace!  
*॥ तमसो मा ज्योतिर्गमय ॥*
