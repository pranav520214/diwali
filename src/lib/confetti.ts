import confetti from 'canvas-confetti';

/**
 * Diwali Firework & Golden Sparkle Particle Bursts
 */
export const triggerDiwaliConfetti = (originX = 0.5, originY = 0.6) => {
  // Festive Royal Palette: 24K Gold, Saffron, Sindoor Red, Emerald Green, Warm Pearl
  const colors = ['#FFD700', '#FFA500', '#FF4500', '#D90429', '#00A86B', '#FFF275'];

  // Central Golden Starburst
  confetti({
    particleCount: 50,
    angle: 90,
    spread: 60,
    origin: { x: originX, y: originY },
    colors,
    startVelocity: 35,
    decay: 0.91,
    scalar: 1.1,
    shapes: ['star', 'circle'],
  });

  // Left & Right celebratory sparks
  setTimeout(() => {
    confetti({
      particleCount: 35,
      angle: 60,
      spread: 55,
      origin: { x: Math.max(0.1, originX - 0.2), y: originY + 0.05 },
      colors,
      startVelocity: 30,
      decay: 0.92,
    });
    confetti({
      particleCount: 35,
      angle: 120,
      spread: 55,
      origin: { x: Math.min(0.9, originX + 0.2), y: originY + 0.05 },
      colors,
      startVelocity: 30,
      decay: 0.92,
    });
  }, 150);
};

export const triggerGrandFireworkShow = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#FFD700', '#FF8C00', '#FF0055', '#FFD166', '#06D6A0'];

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 40 * (timeLeft / duration);

    confetti({
      particleCount,
      origin: { x: randomInRange(0.15, 0.45), y: Math.random() - 0.2 },
      colors,
      startVelocity: 30,
      spread: 360,
      ticks: 70,
      gravity: 0.8,
      decay: 0.93,
    });
    confetti({
      particleCount,
      origin: { x: randomInRange(0.55, 0.85), y: Math.random() - 0.2 },
      colors,
      startVelocity: 30,
      spread: 360,
      ticks: 70,
      gravity: 0.8,
      decay: 0.93,
    });
  }, 250);

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
};
