import React, { useRef, useEffect, useState } from 'react';
import styles from './ScrollBackground.module.css';

const ScrollBackground = () => {
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Smooth, deliberate playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play().catch(() => {
        // Autoplay fallback if browser blocks unmuted audio
      });
    }

    let rafId = null;
    const handleScroll = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const scrollHeight = (doc.scrollHeight || body.scrollHeight) - window.innerHeight;

      if (scrollHeight > 0) {
        setScrollProgress(Math.min(Math.max(scrollTop / scrollHeight, 0), 1));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.stage} aria-hidden="true">
      {/* Dynamic Wireframe Topo Wave Video */}
      <video
        ref={videoRef}
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/topo-bg.mp4" type="video/mp4" />
      </video>

      {/* Tactical Violet Tint Layer (Color-grades the white light waves) */}
      <div className={styles.violetColorGrade} />

      {/* Scroll-Reactive Central Core Glow */}
      <div 
        className={styles.dynamicGlow} 
        style={{ opacity: 0.35 + scrollProgress * 0.4 }}
      />

      {/* Ambient Vignette Framing */}
      <div className={styles.vignette} />
    </div>
  );
};

export default ScrollBackground;
