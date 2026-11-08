'use client';

import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  color: string;
  opacity: number;
  swayOffset: number;
  swaySpeed: number;
}

interface Ember {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  alpha: number;
  maxAlpha: number;
  pulseSpeed: number;
  color: string;
}

/**
 * Restrained & Graceful Marigold Petals & Golden Embers
 * - Subtle, slow, cinematic floating motion (low density)
 * - 3D tumbling petals with organic wind sway
 * - Upward drifting warm candle embers
 * - Auto-pauses on background tabs via Page Visibility API
 */
export const FloatingPetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isTabVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        render(performance.now());
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Warm authentic festive palette
    const petalColors = [
      '#f77f00', // Saffron
      '#fcbf49', // Warm Marigold Gold
      '#e63946', // Royal Crimson
      '#d62828', // Deep Sindoor
      '#d4af37', // Antique Gold Leaf
    ];

    const emberColors = ['#fff3b0', '#ffd700', '#ffaa00'];

    // Restrained counts for elegant, non-cluttered atmosphere
    const petalCount = width < 768 ? 8 : 15;
    const emberCount = width < 768 ? 10 : 18;

    // Create Petals
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 8,
      speedY: Math.random() * 0.45 + 0.35, // Slow, meditative float
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.8,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.015 + 0.008,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.35 + 0.5,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.015 + 0.008,
    }));

    // Create Golden Embers
    const embers: Ember[] = Array.from({ length: emberCount }, () => {
      const maxAlpha = Math.random() * 0.5 + 0.3;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.2), // Upward drift
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * maxAlpha,
        maxAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      };
    });

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.scale(1, Math.cos(p.flip));

      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.5, -p.size * 0.5, p.size * 0.6, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.6, p.size * 0.5, -p.size * 0.5, -p.size * 0.5, 0, -p.size);

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fill();

      ctx.restore();
    };

    const drawEmber = (e: Ember) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
      ctx.fillStyle = e.color;
      ctx.globalAlpha = Math.max(0, e.alpha);
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    };

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isTabVisible) return;

      const delta = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Update & Draw Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y += e.speedY * delta;
        e.x += e.speedX * delta;
        e.alpha += Math.sin(time * e.pulseSpeed) * 0.01;

        if (e.y < -20) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }

        drawEmber(e);
      }

      // Update & Draw Petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.swayOffset += p.swaySpeed * delta;
        p.y += p.speedY * delta;
        p.x += (p.speedX + Math.sin(p.swayOffset) * 0.6) * delta;
        p.rotation += p.rotationSpeed * delta;
        p.flip += p.flipSpeed * delta;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
