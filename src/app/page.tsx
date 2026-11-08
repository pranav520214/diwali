'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppState, ActiveModal, CardTheme } from '@/types';
import { FestiveBackground } from '@/components/FestiveBackground';
import { FloatingPetalsCanvas } from '@/components/FloatingPetalsCanvas';
import { ToranArch } from '@/components/decorative/ToranArch';
import { JharokhaFrame } from '@/components/decorative/JharokhaFrame';
import { CornerDiyas } from '@/components/decorative/CornerDiyas';
import { FestiveHeader } from '@/components/FestiveHeader';
import { DiyaStage } from '@/components/DiyaStage';
import { IntroSequence } from '@/components/IntroSequence';
import { AudioController } from '@/components/AudioController';
import { GreetingCardModal } from '@/components/GreetingCardModal';
import { ShareModal } from '@/components/ShareModal';
import { LightDiyaExperience } from '@/components/LightDiyaExperience';
import { BlessingMantraModal } from '@/components/BlessingMantraModal';
import { triggerGrandFireworkShow } from '@/lib/confetti';
import { audioEngine } from '@/lib/audioEngine';
import {
  Flame,
  Send,
  Share2,
  Sparkles,
  BookOpen,
  PartyPopper,
  RotateCcw,
} from 'lucide-react';

