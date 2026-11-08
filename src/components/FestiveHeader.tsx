'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const FestiveHeader: React.FC = () => {
  return (
    <header className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-12 pb-6 max-w-4xl mx-auto">
      {/* Top Sacred Shlok / Invocation Accent */}
      <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(255,215,0,0.15)] animate-fade-in">
        <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-spin-slow" />
        <span
          className="text-xs sm:text-sm tracking-[0.25em] text-[#ffdd55] uppercase font-medium"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Festival of Lights • 2026
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-spin-slow" />
      </div>

      {/* Sacred Devanagari Greeting */}
      <h2
        className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide text-[#ffcc00] drop-shadow-[0_4px_16px_rgba(255,165,0,0.4)] my-1"
        style={{ fontFamily: 'var(--font-rozha), var(--font-yatra), serif' }}
      >
        ॥ शुभ दीपावली ॥
      </h2>

      {/* Main Cinematic Title */}
      <h1
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider uppercase gold-shimmer-text drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] mt-1"
        style={{ fontFamily: 'var(--font-cinzel-dec), var(--font-cinzel), serif' }}
      >
        HAPPY DIWALI
      </h1>

      {/* Ornamental Floral Divider */}
      <div className="flex items-center justify-center gap-3 w-full max-w-md my-4 opacity-90">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#ffd700] to-[#ffd700]" />
        {/* Lotus / Paisley Glyph */}
        <div className="flex items-center gap-1.5 text-[#ffd700]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7700] shadow-[0_0_8px_#ff7700]" />
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            className="text-[#ffd700] fill-current"
          >
            <path d="M14 0 C11 6 7 11 0 14 C7 17 11 20 14 20 C17 20 21 17 28 14 C21 11 17 6 14 0 Z" />
            <circle cx="14" cy="11" r="2.5" fill="#120306" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7700] shadow-[0_0_8px_#ff7700]" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#ffd700] to-[#ffd700]" />
      </div>

      {/* Subtitle / Festive Greeting Message */}
      <p
        className="text-base sm:text-xl md:text-2xl text-[#ffeec2] font-normal italic max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] px-2"
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
      >
        &ldquo;May this Diwali illuminate your life with happiness, prosperity, peace and endless possibilities.&rdquo;
      </p>
    </header>
  );
};
