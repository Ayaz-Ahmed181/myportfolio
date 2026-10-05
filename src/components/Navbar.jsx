import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { id: 'hero', label: '// ORIGIN' },
  { id: 'missions', label: '// MISSIONS' },
  { id: 'training', label: '// ARSENAL' },
  { id: 'contact', label: '// UPLINK' },
];

const Navbar = ({ onEasterEgg }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.navHeader} aria-label="Main Tactical Navigation">
      {/* Brand Pill */}
      <div className={`${styles.ovalBar} ${styles.brandPill}`}>
        <a href="#hero" className={styles.brandLink}>
          <span className={styles.brandText}>AYAZ.EXE</span>
        </a>
        <button
          type="button"
          onClick={onEasterEgg}
          className={styles.statusBtn}
          title="AYAZ.EXE System Telemetry // Click for status"
          aria-label="System Telemetry"
        >
          <span className={styles.sysStatus} />
        </button>
      </div>

      {/* Center Nav Capsule Bar */}
      <nav className={`${styles.ovalBar} ${styles.linksPill}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${styles.navLink} ${
              activeSection === link.id ? styles.activeLink : ''
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
