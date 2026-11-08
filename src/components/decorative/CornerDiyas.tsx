'use client';

import React from 'react';

/**
 * Handcrafted Pair of Traditional Brass Corner Diyas
 * Grounded at bottom-left and bottom-right corners.
 * Feature authentic stepped brass pedestals, etched floral rims,
 * natural flickering flames, and soft radial caustic reflections.
 */
export const CornerDiyas: React.FC = () => {
  return (
    <div className="pointer-events-none select-none z-20 w-full" aria-hidden="true">
      {/* Bottom-Left Corner Diya */}
      <div className="fixed bottom-2 sm:bottom-6 left-2 sm:left-8 w-14 sm:w-24 md:w-28 h-18 sm:h-28 md:h-32 opacity-60 sm:opacity-100 pointer-events-none">
        <svg viewBox="0 0 120 130" className="w-full h-full overflow-visible drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]">
          <defs>
            <linearGradient id="cornerBrassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#69460a" />
              <stop offset="30%" stopColor="#d4af37" />
              <stop offset="60%" stopColor="#fff3b0" />
              <stop offset="85%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#543706" />
            </linearGradient>

            <radialGradient id="cornerDiyaFloorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffaa00" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#e85d04" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Warm Floor Caustic Glow */}
          <ellipse cx="60" cy="115" rx="55" ry="14" fill="url(#cornerDiyaFloorGlow)" />

          {/* Stepped Pedestal */}
          <ellipse cx="60" cy="112" rx="32" ry="7" fill="url(#cornerBrassGrad)" />
          <path d="M 42,112 C 45,102 75,102 78,112 Z" fill="#4a2e06" />

          {/* Diya Bowl */}
          <path
            d="M 22,90 C 24,106 96,106 98,90 C 99,84 85,82 60,82 C 35,82 21,84 22,90 Z"
            fill="url(#cornerBrassGrad)"
            stroke="#4a2e06"
            strokeWidth="0.8"
          />

          {/* Oil Reservoir Surface */}
          <ellipse cx="60" cy="85" rx="34" ry="7" fill="#2d1704" stroke="#d4af37" strokeWidth="0.6" />

          {/* Wick */}
          <path d="M 60,86 L 60,74" stroke="#251406" strokeWidth="2" strokeLinecap="round" />

          {/* Living Flame */}
          <g className="animate-flame" style={{ transformOrigin: '60px 75px' }}>
            {/* Halo */}
            <circle cx="60" cy="55" r="22" fill="#ff7700" opacity="0.3" filter="blur(6px)" />
            {/* Saffron Flame Body */}
            <path
              d="M 60,75 C 50,70 44,58 50,44 C 55,32 60,18 60,12 C 60,18 65,32 70,44 C 76,58 70,70 60,75 Z"
              fill="url(#flameMidGrad)"
              filter="drop-shadow(0 0 6px #ff9e00)"
            />
            {/* White-Hot Core */}
            <path
              d="M 60,74 C 54,71 52,64 54,54 C 57,45 60,32 60,28 C 60,32 63,45 66,54 C 68,64 66,71 60,74 Z"
              fill="#ffffff"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>

      {/* Bottom-Right Corner Diya */}
      <div className="fixed bottom-2 sm:bottom-6 right-2 sm:right-8 w-14 sm:w-24 md:w-28 h-18 sm:h-28 md:h-32 opacity-60 sm:opacity-100 pointer-events-none -scale-x-100">
        <svg viewBox="0 0 120 130" className="w-full h-full overflow-visible drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]">
          {/* Reuses definitions from bottom-left */}
          <ellipse cx="60" cy="115" rx="55" ry="14" fill="url(#cornerDiyaFloorGlow)" />
          <ellipse cx="60" cy="112" rx="32" ry="7" fill="url(#cornerBrassGrad)" />
          <path d="M 42,112 C 45,102 75,102 78,112 Z" fill="#4a2e06" />
          <path
            d="M 22,90 C 24,106 96,106 98,90 C 99,84 85,82 60,82 C 35,82 21,84 22,90 Z"
            fill="url(#cornerBrassGrad)"
            stroke="#4a2e06"
            strokeWidth="0.8"
          />
          <ellipse cx="60" cy="85" rx="34" ry="7" fill="#2d1704" stroke="#d4af37" strokeWidth="0.6" />
          <path d="M 60,86 L 60,74" stroke="#251406" strokeWidth="2" strokeLinecap="round" />
          <g className="animate-flame" style={{ transformOrigin: '60px 75px', animationDelay: '0.4s' }}>
            <circle cx="60" cy="55" r="22" fill="#ff7700" opacity="0.3" filter="blur(6px)" />
            <path
              d="M 60,75 C 50,70 44,58 50,44 C 55,32 60,18 60,12 C 60,18 65,32 70,44 C 76,58 70,70 60,75 Z"
              fill="url(#flameMidGrad)"
              filter="drop-shadow(0 0 6px #ff9e00)"
            />
            <path
              d="M 60,74 C 54,71 52,64 54,54 C 57,45 60,32 60,28 C 60,32 63,45 66,54 C 68,64 66,71 60,74 Z"
              fill="#ffffff"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
