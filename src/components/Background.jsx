import React, { useEffect, useRef } from 'react';

const createParticle = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: Math.random() * 1.5 + 0.5,
  vx: (Math.random() - 0.5) * 0.25,
  vy: (Math.random() - 0.5) * 0.25,
  baseOpacity: Math.random() * 0.4 + 0.1,
});

const updateParticle = (particle, width, height) => {
  const next = { ...particle };
  next.x += next.vx;
  next.y += next.vy;

  if (next.x < 0 || next.x > width) next.vx *= -1;
  if (next.y < 0 || next.y > height) next.vy *= -1;

  return next;
};

const Background = ({ darkMode, reduceMotion }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Do not animate in light mode or when users request reduced motion.
    if (!darkMode || reduceMotion) {
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    const init = () => {
      const count = window.innerWidth < 768 ? 24 : 48;
      particles = Array.from({ length: count }, () => createParticle(canvas.width, canvas.height));
    };

    const drawParticle = (particle, time) => {
      const pulse = particle.baseOpacity + Math.abs(Math.sin(time * 0.001 + particle.x)) * 0.3;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 85, 247, ${pulse})`;
      ctx.fill();
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const edgeOpacity = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${edgeOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.map((particle) => updateParticle(particle, canvas.width, canvas.height));

      particles.forEach((particle) => {
        drawParticle(particle, time);
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate(performance.now());

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700 bg-[#F8FAFC] dark:bg-transparent"
    />
  );
};

export default Background;
