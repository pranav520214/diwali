/**
 * Resilient Audio Engine for Diwali Cinematic Experience.
 * Provides media playback with autoplay detection, user-gesture unlocking,
 * localStorage persistence, and a Web Audio API synthesized Indian ambient drone fallback.
 */

class DiwaliAudioEngine {
  private audioElement: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private synthGainNode: GainNode | null = null;
  private synthOscillators: OscillatorNode[] = [];
  private isUsingSynthFallback = false;
  private isPlaying = false;
  private isMuted = false;
  private volume = 0.8;
  private listeners: Set<(state: { isPlaying: boolean; isMuted: boolean; isAutoplayBlocked: boolean }) => void> = new Set();
  private isAutoplayBlocked = false;
  private hasUserInteracted = false;
  private chimeTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedMute = localStorage.getItem('diwali_audio_muted');
      if (savedMute !== null) {
        this.isMuted = savedMute === 'true';
      }
    }
  }

  public init(mediaSrc = '/audio/diwali-song.mp4') {
    if (typeof window === 'undefined' || this.audioElement) return;

    this.audioElement = new Audio();
    this.audioElement.src = mediaSrc;
    this.audioElement.loop = true;
    this.audioElement.volume = this.isMuted ? 0 : this.volume;
    this.audioElement.preload = 'auto';

    // If mp4 has an issue, try mp3
    this.audioElement.addEventListener('error', () => {
      if (this.audioElement && this.audioElement.src.endsWith('.mp4')) {
        this.audioElement.src = '/audio/diwali-song.mp3';
        this.audioElement.load();
      } else {
        // Fallback to Web Audio Synthesizer
        this.startSynthesizedAmbient();
      }
    });

    // Global listener for first user interaction to unlock audio if blocked
    const unlockAudio = () => {
      this.hasUserInteracted = true;
      if (this.isAutoplayBlocked && !this.isMuted) {
        this.play().catch(() => {});
      }
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('click', unlockAudio, { passive: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true });
    window.addEventListener('keydown', unlockAudio, { passive: true });
  }

  public subscribe(cb: (state: { isPlaying: boolean; isMuted: boolean; isAutoplayBlocked: boolean }) => void) {
    this.listeners.add(cb);
    cb({
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      isAutoplayBlocked: this.isAutoplayBlocked,
    });
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    const state = {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      isAutoplayBlocked: this.isAutoplayBlocked,
    };
    this.listeners.forEach((cb) => cb(state));
  }

  public async play(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    if (!this.audioElement) {
      this.init();
    }

    if (this.isMuted) {
      this.isPlaying = false;
      this.notify();
      return false;
    }

    try {
      if (this.audioElement && !this.isUsingSynthFallback) {
        this.audioElement.volume = this.volume;
        await this.audioElement.play();
        this.isPlaying = true;
        this.isAutoplayBlocked = false;
        this.notify();
        return true;
      } else {
        this.startSynthesizedAmbient();
        this.isPlaying = true;
        this.isAutoplayBlocked = false;
        this.notify();
        return true;
      }
    } catch (err: unknown) {
      const error = err as { name?: string };
      if (error && error.name === 'NotAllowedError') {
        this.isAutoplayBlocked = true;
      } else {
        // If playback failed for media error, try synthesized ambience
        this.startSynthesizedAmbient();
      }
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopSynthesizedAmbient();
    this.isPlaying = false;
    this.notify();
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('diwali_audio_muted', String(this.isMuted));
    }

    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }

    if (this.synthGainNode) {
      this.synthGainNode.gain.value = this.isMuted ? 0 : 0.15;
    }

    if (this.isMuted) {
      this.pause();
    } else {
      this.isAutoplayBlocked = false;
      this.play().catch(() => {});
    }

    this.notify();
    return this.isMuted;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioElement && !this.isMuted) {
      this.audioElement.volume = this.volume;
    }
    if (this.synthGainNode && !this.isMuted) {
      this.synthGainNode.gain.value = this.volume * 0.2;
    }
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      isAutoplayBlocked: this.isAutoplayBlocked,
      isUsingSynthFallback: this.isUsingSynthFallback,
    };
  }

  /**
   * Ambient Indian Tanpura & Temple Bell Soundscape
   * Used as high-fidelity fallback if audio media cannot be played or loaded.
   */
  private startSynthesizedAmbient() {
    if (typeof window === 'undefined') return;
    if (this.synthGainNode || this.isMuted) return;

    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      this.audioCtx = new AudioCtxClass();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }

      this.isUsingSynthFallback = true;
      this.synthGainNode = this.audioCtx.createGain();
      this.synthGainNode.gain.value = this.isMuted ? 0 : 0.15;

      const masterFilter = this.audioCtx.createBiquadFilter();
      masterFilter.type = 'lowpass';
      masterFilter.frequency.value = 680;
      masterFilter.Q.value = 3;

      this.synthGainNode.connect(masterFilter);
      masterFilter.connect(this.audioCtx.destination);

      // C# Drone frequencies (Sa - Pa - Sa')
      const freqs = [138.59, 207.65, 277.18, 415.30];
      this.synthOscillators = freqs.map((freq) => {
        const osc = this.audioCtx!.createOscillator();
        const oscGain = this.audioCtx!.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;
        oscGain.gain.value = 0.08;

        osc.connect(oscGain);
        oscGain.connect(this.synthGainNode!);
        osc.start();
        return osc;
      });

      // LFO for breathing warmth
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.frequency.value = 0.2; // Slow 5-second cycle
      lfoGain.gain.value = 180;
      lfo.connect(lfoGain);
      lfoGain.connect(masterFilter.frequency);
      lfo.start();
      this.synthOscillators.push(lfo);

      // Random sacred bell chime every 7-12 seconds
      this.chimeTimer = setInterval(() => {
        if (this.audioCtx && !this.isMuted && this.isPlaying) {
          this.playBellChime();
        }
      }, 8500);

      this.isPlaying = true;
      this.notify();
    } catch {
      // AudioContext unavailable
    }
  }

  public playBellChime(freq = 880) {
    if (!this.audioCtx || this.isMuted) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.99, now + 1.8);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 2.6);
    } catch {
      // ignore
    }
  }

  private stopSynthesizedAmbient() {
    if (this.chimeTimer) {
      clearInterval(this.chimeTimer);
      this.chimeTimer = null;
    }
    this.synthOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    this.synthOscillators = [];
    if (this.synthGainNode) {
      this.synthGainNode.disconnect();
      this.synthGainNode = null;
    }
  }
}

export const audioEngine = new DiwaliAudioEngine();
