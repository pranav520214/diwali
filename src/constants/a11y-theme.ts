/**
 * Accessibility & Design Tokens for Cinematic Desi Maximalist Experience
 * 
 * WCAG 2.1 / 2.2 AA & AAA Compliant Design Tokens
 */

export const A11Y_THEME = {
  breakpoints: {
    compactMobile: 360,    // Android compact (Galaxy A series, etc.)
    standardMobile: 390,   // iPhone 12/13/14/15/16 standard
    tabletPortrait: 768,   // iPad portrait / Android tablets
    tabletLandscape: 1024, // iPad landscape / MacBook Air
    desktop4K: 1440,       // Large desktop & 4K displays
  },

  colors: {
    // Backgrounds (Dark Luma < 0.01)
    bgBurgundy: "#180310",
    bgRoyalPurple: "#140428",
    bgDeepCrimson: "#2A0818",

    // High Contrast Foreground Text
    // Contrast with #180310: 18.75:1 (WCAG AAA passes by large margin)
    textWarmIvory: "#FFF8EB",
    // Contrast with #180310: 14.15:1 (WCAG AAA passes for body & display)
    textRadianceGold: "#F9D776",
    // Contrast with #180310: 8.1:1 (WCAG AAA passes)
    textWarmAmber: "#F59E0B",
    // Secondary Ivory for subtle subtitles (contrast > 11:1)
    textMutedIvory: "#E8DEC8",
  },

  touchTargets: {
    minWidth: "44px",
    minHeight: "44px",
    // Tailwind classes for buttons to guarantee 44x44px touch area
    touchClass: "min-h-[44px] min-w-[44px] flex items-center justify-center",
  },

  focusRing: {
    // High-visibility focus indicators with offset contrasting against dark background
    classes:
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#180310]",
  },

  diyaScaling: {
    // Proportional CSS sizing rule to prevent clipping or viewport overflows
    mobile: "w-[min(72vw,270px)] h-[min(72vw,270px)] max-h-[40vh]",
    tablet: "w-[min(50vw,360px)] h-[min(50vw,360px)] max-h-[45vh]",
    desktop: "w-[min(35vw,440px)] h-[min(35vw,440px)] max-h-[50vh]",
  },

  screenReaderAnnouncements: {
    introStart: "Welcome to the Happy Diwali cinematic experience. Lighting the sacred golden diya.",
    introSkipped: "Intro animation skipped. Viewing Diwali festive celebration directly.",
    introCompleted: "Diwali celebration illuminated. Festive wishes and interactive diyas are now available.",
    diyaLit: (count: number) => `Virtual diya lit! Total diyas illuminated: ${count}. May divine light fill your year.`,
    musicPlaying: "Diwali festive soundtrack is now playing.",
    musicPaused: "Diwali festive soundtrack paused.",
  },
} as const;
