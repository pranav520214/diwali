'use client';

import React, { useState } from 'react';
import { triggerDiwaliConfetti } from '@/lib/confetti';
import {
  X,
  Share2,
  Copy,
  Check,
  Send,
  Sparkles,
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href.split('?')[0];
    }
    return 'https://happydiwali.app';
  };

  const shareTitle = 'Happy Diwali | Shubh Deepavali — Festival of Lights';
  const shareText =
    '✨🪔 Step into the cinematic Diwali celebration! Light a sacred diya, craft royal greetings, and experience the divine festival of lights:';

  const handleNativeShare = async () => {
    const url = getShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: url,
        });
        triggerDiwaliConfetti(0.5, 0.5);
      } catch {
        // User cancelled or not supported
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    triggerDiwaliConfetti(0.5, 0.5);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const url = getShareUrl();
    const message = `${shareText}\n${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleTwitter = () => {
    const url = getShareUrl();
    const text = `Wishing everyone a joyful and blessed Diwali! 🪔✨ Light your sacred diya here:`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(
        url
      )}&hashtags=HappyDiwali,Deepavali,FestivalOfLights`,
      '_blank'
    );
  };

  const handleTelegram = () => {
    const url = getShareUrl();
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#160508] border border-[#ffd700]/50 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.95)] p-6 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] mb-3 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            <Share2 className="w-6 h-6 animate-pulse" />
          </div>
          <h3
            className="text-2xl font-bold text-[#ffd700] tracking-wide"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Share the Festive Joy
          </h3>
          <p className="text-xs sm:text-sm text-[#ffeec2] opacity-80 mt-1">
            Spread love, prosperity, and light with your friends and family across the globe.
          </p>
        </div>

        {/* Share Options */}
        <div className="flex flex-col gap-3">
          {/* Native Mobile Share if available */}
          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <button
              onClick={handleNativeShare}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ffd700] via-[#ffb703] to-[#ffd700] text-[#120306] font-bold text-sm shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:opacity-95 transition-transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Share via Device Menu</span>
            </button>
          )}

          {/* WhatsApp Direct */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Twitter / X */}
          <button
            onClick={handleTwitter}
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#000000] border border-[#ffd700]/30 hover:border-[#ffd700] text-white font-semibold text-sm transition-all active:scale-95"
          >
            <span>Share on X (Twitter)</span>
          </button>

          {/* Telegram */}
          <button
            onClick={handleTelegram}
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-semibold text-sm transition-all active:scale-95"
          >
            <span>Share on Telegram</span>
          </button>

          {/* Copy Link Input Bar */}
          <div className="mt-2 pt-3 border-t border-[#ffd700]/20 flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={typeof window !== 'undefined' ? window.location.href : ''}
              className="flex-1 px-3 py-2 text-xs rounded-lg bg-[#24090f] border border-[#ffd700]/30 text-zinc-300 select-all focus:outline-none"
            />
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ffd700] hover:bg-[#ffc107] text-[#120306] text-xs font-bold transition-all active:scale-95 shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
