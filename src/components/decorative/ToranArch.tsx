import React from 'react';

interface ToranProps {
  className?: string;
}

/**
 * Ornamental Toran Arch Component
 * Drapes across the top of the viewport with alternating mango leaves (aam ke patte),
 * golden tassels, and ripe marigold (genda) blossoms on a braided gold & crimson rope.
 */
export const ToranArch: React.FC<ToranProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none ${className}`}
      style={{ height: '140px' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Mango Leaf Shading */}
          <linearGradient id="toranLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#146C4E" />
            <stop offset="50%" stopColor="#0B4F3A" />
            <stop offset="100%" stopColor="#05291E" />
          </linearGradient>

          {/* Marigold Blossom Shading */}
          <radialGradient id="toranMarigold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD000" />
            <stop offset="45%" stopColor="#FF9E00" />
            <stop offset="90%" stopColor="#E85D04" />
            <stop offset="100%" stopColor="#993800" />
          </radialGradient>

          {/* Golden Rope Shimmer */}
          <linearGradient id="goldRopeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="25%" stopColor="#FFF4B8" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#FFF4B8" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          {/* Reusable Leaf Def */}
          <g id="toranLeaf">
            <path
              d="M 0,0 C 14,25 18,60 0,95 C -18,60 -14,25 0,0 Z"
              fill="url(#toranLeafGrad)"
              stroke="#259B73"
              strokeWidth="0.8"
            />
            <path d="M 0,0 L 0,85" stroke="#3AC796" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Reusable Marigold Def */}
          <g id="toranGenda">
            <circle cx="0" cy="0" r="14" fill="url(#toranMarigold)" />
            <circle cx="0" cy="0" r="10" fill="#FFB703" opacity="0.8" />
            <circle cx="0" cy="0" r="5" fill="#FFE066" />
          </g>
        </defs>

        {/* 1. Deep Drooping Catenary Arches (Braided Sacred Kalawa Thread) */}
        <path
          d="
            M 0,10 
            Q 120,45 240,10 
            Q 360,45 480,10 
            Q 600,45 720,10 
            Q 840,45 960,10 
            Q 1080,45 1200,10 
            Q 1320,45 1440,10
          "
          fill="none"
          stroke="#9E0B28"
          strokeWidth="3.5"
        />
        <path
          d="
            M 0,10 
            Q 120,45 240,10 
            Q 360,45 480,10 
            Q 600,45 720,10 
            Q 840,45 960,10 
            Q 1080,45 1200,10 
            Q 1320,45 1440,10
          "
          fill="none"
          stroke="url(#goldRopeGrad)"
          strokeWidth="1.8"
          strokeDasharray="5 3"
        />

        {/* 2. Hanging Mango Leaves along Arch Peaks and Low Troughs */}
        {[
          60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960,
          1020, 1080, 1140, 1200, 1260, 1320, 1380
        ].map((x, i) => {
          // Calculate approx y on the quadratic curve
          const segmentX = x % 240;
          const normalized = (segmentX - 120) / 120;
          const y = 40 - Math.pow(normalized, 2) * 30;

          return (
            <g
              key={`leaf-${i}`}
              transform={`translate(${x}, ${y}) rotate(${((x % 50) - 25) * 0.4})`}
              className="origin-top"
            >
              <use href="#toranLeaf" />
            </g>
          );
        })}

        {/* 3. Auspicious Marigold Blossoms at Hanging Joints */}
        {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440].map((x, i) => {
          const y = (x % 240 === 0) ? 10 : 38;
          return (
            <g key={`flower-${i}`} transform={`translate(${x}, ${y})`}>
              <use href="#toranGenda" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
