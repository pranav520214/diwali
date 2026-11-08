'use client';

import React, { useEffect, useRef } from 'react';
import { useDiwaliTimeline } from '@/animations/useDiwaliTimeline';
import { audioEngine } from '@/lib/audioEngine';
import { triggerDiwaliConfetti } from '@/lib/confetti';
import { ChevronRight } from 'lucide-react';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const devanagariText = '॥ शुभ दीपावली ॥';
  const latinText = 'HAPPY DIWALI';
  const devanagariRefList = useRef<HTMLSpanElement[]>([]);
  const latinRefList = useRef<HTMLSpanElement[]>([]);
  const blossomRefList = useRef<SVGPathElement[]>([]);
  const particleCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const {
    setElementRef,
    currentScene,
    skip,
    initCanvasParticles,
  } = useDiwaliTimeline({
    autoPlay: true,
    onSceneChange: (scene) => {
      if (scene === 'scene4') {
        // Allow scene 4 to settle for a moment, then transition to full interactive homepage
        setTimeout(() => {
          onComplete();
        }, 1800);
      }
    },
    onAudioCue: (cue) => {
      if (cue === 'ignite') {
        audioEngine.playBellChime(523.25); // Sacred C chime
        audioEngine.play().catch(() => {});
      } else if (cue === 'openHinge') {
        audioEngine.playBellChime(659.25); // Resonant E chime
      } else if (cue === 'shimmerSweep') {
        audioEngine.playBellChime(1046.5); // High C shimmer
      } else if (cue === 'festiveBurst') {
        audioEngine.playBellChime(880); // Auspicious A chime
        triggerDiwaliConfetti(0.5, 0.45);
      }
    },
  });

  // Attach dynamic arrays to refs
  useEffect(() => {
    setElementRef('devanagariChars', devanagariRefList.current);
    setElementRef('latinChars', latinRefList.current);
    setElementRef('blossomPetals', blossomRefList.current);
  }, [setElementRef]);

  // Initialize canvas particle embers
  useEffect(() => {
    if (particleCanvasRef.current) {
      initCanvasParticles(particleCanvasRef.current);
    }
  }, [initCanvasParticles]);

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioEngine.play().catch(() => {});
    skip(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <div
      ref={(el) => {
        setElementRef('container', el);
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden diwali-stage select-none"
      role="region"
      aria-label="Diwali Cinematic Intro"
    >
      {/* Dynamic Velvet Burgundy Backdrop */}
      <div
        ref={(el) => {
          setElementRef('backdrop', el);
        }}
        className="absolute inset-0 bg-[#0a0104] transition-colors duration-1000"
      />

      {/* 60fps Particle Canvas for floating embers and golden fireflies */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Skip Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          ref={(el) => {
            setElementRef('skipButton', el);
          }}
          onClick={handleSkip}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 border border-[#ffd700]/40 hover:border-[#ffd700] text-xs font-medium text-[#ffeaa7] backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)] group cursor-pointer"
          aria-label="Skip introduction animation"
        >
          <span>Skip to Celebration</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#ffd700] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* SCENE 1: Golden Cosmic Pinhole Light Flare */}
      <div
        ref={(el) => {
          setElementRef('pinhole', el);
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#fff4b8] shadow-[0_0_40px_15px_#ff9900,0_0_80px_30px_#ff3300] pointer-events-none z-20"
      />

      {/* Ambient Pulsating Diya Aura Glow */}
      <div
        ref={(el) => {
          setElementRef('diyaAura', el);
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-radial from-[#ff7700]/50 via-[#e0115f]/25 to-transparent pointer-events-none z-15"
      />

      {/* SCENE 2: Volumetric God Rays & Spilling Inner Sanctuary Radiance */}
      <div
        ref={(el) => {
          setElementRef('lightRays', el);
        }}
        className="god-rays z-18 pointer-events-none"
      />

      <div
        ref={(el) => {
          setElementRef('volumetricAurora', el);
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[90px] bg-gradient-to-tr from-[#ff4500]/40 via-[#ffd700]/30 to-[#de1360]/20 pointer-events-none z-17"
      />

      <div
        ref={(el) => {
          setElementRef('innerSanctuaryLight', el);
        }}
        className="sanctuary-light z-22 pointer-events-none"
      />

      {/* SCENE 3: Behind the Diya - Blooming Concentric Sacred Rangoli Mandala */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-16 w-[560px] h-[560px] flex items-center justify-center">
        {/* Outer Ring */}
        <div
          ref={(el) => {
            setElementRef('mandalaRingOuter', el);
          }}
          className="absolute inset-0"
        >
          <svg viewBox="-280 -280 560 560" className="w-full h-full stroke-[#d4af37]/60" fill="none">
            <circle cx="0" cy="0" r="260" strokeDasharray="6 8" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="230" strokeWidth="1" opacity="0.7" />
            {Array.from({ length: 16 }).map((_, i) => {
              const rot = (i * 360) / 16;
              return (
                <path
                  key={i}
                  ref={(el) => {
                    if (el && !blossomRefList.current.includes(el)) {
                      blossomRefList.current.push(el);
                    }
                  }}
                  d="M 0,-260 C 20,-240 20,-210 0,-190 C -20,-210 -20,-240 0,-260 Z"
                  transform={`rotate(${rot})`}
                  fill="#de1360"
                  fillOpacity="0.3"
                  stroke="#ffd700"
                  strokeWidth="1.2"
                />
              );
            })}
          </svg>
        </div>

        {/* Middle Ring */}
        <div
          ref={(el) => {
            setElementRef('mandalaRingMiddle', el);
          }}
          className="absolute inset-10"
        >
          <svg viewBox="-240 -240 480 480" className="w-full h-full stroke-[#f3ce5a]/75" fill="none">
            <circle cx="0" cy="0" r="180" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="150" strokeDasharray="4 6" strokeWidth="1" />
            {Array.from({ length: 12 }).map((_, i) => {
              const rot = (i * 360) / 12;
              return (
                <circle
                  key={i}
                  cx={180 * Math.cos((rot * Math.PI) / 180)}
                  cy={180 * Math.sin((rot * Math.PI) / 180)}
                  r="7"
                  fill="#ffb703"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </div>

        {/* Inner Lotus Ring */}
        <div
          ref={(el) => {
            setElementRef('mandalaRingInner', el);
          }}
          className="absolute inset-24"
        >
          <svg viewBox="-180 -180 360 360" className="w-full h-full stroke-[#ffd700]" fill="none">
            <circle cx="0" cy="0" r="100" strokeWidth="2" />
            {Array.from({ length: 8 }).map((_, i) => {
              const rot = (i * 360) / 8;
              return (
                <path
                  key={i}
                  d="M 0,-100 C 18,-70 18,-30 0,0 C -18,-30 -18,-70 0,-100 Z"
                  transform={`rotate(${rot})`}
                  fill="#ff7700"
                  fillOpacity="0.4"
                  stroke="#fff4b8"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* SCENE 3: Sacred Typography Revealed Behind the Half-Open Diya */}
      <div
        ref={(el) => {
          setElementRef('greetingContainer', el);
        }}
        className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 z-25 text-center pointer-events-none w-full max-w-3xl px-4"
      >
        {/* Shlok / Sanskrit Blessing */}
        <div className="mb-2">
          <p
            className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-wide text-[#ffcc00] drop-shadow-[0_4px_20px_rgba(255,165,0,0.6)]"
            style={{ fontFamily: 'var(--font-rozha), serif' }}
          >
            {devanagariText.split('').map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) devanagariRefList.current[index] = el;
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
        </div>

        {/* Latin "HAPPY DIWALI" Headline */}
        <div className="relative inline-block overflow-hidden py-2 px-4">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase text-[#ffd700] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: 'var(--font-cinzel-dec), serif' }}
          >
            {latinText.split('').map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) latinRefList.current[index] = el;
                }}
                className="inline-block transform-gpu"
              >
                {char === ' ' ? '\u00A0\u00A0' : char}
              </span>
            ))}
          </h1>

          {/* 24K Gold Foil Shimmer Sweep Bar */}
          <div
            ref={(el) => {
              setElementRef('goldShimmerSweep', el);
            }}
            className="gold-shimmer-sweep pointer-events-none"
          />
        </div>

        <p className="text-xs sm:text-sm text-[#ffeaaf] uppercase tracking-[0.3em] font-medium mt-3 drop-shadow">
          Festival of Lights • Victory of Goodness
        </p>
      </div>

      {/* CENTRAL 3D DIYA WITH TWO HINGED HALVES */}
      <div
        ref={(el) => {
          setElementRef('diyaContainer', el);
        }}
        className="relative z-30 flex flex-col items-center justify-center my-auto cursor-pointer"
        onClick={handleSkip}
        role="button"
        tabIndex={0}
        aria-label="Central Diwali Diya. Click to enter celebration."
      >
        {/* 3D Perspective Stage */}
        <div
          ref={(el) => {
            setElementRef('diya3dStage', el);
          }}
          className="relative w-72 h-56 sm:w-96 sm:h-72 diwali-3d-stage flex items-center justify-center"
        >
          {/* Flame with multi-tier glow */}
          <div
            ref={(el) => {
              setElementRef('diyaFlame', el);
            }}
            className="absolute top-2 left-1/2 -translate-x-1/2 z-35 flex flex-col items-center pointer-events-none"
          >
            <div className="relative w-14 h-24 sm:w-18 sm:h-28">
              {/* Outer Crimson Corona */}
              <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-t from-[#ff3300] via-[#ff9900] to-transparent opacity-80" />
              {/* Mid Saffron Flame */}
              <div
                className="absolute inset-1 rounded-full bg-gradient-to-t from-[#ff6600] via-[#ffcc00] to-white"
                style={{
                  clipPath: 'polygon(50% 0%, 90% 65%, 75% 100%, 25% 100%, 10% 65%)',
                }}
              />
              {/* Core White Teardrop */}
              <div
                className="absolute left-1/2 bottom-2 -translate-x-1/2 w-4 h-9 rounded-full bg-white blur-[1px] shadow-[0_0_12px_#fff]"
              />
            </div>
            {/* Charred Wick */}
            <div className="w-1.5 h-3.5 bg-[#250d03] rounded-t-sm -mt-1" />
          </div>

          {/* Left Diya Half (Hinges leftward on Y-axis ~48°) */}
          <div
            ref={(el) => {
              setElementRef('diyaHalfLeft', el);
            }}
            className="absolute left-0 top-12 w-1/2 h-44 diya-half-left overflow-visible"
          >
            <svg viewBox="0 0 160 140" className="w-full h-full overflow-visible drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              <defs>
                <linearGradient id="brassLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#876512" />
                  <stop offset="40%" stopColor="#d4af37" />
                  <stop offset="85%" stopColor="#fff4b8" />
                  <stop offset="100%" stopColor="#d4af37" />
                </linearGradient>
                <radialGradient id="clayLeftGrad" cx="30%" cy="40%" r="80%">
                  <stop offset="0%" stopColor="#8c4421" />
                  <stop offset="70%" stopColor="#4a1c09" />
                  <stop offset="100%" stopColor="#250901" />
                </radialGradient>
              </defs>
              {/* Terracotta Belly Left */}
              <path
                d="M 160,20 C 110,20 30,35 10,70 C -10,105 50,135 160,135 Z"
                fill="url(#clayLeftGrad)"
                stroke="#63260e"
                strokeWidth="1.5"
              />
              {/* Ornate Brass Rim Left */}
              <path
                d="M 160,20 C 110,20 30,32 10,55 C 25,65 100,65 160,65 Z"
                fill="url(#brassLeftGrad)"
                stroke="#ffd700"
                strokeWidth="1.2"
              />
              {/* Carved Jaali / Petal Motifs on Belly */}
              <path
                d="M 60,65 Q 85,95 110,65 Q 135,95 160,65"
                fill="none"
                stroke="#ffd700"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <circle cx="85" cy="85" r="3.5" fill="#ffd700" />
              <circle cx="135" cy="85" r="3.5" fill="#ffd700" />
            </svg>
          </div>

          {/* Right Diya Half (Hinges rightward on Y-axis ~48°) */}
          <div
            ref={(el) => {
              setElementRef('diyaHalfRight', el);
            }}
            className="absolute right-0 top-12 w-1/2 h-44 diya-half-right overflow-visible"
          >
            <svg viewBox="0 0 160 140" className="w-full h-full overflow-visible drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              <defs>
                <linearGradient id="brassRightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="25%" stopColor="#fff4b8" />
                  <stop offset="70%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#876512" />
                </linearGradient>
                <radialGradient id="clayRightGrad" cx="70%" cy="40%" r="80%">
                  <stop offset="0%" stopColor="#8c4421" />
                  <stop offset="70%" stopColor="#4a1c09" />
                  <stop offset="100%" stopColor="#250901" />
                </radialGradient>
              </defs>
              {/* Terracotta Belly Right */}
              <path
                d="M 0,20 C 50,20 130,35 150,70 C 170,105 110,135 0,135 Z"
                fill="url(#clayRightGrad)"
                stroke="#63260e"
                strokeWidth="1.5"
              />
              {/* Ornate Brass Rim Right */}
              <path
                d="M 0,20 C 50,20 130,32 150,55 C 135,65 60,65 0,65 Z"
                fill="url(#brassRightGrad)"
                stroke="#ffd700"
                strokeWidth="1.2"
              />
              {/* Carved Jaali / Petal Motifs on Belly */}
              <path
                d="M 0,65 Q 25,95 50,65 Q 75,95 100,65"
                fill="none"
                stroke="#ffd700"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <circle cx="25" cy="85" r="3.5" fill="#ffd700" />
              <circle cx="75" cy="85" r="3.5" fill="#ffd700" />
            </svg>
          </div>

          {/* Diya Base Pedestal */}
          <div
            ref={(el) => {
              setElementRef('diyaBase', el);
            }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full bg-gradient-to-r from-[#5a1c06] via-[#9e4215] to-[#5a1c06] border border-[#ffd700]/50 shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-28"
          />
        </div>

        {/* Touch Hint / Interaction Prompt */}
        <p className="text-xs uppercase tracking-[0.25em] text-[#ffdd88] font-medium mt-6 animate-pulse">
          {currentScene === 'scene1'
            ? 'Igniting the sacred flame...'
            : currentScene === 'scene2'
            ? 'Opening the golden sanctuary...'
            : currentScene === 'scene3'
            ? 'Illuminating auspicious blessings...'
            : 'Tap anywhere to enter celebration'}
        </p>
      </div>

      {/* Floating Stardust / Embers note container */}
      <div
        ref={(el) => {
          setElementRef('initialEmbers', el);
        }}
        className="absolute inset-0 pointer-events-none z-12"
      />
    </div>
  );
};
