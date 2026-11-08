/**
 * Happy Diwali — Cinematic Desi Maximalist Experience
 * Master GSAP 4-Scene Timeline Choreography
 * 
 * Scene 1: Burgundy Void & Cosmic Pinhole Golden Spark
 * Scene 2: 3D Diya Hinge Aperture & Spilling Aurora Rays
 * Scene 3: Sacred Typography Reveal ("शुभ दीपावली" & "HAPPY DIWALI") & Blossoming Lotus Mandala
 * Scene 4: Maximalist Festive Expansion, Peripheral Diyas & Interactive UI Docking
 */

import { gsap } from 'gsap';
import { DiwaliAnimationRefs, DiwaliTimelineOptions, SceneId } from './types';

export interface DiwaliMasterTimeline {
  timeline: gsap.core.Timeline;
  skipIntro: (instant?: boolean) => void;
  replayIntro: () => void;
  seekScene: (scene: SceneId) => void;
  kill: () => void;
}

/**
 * Creates and starts the cinematic 4-scene Diwali master timeline.
 */
export function createDiwaliTimeline(
  refs: DiwaliAnimationRefs,
  options: DiwaliTimelineOptions = {}
): DiwaliMasterTimeline {
  const {
    autoPlay = true,
    reducedMotion = false,
    callbacks = {},
  } = options;

  // Master GSAP Timeline instance
  const masterTl = gsap.timeline({
    paused: !autoPlay,
    defaults: {
      ease: 'power3.out',
    },
    onComplete: () => {
      callbacks.onTimelineComplete?.();
    },
  });

  // Handle prefers-reduced-motion: Instant graceful final state
  if (reducedMotion) {
    applyReducedMotionState(refs, masterTl, callbacks);
    return {
      timeline: masterTl,
      skipIntro: () => {},
      replayIntro: () => {},
      seekScene: () => {},
      kill: () => masterTl.kill(),
    };
  }

  /* =========================================================================
   * INITIAL STATE SETUP (Zero Layout Shift, Pre-computed CSS 3D transforms)
   * ========================================================================= */
  masterTl.set(refs.container, {
    visibility: 'visible',
    opacity: 1,
  });

  if (refs.backdrop) {
    masterTl.set(refs.backdrop, {
      opacity: 1,
      backgroundColor: '#0a0104', // Deep pitch burgundy
    });
  }

  if (refs.pinhole) {
    masterTl.set(refs.pinhole, {
      scale: 0,
      opacity: 0,
      transformOrigin: '50% 50%',
      filter: 'blur(0px)',
    });
  }

  if (refs.diyaContainer) {
    masterTl.set(refs.diyaContainer, {
      opacity: 0,
      scale: 0.72,
      y: 45,
      transformOrigin: '50% 65%',
    });
  }

  if (refs.diyaAura) {
    masterTl.set(refs.diyaAura, {
      opacity: 0,
      scale: 0.6,
      transformOrigin: '50% 50%',
    });
  }

  if (refs.diya3dStage) {
    masterTl.set(refs.diya3dStage, {
      perspective: 1200,
      transformStyle: 'preserve-3d',
    });
  }

  if (refs.diyaHalfLeft) {
    masterTl.set(refs.diyaHalfLeft, {
      transformOrigin: '0% 50%', // Left hinge boundary
      rotateY: 0,
      rotateZ: 0,
      z: 0,
      transformStyle: 'preserve-3d',
      willChange: 'transform',
    });
  }

  if (refs.diyaHalfRight) {
    masterTl.set(refs.diyaHalfRight, {
      transformOrigin: '100% 50%', // Right hinge boundary
      rotateY: 0,
      rotateZ: 0,
      z: 0,
      transformStyle: 'preserve-3d',
      willChange: 'transform',
    });
  }

  if (refs.innerSanctuaryLight) {
    masterTl.set(refs.innerSanctuaryLight, {
      scale: 0,
      opacity: 0,
      transformOrigin: '50% 50%',
    });
  }

  if (refs.lightRays) {
    masterTl.set(refs.lightRays, {
      scale: 0.1,
      opacity: 0,
      rotation: 0,
      transformOrigin: '50% 50%',
      willChange: 'transform, opacity',
    });
  }

  if (refs.volumetricAurora) {
    masterTl.set(refs.volumetricAurora, {
      scale: 0.3,
      opacity: 0,
      transformOrigin: '50% 50%',
    });
  }

  if (refs.diyaFlame) {
    masterTl.set(refs.diyaFlame, {
      scaleY: 0.05,
      scaleX: 0.2,
      opacity: 0,
      transformOrigin: '50% 90%',
      willChange: 'transform',
    });
  }

  if (refs.initialEmbers) {
    masterTl.set(refs.initialEmbers, {
      opacity: 0,
    });
  }

  // Scene 3 elements
  if (refs.greetingContainer) {
    masterTl.set(refs.greetingContainer, {
      opacity: 0,
      y: 35,
    });
  }

  if (refs.devanagariChars && refs.devanagariChars.length > 0) {
    masterTl.set(refs.devanagariChars, {
      opacity: 0,
      y: 40,
      scale: 0.7,
      filter: 'blur(10px)',
      display: 'inline-block',
      willChange: 'transform, opacity, filter',
    });
  }

  if (refs.latinChars && refs.latinChars.length > 0) {
    masterTl.set(refs.latinChars, {
      opacity: 0,
      y: 35,
      rotateX: -65,
      transformOrigin: '50% 100%',
      display: 'inline-block',
      willChange: 'transform, opacity',
    });
  }

  if (refs.goldShimmerSweep) {
    masterTl.set(refs.goldShimmerSweep, {
      xPercent: -150,
      opacity: 0,
    });
  }

  if (refs.mandalaRingInner) {
    masterTl.set(refs.mandalaRingInner, {
      scale: 0.2,
      opacity: 0,
      rotation: -120,
      transformOrigin: '50% 50%',
    });
  }

  if (refs.mandalaRingMiddle) {
    masterTl.set(refs.mandalaRingMiddle, {
      scale: 0.15,
      opacity: 0,
      rotation: 140,
      transformOrigin: '50% 50%',
    });
  }

  if (refs.mandalaRingOuter) {
    masterTl.set(refs.mandalaRingOuter, {
      scale: 0.1,
      opacity: 0,
      rotation: -180,
      transformOrigin: '50% 50%',
    });
  }

  if (refs.blossomPetals && refs.blossomPetals.length > 0) {
    masterTl.set(refs.blossomPetals, {
      scale: 0,
      opacity: 0,
      transformOrigin: '50% 50%',
    });
  }

  // Scene 4 elements
  if (refs.homepageHero) {
    masterTl.set(refs.homepageHero, {
      opacity: 0,
      y: 20,
    });
  }

  if (refs.subGreeting) {
    masterTl.set(refs.subGreeting, {
      opacity: 0,
      y: 25,
    });
  }

  if (refs.ctaButtons && refs.ctaButtons.length > 0) {
    masterTl.set(refs.ctaButtons, {
      opacity: 0,
      y: 20,
      scale: 0.92,
      pointerEvents: 'none',
    });
  }

  if (refs.peripheralDiyas && refs.peripheralDiyas.length > 0) {
    masterTl.set(refs.peripheralDiyas, {
      opacity: 0,
      scale: 0.45,
      y: 35,
    });
  }

  if (refs.marigoldContainer) {
    masterTl.set(refs.marigoldContainer, {
      opacity: 0,
    });
  }

  if (refs.sparklesContainer) {
    masterTl.set(refs.sparklesContainer, {
      opacity: 0,
    });
  }

  if (refs.audioVisualizer) {
    masterTl.set(refs.audioVisualizer, {
      opacity: 0,
      scale: 0.8,
    });
  }

  if (refs.skipButton) {
    masterTl.set(refs.skipButton, {
      opacity: 0,
      pointerEvents: 'none',
    });
  }

  /* =========================================================================
   * SCENE 1: THE COSMIC SPARK & CENTRAL EMERGENCE (0.0s – 3.5s)
   * ========================================================================= */
  masterTl.addLabel('scene1', 0.0);
  masterTl.call(() => callbacks.onSceneStart?.('scene1'), [], 0.0);

  // Fade in skip button early so the user has immediate control
  if (refs.skipButton) {
    masterTl.to(
      refs.skipButton,
      {
        opacity: 0.85,
        pointerEvents: 'auto',
        duration: 0.6,
        ease: 'power2.out',
      },
      0.4
    );
  }

  // 1. Pinhole Golden Light expands from the deep burgundy void
  if (refs.pinhole) {
    masterTl.to(
      refs.pinhole,
      {
        opacity: 1,
        scale: 1.4,
        duration: 0.8,
        ease: 'power2.out',
      },
      0.2
    );

    masterTl.to(
      refs.pinhole,
      {
        scale: 3.8,
        opacity: 0.8,
        filter: 'blur(16px)',
        duration: 1.6,
        ease: 'power2.inOut',
      },
      0.9
    );
  }

  // 2. Backdrop deepens and warms into radial burgundy glow
  if (refs.backdrop) {
    masterTl.to(
      refs.backdrop,
      {
        backgroundColor: '#160209',
        duration: 2.2,
        ease: 'power1.inOut',
      },
      0.5
    );
  }

  // 3. Central Diya emerges through the golden haze
  if (refs.diyaContainer) {
    masterTl.to(
      refs.diyaContainer,
      {
        opacity: 1,
        scale: 1.0,
        y: 0,
        duration: 1.8,
        ease: 'power3.out',
      },
      1.2
    );
  }

  // 4. Diya warm pulsating glow aura
  if (refs.diyaAura) {
    masterTl.to(
      refs.diyaAura,
      {
        opacity: 0.85,
        scale: 1.25,
        duration: 2.0,
        ease: 'sine.out',
      },
      1.4
    );
  }

  // 5. Initial flame strike and ignition burst
  if (refs.diyaFlame) {
    masterTl.call(() => callbacks.onAudioCue?.('ignite'), [], 1.6);

    masterTl.to(
      refs.diyaFlame,
      {
        opacity: 1,
        scaleY: 1.15,
        scaleX: 1.08,
        duration: 0.7,
        ease: 'back.out(2.2)',
      },
      1.6
    );

    masterTl.to(
      refs.diyaFlame,
      {
        scaleY: 1.0,
        scaleX: 1.0,
        duration: 0.6,
        ease: 'power1.inOut',
      },
      2.3
    );
  }

  // 6. Floating initial embers drift up
  if (refs.initialEmbers) {
    masterTl.to(
      refs.initialEmbers,
      {
        opacity: 0.9,
        duration: 1.2,
        ease: 'power2.out',
      },
      2.0
    );
  }

  masterTl.call(() => callbacks.onSceneComplete?.('scene1'), [], 3.5);

  /* =========================================================================
   * SCENE 2: THE SACRED APERTURE — 3D HINGE OPENING & AURORA RAYS (3.5s – 6.3s)
   * ========================================================================= */
  masterTl.addLabel('scene2', 3.5);
  masterTl.call(() => callbacks.onSceneStart?.('scene2'), [], 3.5);
  masterTl.call(() => callbacks.onAudioCue?.('openHinge'), [], 3.5);

  // 1. 3D Diya Halves open symmetrically around the central hinge (~48 degrees)
  if (refs.diyaHalfLeft) {
    masterTl.to(
      refs.diyaHalfLeft,
      {
        rotateY: -48,
        rotateZ: -2,
        z: 28,
        duration: 2.2,
        ease: 'power3.inOut',
      },
      3.5
    );
  }

  if (refs.diyaHalfRight) {
    masterTl.to(
      refs.diyaHalfRight,
      {
        rotateY: 48,
        rotateZ: 2,
        z: 28,
        duration: 2.2,
        ease: 'power3.inOut',
      },
      3.5
    );
  }

  // 2. Core Inner Sanctuary Light blazes out from the hinge opening
  if (refs.innerSanctuaryLight) {
    masterTl.to(
      refs.innerSanctuaryLight,
      {
        opacity: 1,
        scale: 1.9,
        duration: 1.8,
        ease: 'expo.out',
      },
      3.8
    );
  }

  // 3. Golden God Rays / Aurora rays sweep and radiate outward
  if (refs.lightRays) {
    masterTl.to(
      refs.lightRays,
      {
        opacity: 0.95,
        scale: 2.4,
        rotation: 35,
        duration: 2.4,
        ease: 'power2.out',
      },
      3.9
    );
  }

  // 4. Volumetric warm aurora cloud expands
  if (refs.volumetricAurora) {
    masterTl.to(
      refs.volumetricAurora,
      {
        opacity: 0.75,
        scale: 2.8,
        duration: 2.6,
        ease: 'sine.out',
      },
      4.0
    );
  }

  masterTl.call(() => callbacks.onSceneComplete?.('scene2'), [], 6.3);

  /* =========================================================================
   * SCENE 3: SACRED TYPOGRAPHY & BLOSSOMING LOTUS MANDALA (6.3s – 9.2s)
   * ========================================================================= */
  masterTl.addLabel('scene3', 6.3);
  masterTl.call(() => callbacks.onSceneStart?.('scene3'), [], 6.3);

  // 1. Container unvails
  if (refs.greetingContainer) {
    masterTl.to(
      refs.greetingContainer,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      6.3
    );
  }

  // 2. Concentric Mandala Rings blossom and counter-rotate outward
  if (refs.mandalaRingInner) {
    masterTl.to(
      refs.mandalaRingInner,
      {
        scale: 1.0,
        opacity: 0.88,
        rotation: 0,
        duration: 2.0,
        ease: 'back.out(1.4)',
      },
      6.3
    );
  }

  if (refs.mandalaRingMiddle) {
    masterTl.to(
      refs.mandalaRingMiddle,
      {
        scale: 1.0,
        opacity: 0.75,
        rotation: 0,
        duration: 2.2,
        ease: 'back.out(1.2)',
      },
      6.5
    );
  }

  if (refs.mandalaRingOuter) {
    masterTl.to(
      refs.mandalaRingOuter,
      {
        scale: 1.0,
        opacity: 0.65,
        rotation: 0,
        duration: 2.4,
        ease: 'power3.out',
      },
      6.7
    );
  }

  if (refs.blossomPetals && refs.blossomPetals.length > 0) {
    masterTl.to(
      refs.blossomPetals,
      {
        scale: 1.0,
        opacity: 1,
        stagger: 0.04,
        duration: 1.1,
        ease: 'back.out(1.8)',
      },
      6.6
    );
  }

  // 3. Devanagari Greeting ("शुभ दीपावली") staggered reveal
  if (refs.devanagariChars && refs.devanagariChars.length > 0) {
    masterTl.to(
      refs.devanagariChars,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        duration: 1.2,
        ease: 'back.out(1.5)',
      },
      6.8
    );
  }

  // 4. Latin Greeting ("HAPPY DIWALI") staggered 3D letter flip reveal
  if (refs.latinChars && refs.latinChars.length > 0) {
    masterTl.to(
      refs.latinChars,
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.035,
        duration: 1.1,
        ease: 'power3.out',
      },
      7.2
    );
  }

  // 5. 24K Gold Foil Shimmer Sweep across the greeting typography
  if (refs.goldShimmerSweep) {
    masterTl.call(() => callbacks.onAudioCue?.('shimmerSweep'), [], 7.8);

    masterTl.to(
      refs.goldShimmerSweep,
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
      },
      7.8
    );

    masterTl.to(
      refs.goldShimmerSweep,
      {
        xPercent: 220,
        duration: 1.5,
        ease: 'power2.inOut',
      },
      7.8
    );

    masterTl.to(
      refs.goldShimmerSweep,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      },
      8.9
    );
  }

  masterTl.call(() => callbacks.onSceneComplete?.('scene3'), [], 9.2);

  /* =========================================================================
   * SCENE 4: FESTIVE HOMEPAGE EXPANSION & UI DOCKING (9.2s – 11.5s+)
   * ========================================================================= */
  masterTl.addLabel('scene4', 9.2);
  masterTl.call(() => callbacks.onSceneStart?.('scene4'), [], 9.2);
  masterTl.call(() => callbacks.onAudioCue?.('festiveBurst'), [], 9.2);

  // 1. Central Diya gracefully settles into its hero focal anchor
  if (refs.diyaContainer) {
    masterTl.to(
      refs.diyaContainer,
      {
        scale: 0.9,
        y: -15,
        duration: 1.5,
        ease: 'power2.inOut',
      },
      9.2
    );
  }

  // 2. Light rays soften into glowing atmospheric ambient backlight
  if (refs.lightRays) {
    masterTl.to(
      refs.lightRays,
      {
        opacity: 0.4,
        scale: 2.0,
        duration: 1.8,
        ease: 'power1.out',
      },
      9.3
    );
  }

  // 3. Peripheral glowing Diyas cascade ignite along the lower festive arc
  if (refs.peripheralDiyas && refs.peripheralDiyas.length > 0) {
    masterTl.to(
      refs.peripheralDiyas,
      {
        opacity: 1,
        scale: 1.0,
        y: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: 'back.out(1.7)',
      },
      9.4
    );
  }

  // 4. Sub-greeting / Poetic Blessing text fades in
  if (refs.subGreeting) {
    masterTl.to(
      refs.subGreeting,
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power2.out',
      },
      9.7
    );
  }

  // 5. Interactive CTA Buttons emerge with bouncy spring
  if (refs.ctaButtons && refs.ctaButtons.length > 0) {
    masterTl.to(
      refs.ctaButtons,
      {
        opacity: 1,
        y: 0,
        scale: 1.0,
        pointerEvents: 'auto',
        stagger: 0.08,
        duration: 0.9,
        ease: 'back.out(1.5)',
      },
      10.0
    );
  }

  // 6. Ambient Marigold petals & Sparkle particle layers wake up
  if (refs.marigoldContainer) {
    masterTl.to(
      refs.marigoldContainer,
      {
        opacity: 1,
        duration: 1.4,
        ease: 'power1.out',
      },
      9.8
    );
  }

  if (refs.sparklesContainer) {
    masterTl.to(
      refs.sparklesContainer,
      {
        opacity: 1,
        duration: 1.4,
        ease: 'power1.out',
      },
      9.9
    );
  }

  // 7. Audio Visualizer icon & Skip button transition
  if (refs.audioVisualizer) {
    masterTl.to(
      refs.audioVisualizer,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      10.2
    );
  }

  if (refs.skipButton) {
    masterTl.to(
      refs.skipButton,
      {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.6,
        ease: 'power2.in',
      },
      10.4
    );
  }

  // Final settled label
  masterTl.addLabel('settled', 11.5);
  masterTl.call(() => {
    callbacks.onSceneComplete?.('scene4');
    callbacks.onSceneComplete?.('settled');
  }, [], 11.5);

  /* =========================================================================
   * CONTROLS: SKIP, REPLAY, SEEK
   * ========================================================================= */
  const skipIntro = (instant = false) => {
    if (instant) {
      masterTl.progress(1);
      return;
    }

    // Smooth quick dissolve to settled state in 0.35s
    gsap.to(masterTl, {
      time: masterTl.duration(),
      duration: 0.35,
      ease: 'power2.inOut',
      onComplete: () => {
        callbacks.onTimelineComplete?.();
      },
    });
  };

  const replayIntro = () => {
    masterTl.restart();
  };

  const seekScene = (scene: SceneId) => {
    masterTl.seek(scene);
  };

  const kill = () => {
    masterTl.kill();
  };

  return {
    timeline: masterTl,
    skipIntro,
    replayIntro,
    seekScene,
    kill,
  };
}

