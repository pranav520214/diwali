'use client';

import React from 'react';

export const FestiveBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Layer 1: Royal Jewel-Tone Gradient Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 65%, rgba(217, 4, 41, 0.22) 0%, rgba(20, 3, 6, 0.85) 60%, #070414 100%),
            linear-gradient(180deg, #120306 0%, #1a050c 50%, #070414 100%)
          `,
        }}
      />

      {/* Layer 2: Ambient Golden Core Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-40 animate-aura"
        style={{
          width: 'min(90vw, 750px)',
          height: 'min(90vw, 750px)',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.45) 0%, rgba(255, 119, 0, 0.2) 50%, transparent 75%)',
        }}
      />

      {/* Layer 3: Sacred Rotating Rangoli / Mandala Backdrops */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.09] animate-spin-slow">
        <svg
          width="820"
          height="820"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#ffd700]"
          strokeWidth="1.2"
        >
          {/* Inner 16-petal lotus */}
          <circle cx="400" cy="400" r="80" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="140" />
          <circle cx="400" cy="400" r="220" strokeDasharray="6 6" />
          <circle cx="400" cy="400" r="320" />
          <circle cx="400" cy="400" r="380" strokeDasharray="3 3" />

          {/* Symmetrical Radiating Rays */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x1 = 400 + Math.cos(rad) * 140;
            const y1 = 400 + Math.sin(rad) * 140;
            const x2 = 400 + Math.cos(rad) * 320;
            const y2 = 400 + Math.sin(rad) * 320;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}

          {/* Ornamental petal loops */}
          {Array.from({ length: 12 }).map((_, i) => {
            const rot = i * 30;
            return (
              <path
                key={`petal-${i}`}
                d="M400,180 C440,240 440,320 400,340 C360,320 360,240 400,180 Z"
                transform={`rotate(${rot} 400 400)`}
                fill="rgba(255, 215, 0, 0.03)"
              />
            );
          })}
        </svg>
      </div>

      {/* Layer 4: Subtle Indian Jaali Lattice Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #ffd700 1.2px, transparent 1.5px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Layer 5: Ornamental Top Toran (Marigold & Mango Leaf Garland) */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-2 sm:px-8 opacity-85 z-20">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-16 sm:max-h-24 drop-shadow-[0_8px_16px_rgba(255,140,0,0.3)]"
          preserveAspectRatio="none"
        >
          {/* Garland String Swag */}
          <path
            d="M0,15 Q180,65 360,15 Q540,65 720,15 Q900,65 1080,15 Q1260,65 1440,15"
            stroke="#b8860b"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Hanging Marigold Pom-poms */}
          {Array.from({ length: 17 }).map((_, i) => {
            const x = (i * 1440) / 16;
            const y = 15 + Math.sin((i * Math.PI) / 4) * 22;
            const isOrange = i % 2 === 0;
            return (
              <g key={`toran-flower-${i}`}>
                {/* Thread */}
                <line x1={x} y1={y} x2={x} y2={y + 24} stroke="#ffd700" strokeWidth="1" />
                {/* Mango leaf */}
                <path
                  d={`M${x - 8},${y + 12} Q${x},${y + 30} ${x + 8},${y + 12} Z`}
                  fill="#1b4332"
                  opacity="0.9"
                />
                {/* Marigold bloom */}
                <circle
                  cx={x}
                  cy={y + 26}
                  r="9"
                  fill={isOrange ? '#ff7800' : '#ffd700'}
                  stroke="#b8860b"
                  strokeWidth="1.5"
                />
                <circle
                  cx={x}
                  cy={y + 26}
                  r="5"
                  fill={isOrange ? '#ffa500' : '#fff275'}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Layer 6: Hanging Brass Temple Bells (Ghantis) on Sides */}
      <div className="absolute top-0 left-6 hidden md:block">
        <div className="animate-[flame-flutter_4s_ease-in-out_infinite] origin-top">
          <svg width="40" height="180" viewBox="0 0 40 180" fill="none">
            <line x1="20" y1="0" x2="20" y2="120" stroke="#d4af37" strokeWidth="1.8" />
            {/* Bell Crown */}
            <path d="M12 120 C12 105 28 105 28 120 Z" fill="#ffd700" stroke="#b8860b" />
            {/* Bell Flare */}
            <path
              d="M10 120 C10 135 2 150 2 156 C2 160 38 160 38 156 C38 150 30 135 30 120 Z"
              fill="url(#bellGradLeft)"
              stroke="#b8860b"
            />
            {/* Clapper / Tongue */}
            <circle cx="20" cy="164" r="4" fill="#ffd700" stroke="#8c6d1f" />
            <defs>
              <linearGradient id="bellGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8860b" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#8c6d1f" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute top-0 right-6 hidden md:block">
        <div className="animate-[flame-flutter_4.5s_ease-in-out_infinite_reverse] origin-top">
          <svg width="40" height="210" viewBox="0 0 40 210" fill="none">
            <line x1="20" y1="0" x2="20" y2="140" stroke="#d4af37" strokeWidth="1.8" />
            <path d="M12 140 C12 125 28 125 28 140 Z" fill="#ffd700" stroke="#b8860b" />
            <path
              d="M10 140 C10 155 2 170 2 176 C2 180 38 180 38 176 C38 170 30 155 30 140 Z"
              fill="url(#bellGradRight)"
              stroke="#b8860b"
            />
            <circle cx="20" cy="184" r="4" fill="#ffd700" stroke="#8c6d1f" />
            <defs>
              <linearGradient id="bellGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8c6d1f" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Layer 7: Cinematic Edge Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 140px rgba(0, 0, 0, 0.85), inset 0 0 60px rgba(18, 3, 6, 0.7)',
        }}
      />
    </div>
  );
};
