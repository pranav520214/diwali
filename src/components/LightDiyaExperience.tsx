'use client';

import React, { useState } from 'react';
import { triggerDiwaliConfetti, triggerGrandFireworkShow } from '@/lib/confetti';
import { audioEngine } from '@/lib/audioEngine';
import { DiyaDedication } from '@/types';
import { Flame, Sparkles, X, Heart, Award } from 'lucide-react';

interface LightDiyaExperienceProps {
  isOpen: boolean;
  onClose: () => void;
  onDiyaLit?: (newTotal: number) => void;
}

const INTENT_OPTIONS = [
  { id: 'peace', label: '🕊️ Peace & Harmony' },
  { id: 'health', label: '🌿 Radiant Health & Longevity' },
  { id: 'prosperity', label: '💰 Golden Prosperity & Success' },
  { id: 'family', label: '👨‍👩‍👧‍👦 Family Unity & Love' },
  { id: 'gratitude', label: '🙏 Boundless Gratitude & Joy' },
];

const INITIAL_COMMUNITY_DIYAS: DiyaDedication[] = [
  { id: '1', name: 'Aarav & Meera', intent: 'Family Unity & Love', timestamp: Date.now() - 1000 * 60 * 3 },
  { id: '2', name: 'Dr. Vivek Sharma', intent: 'Radiant Health & Longevity', timestamp: Date.now() - 1000 * 60 * 7 },
  { id: '3', name: 'Ananya Roy', intent: 'Peace & Harmony', timestamp: Date.now() - 1000 * 60 * 14 },
  { id: '4', name: 'Rohan Patel', intent: 'Golden Prosperity & Success', timestamp: Date.now() - 1000 * 60 * 25 },
];

export const LightDiyaExperience: React.FC<LightDiyaExperienceProps> = ({
  isOpen,
  onClose,
  onDiyaLit,
}) => {
  const [totalDiyas, setTotalDiyas] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const savedCount = localStorage.getItem('diwali_total_diyas');
      if (savedCount) {
        return parseInt(savedCount, 10);
      }
    }
    return 1007;
  });
  const [name, setName] = useState<string>('');
  const [selectedIntent, setSelectedIntent] = useState<string>(INTENT_OPTIONS[0].label);
  const [dedications, setDedications] = useState<DiyaDedication[]>(INITIAL_COMMUNITY_DIYAS);
  const [justLit, setJustLit] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDedicateDiya = (e: React.FormEvent) => {
    e.preventDefault();
    const newTotal = totalDiyas + 1;
    setTotalDiyas(newTotal);

    if (typeof window !== 'undefined') {
      localStorage.setItem('diwali_total_diyas', String(newTotal));
    }

    const newDedication: DiyaDedication = {
      id: String(Date.now()),
      name: name.trim() || 'A Devoted Soul',
      intent: selectedIntent,
      timestamp: Date.now(),
    };

    setDedications([newDedication, ...dedications.slice(0, 5)]);
    setJustLit(true);
    setName('');

    // Audio chime
    audioEngine.playBellChime(1174.66); // High D Bell

    // Milestone check (e.g. 1008 is a sacred Vedic number!)
    if (newTotal === 1008 || newTotal % 50 === 0) {
      triggerGrandFireworkShow();
    } else {
      triggerDiwaliConfetti(0.5, 0.45);
    }

    if (onDiyaLit) {
      onDiyaLit(newTotal);
    }

    setTimeout(() => {
      setJustLit(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#170508] border border-[#ffd700]/50 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.95)] overflow-hidden my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 text-center border-b border-[#ffd700]/20 bg-[#20080d]">
          <div className="inline-flex p-3 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] mb-2 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            <Flame className="w-7 h-7 text-[#ff7700] fill-current animate-pulse" />
          </div>
          <h3
            className="text-2xl sm:text-3xl font-black text-[#ffd700] tracking-wide"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Light a Diya for the World
          </h3>
          <p className="text-xs sm:text-sm text-[#ffeec2] opacity-80 mt-1 max-w-md mx-auto">
            Ignite your prayer, blessing, or wish. Every diya lit joins the collective luminous tapestry across the earth.
          </p>

          {/* Sacred Milestone Live Counter */}
          <div className="mt-4 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#100305] border border-[#ffd700]/60 shadow-[0_0_25px_rgba(255,215,0,0.25)]">
            <Sparkles className="w-4 h-4 text-[#ffd700] animate-spin-slow" />
            <span className="text-xs uppercase tracking-widest text-zinc-300">
              Total Diyas Glowing:
            </span>
            <span
              className="text-2xl font-black text-[#ffd700] tracking-wider"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {totalDiyas.toLocaleString()}
            </span>
            {totalDiyas >= 1008 && (
              <span className="flex items-center gap-1 text-[11px] font-bold text-[#ffdd55] bg-[#ffd700]/20 px-2 py-0.5 rounded-full">
                <Award className="w-3 h-3" /> Sacred Milestone
              </span>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Diya Form */}
          <form onSubmit={handleDedicateDiya} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#ffd700] mb-1">
                Your Name / Family Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sanya & Kabir (or leave blank for Anonymous)"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#270b12] border border-[#ffd700]/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffd700] text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#ffd700] mb-1.5">
                Choose Your Sacred Dedication
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INTENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedIntent(opt.label)}
                    className={`py-2 px-3 text-left text-xs rounded-lg border transition-all ${
                      selectedIntent === opt.label
                        ? 'border-[#ffd700] bg-[#ffd700]/20 text-[#ffd700] font-semibold shadow-[0_0_10px_rgba(255,215,0,0.2)]'
                        : 'border-zinc-700 bg-[#21090f] text-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#ff7700] via-[#ffd700] to-[#ff7700] text-[#120306] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,140,0,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <Flame className="w-5 h-5 fill-current" />
              <span>{justLit ? '✨ Diya Ignited & Radiating! ✨' : 'Light My Diya Now'}</span>
            </button>
          </form>

          {/* Diya Wall / Recent Dedications Feed */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#ffd700] font-semibold mb-3 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#ff4d6d]" />
              <span>Recent Diya Offerings</span>
            </h4>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
              {dedications.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#21090f] border border-[#ffd700]/20 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700] animate-pulse" />
                    <div>
                      <span className="font-bold text-[#ffd700] block">{item.name}</span>
                      <span className="text-zinc-400 text-[11px]">{item.intent}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500">Just now</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
