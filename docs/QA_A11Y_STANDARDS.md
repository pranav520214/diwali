# QA, Responsiveness & Accessibility (A11y) Standards
## Happy Diwali — Cinematic Desi Maximalist Experience

*Prepared by Agent 4: Accessibility, Responsiveness & QA Specialist*
*Compliance Level: WCAG 2.1 / 2.2 Level AA & AAA Targets*

---

## 1. Viewport & Responsive Design Matrix

To achieve a truly immersive, flawless experience on everything from budget smartphones to 4K studio displays, all components must strictly honor the following responsive layout matrix.

| Breakpoint Tier | Target Devices | Width | Layout Rules & Scaling Strategy |
| :--- | :--- | :--- | :--- |
| **Compact Mobile** | Galaxy A-series, Pixel 'a', older iPhones | `360px` | Single-column stack. Font size base `15px`, heading clamp `clamp(2rem, 8vw, 2.5rem)`. Diya scaled to `min(72vw, 260px)`. Padding `px-4`. |
| **Standard Mobile** | iPhone 12/13/14/15/16, Galaxy S23/S24 | `390px` – `430px` | Diya scaled to `min(75vw, 300px)`. Generous spacing, sticky/floating audio pill pinned to top right with `env(safe-area-inset-top)`. |
| **Tablet Portrait** | iPad 10th gen, iPad Air / Pro portrait | `768px` | 2-column or centered wide layout. Diya scaled to `min(50vw, 360px)`. Enhanced particle density. |
| **Tablet Landscape / Laptop**| iPad landscape, MacBook Air 13", Ultrabooks | `1024px` | Cinematic wide aspect ratio. Floating ornate side borders / jharokha arches visible. |
| **Desktop / 4K** | iMac, Studio Display, 4K Monitors | `1440px` – `2560px+`| Max container width `max-w-7xl` or `max-w-6xl` centered. Diya capped at `460px` to maintain sharpness. |

### Layout Guardrails:
1. **Zero Horizontal Overflow**: The root container (`<html>`, `<body>`, and `<main>`) must enforce `overflow-x: hidden` and `width: 100%`. No particle, spark, or transformed SVG layer may exceed the bounding client width without clipping.
2. **Proportional Diya Scaling Without Vertical Overflow**:
   - The central 3D Diya container must use responsive clamping:
     ```css
     width: min(75vw, 420px);
     height: min(75vw, 420px);
     max-height: 45vh; /* Prevents pushing buttons/controls off-screen */
     ```
   - On the intro screen, the diya, title, and "Skip" / "Explore" buttons must all fit comfortably in viewport height (`100dvh` / `100svh`), with no vertical scrollbar during the intro sequence.
3. **Touch Targets (44x44px Rule)**:
   - All interactive controls (Audio toggle pill, Skip intro, "Light a Diya", "Share Wishes", Modal close, Preset wish buttons) must provide a minimum clickable/tappable area of **44 × 44 pixels** (WCAG 2.5.5 / 2.5.8).
   - Utility class provided: `min-h-[44px] min-w-[44px] flex items-center justify-center`.

---

## 2. Accessibility & A11y Standards (WCAG 2.1 / 2.2 AA)

### A. Color Contrast Matrix
The visual palette relies on deep Indian jewel tones (Royal Burgundy `#180310`, Midnight Royal Purple `#140428`, Deep Crimson Maroon `#2A0818`). All typography must meet or exceed WCAG AA (4.5:1 for standard body text, 3:1 for large display headers).

| Text Color | Background Color | Calculated Contrast Ratio | WCAG AA Status | WCAG AAA Status |
| :--- | :--- | :--- | :--- | :--- |
| **Warm Ivory** (`#FFF8EB`) | Deep Burgundy (`#180310`) | **18.75 : 1** | PASS | PASS (Triple A) |
| **Warm Ivory** (`#FFF8EB`) | Royal Purple (`#140428`) | **18.82 : 1** | PASS | PASS (Triple A) |
| **Radiance Gold** (`#F9D776`)| Deep Burgundy (`#180310`) | **14.15 : 1** | PASS | PASS (Triple A) |
| **Radiance Gold** (`#F9D776`)| Royal Purple (`#140428`) | **14.21 : 1** | PASS | PASS (Triple A) |
| **Warm Amber** (`#F59E0B`)| Deep Burgundy (`#180310`) | **8.12 : 1** | PASS | PASS (Triple A) |
| **Muted Ivory Subtitle** (`#E8DEC8`)| Deep Burgundy (`#180310`)| **13.40 : 1**| PASS | PASS (Triple A) |

> [!WARNING]
> **Strictly Avoid Low-Contrast Pitfalls:**
> - NEVER place dark gold (`#92400E`) or dark red (`#991B1B`) text on dark burgundy.
> - NEVER use muted gray `#6B7280` text; always use warm tinted ivory (`#E8DEC8` or `#FFF8EB`).
> - When using luminous text glow (`text-shadow: 0 0 20px rgba(249,215,118,0.5)`), the base font color itself must still meet 4.5:1 without relying on the glow.

---

