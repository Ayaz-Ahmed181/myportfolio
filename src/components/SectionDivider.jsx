import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import styles from './SectionDivider.module.css';

const SectionDivider = ({ 
  topLabel = 'SYSTEM ONLINE', 
  nodeLabel = 'NODE // 02 ACTIVE',
  bottomLabel = 'MISSIONS // 03' 
}) => {
  const tensileRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (tensileRef.current) {
        tensileRef.current.style.transform = 'scaleY(1)';
      }
      return;
    }

    if (tensileRef.current) {
      tensileRef.current.style.transformOrigin = '50% 50%';
      tensileRef.current.style.transform = 'scaleY(0)';
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(tensileRef.current, {
            scaleY: [0, 1],
            ease: 'outElastic(1, 0.5)',
            duration: 800
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.dividerContainer} ref={containerRef}>
      <div className={`${styles.label} reveal-on-scroll`}>[ {topLabel} ]</div>
      
      {/* Tensile web connector */}
      <div className={styles.tensileWrapper} ref={tensileRef}>
        <svg viewBox="0 0 240 120" preserveAspectRatio="none" className={styles.tensileSvg}>
          {/* Central vertical cable */}
          <line x1="120" y1="0" x2="120" y2="120" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          
          {/* Flanking diagonal support webbing lines */}
          <line x1="120" y1="12" x2="40" y2="60" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="120" y1="12" x2="200" y2="60" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="120" y1="108" x2="40" y2="60" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="120" y1="108" x2="200" y2="60" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Lateral stabilizer web line */}
          <line x1="40" y1="60" x2="200" y2="60" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

          {/* Web anchor vertex points */}
          <circle cx="40" cy="60" r="2.5" fill="#7F49B4" />
          <circle cx="200" cy="60" r="2.5" fill="#7F49B4" />
          <circle cx="120" cy="12" r="2" fill="#7F49B4" />
          <circle cx="120" cy="108" r="2" fill="#7F49B4" />
        </svg>

        {/* Pulsing tactical node in the center */}
        <div className={styles.centerNode}>
          <span className={styles.nodeIndicator}></span>
          [ {nodeLabel} ]
        </div>
      </div>

      <div className={`${styles.label} reveal-on-scroll`}>{bottomLabel}</div>
    </div>
  );
};

export default SectionDivider;
