import React from 'react';
import styles from './TerminalFooter.module.css';

const CURRENT_YEAR = new Date().getFullYear();

const TerminalFooter = ({ onEasterEgg }) => {
  return (
    <footer className={styles.terminalFooter} aria-label="Terminal Archive Footer">
      <div className={styles.footerContainer}>
        <div
          className={styles.brandGroup}
          onClick={onEasterEgg}
          style={{ cursor: 'pointer' }}
          title="AYAZ.EXE System Telemetry // Click for diagnostics"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onEasterEgg?.();
          }}
        >
          <span className={styles.pulseDot} />
          <span className={styles.brandTitle}>AYAZ.EXE // TERMINAL ARCHIVE</span>
        </div>
        <span className={styles.transmissionTag}>
          // END OF TRANSMISSION // ALL SECTORS NOMINAL
        </span>
        <span className={styles.systemStatus}>
          SYSTEM OPERATIONAL // {CURRENT_YEAR}
        </span>
      </div>
    </footer>
  );
};

export default TerminalFooter;
