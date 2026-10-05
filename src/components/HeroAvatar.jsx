import React, { useEffect, useRef } from 'react';
import styles from './HeroAvatar.module.css';
import { animate } from 'animejs';

const HeroAvatar = () => {
  const frameRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (frameRef.current) {
        frameRef.current.style.opacity = '1';
        frameRef.current.style.transform = 'none';
      }
      return;
    }

    if (frameRef.current) {
      // Physical gravity drop and bounce
      animate(frameRef.current, {
        opacity: [0, 1],
        translateY: [-280, 0],
        ease: 'outBounce',
        duration: 850,
        delay: 500 // Drops in with a punch while the letters settle
      });
    }
  }, []);

  return (
    <div
      ref={frameRef}
      className={styles.frame}
      style={{ opacity: 0, transform: 'translateY(-280px)' }}
    >
      {/* Tactical HUD Corner Brackets */}
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      {/* Top HUD Metadata */}
      <div className={styles.tagTop}>
        <span className={styles.dot} />
        <span>OPERATOR // AYAZ AHMED</span>
      </div>

      {/* Enlarged Image Container */}
      <div className={styles.imageWrapper}>
        <img
          src="/assets/profile.png"
          alt="Ayaz Ahmed"
          className={styles.image}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className={styles.bottomGradient} />
      </div>

      {/* Bottom HUD Metadata */}
      <div className={styles.tagBottom}>
        <span>ROLE: MERN // DSA</span>
        <span className={styles.status}>ONLINE</span>
      </div>
    </div>
  );
};

export default HeroAvatar;
