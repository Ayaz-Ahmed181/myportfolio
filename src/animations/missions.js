import { animate, stagger } from 'animejs';

export const playMissionsReveal = (containerRef) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    const elements = containerRef.querySelectorAll('.mission-anim');
    elements.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    return null;
  }

  const elements = containerRef.querySelectorAll('.mission-anim');
  
  elements.forEach(el => {
    el.style.opacity = 0;
  });

  // Use Intersection Observer to trigger when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(elements, {
          opacity: [0, 1],
          translateY: [30, 0],
          ease: 'outExpo',
          duration: 1000,
          delay: stagger(100)
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(containerRef);
  return observer;
};
