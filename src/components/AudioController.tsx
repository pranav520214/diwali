'use client';

import React, { useEffect, useState } from 'react';
import { audioEngine } from '@/lib/audioEngine';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

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
      {/* Autoplay Blocked Floating Banner Prompt */}
      {audioState.isAutoplayBlocked && (
        <aside
          role="status"
          aria-live="polite"
          onClick={handleUnblockAutoplay}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5a1200] via-[#871900] to-[#5a1200] border border-[#ffd700] text-[#fff8e7] shadow-[0_8px_30px_rgba(255,140,0,0.5)] cursor-pointer animate-bounce hover:scale-105 transition-transform"
        >
          <Music className="w-4 h-4 text-[#ffd700] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Tap to Celebrate with Festive Music
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
        </aside>
      )}

      {/* Persistent Floating Gold Equalizer Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center">
        <button
          onClick={handleToggleMute}
          aria-label={audioState.isMuted ? 'Unmute festive audio' : 'Mute festive audio'}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.6)] ${
            audioState.isMuted
              ? 'bg-[#180509]/85 border-[#ffd700]/30 text-[#e0a96d] hover:border-[#ffd700]'
              : 'bg-gradient-to-r from-[#2a0910]/90 to-[#120306]/95 border-[#ffd700]/80 text-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.25)]'
          }`}
        >
          {/* Animated Dancing Equalizer Bars */}
          <div className="flex items-end gap-1 h-4 w-4 justify-center">
            {audioState.isPlaying && !audioState.isMuted ? (
              <>
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_0.8s_ease-in-out_infinite] h-3" />
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_1.2s_ease-in-out_infinite_0.2s] h-4" />
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_0.9s_ease-in-out_infinite_0.4s] h-2" />
                <span className="w-0.5 bg-[#ffd700] rounded-full animate-[music-bar_1.1s_ease-in-out_infinite_0.1s] h-3.5" />
              </>
            ) : (
              <>
                <span className="w-0.5 bg-zinc-500 rounded-full h-1" />
                <span className="w-0.5 bg-zinc-500 rounded-full h-1" />
                <span className="w-0.5 bg-zinc-500 rounded-full h-1" />
                <span className="w-0.5 bg-zinc-500 rounded-full h-1" />
              </>
            )}
          </div>

          {/* Label / Status */}
          <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline">
            {audioState.isMuted ? 'Music Muted' : 'Diwali Soundscape'}
          </span>

          {/* Volume Icon */}
          {audioState.isMuted ? (
            <VolumeX className="w-4 h-4 text-zinc-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#ffd700]" />
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes music-bar {
          0%, 100% {
            height: 3px;
          }
          50% {
            height: 16px;
          }
        }
      `}</style>
    </>
  );
};
