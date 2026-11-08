import React from 'react';

interface DiyaProps {
  isLit?: boolean;
  size?: number;
  className?: string;
  flameIntensity?: number;
  onToggleLight?: () => void;
}

/**
 * Authentic Handcrafted Royal Brass Diya Component
 * Includes stepped brass pedestal, fluted collar, etched lotus bowl,
 * clarified ghee pool, cotton wick, and 5-tier living flame.
 */
export const Diya: React.FC<DiyaProps> = ({
  isLit = true,
  size = 140,
  className = '',
  flameIntensity = 1,
  onToggleLight,
}) => {
  return (
    <div
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      style={{ width: size, height: size * 1.15 }}
      onClick={onToggleLight}
      role="button"
      tabIndex={0}
      aria-label={isLit ? 'Extinguish or adjust Diya flame' : 'Light the sacred Diya'}
    >
      <svg
        viewBox="0 0 200 230"
        width="100%"
        height="100%"
        className="overflow-visible drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Antique Brass Surface */}
          <linearGradient id="compBrassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#422507" />
            <stop offset="25%" stopColor="#875816" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="70%" stopColor="#fff8cf" />
            <stop offset="85%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#301902" />
          </linearGradient>

          {/* Golden Ghee Pool */}
          <radialGradient id="compGheeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb703" />
            <stop offset="50%" stopColor="#e85d04" />
            <stop offset="85%" stopColor="#782902" />
            <stop offset="100%" stopColor="#2b0f02" />
          </radialGradient>

          {/* Flame Gradients */}
          <radialGradient id="compFlameCore" cx="50%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fff275" />
            <stop offset="65%" stopColor="#ff9900" />
            <stop offset="90%" stopColor="#ff4500" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Caustic Ground Glow */}
          <radialGradient id="compGroundGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffaa00" stopOpacity={isLit ? 0.6 * flameIntensity : 0.05} />
            <stop offset="60%" stopColor="#e85d04" stopOpacity={isLit ? 0.25 * flameIntensity : 0} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ambient Floor Glow */}
        <ellipse cx="100" cy="208" rx="85" ry="16" fill="url(#compGroundGlow)" />

        {/* Stepped Pedestal Base */}
        <ellipse cx="100" cy="198" rx="48" ry="10" fill="url(#compBrassGrad)" stroke="#2b1502" strokeWidth="1" />
        <ellipse cx="100" cy="192" rx="34" ry="6" fill="url(#compBrassGrad)" />

        {/* Fluted Waist */}
        <path d="M 78,192 C 82,178 86,170 86,162 L 114,162 C 114,170 118,178 122,192 Z" fill="url(#compBrassGrad)" />

        {/* Vessel Bowl */}
        <path
          d="M 28,142 C 38,180 162,180 172,142 C 176,134 168,131 162,133 C 130,144 70,144 38,133 C 32,131 24,134 28,142 Z"
          fill="url(#compBrassGrad)"
          stroke="#422507"
          strokeWidth="1.2"
        />

        {/* Etched Relief along front */}
        <path
          d="M 45,152 Q 72,172 100,152 Q 128,172 155,152"
          fill="none"
          stroke="#fff4b8"
          strokeWidth="1.2"
          opacity="0.75"
        />

        {/* Ghee Pool Surface */}
        <ellipse cx="100" cy="138" rx="68" ry="12" fill="url(#compGheeGrad)" stroke="#ffd700" strokeWidth="1.5" />

        {/* Rim Beads */}
        {[36, 50, 68, 86, 100, 114, 132, 150, 164].map((x, idx) => (
          <circle key={idx} cx={x} cy={138 + Math.sin((x / 200) * Math.PI) * 5} r="1.8" fill="#fff8cf" stroke="#543706" strokeWidth="0.5" />
        ))}

        {/* Cotton Wick */}
        <path d="M 100,142 Q 101,130 100,118" stroke="#fffbe6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="117" r="2" fill="#1f1105" />

        {/* Flame */}
        {isLit && (
          <g className="animate-flame" style={{ transformOrigin: '100px 118px' }}>
            <circle cx="100" cy="78" r="32" fill="#ff7700" opacity="0.3" filter="blur(8px)" />
            <path
              d="M 100,118 C 86,110 76,90 84,68 C 90,52 100,30 100,20 C 100,30 110,52 116,68 C 124,90 114,110 100,118 Z"
              fill="url(#compFlameCore)"
              filter="drop-shadow(0 0 10px #ff9000)"
            />
            <path
              d="M 100,116 C 93,112 88,98 92,80 C 95,68 100,50 100,42 C 100,50 105,68 108,80 C 112,98 107,112 100,116 Z"
              fill="#ffffff"
              opacity="0.95"
            />
            <ellipse cx="100" cy="115" rx="7" ry="3" fill="#4361ee" opacity="0.85" />
          </g>
        )}
      </svg>
    </div>
  );
};
