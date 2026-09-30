import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {/* Background depth layers */}
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow}></div>
      
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
