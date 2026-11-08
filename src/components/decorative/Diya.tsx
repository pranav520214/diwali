import React from 'react';

interface DiyaProps {
  isLit?: boolean;
  size?: number;
  className?: string;
  flameIntensity?: number; // 0.8 to 1.3
  onToggleLight?: () => void;
}

/**
 * Authentic Multi-Tiered Indian Diya Component
 * Includes Mitti (terracotta) base, Peetal (brass) rim,
 * Tel Kund (oil reservoir), charred wick, and quad-layer dynamic flame.
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
      aria-label={isLit ? "Extinguish or adjust Diya flame" : "Light the sacred Diya"}
    >
      <svg
        viewBox="0 0 200 230"
        width="100%"
        height="100%"
        className="overflow-visible"
      >
        <defs>
          {/* Terracotta Clay Gradient */}
          <radialGradient id="clayBaseGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#8C4421" />
            <stop offset="60%" stopColor="#5E2810" />
            <stop offset="100%" stopColor="#381507" />
          </radialGradient>

          {/* Brass Rim Shimmer */}
          <linearGradient id="brassRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#876512" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF4B8" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#876512" />
          </linearGradient>

          {/* Oil Reservoir Liquid */}
          <radialGradient id="oilPoolGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#5E320A" />
            <stop offset="70%" stopColor="#301502" />
            <stop offset="100%" stopColor="#170901" />
          </radialGradient>

          {/* Flame Gradients */}
          {/* 1. Core White-Cyan */}
          <linearGradient id="flameCoreGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E0F7FA" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFEE0" />
          </linearGradient>

          {/* 2. Inner Amber Mantle */}
          <linearGradient id="flameInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFB703" />
            <stop offset="60%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#FFF4B8" />
          </linearGradient>

          {/* 3. Mid Saffron Body */}
          <linearGradient id="flameMidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E85D04" />
            <stop offset="50%" stopColor="#FF7700" />
            <stop offset="100%" stopColor="#FFA033" />
          </linearGradient>

          {/* 4. Outer Crimson Halo */}
          <radialGradient id="flameHaloGrad" cx="50%" cy="65%" r="55%">
            <stop offset="0%" stopColor="#FF7700" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#DE1360" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#580614" stopOpacity="0" />
          </radialGradient>

          {/* Ground Caustic Glow */}
          <radialGradient id="groundGlowGrad" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FFA033" stopOpacity={isLit ? 0.7 * flameIntensity : 0.05} />
            <stop offset="50%" stopColor="#DE1360" stopOpacity={isLit ? 0.3 * flameIntensity : 0} />
            <stop offset="100%" stopColor="#120208" stopOpacity="0" />
          </radialGradient>

          {/* Blur Filters */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
          <filter id="coronaBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
          </filter>
        </defs>

        {/* Ambient Ground Glow Pool */}
        <ellipse
          cx="100"
          cy="200"
          rx="90"
          ry="25"
          fill="url(#groundGlowGrad)"
          className="transition-all duration-700"
        />

        {/* --- CLAY BASE & VESSEL --- */}
        {/* Terracotta Vessel Body */}
        <path
          d="M 30,150 C 30,195 70,210 100,210 C 130,210 170,195 170,150 C 170,140 160,135 150,135 C 130,135 70,135 50,135 C 40,135 30,140 30,150 Z"
          fill="url(#clayBaseGrad)"
          stroke="#4A1E0D"
          strokeWidth="1.5"
        />

        {/* Base Highlights & Relief Curves */}
        <path
          d="M 45,160 C 55,188 80,198 100,198 C 120,198 145,188 155,160"
          fill="none"
          stroke="#994D26"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Oil Reservoir Surface (Tel Kund) */}
        <ellipse
          cx="100"
          cy="142"
          rx="58"
          ry="14"
          fill="url(#oilPoolGrad)"
          stroke="#2A0F02"
          strokeWidth="1"
        />

        {/* Dynamic Oil Reflection Wave when Lit */}
        {isLit && (
          <ellipse
            cx="100"
            cy="141"
            rx="24"
            ry="6"
            fill="#FFA033"
            opacity="0.35"
            filter="url(#softGlow)"
          />
        )}

        {/* Polished Brass Filigree Rim */}
        <ellipse
          cx="100"
          cy="138"
          rx="66"
          ry="11"
          fill="none"
          stroke="url(#brassRimGrad)"
          strokeWidth="3.5"
        />

        {/* Decorative Kundan Rim Beads */}
        {[38, 52, 70, 90, 100, 110, 130, 148, 162].map((x, idx) => (
          <circle
            key={idx}
            cx={x}
            cy={138 + Math.sin((x / 200) * Math.PI) * 5}
            r="2"
            fill="#FFF4B8"
            stroke="#876512"
            strokeWidth="0.6"
          />
        ))}

        {/* Cotton Wick (Rui ki Baati) */}
        <path
          d="M 100,144 Q 99,132 101,118"
          fill="none"
          stroke="#FAF2DE"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Charred Tip */}
        <circle cx="101" cy="117" r="2.2" fill="#1C120C" />

        {/* --- LIVING FLAME SYSTEM (When Lit) --- */}
        {isLit && (
          <g className="diya-flame-system origin-bottom" style={{ transformOrigin: '101px 118px' }}>
            {/* Outer Diffuse Corona Glow */}
            <circle
              cx="101"
              cy="75"
              r="48"
              fill="url(#flameHaloGrad)"
              filter="url(#coronaBlur)"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />

            {/* Mid Saffron Flame */}
            <path
              d="M 101,118 C 88,112 80,92 88,72 C 94,56 101,32 101,24 C 101,32 108,56 114,72 C 122,92 114,112 101,118 Z"
              fill="url(#flameMidGrad)"
              filter="url(#softGlow)"
              opacity="0.85"
            />

            {/* Inner Vibrant Flame Mantle */}
            <path
              d="M 101,118 C 91,114 85,96 91,78 C 96,64 101,44 101,38 C 101,44 106,64 111,78 C 117,96 111,114 101,118 Z"
              fill="url(#flameInnerGrad)"
            />

            {/* Incandescent Core Flame */}
            <path
              d="M 101,117 C 95,114 93,103 96,90 C 98,81 101,65 101,60 C 101,65 104,81 106,90 C 109,103 107,114 101,117 Z"
              fill="url(#flameCoreGrad)"
            />

            {/* Electric Center Spark */}
            <ellipse
              cx="101"
              cy="98"
              rx="2.5"
              ry="8"
              fill="#FFFFFF"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
