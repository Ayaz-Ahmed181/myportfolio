import { useEffect } from 'react';

export const useScrollColor = () => {
  useEffect(() => {
    let ticking = false;

    const updateColor = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);

      let color = '#FFD1DC';
      if (progress < 0.25) {
        color = '#FFD1DC'; // 0.0 - 0.25 (Hero): Blush Pink
      } else if (progress < 0.50) {
        color = '#D8B4FE'; // 0.25 - 0.50 (Missions): Soft Lilac
      } else if (progress < 0.75) {
        color = '#BAE6FD'; // 0.50 - 0.75 (Stats/Loadout): Icy Cyan
      } else {
        color = '#FEE2E2'; // 0.75 - 1.00 (Contact/Footer): Warm Pearl Rose
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
