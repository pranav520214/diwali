'use client';

import React, { useState } from 'react';
import { triggerDiwaliConfetti } from '@/lib/confetti';
import { audioEngine } from '@/lib/audioEngine';
import { Flame, Sparkles } from 'lucide-react';

interface DiyaStageProps {
  onDiyaClick?: (count: number) => void;
}

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

    // Audio chime feedback
    audioEngine.playBellChime(1046.5); // High C chime

    // Particle burst
    triggerDiwaliConfetti(x, y);

    if (onDiyaClick) {
      onDiyaClick(nextCount);
    }

    setTimeout(() => {
      setIsSurging(false);
    }, 600);
  };

  return (
    <section className="relative z-20 flex flex-col items-center justify-center my-4 select-none">
      {/* Expanding shockwave ring on surge */}
      {isSurging && (
        <div
          key={pulseKey}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ffd700] animate-ping opacity-75"
          style={{ width: '280px', height: '280px' }}
        />
      )}

      {/* Centerpiece Clickable Diya Unit */}
      <div
        onClick={handleLightDiya}
        className="relative group cursor-pointer p-4 transition-transform duration-300 active:scale-95 hover:scale-105"
        role="button"
        tabIndex={0}
        aria-label="Light the sacred Diwali Diya"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleLightDiya(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }}
      >
        {/* Ambient Warm Floor Reflection Glow */}
        <div
          className={`absolute left-1/2 bottom-2 -translate-x-1/2 rounded-full blur-2xl transition-all duration-500 ${
            isSurging
              ? 'bg-[#ff7700] w-64 h-24 opacity-80'
              : 'bg-[#ff9900]/40 w-48 h-16 opacity-50 group-hover:opacity-75'
          }`}
        />

        {/* Outer Pulsing Flame Aura */}
        <div
          className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
            isSurging
              ? 'bg-gradient-to-t from-[#ff4500] via-[#ffd700] to-white w-36 h-48 opacity-90'
              : 'bg-gradient-to-t from-[#ff5500]/60 via-[#ffaa00]/40 to-transparent w-28 h-36 opacity-70 group-hover:opacity-90 animate-aura'
          }`}
        />

        {/* Sculpted SVG Diya with Terracotta & Brass Inlays */}
        <div className="relative w-64 sm:w-72 h-44 sm:h-48 flex items-center justify-center">
          <svg
            viewBox="0 0 280 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
          >
            <defs>
              {/* Flame Radial Gradient */}
              <radialGradient id="flameCoreGrad" cx="50%" cy="75%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#fff275" />
                <stop offset="55%" stopColor="#ff9900" />
                <stop offset="85%" stopColor="#ff4500" />
                <stop offset="100%" stopColor="rgba(217,4,41,0.2)" />
              </radialGradient>

              {/* Flame Blue Base */}
              <radialGradient id="flameBlueBase" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4361ee" />
                <stop offset="80%" stopColor="#3a0ca3" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Brass Diya Body Gradient */}
              <linearGradient id="brassBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5e1c07" />
                <stop offset="25%" stopColor="#a33a10" />
                <stop offset="50%" stopColor="#e86a17" />
                <stop offset="75%" stopColor="#b34410" />
                <stop offset="100%" stopColor="#4a1505" />
              </linearGradient>

              {/* Gold Rim Inlay */}
              <linearGradient id="goldInlayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#966a12" />
                <stop offset="30%" stopColor="#ffd700" />
                <stop offset="60%" stopColor="#fff4b8" />
                <stop offset="85%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#7a5408" />
              </linearGradient>
            </defs>

            {/* FLAME ASSEMBLY */}
            <g
              className={`transform origin-bottom transition-transform duration-300 ${
                isSurging ? 'scale-125 -translate-y-2' : 'animate-flame'
              }`}
            >
              {/* Outer Flame Contour */}
              <path
                d="M140 18 C158 55 178 90 168 122 C160 144 148 152 140 152 C132 152 120 144 112 122 C102 90 122 55 140 18 Z"
                fill="url(#flameCoreGrad)"
                filter="drop-shadow(0 0 16px #ff7700)"
              />

              {/* Inner White-Hot Flame Spear */}
              <path
                d="M140 45 C149 70 158 95 152 118 C148 132 143 138 140 138 C137 138 132 132 128 118 C122 95 131 70 140 45 Z"
                fill="#ffffff"
                opacity="0.9"
              />

              {/* Blue Flame Base (Oxygen rich combustion at wick base) */}
              <ellipse cx="140" cy="144" rx="8" ry="4" fill="url(#flameBlueBase)" opacity="0.85" />

              {/* Cotton Wick (Bati) */}
              <path
                d="M140 138 Q141 146 140 152"
                stroke="#2b1509"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </g>

            {/* DIYA OIL BOWL / TERRACOTTA BODY */}
            {/* Base Pedestal / Foot */}
            <ellipse cx="140" cy="180" rx="42" ry="9" fill="#300d04" stroke="#75240c" strokeWidth="1.5" />
            <path
              d="M102 178 Q140 186 178 178 L170 168 Q140 174 110 168 Z"
              fill="#521706"
            />

            {/* Main Terracotta Vessel Shell */}
            <path
              d="M40 140 C52 182 228 182 240 140 C242 134 235 132 228 134 C190 148 90 148 52 134 C45 132 38 134 40 140 Z"
              fill="url(#brassBodyGrad)"
              stroke="#8c2e0b"
              strokeWidth="1.5"
            />

            {/* Glowing Golden Oil Pool Surface */}
            <ellipse
              cx="140"
              cy="138"
              rx="92"
              ry="16"
              fill="#260b03"
              stroke="url(#goldInlayGrad)"
              strokeWidth="2.5"
            />

            {/* Ghee / Oil Liquid Reflection */}
            <ellipse
              cx="140"
              cy="140"
              rx="82"
              ry="11"
              fill="radial-gradient(circle, #ff9900 0%, #7a2603 70%, #260b03 100%)"
              opacity="0.9"
            />

            {/* Intricate Hand-Carved Royal Filigree & Beads on Rim */}
            {Array.from({ length: 15 }).map((_, i) => {
              const x = 58 + i * 11.8;
              const y = 142 + Math.sin((i / 14) * Math.PI) * 11;
              return (
                <circle
                  key={`bead-${i}`}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="#ffd700"
                  stroke="#8c6d1f"
                  strokeWidth="0.8"
                />
              );
            })}

            {/* Sacred Lotus Carving Center Medallion on Diya Front */}
            <g transform="translate(140, 162)">
              <circle cx="0" cy="0" r="6" fill="#ffd700" />
              <path
                d="M0 -7 C-3 -4 -3 4 0 7 C3 4 3 -4 0 -7 Z"
                fill="#fff275"
              />
              <path
                d="M-7 0 C-4 -3 4 -3 7 0 C4 3 -4 3 -7 0 Z"
                fill="#fff275"
              />
            </g>
          </svg>
        </div>

        {/* Interactive Floating Sparkle / Hint Badge */}
        <div className="flex flex-col items-center mt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e070d]/80 border border-[#ffd700]/40 backdrop-blur-md shadow-[0_4px_16px_rgba(255,165,0,0.2)] group-hover:border-[#ffd700] transition-colors">
            <Flame className="w-4 h-4 text-[#ff7700] fill-current animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-[#ffeaa7]">
              Tap Flame to Stoke the Light
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          </div>

          {/* Personal Diya Count Indicator */}
          <div className="text-[11px] sm:text-xs text-[#ffcc80] mt-1.5 opacity-80">
            Sacred Sparks Rekindled: <span className="font-bold text-[#ffd700]">{personalLitCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
