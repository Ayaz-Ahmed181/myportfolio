import React, { useEffect, useRef, useState } from 'react';
import styles from './CrosshairCursor.module.css';

const CrosshairCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Only apply on fine pointers (desktop/mouse)
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    let rafId = null;
    let mouseX = -100;
    let mouseY = -100;

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
        cursorRef.current.style.setProperty('--mouse-y', `${mouseY}px`);
      }
      rafId = requestAnimationFrame(updateCursor);
    };
    rafId = requestAnimationFrame(updateCursor);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };
    
    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      aria-hidden="true"
      className={`${styles.crosshair} ${isHovering ? styles.hovering : ''} ${isVisible ? styles.visible : ''} ${prefersReducedMotion ? styles.reducedMotion : ''}`}
    >
      <div className={styles.reticle}>
        <div className={styles.centerDot}></div>
        <div className={`${styles.line} ${styles.top}`}></div>
        <div className={`${styles.line} ${styles.bottom}`}></div>
        <div className={`${styles.line} ${styles.left}`}></div>
        <div className={`${styles.line} ${styles.right}`}></div>
      </div>
    </div>
  );
};

export default CrosshairCursor;
