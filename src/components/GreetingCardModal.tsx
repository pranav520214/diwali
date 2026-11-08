'use client';

import React, { useState, useRef } from 'react';
import { CardTheme, BlessingPreset } from '@/types';
import { triggerDiwaliConfetti } from '@/lib/confetti';
import {
  X,
  Copy,
  Check,
  Download,
  Sparkles,
  Send,
  Flame,
  Palette,
} from 'lucide-react';

interface GreetingCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRecipient?: string;
  initialSender?: string;
  initialMessage?: string;
  initialTheme?: CardTheme;
}

const PRESET_BLESSINGS: BlessingPreset[] = [
  {
    id: '1',
    title: 'Vedic Peace & Light',
    category: 'Traditional',
    sanskrit: 'ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ॥',
    text: 'May the divine festival of lights illuminate your path with infinite wisdom, glowing health, and eternal serenity.',
  },
  {
    id: '2',
    title: 'Lakshmi & Ganesha Abundance',
    category: 'Prosperity',
    text: 'May Goddess Lakshmi bless your home with boundless wealth, and Lord Ganesha remove every obstacle on your journey.',
  },
  {
    id: '3',
    title: 'Family, Love & Sweets',
    category: 'Family',
    text: 'Wishing you and your beloved family a sparkling Diwali filled with warm laughter, sweet treats, and memories to cherish forever.',
  },
  {
    id: '4',
    title: 'Joy & Celebrations',
    category: 'Friends',
    text: 'May your Diwali shine brighter than a thousand sparklers! Wishing you boundless victories and immense festive fun.',
  },
];

