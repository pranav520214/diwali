'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppState, ActiveModal, CardTheme } from '@/types';
import { FestiveBackground } from '@/components/FestiveBackground';
import { FloatingPetalsCanvas } from '@/components/FloatingPetalsCanvas';
import { ToranArch } from '@/components/decorative/ToranArch';
import { JharokhaFrame } from '@/components/decorative/JharokhaFrame';
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
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden">
      {/* Background & Atmosphere */}
      <FestiveBackground />
      <FloatingPetalsCanvas />

      {/* Cinematic Intro Sequence */}
      {appState === 'intro' && <IntroSequence onComplete={handleIntroComplete} />}

      {/* Main Experience Page */}
      <div
        className={`relative z-20 flex flex-col items-center justify-between min-h-screen px-4 pb-12 transition-opacity duration-1000 ${
          appState === 'main' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Traditional Hanging Toran Arch (Mango Leaves & Marigolds) */}
        <ToranArch className="absolute top-0 left-0 right-0 z-30" />

        {/* Ambient Architectural Jharokha Arch Frame */}
        <JharokhaFrame className="z-10" opacity={0.22} />

        {/* Top Header */}
        <FestiveHeader />

        {/* Centerpiece Diya Stage */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl my-2">
          <DiyaStage />

          {/* Interactive Action Dock */}
          <nav
            aria-label="Festive actions"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 max-w-2xl px-2"
          >
            {/* Button 1: Send Happy Diwali */}
            <button
              onClick={() => {
                audioEngine.playBellChime(659.25);
                setActiveModal('greeting');
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#ffaa00] to-[#ffd700] text-[#140306] font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(255,215,0,0.35)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120306] transition-all cursor-pointer"
              aria-label="Send Happy Diwali greeting card"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Send Happy Diwali</span>
            </button>

            {/* Button 2: Light a Diya */}
            <button
              onClick={() => {
                audioEngine.playBellChime(783.99);
                setActiveModal('light-diya');
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#20080d] border border-[#ffd700]/70 text-[#ffd700] font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:bg-[#350c14] hover:border-[#ffd700] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120306] transition-all cursor-pointer"
              aria-label="Light a sacred Diwali Diya"
            >
              <Flame className="w-4 h-4 text-[#ff7700] fill-current" />
              <span>Light a Diya</span>
            </button>

            {/* Button 3: Share the Joy */}
            <button
              onClick={() => {
                audioEngine.playBellChime(880);
                setActiveModal('share');
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#de1360] to-[#800a2a] border border-[#ffd700]/50 text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(222,19,96,0.3)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120306] transition-all cursor-pointer"
              aria-label="Share the Joy of Diwali"
            >
              <Share2 className="w-4 h-4 text-[#ffd700]" />
              <span>Share the Joy</span>
            </button>

            {/* Button 4: Burst Fireworks */}
            <button
              onClick={handleBurstFireworks}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#20080d] border border-[#ffd700]/50 text-[#ffeec2] font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:bg-[#300c14] hover:border-[#ffd700] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120306] transition-all cursor-pointer"
              aria-label="Burst celebratory Diwali fireworks"
            >
              <PartyPopper className="w-4 h-4 text-[#ff7700]" />
              <span>Burst Fireworks</span>
            </button>

            {/* Button 5: Replay Cinematic Intro */}
            <button
              onClick={() => {
                audioEngine.playBellChime(523.25);
                setAppState('intro');
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/20 text-[#ffeaaf] font-medium text-xs sm:text-sm hover:bg-white/10 hover:border-[#ffd700]/60 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120306] transition-all cursor-pointer"
              aria-label="Replay the cinematic introduction animation"
            >
              <RotateCcw className="w-4 h-4 text-[#ffd700]" />
              <span>Replay Intro</span>
            </button>
          </nav>
        </div>

        {/* Cinematic Festive Footer */}
        <footer className="w-full max-w-4xl text-center pt-8 border-t border-[#ffd700]/15 mt-8 select-none">
          <div className="flex items-center justify-center gap-2 text-xs text-[#ffd700]/80">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Celebrating the eternal victory of Dharma, Light, and Goodness</span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">
            Wishing You & Your Family a Peaceful, Healthy, and Prosperous Deepavali 2026
          </p>
        </footer>
      </div>

      {/* Floating Audio Controller */}
      <AudioController />

      {/* Modals */}
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
        <div className="min-h-screen bg-[#120306] flex items-center justify-center text-[#ffd700]">
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
