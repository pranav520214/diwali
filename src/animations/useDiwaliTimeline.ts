'use client';

/**
 * Happy Diwali — Cinematic Desi Maximalist Experience
 * React 19 Hook for GSAP Diwali Master Timeline & Micro-Motions
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { DiwaliAnimationRefs, SceneId, TimelineCallbacks } from './types';
import { createDiwaliTimeline, DiwaliMasterTimeline } from './timeline';
import {
  startFlameFlicker,
  startMandalaRotation,
  createParticleEngine,
  ParticleEngineControls,
} from './microMotions';

export interface UseDiwaliTimelineOptions {
  autoPlay?: boolean;
  onSceneChange?: (scene: SceneId) => void;
  onAudioCue?: TimelineCallbacks['onAudioCue'];
}

export function useDiwaliTimeline(options: UseDiwaliTimelineOptions = {}) {
  const { autoPlay = true, onSceneChange, onAudioCue } = options;

  const [currentScene, setCurrentScene] = useState<SceneId>('scene1');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const isReducedMotion = useReducedMotion();

  // References container
  const refs = useRef<DiwaliAnimationRefs>({
    container: null,
    backdrop: null,
    pinhole: null,
    diyaAura: null,
    initialEmbers: null,
    diyaContainer: null,
    diya3dStage: null,
    diyaHalfLeft: null,
    diyaHalfRight: null,
    diyaBase: null,
    diyaFlame: null,
    innerSanctuaryLight: null,
    lightRays: null,
    volumetricAurora: null,
    greetingContainer: null,
    devanagariChars: null,
    latinChars: null,
    goldShimmerSweep: null,
    mandalaRingInner: null,
    mandalaRingMiddle: null,
    mandalaRingOuter: null,
    blossomPetals: null,
    homepageHero: null,
    subGreeting: null,
    ctaButtons: null,
    peripheralDiyas: null,
    marigoldContainer: null,
    sparklesContainer: null,
    audioVisualizer: null,
    skipButton: null,
  });

  // Micro-motion cleanup functions
  const microMotionCleanups = useRef<Array<() => void>>([]);
  const particleEngineRef = useRef<ParticleEngineControls | null>(null);
  const masterTimelineRef = useRef<DiwaliMasterTimeline | null>(null);

  // Launch micro-motions once settled
  const startContinuousMicroMotions = useCallback(() => {
    if (isReducedMotion) return;

    // 1. Organic Flame Flicker on primary central diya
    if (refs.current.diyaFlame) {
      const stopFlame = startFlameFlicker(
        refs.current.diyaFlame,
        refs.current.diyaAura,
        { flickerIntensity: 0.85 }
      );
      microMotionCleanups.current.push(stopFlame);
    }

    // 2. Rotating Mandala Gears
    if (
      refs.current.mandalaRingInner ||
      refs.current.mandalaRingMiddle ||
      refs.current.mandalaRingOuter
    ) {
      const stopMandala = startMandalaRotation(
        refs.current.mandalaRingInner,
        refs.current.mandalaRingMiddle,
        refs.current.mandalaRingOuter
      );
      microMotionCleanups.current.push(stopMandala);
    }
  }, [isReducedMotion]);

  // Initialize and run Timeline with GSAP Context
  const initTimeline = useCallback(() => {
    // Teardown previous instances
    microMotionCleanups.current.forEach((fn) => fn());
    microMotionCleanups.current = [];
    if (masterTimelineRef.current) {
      masterTimelineRef.current.kill();
      masterTimelineRef.current = null;
    }

    const ctx = gsap.context(() => {
      masterTimelineRef.current = createDiwaliTimeline(refs.current, {
        autoPlay,
        reducedMotion: isReducedMotion,
        callbacks: {
          onSceneStart: (scene) => {
            setCurrentScene(scene);
            onSceneChange?.(scene);
          },
          onSceneComplete: (scene) => {
            if (scene === 'scene4' || scene === 'settled') {
              setIsComplete(true);
              startContinuousMicroMotions();
            }
          },
          onTimelineComplete: () => {
            setIsComplete(true);
            startContinuousMicroMotions();
          },
          onAudioCue: (cue) => {
            onAudioCue?.(cue);
          },
        },
      });
    }, refs.current.container || undefined);

    return ctx;
  }, [autoPlay, isReducedMotion, onSceneChange, onAudioCue, startContinuousMicroMotions]);

  useEffect(() => {
    const ctx = initTimeline();

    return () => {
      ctx?.revert();
      microMotionCleanups.current.forEach((fn) => fn());
      microMotionCleanups.current = [];
      if (particleEngineRef.current) {
        particleEngineRef.current.destroy();
        particleEngineRef.current = null;
      }
    };
  }, [initTimeline]);

  // Skip Intro Handler
  const skip = useCallback((instant = false) => {
    if (masterTimelineRef.current) {
      masterTimelineRef.current.skipIntro(instant);
      setIsComplete(true);
      setCurrentScene('settled');
      startContinuousMicroMotions();
    }
  }, [startContinuousMicroMotions]);

  // Replay Intro Handler
  const replay = useCallback(() => {
    setIsComplete(false);
    setCurrentScene('scene1');
    microMotionCleanups.current.forEach((fn) => fn());
    microMotionCleanups.current = [];
    if (masterTimelineRef.current) {
      masterTimelineRef.current.replayIntro();
    }
  }, []);

  const setElementRef = useCallback(
    <K extends keyof DiwaliAnimationRefs>(key: K, el: DiwaliAnimationRefs[K]) => {
      refs.current[key] = el;
    },
    []
  );

  const initCanvasParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      if (isReducedMotion) return;
      if (particleEngineRef.current) particleEngineRef.current.destroy();
      particleEngineRef.current = createParticleEngine(canvas, {
        marigoldCount: 30,
        fireflyCount: 50,
      });
      particleEngineRef.current.start();
    },
    [isReducedMotion]
  );

  return {
    setElementRef,
    currentScene,
    isComplete,
    isReducedMotion,
    skip,
    replay,
    initCanvasParticles,
  };
}
