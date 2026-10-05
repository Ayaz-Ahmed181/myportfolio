import React, { useEffect, useRef } from 'react';
import styles from './ReactiveBackground.module.css';

/**
 * ReactiveBackground
 * Subtle particle constellation network with soft cursor deflection,
 * natural distance-based connections, and smooth scroll parallax.
 * Strictly respects prefers-reduced-motion and document visibility.
 */
const ReactiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = null;
    let isTabVisible = !document.hidden;

    // Mouse coordinates (client coordinates)
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    // Scroll offset tracking for parallax
    let scrollY = window.scrollY || 0;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 22 : 52;
    const maxConnectionDistance = isMobile ? 95 : 135;
    const mouseRadius = isMobile ? 90 : 130;

    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        // z-depth: 0.6 (distant) to 1.3 (near)
        const z = 0.6 + Math.random() * 0.7;
        const isViolet = Math.random() < 0.28;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseVx: (Math.random() - 0.5) * 0.25 * z,
          baseVy: (Math.random() - 0.5) * 0.25 * z,
          vx: 0,
          vy: 0,
          radius: (1.2 + Math.random() * 1.0) * (z * 0.9),
          z,
          color: isViolet ? 'rgba(127, 73, 180, ' : 'rgba(207, 207, 207, ',
          alpha: 0.25 + Math.random() * 0.35,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        initParticles();
      } else {
        // Keep particles within bounds after resize
        particles.forEach((p) => {
          p.x = Math.min(Math.max(p.x, 0), width);
          p.y = Math.min(Math.max(p.y, 0), height);
        });
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const onScroll = () => {
      scrollY = window.scrollY || 0;
    };

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !prefersReducedMotion && !rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    let lastTime = performance.now();

    const render = (now) => {
      if (!isTabVisible) {
        rafId = null;
        return;
      }

      // Delta time normalization
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Pre-compute visible screen positions with gentle scroll parallax
      const screenPositions = particles.map((p) => {
        // Ambient drift
        p.x += (p.baseVx + p.vx) * dt * 60;
        p.y += (p.baseVy + p.vy) * dt * 60;

        // Damping on interactive velocity
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Screen boundary wrap-around
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle scroll parallax offset
        const parallaxY = (p.y - (scrollY * p.z * 0.06) % height + height) % height;

        // Mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = parallaxY - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseRadius * mouseRadius && distSq > 4) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouseRadius) * 1.2;
            p.vx += (dx / dist) * force * 0.35;
            p.vy += (dy / dist) * force * 0.35;
          }
        }

        return { x: p.x, y: parallaxY, p };
      });

      // 1. Draw connections between nearby nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < screenPositions.length; i++) {
        const p1 = screenPositions[i];
        for (let j = i + 1; j < screenPositions.length; j++) {
          const p2 = screenPositions[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistance * maxConnectionDistance) {
            const dist = Math.sqrt(distSq);
            // Alpha falls off smoothly with distance
            const alpha = (1 - dist / maxConnectionDistance) * 0.12;

            ctx.strokeStyle = `rgba(207, 207, 207, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Extremely subtle line to cursor if close
        if (mouse.active) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 80 * 80) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 80) * 0.1;
            ctx.strokeStyle = `rgba(127, 73, 180, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw nodes
      for (let i = 0; i < screenPositions.length; i++) {
        const { x, y, p } = screenPositions[i];
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    // If prefers-reduced-motion, draw one static frame only
    if (prefersReducedMotion) {
      render(performance.now());
    } else {
      rafId = requestAnimationFrame(render);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.backgroundCanvas}
      aria-hidden="true"
    />
  );
};

export default ReactiveBackground;
