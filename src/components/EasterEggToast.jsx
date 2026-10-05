import React, { useEffect } from 'react';
import styles from './EasterEggToast.module.css';

/**
 * EasterEggToast - Subtle developer system indicator toast
 * Triggers tasteful confirmation: "AYAZ.EXE // curious, aren't you?"
 */
const EasterEggToast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4200);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <aside
      className={styles.toastOverlay}
      role="status"
      aria-live="polite"
      onClick={onClose}
    >
      <div className={styles.toastCard} title="Click to dismiss">
        <span className={styles.prefix}>AYAZ.EXE //</span>
        <span className={styles.message}>
          {message || "curious, aren't you?"}
        </span>
        <span className={styles.codeMeta}>[SYS_OK // 2026]</span>
        <span className={styles.closeIcon}>✕</span>
      </div>
    </aside>
  );
};

export default EasterEggToast;
