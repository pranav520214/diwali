'use client';

import React from 'react';

interface ToranProps {
  className?: string;
}

/**
 * Handcrafted Royal Marigold & Mango-Leaf Toran
 * - Authentic layered mango leaves (Aam ke Patte) with delicate vein structures
 * - Rich layered marigold pom-poms (Genda Phool) in saffron & gold
 * - Fine hanging golden temple bells (Ghanti) with delicate chain links
 * - 2 suspended brass oil lamps (Deepas) hanging gracefully at the flanks
 * - Gentle natural pendulum sway animation
 */
export const ToranArch: React.FC<ToranProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full overflow-visible pointer-events-none select-none z-30 ${className}`}
      aria-hidden="true"
    >
      <div className="w-full h-20 sm:h-28 md:h-32 flex justify-center animate-toran-sway">
        <svg
          viewBox="0 0 1200 130"
          preserveAspectRatio="xMidYMin slice"
          className="w-full h-full overflow-visible drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]"
        >
          <defs>
            {/* Realistic Mango Leaf Linear Gradient */}
            <linearGradient id="leafGradReal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a6d47" />
              <stop offset="45%" stopColor="#0f4f33" />
              <stop offset="85%" stopColor="#083823" />
              <stop offset="100%" stopColor="#042114" />
            </linearGradient>

            {/* Marigold Blossom Radial Shading */}
            <radialGradient id="marigoldPomPom" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ffe66d" />
              <stop offset="25%" stopColor="#ffb703" />
              <stop offset="65%" stopColor="#fb8500" />
              <stop offset="90%" stopColor="#d9480f" />
              <stop offset="100%" stopColor="#9a1f03" />
            </radialGradient>

            {/* Deep Orange Marigold Variation */}
            <radialGradient id="marigoldOrange" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#ffbe0b" />
              <stop offset="35%" stopColor="#fb5607" />
              <stop offset="80%" stopColor="#c1121f" />
              <stop offset="100%" stopColor="#780016" />
            </radialGradient>

            {/* Antique Cast Brass Shading for Bells & Chains */}
            <linearGradient id="antiqueBrassBell" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7a5511" />
              <stop offset="25%" stopColor="#d4af37" />
              <stop offset="55%" stopColor="#fff3b0" />
              <stop offset="80%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#634208" />
            </linearGradient>

            {/* Twisted Sacred Kalawa Rope (Red & Gold) */}
            <pattern id="kalawaRope" width="16" height="6" patternUnits="userSpaceOnUse">
              <rect width="8" height="6" fill="#a01a2e" />
              <rect x="8" width="8" height="6" fill="#d4af37" />
            </pattern>

            {/* Reusable Realistic Mango Leaf Motif */}
            <g id="realisticMangoLeaf">
              {/* Outer Leaf Blade */}
              <path
                d="M 0,0 C 13,22 17,55 0,85 C -17,55 -13,22 0,0 Z"
                fill="url(#leafGradReal)"
                stroke="#1e7e53"
                strokeWidth="0.8"
              />
              {/* Central Midrib Vein */}
              <path d="M 0,0 L 0,78" stroke="#38b000" strokeWidth="1" opacity="0.65" />
              {/* Lateral Vein Lines */}
              <path
                d="
                  M 0,20 L 7,27 M 0,20 L -7,27 
                  M 0,38 L 8,46 M 0,38 L -8,46 
                  M 0,55 L 7,63 M 0,55 L -7,63
                "
                stroke="#38b000"
                strokeWidth="0.6"
                opacity="0.45"
              />
            </g>

            {/* Reusable Marigold Blossom Motif */}
            <g id="gendaFlower">
              <circle cx="0" cy="0" r="13" fill="url(#marigoldPomPom)" />
              {/* Scalloped Petal Layers */}
              {Array.from({ length: 8 }).map((_, i) => {
                const rot = (i * 360) / 8;
                return (
                  <circle
                    key={i}
                    cx="0"
                    cy="-6"
                    r="4"
                    fill="url(#marigoldOrange)"
                    transform={`rotate(${rot})`}
                    opacity="0.85"
                  />
                );
              })}
              <circle cx="0" cy="0" r="4.5" fill="#ffe66d" />
            </g>

            {/* Reusable Golden Hanging Ghanti (Bell) with Chain */}
            <g id="hangingBell">
              {/* Delicate Chain Links */}
              <line x1="0" y1="0" x2="0" y2="28" stroke="url(#antiqueBrassBell)" strokeWidth="1.2" strokeDasharray="3 2" />
              {/* Bell Cap */}
              <ellipse cx="0" cy="28" rx="3" ry="1.5" fill="#d4af37" />
              {/* Bell Body */}
              <path
                d="M -6,40 C -6,33 -3,30 0,30 C 3,30 6,33 6,40 C 7,42 9,44 10,46 L -10,46 C -9,44 -7,42 -6,40 Z"
                fill="url(#antiqueBrassBell)"
                stroke="#543806"
                strokeWidth="0.6"
              />
              {/* Bell Clapper */}
              <circle cx="0" cy="48" r="2" fill="#fff3b0" />
            </g>

            {/* Hanging Brass Deepa with Flame */}
            <g id="hangingDiya">
              {/* Chain */}
              <line x1="0" y1="0" x2="0" y2="44" stroke="url(#antiqueBrassBell)" strokeWidth="1.2" strokeDasharray="3 2" />
              {/* Small Diya Bowl */}
              <ellipse cx="0" cy="45" rx="12" ry="4" fill="#3d2105" />
              <path
                d="M -12,45 C -12,54 12,54 12,45 Z"
                fill="url(#antiqueBrassBell)"
                stroke="#634208"
                strokeWidth="0.75"
              />
              {/* Glowing Tiny Flame */}
              <ellipse cx="0" cy="41" rx="2.5" ry="5" fill="#ffdd55" />
              <ellipse cx="0" cy="41" rx="1.2" ry="3" fill="#ffffff" />
              {/* Micro Glow */}
              <circle cx="0" cy="41" r="9" fill="#ff7700" opacity="0.3" filter="blur(3px)" />
            </g>
          </defs>

          {/* 1. Main Catenary Swags (Braided Sacred Rope) */}
          <path
            d="
              M -20,8 
              Q 150,38 320,8 
              Q 470,38 600,8 
              Q 730,38 880,8 
              Q 1050,38 1220,8
            "
            fill="none"
            stroke="#780016"
            strokeWidth="3.2"
          />
          <path
            d="
              M -20,8 
              Q 150,38 320,8 
              Q 470,38 600,8 
              Q 730,38 880,8 
              Q 1050,38 1220,8
            "
            fill="none"
            stroke="url(#antiqueBrassBell)"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />

          {/* 2. Hanging Mango Leaves in Cascades */}
          {[
            { x: 50, y: 16, rot: -8 },
            { x: 95, y: 24, rot: -4 },
            { x: 150, y: 28, rot: 0 },
            { x: 205, y: 24, rot: 4 },
            { x: 250, y: 16, rot: 8 },
            { x: 380, y: 20, rot: -6 },
            { x: 440, y: 27, rot: -2 },
            { x: 500, y: 28, rot: 0 },
            { x: 560, y: 27, rot: 2 },
            { x: 620, y: 20, rot: 6 },
            { x: 740, y: 20, rot: -6 },
            { x: 800, y: 27, rot: -2 },
            { x: 860, y: 28, rot: 0 },
            { x: 920, y: 27, rot: 2 },
            { x: 980, y: 20, rot: 6 },
            { x: 1100, y: 20, rot: -4 },
            { x: 1150, y: 14, rot: 6 },
          ].map((leaf, idx) => (
            <g
              key={`leaf-${idx}`}
              transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rot})`}
            >
              <use href="#realisticMangoLeaf" />
            </g>
          ))}

          {/* 3. Lush Marigold Blossom Clusters Along the Arch */}
          {[
            { x: 10, y: 10 },
            { x: 75, y: 20 },
            { x: 150, y: 28 },
            { x: 225, y: 20 },
            { x: 320, y: 10 },
            { x: 410, y: 23 },
            { x: 500, y: 28 },
            { x: 590, y: 23 },
            { x: 680, y: 10 },
            { x: 770, y: 23 },
            { x: 860, y: 28 },
            { x: 950, y: 23 },
            { x: 1040, y: 10 },
            { x: 1130, y: 22 },
            { x: 1200, y: 10 },
          ].map((flower, idx) => (
            <g key={`flower-${idx}`} transform={`translate(${flower.x}, ${flower.y})`}>
              <use href="#gendaFlower" />
            </g>
          ))}

          {/* 4. Elegant Hanging Temple Bells with Chains */}
          {[
            { x: 150, y: 28 },
            { x: 320, y: 12 },
            { x: 500, y: 28 },
            { x: 680, y: 12 },
            { x: 860, y: 28 },
            { x: 1040, y: 12 },
          ].map((bell, idx) => (
            <g key={`bell-${idx}`} transform={`translate(${bell.x}, ${bell.y})`}>
              <use href="#hangingBell" />
            </g>
          ))}

          {/* 5. Suspended Traditional Brass Hanging Deepas (2 Flanking Diyas) */}
          <g transform="translate(45, 12)">
            <use href="#hangingDiya" />
          </g>
          <g transform="translate(1155, 12)">
            <use href="#hangingDiya" />
          </g>
        </svg>
      </div>
    </div>
  );
};
