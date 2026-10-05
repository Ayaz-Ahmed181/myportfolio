import React, { useEffect, useState } from 'react';
import styles from './ScrollProgressBar.module.css';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const updateScroll = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const scrollHeight = (doc.scrollHeight || body.scrollHeight) - window.innerHeight;

      if (scrollHeight > 0) {
        const percent = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
        setScrollProgress(percent);
      } else {
        setScrollProgress(0);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const rounded = Math.round(scrollProgress);

  return (
    <aside className={styles.dock} aria-label="Page scroll progress">
      {/* Full-width retro rectangular progress bar */}
      <div className={styles.barFrame}>
        <div
          className={styles.barFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Percentage readout placed beside the bar */}
      <div className={styles.readout}>
        <span className={styles.label}>LOADING...</span>
        <span className={styles.value}>{rounded}%</span>
      </div>
    </aside>
  );
};

export default ScrollProgressBar;