function DiwaliExperienceContent() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to') || undefined;
  const from = searchParams.get('from') || undefined;
  const msg = searchParams.get('msg') || undefined;
  const theme = (searchParams.get('theme') as CardTheme) || undefined;
  const hasSharedCard = Boolean(to || from || msg || theme);

  const [appState, setAppState] = useState<AppState>(() =>
    hasSharedCard ? 'main' : 'intro'
  );
  const [activeModal, setActiveModal] = useState<ActiveModal>(() =>
    hasSharedCard ? 'greeting' : 'none'
  );

  const sharedCardParams = {
    recipient: to,
    sender: from,
    message: msg,
    theme,
  };

  const handleIntroComplete = () => {
    setAppState('main');
  };

  const handleBurstFireworks = () => {
    audioEngine.playBellChime(987.77);
    triggerGrandFireworkShow();
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-[#ffd700]/30 selection:text-[#ffd700]">
      {/* 1. Authentic Velvet Background, Texture & Ambient Amber Glow */}
      <FestiveBackground />
      <FloatingPetalsCanvas />

      {/* 2. Flanking Grounded Brass Corner Diyas */}
      <CornerDiyas />

      {/* 3. Cinematic 4-Scene GSAP Master Intro */}
      {appState === 'intro' && <IntroSequence onComplete={handleIntroComplete} />}

      {/* 4. Unified Heritage Main Experience Page */}
      <div
        className={`relative z-20 flex flex-col items-center justify-between min-h-screen px-4 pb-8 sm:pb-12 transition-opacity duration-1000 ${
          appState === 'main' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top: Natural Marigold & Mango-Leaf Toran Arch with Hanging Bells */}
        <ToranArch className="absolute top-0 left-0 right-0 z-30" />

        {/* Ambient Subtle Architectural Jharokha Arch Frame */}
        <JharokhaFrame className="z-10" opacity={0.14} />

        {/* Centre: Sacred Typography & Blessing Message */}
        <FestiveHeader />

        {/* Centrepiece: Master Sculpted Brass Diya */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl my-1 sm:my-2">
          <DiyaStage />

          {/* Bottom Controls: The 3 Carefully Spaced Primary Action Controls */}
          <nav
            aria-label="Festive primary actions"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full max-w-xl px-2"
          >
            {/* Primary: Send Happy Diwali */}
            <button
              onClick={() => {
                audioEngine.playBellChime(659.25);
                setActiveModal('greeting');
              }}
              className="w-full sm:w-auto min-w-[180px] h-12 flex items-center justify-center gap-2.5 px-6 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e49a] to-[#c59b27] text-[#180309] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_22px_rgba(212,175,55,0.38)] hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 focus-visible:ring-offset-[#140307] transition-all cursor-pointer"
              aria-label="Send Happy Diwali custom greeting card"
            >
              <Send className="w-4 h-4 fill-current text-[#180309]" />
              <span>Send Happy Diwali</span>
            </button>

            {/* Secondary: Light a Diya */}
            <button
              onClick={() => {
                audioEngine.playBellChime(783.99);
                setActiveModal('light-diya');
              }}
              className="w-full sm:w-auto min-w-[160px] h-12 flex items-center justify-center gap-2.5 px-6 rounded-full bg-[#20050d] border border-[#d4af37]/80 text-[#fae5b6] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_18px_rgba(0,0,0,0.65)] hover:bg-[#2e0915] hover:border-[#ffd700] hover:shadow-[0_4px_20px_rgba(255,160,0,0.3)] hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 focus-visible:ring-offset-[#140307] transition-all cursor-pointer"
              aria-label="Dedicate and light a sacred virtual Diya"
            >
              <Flame className="w-4 h-4 text-[#ff8c00] fill-current animate-pulse" />
              <span>Light a Diya</span>
            </button>

            {/* Tertiary: Vedic Blessing */}
            <button
              onClick={() => {
                audioEngine.playBellChime(587.33);
                setActiveModal('blessing-mantra');
              }}
              className="w-full sm:w-auto min-w-[160px] h-12 flex items-center justify-center gap-2.5 px-5 rounded-full bg-[#180309] border border-[#d4af37]/50 text-[#fae5b6] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_18px_rgba(0,0,0,0.65)] hover:bg-[#250711] hover:border-[#d4af37] hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 focus-visible:ring-offset-[#140307] transition-all cursor-pointer"
              aria-label="Vedic Shanti Mantra and Divine Blessings"
            >
              <BookOpen className="w-4 h-4 text-[#d4af37]" />
              <span>Vedic Blessing</span>
            </button>
          </nav>

          {/* Secondary Utility Controls Bar */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 text-xs font-medium text-[#f5dfb8]/75">
            {/* Share the Joy */}
            <button
              onClick={() => {
                audioEngine.playBellChime(880);
                setActiveModal('share');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:text-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-pointer"
              aria-label="Share the Joy of Diwali"
            >
              <Share2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Share Joy</span>
            </button>

            <span className="text-[#d4af37]/30 select-none">•</span>

            {/* Burst Fireworks */}
            <button
              onClick={handleBurstFireworks}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:text-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-pointer"
              aria-label="Burst celebratory fireworks"
            >
              <PartyPopper className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Burst Fireworks</span>
            </button>

            <span className="text-[#d4af37]/30 select-none">•</span>

            {/* Replay Intro */}
            <button
              onClick={() => {
                audioEngine.playBellChime(523.25);
                setAppState('intro');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:text-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-pointer"
              aria-label="Replay the cinematic introduction animation"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Replay Intro</span>
            </button>
          </div>
        </div>

        {/* Refined Heritage Footer */}
        <footer className="w-full max-w-4xl text-center pt-6 border-t border-[#d4af37]/20 mt-4 sm:mt-6 select-none">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#fae5b6]/85">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span style={{ fontFamily: 'var(--font-rozha), serif' }}>
              ॥ तमसो मा ज्योतिर्गमय • असतो मा सद्गमय ॥
            </span>
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
          </div>
          <p className="text-[11px] text-[#f5dfb8]/60 mt-1 tracking-wider uppercase">
            Wishing You & Your Family an Auspicious, Healthy & Prosperous Deepavali 2026
          </p>
        </footer>
      </div>

      {/* Floating Audio Controller */}
      <AudioController />

      {/* Interactive Feature Modals */}
      <GreetingCardModal
        isOpen={activeModal === 'greeting'}
        onClose={() => setActiveModal('none')}
        initialRecipient={sharedCardParams.recipient}
        initialSender={sharedCardParams.sender}
        initialMessage={sharedCardParams.message}
        initialTheme={sharedCardParams.theme}
      />

      <ShareModal
        isOpen={activeModal === 'share'}
        onClose={() => setActiveModal('none')}
      />

      <LightDiyaExperience
        isOpen={activeModal === 'light-diya'}
        onClose={() => setActiveModal('none')}
      />

      <BlessingMantraModal
        isOpen={activeModal === 'blessing-mantra'}
        onClose={() => setActiveModal('none')}
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#120306] flex items-center justify-center text-[#d4af37]">
          <span className="text-xl font-bold tracking-widest animate-pulse">
            ॥ शुभ दीपावली ॥
          </span>
        </div>
      }
    >
      <DiwaliExperienceContent />
    </Suspense>
  );
}
