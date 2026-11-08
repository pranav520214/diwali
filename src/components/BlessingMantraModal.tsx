'use client';

import React from 'react';
import { triggerDiwaliConfetti } from '@/lib/confetti';
import { audioEngine } from '@/lib/audioEngine';
import { X, Sparkles, Flame } from 'lucide-react';

interface BlessingMantraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlessingMantraModal: React.FC<BlessingMantraModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleReceiveBlessing = () => {
    audioEngine.playBellChime(880);
    triggerDiwaliConfetti(0.5, 0.4);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#180509] border border-[#ffd700]/60 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.95)] p-6 sm:p-8 text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lotus Medallion */}
        <div className="inline-flex p-3 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] mb-4 shadow-[0_0_20px_rgba(255,215,0,0.25)]">
          <Sparkles className="w-7 h-7 animate-spin-slow" />
        </div>

        {/* Title */}
        <h3
          className="text-2xl sm:text-3xl font-normal text-[#ffd700] tracking-wide mb-1"
          style={{ fontFamily: 'var(--font-rozha), serif' }}
        >
          ॥ वैदिक ज्योतिर्मंत्र ॥
        </h3>
        <p className="text-xs uppercase tracking-widest text-[#ffcc80] mb-6">
          The Sacred Vedic Light Invocation
        </p>

        {/* Shloka in Devanagari */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#250b11] border border-[#ffd700]/30 shadow-inner mb-5">
          <p
            className="text-xl sm:text-2xl text-[#fff4b8] leading-loose drop-shadow-md font-normal"
            style={{ fontFamily: 'var(--font-rozha), serif' }}
          >
            ॐ असतो मा सद्गमय ।<br />
            तमसो मा ज्योतिर्गमय ।<br />
            मृत्योर्मा अमृतं गमय ॥<br />
            ॐ शान्तिः शान्तिः शान्तिः ॥
          </p>
        </div>

        {/* English Translation */}
        <p
          className="text-sm sm:text-base text-[#ffeec2] italic leading-relaxed mb-6"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          &ldquo;Lead me from the unreal to the real,<br />
          From darkness into eternal light,<br />
          From mortality unto immortality.<br />
          May peace and divinity reign in all realms.&rdquo;
        </p>

        {/* CTA Button */}
        <button
          onClick={handleReceiveBlessing}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#ffd700] via-[#ffb703] to-[#ffd700] text-[#120306] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:brightness-110 active:scale-95 transition-all"
        >
          <Flame className="w-4 h-4 fill-current" />
          <span>Receive Sacred Blessing</span>
        </button>
      </div>
    </div>
  );
};
