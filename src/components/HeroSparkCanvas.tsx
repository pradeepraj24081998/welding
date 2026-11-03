"use client";

import React, { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function HeroSparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const sparks: Spark[] = [];
    const maxSparks = 60;
    const colors = ["#FFD166", "#FFA048", "#FF7628", "#FFFFFF", "#FF5400"];

    // Origin point of welding arc (around right-center)
    let originX = width * 0.72;
    let originY = height * 0.58;

    const createSpark = (): Spark => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.5 + 0.8;
      const upwardBias = -Math.random() * 2.5;

      return {
        x: originX + (Math.random() - 0.5) * 40,
        y: originY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + upwardBias,
        size: Math.random() * 2.2 + 0.8,
        life: 0,
        maxLife: Math.random() * 50 + 35,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initial pool
    for (let i = 0; i < maxSparks; i++) {
      const s = createSpark();
      s.life = Math.random() * s.maxLife;
      sparks.push(s);
    }

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Arc glow at source
      const arcGlow = ctx.createRadialGradient(originX, originY, 2, originX, originY, 140);
      const pulseOpacity = 0.08 + Math.random() * 0.06;
      arcGlow.addColorStop(0, `rgba(255, 200, 120, ${pulseOpacity * 1.5})`);
      arcGlow.addColorStop(0.35, `rgba(255, 118, 40, ${pulseOpacity})`);
      arcGlow.addColorStop(1, "rgba(255, 118, 40, 0)");
      ctx.fillStyle = arcGlow;
      ctx.beginPath();
      ctx.arc(originX, originY, 140, 0, Math.PI * 2);
      ctx.fill();

      // Update & draw sparks
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.06; // Gravity
        s.vx *= 0.985; // Air resistance
        s.life++;

        const progress = s.life / s.maxLife;
        const opacity = Math.max(0, 1 - progress);

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (s.life >= s.maxLife || s.y > height || s.x < 0 || s.x > width) {
          sparks[i] = createSpark();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}

