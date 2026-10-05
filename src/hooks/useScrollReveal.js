import { useEffect } from 'react';
import { animate } from 'animejs';

/**
 * useScrollReveal
 * Observes elements with the `.reveal-on-scroll` class and reveals them
 * with a subtle, professional fade-and-translate animation as they enter viewport.
 * Strictly respects prefers-reduced-motion and cleans up observers.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    if (elements.length === 0) return;

    if (prefersReducedMotion) {
      elements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // Prepare initial state
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'none';
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            obs.unobserve(target);

            animate(target, {
              opacity: [0, 1],
              translateY: [22, 0],
              duration: 550,
              ease: 'outCubic',
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
};
