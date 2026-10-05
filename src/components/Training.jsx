import React from 'react';
import TechIcon from './TechIcon';
import styles from './Training.module.css';

const SKILL_GROUPS = [
  {
    category: 'FRONTEND DEVELOPMENT',
    code: 'MOD_01',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'BACKEND & DATABASE',
    code: 'MOD_02',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
  },
  {
    category: 'LANGUAGES & VERSION CONTROL',
    code: 'MOD_03',
    skills: ['C++', 'Python', 'Git', 'GitHub'],
  },
];

const SOLVED_DSA_TOPICS = [
  {
    name: 'ARRAYS & STRINGS',
    status: 'SOLVED // VERIFIED',
    techniques: 'Two-Pointers, Frequency Arrays, Substring Scans',
  },
  {
    name: 'HASHMAPS',
    status: 'SOLVED // VERIFIED',
    techniques: 'O(1) Element Lookup, Frequency Mapping, Anagram Verification',
  },
  {
    name: 'RECURSION',
    status: 'SOLVED // VERIFIED',
    techniques: 'Call Stack Tracing, Base Cases, Recursive Problem Deconstruction',
  },
  {
    name: 'BINARY SEARCH',
    status: 'SOLVED // VERIFIED',
    techniques: 'Logarithmic Division, Rotated Arrays, Search Range Optimization',
  },
];

const TICKER_ICONS = ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'C++', 'Python', 'Git', 'HTML5', 'CSS3'];

const Training = () => {
  return (
    <section id="training" className={styles.trainingSection} aria-label="Training and Skills">
      <div className={styles.container}>
        {/* Header Telemetry */}
        <div className={`${styles.headerBlock} reveal-on-scroll`}>
          <div className={styles.telemetryTag}>
            <span className={styles.dot} />
            <span>TRAINING // SYSTEM CAPABILITIES</span>
          </div>
          <h2 className={styles.sectionTitle}>TECHNICAL ARSENAL</h2>
          <p className={styles.subtitle}>
            Applied full-stack development skills, active algorithm masteries, and target engineering concepts currently in progress.
          </p>
        </div>

        {/* 2-Column Tactical Grid */}
        <div className={styles.grid}>
          {/* Column 1: Core Verified Tech Stack */}
          <div className={styles.column}>
            <h3 className={`${styles.columnTitle} reveal-on-scroll`}>// VERIFIED_STACK</h3>
            <div className={styles.stackCards}>
              {SKILL_GROUPS.map((group) => (
                <div key={group.code} className={`${styles.card} reveal-on-scroll`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryCode}>{group.code}</span>
                    <h4 className={styles.cardCategory}>{group.category}</h4>
                  </div>
                  <div className={styles.tagsContainer}>
                    {group.skills.map((skill) => (
                      <span key={skill} className={styles.tag}>
                        <TechIcon className={styles.tagIcon} name={skill} />
                        <span className={styles.tagName}>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Solved DSA Matrix & Learning Targets */}
          <div className={styles.column}>
            <h3 className={`${styles.columnTitle} reveal-on-scroll`}>// ALGORITHMIC_MATRIX</h3>
            
            <div className={`${styles.card} reveal-on-scroll`}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryCode}>SOLVED_DSA</span>
                <h4 className={styles.cardCategory}>MASTERED PROBLEM-SOLVING AREAS</h4>
              </div>

              <div className={styles.algoList}>
                {SOLVED_DSA_TOPICS.map((topic) => (
                  <div key={topic.name} className={styles.algoItem}>
                    <div className={styles.algoHeader}>
                      <span className={styles.algoName}>{topic.name}</span>
                      <span className={styles.algoBadge}>{topic.status}</span>
                    </div>
                    <p className={styles.algoTechniques}>{topic.techniques}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth & Future Target Modules */}
            <div className={`${styles.card} ${styles.targetCard} reveal-on-scroll`}>
              <div className={styles.cardHeader}>
                <span className={styles.targetCode}>TARGETS</span>
                <h4 className={styles.cardCategory}>ACTIVE ROADMAP // CURRENTLY LEARNING</h4>
              </div>
              <ul className={styles.targetList}>
                <li>
                  <span className={styles.bullet}>▹</span>
                  <strong>Trees & Binary Search Trees:</strong> Invert, level-order traversal, subtree depth.
                </li>
                <li>
                  <span className={styles.bullet}>▹</span>
                  <strong>Graphs:</strong> BFS / DFS pathfinding, cycle detection algorithms.
                </li>
                <li>
                  <span className={styles.bullet}>▹</span>
                  <strong>Dynamic Programming:</strong> Memoization tables & optimal substructure.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Color Marquee Ticker */}
        <div className={styles.iconTicker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {[...TICKER_ICONS, ...TICKER_ICONS].map((iconName, idx) => (
              <div key={idx} className={styles.tickerPill}>
                <TechIcon className={styles.tickerIcon} name={iconName} />
                <span>{iconName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
