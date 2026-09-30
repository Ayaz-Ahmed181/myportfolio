import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import HeroNetworkVisual from './HeroNetworkVisual';
import { animate, stagger } from 'animejs';

const Hero = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const letters = nameRef.current?.querySelectorAll('.hero-letter');
    const subElements = containerRef.current?.querySelectorAll('.hero-anim');

    if (prefersReducedMotion) {
      if (letters) letters.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
      if (subElements) subElements.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }

    // Initial state for secondary elements
    if (subElements) {
      subElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
      });
    }

    // 1. Kinetic Sequential Gravity Bounce (individual letter drop)
    if (letters && letters.length > 0) {
      animate(letters, {
        opacity: [0, 1],
        translateY: [-160, 0],
        ease: 'outBounce',
        duration: 480, // Snappy individual drop and bounce
        delay: stagger(130, { start: 100 }) // Each letter drops ~130ms after the previous one
      });
    }

    // 2. Schedule follow-up elements right as the final letter completes its bounce
    if (subElements && subElements.length > 0) {
      animate(subElements, {
        opacity: [0, 1],
        translateY: [15, 0],
        ease: 'outExpo',
        duration: 500,
        delay: stagger(50, { start: 1350 })
      });
    }
  }, []);

  return (
    <section id="boot" className={styles.heroSection}>
      <div className={styles.watermark} aria-hidden="true">
        AYAZ AHMED
      </div>
      <div className={styles.container} ref={containerRef}>
        
        <div className={styles.contentWrapper}>
          <div className={`${styles.systemLabel} hero-anim`}>
            AYAZ.EXE // SYSTEM ONLINE
          </div>
          
          <div className={styles.mainIdentity}>
            <h1 className={styles.name} ref={nameRef}>
              {'AYAZ AHMED'.split('').map((char, index) => (
                char === ' ' ? (
                  <span key={index} className="hero-space" style={{ display: 'inline-block', width: '0.35em' }}>
                    &nbsp;
                  </span>
                ) : (
                  <span
                    key={index}
                    className="hero-letter"
                    style={{
                      display: 'inline-block',
                      opacity: 0,
                      transform: 'translateY(-160px)'
                    }}
                  >
                    {char}
                  </span>
                )
              ))}
            </h1>
            <h2 className={`${styles.role} hero-anim`} ref={roleRef}>
              MERN DEVELOPER
            </h2>
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
            <a href="https://github.com/Ayaz-Ahmed181" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="#linkedin-todo" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://leetcode.com/u/ayazahmed181/" target="_blank" rel="noreferrer">LEETCODE</a>
          </div>
        </div>

        <div className={styles.visualWrapper}>
          <HeroNetworkVisual />
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
