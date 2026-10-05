import { useEffect } from 'react';

export const useScrollColor = () => {
  useEffect(() => {
    let ticking = false;

    const updateColor = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);

      let color = '#F2F3F5';
      if (progress < 0.25) {
        color = '#FFFFFF'; // Hero: Crisp White
      } else if (progress < 0.50) {
        color = '#F2F3F5'; // Missions: High-contrast Off-White
      } else if (progress < 0.75) {
        color = '#E5E7EB'; // Training / Arcade: Clean Slate White
      } else {
        color = '#F2F3F5'; // Contact/Footer: High-contrast Off-White
      }

      document.documentElement.style.setProperty('--dynamic-heading-color', color);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateColor);
        ticking = true;
      }
    };

    // Initialize immediately
    updateColor();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
};
