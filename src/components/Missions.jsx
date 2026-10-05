import React from 'react';
import TechIcon from './TechIcon';
import styles from './Missions.module.css';

const MISSIONS_DATA = [
  {
    id: 'mission-01',
    code: 'OP_01',
    status: 'DEPLOYED // LIVE',
    title: 'WANDERLUST // FULL-STACK TRAVEL PLATFORM',
    category: 'FULL-STACK MERN ARCHITECTURE',
    image: '/assets/projects/wanderlust.webp',
    fallbackBadge: 'WANDERLUST TERMINAL',
    description:
      'A full-stack travel listing platform inspired by Airbnb where users can explore travel listings, manage destination bookings, write verified reviews, and interact with live geolocation maps.',
    metrics: [
      { label: 'ARCHITECTURE', value: 'MVC / MERN' },
      { label: 'AUTHENTICATION', value: 'PASSPORT.JS' },
      { label: 'DATABASE', value: 'MONGODB ATLAS' },
      { label: 'GEOLOCATION', value: 'MAPBOX API' },
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Mapbox', 'Bootstrap'],
    demoUrl: 'https://mern-travel-listings.onrender.com/listings',
    githubUrl: 'https://github.com/Ayaz-Ahmed181/mern-travel-listings',
  },
  {
    id: 'mission-02',
    code: 'OP_02',
    status: 'VERIFIED REPO // MVP',
    title: 'EVIDENCE VAULT // DIGITAL CUSTODY SYSTEM',
    category: 'FORENSIC EVIDENCE & BLOCKCHAIN',
    image: '/assets/projects/evidence-vault.webp',
    fallbackBadge: 'EVIDENCE VAULT SYSTEM',
    description:
      'A digital evidence repository and chain-of-custody tracking platform. Detects faces from images, performs web matching, generates canonical SHA-256 fingerprints, and registers/verifies tamper-evident records on the Polygon blockchain.',
    metrics: [
      { label: 'BLOCKCHAIN', value: 'POLYGON AMOY' },
      { label: 'INTEGRITY', value: 'SHA-256 HASH' },
      { label: 'AI ENGINE', value: 'TENSORFLOW.JS' },
      { label: 'SMART CONTRACT', value: 'ETHERS.JS V6' },
    ],
    stack: ['Node.js', 'TypeScript', 'TensorFlow.js', 'Polygon', 'SHA-256', 'Git'],
    demoUrl: 'https://github.com/Ayaz-Ahmed181/EvidenceVault.git',
    githubUrl: 'https://github.com/Ayaz-Ahmed181/EvidenceVault.git',
  },
  {
    id: 'mission-03',
    code: 'OP_03',
    status: 'DEPLOYED // LIVE',
    title: 'SIMON SAYS // MEMORY MATRIX GAME',
    category: 'INTERACTIVE WEB APPLICATION',
    image: '/assets/projects/simon-says.webp',
    fallbackBadge: 'SIMON SAYS CONSOLE',
    description:
      'A responsive browser-based Simon Says memory game built with vanilla JavaScript, dynamic DOM interaction, event handling, and real-time audio-visual sequence generation with progressive difficulty.',
    metrics: [
      { label: 'CORE ENGINE', value: 'VANILLA JS / DOM' },
      { label: 'GAMEPLAY', value: 'DYNAMIC PATTERNS' },
      { label: 'STATE', value: 'EVENT SEQUENCER' },
      { label: 'DEPLOYMENT', value: 'NETLIFY LIVE' },
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'Netlify'],
    demoUrl: 'https://simonsayagame.netlify.app/',
    githubUrl: 'https://github.com/Ayaz-Ahmed181',
  },
];

const Missions = () => {
  return (
    <section id="missions" className={styles.missionsSection} aria-label="Missions Sector">
      <div className={styles.container}>
        {/* Section Telemetry Header */}
        <div className={styles.headerBlock}>
          <div className={styles.telemetryTag}>
            <span className={styles.pulseDot} />
            <span>OPERATIONAL DOSSIER // VERIFIED PRODUCTIONS</span>
          </div>
          <h2 className={styles.sectionTitle}>MISSION PROTOCOLS</h2>
          <p className={styles.subtitle}>
            Applied full-stack architectures, digital custody repositories, and real-time interactive systems.
          </p>
        </div>

        {/* Expansive Dossier Grid */}
        <div className={styles.missionsGrid}>
          {MISSIONS_DATA.map((mission) => (
            <article key={mission.id} className={styles.missionCard}>
              {/* Tactical Top Meta */}
              <div className={styles.cardTopMeta}>
                <div className={styles.codeGroup}>
                  <span className={styles.opCode}>{mission.code}</span>
                  <span className={styles.categoryBadge}>{mission.category}</span>
                </div>
                <span className={styles.statusPill}>
                  <span className={styles.statusDot} />
                  {mission.status}
                </span>
              </div>

              {/* Actual Website Viewport Screenshot Frame */}
              <div className={styles.screenshotFrame}>
                <div className={styles.viewportHeader}>
                  <div className={styles.browserDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <span className={styles.urlDisplay}>
                    SYS://{mission.title.split(' ')[0].toLowerCase()}.exe
                  </span>
                </div>

                <div className={styles.imageStage}>
                  <img
                    src={mission.image}
                    alt={`${mission.title} Viewport`}
                    className={styles.screenshotImg}
                    onError={(e) => {
                      // Tactical fallback in case file is yet to be placed in public/assets/
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className={styles.fallbackStage} style={{ display: 'none' }}>
                    <span className={styles.fallbackIcon}>▣</span>
                    <span className={styles.fallbackText}>{mission.fallbackBadge}</span>
                    <span className={styles.fallbackHint}>
                      PREVIEW LOCATION: {mission.image}
                    </span>
                  </div>
                  <div className={styles.scanlineOverlay} />
                </div>
              </div>

              {/* Title & Body Description */}
              <h3 className={styles.missionTitle}>{mission.title}</h3>
              <p className={styles.missionDesc}>{mission.description}</p>

              {/* Scaled 2x2 Telemetry Matrix */}
              <div className={styles.telemetryMatrix}>
                {mission.metrics.map((m, idx) => (
                  <div key={idx} className={styles.metricCell}>
                    <span className={styles.metricKey}>{m.label}</span>
                    <span className={styles.metricVal}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className={styles.stackWrap}>
                <span className={styles.stackLabel}>DEPLOYED_STACK //</span>
                <div className={styles.tagsContainer}>
                  {mission.stack.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      <TechIcon className={styles.techIcon} name={tech} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Uplinks */}
              <div className={styles.cardActions}>
                <a
                  href={mission.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryAction}
                >
                  <span>LIVE UPLINK</span>
                  <span className={styles.actionArrow}>↗</span>
                </a>

                <a
                  href={mission.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryAction}
                >
                  <span>SOURCE VAULT</span>
                  <span className={styles.actionArrow}>▹</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
