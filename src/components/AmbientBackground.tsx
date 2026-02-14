import React, { useEffect, useRef } from 'react';
export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 50;
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.08;
        this.speedY = (Math.random() - 0.5) * 0.08;
        // Adjusted opacity to be strictly ambient and cinematic
        this.opacity = Math.random() * 0.2 + 0.05;
      }
      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      rescale(oldWidth: number, oldHeight: number, newWidth: number, newHeight: number) {
        const ratioX = oldWidth > 0 ? newWidth / oldWidth : 1;
        const ratioY = oldHeight > 0 ? newHeight / oldHeight : 1;
        this.x = this.x * ratioX;
        this.y = this.y * ratioY;
        if (isNaN(this.x)) this.x = Math.random() * newWidth;
        if (isNaN(this.y)) this.y = Math.random() * newHeight;
      }
      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }
    const resize = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      if (particles.length === 0) {
        particles = Array.from({ length: particleCount }, () => new Particle(newWidth, newHeight));
      } else {
        particles.forEach(p => p.rescale(oldWidth, oldHeight, newWidth, newHeight));
      }
    };
    const render = () => {
      // Use black fill instead of clearRect for slight performance optimization with alpha: false
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);
      }
      animationFrameId = requestAnimationFrame(render);
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', resize);
    resize();
    render();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-[#050505]"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};