/**
 * Happy Diwali — Cinematic Desi Maximalist Experience
 * Continuous Micro-Motion System
 * 
 * 1. Organic Diya Flame Flicker (Multi-frequency sine perturbations & turbulent convection)
 * 2. Counter-Rotating Mandala Gears (Concentric rings with continuous silky easing)
 * 3. 60fps GPU-Accelerated Floating Marigold Petals & Golden Fireflies (Canvas/RAF & GSAP)
 * 4. Harmonic Audio Visualizer Wave Dynamics
 */

import { gsap } from 'gsap';

export interface FlameFlickerOptions {
  baseScaleY?: number;
  baseScaleX?: number;
  flickerIntensity?: number; // 0 to 1
}

export interface ParticleOptions {
  count?: number;
  canvasEl?: HTMLCanvasElement | null;
  speedMultiplier?: number;
}

/**
 * 1. ORGANIC DIYA FLAME FLICKER ENGINE
 * Emulates natural candle convection with compounded sine waves + micro-turbulence
 */
export function startFlameFlicker(
  flameEl: HTMLElement | null,
  auraEl?: HTMLElement | null,
  options: FlameFlickerOptions = {}
): () => void {
  if (!flameEl) return () => {};

  const {
    baseScaleY = 1.0,
    baseScaleX = 1.0,
    flickerIntensity = 0.8,
  } = options;

  let isKilled = false;
  const tweens: gsap.core.Tween[] = [];

  // Tween 1: Low-frequency thermal breathing (period ~1.4s)
  const breathingTween = gsap.to(flameEl, {
    scaleY: baseScaleY * (1 + 0.08 * flickerIntensity),
    scaleX: baseScaleX * (1 - 0.04 * flickerIntensity),
    duration: 1.2 + Math.random() * 0.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
  tweens.push(breathingTween);

  // Tween 2: High-frequency convective flutter & wind shear (period ~0.15s - 0.35s)
  const runConvectiveFlutter = () => {
    if (isKilled) return;
    const nextDuration = 0.12 + Math.random() * 0.22;
    const skew = (Math.random() - 0.5) * 5.0 * flickerIntensity;
    const scaleXMod = (1 + (Math.random() - 0.5) * 0.12 * flickerIntensity) * baseScaleX;
    const scaleYMod = (1 + (Math.random() - 0.5) * 0.15 * flickerIntensity) * baseScaleY;

    const t = gsap.to(flameEl, {
      skewX: skew,
      scaleX: scaleXMod,
      scaleY: scaleYMod,
      duration: nextDuration,
      ease: 'power1.inOut',
      onComplete: runConvectiveFlutter,
    });
    tweens.push(t);
  };
  runConvectiveFlutter();

  // Tween 3: Radial Glow Modulation (if auraEl provided)
  if (auraEl) {
    const runAuraPulse = () => {
      if (isKilled) return;
      const duration = 0.25 + Math.random() * 0.35;
      const opacity = 0.75 + Math.random() * 0.25;
      const scale = 1.05 + Math.random() * 0.18;

      const t = gsap.to(auraEl, {
        opacity,
        scale,
        duration,
        ease: 'sine.inOut',
        onComplete: runAuraPulse,
      });
      tweens.push(t);
    };
    runAuraPulse();
  }

  // Cleanup handler
  return () => {
    isKilled = true;
    tweens.forEach((t) => t.kill());
    gsap.set(flameEl, { scaleX: baseScaleX, scaleY: baseScaleY, skewX: 0 });
    if (auraEl) {
      gsap.set(auraEl, { opacity: 0.8, scale: 1 });
    }
  };
}

/**
 * 2. COUNTER-ROTATING MANDALA GEARS ENGINE
 * Silky continuous counter-rotations with different orbital speeds
 */
export function startMandalaRotation(
  innerRing: HTMLElement | null,
  midRing: HTMLElement | null,
  outerRing: HTMLElement | null
): () => void {
  const tweens: gsap.core.Tween[] = [];

  // Inner ring: Clockwise, 80s per full rotation
  if (innerRing) {
    tweens.push(
      gsap.to(innerRing, {
        rotation: '+=360',
        duration: 80,
        repeat: -1,
        ease: 'none',
      })
    );
  }

  // Middle ring: Counter-Clockwise, 115s per full rotation
  if (midRing) {
    tweens.push(
      gsap.to(midRing, {
        rotation: '-=360',
        duration: 115,
        repeat: -1,
        ease: 'none',
      })
    );
  }

  // Outer ring: Clockwise, 160s per full rotation
  if (outerRing) {
    tweens.push(
      gsap.to(outerRing, {
        rotation: '+=360',
        duration: 160,
        repeat: -1,
        ease: 'none',
      })
    );
  }

  return () => {
    tweens.forEach((t) => t.kill());
  };
}

/**
 * 3. 60FPS GPU-ACCELERATED PARTICLES (CANVAS & RAF)
 * Renders floating marigold petals and fireflies with 3D tumble physics
 */
export interface ParticleEngineControls {
  start: () => void;
  stop: () => void;
  resize: (width: number, height: number) => void;
  destroy: () => void;
}

interface MarigoldPetal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  tumble: number;
  tumbleSpeed: number;
  color: string;
  opacity: number;
  waveOffset: number;
}

interface Firefly {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export function createParticleEngine(
  canvas: HTMLCanvasElement,
  options: {
    marigoldCount?: number;
    fireflyCount?: number;
  } = {}
): ParticleEngineControls {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return {
      start: () => {},
      stop: () => {},
      resize: () => {},
      destroy: () => {},
    };
  }

  const { marigoldCount = 28, fireflyCount = 45 } = options;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let animationFrameId: number | null = null;
  let isRunning = false;

  // Rich Marigold palette (Deep saffron, orange, golden yellow, turmeric)
  const petalColors = [
    '#ff8800', // Saffron orange
    '#ffaa00', // Deep golden marigold
    '#ffcc00', // Bright marigold yellow
    '#e65c00', // Terracotta orange
    '#d9480f', // Deep festive red-orange
  ];

  // Initialize Marigold Petals
  const petals: MarigoldPetal[] = Array.from({ length: marigoldCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 10 + Math.random() * 14,
    speedY: 0.7 + Math.random() * 1.3,
    speedX: (Math.random() - 0.5) * 0.8,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.03,
    tumble: Math.random() * Math.PI,
    tumbleSpeed: 0.02 + Math.random() * 0.035,
    color: petalColors[Math.floor(Math.random() * petalColors.length)],
    opacity: 0.65 + Math.random() * 0.35,
    waveOffset: Math.random() * Math.PI * 2,
  }));

  // Initialize Fireflies (Golden ambient embers)
  const fireflies: Firefly[] = Array.from({ length: fireflyCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 1.2 + Math.random() * 2.2,
    speedY: -(0.3 + Math.random() * 0.7), // Ascends gently
    speedX: (Math.random() - 0.5) * 0.5,
    baseAlpha: 0.3 + Math.random() * 0.6,
    alpha: 0.5,
    pulseSpeed: 0.03 + Math.random() * 0.05,
    pulsePhase: Math.random() * Math.PI * 2,
  }));

  let time = 0;

  const render = () => {
    if (!isRunning) return;
    time += 0.016;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw & Update Fireflies (Warm golden sparks)
    for (let i = 0; i < fireflies.length; i++) {
      const f = fireflies[i];
      f.pulsePhase += f.pulseSpeed;
      f.alpha = f.baseAlpha + Math.sin(f.pulsePhase) * 0.35;
      if (f.alpha < 0.1) f.alpha = 0.1;

      f.y += f.speedY;
      f.x += f.speedX + Math.sin(time + i) * 0.3;

      // Wrap around screen
      if (f.y < -10) f.y = height + 10;
      if (f.x < -10) f.x = width + 10;
      if (f.x > width + 10) f.x = -10;

      // Render glowing firefly orb
      ctx.save();
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 220, 110, ${f.alpha.toFixed(2)})`;
      ctx.shadowColor = 'rgba(255, 200, 50, 0.9)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }

    // 2. Draw & Update Marigold Petals (Simulating teardrop petal curvature & 3D spin)
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.tumble += p.tumbleSpeed;
      p.rotation += p.rotationSpeed;
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(time * 1.5 + p.waveOffset) * 0.9;

      // Wrap around
      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      // 3D tumble projection (scaleY simulates flipping in space)
      const scaleY = Math.cos(p.tumble);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(1, scaleY);

      // Render petal teardrop / heart geometry
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.6);
      ctx.bezierCurveTo(
        p.size * 0.5,
        -p.size * 0.5,
        p.size * 0.55,
        p.size * 0.4,
        0,
        p.size * 0.7
      );
      ctx.bezierCurveTo(
        -p.size * 0.55,
        p.size * 0.4,
        -p.size * 0.5,
        -p.size * 0.5,
        0,
        -p.size * 0.6
      );

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowColor = 'rgba(230, 92, 0, 0.4)';
      ctx.shadowBlur = 6;
      ctx.fill();

      // Delicate inner petal rib vein
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.45);
      ctx.lineTo(0, p.size * 0.5);
      ctx.strokeStyle = 'rgba(255, 235, 150, 0.45)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    }

    animationFrameId = requestAnimationFrame(render);
  };

  const start = () => {
    if (isRunning) return;
    isRunning = true;
    render();
  };

  const stop = () => {
    isRunning = false;
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  const resize = (w: number, h: number) => {
    width = canvas.width = w;
    height = canvas.height = h;
  };

  const destroy = () => {
    stop();
    petals.length = 0;
    fireflies.length = 0;
  };

  return {
    start,
    stop,
    resize,
    destroy,
  };
}

/**
 * 4. AUDIO VISUALIZER OSCILLATOR MICRO-MOTION
 * Animate frequency bars or glowing pulse rings depending on audio state
 */
export function startAudioVisualizer(
  bars: HTMLElement[] | NodeListOf<HTMLElement> | null,
  isPlaying: boolean
): () => void {
  if (!bars || bars.length === 0) return () => {};

  const barElements = Array.from(bars);
  const tweens: gsap.core.Tween[] = [];

  if (!isPlaying) {
    // Idle gentle wave
    barElements.forEach((bar, index) => {
      const t = gsap.to(bar, {
        scaleY: 0.25 + 0.1 * Math.sin(index * 0.5),
        duration: 0.6,
        ease: 'power2.out',
      });
      tweens.push(t);
    });

    return () => tweens.forEach((t) => t.kill());
  }

  // Playing active state: rhythmic harmonic dance
  barElements.forEach((bar, index) => {
    const randomizeBar = () => {
      const targetScale = 0.3 + Math.random() * 0.7;
      const duration = 0.12 + Math.random() * 0.18;

      const t = gsap.to(bar, {
        scaleY: targetScale,
        duration,
        ease: 'power1.inOut',
        onComplete: randomizeBar,
      });
      tweens.push(t);
    };

    // Stagger start
    gsap.delayedCall(index * 0.04, randomizeBar);
  });

  return () => {
    tweens.forEach((t) => t.kill());
  };
}
