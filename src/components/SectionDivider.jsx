import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import styles from './SectionDivider.module.css';

const SectionDivider = ({ topLabel = 'SYSTEM ONLINE', bottomLabel = 'MISSIONS // 03' }) => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (lineRef.current) lineRef.current.style.strokeDashoffset = '0';
      return;
    }

    if (lineRef.current) {
      lineRef.current.style.strokeDasharray = '100';
      lineRef.current.style.strokeDashoffset = '100';
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(lineRef.current, {
            strokeDashoffset: [100, 0],
            easing: 'easeInOutSine',
            duration: 1000
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.dividerContainer} ref={containerRef}>
      <div className={`${styles.label} reveal-on-scroll`}>[ {topLabel} ]</div>
      <div className={styles.lineWrapper}>
        <svg viewBox="0 0 2 100" preserveAspectRatio="none" className={styles.svgLine}>
          <line x1="1" y1="0" x2="1" y2="100" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
          <line x1="1" y1="0" x2="1" y2="100" stroke="var(--dynamic-heading-color, #FFD1DC)" strokeWidth="2" 
                ref={lineRef} pathLength="100" style={{ transition: 'stroke 0.4s ease' }} />
        </svg>
      </div>
      <div className={`${styles.label} reveal-on-scroll`}>{bottomLabel}</div>
    </div>
  );
};

export default SectionDivider;
