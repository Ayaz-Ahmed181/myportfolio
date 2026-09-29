import { animate, stagger } from 'animejs';

export const playBootAnimation = (containerRef) => {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // If reduced motion, ensure elements are visible immediately
    const elements = containerRef.querySelectorAll('.hero-anim');
    elements.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    return;
  }

  const elements = containerRef.querySelectorAll('.hero-anim');
  
  // Set initial state
  elements.forEach(el => {
    el.style.opacity = 0;
  });

  animate(elements, {
    opacity: [0, 1],
    translateY: [20, 0],
    ease: 'outExpo',
    duration: 1000,
    delay: stagger(150, { start: 200 })
  });
};
