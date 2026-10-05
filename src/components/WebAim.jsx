import React, { useRef, useState, useEffect } from 'react';
import styles from './WebAim.module.css';

const SESSION_TIME = 30; // Seconds

// Procedural audio synthesizer for Web Shooters
const playSfx = (type) => {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (type === 'thwip') {
      // High-velocity pneumatic web blast
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === 'hit') {
      // Crisp connection ping
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    }
  } catch {
    // Graceful fallback if Web Audio is inactive or blocked
  }
};

const TARGET_TYPES = [
  { id: 'NORMAL', radius: 22, lifespan: 2000, points: 100, color: '#FFFFFF', ringColor: '#7F49B4' },
  { id: 'FLASH', radius: 18, lifespan: 750, points: 250, color: '#00F0FF', ringColor: '#00A0C0' },
  { id: 'MOVING', radius: 20, lifespan: 2400, points: 150, color: '#FFA116', ringColor: '#C07800' },
  { id: 'MICRO', radius: 9, lifespan: 1800, points: 300, color: '#FF3344', ringColor: '#FFFFFF' },
];

const WebAim = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle'); // idle | running | summary
  const [timeLeft, setTimeLeft] = useState(SESSION_TIME);
  const [hudStats, setHudStats] = useState({ score: 0, streak: 0 });
  const [finalReport, setFinalReport] = useState(null);

  // Mutable Game Loop State
  const gameRef = useRef({
    running: false,
    score: 0,
    streak: 0,
    bestStreak: 0,
    shotsFired: 0,
    targetsHit: 0,
    totalTargetsSpawned: 0,
    reactionTimes: [],
    targets: [],
    webLines: [],
    splatters: [],
    floatingPings: [],
    lastSpawn: 0,
    nextSpawnInterval: 600,
    timerInterval: null,
  });

  const calculateRank = (accuracy, score) => {
    if (accuracy >= 90 && score >= 2200) return 'S';
    if (accuracy >= 80 && score >= 1600) return 'A';
    if (accuracy >= 70 && score >= 1100) return 'B';
    if (accuracy >= 55) return 'C';
    return 'D';
  };

  const endSession = () => {
    const g = gameRef.current;
    g.running = false;
    if (g.timerInterval) {
      clearInterval(g.timerInterval);
      g.timerInterval = null;
    }

    const acc = g.shotsFired > 0 ? Math.round((g.targetsHit / g.shotsFired) * 100) : 0;
    const avgReaction =
      g.reactionTimes.length > 0
        ? Math.round(g.reactionTimes.reduce((a, b) => a + b, 0) / g.reactionTimes.length)
        : 0;

    setFinalReport({
      score: g.score,
      accuracy: acc,
      avgReaction,
      hits: g.targetsHit,
      totalSpawned: g.totalTargetsSpawned,
      bestStreak: g.bestStreak,
      rank: calculateRank(acc, g.score),
    });

    setGameState('summary');
  };

  const startSession = () => {
    const g = gameRef.current;
    g.running = true;
    g.score = 0;
    g.streak = 0;
    g.bestStreak = 0;
    g.shotsFired = 0;
    g.targetsHit = 0;
    g.totalTargetsSpawned = 0;
    g.reactionTimes = [];
    g.targets = [];
    g.webLines = [];
    g.splatters = [];
    g.floatingPings = [];
    g.lastSpawn = performance.now();

    setTimeLeft(SESSION_TIME);
    setHudStats({ score: 0, streak: 0 });
    setGameState('running');

    if (g.timerInterval) clearInterval(g.timerInterval);
    g.timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const game = gameRef.current;
    return () => {
      if (game.timerInterval) clearInterval(game.timerInterval);
    };
  }, []);

  // Canvas Lifecycle & Render Pipeline
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId = null;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 520);

    const spawnTarget = () => {
      const g = gameRef.current;
      if (g.targets.length >= 5) return;

      const type = TARGET_TYPES[Math.floor(Math.random() * TARGET_TYPES.length)];
      const margin = 50;
      const x = margin + Math.random() * (width - margin * 2);
      const y = margin + Math.random() * (height - margin * 2 - 40);

      let vx = 0;
      let vy = 0;
      if (type.id === 'MOVING') {
        const speed = 2.2 + Math.random() * 1.5;
        const angle = Math.random() * Math.PI * 2;
        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      }

      g.targets.push({
        id: Math.random().toString(),
        type,
        x,
        y,
        vx,
        vy,
        radius: type.radius,
        born: performance.now(),
        lifespan: type.lifespan,
      });

      g.totalTargetsSpawned++;
    };

    // User Click: Fire Web Shot
    const handleCanvasClick = (e) => {
      const g = gameRef.current;
      if (!g.running) return;

      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const now = performance.now();

      g.shotsFired++;
      playSfx('thwip');

      // Shooter anchor point (bottom-center)
      const shooterX = width / 2;
      const shooterY = height;

      // Check Target Collisions
      let hitIndex = -1;
      for (let i = g.targets.length - 1; i >= 0; i--) {
        const t = g.targets[i];
        const dist = Math.hypot(clickX - t.x, clickY - t.y);
        if (dist <= t.radius + 6) {
          hitIndex = i;
          break;
        }
      }

      if (hitIndex !== -1) {
        // --- HIT ---
        const hitTarget = g.targets[hitIndex];
        const reaction = Math.round(now - hitTarget.born);
        g.reactionTimes.push(reaction);

        g.targetsHit++;
        g.streak++;
        if (g.streak > g.bestStreak) g.bestStreak = g.streak;

        const streakBonus = Math.floor(g.streak / 3) * 20;
        const pts = hitTarget.type.points + streakBonus;
        g.score += pts;

        playSfx('hit');

        // Add Web Line
        g.webLines.push({
          startX: shooterX,
          startY: shooterY,
          endX: hitTarget.x,
          endY: hitTarget.y,
          alpha: 1,
          born: now,
        });

        // Add Web Splatter Burst
        g.splatters.push({
          x: hitTarget.x,
          y: hitTarget.y,
          radius: hitTarget.radius * 1.5,
          color: hitTarget.type.color,
          born: now,
        });

        // Floating Text Ping
        g.floatingPings.push({
          x: hitTarget.x,
          y: hitTarget.y - 12,
          text: `+${pts}`,
          color: hitTarget.type.color,
          born: now,
        });

        g.targets.splice(hitIndex, 1);
        setHudStats({ score: g.score, streak: g.streak });
      } else {
        // --- MISS ---
        g.streak = 0;
        setHudStats((prev) => ({ ...prev, streak: 0 }));

        // Miss Web Line
        g.webLines.push({
          startX: shooterX,
          startY: shooterY,
          endX: clickX,
          endY: clickY,
          alpha: 0.7,
          born: now,
        });

        g.floatingPings.push({
          x: clickX,
          y: clickY - 8,
          text: 'MISS',
          color: 'rgba(207, 207, 207, 0.6)',
          born: now,
        });
      }
    };

    canvas.addEventListener('mousedown', handleCanvasClick);

    // 60 FPS Render Pipeline
    const render = () => {
      const now = performance.now();
      const g = gameRef.current;

      ctx.clearRect(0, 0, width, height);

      // 1. Tactical Arena Backdrop
      ctx.fillStyle = '#090B10';
      ctx.fillRect(0, 0, width, height);

      // Spec-Ops Crosshair Grid
      ctx.strokeStyle = 'rgba(127, 73, 180, 0.07)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (g.running) {
        // Spawn Targets by Interval
        if (now - g.lastSpawn > g.nextSpawnInterval) {
          spawnTarget();
          g.lastSpawn = now;
          g.nextSpawnInterval = 450 + Math.random() * 350;
        }

        // 2. Update & Draw Targets
        for (let i = g.targets.length - 1; i >= 0; i--) {
          const t = g.targets[i];
          const age = now - t.born;

          if (age >= t.lifespan) {
            // Target expired without click
            g.targets.splice(i, 1);
            continue;
          }

          // Move kinematic targets
          if (t.type.id === 'MOVING') {
            t.x += t.vx;
            t.y += t.vy;
            if (t.x < 30 || t.x > width - 30) t.vx *= -1;
            if (t.y < 30 || t.y > height - 60) t.vy *= -1;
          }

          const progress = age / t.lifespan;
          const outerR = t.radius * (1 - progress);

          // Outer Shrinking Expiry Ring
          ctx.beginPath();
          ctx.arc(t.x, t.y, Math.max(outerR, 2), 0, Math.PI * 2);
          ctx.strokeStyle = t.type.ringColor;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Inner Core Target
          ctx.beginPath();
          ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(20, 22, 28, 0.7)';
          ctx.fill();
          ctx.strokeStyle = t.type.color;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Reticle Accents
          if (t.type.id === 'FLASH') {
            ctx.fillStyle = '#00F0FF';
            ctx.font = '700 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✦', t.x, t.y);
          } else {
            ctx.beginPath();
            ctx.arc(t.x, t.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = t.type.color;
            ctx.fill();
          }
        }
      }

      // 3. Draw Web Lines (Fast Dissolving Tensile Cords)
      for (let i = g.webLines.length - 1; i >= 0; i--) {
        const web = g.webLines[i];
        const age = now - web.born;
        const dur = 180; // milliseconds alive

        if (age >= dur) {
          g.webLines.splice(i, 1);
          continue;
        }

        const alpha = 1 - age / dur;
        ctx.beginPath();
        ctx.moveTo(web.startX, web.startY);
        ctx.lineTo(web.endX, web.endY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = '#7F49B4';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // 4. Draw Radial Web Splatter Bursts
      for (let i = g.splatters.length - 1; i >= 0; i--) {
        const s = g.splatters[i];
        const age = now - s.born;
        const dur = 280;

        if (age >= dur) {
          g.splatters.splice(i, 1);
          continue;
        }

        const alpha = 1 - age / dur;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.lineWidth = 1;

        // Draw 6-spoke web pattern
        const spokes = 6;
        for (let sp = 0; sp < spokes; sp++) {
          const ang = (Math.PI * 2 * sp) / spokes;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(ang) * s.radius, Math.sin(ang) * s.radius);
          ctx.stroke();
        }

        // Interstitial web cross-strings
        ctx.beginPath();
        ctx.arc(0, 0, s.radius * 0.55, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 5. Draw Floating Ping Text
      for (let i = g.floatingPings.length - 1; i >= 0; i--) {
        const p = g.floatingPings[i];
        const age = now - p.born;
        const dur = 400;

        if (age >= dur) {
          g.floatingPings.splice(i, 1);
          continue;
        }

        const alpha = 1 - age / dur;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.font = '700 13px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(p.text, p.x, p.y - (age / dur) * 16);
        ctx.globalAlpha = 1;
      }

      // 6. Bottom Web-Shooter Nozzle HUD
      ctx.fillStyle = '#141414';
      ctx.strokeStyle = 'rgba(207, 207, 207, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(width / 2, height, 16, Math.PI, 0);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#7F49B4';
      ctx.beginPath();
      ctx.arc(width / 2, height - 2, 4, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 900;
      height = canvas.height = 520;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleCanvasClick);
    };
  }, []);

  return (
    <section id="arcade" className={styles.webAimSection} aria-label="Web Aim Reaction Arena">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.telemetryTag}>
            <span className={styles.pulseDot} />
            <span>AIM_LAB // PROTOCOL_05</span>
          </div>
          <h2 className={styles.title}>WEB//AIM</h2>
          <p className={styles.subtitle}>
            Valorant-calibrated reflex trainer with high-velocity web dynamics. Hit reactive targets, maintain your streak, and calibrate precision telemetry.
          </p>
        </div>

        {/* Tactical Arena Cabinet */}
        <div className={styles.arenaCabinet}>
          {/* Top HUD Bar */}
          <div className={styles.hudBar}>
            <div className={styles.metricGroup}>
              <span className={styles.metricLabel}>SCORE</span>
              <span className={styles.metricValue}>
                {String(hudStats.score).padStart(4, '0')}
              </span>
            </div>

            <div className={styles.metricGroup}>
              <span className={styles.metricLabel}>STREAK</span>
              <span className={styles.streakValue}>x{hudStats.streak}</span>
            </div>

            <div className={styles.metricGroup}>
              <span className={styles.metricLabel}>TIME REMAINING</span>
              <span className={styles.timerValue}>{timeLeft}s</span>
            </div>
          </div>

          {/* Interactive Canvas Viewport */}
          <div className={styles.canvasContainer}>
            <canvas ref={canvasRef} className={styles.canvasStage} />

            {/* Idle Launcher State */}
            {gameState === 'idle' && (
              <div className={styles.modalOverlay}>
                <div className={styles.launcherCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardBadge}>TACTICAL REFLEX LAB</span>
                    <h3 className={styles.cardTitle}>READY FOR ENGAGEMENT?</h3>
                  </div>
                  <p className={styles.cardDesc}>
                    Click anywhere to fire a high-tension web. Eliminate Normal, Flash, Moving, and Micro nodes before they decay.
                  </p>
                  <button type="button" onClick={startSession} className={styles.engageBtn}>
                    ENTER TRAINING [30s] ▹
                  </button>
                </div>
              </div>
            )}

            {/* Final Telemetry Dossier */}
            {gameState === 'summary' && finalReport && (
              <div className={styles.modalOverlay}>
                <div className={styles.reportCard}>
                  <div className={styles.reportHeader}>
                    <span className={styles.reportTitle}>MISSION DEBRIEF // TELEMETRY</span>
                    <span className={styles.rankPill}>RANK {finalReport.rank}</span>
                  </div>

                  <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>FINAL SCORE</span>
                      <span className={styles.statVal}>{finalReport.score}</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>ACCURACY</span>
                      <span className={styles.statVal}>{finalReport.accuracy}%</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>AVG REACTION</span>
                      <span className={styles.statVal}>{finalReport.avgReaction}ms</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>TARGETS HIT</span>
                      <span className={styles.statVal}>
                        {finalReport.hits}/{finalReport.totalSpawned}
                      </span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>BEST STREAK</span>
                      <span className={styles.statVal}>{finalReport.bestStreak}</span>
                    </div>
                  </div>

                  <div className={styles.actionRow}>
                    <button type="button" onClick={startSession} className={styles.engageBtn}>
                      PLAY AGAIN ↺
                    </button>
                    <button
                      type="button"
                      onClick={() => setGameState('idle')}
                      className={styles.exitBtn}
                    >
                      EXIT ARENA
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Legend */}
          <div className={styles.legendBar}>
            <div className={styles.targetLegend}>
              <span className={styles.legendDot} style={{ background: '#FFFFFF' }} /> NORMAL
              <span className={styles.legendDot} style={{ background: '#00F0FF' }} /> FLASH (750ms)
              <span className={styles.legendDot} style={{ background: '#FFA116' }} /> MOVING
              <span className={styles.legendDot} style={{ background: '#FF3344' }} /> MICRO
            </div>
            <span className={styles.shooterReady}>[ WEB SHOOTER: CALIBRATED ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAim;
