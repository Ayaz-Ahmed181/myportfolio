import { useEffect } from 'react';

// Color stops based strictly on the palette:
// #CFCFCF = rgb(207, 207, 207)
// #7F49B4 = rgb(127, 73, 180)
const COLOR_STOPS = [
  { stop: 0.00, color: [207, 207, 207] }, // 0% (Hero): Silver #CFCFCF
  { stop: 0.35, color: [127, 73, 180] },  // 35% (Missions): Violet #7F49B4
  { stop: 0.70, color: [207, 207, 207] }, // 70% (Training): Silver #CFCFCF
  { stop: 1.00, color: [127, 73, 180] }   // 100% (Contact): Violet #7F49B4
];

export const useScrollFontColor = () => {
  useEffect(() => {
    let ticking = false;

    const lerp = (start, end, factor) => Math.round(start + (end - start) * factor);

    const updateColor = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const scrollHeight = (doc.scrollHeight || body.scrollHeight) - window.innerHeight;

      if (scrollHeight <= 0) return;

      const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);

      let startStop = COLOR_STOPS[0];
      let endStop = COLOR_STOPS[COLOR_STOPS.length - 1];

      for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
        if (progress >= COLOR_STOPS[i].stop && progress <= COLOR_STOPS[i + 1].stop) {
          startStop = COLOR_STOPS[i];
          endStop = COLOR_STOPS[i + 1];
          break;
        }
      }

      const range = endStop.stop - startStop.stop;
      const factor = range === 0 ? 0 : (progress - startStop.stop) / range;

      const r = lerp(startStop.color[0], endStop.color[0], factor);
      const g = lerp(startStop.color[1], endStop.color[1], factor);
      const b = lerp(startStop.color[2], endStop.color[2], factor);

      doc.style.setProperty('--dynamic-font-color', `rgb(${r}, ${g}, ${b})`);
      doc.style.setProperty('--dynamic-font-glow', `rgba(${r}, ${g}, ${b}, 0.4)`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateColor);
        ticking = true;
      }
    };

    updateColor();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
};
