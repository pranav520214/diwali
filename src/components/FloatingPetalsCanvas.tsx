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

    // Color palettes
    const petalColors = [
      '#FF7F00', // Saffron Orange
      '#FFA500', // Marigold Yellow-Orange
      '#FFD700', // Golden Genda
      '#E63946', // Deep Festive Vermillion
      '#D00000', // Sindoor Crimson
      '#FFBF00', // Amber Gold
    ];

    const emberColors = ['#FFE259', '#FFA751', '#FFD700', '#FFF5B8'];

    const petalCount = width < 768 ? 22 : 45;
    const emberCount = width < 768 ? 25 : 55;

    // Create Petals
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 12 + 8,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.03 + 0.015,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.35 + 0.65,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01,
    }));

    // Create Embers
    const embers: Ember[] = Array.from({ length: emberCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.7,
      speedY: -(Math.random() * 0.7 + 0.3),
      speedX: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.8,
      maxAlpha: Math.random() * 0.6 + 0.4,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      color: emberColors[Math.floor(Math.random() * emberColors.length)],
    }));

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      const scaleX = Math.cos(p.flip);
      ctx.scale(scaleX, 1);

      ctx.beginPath();
      // Curved marigold petal shape
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(
        p.size * 0.7,
        -p.size * 0.5,
        p.size * 0.8,
        p.size * 0.3,
        0,
        p.size
      );
      ctx.bezierCurveTo(
        -p.size * 0.8,
        p.size * 0.3,
        -p.size * 0.7,
        -p.size * 0.5,
        0,
        -p.size
      );

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowColor = '#FF9F1C';
      ctx.shadowBlur = 6;
      ctx.fill();

      // Delicate inner vein
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.7);
      ctx.lineTo(0, p.size * 0.6);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    const drawEmber = (e: Ember) => {
      ctx.save();
      const glowGrad = ctx.createRadialGradient(
        e.x,
        e.y,
        0,
        e.x,
        e.y,
        e.radius * 3.5
      );
      glowGrad.addColorStop(0, e.color);
      glowGrad.addColorStop(0.3, e.color);
      glowGrad.addColorStop(1, 'rgba(255, 215, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.globalAlpha = e.alpha;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Sharp white hot core
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius * 0.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = (time: number) => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Render & Update Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y += e.speedY;
        e.x += e.speedX + Math.sin(time * 0.001 + i) * 0.3;
        e.alpha = (Math.sin(time * e.pulseSpeed) + 1) * 0.5 * e.maxAlpha;

        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        if (e.x < -10) e.x = width + 10;
        if (e.x > width + 10) e.x = -10;

        drawEmber(e);
      }

      // Render & Update Petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.swayOffset += p.swaySpeed;
        p.x += Math.sin(p.swayOffset) * 1.5 + p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;

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
      className="pointer-events-none fixed inset-0 z-10 h-full w-full"
      aria-hidden="true"
    />
  );
};
