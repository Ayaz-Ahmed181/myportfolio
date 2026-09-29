import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#boot" aria-label="Home">
            AYAZ<span className={styles.accent}>.EXE</span>
          </a>
        </div>
        
        <nav className={styles.navLinks} aria-label="Main Navigation">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#missions">Missions</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#loadout">Loadout</a></li>
            <li><a href="#discoveries">Discoveries</a></li>
            <li><a href="#arcade">Arcade</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className={styles.actions}>
          <a href="#" className={styles.resumeBtn} aria-label="Download Resume (TODO)">
            <span className={styles.bracket}>[</span>
            RESUME
            <span className={styles.bracket}>]</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
