import React, { useEffect, useRef } from 'react';
import styles from './ScrollBackgroundCanvas.module.css';

const TOTAL_FRAMES = 16;
const COLS = 4;
const ROWS = 4;

const ScrollBackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    const img = new Image();
    img.src = '/assets/background2.png';
    imageRef.current = img;

    let rafId = null;
    let isTicking = false;

    const renderFrame = (frameIndex) => {
      if (!img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;

      // Calculate source cell inside the 4x4 sprite sheet 
      const col = frameIndex % COLS;
      const row = Math.floor(frameIndex / COLS);

      const cellW = img.naturalWidth / COLS;
      const cellH = img.naturalHeight / ROWS;

      const sx = col * cellW;
      const sy = row * cellH;

      // Aspect-ratio "cover" calculation
      const hRatio = cw / cellW;
      const vRatio = ch / cellH;
      const ratio = Math.max(hRatio, vRatio);

      const dw = cellW * ratio;
      const dh = cellH * ratio;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.fillStyle = '#07090C';
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, sx, sy, cellW, cellH, dx, dy, dw, dh);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameRef.current);
    };

    const handleScroll = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const scrollHeight = (doc.scrollHeight || body.scrollHeight) - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        const targetFrame = Math.min(
          Math.floor(progress * TOTAL_FRAMES),
          TOTAL_FRAMES - 1
        );

        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          renderFrame(targetFrame);
        }
      }
      isTicking = false;
    };

    const onScroll = () => {
      if (!isTicking) {
        rafId = requestAnimationFrame(handleScroll);
        isTicking = true;
      }
    };

    img.onload = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', onScroll);
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

export default ScrollBackgroundCanvas;
