'use client';

import React, { useEffect, useState } from 'react';
import { audioEngine } from '@/lib/audioEngine';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

/**
 * Editorial Luxury Audio Controller
 * - Elegant floating prompt when browser autoplay is blocked
 * - Exquisite gold talisman equalizer pill
 * - Smooth mute / unmute state toggling
 */
export const AudioController: React.FC = () => {
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    isMuted: false,
    isAutoplayBlocked: false,
  });

  useEffect(() => {
    // Initialize audio engine
    audioEngine.init('/audio/diwali-song.mp4');

    const unsubscribe = audioEngine.subscribe((state) => {
      setAudioState(state);
    });

    // Attempt initial playback
    const timer = setTimeout(() => {
      audioEngine.play().catch(() => {});
    }, 400);

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioEngine.toggleMute();
  };

  const handleUnblockAutoplay = () => {
    audioEngine.play().catch(() => {});
  };

  return (
    <>
      {/* 1. Autoplay Blocked Floating Royal Prompt */}
      {audioState.isAutoplayBlocked && (
        <aside
          role="status"
          aria-live="polite"
          onClick={handleUnblockAutoplay}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#20050d]/90 border border-[#d4af37] text-[#fae5b6] shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 transition-all"
        >
          <Music className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            ॥ Click to Immerse in Festive Soundscape ॥
          </span>
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
        </aside>
      )}

      {/* 2. Persistent Luxury Gold Music Talisman Pill */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center">
        <button
          onClick={handleToggleMute}
          aria-label={audioState.isMuted ? 'Unmute festive audio' : 'Mute festive audio'}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)] cursor-pointer hover:scale-105 active:scale-95 ${
            audioState.isMuted
              ? 'bg-[#180309]/85 border-[#d4af37]/30 text-[#d4af37]/60 hover:border-[#d4af37]'
              : 'bg-[#22050e]/90 border-[#d4af37]/80 text-[#fae5b6] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
          }`}
        >
          {/* Animated Dancing Equalizer Bars */}
          <div className="flex items-end gap-0.5 h-3.5 w-3.5 justify-center" aria-hidden="true">
            {audioState.isPlaying && !audioState.isMuted ? (
              <>
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_0.8s_ease-in-out_infinite] h-2.5" />
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_1.2s_ease-in-out_infinite_0.2s] h-3.5" />
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_0.9s_ease-in-out_infinite_0.4s] h-2" />
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_1.1s_ease-in-out_infinite_0.1s] h-3" />
              </>
            ) : (
              <>
                <span className="w-0.5 bg-zinc-600 rounded-full h-1" />
                <span className="w-0.5 bg-zinc-600 rounded-full h-1" />
                <span className="w-0.5 bg-zinc-600 rounded-full h-1" />
                <span className="w-0.5 bg-zinc-600 rounded-full h-1" />
              </>
            )}
          </div>

          {/* Track Label */}
          <span className="text-[11px] font-medium tracking-wider uppercase hidden sm:inline text-[#fae5b6]">
            {audioState.isMuted ? 'Muted' : 'Soundscape'}
          </span>

          {/* Volume Icon */}
          {audioState.isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
          )}
        </button>
      </div>
    </>
  );
};
