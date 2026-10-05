import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formState, setFormState] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setStatus('transmitting');
    setTimeout(() => {
      setStatus('transmitted');
      setFormState({ email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4500);
    }, 1000);
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact Section">
      <div className={styles.container}>
        {/* Section Telemetry Header */}
        <div className={`${styles.headerBlock} reveal-on-scroll`}>
          <div className={styles.telemetryTag}>
            <span className={styles.pulseDot} />
            <span>COMMUNICATIONS // PROTOCOL_04</span>
          </div>
          <h2 className={styles.sectionTitle}>ESTABLISH UPLINK</h2>
          <p className={styles.subtitle}>
            Drop your email and message below, or interact with the tactical relay matrix to launch direct comm channels.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Direct Message Terminal */}
          <div className={`${styles.card} reveal-on-scroll`}>
            <div className={styles.cardHeader}>
              <span className={styles.headerCode}>TERM_MSG</span>
              <h3 className={styles.cardTitle}>SEND MESSAGE</h3>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@domain.com"
                  value={formState.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message, project scope, or opportunity details..."
                  value={formState.message}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.textarea}`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'transmitting'}
                className={styles.submitBtn}
              >
                {status === 'transmitting' && (
                  <span className={styles.btnContent}>
                    <span className={styles.spinner} />
                    <span>SENDING MESSAGE...</span>
                  </span>
                )}
                {status === 'transmitted' && (
                  <span className={styles.btnContent}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>MESSAGE SENT SUCCESSFULLY</span>
                  </span>
                )}
                {status === 'idle' && (
                  <span className={styles.btnContent}>
                    <span>SEND MESSAGE</span>
                    <span className={styles.arrowIcon}>▹</span>
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Side Column: Comms & Availability */}
          <div className={styles.sideColumn}>
            {/* Direct Communication Channels */}
            <div className={`${styles.card} reveal-on-scroll`}>
              <div className={styles.cardHeader}>
                <span className={styles.headerCode}>COMM_MATRIX</span>
                <h3 className={styles.cardTitle}>TACTICAL RELAY</h3>
              </div>

              <div className={styles.channelList}>
                <a
                  href="https://github.com/Ayaz-Ahmed181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={styles.channelMeta}>
                    <span className={styles.channelTag}>SOURCE VAULT</span>
                    <span className={styles.channelValue}>GITHUB // @Ayaz-Ahmed181</span>
                  </div>
                  <span className={styles.relayArrow}>↗</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={styles.channelMeta}>
                    <span className={styles.channelTag}>NETWORK COMM</span>
                    <span className={styles.channelValue}>LINKEDIN // DOSSIER</span>
                  </div>
                  <span className={styles.relayArrow}>↗</span>
                </a>

                <a
                  href="https://leetcode.com/u/ayazahmed181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={styles.channelMeta}>
                    <span className={styles.channelTag}>ALGO MATRIX</span>
                    <span className={styles.channelValue}>LEETCODE // 170+ SOLVED</span>
                  </div>
                  <span className={styles.relayArrow}>↗</span>
                </a>

                <a
                  href="mailto:ayazprof.181@email.com"
                  className={styles.channelItem}
                >
                  <div className={styles.channelMeta}>
                    <span className={styles.channelTag}>DIRECT DISPATCH</span>
                    <span className={styles.channelValue}>ayazprof.181@email.com</span>
                  </div>
                  <span className={styles.relayArrow}>↗</span>
                </a>
              </div>
            </div>

            <div className={`${styles.card} ${styles.telemetryCard} reveal-on-scroll`}>
              <div className={styles.cardHeader}>
                <span className={styles.headerCode}>STATUS</span>
                <h3 className={styles.cardTitle}>AVAILABILITY</h3>
              </div>

              <div className={styles.statusGrid}>
                <div className={styles.statusRow}>
                  <span className={styles.statusLabel}>STATUS</span>
                  <span className={styles.statusHighlight}>OPEN TO WORK</span>
                </div>
                <div className={styles.statusRow}>
                  <span className={styles.statusLabel}>ROLES</span>
                  <span className={styles.statusValue}>MERN / FULL-STACK</span>
                </div>
                <div className={styles.statusRow}>
                  <span className={styles.statusLabel}>RESPONSE TIME</span>
                  <span className={styles.statusValue}>&lt; 24 HOURS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