### B. Screen Reader & ARIA Experience
1. **Decorative vs. Informative SVGs**:
   - Ambient rangoli mandalas, corner gold borders, floating sparkles, and diya flame glow blurs are purely decorative and **MUST** have `aria-hidden="true"` and `focusable="false"`.
   - Actionable icons (Sound toggle, Share, Copy, Close) must provide explicit accessible names via `aria-label` or `<span className="sr-only">Label</span>`.
2. **Accessible Modals (Share / Custom Wish Sheet)**:
   - Root dialog: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="dialog-title"`.
   - Focus Trapping: When opened, focus must automatically move into the modal (via `useFocusTrap` hook). Tabbing cycles strictly within the dialog.
   - Escape Key: Pressing `Escape` closes the modal immediately and returns focus to the initiating button.
3. **Live Regions for Dynamic Feedback**:
   - A dedicated `aria-live="polite"` region will announce when:
     - The intro finishes or is skipped.
     - A user clicks "Light a Diya", announcing: *"Virtual diya lit! Total diyas illuminated: 12. May divine light fill your year."*
     - Audio playback starts or pauses.

---

### C. Reduced Motion (`prefers-reduced-motion: reduce`)
Users with vestibular disorders or motion sensitivities must receive a dignified, stunning, but non-jarring experience:
1. **GSAP Timelines**:
   - Check `useReducedMotion()`.
   - If active, immediately set the GSAP intro timeline progress to completion: `introTimeline.progress(1)` or animate with `duration: 0`.
   - The scene starts directly at the fully lit celebration stage.
2. **Canvas Particle Engine (Sparks & Marigold Petals)**:
   - When reduced motion is detected:
     - Stop continuous velocity physics / RAF animation loops.
     - Render a static, warm ambient glow layer (6–8 gentle blurred gold orbs) rather than 100+ flying sparks.
3. **CSS Transitions**:
   - Apply Tailwind's `motion-reduce:transition-none motion-reduce:transform-none motion-reduce:animate-none` on bouncing, spinning, or pulsating elements.

---

### D. Keyboard Navigation & Focus Rings
1. **Logical Tab Traversal**:
   - Visual reading order matches DOM tree: Skip link -> Audio toggle -> Main CTA ("Light Diya") -> "Send Wishes" -> Share buttons -> Footer info.
2. **High-Visibility Focus Rings**:
   - Custom focus ring token:
     `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#180310]`
   - Never suppress outline with `outline: none` without providing an equivalent `focus-visible` ring.
3. **Accessible Skip Link**:
   - Top-level skip link for power users and screen reader users:
     ```tsx
     <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-400 text-amber-950 font-bold rounded-lg shadow-xl">
       Skip to Diwali Celebration
     </a>
     ```

---

## 3. QA & Technical Verification Checklist

### A. Audio Autoplay Policy & Cross-Browser Resilience
Browser policies (Chrome Media Engagement Index, iOS WebKit Gesture Requirement, Safari, Firefox, Edge) forbid unprompted audio autoplay with sound:
1. **Implementation Pattern (`SafeAudioController`)**:
   - Always catch `audio.play()` rejection:
     ```ts
     audio.play().catch(err => {
       if (err.name === 'NotAllowedError') {
         // Gracefully update UI state to 'blocked' without console errors
         // Attach one-time pointerdown/click/touchstart listener to unlock
       }
     });
     ```
2. **Floating Audio Pill**:
   - Always display a visible audio control pill ("🎵 Play Diwali Music" / "🔊 Mute").
   - If autoplay was blocked, the pill shows an animated invitation ("✨ Tap to play music").
3. **iOS WebKit Inline Audio**:
   - Tag must specify `playsInline` and `webkit-playsinline="true"`.

---

### B. Hydration & Console Hygiene
1. **Client/Server Mismatch Prevention**:
   - Never read `window.innerWidth`, `localStorage`, or `navigator.share` during initial React SSR render.
   - Guard client-specific state with `mounted` check or dynamic import with `{ ssr: false }`.
2. **Clean Console Mandate**:
   - Zero React hydration warnings.
   - Zero uncaught audio or promise rejections.
   - Zero unique key warnings in list rendering (e.g. particle arrays, wish list).

---

### C. Web Share API & Fallback Matrix
1. **Mobile Devices (iOS Safari, Android Chrome)**:
   - Call native `navigator.share({ title, text, url })`.
2. **Desktop & Unsupported Browsers**:
   - Direct WhatsApp Web intent: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`.
   - Clipboard Copy: `navigator.clipboard.writeText(...)` with instant visual toast notification: *"✨ Diwali greeting copied to clipboard!"*.

---

## 4. Reusable Code Modules Implemented

The following production-ready utilities are pre-built and available in the codebase:
- `src/hooks/useReducedMotion.ts` — SSR-safe listener for `prefers-reduced-motion`.
- `src/hooks/useFocusTrap.ts` — Modal focus trapping with Escape key and focus restoration.
- `src/utils/audioController.ts` — Autoplay resilience, gesture unlock, and state tracking.
- `src/utils/shareHelper.ts` — Multi-tier Web Share API with WhatsApp and Clipboard fallbacks.
- `src/constants/a11y-theme.ts` — Centralized color contrast tokens, breakpoint definitions, and touch sizes.
