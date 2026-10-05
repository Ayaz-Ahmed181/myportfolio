import React, { useEffect, useRef, useState } from 'react';
import styles from './SmoothCursorFollower.module.css';

/**
 * SmoothCursorFollower
 * Subtle, soft cursor-following aura ring.
 * Retains normal browser cursor, smoothly trails behind with soft damping,
 * provides tactile visual expansion on interactive elements, and is completely disabled
 * on touch/mobile devices or when prefers-reduced-motion is active.
 */
const SmoothCursorFollower = () => {
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer] = useState(() => {
    if (typeof window === 'undefined') return false;
    const mediaFine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaFine.matches && !mediaReducedMotion.matches;
  });

  useEffect(() => {
    if (!isFinePointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let currX = -100;
    let currY = -100;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target?.closest(
        'a, button, input, textarea, select, [role="button"], .interactive, [data-interactive]'
      );
      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const updateLoop = () => {
      // Smooth lerp follow
      currX += (mouseX - currX) * 0.22;
      currY += (mouseY - currY) * 0.22;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${currX}px, ${currY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(updateLoop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className={`${styles.cursorFollower} ${isVisible ? styles.visible : ''} ${
        isHovering ? styles.hovering : ''
      } ${isActive ? styles.active : ''}`}
    >
      <div className={styles.centerDot} />
    </div>
  );
};

export default SmoothCursorFollower;
