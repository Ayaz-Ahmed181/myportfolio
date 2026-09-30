import React from 'react';
import styles from './HeroNetworkVisual.module.css';

const HeroNetworkVisual = () => {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.hudLabels}>
        <div className={styles.label}>SYS_COORD: 28.6139° N</div>
        <div className={styles.label}>NODE_STATUS: ACTIVE</div>
      </div>
      
      <svg className={styles.svgVisual} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Thin intersecting node lines */}
        <g stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none">
          <line x1="50" y1="100" x2="350" y2="100" />
          <line x1="100" y1="50" x2="100" y2="350" />
          
          <line x1="100" y1="100" x2="300" y2="300" />
          <line x1="300" y1="100" x2="100" y2="300" />
          
          <line x1="50" y1="200" x2="350" y2="200" />
          <line x1="200" y1="50" x2="200" y2="350" />
        </g>

        {/* Circular data hubs */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="url(#hubGradient)">
          <circle cx="100" cy="100" r="30" />
          <circle cx="300" cy="100" r="20" />
          <circle cx="200" cy="200" r="50" />
          <circle cx="100" cy="300" r="25" />
          <circle cx="300" cy="300" r="35" />
        </g>

        {/* Small hub centers */}
        <g fill="rgba(255,255,255,0.4)">
          <circle cx="100" cy="100" r="2" />
          <circle cx="300" cy="100" r="2" />
          <circle cx="200" cy="200" r="3" />
          <circle cx="100" cy="300" r="2" />
          <circle cx="300" cy="300" r="2" />
        </g>

        {/* Pulsing electric cyan signal dots */}
        <g fill="#38BDF8">
          <circle cx="100" cy="100" r="4" className={styles.pulseNode} style={{ animationDelay: '0s' }} />
          <circle cx="300" cy="100" r="4" className={styles.pulseNode} style={{ animationDelay: '1s' }} />
          <circle cx="200" cy="200" r="5" className={styles.pulseNode} style={{ animationDelay: '0.5s' }} />
          <circle cx="100" cy="300" r="4" className={styles.pulseNode} style={{ animationDelay: '1.5s' }} />
        </g>

        {/* Geometric Brackets / Details */}
        <path d="M 40 40 L 40 20 L 60 20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M 360 40 L 360 20 L 340 20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M 40 360 L 40 380 L 60 380" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M 360 360 L 360 380 L 340 380" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        
      </svg>
    </div>
  );
};

export default HeroNetworkVisual;
