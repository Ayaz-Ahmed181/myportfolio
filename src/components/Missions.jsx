import React from 'react';
import styles from './Missions.module.css';
import { projects } from '../data/projects';

const Missions = () => {
  // Ensure we only use the specified three projects just in case
  const activeProjects = projects.filter(p => 
    ["wanderlust", "face-blockchain", "simon-says"].includes(p.id)
  );

  return (
    <section id="missions" className={styles.missionsSection}>
      <div className={styles.watermark} aria-hidden="true">
        MISSIONS
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.systemLabel} reveal-on-scroll`}>// SELECTED PROJECTS</span>
          <h2 className={`${styles.title} reveal-on-scroll`}>MISSIONS</h2>
        </div>

        <div className={styles.grid}>
          {activeProjects.map((project) => (
            <div key={project.id} className={`${styles.card} reveal-on-scroll`}>
              <div className={styles.panelMeta}>
                <span>AYAZ AHMED</span>
                <span>PORTFOLIO // 2026</span>
              </div>
              <span className={`${styles.bracketDecor} ${styles.bracketBr}`}>[+]</span>

              <div className={styles.imageWrapper}>
                <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
              </div>
              
              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <span className={styles.status}>{project.status}</span>
                </div>
                
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.features}>
                  <strong>Key Features:</strong>
                  <ul>
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                    {project.features.length > 4 && <li>...and more</li>}
                  </ul>
                </div>
                
                <div className={styles.techStack}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.actions}>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className={styles.linkBtn}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className={styles.linkBtn}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GITHUB ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
