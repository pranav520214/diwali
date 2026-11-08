import React from 'react';

interface JharokhaFrameProps {
  className?: string;
  opacity?: number;
}

/**
 * Rajasthani / Mughal Jharokha Archway Frame
 * Classic 7-cusp multi-foil arch with kalash finial,
 * jaali lattice borders, and subtle gold filigree linework.
 */
export const JharokhaFrame: React.FC<JharokhaFrameProps> = ({
  className = '',
  opacity = 0.25,
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
          <linearGradient id="jharokhaGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#9E721D" />
            <stop offset="100%" stopColor="#3A030C" />
          </linearGradient>

          <pattern id="jharokhaJaali" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 20,0 L 40,20 L 20,40 L 0,20 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle cx="20" cy="20" r="3" fill="#FFB703" opacity="0.3" />
          </pattern>
        </defs>

        {/* Spandrel Jaali Infill (Corner Tracery) */}
        <rect x="0" y="0" width="1000" height="800" fill="url(#jharokhaJaali)" mask="url(#archMask)" opacity="0.4" />

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
          stroke="url(#jharokhaGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Inner Arch Accent Beading */}
        <path
          d="
            M 90,800 
            L 90,350 
            C 90,300 140,265 175,290 
            C 200,245 260,230 295,265 
            C 330,210 400,195 440,235 
            C 460,200 480,150 500,110 
            C 520,150 540,200 560,235 
            C 600,195 670,210 705,265 
            C 740,230 800,245 825,290 
            C 860,265 910,300 910,350 
            L 910,800
          "
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />

        {/* Traditional Kalash Finial at Keel Apex */}
        <g transform="translate(500, 65)">
          <path
            d="M -12,0 C -12,-16 0,-25 0,-32 C 0,-25 12,-16 12,0 Z"
            fill="#FFF4B8"
            stroke="#D4AF37"
            strokeWidth="1"
          />
          <circle cx="0" cy="4" r="7" fill="#D4AF37" />
          <circle cx="0" cy="-34" r="3.5" fill="#FFE066" />
        </g>
      </svg>
    </div>
  );
};
