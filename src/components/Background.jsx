import React, { useEffect, useRef } from 'react';

const Background = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // 1. Always handle resize so the canvas fits the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // 2. Clear the canvas immediately. 
    // This ensures that when switching Dark -> Light, the dots disappear instantly.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 3. LIGHT MODE CHECK: 
    // If we are in light mode, STOP here. 
    // The canvas remains transparent, revealing the "bg-[#F8FAFC]" from the CSS class.
    if (!darkMode) {
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    // ==========================================
    // DARK MODE ANIMATION LOGIC (Only runs if darkMode === true)
    // ==========================================
    let particles = [];

    class SmallNode {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; 
        this.vx = (Math.random() - 0.5) * 0.25; 
        this.vy = (Math.random() - 0.5) * 0.25;
        this.baseOpacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        // Dark Mode Color: Purple
        const color = '168, 85, 247'; 
        const pulse = this.baseOpacity + Math.abs(Math.sin(Date.now() * 0.001 + this.x)) * 0.3;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${pulse})`;
        ctx.fill();
      }
    }

    const init = () => {
      const count = window.innerWidth < 768 ? 30 : 60;
      particles = Array.from({ length: count }, () => new SmallNode());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.update();
        p.draw();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            const edgeOpacity = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(168, 85, 247, ${edgeOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]); // Re-run this effect whenever darkMode changes

  return (
    <canvas 
      ref={canvasRef} 
      // The CSS class handles the background color:
      // Dark Mode: Transparent (showing the animation on top of the black body background)
      // Light Mode: #F8FAFC (Solid Slate-50)
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700 bg-[#F8FAFC] dark:bg-transparent"
    />
  );
};

export default Background;