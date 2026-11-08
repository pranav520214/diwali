'use client';

import React from 'react';

/**
 * Editorial Luxury Festive Header
 * - Refined festival invocation badge
 * - Authentic Devanagari serif: ॥ शुभ दीपावली ॥
 * - Balanced high-contrast display serif: HAPPY DIWALI (restrained antique gold)
 * - Fine handcrafted Indian floral / paisley hairline separator
 * - Elegant editorial italic blessing in Cormorant Garamond
 */
export const FestiveHeader: React.FC = () => {
  return (
    <header className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-20 md:pt-24 pb-2 max-w-4xl mx-auto select-none">
      {/* 1. Small Refined Festival Label */}
      <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-[#1b030a]/70 border border-[#d4af37]/30 backdrop-blur-md mb-2 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
        <span className="w-1 h-1 rounded-full bg-[#ffaa00]" />
        <span
          className="text-[10px] sm:text-xs tracking-[0.28em] text-[#fae5b6] uppercase font-medium"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Festival of Lights • 2026
        </span>
        <span className="w-1 h-1 rounded-full bg-[#ffaa00]" />
      </div>

      {/* 2. Sacred Devanagari Greeting */}
      <h2
        className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#fce599] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] my-0.5"
        style={{ fontFamily: 'var(--font-rozha), var(--font-yatra), serif' }}
      >
        ॥ शुभ दीपावली ॥
      </h2>

      {/* 3. Main Editorial Headline: HAPPY DIWALI */}
      <h1
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase gold-shimmer-text drop-shadow-[0_6px_20px_rgba(0,0,0,0.85)] mt-1"
        style={{ fontFamily: 'var(--font-cinzel-dec), var(--font-cinzel), serif' }}
      >
        HAPPY DIWALI
      </h1>

      {/* 4. Delicate Ornamental Floral Separator */}
      <div className="flex items-center justify-center gap-3 w-full max-w-sm my-3 opacity-80">
        <div className="h-[0.75px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]" />
        {/* Sacred Lotus Paisley Glyph */}
        <div className="flex items-center gap-1.5 text-[#d4af37]">
          <span className="w-1 h-1 rounded-full bg-[#ff9900]" />
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            className="text-[#d4af37] fill-current"
          >
            <path d="M12 0 C9.5 5 6 9 0 11 C6 13.5 9.5 16 12 16 C14.5 16 18 13.5 24 11 C18 9 14.5 5 12 0 Z" />
            <circle cx="12" cy="8.5" r="2" fill="#140307" />
          </svg>
          <span className="w-1 h-1 rounded-full bg-[#ff9900]" />
        </div>
        <div className="h-[0.75px] flex-1 bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]" />
      </div>

      {/* 5. Short Greeting Message */}
      <p
        className="text-base sm:text-xl md:text-2xl text-[#f8ecd2] font-normal italic max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] px-2"
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
      >
        &ldquo;May this Diwali illuminate your life with happiness, prosperity, peace and endless possibilities.&rdquo;
      </p>
    </header>
  );
};