/**
 * Applies immediate final settled visual state when prefers-reduced-motion is enabled.
 */
function applyReducedMotionState(
  refs: DiwaliAnimationRefs,
  tl: gsap.core.Timeline,
  callbacks: DiwaliTimelineOptions['callbacks'] = {}
) {
  if (refs.container) refs.container.style.visibility = 'visible';
  if (refs.backdrop) refs.backdrop.style.backgroundColor = '#160209';

  if (refs.diyaContainer) {
    gsap.set(refs.diyaContainer, { opacity: 1, scale: 0.9, y: -15 });
  }

  if (refs.diyaHalfLeft) {
    gsap.set(refs.diyaHalfLeft, { rotateY: -48, rotateZ: -2, z: 28 });
  }

  if (refs.diyaHalfRight) {
    gsap.set(refs.diyaHalfRight, { rotateY: 48, rotateZ: 2, z: 28 });
  }

  if (refs.diyaFlame) {
    gsap.set(refs.diyaFlame, { opacity: 1, scaleY: 1, scaleX: 1 });
  }

  if (refs.diyaAura) {
    gsap.set(refs.diyaAura, { opacity: 0.8, scale: 1.15 });
  }

  if (refs.innerSanctuaryLight) {
    gsap.set(refs.innerSanctuaryLight, { opacity: 0.85, scale: 1.5 });
  }

  if (refs.lightRays) {
    gsap.set(refs.lightRays, { opacity: 0.35, scale: 1.8, rotation: 15 });
  }

  if (refs.greetingContainer) {
    gsap.set(refs.greetingContainer, { opacity: 1, y: 0 });
  }

  if (refs.devanagariChars && refs.devanagariChars.length > 0) {
    gsap.set(refs.devanagariChars, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' });
  }

  if (refs.latinChars && refs.latinChars.length > 0) {
    gsap.set(refs.latinChars, { opacity: 1, y: 0, rotateX: 0 });
  }

  if (refs.mandalaRingInner) {
    gsap.set(refs.mandalaRingInner, { opacity: 0.75, scale: 1, rotation: 0 });
  }

  if (refs.mandalaRingMiddle) {
    gsap.set(refs.mandalaRingMiddle, { opacity: 0.65, scale: 1, rotation: 0 });
  }

  if (refs.mandalaRingOuter) {
    gsap.set(refs.mandalaRingOuter, { opacity: 0.55, scale: 1, rotation: 0 });
  }

  if (refs.blossomPetals && refs.blossomPetals.length > 0) {
    gsap.set(refs.blossomPetals, { opacity: 1, scale: 1 });
  }

  if (refs.subGreeting) {
    gsap.set(refs.subGreeting, { opacity: 1, y: 0 });
  }

  if (refs.ctaButtons && refs.ctaButtons.length > 0) {
    gsap.set(refs.ctaButtons, { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' });
  }

  if (refs.peripheralDiyas && refs.peripheralDiyas.length > 0) {
    gsap.set(refs.peripheralDiyas, { opacity: 1, scale: 1, y: 0 });
  }

  if (refs.marigoldContainer) refs.marigoldContainer.style.opacity = '0.7';
  if (refs.sparklesContainer) refs.sparklesContainer.style.opacity = '0.7';
  if (refs.audioVisualizer) {
    gsap.set(refs.audioVisualizer, { opacity: 1, scale: 1 });
  }

  if (refs.skipButton) {
    gsap.set(refs.skipButton, { opacity: 0, pointerEvents: 'none' });
  }

  // Trigger completion
  callbacks.onSceneComplete?.('settled');
  callbacks.onTimelineComplete?.();
}
