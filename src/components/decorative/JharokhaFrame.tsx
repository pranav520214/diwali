'use client';

import React from 'react';

interface JharokhaFrameProps {
  className?: string;
  opacity?: number;
}

/**
 * Rajasthani Royal Jharokha Archway Frame
 * Classic 7-cusp multi-foil arch with kalash finial,
 * fine jaali lattice spandrels, and restrained antique gold linework.
 */
export const JharokhaFrame: React.FC<JharokhaFrameProps> = ({
  className = '',
  opacity = 0.14,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none w-full h-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="jharokhaGoldRefined" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff8e1" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#966d1a" />
            <stop offset="100%" stopColor="#2e050c" />
          </linearGradient>

          <pattern id="jharokhaJaaliRefined" width="36" height="36" patternUnits="userSpaceOnUse">
            <path
              d="M 18,0 L 36,18 L 18,36 L 0,18 Z"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.6"
              opacity="0.4"
            />
            <circle cx="18" cy="18" r="2" fill="#ffd700" opacity="0.25" />
          </pattern>
        </defs>

        {/* Spandrel Tracery (Corner Fill) */}
        <rect x="0" y="0" width="1000" height="800" fill="url(#jharokhaJaaliRefined)" opacity="0.3" />

        {/* Main Architectural Keel Arch */}
        <path
          d="
            M 60,800 
            L 60,340 
            C 60,280 120,240 160,270 
            C 190,220 260,200 300,240 
            C 340,180 420,160 460,210 
            C 480,170 500,120 500,70 
            C 500,120 520,170 540,210 
            C 580,160 660,180 700,240 
            C 740,200 810,220 840,270 
            C 880,240 940,280 940,340 
            L 940,800
          "
          fill="none"
          stroke="url(#jharokhaGoldRefined)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Inner Arch Accent Beading */}
        <path
          d="
            M 85,800 
            L 85,350 
            C 85,300 135,265 170,290 
            C 195,245 255,230 290,265 
            C 325,210 395,195 435,235 
            C 455,200 480,150 500,110 
            C 520,150 545,200 565,235 
            C 605,195 675,210 710,265 
            C 745,230 805,245 830,290 
            C 865,265 915,300 915,350 
            L 915,800
          "
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.8"
          strokeDasharray="5 4"
          opacity="0.7"
        />

        {/* Traditional Kalash Finial at Keel Apex */}
        <g transform="translate(500, 65)">
          <path
            d="M -10,0 C -10,-14 0,-22 0,-28 C 0,-22 10,-14 10,0 Z"
            fill="#fff4b8"
            stroke="#d4af37"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="-30" r="2.5" fill="#ffd700" />
        </g>
      </svg>
    </div>
  );
};
