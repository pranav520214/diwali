import React from 'react';

interface RangoliProps {
  size?: number;
  className?: string;
  glowIntensity?: number;
  spinDurationSeconds?: number;
}

/**
 * Concentric Sacred Rangoli & Geometric Mandala Component
 * Features an 8-petal central Padma (lotus), 16-point starburst ring,
 * and decorative filigree accents for rotational parallax & glowing celebration.
 */
export const RangoliMandala: React.FC<RangoliProps> = ({
  size = 500,
  className = '',
  glowIntensity = 1,
  spinDurationSeconds = 60,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="-250 -250 500 500"
        width="100%"
        height="100%"
        className="overflow-visible"
      >
        <defs>
          {/* Radiant Rangoli Underglow */}
          <radialGradient id="rangoliAura" cx="0%" cy="0%" r="50%">
            <stop offset="0%" stopColor="#FFA033" stopOpacity={0.6 * glowIntensity} />
            <stop offset="45%" stopColor="#E85D04" stopOpacity={0.3 * glowIntensity} />
            <stop offset="75%" stopColor="#DE1360" stopOpacity={0.15 * glowIntensity} />
            <stop offset="100%" stopColor="#120208" stopOpacity={0} />
          </radialGradient>

          {/* Gold Stroke Gradient */}
          <linearGradient id="goldRangoliStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF4B8" />
            <stop offset="100%" stopColor="#9E721D" />
          </linearGradient>

          {/* Marigold Petal Fill */}
          <linearGradient id="marigoldFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB703" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E85D04" stopOpacity="0.4" />
          </linearGradient>

          {/* Rani Pink Petal Fill */}
          <linearGradient id="raniPetalFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DE1360" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#580614" stopOpacity="0.3" />
          </linearGradient>

          {/* Reusable Outer Petal Shape */}
          <g id="outerPetal">
            <path
              d="M 0,-220 C 18,-185 24,-140 0,-110 C -24,-140 -18,-185 0,-220 Z"
              fill="url(#raniPetalFill)"
              stroke="url(#goldRangoliStroke)"
              strokeWidth="1.2"
            />
            <circle cx="0" cy="-205" r="3" fill="#FFF4B8" />
            <path d="M 0,-110 L 0,-190" stroke="#FFF4B8" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
          </g>

          {/* Reusable Middle Lotus Petal */}
          <g id="lotusPetal">
            <path
              d="M 0,-110 C 26,-80 26,-35 0,0 C -26,-35 -26,-80 0,-110 Z"
              fill="url(#marigoldFill)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <path d="M 0,0 L 0,-95" stroke="#FFF4B8" strokeWidth="1" opacity="0.7" />
            <circle cx="0" cy="-90" r="2.5" fill="#FFE066" />
          </g>
        </defs>

        {/* Ambient Luminescent Underglow */}
        <circle cx="0" cy="0" r="240" fill="url(#rangoliAura)" />

        {/* --- ROTATING SLOW OUTER RING (Clockwise) --- */}
        <g
          className="rangoli-outer-ring"
          style={{
            animation: `spin ${spinDurationSeconds}s linear infinite`,
            transformOrigin: '0 0',
          }}
        >
          {/* Concentric Guide Circles */}
          <circle cx="0" cy="0" r="225" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />
          <circle cx="0" cy="0" r="215" fill="none" stroke="#FFB703" strokeWidth="1.5" opacity="0.6" />
          <circle cx="0" cy="0" r="130" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />

          {/* 16 Radially Distributed Petals */}
          {Array.from({ length: 16 }).map((_, i) => (
            <use
              key={`petal-16-${i}`}
              href="#outerPetal"
              transform={`rotate(${i * 22.5})`}
            />
          ))}

          {/* Intermediate Diya Motifs around Outer Rim */}
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={`rim-diya-${i}`} transform={`rotate(${i * 45}) translate(0, -230)`}>
              <path
                d="M -7,4 C -7,10 0,12 0,12 C 0,12 7,10 7,4 Z"
                fill="#8C4421"
                stroke="#D4AF37"
                strokeWidth="0.8"
              />
              <path
                d="M 0,3 C -2,0 0,-4 0,-4 C 0,-4 2,0 0,3 Z"
                fill="#FFB703"
              />
            </g>
          ))}
        </g>

        {/* --- COUNTER-ROTATING MIDDLE LOTUS (Anti-Clockwise) --- */}
        <g
          className="rangoli-middle-lotus"
          style={{
            animation: `spin-reverse ${spinDurationSeconds * 0.75}s linear infinite`,
            transformOrigin: '0 0',
          }}
        >
          {/* Concentric Inter-Ring */}
          <circle cx="0" cy="0" r="115" fill="none" stroke="#FFF4B8" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />

          {/* 8 Sacred Padma (Lotus) Petals */}
          {Array.from({ length: 8 }).map((_, i) => (
            <use
              key={`lotus-8-${i}`}
              href="#lotusPetal"
              transform={`rotate(${i * 45})`}
            />
          ))}

          {/* Inner 8 Interlaced Petals */}
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={`inner-petal-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
              <path
                d="M 0,-70 C 14,-50 14,-25 0,0 C -14,-25 -14,-50 0,-70 Z"
                fill="rgba(222, 19, 96, 0.45)"
                stroke="#FFB703"
                strokeWidth="1"
              />
            </g>
          ))}
        </g>

        {/* --- STATIC SACRED CENTER (Bindu & Core Resting Plate) --- */}
        <g className="rangoli-center-hub">
          <circle cx="0" cy="0" r="45" fill="#2A0817" stroke="#D4AF37" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="35" fill="none" stroke="#FFB703" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="22" fill="#580614" stroke="#FFF4B8" strokeWidth="1" />
          {/* Sacred Bindu Point */}
          <circle cx="0" cy="0" r="6" fill="#FFF4B8" />
        </g>
      </svg>
    </div>
  );
};
