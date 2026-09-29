import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sysInfo}>
          <span className={styles.label}>SYS.STATUS:</span> 
          <span className={styles.value}>ONLINE</span>
        </div>
        
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} AYAZ.EXE
        </div>
        
        <div className={styles.metadata}>
          <span className={styles.label}>COORD:</span> 
          <span className={styles.value}>00.00.00</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
