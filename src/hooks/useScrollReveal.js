import { useEffect } from 'react';
import { animate, stagger } from 'animejs';

export const useScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (!prefersReducedMotion) {
      elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
      });
    }

    const observer = new IntersectionObserver((entries, obs) => {
      const intersecting = entries.filter(e => e.isIntersecting).map(e => e.target);
      if (intersecting.length > 0) {
        if (prefersReducedMotion) {
          intersecting.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
        } else {
          animate(intersecting, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            ease: 'outExpo',
            delay: stagger(80)
          });
        }
        intersecting.forEach(el => obs.unobserve(el));
      }
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
