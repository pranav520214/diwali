'use client';

import React, { useState } from 'react';
import { triggerDiwaliConfetti } from '@/lib/confetti';
import { audioEngine } from '@/lib/audioEngine';
import { Flame, Sparkles } from 'lucide-react';

interface DiyaStageProps {
  onDiyaClick?: (count: number) => void;
}

/**
 * Centerpiece Majestic Brass Diya (Peetal ki Deep)
 * - Handcrafted realistic cast brass metallic surface & reflections
 * - Stepped royal pedestal with beaded collar & etched lotus reliefs
 * - Concentric clarified butter (ghee) pool with liquid flame reflections
 * - Physically authentic 5-layer living flame with cerulean blue combustion core
 * - Polished dark marble ground reflection
 * - Haptic/interactive kindling surge with temple bell chime & particle bursts
 */
export const DiyaStage: React.FC<DiyaStageProps> = ({ onDiyaClick }) => {
  const [personalLitCount, setPersonalLitCount] = useState<number>(1);
  const [isSurging, setIsSurging] = useState<boolean>(false);
  const [pulseKey, setPulseKey] = useState<number>(0);

  const handleLightDiya = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 3) / window.innerHeight;

    const nextCount = personalLitCount + 1;
    setPersonalLitCount(nextCount);
    setIsSurging(true);
    setPulseKey((prev) => prev + 1);

    // Auspicious high-frequency temple bell chime (1046.5 Hz - High C)
    audioEngine.playBellChime(1046.5);

    // Golden sparks & confetti burst
    triggerDiwaliConfetti(x, y);

    if (onDiyaClick) {
      onDiyaClick(nextCount);
    }

    setTimeout(() => {
      setIsSurging(false);
    }, 700);
  };

  return (
    <section className="relative z-20 flex flex-col items-center justify-center my-1 select-none">
      {/* Volumetric Expanding Gold Ring on Surge */}
      {isSurging && (
        <div
          key={pulseKey}
          className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffd700] animate-ping opacity-60"
          style={{ width: '320px', height: '320px' }}
        />
      )}

      {/* Centerpiece Clickable Diya Unit */}
      <div
        onClick={handleLightDiya}
        className="relative group cursor-pointer p-2 sm:p-4 transition-transform duration-300 active:scale-95 hover:scale-[1.02]"
        role="button"
        tabIndex={0}
        aria-label="Light the sacred Royal Diya"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleLightDiya(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }}
      >
        {/* 1. Volumetric Candlelight Halo Cast on Background */}
        <div
          className={`absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] pointer-events-none transition-all duration-700 ${
            isSurging
              ? 'w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-t from-[#ff5500]/70 via-[#ffd700]/50 to-white/30 opacity-90'
              : 'w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-t from-[#ff6600]/40 via-[#ffa200]/25 to-transparent opacity-75 group-hover:opacity-90'
          }`}
        />

        {/* 2. Master Sculpted Brass Diya SVG */}
        <div className="relative w-64 sm:w-80 md:w-96 h-48 sm:h-56 md:h-64 flex items-center justify-center">
          <svg
            viewBox="0 0 320 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
          >
            <defs>
              {/* Antique Cast Brass Metallic Surface Gradients */}
              <linearGradient id="brassPedestalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#422507" />
                <stop offset="15%" stopColor="#875816" />
                <stop offset="35%" stopColor="#d4af37" />
                <stop offset="55%" stopColor="#fff8cf" />
                <stop offset="75%" stopColor="#c59b27" />
                <stop offset="90%" stopColor="#7a4d10" />
                <stop offset="100%" stopColor="#301902" />
              </linearGradient>

              <linearGradient id="brassBowlBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3d2105" />
                <stop offset="18%" stopColor="#784a0e" />
                <stop offset="38%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#fff4b8" />
                <stop offset="68%" stopColor="#d4af37" />
                <stop offset="85%" stopColor="#875816" />
                <stop offset="100%" stopColor="#2e1602" />
              </linearGradient>

              <linearGradient id="brassRimLipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8c6117" />
                <stop offset="30%" stopColor="#ffd700" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#734b09" />
              </linearGradient>

              {/* Translucent Ghee / Mustard Oil Reservoir */}
              <radialGradient id="gheeReservoirGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffb703" />
                <stop offset="45%" stopColor="#e85d04" />
                <stop offset="80%" stopColor="#782902" />
                <stop offset="100%" stopColor="#2b0f02" />
              </radialGradient>

              {/* Living Flame Core Gradients */}
              <radialGradient id="flameIncandescentCore" cx="50%" cy="80%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="20%" stopColor="#fff8b5" />
                <stop offset="45%" stopColor="#ffb703" />
                <stop offset="75%" stopColor="#fb8500" />
                <stop offset="95%" stopColor="#d90429" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Blue Oxygen-Rich Combustion Core at Wick Base */}
              <radialGradient id="flameCeruleanBase" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#4361ee" stopOpacity="0.7" />
                <stop offset="85%" stopColor="#3a0ca3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Polished Marble Floor Reflection Gradient */}
              <linearGradient id="marbleFloorReflection" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffaa00" stopOpacity="0.38" />
                <stop offset="40%" stopColor="#c59b27" stopOpacity="0.18" />
                <stop offset="80%" stopColor="#3d2105" stopOpacity="0.05" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>

              {/* Blur Filters */}
              <filter id="flameSoftCorona" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
            </defs>

            {/* --- 1. POLISHED MARBLE FLOOR REFLECTION --- */}
            <g opacity={isSurging ? 0.9 : 0.65} className="transition-opacity duration-500">
              {/* Floor ambient puddle */}
              <ellipse cx="160" cy="228" rx="100" ry="18" fill="url(#marbleFloorReflection)" />
              {/* Inverted reflection of base */}
              <ellipse cx="160" cy="232" rx="46" ry="7" fill="#875816" opacity="0.3" />
              {/* Inverted micro flame shimmer reflection */}
              <ellipse cx="160" cy="226" rx="28" ry="4" fill="#ffd700" opacity="0.45" />
            </g>

            {/* --- 2. STEPPED ROYAL BRASS PEDESTAL (PEETHAM) --- */}
            {/* Bottom Plinth Step */}
            <ellipse cx="160" cy="216" rx="58" ry="12" fill="url(#brassPedestalGrad)" stroke="#2b1502" strokeWidth="1.2" />
            <path
              d="M 102,216 C 102,222 218,222 218,216"
              fill="none"
              stroke="#fff4b8"
              strokeWidth="0.8"
              opacity="0.6"
            />

            {/* Middle Chamfered Collar */}
            <ellipse cx="160" cy="208" rx="42" ry="8" fill="url(#brassPedestalGrad)" stroke="#381c03" strokeWidth="1" />

            {/* Beaded Pearls along Pedestal Step */}
            {Array.from({ length: 11 }).map((_, i) => {
              const x = 124 + i * 7.2;
              const y = 209 + Math.sin((i / 10) * Math.PI) * 4;
              return (
                <circle
                  key={`pedestal-bead-${i}`}
                  cx={x}
                  cy={y}
                  r="1.8"
                  fill="#fff4b8"
                  stroke="#5e3806"
                  strokeWidth="0.5"
                />
              );
            })}

            {/* Fluted Waist Pillar (Stambha) */}
            <path
              d="M 132,207 C 138,192 144,182 144,174 L 176,174 C 176,182 182,192 188,207 Z"
              fill="url(#brassPedestalGrad)"
              stroke="#381c03"
              strokeWidth="1"
            />
            {/* Waist Highlights */}
            <line x1="160" y1="175" x2="160" y2="206" stroke="#fff4b8" strokeWidth="1.5" opacity="0.75" />

            {/* --- 3. MAIN BRASS OIL VESSEL (DEEP PATRA) --- */}
            {/* Main sweeping boat-shaped vessel bowl */}
            <path
              d="
                M 40,150 
                C 52,196 268,196 280,150 
                C 284,142 274,138 266,140 
                C 220,155 100,155 54,140 
                C 46,138 36,142 40,150 Z
              "
              fill="url(#brassBowlBodyGrad)"
              stroke="#4a2c07"
              strokeWidth="1.6"
            />

            {/* Traditional Etched Petal Reliefs Along Front Belly */}
            <path
              d="M 68,162 Q 95,188 122,162 Q 160,192 198,162 Q 225,188 252,162"
              fill="none"
              stroke="url(#brassRimLipGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Front Medallion: Embossed Royal Lotus Rosette */}
            <g transform="translate(160, 178)">
              <circle cx="0" cy="0" r="7" fill="#fff4b8" stroke="#69440c" strokeWidth="0.8" />
              <path
                d="M 0,-8 C -3.5,-5 -3.5,5 0,8 C 3.5,5 3.5,-5 0,-8 Z"
                fill="#d4af37"
              />
              <path
                d="M -8,0 C -5,-3.5 5,-3.5 8,0 C 5,3.5 -5,3.5 -8,0 Z"
                fill="#d4af37"
              />
              <circle cx="0" cy="0" r="2" fill="#301902" />
            </g>

            {/* Golden Ghee Reservoir Liquid Surface */}
            <ellipse
              cx="160"
              cy="146"
              rx="108"
              ry="18"
              fill="url(#gheeReservoirGrad)"
              stroke="url(#brassRimLipGrad)"
              strokeWidth="2.4"
            />

            {/* Concentric Golden Liquid Meniscus Reflection */}
            <ellipse
              cx="160"
              cy="147"
              rx="92"
              ry="12"
              fill="#ffaa00"
              opacity="0.45"
            />

            {/* High-Specularity Brass Lip Beaded Rim */}
            {Array.from({ length: 17 }).map((_, i) => {
              const x = 64 + i * 12;
              const y = 149 + Math.sin((i / 16) * Math.PI) * 12.5;
              return (
                <circle
                  key={`rim-bead-${i}`}
                  cx={x}
                  cy={y}
                  r="2.2"
                  fill="#fffadc"
                  stroke="#634208"
                  strokeWidth="0.75"
                />
              );
            })}

            {/* Cotton Wick (Rui ki Baati) Emerging at Center Spout */}
            <path
              d="M 160,154 Q 161,138 160,120"
              stroke="#fffbe6"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Charred Carbon Tip Glowing with Hot Smolder */}
            <circle cx="160" cy="119" r="2.8" fill="#1f1105" />
            <circle cx="160" cy="119" r="1.4" fill="#ff4500" />

            {/* --- 4. LIVING SACRED FLAME SYSTEM (AKHAND JYOTI) --- */}
            <g
              className={`transform origin-bottom transition-transform duration-300 ${
                isSurging ? 'scale-125 -translate-y-3' : 'animate-flame'
              }`}
              style={{ transformOrigin: '160px 120px' }}
            >
              {/* Volumetric Diffuse Orange/Crimson Halo */}
              <circle
                cx="160"
                cy="72"
                r="42"
                fill="#ff5500"
                opacity="0.35"
                filter="url(#flameSoftCorona)"
              />

              {/* Flame Outer Saffron Silhouette */}
              <path
                d="
                  M 160,120 
                  C 142,112 126,88 138,58 
                  C 146,38 160,10 160,0 
                  C 160,10 174,38 182,58 
                  C 194,88 178,112 160,120 Z
                "
                fill="url(#flameIncandescentCore)"
                filter="drop-shadow(0 0 14px #ff7700)"
              />

              {/* Radiant Golden Mantle */}
              <path
                d="
                  M 160,120 
                  C 147,114 136,94 145,68 
                  C 152,50 160,28 160,18 
                  C 160,28 168,50 175,68 
                  C 184,94 173,114 160,120 Z
                "
                fill="#ffdd00"
                opacity="0.9"
              />

              {/* Incandescent White-Hot Teardrop Heart */}
              <path
                d="
                  M 160,118 
                  C 152,114 146,102 150,84 
                  C 154,72 160,52 160,42 
                  C 160,52 166,72 170,84 
                  C 174,102 168,114 160,118 Z
                "
                fill="#ffffff"
                filter="drop-shadow(0 0 5px #ffffff)"
              />

              {/* Cerulean Blue Combustion Zone (Oxygen combustion at wick base) */}
              <ellipse cx="160" cy="116" rx="9" ry="4" fill="url(#flameCeruleanBase)" />
            </g>
          </svg>
        </div>

        {/* 3. Subtle Interactive Kindling Pill Hint */}
        <div className="flex flex-col items-center mt-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#180309]/80 border border-[#d4af37]/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)] group-hover:border-[#ffd700] transition-colors">
            <Flame className="w-3.5 h-3.5 text-[#ff8c00] fill-current animate-pulse" />
            <span className="text-[11px] sm:text-xs font-medium tracking-wide text-[#fae5b6]">
              Tap Flame to Stoke the Light
            </span>
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
          </div>

          {/* Sacred Flames Rekindled Count */}
          <div className="text-[10px] sm:text-[11px] text-[#f5dfb8]/75 mt-1 tracking-wider">
            Sacred Sparks Rekindled: <span className="font-semibold text-[#ffd700]">{personalLitCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
