import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { playBootAnimation } from '../animations/hero';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      playBootAnimation(containerRef.current);
    }
  }, []);

  return (
    <section id="boot" className={styles.heroSection}>
      <div className={styles.container} ref={containerRef}>
        
        <div className={`${styles.systemLabel} hero-anim`}>
          AYAZ.EXE // SYSTEM ONLINE
        </div>
        
        <div className={styles.mainIdentity}>
          <h1 className={`${styles.name} hero-anim`}>AYAZ AHMED</h1>
          <h2 className={`${styles.role} hero-anim`}>MERN DEVELOPER</h2>
        </div>

        <div className={`${styles.metadata} hero-anim`}>
          <span className={styles.bracket}>[</span>
          <span className={styles.metaDataText}>170+ LEETCODE SOLVED</span>
          <span className={styles.bracket}>]</span>
        </div>

        <p className={`${styles.description} hero-anim`}>
          Building tactical full-stack web applications and engineering optimized solutions. 
          Bridging clean architecture with agile frontend experiences.
        </p>

        <div className={`${styles.ctas} hero-anim`}>
          <a href="#missions" className={styles.primaryCta}>
            VIEW MISSIONS
          </a>
          {/* TODO: Add Resume URL */}
          <a href="#resume-todo" className={styles.secondaryCta}>RESUME</a>
        </div>

        <div className={`${styles.socials} hero-anim`}>
          {/* TODO: Add actual social URLs in CONTENT.md */}
          <a href="#github-todo" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="#linkedin-todo" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="#leetcode-todo" target="_blank" rel="noreferrer">LEETCODE</a>
        </div>
        
      </div>

      {/* Decorative tactical background element */}
      <svg className={styles.bgDecor} viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="100" x2="100" y2="0" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        <line x1="10" y1="100" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        <line x1="20" y1="100" x2="100" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      </svg>
    </section>
  );
};

export default Hero;