export const GreetingCardModal: React.FC<GreetingCardModalProps> = ({
  isOpen,
  onClose,
  initialRecipient = 'Dear One',
  initialSender = 'Your Well-Wisher',
  initialMessage = PRESET_BLESSINGS[0].text,
  initialTheme = 'royal-swarna',
}) => {
  const [recipient, setRecipient] = useState(initialRecipient);
  const [sender, setSender] = useState(initialSender);
  const [message, setMessage] = useState(initialMessage);
  const [theme, setTheme] = useState<CardTheme>(initialTheme);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  // Theme styling configurations
  const themeStyles: Record<
    CardTheme,
    {
      bg: string;
      border: string;
      textPrimary: string;
      textSecondary: string;
      accent: string;
      name: string;
    }
  > = {
    'royal-swarna': {
      bg: 'linear-gradient(145deg, #18090c 0%, #080305 100%)',
      border: 'border-[#ffd700]',
      textPrimary: '#ffd700',
      textSecondary: '#ffeec2',
      accent: '#ffb703',
      name: 'Royal Swarna (Gold & Velvet)',
    },
    'ruby-gulal': {
      bg: 'linear-gradient(145deg, #3d0811 0%, #170205 100%)',
      border: 'border-[#e63946]',
      textPrimary: '#ffb3ba',
      textSecondary: '#fff0f3',
      accent: '#ff4d6d',
      name: 'Ruby Gulal (Sindoor & Amber)',
    },
    'mayura-emerald': {
      bg: 'linear-gradient(145deg, #022b1c 0%, #04140e 100%)',
      border: 'border-[#10b981]',
      textPrimary: '#6ee7b7',
      textSecondary: '#ecfdf5',
      accent: '#ffd700',
      name: 'Mayura Emerald (Peacock Teal)',
    },
    'kesari-sunset': {
      bg: 'linear-gradient(145deg, #421b01 0%, #1a0800 100%)',
      border: 'border-[#ff7700]',
      textPrimary: '#ffd166',
      textSecondary: '#fff3b0',
      accent: '#ff9e00',
      name: 'Kesari Sunset (Saffron & Marigold)',
    },
  };

  const currentTheme = themeStyles[theme];

  const generateShareableUrl = () => {
    if (typeof window === 'undefined') return '';
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('to', recipient);
    url.searchParams.set('from', sender);
    url.searchParams.set('theme', theme);
    url.searchParams.set('msg', message);
    return url.toString();
  };

  const handleCopyLink = () => {
    const link = generateShareableUrl();
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    triggerDiwaliConfetti(0.5, 0.5);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyGreetingText = () => {
    const formatted = `✨🪔 SHUBH DEEPAVALI 🪔✨\n\nTo: ${recipient}\n\n"${message}"\n\nWith warm wishes,\n— ${sender}\n\nExperience the cinematic celebration here:\n${generateShareableUrl()}`;
    navigator.clipboard.writeText(formatted);
    setCopiedText(true);
    triggerDiwaliConfetti(0.5, 0.5);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = `✨🪔 *HAPPY DIWALI | SHUBH DEEPAVALI* 🪔✨%0A%0A*To:* ${encodeURIComponent(recipient)}%0A%0A"${encodeURIComponent(message)}"%0A%0A*From:* ${encodeURIComponent(sender)}%0A%0A🪔 *Open your personalized royal greeting card:*%0A${encodeURIComponent(generateShareableUrl())}`;
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleDownloadCard = () => {
    setIsDownloading(true);
    // Dynamic canvas capture
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsDownloading(false);
      return;
    }

    // Draw rich gradient background
    const grad = ctx.createLinearGradient(0, 0, 1200, 700);
    if (theme === 'royal-swarna') {
      grad.addColorStop(0, '#1c0a0e');
      grad.addColorStop(1, '#080204');
    } else if (theme === 'ruby-gulal') {
      grad.addColorStop(0, '#420a13');
      grad.addColorStop(1, '#170306');
    } else if (theme === 'mayura-emerald') {
      grad.addColorStop(0, '#032c1d');
      grad.addColorStop(1, '#04120c');
    } else {
      grad.addColorStop(0, '#471e03');
      grad.addColorStop(1, '#1c0800');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 700);

    // Golden Ornamental Border
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 640);
    ctx.strokeStyle = '#b8860b';
    ctx.lineWidth = 2;
    ctx.strokeRect(42, 42, 1116, 616);

    // Title
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px serif';
    ctx.fillText('॥ शुभ दीपावली ॥', 600, 105);

    ctx.font = '900 48px serif';
    ctx.fillText('HAPPY DIWALI', 600, 165);

    // Recipient
    ctx.fillStyle = '#fff4b8';
    ctx.font = 'italic 28px serif';
    ctx.fillText(`To dearest ${recipient},`, 600, 240);

    // Message wrap
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px sans-serif';
    wrapText(ctx, `"${message}"`, 600, 310, 920, 38);

    // Sender
    ctx.fillStyle = '#ffd700';
    ctx.font = 'italic bold 28px serif';
    ctx.fillText(`Warm blessings from ${sender}`, 600, 560);

    // Footer
    ctx.fillStyle = '#b8860b';
    ctx.font = '16px sans-serif';
    ctx.fillText('Festival of Lights • Divine Celebrations', 600, 620);

    // Trigger download
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `Happy-Diwali-${recipient.replace(/\s+/g, '-')}.png`;
    a.click();
    setIsDownloading(false);
    triggerDiwaliConfetti(0.5, 0.5);
  };

  function wrapText(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        context.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, currentY);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#140407] border border-[#d4af37]/50 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.95)] overflow-hidden my-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#1c070c]">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#d4af37] fill-current" />
            <h3
              className="text-lg sm:text-xl font-bold tracking-wide text-[#fae5b6]"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Custom Royal Diwali Greeting
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-sm">
            {/* To & From */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#ffd700] mb-1">
                  Recipient Name (To)
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="e.g. Grandma, Rohit, Priya"
                  className="w-full px-3 py-2 rounded-lg bg-[#250b11] border border-[#ffd700]/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#ffd700] mb-1">
                  Your Name (From)
                </label>
                <input
                  type="text"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder="e.g. Arjun & Family"
                  className="w-full px-3 py-2 rounded-lg bg-[#250b11] border border-[#ffd700]/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>
            </div>

            {/* Blessing Presets */}
            <div>
              <label className="block text-xs font-semibold text-[#ffd700] mb-1.5">
                Select a Blessing or Shloka
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PRESET_BLESSINGS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setMessage(preset.text)}
                    className="p-2 text-left rounded-lg bg-[#1f090e] border border-[#ffd700]/20 hover:border-[#ffd700] text-xs text-[#ffeec2] hover:bg-[#2c0d14] transition-colors"
                  >
                    <span className="font-semibold block text-[#ffd700]">
                      {preset.title}
                    </span>
                    <span className="line-clamp-2 text-[11px] opacity-80 mt-0.5">
                      {preset.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Field */}
            <div>
              <label className="block text-xs font-semibold text-[#ffd700] mb-1">
                Personalized Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#250b11] border border-[#ffd700]/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffd700] transition-colors resize-none"
              />
            </div>

            {/* Theme Selector */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#ffd700] mb-2">
                <Palette className="w-3.5 h-3.5" />
                <span>Card Theme</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.keys(themeStyles) as CardTheme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`py-2 px-1 text-center text-xs font-medium rounded-lg border transition-all ${
                      theme === t
                        ? 'border-[#ffd700] bg-[#ffd700]/20 text-[#ffd700] shadow-[0_0_10px_rgba(255,215,0,0.3)]'
                        : 'border-zinc-700 bg-[#1a070c] text-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    {t === 'royal-swarna' && '👑 Swarna'}
                    {t === 'ruby-gulal' && '🌹 Gulal'}
                    {t === 'mayura-emerald' && '🦚 Mayura'}
                    {t === 'kesari-sunset' && '🌅 Kesari'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Card Preview & Share Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Live Interactive Card */}
            <div
              ref={cardRef}
              style={{ background: currentTheme.bg }}
              className={`relative rounded-xl p-6 border-2 ${currentTheme.border} shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center text-center justify-between min-h-[320px] transition-all duration-300`}
            >
              {/* Corner Ornamental Flourishes */}
              <div className="absolute top-2 left-2 text-[#ffd700] opacity-75">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="absolute top-2 right-2 text-[#ffd700] opacity-75">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Card Header */}
              <div>
                <p
                  className="text-lg font-normal tracking-wide drop-shadow-md"
                  style={{
                    color: currentTheme.textPrimary,
                    fontFamily: 'var(--font-rozha), serif',
                  }}
                >
                  ॥ शुभ दीपावली ॥
                </p>
                <h4
                  className="text-2xl sm:text-3xl font-black tracking-wider uppercase mt-0.5"
                  style={{
                    color: currentTheme.textPrimary,
                    fontFamily: 'var(--font-cinzel), serif',
                  }}
                >
                  HAPPY DIWALI
                </h4>
              </div>

              {/* Recipient */}
              <div className="my-2">
                <p
                  className="text-base sm:text-lg italic font-medium"
                  style={{
                    color: currentTheme.textSecondary,
                    fontFamily: 'var(--font-cormorant), serif',
                  }}
                >
                  To Dearest <span className="font-bold underline">{recipient || 'Loved One'}</span>,
                </p>
              </div>

              {/* Blessing Content */}
              <div className="px-4 py-2">
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: currentTheme.textSecondary }}
                >
                  &ldquo;{message || 'Wishing you infinite light and prosperity!'}&rdquo;
                </p>
              </div>

              {/* Sender Signature */}
              <div className="mt-3 pt-2 border-t border-[#ffd700]/30 w-full flex items-center justify-between text-xs">
                <span className="text-zinc-400 text-[10px]">Festival of Lights</span>
                <span
                  className="font-semibold italic text-sm"
                  style={{
                    color: currentTheme.textPrimary,
                    fontFamily: 'var(--font-cormorant), serif',
                  }}
                >
                  With love, {sender || 'A Friend'}
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-4 flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs shadow-md transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#ffd700] hover:bg-[#ffc107] text-black font-semibold text-xs shadow-md transition-all active:scale-95"
                >
                  {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Copy Card Link'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyGreetingText}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#2b0d14] hover:bg-[#3d131c] border border-[#ffd700]/40 text-[#ffd700] text-xs font-medium transition-colors"
                >
                  {copiedText ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedText ? 'Text Copied!' : 'Copy Festive Text'}</span>
                </button>

                <button
                  onClick={handleDownloadCard}
                  disabled={isDownloading}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#2b0d14] hover:bg-[#3d131c] border border-[#ffd700]/40 text-[#ffd700] text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloading ? 'Exporting...' : 'Save as Image'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
