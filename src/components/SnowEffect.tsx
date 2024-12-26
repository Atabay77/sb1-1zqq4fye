import React, { useEffect, useRef } from 'react';

interface Snowflake {
  x: number;
  y: number;
  opacity: number;
  speedX: number;
  speedY: number;
  radius: number;
}

export function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const snowflakes: Snowflake[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      opacity: Math.random(),
      speedX: Math.random() * 1 + 0.5,
      speedY: Math.random() * 1 + 0.5,
      radius: Math.random() * 4 + 1
    }));

    function drawSnowflakes() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(sf => {
        ctx.beginPath();
        ctx.arc(sf.x, sf.y, sf.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${sf.opacity})`;
        ctx.fill();

        sf.x += sf.speedX;
        sf.y += sf.speedY;

        if (sf.y > canvas.height) {
          sf.y = -sf.radius;
          sf.x = Math.random() * canvas.width;
        }

        if (sf.x > canvas.width) {
          sf.x = -sf.radius;
          sf.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(drawSnowflakes);
    }

    drawSnowflakes();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}