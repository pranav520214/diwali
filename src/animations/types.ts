/**
 * Happy Diwali — Cinematic Desi Maximalist Experience
 * Types & Interfaces for GSAP Motion Architecture
 */

export interface DiwaliAnimationRefs {
  // Master Container & Background
  container: HTMLElement | null;
  backdrop: HTMLElement | null;

  // Scene 1: The Pinhole & Emergence
  pinhole: HTMLElement | null;
  diyaAura: HTMLElement | null;
  initialEmbers: HTMLElement | null;

  // Scene 2: 3D Diya Hinge & Golden Rays
  diyaContainer: HTMLElement | null;
  diya3dStage: HTMLElement | null;
  diyaHalfLeft: HTMLElement | null;
  diyaHalfRight: HTMLElement | null;
  diyaBase: HTMLElement | null;
  diyaFlame: HTMLElement | null;
  innerSanctuaryLight: HTMLElement | null;
  lightRays: HTMLElement | null;
  volumetricAurora: HTMLElement | null;

  // Scene 3: Sacred Typography & Blossoming Mandala
  greetingContainer: HTMLElement | null;
  devanagariChars: HTMLElement[] | NodeListOf<HTMLElement> | null;
  latinChars: HTMLElement[] | NodeListOf<HTMLElement> | null;
  goldShimmerSweep: HTMLElement | null;
  mandalaRingInner: HTMLElement | null;
  mandalaRingMiddle: HTMLElement | null;
  mandalaRingOuter: HTMLElement | null;
  blossomPetals: Element[] | NodeListOf<Element> | null;

  // Scene 4: Festive Homepage Expansion
  homepageHero: HTMLElement | null;
  subGreeting: HTMLElement | null;
  ctaButtons: HTMLElement[] | NodeListOf<HTMLElement> | null;
  peripheralDiyas: HTMLElement[] | NodeListOf<HTMLElement> | null;
  marigoldContainer: HTMLElement | null;
  sparklesContainer: HTMLElement | null;
  audioVisualizer: HTMLElement | null;
  skipButton: HTMLElement | null;
}

export type SceneId = 'scene1' | 'scene2' | 'scene3' | 'scene4' | 'settled';

export interface TimelineCallbacks {
  onSceneStart?: (scene: SceneId) => void;
  onSceneComplete?: (scene: SceneId) => void;
  onTimelineComplete?: () => void;
  onAudioCue?: (cue: 'ignite' | 'openHinge' | 'shimmerSweep' | 'festiveBurst') => void;
}

export interface DiwaliTimelineOptions {
  autoPlay?: boolean;
  reducedMotion?: boolean;
  callbacks?: TimelineCallbacks;
}

export interface MicroMotionControls {
  startFlameFlicker: (flameEl: HTMLElement, auraEl?: HTMLElement | null) => () => void;
  startMandalaRotation: (
    innerRing: HTMLElement | null,
    midRing: HTMLElement | null,
    outerRing: HTMLElement | null
  ) => () => void;
  startFloatingParticles: (
    container: HTMLElement | null,
    type: 'marigold' | 'firefly',
    count?: number
  ) => () => void;
  startAudioVisualizerPulse: (
    bars: HTMLElement[] | NodeListOf<HTMLElement> | null,
    isPlaying: boolean
  ) => () => void;
}
