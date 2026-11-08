'use client';

import React from 'react';

/**
 * Handcrafted Royal Festive Background
 * - Deep wine & royal burgundy velvet base
 * - Handcrafted raw silk / khadi paper grain texture
 * - Warm ambient candlelit amber glow
 * - Watermark antique gold lotus mandala (ultra-subtle 4% opacity)
 * - Fine royal architectural hairline frame with corner kundan motifs
 */
export const FestiveBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Wine & Velvet Burgundy Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 50% 52%, #260510 0%, #19030b 45%, #0d0105 100%)
          `,
        }}
      />

      {/* 2. Handcrafted Silk / Paper Grain Texture (SVG Filter) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay">
        <filter id="silkGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#silkGrain)" />
      </svg>

      {/* 3. Sophisticated Central Amber Candlelight Glow */}
      <div
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] pointer-events-none animate-ambient-light"
        style={{
          width: 'min(90vw, 780px)',
          height: 'min(85vw, 650px)',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255, 170, 40, 0.22) 0%, rgba(212, 115, 12, 0.12) 40%, rgba(120, 10, 30, 0.04) 70%, transparent 85%)',
        }}
      />

      {/* 4. Very Subtle Ornamental Lotus Mandala Watermark (0.04 Opacity) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.045] pointer-events-none">
        <svg
          width="760"
          height="760"
          viewBox="-380 -380 760 760"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.8"
          className="animate-spin-slow"
          style={{ animationDuration: '140s' }}
        >
          {/* Concentric sacred circles */}
          <circle cx="0" cy="0" r="80" strokeDasharray="3 4" />
          <circle cx="0" cy="0" r="140" />
          <circle cx="0" cy="0" r="220" strokeDasharray="4 6" />
          <circle cx="0" cy="0" r="300" />
          <circle cx="0" cy="0" r="360" strokeDasharray="2 4" opacity="0.6" />

          {/* 16 Radiating Rays */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`ray-${i}`}
                x1={Math.cos(rad) * 140}
                y1={Math.sin(rad) * 140}
                x2={Math.cos(rad) * 300}
                y2={Math.sin(rad) * 300}
              />
            );
          })}

          {/* 12 Outer Lotus Petals */}
          {Array.from({ length: 12 }).map((_, i) => {
            const rot = i * 30;
            return (
              <path
                key={`petal-${i}`}
                d="M 0,-300 C 35,-240 35,-160 0,-140 C -35,-160 -35,-240 0,-300 Z"
                transform={`rotate(${rot})`}
                fill="none"
              />
            );
          })}

          {/* 8 Inner Lotus Petals */}
          {Array.from({ length: 8 }).map((_, i) => {
            const rot = i * 45;
            return (
              <path
                key={`in-petal-${i}`}
                d="M 0,-140 C 20,-110 20,-70 0,-50 C -20,-70 -20,-110 0,-140 Z"
                transform={`rotate(${rot})`}
                fill="none"
              />
            );
          })}
        </svg>
      </div>

      {/* 5. Delicate Royal Architectural Hairline Frame & Corner Kundan Motifs */}
      <div className="absolute inset-3 sm:inset-6 pointer-events-none">
        {/* Outer Hairline Border */}
        <div className="absolute inset-0 border border-[#d4af37]/20 rounded-lg sm:rounded-xl" />

        {/* Inner Secondary Hairline Border */}
        <div className="absolute inset-1 sm:inset-2 border border-[#d4af37]/10 rounded-md sm:rounded-lg" />

        {/* Top-Left Corner Motif */}
        <svg
          viewBox="0 0 48 48"
          className="absolute top-0 left-0 w-8 h-8 sm:w-11 sm:h-11 text-[#d4af37]/40 stroke-current fill-none"
        >
          <path d="M 4,4 L 36,4 M 4,4 L 4,36" strokeWidth="1.5" />
          <path d="M 8,8 L 28,8 M 8,8 L 8,28" strokeWidth="0.8" opacity="0.6" />
          <circle cx="16" cy="16" r="3" fill="#d4af37" opacity="0.5" />
          <path d="M 4,20 C 14,20 20,14 20,4" strokeWidth="1" />
        </svg>

        {/* Top-Right Corner Motif */}
        <svg
          viewBox="0 0 48 48"
          className="absolute top-0 right-0 w-8 h-8 sm:w-11 sm:h-11 text-[#d4af37]/40 stroke-current fill-none -scale-x-100"
        >
          <path d="M 4,4 L 36,4 M 4,4 L 4,36" strokeWidth="1.5" />
          <path d="M 8,8 L 28,8 M 8,8 L 8,28" strokeWidth="0.8" opacity="0.6" />
          <circle cx="16" cy="16" r="3" fill="#d4af37" opacity="0.5" />
          <path d="M 4,20 C 14,20 20,14 20,4" strokeWidth="1" />
        </svg>

        {/* Bottom-Left Corner Motif */}
        <svg
          viewBox="0 0 48 48"
          className="absolute bottom-0 left-0 w-8 h-8 sm:w-11 sm:h-11 text-[#d4af37]/40 stroke-current fill-none -scale-y-100"
        >
          <path d="M 4,4 L 36,4 M 4,4 L 4,36" strokeWidth="1.5" />
          <path d="M 8,8 L 28,8 M 8,8 L 8,28" strokeWidth="0.8" opacity="0.6" />
          <circle cx="16" cy="16" r="3" fill="#d4af37" opacity="0.5" />
          <path d="M 4,20 C 14,20 20,14 20,4" strokeWidth="1" />
        </svg>

        {/* Bottom-Right Corner Motif */}
        <svg
          viewBox="0 0 48 48"
          className="absolute bottom-0 right-0 w-8 h-8 sm:w-11 sm:h-11 text-[#d4af37]/40 stroke-current fill-none -scale-x-100 -scale-y-100"
        >
          <path d="M 4,4 L 36,4 M 4,4 L 4,36" strokeWidth="1.5" />
          <path d="M 8,8 L 28,8 M 8,8 L 8,28" strokeWidth="0.8" opacity="0.6" />
          <circle cx="16" cy="16" r="3" fill="#d4af37" opacity="0.5" />
          <path d="M 4,20 C 14,20 20,14 20,4" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};
