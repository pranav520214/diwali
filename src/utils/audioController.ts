/**
 * Audio Controller & Autoplay Policy Resilience Utility
 * 
 * Complies with strict browser autoplay policies across:
 * - Google Chrome (Media Engagement Index - MEI)
 * - Apple iOS Safari & iPadOS (WebKit User Gesture Restriction)
 * - macOS Safari
 * - Mozilla Firefox & Microsoft Edge
 * - Android Chrome
 */

export type AudioState = "unstarted" | "playing" | "paused" | "blocked" | "error";

export interface AudioControllerOptions {
  src: string;
  loop?: boolean;
  initialVolume?: number;
  onStateChange?: (state: AudioState, isMuted: boolean) => void;
}

export class SafeAudioController {
  private audio: HTMLAudioElement | null = null;
  private state: AudioState = "unstarted";
  private isMuted: boolean = false;
  private volume: number = 0.7;
  private unlockHandlerAttached: boolean = false;
  private options: AudioControllerOptions;

  constructor(options: AudioControllerOptions) {
    this.options = options;
    this.volume = options.initialVolume ?? 0.7;
    if (typeof window !== "undefined") {
      this.initAudio();
    }
  }

  private initAudio() {
    try {
      this.audio = new Audio(this.options.src);
      this.audio.loop = this.options.loop ?? true;
      this.audio.volume = this.volume;
      this.audio.preload = "auto";
      // Crucial for iOS Safari inline playback without taking full screen media player
      this.audio.setAttribute("playsinline", "true");
      this.audio.setAttribute("webkit-playsinline", "true");

      this.audio.addEventListener("ended", () => {
        if (!this.audio?.loop) {
          this.setState("paused");
        }
      });

      this.audio.addEventListener("error", (e) => {
        console.warn("[SafeAudioController] Audio load error:", e);
        this.setState("error");
      });
    } catch (err) {
      console.warn("[SafeAudioController] Initialization failed:", err);
      this.setState("error");
    }
  }

  private setState(newState: AudioState) {
    this.state = newState;
    this.options.onStateChange?.(this.state, this.isMuted);
  }

  /**
   * Attempt playback with graceful fallback if browser blocks autoplay.
   */
  public async play(): Promise<boolean> {
    if (!this.audio) return false;

    try {
      await this.audio.play();
      this.setState("playing");
      return true;
    } catch (error: unknown) {
      const err = error as Error;
      if (err.name === "NotAllowedError" || err.name === "AutoplayBlocked") {
        // Browser blocked audio autoplay due to missing user gesture
        this.setState("blocked");
        this.attachFirstGestureUnlock();
      } else {
        console.warn("[SafeAudioController] Playback error:", err);
        this.setState("error");
      }
      return false;
    }
  }

  public pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.setState("paused");
  }

  public togglePlay(): boolean {
    if (this.state === "playing") {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public toggleMute(): boolean {
    if (!this.audio) return false;
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    this.options.onStateChange?.(this.state, this.isMuted);
    return this.isMuted;
  }

  public setVolume(val: number) {
    if (!this.audio) return;
    this.volume = Math.max(0, Math.min(1, val));
    this.audio.volume = this.volume;
  }

  /**
   * Attach temporary window listeners to resume/unlock audio as soon as user taps or clicks.
   */
  private attachFirstGestureUnlock() {
    if (this.unlockHandlerAttached || typeof window === "undefined") return;
    this.unlockHandlerAttached = true;

    const unlock = async () => {
      if (this.state === "blocked" && this.audio) {
        try {
          await this.audio.play();
          this.setState("playing");
        } catch {
          // Keep blocked if gesture was insufficient
        }
      }
      cleanup();
    };

    const cleanup = () => {
      this.unlockHandlerAttached = false;
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
    };

    window.addEventListener("pointerdown", unlock, { once: true, passive: true });
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("click", unlock, { once: true, passive: true });
    window.addEventListener("keydown", unlock, { once: true, passive: true });
  }

  public getState(): AudioState {
    return this.state;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public destroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = "";
      this.audio = null;
    }
  }
}
